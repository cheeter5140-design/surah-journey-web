import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  Crown, Check, Sparkles, Eye, CalendarDays, Loader2, ArrowLeft,
  BookOpen, Headphones, Mic, Trophy, HeartHandshake, Brain, ShieldCheck, Infinity as InfinityIcon,
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { usePremium } from "@/lib/premium";
import { useAuth } from "@/hooks/useAuth";
import { createCheckoutSession, createPortalSession } from "@/lib/billing.functions";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Premium — Sadaqah Jariyah | Nour" },
      { name: "description", content: "Soutiens Nour et débloque le Mode Révélation, le Smart Planner et la révision espacée intelligente. 4,99€/mois." },
    ],
  }),
  component: PremiumPage,
});

type Feature = {
  icon: typeof Crown;
  title: string;
  text: string;
  category: "core" | "advanced" | "community";
  premium?: boolean;
};

const features: Feature[] = [
  { icon: BookOpen, title: "Parcours guidé", text: "Apprends sourate par sourate avec une progression claire et motivante.", category: "core" },
  { icon: Headphones, title: "Écoute experte", text: "Récitations de qualité pour ancrer la mélodie du Qur'an dans ta mémoire.", category: "core" },
  { icon: Mic, title: "Récitation vocale", text: "Récite à voix haute et reçois un feedback instantané.", category: "core" },
  { icon: Eye, title: "Peeking Mode", text: "Récite de mémoire, dévoile un verset d'un simple appui quand tu hésites.", category: "advanced", premium: true },
  { icon: CalendarDays, title: "Smart Planner", text: "Un calendrier dynamique qui se recalcule si tu manques un jour.", category: "advanced", premium: true },
  { icon: Brain, title: "Révision espacée", text: "Couleurs intelligentes (vert / orange / rouge) selon ta mémoire.", category: "advanced", premium: true },
  { icon: Trophy, title: "Classements", text: "Compare ta progression avec la communauté Nour.", category: "community" },
  { icon: HeartHandshake, title: "Sadaqah Jariyah", text: "Ton soutien finance le développement et l'hébergement du projet.", category: "community", premium: true },
  { icon: ShieldCheck, title: "Sans publicité", text: "Une expérience apaisée et concentrée, dédiée au Qur'an.", category: "community", premium: true },
];

const tabs = [
  { id: "all", label: "Toutes" },
  { id: "core", label: "Apprentissage" },
  { id: "advanced", label: "Outils avancés" },
  { id: "community", label: "Communauté" },
] as const;

