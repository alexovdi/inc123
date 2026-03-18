import { PillarLayout } from "@/design-system/layouts/PillarLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { Card } from "@/design-system/components/Card";
import { ClusterGrid } from "@/design-system/components/ClusterGrid";
import { ComparisonCards } from "@/design-system/components/ComparisonCards";
import { ContentSidebar } from "@/design-system/components/ContentSidebar";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { DualPackageCTA } from "@/design-system/components/DualPackageCTA";
import { PillarHero } from "@/design-system/components/PillarHero";
import { ProgressiveDisclosure } from "@/design-system/components/ProgressiveDisclosure";
import { WhereToGoNext } from "@/design-system/components/WhereToGoNext";
import { Icon } from "@/design-system/primitives/Icon";
import { pillars } from "@/data/pillars";
import { packages } from "@/data/packages";
import { faqItems } from "@/data/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Asset Protection — Charging Order Protection, Holding Structures & Multi-Entity Strategies | Incorporate123",
  description:
    "Protect your assets with Wyoming and Nevada LLCs. Charging order protection, holding structures, and multi-entity strategies for individuals with $500K+ in assets. 25 years of expertise.",
  alternates: { canonical: "https://incorporate123.co/asset-protection" },
};

const pillar = pillars[1]; // asset
const wyGold = packages.find((p) => p.id === "wyoming-gold")!;
const nvGold = packages.find((p) => p.id === "nevada-gold")!;
const assetFaqs = faqItems.filter((f) => f.category === "asset");

