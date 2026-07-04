// Memorization helpers: Arabic normalization, word diffing, per-surah progress.
import { useEffect, useState } from "react";

// Strip harakat (diacritics), tatweel, normalize alif/ya variants, remove punctuation.
export function normalizeArabic(input: string): string {
  if (!input) return "";
  return input
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, "") // diacritics
    .replace(/\u0640/g, "") // tatweel
    .replace(/[إأآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\u0600-\u06FF\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenize(text: string): string[] {
  return normalizeArabic(text).split(" ").filter(Boolean);
}

export type WordStatus = "correct" | "wrong" | "missed" | "pending" | "next";

export interface DiffResult {
  words: { expected: string; status: WordStatus }[];
  score: number; // 0..100
  correctCount: number;
  totalCount: number;
  cursor: number; // index of next expected word
  complete: boolean; // true when all expected words matched in order
}

// Tolerant token comparison for normalized Arabic (handles minor edge variations).
function tokenSimilar(a: string, b: string): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length >= 3 && b.length >= 3 && (a.startsWith(b) || b.startsWith(a) || a.endsWith(b) || b.endsWith(a))) return true;
  const [s, l] = a.length <= b.length ? [a, b] : [b, a];
  if (l.length - s.length > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < s.length && j < l.length) {
    if (s[i] === l[j]) { i++; j++; continue; }
    edits++;
    if (edits > 1) return false;
    if (s.length === l.length) { i++; j++; } else { j++; }
  }
  if (j < l.length) edits += l.length - j;
  return edits <= 1;
}

/**
 * Sequential (Tarteel-style) alignment: walks the expected verse left-to-right.
 * For every spoken word, we try to match the current cursor, allowing a small
 * skip window in case the user swallowed / mispronounced a word. Skipped words
 * become "missed"; the cursor advances to the next unmatched word. While the
 * user is still speaking (`isFinal=false`), the next expected word is flagged
 * as "next" so the UI can highlight the upcoming word.
 */
export function diffRecitation(expected: string, spoken: string, isFinal = true): DiffResult {
  const exp = tokenize(expected);
  const spo = tokenize(spoken);
  const n = exp.length;
  const statuses: WordStatus[] = new Array(n).fill("pending");
  let cursor = 0;

  const SKIP_WINDOW = 3;

  for (const word of spo) {
    if (cursor >= n) break;
    let matchedAt = -1;
    for (let k = 0; k < SKIP_WINDOW && cursor + k < n; k++) {
      if (tokenSimilar(word, exp[cursor + k])) { matchedAt = cursor + k; break; }
    }
    if (matchedAt >= 0) {
      for (let s = cursor; s < matchedAt; s++) statuses[s] = "missed";
      statuses[matchedAt] = "correct";
      cursor = matchedAt + 1;
    }
  }

  if (isFinal) {
    for (let i = cursor; i < n; i++) statuses[i] = "missed";
  } else if (cursor < n) {
    statuses[cursor] = "next";
  }

  const correctCount = statuses.filter((s) => s === "correct").length;
  const score = n === 0 ? 0 : Math.round((correctCount / n) * 100);
  return {
    words: exp.map((w, i) => ({ expected: w, status: statuses[i] })),
    score,
    correctCount,
    totalCount: n,
    cursor,
    complete: cursor >= n,
  };
}

export function feedbackFromScore(score: number): { label: string; tone: "great" | "good" | "ok" | "retry" } {
  if (score >= 95) return { label: "Excellent ! ✨", tone: "great" };
  if (score >= 80) return { label: "Presque parfait !", tone: "good" };
  if (score >= 60) return { label: "Bien joué, continue !", tone: "ok" };
  return { label: "Réessaie cette partie", tone: "retry" };
}

// ---------- Persistence (localStorage) ----------
const KEY = "nour:memorization:v1";

export type MemorizationData = Record<number, { pct: number; verses: number[]; updatedAt: string }>;

function read(): MemorizationData {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
}
function write(d: MemorizationData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(d));
  window.dispatchEvent(new Event("memorization:update"));
}

export function useMemorization() {
  const [data, setData] = useState<MemorizationData>(() => read());
  useEffect(() => {
    const on = () => setData(read());
    window.addEventListener("memorization:update", on);
    window.addEventListener("storage", on);
    return () => { window.removeEventListener("memorization:update", on); window.removeEventListener("storage", on); };
  }, []);
  return { data, setVerse, setSurahPct };
}

export function setVerse(surahId: number, verseIdx: number, score: number) {
  if (score < 70) return; // only count well-recited verses
  const d = read();
  const cur = d[surahId] ?? { pct: 0, verses: [], updatedAt: new Date().toISOString() };
  if (!cur.verses.includes(verseIdx)) cur.verses = [...cur.verses, verseIdx];
  cur.updatedAt = new Date().toISOString();
  d[surahId] = cur;
  write(d);
}

export function setSurahPct(surahId: number, totalVerses: number, score: number) {
  const d = read();
  const cur = d[surahId] ?? { pct: 0, verses: [], updatedAt: new Date().toISOString() };
  // Compute pct = max(verse-based, mastery-based)
  const verseBased = totalVerses > 0 ? Math.round((cur.verses.length / totalVerses) * 100) : 0;
  cur.pct = Math.max(cur.pct, verseBased, Math.min(100, score));
  cur.updatedAt = new Date().toISOString();
  d[surahId] = cur;
  write(d);
}

export function getMemorizationPct(surahId: number): number {
  return read()[surahId]?.pct ?? 0;
}

// ---------- Web Speech API helpers ----------
export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === "undefined") return false;
  return !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
}

export function getSpeechRecognition(): any | null {
  if (typeof window === "undefined") return null;
  const Ctor = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  return Ctor ? new Ctor() : null;
}
