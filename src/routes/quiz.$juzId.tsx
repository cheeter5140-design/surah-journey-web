import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Check, X, Trophy, GraduationCap, Lock } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { CURRICULUM, curatedSurahIdsInJuz, juzQuizUnlocked, markJuzPassed } from "@/lib/curriculum";
import { SURAHS } from "@/lib/surahs";
import { useMastery } from "@/lib/mastery";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/quiz/$juzId")({
  head: ({ params }) => ({
    meta: [{ title: `Test final · Juz ${params.juzId} | Surah Journey` }],
  }),
  component: QuizPage,
});

type Q = { prompt: string; choices: string[]; answer: number; cite?: string };

function buildQuestions(juzId: number): Q[] {
  const ids = curatedSurahIdsInJuz(juzId);
  const surahs = SURAHS.filter((s) => ids.includes(s.id));
  const pool = surahs.slice();
  const qs: Q[] = [];

  // Q1: meaning of name
  if (pool.length >= 4) {
    const correct = pool[Math.floor(Math.random() * pool.length)];
    const distractors = pool.filter((s) => s.id !== correct.id).sort(() => 0.5 - Math.random()).slice(0, 3);
    const choices = [correct, ...distractors].sort(() => 0.5 - Math.random());
    qs.push({
      prompt: `Que signifie le nom de Sourate "${correct.name}" ?`,
      choices: choices.map((c) => c.meaning || "—"),
      answer: choices.findIndex((c) => c.id === correct.id),
      cite: `${correct.name} · n°${correct.number}`,
    });
  }

  // Q2: number of verses
  if (pool.length >= 4) {
    const correct = pool[Math.floor(Math.random() * pool.length)];
    const others = [correct.verses - 1, correct.verses + 2, correct.verses + 5].filter((n) => n > 0 && n !== correct.verses);
    const set = [correct.verses, ...others.slice(0, 3)].sort(() => 0.5 - Math.random());
    qs.push({
      prompt: `Combien de versets contient la Sourate ${correct.name} ?`,
      choices: set.map(String),
      answer: set.findIndex((n) => n === correct.verses),
      cite: `${correct.name}`,
    });
  }

  // Q3: which surah opens with this ayah (Arabic)
  const opener = pool.find((s) => s.ayahs[0]);
  if (opener && pool.length >= 4) {
    const distractors = pool.filter((s) => s.id !== opener.id).sort(() => 0.5 - Math.random()).slice(0, 3);
    const choices = [opener, ...distractors].sort(() => 0.5 - Math.random());
    qs.push({
      prompt: `Quelle sourate commence par : « ${opener.ayahs[0].arabic} » ?`,
      choices: choices.map((c) => c.name),
      answer: choices.findIndex((c) => c.id === opener.id),
      cite: `${opener.name}, 1:1`,
    });
  }

  // Q4: translation of an ayah
  const verseSurah = pool.find((s) => s.ayahs[0]?.translation);
  if (verseSurah && pool.length >= 4) {
    const correct = verseSurah.ayahs[0];
    const distractors = pool
      .filter((s) => s.id !== verseSurah.id && s.ayahs[0]?.translation)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((s) => s.ayahs[0].translation);
    const choices = [correct.translation, ...distractors].sort(() => 0.5 - Math.random());
    qs.push({
      prompt: `Quelle est la traduction du verset : « ${correct.arabic} » ?`,
      choices,
      answer: choices.findIndex((c) => c === correct.translation),
      cite: `${verseSurah.name}, ${verseSurah.number}:1`,
    });
  }

  // Q5: Arabic name match
  if (pool.length >= 4) {
    const correct = pool[Math.floor(Math.random() * pool.length)];
    const distractors = pool.filter((s) => s.id !== correct.id).sort(() => 0.5 - Math.random()).slice(0, 3);
    const choices = [correct, ...distractors].sort(() => 0.5 - Math.random());
    qs.push({
      prompt: `Quel est le nom arabe de Sourate ${correct.name} ?`,
      choices: choices.map((c) => c.nameArabic),
      answer: choices.findIndex((c) => c.id === correct.id),
      cite: `${correct.name}`,
    });
  }

  return qs.slice(0, 5);
}

