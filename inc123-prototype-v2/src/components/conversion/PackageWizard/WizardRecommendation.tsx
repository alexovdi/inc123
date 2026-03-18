"use client";

import Link from "next/link";
import { Check, X, ArrowRight, RotateCcw, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/primitives/Button";
import { cn } from "@/lib/utils";
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
  const prefersReducedMotion = useReducedMotion();
  const { primary, alternatives, note } = result;

  const isShelf = intent === "shelf";
  const price = isShelf ? null : primary.prices[entity];
  const renewal = isShelf ? null : primary.renewal[entity];
  const entityLabel = entity === "llc" ? "LLC" : "Corporation";
  const resolvedTier = tier ?? "gold";
  const isCA = state === "california";

  const content = (
    <div className="mx-auto max-w-2xl" data-wizard-result={primary.slug}>
      {/* Heading */}
      <div className="text-center">
        <h3 className="font-[var(--font-display)] text-[var(--font-size-h3)] leading-tight">
          {isShelf
            ? "Shelf Companies \u2014 Browse Available Inventory"
            : "Here\u2019s your recommended package"}
        </h3>
        {note && (
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            {note}
          </p>
        )}
      </div>

      {/* Shelf shortcut */}
      {isShelf ? (
        <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-8 text-center">
          <p className="text-5xl">&#x1F3DB;&#xFE0F;</p>
          <p className="mt-4 font-[var(--font-display)] text-xl font-bold">
            Shelf Companies
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-[var(--color-text-secondary)]">
            Shelf companies are inventory-based with unique pricing per entity,
            starting from $1,500. Each comes with a Gold Renewal Package for
            full nominee privacy and compliance management.
          </p>
          <p className="mt-4 font-mono text-2xl font-bold">
            $1,500 &ndash; $5,000+
          </p>
          <div className="mt-6">
            <Button variant="cta" size="lg" asChild>
              <Link href="/packages/shelf-companies?ref=wizard">
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
            "relative mt-8 overflow-hidden rounded-lg border-2",
            "border-[var(--color-accent)] shadow-[var(--shadow-card)]",
          )}
        >
          {/* Header bar */}
          <div className="border-b border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-6 py-4">
            <span className="inline-block rounded-full bg-[var(--color-accent)] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              {intent === "privacy"
                ? "Recommended for Privacy"
                : intent === "asset-protection"
                  ? "Recommended for Asset Protection"
                  : "Your Match"}
            </span>
            <h4 className="mt-2 font-[var(--font-display)] text-2xl font-bold text-[var(--color-text-primary)]">
              {primary.name} {entityLabel}
            </h4>
          </div>

          {/* Pricing */}
          {price !== null && (
            <div className="flex items-baseline gap-3 border-b border-[var(--color-border)] px-6 py-4">
              <span className="font-mono text-4xl font-bold text-[var(--color-text-primary)]">
                {formatPrice(price)}
              </span>
              <span className="text-sm text-[var(--color-text-secondary)]">
                one-time formation
              </span>
            </div>
          )}

          {/* Renewal */}
          {renewal !== null && renewal > 0 && (
            <div className="border-b border-[var(--color-border)] px-6 py-2.5 text-sm text-[var(--color-text-secondary)]">
              Annual renewal:{" "}
              <span className="font-mono font-semibold text-[var(--color-text-primary)]">
                {formatPrice(renewal)}/yr
              </span>
            </div>
          )}

          {/* CA Tax Warning */}
          {isCA && (
            <div className="border-b border-amber-300 bg-amber-50 px-6 py-2.5 text-xs text-amber-900">
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
                    i < features.length - 1 &&
                      "border-b border-[var(--color-border)]/50",
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
                      "text-sm",
                      included
                        ? "text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-secondary)] line-through",
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
              <Link href={`${primary.href}?ref=wizard`}>
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
              <Link href={`${primary.href}?ref=wizard`}>
                View Full Package Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <div className="mt-3 text-center">
              <Link
                href="tel:+17753134155"
                className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
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
          <p className="mb-4 text-sm font-medium text-[var(--color-text-secondary)]">
            Also consider:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {alternatives.map((alt) => {
              const altPrice = alt.prices[entity];
              return (
                <Link
                  key={alt.slug}
                  href={`${alt.href}?ref=wizard`}
                  className={cn(
                    "group flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-4",
                    "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-accent)]",
                  )}
                >
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {alt.name}
                  </p>
                  <p className="mt-0.5 text-lg font-bold text-[var(--color-text-primary)]">
                    {altPrice > 0
                      ? formatPrice(altPrice)
                      : alt.shortDescription}
                  </p>
                  <p className="mt-1 flex-1 text-sm text-[var(--color-text-secondary)]">
                    {alt.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-[var(--color-accent)] transition-colors group-hover:text-[var(--color-accent-hover)]">
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
        <p className="text-xs text-[var(--color-text-secondary)]">
          25 Years &middot; All-Inclusive Pricing &middot; 30-Day Guarantee
        </p>
        <button
          type="button"
          onClick={onRestart}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-hover)]"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Start over with different options
        </button>
      </div>
    </div>
  );

  if (prefersReducedMotion) return content;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {content}
    </motion.div>
  );
}

WizardRecommendation.displayName = "WizardRecommendation";
