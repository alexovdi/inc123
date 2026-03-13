"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CheckoutProvider } from "./CheckoutContext";

function CheckoutProviderWrapper({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const initialPackage = searchParams.get("package") || "";

  return (
    <CheckoutProvider initialPackage={initialPackage}>
      {children}
    </CheckoutProvider>
  );
}

export default function CheckoutAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <CheckoutProviderWrapper>
        {children}
      </CheckoutProviderWrapper>
    </Suspense>
  );
}
