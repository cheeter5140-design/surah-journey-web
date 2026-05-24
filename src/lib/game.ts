import { useEffect, useState, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/lib/progress";
import { defaultEquipped, type Gender, type Slot, type ChestReward } from "@/lib/wardrobe";

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}
function weekStr() {
  const d = new Date();
  const onejan = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(((d.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${week}`;
}

export interface DailyTask {
  id: string;
  label: string;
  goal: number;
  current: number;
  done: boolean;
}

export interface DailyState {
  date: string;
  xpEarned: number;
  lessonsDone: number;
  streakKept: boolean;
  chestClaimed: boolean;
}

export interface WeeklyState {
  week: string;
  xpEarned: number;
  lessonsDone: number;
  chestClaimed: boolean;
}

export interface GameState {
  coins: number;
  inventory: string[];
  equipped: Record<Slot, string>;
  gender: Gender;
  daily: DailyState;
  weekly: WeeklyState;
  adChestsToday: number;
  adChestsDate: string;
}

const DEFAULT_GENDER: Gender = "male";

const initial: GameState = {
  coins: 0,
  inventory: [],
  equipped: defaultEquipped(DEFAULT_GENDER),
  gender: DEFAULT_GENDER,
  daily: { date: "", xpEarned: 0, lessonsDone: 0, streakKept: false, chestClaimed: false },
  weekly: { week: "", xpEarned: 0, lessonsDone: 0, chestClaimed: false },
  adChestsToday: 0,
  adChestsDate: "",
};

const MAX_AD_CHESTS_PER_DAY = 5;

export const DAILY_GOALS = { lessons: 1, xp: 50, streak: true };
export const WEEKLY_GOALS = { lessons: 7, xp: 300 };

function normalize(g: Partial<GameState>): GameState {
  const today = todayStr();
  const week = weekStr();
  const daily: DailyState =
    g.daily && g.daily.date === today
      ? { ...initial.daily, ...g.daily }
      : { ...initial.daily, date: today };
  const weekly: WeeklyState =
    g.weekly && g.weekly.week === week
      ? { ...initial.weekly, ...g.weekly }
      : { ...initial.weekly, week };
  const gender = (g.gender ?? DEFAULT_GENDER) as Gender;
  const equipped = { ...defaultEquipped(gender), ...(g.equipped ?? {}) } as Record<Slot, string>;
  return {
    coins: g.coins ?? 0,
    inventory: g.inventory ?? [],
    equipped,
    gender,
    daily,
    weekly,
    adChestsToday: g.adChestsDate === today ? g.adChestsToday ?? 0 : 0,
    adChestsDate: today,
  };
}

export function getDailyTasks(s: GameState): DailyTask[] {
  return [
    {
      id: "lesson",
      label: "Termine 1 leçon",
      goal: DAILY_GOALS.lessons,
      current: Math.min(s.daily.lessonsDone, DAILY_GOALS.lessons),
      done: s.daily.lessonsDone >= DAILY_GOALS.lessons,
    },
    {
      id: "xp",
      label: `Gagne ${DAILY_GOALS.xp} XP`,
      goal: DAILY_GOALS.xp,
      current: Math.min(s.daily.xpEarned, DAILY_GOALS.xp),
      done: s.daily.xpEarned >= DAILY_GOALS.xp,
    },
    {
      id: "streak",
      label: "Maintiens ta série",
      goal: 1,
      current: s.daily.streakKept ? 1 : 0,
      done: s.daily.streakKept,
    },
  ];
}

export function allDailyDone(s: GameState): boolean {
  return getDailyTasks(s).every((t) => t.done);
}

export function weeklyDone(s: GameState): boolean {
  return s.weekly.lessonsDone >= WEEKLY_GOALS.lessons && s.weekly.xpEarned >= WEEKLY_GOALS.xp;
}

export function useGame() {
  const { user, ready: authReady } = useAuth();
  const { progress } = useProgress();
  const [state, setState] = useState<GameState>(initial);
  const [ready, setReady] = useState(false);
  const uidRef = useRef<string | null>(null);

  const push = useCallback(async (s: GameState) => {
    const uid = uidRef.current;
    if (!uid) return;
    await supabase.from("user_progress").upsert(
      {
        user_id: uid,
        coins: s.coins,
        inventory: s.inventory as any,
        equipped: s.equipped as any,
        daily_state: { ...s.daily, gender: s.gender } as any,
        weekly_state: s.weekly as any,
        ad_chests_today: s.adChestsToday,
        ad_chests_date: s.adChestsDate || null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" }
    );
  }, []);

  useEffect(() => {
    if (!authReady || !user) {
      setReady(true);
      return;
    }
    uidRef.current = user.id;
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from("user_progress")
        .select("coins, inventory, equipped, daily_state, weekly_state, ad_chests_today, ad_chests_date")
        .eq("user_id", user.id)
        .maybeSingle();
      if (cancelled) return;
      const ds = (data?.daily_state as any) ?? {};
      const merged = normalize({
        coins: data?.coins ?? 0,
        inventory: (data?.inventory as string[]) ?? [],
        equipped: (data?.equipped as Record<Slot, string>) ?? undefined,
        gender: (ds.gender as Gender) ?? DEFAULT_GENDER,
        daily: data?.daily_state as DailyState | undefined,
        weekly: data?.weekly_state as WeeklyState | undefined,
        adChestsToday: data?.ad_chests_today ?? 0,
        adChestsDate: data?.ad_chests_date ?? "",
      });
      setState(merged);
      setReady(true);
      push(merged).catch(() => {});
    })();
    return () => {
      cancelled = true;
    };
  }, [authReady, user, push]);

  const update = useCallback(
    (updater: (s: GameState) => GameState) => {
      setState((prev) => {
        const next = normalize(updater(prev));
        push(next).catch(() => {});
        return next;
      });
    },
    [push]
  );

  const setGender = useCallback(
    (g: Gender) =>
      update((s) => ({
        ...s,
        gender: g,
        equipped: { ...defaultEquipped(g), accessory: s.equipped.accessory, background: s.equipped.background },
      })),
    [update]
  );

  const equip = useCallback(
    (slot: Slot, itemId: string) => update((s) => ({ ...s, equipped: { ...s.equipped, [slot]: itemId } })),
    [update]
  );

  const buyItem = useCallback(
    (itemId: string, price: number) => {
      let ok = false;
      update((s) => {
        if (s.inventory.includes(itemId) || s.coins < price) return s;
        ok = true;
        return { ...s, coins: s.coins - price, inventory: [...s.inventory, itemId] };
      });
      return ok;
    },
    [update]
  );

  const trackLesson = useCallback(
    (xpGained: number) =>
      update((s) => ({
        ...s,
        daily: {
          ...s.daily,
          xpEarned: s.daily.xpEarned + xpGained,
          lessonsDone: s.daily.lessonsDone + 1,
          streakKept: true,
        },
        weekly: {
          ...s.weekly,
          xpEarned: s.weekly.xpEarned + xpGained,
          lessonsDone: s.weekly.lessonsDone + 1,
        },
      })),
    [update]
  );

  const applyReward = useCallback(
    (reward: ChestReward, kind: "daily" | "weekly" | "ad") => {
      update((s) => {
        const inv = reward.item && !s.inventory.includes(reward.item.id)
          ? [...s.inventory, reward.item.id]
          : s.inventory;
        return {
          ...s,
          coins: s.coins + reward.coins,
          inventory: inv,
          daily: kind === "daily" ? { ...s.daily, chestClaimed: true } : s.daily,
          weekly: kind === "weekly" ? { ...s.weekly, chestClaimed: true } : s.weekly,
          adChestsToday: kind === "ad" ? s.adChestsToday + 1 : s.adChestsToday,
        };
      });
    },
    [update]
  );

  const addCoins = useCallback((amount: number) => update((s) => ({ ...s, coins: s.coins + amount })), [update]);

  const canOpenAdChest = state.adChestsToday < MAX_AD_CHESTS_PER_DAY;
  const adChestsRemaining = MAX_AD_CHESTS_PER_DAY - state.adChestsToday;

  useEffect(() => {
    if (!ready) return;
    if (progress.lastActive === todayStr() && !state.daily.streakKept) {
      update((s) => ({ ...s, daily: { ...s.daily, streakKept: true } }));
    }
  }, [progress.lastActive, ready, update]);

  return {
    state,
    ready,
    setGender,
    equip,
    buyItem,
    trackLesson,
    applyReward,
    canOpenAdChest,
    adChestsRemaining,
    maxAdChestsPerDay: MAX_AD_CHESTS_PER_DAY,
  };
}
