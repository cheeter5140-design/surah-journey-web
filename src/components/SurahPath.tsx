import { Link } from "@tanstack/react-router";
import { Lock, Check, Star } from "lucide-react";
import { SURAHS } from "@/lib/surahs";
import { useProgress, isUnlocked } from "@/lib/progress";
import { cn } from "@/lib/utils";

export function SurahPath() {
  const { progress, ready } = useProgress();
  if (!ready) return null;

  return (
    <div className="max-w-md mx-auto px-4 py-8 relative">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">Section 1</p>
        <h1 className="font-display text-3xl font-bold mt-1">Juz 'Amma</h1>
        <p className="text-muted-foreground text-sm mt-2">Apprends les sourates courtes, une à une.</p>
      </div>

      <div className="relative flex flex-col items-center gap-10">
        {SURAHS.map((s, i) => {
          const unlocked = isUnlocked(s.id, progress.completed);
          const completed = progress.completed.includes(s.id);
          // Zig-zag offset
          const offset = [0, 60, 30, -30, -60, -30, 0][i % 7];
          return (
            <div key={s.id} style={{ transform: `translateX(${offset}px)` }} className="relative">
              <SurahNode surah={s} unlocked={unlocked} completed={completed} index={i} />
            </div>
          );
        })}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>✨ Plus de sourates bientôt</p>
        </div>
      </div>
    </div>
  );
}

function SurahNode({
  surah,
  unlocked,
  completed,
  index,
}: {
  surah: (typeof SURAHS)[number];
  unlocked: boolean;
  completed: boolean;
  index: number;
}) {
  const inner = (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className={cn(
          "relative w-24 h-24 rounded-full grid place-items-center text-4xl transition-all duration-200 active:translate-y-1",
          unlocked
            ? completed
              ? "bg-gold text-primary-foreground shadow-[var(--shadow-gold)]"
              : "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-node)] group-hover:scale-105"
            : "bg-muted text-muted-foreground/40 shadow-[var(--shadow-node-locked)] cursor-not-allowed",
          index === 0 && unlocked && !completed && "animate-float"
        )}
      >
        <span>{surah.icon}</span>
        {!unlocked && (
          <div className="absolute inset-0 grid place-items-center bg-black/0">
            <Lock className="w-7 h-7" />
          </div>
        )}
        {completed && (
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-success grid place-items-center border-4 border-background">
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
        )}
        {!unlocked && index !== 0 && (
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-muted grid place-items-center border-4 border-background">
            <Star className="w-3 h-3 text-muted-foreground" />
          </div>
        )}
      </div>
      <div className="text-center">
        <div className="font-display font-bold">{surah.name}</div>
        <div className="text-xs text-muted-foreground">{surah.meaning} · {surah.verses} versets</div>
      </div>
    </div>
  );

  if (!unlocked) return inner;
  return (
    <Link to="/lesson/$surahId" params={{ surahId: String(surah.id) }}>
      {inner}
    </Link>
  );
}
