import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Crown, Check, Sparkles, Eye, CalendarDays, Flame, Loader2, ArrowLeft } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { usePremium } from "@/lib/premium";
import { useAuth } from "@/hooks/useAuth";
import { createCheckoutSession, createPortalSession } from "@/lib/billing.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Premium — Sadaqah Jariyah | Nour" },
      { name: "description", content: "Soutiens Nour et débloque le Mode Révélation, le Smart Planner et la révision espacée intelligente. 4,99€/mois." },
    ],
  }),
  component: PremiumPage,
});

const benefits = [
  { icon: Eye, title: "Peeking Mode", text: "Récite de mémoire, dévoile un verset d'un simple appui quand tu hésites." },
  { icon: CalendarDays, title: "Smart Planner", text: "Un calendrier dynamique qui se recalcule si tu manques un jour." },
  { icon: Flame, title: "Révision espacée", text: "Couleurs intelligentes (vert / orange / rouge) selon ta mémoire." },
  { icon: Sparkles, title: "Sadaqah Jariyah", text: "Ton soutien finance le développement et l'hébergement du projet." },
];

function PremiumPage() {
  const { user } = useAuth();
  const { is_premium, subscription_status, loading } = usePremium();
  const navigate = useNavigate();
  const checkoutFn = useServerFn(createCheckoutSession);
  const portalFn = useServerFn(createPortalSession);
  const [busy, setBusy] = useState(false);

  const subscribe = async () => {
    if (!user) { navigate({ to: "/login" }); return; }
    setBusy(true);
    try {
      const res = await checkoutFn();
      if (res?.url) window.location.href = res.url;
    } catch (e) {
      toast.error("Impossible d'ouvrir le paiement. Réessaie.");
    } finally { setBusy(false); }
  };

  const openPortal = async () => {
    setBusy(true);
    try {
      const res = await portalFn();
      if (res?.url) window.location.href = res.url;
    } catch (e) {
      toast.error("Portail indisponible.");
    } finally { setBusy(false); }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1 max-w-xl w-full mx-auto px-5 py-6">
        <button onClick={() => navigate({ to: "/" })} className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
          <ArrowLeft className="w-4 h-4" /> Retour
        </button>

        <div className="rounded-3xl bg-gradient-to-br from-primary via-primary-glow to-gold p-[2px] shadow-[var(--shadow-soft)]">
          <div className="rounded-[1.4rem] bg-background p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground mx-auto shadow-[var(--shadow-node)]">
              <Crown className="w-8 h-8" />
            </div>
            <h1 className="font-display text-3xl font-bold mt-4">Sadaqah Jariyah & Premium</h1>
            <p className="text-muted-foreground mt-2 text-sm">
              Soutiens un projet utile à la Oumma et débloque les outils avancés pour mémoriser plus efficacement, in shā'a Llāh.
            </p>
            <div className="mt-5 flex items-baseline justify-center gap-1">
              <span className="font-display text-5xl font-bold">4,99€</span>
              <span className="text-muted-foreground">/ mois</span>
            </div>

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
              <Button onClick={subscribe} disabled={busy} className="mt-6 w-full h-14 rounded-2xl font-bold text-base shadow-[var(--shadow-node)] active:translate-y-1">
                {busy ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Crown className="w-5 h-5 mr-2" /> Devenir Premium</>}
              </Button>
            )}
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-3 p-4 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                <b.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold">{b.title}</div>
                <div className="text-sm text-muted-foreground">{b.text}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Sans engagement · résiliable à tout moment via le portail Stripe.
        </p>
      </main>
    </div>
  );
}
