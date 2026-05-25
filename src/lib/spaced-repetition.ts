// src/lib/spaced-repetition.ts
export function getStrengthColor(
  memory_strength: number,
  last_reviewed_at: string | null
): { color: string; label: string; urgency: "low" | "medium" | "high" } {
  const daysSince = last_reviewed_at
    ? Math.max(0, Math.floor((Date.now() - new Date(last_reviewed_at).getTime()) / 86400000))
    : 999;

  if (memory_strength >= 70 && daysSince < 3) {
    return { color: "bg-success", label: "Maîtrisé", urgency: "low" };
  }
  if ((memory_strength >= 40 && memory_strength < 70) || (daysSince >= 3 && daysSince < 7)) {
    return { color: "bg-amber-400", label: "Révision moyenne", urgency: "medium" };
  }
  return { color: "bg-red-400", label: "Révision urgente", urgency: "high" };
}
