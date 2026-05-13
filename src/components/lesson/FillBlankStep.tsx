import { useMemo, useState } from "react";
import type { Ayah } from "@/lib/surahs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface Props {
  ayah: Ayah;
  onContinue: (correct: boolean) => void;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function FillBlankStep({ ayah, onContinue }: Props) {
  // Pick a "blank" word — middle word
  const blankIdx = useMemo(() => Math.floor(ayah.words.length / 2), [ayah]);
  const correctWord = ayah.words[blankIdx].ar;

  // Distractors from other ayahs would be ideal; here use other words from same ayah + filler
  const choices = useMemo(() => {
    const others = ayah.words.filter((_, i) => i !== blankIdx).map((w) => w.ar);
    const filler = ["الله", "رَبِّ", "يَوْمَ"].filter((f) => f !== correctWord);
    const pool = [correctWord, ...others, ...filler].slice(0, 4);
    return shuffle(pool.length < 3 ? [...pool, ...filler].slice(0, 3) : pool);
  }, [ayah, blankIdx, correctWord]);

  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const correct = picked === correctWord;

  return (
    <div className="flex flex-col gap-6 animate-[bounce-in_0.5s]">
      <div>
        <h2 className="font-display text-2xl font-bold">Complète le verset</h2>
        <p className="text-muted-foreground text-sm mt-1">Choisis le mot manquant.</p>
      </div>

      <div className="bg-card rounded-3xl p-6 border-2 border-border shadow-[var(--shadow-soft)]">
        <p className="font-arabic text-2xl leading-loose text-center">
          {ayah.words.map((w, i) => (
            <span key={i}>
              {i === blankIdx ? (
                <span className={cn(
                  "inline-block min-w-20 mx-1 px-3 py-1 rounded-lg border-2 border-dashed",
                  picked ? "border-primary bg-primary/10" : "border-muted-foreground/40"
                )}>
                  {picked ?? "____"}
                </span>
              ) : (
                <span> {w.ar} </span>
              )}
            </span>
          ))}
        </p>
        <p className="text-center text-sm text-foreground/70 italic mt-4">{ayah.transliteration}</p>
        <p className="text-center text-sm text-muted-foreground mt-1">{ayah.translation}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {choices.map((c) => (
          <button
            key={c}
            onClick={() => !checked && setPicked(c)}
            disabled={checked}
            className={cn(
              "p-4 rounded-2xl border-2 font-arabic text-2xl transition-all",
              picked === c
                ? "bg-primary/10 border-primary"
                : "bg-card border-border hover:border-primary"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {checked && (
        <div className={cn(
          "flex items-center gap-2 p-4 rounded-2xl font-bold animate-[bounce-in_0.4s]",
          correct ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"
        )}>
          {correct ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
          <div>
            <div>{correct ? "Bravo !" : "Pas tout à fait"}</div>
            {!correct && <div className="text-sm font-normal">Bonne réponse : <span className="font-arabic">{correctWord}</span></div>}
          </div>
        </div>
      )}

      <Button
        onClick={() => {
          if (!checked) setChecked(true);
          else onContinue(correct);
        }}
        disabled={!picked}
        className={cn(
          "h-14 rounded-2xl text-base font-bold uppercase tracking-wide shadow-[var(--shadow-node)] active:translate-y-1",
          checked && !correct && "bg-destructive hover:bg-destructive/90"
        )}
      >
        {!checked ? "Vérifier" : "Continuer"}
      </Button>
    </div>
  );
}
