import { Link } from "@tanstack/react-router";
import { Home, CalendarDays, BarChart3, Users, Crown } from "lucide-react";

const items = [
  { to: "/", label: "Parcours", icon: Home, exact: true },
  { to: "/planner", label: "Planner", icon: CalendarDays, exact: false },
  { to: "/stats", label: "Stats", icon: BarChart3, exact: false },
  { to: "/leaderboard", label: "Communauté", icon: Users, exact: false },
  { to: "/premium", label: "Premium", icon: Crown, exact: false },
] as const;

export function BottomNav() {
  return (
    <nav
      aria-label="Navigation principale"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pt-2"
    >
      <div className="glass-panel rounded-2xl px-1.5 py-1.5 flex items-center justify-between shadow-[var(--shadow-soft)]">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            activeOptions={{ exact: it.exact }}
            className="flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-xl text-muted-foreground transition-all active:scale-95 data-[status=active]:text-primary-foreground data-[status=active]:bg-[image:var(--gradient-primary)] data-[status=active]:shadow-[var(--shadow-soft)]"
          >
            <it.icon className="w-5 h-5" />
            <span className="text-[10px] font-semibold">{it.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
