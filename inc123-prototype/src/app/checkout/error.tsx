import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/contact";

export default function CheckoutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Checkout error boundary caught:", error);
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
          Checkout Error
        </h1>
        <p className="mt-4 text-body text-muted">
          Something went wrong during checkout. Your information has not been
          submitted, and no charges have been made.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="md" onClick={reset}>
            <Icon name="RotateCcw" size="sm" className="mr-2" />
            Try Again
          </Button>
          <RouterLink to="/packages">
            <Button variant="secondary" size="md">
              <Icon name="Package" size="sm" className="mr-2" />
              Return to Packages
            </Button>
          </RouterLink>
        </div>

        <p className="mt-8 text-body text-muted">
          If this keeps happening, please call{" "}
          <a
            href={PHONE_HREF}
            className="font-medium text-secondary hover:text-secondary/80 transition-colors"
          >
            {PHONE_DISPLAY}
          </a>{" "}
          and we&apos;ll help you complete your order.
        </p>
      </div>
    </main>
  );
}
