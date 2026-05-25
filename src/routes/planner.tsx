import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CalendarDays, ArrowLeft, Check, X, Loader2, Sparkles } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { usePremium } from "@/lib/premium";
import { PremiumLock } from "@/components/PremiumLock";
import { SURAHS } from "@/lib/surahs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "Smart Planner — Nour" },
      { name: "description", content: "Plan dynamique de mémorisation, qui se recalcule si tu manques un jour." },
    ],
  }),
  component: PlannerPage,
});

interface PlanItem { day: number; date: string; verses: number[]; done: boolean; missed?: boolean }
interface Plan { id: string; surah_number: number; target_date: string; items: PlanItem[] }

function distribute(totalVerses: number, days: number, startDay = 1, startDate = new Date()): PlanItem[] {
  const verses = Array.from({ length: totalVerses }, (_, i) => i + 1);
  const perDay = Math.ceil(verses.length / days);
  const items: PlanItem[] = [];
  for (let d = 0; d < days; d++) {
    const chunk = verses.slice(d * perDay, (d + 1) * perDay);
    if (chunk.length === 0) break;
    const date = new Date(startDate);
    date.setDate(date.getDate() + d);
    items.push({ day: startDay + d, date: date.toISOString().slice(0, 10), verses: chunk, done: false });
  }
  return items;
}

function PlannerPage() {
  const navigate = useNavigate();
  const { user, ready } = useAuth();
  const { is_premium, loading: premLoading } = usePremium();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [surahNum, setSurahNum] = useState(67);
  const [days, setDays] = useState(30);

  useEffect(() => {
    if (!ready || !user) return;
    supabase.from("study_plans").select("*").eq("user_id", user.id).order("created_at", { ascending: false })
      .then(({ data }) => { setPlans((data as unknown as Plan[]) || []); setLoading(false); });
  }, [user, ready]);

  if (!ready || premLoading) {
    return <div className="min-h-screen grid place-items-center"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>;
  }

  const createPlan = async () => {
    const surah = SURAHS.find(s => s.number === surahNum) || { verses: 30 };
    const items = distribute(surah.verses, days);
    const target = items[items.length - 1].date;
    const { data, error } = await supabase.from("study_plans").insert({
      user_id: user!.id, surah_number: surahNum, target_date: target, items: items as any,
    }).select().single();
    if (!error && data) setPlans([data as unknown as Plan, ...plans]);
  };

  const recompute = (plan: Plan, changedIdx: number, missed: boolean): Plan => {
    const items = [...plan.items];
    items[changedIdx] = { ...items[changedIdx], missed, done: false };
    // Collect verses from missed/remaining (not done) items from changedIdx onward
    const remainingItems = items.slice(changedIdx);
    const remainingVerses = remainingItems.flatMap(i => i.done ? [] : i.verses);
    const daysLeft = remainingItems.length;
    const startDate = new Date(items[changedIdx].date);
    const redistributed = distribute(
      Math.max(...remainingVerses) - Math.min(...remainingVerses) + 1,
      daysLeft,
      items[changedIdx].day,
      startDate
    );
    // map verses back using actual remaining numbers
    const perDay = Math.ceil(remainingVerses.length / daysLeft);
    const newRemaining: PlanItem[] = [];
    for (let d = 0; d < daysLeft; d++) {
      const chunk = remainingVerses.slice(d * perDay, (d + 1) * perDay);
      if (chunk.length === 0) break;
      const date = new Date(startDate);
      date.setDate(date.getDate() + d);
      newRemaining.push({
        day: items[changedIdx].day + d,
        date: date.toISOString().slice(0, 10),
        verses: chunk, done: false,
      });
    }
    return { ...plan, items: [...items.slice(0, changedIdx), ...newRemaining] };
  };

  const togglePlan = async (plan: Plan, idx: number, action: "done" | "missed") => {
    let updated: Plan;
    if (action === "done") {
      const items = [...plan.items];
      items[idx] = { ...items[idx], done: !items[idx].done, missed: false };
      updated = { ...plan, items };
    } else {
      updated = recompute(plan, idx, true);
    }
    setPlans(plans.map(p => p.id === plan.id ? updated : p));
    await supabase.from("study_plans").update({ items: updated.items: updated.items as any, target_date: updated.items.at(-1)!.date }).eq("id", plan.id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1 max-w-xl w-full mx-auto px-5 py-6">
        <button onClick={() => navigate({ to: "/" })} className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
          <ArrowLeft className="w-4 h-4" /> Retour
        </button>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground"><CalendarDays className="w-6 h-6" /></div>
          <div>
            <h1 className="font-display text-2xl font-bold flex items-center gap-2">Smart Planner <Sparkles className="w-4 h-4 text-gold" /></h1>
            <p className="text-sm text-muted-foreground">Plan dynamique, recalculé si tu manques un jour.</p>
          </div>
        </div>

        {!is_premium ? (
          <PremiumLock title="Smart Planner — Premium" description="Crée des plans intelligents et personnalisés pour mémoriser chaque sourate à ton rythme." />
        ) : (
          <>
            <div className="rounded-2xl border border-border p-4 bg-card grid gap-3">
              <label className="text-sm font-bold">Sourate (numéro coranique)</label>
              <Input type="number" min={1} max={114} value={surahNum} onChange={e => setSurahNum(Number(e.target.value))} />
              <label className="text-sm font-bold">Nombre de jours</label>
              <Input type="number" min={1} max={365} value={days} onChange={e => setDays(Number(e.target.value))} />
              <Button onClick={createPlan} className="rounded-xl font-bold">Créer le plan</Button>
            </div>

            <div className="mt-6 grid gap-4">
              {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : plans.map(plan => (
                <div key={plan.id} className="rounded-2xl border border-border bg-card overflow-hidden">
                  <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                    <div className="font-bold">Sourate {plan.surah_number}</div>
                    <div className="text-xs text-muted-foreground">Fin : {plan.target_date}</div>
                  </div>
                  <div className="divide-y divide-border max-h-96 overflow-y-auto">
                    {plan.items.map((item, i) => (
                      <div key={i} className={cn("flex items-center gap-3 px-4 py-2 text-sm", item.done && "bg-success/5")}>
                        <div className="font-bold tabular-nums w-16">J{item.day}</div>
                        <div className="text-xs text-muted-foreground w-20">{item.date.slice(5)}</div>
                        <div className="flex-1">v.{item.verses[0]}–{item.verses.at(-1)}</div>
                        <button onClick={() => togglePlan(plan, i, "done")} className={cn("w-7 h-7 rounded-full grid place-items-center border", item.done ? "bg-success text-white border-success" : "border-border")}><Check className="w-3.5 h-3.5" /></button>
                        <button onClick={() => togglePlan(plan, i, "missed")} className="w-7 h-7 rounded-full grid place-items-center border border-border text-destructive"><X className="w-3.5 h-3.5" /></button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
