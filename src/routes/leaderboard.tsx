import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { Trophy, UserPlus, Check, X, Loader2, Flame, Star, ArrowLeft } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { useAuth } from "@/hooks/useAuth";
import {
  fetchLeaderboard,
  fetchFriendships,
  sendFriendRequest,
  acceptFriend,
  removeFriend,
  type LeaderboardEntry,
  type FriendRequest,
} from "@/lib/profile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Classement — Nour" },
      { name: "description", content: "Compare tes progrès avec tes amis et défie-les sur le Coran." },
    ],
  }),
  component: LeaderboardPage,
});

function LeaderboardPage() {
  const { user, ready } = useAuth();
  const navigate = useNavigate();
  const [board, setBoard] = useState<LeaderboardEntry[]>([]);
  const [incoming, setIncoming] = useState<FriendRequest[]>([]);
  const [outgoing, setOutgoing] = useState<FriendRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [usernameInput, setUsernameInput] = useState("");
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (ready && !user) navigate({ to: "/login" });
  }, [ready, user, navigate]);

  const load = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const [b, f] = await Promise.all([fetchLeaderboard(user.id), fetchFriendships(user.id)]);
      setBoard(b);
      setIncoming(f.incoming);
      setOutgoing(f.outgoing);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) load();
  }, [user, load]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !usernameInput.trim()) return;
    setAdding(true);
    try {
      await sendFriendRequest(user.id, usernameInput);
      toast.success("Demande envoyée !");
      setUsernameInput("");
      load();
    } catch (err: any) {
      toast.error(err?.message ?? "Échec");
    } finally {
      setAdding(false);
    }
  };

  const handleAccept = async (id: string) => {
    await acceptFriend(id);
    toast.success("Ami ajouté !");
    load();
  };
  const handleReject = async (id: string) => {
    await removeFriend(id);
    load();
  };

  if (!ready || loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <div className="flex-1 grid place-items-center">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1 max-w-md w-full mx-auto px-4 py-6 space-y-6">
        <button
          onClick={() => navigate({ to: "/" })}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" /> Retour
        </button>

        <header className="text-center">
          <div className="inline-flex w-16 h-16 rounded-3xl bg-gold/15 text-gold items-center justify-center mb-2">
            <Trophy className="w-8 h-8" fill="currentColor" />
          </div>
          <h1 className="font-display text-2xl font-bold">Classement</h1>
          <p className="text-sm text-muted-foreground">Toi et tes amis, classés par XP.</p>
        </header>

        {/* Add friend */}
        <form
          onSubmit={handleAdd}
          className="bg-card border border-border rounded-2xl p-4 space-y-3 shadow-sm"
        >
          <div className="flex items-center gap-2 font-semibold">
            <UserPlus className="w-4 h-4 text-primary" /> Ajouter un ami
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="nom d'utilisateur"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value.toLowerCase())}
              maxLength={20}
              className="font-mono h-11 rounded-xl"
            />
            <Button type="submit" disabled={adding || !usernameInput.trim()} className="h-11 rounded-xl">
              {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : "Ajouter"}
            </Button>
          </div>
        </form>

        {/* Incoming requests */}
        {incoming.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground px-1">
              Demandes reçues
            </h2>
            {incoming.map((r) => (
              <div
                key={r.id}
                className="bg-card border border-border rounded-2xl p-3 flex items-center gap-3"
              >
                <Avatar p={r.profile} />
                <div className="flex-1 min-w-0">
                  <div className="font-bold truncate">{r.profile.display_name}</div>
                  <div className="text-xs text-muted-foreground truncate">@{r.profile.username}</div>
                </div>
                <Button size="icon" onClick={() => handleAccept(r.id)} className="h-9 w-9 rounded-full">
                  <Check className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleReject(r.id)}
                  className="h-9 w-9 rounded-full"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </section>
        )}

        {/* Outgoing requests */}
        {outgoing.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground px-1">
              En attente
            </h2>
            {outgoing.map((r) => (
              <div
                key={r.id}
                className="bg-card/50 border border-border rounded-2xl p-3 flex items-center gap-3"
              >
                <Avatar p={r.profile} />
                <div className="flex-1 min-w-0">
                  <div className="font-bold truncate">{r.profile.display_name}</div>
                  <div className="text-xs text-muted-foreground truncate">@{r.profile.username}</div>
                </div>
                <span className="text-xs text-muted-foreground">en attente…</span>
              </div>
            ))}
          </section>
        )}

        {/* Leaderboard */}
        <section className="space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground px-1">
            Top
          </h2>
          {board.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">
              Ajoute des amis pour les voir ici.
            </p>
          ) : (
            board.map((e, i) => (
              <div
                key={e.user_id}
                className={cn(
                  "rounded-2xl p-3 flex items-center gap-3 border",
                  e.is_self
                    ? "bg-primary/10 border-primary/30"
                    : "bg-card border-border"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full grid place-items-center font-bold text-sm shrink-0",
                    i === 0 && "bg-gold text-white",
                    i === 1 && "bg-muted-foreground/40 text-white",
                    i === 2 && "bg-orange-400 text-white",
                    i > 2 && "bg-muted text-muted-foreground"
                  )}
                >
                  {i + 1}
                </div>
                <Avatar p={e} />
                <div className="flex-1 min-w-0">
                  <div className="font-bold truncate">
                    {e.display_name} {e.is_self && <span className="text-xs text-primary">(toi)</span>}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">@{e.username}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center gap-1 font-bold text-sm tabular-nums">
                    <Star className="w-3.5 h-3.5 text-gold" fill="currentColor" /> {e.xp}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground tabular-nums">
                    <Flame className="w-3 h-3 text-orange-500" fill="currentColor" /> {e.streak}j
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

function Avatar({ p }: { p: { display_name: string; avatar_url: string | null } }) {
  if (p.avatar_url) {
    return <img src={p.avatar_url} alt="" className="w-10 h-10 rounded-full shrink-0" />;
  }
  const initial = p.display_name.charAt(0).toUpperCase() || "?";
  return (
    <div className="w-10 h-10 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground grid place-items-center font-bold shrink-0">
      {initial}
    </div>
  );
}
