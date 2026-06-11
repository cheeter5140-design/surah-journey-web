import { SURAHS } from "./surahs";
import { getLocalizedSurahMeta } from "./surah-localization";
import type { Lang } from "./preferences";

export type NodeKind = "surah" | "quiz";

export interface CurriculumNode {
  kind: NodeKind;
  // surah node
  surahId?: number; // links to SURAHS.id when curated
  quranNumber: number; // for surah; for quiz we set 0
  name: string;
  nameArabic: string;
  meaning: string;
  verses: number;
  icon: string;
  comingSoon?: boolean;
  // quiz node
  juzId?: number;
}

export interface Section {
  id: number; // juz number
  name: string;
  arabicName: string;
  description: string;
  nodes: CurriculumNode[];
}

const byNumber = new Map(SURAHS.map((s) => [s.number, s] as const));

function surahNode(quranNumber: number): CurriculumNode {
  const s = byNumber.get(quranNumber);
  if (s) {
    return {
      kind: "surah",
      surahId: s.id,
      quranNumber: s.number,
      name: s.name,
      nameArabic: s.nameArabic,
      meaning: s.meaning,
      verses: s.verses,
      icon: s.icon,
    };
  }
  // stub for surahs not yet in dataset
  const meta = STUB_META[quranNumber];
  return {
    kind: "surah",
    quranNumber,
    name: meta?.name ?? `Sourate ${quranNumber}`,
    nameArabic: meta?.nameArabic ?? "",
    meaning: meta?.meaning ?? "",
    verses: meta?.verses ?? 0,
    icon: meta?.icon ?? "📖",
    comingSoon: true,
  };
}

function quizNode(juzId: number): CurriculumNode {
  return {
    kind: "quiz",
    juzId,
    quranNumber: 0,
    name: `Test final · Juz ${juzId}`,
    nameArabic: `اختبار جزء ${juzId}`,
    meaning: "5 questions pour valider ce Juz",
    verses: 5,
    icon: "🏆",
  };
}

// Light metadata for stub surahs (no dataset yet)
const STUB_META: Record<number, { name: string; nameArabic: string; meaning: string; verses: number; icon: string }> = {
  77: { name: "Al-Mursalat", nameArabic: "المرسلات", meaning: "Les Envoyés", verses: 50, icon: "🕊️" },
  76: { name: "Al-Insan", nameArabic: "الإنسان", meaning: "L'Homme", verses: 31, icon: "🧍" },
  75: { name: "Al-Qiyama", nameArabic: "القيامة", meaning: "La Résurrection", verses: 40, icon: "🔔" },
  74: { name: "Al-Muddathir", nameArabic: "المدثر", meaning: "Le Revêtu", verses: 56, icon: "🧣" },
  73: { name: "Al-Muzzammil", nameArabic: "المزمل", meaning: "L'Enveloppé", verses: 20, icon: "🧥" },
  72: { name: "Al-Jinn", nameArabic: "الجن", meaning: "Les Djinns", verses: 28, icon: "🌬️" },
  71: { name: "Nuh", nameArabic: "نوح", meaning: "Noé", verses: 28, icon: "🚢" },
  70: { name: "Al-Ma'arij", nameArabic: "المعارج", meaning: "Les Voies d'Ascension", verses: 44, icon: "🪜" },
  69: { name: "Al-Haqqa", nameArabic: "الحاقة", meaning: "L'Inévitable", verses: 52, icon: "⚡" },
  68: { name: "Al-Qalam", nameArabic: "القلم", meaning: "La Plume", verses: 52, icon: "🖋️" },
  67: { name: "Al-Mulk", nameArabic: "الملك", meaning: "La Royauté", verses: 30, icon: "👑" },
  66: { name: "At-Tahrim", nameArabic: "التحريم", meaning: "L'Interdiction", verses: 12, icon: "🤐" },
  65: { name: "At-Talaq", nameArabic: "الطلاق", meaning: "Le Divorce", verses: 12, icon: "💔" },
  64: { name: "At-Taghabun", nameArabic: "التغابن", meaning: "La Grande Perte", verses: 18, icon: "⚖️" },
  63: { name: "Al-Munafiqun", nameArabic: "المنافقون", meaning: "Les Hypocrites", verses: 11, icon: "🎭" },
  62: { name: "Al-Jumu'a", nameArabic: "الجمعة", meaning: "Le Vendredi", verses: 11, icon: "🕌" },
  61: { name: "As-Saff", nameArabic: "الصف", meaning: "Le Rang", verses: 14, icon: "🪖" },
  60: { name: "Al-Mumtahana", nameArabic: "الممتحنة", meaning: "L'Éprouvée", verses: 13, icon: "🔍" },
  59: { name: "Al-Hashr", nameArabic: "الحشر", meaning: "L'Exode", verses: 24, icon: "🚶" },
  58: { name: "Al-Mujadila", nameArabic: "المجادلة", meaning: "La Discussion", verses: 22, icon: "💬" },
};

