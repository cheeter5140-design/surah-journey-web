import { useEffect, useState } from "react";

export type ThemeId = "pure-white" | "deep-night" | "soft-emerald" | "geometric";
const KEY = "qpath_theme_v1";

export const THEMES: { id: ThemeId; label: string; preview: string }[] = [
  { id: "pure-white", label: "Pure White", preview: "linear-gradient(135deg,#ffffff,#f6f7f6)" },
  { id: "deep-night", label: "Deep Night", preview: "linear-gradient(135deg,#0b1220,#0f2a23)" },
  { id: "soft-emerald", label: "Soft Emerald", preview: "linear-gradient(135deg,#d3f1e0,#a7e3c4)" },
  { id: "geometric", label: "Islamic Pattern", preview: "repeating-conic-gradient(#0c6f55 0 25%, #0e8a68 0 50%)" },
];

export function applyTheme(id: ThemeId) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", id);
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>("soft-emerald");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem(KEY) as ThemeId)) || "soft-emerald";
    setThemeState(saved);
    applyTheme(saved);
  }, []);
  const setTheme = (id: ThemeId) => {
    setThemeState(id);
    if (typeof window !== "undefined") localStorage.setItem(KEY, id);
    applyTheme(id);
  };
  return { theme, setTheme };
}
