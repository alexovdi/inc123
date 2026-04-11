import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
type PillarType = "privacy" | "asset" | "formation" | "compliance";

interface PillarIllustrationProps {
  pillar: PillarType;
  className?: string;
}

/* ------------------------------------------------
   Color maps
   ------------------------------------------------ */
const pillarColors: Record<
  PillarType,
  { primary: string; soft: string; mid: string }
> = {
  privacy: {
    primary: "var(--pillar-privacy, #2563eb)",
    soft: "var(--pillar-privacy-soft, #dbeafe)",
    mid: "var(--pillar-privacy-mid, #93bbfd)",
  },
  asset: {
    primary: "var(--pillar-asset, #16a34a)",
    soft: "var(--pillar-asset-soft, #dcfce7)",
    mid: "var(--pillar-asset-mid, #86efac)",
  },
  formation: {
    primary: "var(--pillar-formation, #d97706)",
    soft: "var(--pillar-formation-soft, #fef3c7)",
    mid: "var(--pillar-formation-mid, #fcd34d)",
  },
  compliance: {
    primary: "var(--pillar-compliance, #9333ea)",
    soft: "var(--pillar-compliance-soft, #f3e8ff)",
    mid: "var(--pillar-compliance-mid, #c084fc)",
  },
};

/* ------------------------------------------------
   Privacy: Shield with layers
   ------------------------------------------------ */
function PrivacyIllustration({
  colors,
}: {
  colors: typeof pillarColors.privacy;
}) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circles */}
      <circle cx="200" cy="150" r="120" fill={colors.soft} opacity="0.3" />
      <circle cx="200" cy="150" r="80" fill={colors.soft} opacity="0.5" />

      {/* Shield shape */}
      <path
        d="M200 50 L280 90 L280 170 C280 220 240 260 200 280 C160 260 120 220 120 170 L120 90 Z"
        fill={colors.soft}
        stroke={colors.primary}
        strokeWidth="2"
        opacity="0.8"
      />
      <path
        d="M200 70 L265 105 L265 170 C265 210 235 245 200 262 C165 245 135 210 135 170 L135 105 Z"
        fill="white"
        stroke={colors.mid}
        strokeWidth="1.5"
        opacity="0.9"
      />

      {/* Lock icon in center */}
      <rect
        x="185"
        y="140"
        width="30"
        height="25"
        rx="4"
        fill={colors.primary}
        opacity="0.8"
      />
      <path
        d="M190 140 L190 130 C190 122 195 117 200 117 C205 117 210 122 210 130 L210 140"
        stroke={colors.primary}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="200" cy="150" r="3" fill="white" />

      {/* Decorative dots */}
      <circle cx="90" cy="80" r="4" fill={colors.mid} opacity="0.4" />
      <circle cx="310" cy="100" r="6" fill={colors.mid} opacity="0.3" />
      <circle cx="100" cy="240" r="5" fill={colors.mid} opacity="0.35" />
      <circle cx="320" cy="220" r="3" fill={colors.mid} opacity="0.4" />
    </svg>
  );
}

/* ------------------------------------------------
   Asset: Vault with layers
   ------------------------------------------------ */
function AssetIllustration({ colors }: { colors: typeof pillarColors.asset }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="150" r="120" fill={colors.soft} opacity="0.3" />
      <circle cx="200" cy="150" r="80" fill={colors.soft} opacity="0.5" />

      {/* Vault door */}
      <rect
        x="140"
        y="80"
        width="120"
        height="140"
        rx="8"
        fill={colors.soft}
        stroke={colors.primary}
        strokeWidth="2"
        opacity="0.8"
      />
      <rect
        x="150"
        y="90"
        width="100"
        height="120"
        rx="4"
        fill="white"
        stroke={colors.mid}
        strokeWidth="1.5"
        opacity="0.9"
      />

      {/* Vault dial */}
      <circle
        cx="200"
        cy="150"
        r="25"
        fill={colors.soft}
        stroke={colors.primary}
        strokeWidth="2"
      />
      <circle
        cx="200"
        cy="150"
        r="18"
        fill="white"
        stroke={colors.mid}
        strokeWidth="1"
      />
      <circle cx="200" cy="150" r="3" fill={colors.primary} />
      <line
        x1="200"
        y1="132"
        x2="200"
        y2="140"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Handle */}
      <rect
        x="230"
        y="142"
        width="15"
        height="16"
        rx="3"
        fill={colors.primary}
        opacity="0.7"
      />

      {/* Stacked bars representing assets */}
      <rect
        x="160"
        y="195"
        width="80"
        height="6"
        rx="3"
        fill={colors.mid}
        opacity="0.5"
      />
      <rect
        x="165"
        y="185"
        width="70"
        height="6"
        rx="3"
        fill={colors.mid}
        opacity="0.4"
      />

      <circle cx="90" cy="80" r="4" fill={colors.mid} opacity="0.4" />
      <circle cx="320" cy="100" r="6" fill={colors.mid} opacity="0.3" />
      <circle cx="100" cy="240" r="5" fill={colors.mid} opacity="0.35" />
    </svg>
  );
}

/* ------------------------------------------------
   Formation: Document with checkmarks
   ------------------------------------------------ */
