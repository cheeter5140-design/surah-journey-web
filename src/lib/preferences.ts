import { useEffect, useState, useSyncExternalStore } from "react";

/* ---------- Language ---------- */
export type Lang = "fr" | "en";
const LANG_KEY = "qpath_lang_v1";
const LANG_EVENT = "lang:update";

const DICT: Record<Lang, Record<string, string>> = {
  fr: {
    // Settings
    "settings.title": "Apparence",
    "settings.subtitle": "Personnalise l'ambiance de ton parcours.",
    "settings.theme": "Thème de fond",
    "settings.font": "Typographie",
    "settings.language": "Langue de l'interface",
    "settings.preview": "Bismillāh ar-Rahmān ar-Rahīm",
    "settings.glassNote": "Les cartes utilisent un effet « glassmorphism » sur tous les thèmes.",
    // Nav
    "nav.path": "Parcours",
    "nav.planner": "Planner",
    "nav.stats": "Stats",
    "nav.community": "Communauté",
    "nav.premium": "Premium",
    // Profile menu
    "profile.edit": "Modifier le profil",
    "profile.planner": "Smart Planner",
    "profile.premium": "Premium",
    "profile.signOut": "Se déconnecter",
    "stat.days": "j",
    // Memorize page
    "mem.title": "Mémorisation",
    "mem.back": "Retour",
    "mem.choose": "Choisis ton mode",
    "mem.howLearn": "Comment veux-tu apprendre ?",
    "mem.intro": "Le micro analyse ta récitation en arabe et t'aide à corriger chaque mot.",
    "mem.notSupported": "Reconnaissance vocale non disponible",
    "mem.notSupportedHint": "Pour la correction vocale, utilise Google Chrome sur ordinateur ou Android. Tu peux toujours utiliser le mode Écoute.",
    "mem.mode.ecoute": "Écoute",
    "mem.mode.ecoute.desc": "Écoute la récitation correcte.",
    "mem.mode.repete": "Répète",
    "mem.mode.repete.desc": "Répète après chaque verset, le micro te corrige.",
    "mem.mode.recite": "Récite",
    "mem.mode.recite.desc": "Texte caché, récite de mémoire.",
    "mem.mode.maitrise": "Maîtrise",
    "mem.mode.maitrise.desc": "Sourate entière de mémoire, sans texte.",
    "mem.listen": "Écouter",
    "mem.hidden": "Le texte est caché. Récite de mémoire.",
    "mem.showAnyway": "Afficher quand même",
    "mem.tapToRecite": "Appuie pour réciter",
    "mem.listening": "🎙️ J'écoute… parle clairement en arabe",
    "mem.requesting": "Demande d'accès au micro…",
    "mem.verseOf": "Verset {n} / {t}",
    "mem.fullRecitation": "Récitation complète",
    "mem.score": "Score",
    "mem.wordsCorrect": "{c}/{t} mots corrects",
    "mem.restart": "Recommencer",
    "mem.next": "Verset suivant",
    "mem.finish": "Terminer",
    "mem.otherMode": "Autre mode",
    "mem.permDenied": "Accès au micro refusé. Autorise-le dans ton navigateur puis réessaie.",
    "mem.permNoMic": "Aucun micro détecté sur cet appareil.",
    "mem.permGeneric": "Impossible d'accéder au micro.",
    "mem.noSpeech": "Je n'ai rien entendu. Réessaie en parlant plus fort.",
    "mem.noArSupport": "L'arabe (ar-SA) n'est pas supporté par ton navigateur. Utilise Chrome.",
    "mem.recogUnsupported": "Reconnaissance vocale non supportée. Essaie Chrome.",
    "common.continue": "Continuer",
    "common.check": "Vérifier",
    "lesson.listen.title": "Écoute et répète",
    "lesson.listen.subtitle": "Écoute le verset, puis enregistre ta récitation.",
    "lesson.transliteration": "Translittération",
    "lesson.translation": "Traduction",
    "lesson.match.title": "Associe les mots",
    "lesson.match.subtitle": "Touche un mot arabe puis sa signification.",
    "lesson.blank.title": "Complète le verset",
    "lesson.blank.subtitle": "Choisis le mot manquant.",
    "lesson.done": "Leçon terminée !",
    "lesson.studied": "Tu as étudié la sourate {name}",
    "path.section": "Section {id}",
    "path.finalEval": "Évaluation finale",
    "path.memorize": "Mémoriser",
    "path.lessonsAvailable": "{count} leçons disponibles · plus à venir ✨",
    "path.comingSoon": "BIENTÔT",
    "path.finishJuz": "Termine toutes les sourates du Juz",
    "path.validated": "Validé",
  },
  en: {
    "settings.title": "Appearance",
    "settings.subtitle": "Customize the mood of your journey.",
    "settings.theme": "Background theme",
    "settings.font": "Typography",
    "settings.language": "Interface language",
    "settings.preview": "Bismillāh ar-Rahmān ar-Rahīm",
    "settings.glassNote": "Cards use a glassmorphism effect across every theme.",
    "nav.path": "Journey",
    "nav.planner": "Planner",
    "nav.stats": "Stats",
    "nav.community": "Community",
    "nav.premium": "Premium",
    "profile.edit": "Edit profile",
    "profile.planner": "Smart Planner",
    "profile.premium": "Premium",
    "profile.signOut": "Sign out",
    "stat.days": "d",
    "mem.title": "Memorization",
    "mem.back": "Back",
    "mem.choose": "Choose your mode",
    "mem.howLearn": "How do you want to learn?",
    "mem.intro": "The microphone analyzes your Arabic recitation and helps you correct each word.",
    "mem.notSupported": "Voice recognition not available",
    "mem.notSupportedHint": "For voice correction, use Google Chrome on desktop or Android. You can still use Listen mode.",
    "mem.mode.ecoute": "Listen",
    "mem.mode.ecoute.desc": "Listen to the correct recitation.",
    "mem.mode.repete": "Repeat",
    "mem.mode.repete.desc": "Repeat after each verse — the mic corrects you.",
    "mem.mode.recite": "Recite",
    "mem.mode.recite.desc": "Text hidden, recite from memory.",
    "mem.mode.maitrise": "Mastery",
    "mem.mode.maitrise.desc": "Whole surah from memory, no text.",
    "mem.listen": "Listen",
    "mem.hidden": "Text is hidden. Recite from memory.",
    "mem.showAnyway": "Show anyway",
    "mem.tapToRecite": "Tap to recite",
    "mem.listening": "🎙️ Listening… speak clearly in Arabic",
    "mem.requesting": "Requesting mic access…",
    "mem.verseOf": "Verse {n} / {t}",
    "mem.fullRecitation": "Full recitation",
    "mem.score": "Score",
    "mem.wordsCorrect": "{c}/{t} words correct",
    "mem.restart": "Restart",
    "mem.next": "Next verse",
    "mem.finish": "Finish",
    "mem.otherMode": "Other mode",
    "mem.permDenied": "Microphone access denied. Allow it in your browser, then try again.",
    "mem.permNoMic": "No microphone detected on this device.",
    "mem.permGeneric": "Could not access the microphone.",
    "mem.noSpeech": "I didn't hear anything. Try again, louder.",
    "mem.noArSupport": "Arabic (ar-SA) isn't supported by your browser. Use Chrome.",
    "mem.recogUnsupported": "Voice recognition not supported. Try Chrome.",
    "common.continue": "Continue",
    "common.check": "Check",
    "lesson.listen.title": "Listen and repeat",
    "lesson.listen.subtitle": "Listen to the verse, then record your recitation.",
    "lesson.transliteration": "Transliteration",
    "lesson.translation": "Translation",
    "lesson.match.title": "Match the words",
    "lesson.match.subtitle": "Tap an Arabic word, then its meaning.",
    "lesson.blank.title": "Complete the verse",
    "lesson.blank.subtitle": "Choose the missing word.",
    "lesson.done": "Lesson complete!",
    "lesson.studied": "You studied Surah {name}",
    "path.section": "Section {id}",
    "path.finalEval": "Final assessment",
    "path.memorize": "Memorize",
    "path.lessonsAvailable": "{count} lessons available · more coming ✨",
    "path.comingSoon": "SOON",
    "path.finishJuz": "Complete every Surah in this Juz",
    "path.validated": "Validated",
  },
};

