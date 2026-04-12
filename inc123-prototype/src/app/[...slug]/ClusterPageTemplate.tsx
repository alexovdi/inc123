import { Link as RouterLink } from "react-router-dom";

import { ClusterLayout } from "@/design-system/layouts/ClusterLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { ClusterHero } from "@/design-system/components/ClusterHero";
import { ContentSidebar } from "@/design-system/components/ContentSidebar";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { DualPackageCTA } from "@/design-system/components/DualPackageCTA";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import { LongFormContent } from "@/design-system/components/LongFormContent";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { WhereToGoNext } from "@/design-system/components/WhereToGoNext";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { Link } from "@/design-system/primitives/Link";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { StickyMobileCTA } from "@/design-system/components/StickyMobileCTA";
import { packages } from "@/data/packages";
import { resolveLegacyPackageToTierUrl } from "@/lib/slug-registry";
import type { ClusterContent } from "@/lib/types";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Pillar config
   ------------------------------------------------ */
const pillarConfig: Record<
  string,
  { label: string; href: string; suggestionContext: string }
> = {
  privacy: {
    label: "Business Privacy",
    href: "/privacy",
    suggestionContext: "your privacy strategy",
  },
  asset: {
    label: "Asset Protection",
    href: "/asset-protection",
    suggestionContext: "your asset protection strategy",
  },
  formation: {
    label: "Company Formation",
    href: "/formation",
    suggestionContext: "your formation needs",
  },
  compliance: {
    label: "Compliance",
    href: "/compliance",
    suggestionContext: "keeping your entity in good standing",
  },
};

/* ------------------------------------------------
   Trust signals data
   ------------------------------------------------ */
const TRUST_SIGNALS = [
  { icon: "Shield" as const, text: "25 Years Trusted" },
  { icon: "Users" as const, text: "Dedicated Account Team" },
  { icon: "Bitcoin" as const, text: "Crypto Accepted" },
  { icon: "Phone" as const, text: "Talk to Real Humans" },
  { icon: "RefreshCcw" as const, text: "30-Day Money Back" },
];

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
interface ClusterPageTemplateProps {
  cluster: ClusterContent;
}

