import { useEffect } from "react";

export default function CatchAllError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Catch-all route error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-container-x py-section-y text-center">
      <div className="max-w-narrow mx-auto">
        <h1 className="text-display font-display font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="mt-4 text-body text-muted">
          We couldn&apos;t load this page. Please try again or navigate back to
          the homepage.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-button bg-secondary px-6 py-3 text-body font-medium text-white transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-button border border-border bg-surface px-6 py-3 text-body font-medium text-foreground transition-colors hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Go to homepage
          </a>
        </div>
      </div>
    </main>
  );
}
