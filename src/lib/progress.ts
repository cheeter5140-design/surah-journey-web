import { useEffect, useState, useCallback } from "react";

const KEY = "qpath_progress_v1";

export interface Progress {
  completed: number[]; // surah ids completed
  xp: number;
  streak: number;
  lastActive: string; // ISO date (YYYY-MM-DD)
}

const initial: Progress = { completed: [], xp: 0, streak: 0, lastActive: "" };

function read(): Progress {
  if (typeof window === "undefined") return initial;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initial;
    return { ...initial, ...JSON.parse(raw) };
  } catch {
    return initial;
  }
}

function write(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function isYesterday(prev: string) {
  if (!prev) return false;
  const d = new Date(prev + "T00:00:00");
  const t = new Date(todayStr() + "T00:00:00");
  const diff = (t.getTime() - d.getTime()) / 86400000;
  return diff === 1;
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(read());
    setReady(true);
  }, []);

  const update = useCallback((updater: (p: Progress) => Progress) => {
    setProgress((prev) => {
      const next = updater(prev);
      write(next);
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
