"use client";

import { Link as RouterLink } from "react-router-dom";
import { Phone } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

export interface CheckoutLayoutProps {
  currentStep: number;
  totalSteps?: number;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  phone?: string;
  className?: string;
}

export function CheckoutLayout({
  currentStep,
  totalSteps = 4,
  children,
  sidebar,
  phone = "1-800-553-0615",
  className,
}: CheckoutLayoutProps) {
  const steps = [
    { label: "Configure", step: 1 },
    { label: "Details", step: 2 },
    { label: "Payment", step: 3 },
    { label: "Confirmation", step: 4 },
  ];

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Minimal Header */}
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-content items-center justify-between px-container-x py-3">
          <RouterLink to="/" className="flex items-center gap-2">
            <span className="font-display text-heading-sm font-bold text-primary">
              Incorporate
            </span>
            <span className="font-display text-heading-sm font-bold text-secondary">
              123
            </span>
          </RouterLink>

          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-1.5 text-body-sm text-muted hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{phone}</span>
          </a>
        </div>
      </header>

      {/* Step Indicator */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-content px-container-x py-4">
          <div className="flex items-center justify-between">
            {steps.slice(0, totalSteps).map((step, i) => (
              <div key={step.step} className="flex items-center flex-1">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full text-body-sm font-semibold transition-colors",
                      step.step < currentStep
                        ? "bg-success text-white"
                        : step.step === currentStep
                          ? "bg-secondary text-white"
                          : "bg-primary-100 text-muted",
                    )}
                  >
                    {step.step < currentStep ? "✓" : step.step}
                  </div>
                  <span
                    className={cn(
                      "hidden text-body-sm font-medium sm:inline",
                      step.step === currentStep
                        ? "text-foreground"
                        : "text-muted",
                    )}
                  >
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "mx-3 h-px flex-1",
                      step.step < currentStep ? "bg-success" : "bg-border",
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-content px-container-x py-section-y-sm">
        <div className="flex flex-col gap-8 lg:flex-row">
          <main className="flex-1 min-w-0">{children}</main>
          {sidebar && (
            <aside className="w-full lg:w-80 shrink-0">{sidebar}</aside>
          )}
        </div>
      </div>
    </div>
  );
}
