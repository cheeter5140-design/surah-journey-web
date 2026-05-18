import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Loader2 } from "lucide-react";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/lib/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [{ title: "Bienvenue — Nour" }],
  }),
  component: OnboardingPage,
});

const schema = z.object({
  display_name: z.string().trim().min(2, "Au moins 2 caractères").max(40),
  username: z
    .string()
    .trim()
    .min(3, "Au moins 3 caractères")
    .max(20)
    .regex(/^[a-z0-9_]+$/, "Lettres minuscules, chiffres ou _"),
});

function OnboardingPage() {
  const navigate = useNavigate();
  const { user, ready: authReady } = useAuth();
  const { profile, ready: profReady, updateProfile } = useProfile();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authReady && !user) navigate({ to: "/login" });
  }, [authReady, user, navigate]);

  useEffect(() => {
    if (profile) {
      setName(profile.display_name || "");
      setUsername(profile.username || "");
    }
  }, [profile]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ display_name: name, username: username.toLowerCase() });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Données invalides");
      return;
    }
    setLoading(true);
    try {
      await updateProfile(parsed.data);
      toast.success("Profil enregistré !");
      navigate({ to: "/" });
    } catch (err: any) {
      toast.error(err?.message?.includes("duplicate") ? "Ce nom d'utilisateur est déjà pris." : "Impossible d'enregistrer.");
    } finally {
      setLoading(false);
    }
  };

  if (!authReady || !profReady) {
    return (
      <div className="min-h-screen grid place-items-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen grid place-items-center px-6 bg-[image:var(--gradient-bg)]">
      <form onSubmit={submit} className="max-w-sm w-full flex flex-col gap-6 animate-[bounce-in_0.5s]">
        <div className="text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-3xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground shadow-[var(--shadow-node)]">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold">Bienvenue sur Nour</h1>
            <p className="text-muted-foreground mt-1 text-sm">Choisis comment on t'appelle.</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <Label htmlFor="name">Ton prénom</Label>
            <Input
              id="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ahmed"
              maxLength={40}
              className="mt-1 h-12 rounded-xl"
            />
          </div>
          <div>
            <Label htmlFor="username">Nom d'utilisateur (pour les amis)</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              placeholder="ahmed_92"
              maxLength={20}
              className="mt-1 h-12 rounded-xl font-mono"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Tes amis pourront t'ajouter avec ce nom.
            </p>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading || !name || !username}
          className="h-14 rounded-2xl text-base font-bold shadow-[var(--shadow-node)] active:translate-y-1"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Commencer"}
        </Button>
      </form>
    </div>
  );
}
