import { Suspense } from "react";
import type { Metadata } from "next";
import { getTierBySlug } from "@/data/packages";
import { TierPageClient } from "../(tiers)/TierPageClient";

const tier = getTierBySlug("silver")!;

export const metadata: Metadata = {
  title:
    "Silver Package — Professional Formation with Compliance Essentials | Incorporate123",
  description: `Professional business formation from $${Math.min(...Object.values(tier.stateVariants).map((v) => v.prices.llc.formation)).toLocaleString()}. Registered agent, annual report filing, corporate minutes, and state fees included. Available in Wyoming and Nevada.`,
  alternates: { canonical: "https://incorporate123.co/silver" },
};

export default function SilverPage() {
  return (
    <Suspense>
      <TierPageClient tier={tier} />
    </Suspense>
  );
}
