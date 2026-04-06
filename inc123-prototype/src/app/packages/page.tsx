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
import { CTABlock } from "@/design-system/components/CTABlock";
import { EntityTypeToggle } from "@/design-system/components/EntityTypeToggle";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { PackagePreviewCard } from "@/design-system/components/PackagePreviewCard";
import { Icon } from "@/design-system/primitives/Icon";
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
      {/* Hero */}
      <section className="bg-primary text-white py-section-y px-container-x">
        <div className="mx-auto max-w-content text-center">
          <h1 className="font-display text-display font-bold">
            All-Inclusive Formation Packages
          </h1>
          <p className="mt-4 text-body-lg text-white/80 max-w-narrow mx-auto">
            Transparent pricing with no hidden fees. Every package includes
            state filing fees, registered agent, and compliance essentials.
          </p>
          <div className="mt-8 flex justify-center">
            <EntityTypeToggle
              options={entityOptions}
              value={entityType}
              onChange={(v) => setEntityType(v as EntityType)}
              dark
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-body-sm text-white/80">
            {trustStats.map((stat) => (
              <span key={stat.label} className="flex items-center gap-2">
                <Icon name={stat.icon} size="sm" className="text-white/70" />
                {stat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* State Selector */}
      <section className="py-section-y px-container-x bg-background">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-heading-lg font-bold text-foreground text-center">
            Choose Your Formation State
          </h2>
          <p className="mt-2 text-body text-muted text-center max-w-narrow mx-auto">
            Select a state to see available tiers and pricing. Not all tiers are
            available in every state.
          </p>

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

      {/* Shelf Company Card */}
      <section className="py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-heading-lg font-bold text-foreground text-center">
            Shelf Companies
          </h2>
          <p className="mt-2 text-body text-muted text-center max-w-narrow mx-auto">
            Pre-aged entities with established history. Immediate availability
            for business needs requiring entity age.
          </p>

          <div className="mt-10 grid grid-cols-1 max-w-lg mx-auto">
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
                label: "View Details",
                href: "/shelf-companies",
              }}
            />
          </div>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="px-container-x">
        <div className="mx-auto max-w-content">
          <div className="rounded-xl border border-border bg-surface p-8 text-center shadow-card">
            <h3 className="font-display text-heading-sm font-semibold text-foreground">
              Want a Side-by-Side Feature Breakdown?
            </h3>
            <p className="mt-2 text-body text-muted max-w-narrow mx-auto">
              Compare every feature across all tiers in our detailed comparison
              table.
            </p>
            <Link
              to="/compare-packages"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-body font-medium text-white hover:bg-secondary/90 transition-colors"
            >
              Compare All Packages
              <Icon name="ArrowRight" size="sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-heading-lg font-bold text-foreground text-center">
            How It Works
          </h2>
          <p className="mt-2 text-body text-muted text-center max-w-narrow mx-auto">
            From package selection to receiving your documents — we handle
            everything.
          </p>
          <div className="mt-10">
            <HowItWorks steps={howItWorksSteps} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-y px-container-x bg-background">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-heading-lg font-bold text-foreground text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-body text-muted text-center max-w-narrow mx-auto">
            Common questions about our formation packages.
          </p>
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

      {/* Final CTA */}
      <section className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <CTABlock
            variant="dark"
            heading="Ready to Get Started?"
            description="Choose the formation package that fits your business. All-inclusive pricing, no hidden fees, 25+ years of experience."
            primaryCTA={{
              label: "Start with Gold",
              href: "/gold",
            }}
            secondaryCTA={{
              label: "Call (775) 313-4155",
              href: "tel:7753134155",
            }}
            trustSignal="25+ Years of Formation Experience"
          />
        </div>
      </section>
    </div>
  );
}
