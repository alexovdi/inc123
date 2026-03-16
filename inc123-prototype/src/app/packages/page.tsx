"use client";

import { useState } from "react";
import Link from "next/link";
import { packages } from "@/data/packages";
import {
  CTABlock,
  PackagePreviewCard,
  EntityTypeToggle,
  HowItWorks,
  Accordion,
  AccordionItem,
} from "@/design-system/components";
import { Icon } from "@/design-system/primitives";
import type { EntityType } from "@/lib/types";

const entityOptions = [
  { value: "llc", label: "LLC" },
  { value: "corp", label: "Corporation" },
];

const trustStats = [
  { icon: "Calendar", label: "25+ Years in Business" },
  { icon: "Shield", label: "All-Inclusive Pricing" },
  { icon: "CircleCheck", label: "Money-Back Guarantee" },
];

const intentCards = [
  {
    icon: "Eye",
    title: "Maximum Privacy",
    description:
      "Year-round nominees, offshore record storage, and anonymous ownership. Full identity protection from public records.",
    anchor: "#wyoming",
    cta: "See Gold packages",
  },
  {
    icon: "Building2",
    title: "Professional Formation",
    description:
      "Essential formation with registered agent and compliance support. Everything you need to get your business started right.",
    anchor: "#nevada",
    cta: "See Silver & Bronze",
  },
  {
    icon: "MapPin",
    title: "Operate in Your Home State",
    description:
      "Live in California or Florida? Form in a privacy state, register in yours. Full nominee protection included.",
    anchor: "#ca-fl",
    cta: "See Privacy packages",
  },
];

const stateGroups = [
  {
    id: "wyoming",
    title: "Wyoming Packages",
    description:
      "America's top state for privacy and asset protection. Lowest fees, strongest charging order protection.",
    filter: (pkg: (typeof packages)[number]) =>
      pkg.state === "Wyoming" && pkg.id !== "shelf-companies",
  },
  {
    id: "nevada",
    title: "Nevada Packages",
    description:
      "No state income tax, established business court. Our Nevada presence gives you a same-day filing advantage.",
    filter: (pkg: (typeof packages)[number]) => pkg.state === "Nevada",
  },
  {
    id: "ca-fl",
    title: "California & Florida Privacy",
    description:
      "Live in CA or FL? Form in a privacy state, register in yours. Full nominee protection included.",
    filter: (pkg: (typeof packages)[number]) =>
      pkg.state === "California" || pkg.state === "Florida",
  },
  {
    id: "shelf",
    title: "Shelf Companies",
    description:
      "Pre-aged entity with established history. Immediate availability for business needs requiring entity age.",
    filter: (pkg: (typeof packages)[number]) => pkg.id === "shelf-companies",
  },
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
      "Wyoming offers the lowest fees and strongest charging order protection — it's our most popular choice. Nevada is ideal if you want an established business court system and no state income tax. If you live in California or Florida, our Privacy packages let you form in a privacy state while registering in yours.",
  },
  {
    id: "whats-included",
    title: "What's included in the price?",
    answer:
      "Every package includes state filing fees, registered agent service for the first year, and core compliance documents. There are no hidden fees — the price you see is the price you pay for formation. Annual renewal fees cover ongoing registered agent and compliance services.",
  },
  {
    id: "upgrade",
    title: "Can I upgrade later?",
    answer:
      "Yes. You can upgrade from Silver to Gold at any time by adding nominee services and offshore record storage. Contact our team and we'll handle the transition seamlessly.",
  },
  {
    id: "guarantee",
    title: "Do you offer a money-back guarantee?",
    answer:
      "Yes. If we're unable to file your formation documents with the state for any reason, you'll receive a full refund. We've been in business for over 25 years and stand behind every filing.",
  },
];

export default function PackagesPage() {
  const [entityType, setEntityType] = useState<EntityType>("llc");

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

      {/* Quick Decision Guide */}
      <section className="py-section-y px-container-x bg-background">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-heading-lg font-bold text-foreground text-center">
            Not Sure Where to Start?
          </h2>
          <p className="mt-2 text-body text-muted text-center max-w-narrow mx-auto">
            Choose based on what matters most to your business.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {intentCards.map((card) => (
              <a
                key={card.title}
                href={card.anchor}
                className="group rounded-xl border border-border bg-surface p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Icon name={card.icon} size="lg" />
                </div>
                <h3 className="mt-4 font-display text-heading-sm font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-secondary group-hover:gap-2 transition-all">
                  {card.cta}
                  <Icon name="ArrowRight" size="sm" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Packages by State */}
      {stateGroups.map((group) => {
        const groupPackages = packages.filter(group.filter);
        const isShelf = group.id === "shelf";

        return (
          <section
            key={group.id}
            id={group.id}
            className="py-section-y px-container-x scroll-mt-24"
          >
            <div className="mx-auto max-w-content">
              <h2 className="font-display text-heading-lg font-bold text-foreground text-center">
                {group.title}
              </h2>
              <p className="mt-2 text-body text-muted text-center max-w-narrow mx-auto">
                {group.description}
              </p>

              <div
                className={`mt-10 grid gap-6 ${
                  isShelf
                    ? "grid-cols-1 max-w-lg mx-auto"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {groupPackages.map((pkg) => (
                  <PackagePreviewCard
                    key={pkg.id}
                    tier={{
                      name: pkg.name,
                      badge: pkg.badge,
                      price: pkg.prices[entityType].formation,
                      period: "formation",
                      description: pkg.description,
                      highlighted: pkg.highlighted,
                      renewal: `$${pkg.prices[entityType].renewal}/yr renewal`,
                    }}
                    entityType={entityType === "llc" ? "LLC" : "Corp"}
                    cta={{
                      label: "View Details",
                      href: `/${pkg.flatSlug}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Compare CTA */}
      <section className="px-container-x">
        <div className="mx-auto max-w-content">
          <div className="rounded-xl border border-border bg-surface p-8 text-center shadow-card">
            <h3 className="font-display text-heading-sm font-semibold text-foreground">
              Want a Side-by-Side Feature Breakdown?
            </h3>
            <p className="mt-2 text-body text-muted max-w-narrow mx-auto">
              Compare every feature across all tiers and states in our detailed
              comparison table.
            </p>
            <Link
              href="/compare-packages"
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
              label: "Start with Wyoming Gold",
              href: "/wyoming-private-incorporation",
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
