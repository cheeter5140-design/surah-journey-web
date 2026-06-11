import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Mic } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { useProgress } from "@/lib/progress";
import { useMastery } from "@/lib/mastery";
import { useSurahProgress } from "@/lib/surah-progress";
import { useMemorization } from "@/lib/memorization";
import { FLAT_CURRICULUM } from "@/lib/curriculum";
import { useLocalizedSurahs } from "@/lib/surah-localization";
import { getStrengthColor } from "@/lib/spaced-repetition";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/stats")({
  head: () => ({ meta: [{ title: "Statistiques — Nour" }] }),
  component: StatsPage,
});

function StatsPage() {
  const { progress } = useProgress();
  const { mastery } = useMastery();
  const { rows } = useSurahProgress();
  const { data: memData } = useMemorization();
  const surahs = useLocalizedSurahs();

  const totalCurated = FLAT_CURRICULUM.filter((n) => n.surahId != null).length;
  const completed = progress.completed.length;
  const pct = Math.round((completed / Math.max(1, totalCurated)) * 100);

  // Heatmap: last 12 weeks based on rows.last_reviewed_at + today's lastActive
  const heat = useMemo(() => buildHeatmap(rows.map((r) => r.last_reviewed_at).filter(Boolean) as string[], progress.lastActive), [rows, progress.lastActive]);

  // Retention: fresh (<7 days), need review (>14 days), in between
  const now = Date.now();
  const fresh = rows.filter((r) => r.last_reviewed_at && now - new Date(r.last_reviewed_at).getTime() < 7 * 86400000).length;
  const review = rows.filter((r) => r.last_reviewed_at && now - new Date(r.last_reviewed_at).getTime() > 14 * 86400000).length;
  const mid = Math.max(0, rows.length - fresh - review);

  const totalRetention = Math.max(1, rows.length);
  const goldCount = Object.values(mastery).filter((m) => m.badge === "gold").length;
  const silverCount = Object.values(mastery).filter((m) => m.badge === "silver").length;
  const bronzeCount = Object.values(mastery).filter((m) => m.badge === "bronze").length;

  return (
    <div className="min-h-screen flex flex-col pb-24 md:pb-0">
      <TopBar />
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 space-y-6">
        <header className="animate-fade-in-up">
          <h1 className="font-display text-3xl font-bold">Statistiques</h1>
          <p className="text-muted-foreground">Visualise ta progression dans Juz 'Amma.</p>
        </header>

        <section className="grid sm:grid-cols-2 gap-4">
          <div className="glass-panel rounded-3xl p-6 flex items-center gap-5">
            <CircularProgress percent={pct} />
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-primary font-bold">Juz Amma</div>
              <div className="font-display text-2xl font-bold">{pct}% mémorisé</div>
              <div className="text-sm text-muted-foreground">{completed} / {totalCurated} sourates</div>
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-primary font-bold">Badges</div>
            <div className="flex items-center gap-4 mt-3">
              <BadgePill color="bg-gold" label="Or" value={goldCount} />
              <BadgePill color="bg-slate-300" label="Argent" value={silverCount} />
              <BadgePill color="bg-amber-700" label="Bronze" value={bronzeCount} />
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Série actuelle : <span className="font-bold text-foreground">{progress.streak} j</span> · XP : <span className="font-bold text-foreground">{progress.xp}</span>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-3xl p-6">
          <h2 className="font-display text-xl font-bold">Activité (12 dernières semaines)</h2>
          <p className="text-sm text-muted-foreground">Plus c'est foncé, plus tu as pratiqué.</p>
          <div className="mt-4 overflow-x-auto">
            <div className="grid grid-flow-col auto-cols-max gap-1">
              {heat.map((week, wi) => (
                <div key={wi} className="grid grid-rows-7 gap-1">
                  {week.map((v, di) => (
                    <div
                      key={di}
                      title={v.date}
                      className={cn(
                        "w-3 h-3 rounded-sm",
                        v.count === 0 && "bg-muted",
                        v.count === 1 && "bg-primary/30",
                        v.count === 2 && "bg-primary/60",
                        v.count >= 3 && "bg-primary"
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-3xl p-6">
          <h2 className="font-display text-xl font-bold">Rétention</h2>
          <p className="text-sm text-muted-foreground">État de fraîcheur de tes sourates étudiées.</p>
          <div className="mt-4 space-y-2">
            <RetentionBar label="Fraîches" value={fresh} total={totalRetention} color="bg-success" />
            <RetentionBar label="À surveiller" value={mid} total={totalRetention} color="bg-gold" />
            <RetentionBar label="À réviser" value={review} total={totalRetention} color="bg-destructive" />
          </div>
        </section>

        {rows.length > 0 && (
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="font-display text-xl font-bold">Force de mémoire</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-2">
              {rows.map((r) => {
                const c = getStrengthColor(r.memory_strength, r.last_reviewed_at);
                return (
                  <div key={r.surah_number} className="flex items-center gap-3 p-3 rounded-xl bg-card/60 border border-border">
                    <span className={cn("w-3 h-3 rounded-full", c.color)} />
                    <div className="flex-1">
                      <div className="font-bold text-sm">Sourate n°{r.surah_number}</div>
                      <div className="text-xs text-muted-foreground">{r.memory_strength}% — {c.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
        <MemorizationSection memData={memData} surahs={surahs} />
      </main>
      <BottomNav />
    </div>
  );
}

function MemorizationSection({ memData, surahs }: { memData: Record<number, { pct: number; verses: number[]; updatedAt: string }>; surahs: ReturnType<typeof useLocalizedSurahs> }) {
  const entries = Object.entries(memData)
    .map(([id, v]) => ({ id: Number(id), ...v, surah: surahs.find((s) => s.id === Number(id)) }))
    .filter((e) => e.surah)
    .sort((a, b) => b.pct - a.pct);
  const fullCount = entries.filter((e) => e.pct >= 95).length;
  const avg = entries.length ? Math.round(entries.reduce((a, e) => a + e.pct, 0) / entries.length) : 0;
  return (
    <section className="glass-panel rounded-3xl p-6">
      <div className="flex items-center justify-between mb-1">
        <h2 className="font-display text-xl font-bold flex items-center gap-2">
          <Mic className="w-5 h-5 text-primary" /> Mémorisation
        </h2>
        <div className="text-xs text-muted-foreground">{fullCount} entièrement · {avg}% moy.</div>
      </div>
      <p className="text-sm text-muted-foreground">Sourates récitées au micro et leur score.</p>
      {entries.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-dashed border-border p-6 text-center">
          <p className="text-sm text-muted-foreground">Aucune mémorisation pour l'instant.</p>
          <Link to="/" className="inline-block mt-2 text-sm font-bold text-primary">Commencer une sourate →</Link>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {entries.map((e) => (
            <Link
              key={e.id}
              to="/memorize/$surahId"
              params={{ surahId: String(e.id) }}
              className="flex items-center gap-3 p-3 rounded-xl bg-card/60 border border-border hover:border-primary/40 transition"
            >
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm truncate">{e.surah!.name} <span className="font-[Amiri_Quran] text-muted-foreground ml-1">{e.surah!.nameArabic}</span></div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden mt-1.5">
                  <div className={cn("h-full transition-all", e.pct >= 95 ? "bg-gold" : "bg-primary")} style={{ width: `${e.pct}%` }} />
                </div>
              </div>
              <div className="font-display font-bold text-lg tabular-nums shrink-0 w-12 text-right">{e.pct}%</div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

function CircularProgress({ percent }: { percent: number }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const off = c - (c * percent) / 100;
  return (
    <svg width="92" height="92" viewBox="0 0 92 92" className="shrink-0">
      <circle cx="46" cy="46" r={r} stroke="var(--muted)" strokeWidth="10" fill="none" />
      <circle
        cx="46"
        cy="46"
        r={r}
        stroke="var(--primary)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={off}
        transform="rotate(-90 46 46)"
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
      <text x="46" y="51" textAnchor="middle" className="font-display font-bold" fontSize="18" fill="currentColor">{percent}%</text>
    </svg>
  );
}

function BadgePill({ color, label, value }: { color: string; label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn("w-5 h-5 rounded-full", color)} />
      <div>
        <div className="font-display font-bold text-lg leading-none">{value}</div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function RetentionBar({ label, value, total, color }: { label: string; value: number; total: number; color: string }) {
  const pct = Math.round((value / Math.max(1, total)) * 100);
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-bold">{label}</span>
        <span className="text-muted-foreground">{value} ({pct}%)</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className={cn("h-full transition-all", color)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function buildHeatmap(isoDates: string[], lastActive: string) {
  const counts = new Map<string, number>();
  for (const d of isoDates) {
    const key = d.slice(0, 10);
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  if (lastActive) counts.set(lastActive, (counts.get(lastActive) || 0) + 1);

  const weeks: { date: string; count: number }[][] = [];
  const today = new Date();
  // Start 12 weeks back, aligned to Sunday
  const start = new Date(today);
  start.setDate(today.getDate() - 7 * 11 - today.getDay());
  for (let w = 0; w < 12; w++) {
    const week: { date: string; count: number }[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(start);
      date.setDate(start.getDate() + w * 7 + d);
      const key = date.toISOString().slice(0, 10);
      week.push({ date: key, count: counts.get(key) || 0 });
    }
    weeks.push(week);
  }
  return weeks;
}
