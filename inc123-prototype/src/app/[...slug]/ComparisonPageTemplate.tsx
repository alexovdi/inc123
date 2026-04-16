import { useEffect } from "react";
import { ComparisonLayout } from "@/design-system/layouts/ComparisonLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { Alert } from "@/design-system/primitives/Alert";
import { ComparisonHero } from "@/design-system/components/ComparisonHero";
import { ComparisonTable } from "@/design-system/components/ComparisonTable";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { DecisionGuideBlocks } from "@/design-system/components/DecisionGuideBlocks";
import { DualPackageCTA } from "@/design-system/components/DualPackageCTA";
import type { DualPackageItem } from "@/design-system/components/DualPackageCTA";
import { WhereToGoNext } from "@/design-system/components/WhereToGoNext";
import { WinnerIndicator } from "@/design-system/components/WinnerIndicator";
import { packages } from "@/data/packages";
import { resolveLegacyPackageToTierUrl } from "@/lib/slug-registry";
import type { ComparisonPage } from "@/lib/types";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Pillar label/href defaults for breadcrumb
   ------------------------------------------------ */
const pillarBreadcrumbDefaults: Record<
  PillarName,
  { label: string; href: string }
> = {
  privacy: { label: "Business Privacy", href: "/privacy" },
  asset: { label: "Asset Protection", href: "/asset-protection" },
  formation: { label: "Company Formation", href: "/formation" },
  compliance: { label: "Compliance", href: "/compliance" },
};

/* ------------------------------------------------
   Helper: resolve packages for DualPackageCTA
   ------------------------------------------------ */
function buildDualPackageItems(
  packageIds: string[],
): [DualPackageItem, DualPackageItem] | null {
  const resolved = packageIds
    .map((id) => packages.find((p) => p.id === id))
    .filter(Boolean);

  if (resolved.length < 2) return null;

  return [
    {
      name: resolved[0]!.name,
      price: `$${resolved[0]!.prices.llc.formation.toLocaleString()}`,
      period: "one-time",
      description: resolved[0]!.description,
      badge: resolved[0]!.badge,
      highlighted: resolved[0]!.highlighted ?? false,
      href: resolveLegacyPackageToTierUrl(resolved[0]!.id),
    },
    {
      name: resolved[1]!.name,
      price: `$${resolved[1]!.prices.llc.formation.toLocaleString()}`,
      period: "one-time",
      description: resolved[1]!.description,
      badge: resolved[1]!.badge,
      highlighted: resolved[1]!.highlighted ?? false,
      href: resolveLegacyPackageToTierUrl(resolved[1]!.id),
    },
  ];
}

/* ------------------------------------------------
   Cross-pillar CTA config
   ------------------------------------------------ */
const crossPillarConfig: Record<
  string,
  {
    toPillar: "privacy" | "asset" | "formation" | "compliance";
    heading: string;
    description: string;
    href: string;
  }
> = {
  privacy: {
    toPillar: "asset",
    heading: "Privacy Is Step One. Asset Protection Is Step Two.",
    description:
      "Wyoming and Nevada both offer asset protection features that complement your privacy setup. Charging order protection prevents creditors from reaching assets inside your LLC.",
    href: "/asset-protection",
  },
  asset: {
    toPillar: "privacy",
    heading: "Protect Your Assets and Your Identity.",
    description:
      "Pair asset protection with anonymous LLC formation for comprehensive privacy. Nominee services keep your name off all public records.",
    href: "/privacy",
  },
  formation: {
    toPillar: "privacy",
    heading: "Want Maximum Privacy for Your Entity?",
    description:
      "Anonymous LLC formation with year-round nominees keeps your name off all public filings. Learn how privacy-focused formation works.",
    href: "/privacy",
  },
  compliance: {
    toPillar: "formation",
    heading: "Need to Form a New Entity?",
    description:
      "Start with the right foundation. Compare Wyoming and Nevada formation packages to find the best fit.",
    href: "/formation",
  },
};

/* ------------------------------------------------
   Where-to-go-next suggestions
   ------------------------------------------------ */
const whereToGoSuggestions: Record<
  string,
  Array<{
    title: string;
    description: string;
    href: string;
    pillar?: "privacy" | "asset" | "formation" | "compliance";
  }>
> = {
  privacy: [
    {
      title: "Learn About Anonymous LLCs",
      description:
        "Understand how nominee services and anonymous formation protect your identity on all public records.",
      href: "/anonymous-llc",
      pillar: "privacy",
    },
    {
      title: "Explore Nominee Services",
      description:
        "Year-round nominees keep your name off every public filing — not just at formation.",
      href: "/nominee-services",
      pillar: "privacy",
    },
    {
      title: "See All Package Options",
      description:
        "Compare Gold, Silver, and Bronze packages across states to find your best fit.",
      href: "/packages",
      pillar: "formation",
    },
  ],
  asset: [
    {
      title: "Charging Order Protection",
      description:
        "Learn how LLCs shield your assets from personal creditors and lawsuits.",
      href: "/charging-order-protection",
      pillar: "asset",
    },
    {
      title: "Explore Privacy Features",
      description:
        "Combine asset protection with anonymous formation for maximum security.",
      href: "/privacy",
      pillar: "privacy",
    },
    {
      title: "See All Package Options",
      description: "Compare Gold, Silver, and Bronze packages across states.",
      href: "/packages",
      pillar: "formation",
    },
  ],
  formation: [
    {
      title: "Wyoming LLC Formation",
      description:
        "Learn why Wyoming is the top choice for LLC formation with low fees and strong protections.",
      href: "/wyoming-llc",
      pillar: "formation",
    },
    {
      title: "Nevada LLC Formation",
      description:
        "Explore Nevada formation with our in-state presence and same-day filing capability.",
      href: "/nevada-llc",
      pillar: "formation",
    },
    {
      title: "See All Package Options",
      description:
        "Compare Gold, Silver, and Bronze packages across states to find your best fit.",
      href: "/packages",
      pillar: "formation",
    },
  ],
  compliance: [
    {
      title: "Annual Report Filing",
      description:
        "Stay compliant with state-required annual reports — we handle the filing.",
      href: "/annual-reports",
      pillar: "compliance",
    },
    {
      title: "Registered Agent Service",
      description:
        "Professional registered agent in your formation state — included in every package.",
      href: "/registered-agent",
      pillar: "compliance",
    },
    {
      title: "See All Package Options",
      description: "Compare Gold, Silver, and Bronze packages across states.",
      href: "/packages",
      pillar: "formation",
    },
  ],
};

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
interface ComparisonPageTemplateProps {
  comparison: ComparisonPage;
}

