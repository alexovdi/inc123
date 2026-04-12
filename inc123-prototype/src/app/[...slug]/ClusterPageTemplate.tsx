import { Link as RouterLink } from "react-router-dom";

import { ClusterLayout } from "@/design-system/layouts/ClusterLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { Badge } from "@/design-system/primitives/Badge";
import { ClusterHero } from "@/design-system/components/ClusterHero";
import { ContentSidebar } from "@/design-system/components/ContentSidebar";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { DualPackageCTA } from "@/design-system/components/DualPackageCTA";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import { InlineCTAStrip } from "@/design-system/components/InlineCTAStrip";
import { LongFormContent } from "@/design-system/components/LongFormContent";
import { PullQuote } from "@/design-system/components/PullQuote";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { SocialProofStrip } from "@/design-system/components/SocialProofStrip";
import { WhereToGoNext } from "@/design-system/components/WhereToGoNext";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { Link } from "@/design-system/primitives/Link";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { StickyMobileCTA } from "@/design-system/components/StickyMobileCTA";
import { pillarTextMap } from "@/design-system/utils/pillarMaps";
import { packages } from "@/data/packages";
import {
  ASSET_TESTIMONIAL,
  ASSET_TRUST_BADGES,
  COMPLIANCE_TESTIMONIAL,
  COMPLIANCE_TRUST_BADGES,
  FORMATION_TESTIMONIAL,
  FORMATION_TRUST_BADGES,
  PRIVACY_TESTIMONIAL,
  PRIVACY_TRUST_BADGES,
} from "@/data/pillar-social-proof";
import { resolveLegacyPackageToTierUrl } from "@/lib/slug-registry";
import { resolveReadingTime } from "@/lib/reading-time";
import type { ClusterContent } from "@/lib/types";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Pillar config
   ------------------------------------------------ */
const pillarConfig: Record<
  string,
  { label: string; href: string; suggestionContext: string; accent: string }
> = {
  privacy: {
    label: "Business Privacy",
    href: "/privacy",
    suggestionContext: "your privacy strategy",
    accent: "text-pillar-privacy",
  },
  asset: {
    label: "Asset Protection",
    href: "/asset-protection",
    suggestionContext: "your asset protection strategy",
    accent: "text-pillar-asset",
  },
  formation: {
    label: "Company Formation",
    href: "/formation",
    suggestionContext: "your formation needs",
    accent: "text-pillar-formation",
  },
  compliance: {
    label: "Compliance",
    href: "/compliance",
    suggestionContext: "keeping your entity in good standing",
    accent: "text-pillar-compliance",
  },
};

/* ------------------------------------------------
   Pillar → social proof data
   ------------------------------------------------ */
const pillarSocialProof: Record<
  PillarName,
  {
    badges: typeof PRIVACY_TRUST_BADGES;
    testimonial: typeof PRIVACY_TESTIMONIAL;
    accent: string;
  }
> = {
  privacy: {
    badges: PRIVACY_TRUST_BADGES,
    testimonial: PRIVACY_TESTIMONIAL,
    accent: "text-pillar-privacy",
  },
  asset: {
    badges: ASSET_TRUST_BADGES,
    testimonial: ASSET_TESTIMONIAL,
    accent: "text-pillar-asset",
  },
  formation: {
    badges: FORMATION_TRUST_BADGES,
    testimonial: FORMATION_TESTIMONIAL,
    accent: "text-pillar-formation",
  },
  compliance: {
    badges: COMPLIANCE_TRUST_BADGES,
    testimonial: COMPLIANCE_TESTIMONIAL,
    accent: "text-pillar-compliance",
  },
};

/* ------------------------------------------------
   Pillar bridges — every cluster surfaces 3 adjacent
   pillars with pillar-specific framing (no "first layer"
   template-string fallback).
   ------------------------------------------------ */
interface BridgeItem {
  pillar: PillarName;
  title: string;
  description: string;
  href: string;
}

const pillarBridges: Record<
  PillarName,
  { heading: string; items: BridgeItem[] }
