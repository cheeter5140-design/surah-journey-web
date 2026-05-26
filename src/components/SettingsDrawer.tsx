import { Settings as SettingsIcon, Check } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { THEMES, useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function SettingsDrawer() {
  const { theme, setTheme } = useTheme();
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Paramètres"
        className="w-9 h-9 rounded-full bg-secondary grid place-items-center hover:ring-2 ring-primary/30 transition"
      >
        <SettingsIcon className="w-4 h-4 text-primary" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] sm:w-[420px] glass-panel">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Apparence</SheetTitle>
          <SheetDescription>Personnalise l'ambiance de ton parcours.</SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Thème de fond
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {THEMES.map((t) => {
              const active = t.id === theme;
              return (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={cn(
                    "relative rounded-2xl p-3 border-2 transition-all text-left active:scale-[0.98]",
                    active ? "border-primary shadow-[var(--shadow-soft)]" : "border-border hover:border-primary/40"
                  )}
                >
                  <div
                    className="h-20 w-full rounded-xl mb-2 border border-border/60"
                    style={{ background: t.preview }}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">{t.label}</span>
                    {active && <Check className="w-4 h-4 text-primary" />}
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Les cartes utilisent automatiquement un effet « glassmorphism » sur tous les thèmes.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
