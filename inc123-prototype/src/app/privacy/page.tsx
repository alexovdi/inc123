import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { KeyDifferentiators } from "@/design-system/components/KeyDifferentiators";
import { PackageComparison } from "@/design-system/components/PackageComparison";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { SocialProofStrip } from "@/design-system/components/SocialProofStrip";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { Link } from "@/design-system/primitives/Link";
import { faqItems } from "@/data/faq";
import { PillarFinalCTA } from "@/design-system/components/PillarFinalCTA";
import { PillarIllustration } from "@/design-system/components/PillarIllustration";
import { PullQuote } from "@/design-system/components/PullQuote";
import {
  PRIVACY_KEY_DIFFS,
  PRIVACY_TRUST_BADGES,
  PRIVACY_TESTIMONIAL,
} from "@/data/pillar-social-proof";
import { PRIVACY_PULL_QUOTE, PRIVACY_FINAL_CTA } from "@/data/pillar-content";

const privacyFaqs = faqItems.filter((f) => f.category === "privacy");

export default function PrivacyPillarPage() {
  return (
    <div className="min-h-screen">
      {/* ================================================
          S1: HERO — Editorial split layout
          ================================================ */}
      <section className="relative overflow-hidden bg-primary">
        <GrainOverlay opacity="opacity-[0.03]" />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[60vw] w-[60vw] rounded-full bg-secondary/[0.08] blur-[120px]" />

        <div className="relative mx-auto max-w-content px-container-x py-section-y-sm">
          {/* Breadcrumb — no animation, just be there */}
          <nav className="mb-8 text-body-sm">
            <Link
              href="/"
              className="!text-white/80 !no-underline hover:!text-white transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-white/70">/</span>
            <span className="text-white/90">Business Privacy</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            {/* Left: Content */}
            <div>
              <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                Business Privacy
              </p>

              <h1 className="font-display type-display-lg font-bold text-white">
                Business Privacy Starts Before Anyone Knows{" "}
                <span className="text-white/90">Your Name.</span>
              </h1>

              <p className="mt-6 text-body-lg text-white/80 max-w-[480px]">
                Keep your ownership off public records with year-round nominee
                services, anonymous entity formation, and protected document
                custody. Wyoming and Nevada. Trusted since 2000.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#packages">
                  <Button variant="cta" size="lg">
                    Find Your Privacy Package
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

            {/* Right: Visual — abstract "redacted filing" */}
            <div className="hidden lg:block relative">
              <div className="rounded-card-lg bg-white/[0.06] border border-white/[0.1] p-8 backdrop-blur-sm">
                {/* Mock filing header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon
                      name="FileText"
                      size="sm"
                      className="text-secondary"
                    />
                  </div>
                  <div>
                    <div className="h-2.5 w-32 rounded-full bg-white/20" />
                    <div className="h-2 w-24 rounded-full bg-white/10 mt-1.5" />
                  </div>
                </div>
                {/* Mock "exposed" fields */}
                <div className="space-y-4">
                  <div>
                    <p className="text-caption text-white/70 uppercase tracking-wider mb-1">
                      Member / Manager
                    </p>
                    <div className="flex items-center gap-2 rounded bg-secondary/[0.15] border border-secondary/20 px-3 py-2">
                      <Icon
                        name="ShieldCheck"
                        size="xs"
                        className="text-secondary shrink-0"
                      />
                      <p className="font-mono text-body-sm font-semibold text-secondary tracking-wide">
                        NOMINEE PROTECTED
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-caption text-white/70 uppercase tracking-wider mb-1">
                      Registered Agent
                    </p>
                    <p className="font-mono text-body-sm text-white/80">
                      Incorporate123 Registered Agent
                    </p>
                  </div>
                  <div>
                    <p className="text-caption text-white/70 uppercase tracking-wider mb-1">
                      Records Location
                    </p>
                    <div className="flex items-center gap-2 rounded bg-secondary/[0.15] border border-secondary/20 px-3 py-2">
                      <Icon
                        name="Lock"
                        size="xs"
                        className="text-secondary shrink-0"
                      />
                      <p className="font-mono text-body-sm font-semibold text-secondary tracking-wide">
                        OFFSHORE CUSTODIAN
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/[0.1]">
                    <p className="text-caption text-white/70 uppercase tracking-wider mb-1">
                      Filing Status
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                      <p className="font-mono text-body-sm text-success">
                        Active — Nominees in place 365 days
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

          {/* Stats strip — full width below the split */}
          <ScrollReveal delay={300}>
            <div className="mt-12 grid grid-cols-3 gap-4 rounded-card-lg bg-white/[0.06] border border-white/[0.1] p-5">
              {[
                { value: "25", unit: "yrs", label: "Specialized Experience" },
                { value: "4", unit: "states", label: "WY · NV · CA · FL" },
                { value: "365", unit: "days", label: "Nominee Protection" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-heading-lg font-bold text-white">
                    {stat.value}
                    <span className="text-body-sm font-normal text-white/70 ml-1">
                      {stat.unit}
                    </span>
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
          S2: PROBLEM STATEMENT — Asymmetric layout
          ================================================ */}
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            {/* Left: Headline + description (sticky on scroll) */}
            <div className="lg:sticky lg:top-24">
              <ScrollReveal>
                <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                  The Problem
                </p>
                <h2 className="font-display type-display-sm font-semibold text-foreground">
                  Your Business Ownership Is Public Record.{" "}
                  <span className="text-muted">Anyone Can Find It.</span>
                </h2>
                <p className="mt-4 text-body-lg text-muted max-w-[440px]">
                  When you form an LLC or corporation, your name goes into a
                  state database that anyone can search — for free, in seconds.
                </p>
              </ScrollReveal>
            </div>

            {/* Right: Threat cards — stacked vertically */}
            <ScrollReveal delay={150}>
              <div className="space-y-4">
                {THREAT_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="group bg-surface rounded-card border border-border p-6 flex gap-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card-lg bg-pillar-privacy/[0.06] group-hover:bg-pillar-privacy/[0.12] transition-colors">
                      <Icon
                        name={card.icon}
                        size="md"
                        className="text-pillar-privacy"
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
      <PullQuote bgText={PRIVACY_PULL_QUOTE.bgText}>
        &ldquo;Most providers offer a nominee for a day. We keep nominees on
        your filings{" "}
        <span className="text-amber-300 font-bold">
          365&nbsp;days&nbsp;a&nbsp;year
        </span>
        &nbsp;— formation, annual reports, amendments, everything.&rdquo;
      </PullQuote>

      {/* ================================================
          KEY DIFFERENTIATORS — compact strip
          ================================================ */}
      <KeyDifferentiators
        pillarColor="text-pillar-privacy"
        items={PRIVACY_KEY_DIFFS}
      />

      {/* ================================================
          S3: THREE LAYERS — Editorial numbered blocks
          ================================================ */}
      <section id="three-layers" className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
              Understanding Business Privacy
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[28ch]">
              Three Layers of Business Privacy
            </h2>
            <p className="mt-3 text-body-lg text-muted max-w-[520px]">
              Genuine privacy isn&rsquo;t a single product — it&rsquo;s a
              structure built from three complementary layers.
            </p>
          </ScrollReveal>

          <PillarIllustration
            pillar="privacy"
            className="mt-10 mb-4 lg:hidden"
          />

          <div className="mt-14 space-y-0">
            {LAYER_BLOCKS.map((layer, i) => (
              <ScrollReveal key={layer.id}>
                <div
                  className={`grid gap-8 lg:grid-cols-[120px_1fr] py-10 ${i < LAYER_BLOCKS.length - 1 ? "border-b border-border" : ""}`}
                >
                  {/* Large editorial number */}
                  <div className="hidden lg:block">
                    <span className="font-mono text-[5rem] font-bold leading-none text-pillar-privacy/[0.12]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-3 lg:hidden">
                      <span className="font-mono text-heading-lg font-bold text-pillar-privacy/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-heading-lg font-semibold text-foreground">
                      {layer.title}
                    </h3>
                    <p className="mt-3 text-body text-muted leading-relaxed max-w-[600px]">
                      {layer.summary}
                    </p>
                    {layer.keyDistinction && (
                      <div className="mt-4 rounded-card bg-pillar-privacy/[0.04] border border-pillar-privacy/[0.12] px-5 py-4">
                        <p className="text-body-sm font-semibold text-foreground mb-1">
                          Key Distinction
                        </p>
                        <p className="text-body-sm text-muted leading-relaxed">
                          {layer.keyDistinction}
                        </p>
                      </div>
                    )}
                    <Link
                      href={layer.href}
                      className="inline-flex items-center text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors mt-4"
                    >
                      {layer.linkText}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          S4: HOW IT WORKS — Keep existing (already good)
          ================================================ */}
      <section id="how-it-works" className="py-section-y-sm bg-primary-50">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="How It Works"
              title="From Inquiry to Incorporated — Privately."
              subtitle="Four steps. We handle the complexity. You get the privacy."
              subtitleMaxWidth="max-w-narrow mx-auto"
            />

            <div className="mt-12">
              <HowItWorks steps={PROCESS_STEPS} />
            </div>

            <div className="mt-10 text-center">
              <a href="#packages">
                <Button variant="cta" size="md">
                  See Privacy Packages &amp; Pricing
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
          S6: DIFFERENTIATORS — 1 featured + 5 grid (dark)
          ================================================ */}
      <section className="relative py-section-y-sm bg-primary overflow-hidden">
        <GrainOverlay opacity="opacity-[0.03]" />
        <div className="pointer-events-none absolute -right-60 top-20 h-[50vw] w-[50vw] rounded-full bg-secondary/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Why Incorporate123"
              title="What Sets Our Privacy Services Apart"
              dark
            />

            {/* Featured differentiator — full width hero card */}
            <div className="mt-12 rounded-card-lg bg-white/[0.06] border border-white/[0.1] overflow-hidden">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 lg:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-card-lg bg-secondary/20 mb-5">
                    <Icon
                      name="Calendar"
                      size="lg"
                      className="text-secondary"
                    />
                  </div>
                  <h3 className="font-display text-heading-lg font-semibold text-white">
                    Year-Round Nominees — Not &ldquo;Nominee for a Day&rdquo;
                  </h3>
                  <p className="mt-3 text-body text-white/75 leading-relaxed max-w-[440px]">
                    Our nominees remain on your filings 365 days a year, every
                    year. Most services substitute a nominee at formation, then
                    replace them with your real name within weeks. That defeats
                    the entire purpose of nominee protection.
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
                      <p className="text-caption text-white/70">extra cost</p>
                    </div>
                    <div className="h-10 w-px bg-white/[0.1]" />
                    <div>
                      <p className="font-mono text-heading font-bold text-white">
                        All
                      </p>
                      <p className="text-caption text-white/70">
                        filings covered
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center bg-white/[0.03] p-10">
                  {/* VS comparison visual */}
                  <div className="w-full max-w-[280px] space-y-4">
                    <div className="rounded-card bg-red-500/[0.08] border border-red-400/[0.15] p-4">
                      <p className="text-caption font-semibold text-red-400/80 uppercase tracking-wider mb-2">
                        Others: &ldquo;Nominee for a Day&rdquo;
                      </p>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-white/20"
                          />{" "}
                          Nominee at formation
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="X"
                            size="xs"
                            className="text-red-400/60"
                          />{" "}
                          Your name on annual reports
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="X"
                            size="xs"
                            className="text-red-400/60"
                          />{" "}
                          Your name on amendments
                        </div>
                      </div>
                    </div>
                    <div className="rounded-card bg-success/[0.08] border border-success/[0.2] p-4">
                      <p className="text-caption font-semibold text-success uppercase tracking-wider mb-2">
                        Incorporate123: Year-Round
                      </p>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-success"
                          />{" "}
                          Nominee at formation
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-success"
                          />{" "}
                          Nominee on annual reports
                        </div>
                        <div className="flex items-center gap-2 text-body-sm text-white/70">
                          <Icon
                            name="Check"
                            size="xs"
                            className="text-success"
                          />{" "}
                          Nominee on all amendments
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
                      className="text-secondary"
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

      <SocialProofStrip
        pillarColor="text-pillar-privacy"
        badges={PRIVACY_TRUST_BADGES}
        testimonial={PRIVACY_TESTIMONIAL}
      />

      {/* ================================================
          S8: PACKAGES — Compare
          ================================================ */}
      <div id="packages">
        <PackageComparison />
      </div>

      {/* ================================================
          S9: FAQ — Left-aligned header for variety
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
                  Privacy Questions Answered
                </h2>
                <p className="mt-3 text-body text-muted">
                  Quick answers to the most common questions.
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
                {privacyFaqs.map((faq) => (
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
          EXPLORE — Continue learning (after FAQ)
          ================================================ */}
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[24ch]">
              Explore Privacy Services
            </h2>
            <p className="mt-2 text-body text-muted">
              Guides, state comparisons, and service breakdowns.
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-card bg-secondary/[0.08] mb-4 group-hover:bg-secondary/[0.14] transition-colors">
                      <Icon
                        name={item.icon}
                        size="md"
                        className="text-secondary"
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
                  State Guides
                </p>
                <div className="space-y-3">
                  {EXPLORE_STATES.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="!no-underline group flex items-center gap-3 rounded-card px-3 py-2.5 -mx-3 hover:bg-secondary/[0.04] transition-colors"
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
                      className="!no-underline group flex items-start gap-3 rounded-card px-3 py-2.5 -mx-3 hover:bg-secondary/[0.04] transition-colors"
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
              Related Services
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground text-center">
              Privacy Is the First Layer. What Else?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto items-stretch">
              <CrossPillarCTA
                fromPillar="privacy"
                toPillar="asset"
                heading="Protect Your Assets, Not Just Your Identity"
                description="Privacy controls who can see your ownership. Asset protection controls what happens in a lawsuit. Most high-value clients combine both."
                href="/asset-protection"
                className="h-full"
              />
              <CrossPillarCTA
                fromPillar="privacy"
                toPillar="compliance"
                heading="Already Have an Entity? We Handle Compliance."
                description="Registered agent, annual reports, corporate minutes. Keep your entity in good standing without the paperwork."
                href="/compliance"
                className="h-full"
              />
              <CrossPillarCTA
                fromPillar="privacy"
                toPillar="formation"
                heading="Need to Form a New Entity? We Handle Everything."
                description="All-inclusive formation with state fees, registered agent, EIN, and operating agreement. Add privacy services to any package."
                href="/formation"
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
        heading={PRIVACY_FINAL_CTA.heading}
        description={PRIVACY_FINAL_CTA.description}
        ctaLabel={PRIVACY_FINAL_CTA.ctaLabel}
        ctaHref={PRIVACY_FINAL_CTA.ctaHref}
      />
    </div>
  );
}

/* ================================================
   Static data
   ================================================ */

const THREAT_CARDS = [
  {
    icon: "ShieldOff" as const,
    title: "Lawsuit Targeting",
    desc: "Attorneys search business registries to identify owners with assets worth pursuing. Visible ownership makes you a target.",
  },
  {
    icon: "Eye" as const,
    title: "Competitive Exposure",
    desc: "Competitors can see every entity you own, trace your business relationships, and map your operations — all from public filings.",
  },
  {
    icon: "UserSearch" as const,
    title: "Personal Safety",
    desc: "Real estate holdings, investment LLCs, and business interests tied to your name create a traceable map of your net worth and address.",
  },
  {
    icon: "FileSearch" as const,
    title: "Identity & Fraud Risk",
    desc: "Public records link your full legal name to entity filings, registered agent addresses, and sometimes even your home address.",
  },
];

const LAYER_BLOCKS = [
  {
    id: "ownership",
    title: "Ownership Privacy",
    summary:
      "Removes your name from public entity filings by substituting nominees — appointed individuals whose names appear on state records instead of yours.",
    keyDistinction:
      'Most competitors offer "nominee for a day" — a nominee signs formation documents, then is immediately replaced by you. Year-round nominee services maintain the nominee on all filings, all year, every year.',
    href: "/nominee-services",
    linkText: "How nominee services work →",
  },
  {
    id: "records",
    title: "Records Privacy",
    summary:
      "Keeps corporate records — minutes, resolutions, operating agreements — outside the reach of domestic subpoenas by storing them with an offshore custodian.",
    keyDistinction:
      "Corporate records are frequently targeted in litigation discovery. Domestic storage means domestic court orders can compel production. Offshore custodian storage adds a jurisdictional barrier that raises the cost and complexity of forced disclosure.",
    href: "/offshore-privacy",
    linkText: "Offshore records storage explained →",
  },
  {
    id: "structural",
    title: "Structural Privacy",
    summary:
      "Uses the right entity type in the right state to maximize statutory privacy protections. Wyoming does not require disclosure of members or managers. Nevada offers strong charging order protection plus a dedicated business court.",
    keyDistinction:
      "California and Florida require public disclosure on entity filings. The solution: form in Wyoming or Nevada for privacy, then foreign register in your operating state. Privacy protections remain intact.",
    href: "/wyoming-vs-nevada-privacy",
    linkText: "Compare Wyoming vs. Nevada →",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Choose Your State & Package",
    description:
      "Select Wyoming or Nevada based on your privacy goals. Gold includes full privacy; Silver provides formation without nominees.",
    tag: "Privacy",
    color: "blue" as const,
  },
  {
    number: 2,
    title: "We File With Nominees in Place",
    description:
      "Our team files your entity with nominees on all public documents. Your name never appears in the state filing.",
    tag: "Formation",
    color: "amber" as const,
  },
  {
    number: 3,
    title: "Records Stored Offshore",
    description:
      "Operating agreement, minutes, membership certificates transferred to our offshore custodian. Not accessible through domestic subpoena.",
    tag: "Records",
    color: "green" as const,
  },
  {
    number: 4,
    title: "Ongoing Compliance, Handled",
    description:
      "Annual reports, registered agent, nominee renewals — all included in your renewal. No surprise fees.",
    tag: "Compliance",
    color: "purple" as const,
  },
];

const DIFFERENTIATORS_SMALL = [
  {
    icon: "Globe" as const,
    title: "Offshore Records Custodian",
    desc: "Corporate records stored outside U.S. jurisdiction since 2012. No other domestic incorporation company offers this.",
  },
  {
    icon: "DollarSign" as const,
    title: "All-Inclusive Pricing",
    desc: "$1,275 includes everything. Competitors charge $400–$5,000/yr for nominees alone.",
  },
  {
    icon: "Clock" as const,
    title: "25 Years Specialized",
    desc: "Privacy and asset protection since 2000. Not a general filing service.",
  },
  {
    icon: "Bitcoin" as const,
    title: "Crypto Payments",
    desc: "Bitcoin, Ethereum, XRP, Litecoin, Monero. Privacy from the first transaction.",
  },
  {
    icon: "Headphones" as const,
    title: "Real People. Real Answers.",
    desc: "Talk to a privacy specialist who knows your case — not a call center. Call anytime.",
  },
];

const EXPLORE_SERVICES = [
  {
    icon: "UserX" as const,
    title: "Anonymous LLC Formation",
    desc: "Form an LLC with no public ties to your name. Nominees appear on all state filings from day one.",
    href: "/anonymous-llc",
  },
  {
    icon: "Users" as const,
    title: "Nominee Services",
    desc: "Year-round nominee directors and officers listed on all public records — not just at formation.",
    href: "/nominee-services",
  },
  {
    icon: "Globe" as const,
    title: "Offshore Privacy",
    desc: "Corporate records stored outside U.S. jurisdiction. Not reachable by domestic subpoena.",
    href: "/offshore-privacy",
  },
];

const EXPLORE_STATES = [
  {
    icon: "MapPin" as const,
    title: "Wyoming Privacy",
    desc: "Strongest statutory privacy — no public member disclosure",
    href: "/wyoming-privacy",
  },
  {
    icon: "MapPin" as const,
    title: "Nevada Privacy",
    desc: "Dedicated business court + charging order protections",
    href: "/nevada-privacy",
  },
  {
    icon: "Building" as const,
    title: "Private Incorporation",
    desc: "Privacy-first formation in WY, NV, CA, and FL",
    href: "/private-incorporation",
  },
  {
    icon: "Building2" as const,
    title: "Anonymous Corporation",
    desc: "Corporate structure with full nominee protections",
    href: "/anonymous-corporation",
  },
];

const EXPLORE_COMPARISONS = [
  {
    title: "Best State for Business Privacy",
    desc: "Side-by-side comparison of Wyoming, Nevada, and other states for LLC anonymity.",
    href: "/best-state-for-privacy",
  },
  {
    title: "Wyoming vs. Nevada for Privacy",
    desc: "Head-to-head: privacy statutes, costs, and nominee requirements compared.",
    href: "/wyoming-vs-nevada-privacy",
  },
];