function QuizPage() {
  const { juzId } = Route.useParams();
  const juzNum = Number(juzId);
  const navigate = useNavigate();
  const { mastery } = useMastery();
  const masteredIds = Object.keys(mastery).map(Number);
  const unlocked = juzQuizUnlocked(juzNum, masteredIds);
  const section = CURRICULUM.find((s) => s.id === juzNum);

  const questions = useMemo(() => (unlocked ? buildQuestions(juzNum) : []), [juzNum, unlocked]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (!section) {
    return (
      <div className="min-h-screen grid place-items-center p-6">
        <p>Juz introuvable.</p>
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <main className="flex-1 max-w-md mx-auto w-full px-5 py-10 text-center">
          <div className="w-20 h-20 rounded-2xl bg-muted grid place-items-center mx-auto">
            <Lock className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold mt-5">Test final du Juz {juzNum}</h1>
          <p className="text-muted-foreground mt-2">
            Termine et valide toutes les sourates curatées de ce Juz pour débloquer le test.
          </p>
          <Button onClick={() => navigate({ to: "/" })} className="mt-6">Retour au parcours</Button>
        </main>
      </div>
    );
  }

  const q = questions[idx];

  const submit = () => {
    if (picked == null || !q) return;
    const correct = picked === q.answer;
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (idx + 1 >= questions.length) {
        const finalScore = score + (correct ? 1 : 0);
        if (finalScore >= Math.ceil(questions.length * 0.6)) {
          markJuzPassed(juzNum);
          toast.success(`Juz ${juzNum} validé ! Le suivant est débloqué.`);
        } else {
          toast.error("Score insuffisant — réessaie pour débloquer le suivant.");
        }
        setDone(true);
      } else {
        setIdx((i) => i + 1);
        setPicked(null);
      }
    }, 700);
  };

  if (done) {
    const passed = score >= Math.ceil(questions.length * 0.6);
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <main className="flex-1 max-w-md mx-auto w-full px-5 py-10 text-center">
          <div className={cn(
            "w-24 h-24 rounded-3xl grid place-items-center mx-auto",
            passed ? "bg-gold text-primary-foreground shadow-[var(--shadow-gold)]" : "bg-muted text-muted-foreground"
          )}>
            <Trophy className="w-12 h-12" />
          </div>
          <h1 className="font-display text-3xl font-bold mt-5">
            {passed ? "Mabrouk !" : "Pas encore"}
          </h1>
          <p className="text-muted-foreground mt-2">
            Score : <b>{score} / {questions.length}</b>
          </p>
          <div className="flex gap-2 justify-center mt-6">
            <Button variant="secondary" onClick={() => { setIdx(0); setPicked(null); setScore(0); setDone(false); }}>
              Refaire
            </Button>
            <Button asChild>
              <Link to="/">Retour au parcours</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1 max-w-md mx-auto w-full px-5 py-6">
        <button onClick={() => navigate({ to: "/" })} className="flex items-center gap-1 text-sm text-muted-foreground mb-4 hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> Quitter
        </button>
        <div className="flex items-center gap-2 mb-3">
          <GraduationCap className="w-5 h-5 text-gold" />
          <h1 className="font-display text-xl font-bold">Test final · {section.name}</h1>
        </div>
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <div className="h-full bg-[image:var(--gradient-primary)] transition-all" style={{ width: `${((idx) / questions.length) * 100}%` }} />
        </div>
        <p className="text-xs text-muted-foreground mt-2">Question {idx + 1} sur {questions.length}</p>

        {q && (
          <div key={idx} className="mt-6 animate-fade-in-up">
            <p className="font-display text-lg font-semibold leading-snug">{q.prompt}</p>
            {q.cite && <p className="text-xs text-muted-foreground mt-1">Réf : {q.cite}</p>}

            <div className="mt-5 space-y-2">
              {q.choices.map((c, i) => {
                const isPicked = picked === i;
                const showCorrect = picked != null && i === q.answer;
                const showWrong = picked === i && picked !== q.answer;
                return (
                  <button
                    key={i}
                    disabled={picked != null}
                    onClick={() => setPicked(i)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 active:scale-[0.99]",
                      isPicked && picked === null ? "border-primary bg-primary/10" : "border-border bg-card",
                      isPicked && "border-primary bg-primary/10",
                      showCorrect && "border-success bg-success/10",
                      showWrong && "border-destructive bg-destructive/10"
                    )}
                  >
                    <span>{c}</span>
                    {showCorrect && <Check className="w-5 h-5 text-success" />}
                    {showWrong && <X className="w-5 h-5 text-destructive" />}
                  </button>
                );
              })}
            </div>

            <Button
              disabled={picked == null}
              onClick={submit}
              className="w-full h-12 mt-6 rounded-2xl font-bold"
            >
              {idx + 1 === questions.length ? "Terminer" : "Valider"}
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