> = {
  privacy: {
    heading: "Privacy Is the First Layer. What's Next?",
    items: [
      {
        pillar: "asset",
        title: "Asset Protection Is the Second Layer",
        description:
          "Privacy hides your assets. Asset protection keeps them out of reach even when they're found. Most clients need both.",
        href: "/asset-protection",
      },
      {
        pillar: "compliance",
        title: "Keep Privacy Intact Year After Year",
        description:
          "Anonymity only holds up when filings, registered agent, and corporate records are handled correctly.",
        href: "/compliance",
      },
      {
        pillar: "formation",
        title: "Choose the Right Entity for Privacy",
        description:
          "Wyoming LLC, Nevada LLC, or corporation — your entity choice shapes how well privacy actually works.",
        href: "/formation",
      },
    ],
  },
  asset: {
    heading: "Asset Protection Works Best as a System",
    items: [
      {
        pillar: "privacy",
        title: "Protect What People Can't Find",
        description:
          "Asset protection is stronger when paired with privacy. Anonymous LLCs stop disputes before they start.",
        href: "/privacy",
      },
      {
        pillar: "formation",
        title: "The Right Entity Determines the Protection",
        description:
          "Wyoming LLCs, series LLCs, and holding structures offer different charging-order defenses. Choose deliberately.",
        href: "/formation",
      },
      {
        pillar: "compliance",
        title: "Protection Fails Without Maintenance",
        description:
          "Missed filings and corporate-veil violations unravel years of asset protection. We keep the structure intact.",
        href: "/compliance",
      },
    ],
  },
  formation: {
    heading: "Formation Is Step One. What Comes Next?",
    items: [
      {
        pillar: "compliance",
        title: "Formation Is Day One. Compliance Is Every Year After.",
        description:
          "Annual reports, registered agent renewals, corporate records — everything that keeps your entity alive.",
        href: "/compliance",
      },
      {
        pillar: "privacy",
        title: "Form Anonymously from Day One",
        description:
          "Wyoming and Nevada let you form without disclosing members publicly. Privacy belongs in the foundation.",
        href: "/privacy",
      },
      {
        pillar: "asset",
        title: "Build Protection Into the Structure",
        description:
          "Charging-order protection, series LLCs, and holding structures start at formation, not later.",
        href: "/asset-protection",
      },
    ],
  },
  compliance: {
    heading: "Compliance Is the Spine. Strengthen the Rest.",
    items: [
      {
        pillar: "formation",
        title: "Still Choosing an Entity Structure?",
        description:
          "Compliance starts with the right foundation. See how Wyoming and Nevada compare and pick deliberately.",
        href: "/formation",
      },
      {
        pillar: "privacy",
        title: "Privacy Depends on Clean Filings",
        description:
          "One missed annual report and your ownership details end up in public searches. Compliance keeps privacy intact.",
        href: "/privacy",
      },
      {
        pillar: "asset",
        title: "Compliance Preserves Protection",
        description:
          "Asset protection evaporates the moment the corporate veil is pierced. Compliance is the shield behind the shield.",
        href: "/asset-protection",
      },
    ],
  },
};

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
    accent: "text-secondary",
  };

  /* Resolve related packages */
  const relatedPkgs = cluster.relatedPackages
    .map((id) => packages.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const goldPackages = relatedPkgs.filter((p) => p.tier === "gold");
  const primaryPkg = goldPackages[0] ?? relatedPkgs[0];
  const dualPkgs = goldPackages.slice(0, 2);
  const hasDual = dualPkgs.length >= 2;

  /* Reading time — computed if not explicitly set */
  const readingTime = resolveReadingTime(cluster);

  /* Build sidebar related pages with current-page highlight */
  const currentPath = `/${cluster.slug}`;
  const sidebarHasCurrent = cluster.sidebarLinks.some(
    (l) => l.href === currentPath,
  );
  const sidebarRelatedPages = [
    ...(sidebarHasCurrent
      ? []
      : [{ title: cluster.title, href: currentPath, current: true }]),
    ...cluster.sidebarLinks.map((link) => ({
      title: link.title,
      href: link.href,
      current: link.href === currentPath,
    })),
  ];

  /* Build suggestions — custom or generated */
  const suggestions = (
    cluster.suggestions?.length
      ? cluster.suggestions
      : cluster.sidebarLinks.slice(0, 3).map((link) => ({
          title: link.title,
          description: `Related ${config.label.toLowerCase()} guide — dive deeper into ${link.title.toLowerCase()}.`,
          href: link.href,
        }))
  ).map((s) => ({ ...s, pillar: cluster.pillar as PillarName }));

  /* Cross-pillar bridge — default pillar set, with optional
     cluster-level override replacing the first item. */
  const defaultBridge = pillarBridges[cluster.pillar];
  const bridgeItems: BridgeItem[] = cluster.crossPillarCTA
    ? [
        {
          pillar: cluster.crossPillarCTA.pillar,
          title: cluster.crossPillarCTA.title,
          description: cluster.crossPillarCTA.description,
          href: cluster.crossPillarCTA.href,
        },
        ...defaultBridge.items.filter(
          (i) => i.pillar !== cluster.crossPillarCTA!.pillar,
        ),
      ].slice(0, 3)
    : defaultBridge.items;
  const primaryBridge = bridgeItems[0];

  /* Social proof data for this pillar */
  const socialProof = pillarSocialProof[cluster.pillar];

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
            readingTime={readingTime}
          />
        }
        sidebar={
          <ContentSidebar
            variant="cluster"
            packageShortcut={
              primaryPkg
                ? {
                    name:
                      primaryPkg.tier === "gold"
                        ? "Gold Package"
                        : primaryPkg.name,
                    price: `$${primaryPkg.prices.llc.formation.toLocaleString()}`,
                    period: "one-time",
                    href: resolveLegacyPackageToTierUrl(primaryPkg.id),
                    badge: primaryPkg.badge,
                  }
                : undefined
            }
            relatedPages={sidebarRelatedPages}
            crossPillarLink={
              primaryBridge
                ? {
                    pillar: primaryBridge.pillar,
                    title: primaryBridge.title,
                    href: primaryBridge.href,
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
            pullQuote={cluster.pullQuote}
          />
        </div>
      </ClusterLayout>

      {/* ============================================
          Full-width sections below the sidebar layout
          — alternating backgrounds for visual rhythm
          ============================================ */}

      {/* Inline CTA Strip — mid-page conversion between content and trust */}
      <InlineCTAStrip
        pillar={cluster.pillar}
        eyebrow={`Ready to Move Forward?`}
        heading={`Start Your ${cluster.title} the Right Way`}
        description={`All-inclusive packages — formation, registered agent, compliance, and privacy services in one transparent price.`}
        primaryCTA={{
          label: "Find Your Package",
          href: "#packages",
        }}
        secondaryCTA={{
          label: "Compare Wyoming vs Nevada",
          href: "/wyoming-vs-nevada-llc",
        }}
        phone="1-800-553-0615"
      />

      {/* Expanded Social Proof Strip (replaces old 86px trust strip) */}
      <SocialProofStrip
        pillarColor={socialProof.accent}
        badges={socialProof.badges}
        testimonial={socialProof.testimonial}
      />

      {/* Package CTA — always rendered, dual or single */}
      <section id="packages" className="py-section-y-sm bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <SectionHeader
            eyebrow="Get Started"
            title="Ready to Get Started?"
            subtitle="All-inclusive packages with everything you need — no hidden fees."
            className="mb-10"
          />

          {hasDual ? (
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
          ) : primaryPkg ? (
            <SinglePackageCTA
              pkg={{
                name: primaryPkg.name,
                price: `$${primaryPkg.prices.llc.formation.toLocaleString()}`,
                period: "one-time",
                description: primaryPkg.description,
                badge: primaryPkg.badge,
                href: resolveLegacyPackageToTierUrl(primaryPkg.id),
              }}
              comparePath="/compare-packages"
            />
          ) : (
            <div className="mx-auto max-w-narrow text-center">
              <p className="text-body text-muted mb-5">
                Not sure which package fits? Talk to a specialist — we'll walk
                you through the options.
              </p>
              <RouterLink to="/compare-packages" className="no-underline">
                <Button variant="cta" size="lg">
                  View All Packages
                  <Icon name="ArrowRight" size="sm" className="ml-2" />
                </Button>
              </RouterLink>
            </div>
          )}
        </div>
      </section>

      {/* Cross-Pillar bridge — 3 adjacent pillars in a grid */}
      {bridgeItems.length > 0 && (
        <section className="py-section-y-sm bg-primary-50">
          <div className="mx-auto max-w-content px-container-x">
            <SectionHeader
              eyebrow="Related Services"
              title={defaultBridge.heading}
              className="mb-10"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {bridgeItems.map((item) => (
                <CrossPillarCTA
                  key={item.pillar}
                  fromPillar={cluster.pillar}
                  toPillar={item.pillar}
                  heading={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
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

      {/* Where to Go Next — already has its own section wrapper */}
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
              <p
                className={cnPillar(pillarTextMap[cluster.pillar])}
                aria-hidden
              >
                {config.label.toUpperCase()}
              </p>
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

/* ------------------------------------------------
   Single Package CTA — fallback when only 1 gold exists
   ------------------------------------------------ */
interface SinglePackageCTAProps {
  pkg: {
    name: string;
    price: string;
    period: string;
    description: string;
    badge?: string;
    href: string;
  };
  comparePath: string;
}

function SinglePackageCTA({ pkg, comparePath }: SinglePackageCTAProps) {
  return (
    <div className="mx-auto max-w-narrow space-y-6">
      <div className="rounded-card border-2 border-secondary bg-surface p-6 shadow-card hover:shadow-card-hover transition-shadow">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-heading-sm font-display font-semibold text-foreground">
            {pkg.name}
          </h3>
          {pkg.badge && (
            <Badge variant="success" size="sm">
              {pkg.badge}
            </Badge>
          )}
        </div>
        <div className="flex items-baseline gap-1 mt-3">
          <span className="text-heading-lg font-mono font-bold text-foreground">
            {pkg.price}
          </span>
          <span className="text-body-sm text-muted">/{pkg.period}</span>
        </div>
        <p className="text-body text-muted mt-3">{pkg.description}</p>
        <Button variant="cta" size="md" fullWidth className="mt-5" asChild>
          <a href={pkg.href}>Choose {pkg.name}</a>
        </Button>
      </div>

      <div className="text-center">
        <RouterLink
          to={comparePath}
          className="inline-flex items-center gap-1.5 text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors no-underline"
        >
          <Icon name="BarChart2" size="sm" />
          Compare all packages
        </RouterLink>
        <p className="mt-1 text-caption text-muted">
          or call{" "}
          <a
            href="tel:1-800-553-0615"
            className="font-medium text-foreground hover:text-secondary transition-colors"
          >
            1-800-553-0615
          </a>
        </p>
      </div>
    </div>
  );
}

/* Tiny helper for the final-CTA pillar eyebrow */
function cnPillar(pillarClass: string) {
  return `text-body-sm font-semibold uppercase tracking-[0.15em] mb-3 ${pillarClass}`;
}
