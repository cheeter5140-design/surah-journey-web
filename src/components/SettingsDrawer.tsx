import { Settings as SettingsIcon, Check, Languages, Type } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { THEMES, useTheme } from "@/lib/theme";
import { FONTS, useFont, useLang, type Lang } from "@/lib/preferences";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function SettingsDrawer() {
  const { theme, setTheme } = useTheme();
  const { font, setFont } = useFont();
  const { lang, setLang, t } = useLang();

  // Re-key the preview to retrigger the animation when the font changes
  const [animKey, setAnimKey] = useState(0);
  useEffect(() => setAnimKey((k) => k + 1), [font]);

  const previewText = t("settings.preview");

  const languages: { id: Lang; label: string; flag: string }[] = [
    { id: "fr", label: "Français", flag: "🇫🇷" },
    { id: "en", label: "English", flag: "🇬🇧" },
  ];

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Paramètres"
        className="w-9 h-9 rounded-full bg-secondary grid place-items-center hover:ring-2 ring-primary/30 transition"
      >
        <SettingsIcon className="w-4 h-4 text-primary" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[88vw] sm:w-[440px] glass-panel overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">{t("settings.title")}</SheetTitle>
          <SheetDescription>{t("settings.subtitle")}</SheetDescription>
        </SheetHeader>

        {/* Language */}
        <section className="mt-6">
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-3">
            <Languages className="w-3.5 h-3.5" /> {t("settings.language")}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {languages.map((l) => {
              const active = l.id === lang;
              return (
                <button
                  key={l.id}
                  onClick={() => setLang(l.id)}
                  className={cn(
                    "rounded-2xl border-2 p-3 flex items-center justify-between transition-all active:scale-[0.98]",
                    active
                      ? "border-primary shadow-[var(--shadow-soft)] bg-primary/5"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <span className="text-lg leading-none">{l.flag}</span>
                    {l.label}
                  </span>
                  {active && <Check className="w-4 h-4 text-primary" />}
                </button>
              );
            })}
          </div>
        </section>

        {/* Typography */}
        <section className="mt-7">
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-3">
            <Type className="w-3.5 h-3.5" /> {t("settings.font")}
          </h3>

          {/* Animated live preview */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-transparent to-gold/10 p-5 mb-4 overflow-hidden">
            <div
              key={animKey}
              className="font-display text-2xl sm:text-3xl text-center bg-clip-text text-transparent bg-[image:var(--gradient-primary)] animate-[font-reveal_0.7s_ease-out]"
              style={{ fontFamily: FONTS.find((f) => f.id === font)?.stack }}
            >
              {previewText}
            </div>
          </div>

          <div className="grid gap-2">
            {FONTS.map((f) => {
              const active = f.id === font;
              return (
                <button
                  key={f.id}
                  onClick={() => setFont(f.id)}
                  className={cn(
                    "group rounded-2xl border-2 p-3 flex items-center justify-between transition-all active:scale-[0.98]",
                    active
                      ? "border-primary shadow-[var(--shadow-soft)] bg-primary/5"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  <div className="flex flex-col items-start">
                    <span
                      className="text-lg font-bold leading-tight transition-transform group-hover:translate-x-0.5"
                      style={{ fontFamily: f.stack }}
                    >
                      {f.label}
                    </span>
                    <span
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: f.stack }}
                    >
                      Aa Bb — سُورَة
                    </span>
                  </div>
                  {active && <Check className="w-4 h-4 text-primary" />}
                </button>
              );
            })}
          </div>
        </section>

        {/* Theme */}
        <section className="mt-7">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-3">
            {t("settings.theme")}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {THEMES.map((th) => {
              const active = th.id === theme;
              return (
                <button
                  key={th.id}
                  onClick={() => setTheme(th.id)}
                  className={cn(
                    "relative rounded-2xl p-3 border-2 transition-all text-left active:scale-[0.98]",
                    active
                      ? "border-primary shadow-[var(--shadow-soft)]"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  <div
                    className="h-20 w-full rounded-xl mb-2 border border-border/60"
                    style={{ background: th.preview }}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">{th.label}</span>
                    {active && <Check className="w-4 h-4 text-primary" />}
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-4">{t("settings.glassNote")}</p>
        </section>
      </SheetContent>
    </Sheet>
  );
}
