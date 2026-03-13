"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle,
  Printer,
  Download,
  Phone,
  ArrowRight,
} from "lucide-react";
import { CheckoutLayout } from "@/design-system/layouts/CheckoutLayout";
import { ConfirmationBlock } from "@/design-system/components";
import { Button, Divider } from "@/design-system/primitives";
import { packages } from "@/data/packages";
import { checkoutTimelineSteps } from "@/data/checkout";
import { useCheckout } from "../CheckoutContext";

/* ------------------------------------------------
   Helpers
   ------------------------------------------------ */
function generateOrderNumber(): string {
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `INC-2026-${rand}`;
}

function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/* ------------------------------------------------
   Page Component
   ------------------------------------------------ */
export default function CheckoutConfirmationPage() {
  const router = useRouter();
  const { state } = useCheckout();

  // Generate order number client-side only to avoid hydration mismatch
  const [orderNumber, setOrderNumber] = useState("INC-2026-0000");
  useEffect(() => {
    setOrderNumber(generateOrderNumber());
  }, []);

  // Look up selected package
  const selectedPackage = useMemo(
    () => packages.find((pkg) => pkg.id === state.selectedTier),
    [state.selectedTier]
  );

  // Pricing
  const basePrice = selectedPackage
    ? selectedPackage.prices[state.entityType].formation
    : 0;

  const renewal = selectedPackage
    ? selectedPackage.prices[state.entityType].renewal
    : 0;

  const addOnTotal = state.selectedAddOns.reduce((sum, id) => {
    const addOn = selectedPackage?.addOns.find((a) => a.id === id);
    return sum + (addOn?.price ?? 0);
  }, 0);

  const total = basePrice + addOnTotal;

  const selectedAddOnDetails = state.selectedAddOns
    .map((id) => selectedPackage?.addOns.find((a) => a.id === id))
    .filter(Boolean)
    .map((a) => ({ name: a!.name, price: a!.price }));

  // Build next steps from timeline data
  const nextSteps = checkoutTimelineSteps.map((step, idx) => ({
    step: idx + 1,
    title: step.label,
    description: step.description,
    timeline: step.duration,
  }));

  // Payment method label
  const paymentMethodLabel =
    state.paymentMethod === "credit-card"
      ? "Visa ending in 4242"
      : state.paymentMethod === "paypal"
        ? "PayPal"
        : "Cryptocurrency";

  const entityLabel = state.entityType === "llc" ? "LLC" : "Corporation";

  return (
    <CheckoutLayout currentStep={4}>
      <div className="mx-auto max-w-2xl">
        {/* Success header with animation */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex justify-center">
            <div className="animate-[scaleIn_0.5s_ease-out] rounded-full bg-success/10 p-4">
              <CheckCircle className="h-16 w-16 text-success" />
            </div>
          </div>
          <h1 className="text-heading-xl font-display font-bold text-foreground">
            Your Order is Confirmed!
          </h1>
          <p className="mt-3 text-body-lg text-muted">
            Thank you for choosing Incorporate123. We&apos;re preparing your
            formation documents now.
          </p>
        </div>

        {/* Order confirmation details */}
        <div className="mb-6 rounded-card border border-border bg-surface p-6 text-center">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-caption uppercase tracking-wide text-muted mb-1">
                Order Number
              </p>
              <p className="text-body font-semibold font-mono text-foreground">
                #{orderNumber}
              </p>
            </div>
            <div>
              <p className="text-caption uppercase tracking-wide text-muted mb-1">
                Date
              </p>
              <p className="text-body font-semibold text-foreground">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="text-caption uppercase tracking-wide text-muted mb-1">
                Payment
              </p>
              <p className="text-body font-semibold text-foreground">
                {paymentMethodLabel}
              </p>
            </div>
          </div>

          {state.companyDetails.contactEmail && (
            <p className="mt-4 text-body-sm text-muted border-t border-border pt-4">
              A confirmation email has been sent to{" "}
              <span className="font-medium text-foreground">
                {state.companyDetails.contactEmail}
              </span>
            </p>
          )}
        </div>

        {/* Confirmation Block with order summary and next steps */}
        {selectedPackage && (
          <ConfirmationBlock
            orderNumber={orderNumber}
            package={{
              name: selectedPackage.name.replace(/LLC$/, state.entityType === "llc" ? "LLC" : "Corp"),
              tier: selectedPackage.tier,
              price: basePrice,
            }}
            entityType={entityLabel}
            addOns={selectedAddOnDetails}
            total={total}
            nextSteps={nextSteps}
            className="mb-6"
          />
        )}

        {/* Renewal info */}
        <div className="mb-6 rounded-card border border-border bg-muted/5 p-5 text-center">
          <p className="text-body-sm text-muted">
            Annual renewal:{" "}
            <span className="font-semibold text-foreground">
              {formatUSD(renewal)}/year
            </span>{" "}
            {selectedPackage?.tier === "gold"
              ? "with nominees"
              : ""}{" "}
            — starting Year 2
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-8">
          <Button
            variant="primary"
            size="md"
            icon={<Printer className="h-4 w-4" />}
            onClick={() => window.print()}
          >
            Print Receipt
          </Button>
          <Button
            variant="secondary"
            size="md"
            icon={<Download className="h-4 w-4" />}
            onClick={() => {
              /* prototype only */
            }}
          >
            Download Documents
          </Button>
          <Button
            variant="ghost"
            size="md"
            icon={<Phone className="h-4 w-4" />}
            onClick={() => {
              /* prototype only */
            }}
          >
            Contact Support
          </Button>
        </div>

        <Divider className="my-8" />

        {/* Cross-sell */}
        <div className="rounded-card border border-border bg-surface p-8 text-center">
          <h2 className="text-heading-sm font-display font-semibold text-foreground mb-2">
            Protect Your Other Assets Too
          </h2>
          <p className="text-body text-muted mb-6">
            Now that your entity is formed, explore how asset protection
            structures can safeguard your wealth.
          </p>
          <Button
            variant="secondary"
            size="md"
            icon={<ArrowRight className="h-4 w-4" />}
            iconPosition="right"
            onClick={() => router.push("/asset-protection")}
          >
            Learn About Asset Protection
          </Button>
        </div>

        {/* Return home */}
        <div className="mt-8 text-center">
          <Button
            variant="ghost"
            size="md"
            onClick={() => router.push("/")}
          >
            Return to Homepage
          </Button>
        </div>
      </div>

      {/* Inline CSS animation for the success checkmark */}
      <style>{`
        @keyframes scaleIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          60% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </CheckoutLayout>
  );
}
