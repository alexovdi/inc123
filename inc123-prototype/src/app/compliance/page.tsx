import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { KeyDifferentiators } from "@/design-system/components/KeyDifferentiators";
import { PackageComparison } from "@/design-system/components/PackageComparison";
import { PillarFinalCTA } from "@/design-system/components/PillarFinalCTA";
import { PillarIllustration } from "@/design-system/components/PillarIllustration";
import { PullQuote } from "@/design-system/components/PullQuote";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { SocialProofStrip } from "@/design-system/components/SocialProofStrip";
import { UpsellBridge } from "@/design-system/components/UpsellBridge";
import { Button } from "@/design-system/primitives/Button";
import { Eyebrow } from "@/design-system/primitives/Eyebrow";
import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { Link } from "@/design-system/primitives/Link";
import { faqItems } from "@/data/faq";
import {
  ALL_FORMATION_STATES,
  getPackageComparisonCards,
} from "@/data/packages";
import { COMPLIANCE_FINAL_CTA } from "@/data/pillar-content";
import {
  COMPLIANCE_KEY_DIFFS,
  COMPLIANCE_TRUST_BADGES,
  COMPLIANCE_TESTIMONIAL,
} from "@/data/pillar-social-proof";

const complianceFaqs = faqItems.filter((f) => f.category === "compliance");

