export interface Ayah {
  arabic: string;
  transliteration: string;
  translation: string;
  words: { ar: string; translit?: string; fr: string }[];
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
        transliteration: "Innā a'ṭaynāka l-kawthar",
        translation: "Vraiment, Nous t'avons accordé l'Abondance.",
        words: [
          { ar: "إِنَّا", translit: "Innā", fr: "Vraiment" },
          { ar: "أَعْطَيْنَاكَ", translit: "a'ṭaynāka", fr: "Nous t'avons accordé" },
          { ar: "ٱلْكَوْثَرَ", translit: "l-kawthar", fr: "l'Abondance" },
        ],
      },
      {
        arabic: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
        transliteration: "Fa-ṣalli li-rabbika wa-nḥar",
        translation: "Accomplis la Salat pour ton Seigneur et sacrifie.",
        words: [
          { ar: "فَصَلِّ", translit: "Fa-ṣalli", fr: "Accomplis la prière" },
          { ar: "لِرَبِّكَ", translit: "li-rabbika", fr: "pour ton Seigneur" },
          { ar: "وَٱنْحَرْ", translit: "wa-nḥar", fr: "et sacrifie" },
        ],
      },
      {
        arabic: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
        transliteration: "Inna shāni'aka huwa l-abtar",
        translation: "Celui qui te hait sera certes, sans postérité.",
        words: [
          { ar: "إِنَّ", translit: "Inna", fr: "Certes" },
          { ar: "شَانِئَكَ", translit: "shāni'aka", fr: "celui qui te hait" },
          { ar: "ٱلْأَبْتَرُ", translit: "l-abtar", fr: "sans postérité" },
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
        transliteration: "Qul huwa Llāhu aḥad",
        translation: "Dis : Il est Allah, Unique.",
        words: [
          { ar: "قُلْ", translit: "Qul", fr: "Dis" },
          { ar: "هُوَ", translit: "huwa", fr: "Il est" },
          { ar: "ٱللَّهُ", translit: "Llāhu", fr: "Allah" },
          { ar: "أَحَدٌ", translit: "aḥad", fr: "Unique" },
        ],
      },
      {
        arabic: "ٱللَّهُ ٱلصَّمَدُ",
        transliteration: "Allāhu ṣ-ṣamad",
        translation: "Allah, Le Soutien Universel.",
        words: [
          { ar: "ٱللَّهُ", translit: "Allāhu", fr: "Allah" },
          { ar: "ٱلصَّمَدُ", translit: "ṣ-ṣamad", fr: "Le Soutien Universel" },
        ],
      },
      {
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        transliteration: "Lam yalid wa-lam yūlad",
        translation: "Il n'a jamais engendré, n'a pas été engendré non plus.",
        words: [
          { ar: "لَمْ يَلِدْ", translit: "Lam yalid", fr: "Il n'a pas engendré" },
          { ar: "وَلَمْ يُولَدْ", translit: "wa-lam yūlad", fr: "et n'a pas été engendré" },
        ],
      },
      {
        arabic: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
        transliteration: "Wa-lam yakun lahu kufuwan aḥad",
        translation: "Et nul n'est égal à Lui.",
        words: [
          { ar: "وَلَمْ يَكُن", translit: "Wa-lam yakun", fr: "Et nul n'est" },
          { ar: "لَّهُۥ", translit: "lahu", fr: "à Lui" },
          { ar: "كُفُوًا أَحَدٌۢ", translit: "kufuwan aḥad", fr: "égal" },
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
        transliteration: "Idhā jā'a naṣru Llāhi wa-l-fatḥ",
        translation: "Lorsque vient le secours d'Allah ainsi que la victoire,",
        words: [
          { ar: "إِذَا جَآءَ", translit: "Idhā jā'a", fr: "Lorsque vient" },
          { ar: "نَصْرُ ٱللَّهِ", translit: "naṣru Llāhi", fr: "le secours d'Allah" },
          { ar: "وَٱلْفَتْحُ", translit: "wa-l-fatḥ", fr: "et la victoire" },
        ],
      },
      {
        arabic: "وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًا",
        transliteration: "Wa-ra'ayta n-nāsa yadkhulūna fī dīni Llāhi afwājā",
        translation: "et que tu vois les gens entrer en foule dans la religion d'Allah,",
        words: [
          { ar: "وَرَأَيْتَ", translit: "Wa-ra'ayta", fr: "et que tu vois" },
          { ar: "ٱلنَّاسَ", translit: "n-nāsa", fr: "les gens" },
          { ar: "يَدْخُلُونَ", translit: "yadkhulūna", fr: "entrer" },
          { ar: "أَفْوَاجًا", translit: "afwājā", fr: "en foule" },
        ],
      },
      {
        arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ",
        transliteration: "Fa-sabbiḥ bi-ḥamdi rabbika wa-staghfirh",
        translation: "alors, célèbre les louanges de ton Seigneur et implore Son pardon.",
        words: [
          { ar: "فَسَبِّحْ", translit: "Fa-sabbiḥ", fr: "alors célèbre" },
          { ar: "بِحَمْدِ رَبِّكَ", translit: "bi-ḥamdi rabbika", fr: "les louanges de ton Seigneur" },
          { ar: "وَٱسْتَغْفِرْهُ", translit: "wa-staghfirh", fr: "et implore Son pardon" },
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
        transliteration: "Wa-l-'aṣr",
        translation: "Par le Temps !",
        words: [
          { ar: "وَ", translit: "Wa", fr: "Par" },
          { ar: "ٱلْعَصْرِ", translit: "l-'aṣr", fr: "le Temps" },
        ],
      },
      {
        arabic: "إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ",
        transliteration: "Inna l-insāna la-fī khusr",
        translation: "L'homme est certes, en perdition,",
        words: [
          { ar: "إِنَّ", translit: "Inna", fr: "Certes" },
          { ar: "ٱلْإِنسَـٰنَ", translit: "l-insāna", fr: "l'homme" },
          { ar: "لَفِى خُسْرٍ", translit: "la-fī khusr", fr: "est en perdition" },
        ],
      },
      {
        arabic: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ",
        transliteration: "Illā lladhīna āmanū wa-'amilū ṣ-ṣāliḥāt",
        translation: "sauf ceux qui croient et accomplissent les bonnes œuvres,",
        words: [
          { ar: "إِلَّا", translit: "Illā", fr: "sauf" },
          { ar: "ٱلَّذِينَ ءَامَنُوا۟", translit: "lladhīna āmanū", fr: "ceux qui croient" },
          { ar: "وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ", translit: "wa-'amilū ṣ-ṣāliḥāt", fr: "et font de bonnes œuvres" },
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
        transliteration: "Qul a'ūdhu bi-rabbi l-falaq",
        translation: "Dis : je cherche protection auprès du Seigneur de l'aube naissante,",
        words: [
          { ar: "قُلْ", translit: "Qul", fr: "Dis" },
          { ar: "أَعُوذُ", translit: "a'ūdhu", fr: "je cherche refuge" },
          { ar: "بِرَبِّ", translit: "bi-rabbi", fr: "auprès du Seigneur" },
          { ar: "ٱلْفَلَقِ", translit: "l-falaq", fr: "de l'aube" },
        ],
      },
      {
        arabic: "مِن شَرِّ مَا خَلَقَ",
        transliteration: "Min sharri mā khalaq",
        translation: "contre le mal des êtres qu'Il a créés,",
        words: [
          { ar: "مِن شَرِّ", translit: "Min sharri", fr: "contre le mal" },
          { ar: "مَا خَلَقَ", translit: "mā khalaq", fr: "de ce qu'Il a créé" },
        ],
      },
      {
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        transliteration: "Wa-min sharri ghāsiqin idhā waqab",
        translation: "contre le mal de l'obscurité quand elle s'approfondit,",
        words: [
          { ar: "وَمِن شَرِّ", translit: "Wa-min sharri", fr: "et contre le mal" },
          { ar: "غَاسِقٍ", translit: "ghāsiqin", fr: "de l'obscurité" },
          { ar: "إِذَا وَقَبَ", translit: "idhā waqab", fr: "quand elle s'étend" },
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
        transliteration: "Bismi Llāhi r-raḥmāni r-raḥīm",
        translation: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
        words: [
          { ar: "بِسْمِ ٱللَّهِ", translit: "Bismi Llāhi", fr: "Au nom d'Allah" },
          { ar: "ٱلرَّحْمَـٰنِ", translit: "r-raḥmāni", fr: "le Tout Miséricordieux" },
          { ar: "ٱلرَّحِيمِ", translit: "r-raḥīm", fr: "le Très Miséricordieux" },
        ],
      },
      {
        arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
        transliteration: "Al-ḥamdu li-Llāhi rabbi l-'ālamīn",
        translation: "Louange à Allah, Seigneur de l'univers.",
        words: [
          { ar: "ٱلْحَمْدُ", translit: "Al-ḥamdu", fr: "Louange" },
          { ar: "لِلَّهِ", translit: "li-Llāhi", fr: "à Allah" },
          { ar: "رَبِّ ٱلْعَـٰلَمِينَ", translit: "rabbi l-'ālamīn", fr: "Seigneur de l'univers" },
        ],
      },
      {
        arabic: "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
        transliteration: "Ar-raḥmāni r-raḥīm",
        translation: "Le Tout Miséricordieux, le Très Miséricordieux,",
        words: [
          { ar: "ٱلرَّحْمَـٰنِ", translit: "Ar-raḥmāni", fr: "Le Tout Miséricordieux" },
          { ar: "ٱلرَّحِيمِ", translit: "r-raḥīm", fr: "le Très Miséricordieux" },
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
