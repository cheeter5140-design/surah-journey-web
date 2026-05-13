export interface Ayah {
  arabic: string;
  translation: string;
  words: { ar: string; fr: string }[];
  audioUrl?: string;
}

export interface Surah {
  id: number;
  number: number; // Quran number
  name: string;
  nameArabic: string;
  meaning: string;
  verses: number;
  icon: string; // emoji
  ayahs: Ayah[];
}

// A small curated set from Juz Amma, shortest first
export const SURAHS: Surah[] = [
  {
    id: 1,
    number: 108,
    name: "Al-Kawthar",
    nameArabic: "الكوثر",
    meaning: "L'Abondance",
    verses: 3,
    icon: "💧",
    ayahs: [
      {
        arabic: "إِنَّا أَعْطَيْنَاكَ ٱلْكَوْثَرَ",
        translation: "Vraiment, Nous t'avons accordé l'Abondance.",
        words: [
          { ar: "إِنَّا", fr: "Vraiment" },
          { ar: "أَعْطَيْنَاكَ", fr: "Nous t'avons accordé" },
          { ar: "ٱلْكَوْثَرَ", fr: "l'Abondance" },
        ],
      },
      {
        arabic: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
        translation: "Accomplis la Salat pour ton Seigneur et sacrifie.",
        words: [
          { ar: "فَصَلِّ", fr: "Accomplis la prière" },
          { ar: "لِرَبِّكَ", fr: "pour ton Seigneur" },
          { ar: "وَٱنْحَرْ", fr: "et sacrifie" },
        ],
      },
      {
        arabic: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
        translation: "Celui qui te hait sera certes, sans postérité.",
        words: [
          { ar: "إِنَّ", fr: "Certes" },
          { ar: "شَانِئَكَ", fr: "celui qui te hait" },
          { ar: "ٱلْأَبْتَرُ", fr: "sans postérité" },
        ],
      },
    ],
  },
  {
    id: 2,
    number: 112,
    name: "Al-Ikhlas",
    nameArabic: "الإخلاص",
    meaning: "Le Monothéisme Pur",
    verses: 4,
    icon: "☝️",
    ayahs: [
      {
        arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
        translation: "Dis : Il est Allah, Unique.",
        words: [
          { ar: "قُلْ", fr: "Dis" },
          { ar: "هُوَ", fr: "Il est" },
          { ar: "ٱللَّهُ", fr: "Allah" },
          { ar: "أَحَدٌ", fr: "Unique" },
        ],
      },
      {
        arabic: "ٱللَّهُ ٱلصَّمَدُ",
        translation: "Allah, Le Soutien Universel.",
        words: [
          { ar: "ٱللَّهُ", fr: "Allah" },
          { ar: "ٱلصَّمَدُ", fr: "Le Soutien Universel" },
        ],
      },
      {
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        translation: "Il n'a jamais engendré, n'a pas été engendré non plus.",
        words: [
          { ar: "لَمْ يَلِدْ", fr: "Il n'a pas engendré" },
          { ar: "وَلَمْ يُولَدْ", fr: "et n'a pas été engendré" },
        ],
      },
      {
        arabic: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
        translation: "Et nul n'est égal à Lui.",
        words: [
          { ar: "وَلَمْ يَكُن", fr: "Et nul n'est" },
          { ar: "لَّهُۥ", fr: "à Lui" },
          { ar: "كُفُوًا أَحَدٌۢ", fr: "égal" },
        ],
      },
    ],
  },
  {
    id: 3,
    number: 110,
    name: "An-Nasr",
    nameArabic: "النصر",
    meaning: "Le Secours",
    verses: 3,
    icon: "🌅",
    ayahs: [
      {
        arabic: "إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ",
        translation: "Lorsque vient le secours d'Allah ainsi que la victoire,",
        words: [
          { ar: "إِذَا جَآءَ", fr: "Lorsque vient" },
          { ar: "نَصْرُ ٱللَّهِ", fr: "le secours d'Allah" },
          { ar: "وَٱلْفَتْحُ", fr: "et la victoire" },
        ],
      },
      {
        arabic: "وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًا",
        translation: "et que tu vois les gens entrer en foule dans la religion d'Allah,",
        words: [
          { ar: "وَرَأَيْتَ", fr: "et que tu vois" },
          { ar: "ٱلنَّاسَ", fr: "les gens" },
          { ar: "يَدْخُلُونَ", fr: "entrer" },
          { ar: "أَفْوَاجًا", fr: "en foule" },
        ],
      },
      {
        arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ",
        translation: "alors, célèbre les louanges de ton Seigneur et implore Son pardon.",
        words: [
          { ar: "فَسَبِّحْ", fr: "alors célèbre" },
          { ar: "بِحَمْدِ رَبِّكَ", fr: "les louanges de ton Seigneur" },
          { ar: "وَٱسْتَغْفِرْهُ", fr: "et implore Son pardon" },
        ],
      },
    ],
  },
  {
    id: 4,
    number: 103,
    name: "Al-Asr",
    nameArabic: "العصر",
    meaning: "Le Temps",
    verses: 3,
    icon: "⏳",
    ayahs: [
      {
        arabic: "وَٱلْعَصْرِ",
        translation: "Par le Temps !",
        words: [
          { ar: "وَ", fr: "Par" },
          { ar: "ٱلْعَصْرِ", fr: "le Temps" },
        ],
      },
      {
        arabic: "إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ",
        translation: "L'homme est certes, en perdition,",
        words: [
          { ar: "إِنَّ", fr: "Certes" },
          { ar: "ٱلْإِنسَـٰنَ", fr: "l'homme" },
          { ar: "لَفِى خُسْرٍ", fr: "est en perdition" },
        ],
      },
      {
        arabic: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ",
        translation: "sauf ceux qui croient et accomplissent les bonnes œuvres,",
        words: [
          { ar: "إِلَّا", fr: "sauf" },
          { ar: "ٱلَّذِينَ ءَامَنُوا۟", fr: "ceux qui croient" },
          { ar: "وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ", fr: "et font de bonnes œuvres" },
        ],
      },
    ],
  },
  {
    id: 5,
    number: 113,
    name: "Al-Falaq",
    nameArabic: "الفلق",
    meaning: "L'Aube Naissante",
    verses: 5,
    icon: "🌄",
    ayahs: [
      {
        arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ",
        translation: "Dis : je cherche protection auprès du Seigneur de l'aube naissante,",
        words: [
          { ar: "قُلْ", fr: "Dis" },
          { ar: "أَعُوذُ", fr: "je cherche refuge" },
          { ar: "بِرَبِّ", fr: "auprès du Seigneur" },
          { ar: "ٱلْفَلَقِ", fr: "de l'aube" },
        ],
      },
      {
        arabic: "مِن شَرِّ مَا خَلَقَ",
        translation: "contre le mal des êtres qu'Il a créés,",
        words: [
          { ar: "مِن شَرِّ", fr: "contre le mal" },
          { ar: "مَا خَلَقَ", fr: "de ce qu'Il a créé" },
        ],
      },
      {
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        translation: "contre le mal de l'obscurité quand elle s'approfondit,",
        words: [
          { ar: "وَمِن شَرِّ", fr: "et contre le mal" },
          { ar: "غَاسِقٍ", fr: "de l'obscurité" },
          { ar: "إِذَا وَقَبَ", fr: "quand elle s'étend" },
        ],
      },
    ],
  },
  {
    id: 6,
    number: 1,
    name: "Al-Fatiha",
    nameArabic: "الفاتحة",
    meaning: "L'Ouverture",
    verses: 7,
    icon: "🕌",
    ayahs: [
      {
        arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
        translation: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
        words: [
          { ar: "بِسْمِ ٱللَّهِ", fr: "Au nom d'Allah" },
          { ar: "ٱلرَّحْمَـٰنِ", fr: "le Tout Miséricordieux" },
          { ar: "ٱلرَّحِيمِ", fr: "le Très Miséricordieux" },
        ],
      },
      {
        arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
        translation: "Louange à Allah, Seigneur de l'univers.",
        words: [
          { ar: "ٱلْحَمْدُ", fr: "Louange" },
          { ar: "لِلَّهِ", fr: "à Allah" },
          { ar: "رَبِّ ٱلْعَـٰلَمِينَ", fr: "Seigneur de l'univers" },
        ],
      },
      {
        arabic: "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
        translation: "Le Tout Miséricordieux, le Très Miséricordieux,",
        words: [
          { ar: "ٱلرَّحْمَـٰنِ", fr: "Le Tout Miséricordieux" },
          { ar: "ٱلرَّحِيمِ", fr: "le Très Miséricordieux" },
        ],
      },
    ],
  },
];

// Build audio URL from EveryAyah API (Husary Mujawwad)
export function ayahAudioUrl(surahNumber: number, ayahIndex: number): string {
  const s = String(surahNumber).padStart(3, "0");
  const a = String(ayahIndex + 1).padStart(3, "0");
  return `https://everyayah.com/data/Husary_128kbps/${s}${a}.mp3`;
}
