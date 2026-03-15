"use client";

import { useEffect } from "react";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Root error boundary caught:", error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-container-x py-section-y text-center">
      <div className="max-w-narrow mx-auto">
        <h1 className="text-display font-display font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="mt-4 text-body text-muted">
          An unexpected error occurred. Please try again, or contact us if the
          problem persists.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center rounded-button bg-secondary px-6 py-3 text-body font-medium text-white transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
