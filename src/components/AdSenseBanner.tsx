import { useEffect, useRef } from "react";

// AdSense banner. Reads publisher id from VITE_ADSENSE_CLIENT (e.g. "ca-pub-1234567890").
// If not set, shows a friendly placeholder so the UI works during dev.

const CLIENT_ID = (import.meta as any).env?.VITE_ADSENSE_CLIENT as string | undefined;
const SLOT_ID = (import.meta as any).env?.VITE_ADSENSE_SLOT as string | undefined;

let scriptInjected = false;

function ensureScript() {
  if (scriptInjected || typeof document === "undefined" || !CLIENT_ID) return;
  scriptInjected = true;
  const s = document.createElement("script");
  s.async = true;
  s.crossOrigin = "anonymous";
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT_ID}`;
  document.head.appendChild(s);
}

interface Props {
  className?: string;
}

export function AdSenseBanner({ className = "" }: Props) {
  const ref = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (!CLIENT_ID || !SLOT_ID) return;
    ensureScript();
    try {
      // @ts-expect-error adsbygoogle global
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* ignore */
    }
  }, []);

  if (!CLIENT_ID || !SLOT_ID) {
    return (
      <div
        className={`rounded-2xl border border-dashed border-border bg-secondary/50 text-muted-foreground text-xs grid place-items-center px-4 py-4 ${className}`}
      >
        Espace publicitaire (configure VITE_ADSENSE_CLIENT et VITE_ADSENSE_SLOT)
      </div>
    );
  }

  return (
    <ins
      ref={ref as any}
      className={`adsbygoogle block ${className}`}
      style={{ display: "block" }}
      data-ad-client={CLIENT_ID}
      data-ad-slot={SLOT_ID}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
