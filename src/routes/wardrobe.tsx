import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Coins, Lock, Check, Sparkles } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useGame } from "@/lib/game";
import { ITEMS, rarityColor, rarityLabel, type Slot, type Gender, type OutfitItem } from "@/lib/wardrobe";
import { AdSenseBanner } from "@/components/AdSenseBanner";

export const Route = createFileRoute("/wardrobe")({
  head: () => ({
    meta: [
      { title: "Vestiaire — Nour" },
      { name: "description", content: "Personnalise ton avatar musulman avec des thobes, abayas, hijabs et accessoires." },
    ],
  }),
  component: WardrobePage,
});

const SLOTS: { id: Slot; label: string }[] = [
  { id: "garment", label: "Tenue" },
  { id: "headwear", label: "Coiffe" },
  { id: "accessory", label: "Accessoire" },
  { id: "background", label: "Décor" },
];

function WardrobePage() {
  const { user, ready: authReady } = useAuth();
  const navigate = useNavigate();
  const { state, ready, setGender, equip, buyItem } = useGame();
  const [slot, setSlot] = useState<Slot>("garment");

  useEffect(() => {
    if (authReady && !user) navigate({ to: "/login" });
  }, [authReady, user, navigate]);

  if (!ready) return null;

  const items = ITEMS.filter(
    (i) => i.slot === slot && (i.gender === "any" || i.gender === state.gender)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Retour
          </Link>
          <Link to="/chests" className="inline-flex items-center gap-1 text-sm font-bold text-primary">
            <Sparkles className="w-4 h-4" /> Coffres
          </Link>
        </div>

        <header className="text-center">
          <h1 className="font-display text-3xl font-bold">Mon vestiaire</h1>
          <p className="text-muted-foreground text-sm mt-1">Habille ton avatar avec dignité.</p>
        </header>

        <section className="flex flex-col items-center gap-4">
          <Avatar equipped={state.equipped} gender={state.gender} size={240} />
          <div className="flex items-center gap-2 bg-secondary rounded-full p-1">
            {(["male", "female"] as Gender[]).map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition ${
                  state.gender === g ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]" : "text-muted-foreground"
                }`}
              >
                {g === "male" ? "Homme" : "Femme"}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-gold/10 text-gold-foreground px-4 py-2 rounded-full font-bold">
            <Coins className="w-4 h-4 text-gold" fill="currentColor" /> {state.coins} pièces
          </div>
        </section>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {SLOTS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSlot(s.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${
                slot === s.id ? "bg-foreground text-background" : "bg-secondary text-muted-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              owned={state.inventory.includes(item.id) || item.price === 0}
              equipped={state.equipped[item.slot] === item.id}
              coins={state.coins}
              onEquip={() => equip(item.slot, item.id)}
              onBuy={() => {
                if (buyItem(item.id, item.price)) {
                  equip(item.slot, item.id);
                  toast.success(`${item.name} acheté !`);
                } else {
                  toast.error("Pas assez de pièces.");
                }
              }}
              onUnequip={() => equip(item.slot, "")}
            />
          ))}
        </section>

        <AdSenseBanner />
      </main>
    </div>
  );
}

function ItemCard({
  item,
  owned,
  equipped,
  coins,
  onEquip,
  onBuy,
  onUnequip,
}: {
  item: OutfitItem;
  owned: boolean;
  equipped: boolean;
  coins: number;
  onEquip: () => void;
  onBuy: () => void;
  onUnequip: () => void;
}) {
  return (
    <div
      className="rounded-2xl border-2 bg-card p-3 flex flex-col items-center gap-2"
      style={{ borderColor: equipped ? "var(--primary)" : "transparent" }}
    >
      <div
        className="w-full aspect-square rounded-xl grid place-items-center text-3xl"
        style={{
          background: item.secondary
            ? `linear-gradient(135deg, ${item.color}, ${item.secondary})`
            : item.color,
        }}
      >
        {item.emoji ?? ""}
      </div>
      <div className="w-full text-center">
        <div className="text-xs font-bold truncate">{item.name}</div>
        <div
          className="text-[10px] uppercase tracking-wide font-bold"
          style={{ color: rarityColor(item.rarity) }}
        >
          {rarityLabel(item.rarity)}
        </div>
      </div>
      {equipped ? (
        <Button size="sm" variant="outline" className="w-full h-8 text-xs" onClick={onUnequip}>
          <Check className="w-3 h-3 mr-1" /> Équipé
        </Button>
      ) : owned ? (
        <Button size="sm" className="w-full h-8 text-xs" onClick={onEquip}>
          Équiper
        </Button>
      ) : (
        <Button
          size="sm"
          variant="outline"
          disabled={coins < item.price}
          className="w-full h-8 text-xs gap-1"
          onClick={onBuy}
        >
          {coins < item.price ? <Lock className="w-3 h-3" /> : <Coins className="w-3 h-3" />}
          {item.price}
        </Button>
      )}
    </div>
  );
}
