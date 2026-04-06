import { useSearchParams, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { CheckoutProvider, resolveCheckoutParams } from "./CheckoutContext";

function CheckoutProviderWrapper() {
  const [searchParams] = useSearchParams();

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
      <Outlet />
    </CheckoutProvider>
  );
}

export function CheckoutLayoutClient() {
  return (
    <Suspense fallback={null}>
      <CheckoutProviderWrapper />
    </Suspense>
  );
}
