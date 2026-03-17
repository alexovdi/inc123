"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CheckoutProvider, resolveCheckoutParams } from "./CheckoutContext";

function CheckoutProviderWrapper({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  // Resolve both new (?tier=gold&state=wyoming) and legacy (?package=wyoming-gold) formats
  const resolved = resolveCheckoutParams({
    tier: searchParams.get("tier"),
    state: searchParams.get("state"),
    entity: searchParams.get("entity"),
    package: searchParams.get("package"),
  });

  return (
    <CheckoutProvider
      initialTier={resolved.selectedTier}
      initialStateName={resolved.selectedState}
      initialEntity={resolved.entityType}
    >
      {children}
    </CheckoutProvider>
  );
}

export function CheckoutLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <CheckoutProviderWrapper>{children}</CheckoutProviderWrapper>
    </Suspense>
  );
}
