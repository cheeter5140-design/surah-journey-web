import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Coins, Gift, Play, Sparkles, Check, Lock, Calendar, Target } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import {
  useGame,
  getDailyTasks,
  allDailyDone,
  weeklyDone,
  WEEKLY_GOALS,
} from "@/lib/game";
import { rollChest, rarityColor, rarityLabel, type ChestReward } from "@/lib/wardrobe";
import { RewardedAdModal } from "@/components/RewardedAdModal";
import { AdSenseBanner } from "@/components/AdSenseBanner";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const Route = createFileRoute("/chests")({
  head: () => ({
    meta: [
      { title: "Coffres — Nour" },
      { name: "description", content: "Ouvre des coffres en complétant tes tâches du jour ou en regardant une pub." },
    ],
  }),
  component: ChestsPage,
});

function ChestsPage() {
  const { user, ready: authReady } = useAuth();
  const navigate = useNavigate();
  const { state, ready, applyReward, canOpenAdChest, adChestsRemaining, maxAdChestsPerDay } = useGame();
  const [adOpen, setAdOpen] = useState(false);
  const [reward, setReward] = useState<{ kind: "daily" | "weekly" | "ad"; r: ChestReward } | null>(null);

  useEffect(() => {
    if (authReady && !user) navigate({ to: "/login" });
  }, [authReady, user, navigate]);

  if (!ready) return null;

  const tasks = getDailyTasks(state);
  const dailyReady = allDailyDone(state) && !state.daily.chestClaimed;
  const weeklyReady = weeklyDone(state) && !state.weekly.chestClaimed;
  const weeklyPct = Math.min(
    100,
    Math.round(((state.weekly.lessonsDone / WEEKLY_GOALS.lessons) * 50) + ((state.weekly.xpEarned / WEEKLY_GOALS.xp) * 50))
  );

  const openChest = (kind: "daily" | "weekly" | "ad") => {
    const r = rollChest(state.inventory, state.gender, kind);
    applyReward(r, kind);
    setReward({ kind, r });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Retour
          </Link>
          <Link to="/wardrobe" className="inline-flex items-center gap-1 text-sm font-bold text-primary">
            <Sparkles className="w-4 h-4" /> Vestiaire
          </Link>
        </div>

        <header className="text-center">
          <h1 className="font-display text-3xl font-bold">Coffres & récompenses</h1>
          <p className="text-muted-foreground text-sm mt-1">Complète tes tâches ou regarde une pub pour gagner.</p>
          <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full font-bold mt-3">
            <Coins className="w-4 h-4 text-gold" fill="currentColor" /> {state.coins} pièces
          </div>
        </header>

        {/* DAILY */}
        <section className="rounded-3xl border border-border bg-card p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-bold">Tâches du jour</h2>
          </div>
          <ul className="space-y-2">
            {tasks.map((t) => (
              <li key={t.id} className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full grid place-items-center shrink-0 ${
                    t.done ? "bg-primary text-primary-foreground" : "bg-secondary"
                  }`}
                >
                  {t.done ? <Check className="w-3.5 h-3.5" /> : <span className="text-xs">·</span>}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{t.label}</div>
                  <Progress value={(t.current / t.goal) * 100} className="h-1.5 mt-1" />
                </div>
                <div className="text-xs text-muted-foreground tabular-nums">
                  {t.current}/{t.goal}
                </div>
              </li>
            ))}
          </ul>

          <ChestButton
            ready={dailyReady}
            claimed={state.daily.chestClaimed}
            label="Coffre quotidien"
            sublabel={state.daily.chestClaimed ? "Reviens demain !" : dailyReady ? "Prêt à ouvrir" : "Termine toutes les tâches"}
            onOpen={() => openChest("daily")}
          />
        </section>

        {/* WEEKLY */}
        <section className="rounded-3xl border border-border bg-card p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-bold">Objectif de la semaine</h2>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Leçons {state.weekly.lessonsDone}/{WEEKLY_GOALS.lessons}</span>
              <span>XP {state.weekly.xpEarned}/{WEEKLY_GOALS.xp}</span>
            </div>
            <Progress value={weeklyPct} className="h-2" />
          </div>

          <ChestButton
            ready={weeklyReady}
            claimed={state.weekly.chestClaimed}
            label="Grand coffre hebdo"
            sublabel={state.weekly.chestClaimed ? "Réclamé cette semaine" : weeklyReady ? "Prêt à ouvrir !" : "Atteins l'objectif"}
            onOpen={() => openChest("weekly")}
            big
          />
        </section>

        {/* AD */}
        <section className="rounded-3xl border border-border bg-card p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Play className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-bold">Coffre publicitaire</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Regarde une courte pub pour gagner un petit coffre. {adChestsRemaining}/{maxAdChestsPerDay} disponibles aujourd'hui.
          </p>
          <Button
            disabled={!canOpenAdChest}
            onClick={() => setAdOpen(true)}
            className="w-full h-12 rounded-xl gap-2"
          >
            {canOpenAdChest ? <Play className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            {canOpenAdChest ? "Regarder une pub" : "Limite quotidienne atteinte"}
          </Button>
        </section>

        <AdSenseBanner />
      </main>

      <RewardedAdModal
        open={adOpen}
        onClose={() => setAdOpen(false)}
        onReward={() => {
          openChest("ad");
          toast.success("Coffre obtenu !");
        }}
      />

      <RewardDialog reward={reward} onClose={() => setReward(null)} />
    </div>
  );
}

function ChestButton({
  ready,
  claimed,
  label,
  sublabel,
  onOpen,
  big = false,
}: {
  ready: boolean;
  claimed: boolean;
  label: string;
  sublabel: string;
  onOpen: () => void;
  big?: boolean;
}) {
  return (
    <button
      disabled={!ready}
      onClick={onOpen}
      className={`w-full rounded-2xl p-4 flex items-center gap-4 transition active:translate-y-0.5 ${
        ready
          ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-node)] animate-pulse"
          : claimed
          ? "bg-secondary text-muted-foreground"
          : "bg-secondary text-muted-foreground opacity-70"
      }`}
    >
      <div className={`${big ? "text-5xl" : "text-4xl"} drop-shadow`}>
        {claimed ? "📭" : ready ? "🎁" : "🔒"}
      </div>
      <div className="text-left flex-1">
        <div className="font-bold">{label}</div>
        <div className="text-xs opacity-90">{sublabel}</div>
      </div>
      {ready && <Gift className="w-5 h-5" />}
    </button>
  );
}

function RewardDialog({
  reward,
  onClose,
}: {
  reward: { kind: "daily" | "weekly" | "ad"; r: ChestReward } | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!reward} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-sm text-center">
        <div className="text-7xl mx-auto animate-[bounce-in_0.5s]">🎁</div>
        <h3 className="font-display text-2xl font-bold">Tu as gagné !</h3>
        <div className="flex items-center justify-center gap-2 text-lg font-bold text-gold-foreground">
          <Coins className="w-5 h-5 text-gold" fill="currentColor" /> +{reward?.r.coins} pièces
        </div>
        {reward?.r.item && (
          <div className="rounded-2xl border-2 p-4" style={{ borderColor: rarityColor(reward.r.item.rarity) }}>
            <div
              className="w-20 h-20 mx-auto rounded-xl grid place-items-center text-3xl"
              style={{
                background: reward.r.item.secondary
                  ? `linear-gradient(135deg, ${reward.r.item.color}, ${reward.r.item.secondary})`
                  : reward.r.item.color,
              }}
            >
              {reward.r.item.emoji ?? ""}
            </div>
            <div className="mt-2 font-bold">{reward.r.item.name}</div>
            <div
              className="text-[10px] uppercase tracking-wide font-bold"
              style={{ color: rarityColor(reward.r.item.rarity) }}
            >
              {rarityLabel(reward.r.item.rarity)}
            </div>
          </div>
        )}
        <Button onClick={onClose} className="w-full">Génial !</Button>
      </DialogContent>
    </Dialog>
  );
}
