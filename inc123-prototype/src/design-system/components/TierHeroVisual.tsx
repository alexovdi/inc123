import { cn } from "@/design-system/utils/cn";
import type { HeroVisualVariant, MetallicAccent } from "@/data/tierContent";

/* ------------------------------------------------
   Tier hero visual — three variants
   Purely SVG/CSS. No external image assets.
   ------------------------------------------------ */

export interface TierHeroVisualProps {
  variant: HeroVisualVariant;
  metallic: MetallicAccent;
  /** Tier display name — "Gold", "Silver", "Bronze" */
  tierName: string;
  /** State abbreviation — "WY", "NV", "CA", "FL" */
  stateAbbreviation?: string;
  /** State display name — "Wyoming", "Nevada", "California", "Florida" */
  stateName?: string;
  className?: string;
}

/** Map metallic accent → CSS variable name so we can reference in inline style. */
const metallicVars: Record<
  MetallicAccent,
  { base: string; soft: string; mid: string; ink: string }
> = {
  gold: {
    base: "var(--tier-gold)",
    soft: "var(--tier-gold-soft)",
    mid: "var(--tier-gold-mid)",
    ink: "var(--tier-gold-ink)",
  },
  silver: {
    base: "var(--tier-silver)",
    soft: "var(--tier-silver-soft)",
    mid: "var(--tier-silver-mid)",
    ink: "var(--tier-silver-ink)",
  },
  bronze: {
    base: "var(--tier-bronze)",
    soft: "var(--tier-bronze-soft)",
    mid: "var(--tier-bronze-mid)",
    ink: "var(--tier-bronze-ink)",
  },
};

/* ------------------------------------------------
   Variant A — Documents stack
   Three tilted document cards with a tier seal.
   Feels commercial: shows what you're buying.
   ------------------------------------------------ */