export function ClusterPageTemplate({ cluster }: ClusterPageTemplateProps) {
  const config = pillarConfig[cluster.pillar] ?? {
    label: cluster.pillarLabel,
    href: `/${cluster.pillar}`,
    suggestionContext: "your business needs",
  };

  /* Resolve related packages */
  const relatedPkgs = cluster.relatedPackages
    .map((id) => packages.find((p) => p.id === id))
    .filter(Boolean);

  const goldPackages = relatedPkgs.filter((p) => p!.tier === "gold");
  const dualPkgs = goldPackages.slice(0, 2);

  /* Build sidebar related pages */
  const sidebarRelatedPages = cluster.sidebarLinks.map((link) => ({
    title: link.title,
    href: link.href,
  }));

  /* Build suggestions */
  const suggestions = cluster.sidebarLinks.slice(0, 3).map((link) => ({
    title: link.title,
    description: `Learn more about ${link.title.toLowerCase()} and how it relates to ${config.suggestionContext}.`,
    href: link.href,
    pillar: cluster.pillar as PillarName,
  }));

  return (
    <>
      {/* ============================================
          Hero + Sidebar Content (ToC + Long-form)
          ============================================ */}
      <ClusterLayout
        pillar={cluster.pillar}
        pillarLabel={config.label}
        pillarHref={config.href}
        title={cluster.title}
        description={cluster.description}
        customHero={
          <ClusterHero
            pillar={cluster.pillar}
            pillarLabel={config.label}
            pillarHref={config.href}
            title={cluster.title}
            description={cluster.description}
            readingTime={cluster.readingTime}
          />
        }
        sidebar={
          <ContentSidebar
            variant="cluster"
            packageShortcut={
              goldPackages[0]
                ? {
                    name: "Gold Package",
                    price: `$${goldPackages[0].prices.llc.formation.toLocaleString()}`,
                    period: "one-time",
                    href: resolveLegacyPackageToTierUrl(goldPackages[0].id),
                    badge: goldPackages[0].badge,
                  }
                : undefined
            }
            relatedPages={sidebarRelatedPages}
            crossPillarLink={
              cluster.crossPillarCTA
                ? {
                    pillar: cluster.crossPillarCTA.pillar,
                    title: cluster.crossPillarCTA.title,
                    href: cluster.crossPillarCTA.href,
                  }
                : undefined
            }
            phoneNumber="1-800-553-0615"
          />
        }
      >
        <div id="content">
          {/* Table of Contents */}
          {cluster.sections.length > 2 && (
            <div className="mb-12">
              <ScrollReveal>
                <nav
                  aria-label="Table of contents"
                  className="rounded-card-lg border border-border bg-primary-50 p-6"
                >
                  <h2 className="text-body font-display font-semibold text-foreground mb-4">
                    In This Guide
                  </h2>
                  <ol className="space-y-2">
                    {cluster.sections.map((section, i) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-body-sm text-muted hover:text-secondary transition-colors flex items-baseline gap-3 group"
                        >
                          <span className="text-secondary/40 font-mono text-[0.7rem] tabular-nums shrink-0 group-hover:text-secondary transition-colors">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="group-hover:translate-x-0.5 transition-transform">
                            {section.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </ScrollReveal>
            </div>
          )}

          {/* Long-form content sections */}
          <LongFormContent
            sections={cluster.sections}
            pillar={cluster.pillar}
          />
        </div>
      </ClusterLayout>

      {/* ============================================
          Full-width sections below the sidebar layout
          ============================================ */}

      {/* Trust Signal Strip */}
      <section className="py-8 bg-surface border-y border-border">
        <div className="mx-auto max-w-content px-container-x">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUST_SIGNALS.map((signal) => (
              <div
                key={signal.text}
                className="flex items-center gap-2 text-body-sm text-muted"
              >
                <Icon name={signal.icon} size="sm" className="text-secondary" />
                {signal.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package CTA */}
      {dualPkgs.length >= 2 && (
        <section id="packages" className="py-section-y-sm bg-background">
          <div className="mx-auto max-w-content px-container-x">
            <SectionHeader
              eyebrow="Get Started"
              title="Ready to Get Started?"
              subtitle="All-inclusive packages with everything you need — no hidden fees."
              className="mb-10"
            />
            <DualPackageCTA
              packages={[
                {
                  name: dualPkgs[0]!.name,
                  price: `$${dualPkgs[0]!.prices.llc.formation.toLocaleString()}`,
                  period: "one-time",
                  description: dualPkgs[0]!.description,
                  badge: dualPkgs[0]!.badge,
                  highlighted: true,
                  href: resolveLegacyPackageToTierUrl(dualPkgs[0]!.id),
                },
                {
                  name: dualPkgs[1]!.name,
                  price: `$${dualPkgs[1]!.prices.llc.formation.toLocaleString()}`,
                  period: "one-time",
                  description: dualPkgs[1]!.description,
                  badge: dualPkgs[1]!.badge,
                  highlighted: true,
                  href: resolveLegacyPackageToTierUrl(dualPkgs[1]!.id),
                },
              ]}
              consultationCTA={{
                label: "Not sure yet? Schedule a free consultation",
                href: "/contact",
                phone: "1-800-553-0615",
              }}
            />
          </div>
        </section>
      )}

      {/* Cross-Pillar CTA */}
      {cluster.crossPillarCTA && (
        <section className="py-section-y-sm bg-primary-50">
          <div className="mx-auto max-w-content px-container-x">
            <SectionHeader
              eyebrow="Related Services"
              title={`${config.label} Is the First Layer. What Else?`}
              className="mb-10"
            />
            <div className="max-w-[600px] mx-auto">
              <CrossPillarCTA
                fromPillar={cluster.pillar}
                toPillar={cluster.crossPillarCTA.pillar}
                heading={cluster.crossPillarCTA.title}
                description={cluster.crossPillarCTA.description}
                href={cluster.crossPillarCTA.href}
              />
            </div>
          </div>
        </section>
      )}

      {/* FAQ — Two-column sticky layout */}
      {cluster.faqs.length > 0 && (
        <section className="py-section-y-sm bg-background">
          <div className="mx-auto max-w-content px-container-x">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              {/* Left: Header (sticky) */}
              <div className="lg:sticky lg:top-24">
                <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-foreground/70 mb-3">
                  Frequently Asked Questions
                </p>
                <h2 className="font-display type-display-sm font-semibold text-foreground">
                  Common Questions
                </h2>
                <p className="mt-3 text-body text-muted">
                  Quick answers to the most common questions about{" "}
                  {cluster.title.toLowerCase()}.
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
              </div>

              {/* Right: Accordion */}
              <div>
                <Accordion type="single" variant="default">
                  {cluster.faqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      id={faq.id}
                      title={faq.question}
                    >
                      <p>{faq.answer}</p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Where to Go Next */}
      {suggestions.length > 0 && (
        <WhereToGoNext suggestions={suggestions} maxItems={3} />
      )}

      {/* Final CTA — Dark confident close */}
      <section className="relative bg-primary border-t border-white/[0.06] overflow-hidden">
        <GrainOverlay opacity="opacity-[0.03]" />
        <div className="pointer-events-none absolute -right-60 top-20 h-[50vw] w-[50vw] rounded-full bg-secondary/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-content px-container-x py-section-y-sm">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:items-center">
            {/* Left: Statement */}
            <div>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-white leading-[1.15] tracking-tight">
                Ready to take the next step?
              </h2>
              <p className="mt-4 text-body text-white/75 max-w-[440px]">
                All-inclusive packages starting at $525 — formation, registered
                agent, compliance, all included. No hidden fees. No annual
                surprises.
              </p>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col gap-3">
              <RouterLink to="/compare-packages" className="no-underline">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full justify-center"
                >
                  View Packages & Pricing
                </Button>
              </RouterLink>
              <RouterLink to="/contact" className="no-underline">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center border-white/20 text-white hover:bg-white/10"
                >
                  Schedule a Consultation
                </Button>
              </RouterLink>
              <p className="mt-1 text-center text-body-sm text-white/70">
                Or call{" "}
                <a
                  href="tel:1-800-553-0615"
                  className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
                >
                  1-800-553-0615
                </a>
                {" — real humans, real answers."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA
        primaryCTA={{
          variant: "cta",
          children: "Find Your Package",
          href: "#packages",
        }}
        phone="1-800-553-0615"
      />
    </>
  );
}

ClusterPageTemplate.displayName = "ClusterPageTemplate";
