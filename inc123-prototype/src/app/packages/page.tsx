"use client";

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  tierDefinitions,
  getTierMinPrice,
  getTierPrice,
  ALL_FORMATION_STATES,
} from "@/data/packages";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { EntityTypeToggle } from "@/design-system/components/EntityTypeToggle";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { PackagePreviewCard } from "@/design-system/components/PackagePreviewCard";
import { PillarFinalCTA } from "@/design-system/components/PillarFinalCTA";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { SocialProofStrip } from "@/design-system/components/SocialProofStrip";
import { StickyMobileCTA } from "@/design-system/components/StickyMobileCTA";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { Link as DSLink } from "@/design-system/primitives/Link";
import { testimonials } from "@/data/testimonials";
import type { EntityType, TierDefinition } from "@/lib/types";

const entityOptions = [
  { value: "llc", label: "LLC" },
  { value: "corp", label: "Corporation" },
];

const trustStats = [
  { icon: "Calendar", label: "25+ Years in Business" },
  { icon: "Shield", label: "All-Inclusive Pricing" },
  { icon: "CircleCheck", label: "Money-Back Guarantee" },
];

const howItWorksSteps = [
  {
    number: 1,
    title: "Choose Your Package",
    description:
      "Select the tier and state that fits your privacy and business needs.",
    icon: <Icon name="Layers" size="lg" />,
  },
  {
    number: 2,
    title: "Complete Your Order",
    description:
      "Provide basic details and select any add-ons. Pay securely online.",
    icon: <Icon name="CreditCard" size="lg" />,
  },
  {
    number: 3,
    title: "We File Everything",
    description:
      "Our team prepares and files all documents with the state on your behalf.",
    icon: <Icon name="Send" size="lg" />,
  },
  {
    number: 4,
    title: "Receive Your Documents",
    description:
      "Get your formation documents, EIN, and compliance package delivered.",
    icon: <Icon name="ClipboardCheck" size="lg" />,
  },
];

const faqItems = [
  {
    id: "gold-vs-silver",
    title: "What's the difference between Gold and Silver?",
    answer:
      "Gold packages include year-round nominee directors and officers, offshore record storage, and a custom operating agreement — providing maximum privacy. Silver packages include registered agent, compliance essentials, and annual report filing at a lower price point. Both tiers include state filing fees.",
  },
  {
    id: "which-state",
    title: "Which state should I form in?",
    answer:
      "Wyoming offers the lowest fees and strongest charging order protection — it's our most popular choice. Nevada is ideal if you want an established business court system and no state income tax. If you live in California or Florida, our Gold packages let you form in a privacy state while registering in yours.",
  },
  {
    id: "whats-included",
    title: "What's included in the price?",
    answer:
      "Every package includes state filing fees, registered agent service for the first year, and core compliance documents. There are no hidden fees — the price you see is the price you pay for formation. Annual renewal fees cover ongoing registered agent and compliance services.",
  },
  {
    id: "bronze",
    title: "When should I choose Bronze?",
    answer:
      "Bronze is ideal if you need a straightforward Nevada formation at the most affordable price. It includes state filing fees, registered agent, and Nevada business license. You can always upgrade to Silver or Gold later to add compliance and privacy features.",
  },
  {
    id: "upgrade",
    title: "Can I upgrade later?",
    answer:
      "Yes. You can upgrade from Bronze to Silver, or Silver to Gold, at any time by adding compliance and privacy services. Contact our team and we'll handle the transition seamlessly.",
  },
  {
    id: "guarantee",
    title: "Do you offer a money-back guarantee?",
    answer:
      "Yes. If we're unable to file your formation documents with the state for any reason, you'll receive a full refund. We've been in business for over 25 years and stand behind every filing.",
  },
];

/** Returns the display price for a tier in the given state, or its global min. */
function tierPrice(
  tier: TierDefinition,
  state: string,
  entityType: EntityType,
): number {
  const statePrice = getTierPrice(tier, state, entityType);
  return statePrice ? statePrice.formation : getTierMinPrice(tier, entityType);
}

/** Check whether a tier is available in a given state */
function tierAvailableInState(tier: TierDefinition, state: string): boolean {
  return tier.availableStates.includes(state);
}

