import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { KeyDifferentiators } from "@/design-system/components/KeyDifferentiators";
import { PackageComparison } from "@/design-system/components/PackageComparison";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { SocialProofStrip } from "@/design-system/components/SocialProofStrip";
import { UpsellBridge } from "@/design-system/components/UpsellBridge";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { Link } from "@/design-system/primitives/Link";
import { PillarFinalCTA } from "@/design-system/components/PillarFinalCTA";
import { PillarIllustration } from "@/design-system/components/PillarIllustration";
import { PullQuote } from "@/design-system/components/PullQuote";
import { faqItems } from "@/data/faq";
import { ASSET_FINAL_CTA } from "@/data/pillar-content";
import {
  ASSET_KEY_DIFFS,
  ASSET_TRUST_BADGES,
  ASSET_TESTIMONIAL,
} from "@/data/pillar-social-proof";

const assetFaqs = faqItems.filter((f) => f.category === "asset");

export default function AssetProtectionPillarPage() {
  return (
    <div className="min-h-screen">
      {/* ================================================
          S1: HERO — Editorial split layout
          ================================================ */}
      <section className="relative overflow-hidden bg-primary">
        <GrainOverlay opacity="opacity-[0.03]" />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[60vw] w-[60vw] rounded-full bg-pillar-asset/[0.08] blur-[120px]" />

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
            <span className="text-white/90">Asset Protection</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            {/* Left: Content */}
            <div>
              <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-asset-mid mb-4">
                Asset Protection
              </p>

              <h1 className="font-display type-display-lg font-bold text-white">
                Protect What You&rsquo;ve{" "}
                <span className="text-pillar-asset-mid">Built.</span>
              </h1>

              <p className="mt-6 text-body-lg text-white/80 max-w-[480px]">
                Defending a single lawsuit costs $30K–$100K — even when you win.
                The right LLC structure in the right state keeps creditors from
                reaching your assets in the first place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#packages">
                  <Button variant="cta" size="lg">
                    Find Your Protection Package
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

            {/* Right: Visual — "Protected vs Unprotected" asset diagram */}
            <div className="hidden lg:block relative">
              <div className="rounded-card-lg bg-white/[0.06] border border-white/[0.1] p-8 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-white/[0.12] flex items-center justify-center">
                    <Icon
                      name="Shield"
                      size="sm"
                      className="text-pillar-asset-mid"
                    />
                  </div>
                  <div>
                    <div className="h-2.5 w-40 rounded-full bg-white/20" />
                    <div className="h-2 w-28 rounded-full bg-white/10 mt-1.5" />
                  </div>
                </div>

                {/* Unprotected scenario */}
                <div className="mb-4">
                  <p className="text-caption text-white/70 uppercase tracking-wider mb-2">
                    Without Protection
                  </p>
                  <div className="rounded bg-red-500/[0.08] border border-red-400/[0.15] px-3 py-2 space-y-1.5">
                    <div className="flex items-center gap-2 text-body-sm text-white/70">
                      <Icon
                        name="X"
                        size="xs"
                        className="text-red-400/60 shrink-0"
                      />
                      Personal assets exposed to lawsuits
                    </div>
                    <div className="flex items-center gap-2 text-body-sm text-white/70">
                      <Icon
                        name="X"
                        size="xs"
                        className="text-red-400/60 shrink-0"
                      />
                      Creditors seize LLC assets directly
                    </div>
                    <div className="flex items-center gap-2 text-body-sm text-white/70">
                      <Icon
                        name="X"
                        size="xs"
                        className="text-red-400/60 shrink-0"
                      />
                      Single entity = single point of failure
                    </div>
                  </div>
                </div>

                {/* Protected scenario */}
                <div className="mb-4">
                  <p className="text-caption text-white/70 uppercase tracking-wider mb-2">
                    With Wyoming LLC Protection
                  </p>
                  <div className="rounded bg-pillar-asset/[0.08] border border-pillar-asset-mid/[0.25] px-3 py-2 space-y-1.5">
                    <div className="flex items-center gap-2 text-body-sm text-white/85">
                      <Icon
                        name="Check"
                        size="xs"
                        className="text-pillar-asset-mid shrink-0"
                      />
                      Charging order limits creditor remedies
                    </div>
                    <div className="flex items-center gap-2 text-body-sm text-white/85">
                      <Icon
                        name="Check"
                        size="xs"
                        className="text-pillar-asset-mid shrink-0"
                      />
                      Multi-entity isolation per asset class
                    </div>
                    <div className="flex items-center gap-2 text-body-sm text-white/85">
                      <Icon
                        name="Check"
                        size="xs"
                        className="text-pillar-asset-mid shrink-0"
                      />
                      Single-member LLC fully protected
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="pt-3 border-t border-white/[0.1]">
                  <p className="text-caption text-white/70 uppercase tracking-wider mb-1">
                    Protection Status
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-pillar-asset-mid animate-pulse" />
                    <p className="font-mono text-body-sm text-pillar-asset-mid">
                      Active — Charging Order Protected
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
          <ScrollReveal delay={300}>
            <div className="mt-12 grid grid-cols-3 gap-4 rounded-card-lg bg-white/[0.06] border border-white/[0.1] p-5">
              {[
                { value: "25", unit: "yrs", label: "Specialized Experience" },
                { value: "WY", unit: "& NV", label: "AP Specialists" },
                { value: "$0", unit: "hidden", label: "All-Inclusive Pricing" },
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
          THE DISTINCTION — Privacy vs Asset Protection
          ================================================ */}
      <section className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3 text-center">
              The Critical Distinction
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground text-center max-w-[32ch] mx-auto">
              Privacy Protects Your Identity.
              <br className="hidden sm:block" />
              Asset Protection Protects Your{" "}
              <span className="text-muted">Wealth.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
              {/* Privacy side */}
              <div className="rounded-card-lg border border-pillar-privacy/20 bg-pillar-privacy/[0.03] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-card bg-pillar-privacy/[0.1] mb-4">
                  <Icon
                    name="EyeOff"
                    size="md"
                    className="text-pillar-privacy"
                  />
                </div>
                <h3 className="font-display text-body-lg font-semibold text-foreground">
                  Business Privacy
                </h3>
                <p className="text-body-sm text-muted mt-1.5 leading-relaxed">
                  Controls{" "}
                  <strong className="text-foreground">who can see</strong> your
                  ownership. Keeps your name off public filings with nominees
                  and anonymous formation.
                </p>
                <Link
                  href="/privacy"
                  className="mt-4 inline-flex items-center text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                >
                  Explore privacy services →
                </Link>
              </div>

              {/* Asset Protection side */}
              <div className="rounded-card-lg border border-pillar-asset/20 bg-pillar-asset/[0.03] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-card bg-pillar-asset/[0.1] mb-4">
                  <Icon name="Shield" size="md" className="text-pillar-asset" />
                </div>
                <h3 className="font-display text-body-lg font-semibold text-foreground">
                  Asset Protection
                </h3>
                <p className="text-body-sm text-muted mt-1.5 leading-relaxed">
                  Controls{" "}
                  <strong className="text-foreground">
                    what creditors can take
                  </strong>{" "}
                  in a lawsuit. Uses LLC structures and state law to shield your
                  wealth.
                </p>
                <p className="mt-3 text-caption font-semibold text-pillar-asset uppercase tracking-wider">
                  You are here
                </p>
              </div>
            </div>

            <p className="mt-8 text-body text-muted text-center max-w-[520px] mx-auto">
              Most high-value clients implement both. Privacy keeps you from
              becoming a target. Asset protection ensures you&rsquo;re defended
              if someone comes looking anyway.
            </p>
          </ScrollReveal>
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
                <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-asset mb-3">
                  The Risk
                </p>
                <h2 className="font-display type-display-sm font-semibold text-foreground">
                  Without the Right Structure, Everything You Own Is Exposed.{" "}
                  <span className="text-muted">One Lawsuit Away.</span>
                </h2>
                <p className="mt-4 text-body-lg text-muted max-w-[440px]">
                  If your assets aren&rsquo;t held inside the right legal
                  structure, they&rsquo;re fair game in any civil judgment.
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
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card-lg bg-pillar-asset/[0.06] group-hover:bg-pillar-asset/[0.12] transition-colors">
                      <Icon
                        name={card.icon}
                        size="md"
                        className="text-pillar-asset"
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
      <PullQuote bgText="LLC">
        &ldquo;Charging order protection means creditors can&rsquo;t seize your
        LLC&rsquo;s assets — they can only wait for distributions that{" "}
        <span className="text-amber-300 font-bold">may never come</span>.&rdquo;
      </PullQuote>

      {/* ================================================
          KEY DIFFERENTIATORS — compact strip
          ================================================ */}
      <KeyDifferentiators
        pillarColor="text-pillar-asset"
        items={ASSET_KEY_DIFFS}
      />

      {/* ================================================
          S3: THREE PILLARS OF PROTECTION — Editorial numbered blocks
          ================================================ */}
      <section id="three-pillars" className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-pillar-asset mb-3">
              Understanding Protection
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[28ch]">
              Three Pillars of Asset Protection
            </h2>
            <p className="mt-3 text-body-lg text-muted max-w-[520px]">
              Effective asset protection isn&rsquo;t a single product —
              it&rsquo;s a multi-layered strategy combining the right state, the
              right structure, and the right separation.
            </p>
          </ScrollReveal>

          <PillarIllustration pillar="asset" className="mt-10 mb-4 lg:hidden" />

          <div className="mt-14 space-y-0">
            {PROTECTION_BLOCKS.map((block, i) => (
              <ScrollReveal key={block.id}>
                <div
                  className={`grid gap-8 lg:grid-cols-[120px_1fr] py-10 ${i < PROTECTION_BLOCKS.length - 1 ? "border-b border-border" : ""}`}
                >
                  {/* Large editorial number */}
                  <div className="hidden lg:block">
                    <span className="font-mono text-[5rem] font-bold leading-none text-pillar-asset/[0.12]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-3 lg:hidden">
                      <span className="font-mono text-heading-lg font-bold text-pillar-asset/40">
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
                      <div className="mt-4 rounded-card bg-pillar-asset/[0.04] border border-pillar-asset/[0.12] px-5 py-4">
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
          STATE COMPARISON SNAPSHOT
          ================================================ */}
      <section className="py-section-y-sm bg-primary-50">
        <div className="mx-auto max-w-content px-container-x">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            {/* Left column — header + bottom line */}
            <ScrollReveal>
              <div className="lg:sticky lg:top-24">
                <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                  Compare States
                </p>
                <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[28ch]">
                  Wyoming vs. Nevada for Asset Protection
                </h2>
                <p className="mt-3 text-body text-muted">
                  State selection is the first concrete decision. Here&rsquo;s
                  what matters most.
                </p>
                <p className="mt-6 text-body-sm text-muted">
                  <strong className="text-foreground">Bottom line:</strong>{" "}
                  Wyoming leads for single-member LLCs. Nevada offers stronger
                  case law and a dedicated business court.
                </p>
                <Link
                  href="/wyoming-vs-nevada-asset-protection"
                  className="mt-4 inline-block text-body-sm font-medium text-secondary hover:underline"
                >
                  Full comparison &rarr;
                </Link>
              </div>
            </ScrollReveal>

            {/* Right column — table (2/3 width) */}
            <ScrollReveal delay={150}>
              <div className="overflow-hidden rounded-card-lg border border-border">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface border-b border-border">
                      <th className="px-5 py-3 text-body-sm font-semibold text-foreground">
                        Factor
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
                    {STATE_COMPARISON.map((row, i) => (
                      <tr
                        key={row.factor}
                        className={
                          i < STATE_COMPARISON.length - 1
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================
          HOW IT WORKS
          ================================================ */}
      <section id="how-it-works" className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="How It Works"
              title="From Consultation to Fully Protected."
              subtitle="Four steps. We build the structure. You keep your assets."
              subtitleMaxWidth="max-w-narrow mx-auto"
            />

            <div className="mt-12">
              <HowItWorks steps={PROCESS_STEPS} />
            </div>

            <div className="mt-10 text-center">
              <a href="#packages">
                <Button variant="cta" size="md">
                  See Protection Packages &amp; Pricing
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
        <div className="pointer-events-none absolute -right-60 top-20 h-[50vw] w-[50vw] rounded-full bg-pillar-asset/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Why Incorporate123"
              title="What Sets Our Asset Protection Apart"
              dark
            />

            {/* Featured differentiator — full width hero card */}
            <div className="mt-12 rounded-card-lg bg-white/[0.06] border border-white/[0.1] overflow-hidden">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 lg:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-card-lg bg-white/[0.12] mb-5">
                    <Icon
                      name="Shield"
                      size="lg"
                      className="text-pillar-asset-mid"
                    />
                  </div>
                  <h3 className="font-display text-heading-lg font-semibold text-white">
                    Charging Order Protection — Even for Single-Member LLCs
                  </h3>
                  <p className="mt-3 text-body text-white/75 leading-relaxed max-w-[440px]">
                    Wyoming is the only state that explicitly extends charging
                    order protection to single-member LLCs. Most states allow
                    courts to pierce a single-member entity and seize assets
                    directly. Wyoming statute closes that loophole.
                  </p>
                  <div className="mt-6 flex items-center gap-6">
                    <div>
                      <p className="font-mono text-heading font-bold text-white">
                        WY
                      </p>
                      <p className="text-caption text-white/70">
                        #1 state for AP
                      </p>
                    </div>
                    <div className="h-10 w-px bg-white/[0.1]" />
                    <div>
                      <p className="font-mono text-heading font-bold text-white">
                        Single
                      </p>
                      <p className="text-caption text-white/70">
                        member protected
                      </p>
                    </div>
                    <div className="h-10 w-px bg-white/[0.1]" />
                    <div>
                      <p className="font-mono text-heading font-bold text-white">
                        25
                      </p>
                      <p className="text-caption text-white/70">
                        years experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center bg-white/[0.03] p-10">
                  {/* Multi-entity structure visual */}
                  <div className="w-full max-w-[280px] space-y-4">
                    <div className="rounded-card bg-pillar-asset/[0.08] border border-pillar-asset/[0.15] p-4 text-center">
                      <p className="text-caption font-semibold text-pillar-asset-mid uppercase tracking-wider mb-1">
                        Holding LLC (Wyoming)
                      </p>
                      <p className="text-body-sm text-white/70">
                        Parent entity — charging order protected
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="h-6 w-px bg-white/20" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-card bg-white/[0.06] border border-white/[0.1] p-2.5 text-center">
                        <Icon
                          name="Building2"
                          size="xs"
                          className="text-white/70 mx-auto mb-1"
                        />
                        <p className="text-caption text-white/70">
                          Real Estate
                        </p>
                      </div>
                      <div className="rounded-card bg-white/[0.06] border border-white/[0.1] p-2.5 text-center">
                        <Icon
                          name="TrendingUp"
                          size="xs"
                          className="text-white/70 mx-auto mb-1"
                        />
                        <p className="text-caption text-white/70">
                          Investments
                        </p>
                      </div>
                      <div className="rounded-card bg-white/[0.06] border border-white/[0.1] p-2.5 text-center">
                        <Icon
                          name="Briefcase"
                          size="xs"
                          className="text-white/70 mx-auto mb-1"
                        />
                        <p className="text-caption text-white/70">Operations</p>
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
                      className="text-pillar-asset-mid"
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
          S7: SOCIAL PROOF STRIP
          ================================================ */}
      <SocialProofStrip
        pillarColor="text-pillar-asset-mid"
        badges={ASSET_TRUST_BADGES}
        testimonial={ASSET_TESTIMONIAL}
      />

      {/* ================================================
          UPSELL BRIDGE — Privacy cross-sell
          ================================================ */}
      <UpsellBridge
        eyebrow="Complete Your Protection"
        heading="Combine Privacy + Asset Protection for Total Security."
        description="Privacy controls who can see your ownership. Asset protection controls what happens in a lawsuit. Most high-value clients combine both for layered defense."
        stat="85%"
        statLabel="of Gold clients add privacy services"
        ctaLabel="See Gold Packages"
        ctaHref="#packages"
        pillarColor="text-pillar-asset-mid"
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
                  Asset Protection Questions Answered
                </h2>
                <p className="mt-3 text-body text-muted">
                  Quick answers to the most common questions about protecting
                  your assets.
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
                {assetFaqs.map((faq) => (
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
              Explore Asset Protection
            </h2>
            <p className="mt-2 text-body text-muted">
              In-depth guides on strategies, state comparisons, and structures.
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-card bg-pillar-asset/[0.08] mb-4 group-hover:bg-pillar-asset/[0.14] transition-colors">
                      <Icon
                        name={item.icon}
                        size="md"
                        className="text-pillar-asset"
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
                      className="!no-underline group flex items-center gap-3 rounded-card px-3 py-2.5 -mx-3 hover:bg-pillar-asset/[0.04] transition-colors"
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
                      className="!no-underline group flex items-start gap-3 rounded-card px-3 py-2.5 -mx-3 hover:bg-pillar-asset/[0.04] transition-colors"
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
              Complete Your Protection
            </p>
            <h2 className="font-display type-display-sm font-semibold text-foreground text-center">
              Asset Protection Works Best Combined With Privacy.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto items-stretch">
              <CrossPillarCTA
                fromPillar="asset"
                toPillar="privacy"
                heading="Hide What You Own, Not Just Protect It"
                description="Asset protection controls what happens in a lawsuit. Privacy prevents the lawsuit from finding targets in the first place. Most high-value clients combine both."
                href="/privacy"
                className="h-full"
              />
              <CrossPillarCTA
                fromPillar="asset"
                toPillar="compliance"
                heading="Protection Requires Ongoing Compliance"
                description="An LLC that falls out of good standing loses its protection. Registered agent, annual reports, corporate minutes — we handle it all."
                href="/compliance"
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
        heading={ASSET_FINAL_CTA.heading}
        description={ASSET_FINAL_CTA.description}
        ctaLabel={ASSET_FINAL_CTA.ctaLabel}
        ctaHref={ASSET_FINAL_CTA.ctaHref}
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
    title: "Personal Liability Exposure",
    desc: "Without entity separation, a judgment against your business can reach your personal bank accounts, home equity, and investment portfolio.",
  },
  {
    icon: "Gavel" as const,
    title: "Lawsuit Vulnerability",
    desc: "Slip-and-fall at a rental property, contract dispute, or disgruntled partner — one lawsuit can trigger asset seizure if your structure is wrong.",
  },
  {
    icon: "Layers" as const,
    title: "Single Entity Risk",
    desc: "Holding all assets in one LLC means one claim can reach everything. Multi-entity strategies compartmentalize risk across separate legal barriers.",
  },
  {
    icon: "TriangleAlert" as const,
    title: "Post-Judgment Exposure",
    desc: "Setting up protection after a claim is filed can be voided as fraudulent conveyance. The time to protect your assets is before you need to.",
  },
];

const PROTECTION_BLOCKS = [
  {
    id: "charging-order",
    title: "Charging Order Protection",
    summary:
      "When a creditor wins a judgment against you personally, a charging order is the only remedy they have against your LLC in Wyoming. They cannot seize LLC assets, force distributions, vote your interest, or take over management. They simply wait — and if the LLC never distributes, they never collect.",
    keyDistinction:
      "Most states limit charging order protection to multi-member LLCs. Wyoming is the only state that explicitly extends this protection to single-member LLCs — critical for individual asset owners who don't have a partner.",
    href: "/charging-order-protection",
    linkText: "How charging order protection works →",
  },
  {
    id: "multi-entity",
    title: "Multi-Entity Structure",
    summary:
      "A holding LLC owns your operating LLCs, each of which holds a separate asset class — real estate in one, investments in another, operations in a third. If one entity faces a claim, the others remain untouched behind separate legal barriers.",
    keyDistinction:
      "Single-entity structures create a single point of failure. Our multi-entity approach isolates each asset class so one claim cannot cascade across your portfolio. We've designed these structures for 25 years.",
    href: "/investment-holding-llc",
    linkText: "Investment holding LLC explained →",
  },
  {
    id: "state-selection",
    title: "Strategic State Selection",
    summary:
      "Not all states are equal for asset protection. Wyoming offers the strongest charging order statutes, no state income tax, and no public disclosure of members. Nevada provides a dedicated business court and well-tested close-knit statutes. The right state depends on your specific assets and exposure.",
    keyDistinction:
      "Forming in your home state is often the worst choice for protection. States like California allow courts to reverse-pierce LLCs. Wyoming and Nevada close those gaps by statute.",
    href: "/wyoming-asset-protection",
    linkText: "Compare Wyoming vs. Nevada →",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Identify Assets & Exposure",
    description:
      "We assess your asset profile — real estate, investments, business interests — and identify where your exposure is greatest.",
    tag: "Assessment",
    color: "green" as const,
  },
  {
    number: 2,
    title: "Design Your Structure",
    description:
      "Holding LLC, operating LLCs, state selection — we design a multi-entity strategy tailored to your specific assets and risk profile.",
    tag: "Strategy",
    color: "blue" as const,
  },
  {
    number: 3,
    title: "Form & File Everything",
    description:
      "We file all entities, transfer titles where needed, set up registered agents, and ensure every document is in place from day one.",
    tag: "Formation",
    color: "amber" as const,
  },
  {
    number: 4,
    title: "Maintain & Protect Year-Round",
    description:
      "Annual reports, registered agent, corporate minutes, nominee renewals — all included in your annual renewal. No gaps in protection.",
    tag: "Compliance",
    color: "purple" as const,
  },
];

const DIFFERENTIATORS_SMALL = [
  {
    icon: "Layers" as const,
    title: "Multi-Entity Strategies",
    desc: "Custom holding structures that isolate risk across asset classes. Not template formation — real protection architecture.",
  },
  {
    icon: "DollarSign" as const,
    title: "All-Inclusive Pricing",
    desc: "$1,275 Gold includes everything — charging order structure, nominees, RA, EIN, operating agreement. No surprise charges.",
  },
  {
    icon: "Clock" as const,
    title: "25 Years Specialized",
    desc: "Asset protection and privacy since 2000. Not a general filing service. Focused exclusively on protective structures.",
  },
  {
    icon: "Bitcoin" as const,
    title: "Crypto Payments",
    desc: "Bitcoin, Ethereum, XRP, Litecoin, Monero. Privacy from the first transaction.",
  },
  {
    icon: "Headphones" as const,
    title: "Real People. Real Answers.",
    desc: "Talk to a protection specialist who knows your case — not a call center. Call anytime.",
  },
];

const EXPLORE_SERVICES = [
  {
    icon: "Shield" as const,
    title: "Charging Order Protection",
    desc: "How Wyoming's charging order statute shields LLC assets from personal creditors — even for single-member LLCs.",
    href: "/charging-order-protection",
  },
  {
    icon: "Layers" as const,
    title: "Investment Holding LLC",
    desc: "Separate investment assets from operational risk with a dedicated holding LLC that owns your operating entities.",
    href: "/investment-holding-llc",
  },
  {
    icon: "Building2" as const,
    title: "Real Estate Asset Protection",
    desc: "Per-property LLC isolation strategies for rental portfolios and real estate investments.",
    href: "/real-estate-asset-protection",
  },
];

const STATE_COMPARISON = [
  {
    factor: "Charging order (single-member)",
    wy: "Full protection",
    nv: "Strong, less tested",
  },
  { factor: "State income tax", wy: "None", nv: "None" },
  { factor: "Annual LLC cost", wy: "$62/yr", nv: "$325/yr" },
  { factor: "Case law depth", wy: "Growing", nv: "Extensive" },
  { factor: "Dedicated business court", wy: "No", nv: "Yes" },
  { factor: "Privacy protections", wy: "Strong", nv: "Strong" },
];

const EXPLORE_STATES = [
  {
    icon: "MapPin" as const,
    title: "Wyoming Asset Protection",
    desc: "Strongest charging order statutes in the country",
    href: "/wyoming-asset-protection",
  },
  {
    icon: "MapPin" as const,
    title: "Nevada Asset Protection",
    desc: "Dedicated business court + close-knit statutes",
    href: "/nevada-asset-protection",
  },
  {
    icon: "Building" as const,
    title: "Real Estate Protection",
    desc: "Per-property LLC isolation for rental investors",
    href: "/real-estate-asset-protection",
  },
  {
    icon: "Scale" as const,
    title: "LLC vs. Living Trust",
    desc: "Living trusts offer zero asset protection — here's why",
    href: "/llc-vs-living-trust",
  },
];

const EXPLORE_COMPARISONS = [
  {
    title: "Best State for Asset Protection",
    desc: "Ranked comparison of Wyoming, Nevada, and other states for charging order protection and asset shielding.",
    href: "/best-state-for-asset-protection",
  },
  {
    title: "Wyoming vs. Nevada for Asset Protection",
    desc: "Head-to-head: charging order statutes, annual costs, and protection strength compared.",
    href: "/wyoming-vs-nevada-asset-protection",
  },
];
