import { useEffect, useState } from "react";
import { Loader2, Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AdSenseBanner } from "./AdSenseBanner";

interface Props {
  open: boolean;
  onClose: () => void;
  onReward: () => void;
}

// Simulated rewarded ad: shows an AdSense banner with a forced 5s countdown,
// then unlocks the reward. Web AdSense doesn't natively support rewarded video
// like AdMob, so we use a watch-time gate over a display ad.
export function RewardedAdModal({ open, onClose, onReward }: Props) {
  const [seconds, setSeconds] = useState(5);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSeconds(5);
    setDone(false);
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(id);
          setDone(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-bold">Regarde une pub pour gagner</h3>
          <button onClick={onClose} aria-label="Fermer" className="p-1 rounded-full hover:bg-secondary">
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          Soutiens Nour en regardant cette pub. Tu recevras un coffre une fois le décompte terminé.
        </p>

        <AdSenseBanner className="min-h-[200px]" />

        <div className="flex items-center justify-between">
          <div className="text-sm font-bold tabular-nums">
            {done ? "Prêt !" : `${seconds}s restantes…`}
          </div>
          <Button
            disabled={!done}
            onClick={() => {
              onReward();
              onClose();
            }}
            className="gap-2"
          >
            {done ? <Play className="w-4 h-4" /> : <Loader2 className="w-4 h-4 animate-spin" />}
            Récupérer mon coffre
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
