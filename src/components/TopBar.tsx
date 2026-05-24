import { Flame, Star, BookOpen, LogOut, User as UserIcon, Trophy, Coins, Gift, Shirt } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useProgress } from "@/lib/progress";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/lib/profile";
import { useGame } from "@/lib/game";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopBar() {
  const { progress } = useProgress();
  const { user, signOut } = useAuth();
  const { profile } = useProfile();
  const { state } = useGame();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground shadow-[var(--shadow-soft)]">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight hidden sm:inline">Nour</span>
        </Link>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end">
          <Stat icon={<Flame className="w-4 h-4 text-orange-500" fill="currentColor" />} value={progress.streak} label="j" />
          <Stat icon={<Star className="w-4 h-4 text-gold" fill="currentColor" />} value={progress.xp} label="XP" />
          <Stat icon={<Coins className="w-4 h-4 text-gold" fill="currentColor" />} value={state.coins} label="" />
          <Link
            to="/chests"
            aria-label="Coffres"
            className="w-9 h-9 rounded-full bg-secondary grid place-items-center hover:ring-2 ring-primary/30 transition"
          >
            <Gift className="w-4 h-4 text-primary" />
          </Link>
          <Link
            to="/wardrobe"
            aria-label="Vestiaire"
            className="w-9 h-9 rounded-full bg-secondary grid place-items-center hover:ring-2 ring-primary/30 transition"
          >
            <Shirt className="w-4 h-4 text-primary" />
          </Link>
          <Link
            to="/leaderboard"
            aria-label="Classement"
            className="w-9 h-9 rounded-full bg-secondary grid place-items-center hover:ring-2 ring-primary/30 transition"
          >
            <Trophy className="w-4 h-4 text-gold" fill="currentColor" />
          </Link>
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger className="w-9 h-9 rounded-full bg-secondary grid place-items-center hover:ring-2 ring-primary/30 transition overflow-hidden">
                {user.user_metadata?.avatar_url ? (
                  <img src={user.user_metadata.avatar_url} alt="" className="w-9 h-9 rounded-full" />
                ) : profile ? (
                  <span className="font-bold text-sm">{profile.display_name.charAt(0).toUpperCase()}</span>
                ) : (
                  <UserIcon className="w-4 h-4" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="text-xs">
                  {profile ? (
                    <>
                      <div className="font-bold">{profile.display_name}</div>
                      <div className="text-muted-foreground">@{profile.username}</div>
                    </>
                  ) : (
                    <div className="text-muted-foreground truncate max-w-[200px]">{user.email}</div>
                  )}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/onboarding"><UserIcon className="w-4 h-4 mr-2" /> Modifier le profil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="w-4 h-4 mr-2" /> Se déconnecter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full">
      {icon}
      <span className="font-bold text-sm tabular-nums">{value}</span>
      <span className="text-xs text-muted-foreground hidden sm:inline">{label}</span>
    </div>
  );
}
