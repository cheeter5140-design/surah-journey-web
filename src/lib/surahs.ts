export interface Ayah {
  arabic: string;
  transliteration: string;
  translation: string;
  words: { ar: string; translit?: string; fr?: string }[];
  audioUrl?: string;
}

export interface Surah {
  id: number;
  number: number; // Quran number
  name: string;
  nameArabic: string;
  meaning: string;
  verses: number;
  icon: string;
  longForm?: boolean;
  ayahs: Ayah[];
}

// Curated Juz 'Amma surahs (shortest first). All entries include word-by-word
// Arabic / transliteration / French to power the Match and Fill-in-Blank steps.
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
    number: 105,
    name: "Al-Fil",
    nameArabic: "الفيل",
    meaning: "L'Éléphant",
    verses: 5,
    icon: "🐘",
    ayahs: [
      {
        arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَـٰبِ ٱلْفِيلِ",
        transliteration: "Alam tara kayfa fa'ala rabbuka bi-aṣḥābi l-fīl",
        translation: "N'as-tu pas vu comment ton Seigneur a agi envers les gens de l'Éléphant ?",
        words: [
          { ar: "أَلَمْ تَرَ", translit: "Alam tara", fr: "N'as-tu pas vu" },
          { ar: "كَيْفَ فَعَلَ", translit: "kayfa fa'ala", fr: "comment a agi" },
          { ar: "رَبُّكَ", translit: "rabbuka", fr: "ton Seigneur" },
          { ar: "بِأَصْحَـٰبِ ٱلْفِيلِ", translit: "bi-aṣḥābi l-fīl", fr: "les gens de l'Éléphant" },
        ],
      },
      {
        arabic: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍ",
        transliteration: "Alam yaj'al kaydahum fī taḍlīl",
        translation: "N'a-t-Il pas rendu leur ruse complètement vaine ?",
        words: [
          { ar: "أَلَمْ يَجْعَلْ", translit: "Alam yaj'al", fr: "N'a-t-Il pas rendu" },
          { ar: "كَيْدَهُمْ", translit: "kaydahum", fr: "leur ruse" },
          { ar: "فِى تَضْلِيلٍ", translit: "fī taḍlīl", fr: "vaine" },
        ],
      },
      {
        arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
        transliteration: "Wa-arsala 'alayhim ṭayran abābīl",
        translation: "et envoyé sur eux des oiseaux par volées,",
        words: [
          { ar: "وَأَرْسَلَ", translit: "Wa-arsala", fr: "et Il a envoyé" },
          { ar: "عَلَيْهِمْ", translit: "'alayhim", fr: "sur eux" },
          { ar: "طَيْرًا أَبَابِيلَ", translit: "ṭayran abābīl", fr: "des oiseaux par volées" },
        ],
      },
      {
        arabic: "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ",
        transliteration: "Tarmīhim bi-ḥijāratin min sijjīl",
        translation: "qui leur lançaient des pierres d'argile,",
        words: [
          { ar: "تَرْمِيهِم", translit: "Tarmīhim", fr: "qui leur lançaient" },
          { ar: "بِحِجَارَةٍ", translit: "bi-ḥijāratin", fr: "des pierres" },
          { ar: "مِّن سِجِّيلٍ", translit: "min sijjīl", fr: "d'argile" },
        ],
      },
      {
        arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍۭ",
        transliteration: "Fa-ja'alahum ka-'aṣfin ma'kūl",
        translation: "et Il les a rendus semblables à une paille mâchée.",
        words: [
          { ar: "فَجَعَلَهُمْ", translit: "Fa-ja'alahum", fr: "et Il les a rendus" },
          { ar: "كَعَصْفٍ", translit: "ka-'aṣfin", fr: "comme une paille" },
          { ar: "مَّأْكُولٍۭ", translit: "ma'kūl", fr: "mâchée" },
        ],
      },
    ],
  },
  {
    id: 6,
    number: 106,
    name: "Quraysh",
    nameArabic: "قريش",
    meaning: "Quraïsh",
    verses: 4,
    icon: "🐪",
    ayahs: [
      {
        arabic: "لِإِيلَـٰفِ قُرَيْشٍ",
        transliteration: "Li-īlāfi Quraysh",
        translation: "À cause du pacte des Quraïsh,",
        words: [
          { ar: "لِإِيلَـٰفِ", translit: "Li-īlāfi", fr: "À cause du pacte" },
          { ar: "قُرَيْشٍ", translit: "Quraysh", fr: "des Quraïsh" },
        ],
      },
      {
        arabic: "إِۦلَـٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ",
        transliteration: "Īlāfihim riḥlata sh-shitā'i wa-ṣ-ṣayf",
        translation: "leur pacte concernant les voyages d'hiver et d'été.",
        words: [
          { ar: "إِۦلَـٰفِهِمْ", translit: "Īlāfihim", fr: "leur pacte" },
          { ar: "رِحْلَةَ", translit: "riḥlata", fr: "le voyage" },
          { ar: "ٱلشِّتَآءِ", translit: "sh-shitā'i", fr: "d'hiver" },
          { ar: "وَٱلصَّيْفِ", translit: "wa-ṣ-ṣayf", fr: "et d'été" },
        ],
      },
      {
        arabic: "فَلْيَعْبُدُوا۟ رَبَّ هَـٰذَا ٱلْبَيْتِ",
        transliteration: "Fa-l-ya'budū rabba hādhā l-bayt",
        translation: "Qu'ils adorent donc le Seigneur de cette Maison,",
        words: [
          { ar: "فَلْيَعْبُدُوا۟", translit: "Fa-l-ya'budū", fr: "Qu'ils adorent" },
          { ar: "رَبَّ", translit: "rabba", fr: "le Seigneur" },
          { ar: "هَـٰذَا ٱلْبَيْتِ", translit: "hādhā l-bayt", fr: "de cette Maison" },
        ],
      },
      {
        arabic: "ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍۭ",
        transliteration: "Alladhī aṭ'amahum min jū'in wa-āmanahum min khawf",
        translation: "qui les a nourris contre la faim et rassurés de la crainte.",
        words: [
          { ar: "ٱلَّذِىٓ", translit: "Alladhī", fr: "Celui qui" },
          { ar: "أَطْعَمَهُم", translit: "aṭ'amahum", fr: "les a nourris" },
          { ar: "مِّن جُوعٍ", translit: "min jū'in", fr: "contre la faim" },
          { ar: "وَءَامَنَهُم", translit: "wa-āmanahum", fr: "et les a rassurés" },
          { ar: "مِّنْ خَوْفٍۭ", translit: "min khawf", fr: "de la crainte" },
        ],
      },
    ],
  },
  {
    id: 7,
    number: 111,
    name: "Al-Masad",
    nameArabic: "المسد",
    meaning: "Les Fibres",
    verses: 5,
    icon: "🔥",
    ayahs: [
      {
        arabic: "تَبَّتْ يَدَآ أَبِى لَهَبٍ وَتَبَّ",
        transliteration: "Tabbat yadā Abī Lahabin wa-tabb",
        translation: "Que périssent les deux mains d'Abû Lahab et que lui-même périsse !",
        words: [
          { ar: "تَبَّتْ", translit: "Tabbat", fr: "Que périssent" },
          { ar: "يَدَآ", translit: "yadā", fr: "les deux mains" },
          { ar: "أَبِى لَهَبٍ", translit: "Abī Lahabin", fr: "d'Abû Lahab" },
          { ar: "وَتَبَّ", translit: "wa-tabb", fr: "et qu'il périsse" },
        ],
      },
      {
        arabic: "مَآ أَغْنَىٰ عَنْهُ مَالُهُۥ وَمَا كَسَبَ",
        transliteration: "Mā aghnā 'anhu māluhu wa-mā kasab",
        translation: "Sa fortune ne lui sert à rien, ni ce qu'il a acquis.",
        words: [
          { ar: "مَآ أَغْنَىٰ", translit: "Mā aghnā", fr: "Ne lui sert à rien" },
          { ar: "عَنْهُ", translit: "'anhu", fr: "à lui" },
          { ar: "مَالُهُۥ", translit: "māluhu", fr: "sa fortune" },
          { ar: "وَمَا كَسَبَ", translit: "wa-mā kasab", fr: "ni ce qu'il a acquis" },
        ],
      },
      {
        arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
        transliteration: "Sa-yaṣlā nāran dhāta lahab",
        translation: "Il sera brûlé dans un Feu plein de flammes,",
        words: [
          { ar: "سَيَصْلَىٰ", translit: "Sa-yaṣlā", fr: "Il sera brûlé" },
          { ar: "نَارًا", translit: "nāran", fr: "dans un Feu" },
          { ar: "ذَاتَ لَهَبٍ", translit: "dhāta lahab", fr: "plein de flammes" },
        ],
      },
      {
        arabic: "وَٱمْرَأَتُهُۥ حَمَّالَةَ ٱلْحَطَبِ",
        transliteration: "Wa-mra'atuhu ḥammālata l-ḥaṭab",
        translation: "de même que sa femme, la porteuse de bois,",
        words: [
          { ar: "وَٱمْرَأَتُهُۥ", translit: "Wa-mra'atuhu", fr: "ainsi que sa femme" },
          { ar: "حَمَّالَةَ", translit: "ḥammālata", fr: "la porteuse" },
          { ar: "ٱلْحَطَبِ", translit: "l-ḥaṭab", fr: "de bois" },
        ],
      },
      {
        arabic: "فِى جِيدِهَا حَبْلٌ مِّن مَّسَدٍۭ",
        transliteration: "Fī jīdihā ḥablun min masad",
        translation: "à son cou, une corde de fibres.",
        words: [
          { ar: "فِى جِيدِهَا", translit: "Fī jīdihā", fr: "à son cou" },
          { ar: "حَبْلٌ", translit: "ḥablun", fr: "une corde" },
          { ar: "مِّن مَّسَدٍۭ", translit: "min masad", fr: "de fibres" },
        ],
      },
    ],
  },
  {
    id: 8,
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
      {
        arabic: "وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ",
        transliteration: "Wa-min sharri n-naffāthāti fī l-'uqad",
        translation: "contre le mal de celles qui soufflent sur les nœuds,",
        words: [
          { ar: "وَمِن شَرِّ", translit: "Wa-min sharri", fr: "et contre le mal" },
          { ar: "ٱلنَّفَّـٰثَـٰتِ", translit: "n-naffāthāti", fr: "de celles qui soufflent" },
          { ar: "فِى ٱلْعُقَدِ", translit: "fī l-'uqad", fr: "sur les nœuds" },
        ],
      },
      {
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        transliteration: "Wa-min sharri ḥāsidin idhā ḥasad",
        translation: "et contre le mal de l'envieux quand il envie.",
        words: [
          { ar: "وَمِن شَرِّ", translit: "Wa-min sharri", fr: "et contre le mal" },
          { ar: "حَاسِدٍ", translit: "ḥāsidin", fr: "d'un envieux" },
          { ar: "إِذَا حَسَدَ", translit: "idhā ḥasad", fr: "quand il envie" },
        ],
      },
    ],
  },
  {
    id: 9,
    number: 114,
    name: "An-Nas",
    nameArabic: "الناس",
    meaning: "Les Hommes",
    verses: 6,
    icon: "🛡️",
    ayahs: [
      {
        arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
        transliteration: "Qul a'ūdhu bi-rabbi n-nās",
        translation: "Dis : je cherche protection auprès du Seigneur des hommes,",
        words: [
          { ar: "قُلْ", translit: "Qul", fr: "Dis" },
          { ar: "أَعُوذُ", translit: "a'ūdhu", fr: "je cherche refuge" },
          { ar: "بِرَبِّ", translit: "bi-rabbi", fr: "auprès du Seigneur" },
          { ar: "ٱلنَّاسِ", translit: "n-nās", fr: "des hommes" },
        ],
      },
      {
        arabic: "مَلِكِ ٱلنَّاسِ",
        transliteration: "Maliki n-nās",
        translation: "le Souverain des hommes,",
        words: [
          { ar: "مَلِكِ", translit: "Maliki", fr: "le Souverain" },
          { ar: "ٱلنَّاسِ", translit: "n-nās", fr: "des hommes" },
        ],
      },
      {
        arabic: "إِلَـٰهِ ٱلنَّاسِ",
        transliteration: "Ilāhi n-nās",
        translation: "Dieu des hommes,",
        words: [
          { ar: "إِلَـٰهِ", translit: "Ilāhi", fr: "Dieu" },
          { ar: "ٱلنَّاسِ", translit: "n-nās", fr: "des hommes" },
        ],
      },
      {
        arabic: "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ",
        transliteration: "Min sharri l-waswāsi l-khannās",
        translation: "contre le mal du mauvais conseiller, furtif,",
        words: [
          { ar: "مِن شَرِّ", translit: "Min sharri", fr: "contre le mal" },
          { ar: "ٱلْوَسْوَاسِ", translit: "l-waswāsi", fr: "du mauvais conseiller" },
          { ar: "ٱلْخَنَّاسِ", translit: "l-khannās", fr: "furtif" },
        ],
      },
      {
        arabic: "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ",
        transliteration: "Alladhī yuwaswisu fī ṣudūri n-nās",
        translation: "qui souffle le mal dans les poitrines des hommes,",
        words: [
          { ar: "ٱلَّذِى", translit: "Alladhī", fr: "qui" },
          { ar: "يُوَسْوِسُ", translit: "yuwaswisu", fr: "souffle le mal" },
          { ar: "فِى صُدُورِ", translit: "fī ṣudūri", fr: "dans les poitrines" },
          { ar: "ٱلنَّاسِ", translit: "n-nās", fr: "des hommes" },
        ],
      },
      {
        arabic: "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
        transliteration: "Mina l-jinnati wa-n-nās",
        translation: "qu'il (le conseiller) soit un djinn, ou un être humain.",
        words: [
          { ar: "مِنَ ٱلْجِنَّةِ", translit: "Mina l-jinnati", fr: "des djinns" },
          { ar: "وَٱلنَّاسِ", translit: "wa-n-nās", fr: "et des hommes" },
        ],
      },
    ],
  },
  {
    id: 10,
    number: 107,
    name: "Al-Ma'un",
    nameArabic: "الماعون",
    meaning: "L'Ustensile",
    verses: 7,
    icon: "🍽️",
    ayahs: [
      {
        arabic: "أَرَءَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ",
        transliteration: "Ara'ayta lladhī yukadhdhibu bi-d-dīn",
        translation: "Vois-tu celui qui traite de mensonge la Rétribution ?",
        words: [
          { ar: "أَرَءَيْتَ", translit: "Ara'ayta", fr: "Vois-tu" },
          { ar: "ٱلَّذِى", translit: "lladhī", fr: "celui qui" },
          { ar: "يُكَذِّبُ", translit: "yukadhdhibu", fr: "traite de mensonge" },
          { ar: "بِٱلدِّينِ", translit: "bi-d-dīn", fr: "la Rétribution" },
        ],
      },
      {
        arabic: "فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ",
        transliteration: "Fa-dhālika lladhī yadu''u l-yatīm",
        translation: "C'est bien lui qui repousse l'orphelin,",
        words: [
          { ar: "فَذَٰلِكَ", translit: "Fa-dhālika", fr: "C'est bien lui" },
          { ar: "ٱلَّذِى", translit: "lladhī", fr: "celui qui" },
          { ar: "يَدُعُّ", translit: "yadu''u", fr: "repousse" },
          { ar: "ٱلْيَتِيمَ", translit: "l-yatīm", fr: "l'orphelin" },
        ],
      },
      {
        arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ",
        transliteration: "Wa-lā yaḥuḍḍu 'alā ṭa'āmi l-miskīn",
        translation: "et qui n'encourage point à nourrir le pauvre.",
        words: [
          { ar: "وَلَا يَحُضُّ", translit: "Wa-lā yaḥuḍḍu", fr: "et n'encourage point" },
          { ar: "عَلَىٰ طَعَامِ", translit: "'alā ṭa'āmi", fr: "à nourrir" },
          { ar: "ٱلْمِسْكِينِ", translit: "l-miskīn", fr: "le pauvre" },
        ],
      },
      {
        arabic: "فَوَيْلٌ لِّلْمُصَلِّينَ",
        transliteration: "Fa-waylun li-l-muṣallīn",
        translation: "Malheur donc, à ceux qui prient,",
        words: [
          { ar: "فَوَيْلٌ", translit: "Fa-waylun", fr: "Malheur" },
          { ar: "لِّلْمُصَلِّينَ", translit: "li-l-muṣallīn", fr: "à ceux qui prient" },
        ],
      },
      {
        arabic: "ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
        transliteration: "Alladhīna hum 'an ṣalātihim sāhūn",
        translation: "tout en négligeant et retardant leur Salat,",
        words: [
          { ar: "ٱلَّذِينَ هُمْ", translit: "Alladhīna hum", fr: "ceux qui" },
          { ar: "عَن صَلَاتِهِمْ", translit: "'an ṣalātihim", fr: "leur prière" },
          { ar: "سَاهُونَ", translit: "sāhūn", fr: "négligent" },
        ],
      },
      {
        arabic: "ٱلَّذِينَ هُمْ يُرَآءُونَ",
        transliteration: "Alladhīna hum yurā'ūn",
        translation: "qui sont pleins d'ostentation,",
        words: [
          { ar: "ٱلَّذِينَ هُمْ", translit: "Alladhīna hum", fr: "ceux qui" },
          { ar: "يُرَآءُونَ", translit: "yurā'ūn", fr: "sont pleins d'ostentation" },
        ],
      },
      {
        arabic: "وَيَمْنَعُونَ ٱلْمَاعُونَ",
        transliteration: "Wa-yamna'ūna l-mā'ūn",
        translation: "et refusent l'ustensile (à celui qui en a besoin).",
        words: [
          { ar: "وَيَمْنَعُونَ", translit: "Wa-yamna'ūna", fr: "et refusent" },
          { ar: "ٱلْمَاعُونَ", translit: "l-mā'ūn", fr: "l'ustensile" },
        ],
      },
    ],
  },
  {
    id: 11,
    number: 97,
    name: "Al-Qadr",
    nameArabic: "القدر",
    meaning: "La Destinée",
    verses: 5,
    icon: "🌙",
    ayahs: [
      {
        arabic: "إِنَّآ أَنزَلْنَـٰهُ فِى لَيْلَةِ ٱلْقَدْرِ",
        transliteration: "Innā anzalnāhu fī laylati l-qadr",
        translation: "Nous l'avons certes, fait descendre durant la nuit d'Al-Qadr.",
        words: [
          { ar: "إِنَّآ", translit: "Innā", fr: "Certes Nous" },
          { ar: "أَنزَلْنَـٰهُ", translit: "anzalnāhu", fr: "l'avons fait descendre" },
          { ar: "فِى لَيْلَةِ", translit: "fī laylati", fr: "durant la nuit" },
          { ar: "ٱلْقَدْرِ", translit: "l-qadr", fr: "d'Al-Qadr" },
        ],
      },
      {
        arabic: "وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ",
        transliteration: "Wa-mā adrāka mā laylatu l-qadr",
        translation: "Et qui te dira ce qu'est la nuit d'Al-Qadr ?",
        words: [
          { ar: "وَمَآ أَدْرَىٰكَ", translit: "Wa-mā adrāka", fr: "Et qui te dira" },
          { ar: "مَا لَيْلَةُ", translit: "mā laylatu", fr: "ce qu'est la nuit" },
          { ar: "ٱلْقَدْرِ", translit: "l-qadr", fr: "d'Al-Qadr" },
        ],
      },
      {
        arabic: "لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
        transliteration: "Laylatu l-qadri khayrun min alfi shahr",
        translation: "La nuit d'Al-Qadr est meilleure que mille mois.",
        words: [
          { ar: "لَيْلَةُ ٱلْقَدْرِ", translit: "Laylatu l-qadri", fr: "La nuit d'Al-Qadr" },
          { ar: "خَيْرٌ", translit: "khayrun", fr: "est meilleure" },
          { ar: "مِّنْ أَلْفِ شَهْرٍ", translit: "min alfi shahr", fr: "que mille mois" },
        ],
      },
      {
        arabic: "تَنَزَّلُ ٱلْمَلَـٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ",
        transliteration: "Tanazzalu l-malā'ikatu wa-r-rūḥu fīhā bi-idhni rabbihim min kulli amr",
        translation: "Durant celle-ci descendent les Anges et l'Esprit, par permission de leur Seigneur pour tout ordre.",
        words: [
          { ar: "تَنَزَّلُ", translit: "Tanazzalu", fr: "descendent" },
          { ar: "ٱلْمَلَـٰٓئِكَةُ", translit: "l-malā'ikatu", fr: "les Anges" },
          { ar: "وَٱلرُّوحُ", translit: "wa-r-rūḥu", fr: "et l'Esprit" },
          { ar: "بِإِذْنِ رَبِّهِم", translit: "bi-idhni rabbihim", fr: "par permission de leur Seigneur" },
        ],
      },
      {
        arabic: "سَلَـٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ",
        transliteration: "Salāmun hiya ḥattā maṭla'i l-fajr",
        translation: "Elle est paix et salut jusqu'à l'apparition de l'aube.",
        words: [
          { ar: "سَلَـٰمٌ", translit: "Salāmun", fr: "Paix" },
          { ar: "هِىَ", translit: "hiya", fr: "elle est" },
          { ar: "حَتَّىٰ مَطْلَعِ", translit: "ḥattā maṭla'i", fr: "jusqu'à l'apparition" },
          { ar: "ٱلْفَجْرِ", translit: "l-fajr", fr: "de l'aube" },
        ],
      },
    ],
  },
  {
    id: 12,
    number: 95,
    name: "At-Tin",
    nameArabic: "التين",
    meaning: "Le Figuier",
    verses: 8,
    icon: "🌳",
    ayahs: [
      {
        arabic: "وَٱلتِّينِ وَٱلزَّيْتُونِ",
        transliteration: "Wa-t-tīni wa-z-zaytūn",
        translation: "Par le figuier et l'olivier !",
        words: [
          { ar: "وَٱلتِّينِ", translit: "Wa-t-tīni", fr: "Par le figuier" },
          { ar: "وَٱلزَّيْتُونِ", translit: "wa-z-zaytūn", fr: "et l'olivier" },
        ],
      },
      {
        arabic: "وَطُورِ سِينِينَ",
        transliteration: "Wa-ṭūri sīnīn",
        translation: "Et par le Mont Sînîn !",
        words: [
          { ar: "وَطُورِ", translit: "Wa-ṭūri", fr: "Et par le Mont" },
          { ar: "سِينِينَ", translit: "sīnīn", fr: "Sinaï" },
        ],
      },
      {
        arabic: "وَهَـٰذَا ٱلْبَلَدِ ٱلْأَمِينِ",
        transliteration: "Wa-hādhā l-baladi l-amīn",
        translation: "Et par cette cité sûre !",
        words: [
          { ar: "وَهَـٰذَا", translit: "Wa-hādhā", fr: "Et par cette" },
          { ar: "ٱلْبَلَدِ", translit: "l-baladi", fr: "cité" },
          { ar: "ٱلْأَمِينِ", translit: "l-amīn", fr: "sûre" },
        ],
      },
      {
        arabic: "لَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ",
        transliteration: "Laqad khalaqnā l-insāna fī aḥsani taqwīm",
        translation: "Nous avons certes créé l'homme dans la forme la plus parfaite.",
        words: [
          { ar: "لَقَدْ خَلَقْنَا", translit: "Laqad khalaqnā", fr: "Nous avons créé" },
          { ar: "ٱلْإِنسَـٰنَ", translit: "l-insāna", fr: "l'homme" },
          { ar: "فِىٓ أَحْسَنِ", translit: "fī aḥsani", fr: "dans la meilleure" },
          { ar: "تَقْوِيمٍ", translit: "taqwīm", fr: "forme" },
        ],
      },
    ],
  },
  {
    id: 13,
    number: 94,
    name: "Ash-Sharh",
    nameArabic: "الشرح",
    meaning: "L'Ouverture",
    verses: 8,
    icon: "💚",
    ayahs: [
      {
        arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
        transliteration: "Alam nashraḥ laka ṣadrak",
        translation: "N'avons-Nous pas ouvert pour toi ta poitrine ?",
        words: [
          { ar: "أَلَمْ نَشْرَحْ", translit: "Alam nashraḥ", fr: "N'avons-Nous pas ouvert" },
          { ar: "لَكَ", translit: "laka", fr: "pour toi" },
          { ar: "صَدْرَكَ", translit: "ṣadrak", fr: "ta poitrine" },
        ],
      },
      {
        arabic: "وَوَضَعْنَا عَنكَ وِزْرَكَ",
        transliteration: "Wa-waḍa'nā 'anka wizrak",
        translation: "Et ne t'avons-Nous pas déchargé du fardeau",
        words: [
          { ar: "وَوَضَعْنَا", translit: "Wa-waḍa'nā", fr: "Et Nous avons déchargé" },
          { ar: "عَنكَ", translit: "'anka", fr: "de toi" },
          { ar: "وِزْرَكَ", translit: "wizrak", fr: "ton fardeau" },
        ],
      },
      {
        arabic: "ٱلَّذِىٓ أَنقَضَ ظَهْرَكَ",
        transliteration: "Alladhī anqaḍa ẓahrak",
        translation: "qui accablait ton dos ?",
        words: [
          { ar: "ٱلَّذِىٓ", translit: "Alladhī", fr: "qui" },
          { ar: "أَنقَضَ", translit: "anqaḍa", fr: "accablait" },
          { ar: "ظَهْرَكَ", translit: "ẓahrak", fr: "ton dos" },
        ],
      },
      {
        arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ",
        transliteration: "Wa-rafa'nā laka dhikrak",
        translation: "Et n'avons-Nous pas élevé pour toi ta renommée ?",
        words: [
          { ar: "وَرَفَعْنَا", translit: "Wa-rafa'nā", fr: "Et Nous avons élevé" },
          { ar: "لَكَ", translit: "laka", fr: "pour toi" },
          { ar: "ذِكْرَكَ", translit: "dhikrak", fr: "ta renommée" },
        ],
      },
      {
        arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
        transliteration: "Fa-inna ma'a l-'usri yusrā",
        translation: "À côté de la difficulté est, certes, une facilité !",
        words: [
          { ar: "فَإِنَّ", translit: "Fa-inna", fr: "Certes" },
          { ar: "مَعَ ٱلْعُسْرِ", translit: "ma'a l-'usri", fr: "avec la difficulté" },
          { ar: "يُسْرًا", translit: "yusrā", fr: "une facilité" },
        ],
      },
      {
        arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
        transliteration: "Inna ma'a l-'usri yusrā",
        translation: "À côté de la difficulté, est certes, une facilité.",
        words: [
          { ar: "إِنَّ", translit: "Inna", fr: "Certes" },
          { ar: "مَعَ ٱلْعُسْرِ", translit: "ma'a l-'usri", fr: "avec la difficulté" },
          { ar: "يُسْرًا", translit: "yusrā", fr: "une facilité" },
        ],
      },
    ],
  },
  {
    id: 14,
    number: 93,
    name: "Ad-Duha",
    nameArabic: "الضحى",
    meaning: "Le Jour Montant",
    verses: 11,
    icon: "☀️",
    ayahs: [
      {
        arabic: "وَٱلضُّحَىٰ",
        transliteration: "Wa-ḍ-ḍuḥā",
        translation: "Par le Jour Montant !",
        words: [
          { ar: "وَ", translit: "Wa", fr: "Par" },
          { ar: "ٱلضُّحَىٰ", translit: "ḍ-ḍuḥā", fr: "le Jour Montant" },
        ],
      },
      {
        arabic: "وَٱلَّيْلِ إِذَا سَجَىٰ",
        transliteration: "Wa-l-layli idhā sajā",
        translation: "Et par la nuit quand elle couvre tout !",
        words: [
          { ar: "وَٱلَّيْلِ", translit: "Wa-l-layli", fr: "Et par la nuit" },
          { ar: "إِذَا سَجَىٰ", translit: "idhā sajā", fr: "quand elle couvre tout" },
        ],
      },
      {
        arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
        transliteration: "Mā wadda'aka rabbuka wa-mā qalā",
        translation: "Ton Seigneur ne t'a ni abandonné, ni détesté.",
        words: [
          { ar: "مَا وَدَّعَكَ", translit: "Mā wadda'aka", fr: "Il ne t'a pas abandonné" },
          { ar: "رَبُّكَ", translit: "rabbuka", fr: "ton Seigneur" },
          { ar: "وَمَا قَلَىٰ", translit: "wa-mā qalā", fr: "ni détesté" },
        ],
      },
      {
        arabic: "وَلَلْـَٔاخِرَةُ خَيْرٌ لَّكَ مِنَ ٱلْأُولَىٰ",
        transliteration: "Wa-la-l-ākhiratu khayrun laka mina l-ūlā",
        translation: "La vie dernière t'est, certes, meilleure que la vie présente.",
        words: [
          { ar: "وَلَلْـَٔاخِرَةُ", translit: "Wa-la-l-ākhiratu", fr: "Et l'au-delà" },
          { ar: "خَيْرٌ لَّكَ", translit: "khayrun laka", fr: "est meilleur pour toi" },
          { ar: "مِنَ ٱلْأُولَىٰ", translit: "mina l-ūlā", fr: "que la vie présente" },
        ],
      },
      {
        arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰٓ",
        transliteration: "Wa-la-sawfa yu'ṭīka rabbuka fa-tarḍā",
        translation: "Ton Seigneur t'accordera certes [Ses faveurs], et alors tu seras satisfait.",
        words: [
          { ar: "وَلَسَوْفَ يُعْطِيكَ", translit: "Wa-la-sawfa yu'ṭīka", fr: "Et certes Il te donnera" },
          { ar: "رَبُّكَ", translit: "rabbuka", fr: "ton Seigneur" },
          { ar: "فَتَرْضَىٰٓ", translit: "fa-tarḍā", fr: "et tu seras satisfait" },
        ],
      },
    ],
  },
  {
    id: 15,
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
      {
        arabic: "مَـٰلِكِ يَوْمِ ٱلدِّينِ",
        transliteration: "Māliki yawmi d-dīn",
        translation: "Maître du Jour de la rétribution.",
        words: [
          { ar: "مَـٰلِكِ", translit: "Māliki", fr: "Maître" },
          { ar: "يَوْمِ", translit: "yawmi", fr: "du Jour" },
          { ar: "ٱلدِّينِ", translit: "d-dīn", fr: "de la Rétribution" },
        ],
      },
      {
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        transliteration: "Iyyāka na'budu wa-iyyāka nasta'īn",
        translation: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours.",
        words: [
          { ar: "إِيَّاكَ نَعْبُدُ", translit: "Iyyāka na'budu", fr: "C'est Toi que nous adorons" },
          { ar: "وَإِيَّاكَ نَسْتَعِينُ", translit: "wa-iyyāka nasta'īn", fr: "et de Toi que nous implorons secours" },
        ],
      },
      {
        arabic: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
        transliteration: "Ihdinā ṣ-ṣirāṭa l-mustaqīm",
        translation: "Guide-nous dans le droit chemin,",
        words: [
          { ar: "ٱهْدِنَا", translit: "Ihdinā", fr: "Guide-nous" },
          { ar: "ٱلصِّرَٰطَ", translit: "ṣ-ṣirāṭa", fr: "le chemin" },
          { ar: "ٱلْمُسْتَقِيمَ", translit: "l-mustaqīm", fr: "droit" },
        ],
      },
      {
        arabic: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
        transliteration: "Ṣirāṭa lladhīna an'amta 'alayhim ghayri l-maghḍūbi 'alayhim wa-lā ḍ-ḍāllīn",
        translation: "le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
        words: [
          { ar: "صِرَٰطَ", translit: "Ṣirāṭa", fr: "le chemin" },
          { ar: "ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ", translit: "lladhīna an'amta 'alayhim", fr: "de ceux que Tu as comblés" },
          { ar: "غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ", translit: "ghayri l-maghḍūbi 'alayhim", fr: "non des réprouvés" },
          { ar: "وَلَا ٱلضَّآلِّينَ", translit: "wa-lā ḍ-ḍāllīn", fr: "ni des égarés" },
        ],
      },
    ],
  },,
  {
    id: 17,
    number: 78,
    name: "An-Naba",
    nameArabic: "النَّبَإِ",
    meaning: "La Grande Nouvelle",
    verses: 40,
    icon: "📯",
    longForm: true,
    ayahs: [
      {
        arabic: "عَمَّ يَتَسَآءَلُونَ",
        transliteration: "'Amma Yatasaa-aloon",
        translation: "Sur quoi s'interrogent-ils mutuellement?",
        words: [
          { ar: "عَمَّ" },
          { ar: "يَتَسَآءَلُونَ" }
        ],
      },
      {
        arabic: "عَنِ ٱلنَّبَإِ ٱلْعَظِيمِ",
        transliteration: "'Anin-nabaa-il 'azeem",
        translation: "Sur la grande nouvelle,",
        words: [
          { ar: "عَنِ" },
          { ar: "ٱلنَّبَإِ" },
          { ar: "ٱلْعَظِيمِ" }
        ],
      },
      {
        arabic: "ٱلَّذِى هُمْ فِيهِ مُخْتَلِفُونَ",
        transliteration: "Allazi hum feehi mukh talifoon",
        translation: "à propos de laquelle ils divergent.",
        words: [
          { ar: "ٱلَّذِى" },
          { ar: "هُمْ" },
          { ar: "فِيهِ" },
          { ar: "مُخْتَلِفُونَ" }
        ],
      },
      {
        arabic: "كَلَّا سَيَعْلَمُونَ",
        transliteration: "Kallaa sa y'alamoon",
        translation: "Eh bien non! Ils sauront bientôt.",
        words: [
          { ar: "كَلَّا" },
          { ar: "سَيَعْلَمُونَ" }
        ],
      },
      {
        arabic: "ثُمَّ كَلَّا سَيَعْلَمُونَ",
        transliteration: "Thumma kallaa sa y'alamoon",
        translation: "Encore une fois, non! Ils sauront bientôt.",
        words: [
          { ar: "ثُمَّ" },
          { ar: "كَلَّا" },
          { ar: "سَيَعْلَمُونَ" }
        ],
      },
      {
        arabic: "أَلَمْ نَجْعَلِ ٱلْأَرْضَ مِهَٰدًۭا",
        transliteration: "Alam naj'alil arda mihaa da",
        translation: "N'avons-Nous pas fait de la terre une couche?",
        words: [
          { ar: "أَلَمْ" },
          { ar: "نَجْعَلِ" },
          { ar: "ٱلْأَرْضَ" },
          { ar: "مِهَٰدًۭا" }
        ],
      },
      {
        arabic: "وَٱلْجِبَالَ أَوْتَادًۭا",
        transliteration: "Wal jibaala au taada",
        translation: "et (placé) les montagnes comme des piquets?",
        words: [
          { ar: "وَٱلْجِبَالَ" },
          { ar: "أَوْتَادًۭا" }
        ],
      },
      {
        arabic: "وَخَلَقْنَٰكُمْ أَزْوَٰجًۭا",
        transliteration: "Wa khalaq naakum azwaaja",
        translation: "Nous vous avons créés en couples,",
        words: [
          { ar: "وَخَلَقْنَٰكُمْ" },
          { ar: "أَزْوَٰجًۭا" }
        ],
      },
      {
        arabic: "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًۭا",
        transliteration: "Waja'alnan naumakum subata",
        translation: "et désigné votre sommeil pour votre repos,",
        words: [
          { ar: "وَجَعَلْنَا" },
          { ar: "نَوْمَكُمْ" },
          { ar: "سُبَاتًۭا" }
        ],
      },
      {
        arabic: "وَجَعَلْنَا ٱلَّيْلَ لِبَاسًۭا",
        transliteration: "Waja'alnal laila libasa",
        translation: "et fait de la nuit un vêtement,",
        words: [
          { ar: "وَجَعَلْنَا" },
          { ar: "ٱلَّيْلَ" },
          { ar: "لِبَاسًۭا" }
        ],
      },
      {
        arabic: "وَجَعَلْنَا ٱلنَّهَارَ مَعَاشًۭا",
        transliteration: "Waja'alnan nahara ma 'aasha",
        translation: "et assigné le jour pour les affaires de la vie,",
        words: [
          { ar: "وَجَعَلْنَا" },
          { ar: "ٱلنَّهَارَ" },
          { ar: "مَعَاشًۭا" }
        ],
      },
      {
        arabic: "وَبَنَيْنَا فَوْقَكُمْ سَبْعًۭا شِدَادًۭا",
        transliteration: "Wa banaina fauqakum sab 'an shi daada",
        translation: "et construit au-dessus de vous sept (cieux) renforcés,",
        words: [
          { ar: "وَبَنَيْنَا" },
          { ar: "فَوْقَكُمْ" },
          { ar: "سَبْعًۭا" },
          { ar: "شِدَادًۭا" }
        ],
      },
      {
        arabic: "وَجَعَلْنَا سِرَاجًۭا وَهَّاجًۭا",
        transliteration: "Waja'alna siraajaw wah haaja",
        translation: "et [y] avons placé une lampe (le soleil) très ardente,",
        words: [
          { ar: "وَجَعَلْنَا" },
          { ar: "سِرَاجًۭا" },
          { ar: "وَهَّاجًۭا" }
        ],
      },
      {
        arabic: "وَأَنزَلْنَا مِنَ ٱلْمُعْصِرَٰتِ مَآءًۭ ثَجَّاجًۭا",
        transliteration: "Wa anzalna minal m'usiraati maa-an saj-jaaja",
        translation: "et fait descendre des nuées une eau abondante",
        words: [
          { ar: "وَأَنزَلْنَا" },
          { ar: "مِنَ" },
          { ar: "ٱلْمُعْصِرَٰتِ" },
          { ar: "مَآءًۭ" },
          { ar: "ثَجَّاجًۭا" }
        ],
      },
      {
        arabic: "لِّنُخْرِجَ بِهِۦ حَبًّۭا وَنَبَاتًۭا",
        transliteration: "Linukh rija bihee habbaw wana baata",
        translation: "pour faire pousser par elle grains et plantes",
        words: [
          { ar: "لِّنُخْرِجَ" },
          { ar: "بِهِۦ" },
          { ar: "حَبًّۭا" },
          { ar: "وَنَبَاتًۭا" }
        ],
      },
      {
        arabic: "وَجَنَّٰتٍ أَلْفَافًا",
        transliteration: "Wa jan naatin alfafa",
        translation: "et jardins luxuriants.",
        words: [
          { ar: "وَجَنَّٰتٍ" },
          { ar: "أَلْفَافًا" }
        ],
      },
      {
        arabic: "إِنَّ يَوْمَ ٱلْفَصْلِ كَانَ مِيقَٰتًۭا",
        transliteration: "Inna yaumal-fasli kana miqaata",
        translation: "Le Jour de la Décision [du Jugement] a son terme fixé.",
        words: [
          { ar: "إِنَّ" },
          { ar: "يَوْمَ" },
          { ar: "ٱلْفَصْلِ" },
          { ar: "كَانَ" },
          { ar: "مِيقَٰتًۭا" }
        ],
      },
      {
        arabic: "يَوْمَ يُنفَخُ فِى ٱلصُّورِ فَتَأْتُونَ أَفْوَاجًۭا",
        transliteration: "Yauma yun fakhu fis-soori fataa toona afwaaja",
        translation: "Le jour où l'on soufflera dans la Trompe, vous viendrez par troupes,",
        words: [
          { ar: "يَوْمَ" },
          { ar: "يُنفَخُ" },
          { ar: "فِى" },
          { ar: "ٱلصُّورِ" },
          { ar: "فَتَأْتُونَ" },
          { ar: "أَفْوَاجًۭا" }
        ],
      },
      {
        arabic: "وَفُتِحَتِ ٱلسَّمَآءُ فَكَانَتْ أَبْوَٰبًۭا",
        transliteration: "Wa futiha tis samaa-u fakaanat abwaaba",
        translation: "et le ciel sera ouvert et [présentera] des portes,",
        words: [
          { ar: "وَفُتِحَتِ" },
          { ar: "ٱلسَّمَآءُ" },
          { ar: "فَكَانَتْ" },
          { ar: "أَبْوَٰبًۭا" }
        ],
      },
      {
        arabic: "وَسُيِّرَتِ ٱلْجِبَالُ فَكَانَتْ سَرَابًا",
        transliteration: "Wa suyyi raatil jibaalu fa kaanat saraaba",
        translation: "et les montagnes seront mises en marche et deviendront un mirage.",
        words: [
          { ar: "وَسُيِّرَتِ" },
          { ar: "ٱلْجِبَالُ" },
          { ar: "فَكَانَتْ" },
          { ar: "سَرَابًا" }
        ],
      },
      {
        arabic: "إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًۭا",
        transliteration: "Inna jahan nama kaanat mirsaada",
        translation: "L'Enfer demeure aux aguets,",
        words: [
          { ar: "إِنَّ" },
          { ar: "جَهَنَّمَ" },
          { ar: "كَانَتْ" },
          { ar: "مِرْصَادًۭا" }
        ],
      },
      {
        arabic: "لِّلطَّٰغِينَ مَـَٔابًۭا",
        transliteration: "Lit taa gheena ma aaba",
        translation: "refuge pour les transgresseurs.",
        words: [
          { ar: "لِّلطَّٰغِينَ" },
          { ar: "مَـَٔابًۭا" }
        ],
      },
      {
        arabic: "لَّٰبِثِينَ فِيهَآ أَحْقَابًۭا",
        transliteration: "Laa bitheena feehaa ahqaaba",
        translation: "Ils y demeureront pendant des siècles successifs.",
        words: [
          { ar: "لَّٰبِثِينَ" },
          { ar: "فِيهَآ" },
          { ar: "أَحْقَابًۭا" }
        ],
      },
      {
        arabic: "لَّا يَذُوقُونَ فِيهَا بَرْدًۭا وَلَا شَرَابًا",
        transliteration: "Laa ya zooqoona feeha bar daw walaa sharaaba",
        translation: "Ils n'y goûteront ni fraîcheur ni breuvage,",
        words: [
          { ar: "لَّا" },
          { ar: "يَذُوقُونَ" },
          { ar: "فِيهَا" },
          { ar: "بَرْدًۭا" },
          { ar: "وَلَا" },
          { ar: "شَرَابًا" }
        ],
      },
      {
        arabic: "إِلَّا حَمِيمًۭا وَغَسَّاقًۭا",
        transliteration: "Illa hamee maw-wa ghas saaqa",
        translation: "Hormis une eau bouillante et un pus",
        words: [
          { ar: "إِلَّا" },
          { ar: "حَمِيمًۭا" },
          { ar: "وَغَسَّاقًۭا" }
        ],
      },
      {
        arabic: "جَزَآءًۭ وِفَاقًا",
        transliteration: "Jazaa-aw wi faaqa",
        translation: "comme rétribution équitable.",
        words: [
          { ar: "جَزَآءًۭ" },
          { ar: "وِفَاقًا" }
        ],
      },
      {
        arabic: "إِنَّهُمْ كَانُوا۟ لَا يَرْجُونَ حِسَابًۭا",
        transliteration: "Innahum kaanu laa yarjoona hisaaba",
        translation: "Car ils ne s'attendaient pas à rendre compte,",
        words: [
          { ar: "إِنَّهُمْ" },
          { ar: "كَانُوا۟" },
          { ar: "لَا" },
          { ar: "يَرْجُونَ" },
          { ar: "حِسَابًۭا" }
        ],
      },
      {
        arabic: "وَكَذَّبُوا۟ بِـَٔايَٰتِنَا كِذَّابًۭا",
        transliteration: "Wa kazzabu bi aayaa tina kizzaba",
        translation: "et traitaient de mensonges, continuellement, Nos versets,",
        words: [
          { ar: "وَكَذَّبُوا۟" },
          { ar: "بِـَٔايَٰتِنَا" },
          { ar: "كِذَّابًۭا" }
        ],
      },
      {
        arabic: "وَكُلَّ شَىْءٍ أَحْصَيْنَٰهُ كِتَٰبًۭا",
        transliteration: "Wa kulla shai-in ahsai naahu kitaa ba",
        translation: "alors que Nous avons dénombré toutes choses en écrit.",
        words: [
          { ar: "وَكُلَّ" },
          { ar: "شَىْءٍ" },
          { ar: "أَحْصَيْنَٰهُ" },
          { ar: "كِتَٰبًۭا" }
        ],
      },
      {
        arabic: "فَذُوقُوا۟ فَلَن نَّزِيدَكُمْ إِلَّا عَذَابًا",
        transliteration: "Fa zooqoo falan-nazee dakum ill-laa azaaba",
        translation: "Goûtez-donc. Nous n'augmenterons pour vous que le châtiment!",
        words: [
          { ar: "فَذُوقُوا۟" },
          { ar: "فَلَن" },
          { ar: "نَّزِيدَكُمْ" },
          { ar: "إِلَّا" },
          { ar: "عَذَابًا" }
        ],
      },
      {
        arabic: "إِنَّ لِلْمُتَّقِينَ مَفَازًا",
        transliteration: "Inna lil mutta qeena mafaaza",
        translation: "Pour les pieux ce sera une réussite:",
        words: [
          { ar: "إِنَّ" },
          { ar: "لِلْمُتَّقِينَ" },
          { ar: "مَفَازًا" }
        ],
      },
      {
        arabic: "حَدَآئِقَ وَأَعْنَٰبًۭا",
        transliteration: "Hadaa-iqa wa a'anaa ba",
        translation: "jardins et vignes,",
        words: [
          { ar: "حَدَآئِقَ" },
          { ar: "وَأَعْنَٰبًۭا" }
        ],
      },
      {
        arabic: "وَكَوَاعِبَ أَتْرَابًۭا",
        transliteration: "Wa kaawa 'iba at raaba",
        translation: "et des (belles) aux seins arrondis, d'une égale jeunesse,",
        words: [
          { ar: "وَكَوَاعِبَ" },
          { ar: "أَتْرَابًۭا" }
        ],
      },
      {
        arabic: "وَكَأْسًۭا دِهَاقًۭا",
        transliteration: "Wa ka'san di haaqa",
        translation: "et coupes débordantes.",
        words: [
          { ar: "وَكَأْسًۭا" },
          { ar: "دِهَاقًۭا" }
        ],
      },
      {
        arabic: "لَّا يَسْمَعُونَ فِيهَا لَغْوًۭا وَلَا كِذَّٰبًۭا",
        transliteration: "Laa yasma'oona fiha lagh waw walaa kizzaba",
        translation: "Ils n'y entendront ni futilités ni mensonges.",
        words: [
          { ar: "لَّا" },
          { ar: "يَسْمَعُونَ" },
          { ar: "فِيهَا" },
          { ar: "لَغْوًۭا" },
          { ar: "وَلَا" },
          { ar: "كِذَّٰبًۭا" }
        ],
      },
      {
        arabic: "جَزَآءًۭ مِّن رَّبِّكَ عَطَآءً حِسَابًۭا",
        transliteration: "Jazaa-am mir-rabbika ataa-an hisaaba",
        translation: "A titre de récompense de ton Seigneur et à titre de don abondant",
        words: [
          { ar: "جَزَآءًۭ" },
          { ar: "مِّن" },
          { ar: "رَّبِّكَ" },
          { ar: "عَطَآءً" },
          { ar: "حِسَابًۭا" }
        ],
      },
      {
        arabic: "رَّبِّ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ وَمَا بَيْنَهُمَا ٱلرَّحْمَٰنِ ۖ لَا يَمْلِكُونَ مِنْهُ خِطَابًۭا",
        transliteration: "Rabbis samaa waati wal ardi wa maa baina humar rahmaani laa yam likoona minhu khi taaba",
        translation: "du Seigneur des cieux et de la terre et de ce qui existe entre eux, le Tout Miséricordieux; ils n'osent nullement Lui adresser la parole.",
        words: [
          { ar: "رَّبِّ" },
          { ar: "ٱلسَّمَٰوَٰتِ" },
          { ar: "وَٱلْأَرْضِ" },
          { ar: "وَمَا" },
          { ar: "بَيْنَهُمَا" },
          { ar: "ٱلرَّحْمَٰنِ" },
          { ar: "ۖ" },
          { ar: "لَا" },
          { ar: "يَمْلِكُونَ" },
          { ar: "مِنْهُ" },
          { ar: "خِطَابًۭا" }
        ],
      },
      {
        arabic: "يَوْمَ يَقُومُ ٱلرُّوحُ وَٱلْمَلَٰٓئِكَةُ صَفًّۭا ۖ لَّا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ ٱلرَّحْمَٰنُ وَقَالَ صَوَابًۭا",
        transliteration: "Yauma yaqoo mur roohu wal malaa-ikatu saf-fal laa yata kalla moona illa man azina lahur rahmaanu wa qaala sawaaba",
        translation: "Le jour où l'Esprit et les Anges se dresseront en rangs, nul ne saura parler, sauf celui à qui le Tout Miséricordieux aura accordé la permission, et qui dira la vérité.",
        words: [
          { ar: "يَوْمَ" },
          { ar: "يَقُومُ" },
          { ar: "ٱلرُّوحُ" },
          { ar: "وَٱلْمَلَٰٓئِكَةُ" },
          { ar: "صَفًّۭا" },
          { ar: "ۖ" },
          { ar: "لَّا" },
          { ar: "يَتَكَلَّمُونَ" },
          { ar: "إِلَّا" },
          { ar: "مَنْ" },
          { ar: "أَذِنَ" },
          { ar: "لَهُ" },
          { ar: "ٱلرَّحْمَٰنُ" },
          { ar: "وَقَالَ" },
          { ar: "صَوَابًۭا" }
        ],
      },
      {
        arabic: "ذَٰلِكَ ٱلْيَوْمُ ٱلْحَقُّ ۖ فَمَن شَآءَ ٱتَّخَذَ إِلَىٰ رَبِّهِۦ مَـَٔابًا",
        transliteration: "Zaalikal yaumul haqqu faman shaa-at ta khaaza ill-laa rabbihi ma-aaba",
        translation: "Ce jour-là est inéluctable. Que celui qui veut prenne donc refuge auprès de son Seigneur.",
        words: [
          { ar: "ذَٰلِكَ" },
          { ar: "ٱلْيَوْمُ" },
          { ar: "ٱلْحَقُّ" },
          { ar: "ۖ" },
          { ar: "فَمَن" },
          { ar: "شَآءَ" },
          { ar: "ٱتَّخَذَ" },
          { ar: "إِلَىٰ" },
          { ar: "رَبِّهِۦ" },
          { ar: "مَـَٔابًا" }
        ],
      },
      {
        arabic: "إِنَّآ أَنذَرْنَٰكُمْ عَذَابًۭا قَرِيبًۭا يَوْمَ يَنظُرُ ٱلْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ ٱلْكَافِرُ يَٰلَيْتَنِى كُنتُ تُرَٰبًۢا",
        transliteration: "In naa anzar naakum azaaban qareebaiy-yauma yan zurul marr-u maa qaddamat yadaahu wa ya qoolul-kaafiru yaa lai tanee kuntu turaaba",
        translation: "Nous vous avons avertis d'un châtiment bien proche, le jour où l'homme verra ce que ses deux mains ont préparé; et l'infidèle dira: «Hélas pour moi! Comme j'aurais aimé n'être que poussière».",
        words: [
          { ar: "إِنَّآ" },
          { ar: "أَنذَرْنَٰكُمْ" },
          { ar: "عَذَابًۭا" },
          { ar: "قَرِيبًۭا" },
          { ar: "يَوْمَ" },
          { ar: "يَنظُرُ" },
          { ar: "ٱلْمَرْءُ" },
          { ar: "مَا" },
          { ar: "قَدَّمَتْ" },
          { ar: "يَدَاهُ" },
          { ar: "وَيَقُولُ" },
          { ar: "ٱلْكَافِرُ" },
          { ar: "يَٰلَيْتَنِى" },
          { ar: "كُنتُ" },
          { ar: "تُرَٰبًۢا" }
        ],
      }
    ],
  },
  {
    id: 18,
    number: 79,
    name: "An-Naazi'aat",
    nameArabic: "النَّازِعَاتِ",
    meaning: "Les Anges qui arrachent les âmes",
    verses: 46,
    icon: "💫",
    longForm: true,
    ayahs: [
      {
        arabic: "وَٱلنَّٰزِعَٰتِ غَرْقًۭا",
        transliteration: "Wan naazi 'aati gharqa",
        translation: "Par ceux qui arrachent violemment!",
        words: [
          { ar: "وَٱلنَّٰزِعَٰتِ" },
          { ar: "غَرْقًۭا" }
        ],
      },
      {
        arabic: "وَٱلنَّٰشِطَٰتِ نَشْطًۭا",
        transliteration: "Wan naa shi taati nashta",
        translation: "Et par ceux qui recueillent avec douceur!",
        words: [
          { ar: "وَٱلنَّٰشِطَٰتِ" },
          { ar: "نَشْطًۭا" }
        ],
      },
      {
        arabic: "وَٱلسَّٰبِحَٰتِ سَبْحًۭا",
        transliteration: "Wass saabi-haati sabha",
        translation: "Et par ceux qui voguent librement,",
        words: [
          { ar: "وَٱلسَّٰبِحَٰتِ" },
          { ar: "سَبْحًۭا" }
        ],
      },
      {
        arabic: "فَٱلسَّٰبِقَٰتِ سَبْقًۭا",
        transliteration: "Fass saabi qaati sabqa",
        translation: "puis s'élancent à toute vitesse,",
        words: [
          { ar: "فَٱلسَّٰبِقَٰتِ" },
          { ar: "سَبْقًۭا" }
        ],
      },
      {
        arabic: "فَٱلْمُدَبِّرَٰتِ أَمْرًۭا",
        transliteration: "Fal mu dab-bi raati amra",
        translation: "et règlent les affaires!",
        words: [
          { ar: "فَٱلْمُدَبِّرَٰتِ" },
          { ar: "أَمْرًۭا" }
        ],
      },
      {
        arabic: "يَوْمَ تَرْجُفُ ٱلرَّاجِفَةُ",
        transliteration: "Yawma tarjufur raajifa",
        translation: "Le jour où [la terre] tremblera [au premier son du clairon]",
        words: [
          { ar: "يَوْمَ" },
          { ar: "تَرْجُفُ" },
          { ar: "ٱلرَّاجِفَةُ" }
        ],
      },
      {
        arabic: "تَتْبَعُهَا ٱلرَّادِفَةُ",
        transliteration: "Tatba'u har raadifa",
        translation: "immédiatement suivi du deuxième.",
        words: [
          { ar: "تَتْبَعُهَا" },
          { ar: "ٱلرَّادِفَةُ" }
        ],
      },
      {
        arabic: "قُلُوبٌۭ يَوْمَئِذٍۢ وَاجِفَةٌ",
        transliteration: "Quloobuny-yau maaiziw-waaji-fa",
        translation: "Ce jour-là, il y aura des cœurs qui seront agités d'effroi,",
        words: [
          { ar: "قُلُوبٌۭ" },
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "وَاجِفَةٌ" }
        ],
      },
      {
        arabic: "أَبْصَٰرُهَا خَٰشِعَةٌۭ",
        transliteration: "Absaa ruhaa khashi'ah",
        translation: "et leurs regards se baisseront.",
        words: [
          { ar: "أَبْصَٰرُهَا" },
          { ar: "خَٰشِعَةٌۭ" }
        ],
      },
      {
        arabic: "يَقُولُونَ أَءِنَّا لَمَرْدُودُونَ فِى ٱلْحَافِرَةِ",
        transliteration: "Ya qoo loona a-inna lamar doo doona fil haafirah",
        translation: "Ils disent: «Quoi! Serons-nous ramenés à notre vie première,",
        words: [
          { ar: "يَقُولُونَ" },
          { ar: "أَءِنَّا" },
          { ar: "لَمَرْدُودُونَ" },
          { ar: "فِى" },
          { ar: "ٱلْحَافِرَةِ" }
        ],
      },
      {
        arabic: "أَءِذَا كُنَّا عِظَٰمًۭا نَّخِرَةًۭ",
        transliteration: "Aizaa kunna 'izaa man-nakhirah",
        translation: "quand nous serons ossements pourris?»",
        words: [
          { ar: "أَءِذَا" },
          { ar: "كُنَّا" },
          { ar: "عِظَٰمًۭا" },
          { ar: "نَّخِرَةًۭ" }
        ],
      },
      {
        arabic: "قَالُوا۟ تِلْكَ إِذًۭا كَرَّةٌ خَاسِرَةٌۭ",
        transliteration: "Qaalu tilka izan karratun khaasirah.",
        translation: "Ils disent: «ce sera alors un retour ruineux!»",
        words: [
          { ar: "قَالُوا۟" },
          { ar: "تِلْكَ" },
          { ar: "إِذًۭا" },
          { ar: "كَرَّةٌ" },
          { ar: "خَاسِرَةٌۭ" }
        ],
      },
      {
        arabic: "فَإِنَّمَا هِىَ زَجْرَةٌۭ وَٰحِدَةٌۭ",
        transliteration: "Fa inna ma hiya zajratuw-waahida",
        translation: "Il n'y aura qu'une sommation,",
        words: [
          { ar: "فَإِنَّمَا" },
          { ar: "هِىَ" },
          { ar: "زَجْرَةٌۭ" },
          { ar: "وَٰحِدَةٌۭ" }
        ],
      },
      {
        arabic: "فَإِذَا هُم بِٱلسَّاهِرَةِ",
        transliteration: "Faizaa hum biss saahirah",
        translation: "et voilà qu'ils seront sur la terre (ressuscités).",
        words: [
          { ar: "فَإِذَا" },
          { ar: "هُم" },
          { ar: "بِٱلسَّاهِرَةِ" }
        ],
      },
      {
        arabic: "هَلْ أَتَىٰكَ حَدِيثُ مُوسَىٰٓ",
        transliteration: "Hal ataaka hadeethu Musaa",
        translation: "Le récit de Moïse t'est-il parvenu?",
        words: [
          { ar: "هَلْ" },
          { ar: "أَتَىٰكَ" },
          { ar: "حَدِيثُ" },
          { ar: "مُوسَىٰٓ" }
        ],
      },
      {
        arabic: "إِذْ نَادَىٰهُ رَبُّهُۥ بِٱلْوَادِ ٱلْمُقَدَّسِ طُوًى",
        transliteration: "Iz nadaahu rabbuhu bil waadil-muqad dasi tuwa",
        translation: "Quand son Seigneur l'appela, dans Towâ, la vallée sanctifiée:",
        words: [
          { ar: "إِذْ" },
          { ar: "نَادَىٰهُ" },
          { ar: "رَبُّهُۥ" },
          { ar: "بِٱلْوَادِ" },
          { ar: "ٱلْمُقَدَّسِ" },
          { ar: "طُوًى" }
        ],
      },
      {
        arabic: "ٱذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُۥ طَغَىٰ",
        transliteration: "Izhab ilaa fir'auna innahu taghaa.",
        translation: "«Va vers Pharaon. Vraiment, il s'est rebellé!»",
        words: [
          { ar: "ٱذْهَبْ" },
          { ar: "إِلَىٰ" },
          { ar: "فِرْعَوْنَ" },
          { ar: "إِنَّهُۥ" },
          { ar: "طَغَىٰ" }
        ],
      },
      {
        arabic: "فَقُلْ هَل لَّكَ إِلَىٰٓ أَن تَزَكَّىٰ",
        transliteration: "Faqul hal laka ilaa-an tazakka.",
        translation: "Puis dis-lui: «Voudrais-tu te purifier?",
        words: [
          { ar: "فَقُلْ" },
          { ar: "هَل" },
          { ar: "لَّكَ" },
          { ar: "إِلَىٰٓ" },
          { ar: "أَن" },
          { ar: "تَزَكَّىٰ" }
        ],
      },
      {
        arabic: "وَأَهْدِيَكَ إِلَىٰ رَبِّكَ فَتَخْشَىٰ",
        transliteration: "Wa ahdi yaka ila rabbika fatakh sha",
        translation: "et que je te guide vers ton Seigneur afin que tu Le craignes?»",
        words: [
          { ar: "وَأَهْدِيَكَ" },
          { ar: "إِلَىٰ" },
          { ar: "رَبِّكَ" },
          { ar: "فَتَخْشَىٰ" }
        ],
      },
      {
        arabic: "فَأَرَىٰهُ ٱلْءَايَةَ ٱلْكُبْرَىٰ",
        transliteration: "Fa araahul-aayatal kubra.",
        translation: "Il lui fit voir le très grand miracle.",
        words: [
          { ar: "فَأَرَىٰهُ" },
          { ar: "ٱلْءَايَةَ" },
          { ar: "ٱلْكُبْرَىٰ" }
        ],
      },
      {
        arabic: "فَكَذَّبَ وَعَصَىٰ",
        transliteration: "Fa kazzaba wa asaa.",
        translation: "Mais il le qualifia de mensonge et désobéit;",
        words: [
          { ar: "فَكَذَّبَ" },
          { ar: "وَعَصَىٰ" }
        ],
      },
      {
        arabic: "ثُمَّ أَدْبَرَ يَسْعَىٰ",
        transliteration: "Thumma adbara yas'aa.",
        translation: "Ensuite, il tourna le dos, s'en alla précipitamment,",
        words: [
          { ar: "ثُمَّ" },
          { ar: "أَدْبَرَ" },
          { ar: "يَسْعَىٰ" }
        ],
      },
      {
        arabic: "فَحَشَرَ فَنَادَىٰ",
        transliteration: "Fa hashara fanada.",
        translation: "rassembla [les gens] et leur fit une proclamation,",
        words: [
          { ar: "فَحَشَرَ" },
          { ar: "فَنَادَىٰ" }
        ],
      },
      {
        arabic: "فَقَالَ أَنَا۠ رَبُّكُمُ ٱلْأَعْلَىٰ",
        transliteration: "Faqala ana rabbu kumul-a'laa.",
        translation: "et dit: «C'est moi votre Seigneur, le très haut».",
        words: [
          { ar: "فَقَالَ" },
          { ar: "أَنَا۠" },
          { ar: "رَبُّكُمُ" },
          { ar: "ٱلْأَعْلَىٰ" }
        ],
      },
      {
        arabic: "فَأَخَذَهُ ٱللَّهُ نَكَالَ ٱلْءَاخِرَةِ وَٱلْأُولَىٰٓ",
        transliteration: "Fa-akha zahul laahu nakalal aakhirati wal-oola.",
        translation: "Alors Allah le saisit de la punition exemplaire de l'au-delà et de celle d'ici-bas.",
        words: [
          { ar: "فَأَخَذَهُ" },
          { ar: "ٱللَّهُ" },
          { ar: "نَكَالَ" },
          { ar: "ٱلْءَاخِرَةِ" },
          { ar: "وَٱلْأُولَىٰٓ" }
        ],
      },
      {
        arabic: "إِنَّ فِى ذَٰلِكَ لَعِبْرَةًۭ لِّمَن يَخْشَىٰٓ",
        transliteration: "Inna fee zaalika la'ibratal limaiy-yaksha",
        translation: "Il y a certes là un sujet de réflexion pour celui qui craint.",
        words: [
          { ar: "إِنَّ" },
          { ar: "فِى" },
          { ar: "ذَٰلِكَ" },
          { ar: "لَعِبْرَةًۭ" },
          { ar: "لِّمَن" },
          { ar: "يَخْشَىٰٓ" }
        ],
      },
      {
        arabic: "ءَأَنتُمْ أَشَدُّ خَلْقًا أَمِ ٱلسَّمَآءُ ۚ بَنَىٰهَا",
        transliteration: "A-antum a shaddu khalqan amis samaa-u banaaha.",
        translation: "Etes-vous plus durs à créer? ou le ciel, qu'Il a pourtant construit?",
        words: [
          { ar: "ءَأَنتُمْ" },
          { ar: "أَشَدُّ" },
          { ar: "خَلْقًا" },
          { ar: "أَمِ" },
          { ar: "ٱلسَّمَآءُ" },
          { ar: "ۚ" },
          { ar: "بَنَىٰهَا" }
        ],
      },
      {
        arabic: "رَفَعَ سَمْكَهَا فَسَوَّىٰهَا",
        transliteration: "Raf'a sam kaha fasaw waaha",
        translation: "Il a élevé bien haut sa voûte, puis l'a parfaitement ordonné;",
        words: [
          { ar: "رَفَعَ" },
          { ar: "سَمْكَهَا" },
          { ar: "فَسَوَّىٰهَا" }
        ],
      },
      {
        arabic: "وَأَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَىٰهَا",
        transliteration: "Wa aghtasha lailaha wa akhraja duhaaha.",
        translation: "Il a assombri sa nuit et fait luire son jour.",
        words: [
          { ar: "وَأَغْطَشَ" },
          { ar: "لَيْلَهَا" },
          { ar: "وَأَخْرَجَ" },
          { ar: "ضُحَىٰهَا" }
        ],
      },
      {
        arabic: "وَٱلْأَرْضَ بَعْدَ ذَٰلِكَ دَحَىٰهَآ",
        transliteration: "Wal arda b'ada zaalika dahaaha.",
        translation: "Et quant à la terre, après cela, Il l'a étendue:",
        words: [
          { ar: "وَٱلْأَرْضَ" },
          { ar: "بَعْدَ" },
          { ar: "ذَٰلِكَ" },
          { ar: "دَحَىٰهَآ" }
        ],
      },
      {
        arabic: "أَخْرَجَ مِنْهَا مَآءَهَا وَمَرْعَىٰهَا",
        transliteration: "Akhraja minha maa-aha wa mar 'aaha.",
        translation: "Il a fait sortir d'elle son eau et son pâturage,",
        words: [
          { ar: "أَخْرَجَ" },
          { ar: "مِنْهَا" },
          { ar: "مَآءَهَا" },
          { ar: "وَمَرْعَىٰهَا" }
        ],
      },
      {
        arabic: "وَٱلْجِبَالَ أَرْسَىٰهَا",
        transliteration: "Wal jibala arsaaha.",
        translation: "et quant aux montagnes, Il les a ancrées,",
        words: [
          { ar: "وَٱلْجِبَالَ" },
          { ar: "أَرْسَىٰهَا" }
        ],
      },
      {
        arabic: "مَتَٰعًۭا لَّكُمْ وَلِأَنْعَٰمِكُمْ",
        transliteration: "Mataa'al lakum wali an 'aamikum.",
        translation: "pour votre jouissance, vous et vos bestiaux.",
        words: [
          { ar: "مَتَٰعًۭا" },
          { ar: "لَّكُمْ" },
          { ar: "وَلِأَنْعَٰمِكُمْ" }
        ],
      },
      {
        arabic: "فَإِذَا جَآءَتِ ٱلطَّآمَّةُ ٱلْكُبْرَىٰ",
        transliteration: "Fa-izaa jaaa'atit taaam matul kubraa.",
        translation: "Puis quand viendra le grand cataclysme,",
        words: [
          { ar: "فَإِذَا" },
          { ar: "جَآءَتِ" },
          { ar: "ٱلطَّآمَّةُ" },
          { ar: "ٱلْكُبْرَىٰ" }
        ],
      },
      {
        arabic: "يَوْمَ يَتَذَكَّرُ ٱلْإِنسَٰنُ مَا سَعَىٰ",
        transliteration: "Yauma Yata zakkarul insaanu ma sa'aa.",
        translation: "le jour où l'homme se rappellera à quoi il s'est efforcé,",
        words: [
          { ar: "يَوْمَ" },
          { ar: "يَتَذَكَّرُ" },
          { ar: "ٱلْإِنسَٰنُ" },
          { ar: "مَا" },
          { ar: "سَعَىٰ" }
        ],
      },
      {
        arabic: "وَبُرِّزَتِ ٱلْجَحِيمُ لِمَن يَرَىٰ",
        transliteration: "Wa burrizatil-jaheemu limany-yaraa.",
        translation: "l'Enfer sera pleinement visible à celui qui regardera...",
        words: [
          { ar: "وَبُرِّزَتِ" },
          { ar: "ٱلْجَحِيمُ" },
          { ar: "لِمَن" },
          { ar: "يَرَىٰ" }
        ],
      },
      {
        arabic: "فَأَمَّا مَن طَغَىٰ",
        transliteration: "Fa ammaa man taghaa.",
        translation: "Quant à celui qui aura dépassé les limites",
        words: [
          { ar: "فَأَمَّا" },
          { ar: "مَن" },
          { ar: "طَغَىٰ" }
        ],
      },
      {
        arabic: "وَءَاثَرَ ٱلْحَيَوٰةَ ٱلدُّنْيَا",
        transliteration: "Wa aasaral hayaatad dunyaa",
        translation: "et aura préféré la vie présente,",
        words: [
          { ar: "وَءَاثَرَ" },
          { ar: "ٱلْحَيَوٰةَ" },
          { ar: "ٱلدُّنْيَا" }
        ],
      },
      {
        arabic: "فَإِنَّ ٱلْجَحِيمَ هِىَ ٱلْمَأْوَىٰ",
        transliteration: "Fa innal jaheema hiyal maawaa.",
        translation: "alors, l'Enfer sera son refuge...",
        words: [
          { ar: "فَإِنَّ" },
          { ar: "ٱلْجَحِيمَ" },
          { ar: "هِىَ" },
          { ar: "ٱلْمَأْوَىٰ" }
        ],
      },
      {
        arabic: "وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِۦ وَنَهَى ٱلنَّفْسَ عَنِ ٱلْهَوَىٰ",
        transliteration: "Wa ammaa man khaafa maqaama Rabbihee wa nahan nafsa 'anil hawaa",
        translation: "Et pour celui qui aura redouté de comparaître devant son Seigneur, et préservé son âme de la passion,",
        words: [
          { ar: "وَأَمَّا" },
          { ar: "مَنْ" },
          { ar: "خَافَ" },
          { ar: "مَقَامَ" },
          { ar: "رَبِّهِۦ" },
          { ar: "وَنَهَى" },
          { ar: "ٱلنَّفْسَ" },
          { ar: "عَنِ" },
          { ar: "ٱلْهَوَىٰ" }
        ],
      },
      {
        arabic: "فَإِنَّ ٱلْجَنَّةَ هِىَ ٱلْمَأْوَىٰ",
        transliteration: "Fa innal jannata hiyal maawaa",
        translation: "le Paradis sera alors son refuge.",
        words: [
          { ar: "فَإِنَّ" },
          { ar: "ٱلْجَنَّةَ" },
          { ar: "هِىَ" },
          { ar: "ٱلْمَأْوَىٰ" }
        ],
      },
      {
        arabic: "يَسْـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرْسَىٰهَا",
        transliteration: "Yas'aloonaka 'anis saa'ati ayyaana mursaahaa",
        translation: "Ils t'interrogent au sujet de l'Heure: «Quand va-t-elle jeter l'ancre?»",
        words: [
          { ar: "يَسْـَٔلُونَكَ" },
          { ar: "عَنِ" },
          { ar: "ٱلسَّاعَةِ" },
          { ar: "أَيَّانَ" },
          { ar: "مُرْسَىٰهَا" }
        ],
      },
      {
        arabic: "فِيمَ أَنتَ مِن ذِكْرَىٰهَآ",
        transliteration: "Feema anta min zikraahaa",
        translation: "Quelle [science] en as-tu pour le leur dire?",
        words: [
          { ar: "فِيمَ" },
          { ar: "أَنتَ" },
          { ar: "مِن" },
          { ar: "ذِكْرَىٰهَآ" }
        ],
      },
      {
        arabic: "إِلَىٰ رَبِّكَ مُنتَهَىٰهَآ",
        transliteration: "Ilaa Rabbika muntahaa haa",
        translation: "Son terme n'est connu que de ton Seigneur.",
        words: [
          { ar: "إِلَىٰ" },
          { ar: "رَبِّكَ" },
          { ar: "مُنتَهَىٰهَآ" }
        ],
      },
      {
        arabic: "إِنَّمَآ أَنتَ مُنذِرُ مَن يَخْشَىٰهَا",
        transliteration: "Innamaaa anta munziru maiy yakshaahaa",
        translation: "Tu n'es que l'avertisseur de celui qui la redoute.",
        words: [
          { ar: "إِنَّمَآ" },
          { ar: "أَنتَ" },
          { ar: "مُنذِرُ" },
          { ar: "مَن" },
          { ar: "يَخْشَىٰهَا" }
        ],
      },
      {
        arabic: "كَأَنَّهُمْ يَوْمَ يَرَوْنَهَا لَمْ يَلْبَثُوٓا۟ إِلَّا عَشِيَّةً أَوْ ضُحَىٰهَا",
        transliteration: "Ka annahum Yawma yarawnahaa lam yalbasooo illaa 'ashiyyatan aw duhaahaa",
        translation: "Le jour où ils la verront, il leur semblera n'avoir demeuré qu'un soir ou un matin.",
        words: [
          { ar: "كَأَنَّهُمْ" },
          { ar: "يَوْمَ" },
          { ar: "يَرَوْنَهَا" },
          { ar: "لَمْ" },
          { ar: "يَلْبَثُوٓا۟" },
          { ar: "إِلَّا" },
          { ar: "عَشِيَّةً" },
          { ar: "أَوْ" },
          { ar: "ضُحَىٰهَا" }
        ],
      }
    ],
  },
  {
    id: 19,
    number: 80,
    name: "Abasa",
    nameArabic: "عَبَسَ",
    meaning: "Il s'est renfrogné",
    verses: 42,
    icon: "😤",
    longForm: true,
    ayahs: [
      {
        arabic: "عَبَسَ وَتَوَلَّىٰٓ",
        transliteration: "'Abasa wa tawallaa.",
        translation: "Il s'est renfrogné et il s'est détourné",
        words: [
          { ar: "عَبَسَ" },
          { ar: "وَتَوَلَّىٰٓ" }
        ],
      },
      {
        arabic: "أَن جَآءَهُ ٱلْأَعْمَىٰ",
        transliteration: "An jaa-ahul 'a-maa",
        translation: "parce que l'aveugle est venu à lui.",
        words: [
          { ar: "أَن" },
          { ar: "جَآءَهُ" },
          { ar: "ٱلْأَعْمَىٰ" }
        ],
      },
      {
        arabic: "وَمَا يُدْرِيكَ لَعَلَّهُۥ يَزَّكَّىٰٓ",
        transliteration: "Wa maa yudreeka la'allahu yaz zakkaa.",
        translation: "Qui te dit: peut-être [cherche]-t-il à se purifier?",
        words: [
          { ar: "وَمَا" },
          { ar: "يُدْرِيكَ" },
          { ar: "لَعَلَّهُۥ" },
          { ar: "يَزَّكَّىٰٓ" }
        ],
      },
      {
        arabic: "أَوْ يَذَّكَّرُ فَتَنفَعَهُ ٱلذِّكْرَىٰٓ",
        transliteration: "Au yaz zak karu fatanfa 'ahuz zikraa.",
        translation: "ou à se rappeler en sorte que le rappel lui profite?",
        words: [
          { ar: "أَوْ" },
          { ar: "يَذَّكَّرُ" },
          { ar: "فَتَنفَعَهُ" },
          { ar: "ٱلذِّكْرَىٰٓ" }
        ],
      },
      {
        arabic: "أَمَّا مَنِ ٱسْتَغْنَىٰ",
        transliteration: "Amma manis taghnaa",
        translation: "Quant à celui qui se complaît dans sa suffisance (pour sa richesse)",
        words: [
          { ar: "أَمَّا" },
          { ar: "مَنِ" },
          { ar: "ٱسْتَغْنَىٰ" }
        ],
      },
      {
        arabic: "فَأَنتَ لَهُۥ تَصَدَّىٰ",
        transliteration: "Fa-anta lahu tasaddaa",
        translation: "tu vas avec empressement à sa rencontre.",
        words: [
          { ar: "فَأَنتَ" },
          { ar: "لَهُۥ" },
          { ar: "تَصَدَّىٰ" }
        ],
      },
      {
        arabic: "وَمَا عَلَيْكَ أَلَّا يَزَّكَّىٰ",
        transliteration: "Wa ma 'alaika allaa yaz zakka.",
        translation: "Or, que t'importe qu'il ne se purifie pas».",
        words: [
          { ar: "وَمَا" },
          { ar: "عَلَيْكَ" },
          { ar: "أَلَّا" },
          { ar: "يَزَّكَّىٰ" }
        ],
      },
      {
        arabic: "وَأَمَّا مَن جَآءَكَ يَسْعَىٰ",
        transliteration: "Wa amma man jaa-aka yas'a",
        translation: "Et quant à celui qui vient à toi avec empressement",
        words: [
          { ar: "وَأَمَّا" },
          { ar: "مَن" },
          { ar: "جَآءَكَ" },
          { ar: "يَسْعَىٰ" }
        ],
      },
      {
        arabic: "وَهُوَ يَخْشَىٰ",
        transliteration: "Wahuwa yakhshaa,",
        translation: "tout en ayant la crainte,",
        words: [
          { ar: "وَهُوَ" },
          { ar: "يَخْشَىٰ" }
        ],
      },
      {
        arabic: "فَأَنتَ عَنْهُ تَلَهَّىٰ",
        transliteration: "Fa-anta 'anhu talah haa.",
        translation: "tu ne t'en soucies pas.",
        words: [
          { ar: "فَأَنتَ" },
          { ar: "عَنْهُ" },
          { ar: "تَلَهَّىٰ" }
        ],
      },
      {
        arabic: "كَلَّآ إِنَّهَا تَذْكِرَةٌۭ",
        transliteration: "Kalla innaha tazkirah",
        translation: "N'agis plus ainsi! Vraiment ceci est un rappel -",
        words: [
          { ar: "كَلَّآ" },
          { ar: "إِنَّهَا" },
          { ar: "تَذْكِرَةٌۭ" }
        ],
      },
      {
        arabic: "فَمَن شَآءَ ذَكَرَهُۥ",
        transliteration: "Faman shaa a zakarah",
        translation: "quiconque veut, donc, s'en rappelle -",
        words: [
          { ar: "فَمَن" },
          { ar: "شَآءَ" },
          { ar: "ذَكَرَهُۥ" }
        ],
      },
      {
        arabic: "فِى صُحُفٍۢ مُّكَرَّمَةٍۢ",
        transliteration: "Fi suhufim mukar rama,",
        translation: "consigné dans des feuilles honorées,",
        words: [
          { ar: "فِى" },
          { ar: "صُحُفٍۢ" },
          { ar: "مُّكَرَّمَةٍۢ" }
        ],
      },
      {
        arabic: "مَّرْفُوعَةٍۢ مُّطَهَّرَةٍۭ",
        transliteration: "Marfoo'atim mutah hara,",
        translation: "élevées, purifiées,",
        words: [
          { ar: "مَّرْفُوعَةٍۢ" },
          { ar: "مُّطَهَّرَةٍۭ" }
        ],
      },
      {
        arabic: "بِأَيْدِى سَفَرَةٍۢ",
        transliteration: "Bi'aidee safara",
        translation: "entre les mains d'ambassadeurs",
        words: [
          { ar: "بِأَيْدِى" },
          { ar: "سَفَرَةٍۢ" }
        ],
      },
      {
        arabic: "كِرَامٍۭ بَرَرَةٍۢ",
        transliteration: "Kiraamim bararah.",
        translation: "nobles, obéissants.",
        words: [
          { ar: "كِرَامٍۭ" },
          { ar: "بَرَرَةٍۢ" }
        ],
      },
      {
        arabic: "قُتِلَ ٱلْإِنسَٰنُ مَآ أَكْفَرَهُۥ",
        transliteration: "Qutilal-insanu maa akfarah.",
        translation: "Que périsse l'homme! Qu'il est ingrat!",
        words: [
          { ar: "قُتِلَ" },
          { ar: "ٱلْإِنسَٰنُ" },
          { ar: "مَآ" },
          { ar: "أَكْفَرَهُۥ" }
        ],
      },
      {
        arabic: "مِنْ أَىِّ شَىْءٍ خَلَقَهُۥ",
        transliteration: "Min aiyyi shai-in Khalaq",
        translation: "De quoi [Allah] l'a-t-Il créé?",
        words: [
          { ar: "مِنْ" },
          { ar: "أَىِّ" },
          { ar: "شَىْءٍ" },
          { ar: "خَلَقَهُۥ" }
        ],
      },
      {
        arabic: "مِن نُّطْفَةٍ خَلَقَهُۥ فَقَدَّرَهُۥ",
        transliteration: "Min nutfah; khalaqahu faqad-darah.",
        translation: "D'une goutte de sperme, Il le crée et détermine (son destin):",
        words: [
          { ar: "مِن" },
          { ar: "نُّطْفَةٍ" },
          { ar: "خَلَقَهُۥ" },
          { ar: "فَقَدَّرَهُۥ" }
        ],
      },
      {
        arabic: "ثُمَّ ٱلسَّبِيلَ يَسَّرَهُۥ",
        transliteration: "Thummas sabeela yas-sarah",
        translation: "puis Il lui facilite le chemin;",
        words: [
          { ar: "ثُمَّ" },
          { ar: "ٱلسَّبِيلَ" },
          { ar: "يَسَّرَهُۥ" }
        ],
      },
      {
        arabic: "ثُمَّ أَمَاتَهُۥ فَأَقْبَرَهُۥ",
        transliteration: "Thumma amatahu fa-aqbarah",
        translation: "puis Il lui donne la mort et le met au tombeau;",
        words: [
          { ar: "ثُمَّ" },
          { ar: "أَمَاتَهُۥ" },
          { ar: "فَأَقْبَرَهُۥ" }
        ],
      },
      {
        arabic: "ثُمَّ إِذَا شَآءَ أَنشَرَهُۥ",
        transliteration: "Thumma iza shaa-a ansharah",
        translation: "puis Il le ressuscitera quand Il voudra.",
        words: [
          { ar: "ثُمَّ" },
          { ar: "إِذَا" },
          { ar: "شَآءَ" },
          { ar: "أَنشَرَهُۥ" }
        ],
      },
      {
        arabic: "كَلَّا لَمَّا يَقْضِ مَآ أَمَرَهُۥ",
        transliteration: "Kalla lamma yaqdi maa amarah.",
        translation: "Eh bien non! [L'homme] n'accomplit pas ce qu'Il lui commande.",
        words: [
          { ar: "كَلَّا" },
          { ar: "لَمَّا" },
          { ar: "يَقْضِ" },
          { ar: "مَآ" },
          { ar: "أَمَرَهُۥ" }
        ],
      },
      {
        arabic: "فَلْيَنظُرِ ٱلْإِنسَٰنُ إِلَىٰ طَعَامِهِۦٓ",
        transliteration: "Falyanzuril insanu ilaa ta-amih",
        translation: "Que l'homme considère donc sa nourriture:",
        words: [
          { ar: "فَلْيَنظُرِ" },
          { ar: "ٱلْإِنسَٰنُ" },
          { ar: "إِلَىٰ" },
          { ar: "طَعَامِهِۦٓ" }
        ],
      },
      {
        arabic: "أَنَّا صَبَبْنَا ٱلْمَآءَ صَبًّۭا",
        transliteration: "Anna sabab nalmaa-a sabba.",
        translation: "C'est Nous qui versons l'eau abondante,",
        words: [
          { ar: "أَنَّا" },
          { ar: "صَبَبْنَا" },
          { ar: "ٱلْمَآءَ" },
          { ar: "صَبًّۭا" }
        ],
      },
      {
        arabic: "ثُمَّ شَقَقْنَا ٱلْأَرْضَ شَقًّۭا",
        transliteration: "Thumma sha qaqnal-arda shaqqa.",
        translation: "puis Nous fendons la terre par fissures",
        words: [
          { ar: "ثُمَّ" },
          { ar: "شَقَقْنَا" },
          { ar: "ٱلْأَرْضَ" },
          { ar: "شَقًّۭا" }
        ],
      },
      {
        arabic: "فَأَنۢبَتْنَا فِيهَا حَبًّۭا",
        transliteration: "Fa ambatna feeha habba",
        translation: "et y faisons pousser grains,",
        words: [
          { ar: "فَأَنۢبَتْنَا" },
          { ar: "فِيهَا" },
          { ar: "حَبًّۭا" }
        ],
      },
      {
        arabic: "وَعِنَبًۭا وَقَضْبًۭا",
        transliteration: "Wa 'inabaw-wa qadba",
        translation: "vignobles et légumes,",
        words: [
          { ar: "وَعِنَبًۭا" },
          { ar: "وَقَضْبًۭا" }
        ],
      },
      {
        arabic: "وَزَيْتُونًۭا وَنَخْلًۭا",
        transliteration: "Wa zaitoonaw wanakh la'",
        translation: "oliviers et palmiers,",
        words: [
          { ar: "وَزَيْتُونًۭا" },
          { ar: "وَنَخْلًۭا" }
        ],
      },
      {
        arabic: "وَحَدَآئِقَ غُلْبًۭا",
        transliteration: "Wa hadaa-iqa ghulba",
        translation: "jardins touffus,",
        words: [
          { ar: "وَحَدَآئِقَ" },
          { ar: "غُلْبًۭا" }
        ],
      },
      {
        arabic: "وَفَٰكِهَةًۭ وَأَبًّۭا",
        transliteration: "Wa faki hataw-wa abba.",
        translation: "fruits et herbages,",
        words: [
          { ar: "وَفَٰكِهَةًۭ" },
          { ar: "وَأَبًّۭا" }
        ],
      },
      {
        arabic: "مَّتَٰعًۭا لَّكُمْ وَلِأَنْعَٰمِكُمْ",
        transliteration: "Mata'al-lakum wa li-an'amikum.",
        translation: "pour votre jouissance vous et vos bestiaux.",
        words: [
          { ar: "مَّتَٰعًۭا" },
          { ar: "لَّكُمْ" },
          { ar: "وَلِأَنْعَٰمِكُمْ" }
        ],
      },
      {
        arabic: "فَإِذَا جَآءَتِ ٱلصَّآخَّةُ",
        transliteration: "Faiza jaa-atis saakhah.",
        translation: "Puis quand viendra le Fracas,",
        words: [
          { ar: "فَإِذَا" },
          { ar: "جَآءَتِ" },
          { ar: "ٱلصَّآخَّةُ" }
        ],
      },
      {
        arabic: "يَوْمَ يَفِرُّ ٱلْمَرْءُ مِنْ أَخِيهِ",
        transliteration: "Yauma yafir-rul mar-u min akheeh",
        translation: "le jour où l'homme s'enfuira de son frère,",
        words: [
          { ar: "يَوْمَ" },
          { ar: "يَفِرُّ" },
          { ar: "ٱلْمَرْءُ" },
          { ar: "مِنْ" },
          { ar: "أَخِيهِ" }
        ],
      },
      {
        arabic: "وَأُمِّهِۦ وَأَبِيهِ",
        transliteration: "Wa ummihee wa abeeh",
        translation: "de sa mère, de son père,",
        words: [
          { ar: "وَأُمِّهِۦ" },
          { ar: "وَأَبِيهِ" }
        ],
      },
      {
        arabic: "وَصَٰحِبَتِهِۦ وَبَنِيهِ",
        transliteration: "Wa sahi batihee wa baneeh.",
        translation: "de sa compagne et de ses enfants,",
        words: [
          { ar: "وَصَٰحِبَتِهِۦ" },
          { ar: "وَبَنِيهِ" }
        ],
      },
      {
        arabic: "لِكُلِّ ٱمْرِئٍۢ مِّنْهُمْ يَوْمَئِذٍۢ شَأْنٌۭ يُغْنِيهِ",
        transliteration: "Likul limri-im-minuhm yaumaa-izin shaa nuy-yughneeh",
        translation: "car chacun d'eux, ce jour-là, aura son propre cas pour l'occuper.",
        words: [
          { ar: "لِكُلِّ" },
          { ar: "ٱمْرِئٍۢ" },
          { ar: "مِّنْهُمْ" },
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "شَأْنٌۭ" },
          { ar: "يُغْنِيهِ" }
        ],
      },
      {
        arabic: "وُجُوهٌۭ يَوْمَئِذٍۢ مُّسْفِرَةٌۭ",
        transliteration: "Wujoo huny-yauma-izim-musfira;",
        translation: "Ce jour-là, il y aura des visages rayonnants,",
        words: [
          { ar: "وُجُوهٌۭ" },
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "مُّسْفِرَةٌۭ" }
        ],
      },
      {
        arabic: "ضَاحِكَةٌۭ مُّسْتَبْشِرَةٌۭ",
        transliteration: "Dahi katum mustab shirah",
        translation: "riants et réjouis.",
        words: [
          { ar: "ضَاحِكَةٌۭ" },
          { ar: "مُّسْتَبْشِرَةٌۭ" }
        ],
      },
      {
        arabic: "وَوُجُوهٌۭ يَوْمَئِذٍ عَلَيْهَا غَبَرَةٌۭ",
        transliteration: "Wa wujoohuy yauma-izin 'alaiha ghabar a",
        translation: "De même qu'il y aura, ce jour-là, des visages couverts de poussière,",
        words: [
          { ar: "وَوُجُوهٌۭ" },
          { ar: "يَوْمَئِذٍ" },
          { ar: "عَلَيْهَا" },
          { ar: "غَبَرَةٌۭ" }
        ],
      },
      {
        arabic: "تَرْهَقُهَا قَتَرَةٌ",
        transliteration: "Tarhaquha qatarah.",
        translation: "recouverts de ténèbres.",
        words: [
          { ar: "تَرْهَقُهَا" },
          { ar: "قَتَرَةٌ" }
        ],
      },
      {
        arabic: "أُو۟لَٰٓئِكَ هُمُ ٱلْكَفَرَةُ ٱلْفَجَرَةُ",
        transliteration: "Ulaa-ika humul-kafa ratul-fajarah.",
        translation: "Voilà les infidèles, les libertins.",
        words: [
          { ar: "أُو۟لَٰٓئِكَ" },
          { ar: "هُمُ" },
          { ar: "ٱلْكَفَرَةُ" },
          { ar: "ٱلْفَجَرَةُ" }
        ],
      }
    ],
  },
  {
    id: 20,
    number: 81,
    name: "At-Takwir",
    nameArabic: "التَّكۡوِيرِ",
    meaning: "L'Obscurcissement",
    verses: 29,
    icon: "🌑",
    longForm: true,
    ayahs: [
      {
        arabic: "إِذَا ٱلشَّمْسُ كُوِّرَتْ",
        transliteration: "Izash shamsu kuwwirat",
        translation: "Quand le soleil sera obscurci,",
        words: [
          { ar: "إِذَا" },
          { ar: "ٱلشَّمْسُ" },
          { ar: "كُوِّرَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلنُّجُومُ ٱنكَدَرَتْ",
        transliteration: "Wa izan nujoomun kadarat",
        translation: "et que les étoiles deviendront ternes,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلنُّجُومُ" },
          { ar: "ٱنكَدَرَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْجِبَالُ سُيِّرَتْ",
        transliteration: "Wa izal jibaalu suyyirat",
        translation: "et les montagnes mises en marche,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْجِبَالُ" },
          { ar: "سُيِّرَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْعِشَارُ عُطِّلَتْ",
        transliteration: "Wa izal 'ishaaru 'uttilat",
        translation: "et les chamelles à terme, négligées,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْعِشَارُ" },
          { ar: "عُطِّلَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْوُحُوشُ حُشِرَتْ",
        transliteration: "Wa izal wuhooshu hushirat",
        translation: "et les bêtes farouches, rassemblées,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْوُحُوشُ" },
          { ar: "حُشِرَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْبِحَارُ سُجِّرَتْ",
        transliteration: "Wa izal bihaaru sujjirat",
        translation: "et les mers allumées,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْبِحَارُ" },
          { ar: "سُجِّرَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلنُّفُوسُ زُوِّجَتْ",
        transliteration: "Wa izan nufoosu zuwwijat",
        translation: "et les âmes accouplées",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلنُّفُوسُ" },
          { ar: "زُوِّجَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْمَوْءُۥدَةُ سُئِلَتْ",
        transliteration: "Wa izal maw'oodatu su'ilat",
        translation: "et qu'on demandera à la fillette enterrée vivante",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْمَوْءُۥدَةُ" },
          { ar: "سُئِلَتْ" }
        ],
      },
      {
        arabic: "بِأَىِّ ذَنۢبٍۢ قُتِلَتْ",
        transliteration: "Bi ayyi zambin qutilat",
        translation: "pour quel péché elle a été tuée.",
        words: [
          { ar: "بِأَىِّ" },
          { ar: "ذَنۢبٍۢ" },
          { ar: "قُتِلَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلصُّحُفُ نُشِرَتْ",
        transliteration: "Wa izas suhufu nushirat",
        translation: "Et quand les feuilles seront déployées,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلصُّحُفُ" },
          { ar: "نُشِرَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلسَّمَآءُ كُشِطَتْ",
        transliteration: "Wa izas samaaa'u kushitat",
        translation: "et le ciel écorché",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلسَّمَآءُ" },
          { ar: "كُشِطَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْجَحِيمُ سُعِّرَتْ",
        transliteration: "Wa izal jaheemu su'-'irat",
        translation: "et la fournaise attisée,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْجَحِيمُ" },
          { ar: "سُعِّرَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْجَنَّةُ أُزْلِفَتْ",
        transliteration: "Wa izal jannatu uzlifat",
        translation: "et le Paradis rapproché,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْجَنَّةُ" },
          { ar: "أُزْلِفَتْ" }
        ],
      },
      {
        arabic: "عَلِمَتْ نَفْسٌۭ مَّآ أَحْضَرَتْ",
        transliteration: "'Alimat nafsum maaa ahdarat",
        translation: "chaque âme saura ce qu'elle a présenté.",
        words: [
          { ar: "عَلِمَتْ" },
          { ar: "نَفْسٌۭ" },
          { ar: "مَّآ" },
          { ar: "أَحْضَرَتْ" }
        ],
      },
      {
        arabic: "فَلَآ أُقْسِمُ بِٱلْخُنَّسِ",
        transliteration: "Falaaa uqsimu bil khunnas",
        translation: "Non!... Je jure par les planètes qui gravitent",
        words: [
          { ar: "فَلَآ" },
          { ar: "أُقْسِمُ" },
          { ar: "بِٱلْخُنَّسِ" }
        ],
      },
      {
        arabic: "ٱلْجَوَارِ ٱلْكُنَّسِ",
        transliteration: "Al jawaaril kunnas",
        translation: "qui courent et disparaissent",
        words: [
          { ar: "ٱلْجَوَارِ" },
          { ar: "ٱلْكُنَّسِ" }
        ],
      },
      {
        arabic: "وَٱلَّيْلِ إِذَا عَسْعَسَ",
        transliteration: "Wallaili izaa 'as'as",
        translation: "par la nuit quand elle survient!",
        words: [
          { ar: "وَٱلَّيْلِ" },
          { ar: "إِذَا" },
          { ar: "عَسْعَسَ" }
        ],
      },
      {
        arabic: "وَٱلصُّبْحِ إِذَا تَنَفَّسَ",
        transliteration: "Wassubhi izaa tanaffas",
        translation: "et par l'aube quand elle exhale son souffle!",
        words: [
          { ar: "وَٱلصُّبْحِ" },
          { ar: "إِذَا" },
          { ar: "تَنَفَّسَ" }
        ],
      },
      {
        arabic: "إِنَّهُۥ لَقَوْلُ رَسُولٍۢ كَرِيمٍۢ",
        transliteration: "Innahoo laqawlu rasoolin kareem",
        translation: "Ceci [le Coran] est la parole d'un noble Messager,",
        words: [
          { ar: "إِنَّهُۥ" },
          { ar: "لَقَوْلُ" },
          { ar: "رَسُولٍۢ" },
          { ar: "كَرِيمٍۢ" }
        ],
      },
      {
        arabic: "ذِى قُوَّةٍ عِندَ ذِى ٱلْعَرْشِ مَكِينٍۢ",
        transliteration: "Zee quwwatin 'inda zil 'arshi makeen",
        translation: "doué d'une grande force, et ayant un rang élevé auprès du Maître du Trône,",
        words: [
          { ar: "ذِى" },
          { ar: "قُوَّةٍ" },
          { ar: "عِندَ" },
          { ar: "ذِى" },
          { ar: "ٱلْعَرْشِ" },
          { ar: "مَكِينٍۢ" }
        ],
      },
      {
        arabic: "مُّطَاعٍۢ ثَمَّ أَمِينٍۢ",
        transliteration: "Mutaa'in samma ameen",
        translation: "obéi, là-haut, et digne de confiance.",
        words: [
          { ar: "مُّطَاعٍۢ" },
          { ar: "ثَمَّ" },
          { ar: "أَمِينٍۢ" }
        ],
      },
      {
        arabic: "وَمَا صَاحِبُكُم بِمَجْنُونٍۢ",
        transliteration: "Wa maa saahibukum bimajnoon",
        translation: "Votre compagnon (Muhammad) n'est nullement fou;",
        words: [
          { ar: "وَمَا" },
          { ar: "صَاحِبُكُم" },
          { ar: "بِمَجْنُونٍۢ" }
        ],
      },
      {
        arabic: "وَلَقَدْ رَءَاهُ بِٱلْأُفُقِ ٱلْمُبِينِ",
        transliteration: "Wa laqad ra aahu bilufuqil mubeen",
        translation: "il l'a effectivement vu (Gabriel), au clair horizon",
        words: [
          { ar: "وَلَقَدْ" },
          { ar: "رَءَاهُ" },
          { ar: "بِٱلْأُفُقِ" },
          { ar: "ٱلْمُبِينِ" }
        ],
      },
      {
        arabic: "وَمَا هُوَ عَلَى ٱلْغَيْبِ بِضَنِينٍۢ",
        transliteration: "Wa maa huwa 'alal ghaibi bidaneen",
        translation: "et il ne garde pas avarement pour lui-même ce qui lui a été révélé.",
        words: [
          { ar: "وَمَا" },
          { ar: "هُوَ" },
          { ar: "عَلَى" },
          { ar: "ٱلْغَيْبِ" },
          { ar: "بِضَنِينٍۢ" }
        ],
      },
      {
        arabic: "وَمَا هُوَ بِقَوْلِ شَيْطَٰنٍۢ رَّجِيمٍۢ",
        transliteration: "Wa maa huwa biqawli shaitaanir rajeem",
        translation: "Et ceci [le Coran] n'est point la parole d'un diable banni.",
        words: [
          { ar: "وَمَا" },
          { ar: "هُوَ" },
          { ar: "بِقَوْلِ" },
          { ar: "شَيْطَٰنٍۢ" },
          { ar: "رَّجِيمٍۢ" }
        ],
      },
      {
        arabic: "فَأَيْنَ تَذْهَبُونَ",
        transliteration: "Fa ayna tazhaboon",
        translation: "Où allez-vous donc?",
        words: [
          { ar: "فَأَيْنَ" },
          { ar: "تَذْهَبُونَ" }
        ],
      },
      {
        arabic: "إِنْ هُوَ إِلَّا ذِكْرٌۭ لِّلْعَٰلَمِينَ",
        transliteration: "In huwa illaa zikrul lil'aalameen",
        translation: "Ceci n'est qu'un rappel pour l'univers,",
        words: [
          { ar: "إِنْ" },
          { ar: "هُوَ" },
          { ar: "إِلَّا" },
          { ar: "ذِكْرٌۭ" },
          { ar: "لِّلْعَٰلَمِينَ" }
        ],
      },
      {
        arabic: "لِمَن شَآءَ مِنكُمْ أَن يَسْتَقِيمَ",
        transliteration: "Liman shaaa'a minkum ai yastaqeem",
        translation: "pour celui d'entre vous qui veut suivre le chemin droit.",
        words: [
          { ar: "لِمَن" },
          { ar: "شَآءَ" },
          { ar: "مِنكُمْ" },
          { ar: "أَن" },
          { ar: "يَسْتَقِيمَ" }
        ],
      },
      {
        arabic: "وَمَا تَشَآءُونَ إِلَّآ أَن يَشَآءَ ٱللَّهُ رَبُّ ٱلْعَٰلَمِينَ",
        transliteration: "Wa maa tashaaa'oona illaaa ai yashaaa 'al laahu Rabbul 'Aalameen",
        translation: "Mais vous ne pouvez vouloir, que si Allah veut, [Lui], le Seigneur de l'Univers ;",
        words: [
          { ar: "وَمَا" },
          { ar: "تَشَآءُونَ" },
          { ar: "إِلَّآ" },
          { ar: "أَن" },
          { ar: "يَشَآءَ" },
          { ar: "ٱللَّهُ" },
          { ar: "رَبُّ" },
          { ar: "ٱلْعَٰلَمِينَ" }
        ],
      }
    ],
  },
  {
    id: 21,
    number: 82,
    name: "Al-Infitaar",
    nameArabic: "الانفِطَارِ",
    meaning: "La Rupture",
    verses: 19,
    icon: "🌌",
    longForm: true,
    ayahs: [
      {
        arabic: "إِذَا ٱلسَّمَآءُ ٱنفَطَرَتْ",
        transliteration: "Izas samaaa'un fatarat",
        translation: "Quand le ciel se rompra,",
        words: [
          { ar: "إِذَا" },
          { ar: "ٱلسَّمَآءُ" },
          { ar: "ٱنفَطَرَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْكَوَاكِبُ ٱنتَثَرَتْ",
        transliteration: "Wa izal kawaakibun tasarat",
        translation: "et que les étoiles se disperseront,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْكَوَاكِبُ" },
          { ar: "ٱنتَثَرَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْبِحَارُ فُجِّرَتْ",
        transliteration: "Wa izal bihaaru fujjirat",
        translation: "et que les mers confondront leurs eaux,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْبِحَارُ" },
          { ar: "فُجِّرَتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْقُبُورُ بُعْثِرَتْ",
        transliteration: "Wa izal qubooru bu'sirat",
        translation: "et que les tombeaux seront bouleversés,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْقُبُورُ" },
          { ar: "بُعْثِرَتْ" }
        ],
      },
      {
        arabic: "عَلِمَتْ نَفْسٌۭ مَّا قَدَّمَتْ وَأَخَّرَتْ",
        transliteration: "'Alimat nafsum maa qaddamat wa akhkharat",
        translation: "toute âme saura alors ce qu'elle a accompli et ce qu'elle a remis de faire à plus tard.",
        words: [
          { ar: "عَلِمَتْ" },
          { ar: "نَفْسٌۭ" },
          { ar: "مَّا" },
          { ar: "قَدَّمَتْ" },
          { ar: "وَأَخَّرَتْ" }
        ],
      },
      {
        arabic: "يَٰٓأَيُّهَا ٱلْإِنسَٰنُ مَا غَرَّكَ بِرَبِّكَ ٱلْكَرِيمِ",
        transliteration: "Yaaa ayyuhal insaaanu maa gharraka bi Rabbikal kareem",
        translation: "O homme! Qu'est-ce qui t'a trompé au sujet de ton Seigneur, le Noble,",
        words: [
          { ar: "يَٰٓأَيُّهَا" },
          { ar: "ٱلْإِنسَٰنُ" },
          { ar: "مَا" },
          { ar: "غَرَّكَ" },
          { ar: "بِرَبِّكَ" },
          { ar: "ٱلْكَرِيمِ" }
        ],
      },
      {
        arabic: "ٱلَّذِى خَلَقَكَ فَسَوَّىٰكَ فَعَدَلَكَ",
        transliteration: "Allazee khalaqaka fasaw waaka fa'adalak",
        translation: "qui t'a créé, puis modelé et constitué harmonieusement?",
        words: [
          { ar: "ٱلَّذِى" },
          { ar: "خَلَقَكَ" },
          { ar: "فَسَوَّىٰكَ" },
          { ar: "فَعَدَلَكَ" }
        ],
      },
      {
        arabic: "فِىٓ أَىِّ صُورَةٍۢ مَّا شَآءَ رَكَّبَكَ",
        transliteration: "Feee ayye sooratim maa shaaa'a rakkabak",
        translation: "Il t'a façonné dans la forme qu'Il a voulue.",
        words: [
          { ar: "فِىٓ" },
          { ar: "أَىِّ" },
          { ar: "صُورَةٍۢ" },
          { ar: "مَّا" },
          { ar: "شَآءَ" },
          { ar: "رَكَّبَكَ" }
        ],
      },
      {
        arabic: "كَلَّا بَلْ تُكَذِّبُونَ بِٱلدِّينِ",
        transliteration: "Kalla bal tukazziboona bid deen",
        translation: "Non...! [malgré tout] vous traitez la Rétribution de mensonge;",
        words: [
          { ar: "كَلَّا" },
          { ar: "بَلْ" },
          { ar: "تُكَذِّبُونَ" },
          { ar: "بِٱلدِّينِ" }
        ],
      },
      {
        arabic: "وَإِنَّ عَلَيْكُمْ لَحَٰفِظِينَ",
        transliteration: "Wa inna 'alaikum lahaa fizeen",
        translation: "alors que veillent sur vous des gardiens,",
        words: [
          { ar: "وَإِنَّ" },
          { ar: "عَلَيْكُمْ" },
          { ar: "لَحَٰفِظِينَ" }
        ],
      },
      {
        arabic: "كِرَامًۭا كَٰتِبِينَ",
        transliteration: "Kiraaman kaatibeen",
        translation: "de nobles scribes,",
        words: [
          { ar: "كِرَامًۭا" },
          { ar: "كَٰتِبِينَ" }
        ],
      },
      {
        arabic: "يَعْلَمُونَ مَا تَفْعَلُونَ",
        transliteration: "Ya'lamoona ma taf'aloon",
        translation: "qui savent ce que vous faites.",
        words: [
          { ar: "يَعْلَمُونَ" },
          { ar: "مَا" },
          { ar: "تَفْعَلُونَ" }
        ],
      },
      {
        arabic: "إِنَّ ٱلْأَبْرَارَ لَفِى نَعِيمٍۢ",
        transliteration: "Innal abraara lafee na'eem",
        translation: "Les bons seront, certes, dans un [jardin] de délice,",
        words: [
          { ar: "إِنَّ" },
          { ar: "ٱلْأَبْرَارَ" },
          { ar: "لَفِى" },
          { ar: "نَعِيمٍۢ" }
        ],
      },
      {
        arabic: "وَإِنَّ ٱلْفُجَّارَ لَفِى جَحِيمٍۢ",
        transliteration: "Wa innal fujjaara lafee jaheem",
        translation: "et les libertins seront, certes, dans une fournaise",
        words: [
          { ar: "وَإِنَّ" },
          { ar: "ٱلْفُجَّارَ" },
          { ar: "لَفِى" },
          { ar: "جَحِيمٍۢ" }
        ],
      },
      {
        arabic: "يَصْلَوْنَهَا يَوْمَ ٱلدِّينِ",
        transliteration: "Yaslawnahaa Yawmad Deen",
        translation: "où ils brûleront, le jour de la Rétribution",
        words: [
          { ar: "يَصْلَوْنَهَا" },
          { ar: "يَوْمَ" },
          { ar: "ٱلدِّينِ" }
        ],
      },
      {
        arabic: "وَمَا هُمْ عَنْهَا بِغَآئِبِينَ",
        transliteration: "Wa maa hum 'anhaa bighaaa 'ibeen",
        translation: "incapables de s'en échapper.",
        words: [
          { ar: "وَمَا" },
          { ar: "هُمْ" },
          { ar: "عَنْهَا" },
          { ar: "بِغَآئِبِينَ" }
        ],
      },
      {
        arabic: "وَمَآ أَدْرَىٰكَ مَا يَوْمُ ٱلدِّينِ",
        transliteration: "Wa maaa adraaka maa Yawmud Deen",
        translation: "Et qui te dira ce qu'est le jour de la Rétribution?",
        words: [
          { ar: "وَمَآ" },
          { ar: "أَدْرَىٰكَ" },
          { ar: "مَا" },
          { ar: "يَوْمُ" },
          { ar: "ٱلدِّينِ" }
        ],
      },
      {
        arabic: "ثُمَّ مَآ أَدْرَىٰكَ مَا يَوْمُ ٱلدِّينِ",
        transliteration: "Summa maaa adraaka maa Yawmud Deen",
        translation: "Encore une fois, qui te dira ce qu'est le jour de la Rétribution?",
        words: [
          { ar: "ثُمَّ" },
          { ar: "مَآ" },
          { ar: "أَدْرَىٰكَ" },
          { ar: "مَا" },
          { ar: "يَوْمُ" },
          { ar: "ٱلدِّينِ" }
        ],
      },
      {
        arabic: "يَوْمَ لَا تَمْلِكُ نَفْسٌۭ لِّنَفْسٍۢ شَيْـًۭٔا ۖ وَٱلْأَمْرُ يَوْمَئِذٍۢ لِّلَّهِ",
        transliteration: "Yawma laa tamliku nafsul linafsin shai'anw walamru yawma'izil lillaah",
        translation: "Le jour où aucune âme ne pourra rien en faveur d'une autre âme. Et ce jour-là, le commandement sera à Allah.",
        words: [
          { ar: "يَوْمَ" },
          { ar: "لَا" },
          { ar: "تَمْلِكُ" },
          { ar: "نَفْسٌۭ" },
          { ar: "لِّنَفْسٍۢ" },
          { ar: "شَيْـًۭٔا" },
          { ar: "ۖ" },
          { ar: "وَٱلْأَمْرُ" },
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "لِّلَّهِ" }
        ],
      }
    ],
  },
  {
    id: 22,
    number: 83,
    name: "Al-Mutaffifin",
    nameArabic: "المُطَفِّفِينَ",
    meaning: "Les Fraudeurs",
    verses: 36,
    icon: "⚖️",
    longForm: true,
    ayahs: [
      {
        arabic: "وَيْلٌۭ لِّلْمُطَفِّفِينَ",
        transliteration: "Wailul lil mutaffifeen",
        translation: "Malheur aux fraudeurs",
        words: [
          { ar: "وَيْلٌۭ" },
          { ar: "لِّلْمُطَفِّفِينَ" }
        ],
      },
      {
        arabic: "ٱلَّذِينَ إِذَا ٱكْتَالُوا۟ عَلَى ٱلنَّاسِ يَسْتَوْفُونَ",
        transliteration: "Allazeena izak taaloo 'alan naasi yastawfoon",
        translation: "qui, lorsqu'ils font mesurer pour eux-mêmes exigent la pleine mesure,",
        words: [
          { ar: "ٱلَّذِينَ" },
          { ar: "إِذَا" },
          { ar: "ٱكْتَالُوا۟" },
          { ar: "عَلَى" },
          { ar: "ٱلنَّاسِ" },
          { ar: "يَسْتَوْفُونَ" }
        ],
      },
      {
        arabic: "وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ",
        transliteration: "Wa izaa kaaloohum aw wazanoohum yukhsiroon",
        translation: "et qui lorsqu'eux-mêmes mesurent ou pèsent pour les autres, [leur] causent perte.",
        words: [
          { ar: "وَإِذَا" },
          { ar: "كَالُوهُمْ" },
          { ar: "أَو" },
          { ar: "وَّزَنُوهُمْ" },
          { ar: "يُخْسِرُونَ" }
        ],
      },
      {
        arabic: "أَلَا يَظُنُّ أُو۟لَٰٓئِكَ أَنَّهُم مَّبْعُوثُونَ",
        transliteration: "Alaa yazunnu ulaaa'ika annahum mab'oosoon",
        translation: "Ceux-là ne pensent-ils pas qu'ils seront ressuscités,",
        words: [
          { ar: "أَلَا" },
          { ar: "يَظُنُّ" },
          { ar: "أُو۟لَٰٓئِكَ" },
          { ar: "أَنَّهُم" },
          { ar: "مَّبْعُوثُونَ" }
        ],
      },
      {
        arabic: "لِيَوْمٍ عَظِيمٍۢ",
        transliteration: "Li Yawmin 'Azeem",
        translation: "en un jour terrible,",
        words: [
          { ar: "لِيَوْمٍ" },
          { ar: "عَظِيمٍۢ" }
        ],
      },
      {
        arabic: "يَوْمَ يَقُومُ ٱلنَّاسُ لِرَبِّ ٱلْعَٰلَمِينَ",
        transliteration: "Yawma yaqoomun naasu li Rabbil 'aalameen",
        translation: "le jour où les gens se tiendront debout devant le Seigneur de l'Univers?",
        words: [
          { ar: "يَوْمَ" },
          { ar: "يَقُومُ" },
          { ar: "ٱلنَّاسُ" },
          { ar: "لِرَبِّ" },
          { ar: "ٱلْعَٰلَمِينَ" }
        ],
      },
      {
        arabic: "كَلَّآ إِنَّ كِتَٰبَ ٱلْفُجَّارِ لَفِى سِجِّينٍۢ",
        transliteration: "Kallaaa inna kitaabal fujjaari lafee Sijjeen",
        translation: "Non...! Mais en vérité le livre des libertins sera dans le Sijjîn -",
        words: [
          { ar: "كَلَّآ" },
          { ar: "إِنَّ" },
          { ar: "كِتَٰبَ" },
          { ar: "ٱلْفُجَّارِ" },
          { ar: "لَفِى" },
          { ar: "سِجِّينٍۢ" }
        ],
      },
      {
        arabic: "وَمَآ أَدْرَىٰكَ مَا سِجِّينٌۭ",
        transliteration: "Wa maa adraaka maa Sijjeen",
        translation: "et qui te dira ce qu'est le Sijjîn? -",
        words: [
          { ar: "وَمَآ" },
          { ar: "أَدْرَىٰكَ" },
          { ar: "مَا" },
          { ar: "سِجِّينٌۭ" }
        ],
      },
      {
        arabic: "كِتَٰبٌۭ مَّرْقُومٌۭ",
        transliteration: "Kitaabum marqoom",
        translation: "Un livre déjà cacheté (achevé).",
        words: [
          { ar: "كِتَٰبٌۭ" },
          { ar: "مَّرْقُومٌۭ" }
        ],
      },
      {
        arabic: "وَيْلٌۭ يَوْمَئِذٍۢ لِّلْمُكَذِّبِينَ",
        transliteration: "Wailuny yawma'izil lil mukazzibeen",
        translation: "Malheur, ce jour-là, aux négateurs,",
        words: [
          { ar: "وَيْلٌۭ" },
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "لِّلْمُكَذِّبِينَ" }
        ],
      },
      {
        arabic: "ٱلَّذِينَ يُكَذِّبُونَ بِيَوْمِ ٱلدِّينِ",
        transliteration: "Allazeena yukazziboona bi yawmid deen",
        translation: "qui démentent le jour de la Rétribution.",
        words: [
          { ar: "ٱلَّذِينَ" },
          { ar: "يُكَذِّبُونَ" },
          { ar: "بِيَوْمِ" },
          { ar: "ٱلدِّينِ" }
        ],
      },
      {
        arabic: "وَمَا يُكَذِّبُ بِهِۦٓ إِلَّا كُلُّ مُعْتَدٍ أَثِيمٍ",
        transliteration: "Wa maa yukazzibu biheee illaa kullu mu'tadin aseem",
        translation: "Or, ne le dément que tout transgresseur, pécheur:",
        words: [
          { ar: "وَمَا" },
          { ar: "يُكَذِّبُ" },
          { ar: "بِهِۦٓ" },
          { ar: "إِلَّا" },
          { ar: "كُلُّ" },
          { ar: "مُعْتَدٍ" },
          { ar: "أَثِيمٍ" }
        ],
      },
      {
        arabic: "إِذَا تُتْلَىٰ عَلَيْهِ ءَايَٰتُنَا قَالَ أَسَٰطِيرُ ٱلْأَوَّلِينَ",
        transliteration: "Izaa tutlaa'alaihi aayaatunaa qaala asaateerul awwaleen",
        translation: "qui, lorsque Nos versets lui sont récités, dit: «[Ce sont] des contes d'anciens!»",
        words: [
          { ar: "إِذَا" },
          { ar: "تُتْلَىٰ" },
          { ar: "عَلَيْهِ" },
          { ar: "ءَايَٰتُنَا" },
          { ar: "قَالَ" },
          { ar: "أَسَٰطِيرُ" },
          { ar: "ٱلْأَوَّلِينَ" }
        ],
      },
      {
        arabic: "كَلَّا ۖ بَلْ ۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُوا۟ يَكْسِبُونَ",
        transliteration: "Kallaa bal raana 'alaa quloobihim maa kaanoo yaksiboon",
        translation: "Pas du tout, mais ce qu'ils ont accompli couvre leurs cœurs.",
        words: [
          { ar: "كَلَّا" },
          { ar: "ۖ" },
          { ar: "بَلْ" },
          { ar: "ۜ" },
          { ar: "رَانَ" },
          { ar: "عَلَىٰ" },
          { ar: "قُلُوبِهِم" },
          { ar: "مَّا" },
          { ar: "كَانُوا۟" },
          { ar: "يَكْسِبُونَ" }
        ],
      },
      {
        arabic: "كَلَّآ إِنَّهُمْ عَن رَّبِّهِمْ يَوْمَئِذٍۢ لَّمَحْجُوبُونَ",
        transliteration: "Kallaaa innahum 'ar Rabbihim yawma'izil lamah jooboon",
        translation: "Qu'ils prennent garde! En vérité ce jour-là un voile les empêchera de voir leur Seigneur,",
        words: [
          { ar: "كَلَّآ" },
          { ar: "إِنَّهُمْ" },
          { ar: "عَن" },
          { ar: "رَّبِّهِمْ" },
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "لَّمَحْجُوبُونَ" }
        ],
      },
      {
        arabic: "ثُمَّ إِنَّهُمْ لَصَالُوا۟ ٱلْجَحِيمِ",
        transliteration: "Summa innahum lasaa lul jaheem",
        translation: "ensuite, ils brûleront certes, dans la Fournaise;",
        words: [
          { ar: "ثُمَّ" },
          { ar: "إِنَّهُمْ" },
          { ar: "لَصَالُوا۟" },
          { ar: "ٱلْجَحِيمِ" }
        ],
      },
      {
        arabic: "ثُمَّ يُقَالُ هَٰذَا ٱلَّذِى كُنتُم بِهِۦ تُكَذِّبُونَ",
        transliteration: "Summa yuqaalu haazal lazee kuntum bihee tukazziboon",
        translation: "on [leur] dira alors: «Voilà ce que vous traitiez de mensonge!»",
        words: [
          { ar: "ثُمَّ" },
          { ar: "يُقَالُ" },
          { ar: "هَٰذَا" },
          { ar: "ٱلَّذِى" },
          { ar: "كُنتُم" },
          { ar: "بِهِۦ" },
          { ar: "تُكَذِّبُونَ" }
        ],
      },
      {
        arabic: "كَلَّآ إِنَّ كِتَٰبَ ٱلْأَبْرَارِ لَفِى عِلِّيِّينَ",
        transliteration: "Kallaaa inna kitaabal abraari lafee'Illiyyeen",
        translation: "Qu'ils prennent garde! Le livre des bons sera dans l'Illiyûn -",
        words: [
          { ar: "كَلَّآ" },
          { ar: "إِنَّ" },
          { ar: "كِتَٰبَ" },
          { ar: "ٱلْأَبْرَارِ" },
          { ar: "لَفِى" },
          { ar: "عِلِّيِّينَ" }
        ],
      },
      {
        arabic: "وَمَآ أَدْرَىٰكَ مَا عِلِّيُّونَ",
        transliteration: "Wa maaa adraaka maa 'Illiyyoon",
        translation: "et qui te dira ce qu'est l'Illiyûn? -",
        words: [
          { ar: "وَمَآ" },
          { ar: "أَدْرَىٰكَ" },
          { ar: "مَا" },
          { ar: "عِلِّيُّونَ" }
        ],
      },
      {
        arabic: "كِتَٰبٌۭ مَّرْقُومٌۭ",
        transliteration: "Kitaabum marqoom",
        translation: "un livre cacheté!",
        words: [
          { ar: "كِتَٰبٌۭ" },
          { ar: "مَّرْقُومٌۭ" }
        ],
      },
      {
        arabic: "يَشْهَدُهُ ٱلْمُقَرَّبُونَ",
        transliteration: "Yashhadu hul muqarra boon",
        translation: "Les rapprochés [d'Allah: les Anges] en témoignent.",
        words: [
          { ar: "يَشْهَدُهُ" },
          { ar: "ٱلْمُقَرَّبُونَ" }
        ],
      },
      {
        arabic: "إِنَّ ٱلْأَبْرَارَ لَفِى نَعِيمٍ",
        transliteration: "Innal abraara lafee Na'eem",
        translation: "Les bons seront dans [un Jardin] de délice,",
        words: [
          { ar: "إِنَّ" },
          { ar: "ٱلْأَبْرَارَ" },
          { ar: "لَفِى" },
          { ar: "نَعِيمٍ" }
        ],
      },
      {
        arabic: "عَلَى ٱلْأَرَآئِكِ يَنظُرُونَ",
        transliteration: "'Alal araaa'iki yanzuroon",
        translation: "sur les divans, ils regardent.",
        words: [
          { ar: "عَلَى" },
          { ar: "ٱلْأَرَآئِكِ" },
          { ar: "يَنظُرُونَ" }
        ],
      },
      {
        arabic: "تَعْرِفُ فِى وُجُوهِهِمْ نَضْرَةَ ٱلنَّعِيمِ",
        transliteration: "Ta'rifu fee wujoohihim nadratan na'eem",
        translation: "Tu reconnaîtras sur leurs visages, l'éclat de la félicité.",
        words: [
          { ar: "تَعْرِفُ" },
          { ar: "فِى" },
          { ar: "وُجُوهِهِمْ" },
          { ar: "نَضْرَةَ" },
          { ar: "ٱلنَّعِيمِ" }
        ],
      },
      {
        arabic: "يُسْقَوْنَ مِن رَّحِيقٍۢ مَّخْتُومٍ",
        transliteration: "Yusqawna mir raheeqim makhtoom",
        translation: "On leur sert à boire un nectar pur, cacheté,",
        words: [
          { ar: "يُسْقَوْنَ" },
          { ar: "مِن" },
          { ar: "رَّحِيقٍۢ" },
          { ar: "مَّخْتُومٍ" }
        ],
      },
      {
        arabic: "خِتَٰمُهُۥ مِسْكٌۭ ۚ وَفِى ذَٰلِكَ فَلْيَتَنَافَسِ ٱلْمُتَنَٰفِسُونَ",
        transliteration: "Khitaamuhoo misk; wa fee zaalika falyatanaafasil Mutanaafisoon",
        translation: "laissant un arrière-goût de musc. Que ceux qui la convoitent entrent en compétition [pour l'acquérir]",
        words: [
          { ar: "خِتَٰمُهُۥ" },
          { ar: "مِسْكٌۭ" },
          { ar: "ۚ" },
          { ar: "وَفِى" },
          { ar: "ذَٰلِكَ" },
          { ar: "فَلْيَتَنَافَسِ" },
          { ar: "ٱلْمُتَنَٰفِسُونَ" }
        ],
      },
      {
        arabic: "وَمِزَاجُهُۥ مِن تَسْنِيمٍ",
        transliteration: "Wa mizaajuhoo min Tasneem",
        translation: "Il est mélangé à la boisson de Tasnîm,",
        words: [
          { ar: "وَمِزَاجُهُۥ" },
          { ar: "مِن" },
          { ar: "تَسْنِيمٍ" }
        ],
      },
      {
        arabic: "عَيْنًۭا يَشْرَبُ بِهَا ٱلْمُقَرَّبُونَ",
        transliteration: "'Ainaiy yashrabu bihal muqarraboon",
        translation: "source dont les rapprochés boivent.",
        words: [
          { ar: "عَيْنًۭا" },
          { ar: "يَشْرَبُ" },
          { ar: "بِهَا" },
          { ar: "ٱلْمُقَرَّبُونَ" }
        ],
      },
      {
        arabic: "إِنَّ ٱلَّذِينَ أَجْرَمُوا۟ كَانُوا۟ مِنَ ٱلَّذِينَ ءَامَنُوا۟ يَضْحَكُونَ",
        transliteration: "Innal lazeena ajramoo kaanoo minal lazeena aamanoo yadhakoon",
        translation: "Les criminels riaient de ceux qui croyaient,",
        words: [
          { ar: "إِنَّ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "أَجْرَمُوا۟" },
          { ar: "كَانُوا۟" },
          { ar: "مِنَ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "ءَامَنُوا۟" },
          { ar: "يَضْحَكُونَ" }
        ],
      },
      {
        arabic: "وَإِذَا مَرُّوا۟ بِهِمْ يَتَغَامَزُونَ",
        transliteration: "Wa izaa marroo bihim yataghaamazoon",
        translation: "et, passant près d'eux, ils se faisaient des œillades,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "مَرُّوا۟" },
          { ar: "بِهِمْ" },
          { ar: "يَتَغَامَزُونَ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱنقَلَبُوٓا۟ إِلَىٰٓ أَهْلِهِمُ ٱنقَلَبُوا۟ فَكِهِينَ",
        transliteration: "Wa izan qalabooo ilaaa ahlihimun qalaboo fakiheen",
        translation: "et, retournant dans leurs familles, ils retournaient en plaisantant,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱنقَلَبُوٓا۟" },
          { ar: "إِلَىٰٓ" },
          { ar: "أَهْلِهِمُ" },
          { ar: "ٱنقَلَبُوا۟" },
          { ar: "فَكِهِينَ" }
        ],
      },
      {
        arabic: "وَإِذَا رَأَوْهُمْ قَالُوٓا۟ إِنَّ هَٰٓؤُلَآءِ لَضَآلُّونَ",
        transliteration: "Wa izaa ra awhum qaalooo inna haaa'ulaaa'i ladaaal loon",
        translation: "et les voyant, ils disaient: «Ce sont vraiment ceux-là les égarés».",
        words: [
          { ar: "وَإِذَا" },
          { ar: "رَأَوْهُمْ" },
          { ar: "قَالُوٓا۟" },
          { ar: "إِنَّ" },
          { ar: "هَٰٓؤُلَآءِ" },
          { ar: "لَضَآلُّونَ" }
        ],
      },
      {
        arabic: "وَمَآ أُرْسِلُوا۟ عَلَيْهِمْ حَٰفِظِينَ",
        transliteration: "Wa maaa ursiloo 'alaihim haafizeen",
        translation: "Or, ils n'ont pas été envoyés pour être leurs gardiens.",
        words: [
          { ar: "وَمَآ" },
          { ar: "أُرْسِلُوا۟" },
          { ar: "عَلَيْهِمْ" },
          { ar: "حَٰفِظِينَ" }
        ],
      },
      {
        arabic: "فَٱلْيَوْمَ ٱلَّذِينَ ءَامَنُوا۟ مِنَ ٱلْكُفَّارِ يَضْحَكُونَ",
        transliteration: "Fal yawmal lazeena aamanoo minal kuffaari yadhakoon",
        translation: "Aujourd'hui, donc, ce sont ceux qui ont cru qui rient des infidèles",
        words: [
          { ar: "فَٱلْيَوْمَ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "ءَامَنُوا۟" },
          { ar: "مِنَ" },
          { ar: "ٱلْكُفَّارِ" },
          { ar: "يَضْحَكُونَ" }
        ],
      },
      {
        arabic: "عَلَى ٱلْأَرَآئِكِ يَنظُرُونَ",
        transliteration: "'Alal araaa'iki yanzuroon",
        translation: "sur les divans, ils regardent.",
        words: [
          { ar: "عَلَى" },
          { ar: "ٱلْأَرَآئِكِ" },
          { ar: "يَنظُرُونَ" }
        ],
      },
      {
        arabic: "هَلْ ثُوِّبَ ٱلْكُفَّارُ مَا كَانُوا۟ يَفْعَلُونَ",
        transliteration: "Hal suwwibal kuffaaru maa kaanoo yaf'aloon",
        translation: "Est-ce que les infidèles ont eu la récompense de ce qu'ils faisaient?",
        words: [
          { ar: "هَلْ" },
          { ar: "ثُوِّبَ" },
          { ar: "ٱلْكُفَّارُ" },
          { ar: "مَا" },
          { ar: "كَانُوا۟" },
          { ar: "يَفْعَلُونَ" }
        ],
      }
    ],
  },
  {
    id: 23,
    number: 84,
    name: "Al-Inshiqaaq",
    nameArabic: "الانشِقَاقِ",
    meaning: "La Déchirure",
    verses: 25,
    icon: "🌊",
    longForm: true,
    ayahs: [
      {
        arabic: "إِذَا ٱلسَّمَآءُ ٱنشَقَّتْ",
        transliteration: "Izas samaaa'un shaqqat",
        translation: "Quand le ciel se déchirera",
        words: [
          { ar: "إِذَا" },
          { ar: "ٱلسَّمَآءُ" },
          { ar: "ٱنشَقَّتْ" }
        ],
      },
      {
        arabic: "وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ",
        transliteration: "Wa azinat li Rabbihaa wa huqqat",
        translation: "et obéira à son Seigneur - et fera ce qu'il doit faire -",
        words: [
          { ar: "وَأَذِنَتْ" },
          { ar: "لِرَبِّهَا" },
          { ar: "وَحُقَّتْ" }
        ],
      },
      {
        arabic: "وَإِذَا ٱلْأَرْضُ مُدَّتْ",
        transliteration: "Wa izal ardu muddat",
        translation: "et que la terre sera nivelée,",
        words: [
          { ar: "وَإِذَا" },
          { ar: "ٱلْأَرْضُ" },
          { ar: "مُدَّتْ" }
        ],
      },
      {
        arabic: "وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ",
        transliteration: "Wa alqat maa feehaa wa takhallat",
        translation: "et qu'elle rejettera ce qui est en son sein (les morts) et se videra,",
        words: [
          { ar: "وَأَلْقَتْ" },
          { ar: "مَا" },
          { ar: "فِيهَا" },
          { ar: "وَتَخَلَّتْ" }
        ],
      },
      {
        arabic: "وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ",
        transliteration: "Wa azinat li Rabbihaa wa huqqat",
        translation: "et qu'elle obéira à son Seigneur - et fera ce qu'elle doit faire -",
        words: [
          { ar: "وَأَذِنَتْ" },
          { ar: "لِرَبِّهَا" },
          { ar: "وَحُقَّتْ" }
        ],
      },
      {
        arabic: "يَٰٓأَيُّهَا ٱلْإِنسَٰنُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًۭا فَمُلَٰقِيهِ",
        transliteration: "Yaaa ayyuhal insaanu innaka kaadihun ilaa Rabbika kad han famulaaqeeh",
        translation: "O homme! Toi qui t'efforces vers ton Seigneur sans relâche, tu Le rencontreras alors.",
        words: [
          { ar: "يَٰٓأَيُّهَا" },
          { ar: "ٱلْإِنسَٰنُ" },
          { ar: "إِنَّكَ" },
          { ar: "كَادِحٌ" },
          { ar: "إِلَىٰ" },
          { ar: "رَبِّكَ" },
          { ar: "كَدْحًۭا" },
          { ar: "فَمُلَٰقِيهِ" }
        ],
      },
      {
        arabic: "فَأَمَّا مَنْ أُوتِىَ كِتَٰبَهُۥ بِيَمِينِهِۦ",
        transliteration: "Fa ammaa man ootiya kitaabahoo biyameenih",
        translation: "Celui qui recevra son livre en sa main droite,",
        words: [
          { ar: "فَأَمَّا" },
          { ar: "مَنْ" },
          { ar: "أُوتِىَ" },
          { ar: "كِتَٰبَهُۥ" },
          { ar: "بِيَمِينِهِۦ" }
        ],
      },
      {
        arabic: "فَسَوْفَ يُحَاسَبُ حِسَابًۭا يَسِيرًۭا",
        transliteration: "Fasawfa yuhaasabu hi saabai yaseeraa",
        translation: "sera soumis à un jugement facile,",
        words: [
          { ar: "فَسَوْفَ" },
          { ar: "يُحَاسَبُ" },
          { ar: "حِسَابًۭا" },
          { ar: "يَسِيرًۭا" }
        ],
      },
      {
        arabic: "وَيَنقَلِبُ إِلَىٰٓ أَهْلِهِۦ مَسْرُورًۭا",
        transliteration: "Wa yanqalibu ilaaa ahlihee masrooraa",
        translation: "et retournera réjoui auprès de sa famille",
        words: [
          { ar: "وَيَنقَلِبُ" },
          { ar: "إِلَىٰٓ" },
          { ar: "أَهْلِهِۦ" },
          { ar: "مَسْرُورًۭا" }
        ],
      },
      {
        arabic: "وَأَمَّا مَنْ أُوتِىَ كِتَٰبَهُۥ وَرَآءَ ظَهْرِهِۦ",
        transliteration: "Wa ammaa man ootiya kitaabahoo waraaa'a zahrih",
        translation: "Quant à celui qui recevra son livre derrière son dos,",
        words: [
          { ar: "وَأَمَّا" },
          { ar: "مَنْ" },
          { ar: "أُوتِىَ" },
          { ar: "كِتَٰبَهُۥ" },
          { ar: "وَرَآءَ" },
          { ar: "ظَهْرِهِۦ" }
        ],
      },
      {
        arabic: "فَسَوْفَ يَدْعُوا۟ ثُبُورًۭا",
        transliteration: "Fasawfa yad'oo subooraa",
        translation: "il invoquera la destruction sur lui-même,",
        words: [
          { ar: "فَسَوْفَ" },
          { ar: "يَدْعُوا۟" },
          { ar: "ثُبُورًۭا" }
        ],
      },
      {
        arabic: "وَيَصْلَىٰ سَعِيرًا",
        transliteration: "Wa yaslaa sa'eeraa",
        translation: "et il brûlera dans un feu ardent.",
        words: [
          { ar: "وَيَصْلَىٰ" },
          { ar: "سَعِيرًا" }
        ],
      },
      {
        arabic: "إِنَّهُۥ كَانَ فِىٓ أَهْلِهِۦ مَسْرُورًا",
        transliteration: "Innahoo kaana feee ahlihee masrooraa",
        translation: "Car il était tout joyeux parmi les siens,",
        words: [
          { ar: "إِنَّهُۥ" },
          { ar: "كَانَ" },
          { ar: "فِىٓ" },
          { ar: "أَهْلِهِۦ" },
          { ar: "مَسْرُورًا" }
        ],
      },
      {
        arabic: "إِنَّهُۥ ظَنَّ أَن لَّن يَحُورَ",
        transliteration: "Innahoo zanna al lai yahoor",
        translation: "et il pensait que jamais il ne ressusciterait",
        words: [
          { ar: "إِنَّهُۥ" },
          { ar: "ظَنَّ" },
          { ar: "أَن" },
          { ar: "لَّن" },
          { ar: "يَحُورَ" }
        ],
      },
      {
        arabic: "بَلَىٰٓ إِنَّ رَبَّهُۥ كَانَ بِهِۦ بَصِيرًۭا",
        transliteration: "Balaaa inna Rabbahoo kaana bihee baseeraa",
        translation: "Mais si! Certes, son Seigneur l'observait parfaitement.",
        words: [
          { ar: "بَلَىٰٓ" },
          { ar: "إِنَّ" },
          { ar: "رَبَّهُۥ" },
          { ar: "كَانَ" },
          { ar: "بِهِۦ" },
          { ar: "بَصِيرًۭا" }
        ],
      },
      {
        arabic: "فَلَآ أُقْسِمُ بِٱلشَّفَقِ",
        transliteration: "Falaaa uqsimu bishshafaq",
        translation: "Non!... Je jure par le crépuscule,",
        words: [
          { ar: "فَلَآ" },
          { ar: "أُقْسِمُ" },
          { ar: "بِٱلشَّفَقِ" }
        ],
      },
      {
        arabic: "وَٱلَّيْلِ وَمَا وَسَقَ",
        transliteration: "Wallaili wa maa wasaq",
        translation: "et par la nuit et ce qu'elle enveloppe,",
        words: [
          { ar: "وَٱلَّيْلِ" },
          { ar: "وَمَا" },
          { ar: "وَسَقَ" }
        ],
      },
      {
        arabic: "وَٱلْقَمَرِ إِذَا ٱتَّسَقَ",
        transliteration: "Walqamari izat tasaq",
        translation: "et par la lune quand elle devient pleine lune!",
        words: [
          { ar: "وَٱلْقَمَرِ" },
          { ar: "إِذَا" },
          { ar: "ٱتَّسَقَ" }
        ],
      },
      {
        arabic: "لَتَرْكَبُنَّ طَبَقًا عَن طَبَقٍۢ",
        transliteration: "Latarkabunna tabaqan 'an tabaq",
        translation: "Vous passerez, certes, par des états successifs!",
        words: [
          { ar: "لَتَرْكَبُنَّ" },
          { ar: "طَبَقًا" },
          { ar: "عَن" },
          { ar: "طَبَقٍۢ" }
        ],
      },
      {
        arabic: "فَمَا لَهُمْ لَا يُؤْمِنُونَ",
        transliteration: "Famaa lahum laa yu'minoon",
        translation: "Qu'ont-ils à ne pas croire?",
        words: [
          { ar: "فَمَا" },
          { ar: "لَهُمْ" },
          { ar: "لَا" },
          { ar: "يُؤْمِنُونَ" }
        ],
      },
      {
        arabic: "وَإِذَا قُرِئَ عَلَيْهِمُ ٱلْقُرْءَانُ لَا يَسْجُدُونَ ۩",
        transliteration: "Wa izaa quri'a 'alaihimul Quraanu laa yasjudoon",
        translation: "et à ne pas se prosterner quand le Coran leur est lu?",
        words: [
          { ar: "وَإِذَا" },
          { ar: "قُرِئَ" },
          { ar: "عَلَيْهِمُ" },
          { ar: "ٱلْقُرْءَانُ" },
          { ar: "لَا" },
          { ar: "يَسْجُدُونَ" },
          { ar: "۩" }
        ],
      },
      {
        arabic: "بَلِ ٱلَّذِينَ كَفَرُوا۟ يُكَذِّبُونَ",
        transliteration: "Balil lazeena kafaroo yukazziboon",
        translation: "Mais ceux qui ne croient pas, le traitent plutôt de mensonge.",
        words: [
          { ar: "بَلِ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "كَفَرُوا۟" },
          { ar: "يُكَذِّبُونَ" }
        ],
      },
      {
        arabic: "وَٱللَّهُ أَعْلَمُ بِمَا يُوعُونَ",
        transliteration: "Wallaahu a'lamu bimaa yoo'oon",
        translation: "Or, Allah sait bien ce qu'ils dissimulent.",
        words: [
          { ar: "وَٱللَّهُ" },
          { ar: "أَعْلَمُ" },
          { ar: "بِمَا" },
          { ar: "يُوعُونَ" }
        ],
      },
      {
        arabic: "فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ",
        transliteration: "Fabashshirhum bi'azaabin aleem",
        translation: "Annonce-leur donc un châtiment douloureux.",
        words: [
          { ar: "فَبَشِّرْهُم" },
          { ar: "بِعَذَابٍ" },
          { ar: "أَلِيمٍ" }
        ],
      },
      {
        arabic: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍۭ",
        transliteration: "Illal lazeena aamanoo wa 'amilus saalihaati lahum ajrun ghairu mamnoon",
        translation: "Sauf ceux qui croient et accomplissent les bonnes œuvres: à eux une récompense jamais interrompue.",
        words: [
          { ar: "إِلَّا" },
          { ar: "ٱلَّذِينَ" },
          { ar: "ءَامَنُوا۟" },
          { ar: "وَعَمِلُوا۟" },
          { ar: "ٱلصَّٰلِحَٰتِ" },
          { ar: "لَهُمْ" },
          { ar: "أَجْرٌ" },
          { ar: "غَيْرُ" },
          { ar: "مَمْنُونٍۭ" }
        ],
      }
    ],
  },
  {
    id: 24,
    number: 85,
    name: "Al-Burooj",
    nameArabic: "البُرُوجِ",
    meaning: "Les Constellations",
    verses: 22,
    icon: "⭐",
    longForm: true,
    ayahs: [
      {
        arabic: "وَٱلسَّمَآءِ ذَاتِ ٱلْبُرُوجِ",
        transliteration: "Wassamaaa'i zaatil burooj",
        translation: "Par le ciel aux constellations!",
        words: [
          { ar: "وَٱلسَّمَآءِ" },
          { ar: "ذَاتِ" },
          { ar: "ٱلْبُرُوجِ" }
        ],
      },
      {
        arabic: "وَٱلْيَوْمِ ٱلْمَوْعُودِ",
        transliteration: "Wal yawmil maw'ood",
        translation: "et par le jour promis!",
        words: [
          { ar: "وَٱلْيَوْمِ" },
          { ar: "ٱلْمَوْعُودِ" }
        ],
      },
      {
        arabic: "وَشَاهِدٍۢ وَمَشْهُودٍۢ",
        transliteration: "Wa shaahidinw wa mashhood",
        translation: "et par le témoin et ce dont on témoigne!",
        words: [
          { ar: "وَشَاهِدٍۢ" },
          { ar: "وَمَشْهُودٍۢ" }
        ],
      },
      {
        arabic: "قُتِلَ أَصْحَٰبُ ٱلْأُخْدُودِ",
        transliteration: "Qutila as haabul ukhdood",
        translation: "Périssent les gens de l'Uhdûd,",
        words: [
          { ar: "قُتِلَ" },
          { ar: "أَصْحَٰبُ" },
          { ar: "ٱلْأُخْدُودِ" }
        ],
      },
      {
        arabic: "ٱلنَّارِ ذَاتِ ٱلْوَقُودِ",
        transliteration: "Annaari zaatil waqood",
        translation: "par le feu plein de combustible,",
        words: [
          { ar: "ٱلنَّارِ" },
          { ar: "ذَاتِ" },
          { ar: "ٱلْوَقُودِ" }
        ],
      },
      {
        arabic: "إِذْ هُمْ عَلَيْهَا قُعُودٌۭ",
        transliteration: "Iz hum 'alaihaa qu'ood",
        translation: "cependant qu'ils étaient assis tout autour,",
        words: [
          { ar: "إِذْ" },
          { ar: "هُمْ" },
          { ar: "عَلَيْهَا" },
          { ar: "قُعُودٌۭ" }
        ],
      },
      {
        arabic: "وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِٱلْمُؤْمِنِينَ شُهُودٌۭ",
        transliteration: "Wa hum 'alaa maa yaf'aloona bilmu 'mineena shuhood",
        translation: "ils étaient ainsi témoins de ce qu'ils faisaient des croyants,",
        words: [
          { ar: "وَهُمْ" },
          { ar: "عَلَىٰ" },
          { ar: "مَا" },
          { ar: "يَفْعَلُونَ" },
          { ar: "بِٱلْمُؤْمِنِينَ" },
          { ar: "شُهُودٌۭ" }
        ],
      },
      {
        arabic: "وَمَا نَقَمُوا۟ مِنْهُمْ إِلَّآ أَن يُؤْمِنُوا۟ بِٱللَّهِ ٱلْعَزِيزِ ٱلْحَمِيدِ",
        transliteration: "Wa maa naqamoo minhum illaaa aiyu'minoo billaahil 'azeezil Hameed",
        translation: "à qui ils ne leur reprochaient que d'avoir cru en Allah, le Puissant, le Digne de louange,",
        words: [
          { ar: "وَمَا" },
          { ar: "نَقَمُوا۟" },
          { ar: "مِنْهُمْ" },
          { ar: "إِلَّآ" },
          { ar: "أَن" },
          { ar: "يُؤْمِنُوا۟" },
          { ar: "بِٱللَّهِ" },
          { ar: "ٱلْعَزِيزِ" },
          { ar: "ٱلْحَمِيدِ" }
        ],
      },
      {
        arabic: "ٱلَّذِى لَهُۥ مُلْكُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ شَهِيدٌ",
        transliteration: "Allazee lahoo mulkus samaawaati wal ard; wallaahu 'alaa kulli shai 'in Shaheed",
        translation: "Auquel appartient la royauté des cieux et de la terre. Allah est témoin de toute chose.",
        words: [
          { ar: "ٱلَّذِى" },
          { ar: "لَهُۥ" },
          { ar: "مُلْكُ" },
          { ar: "ٱلسَّمَٰوَٰتِ" },
          { ar: "وَٱلْأَرْضِ" },
          { ar: "ۚ" },
          { ar: "وَٱللَّهُ" },
          { ar: "عَلَىٰ" },
          { ar: "كُلِّ" },
          { ar: "شَىْءٍۢ" },
          { ar: "شَهِيدٌ" }
        ],
      },
      {
        arabic: "إِنَّ ٱلَّذِينَ فَتَنُوا۟ ٱلْمُؤْمِنِينَ وَٱلْمُؤْمِنَٰتِ ثُمَّ لَمْ يَتُوبُوا۟ فَلَهُمْ عَذَابُ جَهَنَّمَ وَلَهُمْ عَذَابُ ٱلْحَرِيقِ",
        transliteration: "Innal lazeena fatanul mu'mineena wal mu'minaati summa lam yatooboo falahum 'azaabu Jahannama wa lahum 'azaabul hareeq",
        translation: "Ceux qui font subir des épreuves aux croyants et aux croyantes, puis ne se repentent pas, auront le châtiment de l'Enfer et le supplice du feu.",
        words: [
          { ar: "إِنَّ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "فَتَنُوا۟" },
          { ar: "ٱلْمُؤْمِنِينَ" },
          { ar: "وَٱلْمُؤْمِنَٰتِ" },
          { ar: "ثُمَّ" },
          { ar: "لَمْ" },
          { ar: "يَتُوبُوا۟" },
          { ar: "فَلَهُمْ" },
          { ar: "عَذَابُ" },
          { ar: "جَهَنَّمَ" },
          { ar: "وَلَهُمْ" },
          { ar: "عَذَابُ" },
          { ar: "ٱلْحَرِيقِ" }
        ],
      },
      {
        arabic: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ لَهُمْ جَنَّٰتٌۭ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ ۚ ذَٰلِكَ ٱلْفَوْزُ ٱلْكَبِيرُ",
        transliteration: "Innal lazeena aamanoo wa 'amilus saalihaati lahum Jannaatun tajree min tahtihal anhaar; zaalikal fawzul kabeer",
        translation: "Ceux qui croient et accomplissent les bonnes œuvres auront des Jardins sous lesquels coulent les ruisseaux. Cela est le grand succès.",
        words: [
          { ar: "إِنَّ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "ءَامَنُوا۟" },
          { ar: "وَعَمِلُوا۟" },
          { ar: "ٱلصَّٰلِحَٰتِ" },
          { ar: "لَهُمْ" },
          { ar: "جَنَّٰتٌۭ" },
          { ar: "تَجْرِى" },
          { ar: "مِن" },
          { ar: "تَحْتِهَا" },
          { ar: "ٱلْأَنْهَٰرُ" },
          { ar: "ۚ" },
          { ar: "ذَٰلِكَ" },
          { ar: "ٱلْفَوْزُ" },
          { ar: "ٱلْكَبِيرُ" }
        ],
      },
      {
        arabic: "إِنَّ بَطْشَ رَبِّكَ لَشَدِيدٌ",
        transliteration: "Inna batsha Rabbika lashadeed",
        translation: "La riposte de ton Seigneur est redoutable.",
        words: [
          { ar: "إِنَّ" },
          { ar: "بَطْشَ" },
          { ar: "رَبِّكَ" },
          { ar: "لَشَدِيدٌ" }
        ],
      },
      {
        arabic: "إِنَّهُۥ هُوَ يُبْدِئُ وَيُعِيدُ",
        transliteration: "Innahoo Huwa yubdi'u wa yu'eed",
        translation: "C'est Lui, certes, qui commence (la création) et la refait.",
        words: [
          { ar: "إِنَّهُۥ" },
          { ar: "هُوَ" },
          { ar: "يُبْدِئُ" },
          { ar: "وَيُعِيدُ" }
        ],
      },
      {
        arabic: "وَهُوَ ٱلْغَفُورُ ٱلْوَدُودُ",
        transliteration: "Wa Huwal Ghafoorul Wadood",
        translation: "Et c'est Lui le Pardonneur, le Tout-Affectueux,",
        words: [
          { ar: "وَهُوَ" },
          { ar: "ٱلْغَفُورُ" },
          { ar: "ٱلْوَدُودُ" }
        ],
      },
      {
        arabic: "ذُو ٱلْعَرْشِ ٱلْمَجِيدُ",
        transliteration: "Zul 'Arshil Majeed",
        translation: "Le Maître du Trône, le Tout-Glorieux,",
        words: [
          { ar: "ذُو" },
          { ar: "ٱلْعَرْشِ" },
          { ar: "ٱلْمَجِيدُ" }
        ],
      },
      {
        arabic: "فَعَّالٌۭ لِّمَا يُرِيدُ",
        transliteration: "Fa' 'aalul limaa yureed",
        translation: "Il réalise parfaitement tout ce qu'Il veut.",
        words: [
          { ar: "فَعَّالٌۭ" },
          { ar: "لِّمَا" },
          { ar: "يُرِيدُ" }
        ],
      },
      {
        arabic: "هَلْ أَتَىٰكَ حَدِيثُ ٱلْجُنُودِ",
        transliteration: "Hal ataaka hadeesul junood",
        translation: "T'est-il parvenu le récit des armées,",
        words: [
          { ar: "هَلْ" },
          { ar: "أَتَىٰكَ" },
          { ar: "حَدِيثُ" },
          { ar: "ٱلْجُنُودِ" }
        ],
      },
      {
        arabic: "فِرْعَوْنَ وَثَمُودَ",
        transliteration: "Fir'awna wa Samood",
        translation: "de Pharaon, et de Thamûd?",
        words: [
          { ar: "فِرْعَوْنَ" },
          { ar: "وَثَمُودَ" }
        ],
      },
      {
        arabic: "بَلِ ٱلَّذِينَ كَفَرُوا۟ فِى تَكْذِيبٍۢ",
        transliteration: "Balil lazeena kafaroo fee takzeeb",
        translation: "Mais ceux qui ne croient pas persistent à démentir,",
        words: [
          { ar: "بَلِ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "كَفَرُوا۟" },
          { ar: "فِى" },
          { ar: "تَكْذِيبٍۢ" }
        ],
      },
      {
        arabic: "وَٱللَّهُ مِن وَرَآئِهِم مُّحِيطٌۢ",
        transliteration: "Wallaahu minw waraaa'ihim muheet",
        translation: "alors qu'Allah, derrière eux, les cerne de toutes parts.",
        words: [
          { ar: "وَٱللَّهُ" },
          { ar: "مِن" },
          { ar: "وَرَآئِهِم" },
          { ar: "مُّحِيطٌۢ" }
        ],
      },
      {
        arabic: "بَلْ هُوَ قُرْءَانٌۭ مَّجِيدٌۭ",
        transliteration: "Bal huwa Quraanum Majeed",
        translation: "Mais c'est plutôt un Coran glorifié",
        words: [
          { ar: "بَلْ" },
          { ar: "هُوَ" },
          { ar: "قُرْءَانٌۭ" },
          { ar: "مَّجِيدٌۭ" }
        ],
      },
      {
        arabic: "فِى لَوْحٍۢ مَّحْفُوظٍۭ",
        transliteration: "Fee Lawhim Mahfooz",
        translation: "préservé sur une Tablette (auprès d'Allah).",
        words: [
          { ar: "فِى" },
          { ar: "لَوْحٍۢ" },
          { ar: "مَّحْفُوظٍۭ" }
        ],
      }
    ],
  },
  {
    id: 25,
    number: 86,
    name: "At-Taariq",
    nameArabic: "الطَّارِقِ",
    meaning: "L'Astre nocturne",
    verses: 17,
    icon: "🌠",
    longForm: true,
    ayahs: [
      {
        arabic: "وَٱلسَّمَآءِ وَٱلطَّارِقِ",
        transliteration: "Wassamaaa'i wattaariq",
        translation: "Par le ciel et par l'astre nocturne",
        words: [
          { ar: "وَٱلسَّمَآءِ" },
          { ar: "وَٱلطَّارِقِ" }
        ],
      },
      {
        arabic: "وَمَآ أَدْرَىٰكَ مَا ٱلطَّارِقُ",
        transliteration: "Wa maaa adraaka mattaariq",
        translation: "Et qui te dira ce qu'est l'astre nocturne?",
        words: [
          { ar: "وَمَآ" },
          { ar: "أَدْرَىٰكَ" },
          { ar: "مَا" },
          { ar: "ٱلطَّارِقُ" }
        ],
      },
      {
        arabic: "ٱلنَّجْمُ ٱلثَّاقِبُ",
        transliteration: "Annajmus saaqib",
        translation: "C'est l'étoile vivement brillante.",
        words: [
          { ar: "ٱلنَّجْمُ" },
          { ar: "ٱلثَّاقِبُ" }
        ],
      },
      {
        arabic: "إِن كُلُّ نَفْسٍۢ لَّمَّا عَلَيْهَا حَافِظٌۭ",
        transliteration: "In kullu nafsil lammaa 'alaihaa haafiz",
        translation: "Il n'est pas d'âme qui n'ait sur elle un gardien.",
        words: [
          { ar: "إِن" },
          { ar: "كُلُّ" },
          { ar: "نَفْسٍۢ" },
          { ar: "لَّمَّا" },
          { ar: "عَلَيْهَا" },
          { ar: "حَافِظٌۭ" }
        ],
      },
      {
        arabic: "فَلْيَنظُرِ ٱلْإِنسَٰنُ مِمَّ خُلِقَ",
        transliteration: "Fal yanzuril insaanu mimma khuliq",
        translation: "Que l'homme considère donc de quoi il a été créé.",
        words: [
          { ar: "فَلْيَنظُرِ" },
          { ar: "ٱلْإِنسَٰنُ" },
          { ar: "مِمَّ" },
          { ar: "خُلِقَ" }
        ],
      },
      {
        arabic: "خُلِقَ مِن مَّآءٍۢ دَافِقٍۢ",
        transliteration: "Khuliqa mim maaa'in daafiq",
        translation: "Il a été créé d'une giclée d'eau",
        words: [
          { ar: "خُلِقَ" },
          { ar: "مِن" },
          { ar: "مَّآءٍۢ" },
          { ar: "دَافِقٍۢ" }
        ],
      },
      {
        arabic: "يَخْرُجُ مِنۢ بَيْنِ ٱلصُّلْبِ وَٱلتَّرَآئِبِ",
        transliteration: "Yakhruju mim bainissulbi wat taraaa'ib",
        translation: "sortie d'entre les lombes et les côtes.",
        words: [
          { ar: "يَخْرُجُ" },
          { ar: "مِنۢ" },
          { ar: "بَيْنِ" },
          { ar: "ٱلصُّلْبِ" },
          { ar: "وَٱلتَّرَآئِبِ" }
        ],
      },
      {
        arabic: "إِنَّهُۥ عَلَىٰ رَجْعِهِۦ لَقَادِرٌۭ",
        transliteration: "Innahoo 'alaa raj'ihee laqaadir",
        translation: "Allah est certes capable de le ressusciter.",
        words: [
          { ar: "إِنَّهُۥ" },
          { ar: "عَلَىٰ" },
          { ar: "رَجْعِهِۦ" },
          { ar: "لَقَادِرٌۭ" }
        ],
      },
      {
        arabic: "يَوْمَ تُبْلَى ٱلسَّرَآئِرُ",
        transliteration: "Yawma tublas saraaa'ir",
        translation: "Le jour où les cœurs dévoileront leurs secrets,",
        words: [
          { ar: "يَوْمَ" },
          { ar: "تُبْلَى" },
          { ar: "ٱلسَّرَآئِرُ" }
        ],
      },
      {
        arabic: "فَمَا لَهُۥ مِن قُوَّةٍۢ وَلَا نَاصِرٍۢ",
        transliteration: "Famaa lahoo min quwwatinw wa laa naasir",
        translation: "Il n'aura alors ni force ni secoureur.",
        words: [
          { ar: "فَمَا" },
          { ar: "لَهُۥ" },
          { ar: "مِن" },
          { ar: "قُوَّةٍۢ" },
          { ar: "وَلَا" },
          { ar: "نَاصِرٍۢ" }
        ],
      },
      {
        arabic: "وَٱلسَّمَآءِ ذَاتِ ٱلرَّجْعِ",
        transliteration: "Wassamaaa'i zaatir raj'",
        translation: "Par le ciel qui fait revenir la pluie!",
        words: [
          { ar: "وَٱلسَّمَآءِ" },
          { ar: "ذَاتِ" },
          { ar: "ٱلرَّجْعِ" }
        ],
      },
      {
        arabic: "وَٱلْأَرْضِ ذَاتِ ٱلصَّدْعِ",
        transliteration: "Wal ardi zaatis sad'",
        translation: "et par la terre qui se fend!",
        words: [
          { ar: "وَٱلْأَرْضِ" },
          { ar: "ذَاتِ" },
          { ar: "ٱلصَّدْعِ" }
        ],
      },
      {
        arabic: "إِنَّهُۥ لَقَوْلٌۭ فَصْلٌۭ",
        transliteration: "Innahoo laqawlun fasl",
        translation: "Ceci [le Coran] est certes, une parole décisive [qui tranche entre le vrai et le faux],",
        words: [
          { ar: "إِنَّهُۥ" },
          { ar: "لَقَوْلٌۭ" },
          { ar: "فَصْلٌۭ" }
        ],
      },
      {
        arabic: "وَمَا هُوَ بِٱلْهَزْلِ",
        transliteration: "Wa maa huwa bil hazl",
        translation: "et non point une plaisanterie frivole!",
        words: [
          { ar: "وَمَا" },
          { ar: "هُوَ" },
          { ar: "بِٱلْهَزْلِ" }
        ],
      },
      {
        arabic: "إِنَّهُمْ يَكِيدُونَ كَيْدًۭا",
        transliteration: "Innahum yakeedoona kaidaa",
        translation: "Ils se servent d'une ruse,",
        words: [
          { ar: "إِنَّهُمْ" },
          { ar: "يَكِيدُونَ" },
          { ar: "كَيْدًۭا" }
        ],
      },
      {
        arabic: "وَأَكِيدُ كَيْدًۭا",
        transliteration: "Wa akeedu kaidaa",
        translation: "et Moi aussi Je me sers de Mon plan.",
        words: [
          { ar: "وَأَكِيدُ" },
          { ar: "كَيْدًۭا" }
        ],
      },
      {
        arabic: "فَمَهِّلِ ٱلْكَٰفِرِينَ أَمْهِلْهُمْ رُوَيْدًۢا",
        transliteration: "Famahhilil kaafireena amhilhum ruwaidaa",
        translation: "Accorde (ô Prophète) donc un délai aux infidèles: accorde-leur un court délai.",
        words: [
          { ar: "فَمَهِّلِ" },
          { ar: "ٱلْكَٰفِرِينَ" },
          { ar: "أَمْهِلْهُمْ" },
          { ar: "رُوَيْدًۢا" }
        ],
      }
    ],
  },
  {
    id: 26,
    number: 87,
    name: "Al-A'laa",
    nameArabic: "الأَعۡلَىٰ",
    meaning: "Le Très-Haut",
    verses: 19,
    icon: "🌅",
    longForm: true,
    ayahs: [
      {
        arabic: "سَبِّحِ ٱسْمَ رَبِّكَ ٱلْأَعْلَى",
        transliteration: "Sabbihisma Rabbikal A'laa",
        translation: "Glorifie le nom de ton Seigneur, le Très Haut,",
        words: [
          { ar: "سَبِّحِ" },
          { ar: "ٱسْمَ" },
          { ar: "رَبِّكَ" },
          { ar: "ٱلْأَعْلَى" }
        ],
      },
      {
        arabic: "ٱلَّذِى خَلَقَ فَسَوَّىٰ",
        transliteration: "Allazee khalaqa fasawwaa",
        translation: "Celui Qui a créé et agencé harmonieusement,",
        words: [
          { ar: "ٱلَّذِى" },
          { ar: "خَلَقَ" },
          { ar: "فَسَوَّىٰ" }
        ],
      },
      {
        arabic: "وَٱلَّذِى قَدَّرَ فَهَدَىٰ",
        transliteration: "Wallazee qaddara fahadaa",
        translation: "qui a décrété et guidé,",
        words: [
          { ar: "وَٱلَّذِى" },
          { ar: "قَدَّرَ" },
          { ar: "فَهَدَىٰ" }
        ],
      },
      {
        arabic: "وَٱلَّذِىٓ أَخْرَجَ ٱلْمَرْعَىٰ",
        transliteration: "Wallazeee akhrajal mar'aa",
        translation: "et qui a fait pousser le pâturage,",
        words: [
          { ar: "وَٱلَّذِىٓ" },
          { ar: "أَخْرَجَ" },
          { ar: "ٱلْمَرْعَىٰ" }
        ],
      },
      {
        arabic: "فَجَعَلَهُۥ غُثَآءً أَحْوَىٰ",
        transliteration: "Faja'alahoo ghusaaa'an ahwaa",
        translation: "et en a fait ensuite un foin sombre.",
        words: [
          { ar: "فَجَعَلَهُۥ" },
          { ar: "غُثَآءً" },
          { ar: "أَحْوَىٰ" }
        ],
      },
      {
        arabic: "سَنُقْرِئُكَ فَلَا تَنسَىٰٓ",
        transliteration: "Sanuqri'uka falaa tansaaa",
        translation: "Nous te ferons réciter (le Coran), de sorte que tu n'oublieras",
        words: [
          { ar: "سَنُقْرِئُكَ" },
          { ar: "فَلَا" },
          { ar: "تَنسَىٰٓ" }
        ],
      },
      {
        arabic: "إِلَّا مَا شَآءَ ٱللَّهُ ۚ إِنَّهُۥ يَعْلَمُ ٱلْجَهْرَ وَمَا يَخْفَىٰ",
        transliteration: "Illaa maa shaaa'al laah; innahoo ya'lamul jahra wa maa yakhfaa",
        translation: "que ce qu'Allah veut. Car, Il connaît ce qui paraît au grand jour ainsi que ce qui est caché.",
        words: [
          { ar: "إِلَّا" },
          { ar: "مَا" },
          { ar: "شَآءَ" },
          { ar: "ٱللَّهُ" },
          { ar: "ۚ" },
          { ar: "إِنَّهُۥ" },
          { ar: "يَعْلَمُ" },
          { ar: "ٱلْجَهْرَ" },
          { ar: "وَمَا" },
          { ar: "يَخْفَىٰ" }
        ],
      },
      {
        arabic: "وَنُيَسِّرُكَ لِلْيُسْرَىٰ",
        transliteration: "Wa nu-yassiruka lilyusraa",
        translation: "Nous te mettrons sur la voie la plus facile.",
        words: [
          { ar: "وَنُيَسِّرُكَ" },
          { ar: "لِلْيُسْرَىٰ" }
        ],
      },
      {
        arabic: "فَذَكِّرْ إِن نَّفَعَتِ ٱلذِّكْرَىٰ",
        transliteration: "Fazakkir in nafa'atizzikraa",
        translation: "Rappelle, donc, où le Rappel doit être utile.",
        words: [
          { ar: "فَذَكِّرْ" },
          { ar: "إِن" },
          { ar: "نَّفَعَتِ" },
          { ar: "ٱلذِّكْرَىٰ" }
        ],
      },
      {
        arabic: "سَيَذَّكَّرُ مَن يَخْشَىٰ",
        transliteration: "Sa yazzakkaru maiyakhshaa",
        translation: "Quiconque craint (Allah) s'[en] rappellera,",
        words: [
          { ar: "سَيَذَّكَّرُ" },
          { ar: "مَن" },
          { ar: "يَخْشَىٰ" }
        ],
      },
      {
        arabic: "وَيَتَجَنَّبُهَا ٱلْأَشْقَى",
        transliteration: "Wa yatajannabuhal ashqaa",
        translation: "et s'en écartera le grand malheureux,",
        words: [
          { ar: "وَيَتَجَنَّبُهَا" },
          { ar: "ٱلْأَشْقَى" }
        ],
      },
      {
        arabic: "ٱلَّذِى يَصْلَى ٱلنَّارَ ٱلْكُبْرَىٰ",
        transliteration: "Allazee yaslan Naaral kubraa",
        translation: "qui brûlera dans le plus grand Feu,",
        words: [
          { ar: "ٱلَّذِى" },
          { ar: "يَصْلَى" },
          { ar: "ٱلنَّارَ" },
          { ar: "ٱلْكُبْرَىٰ" }
        ],
      },
      {
        arabic: "ثُمَّ لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ",
        transliteration: "Summa laa yamootu feehaa wa laa yahyaa",
        translation: "où il ne mourra ni ne vivra.",
        words: [
          { ar: "ثُمَّ" },
          { ar: "لَا" },
          { ar: "يَمُوتُ" },
          { ar: "فِيهَا" },
          { ar: "وَلَا" },
          { ar: "يَحْيَىٰ" }
        ],
      },
      {
        arabic: "قَدْ أَفْلَحَ مَن تَزَكَّىٰ",
        transliteration: "Qad aflaha man tazakkaa",
        translation: "Réussit, certes, celui qui se purifie,",
        words: [
          { ar: "قَدْ" },
          { ar: "أَفْلَحَ" },
          { ar: "مَن" },
          { ar: "تَزَكَّىٰ" }
        ],
      },
      {
        arabic: "وَذَكَرَ ٱسْمَ رَبِّهِۦ فَصَلَّىٰ",
        transliteration: "Wa zakaras ma Rabbihee fasallaa",
        translation: "et se rappelle le nom de son Seigneur, puis célèbre la Salât.",
        words: [
          { ar: "وَذَكَرَ" },
          { ar: "ٱسْمَ" },
          { ar: "رَبِّهِۦ" },
          { ar: "فَصَلَّىٰ" }
        ],
      },
      {
        arabic: "بَلْ تُؤْثِرُونَ ٱلْحَيَوٰةَ ٱلدُّنْيَا",
        transliteration: "Bal tu'siroonal hayaatad dunyaa",
        translation: "Mais, vous préférez plutôt la vie présente,",
        words: [
          { ar: "بَلْ" },
          { ar: "تُؤْثِرُونَ" },
          { ar: "ٱلْحَيَوٰةَ" },
          { ar: "ٱلدُّنْيَا" }
        ],
      },
      {
        arabic: "وَٱلْءَاخِرَةُ خَيْرٌۭ وَأَبْقَىٰٓ",
        transliteration: "Wal Aakhiratu khairunw wa abqaa",
        translation: "alors que l'au-delà est meilleur et plus durable.",
        words: [
          { ar: "وَٱلْءَاخِرَةُ" },
          { ar: "خَيْرٌۭ" },
          { ar: "وَأَبْقَىٰٓ" }
        ],
      },
      {
        arabic: "إِنَّ هَٰذَا لَفِى ٱلصُّحُفِ ٱلْأُولَىٰ",
        transliteration: "Inna haazaa lafis suhu fil oolaa",
        translation: "Ceci se trouve, certes, dans les Feuilles anciennes,",
        words: [
          { ar: "إِنَّ" },
          { ar: "هَٰذَا" },
          { ar: "لَفِى" },
          { ar: "ٱلصُّحُفِ" },
          { ar: "ٱلْأُولَىٰ" }
        ],
      },
      {
        arabic: "صُحُفِ إِبْرَٰهِيمَ وَمُوسَىٰ",
        transliteration: "Suhufi Ibraaheema wa Moosaa",
        translation: "les Feuilles d'Abraham et de Moïse.",
        words: [
          { ar: "صُحُفِ" },
          { ar: "إِبْرَٰهِيمَ" },
          { ar: "وَمُوسَىٰ" }
        ],
      }
    ],
  },
  {
    id: 27,
    number: 88,
    name: "Al-Ghaashiya",
    nameArabic: "الغَاشِيَةِ",
    meaning: "L'Enveloppante",
    verses: 26,
    icon: "🔥",
    longForm: true,
    ayahs: [
      {
        arabic: "هَلْ أَتَىٰكَ حَدِيثُ ٱلْغَٰشِيَةِ",
        transliteration: "Hal ataaka hadeesul ghaashiyah",
        translation: "T'est-il parvenu le récit de l'enveloppante?",
        words: [
          { ar: "هَلْ" },
          { ar: "أَتَىٰكَ" },
          { ar: "حَدِيثُ" },
          { ar: "ٱلْغَٰشِيَةِ" }
        ],
      },
      {
        arabic: "وُجُوهٌۭ يَوْمَئِذٍ خَٰشِعَةٌ",
        transliteration: "Wujoohuny yawma 'izin khaashi'ah",
        translation: "Ce jour-là, il y aura des visages humiliés,",
        words: [
          { ar: "وُجُوهٌۭ" },
          { ar: "يَوْمَئِذٍ" },
          { ar: "خَٰشِعَةٌ" }
        ],
      },
      {
        arabic: "عَامِلَةٌۭ نَّاصِبَةٌۭ",
        transliteration: "'Aamilatun naasibah",
        translation: "préoccupés, harassés.",
        words: [
          { ar: "عَامِلَةٌۭ" },
          { ar: "نَّاصِبَةٌۭ" }
        ],
      },
      {
        arabic: "تَصْلَىٰ نَارًا حَامِيَةًۭ",
        transliteration: "Taslaa naaran haamiyah",
        translation: "Ils brûleront dans un Feu ardent,",
        words: [
          { ar: "تَصْلَىٰ" },
          { ar: "نَارًا" },
          { ar: "حَامِيَةًۭ" }
        ],
      },
      {
        arabic: "تُسْقَىٰ مِنْ عَيْنٍ ءَانِيَةٍۢ",
        transliteration: "Tusqaa min 'aynin aaniyah",
        translation: "et seront abreuvés d'une source bouillante.",
        words: [
          { ar: "تُسْقَىٰ" },
          { ar: "مِنْ" },
          { ar: "عَيْنٍ" },
          { ar: "ءَانِيَةٍۢ" }
        ],
      },
      {
        arabic: "لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍۢ",
        transliteration: "Laisa lahum ta'aamun illaa min daree'",
        translation: "Il n'y aura pour eux d'autre nourriture que des plantes épineuses [darî'],",
        words: [
          { ar: "لَّيْسَ" },
          { ar: "لَهُمْ" },
          { ar: "طَعَامٌ" },
          { ar: "إِلَّا" },
          { ar: "مِن" },
          { ar: "ضَرِيعٍۢ" }
        ],
      },
      {
        arabic: "لَّا يُسْمِنُ وَلَا يُغْنِى مِن جُوعٍۢ",
        transliteration: "Laa yusminu wa laa yughnee min joo'",
        translation: "qui n'engraisse, ni n'apaise la faim.",
        words: [
          { ar: "لَّا" },
          { ar: "يُسْمِنُ" },
          { ar: "وَلَا" },
          { ar: "يُغْنِى" },
          { ar: "مِن" },
          { ar: "جُوعٍۢ" }
        ],
      },
      {
        arabic: "وُجُوهٌۭ يَوْمَئِذٍۢ نَّاعِمَةٌۭ",
        transliteration: "Wujoohuny yawma 'izin naa'imah",
        translation: "Ce jour-là, il y aura des visages épanouis,",
        words: [
          { ar: "وُجُوهٌۭ" },
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "نَّاعِمَةٌۭ" }
        ],
      },
      {
        arabic: "لِّسَعْيِهَا رَاضِيَةٌۭ",
        transliteration: "Lisa'yihaa raadiyah",
        translation: "contents de leurs efforts,",
        words: [
          { ar: "لِّسَعْيِهَا" },
          { ar: "رَاضِيَةٌۭ" }
        ],
      },
      {
        arabic: "فِى جَنَّةٍ عَالِيَةٍۢ",
        transliteration: "Fee jannatin 'aaliyah",
        translation: "dans un haut Jardin,",
        words: [
          { ar: "فِى" },
          { ar: "جَنَّةٍ" },
          { ar: "عَالِيَةٍۢ" }
        ],
      },
      {
        arabic: "لَّا تَسْمَعُ فِيهَا لَٰغِيَةًۭ",
        transliteration: "Laa tasma'u feehaa laaghiyah",
        translation: "où ils n'entendent aucune futilité.",
        words: [
          { ar: "لَّا" },
          { ar: "تَسْمَعُ" },
          { ar: "فِيهَا" },
          { ar: "لَٰغِيَةًۭ" }
        ],
      },
      {
        arabic: "فِيهَا عَيْنٌۭ جَارِيَةٌۭ",
        transliteration: "Feehaa 'aynun jaariyah",
        translation: "Là, il y aura une source coulante.",
        words: [
          { ar: "فِيهَا" },
          { ar: "عَيْنٌۭ" },
          { ar: "جَارِيَةٌۭ" }
        ],
      },
      {
        arabic: "فِيهَا سُرُرٌۭ مَّرْفُوعَةٌۭ",
        transliteration: "Feehaa sururum marfoo'ah",
        translation: "Là, des divans élevés",
        words: [
          { ar: "فِيهَا" },
          { ar: "سُرُرٌۭ" },
          { ar: "مَّرْفُوعَةٌۭ" }
        ],
      },
      {
        arabic: "وَأَكْوَابٌۭ مَّوْضُوعَةٌۭ",
        transliteration: "Wa akwaabum mawdoo 'ah",
        translation: "et des coupes posées",
        words: [
          { ar: "وَأَكْوَابٌۭ" },
          { ar: "مَّوْضُوعَةٌۭ" }
        ],
      },
      {
        arabic: "وَنَمَارِقُ مَصْفُوفَةٌۭ",
        transliteration: "Wa namaariqu masfoofah",
        translation: "et des coussins rangés",
        words: [
          { ar: "وَنَمَارِقُ" },
          { ar: "مَصْفُوفَةٌۭ" }
        ],
      },
      {
        arabic: "وَزَرَابِىُّ مَبْثُوثَةٌ",
        transliteration: "Wa zaraabiyyu mabsoosah",
        translation: "et des tapis étalés.",
        words: [
          { ar: "وَزَرَابِىُّ" },
          { ar: "مَبْثُوثَةٌ" }
        ],
      },
      {
        arabic: "أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ",
        transliteration: "Afalaa yanzuroona ilalibili kaifa khuliqat",
        translation: "Ne considèrent-ils donc pas les chameaux, comment ils ont été créés,",
        words: [
          { ar: "أَفَلَا" },
          { ar: "يَنظُرُونَ" },
          { ar: "إِلَى" },
          { ar: "ٱلْإِبِلِ" },
          { ar: "كَيْفَ" },
          { ar: "خُلِقَتْ" }
        ],
      },
      {
        arabic: "وَإِلَى ٱلسَّمَآءِ كَيْفَ رُفِعَتْ",
        transliteration: "Wa ilas samaaa'i kaifa rufi'at",
        translation: "et le ciel comment il est élevé,",
        words: [
          { ar: "وَإِلَى" },
          { ar: "ٱلسَّمَآءِ" },
          { ar: "كَيْفَ" },
          { ar: "رُفِعَتْ" }
        ],
      },
      {
        arabic: "وَإِلَى ٱلْجِبَالِ كَيْفَ نُصِبَتْ",
        transliteration: "Wa ilal jibaali kaifa nusibat",
        translation: "et les montagnes comment elles sont dressées",
        words: [
          { ar: "وَإِلَى" },
          { ar: "ٱلْجِبَالِ" },
          { ar: "كَيْفَ" },
          { ar: "نُصِبَتْ" }
        ],
      },
      {
        arabic: "وَإِلَى ٱلْأَرْضِ كَيْفَ سُطِحَتْ",
        transliteration: "Wa ilal ardi kaifa sutihat",
        translation: "et la terre comment elle est nivelée?",
        words: [
          { ar: "وَإِلَى" },
          { ar: "ٱلْأَرْضِ" },
          { ar: "كَيْفَ" },
          { ar: "سُطِحَتْ" }
        ],
      },
      {
        arabic: "فَذَكِّرْ إِنَّمَآ أَنتَ مُذَكِّرٌۭ",
        transliteration: "Fazakkir innama anta Muzakkir",
        translation: "Eh bien, rappelle! Tu n'es qu'un rappeleur,",
        words: [
          { ar: "فَذَكِّرْ" },
          { ar: "إِنَّمَآ" },
          { ar: "أَنتَ" },
          { ar: "مُذَكِّرٌۭ" }
        ],
      },
      {
        arabic: "لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ",
        transliteration: "Lasta 'alaihim bimusaitir",
        translation: "et tu n'es pas un dominateur sur eux.",
        words: [
          { ar: "لَّسْتَ" },
          { ar: "عَلَيْهِم" },
          { ar: "بِمُصَيْطِرٍ" }
        ],
      },
      {
        arabic: "إِلَّا مَن تَوَلَّىٰ وَكَفَرَ",
        transliteration: "Illaa man tawallaa wa kafar",
        translation: "Sauf celui qui tourne le dos et ne croit pas,",
        words: [
          { ar: "إِلَّا" },
          { ar: "مَن" },
          { ar: "تَوَلَّىٰ" },
          { ar: "وَكَفَرَ" }
        ],
      },
      {
        arabic: "فَيُعَذِّبُهُ ٱللَّهُ ٱلْعَذَابَ ٱلْأَكْبَرَ",
        transliteration: "Fa yu'azzibuhul laahul 'azaabal akbar",
        translation: "alors Allah le châtiera du plus grand châtiment.",
        words: [
          { ar: "فَيُعَذِّبُهُ" },
          { ar: "ٱللَّهُ" },
          { ar: "ٱلْعَذَابَ" },
          { ar: "ٱلْأَكْبَرَ" }
        ],
      },
      {
        arabic: "إِنَّ إِلَيْنَآ إِيَابَهُمْ",
        transliteration: "Innaa ilainaaa iyaabahum",
        translation: "Vers Nous est leur retour.",
        words: [
          { ar: "إِنَّ" },
          { ar: "إِلَيْنَآ" },
          { ar: "إِيَابَهُمْ" }
        ],
      },
      {
        arabic: "ثُمَّ إِنَّ عَلَيْنَا حِسَابَهُم",
        transliteration: "Summa inna 'alainaa hisaabahum",
        translation: "Ensuite, c'est à Nous de leur demander compte.",
        words: [
          { ar: "ثُمَّ" },
          { ar: "إِنَّ" },
          { ar: "عَلَيْنَا" },
          { ar: "حِسَابَهُم" }
        ],
      }
    ],
  },
  {
    id: 28,
    number: 89,
    name: "Al-Fajr",
    nameArabic: "الفَجۡرِ",
    meaning: "L'Aube",
    verses: 30,
    icon: "🌄",
    longForm: true,
    ayahs: [
      {
        arabic: "وَٱلْفَجْرِ",
        transliteration: "Wal-Fajr",
        translation: "Par l'Aube!",
        words: [
          { ar: "وَٱلْفَجْرِ" }
        ],
      },
      {
        arabic: "وَلَيَالٍ عَشْرٍۢ",
        transliteration: "Wa layaalin 'ashr",
        translation: "Et par les dix nuits!",
        words: [
          { ar: "وَلَيَالٍ" },
          { ar: "عَشْرٍۢ" }
        ],
      },
      {
        arabic: "وَٱلشَّفْعِ وَٱلْوَتْرِ",
        transliteration: "Wash shaf'i wal watr",
        translation: "Par le pair et l'impair!",
        words: [
          { ar: "وَٱلشَّفْعِ" },
          { ar: "وَٱلْوَتْرِ" }
        ],
      },
      {
        arabic: "وَٱلَّيْلِ إِذَا يَسْرِ",
        transliteration: "Wallaili izaa yasr",
        translation: "Et par la nuit quand elle s'écoule!",
        words: [
          { ar: "وَٱلَّيْلِ" },
          { ar: "إِذَا" },
          { ar: "يَسْرِ" }
        ],
      },
      {
        arabic: "هَلْ فِى ذَٰلِكَ قَسَمٌۭ لِّذِى حِجْرٍ",
        transliteration: "Hal fee zaalika qasamul lizee hijr",
        translation: "N'est-ce pas là un serment, pour un doué d'intelligence?",
        words: [
          { ar: "هَلْ" },
          { ar: "فِى" },
          { ar: "ذَٰلِكَ" },
          { ar: "قَسَمٌۭ" },
          { ar: "لِّذِى" },
          { ar: "حِجْرٍ" }
        ],
      },
      {
        arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ",
        transliteration: "Alam tara kaifa fa'ala rabbuka bi'aad",
        translation: "N'as-tu pas vu comment ton Seigneur a agi avec les 'Aad",
        words: [
          { ar: "أَلَمْ" },
          { ar: "تَرَ" },
          { ar: "كَيْفَ" },
          { ar: "فَعَلَ" },
          { ar: "رَبُّكَ" },
          { ar: "بِعَادٍ" }
        ],
      },
      {
        arabic: "إِرَمَ ذَاتِ ٱلْعِمَادِ",
        transliteration: "Iramaa zaatil 'imaad",
        translation: "[avec] Iram, [la cité] à la colonne remarquable,",
        words: [
          { ar: "إِرَمَ" },
          { ar: "ذَاتِ" },
          { ar: "ٱلْعِمَادِ" }
        ],
      },
      {
        arabic: "ٱلَّتِى لَمْ يُخْلَقْ مِثْلُهَا فِى ٱلْبِلَٰدِ",
        transliteration: "Allatee lam yukhlaq misluhaa fil bilaad",
        translation: "dont jamais pareille ne fut construite parmi les villes?",
        words: [
          { ar: "ٱلَّتِى" },
          { ar: "لَمْ" },
          { ar: "يُخْلَقْ" },
          { ar: "مِثْلُهَا" },
          { ar: "فِى" },
          { ar: "ٱلْبِلَٰدِ" }
        ],
      },
      {
        arabic: "وَثَمُودَ ٱلَّذِينَ جَابُوا۟ ٱلصَّخْرَ بِٱلْوَادِ",
        transliteration: "Wa samoodal lazeena jaabus sakhra bil waad",
        translation: "et avec les Thamûd qui taillaient le rocher dans la vallée?",
        words: [
          { ar: "وَثَمُودَ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "جَابُوا۟" },
          { ar: "ٱلصَّخْرَ" },
          { ar: "بِٱلْوَادِ" }
        ],
      },
      {
        arabic: "وَفِرْعَوْنَ ذِى ٱلْأَوْتَادِ",
        transliteration: "Wa fir'awna zil awtaad",
        translation: "ainsi qu'avec Pharaon, l'homme aux épieux?",
        words: [
          { ar: "وَفِرْعَوْنَ" },
          { ar: "ذِى" },
          { ar: "ٱلْأَوْتَادِ" }
        ],
      },
      {
        arabic: "ٱلَّذِينَ طَغَوْا۟ فِى ٱلْبِلَٰدِ",
        transliteration: "Allazeena taghaw fil bilaad",
        translation: "Tous, étaient des gens qui transgressaient dans [leurs] pays,",
        words: [
          { ar: "ٱلَّذِينَ" },
          { ar: "طَغَوْا۟" },
          { ar: "فِى" },
          { ar: "ٱلْبِلَٰدِ" }
        ],
      },
      {
        arabic: "فَأَكْثَرُوا۟ فِيهَا ٱلْفَسَادَ",
        transliteration: "Fa aksaroo feehal fasaad",
        translation: "et y avaient commis beaucoup de désordre.",
        words: [
          { ar: "فَأَكْثَرُوا۟" },
          { ar: "فِيهَا" },
          { ar: "ٱلْفَسَادَ" }
        ],
      },
      {
        arabic: "فَصَبَّ عَلَيْهِمْ رَبُّكَ سَوْطَ عَذَابٍ",
        transliteration: "Fasabba 'alaihim Rabbuka sawta 'azaab",
        translation: "Donc, ton Seigneur déversa sur eux un fouet du châtiment.",
        words: [
          { ar: "فَصَبَّ" },
          { ar: "عَلَيْهِمْ" },
          { ar: "رَبُّكَ" },
          { ar: "سَوْطَ" },
          { ar: "عَذَابٍ" }
        ],
      },
      {
        arabic: "إِنَّ رَبَّكَ لَبِٱلْمِرْصَادِ",
        transliteration: "Inna Rabbaka labil mirsaad",
        translation: "Car ton Seigneur demeure aux aguets.",
        words: [
          { ar: "إِنَّ" },
          { ar: "رَبَّكَ" },
          { ar: "لَبِٱلْمِرْصَادِ" }
        ],
      },
      {
        arabic: "فَأَمَّا ٱلْإِنسَٰنُ إِذَا مَا ٱبْتَلَىٰهُ رَبُّهُۥ فَأَكْرَمَهُۥ وَنَعَّمَهُۥ فَيَقُولُ رَبِّىٓ أَكْرَمَنِ",
        transliteration: "Fa ammal insaanu izaa mab talaahu Rabbuhoo fa akramahoo wa na' 'amahoo fa yaqoolu Rabbeee akraman",
        translation: "Quant à l'homme, lorsque son Seigneur l'éprouve en l'honorant et en le comblant de bienfaits, il dit: «Mon Seigneur m'a honoré».",
        words: [
          { ar: "فَأَمَّا" },
          { ar: "ٱلْإِنسَٰنُ" },
          { ar: "إِذَا" },
          { ar: "مَا" },
          { ar: "ٱبْتَلَىٰهُ" },
          { ar: "رَبُّهُۥ" },
          { ar: "فَأَكْرَمَهُۥ" },
          { ar: "وَنَعَّمَهُۥ" },
          { ar: "فَيَقُولُ" },
          { ar: "رَبِّىٓ" },
          { ar: "أَكْرَمَنِ" }
        ],
      },
      {
        arabic: "وَأَمَّآ إِذَا مَا ٱبْتَلَىٰهُ فَقَدَرَ عَلَيْهِ رِزْقَهُۥ فَيَقُولُ رَبِّىٓ أَهَٰنَنِ",
        transliteration: "Wa ammaaa izaa mabtalaahu faqadara 'alaihi rizqahoo fa yaqoolu Rabbeee ahaanan",
        translation: "Mais par contre, quand Il l'éprouve en lui restreignant sa subsistance, il dit: «Mon Seigneur m'a avili».",
        words: [
          { ar: "وَأَمَّآ" },
          { ar: "إِذَا" },
          { ar: "مَا" },
          { ar: "ٱبْتَلَىٰهُ" },
          { ar: "فَقَدَرَ" },
          { ar: "عَلَيْهِ" },
          { ar: "رِزْقَهُۥ" },
          { ar: "فَيَقُولُ" },
          { ar: "رَبِّىٓ" },
          { ar: "أَهَٰنَنِ" }
        ],
      },
      {
        arabic: "كَلَّا ۖ بَل لَّا تُكْرِمُونَ ٱلْيَتِيمَ",
        transliteration: "Kalla bal laa tukrimooo nal yateem",
        translation: "Mais non! C'est vous plutôt, qui n'êtes pas généreux envers les orphelins;",
        words: [
          { ar: "كَلَّا" },
          { ar: "ۖ" },
          { ar: "بَل" },
          { ar: "لَّا" },
          { ar: "تُكْرِمُونَ" },
          { ar: "ٱلْيَتِيمَ" }
        ],
      },
      {
        arabic: "وَلَا تَحَٰٓضُّونَ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ",
        transliteration: "Wa laa tahaaaddoona 'alaata'aamil miskeen",
        translation: "qui ne vous incitez pas mutuellement à nourrir le pauvre,",
        words: [
          { ar: "وَلَا" },
          { ar: "تَحَٰٓضُّونَ" },
          { ar: "عَلَىٰ" },
          { ar: "طَعَامِ" },
          { ar: "ٱلْمِسْكِينِ" }
        ],
      },
      {
        arabic: "وَتَأْكُلُونَ ٱلتُّرَاثَ أَكْلًۭا لَّمًّۭا",
        transliteration: "Wa taakuloonat turaasa aklal lammaa",
        translation: "qui dévorez l'héritage avec une avidité vorace,",
        words: [
          { ar: "وَتَأْكُلُونَ" },
          { ar: "ٱلتُّرَاثَ" },
          { ar: "أَكْلًۭا" },
          { ar: "لَّمًّۭا" }
        ],
      },
      {
        arabic: "وَتُحِبُّونَ ٱلْمَالَ حُبًّۭا جَمًّۭا",
        transliteration: "Wa tuhibboonal maala hubban jammaa",
        translation: "et aimez les richesses d'un amour sans bornes.",
        words: [
          { ar: "وَتُحِبُّونَ" },
          { ar: "ٱلْمَالَ" },
          { ar: "حُبًّۭا" },
          { ar: "جَمًّۭا" }
        ],
      },
      {
        arabic: "كَلَّآ إِذَا دُكَّتِ ٱلْأَرْضُ دَكًّۭا دَكًّۭا",
        transliteration: "Kallaaa izaaa dukkatil ardu dakkan dakka",
        translation: "Prenez garde! Quand la terre sera complètement pulvérisée,",
        words: [
          { ar: "كَلَّآ" },
          { ar: "إِذَا" },
          { ar: "دُكَّتِ" },
          { ar: "ٱلْأَرْضُ" },
          { ar: "دَكًّۭا" },
          { ar: "دَكًّۭا" }
        ],
      },
      {
        arabic: "وَجَآءَ رَبُّكَ وَٱلْمَلَكُ صَفًّۭا صَفًّۭا",
        transliteration: "Wa jaaa'a Rabbuka wal malaku saffan saffaa",
        translation: "et que ton Seigneur viendra ainsi que les Anges, rang par rang,",
        words: [
          { ar: "وَجَآءَ" },
          { ar: "رَبُّكَ" },
          { ar: "وَٱلْمَلَكُ" },
          { ar: "صَفًّۭا" },
          { ar: "صَفًّۭا" }
        ],
      },
      {
        arabic: "وَجِا۟ىٓءَ يَوْمَئِذٍۭ بِجَهَنَّمَ ۚ يَوْمَئِذٍۢ يَتَذَكَّرُ ٱلْإِنسَٰنُ وَأَنَّىٰ لَهُ ٱلذِّكْرَىٰ",
        transliteration: "Wa jeee'a yawma'izim bi jahannnam; Yawma 'iziny yatazakkarul insaanu wa annaa lahuz zikraa",
        translation: "et que ce jour-là, on amènera l'Enfer; ce jour-là, l'homme se rappellera. Mais à quoi lui servira de se souvenir?",
        words: [
          { ar: "وَجِا۟ىٓءَ" },
          { ar: "يَوْمَئِذٍۭ" },
          { ar: "بِجَهَنَّمَ" },
          { ar: "ۚ" },
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "يَتَذَكَّرُ" },
          { ar: "ٱلْإِنسَٰنُ" },
          { ar: "وَأَنَّىٰ" },
          { ar: "لَهُ" },
          { ar: "ٱلذِّكْرَىٰ" }
        ],
      },
      {
        arabic: "يَقُولُ يَٰلَيْتَنِى قَدَّمْتُ لِحَيَاتِى",
        transliteration: "Yaqoolu yaa laitanee qaddamtu lihayaatee",
        translation: "Il dira: «Hélas! Que n'ai-je fait du bien pour ma vie future!",
        words: [
          { ar: "يَقُولُ" },
          { ar: "يَٰلَيْتَنِى" },
          { ar: "قَدَّمْتُ" },
          { ar: "لِحَيَاتِى" }
        ],
      },
      {
        arabic: "فَيَوْمَئِذٍۢ لَّا يُعَذِّبُ عَذَابَهُۥٓ أَحَدٌۭ",
        transliteration: "Fa Yawma izil laa yu'azzibu 'azaabahooo ahad",
        translation: "Ce jour-là donc, nul ne saura châtier comme Lui châtie,",
        words: [
          { ar: "فَيَوْمَئِذٍۢ" },
          { ar: "لَّا" },
          { ar: "يُعَذِّبُ" },
          { ar: "عَذَابَهُۥٓ" },
          { ar: "أَحَدٌۭ" }
        ],
      },
      {
        arabic: "وَلَا يُوثِقُ وَثَاقَهُۥٓ أَحَدٌۭ",
        transliteration: "Wa laa yoosiqu wasaaqa hooo ahad",
        translation: "et nul ne saura garrotter comme Lui garrotte.",
        words: [
          { ar: "وَلَا" },
          { ar: "يُوثِقُ" },
          { ar: "وَثَاقَهُۥٓ" },
          { ar: "أَحَدٌۭ" }
        ],
      },
      {
        arabic: "يَٰٓأَيَّتُهَا ٱلنَّفْسُ ٱلْمُطْمَئِنَّةُ",
        transliteration: "Yaaa ayyatuhan nafsul mutma 'innah",
        translation: "«O toi, âme apaisée,",
        words: [
          { ar: "يَٰٓأَيَّتُهَا" },
          { ar: "ٱلنَّفْسُ" },
          { ar: "ٱلْمُطْمَئِنَّةُ" }
        ],
      },
      {
        arabic: "ٱرْجِعِىٓ إِلَىٰ رَبِّكِ رَاضِيَةًۭ مَّرْضِيَّةًۭ",
        transliteration: "Irji'eee ilaa Rabbiki raadiyatam mardiyyah",
        translation: "retourne vers ton Seigneur, satisfaite et agréée;",
        words: [
          { ar: "ٱرْجِعِىٓ" },
          { ar: "إِلَىٰ" },
          { ar: "رَبِّكِ" },
          { ar: "رَاضِيَةًۭ" },
          { ar: "مَّرْضِيَّةًۭ" }
        ],
      },
      {
        arabic: "فَٱدْخُلِى فِى عِبَٰدِى",
        transliteration: "Fadkhulee fee 'ibaadee",
        translation: "entre donc parmi Mes serviteurs,",
        words: [
          { ar: "فَٱدْخُلِى" },
          { ar: "فِى" },
          { ar: "عِبَٰدِى" }
        ],
      },
      {
        arabic: "وَٱدْخُلِى جَنَّتِى",
        transliteration: "Wadkhulee jannatee",
        translation: "et entre dans Mon Paradis».",
        words: [
          { ar: "وَٱدْخُلِى" },
          { ar: "جَنَّتِى" }
        ],
      }
    ],
  },
  {
    id: 29,
    number: 90,
    name: "Al-Balad",
    nameArabic: "البَلَدِ",
    meaning: "La Cité",
    verses: 20,
    icon: "🏙️",
    longForm: true,
    ayahs: [
      {
        arabic: "لَآ أُقْسِمُ بِهَٰذَا ٱلْبَلَدِ",
        transliteration: "Laaa uqsimu bihaazal balad",
        translation: "Non!... Je jure par cette Cité!",
        words: [
          { ar: "لَآ" },
          { ar: "أُقْسِمُ" },
          { ar: "بِهَٰذَا" },
          { ar: "ٱلْبَلَدِ" }
        ],
      },
      {
        arabic: "وَأَنتَ حِلٌّۢ بِهَٰذَا ٱلْبَلَدِ",
        transliteration: "Wa anta hillum bihaazal balad",
        translation: "et toi, tu es un résident dans cette cité -",
        words: [
          { ar: "وَأَنتَ" },
          { ar: "حِلٌّۢ" },
          { ar: "بِهَٰذَا" },
          { ar: "ٱلْبَلَدِ" }
        ],
      },
      {
        arabic: "وَوَالِدٍۢ وَمَا وَلَدَ",
        transliteration: "Wa waalidinw wa maa walad",
        translation: "Et par le père et ce qu'il engendre!",
        words: [
          { ar: "وَوَالِدٍۢ" },
          { ar: "وَمَا" },
          { ar: "وَلَدَ" }
        ],
      },
      {
        arabic: "لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِى كَبَدٍ",
        transliteration: "Laqad khalaqnal insaana fee kabad",
        translation: "Nous avons, certes, créé l'homme pour une vie de lutte.",
        words: [
          { ar: "لَقَدْ" },
          { ar: "خَلَقْنَا" },
          { ar: "ٱلْإِنسَٰنَ" },
          { ar: "فِى" },
          { ar: "كَبَدٍ" }
        ],
      },
      {
        arabic: "أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌۭ",
        transliteration: "Ayahsabu al-lai yaqdira 'alaihi ahad",
        translation: "Pense-t-il que personne ne pourra rien contre lui?",
        words: [
          { ar: "أَيَحْسَبُ" },
          { ar: "أَن" },
          { ar: "لَّن" },
          { ar: "يَقْدِرَ" },
          { ar: "عَلَيْهِ" },
          { ar: "أَحَدٌۭ" }
        ],
      },
      {
        arabic: "يَقُولُ أَهْلَكْتُ مَالًۭا لُّبَدًا",
        transliteration: "Yaqoolu ahlaktu maalal lubadaa",
        translation: "Il dit: «J'ai gaspillé beaucoup de biens».",
        words: [
          { ar: "يَقُولُ" },
          { ar: "أَهْلَكْتُ" },
          { ar: "مَالًۭا" },
          { ar: "لُّبَدًا" }
        ],
      },
      {
        arabic: "أَيَحْسَبُ أَن لَّمْ يَرَهُۥٓ أَحَدٌ",
        transliteration: "Ayahsabu al lam yarahooo ahad",
        translation: "Pense-t-il que nul ne l'a vu?",
        words: [
          { ar: "أَيَحْسَبُ" },
          { ar: "أَن" },
          { ar: "لَّمْ" },
          { ar: "يَرَهُۥٓ" },
          { ar: "أَحَدٌ" }
        ],
      },
      {
        arabic: "أَلَمْ نَجْعَل لَّهُۥ عَيْنَيْنِ",
        transliteration: "Alam naj'al lahoo 'aynayn",
        translation: "Ne lui avons Nous pas assigné deux yeux,",
        words: [
          { ar: "أَلَمْ" },
          { ar: "نَجْعَل" },
          { ar: "لَّهُۥ" },
          { ar: "عَيْنَيْنِ" }
        ],
      },
      {
        arabic: "وَلِسَانًۭا وَشَفَتَيْنِ",
        transliteration: "Wa lisaananw wa shafatayn",
        translation: "et une langue et deux lèvres?",
        words: [
          { ar: "وَلِسَانًۭا" },
          { ar: "وَشَفَتَيْنِ" }
        ],
      },
      {
        arabic: "وَهَدَيْنَٰهُ ٱلنَّجْدَيْنِ",
        transliteration: "Wa hadaynaahun najdayn",
        translation: "Ne l'avons-Nous pas guidé aux deux voies.",
        words: [
          { ar: "وَهَدَيْنَٰهُ" },
          { ar: "ٱلنَّجْدَيْنِ" }
        ],
      },
      {
        arabic: "فَلَا ٱقْتَحَمَ ٱلْعَقَبَةَ",
        transliteration: "Falaq tahamal-'aqabah",
        translation: "Or, il ne s'engage pas dans la voie difficile!",
        words: [
          { ar: "فَلَا" },
          { ar: "ٱقْتَحَمَ" },
          { ar: "ٱلْعَقَبَةَ" }
        ],
      },
      {
        arabic: "وَمَآ أَدْرَىٰكَ مَا ٱلْعَقَبَةُ",
        transliteration: "Wa maaa adraaka mal'aqabah",
        translation: "Et qui te dira ce qu'est la voie difficile?",
        words: [
          { ar: "وَمَآ" },
          { ar: "أَدْرَىٰكَ" },
          { ar: "مَا" },
          { ar: "ٱلْعَقَبَةُ" }
        ],
      },
      {
        arabic: "فَكُّ رَقَبَةٍ",
        transliteration: "Fakku raqabah",
        translation: "C'est délier un joug [affranchir un esclave],",
        words: [
          { ar: "فَكُّ" },
          { ar: "رَقَبَةٍ" }
        ],
      },
      {
        arabic: "أَوْ إِطْعَٰمٌۭ فِى يَوْمٍۢ ذِى مَسْغَبَةٍۢ",
        transliteration: "Aw it'aamun fee yawmin zee masghabah",
        translation: "ou nourrir, en un jour de famine,",
        words: [
          { ar: "أَوْ" },
          { ar: "إِطْعَٰمٌۭ" },
          { ar: "فِى" },
          { ar: "يَوْمٍۢ" },
          { ar: "ذِى" },
          { ar: "مَسْغَبَةٍۢ" }
        ],
      },
      {
        arabic: "يَتِيمًۭا ذَا مَقْرَبَةٍ",
        transliteration: "Yateeman zaa maqrabah",
        translation: "un orphelin proche parent",
        words: [
          { ar: "يَتِيمًۭا" },
          { ar: "ذَا" },
          { ar: "مَقْرَبَةٍ" }
        ],
      },
      {
        arabic: "أَوْ مِسْكِينًۭا ذَا مَتْرَبَةٍۢ",
        transliteration: "Aw miskeenan zaa matrabah",
        translation: "ou un pauvre dans le dénuement.",
        words: [
          { ar: "أَوْ" },
          { ar: "مِسْكِينًۭا" },
          { ar: "ذَا" },
          { ar: "مَتْرَبَةٍۢ" }
        ],
      },
      {
        arabic: "ثُمَّ كَانَ مِنَ ٱلَّذِينَ ءَامَنُوا۟ وَتَوَاصَوْا۟ بِٱلصَّبْرِ وَتَوَاصَوْا۟ بِٱلْمَرْحَمَةِ",
        transliteration: "Summa kaana minal lazeena aamanoo wa tawaasaw bissabri wa tawaasaw bilmarhamah",
        translation: "Et c'est être, en outre, de ceux qui croient et s'enjoignent mutuellement l'endurance, et s'enjoignent mutuellement la miséricorde.",
        words: [
          { ar: "ثُمَّ" },
          { ar: "كَانَ" },
          { ar: "مِنَ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "ءَامَنُوا۟" },
          { ar: "وَتَوَاصَوْا۟" },
          { ar: "بِٱلصَّبْرِ" },
          { ar: "وَتَوَاصَوْا۟" },
          { ar: "بِٱلْمَرْحَمَةِ" }
        ],
      },
      {
        arabic: "أُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلْمَيْمَنَةِ",
        transliteration: "Ulaaa'ika As-haabul maimanah",
        translation: "Ceux-là sont les gens de la droite;",
        words: [
          { ar: "أُو۟لَٰٓئِكَ" },
          { ar: "أَصْحَٰبُ" },
          { ar: "ٱلْمَيْمَنَةِ" }
        ],
      },
      {
        arabic: "وَٱلَّذِينَ كَفَرُوا۟ بِـَٔايَٰتِنَا هُمْ أَصْحَٰبُ ٱلْمَشْـَٔمَةِ",
        transliteration: "Wallazeena kafaroo bi aayaatinaa hum as-haabul Mash'amah",
        translation: "alors que ceux qui ne croient pas en Nos versets sont les gens de la gauche.",
        words: [
          { ar: "وَٱلَّذِينَ" },
          { ar: "كَفَرُوا۟" },
          { ar: "بِـَٔايَٰتِنَا" },
          { ar: "هُمْ" },
          { ar: "أَصْحَٰبُ" },
          { ar: "ٱلْمَشْـَٔمَةِ" }
        ],
      },
      {
        arabic: "عَلَيْهِمْ نَارٌۭ مُّؤْصَدَةٌۢ",
        transliteration: "Alaihim naarum mu'sadah",
        translation: "Le Feu se refermera sur eux.",
        words: [
          { ar: "عَلَيْهِمْ" },
          { ar: "نَارٌۭ" },
          { ar: "مُّؤْصَدَةٌۢ" }
        ],
      }
    ],
  },
  {
    id: 30,
    number: 91,
    name: "Ash-Shams",
    nameArabic: "الشَّمۡسِ",
    meaning: "Le Soleil",
    verses: 15,
    icon: "☀️",
    longForm: true,
    ayahs: [
      {
        arabic: "وَٱلشَّمْسِ وَضُحَىٰهَا",
        transliteration: "Wash shamsi wa duhaa haa",
        translation: "Par le soleil et par sa clarté!",
        words: [
          { ar: "وَٱلشَّمْسِ" },
          { ar: "وَضُحَىٰهَا" }
        ],
      },
      {
        arabic: "وَٱلْقَمَرِ إِذَا تَلَىٰهَا",
        transliteration: "Wal qamari izaa talaa haa",
        translation: "Et par la lune quand elle le suit!",
        words: [
          { ar: "وَٱلْقَمَرِ" },
          { ar: "إِذَا" },
          { ar: "تَلَىٰهَا" }
        ],
      },
      {
        arabic: "وَٱلنَّهَارِ إِذَا جَلَّىٰهَا",
        transliteration: "Wannahaari izaa jallaa haa",
        translation: "Et par le jour quand il l'éclaire!",
        words: [
          { ar: "وَٱلنَّهَارِ" },
          { ar: "إِذَا" },
          { ar: "جَلَّىٰهَا" }
        ],
      },
      {
        arabic: "وَٱلَّيْلِ إِذَا يَغْشَىٰهَا",
        transliteration: "Wallaili izaa yaghshaa haa",
        translation: "Et par la nuit quand elle l'enveloppe!",
        words: [
          { ar: "وَٱلَّيْلِ" },
          { ar: "إِذَا" },
          { ar: "يَغْشَىٰهَا" }
        ],
      },
      {
        arabic: "وَٱلسَّمَآءِ وَمَا بَنَىٰهَا",
        transliteration: "Wassamaaa'i wa maa banaahaa",
        translation: "Et par le ciel et Celui qui l'a construit!",
        words: [
          { ar: "وَٱلسَّمَآءِ" },
          { ar: "وَمَا" },
          { ar: "بَنَىٰهَا" }
        ],
      },
      {
        arabic: "وَٱلْأَرْضِ وَمَا طَحَىٰهَا",
        transliteration: "Wal ardi wa maa tahaahaa",
        translation: "Et par la terre et Celui qui l'a étendue!",
        words: [
          { ar: "وَٱلْأَرْضِ" },
          { ar: "وَمَا" },
          { ar: "طَحَىٰهَا" }
        ],
      },
      {
        arabic: "وَنَفْسٍۢ وَمَا سَوَّىٰهَا",
        transliteration: "Wa nafsinw wa maa sawwaahaa",
        translation: "Et par l'âme et Celui qui l'a harmonieusement façonnée;",
        words: [
          { ar: "وَنَفْسٍۢ" },
          { ar: "وَمَا" },
          { ar: "سَوَّىٰهَا" }
        ],
      },
      {
        arabic: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَىٰهَا",
        transliteration: "Fa-alhamahaa fujoorahaa wa taqwaahaa",
        translation: "et lui a alors inspiré son immoralité, de même que sa piété!",
        words: [
          { ar: "فَأَلْهَمَهَا" },
          { ar: "فُجُورَهَا" },
          { ar: "وَتَقْوَىٰهَا" }
        ],
      },
      {
        arabic: "قَدْ أَفْلَحَ مَن زَكَّىٰهَا",
        transliteration: "Qad aflaha man zakkaahaa",
        translation: "A réussi, certes, celui qui la purifie.",
        words: [
          { ar: "قَدْ" },
          { ar: "أَفْلَحَ" },
          { ar: "مَن" },
          { ar: "زَكَّىٰهَا" }
        ],
      },
      {
        arabic: "وَقَدْ خَابَ مَن دَسَّىٰهَا",
        transliteration: "Wa qad khaaba man dassaahaa",
        translation: "Et est perdu, certes, celui qui la corrompt.",
        words: [
          { ar: "وَقَدْ" },
          { ar: "خَابَ" },
          { ar: "مَن" },
          { ar: "دَسَّىٰهَا" }
        ],
      },
      {
        arabic: "كَذَّبَتْ ثَمُودُ بِطَغْوَىٰهَآ",
        transliteration: "Kazzabat Samoodu bi taghwaahaaa",
        translation: "Les Thamûd, par leur transgression, ont crié au mensonge,",
        words: [
          { ar: "كَذَّبَتْ" },
          { ar: "ثَمُودُ" },
          { ar: "بِطَغْوَىٰهَآ" }
        ],
      },
      {
        arabic: "إِذِ ٱنۢبَعَثَ أَشْقَىٰهَا",
        transliteration: "Izim ba'asa ashqaahaa",
        translation: "lorsque le plus misérable d'entre eux se leva (pour tuer la chamelle)",
        words: [
          { ar: "إِذِ" },
          { ar: "ٱنۢبَعَثَ" },
          { ar: "أَشْقَىٰهَا" }
        ],
      },
      {
        arabic: "فَقَالَ لَهُمْ رَسُولُ ٱللَّهِ نَاقَةَ ٱللَّهِ وَسُقْيَٰهَا",
        transliteration: "Faqaala lahum Rasoolul laahi naaqatal laahi wa suqiyaahaa",
        translation: "Le Messager d'Allah leur avait dit: «La chamelle d'Allah! Laissez-la boire.",
        words: [
          { ar: "فَقَالَ" },
          { ar: "لَهُمْ" },
          { ar: "رَسُولُ" },
          { ar: "ٱللَّهِ" },
          { ar: "نَاقَةَ" },
          { ar: "ٱللَّهِ" },
          { ar: "وَسُقْيَٰهَا" }
        ],
      },
      {
        arabic: "فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنۢبِهِمْ فَسَوَّىٰهَا",
        transliteration: "Fakazzaboohu fa'aqaroohaa fadamdama 'alaihim Rabbuhum bizambihim fasaw waahaa",
        translation: "Mais, ils le traitèrent de menteur, et la tuèrent. Leur Seigneur les détruisit donc, pour leur péché et étendit Son châtiment sur tous.",
        words: [
          { ar: "فَكَذَّبُوهُ" },
          { ar: "فَعَقَرُوهَا" },
          { ar: "فَدَمْدَمَ" },
          { ar: "عَلَيْهِمْ" },
          { ar: "رَبُّهُم" },
          { ar: "بِذَنۢبِهِمْ" },
          { ar: "فَسَوَّىٰهَا" }
        ],
      },
      {
        arabic: "وَلَا يَخَافُ عُقْبَٰهَا",
        transliteration: "Wa laa yakhaafu'uqbaahaa",
        translation: "Et Allah n'a aucune crainte des conséquences.",
        words: [
          { ar: "وَلَا" },
          { ar: "يَخَافُ" },
          { ar: "عُقْبَٰهَا" }
        ],
      }
    ],
  },
  {
    id: 31,
    number: 92,
    name: "Al-Lail",
    nameArabic: "اللَّيۡلِ",
    meaning: "La Nuit",
    verses: 21,
    icon: "🌙",
    longForm: true,
    ayahs: [
      {
        arabic: "وَٱلَّيْلِ إِذَا يَغْشَىٰ",
        transliteration: "Wallaili izaa yaghshaa",
        translation: "Par la nuit quand elle enveloppe tout!",
        words: [
          { ar: "وَٱلَّيْلِ" },
          { ar: "إِذَا" },
          { ar: "يَغْشَىٰ" }
        ],
      },
      {
        arabic: "وَٱلنَّهَارِ إِذَا تَجَلَّىٰ",
        transliteration: "Wannahaari izaa tajalla",
        translation: "Par le jour quand il éclaire!",
        words: [
          { ar: "وَٱلنَّهَارِ" },
          { ar: "إِذَا" },
          { ar: "تَجَلَّىٰ" }
        ],
      },
      {
        arabic: "وَمَا خَلَقَ ٱلذَّكَرَ وَٱلْأُنثَىٰٓ",
        transliteration: "Wa maa khalaqaz zakara wal unthaa",
        translation: "Et par ce qu'Il a créé, mâle et femelle!",
        words: [
          { ar: "وَمَا" },
          { ar: "خَلَقَ" },
          { ar: "ٱلذَّكَرَ" },
          { ar: "وَٱلْأُنثَىٰٓ" }
        ],
      },
      {
        arabic: "إِنَّ سَعْيَكُمْ لَشَتَّىٰ",
        transliteration: "Inna sa'yakum lashattaa",
        translation: "Vos efforts sont divergents.",
        words: [
          { ar: "إِنَّ" },
          { ar: "سَعْيَكُمْ" },
          { ar: "لَشَتَّىٰ" }
        ],
      },
      {
        arabic: "فَأَمَّا مَنْ أَعْطَىٰ وَٱتَّقَىٰ",
        transliteration: "Fa ammaa man a'taa wattaqaa",
        translation: "Celui qui donne et craint (Allah)",
        words: [
          { ar: "فَأَمَّا" },
          { ar: "مَنْ" },
          { ar: "أَعْطَىٰ" },
          { ar: "وَٱتَّقَىٰ" }
        ],
      },
      {
        arabic: "وَصَدَّقَ بِٱلْحُسْنَىٰ",
        transliteration: "Wa saddaqa bil husnaa",
        translation: "et déclare véridique la plus belle récompense",
        words: [
          { ar: "وَصَدَّقَ" },
          { ar: "بِٱلْحُسْنَىٰ" }
        ],
      },
      {
        arabic: "فَسَنُيَسِّرُهُۥ لِلْيُسْرَىٰ",
        transliteration: "Fasanu yassiruhoo lilyusraa",
        translation: "Nous lui faciliterons la voie au plus grand bonheur.",
        words: [
          { ar: "فَسَنُيَسِّرُهُۥ" },
          { ar: "لِلْيُسْرَىٰ" }
        ],
      },
      {
        arabic: "وَأَمَّا مَنۢ بَخِلَ وَٱسْتَغْنَىٰ",
        transliteration: "Wa ammaa mam bakhila wastaghnaa",
        translation: "Et quant à celui qui est avare, se dispense (de l'adoration d'Allah),",
        words: [
          { ar: "وَأَمَّا" },
          { ar: "مَنۢ" },
          { ar: "بَخِلَ" },
          { ar: "وَٱسْتَغْنَىٰ" }
        ],
      },
      {
        arabic: "وَكَذَّبَ بِٱلْحُسْنَىٰ",
        transliteration: "Wa kazzaba bil husnaa",
        translation: "et traite de mensonge la plus belle récompense,",
        words: [
          { ar: "وَكَذَّبَ" },
          { ar: "بِٱلْحُسْنَىٰ" }
        ],
      },
      {
        arabic: "فَسَنُيَسِّرُهُۥ لِلْعُسْرَىٰ",
        transliteration: "Fasanu yassiruhoo lil'usraa",
        translation: "Nous lui faciliterons la voie à la plus grande difficulté,",
        words: [
          { ar: "فَسَنُيَسِّرُهُۥ" },
          { ar: "لِلْعُسْرَىٰ" }
        ],
      },
      {
        arabic: "وَمَا يُغْنِى عَنْهُ مَالُهُۥٓ إِذَا تَرَدَّىٰٓ",
        transliteration: "Wa maa yughnee 'anhu maaluhooo izaa taraddaa",
        translation: "et à rien ne lui serviront ses richesses quand il sera jeté (au Feu).",
        words: [
          { ar: "وَمَا" },
          { ar: "يُغْنِى" },
          { ar: "عَنْهُ" },
          { ar: "مَالُهُۥٓ" },
          { ar: "إِذَا" },
          { ar: "تَرَدَّىٰٓ" }
        ],
      },
      {
        arabic: "إِنَّ عَلَيْنَا لَلْهُدَىٰ",
        transliteration: "Inna 'alainaa lal hudaa",
        translation: "C'est à Nous, certes, de guider;",
        words: [
          { ar: "إِنَّ" },
          { ar: "عَلَيْنَا" },
          { ar: "لَلْهُدَىٰ" }
        ],
      },
      {
        arabic: "وَإِنَّ لَنَا لَلْءَاخِرَةَ وَٱلْأُولَىٰ",
        transliteration: "Wa inna lanaa lal Aakhirata wal oolaa",
        translation: "à Nous appartient, certes, la vie dernière et la vie présente.",
        words: [
          { ar: "وَإِنَّ" },
          { ar: "لَنَا" },
          { ar: "لَلْءَاخِرَةَ" },
          { ar: "وَٱلْأُولَىٰ" }
        ],
      },
      {
        arabic: "فَأَنذَرْتُكُمْ نَارًۭا تَلَظَّىٰ",
        transliteration: "Fa anzartukum naaran talazzaa",
        translation: "Je vous ai donc avertis d'un Feu qui flambe",
        words: [
          { ar: "فَأَنذَرْتُكُمْ" },
          { ar: "نَارًۭا" },
          { ar: "تَلَظَّىٰ" }
        ],
      },
      {
        arabic: "لَا يَصْلَىٰهَآ إِلَّا ٱلْأَشْقَى",
        transliteration: "Laa yaslaahaaa illal ashqaa",
        translation: "où ne brûlera que le damné,",
        words: [
          { ar: "لَا" },
          { ar: "يَصْلَىٰهَآ" },
          { ar: "إِلَّا" },
          { ar: "ٱلْأَشْقَى" }
        ],
      },
      {
        arabic: "ٱلَّذِى كَذَّبَ وَتَوَلَّىٰ",
        transliteration: "Allazee kazzaba wa tawallaa",
        translation: "qui dément et tourne le dos;",
        words: [
          { ar: "ٱلَّذِى" },
          { ar: "كَذَّبَ" },
          { ar: "وَتَوَلَّىٰ" }
        ],
      },
      {
        arabic: "وَسَيُجَنَّبُهَا ٱلْأَتْقَى",
        transliteration: "Wa sa yujannnabuhal atqaa",
        translation: "alors qu'en sera écarté le pieux,",
        words: [
          { ar: "وَسَيُجَنَّبُهَا" },
          { ar: "ٱلْأَتْقَى" }
        ],
      },
      {
        arabic: "ٱلَّذِى يُؤْتِى مَالَهُۥ يَتَزَكَّىٰ",
        transliteration: "Allazee yu'tee maalahoo yatazakkaa",
        translation: "qui donne ses biens pour se purifier",
        words: [
          { ar: "ٱلَّذِى" },
          { ar: "يُؤْتِى" },
          { ar: "مَالَهُۥ" },
          { ar: "يَتَزَكَّىٰ" }
        ],
      },
      {
        arabic: "وَمَا لِأَحَدٍ عِندَهُۥ مِن نِّعْمَةٍۢ تُجْزَىٰٓ",
        transliteration: "Wa maa li ahadin 'indahoo min ni'matin tujzaaa",
        translation: "et auprès de qui personne ne profite d'un bienfait intéressé,",
        words: [
          { ar: "وَمَا" },
          { ar: "لِأَحَدٍ" },
          { ar: "عِندَهُۥ" },
          { ar: "مِن" },
          { ar: "نِّعْمَةٍۢ" },
          { ar: "تُجْزَىٰٓ" }
        ],
      },
      {
        arabic: "إِلَّا ٱبْتِغَآءَ وَجْهِ رَبِّهِ ٱلْأَعْلَىٰ",
        transliteration: "Illab tighaaa'a wajhi rabbihil a 'laa",
        translation: "mais seulement pour la recherche de La Face de son Seigneur le Très Haut.",
        words: [
          { ar: "إِلَّا" },
          { ar: "ٱبْتِغَآءَ" },
          { ar: "وَجْهِ" },
          { ar: "رَبِّهِ" },
          { ar: "ٱلْأَعْلَىٰ" }
        ],
      },
      {
        arabic: "وَلَسَوْفَ يَرْضَىٰ",
        transliteration: "Wa lasawfa yardaa",
        translation: "Et certes, il sera bientôt satisfait!",
        words: [
          { ar: "وَلَسَوْفَ" },
          { ar: "يَرْضَىٰ" }
        ],
      }
    ],
  },
  {
    id: 32,
    number: 96,
    name: "Al-Alaq",
    nameArabic: "العَلَقِ",
    meaning: "L'Adhérence",
    verses: 19,
    icon: "🩸",
    longForm: true,
    ayahs: [
      {
        arabic: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
        transliteration: "Iqra bismi rab bikal lazee khalaq",
        translation: "Lis, au nom de ton Seigneur qui a créé,",
        words: [
          { ar: "ٱقْرَأْ" },
          { ar: "بِٱسْمِ" },
          { ar: "رَبِّكَ" },
          { ar: "ٱلَّذِى" },
          { ar: "خَلَقَ" }
        ],
      },
      {
        arabic: "خَلَقَ ٱلْإِنسَٰنَ مِنْ عَلَقٍ",
        transliteration: "Khalaqal insaana min 'alaq",
        translation: "qui a créé l'homme d'une adhérence.",
        words: [
          { ar: "خَلَقَ" },
          { ar: "ٱلْإِنسَٰنَ" },
          { ar: "مِنْ" },
          { ar: "عَلَقٍ" }
        ],
      },
      {
        arabic: "ٱقْرَأْ وَرَبُّكَ ٱلْأَكْرَمُ",
        transliteration: "Iqra wa rab bukal akram",
        translation: "Lis! Ton Seigneur est le Très Noble,",
        words: [
          { ar: "ٱقْرَأْ" },
          { ar: "وَرَبُّكَ" },
          { ar: "ٱلْأَكْرَمُ" }
        ],
      },
      {
        arabic: "ٱلَّذِى عَلَّمَ بِٱلْقَلَمِ",
        transliteration: "Al lazee 'allama bil qalam",
        translation: "qui a enseigné par la plume [le calame],",
        words: [
          { ar: "ٱلَّذِى" },
          { ar: "عَلَّمَ" },
          { ar: "بِٱلْقَلَمِ" }
        ],
      },
      {
        arabic: "عَلَّمَ ٱلْإِنسَٰنَ مَا لَمْ يَعْلَمْ",
        transliteration: "'Al lamal insaana ma lam y'alam",
        translation: "a enseigné à l'homme ce qu'il ne savait pas.",
        words: [
          { ar: "عَلَّمَ" },
          { ar: "ٱلْإِنسَٰنَ" },
          { ar: "مَا" },
          { ar: "لَمْ" },
          { ar: "يَعْلَمْ" }
        ],
      },
      {
        arabic: "كَلَّآ إِنَّ ٱلْإِنسَٰنَ لَيَطْغَىٰٓ",
        transliteration: "Kallaa innal insaana layatghaa",
        translation: "Prenez-garde! Vraiment l'homme devient rebelle,",
        words: [
          { ar: "كَلَّآ" },
          { ar: "إِنَّ" },
          { ar: "ٱلْإِنسَٰنَ" },
          { ar: "لَيَطْغَىٰٓ" }
        ],
      },
      {
        arabic: "أَن رَّءَاهُ ٱسْتَغْنَىٰٓ",
        transliteration: "Ar-ra aahus taghnaa",
        translation: "dès qu'il estime qu'il peut se suffire à lui-même (à cause de sa richesse).",
        words: [
          { ar: "أَن" },
          { ar: "رَّءَاهُ" },
          { ar: "ٱسْتَغْنَىٰٓ" }
        ],
      },
      {
        arabic: "إِنَّ إِلَىٰ رَبِّكَ ٱلرُّجْعَىٰٓ",
        transliteration: "Innna ilaa rabbikar ruj'aa",
        translation: "Mais, c'est vers ton Seigneur qu'est le retour.",
        words: [
          { ar: "إِنَّ" },
          { ar: "إِلَىٰ" },
          { ar: "رَبِّكَ" },
          { ar: "ٱلرُّجْعَىٰٓ" }
        ],
      },
      {
        arabic: "أَرَءَيْتَ ٱلَّذِى يَنْهَىٰ",
        transliteration: "Ara-aital lazee yanhaa",
        translation: "As-tu vu celui qui interdit",
        words: [
          { ar: "أَرَءَيْتَ" },
          { ar: "ٱلَّذِى" },
          { ar: "يَنْهَىٰ" }
        ],
      },
      {
        arabic: "عَبْدًا إِذَا صَلَّىٰٓ",
        transliteration: "'Abdan iza sallaa",
        translation: "à un serviteur d'Allah [Muhammad] de célébrer la Salât?",
        words: [
          { ar: "عَبْدًا" },
          { ar: "إِذَا" },
          { ar: "صَلَّىٰٓ" }
        ],
      },
      {
        arabic: "أَرَءَيْتَ إِن كَانَ عَلَى ٱلْهُدَىٰٓ",
        transliteration: "Ara-aita in kana 'alal hudaa",
        translation: "Vois-tu s'il est sur la bonne voie,",
        words: [
          { ar: "أَرَءَيْتَ" },
          { ar: "إِن" },
          { ar: "كَانَ" },
          { ar: "عَلَى" },
          { ar: "ٱلْهُدَىٰٓ" }
        ],
      },
      {
        arabic: "أَوْ أَمَرَ بِٱلتَّقْوَىٰٓ",
        transliteration: "Au amara bit taqwaa",
        translation: "ou s'il ordonne la piété?",
        words: [
          { ar: "أَوْ" },
          { ar: "أَمَرَ" },
          { ar: "بِٱلتَّقْوَىٰٓ" }
        ],
      },
      {
        arabic: "أَرَءَيْتَ إِن كَذَّبَ وَتَوَلَّىٰٓ",
        transliteration: "Ara-aita in kaz zaba wa ta walla",
        translation: "Vois-tu s'il dément et tourne le dos?",
        words: [
          { ar: "أَرَءَيْتَ" },
          { ar: "إِن" },
          { ar: "كَذَّبَ" },
          { ar: "وَتَوَلَّىٰٓ" }
        ],
      },
      {
        arabic: "أَلَمْ يَعْلَم بِأَنَّ ٱللَّهَ يَرَىٰ",
        transliteration: "Alam y'alam bi-an nal lahaa yaraa",
        translation: "Ne sait-il pas que vraiment Allah voit?",
        words: [
          { ar: "أَلَمْ" },
          { ar: "يَعْلَم" },
          { ar: "بِأَنَّ" },
          { ar: "ٱللَّهَ" },
          { ar: "يَرَىٰ" }
        ],
      },
      {
        arabic: "كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًۢا بِٱلنَّاصِيَةِ",
        transliteration: "Kalla la illam yantahi la nasfa'am bin nasiyah",
        translation: "Mais non! S'il ne cesse pas, Nous le saisirons certes, par le toupet,",
        words: [
          { ar: "كَلَّا" },
          { ar: "لَئِن" },
          { ar: "لَّمْ" },
          { ar: "يَنتَهِ" },
          { ar: "لَنَسْفَعًۢا" },
          { ar: "بِٱلنَّاصِيَةِ" }
        ],
      },
      {
        arabic: "نَاصِيَةٍۢ كَٰذِبَةٍ خَاطِئَةٍۢ",
        transliteration: "Nasiyatin kazi batin khaatiyah",
        translation: "le toupet d'un menteur, d'un pécheur.",
        words: [
          { ar: "نَاصِيَةٍۢ" },
          { ar: "كَٰذِبَةٍ" },
          { ar: "خَاطِئَةٍۢ" }
        ],
      },
      {
        arabic: "فَلْيَدْعُ نَادِيَهُۥ",
        transliteration: "Fal yad'u naadiyah",
        translation: "Qu'il appelle donc son assemblée.",
        words: [
          { ar: "فَلْيَدْعُ" },
          { ar: "نَادِيَهُۥ" }
        ],
      },
      {
        arabic: "سَنَدْعُ ٱلزَّبَانِيَةَ",
        transliteration: "Sanad 'uz zabaaniyah",
        translation: "Nous appellerons les gardiens [de l'Enfer].",
        words: [
          { ar: "سَنَدْعُ" },
          { ar: "ٱلزَّبَانِيَةَ" }
        ],
      },
      {
        arabic: "كَلَّا لَا تُطِعْهُ وَٱسْجُدْ وَٱقْتَرِب ۩",
        transliteration: "Kalla; la tuti'hu wasjud waqtarib",
        translation: "Non! Ne lui obéis pas; mais prosterne-toi et rapproche-toi.",
        words: [
          { ar: "كَلَّا" },
          { ar: "لَا" },
          { ar: "تُطِعْهُ" },
          { ar: "وَٱسْجُدْ" },
          { ar: "وَٱقْتَرِب" },
          { ar: "۩" }
        ],
      }
    ],
  },
  {
    id: 33,
    number: 98,
    name: "Al-Bayyina",
    nameArabic: "البَيِّنَةِ",
    meaning: "La Preuve",
    verses: 8,
    icon: "📜",
    longForm: true,
    ayahs: [
      {
        arabic: "لَمْ يَكُنِ ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَٰبِ وَٱلْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ ٱلْبَيِّنَةُ",
        transliteration: "Lam ya kunil lazeena kafaru min ahlil kitaabi wal mushri keena mun fak keena hattaa ta-tiya humul bayyinah",
        translation: "Les infidèles parmi les gens du Livre, ainsi que les Associateurs, ne cesseront pas de mécroire jusqu'à ce que leur vienne la Preuve évidente:",
        words: [
          { ar: "لَمْ" },
          { ar: "يَكُنِ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "كَفَرُوا۟" },
          { ar: "مِنْ" },
          { ar: "أَهْلِ" },
          { ar: "ٱلْكِتَٰبِ" },
          { ar: "وَٱلْمُشْرِكِينَ" },
          { ar: "مُنفَكِّينَ" },
          { ar: "حَتَّىٰ" },
          { ar: "تَأْتِيَهُمُ" },
          { ar: "ٱلْبَيِّنَةُ" }
        ],
      },
      {
        arabic: "رَسُولٌۭ مِّنَ ٱللَّهِ يَتْلُوا۟ صُحُفًۭا مُّطَهَّرَةًۭ",
        transliteration: "Rasoolum minal laahi yatlu suhufam mutahharah",
        translation: "un Messager, de la part d'Allah, qui leur récite des feuilles purifiées,",
        words: [
          { ar: "رَسُولٌۭ" },
          { ar: "مِّنَ" },
          { ar: "ٱللَّهِ" },
          { ar: "يَتْلُوا۟" },
          { ar: "صُحُفًۭا" },
          { ar: "مُّطَهَّرَةًۭ" }
        ],
      },
      {
        arabic: "فِيهَا كُتُبٌۭ قَيِّمَةٌۭ",
        transliteration: "Feeha kutubun qaiyimah",
        translation: "dans lesquelles se trouvent des prescriptions d'une rectitude parfaite.",
        words: [
          { ar: "فِيهَا" },
          { ar: "كُتُبٌۭ" },
          { ar: "قَيِّمَةٌۭ" }
        ],
      },
      {
        arabic: "وَمَا تَفَرَّقَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ إِلَّا مِنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَةُ",
        transliteration: "Wa maa tafarraqal lazeena ootul kitaaba il-la mim b'adi ma jaa-at humul baiyyinah",
        translation: "Et ceux à qui le Livre a été donné ne se sont divisés qu'après que la preuve leur fut venue.",
        words: [
          { ar: "وَمَا" },
          { ar: "تَفَرَّقَ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "أُوتُوا۟" },
          { ar: "ٱلْكِتَٰبَ" },
          { ar: "إِلَّا" },
          { ar: "مِنۢ" },
          { ar: "بَعْدِ" },
          { ar: "مَا" },
          { ar: "جَآءَتْهُمُ" },
          { ar: "ٱلْبَيِّنَةُ" }
        ],
      },
      {
        arabic: "وَمَآ أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ وَيُقِيمُوا۟ ٱلصَّلَوٰةَ وَيُؤْتُوا۟ ٱلزَّكَوٰةَ ۚ وَذَٰلِكَ دِينُ ٱلْقَيِّمَةِ",
        transliteration: "Wa maa umiroo il-la liy'abu dul laaha mukhliseena lahud-deena huna faa-a wa yuqeemus salaahta wa yu-tuz zakaata; wa zaalika deenul qaiyimah",
        translation: "Il ne leur a été commandé, cependant, que d'adorer Allah, Lui vouant un culte exclusif, d'accomplir la Salât et d'acquitter la Zakât. Et voilà la religion de droiture.",
        words: [
          { ar: "وَمَآ" },
          { ar: "أُمِرُوٓا۟" },
          { ar: "إِلَّا" },
          { ar: "لِيَعْبُدُوا۟" },
          { ar: "ٱللَّهَ" },
          { ar: "مُخْلِصِينَ" },
          { ar: "لَهُ" },
          { ar: "ٱلدِّينَ" },
          { ar: "حُنَفَآءَ" },
          { ar: "وَيُقِيمُوا۟" },
          { ar: "ٱلصَّلَوٰةَ" },
          { ar: "وَيُؤْتُوا۟" },
          { ar: "ٱلزَّكَوٰةَ" },
          { ar: "ۚ" },
          { ar: "وَذَٰلِكَ" },
          { ar: "دِينُ" },
          { ar: "ٱلْقَيِّمَةِ" }
        ],
      },
      {
        arabic: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَٰبِ وَٱلْمُشْرِكِينَ فِى نَارِ جَهَنَّمَ خَٰلِدِينَ فِيهَآ ۚ أُو۟لَٰٓئِكَ هُمْ شَرُّ ٱلْبَرِيَّةِ",
        transliteration: "Innal lazeena kafaru min ahlil kitaabi wal mushri keena fee nari jahan nama khaali deena feeha; ulaa-ika hum shar rul ba reeyah",
        translation: "Les infidèles parmi les gens du Livre, ainsi que les Associateurs iront au feu de l'Enfer, pour y demeurer éternellement. De toute la création, ce sont eux les pires.",
        words: [
          { ar: "إِنَّ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "كَفَرُوا۟" },
          { ar: "مِنْ" },
          { ar: "أَهْلِ" },
          { ar: "ٱلْكِتَٰبِ" },
          { ar: "وَٱلْمُشْرِكِينَ" },
          { ar: "فِى" },
          { ar: "نَارِ" },
          { ar: "جَهَنَّمَ" },
          { ar: "خَٰلِدِينَ" },
          { ar: "فِيهَآ" },
          { ar: "ۚ" },
          { ar: "أُو۟لَٰٓئِكَ" },
          { ar: "هُمْ" },
          { ar: "شَرُّ" },
          { ar: "ٱلْبَرِيَّةِ" }
        ],
      },
      {
        arabic: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ أُو۟لَٰٓئِكَ هُمْ خَيْرُ ٱلْبَرِيَّةِ",
        transliteration: "Innal lazeena aamanu wa 'amilus saalihaati ula-ika hum khairul bareey yah",
        translation: "Quant à ceux qui croient et accomplissent les bonnes œuvres, ce sont les meilleurs de toute la création.",
        words: [
          { ar: "إِنَّ" },
          { ar: "ٱلَّذِينَ" },
          { ar: "ءَامَنُوا۟" },
          { ar: "وَعَمِلُوا۟" },
          { ar: "ٱلصَّٰلِحَٰتِ" },
          { ar: "أُو۟لَٰٓئِكَ" },
          { ar: "هُمْ" },
          { ar: "خَيْرُ" },
          { ar: "ٱلْبَرِيَّةِ" }
        ],
      },
      {
        arabic: "جَزَآؤُهُمْ عِندَ رَبِّهِمْ جَنَّٰتُ عَدْنٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَآ أَبَدًۭا ۖ رَّضِىَ ٱللَّهُ عَنْهُمْ وَرَضُوا۟ عَنْهُ ۚ ذَٰلِكَ لِمَنْ خَشِىَ رَبَّهُۥ",
        transliteration: "Jazaa-uhum inda rabbihim jan naatu 'adnin tajree min tahtihal an haaru khalideena feeha abada; radiy-yallaahu 'anhum wa ra du 'an zaalika liman khashiya rabbah.",
        translation: "Leur récompense auprès d'Allah sera les Jardins de séjour, sous lesquels coulent les ruisseaux, pour y demeurer éternellement. Allah les agrée et ils L'agréent. Telle sera [la récompense] de celui qui craint son Seigneur.",
        words: [
          { ar: "جَزَآؤُهُمْ" },
          { ar: "عِندَ" },
          { ar: "رَبِّهِمْ" },
          { ar: "جَنَّٰتُ" },
          { ar: "عَدْنٍۢ" },
          { ar: "تَجْرِى" },
          { ar: "مِن" },
          { ar: "تَحْتِهَا" },
          { ar: "ٱلْأَنْهَٰرُ" },
          { ar: "خَٰلِدِينَ" },
          { ar: "فِيهَآ" },
          { ar: "أَبَدًۭا" },
          { ar: "ۖ" },
          { ar: "رَّضِىَ" },
          { ar: "ٱللَّهُ" },
          { ar: "عَنْهُمْ" },
          { ar: "وَرَضُوا۟" },
          { ar: "عَنْهُ" },
          { ar: "ۚ" },
          { ar: "ذَٰلِكَ" },
          { ar: "لِمَنْ" },
          { ar: "خَشِىَ" },
          { ar: "رَبَّهُۥ" }
        ],
      }
    ],
  },
  {
    id: 34,
    number: 99,
    name: "Az-Zalzala",
    nameArabic: "الزَّلۡزَلَةِ",
    meaning: "La Secousse",
    verses: 8,
    icon: "🌍",
    longForm: true,
    ayahs: [
      {
        arabic: "إِذَا زُلْزِلَتِ ٱلْأَرْضُ زِلْزَالَهَا",
        transliteration: "Izaa zul zilatil ardu zil zaalaha",
        translation: "Quand la terre tremblera d'un violent tremblement,",
        words: [
          { ar: "إِذَا" },
          { ar: "زُلْزِلَتِ" },
          { ar: "ٱلْأَرْضُ" },
          { ar: "زِلْزَالَهَا" }
        ],
      },
      {
        arabic: "وَأَخْرَجَتِ ٱلْأَرْضُ أَثْقَالَهَا",
        transliteration: "Wa akh rajatil ardu athqaalaha",
        translation: "et que la terre fera sortir ses fardeaux,",
        words: [
          { ar: "وَأَخْرَجَتِ" },
          { ar: "ٱلْأَرْضُ" },
          { ar: "أَثْقَالَهَا" }
        ],
      },
      {
        arabic: "وَقَالَ ٱلْإِنسَٰنُ مَا لَهَا",
        transliteration: "Wa qaalal insaanu ma laha",
        translation: "et que l'homme dira: «Qu'a-t-elle?»",
        words: [
          { ar: "وَقَالَ" },
          { ar: "ٱلْإِنسَٰنُ" },
          { ar: "مَا" },
          { ar: "لَهَا" }
        ],
      },
      {
        arabic: "يَوْمَئِذٍۢ تُحَدِّثُ أَخْبَارَهَا",
        transliteration: "Yawmaa izin tuhad dithu akhbaaraha",
        translation: "ce jour-là, elle contera son histoire,",
        words: [
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "تُحَدِّثُ" },
          { ar: "أَخْبَارَهَا" }
        ],
      },
      {
        arabic: "بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا",
        transliteration: "Bi-anna rabbaka awhaa laha",
        translation: "selon ce que ton Seigneur lui aura révélé [ordonné].",
        words: [
          { ar: "بِأَنَّ" },
          { ar: "رَبَّكَ" },
          { ar: "أَوْحَىٰ" },
          { ar: "لَهَا" }
        ],
      },
      {
        arabic: "يَوْمَئِذٍۢ يَصْدُرُ ٱلنَّاسُ أَشْتَاتًۭا لِّيُرَوْا۟ أَعْمَٰلَهُمْ",
        transliteration: "Yawma iziy yas durun naasu ash tatal liyuraw a'maalahum",
        translation: "Ce jour-là, les gens sortiront séparément pour que leur soient montrées leurs œuvres.",
        words: [
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "يَصْدُرُ" },
          { ar: "ٱلنَّاسُ" },
          { ar: "أَشْتَاتًۭا" },
          { ar: "لِّيُرَوْا۟" },
          { ar: "أَعْمَٰلَهُمْ" }
        ],
      },
      {
        arabic: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًۭا يَرَهُۥ",
        transliteration: "Famaiy ya'mal mithqala zarratin khai raiy-yarah",
        translation: "Quiconque fait un bien fût-ce du poids d'un atome, le verra,",
        words: [
          { ar: "فَمَن" },
          { ar: "يَعْمَلْ" },
          { ar: "مِثْقَالَ" },
          { ar: "ذَرَّةٍ" },
          { ar: "خَيْرًۭا" },
          { ar: "يَرَهُۥ" }
        ],
      },
      {
        arabic: "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍۢ شَرًّۭا يَرَهُۥ",
        transliteration: "Wa maiy-y'amal mithqala zarratin sharraiy-yarah",
        translation: "et quiconque fait un mal fût-ce du poids d'un atome, le verra.",
        words: [
          { ar: "وَمَن" },
          { ar: "يَعْمَلْ" },
          { ar: "مِثْقَالَ" },
          { ar: "ذَرَّةٍۢ" },
          { ar: "شَرًّۭا" },
          { ar: "يَرَهُۥ" }
        ],
      }
    ],
  },
  {
    id: 35,
    number: 100,
    name: "Al-Aadiyaat",
    nameArabic: "العَادِيَاتِ",
    meaning: "Les Coursiers",
    verses: 11,
    icon: "🐎",
    longForm: true,
    ayahs: [
      {
        arabic: "وَٱلْعَٰدِيَٰتِ ضَبْحًۭا",
        transliteration: "Wal'aadi yaati dabha",
        translation: "Par les coursiers qui halètent,",
        words: [
          { ar: "وَٱلْعَٰدِيَٰتِ" },
          { ar: "ضَبْحًۭا" }
        ],
      },
      {
        arabic: "فَٱلْمُورِيَٰتِ قَدْحًۭا",
        transliteration: "Fal moori yaati qadha",
        translation: "qui font jaillir des étincelles,",
        words: [
          { ar: "فَٱلْمُورِيَٰتِ" },
          { ar: "قَدْحًۭا" }
        ],
      },
      {
        arabic: "فَٱلْمُغِيرَٰتِ صُبْحًۭا",
        transliteration: "Fal mugheeraati subha",
        translation: "qui attaquent au matin,",
        words: [
          { ar: "فَٱلْمُغِيرَٰتِ" },
          { ar: "صُبْحًۭا" }
        ],
      },
      {
        arabic: "فَأَثَرْنَ بِهِۦ نَقْعًۭا",
        transliteration: "Fa atharna bihee naq'a",
        translation: "et font ainsi voler la poussière,",
        words: [
          { ar: "فَأَثَرْنَ" },
          { ar: "بِهِۦ" },
          { ar: "نَقْعًۭا" }
        ],
      },
      {
        arabic: "فَوَسَطْنَ بِهِۦ جَمْعًا",
        transliteration: "Fawa satna bihee jam'a",
        translation: "et pénètrent au centre de la troupe ennemie.",
        words: [
          { ar: "فَوَسَطْنَ" },
          { ar: "بِهِۦ" },
          { ar: "جَمْعًا" }
        ],
      },
      {
        arabic: "إِنَّ ٱلْإِنسَٰنَ لِرَبِّهِۦ لَكَنُودٌۭ",
        transliteration: "Innal-insana lirabbihee lakanood",
        translation: "L'homme est, certes, ingrat envers son Seigneur;",
        words: [
          { ar: "إِنَّ" },
          { ar: "ٱلْإِنسَٰنَ" },
          { ar: "لِرَبِّهِۦ" },
          { ar: "لَكَنُودٌۭ" }
        ],
      },
      {
        arabic: "وَإِنَّهُۥ عَلَىٰ ذَٰلِكَ لَشَهِيدٌۭ",
        transliteration: "Wa innahu 'alaa zaalika la shaheed",
        translation: "et pourtant, il est certes, témoin de cela;",
        words: [
          { ar: "وَإِنَّهُۥ" },
          { ar: "عَلَىٰ" },
          { ar: "ذَٰلِكَ" },
          { ar: "لَشَهِيدٌۭ" }
        ],
      },
      {
        arabic: "وَإِنَّهُۥ لِحُبِّ ٱلْخَيْرِ لَشَدِيدٌ",
        transliteration: "Wa innahu lihubbil khairi la shadeed",
        translation: "et pour l'amour des richesses il est certes ardent.",
        words: [
          { ar: "وَإِنَّهُۥ" },
          { ar: "لِحُبِّ" },
          { ar: "ٱلْخَيْرِ" },
          { ar: "لَشَدِيدٌ" }
        ],
      },
      {
        arabic: "۞ أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِى ٱلْقُبُورِ",
        transliteration: "Afala ya'lamu iza b'uthira ma filquboor",
        translation: "Ne sait-il donc pas que lorsque ce qui est dans les tombes sera bouleversé,",
        words: [
          { ar: "۞" },
          { ar: "أَفَلَا" },
          { ar: "يَعْلَمُ" },
          { ar: "إِذَا" },
          { ar: "بُعْثِرَ" },
          { ar: "مَا" },
          { ar: "فِى" },
          { ar: "ٱلْقُبُورِ" }
        ],
      },
      {
        arabic: "وَحُصِّلَ مَا فِى ٱلصُّدُورِ",
        transliteration: "Wa hussila maa fis sudoor",
        translation: "et que sera dévoilé ce qui est dans les poitrines,",
        words: [
          { ar: "وَحُصِّلَ" },
          { ar: "مَا" },
          { ar: "فِى" },
          { ar: "ٱلصُّدُورِ" }
        ],
      },
      {
        arabic: "إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍۢ لَّخَبِيرٌۢ",
        transliteration: "Inna rabbahum bihim yauma 'izil la khabeer",
        translation: "ce jour-là, certes, leur Seigneur sera Parfaitement Connaisseur d'eux?",
        words: [
          { ar: "إِنَّ" },
          { ar: "رَبَّهُم" },
          { ar: "بِهِمْ" },
          { ar: "يَوْمَئِذٍۢ" },
          { ar: "لَّخَبِيرٌۢ" }
        ],
      }
    ],
  },
  {
    id: 36,
    number: 101,
    name: "Al-Qaari'a",
    nameArabic: "القَارِعَةِ",
    meaning: "Le Fracas",
    verses: 11,
    icon: "💥",
    longForm: true,
    ayahs: [
      {
        arabic: "ٱلْقَارِعَةُ",
        transliteration: "Al qaari'ah",
        translation: "Le fracas!",
        words: [
          { ar: "ٱلْقَارِعَةُ" }
        ],
      },
      {
        arabic: "مَا ٱلْقَارِعَةُ",
        transliteration: "Mal qaariah",
        translation: "Qu'est-ce que le fracas?",
        words: [
          { ar: "مَا" },
          { ar: "ٱلْقَارِعَةُ" }
        ],
      },
      {
        arabic: "وَمَآ أَدْرَىٰكَ مَا ٱلْقَارِعَةُ",
        transliteration: "Wa maa adraaka mal qaari'ah",
        translation: "Et qui te dira ce qu'est le fracas?",
        words: [
          { ar: "وَمَآ" },
          { ar: "أَدْرَىٰكَ" },
          { ar: "مَا" },
          { ar: "ٱلْقَارِعَةُ" }
        ],
      },
      {
        arabic: "يَوْمَ يَكُونُ ٱلنَّاسُ كَٱلْفَرَاشِ ٱلْمَبْثُوثِ",
        transliteration: "Yauma ya koonun naasu kal farashil mabthooth",
        translation: "C'est le jour où les gens seront comme des papillons éparpillés,",
        words: [
          { ar: "يَوْمَ" },
          { ar: "يَكُونُ" },
          { ar: "ٱلنَّاسُ" },
          { ar: "كَٱلْفَرَاشِ" },
          { ar: "ٱلْمَبْثُوثِ" }
        ],
      },
      {
        arabic: "وَتَكُونُ ٱلْجِبَالُ كَٱلْعِهْنِ ٱلْمَنفُوشِ",
        transliteration: "Wa ta koonul jibalu kal 'ihnil manfoosh",
        translation: "et les montagnes comme de la laine cardée;",
        words: [
          { ar: "وَتَكُونُ" },
          { ar: "ٱلْجِبَالُ" },
          { ar: "كَٱلْعِهْنِ" },
          { ar: "ٱلْمَنفُوشِ" }
        ],
      },
      {
        arabic: "فَأَمَّا مَن ثَقُلَتْ مَوَٰزِينُهُۥ",
        transliteration: "Fa-amma man thaqulat mawa zeenuh",
        translation: "quant à celui dont la balance sera lourde",
        words: [
          { ar: "فَأَمَّا" },
          { ar: "مَن" },
          { ar: "ثَقُلَتْ" },
          { ar: "مَوَٰزِينُهُۥ" }
        ],
      },
      {
        arabic: "فَهُوَ فِى عِيشَةٍۢ رَّاضِيَةٍۢ",
        transliteration: "Fahuwa fee 'ishatir raadiyah",
        translation: "il sera dans une vie agréable;",
        words: [
          { ar: "فَهُوَ" },
          { ar: "فِى" },
          { ar: "عِيشَةٍۢ" },
          { ar: "رَّاضِيَةٍۢ" }
        ],
      },
      {
        arabic: "وَأَمَّا مَنْ خَفَّتْ مَوَٰزِينُهُۥ",
        transliteration: "Wa amma man khaffat mawa zeenuh",
        translation: "et quant à celui dont la balance sera légère,",
        words: [
          { ar: "وَأَمَّا" },
          { ar: "مَنْ" },
          { ar: "خَفَّتْ" },
          { ar: "مَوَٰزِينُهُۥ" }
        ],
      },
      {
        arabic: "فَأُمُّهُۥ هَاوِيَةٌۭ",
        transliteration: "Fa-ummuhu haawiyah",
        translation: "sa mère [destination] est un abîme très profond.",
        words: [
          { ar: "فَأُمُّهُۥ" },
          { ar: "هَاوِيَةٌۭ" }
        ],
      },
      {
        arabic: "وَمَآ أَدْرَىٰكَ مَا هِيَهْ",
        transliteration: "Wa maa adraaka maa hiyah",
        translation: "Et qui te dira ce que c'est?",
        words: [
          { ar: "وَمَآ" },
          { ar: "أَدْرَىٰكَ" },
          { ar: "مَا" },
          { ar: "هِيَهْ" }
        ],
      },
      {
        arabic: "نَارٌ حَامِيَةٌۢ",
        transliteration: "Naarun hamiyah",
        translation: "C'est un Feu ardent.",
        words: [
          { ar: "نَارٌ" },
          { ar: "حَامِيَةٌۢ" }
        ],
      }
    ],
  },
  {
    id: 37,
    number: 102,
    name: "At-Takaathur",
    nameArabic: "التَّكَاثُرِ",
    meaning: "La Course aux Richesses",
    verses: 8,
    icon: "💰",
    longForm: true,
    ayahs: [
      {
        arabic: "أَلْهَىٰكُمُ ٱلتَّكَاثُرُ",
        transliteration: "Al haaku mut takathur",
        translation: "La course aux richesses vous distrait,",
        words: [
          { ar: "أَلْهَىٰكُمُ" },
          { ar: "ٱلتَّكَاثُرُ" }
        ],
      },
      {
        arabic: "حَتَّىٰ زُرْتُمُ ٱلْمَقَابِرَ",
        transliteration: "Hatta zurtumul-maqaabir",
        translation: "jusqu'à ce que vous visitiez les tombes.",
        words: [
          { ar: "حَتَّىٰ" },
          { ar: "زُرْتُمُ" },
          { ar: "ٱلْمَقَابِرَ" }
        ],
      },
      {
        arabic: "كَلَّا سَوْفَ تَعْلَمُونَ",
        transliteration: "Kalla sawfa ta'lamoon",
        translation: "Mais non! Vous saurez bientôt!",
        words: [
          { ar: "كَلَّا" },
          { ar: "سَوْفَ" },
          { ar: "تَعْلَمُونَ" }
        ],
      },
      {
        arabic: "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ",
        transliteration: "Thumma kalla sawfa ta'lamoon",
        translation: "(Encore une fois)! Vous saurez bientôt!",
        words: [
          { ar: "ثُمَّ" },
          { ar: "كَلَّا" },
          { ar: "سَوْفَ" },
          { ar: "تَعْلَمُونَ" }
        ],
      },
      {
        arabic: "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ ٱلْيَقِينِ",
        transliteration: "Kalla law ta'lamoona 'ilmal yaqeen",
        translation: "Sûrement! Si vous saviez de science certaine.",
        words: [
          { ar: "كَلَّا" },
          { ar: "لَوْ" },
          { ar: "تَعْلَمُونَ" },
          { ar: "عِلْمَ" },
          { ar: "ٱلْيَقِينِ" }
        ],
      },
      {
        arabic: "لَتَرَوُنَّ ٱلْجَحِيمَ",
        transliteration: "Latara-wun nal jaheem",
        translation: "Vous verrez, certes, la Fournaise.",
        words: [
          { ar: "لَتَرَوُنَّ" },
          { ar: "ٱلْجَحِيمَ" }
        ],
      },
      {
        arabic: "ثُمَّ لَتَرَوُنَّهَا عَيْنَ ٱلْيَقِينِ",
        transliteration: "Thumma latara wunnaha 'ainal yaqeen",
        translation: "Puis, vous la verrez certes, avec l'œil de la certitude.",
        words: [
          { ar: "ثُمَّ" },
          { ar: "لَتَرَوُنَّهَا" },
          { ar: "عَيْنَ" },
          { ar: "ٱلْيَقِينِ" }
        ],
      },
      {
        arabic: "ثُمَّ لَتُسْـَٔلُنَّ يَوْمَئِذٍ عَنِ ٱلنَّعِيمِ",
        transliteration: "Thumma latus alunna yauma-izin 'anin na'eem",
        translation: "Puis, assurément, vous serez interrogés, ce jour-là, sur les délices.",
        words: [
          { ar: "ثُمَّ" },
          { ar: "لَتُسْـَٔلُنَّ" },
          { ar: "يَوْمَئِذٍ" },
          { ar: "عَنِ" },
          { ar: "ٱلنَّعِيمِ" }
        ],
      }
    ],
  },
  {
    id: 38,
    number: 104,
    name: "Al-Humaza",
    nameArabic: "الهُمَزَةِ",
    meaning: "Les Calomniateurs",
    verses: 9,
    icon: "🗣️",
    longForm: true,
    ayahs: [
      {
        arabic: "وَيْلٌۭ لِّكُلِّ هُمَزَةٍۢ لُّمَزَةٍ",
        transliteration: "Wai lul-li kulli hu mazatil-lumaza",
        translation: "Malheur à tout calomniateur diffamateur,",
        words: [
          { ar: "وَيْلٌۭ" },
          { ar: "لِّكُلِّ" },
          { ar: "هُمَزَةٍۢ" },
          { ar: "لُّمَزَةٍ" }
        ],
      },
      {
        arabic: "ٱلَّذِى جَمَعَ مَالًۭا وَعَدَّدَهُۥ",
        transliteration: "Al-lazi jama'a maalaw wa'addadah",
        translation: "qui amasse une fortune et la compte,",
        words: [
          { ar: "ٱلَّذِى" },
          { ar: "جَمَعَ" },
          { ar: "مَالًۭا" },
          { ar: "وَعَدَّدَهُۥ" }
        ],
      },
      {
        arabic: "يَحْسَبُ أَنَّ مَالَهُۥٓ أَخْلَدَهُۥ",
        transliteration: "Yahsabu anna maalahu akhladah",
        translation: "pensant que sa fortune l'immortalisera.",
        words: [
          { ar: "يَحْسَبُ" },
          { ar: "أَنَّ" },
          { ar: "مَالَهُۥٓ" },
          { ar: "أَخْلَدَهُۥ" }
        ],
      },
      {
        arabic: "كَلَّا ۖ لَيُنۢبَذَنَّ فِى ٱلْحُطَمَةِ",
        transliteration: "Kalla layum ba zanna fil hutamah",
        translation: "Mais non! Il sera certes, jeté dans la Hutamah.",
        words: [
          { ar: "كَلَّا" },
          { ar: "ۖ" },
          { ar: "لَيُنۢبَذَنَّ" },
          { ar: "فِى" },
          { ar: "ٱلْحُطَمَةِ" }
        ],
      },
      {
        arabic: "وَمَآ أَدْرَىٰكَ مَا ٱلْحُطَمَةُ",
        transliteration: "Wa maa adraaka mal-hutamah",
        translation: "Et qui te dira ce qu'est la Hutamah?",
        words: [
          { ar: "وَمَآ" },
          { ar: "أَدْرَىٰكَ" },
          { ar: "مَا" },
          { ar: "ٱلْحُطَمَةُ" }
        ],
      },
      {
        arabic: "نَارُ ٱللَّهِ ٱلْمُوقَدَةُ",
        transliteration: "Narul laahil-mooqada",
        translation: "Le Feu attisé d'Allah",
        words: [
          { ar: "نَارُ" },
          { ar: "ٱللَّهِ" },
          { ar: "ٱلْمُوقَدَةُ" }
        ],
      },
      {
        arabic: "ٱلَّتِى تَطَّلِعُ عَلَى ٱلْأَفْـِٔدَةِ",
        transliteration: "Al latee tat tali'u 'alalafidah",
        translation: "qui monte jusqu'aux cœurs.",
        words: [
          { ar: "ٱلَّتِى" },
          { ar: "تَطَّلِعُ" },
          { ar: "عَلَى" },
          { ar: "ٱلْأَفْـِٔدَةِ" }
        ],
      },
      {
        arabic: "إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌۭ",
        transliteration: "Innaha 'alaihim moosada",
        translation: "Il se refermera sur eux,",
        words: [
          { ar: "إِنَّهَا" },
          { ar: "عَلَيْهِم" },
          { ar: "مُّؤْصَدَةٌۭ" }
        ],
      },
      {
        arabic: "فِى عَمَدٍۢ مُّمَدَّدَةٍۭ",
        transliteration: "Fee 'amadim-mu mad dadah",
        translation: "en colonnes (de flammes) étendues.",
        words: [
          { ar: "فِى" },
          { ar: "عَمَدٍۢ" },
          { ar: "مُّمَدَّدَةٍۭ" }
        ],
      }
    ],
  },
  {
    id: 39,
    number: 109,
    name: "Al-Kaafiroon",
    nameArabic: "الكَافِرُونَ",
    meaning: "Les Mécréants",
    verses: 6,
    icon: "🚫",
    longForm: true,
    ayahs: [
      {
        arabic: "قُلْ يَٰٓأَيُّهَا ٱلْكَٰفِرُونَ",
        transliteration: "Qul yaa-ai yuhal kaafiroon",
        translation: "Dis: «O vous les infidèles!",
        words: [
          { ar: "قُلْ" },
          { ar: "يَٰٓأَيُّهَا" },
          { ar: "ٱلْكَٰفِرُونَ" }
        ],
      },
      {
        arabic: "لَآ أَعْبُدُ مَا تَعْبُدُونَ",
        transliteration: "Laa a'budu ma t'abudoon",
        translation: "Je n'adore pas ce que vous adorez.",
        words: [
          { ar: "لَآ" },
          { ar: "أَعْبُدُ" },
          { ar: "مَا" },
          { ar: "تَعْبُدُونَ" }
        ],
      },
      {
        arabic: "وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ",
        transliteration: "Wa laa antum 'aabidoona maa a'bud",
        translation: "Et vous n'êtes pas adorateurs de ce que j'adore.",
        words: [
          { ar: "وَلَآ" },
          { ar: "أَنتُمْ" },
          { ar: "عَٰبِدُونَ" },
          { ar: "مَآ" },
          { ar: "أَعْبُدُ" }
        ],
      },
      {
        arabic: "وَلَآ أَنَا۠ عَابِدٌۭ مَّا عَبَدتُّمْ",
        transliteration: "Wa laa ana 'abidum maa 'abattum",
        translation: "Je ne suis pas adorateur de ce que vous adorez.",
        words: [
          { ar: "وَلَآ" },
          { ar: "أَنَا۠" },
          { ar: "عَابِدٌۭ" },
          { ar: "مَّا" },
          { ar: "عَبَدتُّمْ" }
        ],
      },
      {
        arabic: "وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ",
        transliteration: "Wa laa antum 'aabidoona ma a'bud",
        translation: "Et vous n'êtes pas adorateurs de ce que j'adore.",
        words: [
          { ar: "وَلَآ" },
          { ar: "أَنتُمْ" },
          { ar: "عَٰبِدُونَ" },
          { ar: "مَآ" },
          { ar: "أَعْبُدُ" }
        ],
      },
      {
        arabic: "لَكُمْ دِينُكُمْ وَلِىَ دِينِ",
        transliteration: "Lakum deenukum wa liya deen.",
        translation: "A vous votre religion, et à moi ma religion».",
        words: [
          { ar: "لَكُمْ" },
          { ar: "دِينُكُمْ" },
          { ar: "وَلِىَ" },
          { ar: "دِينِ" }
        ],
      }
    ],
  }

];

// Build audio URL from EveryAyah API (Husary)
export function ayahAudioUrl(surahNumber: number, ayahIndex: number): string {
  const s = String(surahNumber).padStart(3, "0");
  const a = String(ayahIndex + 1).padStart(3, "0");
  return `https://everyayah.com/data/Husary_128kbps/${s}${a}.mp3`;
}