// User-requested order: Al-Fatiha first, then 114 down to 2, grouped by Juz.
// Each section ends with a final quiz node.
function range(from: number, to: number): number[] {
  const out: number[] = [];
  if (from >= to) for (let n = from; n >= to; n--) out.push(n);
  else for (let n = from; n <= to; n++) out.push(n);
  return out;
}

export const CURRICULUM: Section[] = [
  {
    id: 30,
    name: "Juz 30 · 'Amma",
    arabicName: "جزء عمّ",
    description: "L'ouverture du Livre, puis les protectrices, en descendant vers An-Naba'.",
    nodes: [
      surahNode(1), // Al-Fatiha first
      ...range(114, 78).map(surahNode),
      quizNode(30),
    ],
  },
  {
    id: 29,
    name: "Juz 29 · Tabarak",
    arabicName: "جزء تبارك",
    description: "Du Roi (Al-Mulk) aux Envoyés (Al-Mursalat).",
    nodes: [
      ...range(77, 67).map(surahNode),
      quizNode(29),
    ],
  },
  {
    id: 28,
    name: "Juz 28 · Qad sami'a",
    arabicName: "جزء قد سمع",
    description: "De Al-Mujadila à At-Tahrim — bientôt disponible.",
    nodes: [
      ...range(66, 58).map(surahNode),
      quizNode(28),
    ],
  },
];

const SECTION_DESCRIPTIONS_EN: Record<number, string> = {
  30: "The Opening of the Book, then the protective Surahs, descending toward An-Naba.",
  29: "From the Sovereignty (Al-Mulk) to the Emissaries (Al-Mursalat).",
  28: "From Al-Mujadila to At-Tahrim — coming soon.",
};

export function getLocalizedCurriculum(lang: Lang): Section[] {
  if (lang !== "en") return CURRICULUM;
  return CURRICULUM.map((section) => ({
    ...section,
    description: SECTION_DESCRIPTIONS_EN[section.id] ?? section.description,
    nodes: section.nodes.map((node) => {
      if (node.kind === "quiz") {
        return {
          ...node,
          name: `Final test · Juz ${node.juzId}`,
          meaning: "5 questions to validate this Juz",
        };
      }
      const meta = getLocalizedSurahMeta(node.quranNumber, lang);
      return {
        ...node,
        name: meta.name ?? node.name,
        meaning: meta.meaning ?? node.meaning,
      };
    }),
  }));
}

// Flat list (in unlock order) — useful for index lookups
export const FLAT_CURRICULUM: CurriculumNode[] = CURRICULUM.flatMap((s) => s.nodes);

const QUIZ_KEY = "qpath_juz_quiz_v1";
export function getPassedJuz(): number[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(QUIZ_KEY) || "[]"); } catch { return []; }
}
export function markJuzPassed(juzId: number) {
  if (typeof window === "undefined") return;
  const arr = getPassedJuz();
  if (!arr.includes(juzId)) {
    arr.push(juzId);
    localStorage.setItem(QUIZ_KEY, JSON.stringify(arr));
  }
}

// A node is unlocked when:
//  - it is the first node, OR
//  - the previous *curated* surah has been mastered, OR
//  - we crossed a quiz boundary: previous juz quiz was passed
// Stubs (coming soon) do not block.
export function isNodeUnlocked(
  index: number,
  completedSurahIds: number[],
  masteredSurahIds?: number[],
  passedJuz?: number[]
): boolean {
  if (index === 0) return true;
  for (let i = index - 1; i >= 0; i--) {
    const prev = FLAT_CURRICULUM[i];
    if (prev.kind === "quiz") {
      if (passedJuz && passedJuz.includes(prev.juzId!)) return true;
      return false;
    }
    if (prev.comingSoon) continue;
    if (prev.surahId == null) continue;
    if (masteredSurahIds) return masteredSurahIds.includes(prev.surahId);
    return completedSurahIds.includes(prev.surahId);
  }
  return true;
}

// All curated surah ids inside a Juz section (used to gate the quiz)
export function curatedSurahIdsInJuz(juzId: number): number[] {
  const sec = CURRICULUM.find((s) => s.id === juzId);
  if (!sec) return [];
  return sec.nodes
    .filter((n) => n.kind === "surah" && !n.comingSoon && n.surahId != null)
    .map((n) => n.surahId!);
}

export function juzQuizUnlocked(juzId: number, masteredIds: number[]): boolean {
  const ids = curatedSurahIdsInJuz(juzId);
  if (ids.length === 0) return false; // nothing curated → can't quiz yet
  return ids.every((id) => masteredIds.includes(id));
}
