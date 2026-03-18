"use client";

import Link from "next/link";
import { Check, X, ArrowRight, RotateCcw, Phone } from "lucide-react";
import { Button } from "@/design-system/primitives/Button";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { cn } from "@/design-system/utils/cn";
import type { WizardResult } from "./wizardLogic";
import { formatPrice } from "./wizardLogic";
import type {
  EntityType,
  WizardTier,
  WizardIntent,
  WizardState,
  WizardFeature,
} from "@/data/wizard";

interface WizardRecommendationProps {
  result: WizardResult;
  entity: EntityType;
  tier: WizardTier | null;
  intent: WizardIntent;
  state: WizardState | null;
  features: WizardFeature[];
  onRestart: () => void;
}

export function WizardRecommendation({
  result,
  entity,
  tier,
  intent,
  state,
  features,
  onRestart,
}: WizardRecommendationProps) {
  const { primary, alternatives, note } = result;

  const isShelf = intent === "shelf";
  const price = isShelf ? null : primary.prices[entity];
  const renewal = isShelf ? null : primary.renewal[entity];
  const entityLabel = entity === "llc" ? "LLC" : "Corporation";
  const resolvedTier = tier ?? "gold";
  const isCA = state === "california";

  return (
    <ScrollReveal direction="up" duration={300}>
      <div className="mx-auto max-w-[48rem]" data-wizard-result={primary.slug}>
        {/* Heading */}
        <div className="text-center">
          <h3 className="font-display text-heading-md font-bold text-foreground">
            {isShelf
              ? "Shelf Companies \u2014 Browse Available Inventory"
              : "Here\u2019s your recommended package"}
          </h3>
          {note && <p className="mt-2 text-body-sm text-muted">{note}</p>}
        </div>

        {/* Shelf shortcut */}
        {isShelf ? (
          <div className="mt-8 rounded-card border border-border bg-surface p-8 text-center">
            <p className="text-5xl">&#x1F3DB;&#xFE0F;</p>
            <p className="mt-4 font-display text-body-lg font-bold">
              Shelf Companies
            </p>
            <p className="mx-auto mt-2 max-w-[24rem] text-body-sm text-muted">
              Shelf companies are inventory-based with unique pricing per
              entity, starting from $1,500. Each comes with a Gold Renewal
              Package for full nominee privacy and compliance management.
            </p>
            <p className="mt-4 font-mono text-heading-sm font-bold">
              $1,500 &ndash; $5,000+
            </p>
            <div className="mt-6">
              <Button variant="cta" size="lg" asChild>
                <Link href={`${primary.href}?ref=wizard`}>
                  Browse Available Entities
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          /* Standard package result */
          <div
            className={cn(
              "relative mt-8 overflow-hidden rounded-card border-2",
              "border-secondary shadow-card",
            )}
          >
            {/* Header bar */}
            <div className="border-b border-secondary/20 bg-secondary/5 px-6 py-4">
              <span className="inline-block rounded-pill bg-secondary px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                {intent === "privacy"
                  ? "Recommended for Privacy"
                  : intent === "asset-protection"
                    ? "Recommended for Asset Protection"
                    : intent === "ca-fl"
                      ? "Recommended for Your State"
                      : "Your Match"}
              </span>
              <h4 className="mt-2 font-display text-heading-sm font-bold text-foreground">
                {primary.name} {entityLabel}
              </h4>
            </div>

            {/* Pricing */}
            {price !== null && (
              <div className="flex items-baseline gap-3 border-b border-border px-6 py-4">
                <span className="font-mono text-display-sm font-bold text-foreground">
                  {formatPrice(price)}
                </span>
                <span className="text-body-sm text-muted">
                  one-time formation
                </span>
              </div>
            )}

            {/* Renewal */}
            {renewal !== null && renewal > 0 && (
              <div className="border-b border-border px-6 py-2.5 text-body-sm text-muted">
                Annual renewal:{" "}
                <span className="font-mono font-semibold text-foreground">
                  {formatPrice(renewal)}/yr
                </span>
              </div>
            )}

            {/* CA Tax Warning */}
            {isCA && (
              <div className="border-b border-amber-300 bg-amber-50 px-6 py-2.5 text-caption text-amber-900">
                &#x26A0;&#xFE0F; California imposes an $800/yr minimum franchise
                tax on all LLCs, in addition to the package price.
              </div>
            )}

            {/* Goal-specific features */}
            <div className="px-6 py-4">
              {features.map((f, i) => {
                const included = f[
                  resolvedTier as keyof WizardFeature
                ] as boolean;
                return (
                  <div
                    key={i}
                    className={cn(
                      "flex items-center gap-3 py-2",
                      i < features.length - 1 && "border-b border-border/50",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                        included
                          ? "bg-green-100 text-green-600"
                          : "bg-red-50 text-red-400",
                      )}
                    >
                      {included ? (
                        <Check className="h-3 w-3" strokeWidth={3} />
                      ) : (
                        <X className="h-3 w-3" strokeWidth={3} />
                      )}
                    </span>
                    <span
                      className={cn(
                        "text-body-sm",
                        included
                          ? "text-foreground"
                          : "text-muted line-through",
                      )}
                    >
                      {f.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="px-6 pb-6">
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link href={`${primary.href}&ref=wizard`}>
                  Start My{" "}
                  {state ? state.charAt(0).toUpperCase() + state.slice(1) : ""}{" "}
                  {entityLabel} &mdash; {price !== null && formatPrice(price)}
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="mt-3 w-full"
                asChild
              >
                <Link href={`${primary.href}&ref=wizard`}>
                  View Full Package Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <div className="mt-3 text-center">
                <Link
                  href="tel:+17753134155"
                  className="inline-flex items-center gap-1.5 text-caption text-muted transition-colors hover:text-secondary"
                >
                  <Phone className="h-3 w-3" />
                  Not sure? Talk to our team &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Alternatives */}
        {alternatives.length > 0 && (
          <div className="mt-8">
            <p className="mb-4 text-body-sm font-medium text-muted">
              Also consider:
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {alternatives.map((alt) => {
                const altPrice = alt.prices[entity];
                return (
                  <Link
                    key={alt.slug}
                    href={`${alt.href}${alt.href.includes("?") ? "&" : "?"}ref=wizard`}
                    className={cn(
                      "group flex flex-col rounded-card border border-border bg-surface p-4",
                      "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover hover:border-secondary",
                    )}
                  >
                    <p className="text-body-sm font-semibold text-foreground">
                      {alt.name}
                    </p>
                    <p className="mt-0.5 text-body-lg font-bold text-foreground">
                      {altPrice > 0
                        ? formatPrice(altPrice)
                        : alt.shortDescription}
                    </p>
                    <p className="mt-1 flex-1 text-body-sm text-muted">
                      {alt.shortDescription}
                    </p>
                    <span className="mt-3 inline-flex items-center text-body-sm font-medium text-link transition-colors group-hover:text-link/80">
                      View Details &rarr;
                    </span>
                  </Link>
                );
              })}
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
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Start over with different options
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}

WizardRecommendation.displayName = "WizardRecommendation";
