"use client";

import { Link } from "react-router-dom";
import { Check, ArrowRight, RotateCcw, Info } from "lucide-react";
import { Button } from "@/design-system/primitives/Button";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { cn } from "@/design-system/utils/cn";
import type { WizardResult } from "./wizardLogic";
import { formatPrice } from "./wizardLogic";

interface WizardRecommendationProps {
  result: WizardResult;
  onRestart: () => void;
}

export function WizardRecommendation({
  result,
  onRestart,
}: WizardRecommendationProps) {
  const { primary, alternatives, contextNote, addonNote } = result;

  return (
    <ScrollReveal direction="up" duration={300}>
      <div className="mx-auto max-w-[48rem]" data-wizard-result={primary.slug}>
        {/* Heading */}
        <div className="text-center">
          <h3 className="font-display text-heading-md font-bold text-foreground">
            Here&rsquo;s Your Perfect Match
          </h3>
        </div>

        {/* Context note — explains WHY this package was chosen */}
        {contextNote && (
          <div className="mt-4 rounded-card border border-secondary/20 bg-secondary/5 px-4 py-3 text-body text-foreground text-center">
            <span className="mr-1.5">&#x1F4A1;</span>
            {contextNote}
          </div>
        )}

        {/* Primary recommendation card */}
        <div
          className={cn(
            "relative mt-6 overflow-hidden rounded-card border-2",
            "border-secondary shadow-card",
          )}
        >
          {/* Header bar */}
          <div className="border-b border-secondary/20 bg-secondary/5 px-6 py-4">
            {primary.badge && (
              <span className="inline-block rounded-pill bg-secondary px-3 py-0.5 text-caption font-bold uppercase tracking-wider text-white mb-2">
                {primary.badge}
              </span>
            )}
            <h4 className="font-display text-heading-sm font-bold text-foreground">
              {primary.name}
            </h4>
          </div>

          {/* Pricing — show both LLC and Corp */}
          <div className="flex items-baseline gap-6 border-b border-border px-6 py-4">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-display-sm font-bold text-foreground">
                {formatPrice(primary.prices.llc)}
              </span>
              <span className="text-body-sm text-muted">LLC</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-body-lg font-bold text-foreground">
                {formatPrice(primary.prices.corp)}
              </span>
              <span className="text-body-sm text-muted">Corp</span>
            </div>
          </div>

          {/* Features */}
          <div className="px-6 py-4">
            {primary.features.map((feature, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center gap-3 py-2",
                  i < primary.features.length - 1 &&
                    "border-b border-border/50",
                )}
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-body text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-6 pb-6">
            <Button variant="cta" size="lg" className="w-full" asChild>
              <Link
                to={`${primary.href}${primary.href.includes("?") ? "&" : "?"}ref=wizard`}
              >
                View Full Package Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Add-on note (foreign registration etc.) */}
        {addonNote && (
          <div className="mt-4 flex items-start gap-3 rounded-card border border-border bg-primary-50 px-4 py-3 text-body text-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
            <span>{addonNote}</span>
          </div>
        )}

        {/* Alternatives with reasons */}
        {alternatives.length > 0 && (
          <div className="mt-8">
            <p className="mb-4 text-body-sm font-medium text-muted text-center">
              Also worth considering
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {alternatives.map((alt) => (
                <Link
                  key={alt.pkg.slug}
                  to={`${alt.pkg.href}${alt.pkg.href.includes("?") ? "&" : "?"}ref=wizard`}
                  className={cn(
                    "group flex flex-col rounded-card border border-border bg-surface p-4",
                    "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover hover:border-secondary",
                  )}
                  data-wizard-alt-click={alt.pkg.slug}
                >
                  <p className="text-body font-semibold text-foreground">
                    {alt.pkg.name}
                  </p>
                  <p className="mt-0.5 text-body text-muted">
                    {formatPrice(alt.pkg.prices.llc)} LLC &middot;{" "}
                    {formatPrice(alt.pkg.prices.corp)} Corp
                  </p>
                  <p className="mt-2 flex-1 text-caption text-muted leading-relaxed">
                    {alt.reason}
                  </p>
                  <span className="mt-3 inline-flex items-center text-body-sm font-medium text-link transition-colors group-hover:text-link/80">
                    View Details &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Trust + restart */}
        <div className="mt-8 text-center">
          <p className="text-caption text-muted">
            25 Years &middot; All-Inclusive Pricing &middot; 30-Day Guarantee
          </p>
          <button
            type="button"
            onClick={onRestart}
            className="mt-3 inline-flex items-center gap-1.5 text-body-sm font-medium text-secondary underline underline-offset-4 transition-colors hover:text-secondary/80"
            data-wizard-restart="true"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Not quite right? Start over
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}

WizardRecommendation.displayName = "WizardRecommendation";
