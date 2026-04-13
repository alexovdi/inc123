import { Suspense } from "react";
import { getTierBySlug } from "@/data/packages";
import { TierPageClient } from "../(tiers)/TierPageClient";
import type { TierLevel } from "@/lib/types";

/**
 * Thin wrapper that renders a tier page with an explicit state baked in.
 * Used by the 8 flat-URL routes: /wyoming-gold, /nevada-silver, etc.
 */
export function PackagePage({
  tierSlug,
  state,
}: {
  tierSlug: TierLevel;
  state: string;
}) {
  const tier = getTierBySlug(tierSlug);
  if (!tier) {
    return (
      <div className="mx-auto max-w-wide px-container-x py-section-y-sm">
        <h1 className="font-display text-display font-bold text-foreground">
          Package Not Found
        </h1>
      </div>
    );
  }
  return (
    <Suspense>
      <TierPageClient tier={tier} forcedState={state} />
    </Suspense>
  );
}

/* ------------------------------------------------
   Eight canonical package pages — one per flat URL
   ------------------------------------------------ */

export function WyomingGoldPage() {
  return <PackagePage tierSlug="gold" state="Wyoming" />;
}
export function WyomingSilverPage() {
  return <PackagePage tierSlug="silver" state="Wyoming" />;
}
export function WyomingBronzePage() {
  return <PackagePage tierSlug="bronze" state="Wyoming" />;
}
export function NevadaGoldPage() {
  return <PackagePage tierSlug="gold" state="Nevada" />;
}
export function NevadaSilverPage() {
  return <PackagePage tierSlug="silver" state="Nevada" />;
}
export function NevadaBronzePage() {
  return <PackagePage tierSlug="bronze" state="Nevada" />;
}
export function CaliforniaPrivatePage() {
  return <PackagePage tierSlug="gold" state="California" />;
}
export function FloridaPrivatePage() {
  return <PackagePage tierSlug="gold" state="Florida" />;
}
