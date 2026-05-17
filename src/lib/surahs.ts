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
  icon: string;
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
  },
];

// Build audio URL from EveryAyah API (Husary)
export function ayahAudioUrl(surahNumber: number, ayahIndex: number): string {
  const s = String(surahNumber).padStart(3, "0");
  const a = String(ayahIndex + 1).padStart(3, "0");
  return `https://everyayah.com/data/Husary_128kbps/${s}${a}.mp3`;
}