function DocsVariant({
  metallic,
  tierName,
  stateAbbreviation,
}: Omit<TierHeroVisualProps, "variant">) {
  const c = metallicVars[metallic];
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-[440px]"
      aria-hidden
    >
      {/* Back paper — articles of organization */}
      <div className="absolute inset-x-6 top-4 h-[80%] rounded-[10px] border border-white/20 bg-white/[0.04] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm rotate-[-6deg]">
        <div className="flex h-full flex-col gap-2 p-6">
          <div
            className="h-1 w-16 rounded-full"
            style={{ background: c.ink }}
          />
          <div className="h-2 w-32 rounded-full bg-white/40" />
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-[80%] rounded-full bg-white/20" />
            <div className="h-1.5 w-[65%] rounded-full bg-white/20" />
            <div className="h-1.5 w-[72%] rounded-full bg-white/20" />
            <div className="h-1.5 w-[55%] rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* Middle paper — operating agreement */}
      <div className="absolute inset-x-10 top-10 h-[78%] rounded-[10px] border border-white/25 bg-white/[0.07] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.7)] backdrop-blur-sm rotate-[2deg]">
        <div className="flex h-full flex-col gap-2 p-6">
          <div
            className="h-1 w-12 rounded-full"
            style={{ background: c.ink }}
          />
          <div className="h-2 w-36 rounded-full bg-white/50" />
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-[85%] rounded-full bg-white/25" />
            <div className="h-1.5 w-[70%] rounded-full bg-white/25" />
            <div className="h-1.5 w-[78%] rounded-full bg-white/25" />
            <div className="h-1.5 w-[60%] rounded-full bg-white/25" />
            <div className="h-1.5 w-[75%] rounded-full bg-white/25" />
          </div>
        </div>
      </div>

      {/* Front paper — EIN letter / bank kit */}
      <div
        className="absolute inset-x-4 top-20 h-[72%] rounded-[10px] border bg-white/[0.96] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8)] rotate-[-1deg]"
        style={{ borderColor: c.mid }}
      >
        <div className="flex h-full flex-col gap-3 p-6">
          <div className="flex items-center justify-between">
            <div
              className="h-1 w-14 rounded-full"
              style={{ background: c.base }}
            />
            <div
              className="text-[9px] font-mono uppercase tracking-[0.18em]"
              style={{ color: c.ink }}
            >
              {stateAbbreviation ?? "WY"} · {tierName}
            </div>
          </div>
          <div className="h-2.5 w-44 rounded-full bg-slate-800/85" />
          <div
            className="h-1.5 w-28 rounded-full"
            style={{ background: c.base }}
          />
          <div className="mt-3 space-y-2">
            <div className="h-1.5 w-[90%] rounded-full bg-slate-400/50" />
            <div className="h-1.5 w-[82%] rounded-full bg-slate-400/50" />
            <div className="h-1.5 w-[88%] rounded-full bg-slate-400/50" />
            <div className="h-1.5 w-[70%] rounded-full bg-slate-400/50" />
            <div className="h-1.5 w-[75%] rounded-full bg-slate-400/50" />
            <div className="h-1.5 w-[60%] rounded-full bg-slate-400/50" />
          </div>
          {/* Bottom signature line + tier seal */}
          <div className="mt-auto flex items-end justify-between">
            <div className="space-y-1">
              <div className="h-px w-24 bg-slate-400/70" />
              <div className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
                Signature
              </div>
            </div>
            <TierSeal metallic={metallic} label={tierName} size={56} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------
   Variant B — Privacy shield
   Abstract shield with lock + redacted lines.
   Feels conceptual: dramatizes the core promise.
   ------------------------------------------------ */
function ShieldVariant({
  metallic,
  tierName,
  stateAbbreviation,
}: Omit<TierHeroVisualProps, "variant">) {
  const c = metallicVars[metallic];
  return (
    <div
      className="relative mx-auto flex aspect-[4/5] w-full max-w-[440px] items-center justify-center"
      aria-hidden
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-8 rounded-full blur-3xl opacity-40"
        style={{ background: c.base }}
      />

      <svg
        viewBox="0 0 320 380"
        className="relative h-full w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
      >
        <defs>
          <linearGradient id="shieldFace" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={c.mid} stopOpacity="0.35" />
            <stop offset="100%" stopColor={c.base} stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="shieldEdge" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={c.ink} />
            <stop offset="50%" stopColor={c.mid} />
            <stop offset="100%" stopColor={c.base} />
          </linearGradient>
        </defs>

        {/* Shield silhouette */}
        <path
          d="M160 20 L290 60 L290 190 Q290 290 160 360 Q30 290 30 190 L30 60 Z"
          fill="url(#shieldFace)"
          stroke="url(#shieldEdge)"
          strokeWidth="3"
        />

        {/* Inner shield frame */}
        <path
          d="M160 44 L272 78 L272 188 Q272 275 160 336 Q48 275 48 188 L48 78 Z"
          fill="none"
          stroke={c.mid}
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Lock icon */}
        <g transform="translate(160, 150)">
          <rect
            x="-30"
            y="-10"
            width="60"
            height="50"
            rx="4"
            fill={c.base}
            opacity="0.9"
          />
          <path
            d="M-18 -10 L-18 -28 Q-18 -45 0 -45 Q18 -45 18 -28 L18 -10"
            fill="none"
            stroke={c.mid}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="0" cy="12" r="4" fill={c.soft} />
          <rect x="-1.5" y="12" width="3" height="12" fill={c.soft} />
        </g>

        {/* Redacted name bars — dramatizes 'your name, off the record' */}
        <g transform="translate(160, 225)">
          <rect
            x="-70"
            y="0"
            width="140"
            height="8"
            rx="1"
            fill={c.ink}
            opacity="0.55"
          />
          <rect
            x="-50"
            y="16"
            width="100"
            height="8"
            rx="1"
            fill={c.ink}
            opacity="0.45"
          />
          <rect
            x="-60"
            y="32"
            width="120"
            height="8"
            rx="1"
            fill={c.ink}
            opacity="0.35"
          />
        </g>

        {/* State + tier label along bottom */}
        <text
          x="160"
          y="310"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="11"
          letterSpacing="3"
          fill={c.mid}
        >
          {(stateAbbreviation ?? "WY") + " · " + tierName.toUpperCase()}
        </text>
        <line
          x1="110"
          y1="318"
          x2="210"
          y2="318"
          stroke={c.mid}
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------
   Variant C — State seal + tier medallion
   State outline with a tier medallion overlay.
   Feels official: leans on state-specific trust.
   ------------------------------------------------ */
function SealVariant({
  metallic,
  tierName,
  stateAbbreviation,
  stateName,
}: Omit<TierHeroVisualProps, "variant">) {
  const c = metallicVars[metallic];
  const abbr = stateAbbreviation ?? "WY";
  // Approximated state outline paths — stylized, not geographically exact.
  const statePaths: Record<string, string> = {
    WY: "M40 60 L280 60 L280 260 L40 260 Z",
    NV: "M60 50 L240 50 L280 260 L120 290 Z",
    CA: "M90 40 L220 50 L240 140 L220 200 L260 300 L180 330 L110 290 L60 180 Z",
    FL: "M50 80 L250 60 L265 120 L220 140 L220 200 L280 280 L230 310 L150 200 L120 220 L80 170 Z",
  };

  return (
    <div
      className="relative mx-auto flex aspect-[4/5] w-full max-w-[440px] items-center justify-center"
      aria-hidden
    >
      {/* Concentric rings */}
      <div
        className="absolute inset-16 rounded-full border opacity-20"
        style={{ borderColor: c.mid }}
      />
      <div
        className="absolute inset-8 rounded-full border opacity-15"
        style={{ borderColor: c.mid }}
      />

      <svg viewBox="0 0 320 380" className="relative h-full w-full">
        <defs>
          <linearGradient id="sealRing" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={c.mid} />
            <stop offset="100%" stopColor={c.base} />
          </linearGradient>
        </defs>

        {/* State silhouette — centered */}
        <g transform="translate(0, 20)">
          <path
            d={statePaths[abbr] ?? statePaths.WY}
            fill={c.base}
            opacity="0.2"
            stroke={c.mid}
            strokeWidth="2"
          />
          <text
            x="160"
            y="175"
            textAnchor="middle"
            fontFamily="var(--font-display, sans-serif)"
            fontSize="64"
            fontWeight="700"
            fill={c.mid}
            opacity="0.35"
          >
            {abbr}
          </text>
        </g>

        {/* Tier medallion overlay — bottom right */}
        <g transform="translate(215, 265)">
          <circle
            cx="0"
            cy="0"
            r="58"
            fill="url(#sealRing)"
            stroke={c.ink}
            strokeWidth="2"
          />
          <circle
            cx="0"
            cy="0"
            r="48"
            fill="none"
            stroke={c.soft}
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          <text
            x="0"
            y="-6"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="8"
            letterSpacing="2"
            fill={c.soft}
            opacity="0.8"
          >
            INC123
          </text>
          <text
            x="0"
            y="12"
            textAnchor="middle"
            fontFamily="var(--font-display, sans-serif)"
            fontSize="17"
            fontWeight="700"
            fill="#ffffff"
            letterSpacing="1"
          >
            {tierName.toUpperCase()}
          </text>
          <text
            x="0"
            y="26"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="6"
            letterSpacing="2"
            fill={c.soft}
            opacity="0.7"
          >
            SINCE 1999
          </text>
        </g>

        {/* State name ribbon — bottom */}
        <g transform="translate(160, 360)">
          <rect x="-90" y="-12" width="180" height="22" rx="2" fill={c.ink} />
          <text
            x="0"
            y="3"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="10"
            letterSpacing="4"
            fill={c.soft}
          >
            {(stateName ?? "WYOMING").toUpperCase()}
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ------------------------------------------------
   Small tier seal — reused by DocsVariant
   ------------------------------------------------ */
function TierSeal({
  metallic,
  label,
  size = 48,
}: {
  metallic: MetallicAccent;
  label: string;
  size?: number;
}) {
  const c = metallicVars[metallic];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id={`sealGrad-${metallic}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={c.mid} />
          <stop offset="100%" stopColor={c.base} />
        </linearGradient>
      </defs>
      <circle
        cx="24"
        cy="24"
        r="22"
        fill={`url(#sealGrad-${metallic})`}
        stroke={c.ink}
        strokeWidth="1.5"
      />
      <circle
        cx="24"
        cy="24"
        r="17"
        fill="none"
        stroke={c.soft}
        strokeOpacity="0.6"
        strokeWidth="0.75"
      />
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fontFamily="var(--font-display, sans-serif)"
        fontSize="10"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="0.6"
      >
        {label.slice(0, 1).toUpperCase()}
        {label.slice(1, 4).toLowerCase()}
      </text>
    </svg>
  );
}

/* ------------------------------------------------
   Public component — switches on variant
   ------------------------------------------------ */
function TierHeroVisual({
  variant,
  metallic,
  tierName,
  stateAbbreviation,
  stateName,
  className,
}: TierHeroVisualProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {variant === "docs" && (
        <DocsVariant
          metallic={metallic}
          tierName={tierName}
          stateAbbreviation={stateAbbreviation}
          stateName={stateName}
        />
      )}
      {variant === "shield" && (
        <ShieldVariant
          metallic={metallic}
          tierName={tierName}
          stateAbbreviation={stateAbbreviation}
          stateName={stateName}
        />
      )}
      {variant === "seal" && (
        <SealVariant
          metallic={metallic}
          tierName={tierName}
          stateAbbreviation={stateAbbreviation}
          stateName={stateName}
        />
      )}
    </div>
  );
}

TierHeroVisual.displayName = "TierHeroVisual";

export { TierHeroVisual };
