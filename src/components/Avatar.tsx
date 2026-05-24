import { getItem, type Gender, type Slot } from "@/lib/wardrobe";

interface Props {
  equipped: Record<Slot, string>;
  gender: Gender;
  size?: number;
  className?: string;
}

export function Avatar({ equipped, gender, size = 220, className = "" }: Props) {
  const garment = getItem(equipped.garment);
  const head = getItem(equipped.headwear);
  const acc = getItem(equipped.accessory);
  const bg = getItem(equipped.background);

  const skin = "#e6c08b";
  const garmentColor = garment?.color ?? (gender === "male" ? "#f8fafc" : "#1f2937");
  const garmentTrim = garment?.secondary;
  const headColor = head?.color ?? (gender === "male" ? "#f8fafc" : "#f8fafc");
  const headTrim = head?.secondary;
  const bgColor1 = bg?.color ?? "var(--card)";
  const bgColor2 = bg?.secondary ?? "transparent";

  return (
    <div
      className={`relative rounded-3xl overflow-hidden grid place-items-end shadow-[var(--shadow-soft)] ${className}`}
      style={{
        width: size,
        height: size,
        background: bg ? `linear-gradient(180deg, ${bgColor1}, ${bgColor2})` : "var(--secondary)",
      }}
    >
      {/* Background motifs */}
      {bg?.id === "bg_kaaba" && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-sm" style={{ background: "#0f172a", boxShadow: `inset 0 0 0 2px ${bg.secondary}` }} />
      )}
      {bg?.id === "bg_mosque" && (
        <div className="absolute bottom-4 inset-x-4 h-10 rounded-t-full" style={{ background: bg.secondary }} />
      )}

      <svg viewBox="0 0 200 220" width={size} height={size} className="relative">
        {/* Body / garment */}
        <path
          d={gender === "male"
            ? "M50 220 L60 130 Q100 110 140 130 L150 220 Z"
            : "M40 220 L55 130 Q100 105 145 130 L160 220 Z"}
          fill={garmentColor}
          stroke="#00000022"
          strokeWidth="1"
        />
        {garmentTrim && (
          <path
            d="M70 220 L90 150 L110 150 L130 220"
            fill="none"
            stroke={garmentTrim}
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}
        {/* Neck */}
        <rect x="92" y="92" width="16" height="20" fill={skin} />
        {/* Head */}
        <circle cx="100" cy="80" r="26" fill={skin} />
        {/* Eyes */}
        <circle cx="92" cy="80" r="2" fill="#1f2937" />
        <circle cx="108" cy="80" r="2" fill="#1f2937" />
        {/* Mouth */}
        <path d="M93 92 Q100 96 107 92" stroke="#1f2937" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Beard for male */}
        {gender === "male" && (
          <path d="M80 80 Q100 110 120 80 Q120 96 100 100 Q80 96 80 80 Z" fill="#3f3f46" opacity="0.85" />
        )}

        {/* Headwear */}
        {gender === "male" && head && (
          head.id.startsWith("turban") || head.id.startsWith("imama") ? (
            <>
              <ellipse cx="100" cy="58" rx="32" ry="18" fill={headColor} />
              <ellipse cx="100" cy="50" rx="26" ry="12" fill={headColor} stroke={headTrim ?? "#00000022"} strokeWidth="2" />
            </>
          ) : (
            <path d="M74 65 Q100 35 126 65 Q126 70 100 68 Q74 70 74 65 Z" fill={headColor} stroke="#00000022" />
          )
        )}
        {gender === "female" && head && (
          <>
            {/* Hijab */}
            <path
              d="M62 80 Q60 38 100 32 Q140 38 138 80 Q138 110 120 116 L80 116 Q62 110 62 80 Z"
              fill={headColor}
              stroke={headTrim ?? "#00000022"}
              strokeWidth="2"
            />
            {/* Face oval cutout */}
            <ellipse cx="100" cy="82" rx="22" ry="26" fill={skin} />
            <circle cx="92" cy="82" r="2" fill="#1f2937" />
            <circle cx="108" cy="82" r="2" fill="#1f2937" />
            <path d="M93 94 Q100 98 107 94" stroke="#1f2937" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </>
        )}
      </svg>

      {/* Accessory floating bottom-right */}
      {acc && (
        <div className="absolute bottom-2 right-2 text-2xl drop-shadow-md">{acc.emoji ?? "✨"}</div>
      )}
    </div>
  );
}
