import { Mic, Square, Play, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function VoiceRecorder() {
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [recording, setRecording] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!recording) return;
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [recording]);

  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);

  const start = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      chunksRef.current = [];
      mr.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        if (url) URL.revokeObjectURL(url);
        setUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
      };
      mr.start();
      mediaRef.current = mr;
      setElapsed(0);
      setRecording(true);
    } catch {
      setError("Micro non disponible. Vérifie les permissions du navigateur.");
    }
  };

  const stop = () => {
    mediaRef.current?.stop();
    setRecording(false);
  };

  const play = () => {
    if (!url) return;
    if (!audioRef.current) audioRef.current = new Audio(url);
    audioRef.current.src = url;
    audioRef.current.onended = () => setPlaying(false);
    audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  const reset = () => {
    if (url) URL.revokeObjectURL(url);
    setUrl(null);
    setPlaying(false);
  };

  return (
    <div className="bg-secondary/60 rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold">🎤 Ta récitation</div>
        {recording && (
          <div className="flex items-center gap-2 text-xs text-destructive font-bold tabular-nums">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            REC {String(Math.floor(elapsed / 60)).padStart(2, "0")}:{String(elapsed % 60).padStart(2, "0")}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {!recording && !url && (
          <button
            onClick={start}
            className="flex-1 h-12 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 active:translate-y-0.5 transition"
          >
            <Mic className="w-5 h-5" /> Enregistrer
          </button>
        )}
        {recording && (
          <button
            onClick={stop}
            className="flex-1 h-12 rounded-xl bg-destructive text-destructive-foreground font-bold flex items-center justify-center gap-2 active:translate-y-0.5 transition"
          >
            <Square className="w-5 h-5" fill="currentColor" /> Arrêter
          </button>
        )}
        {url && !recording && (
          <>
            <button
              onClick={play}
              className={cn(
                "flex-1 h-12 rounded-xl bg-card border-2 border-primary text-primary font-bold flex items-center justify-center gap-2 active:translate-y-0.5 transition",
                playing && "bg-primary/10"
              )}
            >
              <Play className="w-5 h-5" fill="currentColor" /> {playing ? "Lecture…" : "Réécouter"}
            </button>
            <button
              onClick={reset}
              className="h-12 w-12 rounded-xl bg-card border-2 border-border text-muted-foreground grid place-items-center active:translate-y-0.5 transition"
              aria-label="Recommencer"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}
      {!error && !url && !recording && (
        <p className="text-xs text-muted-foreground">Récite à voix haute après l'audio, puis enregistre-toi pour comparer.</p>
      )}
    </div>
  );
}