export default function PackagesPage() {
  const [entityType, setEntityType] = useState<EntityType>("llc");
  const [selectedState, setSelectedState] = useState("Wyoming");

  const formationTiers = useMemo(
    () =>
      tierDefinitions.filter((t) => t.tier !== "gold" || t.slug !== "shelf"),
    [],
  );

  /** Ordered as Bronze, Silver, Gold for display */
  const tierOrder: Record<string, number> = { bronze: 0, silver: 1, gold: 2 };
  const orderedTiers = useMemo(
    () =>
      [...formationTiers].sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]),
    [formationTiers],
  );

  return (
    <div className="space-y-0">
      {/* Hero — dark, matches pillar/cluster style */}
      <section className="relative overflow-hidden bg-primary border-b-4 border-b-secondary">
        <GrainOverlay opacity="opacity-[0.03]" />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[60vw] w-[60vw] rounded-full bg-secondary/[0.18] blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-[-20vw] h-[45vw] w-[45vw] rounded-full bg-secondary/[0.18] blur-[140px]" />

        <div className="relative mx-auto max-w-content px-container-x py-section-y-sm">
          {/* Breadcrumb */}
          <nav className="mb-8 text-body-sm" aria-label="Breadcrumb">
            <DSLink
              href="/"
              className="!text-white/80 !no-underline hover:!text-white transition-colors"
            >
              Home
            </DSLink>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white/90" aria-current="page">
              Packages
            </span>
          </nav>

          <div className="max-w-[760px]">
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              Formation Packages
            </p>
            <h1 className="font-display type-display-lg font-bold text-white">
              All-Inclusive Formation Packages
            </h1>
            <p className="mt-6 text-body-lg text-white/80 max-w-[560px]">
              Transparent pricing with no hidden fees. Every package includes
              state filing fees, registered agent, and compliance essentials.
            </p>
            <div className="mt-8">
              <EntityTypeToggle
                options={entityOptions}
                value={entityType}
                onChange={(v) => setEntityType(v as EntityType)}
                dark
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#choose-state">
                <Button variant="cta" size="lg">
                  Find Your Package
                  <Icon
                    name="ArrowRight"
                    size="sm"
                    className="ml-2 hidden sm:inline-block"
                  />
                </Button>
              </a>
              <DSLink href="/compare-packages" className="!no-underline">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Compare All Packages
                  <Icon
                    name="ArrowRight"
                    size="sm"
                    className="ml-2 hidden sm:inline-block"
                  />
                </Button>
              </DSLink>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-white/80">
              {trustStats.map((stat) => (
                <span key={stat.label} className="flex items-center gap-2">
                  <Icon name={stat.icon} size="sm" className="text-white/70" />
                  {stat.label}
                </span>
              ))}
            </div>
            <p className="mt-5 text-body-sm text-white/70">
              Prefer to talk?{" "}
              <a
                href="tel:1-800-553-0615"
                className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
              >
                Call 1-800-553-0615
              </a>
              {" · "}
              <DSLink
                href="/contact"
                className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
              >
                Schedule a consultation
              </DSLink>
            </p>
          </div>
        </div>
      </section>

      {/* State Selector — muted bg for section rhythm */}
      <section
        id="choose-state"
        className="scroll-mt-24 py-section-y px-container-x bg-background"
      >
        <div className="mx-auto max-w-content">
          <SectionHeader
            eyebrow="Choose Your State"
            title="Pick a Formation State"
            subtitle="Select a state to see available tiers and pricing. Not all tiers are available in every state."
          />

          {/* State Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {ALL_FORMATION_STATES.map(({ name, abbreviation }) => {
              const isSelected = selectedState === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelectedState(name)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-body-sm font-medium transition-colors ${
                    isSelected
                      ? "bg-secondary text-white shadow-card"
                      : "bg-surface border border-border text-foreground hover:bg-primary-50"
                  }`}
                >
                  <span className="font-bold">{abbreviation}</span>
                  <span className="hidden sm:inline">{name}</span>
                </button>
              );
            })}
          </div>

          {/* Tier Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {orderedTiers.map((tier) => {
              const available = tierAvailableInState(tier, selectedState);
              if (!available) return null;

              const price = tierPrice(tier, selectedState, entityType);
              const stateVariant = tier.stateVariants[selectedState];
              const renewal = stateVariant
                ? `$${stateVariant.prices[entityType].renewal}/yr renewal`
                : undefined;

              return (
                <PackagePreviewCard
                  key={tier.slug}
                  tier={{
                    name: `${tier.name} ${entityType === "llc" ? "LLC" : "Corporation"}`,
                    badge: tier.badge,
                    price,
                    period: "formation",
                    description: stateVariant?.description ?? tier.description,
                    highlighted: tier.highlighted,
                    renewal,
                  }}
                  entityType={entityType === "llc" ? "LLC" : "Corp"}
                  cta={{
                    label: "View Details",
                    href: `/${tier.slug}?state=${selectedState.toLowerCase()}`,
                  }}
                />
              );
            })}
          </div>

          {/* State-specific note for CA/FL */}
          {(selectedState === "California" || selectedState === "Florida") && (
            <p className="mt-6 text-body text-muted text-center max-w-narrow mx-auto">
              {selectedState} packages use a Wyoming or Nevada nominee structure
              with {selectedState} foreign registration included. Only Gold tier
              is available for {selectedState}.
            </p>
          )}
        </div>
      </section>

      {/* Alternative Paths — Shelf Company + Compare CTA in one 2-column section */}
      <section className="py-section-y px-container-x bg-surface">
        <div className="mx-auto max-w-content">
          <SectionHeader
            eyebrow="Alternative Paths"
            title="Other Ways In"
            subtitle="Pre-aged entities and detailed feature comparisons — for the times when a standard tier isn't the right starting point."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <PackagePreviewCard
              tier={{
                name: "Shelf Company",
                badge: "Pre-Aged",
                price: 2500,
                period: "formation",
                description:
                  "Pre-aged entity with established history and clean record. Wyoming formation with full nominee and offshore services included.",
                highlighted: false,
                renewal: "$525/yr renewal",
              }}
              entityType={entityType === "llc" ? "LLC" : "Corp"}
              cta={{
                label: "View Shelf Companies",
                href: "/shelf-companies",
              }}
            />

            <div className="flex flex-col rounded-card-lg border border-border bg-primary-50 p-10 shadow-card">
              <h3 className="font-display text-heading-sm font-semibold text-foreground">
                Want a Side-by-Side Feature Breakdown?
              </h3>
              <p className="mt-3 text-body text-muted">
                Compare every feature across Bronze, Silver, and Gold tiers in
                our detailed comparison table. See exactly what's included,
                add-on, or not offered.
              </p>
              <div className="mt-auto pt-6">
                <Link
                  to="/compare-packages"
                  className="inline-flex items-center gap-2 rounded-button bg-secondary px-6 py-3 text-body font-medium text-white hover:bg-secondary/90 transition-colors"
                >
                  Compare All Packages
                  <Icon name="ArrowRight" size="sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip — full-width DS component */}
      <SocialProofStrip
        testimonial={{
          quote: testimonials[0].quote,
          author: testimonials[0].name,
          role: testimonials[0].businessType,
        }}
      />

      {/* How It Works — muted bg (SocialProofStrip is white) */}
      <section className="py-section-y px-container-x bg-background">
        <div className="mx-auto max-w-content">
          <SectionHeader
            eyebrow="Process"
            title="How It Works"
            subtitle="From package selection to receiving your documents — we handle everything."
          />
          <div className="mt-10">
            <HowItWorks steps={howItWorksSteps} />
          </div>
        </div>
      </section>

      {/* FAQ — white surface */}
      <section className="py-section-y px-container-x bg-surface">
        <div className="mx-auto max-w-content">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about our formation packages."
          />
          <div className="mt-10 max-w-narrow mx-auto">
            <Accordion type="single" variant="card">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} id={item.id} title={item.title}>
                  <p className="text-body text-muted">{item.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA — dark close matching pillar/cluster pages */}
      <PillarFinalCTA
        heading="Ready to Get Started?"
        description="Choose the formation package that fits your business. All-inclusive pricing, no hidden fees, 25+ years of experience."
        ctaLabel="Start with Gold"
        ctaHref="/gold"
      />

      {/* Sticky mobile CTA — persistent entry into the funnel */}
      <StickyMobileCTA
        primaryCTA={{
          children: "Find Your Package",
          onClick: () => {
            const el = document.getElementById("choose-state");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          },
        }}
        phone="1-800-553-0615"
      />
    </div>
  );
}
