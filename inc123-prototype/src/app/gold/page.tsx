import { Suspense } from "react";
import { getTierBySlug } from "@/data/packages";
import { TierPageClient } from "../(tiers)/TierPageClient";

const tier = getTierBySlug("gold")!;

export default function GoldPage() {
  return (
    <Suspense>
      <TierPageClient tier={tier} />
    </Suspense>
  );
}
