import { Flame, Star, BookOpen, LogIn, LogOut, User as UserIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useProgress } from "@/lib/progress";
import { useAuth } from "@/hooks/useAuth";
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
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground shadow-[var(--shadow-soft)]">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">Nour</span>
        </Link>
        <div className="flex items-center gap-2">
          <Stat icon={<Flame className="w-4 h-4 text-orange-500" fill="currentColor" />} value={progress.streak} label="j" />
          <Stat icon={<Star className="w-4 h-4 text-gold" fill="currentColor" />} value={progress.xp} label="XP" />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="w-9 h-9 rounded-full bg-secondary grid place-items-center hover:ring-2 ring-primary/30 transition">
                {user.user_metadata?.avatar_url ? (
                  <img src={user.user_metadata.avatar_url} alt="" className="w-9 h-9 rounded-full" />
                ) : (
                  <UserIcon className="w-4 h-4" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="text-xs text-muted-foreground truncate max-w-[200px]">
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="w-4 h-4 mr-2" /> Se déconnecter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-[var(--shadow-soft)]"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Se connecter</span>
            </Link>
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
