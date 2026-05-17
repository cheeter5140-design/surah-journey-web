import { useEffect, useState, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const KEY = "qpath_progress_v1";

export interface Progress {
  completed: number[];
  xp: number;
  streak: number;
  lastActive: string; // YYYY-MM-DD
}

const initial: Progress = { completed: [], xp: 0, streak: 0, lastActive: "" };

function readLocal(): Progress {
  if (typeof window === "undefined") return initial;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initial;
    return { ...initial, ...JSON.parse(raw) };
  } catch {
    return initial;
  }
}

function writeLocal(p: Progress) {
  if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(p));
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function isYesterday(prev: string) {
  if (!prev) return false;
  const d = new Date(prev + "T00:00:00");
  const t = new Date(todayStr() + "T00:00:00");
  return (t.getTime() - d.getTime()) / 86400000 === 1;
}

async function fetchRemote(userId: string): Promise<Progress | null> {
  const { data, error } = await supabase
    .from("user_progress")
    .select("completed, xp, streak, last_active")
    .eq("user_id", userId)
    .maybeSingle();
  if (error || !data) return null;
  return {
    completed: data.completed ?? [],
    xp: data.xp ?? 0,
    streak: data.streak ?? 0,
    lastActive: data.last_active ?? "",
  };
}

async function pushRemote(userId: string, p: Progress) {
  await supabase.from("user_progress").upsert(
    {
      user_id: userId,
      completed: p.completed,
      xp: p.xp,
      streak: p.streak,
      last_active: p.lastActive || null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
}

export function useProgress() {
  const { user, ready: authReady } = useAuth();
  const [progress, setProgress] = useState<Progress>(initial);
  const [ready, setReady] = useState(false);
  const userIdRef = useRef<string | null>(null);

  // Load: local + remote merge when user is known
  useEffect(() => {
    if (!authReady) return;
    let cancelled = false;
    (async () => {
      const local = readLocal();
      if (!user) {
        if (!cancelled) {
          setProgress(local);
          setReady(true);
          userIdRef.current = null;
        }
        return;
      }
      userIdRef.current = user.id;
      const remote = await fetchRemote(user.id);
      // Merge: union completed, max xp/streak, latest lastActive
      const merged: Progress = remote
        ? {
            completed: Array.from(new Set([...(remote.completed ?? []), ...local.completed])).sort((a, b) => a - b),
            xp: Math.max(remote.xp, local.xp),
            streak: Math.max(remote.streak, local.streak),
            lastActive: local.lastActive > remote.lastActive ? local.lastActive : remote.lastActive,
          }
        : local;
      if (cancelled) return;
      setProgress(merged);
      writeLocal(merged);
      if (remote) await pushRemote(user.id, merged);
      setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [user, authReady]);

  const update = useCallback((updater: (p: Progress) => Progress) => {
    setProgress((prev) => {
      const next = updater(prev);
      writeLocal(next);
      const uid = userIdRef.current;
      if (uid) pushRemote(uid, next).catch(() => {});
      return next;
    });
  }, []);

  const completeSurah = useCallback(
    (id: number, xpGain: number) => {
      update((p) => {
        const today = todayStr();
        let streak = p.streak;
        if (p.lastActive !== today) {
          streak = isYesterday(p.lastActive) ? streak + 1 : 1;
        }
        if (streak === 0) streak = 1;
        const completed = p.completed.includes(id) ? p.completed : [...p.completed, id];
        return { completed, xp: p.xp + xpGain, streak, lastActive: today };
      });
    },
    [update]
  );

  return { progress, ready, completeSurah };
}

export function isUnlocked(surahId: number, completed: number[]): boolean {
  if (surahId === 1) return true;
  return completed.includes(surahId - 1);
}
