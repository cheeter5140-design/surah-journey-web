import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X, Trophy, Medal, Award, Timer, Mic } from "lucide-react";
import { SURAHS } from "@/lib/surahs";
import { FillBlankStep } from "@/components/lesson/FillBlankStep";
import { Button } from "@/components/ui/button";
import { useMastery, badgeFromMistakes, type Badge } from "@/lib/mastery";
import { useProgress } from "@/lib/progress";
import { useGame } from "@/lib/game";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/exam/$surahId")({
  head: () => ({ meta: [{ title: "Évaluation finale — Nour" }] }),
  component: ExamPage,
});

type Phase = "intro" | "blanks" | "recite" | "self-assess" | "result";

function ExamPage() {
  const { surahId } = Route.useParams();
  const navigate = useNavigate();
  const surah = SURAHS.find((s) => s.id === Number(surahId));
  const { setMastery } = useMastery();
  const { completeSurah } = useProgress();
  const { addCoins } = useGame();
  const { user } = useAuth();

  const [phase, setPhase] = useState<Phase>("intro");
  const [blankIdx, setBlankIdx] = useState(0);
  const [blankErrors, setBlankErrors] = useState(0);
  const [reciteSeconds, setReciteSeconds] = useState(0);
  const [reciteRunning, setReciteRunning] = useState(false);
  const [badge, setBadge] = useState<Badge | null>(null);

  const blankAyahs = useMemo(() => surah?.ayahs ?? [], [surah]);

  if (!surah) {
    return (
      <div className="min-h-screen grid place-items-center">
        <Link to="/" className="text-primary underline">Retour</Link>
      </div>
    );
  }

  // Timer
  useMemo(() => {
    if (!reciteRunning) return;
    const id = setInterval(() => setReciteSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reciteRunning]);

  const handleBlankContinue = (correct: boolean) => {
    if (!correct) setBlankErrors((e) => e + 1);
    if (blankIdx + 1 >= blankAyahs.length) setPhase("recite");
    else setBlankIdx((i) => i + 1);
  };

  const finishExam = (recitationMistakes: 0 | 1 | 2) => {
    // Mistakes total = blank errors + recitation mistakes (capped)
    const total = Math.min(2, blankErrors + recitationMistakes) as 0 | 1 | 2;
    const b = badgeFromMistakes(total);
    setBadge(b);
    setPhase("result");
    if (b) {
      setMastery(surah.id, b, b === "gold" ? 100 : b === "silver" ? 80 : 60);
      const xp = b === "gold" ? 50 : b === "silver" ? 30 : 15;
      const coins = b === "gold" ? 60 : 35;
      completeSurah(surah.id, xp);
      addCoins(coins);
      if (user) {
        const strength = b === "gold" ? 95 : b === "silver" ? 80 : 60;
        supabase.from("surah_progress").upsert(
          {
            user_id: user.id,
            surah_number: surah.number,
            verses_memorized: surah.ayahs.map((_, i) => i + 1),
            status: b,
            memory_strength: strength,
            last_reviewed_at: new Date().toISOString(),
          } as any,
          { onConflict: "user_id,surah_number" }
        ).then(() => {});
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-4">
          <button onClick={() => navigate({ to: "/" })} aria-label="Quitter">
            <X className="w-6 h-6 text-muted-foreground" />
          </button>
          <div className="flex-1">
            <div className="text-xs uppercase tracking-[0.18em] text-primary font-bold">
              Évaluation finale
            </div>
            <div className="font-display font-bold">{surah.name}</div>
          </div>
          <Trophy className="w-5 h-5 text-gold" />
        </div>
      </header>

      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-6">
        {phase === "intro" && (
          <div className="glass-panel rounded-3xl p-6 animate-fade-in-up text-center">
            <Award className="w-14 h-14 mx-auto text-gold" />
            <h1 className="font-display text-3xl font-bold mt-3">Prêt à valider {surah.name} ?</h1>
            <p className="text-muted-foreground mt-2">
              Réussis l'évaluation avec <span className="font-bold text-foreground">0 ou 1 erreur</span> pour
              débloquer la sourate suivante.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6 text-sm">
              <BadgeRow color="bg-gold" label="0 erreur" sub="Or" />
              <BadgeRow color="bg-slate-300" label="1 erreur" sub="Argent" />
              <BadgeRow color="bg-amber-700" label="2+ erreurs" sub="À refaire" />
            </div>
            <Button onClick={() => setPhase("blanks")} className="mt-6 w-full h-12 rounded-2xl font-bold uppercase">
              Commencer
            </Button>
          </div>
        )}

        {phase === "blanks" && (
          <div>
            <div className="text-xs text-muted-foreground mb-3">
              Verset {blankIdx + 1} / {blankAyahs.length}
            </div>
            <FillBlankStep ayah={blankAyahs[blankIdx]} onContinue={handleBlankContinue} />
          </div>
        )}

        {phase === "recite" && (
          <div className="glass-panel rounded-3xl p-6 text-center animate-fade-in-up">
            <Mic className="w-12 h-12 mx-auto text-primary" />
            <h2 className="font-display text-2xl font-bold mt-3">Récitation</h2>
            <p className="text-muted-foreground mt-1">
              Lance le chrono et récite {surah.name} à voix haute.
            </p>
            <div className="my-6 flex items-center justify-center gap-3 text-4xl font-display font-bold tabular-nums">
              <Timer className="w-7 h-7 text-primary" />
              {String(Math.floor(reciteSeconds / 60)).padStart(2, "0")}:
              {String(reciteSeconds % 60).padStart(2, "0")}
            </div>
            {!reciteRunning ? (
              <Button onClick={() => setReciteRunning(true)} className="w-full h-12 rounded-2xl">
                Démarrer
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setReciteRunning(false);
                  setPhase("self-assess");
                }}
                className="w-full h-12 rounded-2xl"
              >
                Terminer
              </Button>
            )}
          </div>
        )}

        {phase === "self-assess" && (
          <div className="glass-panel rounded-3xl p-6 animate-fade-in-up">
            <h2 className="font-display text-2xl font-bold text-center">Auto-évaluation</h2>
            <p className="text-muted-foreground text-center mt-1">Combien d'erreurs as-tu faites ?</p>
            <div className="grid gap-3 mt-5">
              {([
                [0, "Aucune erreur", "Récitation parfaite", "border-gold"],
                [1, "1 erreur", "Très bien", "border-slate-300"],
                [2, "2 erreurs ou +", "À retravailler", "border-amber-700"],
              ] as const).map(([n, t, s, b]) => (
                <button
                  key={n}
                  onClick={() => finishExam(n)}
                  className={cn(
                    "rounded-2xl border-2 p-4 text-left hover:shadow-[var(--shadow-soft)] active:scale-[0.98] transition-all bg-card/60",
                    b
                  )}
                >
                  <div className="font-display font-bold text-lg">{t}</div>
                  <div className="text-sm text-muted-foreground">{s}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === "result" && (
          <div className="glass-panel rounded-3xl p-6 text-center animate-fade-in-up">
            {badge ? (
              <>
                <div className={cn(
                  "w-28 h-28 mx-auto rounded-full grid place-items-center text-primary-foreground shadow-[var(--shadow-node)]",
                  badge === "gold" ? "bg-gold" : badge === "silver" ? "bg-slate-400" : "bg-amber-700"
                )}>
                  <Medal className="w-14 h-14" />
                </div>
                <h2 className="font-display text-3xl font-bold mt-4 capitalize">{badge === "gold" ? "Or" : badge === "silver" ? "Argent" : "Bronze"} !</h2>
                <p className="text-muted-foreground mt-2">Sourate suivante débloquée 🎉</p>
                <Button asChild className="mt-6 w-full h-12 rounded-2xl">
                  <Link to="/">Continuer le parcours</Link>
                </Button>
              </>
            ) : (
              <>
                <div className="w-24 h-24 mx-auto rounded-full bg-muted grid place-items-center">
                  <Award className="w-12 h-12 text-muted-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold mt-4">Encore un effort</h2>
                <p className="text-muted-foreground mt-2">Retravaille la sourate et retente l'évaluation.</p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <Button asChild variant="outline" className="h-12 rounded-2xl">
                    <Link to="/lesson/$surahId" params={{ surahId: String(surah.id) }}>Réviser</Link>
                  </Button>
                  <Button
                    onClick={() => {
                      setBlankIdx(0);
                      setBlankErrors(0);
                      setReciteSeconds(0);
                      setBadge(null);
                      setPhase("intro");
                    }}
                    className="h-12 rounded-2xl"
                  >
                    Recommencer
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function BadgeRow({ color, label, sub }: { color: string; label: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border p-3 bg-card/60">
      <div className={cn("w-8 h-8 rounded-full mx-auto", color)} />
      <div className="font-bold mt-2">{label}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}
