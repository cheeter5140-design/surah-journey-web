import { Flame, Star, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useProgress } from "@/lib/progress";

export function TopBar() {
  const { progress } = useProgress();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground shadow-[var(--shadow-soft)]">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">Nour</span>
        </Link>
        <div className="flex items-center gap-3">
          <Stat icon={<Flame className="w-4 h-4 text-orange-500" fill="currentColor" />} value={progress.streak} label="jours" />
          <Stat icon={<Star className="w-4 h-4 text-gold" fill="currentColor" />} value={progress.xp} label="XP" />
        </div>
      </div>
    </header>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full">
      {icon}
      <span className="font-bold text-sm tabular-nums">{value}</span>
      <span className="text-xs text-muted-foreground hidden sm:inline">{label}</span>
    </div>
  );
}
