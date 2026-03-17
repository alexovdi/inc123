import { Suspense } from "react";
import type { Metadata } from "next";
import { getTierBySlug } from "@/data/packages";
import { TierPageClient } from "../(tiers)/TierPageClient";

const tier = getTierBySlug("gold")!;

export const metadata: Metadata = {
  title:
    "Gold Package — Full Privacy with Year-Round Nominees & Offshore Records | Incorporate123",
  description: `Complete privacy package from $${Math.min(...Object.values(tier.stateVariants).map((v) => v.prices.llc.formation)).toLocaleString()}. Year-round nominee directors & officers, offshore record storage, registered agent, EIN, operating agreement, and state fees — all included. Available in Wyoming, Nevada, California, and Florida.`,
  alternates: { canonical: "https://incorporate123.co/gold" },
};

export default function GoldPage() {
  return (
    <Suspense>
      <TierPageClient tier={tier} />
    </Suspense>
  );
}
