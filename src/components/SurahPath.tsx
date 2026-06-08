import { Link } from "@tanstack/react-router";
import { Lock, Check, Star, Medal, GraduationCap, Trophy } from "lucide-react";
import {
  CURRICULUM,
  FLAT_CURRICULUM,
  isNodeUnlocked,
  getPassedJuz,
  juzQuizUnlocked,
  type CurriculumNode,
} from "@/lib/curriculum";
import { useProgress } from "@/lib/progress";
import { useSurahProgress } from "@/lib/surah-progress";
import { useMastery, badgeColor, type Badge } from "@/lib/mastery";
import { getStrengthColor } from "@/lib/spaced-repetition";
import { cn } from "@/lib/utils";

export function SurahPath() {
  const { progress, ready } = useProgress();
  const { byNumber } = useSurahProgress();
  const { mastery } = useMastery();
  if (!ready) return null;

  const masteredIds = Object.keys(mastery).map(Number);
  const passedJuz = getPassedJuz();

  let flatIndex = -1;
  return (
    <div className="max-w-md mx-auto px-4 py-8 pb-32 md:pb-8">
      {CURRICULUM.map((section) => (
        <div key={section.id} className="mb-14">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              Section {section.id}
            </p>
            <h2 className="font-display text-3xl font-bold mt-1">{section.name}</h2>
            <p className="font-[Amiri_Quran] text-lg text-muted-foreground mt-1">
              {section.arabicName}
            </p>
            <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
              {section.description}
            </p>
          </div>

          <div className="relative flex flex-col items-center gap-10">
            {section.nodes.map((node, i) => {
              flatIndex += 1;
              const idx = flatIndex;
              const unlocked = isNodeUnlocked(idx, progress.completed, masteredIds, passedJuz);
              const offset = [0, 60, 30, -30, -60, -30, 0][i % 7];

              if (node.kind === "quiz") {
                const quizOpen = unlocked && juzQuizUnlocked(node.juzId!, masteredIds);
                const passed = passedJuz.includes(node.juzId!);
                return (
                  <div
                    key={`${section.id}-quiz-${node.juzId}`}
                    style={{ transform: `translateX(${offset}px)` }}
                    className="relative animate-fade-in-up"
                  >
                    <QuizNode node={node} open={quizOpen} passed={passed} />
                  </div>
                );
              }

              const completed = node.surahId != null && progress.completed.includes(node.surahId);
              const masteryEntry = node.surahId != null ? mastery[node.surahId] : undefined;
              const sr = byNumber.get(node.quranNumber);
              const srColor = sr ? getStrengthColor(sr.memory_strength, sr.last_reviewed_at).color : null;
              const showExam = unlocked && completed && !masteryEntry && node.surahId != null;
              return (
                <div
                  key={`${section.id}-${node.quranNumber}`}
                  style={{ transform: `translateX(${offset}px)` }}
                  className="relative animate-fade-in-up"
                >
                  <SurahNode
                    node={node}
                    unlocked={unlocked}
                    completed={completed}
                    isFirst={idx === 0}
                    srColor={srColor}
                    badge={masteryEntry?.badge}
                    mastered={!!masteryEntry}
                  />
                  {showExam && (
                    <Link
                      to="/exam/$surahId"
                      params={{ surahId: String(node.surahId) }}
                      className="absolute left-1/2 -bottom-7 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-[var(--shadow-gold)] active:translate-y-0.5 animate-glow-pulse whitespace-nowrap"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      Évaluation finale
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <p className="text-center text-xs text-muted-foreground pt-2">
        {FLAT_CURRICULUM.filter((n) => n.surahId != null).length} leçons disponibles · plus à venir ✨
      </p>
    </div>
  );
}

function SurahNode({
  node,
  unlocked,
  completed,
  isFirst,
  srColor,
  badge,
  mastered,
}: {
  node: CurriculumNode;
  unlocked: boolean;
  completed: boolean;
  isFirst: boolean;
  srColor: string | null;
  badge?: Badge;
  mastered: boolean;
}) {
  const interactive = unlocked && !node.comingSoon && node.surahId != null;
  const inner = (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className={cn(
          "relative w-24 h-24 rounded-full grid place-items-center text-4xl transition-all duration-200",
          interactive && "active:translate-y-1",
          interactive && !mastered && "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-node)] group-hover:scale-105",
          interactive && mastered && "bg-gold text-primary-foreground shadow-[var(--shadow-gold)] node-mastered",
          (!unlocked || node.comingSoon) && "bg-muted text-muted-foreground/40 shadow-[var(--shadow-node-locked)] cursor-not-allowed",
          isFirst && interactive && !mastered && "animate-float"
        )}
      >
        <span className="drop-shadow-sm">{node.icon}</span>
        {!unlocked && (
          <div className="absolute inset-0 grid place-items-center">
            <Lock className="w-7 h-7" />
          </div>
        )}
        {completed && !mastered && (
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-success grid place-items-center border-4 border-background">
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
        )}
        {badge && (
          <div className={cn(
            "absolute -bottom-1 -right-1 w-9 h-9 rounded-full grid place-items-center border-4 border-background",
            badgeColor(badge)
          )}>
            <Medal className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
        )}
        {unlocked && node.comingSoon && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-muted text-[10px] font-bold text-muted-foreground whitespace-nowrap border border-border">
            BIENTÔT
          </div>
        )}
        {!unlocked && (
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-muted grid place-items-center border-4 border-background">
            <Star className="w-3 h-3 text-muted-foreground" />
          </div>
        )}
        {srColor && (
          <div
            className={cn(
              "absolute -top-1 -left-1 w-4 h-4 rounded-full border-2 border-background",
              srColor
            )}
            aria-label="Force de mémoire"
          />
        )}
      </div>
      <div className="text-center pt-1">
        <div className="font-display font-bold">{node.name}</div>
        <div className="text-xs text-muted-foreground">
          n°{node.quranNumber} · {node.meaning}
        </div>
      </div>
    </div>
  );

  if (!interactive) return inner;
  return (
    <Link to="/lesson/$surahId" params={{ surahId: String(node.surahId) }}>
      {inner}
    </Link>
  );
}
