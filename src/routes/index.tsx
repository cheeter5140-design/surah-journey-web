import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { SurahPath } from "@/components/SurahPath";

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
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1">
        <SurahPath />
      </main>
    </div>
  );
}