export default function AssetProtectionPillarPage() {
  return (
    <PillarLayout
      pillar="asset"
      title={pillar.tagline}
      description={pillar.description}
      customHero={
        <PillarHero
          pillar="asset"
          eyebrow="Asset Protection"
          headline={pillar.tagline}
          description={pillar.description}
          primaryCTA={{
            label: "Explore Protection Packages",
            href: "/compare-packages",
          }}
          secondaryCTA={{
            label: "View Gold Packages",
            href: "#packages",
          }}
          trustSnippet={pillar.trustElement}
        />
      }
      sidebar={
        <ContentSidebar
          variant="pillar"
          packageShortcut={{
            name: "Gold Package",
            price: `$${wyGold.prices.llc.formation.toLocaleString()}`,
            period: "one-time",
            href: "/gold?state=wyoming",
            badge: "Most Popular",
          }}
          relatedPages={pillar.clusters.map((c) => ({
            title: c.title,
            href: c.href,
          }))}
          crossPillarLink={{
            pillar: "privacy",
            title: "Also Relevant: Business Privacy",
            href: "/privacy",
          }}
          phoneNumber="(775) 313-4155"
        />
      }
    >
      <div className="space-y-16">
        {/* ------------------------------------------------
            Section 1: What is Asset Protection?
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-6">
            What is Asset Protection?
          </h2>
          <ProgressiveDisclosure
            sections={[
              {
                id: "what-is-asset-protection",
                title: "Understanding Asset Protection",
                summary:
                  "Asset protection is the legal strategy of structuring your business entities and personal holdings to shield them from lawsuits, creditors, and judgments. The right LLC structure — formed in a state with strong charging order protection — creates a legal barrier between your assets and anyone trying to take them.",
                content: (
                  <div className="space-y-4 text-body text-muted">
                    <p>
                      When someone wins a lawsuit against you personally, they
                      can typically go after your personal assets: bank
                      accounts, real estate, investments. But assets held inside
                      a properly structured LLC are protected by the
                      entity&apos;s legal separation from you as an individual.
                    </p>
                    <p>
                      The strength of that protection depends heavily on which
                      state you form in. Wyoming offers the strongest charging
                      order protection in the country — meaning a creditor who
                      wins a judgment against you personally can only receive a
                      &ldquo;charging order&rdquo; (essentially a lien on
                      distributions from the LLC). They cannot seize LLC assets,
                      force distributions, or take over management.
                    </p>
                    <p>
                      Effective asset protection goes beyond a single LLC. Many
                      clients benefit from multi-entity strategies: a holding
                      LLC that owns operating LLCs, separating real estate from
                      business operations, and combining privacy structures with
                      asset protection for maximum security.
                    </p>
                    <p>
                      The critical rule: asset protection must be set up BEFORE
                      you need it. Transferring assets after a lawsuit is filed
                      can be considered fraudulent conveyance. Planning ahead is
                      always more effective and legally defensible.
                    </p>
                  </div>
                ),
              },
            ]}
          />
          <div className="mt-4">
            <a
              href="/charging-order-protection"
              className="inline-flex items-center gap-1.5 text-body-sm font-medium text-pillar-asset hover:text-pillar-asset/80 transition-colors"
            >
              Learn about Charging Order Protection
              <Icon name="ArrowRight" size="sm" />
            </a>
          </div>
        </section>

        {/* ------------------------------------------------
            Section 2: Why Asset Protection Matters
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-6">
            Why Asset Protection Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              pillar="asset"
              variant="elevated"
              title="Shield Against Lawsuits"
              description="Without proper structure, a single lawsuit can reach everything you own. Asset protection creates legal barriers that keep personal and business assets separate and secure."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon name="Shield" size="sm" className="text-pillar-asset" />
                <span className="text-caption text-muted">
                  Your first line of defense
                </span>
              </div>
            </Card>
            <Card
              pillar="asset"
              variant="elevated"
              title="Charging Order Protection"
              description="Wyoming's charging order statutes ensure creditors can only place a lien on distributions — they cannot seize LLC assets, force distributions, or take over management."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon name="Lock" size="sm" className="text-pillar-asset" />
                <span className="text-caption text-muted">
                  The gold standard in domestic protection
                </span>
              </div>
            </Card>
            <Card
              pillar="asset"
              variant="elevated"
              title="Separate Business & Personal"
              description="Holding structures and multi-entity strategies isolate risk. If one entity faces a claim, your other assets remain untouched behind separate legal barriers."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon name="Layers" size="sm" className="text-pillar-asset" />
                <span className="text-caption text-muted">
                  Risk compartmentalization
                </span>
              </div>
            </Card>
            <Card
              pillar="asset"
              variant="elevated"
              title="Protect Real Estate & Investments"
              description="Rental properties and investment portfolios are high-value targets. Separate LLCs for each property or investment class prevent a single claim from reaching everything."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon
                  name="Building2"
                  size="sm"
                  className="text-pillar-asset"
                />
                <span className="text-caption text-muted">
                  Per-property isolation
                </span>
              </div>
            </Card>
          </div>
        </section>

        {/* ------------------------------------------------
            Section 3: How We Protect Your Assets (Services)
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            How Incorporate123 Protects Your Assets
          </h2>
          <p className="text-body text-muted mb-6">
            Proven strategies backed by 25 years of experience forming
            protective structures in Wyoming and Nevada.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillar.services.map((service, i) => (
              <Card
                key={i}
                pillar="asset"
                variant="elevated"
                layout="compact"
                title={service}
                description={assetServiceDescriptions[i]}
              />
            ))}
          </div>

          {/* Differentiator Callout */}
          <aside className="mt-8 rounded-card border-t-4 border-t-pillar-asset bg-pillar-asset/5 p-6">
            <p className="text-body font-medium text-foreground">
              &ldquo;Wyoming&rsquo;s charging order protection is the strongest
              in the country &mdash; creditors cannot seize LLC assets, force
              distributions, or take over management.&rdquo;
            </p>
            <p className="mt-2 text-body-sm text-muted">
              Unlike states where courts can force LLC dissolution to satisfy a
              judgment, Wyoming statute explicitly limits creditor remedies to a
              charging order. Combined with our multi-entity strategies, your
              assets stay compartmentalized and protected.
            </p>
          </aside>
        </section>

        {/* ------------------------------------------------
            Section 4: Cluster Navigation Grid
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Explore Asset Protection Topics
          </h2>
          <p className="text-body text-muted mb-6">
            In-depth guides on every aspect of asset protection. Each covers a
            specific strategy, state, or structure type.
          </p>
          <ClusterGrid
            clusters={pillar.clusters.map((c) => ({
              title: c.title,
              href: c.href,
              description: c.description ?? "",
              pillar: "asset" as const,
            }))}
            columns={3}
          />
        </section>

        {/* ------------------------------------------------
            Section 5: Compare Your Options
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Compare Your Options
          </h2>
          <p className="text-body text-muted mb-6">
            Not sure which state or structure is right for your assets? These
            guides break it down.
          </p>
          <ComparisonCards
            comparisons={[
              {
                title: "Best State for Asset Protection",
                description:
                  "A ranked comparison of Wyoming, Nevada, and other states for asset protection. Which state offers the strongest charging order protections?",
                href: "/best-state-for-asset-protection",
              },
              {
                title: "Wyoming vs Nevada for Asset Protection",
                description:
                  "Head-to-head: Wyoming and Nevada's asset protection statutes, charging order laws, and annual costs compared side by side.",
                href: "/wyoming-vs-nevada-asset-protection",
              },
            ]}
          />
        </section>

        {/* ------------------------------------------------
            Section 6: Package CTA Section
            ------------------------------------------------ */}
        <section id="packages">
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Asset Protection Packages — All-Inclusive
          </h2>
          <p className="text-body text-muted mb-6">
            Every Gold package includes year-round nominee services, offshore
            records, registered agent, EIN filing, operating agreement, and
            state fees. The strongest domestic protection structure available.
          </p>
          <DualPackageCTA
            packages={[
              {
                name: wyGold.name,
                price: `$${wyGold.prices.llc.formation.toLocaleString()}`,
                period: "one-time",
                description: wyGold.description,
                badge: wyGold.badge,
                highlighted: true,
                href: "/gold?state=wyoming",
              },
              {
                name: nvGold.name,
                price: `$${nvGold.prices.llc.formation.toLocaleString()}`,
                period: "one-time",
                description: nvGold.description,
                badge: nvGold.badge,
                highlighted: true,
                href: "/gold?state=nevada",
              },
            ]}
            consultationCTA={{
              label: "Not sure yet? Schedule a free consultation",
              href: "/contact",
              phone: "(775) 313-4155",
            }}
          />
        </section>

        {/* ------------------------------------------------
            Section 7: Cross-Pillar CTA
            ------------------------------------------------ */}
        <section>
          <CrossPillarCTA
            fromPillar="asset"
            toPillar="privacy"
            heading="Asset Protection Secures Your Wealth. Privacy Hides It."
            description="The strongest asset protection combines legal structure with anonymity. Anonymous LLCs and nominee services ensure potential claimants can't find your assets in the first place."
            href="/privacy"
          />
        </section>

        {/* ------------------------------------------------
            Section 8: FAQ Accordion
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" variant="default">
            {assetFaqs.map((faq) => (
              <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* ------------------------------------------------
            Section 9: Where to Go Next
            ------------------------------------------------ */}
        <WhereToGoNext
          suggestions={[
            {
              title: "Compare Asset Protection by State",
              description:
                "See how Wyoming and Nevada stack up for asset protection structures.",
              href: "/best-state-for-asset-protection",
              pillar: "asset",
            },
            {
              title: "See Gold Package Details",
              description:
                "Full breakdown of what's included in Wyoming and Nevada Gold packages.",
              href: "/gold?state=wyoming",
              pillar: "asset",
            },
            {
              title: "Explore Business Privacy",
              description:
                "Anonymous LLCs, nominee services, and offshore record storage.",
              href: "/privacy",
              pillar: "privacy",
            },
          ]}
        />
      </div>
    </PillarLayout>
  );
}

/* ------------------------------------------------
   Service descriptions (mapped to pillar.services)
   ------------------------------------------------ */
const assetServiceDescriptions = [
  "Wyoming's charging order protection prevents creditors from seizing LLC assets or forcing distributions. The strongest domestic protection available.",
  "Wyoming's business-friendly statutes and strong charging order laws make it the top choice for asset protection structures.",
  "Nevada's dedicated business court and close-knit statutes provide an alternative path to strong asset protection.",
  "Separate investment assets from operational risk with a dedicated holding LLC that owns your operating entities.",
  "Protect rental properties and real estate investments with per-property LLC isolation strategies.",
];
