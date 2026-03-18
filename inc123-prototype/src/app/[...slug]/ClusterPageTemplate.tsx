import { ClusterLayout } from "@/design-system/layouts/ClusterLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { ClusterHero } from "@/design-system/components/ClusterHero";
import { ContentSidebar } from "@/design-system/components/ContentSidebar";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { DualPackageCTA } from "@/design-system/components/DualPackageCTA";
import { LongFormContent } from "@/design-system/components/LongFormContent";
import { WhereToGoNext } from "@/design-system/components/WhereToGoNext";
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
          phoneNumber="(775) 313-4155"
        />
      }
    >
      <div className="space-y-16">
        <LongFormContent sections={cluster.sections} />

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
                phone: "(775) 313-4155",
              }}
            />
          </section>
        )}

        {cluster.crossPillarCTA && (
          <section>
            <CrossPillarCTA
              fromPillar={cluster.pillar}
              toPillar={cluster.crossPillarCTA.pillar}
              heading={cluster.crossPillarCTA.title}
              description={cluster.crossPillarCTA.description}
              href={cluster.crossPillarCTA.href}
            />
          </section>
        )}

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

        {suggestions.length > 0 && (
          <WhereToGoNext suggestions={suggestions} maxItems={3} />
        )}
      </div>
    </ClusterLayout>
  );
}

ClusterPageTemplate.displayName = "ClusterPageTemplate";
