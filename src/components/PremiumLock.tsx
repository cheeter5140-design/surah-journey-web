import { Link } from "@tanstack/react-router";
import { Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PremiumLock({
  title = "Fonctionnalité Premium",
  description = "Soutiens le projet et débloque tous les outils avancés.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="rounded-3xl border-2 border-dashed border-primary/40 bg-gradient-to-br from-primary/5 to-gold/10 p-6 text-center flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground shadow-[var(--shadow-soft)]">
        <Lock className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold flex items-center justify-center gap-2">
          {title} <Sparkles className="w-4 h-4 text-gold" />
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <Button asChild className="rounded-2xl font-bold">
        <Link to="/premium">Devenir Premium</Link>
      </Button>
    </div>
  );
}
