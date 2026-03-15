import { notFound } from "next/navigation";
import { ClusterLayout } from "@/design-system/layouts/ClusterLayout";
import {
  ClusterHero,
  LongFormContent,
  ContentSidebar,
  DualPackageCTA,
  CrossPillarCTA,
  Accordion,
  AccordionItem,
  WhereToGoNext,
} from "@/design-system/components";
import { clusterPages } from "@/data/clusters";
import { packages } from "@/data/packages";
import type { Metadata } from "next";

/* ------------------------------------------------
   Static params — 5 compliance cluster slugs
   ------------------------------------------------ */
const PILLAR = "compliance" as const;
const PILLAR_LABEL = "Compliance";
const PILLAR_HREF = "/compliance";

const slugs = [
  "registered-agent",
  "annual-reports",
  "corporate-minutes",
  "virtual-office",
  "foreign-registration",
  "second-tier-state-filings",
  "shares-corporate-records",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

/* ------------------------------------------------
   Metadata
   ------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cluster = clusterPages.find(
    (c) => c.slug === slug && c.pillar === PILLAR
  );
  if (!cluster) return {};
  return {
    title: `${cluster.title} — ${PILLAR_LABEL} | Incorporate123`,
    description: cluster.description,
  };
}

/* ------------------------------------------------
   Page Component
   ------------------------------------------------ */
export default async function ComplianceClusterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cluster = clusterPages.find(
    (c) => c.slug === slug && c.pillar === PILLAR
  );

  if (!cluster) notFound();

  /* Resolve related packages */
  const relatedPkgs = cluster.relatedPackages
    .map((id) => packages.find((p) => p.id === id))
    .filter(Boolean);

  const goldPackages = relatedPkgs.filter((p) => p!.tier === "gold");

  /* Build dual package CTA items (take first 2 gold packages) */
  const dualPkgs = goldPackages.slice(0, 2);

  /* Build sidebar related pages from sidebarLinks */
  const sidebarRelatedPages = cluster.sidebarLinks.map((link) => ({
    title: link.title,
    href: link.href,
  }));

  /* Build "where to go next" suggestions from sidebar links + pillar */
  const suggestions = [
    ...cluster.sidebarLinks.slice(0, 3).map((link) => ({
      title: link.title,
      description: `Learn more about ${link.title.toLowerCase()} and how it keeps your entity in good standing.`,
      href: link.href,
      pillar: PILLAR,
    })),
  ];

  return (
    <ClusterLayout
      pillar={PILLAR}
      pillarLabel={PILLAR_LABEL}
      pillarHref={PILLAR_HREF}
      title={cluster.title}
      description={cluster.description}
      customHero={
        <ClusterHero
          pillar={PILLAR}
          pillarLabel={PILLAR_LABEL}
          pillarHref={PILLAR_HREF}
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
                  name: goldPackages[0].name,
                  price: `$${goldPackages[0].prices.llc.formation.toLocaleString()}`,
                  period: "one-time",
                  href: `/packages/${goldPackages[0].id}`,
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
          phoneNumber="(775) 313-4155"
        />
      }
    >
      <div className="space-y-16">
        {/* ------------------------------------------------
            Long-form content sections
            ------------------------------------------------ */}
        <LongFormContent sections={cluster.sections} />

        {/* ------------------------------------------------
            Dual Package CTA
            ------------------------------------------------ */}
        {dualPkgs.length >= 2 && (
          <section>
            <h2 className="text-heading font-display font-semibold text-foreground mb-2">
              Ready to Get Started?
            </h2>
            <p className="text-body text-muted mb-6">
              All-inclusive packages with everything you need — no hidden fees.
            </p>
            <DualPackageCTA
              packages={[
                {
                  name: dualPkgs[0]!.name,
                  price: `$${dualPkgs[0]!.prices.llc.formation.toLocaleString()}`,
                  period: "one-time",
                  description: dualPkgs[0]!.description,
                  badge: dualPkgs[0]!.badge,
                  highlighted: true,
                  href: `/packages/${dualPkgs[0]!.id}`,
                },
                {
                  name: dualPkgs[1]!.name,
                  price: `$${dualPkgs[1]!.prices.llc.formation.toLocaleString()}`,
                  period: "one-time",
                  description: dualPkgs[1]!.description,
                  badge: dualPkgs[1]!.badge,
                  highlighted: true,
                  href: `/packages/${dualPkgs[1]!.id}`,
                },
              ]}
              consultationCTA={{
                label: "Not sure yet? Schedule a free consultation",
                href: "/contact",
                phone: "(775) 313-4155",
              }}
            />
          </section>
        )}

        {/* ------------------------------------------------
            Cross-Pillar CTA
            ------------------------------------------------ */}
        {cluster.crossPillarCTA && (
          <section>
            <CrossPillarCTA
              fromPillar={PILLAR}
              toPillar={cluster.crossPillarCTA.pillar}
              heading={cluster.crossPillarCTA.title}
              description={cluster.crossPillarCTA.description}
              href={cluster.crossPillarCTA.href}
            />
          </section>
        )}

        {/* ------------------------------------------------
            FAQ Accordion
            ------------------------------------------------ */}
        {cluster.faqs.length > 0 && (
          <section>
            <h2 className="text-heading font-display font-semibold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="multiple" variant="default">
              {cluster.faqs.map((faq) => (
                <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
                  <p>{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* ------------------------------------------------
            Where to Go Next
            ------------------------------------------------ */}
        {suggestions.length > 0 && (
          <WhereToGoNext suggestions={suggestions} maxItems={3} />
        )}
      </div>
    </ClusterLayout>
  );
}