function FormationIllustration({
  colors,
}: {
  colors: typeof pillarColors.formation;
}) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="150" r="120" fill={colors.soft} opacity="0.3" />
      <circle cx="200" cy="150" r="80" fill={colors.soft} opacity="0.5" />

      {/* Document */}
      <rect
        x="150"
        y="60"
        width="110"
        height="150"
        rx="6"
        fill={colors.soft}
        stroke={colors.primary}
        strokeWidth="2"
        opacity="0.8"
      />
      <rect
        x="160"
        y="70"
        width="90"
        height="130"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="1"
        opacity="0.9"
      />

      {/* Lines of text */}
      <rect
        x="175"
        y="90"
        width="55"
        height="4"
        rx="2"
        fill={colors.mid}
        opacity="0.5"
      />
      <rect
        x="175"
        y="102"
        width="45"
        height="4"
        rx="2"
        fill={colors.mid}
        opacity="0.4"
      />

      {/* Checkmarks */}
      <circle cx="182" cy="125" r="8" fill={colors.soft} />
      <path
        d="M178 125 L181 128 L187 121"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="182" cy="148" r="8" fill={colors.soft} />
      <path
        d="M178 148 L181 151 L187 144"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="182" cy="171" r="8" fill={colors.soft} />
      <path
        d="M178 171 L181 174 L187 167"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <rect
        x="195"
        y="122"
        width="40"
        height="4"
        rx="2"
        fill={colors.mid}
        opacity="0.4"
      />
      <rect
        x="195"
        y="145"
        width="35"
        height="4"
        rx="2"
        fill={colors.mid}
        opacity="0.4"
      />
      <rect
        x="195"
        y="168"
        width="42"
        height="4"
        rx="2"
        fill={colors.mid}
        opacity="0.4"
      />

      {/* Stamp/seal */}
      <circle
        cx="230"
        cy="230"
        r="20"
        fill={colors.soft}
        stroke={colors.primary}
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle
        cx="230"
        cy="230"
        r="14"
        fill="none"
        stroke={colors.primary}
        strokeWidth="1"
        opacity="0.4"
      />

      <circle cx="90" cy="100" r="4" fill={colors.mid} opacity="0.4" />
      <circle cx="320" cy="80" r="6" fill={colors.mid} opacity="0.3" />
    </svg>
  );
}

/* ------------------------------------------------
   Compliance: Calendar with checkmarks
   ------------------------------------------------ */
function ComplianceIllustration({
  colors,
}: {
  colors: typeof pillarColors.compliance;
}) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="150" r="120" fill={colors.soft} opacity="0.3" />
      <circle cx="200" cy="150" r="80" fill={colors.soft} opacity="0.5" />

      {/* Calendar body */}
      <rect
        x="135"
        y="75"
        width="130"
        height="150"
        rx="8"
        fill={colors.soft}
        stroke={colors.primary}
        strokeWidth="2"
        opacity="0.8"
      />
      {/* Calendar header */}
      <rect
        x="135"
        y="75"
        width="130"
        height="35"
        rx="8"
        fill={colors.primary}
        opacity="0.15"
      />
      <rect
        x="135"
        y="95"
        width="130"
        height="15"
        fill={colors.primary}
        opacity="0.15"
      />

      {/* Calendar pegs */}
      <rect
        x="165"
        y="68"
        width="8"
        height="18"
        rx="4"
        fill={colors.primary}
        opacity="0.6"
      />
      <rect
        x="227"
        y="68"
        width="8"
        height="18"
        rx="4"
        fill={colors.primary}
        opacity="0.6"
      />

      {/* Calendar grid */}
      <rect
        x="148"
        y="120"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />
      <rect
        x="172"
        y="120"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />
      <rect
        x="196"
        y="120"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />
      <rect
        x="220"
        y="120"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />

      <rect
        x="148"
        y="145"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />
      <rect
        x="172"
        y="145"
        width="18"
        height="18"
        rx="3"
        fill={colors.soft}
        stroke={colors.primary}
        strokeWidth="1"
      />
      <rect
        x="196"
        y="145"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />
      <rect
        x="220"
        y="145"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />

      <rect
        x="148"
        y="170"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />
      <rect
        x="172"
        y="170"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />
      <rect
        x="196"
        y="170"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />
      <rect
        x="220"
        y="170"
        width="18"
        height="18"
        rx="3"
        fill="white"
        stroke={colors.mid}
        strokeWidth="0.5"
      />

      {/* Check on highlighted date */}
      <path
        d="M177 152 L180 156 L187 148"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Small check badge */}
      <circle
        cx="280"
        cy="110"
        r="16"
        fill={colors.soft}
        stroke={colors.primary}
        strokeWidth="1.5"
      />
      <path
        d="M274 110 L278 114 L286 106"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="100" cy="100" r="4" fill={colors.mid} opacity="0.4" />
      <circle cx="310" cy="220" r="5" fill={colors.mid} opacity="0.3" />
    </svg>
  );
}

/* ------------------------------------------------
   Main Component
   ------------------------------------------------ */
function PillarIllustration({ pillar, className }: PillarIllustrationProps) {
  const colors = pillarColors[pillar];

  return (
    <div className={cn("mx-auto max-w-[280px] opacity-80", className)}>
      {pillar === "privacy" && <PrivacyIllustration colors={colors} />}
      {pillar === "asset" && <AssetIllustration colors={colors} />}
      {pillar === "formation" && <FormationIllustration colors={colors} />}
      {pillar === "compliance" && <ComplianceIllustration colors={colors} />}
    </div>
  );
}

PillarIllustration.displayName = "PillarIllustration";

export { PillarIllustration };
export type { PillarIllustrationProps };
