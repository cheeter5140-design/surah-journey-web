import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X, Trophy, Star, Flame } from "lucide-react";
import { SURAHS } from "@/lib/surahs";
import { useProgress } from "@/lib/progress";
import { useGame } from "@/lib/game";
import { TopBar } from "@/components/TopBar";
import { ListenStep } from "@/components/lesson/ListenStep";
import { MatchStep } from "@/components/lesson/MatchStep";
import { FillBlankStep } from "@/components/lesson/FillBlankStep";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/lesson/$surahId")({
  head: () => ({
    meta: [
      { title: "Leçon — Nour" },
      { name: "description", content: "Apprends une sourate avec écoute, traduction et complétion." },
    ],
  }),
  component: LessonPage,
});

type Step = { kind: "listen" | "match" | "blank"; ayahIndex: number };

function buildSteps(ayahCount: number): Step[] {
  const steps: Step[] = [];
  for (let i = 0; i < ayahCount; i++) {
    steps.push({ kind: "listen", ayahIndex: i });
    steps.push({ kind: "match", ayahIndex: i });
    if (i < ayahCount - 1 || ayahCount === 1) steps.push({ kind: "blank", ayahIndex: i });
  }
  return steps;
}

function LessonPage() {
  const { surahId } = Route.useParams();
  const navigate = useNavigate();
  const surah = SURAHS.find((s) => s.id === Number(surahId));
  const { completeSurah, progress } = useProgress();

  const steps = useMemo(() => (surah ? buildSteps(surah.ayahs.length) : []), [surah]);
  const [stepIdx, setStepIdx] = useState(0);
  const [done, setDone] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  if (!surah) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="text-center">
          <p className="text-muted-foreground">Sourate introuvable</p>
          <Link to="/" className="text-primary underline">Retour</Link>
        </div>
      </div>
    );
  }

  const next = (correct = true) => {
    if (correct) setCorrectCount((c) => c + 1);
    if (stepIdx + 1 >= steps.length) {
      const xpGain = 10 + correctCount * 2;
      completeSurah(surah.id, xpGain);
      setDone(true);
    } else {
      setStepIdx((i) => i + 1);
    }
  };

  if (done) {
    const xpGain = 10 + correctCount * 2;
    return (
      <div className="min-h-screen grid place-items-center px-6 bg-[image:var(--gradient-bg)]">
        <div className="max-w-md w-full text-center flex flex-col items-center gap-6 animate-[bounce-in_0.6s]">
          <div className="w-32 h-32 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center shadow-[var(--shadow-node)]">
            <Trophy className="w-16 h-16 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-4xl font-bold">Leçon terminée !</h1>
            <p className="text-muted-foreground mt-2">Tu as appris la sourate {surah.name}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <Stat icon={<Star className="w-5 h-5 text-gold" fill="currentColor" />} value={`+${xpGain}`} label="XP gagnés" />
            <Stat icon={<Flame className="w-5 h-5 text-orange-500" fill="currentColor" />} value={progress.streak} label="jour(s) d'affilée" />
          </div>
          <Button asChild className="w-full h-14 rounded-2xl font-bold uppercase tracking-wide shadow-[var(--shadow-node)] active:translate-y-1">
            <Link to="/">Continuer</Link>
          </Button>
        </div>
      </div>
    );
  }

  const step = steps[stepIdx];
  const ayah = surah.ayahs[step.ayahIndex];
  const progressPct = (stepIdx / steps.length) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div className="max-w-2xl w-full mx-auto px-4 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate({ to: "/" })}
          aria-label="Quitter"
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-[image:var(--gradient-primary)] rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-6">
        {step.kind === "listen" && (
          <ListenStep surah={surah} ayah={ayah} ayahIndex={step.ayahIndex} onContinue={() => next(true)} />
        )}
        {step.kind === "match" && <MatchStep ayah={ayah} onContinue={(c) => next(c)} />}
        {step.kind === "blank" && <FillBlankStep ayah={ayah} onContinue={(c) => next(c)} />}
      </main>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) {
  return (
    <div className={cn("bg-card border-2 border-border rounded-2xl p-4 flex flex-col items-center gap-1")}>
      {icon}
      <div className="font-display text-2xl font-bold tabular-nums">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
