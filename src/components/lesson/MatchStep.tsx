import { useEffect, useMemo, useState } from "react";
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

export function MatchStep({ ayah, onContinue }: Props) {
  const arabic = useMemo(() => ayah.words.map((w, i) => ({ ...w, id: i })), [ayah]);
  const french = useMemo(() => shuffle(arabic), [arabic]);

  const [pairs, setPairs] = useState<Record<number, number>>({}); // arId -> frId
  const [selectedAr, setSelectedAr] = useState<number | null>(null);
  const [selectedFr, setSelectedFr] = useState<number | null>(null);
  const [wrong, setWrong] = useState<{ ar: number; fr: number } | null>(null);
  const [checked, setChecked] = useState<null | boolean>(null);

  const tryMatch = (ar: number, fr: number) => {
    if (ar === fr) {
      setPairs((p) => ({ ...p, [ar]: fr }));
      setSelectedAr(null);
      setSelectedFr(null);
    } else {
      setWrong({ ar, fr });
      setTimeout(() => {
        setWrong(null);
        setSelectedAr(null);
        setSelectedFr(null);
      }, 500);
    }
  };

  const onAr = (id: number) => {
    if (pairs[id] !== undefined) return;
    setSelectedAr(id);
    if (selectedFr !== null) tryMatch(id, selectedFr);
  };
  const onFr = (id: number) => {
    if (Object.values(pairs).includes(id)) return;
    setSelectedFr(id);
    if (selectedAr !== null) tryMatch(selectedAr, id);
  };

  const allMatched = Object.keys(pairs).length === arabic.length;

  return (
    <div className="flex flex-col gap-6 animate-[bounce-in_0.5s]">
      <div>
        <h2 className="font-display text-2xl font-bold">Associe les mots</h2>
        <p className="text-muted-foreground text-sm mt-1">Touche un mot arabe puis sa traduction française.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          {arabic.map((w) => {
            const matched = pairs[w.id] !== undefined;
            const isSelected = selectedAr === w.id;
            const isWrong = wrong?.ar === w.id;
            return (
              <button
                key={w.id}
                onClick={() => onAr(w.id)}
                disabled={matched}
                className={cn(
                  "p-4 rounded-2xl border-2 font-arabic text-2xl transition-all",
                  matched && "bg-success/15 border-success text-muted-foreground opacity-60",
                  !matched && !isSelected && !isWrong && "bg-card border-border hover:border-primary",
                  isSelected && "bg-primary/10 border-primary",
                  isWrong && "bg-destructive/10 border-destructive animate-[shake_0.4s]"
                )}
              >
                {w.ar}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-3">
          {french.map((w) => {
            const matched = Object.values(pairs).includes(w.id);
            const isSelected = selectedFr === w.id;
            const isWrong = wrong?.fr === w.id;
            return (
              <button
                key={w.id}
                onClick={() => onFr(w.id)}
                disabled={matched}
                className={cn(
                  "p-4 rounded-2xl border-2 text-sm font-medium transition-all",
                  matched && "bg-success/15 border-success text-muted-foreground opacity-60",
                  !matched && !isSelected && !isWrong && "bg-card border-border hover:border-primary",
                  isSelected && "bg-primary/10 border-primary",
                  isWrong && "bg-destructive/10 border-destructive animate-[shake_0.4s]"
                )}
              >
                {w.fr}
              </button>
            );
          })}
        </div>
      </div>

      <Feedback checked={checked} />

      <Button
        onClick={() => {
          if (checked === null) setChecked(true);
          else onContinue(true);
        }}
        disabled={!allMatched}
        className="h-14 rounded-2xl text-base font-bold uppercase tracking-wide shadow-[var(--shadow-node)] active:translate-y-1"
      >
        {checked === null ? "Vérifier" : "Continuer"}
      </Button>
    </div>
  );
}

function Feedback({ checked }: { checked: null | boolean }) {
  if (checked === null) return null;
  return (
    <div className={cn(
      "flex items-center gap-2 p-4 rounded-2xl font-bold animate-[bounce-in_0.4s]",
      checked ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"
    )}>
      {checked ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
      {checked ? "Excellent !" : "Réessaie"}
    </div>
  );
}
