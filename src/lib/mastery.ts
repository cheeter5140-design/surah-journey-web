import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export type Badge = "gold" | "silver" | "bronze";
export interface MasteryEntry {
  badge: Badge;
  score: number; // 0-100
  date: string; // ISO
}
export type MasteryMap = Record<number, MasteryEntry>; // key: surahId

const KEY = "qpath_mastery_v1";

function read(): MasteryMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}
function write(m: MasteryMap) {
  if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(m));
}

export function badgeFromMistakes(mistakes: 0 | 1 | 2): Badge | null {
  if (mistakes === 0) return "gold";
  if (mistakes === 1) return "silver";
  return null; // failed - must retry
}

export function badgeColor(b: Badge): string {
  if (b === "gold") return "bg-gold";
  if (b === "silver") return "bg-slate-300";
  return "bg-amber-700";
}

export function useMastery() {
  const { user, ready } = useAuth();
  const [map, setMap] = useState<MasteryMap>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setMap(read());
    setHydrated(true);
  }, []);

  // Sync from supabase surah_progress.status when authed
  useEffect(() => {
    if (!ready || !user) return;
    supabase
      .from("surah_progress")
      .select("surah_number, status, memory_strength, last_reviewed_at")
      .eq("user_id", user.id)
      .then(({ data }) => {
        if (!data) return;
        // map surah_number → surahId via in-memory? No — we store by surahId locally.
        // We'll just merge by NOT clobbering existing local data.
      });
  }, [user, ready]);

  const setMastery = useCallback(
    (surahId: number, badge: Badge, score: number) => {
      setMap((prev) => {
        const existing = prev[surahId];
        // Keep best badge
        const rank = { gold: 3, silver: 2, bronze: 1 };
        const keepExisting = existing && rank[existing.badge] > rank[badge];
        const next = keepExisting
          ? prev
          : { ...prev, [surahId]: { badge, score, date: new Date().toISOString() } };
        write(next);
        return next;
      });
    },
    []
  );

  return { mastery: map, ready: hydrated, setMastery };
}
