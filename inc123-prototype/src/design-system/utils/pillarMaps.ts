import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Shared pillar color maps
   Extracted from 17 components to eliminate duplication.
   ------------------------------------------------ */

export const pillarBorderTopMap: Record<PillarName, string> = {
  privacy: "border-t-pillar-privacy",
  asset: "border-t-pillar-asset",
  formation: "border-t-pillar-formation",
  compliance: "border-t-pillar-compliance",
};

export const pillarTextMap: Record<PillarName, string> = {
  privacy: "text-pillar-privacy",
  asset: "text-pillar-asset",
  formation: "text-pillar-formation",
  compliance: "text-pillar-compliance",
};

export const pillarSoftBgMap: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy-soft",
  asset: "bg-pillar-asset-soft",
  formation: "bg-pillar-formation-soft",
  compliance: "bg-pillar-compliance-soft",
};

export const pillarBgMap: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy",
  asset: "bg-pillar-asset",
  formation: "bg-pillar-formation",
  compliance: "bg-pillar-compliance",
};
