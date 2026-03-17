"use client";

import { useEffect } from "react";
import NextLink from "next/link";
import { Button, Icon } from "@/design-system/primitives";

export default function OffshoreJurisdictionError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Offshore jurisdiction error boundary caught:", error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-container-x py-section-y text-center">
      <div className="max-w-narrow mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <Icon name="TriangleAlert" size="lg" className="text-red-500" />
          </div>
        </div>

        <h1 className="text-display font-display font-bold text-foreground">
          Page Error
        </h1>
        <p className="mt-4 text-body text-muted">
          We couldn&apos;t load this offshore jurisdiction page. This may be a
          temporary issue — please try again or browse all available
          jurisdictions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="md" onClick={reset}>
            <Icon name="RotateCcw" size="sm" className="mr-2" />
            Try Again
          </Button>
          <NextLink href="/offshore">
            <Button variant="secondary" size="md">
              <Icon name="Globe" size="sm" className="mr-2" />
              All Jurisdictions
            </Button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
