import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Shared pillar color maps
   Extracted from 23+ components to eliminate duplication.
   ------------------------------------------------ */

/** Border-top accent: border-t-pillar-* */
export const pillarBorderTopMap: Record<PillarName, string> = {
  privacy: "border-t-pillar-privacy",
  asset: "border-t-pillar-asset",
  formation: "border-t-pillar-formation",
  compliance: "border-t-pillar-compliance",
};

/** Text color: text-pillar-* */
export const pillarTextMap: Record<PillarName, string> = {
  privacy: "text-pillar-privacy",
  asset: "text-pillar-asset",
  formation: "text-pillar-formation",
  compliance: "text-pillar-compliance",
};

/** Soft background: bg-pillar-*-soft */
export const pillarSoftBgMap: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy-soft",
  asset: "bg-pillar-asset-soft",
  formation: "bg-pillar-formation-soft",
  compliance: "bg-pillar-compliance-soft",
};

/** Solid background: bg-pillar-* */
export const pillarBgMap: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy",
  asset: "bg-pillar-asset",
  formation: "bg-pillar-formation",
  compliance: "bg-pillar-compliance",
};

/** Full border color: border-pillar-* */
export const pillarBorderMap: Record<PillarName, string> = {
  privacy: "border-pillar-privacy",
  asset: "border-pillar-asset",
  formation: "border-pillar-formation",
  compliance: "border-pillar-compliance",
};

/** Soft border (30% opacity): border-pillar-{name}/30 */
export const pillarBorderSoftMap: Record<PillarName, string> = {
  privacy: "border-pillar-privacy/30",
  asset: "border-pillar-asset/30",
  formation: "border-pillar-formation/30",
  compliance: "border-pillar-compliance/30",
};

/** Lucide icon names per pillar */
export const pillarIconMap: Record<PillarName, string> = {
  privacy: "Shield",
  asset: "Vault",
  formation: "Building2",
  compliance: "ClipboardCheck",
};

/** Display labels per pillar */
export const pillarLabelMap: Record<PillarName, string> = {
  privacy: "Business Privacy",
  asset: "Asset Protection",
  formation: "Company Formation",
  compliance: "Compliance",
};

/** Short labels per pillar (used in ContentMapGrid headers) */
export const pillarShortLabelMap: Record<PillarName, string> = {
  privacy: "Privacy",
  asset: "Asset Protection",
  formation: "Formation",
  compliance: "Compliance",
};

/** Tag combo: bg-pillar-{name}/10 + text-pillar-{name} (for category badges) */
export const pillarTagMap: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy/10 text-pillar-privacy",
  asset: "bg-pillar-asset/10 text-pillar-asset",
  formation: "bg-pillar-formation/10 text-pillar-formation",
  compliance: "bg-pillar-compliance/10 text-pillar-compliance",
};

/** Button variant: full pillar-colored button classes */
export const pillarButtonMap: Record<PillarName, string> = {
  privacy:
    "bg-pillar-privacy text-white hover:bg-pillar-privacy/90 active:bg-pillar-privacy/80",
  asset:
    "bg-pillar-asset text-white hover:bg-pillar-asset/90 active:bg-pillar-asset/80",
  formation:
    "bg-pillar-formation text-white hover:bg-pillar-formation/90 active:bg-pillar-formation/80",
  compliance:
    "bg-pillar-compliance text-white hover:bg-pillar-compliance/90 active:bg-pillar-compliance/80",
};

/** Badge combo: soft bg + text (for badge primitives) */
export const pillarBadgeMap: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy-soft text-pillar-privacy",
  asset: "bg-pillar-asset-soft text-pillar-asset",
  formation: "bg-pillar-formation-soft text-pillar-formation",
  compliance: "bg-pillar-compliance-soft text-pillar-compliance",
};

/** Link text + hover states */
export const pillarLinkMap: Record<PillarName, string> = {
  privacy: "text-pillar-privacy hover:text-pillar-privacy/80",
  asset: "text-pillar-asset hover:text-pillar-asset/80",
  formation: "text-pillar-formation hover:text-pillar-formation/80",
  compliance: "text-pillar-compliance hover:text-pillar-compliance/80",
};

/** Accent combo: border + soft bg (for layout accents) */
export const pillarAccentMap: Record<PillarName, string> = {
  privacy: "border-pillar-privacy bg-pillar-privacy-soft",
  asset: "border-pillar-asset bg-pillar-asset-soft",
  formation: "border-pillar-formation bg-pillar-formation-soft",
  compliance: "border-pillar-compliance bg-pillar-compliance-soft",
};
