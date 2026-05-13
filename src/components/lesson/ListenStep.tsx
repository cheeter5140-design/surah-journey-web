import { Volume2 } from "lucide-react";
import { useRef, useState } from "react";
import { ayahAudioUrl, type Ayah, type Surah } from "@/lib/surahs";
import { Button } from "@/components/ui/button";

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
        <p className="text-muted-foreground text-sm mt-1">Appuie sur le bouton pour entendre le verset.</p>
      </div>

      <div className="bg-card rounded-3xl p-8 border-2 border-border shadow-[var(--shadow-soft)] flex flex-col items-center gap-6">
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
        <p className="text-muted-foreground text-center italic">{ayah.translation}</p>
      </div>

      <div className="bg-secondary rounded-2xl p-4 text-sm text-secondary-foreground">
        🎤 <strong>Astuce :</strong> Répète à voix haute après l'audio. La reconnaissance vocale arrive bientôt.
      </div>

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
