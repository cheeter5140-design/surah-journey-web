import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Mic, MicOff, Volume2, Eye, EyeOff, Sparkles, Trophy, RotateCcw, Chrome, AlertTriangle } from "lucide-react";
import { SURAHS, ayahAudioUrl } from "@/lib/surahs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  diffRecitation,
  feedbackFromScore,
  getSpeechRecognition,
  isSpeechRecognitionSupported,
  setSurahPct,
  setVerse,
  tokenize,
  type DiffResult,
} from "@/lib/memorization";
import { useGame } from "@/lib/game";

export const Route = createFileRoute("/memorize/$surahId")({
  head: () => ({ meta: [{ title: "Mémorisation — Nour" }] }),
  component: MemorizePage,
});

type Mode = "ecoute" | "repete" | "recite" | "maitrise";

const MODES: { id: Mode; label: string; desc: string; icon: any }[] = [
  { id: "ecoute", label: "Écoute", desc: "Écoute la récitation correcte.", icon: Volume2 },
  { id: "repete", label: "Répète", desc: "Répète après chaque verset, le micro te corrige.", icon: Mic },
  { id: "recite", label: "Récite", desc: "Texte caché, récite de mémoire.", icon: EyeOff },
  { id: "maitrise", label: "Maîtrise", desc: "Sourate entière de mémoire, sans texte.", icon: Trophy },
];

function MemorizePage() {
  const { surahId } = Route.useParams();
  const navigate = useNavigate();
  const surah = SURAHS.find((s) => s.id === Number(surahId));
  const [mode, setMode] = useState<Mode | null>(null);

  if (!surah) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#0A0E1A] text-white">
        <Link to="/" className="text-gold underline">Retour</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E1A] via-[#0D1B2A] to-[#0A0E1A] text-white">
      <header className="sticky top-0 z-30 backdrop-blur-md bg-[#0A0E1A]/70 border-b border-white/5">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => (mode ? setMode(null) : navigate({ to: "/" }))}
            className="w-10 h-10 rounded-full grid place-items-center bg-white/5 hover:bg-white/10 transition active:scale-95"
            aria-label="Retour"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80">Mémorisation</div>
            <div className="font-display text-lg font-bold truncate">
              {surah.name} <span className="font-[Amiri_Quran] text-gold ml-1">{surah.nameArabic}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {!mode ? (
          <ModePicker onPick={setMode} />
        ) : (
          <MemorizeSession surah={surah} mode={mode} onExit={() => setMode(null)} />
        )}
      </main>
    </div>
  );
}

