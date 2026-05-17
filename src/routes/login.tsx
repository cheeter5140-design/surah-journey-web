import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Loader2 } from "lucide-react";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Connexion — Nour" },
      { name: "description", content: "Connecte-toi pour sauvegarder ta progression du Coran sur tous tes appareils." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { user, ready } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ready && user) navigate({ to: "/" });
  }, [user, ready, navigate]);

  const signInGoogle = async () => {
    setLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("Connexion impossible. Réessaie.");
      setLoading(false);
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen grid place-items-center px-6 bg-[image:var(--gradient-bg)]">
      <div className="max-w-sm w-full text-center flex flex-col items-center gap-6 animate-[bounce-in_0.5s]">
        <div className="w-20 h-20 rounded-3xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground shadow-[var(--shadow-node)]">
          <BookOpen className="w-10 h-10" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold">Bienvenue sur Nour</h1>
          <p className="text-muted-foreground mt-2">
            Connecte-toi pour sauvegarder ta progression, ton XP et ta série quotidienne sur tous tes appareils.
          </p>
        </div>
        <Button
          onClick={signInGoogle}
          disabled={loading}
          className="w-full h-14 rounded-2xl text-base font-bold shadow-[var(--shadow-node)] active:translate-y-1 gap-3"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <GoogleIcon />
          )}
          Continuer avec Google
        </Button>
        <button
          onClick={() => navigate({ to: "/" })}
          className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
        >
          Continuer sans compte
        </button>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#fff" d="M21.35 11.1H12v3.2h5.35c-.23 1.45-1.7 4.25-5.35 4.25-3.22 0-5.85-2.67-5.85-5.95s2.63-5.95 5.85-5.95c1.83 0 3.06.78 3.76 1.45l2.57-2.47C16.66 4.16 14.55 3.2 12 3.2 6.94 3.2 2.85 7.29 2.85 12.35S6.94 21.5 12 21.5c6.93 0 9.5-4.86 9.5-7.4 0-.5-.05-.88-.15-1.26z"/>
    </svg>
  );
}
