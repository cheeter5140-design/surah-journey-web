import { useEffect, useState } from "react";

/* ---------- Language ---------- */
export type Lang = "fr" | "en";
const LANG_KEY = "qpath_lang_v1";

const DICT: Record<Lang, Record<string, string>> = {
  fr: {
    "settings.title": "Apparence",
    "settings.subtitle": "Personnalise l'ambiance de ton parcours.",
    "settings.theme": "Thème de fond",
    "settings.font": "Typographie",
    "settings.language": "Langue de l'interface",
    "settings.preview": "Bismillāh ar-Rahmān ar-Rahīm",
    "settings.glassNote": "Les cartes utilisent un effet « glassmorphism » sur tous les thèmes.",
  },
  en: {
    "settings.title": "Appearance",
    "settings.subtitle": "Customize the mood of your journey.",
    "settings.theme": "Background theme",
    "settings.font": "Typography",
    "settings.language": "Interface language",
    "settings.preview": "Bismillāh ar-Rahmān ar-Rahīm",
    "settings.glassNote": "Cards use a glassmorphism effect across every theme.",
  },
};

export function useLang() {
  const [lang, setLangState] = useState<Lang>("fr");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem(LANG_KEY) as Lang)) || "fr";
    setLangState(saved);
    if (typeof document !== "undefined") document.documentElement.setAttribute("lang", saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem(LANG_KEY, l);
    if (typeof document !== "undefined") document.documentElement.setAttribute("lang", l);
  };
  const t = (k: string) => DICT[lang][k] ?? DICT.fr[k] ?? k;
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