function PremiumPage() {
  const { user } = useAuth();
  const { is_premium, subscription_status, loading } = usePremium();
  const navigate = useNavigate();
  const checkoutFn = useServerFn(createCheckoutSession);
  const portalFn = useServerFn(createPortalSession);
  const [busy, setBusy] = useState(false);
  const [tab, setTab] = useState<string>("all");

  const subscribe = async () => {
    if (!user) { navigate({ to: "/login" }); return; }
    setBusy(true);
    try {
      const res = await checkoutFn();
      if (res?.url) window.location.href = res.url;
    } catch {
      toast.error("Impossible d'ouvrir le paiement. Réessaie.");
    } finally { setBusy(false); }
  };

  const openPortal = async () => {
    setBusy(true);
    try {
      const res = await portalFn();
      if (res?.url) window.location.href = res.url;
    } catch {
      toast.error("Portail indisponible.");
    } finally { setBusy(false); }
  };

  const visible = tab === "all" ? features : features.filter((f) => f.category === tab);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1 max-w-5xl w-full mx-auto px-5 py-8">
        <button onClick={() => navigate({ to: "/" })} className="flex items-center gap-1 text-sm text-muted-foreground mb-6 hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Retour
        </button>

        {/* Hero header */}
        <section className="text-center max-w-2xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-[oklch(0.45_0.12_70)] text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Sadaqah Jariyah
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Apprends le Qur'an avec des outils <span className="bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">pensés pour durer</span>
          </h1>
          <p className="text-muted-foreground mt-3 text-base">
            Explore toutes les fonctionnalités, gratuites comme premium, et soutiens un projet utile à la Oumma.
          </p>
        </section>

        {/* Features Explorer */}
        <section className="mt-10">
          <Tabs value={tab} onValueChange={setTab}>
            <div className="flex justify-center">
              <TabsList className="h-auto p-1 rounded-full bg-secondary/80 backdrop-blur">
                {tabs.map((t) => (
                  <TabsTrigger
                    key={t.id}
                    value={t.id}
                    className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-[image:var(--gradient-primary)] data-[state=active]:text-primary-foreground data-[state=active]:shadow-[var(--shadow-soft)] transition-all"
                  >
                    {t.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={tab} forceMount className="mt-8">
              <div key={tab} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visible.map((f, i) => (
                  <article
                    key={f.title}
                    style={{ animationDelay: `${i * 40}ms` }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] hover:border-primary/40 animate-fade-in-up"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-start justify-between mb-4">
                      <div className={cn(
                        "w-11 h-11 rounded-xl grid place-items-center transition-transform group-hover:scale-110 group-hover:rotate-3",
                        f.premium ? "bg-gradient-to-br from-gold/20 to-primary/20 text-gold" : "bg-primary/10 text-primary"
                      )}>
                        <f.icon className="w-5 h-5" />
                      </div>
                      {f.premium && (
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-gold/15 text-[oklch(0.45_0.12_70)]">
                          Premium
                        </span>
                      )}
                    </div>
                    <h3 className="relative font-display text-lg font-bold">{f.title}</h3>
                    <p className="relative text-sm text-muted-foreground mt-1.5 leading-relaxed">{f.text}</p>
                  </article>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Pricing hero */}
        <section className="mt-14 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold text-[oklch(0.25_0.08_70)] shadow-md">
                <Sparkles className="w-3 h-3" /> Best Value
              </span>
            </div>
            {/* Animated gradient border */}
            <div className="rounded-3xl p-[2px] bg-[conic-gradient(from_0deg,var(--primary),var(--gold),var(--primary-glow),var(--primary))] animate-border-spin shadow-[var(--shadow-soft)]">
              <div className="rounded-[1.4rem] bg-background p-7 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground mx-auto shadow-[var(--shadow-node)]">
                  <Crown className="w-8 h-8" />
                </div>
                <h2 className="font-display text-2xl font-bold mt-4">Premium Nour</h2>
                <p className="text-muted-foreground mt-1 text-sm">Tout débloqué. Sans pub. Pour toujours utile.</p>

                <div className="mt-5 flex items-baseline justify-center gap-1">
                  <span className="font-display text-6xl font-bold tracking-tight">4,99€</span>
                  <span className="text-muted-foreground">/ mois</span>
                </div>

                <ul className="mt-5 space-y-2 text-left text-sm">
                  {[
                    "Peeking Mode pour réciter de mémoire",
                    "Smart Planner adaptatif",
                    "Révision espacée intelligente",
                    "Expérience sans publicité",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin mx-auto mt-6" />
                ) : is_premium ? (
                  <div className="mt-6 space-y-3">
                    <div className="rounded-2xl bg-success/10 border border-success/30 px-4 py-3 text-success font-bold flex items-center justify-center gap-2">
                      <Check className="w-5 h-5" /> Tu es Premium ({subscription_status})
                    </div>
                    <Button onClick={openPortal} disabled={busy} variant="secondary" className="w-full h-12 rounded-2xl font-bold">
                      {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : "Gérer mon abonnement"}
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={subscribe}
                    disabled={busy}
                    className="mt-6 w-full h-14 rounded-2xl font-bold text-base text-primary-foreground bg-[image:var(--gradient-primary)] hover:opacity-95 animate-glow-pulse active:translate-y-1 transition-transform"
                  >
                    {busy ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Crown className="w-5 h-5 mr-2" /> Devenir Premium</>}
                  </Button>
                )}

                <p className="text-xs text-muted-foreground mt-5 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Sans engagement · résiliable à tout moment via le portail Stripe
                </p>
              </div>
            </div>
          </div>
        </section>

        <p className="text-center text-xs text-muted-foreground mt-10 flex items-center justify-center gap-1.5">
          <InfinityIcon className="w-3.5 h-3.5" /> Une Sadaqah Jariyah dont les bienfaits perdurent, in shā'a Llāh.
        </p>
      </main>
    </div>
  );
}