export function ComparisonPageTemplate({
  comparison,
}: ComparisonPageTemplateProps) {
  const dualPackages = buildDualPackageItems(comparison.relatedPackages);

  // Set page title
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      comparison.seoTitle ?? `${comparison.title} | Incorporate123`;
    return () => {
      document.title = previousTitle;
    };
  }, [comparison.seoTitle, comparison.title]);

  // Build breadcrumb trail
  const parent =
    comparison.breadcrumbParent ?? pillarBreadcrumbDefaults[comparison.pillar];
  const breadcrumbs = [
    { label: "Home", href: "/" },
    parent,
    { label: comparison.title, href: `/${comparison.slug}` },
  ];

  const tableColumns = comparison.columns.map((col) => ({
    id: col.id,
    title: col.title,
    subtitle: col.subtitle,
    badge: col.badge,
  }));

  const tableRows = comparison.rows.map((row) => ({
    label: row.label,
    tooltip: row.tooltip,
    values: row.values,
  }));

  const highlightColumn = comparison.columns.find((c) => c.badge)?.id;
  const crossPillar = crossPillarConfig[comparison.pillar];
  const suggestions = whereToGoSuggestions[comparison.pillar] ?? [];

  // Schema — FAQPage + BreadcrumbList
  const faqPageSchema =
    comparison.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: comparison.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      item: `https://incorporate123.com${b.href}`,
    })),
  };

  const decisionOptions = [
    {
      title: comparison.decisionGuide.chooseA.title,
      description: `Why ${comparison.columns[0]?.title ?? "Option A"} might be your best choice.`,
      criteria: comparison.decisionGuide.chooseA.reasons,
    },
    {
      title: comparison.decisionGuide.chooseB.title,
      description: `Why ${comparison.columns[1]?.title ?? "Option B"} might be your best choice.`,
      criteria: comparison.decisionGuide.chooseB.reasons,
    },
  ];

  const identicalOption = {
    title: "What's Identical",
    description: "Features that are the same regardless of which you choose.",
    criteria: comparison.decisionGuide.identical,
  };

  const consultationCTA = {
    label: "Not sure yet? Schedule a free consultation",
    href: "/contact",
    phone: "1-800-553-0615",
  };

  return (
    <ComparisonLayout
      title={comparison.title}
      description={comparison.description}
      pillar={comparison.pillar}
      customHero={
        <ComparisonHero
          pillar={comparison.pillar}
          title={comparison.title}
          description={comparison.description}
          verdict={comparison.verdict}
          breadcrumbs={breadcrumbs}
        />
      }
    >
      {/* Schema markup */}
      {faqPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="space-y-16">
        {comparison.disclaimer && (
          <Alert
            variant="warning"
            title="Not Legal or Tax Advice"
            description={comparison.disclaimer}
          />
        )}

        <section>
          <ComparisonTable
            columns={tableColumns}
            rows={tableRows}
            highlightColumn={highlightColumn}
          />
        </section>

        <section className="text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <WinnerIndicator type="winner">
              {comparison.verdict.winner} is the recommended choice for most
              clients
            </WinnerIndicator>
            <p className="text-body text-muted max-w-narrow mx-auto">
              {comparison.verdict.summary}
            </p>
          </div>
        </section>

        {dualPackages && (
          <section>
            <h2 className="text-heading font-display font-semibold text-foreground mb-2">
              Ready to Get Started?
            </h2>
            <p className="text-body text-muted mb-6">
              All-inclusive packages with everything you need — no hidden fees.
            </p>
            <DualPackageCTA
              packages={dualPackages}
              consultationCTA={consultationCTA}
            />
          </section>
        )}

        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-6">
            How to Decide
          </h2>
          <DecisionGuideBlocks
            options={[...decisionOptions, identicalOption]}
          />
        </section>

        {crossPillar && (
          <section>
            <CrossPillarCTA
              fromPillar={comparison.pillar}
              toPillar={crossPillar.toPillar}
              heading={crossPillar.heading}
              description={crossPillar.description}
              href={crossPillar.href}
            />
          </section>
        )}

        {comparison.faqs.length > 0 && (
          <section>
            <h2 className="text-heading font-display font-semibold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" variant="default">
              {comparison.faqs.map((faq) => (
                <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
                  <p>{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {dualPackages && (
          <section>
            <h2 className="text-heading font-display font-semibold text-foreground mb-2">
              Start Your Formation Today
            </h2>
            <p className="text-body text-muted mb-6">
              Choose your package and get started in minutes.
            </p>
            <DualPackageCTA
              packages={dualPackages}
              consultationCTA={consultationCTA}
            />
          </section>
        )}

        {suggestions.length > 0 && (
          <WhereToGoNext suggestions={suggestions} maxItems={3} />
        )}
      </div>
    </ComparisonLayout>
  );
}

ComparisonPageTemplate.displayName = "ComparisonPageTemplate";
