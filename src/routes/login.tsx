import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Loader2, Mail } from "lucide-react";
import { lovable } from "@/integrations/lovable";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (ready && user) navigate({ to: "/" });
  }, [user, ready, navigate]);

  const signInGoogle = async () => {
    setLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) { toast.error("Connexion impossible. Réessaie."); setLoading(false); return; }
    if (result.redirected) return;
    navigate({ to: "/" });
  };

  const signIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { toast.error(error.message); return; }
    navigate({ to: "/" });
  };

  const signUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { emailRedirectTo: window.location.origin },
    });
    setLoading(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Compte créé ! Tu peux te connecter.");
  };

  return (
    <div className="min-h-screen grid place-items-center px-6 bg-[image:var(--gradient-bg)] py-10">
      <div className="max-w-sm w-full flex flex-col items-center gap-6 animate-[bounce-in_0.5s]">
        <div className="w-20 h-20 rounded-3xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground shadow-[var(--shadow-node)]">
          <BookOpen className="w-10 h-10" />
        </div>
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold">Bienvenue sur Nour</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Sauvegarde ta progression sur tous tes appareils.
          </p>
        </div>

        <Button onClick={signInGoogle} disabled={loading} className="w-full h-12 rounded-2xl font-bold gap-3">
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <GoogleIcon />}
          Continuer avec Google
        </Button>

        <div className="flex items-center gap-3 w-full text-xs text-muted-foreground">
          <div className="flex-1 h-px bg-border" /> ou par email <div className="flex-1 h-px bg-border" />
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="signin">Connexion</TabsTrigger>
            <TabsTrigger value="signup">Inscription</TabsTrigger>
          </TabsList>
          <TabsContent value="signin" className="grid gap-3 mt-4">
            <Input type="email" placeholder="email@outlook.com" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
            <Button onClick={signIn} disabled={loading || !email || !password} className="h-12 rounded-2xl font-bold">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Mail className="w-4 h-4 mr-2" /> Se connecter</>}
            </Button>
          </TabsContent>
          <TabsContent value="signup" className="grid gap-3 mt-4">
            <Input type="email" placeholder="email@outlook.com" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="Mot de passe (min. 6)" value={password} onChange={e => setPassword(e.target.value)} />
            <Button onClick={signUp} disabled={loading || !email || password.length < 6} className="h-12 rounded-2xl font-bold">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Créer mon compte"}
            </Button>
          </TabsContent>
        </Tabs>

        <p className="text-xs text-muted-foreground text-center">
          Compte requis pour la progression, le classement et le Premium.
        </p>
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
