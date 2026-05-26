import { SURAHS } from "./surahs";

export interface CurriculumNode {
  surahId?: number; // links to SURAHS.id when curated
  quranNumber: number;
  name: string;
  nameArabic: string;
  meaning: string;
  verses: number;
  icon: string;
  comingSoon?: boolean;
}

export interface Section {
  id: number;
  name: string;
  arabicName: string;
  description: string;
  nodes: CurriculumNode[];
}

// Helper: build a curated node from SURAHS
function curated(surahId: number, icon?: string): CurriculumNode {
  const s = SURAHS.find((x) => x.id === surahId);
  if (!s) throw new Error(`Surah id ${surahId} not found`);
  return {
    surahId,
    quranNumber: s.number,
    name: s.name,
    nameArabic: s.nameArabic,
    meaning: s.meaning,
    verses: s.verses,
    icon: icon ?? s.icon,
  };
}

function stub(
  quranNumber: number,
  name: string,
  nameArabic: string,
  meaning: string,
  verses: number,
  icon: string
): CurriculumNode {
  return { quranNumber, name, nameArabic, meaning, verses, icon, comingSoon: true };
}

// Order requested by user: Fatiha → Ikhlas → Falaq → Nas → puis à l'envers
// (descendant à partir de 111). On insère les sourates non curatées comme
// nœuds "bientôt" pour respecter l'ordre du Coran.
export const CURRICULUM: Section[] = [
  {
    id: 1,
    name: "Juz 'Amma",
    arabicName: "جزء عمّ",
    description: "Commence par l'Ouverture, puis les trois protectrices et descends vers Naba.",
    nodes: [
      curated(15, "🌟"), // Al-Fatiha (1)
      curated(2, "☝️"),  // Al-Ikhlas (112)
      curated(8, "🌅"),  // Al-Falaq (113)
      curated(9, "🛡️"), // An-Nas (114)
      curated(7, "🔥"),  // Al-Masad (111)
      curated(3, "🤲"),  // An-Nasr (110)
      stub(109, "Al-Kafirun", "الكافرون", "Les Mécréants", 6, "✋"),
      curated(1, "💧"),  // Al-Kawthar (108)
      curated(10, "🤝"), // Al-Ma'un (107)
      curated(6, "🕋"),  // Quraysh (106)
      curated(5, "🐘"),  // Al-Fil (105)
      stub(104, "Al-Humazah", "الهمزة", "Les Calomniateurs", 9, "🗣️"),
      curated(4, "⏳"),  // Al-Asr (103)
      stub(102, "At-Takathur", "التكاثر", "La Course aux Richesses", 8, "📈"),
      stub(101, "Al-Qari'a", "القارعة", "Le Fracas", 11, "💥"),
      stub(100, "Al-'Adiyat", "العاديات", "Les Coursiers", 11, "🐎"),
      stub(99, "Az-Zalzala", "الزلزلة", "La Secousse", 8, "🌍"),
      stub(98, "Al-Bayyina", "البينة", "La Preuve", 8, "📜"),
      curated(11, "🌙"), // Al-Qadr (97)
      stub(96, "Al-'Alaq", "العلق", "L'Adhérence", 19, "🩸"),
      curated(12, "🌳"), // At-Tin (95)
      curated(13, "💖"), // Ash-Sharh (94)
      curated(14, "🌄"), // Ad-Duha (93)
      stub(92, "Al-Layl", "الليل", "La Nuit", 21, "🌌"),
      stub(91, "Ash-Shams", "الشمس", "Le Soleil", 15, "☀️"),
      stub(90, "Al-Balad", "البلد", "La Cité", 20, "🏙️"),
      stub(89, "Al-Fajr", "الفجر", "L'Aube", 30, "🌤️"),
      stub(88, "Al-Ghashiya", "الغاشية", "L'Enveloppante", 26, "🌫️"),
      stub(87, "Al-A'la", "الأعلى", "Le Très-Haut", 19, "⛰️"),
      stub(86, "At-Tariq", "الطارق", "L'Astre Nocturne", 17, "⭐"),
      stub(85, "Al-Buruj", "البروج", "Les Constellations", 22, "♈"),
      stub(84, "Al-Inshiqaq", "الانشقاق", "La Déchirure", 25, "🌠"),
      stub(83, "Al-Mutaffifin", "المطففين", "Les Fraudeurs", 36, "⚖️"),
      stub(82, "Al-Infitar", "الانفطار", "La Rupture", 19, "🌃"),
      stub(81, "At-Takwir", "التكوير", "L'Obscurcissement", 29, "🌑"),
      stub(80, "'Abasa", "عبس", "Il s'est Renfrogné", 42, "🙇"),
      stub(79, "An-Nazi'at", "النازعات", "Les Anges qui Arrachent", 46, "👼"),
      stub(78, "An-Naba'", "النبأ", "La Nouvelle", 40, "📰"),
    ],
  },
  {
    id: 2,
    name: "Juz Tabarak",
    arabicName: "جزء تبارك",
    description: "Juz 29 — du Roi (Al-Mulk) aux Envoyés (Al-Mursalat).",
    nodes: [
      stub(67, "Al-Mulk", "الملك", "La Royauté", 30, "👑"),
      stub(68, "Al-Qalam", "القلم", "La Plume", 52, "🖋️"),
      stub(69, "Al-Haqqa", "الحاقة", "L'Inévitable", 52, "⚡"),
      stub(70, "Al-Ma'arij", "المعارج", "Les Voies d'Ascension", 44, "🪜"),
      stub(71, "Nuh", "نوح", "Noé", 28, "🚢"),
      stub(72, "Al-Jinn", "الجن", "Les Djinns", 28, "🌬️"),
      stub(73, "Al-Muzzammil", "المزمل", "L'Enveloppé", 20, "🧥"),
      stub(74, "Al-Muddathir", "المدثر", "Le Revêtu d'un Manteau", 56, "🧣"),
      stub(75, "Al-Qiyama", "القيامة", "La Résurrection", 40, "🔔"),
      stub(76, "Al-Insan", "الإنسان", "L'Homme", 31, "🧍"),
      stub(77, "Al-Mursalat", "المرسلات", "Les Envoyés", 50, "🕊️"),
    ],
  },
];

// Flat list of curriculum nodes (in unlock order)
export const FLAT_CURRICULUM: CurriculumNode[] = CURRICULUM.flatMap((s) => s.nodes);

// A node is unlocked if it is the first OR the previous curated node has been
// validated via the final exam (mastery entry exists). Falls back to "completed"
// for backwards compatibility when no mastery map is provided.
// "Coming soon" stubs do not block progression — they are skipped.
export function isNodeUnlocked(
  index: number,
  completedSurahIds: number[],
  masteredSurahIds?: number[]
): boolean {
  if (index === 0) return true;
  for (let i = index - 1; i >= 0; i--) {
    const prev = FLAT_CURRICULUM[i];
    if (prev.surahId == null) continue; // skip stubs
    if (masteredSurahIds) return masteredSurahIds.includes(prev.surahId);
    return completedSurahIds.includes(prev.surahId);
  }
  return true;
}
