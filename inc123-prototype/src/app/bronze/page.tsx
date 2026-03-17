import { Suspense } from "react";
import type { Metadata } from "next";
import { getTierBySlug } from "@/data/packages";
import { TierPageClient } from "../(tiers)/TierPageClient";

const tier = getTierBySlug("bronze")!;

export const metadata: Metadata = {
  title: "Bronze Package — Affordable Nevada Formation | Incorporate123",
  description:
    "Basic Nevada formation at $699. Includes state filing fees, registered agent, and Nevada business license. A solid starting point for business formation.",
  alternates: { canonical: "https://incorporate123.co/bronze" },
};

export default function BronzePage() {
  return (
    <Suspense>
      <TierPageClient tier={tier} />
    </Suspense>
  );
}
