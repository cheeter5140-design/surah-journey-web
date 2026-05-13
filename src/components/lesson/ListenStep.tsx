import { Volume2 } from "lucide-react";
import { useRef, useState } from "react";
import { ayahAudioUrl, type Ayah, type Surah } from "@/lib/surahs";
import { Button } from "@/components/ui/button";
import { VoiceRecorder } from "./VoiceRecorder";

interface Props {
  surah: Surah;
  ayah: Ayah;
  ayahIndex: number;
  onContinue: () => void;
}

export function ListenStep({ surah, ayah, ayahIndex, onContinue }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(false);

  const play = () => {
    const url = ayahAudioUrl(surah.number, ayahIndex);
    if (!audioRef.current) audioRef.current = new Audio(url);
    audioRef.current.src = url;
    audioRef.current.play().then(() => {
      setPlaying(true);
      setPlayed(true);
    }).catch(() => setPlaying(false));
    audioRef.current.onended = () => setPlaying(false);
  };

  return (
    <div className="flex flex-col gap-6 animate-[bounce-in_0.5s]">
      <div>
        <h2 className="font-display text-2xl font-bold">Écoute et répète</h2>
        <p className="text-muted-foreground text-sm mt-1">Écoute le verset, puis enregistre ta récitation.</p>
      </div>

      <div className="bg-card rounded-3xl p-6 border-2 border-border shadow-[var(--shadow-soft)] flex flex-col items-center gap-5">
        <button
          onClick={play}
          className="w-20 h-20 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground grid place-items-center shadow-[var(--shadow-node)] active:translate-y-1 transition-transform"
          aria-label="Écouter"
        >
          <Volume2 className={`w-8 h-8 ${playing ? "animate-pulse" : ""}`} />
        </button>

        <p className="font-arabic text-3xl leading-loose text-center text-foreground">
          {ayah.arabic}
        </p>

        <div className="w-full border-t border-border pt-4 flex flex-col gap-2">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Translittération</div>
            <p className="text-base text-foreground/80 italic">{ayah.transliteration}</p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Traduction</div>
            <p className="text-sm text-muted-foreground">{ayah.translation}</p>
          </div>
        </div>
      </div>

      <VoiceRecorder />

      <Button
        onClick={onContinue}
        disabled={!played}
        className="h-14 rounded-2xl text-base font-bold uppercase tracking-wide shadow-[var(--shadow-node)] active:translate-y-1"
      >
        Continuer
      </Button>
    </div>
  );
}
