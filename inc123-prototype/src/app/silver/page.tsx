import { Suspense } from "react";
import { getTierBySlug } from "@/data/packages";
import { TierPageClient } from "../(tiers)/TierPageClient";

const tier = getTierBySlug("silver")!;

export default function SilverPage() {
  return (
    <Suspense>
      <TierPageClient tier={tier} />
    </Suspense>
  );
}
