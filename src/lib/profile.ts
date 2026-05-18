import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export interface Profile {
  user_id: string;
  username: string;
  display_name: string;
  avatar_url: string | null;
}

export interface LeaderboardEntry extends Profile {
  xp: number;
  streak: number;
  completed_count: number;
  is_friend: boolean;
  is_self: boolean;
}

export interface FriendRequest {
  id: string;
  requester_id: string;
  addressee_id: string;
  status: "pending" | "accepted";
  profile: Profile; // the other user
}

export function useProfile() {
  const { user, ready: authReady } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setReady(true);
      return;
    }
    const { data } = await supabase
      .from("profiles")
      .select("user_id, username, display_name, avatar_url")
      .eq("user_id", user.id)
      .maybeSingle();
    setProfile(data ?? null);
    setReady(true);
  }, [user]);

  useEffect(() => {
    if (!authReady) return;
    refresh();
  }, [authReady, refresh]);

  const updateProfile = useCallback(
    async (patch: Partial<Pick<Profile, "username" | "display_name" | "avatar_url">>) => {
      if (!user) throw new Error("Not authenticated");
      const { data, error } = await supabase
        .from("profiles")
        .update({ ...patch, updated_at: new Date().toISOString() })
        .eq("user_id", user.id)
        .select()
        .single();
      if (error) throw error;
      setProfile(data);
      return data;
    },
    [user]
  );

  return { profile, ready, refresh, updateProfile };
}

export async function sendFriendRequest(currentUserId: string, username: string) {
  const clean = username.trim().toLowerCase();
  const { data: target, error: fErr } = await supabase
    .from("profiles")
    .select("user_id, username")
    .eq("username", clean)
    .maybeSingle();
  if (fErr) throw fErr;
  if (!target) throw new Error(`Aucun utilisateur "${clean}".`);
  if (target.user_id === currentUserId) throw new Error("Tu ne peux pas t'ajouter toi-même.");

  // Check existing
  const { data: existing } = await supabase
    .from("friendships")
    .select("id, status")
    .or(
      `and(requester_id.eq.${currentUserId},addressee_id.eq.${target.user_id}),and(requester_id.eq.${target.user_id},addressee_id.eq.${currentUserId})`
    )
    .maybeSingle();
  if (existing) {
    if (existing.status === "accepted") throw new Error("Vous êtes déjà amis.");
    throw new Error("Demande déjà en attente.");
  }
  const { error } = await supabase
    .from("friendships")
    .insert({ requester_id: currentUserId, addressee_id: target.user_id });
  if (error) throw error;
}

export async function acceptFriend(friendshipId: string) {
  const { error } = await supabase
    .from("friendships")
    .update({ status: "accepted", updated_at: new Date().toISOString() })
    .eq("id", friendshipId);
  if (error) throw error;
}

export async function removeFriend(friendshipId: string) {
  const { error } = await supabase.from("friendships").delete().eq("id", friendshipId);
  if (error) throw error;
}

export async function fetchFriendships(currentUserId: string): Promise<{
  accepted: FriendRequest[];
  incoming: FriendRequest[];
  outgoing: FriendRequest[];
}> {
  const { data: rows } = await supabase
    .from("friendships")
    .select("id, requester_id, addressee_id, status")
    .or(`requester_id.eq.${currentUserId},addressee_id.eq.${currentUserId}`);
  const list = rows ?? [];
  const otherIds = Array.from(
    new Set(list.map((r) => (r.requester_id === currentUserId ? r.addressee_id : r.requester_id)))
  );
  let profiles: Profile[] = [];
  if (otherIds.length) {
    const { data } = await supabase
      .from("profiles")
      .select("user_id, username, display_name, avatar_url")
      .in("user_id", otherIds);
    profiles = data ?? [];
  }
  const pmap = new Map(profiles.map((p) => [p.user_id, p]));
  const build = (r: (typeof list)[number]): FriendRequest => ({
    id: r.id,
    requester_id: r.requester_id,
    addressee_id: r.addressee_id,
    status: r.status as "pending" | "accepted",
    profile: pmap.get(r.requester_id === currentUserId ? r.addressee_id : r.requester_id) ?? {
      user_id: "",
      username: "?",
      display_name: "Utilisateur",
      avatar_url: null,
    },
  });
  return {
    accepted: list.filter((r) => r.status === "accepted").map(build),
    incoming: list
      .filter((r) => r.status === "pending" && r.addressee_id === currentUserId)
      .map(build),
    outgoing: list
      .filter((r) => r.status === "pending" && r.requester_id === currentUserId)
      .map(build),
  };
}

// Leaderboard: self + accepted friends, ranked by XP.
export async function fetchLeaderboard(currentUserId: string): Promise<LeaderboardEntry[]> {
  const { accepted } = await fetchFriendships(currentUserId);
  const friendIds = accepted.map((f) => f.profile.user_id).filter(Boolean);
  const ids = [currentUserId, ...friendIds];

  const [{ data: profiles }, { data: progs }] = await Promise.all([
    supabase
      .from("profiles")
      .select("user_id, username, display_name, avatar_url")
      .in("user_id", ids),
    supabase.from("user_progress").select("user_id, xp, streak, completed").in("user_id", ids),
  ]);

  const pmap = new Map((progs ?? []).map((p) => [p.user_id, p]));
  return (profiles ?? [])
    .map((p): LeaderboardEntry => {
      const stat = pmap.get(p.user_id);
      return {
        ...p,
        xp: stat?.xp ?? 0,
        streak: stat?.streak ?? 0,
        completed_count: stat?.completed?.length ?? 0,
        is_friend: friendIds.includes(p.user_id),
        is_self: p.user_id === currentUserId,
      };
    })
    .sort((a, b) => b.xp - a.xp);
}
