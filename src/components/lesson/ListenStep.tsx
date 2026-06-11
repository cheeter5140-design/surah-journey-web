import { Volume2, Eye, EyeOff, Lock } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ayahAudioUrl, type Ayah, type Surah } from "@/lib/surahs";
import { Button } from "@/components/ui/button";
import { VoiceRecorder } from "./VoiceRecorder";
import { usePremium } from "@/lib/premium";
import { useLang } from "@/lib/preferences";
import { cn } from "@/lib/utils";

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
  const [peeking, setPeeking] = useState(false);
  const { is_premium } = usePremium();
  const { t } = useLang();

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
        <h2 className="font-display text-2xl font-bold">{t("lesson.listen.title")}</h2>
        <p className="text-muted-foreground text-sm mt-1">{t("lesson.listen.subtitle")}</p>
      </div>

      <div className="bg-card rounded-3xl p-6 border-2 border-border shadow-[var(--shadow-soft)] flex flex-col items-center gap-5">
        <button
          onClick={play}
          className="w-20 h-20 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground grid place-items-center shadow-[var(--shadow-node)] active:translate-y-1 transition-transform"
          aria-label="Écouter"
        >
          <Volume2 className={`w-8 h-8 ${playing ? "animate-pulse" : ""}`} />
        </button>

        <div className="relative w-full">
          <p
            className={cn(
              "font-arabic text-3xl leading-loose text-center text-foreground transition-all duration-200",
              is_premium && !peeking && "blur-md select-none"
            )}
          >
            {ayah.arabic}
          </p>
          {is_premium ? (
            <button
              type="button"
              onMouseDown={() => setPeeking(true)}
              onMouseUp={() => setPeeking(false)}
              onMouseLeave={() => setPeeking(false)}
              onTouchStart={() => setPeeking(true)}
              onTouchEnd={() => setPeeking(false)}
              className="mt-3 mx-auto flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full"
            >
              {peeking ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {peeking ? "Caché au relâchement" : "Maintenir pour dévoiler"}
            </button>
          ) : (
            <Link
              to="/premium"
              className="mt-3 mx-auto inline-flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted px-3 py-1.5 rounded-full"
            >
              <Lock className="w-3.5 h-3.5" /> Peeking Mode · Premium
            </Link>
          )}
        </div>

        <div className="w-full border-t border-border pt-4 flex flex-col gap-2">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{t("lesson.transliteration")}</div>
            <p className="text-base text-foreground/80 italic">{ayah.transliteration}</p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{t("lesson.translation")}</div>
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
        {t("common.continue")}
      </Button>
    </div>
  );
}
