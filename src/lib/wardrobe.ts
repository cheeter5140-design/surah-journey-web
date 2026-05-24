// Wardrobe catalog: outfit items for the avatar.
// Each item belongs to a slot. Equipped = { slot: itemId }.

export type Gender = "male" | "female";
export type Rarity = "common" | "rare" | "legendary";
export type Slot = "garment" | "headwear" | "accessory" | "background";

export interface OutfitItem {
  id: string;
  name: string;
  slot: Slot;
  gender: Gender | "any";
  rarity: Rarity;
  color: string; // primary swatch
  secondary?: string;
  emoji?: string;
  price: number; // coins
}

export const ITEMS: OutfitItem[] = [
  // Garments - male (thobe)
  { id: "thobe_white", name: "Thobe blanc", slot: "garment", gender: "male", rarity: "common", color: "#f8fafc", price: 0 },
  { id: "thobe_beige", name: "Thobe beige", slot: "garment", gender: "male", rarity: "common", color: "#e7d7b1", price: 150 },
  { id: "thobe_navy", name: "Thobe bleu nuit", slot: "garment", gender: "male", rarity: "rare", color: "#1e3a8a", price: 400 },
  { id: "thobe_emerald", name: "Thobe émeraude", slot: "garment", gender: "male", rarity: "rare", color: "#047857", price: 400 },
  { id: "thobe_royal", name: "Bisht doré", slot: "garment", gender: "male", rarity: "legendary", color: "#7c2d12", secondary: "#facc15", price: 1200 },

  // Garments - female (abaya)
  { id: "abaya_black", name: "Abaya noire", slot: "garment", gender: "female", rarity: "common", color: "#1f2937", price: 0 },
  { id: "abaya_sage", name: "Abaya sauge", slot: "garment", gender: "female", rarity: "common", color: "#a3b8a0", price: 150 },
  { id: "abaya_rose", name: "Abaya rose poudré", slot: "garment", gender: "female", rarity: "rare", color: "#f9a8d4", price: 400 },
  { id: "abaya_emerald", name: "Abaya émeraude", slot: "garment", gender: "female", rarity: "rare", color: "#047857", price: 400 },
  { id: "abaya_royal", name: "Abaya brodée or", slot: "garment", gender: "female", rarity: "legendary", color: "#312e81", secondary: "#facc15", price: 1200 },

  // Headwear - male
  { id: "kufi_white", name: "Kufi blanc", slot: "headwear", gender: "male", rarity: "common", color: "#f8fafc", price: 80 },
  { id: "kufi_emerald", name: "Kufi émeraude", slot: "headwear", gender: "male", rarity: "rare", color: "#047857", price: 250 },
  { id: "turban_white", name: "Turban blanc", slot: "headwear", gender: "male", rarity: "rare", color: "#f5f5f4", price: 350 },
  { id: "imama_gold", name: "Imama dorée", slot: "headwear", gender: "male", rarity: "legendary", color: "#facc15", price: 900 },

  // Headwear - female (hijab)
  { id: "hijab_white", name: "Hijab blanc", slot: "headwear", gender: "female", rarity: "common", color: "#f8fafc", price: 80 },
  { id: "hijab_cream", name: "Hijab crème", slot: "headwear", gender: "female", rarity: "common", color: "#fef3c7", price: 80 },
  { id: "hijab_emerald", name: "Hijab émeraude", slot: "headwear", gender: "female", rarity: "rare", color: "#047857", price: 250 },
  { id: "hijab_silk", name: "Hijab soie violette", slot: "headwear", gender: "female", rarity: "rare", color: "#7c3aed", price: 350 },
  { id: "hijab_gold", name: "Hijab brodé or", slot: "headwear", gender: "female", rarity: "legendary", color: "#fde68a", secondary: "#b45309", price: 900 },

  // Accessories
  { id: "tasbih_wood", name: "Tasbih en bois", slot: "accessory", gender: "any", rarity: "common", color: "#92400e", emoji: "📿", price: 120 },
  { id: "tasbih_pearl", name: "Tasbih nacré", slot: "accessory", gender: "any", rarity: "rare", color: "#f5f5f4", emoji: "📿", price: 350 },
  { id: "miswak", name: "Miswak", slot: "accessory", gender: "any", rarity: "common", color: "#854d0e", emoji: "🌿", price: 100 },
  { id: "quran_book", name: "Mushaf doré", slot: "accessory", gender: "any", rarity: "legendary", color: "#16a34a", secondary: "#facc15", emoji: "📖", price: 800 },

  // Backgrounds
  { id: "bg_mosque", name: "Mosquée au coucher", slot: "background", gender: "any", rarity: "common", color: "#fb923c", secondary: "#7c2d12", price: 200 },
  { id: "bg_madinah", name: "Madinah", slot: "background", gender: "any", rarity: "rare", color: "#10b981", secondary: "#064e3b", price: 500 },
  { id: "bg_kaaba", name: "Kaaba", slot: "background", gender: "any", rarity: "legendary", color: "#0f172a", secondary: "#facc15", price: 1500 },
  { id: "bg_oasis", name: "Oasis", slot: "background", gender: "any", rarity: "rare", color: "#fde68a", secondary: "#15803d", price: 500 },
];

export function getItem(id: string): OutfitItem | undefined {
  return ITEMS.find((i) => i.id === id);
}

export function defaultEquipped(gender: Gender): Record<Slot, string> {
  return {
    garment: gender === "male" ? "thobe_white" : "abaya_black",
    headwear: gender === "male" ? "kufi_white" : "hijab_white",
    accessory: "",
    background: "",
  };
}

export function rarityColor(r: Rarity): string {
  return r === "legendary" ? "#facc15" : r === "rare" ? "#a855f7" : "#94a3b8";
}

export function rarityLabel(r: Rarity): string {
  return r === "legendary" ? "Légendaire" : r === "rare" ? "Rare" : "Commun";
}

// Pull a random item the user doesn't already own (weighted by rarity).
export function rollChestItem(owned: string[], gender: Gender): OutfitItem | null {
  const pool = ITEMS.filter(
    (i) => !owned.includes(i.id) && (i.gender === "any" || i.gender === gender)
  );
  if (pool.length === 0) return null;
  const weights = pool.map((i) =>
    i.rarity === "common" ? 70 : i.rarity === "rare" ? 25 : 5
  );
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < pool.length; i++) {
    r -= weights[i];
    if (r <= 0) return pool[i];
  }
  return pool[0];
}

export interface ChestReward {
  coins: number;
  item: OutfitItem | null;
}

export function rollChest(owned: string[], gender: Gender, kind: "daily" | "weekly" | "ad"): ChestReward {
  const coins =
    kind === "weekly"
      ? 200 + Math.floor(Math.random() * 200)
      : kind === "daily"
      ? 50 + Math.floor(Math.random() * 50)
      : 20 + Math.floor(Math.random() * 30);
  // Items more likely in weekly/daily, less in ad
  const itemChance = kind === "weekly" ? 0.9 : kind === "daily" ? 0.6 : 0.25;
  const item = Math.random() < itemChance ? rollChestItem(owned, gender) : null;
  return { coins, item };
}
