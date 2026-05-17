import { createFileRoute, Link } from "@tanstack/react-router";
import { Cloud, X } from "lucide-react";
import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { SurahPath } from "@/components/SurahPath";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nour — Apprends le Coran en t'amusant" },
      { name: "description", content: "Apprends les sourates du Coran à travers des leçons courtes et ludiques. Écoute, associe, complète." },
      { property: "og:title", content: "Nour — Apprends le Coran" },
      { property: "og:description", content: "Une approche gamifiée pour apprendre le Coran, sourate par sourate." },
    ],
  }),
  component: Index,
});

function Index() {
  const { user, ready } = useAuth();
  const [dismissed, setDismissed] = useState(false);
  const showBanner = ready && !user && !dismissed;

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      {showBanner && (
        <div className="bg-[image:var(--gradient-primary)] text-primary-foreground">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
            <Cloud className="w-5 h-5 shrink-0" />
            <p className="text-sm flex-1">
              <span className="font-bold">Sauvegarde ta progression.</span>{" "}
              <Link to="/login" className="underline underline-offset-2">Connecte-toi avec Google</Link>
            </p>
            <button onClick={() => setDismissed(true)} aria-label="Fermer">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      <main className="flex-1">
        <SurahPath />
      </main>
    </div>
  );
}