function readLang(): Lang {
  if (typeof window === "undefined") return "fr";
  return (localStorage.getItem(LANG_KEY) as Lang) || "fr";
}

export function translate(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  let str = DICT[lang]?.[key] ?? DICT.fr[key] ?? key;
  if (vars) for (const k in vars) str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k]));
  return str;
}

export function useLang() {
  const [lang, setLangState] = useState<Lang>(() => readLang());
  useEffect(() => {
    const saved = readLang();
    setLangState(saved);
    if (typeof document !== "undefined") document.documentElement.setAttribute("lang", saved);
    const on = () => {
      const next = readLang();
      setLangState(next);
      if (typeof document !== "undefined") document.documentElement.setAttribute("lang", next);
    };
    window.addEventListener(LANG_EVENT, on);
    window.addEventListener("storage", on);
    return () => {
      window.removeEventListener(LANG_EVENT, on);
      window.removeEventListener("storage", on);
    };
  }, []);
  const setLang = (l: Lang) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LANG_KEY, l);
      window.dispatchEvent(new Event(LANG_EVENT));
    }
    setLangState(l);
    if (typeof document !== "undefined") document.documentElement.setAttribute("lang", l);
  };
  const t = (k: string, vars?: Record<string, string | number>) => translate(lang, k, vars);
  return { lang, setLang, t };
}

/* ---------- Font (display) ---------- */
export type FontId = "fraunces" | "playfair" | "cormorant" | "cinzel" | "space-grotesk";
const FONT_KEY = "qpath_font_v1";

export const FONTS: { id: FontId; label: string; stack: string }[] = [
  { id: "fraunces", label: "Fraunces", stack: `"Fraunces", serif` },
  { id: "playfair", label: "Playfair Display", stack: `"Playfair Display", serif` },
  { id: "cormorant", label: "Cormorant Garamond", stack: `"Cormorant Garamond", serif` },
  { id: "cinzel", label: "Cinzel", stack: `"Cinzel", serif` },
  { id: "space-grotesk", label: "Space Grotesk", stack: `"Space Grotesk", sans-serif` },
];

export function applyFont(id: FontId) {
  if (typeof document === "undefined") return;
  const f = FONTS.find((x) => x.id === id) ?? FONTS[0];
  document.documentElement.style.setProperty("--font-display", f.stack);
  document.documentElement.setAttribute("data-font", id);
}

export function useFont() {
  const [font, setFontState] = useState<FontId>("fraunces");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem(FONT_KEY) as FontId)) || "fraunces";
    setFontState(saved);
    applyFont(saved);
  }, []);
  const setFont = (id: FontId) => {
    setFontState(id);
    if (typeof window !== "undefined") localStorage.setItem(FONT_KEY, id);
    applyFont(id);
  };
  return { font, setFont };
}
