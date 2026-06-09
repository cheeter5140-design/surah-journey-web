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

export type WordStatus = "correct" | "wrong" | "missed" | "pending";

export interface DiffResult {
  words: { expected: string; status: WordStatus }[];
  score: number; // 0..100
  correctCount: number;
  totalCount: number;
}

// Longest Common Subsequence alignment: any expected word found (in order)
// in the spoken transcript is "correct", others are "wrong".
export function diffRecitation(expected: string, spoken: string, isFinal = true): DiffResult {
  const exp = tokenize(expected);
  const spo = tokenize(spoken);
  const n = exp.length;
  const m = spo.length;

  // LCS dp
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] = exp[i - 1] === spo[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  // Walk back to mark matched expected words
  const matched = new Array(n).fill(false);
  let i = n, j = m;
  while (i > 0 && j > 0) {
    if (exp[i - 1] === spo[j - 1]) {
      matched[i - 1] = true;
      i--; j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  // For interim (non-final) results, words past the last matched should stay "pending"
  let lastMatchedIdx = -1;
  for (let k = n - 1; k >= 0; k--) {
    if (matched[k]) { lastMatchedIdx = k; break; }
  }
  const cutoff = isFinal ? n : Math.min(n, lastMatchedIdx + 2);

  const words = exp.map((w, idx) => {
    if (matched[idx]) return { expected: w, status: "correct" as WordStatus };
    if (idx >= cutoff) return { expected: w, status: "pending" as WordStatus };
    return { expected: w, status: (isFinal ? "missed" : "wrong") as WordStatus };
  });
  const correctCount = matched.filter(Boolean).length;
  const score = n === 0 ? 0 : Math.round((correctCount / n) * 100);
  return { words, score, correctCount, totalCount: n };
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