function ModePicker({ onPick }: { onPick: (m: Mode) => void }) {
  const supported = isSpeechRecognitionSupported();
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Choisis ton mode
        </div>
        <h1 className="font-display text-3xl font-bold mt-3">Comment veux-tu apprendre ?</h1>
        <p className="text-white/60 text-sm mt-1">Le micro analyse ta récitation en arabe et t'aide à corriger chaque mot.</p>
      </div>

      {!supported && (
        <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-4 flex gap-3 text-sm">
          <Chrome className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-amber-200">Reconnaissance vocale non disponible</div>
            <p className="text-amber-100/70 mt-1">Pour la correction vocale, utilise <strong>Google Chrome</strong> sur ordinateur ou Android. Tu peux toujours utiliser le mode Écoute.</p>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {MODES.map((m) => {
          const needsMic = m.id !== "ecoute";
          const disabled = needsMic && !supported;
          return (
            <button
              key={m.id}
              disabled={disabled}
              onClick={() => onPick(m.id)}
              className={cn(
                "group relative overflow-hidden rounded-3xl p-5 text-left transition-all active:scale-[0.98]",
                "border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01]",
                !disabled && "hover:border-gold/40 hover:from-gold/10 hover:to-transparent",
                disabled && "opacity-40 cursor-not-allowed"
              )}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gold/10 blur-2xl group-hover:bg-gold/20 transition" />
              <div className="relative flex items-start gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gold/15 text-gold grid place-items-center">
                  <m.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-xl font-bold">{m.label}</div>
                  <div className="text-sm text-white/60 mt-0.5">{m.desc}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------- Session ----------

function MemorizeSession({ surah, mode, onExit }: { surah: typeof SURAHS[number]; mode: Mode; onExit: () => void }) {
  const total = surah.ayahs.length;
  const [idx, setIdx] = useState(0);
  const [sessionScores, setSessionScores] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const { addCoins, trackLesson } = useGame();

  const isMaitrise = mode === "maitrise";
  const showText = mode === "ecoute" || mode === "repete";
  const useMic = mode !== "ecoute";

  // Maîtrise: one single capture for the whole surah
  const expectedText = isMaitrise
    ? surah.ayahs.map((a) => a.arabic).join(" ")
    : surah.ayahs[idx].arabic;

  const handleVerseDone = (score: number) => {
    setSessionScores((s) => [...s, score]);
    if (score >= 70) setVerse(surah.id, idx, score);
    if (idx + 1 >= total || isMaitrise) {
      const all = isMaitrise ? [score] : [...sessionScores, score];
      const avg = Math.round(all.reduce((a, b) => a + b, 0) / Math.max(1, all.length));
      setSurahPct(surah.id, total, avg);
      const xp = Math.round(avg / 5);
      trackLesson(xp);
      addCoins(Math.round(avg / 3));
      setDone(true);
    } else {
      setIdx((i) => i + 1);
    }
  };

  if (done) {
    const avg = sessionScores.length
      ? Math.round(sessionScores.reduce((a, b) => a + b, 0) / sessionScores.length)
      : 0;
    const fb = feedbackFromScore(avg);
    return (
      <div className="flex flex-col items-center text-center gap-6 py-8 animate-[bounce-in_0.6s]">
        <div className="relative">
          <div className="absolute inset-0 bg-gold/30 blur-3xl rounded-full" />
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gold to-amber-600 grid place-items-center shadow-[0_0_60px_rgba(201,168,76,0.5)]">
            <Trophy className="w-16 h-16 text-[#0A0E1A]" />
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">{MODES.find((m) => m.id === mode)?.label}</div>
          <h2 className="font-display text-4xl font-bold mt-1">{avg}%</h2>
          <p className="text-white/70 mt-2">{fb.label}</p>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-xs">
          <Button onClick={() => { setIdx(0); setSessionScores([]); setDone(false); }} className="h-12 rounded-2xl bg-gold text-[#0A0E1A] hover:bg-gold/90 font-bold">
            <RotateCcw className="w-4 h-4 mr-2" /> Recommencer
          </Button>
          <Button onClick={onExit} variant="outline" className="h-12 rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
            Autre mode
          </Button>
        </div>
      </div>
    );
  }

  const progressPct = isMaitrise ? 0 : (idx / total) * 100;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex items-center justify-between text-xs text-white/60 mb-2">
          <span>{isMaitrise ? "Récitation complète" : `Verset ${idx + 1} / ${total}`}</span>
          <span className="font-bold tabular-nums">{Math.round(progressPct)}%</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-gold to-amber-300 transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <VerseStep
        key={`${mode}-${idx}`}
        surahNumber={surah.number}
        ayahIndex={isMaitrise ? 0 : idx}
        expected={expectedText}
        showText={showText}
        useMic={useMic}
        autoPlay={mode === "ecoute"}
        onDone={handleVerseDone}
        isFullSurah={isMaitrise}
      />
    </div>
  );
}

// ---------- Single verse step ----------

function VerseStep({
  surahNumber,
  ayahIndex,
  expected,
  showText,
  useMic,
  autoPlay,
  onDone,
  isFullSurah,
}: {
  surahNumber: number;
  ayahIndex: number;
  expected: string;
  showText: boolean;
  useMic: boolean;
  autoPlay: boolean;
  onDone: (score: number) => void;
  isFullSurah: boolean;
}) {
  const [transcript, setTranscript] = useState("");
  const [recording, setRecording] = useState(false);
  const [permError, setPermError] = useState<string | null>(null);
  const [diff, setDiff] = useState<DiffResult | null>(null);
  const [revealed, setRevealed] = useState(showText);
  const [playing, setPlaying] = useState(false);
  const recogRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => { setRevealed(showText); setDiff(null); setTranscript(""); }, [ayahIndex, showText]);

  // Auto-play in écoute
  useEffect(() => {
    if (!autoPlay) return;
    play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ayahIndex]);

  const play = () => {
    const url = ayahAudioUrl(surahNumber, ayahIndex);
    if (!audioRef.current) audioRef.current = new Audio(url);
    audioRef.current.src = url;
    audioRef.current.onended = () => setPlaying(false);
    audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  const [requestingPerm, setRequestingPerm] = useState(false);

  const start = async () => {
    setPermError(null);

    // 1) Explicitly request microphone permission first so the browser
    //    prompts the user, and we can surface a clear error if denied.
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setPermError("Ton navigateur ne supporte pas l'accès au micro. Essaie Chrome.");
      return;
    }
    setRequestingPerm(true);
    let micStream: MediaStream | null = null;
    try {
      micStream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      });
    } catch (err: any) {
      setRequestingPerm(false);
      const name = err?.name || "";
      if (name === "NotAllowedError" || name === "SecurityError") {
        setPermError("Accès au micro refusé. Autorise-le dans ton navigateur puis réessaie.");
      } else if (name === "NotFoundError" || name === "OverconstrainedError") {
        setPermError("Aucun micro détecté sur cet appareil.");
      } else {
        setPermError("Impossible d'accéder au micro.");
      }
      return;
    }
    setRequestingPerm(false);

    // 2) Stop the manual stream — SpeechRecognition opens its own pipeline,
    //    but the permission grant persists for the session.
    micStream.getTracks().forEach((t) => t.stop());

    // 3) Start SpeechRecognition.
    const r = getSpeechRecognition();
    if (!r) { setPermError("Reconnaissance vocale non supportée. Essaie Chrome."); return; }
    // Prefer ar-SA but fall back to generic Arabic so more browsers/users work.
    r.lang = "ar-SA";
    r.continuous = true;
    r.interimResults = true;
    r.maxAlternatives = 3;
    let full = "";
    r.onresult = (e: any) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        // Pick the best-matching alternative against expected words.
        const alts: string[] = [];
        for (let a = 0; a < e.results[i].length; a++) alts.push(e.results[i][a].transcript);
        let chosen = alts[0] ?? "";
        let chosenScore = -1;
        for (const alt of alts) {
          const s = diffRecitation(expected, (full + " " + interim + " " + alt).trim(), false).score;
          if (s > chosenScore) { chosenScore = s; chosen = alt; }
        }
        if (e.results[i].isFinal) full += " " + chosen; else interim += " " + chosen;
      }
      const combined = (full + " " + interim).trim();
      setTranscript(combined);
      setDiff(diffRecitation(expected, combined, false));
    };
    r.onerror = (e: any) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        setPermError("Accès au micro refusé. Autorise-le dans ton navigateur puis réessaie.");
      } else if (e.error === "no-speech") {
        setPermError("Je n'ai rien entendu. Réessaie en parlant plus fort.");
      } else if (e.error === "audio-capture") {
        setPermError("Aucun micro détecté.");
      } else if (e.error === "language-not-supported") {
        // Retry once with a generic Arabic tag
        try { r.lang = "ar"; r.start(); setRecording(true); return; } catch { /* ignore */ }
        setPermError("L'arabe n'est pas supporté par ton navigateur. Utilise Chrome.");
      } else if (e.error === "network") {
        setPermError("Erreur réseau pendant la reconnaissance. Vérifie ta connexion.");
      }
      setRecording(false);
    };
    r.onend = () => {
      setRecording(false);
      const final = diffRecitation(expected, full.trim() || transcript, true);
      setDiff(final);
    };
    try {
      r.start();
      setRecording(true);
      recogRef.current = r;
    } catch {
      setPermError("Impossible de démarrer le micro.");
    }
  };

  const stop = () => {
    try { recogRef.current?.stop(); } catch {/* ignore */}
  };

  const submit = () => {
    if (!diff) return;
    onDone(diff.score);
  };

  // Words to render (with live highlighting)
  const wordTokens = useMemo(() => tokenize(expected), [expected]);
  const liveDiff = diff ?? { words: wordTokens.map((w) => ({ expected: w, status: "pending" as const })), score: 0, correctCount: 0, totalCount: wordTokens.length };

  return (
    <div className="flex flex-col gap-5">
      {/* Audio */}
      <div className="flex items-center justify-center">
        <button
          onClick={play}
          className={cn(
            "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/30 bg-gold/10 text-gold font-medium text-sm hover:bg-gold/20 transition active:scale-95",
            playing && "animate-pulse"
          )}
        >
          <Volume2 className="w-4 h-4" /> Écouter
        </button>
      </div>

      {/* Verse display */}
      <div className="relative rounded-3xl p-6 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 min-h-[140px]">
        {!revealed ? (
          <div className="flex flex-col items-center justify-center gap-3 py-8 text-white/40">
            <EyeOff className="w-8 h-8" />
            <p className="text-sm">Le texte est caché. Récite de mémoire.</p>
            <button onClick={() => setRevealed(true)} className="text-xs text-gold underline">Afficher quand même</button>
          </div>
        ) : (
          <div dir="rtl" className="font-[Amiri_Quran] text-3xl sm:text-4xl leading-loose text-right break-words">
            {liveDiff.words.map((w, i) => (
              <span
                key={i}
                className={cn(
                  "transition-colors duration-200 mx-1",
                  w.status === "correct" && "text-emerald-300",
                  w.status === "wrong" && "text-rose-400",
                  w.status === "missed" && "text-rose-400/80 line-through decoration-rose-400/40",
                  w.status === "pending" && "text-gold/90"
                )}
              >
                {w.expected}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Mic UI */}
      {useMic && (
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={recording ? stop : start}
            disabled={requestingPerm}
            aria-label={recording ? "Arrêter" : "Commencer la récitation"}
            className={cn(
              "relative w-20 h-20 rounded-full grid place-items-center transition-all active:scale-95 disabled:opacity-60",
              recording
                ? "bg-rose-500 text-white shadow-[0_0_40px_rgba(244,63,94,0.7)]"
                : "bg-gradient-to-br from-gold to-amber-500 text-[#0A0E1A] shadow-[0_0_30px_rgba(201,168,76,0.4)]"
            )}
          >
            {recording && (
              <>
                <span className="absolute inset-0 rounded-full bg-rose-500/40 animate-ping" />
                <span className="absolute inset-[-8px] rounded-full border border-rose-400/30 animate-pulse" />
              </>
            )}
            {recording ? <MicOff className="w-8 h-8 relative" /> : <Mic className="w-8 h-8 relative" />}
          </button>
          <div className="text-xs text-white/60 text-center">
            {requestingPerm
              ? "Demande d'accès au micro…"
              : recording
                ? "🎙️ J'écoute… parle clairement en arabe"
                : "Appuie pour réciter"}
          </div>

          {recording && <Waveform />}

          {permError && (
            <div className="mt-1 text-xs text-rose-300 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> {permError}
            </div>
          )}
        </div>
      )}

      {/* Feedback + Continue */}
      {diff && diff.totalCount > 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-3 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50">Score</div>
              <div className="font-display text-3xl font-bold">
                {diff.score}<span className="text-white/40 text-xl">%</span>
              </div>
            </div>
            <FeedbackBadge score={diff.score} />
          </div>
          <div className="text-xs text-white/50">
            {diff.correctCount}/{diff.totalCount} mots corrects
          </div>
        </div>
      )}

      <div className="flex gap-2">
        {useMic ? (
          <>
            <Button
              variant="outline"
              onClick={() => { setDiff(null); setTranscript(""); }}
              className="flex-1 h-12 rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              disabled={recording}
            >
              <RotateCcw className="w-4 h-4 mr-2" /> Recommencer
            </Button>
            <Button
              onClick={submit}
              disabled={!diff || recording}
              className="flex-1 h-12 rounded-2xl bg-gold text-[#0A0E1A] hover:bg-gold/90 font-bold disabled:opacity-40"
            >
              {isFullSurah ? "Terminer" : "Verset suivant"}
            </Button>
          </>
        ) : (
          <Button
            onClick={() => onDone(100)}
            className="flex-1 h-12 rounded-2xl bg-gold text-[#0A0E1A] hover:bg-gold/90 font-bold"
          >
            {isFullSurah ? "Terminer" : "Verset suivant"}
          </Button>
        )}
      </div>
    </div>
  );
}

function FeedbackBadge({ score }: { score: number }) {
  const fb = feedbackFromScore(score);
  const tone = {
    great: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
    good: "bg-gold/20 text-gold border-gold/40",
    ok: "bg-amber-500/20 text-amber-200 border-amber-400/40",
    retry: "bg-rose-500/20 text-rose-300 border-rose-400/40",
  }[fb.tone];
  return (
    <div className={cn("px-3 py-1.5 rounded-full text-xs font-bold border animate-[bounce-in_0.4s]", tone)}>
      {fb.label}
    </div>
  );
}

function Waveform() {
  return (
    <div className="flex items-center gap-1 h-8" aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-rose-400/80"
          style={{
            height: `${20 + Math.abs(Math.sin(i * 0.9)) * 70}%`,
            animation: `waveform 0.9s ease-in-out ${i * 0.06}s infinite alternate`,
          }}
        />
      ))}
      <style>{`@keyframes waveform { from { transform: scaleY(0.4); } to { transform: scaleY(1.1); } }`}</style>
    </div>
  );
}
