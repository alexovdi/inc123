import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { PackageComparison } from "@/design-system/components/PackageComparison";
import { PillarFinalCTA } from "@/design-system/components/PillarFinalCTA";
import { PillarIllustration } from "@/design-system/components/PillarIllustration";
import { PullQuote } from "@/design-system/components/PullQuote";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { SocialProofStrip } from "@/design-system/components/SocialProofStrip";
import { KeyDifferentiators } from "@/design-system/components/KeyDifferentiators";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { Link } from "@/design-system/primitives/Link";
import { faqItems } from "@/data/faq";
import { FORMATION_FINAL_CTA } from "@/data/pillar-content";
import {
  FORMATION_KEY_DIFFS,
  FORMATION_TRUST_BADGES,
  FORMATION_TESTIMONIAL,
} from "@/data/pillar-social-proof";

const formationFaqs = faqItems.filter((f) => f.category === "formation");

export default function FormationPillarPage() {
  return (
    <div className="min-h-screen">
      {/* ================================================
          S1: HERO — Editorial split layout
          ================================================ */}
      <section className="relative overflow-hidden bg-primary">
        <GrainOverlay opacity="opacity-[0.03]" />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[60vw] w-[60vw] rounded-full bg-pillar-formation/[0.08] blur-[120px]" />

        <div className="relative mx-auto max-w-content px-container-x py-section-y-sm">
          {/* Breadcrumb */}
          <nav className="mb-8 text-body-sm">
            <Link
              href="/"
              className="!text-white/80 !no-underline hover:!text-white transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white/90">Company Formation</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            {/* Left: Content */}
            <div>
              <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-formation-mid mb-4">
                Company Formation
              </p>

              <h1 className="font-display type-display-lg font-bold text-white">
                Expert Formation,{" "}
                <span className="text-pillar-formation-mid">
                  All-Inclusive.
                </span>
              </h1>

              <p className="mt-6 text-body-lg text-white/80 max-w-[480px]">
                Everything you need to start your business, nothing hidden.
                State fees, registered agent, EIN, operating agreement — all
                included. Wyoming and Nevada. Trusted since 2000.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#packages">
                  <Button variant="cta" size="lg">
                    Compare Formation Packages
                    <Icon
                      name="ArrowRight"
                      size="sm"
                      className="ml-2 hidden sm:inline-block"
                    />
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    How It Works
                    <Icon
                      name="ArrowDown"
                      size="sm"
                      className="ml-2 hidden sm:inline-block"
                    />
                  </Button>
                </a>
              </div>

              <p className="mt-5 text-body-sm text-white/80">
                Prefer to talk?{" "}
                <a
                  href="tel:1-800-553-0615"
                  className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
                >
                  Call 1-800-553-0615
                </a>
                {" · "}
                <Link
                  href="/contact"
                  className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
                >
                  Schedule a consultation
                </Link>
              </p>
            </div>

            {/* Right: Visual — "What's Included" checklist card */}
            <div className="hidden lg:block relative">
              <div className="rounded-card-lg bg-white/[0.06] border border-white/[0.1] p-8 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-pillar-formation/20 flex items-center justify-center">
                    <Icon
                      name="Building2"
                      size="sm"
                      className="text-pillar-formation"
                    />
                  </div>
                  <div>
                    <p className="text-body-sm font-semibold text-white">
                      All-Inclusive Package
                    </p>
                    <p className="text-caption text-white/50">
                      Everything below is included
                    </p>
                  </div>
                </div>
                {/* Included items */}
                <div className="space-y-3">
                  {[
                    "State Filing Fees",
                    "Document Preparation",
                    "Custom Operating Agreement",
                    "Bank Account Opening Document Package",
                    "Registered Agent (1 Year)",
                    "Corporate Records & Minutes",
                    "Initial State Filings and Fees",
                    "Offshore Records Storage",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/20">
                        <Icon name="Check" size="xs" className="text-success" />
                      </div>
                      <p className="font-mono text-body-sm text-white/80">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Footer */}
                <div className="pt-4 mt-4 border-t border-white/[0.1]">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-pillar-formation animate-pulse" />
                    <p className="font-mono text-body-sm text-pillar-formation">
                      $0 hidden fees — what you see is what you pay
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative shadow layers */}
              <div className="absolute -bottom-3 left-4 right-4 h-12 rounded-card-lg bg-white/[0.03] border border-white/[0.05] -z-10" />
              <div className="absolute -bottom-6 left-8 right-8 h-12 rounded-card-lg bg-white/[0.02] border border-white/[0.03] -z-20" />
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-3 gap-4 rounded-card-lg bg-white/[0.06] border border-white/[0.1] p-5">
            {[
              { value: "25", unit: "yrs", label: "Forming Entities" },
              { value: "3–5", unit: "days", label: "Formation Timeline" },
              { value: "$0", unit: "", label: "Hidden Fees" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-heading-lg font-bold text-white">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-body-sm font-normal text-white/70 ml-1">
                      {stat.unit}
                    </span>
                  )}
                </p>
                <p className="text-caption text-white/70 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          QUICK-PATH SHORTCUT — for informed buyers
          ================================================ */}
      <section className="py-10 bg-surface border-b border-border">
        <div className="mx-auto max-w-content px-container-x">
          <div className="rounded-card-lg border border-secondary/20 bg-secondary/[0.03] p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <p className="text-body-lg font-display font-semibold text-foreground">
                  Know what you need?
                </p>
                <p className="mt-1 text-body-sm text-muted">
                  Skip the reading — jump straight to packages or compare
                  options.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {QUICK_PATHS.map((pkg) => (
                  <Link
                    key={pkg.label}
                    href={pkg.href}
                    className="!no-underline group"
                  >
                    <div className="flex items-center gap-2 rounded-card border border-border bg-background px-5 py-3 hover:border-secondary/30 hover:shadow-card transition-all">
                      <span className="text-body-sm font-medium text-foreground group-hover:text-secondary transition-colors">
                        {pkg.label}
                      </span>
                      <span className="text-caption text-muted">
                        from {pkg.price}
                      </span>
                      <Icon
                        name="ArrowRight"
                        size="xs"
                        className="text-muted group-hover:text-secondary transition-colors ml-1"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          PROBLEM STATEMENT — Asymmetric layout
          ================================================ */}
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            {/* Left: Headline + description (sticky on scroll) */}
            <div className="lg:sticky lg:top-24">
              <ScrollReveal>
                <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-formation mb-3">
                  The Problem
                </p>
                <h2 className="font-display type-display-sm font-semibold text-foreground">
                  Formation Shouldn&rsquo;t Come with Surprises.{" "}
                  <span className="text-muted">But It Usually Does.</span>
                </h2>
                <p className="mt-4 text-body-lg text-muted max-w-[440px]">
                  Most formation providers advertise a low base price, then
                  stack on fees for every essential service. The &ldquo;$49
                  LLC&rdquo; becomes $600+ at checkout.
                </p>
              </ScrollReveal>
            </div>

            {/* Right: Problem cards — stacked vertically */}
            <ScrollReveal delay={150}>
              <div className="space-y-4">
                {PROBLEM_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="group bg-surface rounded-card border border-border p-6 flex gap-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card-lg bg-pillar-formation/[0.06] group-hover:bg-pillar-formation/[0.12] transition-colors">
                      <Icon
                        name={card.icon}
                        size="md"
                        className="text-pillar-formation"
                      />
                    </div>
                    <div>
                      <h3 className="text-body-lg font-display font-semibold text-foreground">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-body text-muted leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Pull quote — visual landmark ── */}
      <PullQuote bgText="$0">
        &ldquo;We include everything other providers charge extra for — state
        fees, registered agent, EIN, operating agreement. One price,{" "}
        <span className="text-amber-300 font-bold">nothing hidden</span>.&rdquo;
      </PullQuote>

      {/* ================================================
          KEY DIFFERENTIATORS — compact strip
          ================================================ */}
      <KeyDifferentiators
        pillarColor="text-pillar-formation"
        items={FORMATION_KEY_DIFFS}
      />

      {/* ================================================
          TWO DECISIONS — LLC vs Corp + WY vs NV
          ================================================ */}
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3 text-center">
              Two Decisions
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground text-center max-w-[28ch] mx-auto">
              Entity Type + State. Everything Else Is Handled.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
              {/* LLC vs Corp */}
              <div className="rounded-card-lg border border-border bg-surface p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Icon
                    name="Building2"
                    size="md"
                    className="text-pillar-formation"
                  />
                  <h3 className="font-display text-body-lg font-semibold text-foreground">
                    LLC or Corporation?
                  </h3>
                </div>
                <div className="space-y-3 text-body-sm">
                  <div>
                    <p className="font-semibold text-foreground">LLC</p>
                    <p className="text-muted">
                      Flexible management, pass-through taxation, simpler
                      compliance. Best for most small businesses.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Corporation</p>
                    <p className="text-muted">
                      Formal structure, stock issuance, better for raising
                      investment. Required for some industries.
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-card bg-pillar-formation/[0.06] border border-pillar-formation/[0.15] px-3 py-2">
                  <p className="text-caption font-semibold text-foreground">
                    85%+ of our clients choose LLC
                  </p>
                </div>
                <Link
                  href="/llc-vs-corporation"
                  className="mt-3 inline-flex items-center text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                >
                  Full LLC vs Corp comparison →
                </Link>
              </div>

              {/* WY vs NV */}
              <div className="rounded-card-lg border border-border bg-surface p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Icon
                    name="MapPin"
                    size="md"
                    className="text-pillar-formation"
                  />
                  <h3 className="font-display text-body-lg font-semibold text-foreground">
                    Wyoming or Nevada?
                  </h3>
                </div>
                <div className="space-y-3 text-body-sm">
                  <div>
                    <p className="font-semibold text-foreground">Wyoming</p>
                    <p className="text-muted">
                      $62/yr annual report, no state income tax, strongest
                      single-member LLC protection.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Nevada</p>
                    <p className="text-muted">
                      Established case law, dedicated business court, strong
                      privacy statutes.
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-card bg-pillar-formation/[0.06] border border-pillar-formation/[0.15] px-3 py-2">
                  <p className="text-caption font-semibold text-foreground">
                    Wyoming is best for most — 70% of clients
                  </p>
                </div>
                <Link
                  href="/wyoming-vs-nevada-llc"
                  className="mt-3 inline-flex items-center text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                >
                  Full WY vs NV comparison →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          FORMATION STEPS — Editorial numbered blocks
          ================================================ */}
      <section id="formation-steps" className="py-section-y-sm bg-primary-50">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-formation mb-3">
              Understanding Formation
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[28ch]">
              What Goes Into Forming Your Entity
            </h2>
            <p className="mt-3 text-body-lg text-muted max-w-[520px]">
              Entity formation isn&rsquo;t just paperwork — it&rsquo;s a
              structure that determines your liability protection, tax
              treatment, and privacy.
            </p>
          </ScrollReveal>

          <PillarIllustration
            pillar="formation"
            className="mt-10 mb-4 lg:hidden"
          />

          <div className="mt-14 space-y-0">
            {FORMATION_BLOCKS.map((block, i) => (
              <ScrollReveal key={block.id}>
                <div
                  className={`grid gap-8 lg:grid-cols-[120px_1fr] py-10 ${i < FORMATION_BLOCKS.length - 1 ? "border-b border-border" : ""}`}
                >
                  {/* Large editorial number */}
                  <div className="hidden lg:block">
                    <span className="font-mono text-[5rem] font-bold leading-none text-pillar-formation/[0.12]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-3 lg:hidden">
                      <span className="font-mono text-heading-lg font-bold text-pillar-formation/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-heading-lg font-semibold text-foreground">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-body text-muted leading-relaxed max-w-[600px]">
                      {block.summary}
                    </p>
                    {block.keyPoint && (
                      <div className="mt-4 rounded-card bg-pillar-formation/[0.04] border border-pillar-formation/[0.12] px-5 py-4">
                        <p className="text-body-sm font-semibold text-foreground mb-1">
                          Key Point
                        </p>
                        <p className="text-body-sm text-muted leading-relaxed">
                          {block.keyPoint}
                        </p>
                      </div>
                    )}
                    <Link
                      href={block.href}
                      className="inline-flex items-center text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors mt-4"
                    >
                      {block.linkText}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          STATE COMPARISON SNAPSHOT
          ================================================ */}
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
              Compare Costs
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[28ch]">
              Wyoming vs. Nevada Formation Costs
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mt-10 max-w-[720px]">
              <div className="overflow-hidden rounded-card-lg border border-border">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface border-b border-border">
                      <th className="px-5 py-3 text-body-sm font-semibold text-foreground">
                        Cost
                      </th>
                      <th className="px-5 py-3 text-body-sm font-semibold text-foreground text-center">
                        Wyoming
                      </th>
                      <th className="px-5 py-3 text-body-sm font-semibold text-foreground text-center">
                        Nevada
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-body-sm">
                    {FORMATION_COMPARISON.map((row, i) => (
                      <tr
                        key={row.factor}
                        className={
                          i < FORMATION_COMPARISON.length - 1
                            ? "border-b border-border"
                            : ""
                        }
                      >
                        <td className="px-5 py-3 text-muted">{row.factor}</td>
                        <td className="px-5 py-3 text-center text-foreground">
                          {row.wy}
                        </td>
                        <td className="px-5 py-3 text-center text-foreground">
                          {row.nv}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-body-sm text-muted">
                <strong className="text-foreground">Bottom line:</strong>{" "}
                Wyoming is significantly cheaper to form and maintain. Nevada
                offers stronger case law and a dedicated business court.{" "}
                <Link
                  href="/wyoming-vs-nevada-llc"
                  className="text-secondary hover:text-secondary/80 font-medium"
                >
                  Full comparison →
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          HOW IT WORKS
          ================================================ */}
      <section id="how-it-works" className="py-section-y-sm bg-primary-50">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="How It Works"
              title="From Inquiry to Incorporated — All-Inclusive."
              subtitle="Four steps. We handle everything. You get a properly formed entity."
              subtitleMaxWidth="max-w-narrow mx-auto"
            />

            <div className="mt-12">
              <HowItWorks steps={PROCESS_STEPS} />
            </div>

            <div className="mt-10 text-center">
              <a href="#packages">
                <Button variant="cta" size="md">
                  See Formation Packages &amp; Pricing
                  <Icon
                    name="ArrowRight"
                    size="sm"
                    className="ml-2 hidden sm:inline-block"
                  />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          S5: DIFFERENTIATORS — 1 featured + 5 grid (dark)
          ================================================ */}
      <section className="relative py-section-y-sm bg-primary overflow-hidden">
        <GrainOverlay opacity="opacity-[0.03]" />
        <div className="pointer-events-none absolute -right-60 top-20 h-[50vw] w-[50vw] rounded-full bg-pillar-formation/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Why Incorporate123"
              title="What Sets Our Formation Services Apart"
              dark
            />

            {/* Featured differentiator — full width hero card */}
            <div className="mt-12 rounded-card-lg bg-white/[0.06] border border-white/[0.1] overflow-hidden">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 lg:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-card-lg bg-pillar-formation/20 mb-5">
                    <Icon
                      name="DollarSign"
                      size="lg"
                      className="text-pillar-formation"
                    />
                  </div>
                  <h3 className="font-display text-heading-lg font-semibold text-white">
                    Truly All-Inclusive Pricing — No Hidden Fees
                  </h3>
                  <p className="mt-3 text-body text-white/75 leading-relaxed max-w-[440px]">
                    Every formation package includes state filing fees,
                    registered agent, EIN filing, operating agreement, corporate
                    seal, corporate minutes, annual reports, and certificate of
                    good standing. Most providers charge extra for each one.
                  </p>
                  <div className="mt-6 flex items-center gap-6">
                    <div>
                      <p className="font-mono text-heading font-bold text-white">
                        $0
                      </p>
                      <p className="text-caption text-white/70">hidden fees</p>
                    </div>
                    <div className="h-10 w-px bg-white/[0.1]" />
                    <div>
                      <p className="font-mono text-heading font-bold text-white">
                        All
                      </p>
                      <p className="text-caption text-white/70">
                        fees included
                      </p>
                    </div>
                    <div className="h-10 w-px bg-white/[0.1]" />
                    <div>
                      <p className="font-mono text-heading font-bold text-white">
                        25
                      </p>
                      <p className="text-caption text-white/70">
                        years trusted
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center bg-white/[0.03] p-10">
                  {/* VS comparison visual */}
                  <div className="w-full max-w-[280px] space-y-4">
                    <div className="rounded-card bg-red-500/[0.08] border border-red-400/[0.15] p-4">
                      <p className="text-caption font-semibold text-red-400/80 uppercase tracking-wider mb-2">
                        Others: &ldquo;$49 Formation&rdquo;
                      </p>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-body-sm text-white/40">
                          <Icon
                            name="Plus"
                            size="xs"
                            className="text-red-400/60"
                          />{" "}
                          +$150 state filing fees
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/40">
                          <Icon
                            name="Plus"
                            size="xs"
                            className="text-red-400/60"
                          />{" "}
                          +$125 registered agent
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/40">
                          <Icon
                            name="Plus"
                            size="xs"
                            className="text-red-400/60"
                          />{" "}
                          +$70 EIN filing
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/40">
                          <Icon
                            name="Plus"
                            size="xs"
                            className="text-red-400/60"
                          />{" "}
                          +$35 operating agreement
                        </div>
                      </div>
                    </div>
                    <div className="rounded-card bg-success/[0.08] border border-success/[0.2] p-4">
                      <p className="text-caption font-semibold text-success uppercase tracking-wider mb-2">
                        Incorporate123: One Price
                      </p>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-body-sm text-white/60">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-success"
                          />{" "}
                          State fees included
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/60">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-success"
                          />{" "}
                          Registered agent included
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/60">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-success"
                          />{" "}
                          EIN + operating agreement
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/60">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-success"
                          />{" "}
                          Seal, minutes, annual reports
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 5 smaller differentiator cards */}
          <ScrollReveal delay={150}>
            <div className="mt-5 flex flex-wrap gap-5">
              {DIFFERENTIATORS_SMALL.map((item) => (
                <div
                  key={item.title}
                  className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] rounded-card-lg bg-white/[0.06] border border-white/[0.1] p-7 hover:-translate-y-1 transition-all duration-300 hover:bg-white/[0.08]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-card bg-white/[0.08] border border-white/[0.12] mb-4">
                    <Icon
                      name={item.icon}
                      size="md"
                      className="text-pillar-formation"
                    />
                  </div>
                  <h3 className="font-display text-body font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-body-sm text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          S6: SOCIAL PROOF STRIP
          ================================================ */}
      <SocialProofStrip
        pillarColor="text-pillar-formation"
        badges={FORMATION_TRUST_BADGES}
        testimonial={FORMATION_TESTIMONIAL}
      />

      {/* ================================================
          PRIVACY UPSELL BRIDGE
          ================================================ */}
      <section className="py-section-y-sm bg-pillar-privacy/[0.03] border-y border-pillar-privacy/[0.1]">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="max-w-[720px] mx-auto">
              <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                Did You Know?
              </p>
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                70% of Our Clients Add Privacy to Their Formation.
              </h2>
              <p className="mt-3 text-body text-muted leading-relaxed">
                When you form an LLC or corporation, your name goes on public
                state filings — visible to anyone who searches. Gold packages
                include year-round nominee services that keep your name off
                every document: formation, annual reports, amendments,
                everything.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-card bg-surface border border-border p-4 text-center">
                  <p className="font-display text-heading font-bold text-foreground">
                    $400
                  </p>
                  <p className="text-caption text-muted mt-0.5">
                    WY privacy upgrade
                  </p>
                </div>
                <div className="rounded-card bg-surface border border-border p-4 text-center">
                  <p className="font-display text-heading font-bold text-foreground">
                    $525
                  </p>
                  <p className="text-caption text-muted mt-0.5">
                    NV privacy upgrade
                  </p>
                </div>
                <div className="rounded-card bg-surface border border-border p-4 text-center">
                  <p className="font-display text-heading font-bold text-foreground">
                    365
                  </p>
                  <p className="text-caption text-muted mt-0.5">
                    days/yr nominee coverage
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/privacy"
                  className="text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                >
                  Learn about business privacy →
                </Link>
                <Link
                  href="/compare-packages"
                  className="text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                >
                  Compare Gold vs Silver →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          PACKAGES — Compare
          ================================================ */}
      <div id="packages">
        <PackageComparison />
      </div>

      {/* ================================================
          S8: FAQ — Split layout with sticky left header
          ================================================ */}
      <section className="py-section-y-sm bg-primary-50">
        <div className="mx-auto max-w-content px-container-x">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            {/* Left: Header (sticky) */}
            <div className="lg:sticky lg:top-24">
              <ScrollReveal>
                <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-foreground/70 mb-3">
                  Frequently Asked Questions
                </p>
                <h2 className="font-display type-display-sm font-semibold text-foreground">
                  Formation Questions Answered
                </h2>
                <p className="mt-3 text-body text-muted">
                  Quick answers to the most common questions about forming an
                  LLC or Corporation.
                </p>
                <div className="mt-6 hidden lg:block">
                  <p className="text-body-sm text-muted">
                    Still have questions?
                  </p>
                  <a
                    href="tel:1-800-553-0615"
                    className="inline-flex items-center gap-2 text-body-sm font-medium text-secondary hover:text-secondary/80 mt-2"
                  >
                    <Icon name="Phone" size="sm" />
                    Call 1-800-553-0615
                  </a>
                  <br />
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-body-sm font-medium text-secondary hover:text-secondary/80 mt-1"
                  >
                    <Icon name="Mail" size="sm" />
                    Send us a message
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Accordion */}
            <ScrollReveal delay={200}>
              <Accordion type="single" variant="default">
                {formationFaqs.map((faq) => (
                  <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
                    <p>{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================
          EXPLORE — Continue learning
          ================================================ */}
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[24ch]">
              Explore Formation Resources
            </h2>
            <p className="mt-2 text-body text-muted">
              Entity guides, state comparisons, and formation breakdowns.
            </p>
          </ScrollReveal>

          {/* Services row — 3 featured cards */}
          <ScrollReveal delay={100}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {EXPLORE_SERVICES.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="!no-underline group block h-full"
                >
                  <div className="h-full rounded-card-lg border border-border bg-surface p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-card bg-pillar-formation/[0.08] mb-4 group-hover:bg-pillar-formation/[0.14] transition-colors">
                      <Icon
                        name={item.icon}
                        size="md"
                        className="text-pillar-formation"
                      />
                    </div>
                    <h3 className="font-display text-body-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-body-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-secondary group-hover:gap-2 transition-all">
                      Read guide
                      <Icon name="ArrowRight" size="xs" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          {/* State guides + Comparisons — 2 columns */}
          <ScrollReveal delay={200}>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5">
              <div className="rounded-card-lg border border-border bg-surface p-6">
                <p className="text-caption font-semibold uppercase tracking-[0.1em] text-muted mb-4">
                  Entity Type Guides
                </p>
                <div className="space-y-3">
                  {EXPLORE_ENTITIES.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="!no-underline group flex items-center gap-3 rounded-card px-3 py-2.5 -mx-3 hover:bg-pillar-formation/[0.04] transition-colors"
                    >
                      <Icon
                        name={item.icon}
                        size="sm"
                        className="text-secondary shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-body-sm font-medium text-foreground group-hover:text-secondary transition-colors">
                          {item.title}
                        </p>
                        <p className="text-caption text-muted truncate">
                          {item.desc}
                        </p>
                      </div>
                      <Icon
                        name="ChevronRight"
                        size="xs"
                        className="text-muted/40 shrink-0 ml-auto group-hover:text-secondary transition-colors"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-card-lg border border-border bg-surface p-6">
                <p className="text-caption font-semibold uppercase tracking-[0.1em] text-muted mb-4">
                  Compare Options
                </p>
                <div className="space-y-3">
                  {EXPLORE_COMPARISONS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="!no-underline group flex items-start gap-3 rounded-card px-3 py-2.5 -mx-3 hover:bg-pillar-formation/[0.04] transition-colors"
                    >
                      <Icon
                        name="ArrowLeftRight"
                        size="sm"
                        className="text-secondary shrink-0 mt-0.5"
                      />
                      <div className="min-w-0">
                        <p className="text-body-sm font-medium text-foreground group-hover:text-secondary transition-colors">
                          {item.title}
                        </p>
                        <p className="text-caption text-muted">{item.desc}</p>
                      </div>
                      <Icon
                        name="ChevronRight"
                        size="xs"
                        className="text-muted/40 shrink-0 mt-1 ml-auto group-hover:text-secondary transition-colors"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          CROSS-PILLAR BRIDGE
          ================================================ */}
      <section className="py-section-y-sm bg-primary-50">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3 text-center">
              Beyond Formation
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground text-center">
              Formation Is Step One. What Comes Next?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto items-stretch">
              <CrossPillarCTA
                fromPillar="formation"
                toPillar="privacy"
                heading="Add Privacy to Your Formation"
                description="70% of clients add privacy. Gold packages include year-round nominees that keep your name off every filing — simpler to include from the start than to add later."
                href="/privacy"
                className="h-full"
              />
              <CrossPillarCTA
                fromPillar="formation"
                toPillar="asset"
                heading="Protect What You're Building"
                description="If you have $500K+ in assets, the right LLC structure can shield personal wealth from business lawsuits. Wyoming's charging order protection is the strongest in the country."
                href="/asset-protection"
                className="h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          FINAL CTA — confident close
          ================================================ */}
      <PillarFinalCTA
        heading={FORMATION_FINAL_CTA.heading}
        description={FORMATION_FINAL_CTA.description}
        ctaLabel={FORMATION_FINAL_CTA.ctaLabel}
        ctaHref={FORMATION_FINAL_CTA.ctaHref}
      />
    </div>
  );
}

/* ================================================
   Static data
   ================================================ */

const QUICK_PATHS = [
  { label: "Wyoming LLC", price: "$625", href: "/wyoming-bronze" },
  { label: "Wyoming Gold LLC", price: "$1,275", href: "/wyoming-gold" },
  { label: "Nevada LLC", price: "$625", href: "/nevada-bronze" },
  { label: "Shelf Company", price: "varies", href: "/shelf-companies" },
];

const FORMATION_COMPARISON = [
  { factor: "LLC formation fee", wy: "$100", nv: "$425" },
  { factor: "Corp formation fee", wy: "$100", nv: "$75" },
  { factor: "Annual report", wy: "$62", nv: "$350" },
  { factor: "Business license", wy: "None", nv: "$350" },
  { factor: "State income tax", wy: "None", nv: "None" },
  { factor: "Formation timeline", wy: "3–5 days", nv: "3–5 days" },
  { factor: "Member disclosure", wy: "Not required", nv: "Not required" },
];

const PROBLEM_CARDS = [
  {
    icon: "DollarSign" as const,
    title: "Hidden Fees Everywhere",
    desc: "Most providers advertise a low base price then charge extra for state fees, registered agent, EIN, operating agreement, and annual reports. The $49 LLC becomes $600+ by checkout.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Wrong State, Wrong Entity",
    desc: "Forming in the wrong state or choosing the wrong entity type can cost you thousands in unnecessary taxes, fees, and compliance burdens. Generic services don't advise — they just file.",
  },
  {
    icon: "Clock" as const,
    title: "File and Forget",
    desc: "Many services file your paperwork and disappear. No registered agent renewal, no annual report reminders, no ongoing support. One missed filing can dissolve your entity.",
  },
  {
    icon: "FileSearch" as const,
    title: "Compliance Gaps",
    desc: "Without proper corporate minutes, operating agreements, and annual reports, your liability protection can be pierced. A poorly maintained entity is worse than no entity at all.",
  },
];

const FORMATION_BLOCKS = [
  {
    id: "entity-choice",
    title: "Choose the Right Entity Type",
    summary:
      "LLC or Corporation? The choice determines your management structure, tax treatment, and liability protections. LLCs offer flexibility and pass-through taxation. Corporations suit businesses planning to raise capital or go public.",
    keyPoint:
      "Wyoming LLCs are the most popular choice — lowest annual fees ($62/yr), strongest charging order protection, no state income tax, and no public member disclosure. 70% of our clients choose Wyoming.",
    href: "/wyoming-llc",
    linkText: "Learn about Wyoming LLCs →",
  },
  {
    id: "state-selection",
    title: "Pick the Right Formation State",
    summary:
      "Where you form matters more than most people realize. Wyoming and Nevada are the two most business-friendly states — no state income tax, strong liability protections, privacy-friendly statutes, and low annual fees.",
    keyPoint:
      "You don't need to live in or operate from your formation state. Most clients form in Wyoming for privacy and low costs, then foreign register in their home state if needed.",
    href: "/wyoming-vs-nevada-llc",
    linkText: "Compare Wyoming vs. Nevada →",
  },
  {
    id: "all-inclusive",
    title: "Get Everything Included From Day One",
    summary:
      "Our packages include state filing fees, registered agent, EIN, operating agreement, corporate seal, corporate minutes, annual report preparation, and certificate of good standing. No hidden fees, no surprise charges at checkout.",
    keyPoint:
      "Gold packages add year-round nominee services, offshore record storage, and virtual office. Silver includes all formation essentials plus virtual office and mail forwarding. Bronze covers formation and compliance basics.",
    href: "/compare-packages",
    linkText: "Compare package tiers →",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Choose Your State & Package",
    description:
      "Select Wyoming or Nevada based on your goals. Compare Bronze, Silver, and Gold tiers — all are all-inclusive with no hidden fees.",
    tag: "Choose",
    color: "amber" as const,
  },
  {
    number: 2,
    title: "We Prepare & File Everything",
    description:
      "Our team prepares Articles of Organization (LLC) or Incorporation (Corp), files with the state, obtains your EIN, and drafts your operating agreement.",
    tag: "Formation",
    color: "blue" as const,
  },
  {
    number: 3,
    title: "Complete Entity Package Delivered",
    description:
      "You receive a complete entity package: filed articles, EIN confirmation, operating agreement, corporate seal, membership certificates, and minute book.",
    tag: "Delivery",
    color: "green" as const,
  },
  {
    number: 4,
    title: "Ongoing Compliance, Handled",
    description:
      "Registered agent, annual reports, corporate minutes maintenance — all included in your renewal. Your entity stays in good standing year after year.",
    tag: "Compliance",
    color: "purple" as const,
  },
];

const DIFFERENTIATORS_SMALL = [
  {
    icon: "Clock" as const,
    title: "25 Years Specialized Experience",
    desc: "Wyoming and Nevada entity formation since 2000. We know the nuances that only come with decades of hands-on filing.",
  },
  {
    icon: "Shield" as const,
    title: "Privacy Options Built In",
    desc: "Gold packages include nominees, offshore records, and anonymous formation. Privacy isn't an upsell — it's a tier.",
  },
  {
    icon: "FileText" as const,
    title: "Complete Compliance Included",
    desc: "Registered agent, annual reports, corporate minutes, seal, and good standing certificate. Every package, every year.",
  },
  {
    icon: "Bitcoin" as const,
    title: "Crypto Payments",
    desc: "Bitcoin, Ethereum, XRP, Litecoin, Monero. Pay for formation with the currency of your choice.",
  },
  {
    icon: "Headphones" as const,
    title: "Real People. Real Answers.",
    desc: "Talk to a formation specialist who knows your case — not a chatbot or call center. Call anytime.",
  },
];

const EXPLORE_SERVICES = [
  {
    icon: "Building2" as const,
    title: "Wyoming LLC Formation",
    desc: "America's most business-friendly state. No state income tax, $62/yr annual fee, strongest charging order protection.",
    href: "/wyoming-llc",
  },
  {
    icon: "Building" as const,
    title: "Nevada LLC Formation",
    desc: "No state income tax, dedicated business court, strong privacy statutes, and 25 years of Incorporate123 Nevada expertise.",
    href: "/nevada-llc",
  },
  {
    icon: "Archive" as const,
    title: "Shelf Companies",
    desc: "Pre-aged entities with established formation dates. Clean histories, no prior liabilities, immediate availability.",
    href: "/shelf-companies",
  },
];

const EXPLORE_ENTITIES = [
  {
    icon: "Building2" as const,
    title: "Wyoming Corporation",
    desc: "Close-knit statutes ideal for raising capital",
    href: "/wyoming-corporation",
  },
  {
    icon: "Building" as const,
    title: "Nevada Corporation",
    desc: "Dedicated business court + no state income tax",
    href: "/nevada-corporation",
  },
  {
    icon: "Layers" as const,
    title: "Series LLC",
    desc: "Isolated liability cells within a single entity",
    href: "/series-llc",
  },
  {
    icon: "Calculator" as const,
    title: "Entity Tax Guide",
    desc: "How entity type affects your taxes",
    href: "/entity-tax-guide",
  },
  {
    icon: "Globe" as const,
    title: "Foreign State Registration",
    desc: "Operate in CA, FL, or other states with your WY/NV entity",
    href: "/foreign-registration",
  },
];

const EXPLORE_COMPARISONS = [
  {
    title: "Wyoming vs. Nevada LLC",
    desc: "Head-to-head: costs, privacy, asset protection, and annual fees compared.",
    href: "/wyoming-vs-nevada-llc",
  },
  {
    title: "LLC vs. Corporation",
    desc: "Which entity type is right? Compare flexibility, taxation, and formation requirements.",
    href: "/llc-vs-corporation",
  },
  {
    title: "S-Corp vs. C-Corp Taxation",
    desc: "How entity election affects self-employment taxes, distributions, and annual filings.",
    href: "/entity-tax-guide",
  },
];
