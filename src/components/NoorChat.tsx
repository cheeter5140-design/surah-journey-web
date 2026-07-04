import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Moon, Send, X, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const transport = new DefaultChatTransport({ api: "/api/chat" });

const SUGGESTIONS = [
  "Que dit l'islam sur la sincérité ?",
  "Explique-moi le tawakkul avec Coran et hadith",
  "Quel est le jugement général de la prière à l'heure ?",
  "Donne-moi une réflexion de savants sur Sourate Al-'Asr",
];

function partsToText(parts: UIMessage["parts"]): string {
  return parts.map((p) => (p.type === "text" ? p.text : "")).join("");
}

export function NoorChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    id: "noor-companion",
    transport,
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const submit = async (text?: string) => {
    const value = (text ?? input).trim();
    if (!value || busy) return;
    setInput("");
    await sendMessage({ text: value });
  };

  return (
    <>
      {/* Floating launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir Noor, compagnon IA"
          className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 group"
        >
          <span className="absolute inset-0 rounded-full bg-gold/40 blur-xl animate-glow-pulse" />
          <span className="relative flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-gold)] active:scale-95 transition-transform">
            <Moon className="w-5 h-5 text-gold drop-shadow" />
            <span className="font-display font-bold text-sm hidden sm:inline">Noor</span>
          </span>
        </button>
      )}

      {/* Panel */}
      <div
        className={cn(
          "fixed inset-0 z-[60] pointer-events-none transition-opacity",
          open ? "opacity-100" : "opacity-0",
        )}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-foreground/30 backdrop-blur-sm transition-opacity",
            open ? "pointer-events-auto opacity-100" : "opacity-0",
          )}
        />
        {/* Sheet */}
        <aside
          role="dialog"
          aria-label="Noor"
          className={cn(
            "absolute right-0 top-0 h-full w-full sm:max-w-md bg-background border-l border-border shadow-2xl flex flex-col transition-transform duration-300",
            open ? "translate-x-0 pointer-events-auto" : "translate-x-full",
          )}
        >
          {/* Header */}
          <header className="px-5 py-4 border-b border-border flex items-center justify-between bg-[image:var(--gradient-primary)] text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 grid place-items-center ring-1 ring-gold/40">
                <Moon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="font-display font-bold leading-tight">Noor</div>
                <div className="text-xs opacity-80">Coran, tafsir, hadith &amp; savants</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="w-9 h-9 rounded-full grid place-items-center hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </header>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
            {messages.length === 0 && (
              <div className="space-y-4 animate-fade-in-up">
                <div className="text-center pt-2">
                  <Sparkles className="w-6 h-6 text-gold mx-auto" />
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">
                    Pose-moi une question sur le deen. Je réponds avec le Coran, le tafsir,
                    les hadiths fiables et les paroles de savants.
                  </p>
                </div>
                <div className="grid gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => submit(s)}
                      className="text-left text-sm px-3 py-2.5 rounded-xl border border-border bg-card hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => {
              const text = partsToText(m.parts);
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={cn(
                    "flex animate-fade-in-up",
                    isUser ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap leading-relaxed",
                      isUser
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-foreground rounded-bl-md",
                    )}
                  >
                    {text || (busy ? <span className="opacity-60">…</span> : null)}
                  </div>
                </div>
              );
            })}

            {status === "submitted" && (
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Loader2 className="w-4 h-4 animate-spin" />
                Noor réfléchit…
              </div>
            )}

            {error && (
              <div className="text-sm text-destructive bg-destructive/10 rounded-xl px-3 py-2">
                {error.message || "Erreur. Réessaie."}
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="p-3 border-t border-border bg-card"
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submit();
                  }
                }}
                rows={1}
                placeholder="Demande à Noor…"
                className="flex-1 resize-none rounded-2xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 max-h-32"
                disabled={busy}
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="w-11 h-11 rounded-full grid place-items-center bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)] disabled:opacity-40 active:scale-95 transition-transform"
                aria-label="Envoyer"
              >
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 text-center">
              Noor cite ses références. Pour une fatwa personnelle, consulte un savant qualifié.
            </p>
          </form>
        </aside>
      </div>
    </>
  );
}