export default function CompliancePillarPage() {
  return (
    <div className="min-h-screen">
      {/* ================================================
          S1: HERO — Editorial split layout
          ================================================ */}
      <section className="relative overflow-hidden bg-primary">
        <GrainOverlay opacity="opacity-[0.03]" />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[60vw] w-[60vw] rounded-full bg-pillar-compliance/[0.08] blur-[120px]" />

        <div className="relative mx-auto max-w-content px-container-x py-section-y-sm">
          {/* Breadcrumb */}
          <nav className="mb-8 text-body-sm">
            <Link
              href="/"
              className="!text-white/80 !no-underline hover:!text-white transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-white/70">/</span>
            <span className="text-white/90">Compliance</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            {/* Left: Content */}
            <div>
              <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-compliance-mid mb-4">
                Compliance
              </p>

              <h1 className="font-display type-display-lg font-bold text-white">
                Keep Your Entity in Good Standing. We Handle{" "}
                <span className="text-white/90">the Paperwork.</span>
              </h1>

              <p className="mt-6 text-body-lg text-white/80 max-w-[480px]">
                Year-round registered agent, annual reports, and full corporate
                minutes maintenance. We keep your entity in good standing so you
                can focus on running your business.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#packages">
                  <Button variant="cta" size="lg">
                    See Compliance Packages
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

            {/* Right: Visual — "Compliance Dashboard" checklist */}
            <div className="hidden lg:block relative">
              <div className="rounded-card-lg bg-white/[0.06] border border-white/[0.1] p-8 backdrop-blur-sm">
                {/* Mock dashboard header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-white/[0.12] flex items-center justify-center">
                    <Icon
                      name="ClipboardCheck"
                      size="sm"
                      className="text-pillar-compliance-mid"
                    />
                  </div>
                  <div>
                    <div className="h-2.5 w-40 rounded-full bg-white/20" />
                    <div className="h-2 w-28 rounded-full bg-white/10 mt-1.5" />
                  </div>
                </div>
                {/* Compliance checklist items */}
                <div className="space-y-3">
                  {[
                    { label: "Registered Agent", status: "active" },
                    { label: "Annual Report Filed", status: "active" },
                    { label: "Corporate Minutes", status: "active" },
                    { label: "Good Standing", status: "active" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded bg-success/[0.08] border border-success/[0.15] px-3 py-2.5"
                    >
                      <Icon
                        name="CheckCircle2"
                        size="xs"
                        className="text-success shrink-0"
                      />
                      <p className="font-mono text-body-sm text-white/80">
                        {item.label}
                      </p>
                      <span className="ml-auto text-caption text-success font-medium uppercase tracking-wider">
                        Current
                      </span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-white/[0.1]">
                    <Eyebrow size="sm" tone="onDark" className="mb-1">
                      Next Deadline
                    </Eyebrow>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                      <p className="font-mono text-body-sm text-success">
                        Handled — We track all dates for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative shadow layers */}
              <div className="absolute -bottom-3 left-4 right-4 h-12 rounded-card-lg bg-white/[0.03] border border-white/[0.05] -z-10" />
              <div className="absolute -bottom-6 left-8 right-8 h-12 rounded-card-lg bg-white/[0.02] border border-white/[0.03] -z-20" />
            </div>
          </div>

          {/* Stats strip */}
          <ScrollReveal delay={300}>
            <div className="mt-12 grid grid-cols-3 gap-4 rounded-card-lg bg-white/[0.06] border border-white/[0.1] p-5">
              {[
                { value: "365", unit: "days", label: "Year-Round Coverage" },
                { value: "$62", unit: "/yr", label: "WY Annual Report Fee" },
                { value: "All", unit: "", label: "Compliance Included" },
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
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          EXISTING ENTITY CALLOUT — hero-area shortcut
          ================================================ */}
      <section className="py-6 bg-surface border-b border-border">
        <div className="mx-auto max-w-content px-container-x">
          <div className="rounded-card-lg border border-pillar-compliance/20 bg-pillar-compliance/[0.03] p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card-lg bg-pillar-compliance/[0.08]">
                <Icon
                  name="Building2"
                  size="md"
                  className="text-pillar-compliance-mid"
                />
              </div>
              <div className="flex-1">
                <p className="text-body font-display font-semibold text-foreground">
                  Already have a business entity?
                </p>
                <p className="mt-0.5 text-body-sm text-muted">
                  Whether you formed through another provider or want to move
                  your entity to a more favorable state, we handle the
                  transition.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/domestication" className="!no-underline">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="whitespace-nowrap"
                  >
                    Domestication
                    <Icon name="ArrowRight" size="xs" className="ml-1" />
                  </Button>
                </Link>
                <Link href="/foreign-registration" className="!no-underline">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="whitespace-nowrap"
                  >
                    Foreign Registration
                    <Icon name="ArrowRight" size="xs" className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          S1b: PHILOSOPHY — Our Approach
          ================================================ */}
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-compliance mb-3">
              Our Approach
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[32ch]">
              Minimum Necessary Compliance. Maximum Protection.
            </h2>
            <p className="mt-4 text-body-lg text-muted max-w-[560px]">
              We handle exactly what your entity needs to stay in good standing
              &mdash; registered agent, annual reports, corporate records. No
              unnecessary add-ons, no over-selling. Just the compliance that
              keeps your protections intact.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PHILOSOPHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-surface rounded-card border border-border p-6 flex gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card-lg bg-pillar-compliance/[0.06]">
                  <Icon
                    name={card.icon}
                    size="md"
                    className="text-pillar-compliance"
                  />
                </div>
                <div>
                  <h3 className="text-body-lg font-display font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-body-sm text-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          S2: PROBLEM STATEMENT — Asymmetric layout
          ================================================ */}
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            {/* Left: Headline + description (sticky on scroll) */}
            <div className="lg:sticky lg:top-24">
              <ScrollReveal>
                <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-compliance mb-3">
                  The Problem
                </p>
                <h2 className="font-display type-display-sm font-semibold text-foreground">
                  Compliance Doesn&rsquo;t Stop After Formation.{" "}
                  <span className="text-muted">
                    Most Owners Find Out Too Late.
                  </span>
                </h2>
                <p className="mt-4 text-body-lg text-muted max-w-[440px]">
                  Every state requires ongoing maintenance to keep your entity
                  active. Miss a deadline, and you risk penalties, lost good
                  standing, or dissolution.
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
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card-lg bg-pillar-compliance/[0.06] group-hover:bg-pillar-compliance/[0.12] transition-colors">
                      <Icon
                        name={card.icon}
                        size="md"
                        className="text-pillar-compliance"
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
      <PullQuote bgText="365">
        &ldquo;An entity that falls out of good standing loses its liability
        protection. We make sure that{" "}
        <span className="text-amber-300 font-bold">never happens</span>.&rdquo;
      </PullQuote>

      {/* ================================================
          KEY DIFFERENTIATORS — compact strip
          ================================================ */}
      <KeyDifferentiators
        pillarColor="text-pillar-compliance"
        items={COMPLIANCE_KEY_DIFFS}
      />

      {/* ================================================
          S3: WHAT WE HANDLE — Editorial numbered blocks
          ================================================ */}
      <section id="what-we-handle" className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-compliance mb-3">
              What&rsquo;s Included
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[28ch]">
              Four Pillars of Full Compliance
            </h2>
            <p className="mt-3 text-body-lg text-muted max-w-[520px]">
              Most providers stop at registered agent service. We handle the
              full lifecycle of entity maintenance.
            </p>
          </ScrollReveal>

          <PillarIllustration
            pillar="compliance"
            className="mt-10 mb-4 lg:hidden"
          />

          <div className="mt-14 space-y-0">
            {COMPLIANCE_BLOCKS.map((block, i) => (
              <ScrollReveal key={block.id}>
                <div
                  className={`grid gap-8 lg:grid-cols-[120px_1fr] py-10 ${i < COMPLIANCE_BLOCKS.length - 1 ? "border-b border-border" : ""}`}
                >
                  {/* Large editorial number */}
                  <div className="hidden lg:block">
                    <span className="font-mono text-[5rem] font-bold leading-none text-pillar-compliance/[0.12]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-3 lg:hidden">
                      <span className="font-mono text-heading-lg font-bold text-pillar-compliance/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-heading-lg font-semibold text-foreground">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-body text-muted leading-relaxed max-w-[600px]">
                      {block.summary}
                    </p>
                    {block.keyDistinction && (
                      <div className="mt-4 rounded-card bg-pillar-compliance/[0.04] border border-pillar-compliance/[0.12] px-5 py-4">
                        <p className="text-body-sm font-semibold text-foreground mb-1">
                          Key Distinction
                        </p>
                        <p className="text-body-sm text-muted leading-relaxed">
                          {block.keyDistinction}
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
          S4: HOW IT WORKS
          ================================================ */}
      <section id="how-it-works" className="py-section-y-sm bg-primary-50">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="How It Works"
              title="From Formation to Full Compliance — Handled."
              subtitle="Four steps. We manage the deadlines. You run your business."
              subtitleMaxWidth="max-w-narrow mx-auto"
            />

            <div className="mt-12">
              <HowItWorks steps={PROCESS_STEPS} />
            </div>

            <div className="mt-10 text-center">
              <a href="#packages">
                <Button variant="cta" size="md">
                  See Compliance Packages &amp; Pricing
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
        <div className="pointer-events-none absolute -right-60 top-20 h-[50vw] w-[50vw] rounded-full bg-pillar-compliance/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Why Incorporate123"
              title="What Sets Our Compliance Services Apart"
              dark
            />

            {/* Featured differentiator — full width hero card */}
            <div className="mt-12 rounded-card-lg bg-white/[0.06] border border-white/[0.1] overflow-hidden">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 lg:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-card-lg bg-white/[0.12] mb-5">
                    <Icon
                      name="FileText"
                      size="lg"
                      className="text-pillar-compliance-mid"
                    />
                  </div>
                  <h3 className="font-display text-heading-lg font-semibold text-white">
                    Full Corporate Minutes Maintenance — Not Just a Mailbox
                  </h3>
                  <p className="mt-3 text-body text-white/75 leading-relaxed max-w-[440px]">
                    Most providers call registered agent service
                    &ldquo;compliance.&rdquo; We include annual report filing,
                    corporate minute book preparation and maintenance, and
                    proactive deadline tracking. The full picture, not just a
                    mailing address.
                  </p>
                  <div className="mt-6 flex items-center gap-6">
                    <div>
                      <p className="font-mono text-heading font-bold text-white">
                        365
                      </p>
                      <p className="text-caption text-white/70">days/year</p>
                    </div>
                    <div className="h-10 w-px bg-white/[0.1]" />
                    <div>
                      <p className="font-mono text-heading font-bold text-white">
                        $0
                      </p>
                      <p className="text-caption text-white/70">
                        extra for minutes
                      </p>
                    </div>
                    <div className="h-10 w-px bg-white/[0.1]" />
                    <div>
                      <p className="font-mono text-heading font-bold text-white">
                        All
                      </p>
                      <p className="text-caption text-white/70">
                        filings tracked
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center bg-white/[0.03] p-10">
                  {/* VS comparison visual */}
                  <div className="w-full max-w-[280px] space-y-4">
                    <div className="rounded-card bg-red-500/[0.08] border border-red-400/[0.15] p-4">
                      <Eyebrow
                        size="sm"
                        tone="inherit"
                        className="mb-2 text-red-400/80"
                      >
                        Others: &ldquo;Registered Agent Only&rdquo;
                      </Eyebrow>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-white/20"
                          />{" "}
                          Registered agent address
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="X"
                            size="xs"
                            className="text-red-400/60"
                          />{" "}
                          No annual report filing
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="X"
                            size="xs"
                            className="text-red-400/60"
                          />{" "}
                          No corporate minutes
                        </div>
                      </div>
                    </div>
                    <div className="rounded-card bg-success/[0.08] border border-success/[0.2] p-4">
                      <Eyebrow size="sm" tone="success" className="mb-2">
                        Incorporate123: Full Compliance
                      </Eyebrow>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-success"
                          />{" "}
                          Registered agent service
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-success"
                          />{" "}
                          Annual report filing
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-success"
                          />{" "}
                          Corporate minutes maintained
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
                      className="text-pillar-compliance-mid"
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
        pillarColor="text-pillar-compliance"
        badges={COMPLIANCE_TRUST_BADGES}
        testimonial={COMPLIANCE_TESTIMONIAL}
      />

      {/* ================================================
          S6b: INCLUDED IN RENEWAL
          ================================================ */}
      <section className="py-section-y-sm bg-primary-50">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-compliance mb-3">
              Already a Client?
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[32ch]">
              What&rsquo;s Included in Your Annual Renewal
            </h2>
            <p className="mt-3 text-body-lg text-muted max-w-[520px]">
              Your renewal covers all ongoing compliance &mdash; no surprise
              fees.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 rounded-card-lg bg-surface border border-border overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-primary-50">
                    <th className="px-6 py-3.5 text-body-sm font-semibold text-foreground">
                      Service
                    </th>
                    <th className="px-6 py-3.5 text-body-sm font-semibold text-foreground text-center">
                      Silver
                    </th>
                    <th className="px-6 py-3.5 text-body-sm font-semibold text-foreground text-center">
                      Gold
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RENEWAL_TABLE.map((row, i) => (
                    <tr
                      key={row.service}
                      className={
                        i < RENEWAL_TABLE.length - 1
                          ? "border-b border-border"
                          : ""
                      }
                    >
                      <td className="px-6 py-3 text-body-sm text-foreground">
                        {row.service}
                      </td>
                      <td className="px-6 py-3 text-body-sm text-center">
                        {row.silver ? (
                          <Icon
                            name="Check"
                            size="sm"
                            className="text-success inline-block"
                            ariaLabel="Included"
                          />
                        ) : (
                          <span className="text-muted">&mdash;</span>
                        )}
                      </td>
                      <td className="px-6 py-3 text-body-sm text-center">
                        {row.gold ? (
                          <Icon
                            name="Check"
                            size="sm"
                            className="text-success inline-block"
                            ariaLabel="Included"
                          />
                        ) : (
                          <span className="text-muted">&mdash;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-body-sm text-muted text-center">
              WY Silver: $325/yr &middot; WY Gold: $525/yr &middot; NV Silver:
              $525/yr &middot; NV Gold: $725/yr
            </p>
            <p className="mt-4 text-center text-body-sm text-muted">
              Questions about your renewal?{" "}
              <a
                href="tel:1-800-553-0615"
                className="text-secondary hover:text-secondary/80 underline underline-offset-4 transition-colors"
              >
                Call 1-800-553-0615
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          UPSELL BRIDGE — Formation cross-sell
          ================================================ */}
      <UpsellBridge
        eyebrow="Pair With Formation"
        heading="Most Clients Combine Formation + Ongoing Compliance."
        description="Start right and stay right. Formation sets up your entity correctly. Compliance keeps it in good standing year after year. Bundle both for the best value."
        stat="90%"
        statLabel="of formation clients add compliance"
        ctaLabel="See Bundled Packages"
        ctaHref="#packages"
        pillarColor="text-pillar-compliance"
      />

      {/* ================================================
          S7: PACKAGES — Compare
          ================================================ */}
      <div id="packages">
        <PackageComparison
          states={ALL_FORMATION_STATES}
          getCards={getPackageComparisonCards}
        />
      </div>

      {/* ================================================
          S8: FAQ — Split layout with sticky left
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
                  Compliance Questions Answered
                </h2>
                <p className="mt-3 text-body text-muted">
                  Quick answers about ongoing entity maintenance.
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
                {complianceFaqs.map((faq) => (
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
          EXPLORE — Continue Learning
          ================================================ */}
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[24ch]">
              Explore Compliance Resources
            </h2>
            <p className="mt-2 text-body text-muted">
              Guides, service details, and state-specific compliance info.
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-card bg-pillar-compliance/[0.08] mb-4 group-hover:bg-pillar-compliance/[0.14] transition-colors">
                      <Icon
                        name={item.icon}
                        size="md"
                        className="text-pillar-compliance"
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
                  State-Specific Compliance
                </p>
                <div className="space-y-3">
                  {EXPLORE_STATES.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="!no-underline group flex items-center gap-3 rounded-card px-3 py-2.5 -mx-3 hover:bg-pillar-compliance/[0.04] transition-colors"
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
                      className="!no-underline group flex items-start gap-3 rounded-card px-3 py-2.5 -mx-3 hover:bg-pillar-compliance/[0.04] transition-colors"
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
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3 text-center">
              Need More Than Compliance?
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground text-center">
              Compliance Is the Foundation. What Else?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto items-stretch">
              <CrossPillarCTA
                fromPillar="compliance"
                toPillar="formation"
                heading="Need to Form a New Entity?"
                description="Wyoming and Nevada formation with full compliance built in from day one. Annual reports, registered agent, corporate minutes — all included."
                href="/formation"
                className="h-full"
              />
              <CrossPillarCTA
                fromPillar="compliance"
                toPillar="privacy"
                heading="Add Privacy to Your Entity"
                description="Year-round nominee services keep your name off public records. Combine compliance with genuine anonymity for complete protection."
                href="/privacy"
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
        heading={COMPLIANCE_FINAL_CTA.heading}
        description={COMPLIANCE_FINAL_CTA.description}
        ctaLabel={COMPLIANCE_FINAL_CTA.ctaLabel}
        ctaHref={COMPLIANCE_FINAL_CTA.ctaHref}
      />
    </div>
  );
}

/* ================================================
   Static data
   ================================================ */

const PHILOSOPHY_CARDS = [
  {
    icon: "CheckCircle" as const,
    title: "What's Required — Done",
    desc: "Every filing, every deadline, every year. Registered agent, annual reports, corporate records — handled on time.",
  },
  {
    icon: "Shield" as const,
    title: "Protections Preserved",
    desc: "Without proper compliance, LLC protections can be voided. Courts can pierce the corporate veil if records aren't maintained.",
  },
  {
    icon: "Calendar" as const,
    title: "Year-Round — Not Year-End",
    desc: "We don't scramble at deadline. Your compliance is managed continuously, with proactive reminders and pre-filed reports.",
  },
];

const EXISTING_ENTITY_CARDS = [
  {
    icon: "ArrowRightLeft" as const,
    title: "Domestication",
    desc: "Move your entity to Wyoming or Nevada. Keep your EIN, contracts, and bank accounts intact. Often saves hundreds per year — California's $800 franchise tax vs Wyoming's $62 annual report.",
    href: "/domestication",
    linkText: "Learn about domestication \u2192",
  },
  {
    icon: "Globe" as const,
    title: "Foreign State Registration",
    desc: "Operate in California, Florida, or any other state while keeping your Wyoming or Nevada entity. We handle the registration and ongoing compliance in both states.",
    href: "/foreign-registration",
    linkText: "Learn about foreign registration \u2192",
  },
];

const RENEWAL_TABLE = [
  { service: "Registered Agent", silver: true, gold: true },
  { service: "Annual Report Filing", silver: true, gold: true },
  { service: "Corporate Minutes", silver: true, gold: true },
  { service: "Year-Round Nominees", silver: false, gold: true },
  { service: "Offshore Records", silver: false, gold: true },
];

const PROBLEM_CARDS = [
  {
    icon: "AlertTriangle" as const,
    title: "Missed Deadlines & Penalties",
    desc: "Every state has its own filing deadlines. Miss your Wyoming annual report by even a day and you face $50 penalty fees. Nevada charges $75 plus a $100 penalty. These compound quickly.",
  },
  {
    icon: "ShieldOff" as const,
    title: "Lost Good Standing",
    desc: "An entity not in good standing can't enforce contracts, file lawsuits, or maintain its liability protection. Banks may freeze accounts. Business licenses become invalid.",
  },
  {
    icon: "Scale" as const,
    title: "Corporate Veil Piercing",
    desc: "Without proper corporate minutes and records, courts can 'pierce the veil' — holding you personally liable for business debts. Proper record-keeping isn't optional, it's your shield.",
  },
  {
    icon: "XCircle" as const,
    title: "Administrative Dissolution",
    desc: "States can involuntarily dissolve entities that fail to file. Reinstatement is costly, time-consuming, and creates gaps in your liability protection that can't be retroactively closed.",
  },
];

const COMPLIANCE_BLOCKS = [
  {
    id: "registered-agent",
    title: "Registered Agent Service",
    summary:
      "Every business entity is required by law to have a registered agent — a person or company authorized to receive legal documents and state correspondence on behalf of your entity. We serve as your registered agent in Wyoming and Nevada, ensuring nothing is missed.",
    keyDistinction:
      "Many registered agent services are just a forwarding address. Ours includes actual document review, same-day notification of any legal service, and proactive alerts when state correspondence requires action.",
    href: "/registered-agent",
    linkText: "Learn about registered agent service \u2192",
  },
  {
    id: "annual-reports",
    title: "Annual Report Filing",
    summary:
      "States require annual or biennial reports to keep your entity active. Wyoming charges $62/year for LLCs. Nevada requires an annual list at $150. We track every deadline, prepare the filing, and submit on time — every year.",
    keyDistinction:
      "We don't just remind you — we prepare and file the report ourselves. No forms to fill out, no deadlines to track, no risk of forgetting. State fees are separate, but the filing service is included in your package.",
    href: "/annual-reports",
    linkText: "How annual report filing works \u2192",
  },
  {
    id: "corporate-minutes",
    title: "Corporate Minutes Maintenance",
    summary:
      "Corporate minutes document key business decisions — officer appointments, major contracts, ownership changes. Courts examine these records when determining whether to respect your entity's separate legal identity. No minutes = grounds for veil piercing.",
    keyDistinction:
      "This is our biggest differentiator. Most incorporation services don't touch corporate minutes. We prepare and maintain your minute book annually, ensuring your records support your entity's legitimacy if ever challenged in court.",
    href: "/corporate-minutes",
    linkText: "Why corporate minutes matter \u2192",
  },
  {
    id: "multi-state",
    title: "Multi-State Compliance",
    summary:
      "If your entity operates outside its formation state, you need foreign registration — plus ongoing compliance in both states. Different deadlines, different forms, different fees. We handle the complexity of operating across state lines.",
    keyDistinction:
      "Foreign registration triggers compliance obligations in two states simultaneously. We manage both, tracking each state's unique requirements, deadlines, and fee structures so nothing falls through the cracks.",
    href: "/foreign-registration",
    linkText: "Multi-state compliance explained \u2192",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Choose Your Package",
    description:
      "Select Wyoming or Nevada, then choose Bronze, Silver, or Gold based on the level of compliance support you need. Silver and Gold include full compliance.",
    tag: "Setup",
    color: "purple" as const,
  },
  {
    number: 2,
    title: "We Set Up Your Compliance",
    description:
      "Registered agent activated, annual report deadlines tracked, corporate minute book created. Everything is in place from day one.",
    tag: "Activation",
    color: "blue" as const,
  },
  {
    number: 3,
    title: "Proactive Filing & Maintenance",
    description:
      "When deadlines approach, we prepare and file. Annual reports, state lists, corporate minutes updated. You get notified — but don't have to lift a finger.",
    tag: "Ongoing",
    color: "green" as const,
  },
  {
    number: 4,
    title: "Stay in Good Standing, Every Year",
    description:
      "Renewal includes everything: registered agent, annual filings, minute maintenance. No surprise fees, no missed deadlines, no gaps in protection.",
    tag: "Renewal",
    color: "amber" as const,
  },
];

const DIFFERENTIATORS_SMALL = [
  {
    icon: "BookOpen" as const,
    title: "Full Minute Book Maintenance",
    desc: "Annual corporate minutes prepared and maintained — not just a template. Your records are court-ready at all times.",
  },
  {
    icon: "DollarSign" as const,
    title: "All-Inclusive Pricing",
    desc: "Filing service, registered agent, minutes, deadline tracking — all included in Silver and Gold. State fees are the only extra.",
  },
  {
    icon: "Clock" as const,
    title: "25 Years of Experience",
    desc: "Wyoming and Nevada compliance since 2000. We know every state's requirements, quirks, and deadlines inside out.",
  },
  {
    icon: "Bell" as const,
    title: "Proactive Deadline Tracking",
    desc: "We don't wait for you to remember. Our system tracks every filing deadline and initiates the process automatically.",
  },
  {
    icon: "Headphones" as const,
    title: "Real People. Real Answers.",
    desc: "Talk to a compliance specialist who knows your entity — not a chatbot or call center. Call anytime.",
  },
];

const EXPLORE_SERVICES = [
  {
    icon: "ClipboardCheck" as const,
    title: "Registered Agent Service",
    desc: "Professional registered agent in Wyoming and Nevada. We receive legal documents and state correspondence on your behalf.",
    href: "/registered-agent",
  },
  {
    icon: "FileText" as const,
    title: "Corporate Minutes",
    desc: "Professional minute book preparation and maintenance. Proper records prevent veil piercing and support your entity's legitimacy.",
    href: "/corporate-minutes",
  },
  {
    icon: "Globe" as const,
    title: "Foreign Registration",
    desc: "Register your entity to do business in another state. We handle the process and ongoing compliance for both states.",
    href: "/foreign-registration",
  },
];

const EXPLORE_STATES = [
  {
    icon: "MapPin" as const,
    title: "Wyoming Registered Agent",
    desc: "Professional registered agent service in Cheyenne, Wyoming",
    href: "/wyoming-registered-agent",
  },
  {
    icon: "MapPin" as const,
    title: "Nevada Registered Agent",
    desc: "In-state registered agent near the Secretary of State",
    href: "/nevada-registered-agent",
  },
  {
    icon: "FileText" as const,
    title: "Annual Reports",
    desc: "State-by-state annual report filing requirements and deadlines",
    href: "/annual-reports",
  },
  {
    icon: "ArrowRightLeft" as const,
    title: "Domestication",
    desc: "Move your entity to a better state",
    href: "/domestication",
  },
  {
    icon: "Globe" as const,
    title: "Foreign State Registration",
    desc: "Operate in multiple states legally",
    href: "/foreign-registration",
  },
  {
    icon: "FileStack" as const,
    title: "2nd-Tier State Filings",
    desc: "Additional state compliance requirements",
    href: "/2nd-tier-state-filings",
  },
  {
    icon: "Receipt" as const,
    title: "Tax Filing & Obligations",
    desc: "Entity tax compliance and obligations",
    href: "/tax-obligations",
  },
];

const EXPLORE_COMPARISONS = [
  {
    title: "Gold vs Silver Package Comparison",
    desc: "Compare compliance features across Gold, Silver, and Bronze tiers. See exactly what's included.",
    href: "/compare-packages",
  },
  {
    title: "Wyoming vs. Nevada Annual Costs",
    desc: "Annual state fees, report requirements, and total renewal costs compared side by side.",
    href: "/wyoming-vs-nevada-llc",
  },
];
