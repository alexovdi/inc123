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
    "Business Privacy — Anonymous LLCs, Nominee Services & Private Formation | Incorporate123",
  description:
    "Protect your business identity with year-round nominee services, offshore records, and anonymous LLC formation in Wyoming and Nevada. All-inclusive Gold packages from $1,275. 25 years of privacy expertise.",
  alternates: { canonical: "https://incorporate123.co/privacy" },
};

const pillar = pillars[0]; // privacy
const wyGold = packages.find((p) => p.id === "wyoming-gold")!;
const nvGold = packages.find((p) => p.id === "nevada-gold")!;
const privacyFaqs = faqItems.filter((f) => f.category === "privacy");

export default function PrivacyPillarPage() {
  return (
    <PillarLayout
      pillar="privacy"
      title={pillar.tagline}
      description={pillar.description}
      customHero={
        <PillarHero
          pillar="privacy"
          eyebrow="Business Privacy"
          headline={pillar.tagline}
          description={pillar.description}
          primaryCTA={{
            label: "Explore Privacy Packages",
            href: "/compare-packages",
          }}
          secondaryCTA={{
            label: "View Gold Packages",
            href: "#packages",
          }}
          trustSnippet={pillar.trustElement}
          safetyNet="Have questions? Call (775) 313-4155"
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
            pillar: "asset",
            title: "Also Relevant: Asset Protection",
            href: "/asset-protection",
          }}
          phoneNumber="(775) 313-4155"
        />
      }
    >
      <div className="space-y-16">
        {/* ------------------------------------------------
            Section 1: What is Business Privacy?
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-6">
            What is Business Privacy?
          </h2>
          <ProgressiveDisclosure
            sections={[
              {
                id: "what-is-privacy",
                title: "Understanding Business Privacy",
                summary:
                  "Business privacy means keeping your name off public records associated with your LLC or Corporation. Most states require disclosure of members, managers, or officers — but Wyoming and Nevada offer structures that don't. With the right formation strategy and nominee services, your personal information never appears on any publicly searchable filing.",
                content: (
                  <div className="space-y-4 text-body text-muted">
                    <p>
                      When you form an LLC or corporation, the state requires
                      certain information to be filed publicly. This typically
                      includes the names and addresses of members, managers,
                      officers, and directors. These filings — Articles of
                      Organization, annual reports, and registered agent records
                      — are searchable by anyone.
                    </p>
                    <p>
                      Business privacy addresses this exposure through two
                      mechanisms: forming in a state that minimizes disclosure
                      requirements (Wyoming or Nevada), and using nominee
                      officers and directors whose names appear on public
                      records instead of yours.
                    </p>
                    <p>
                      The critical difference is between formation-day privacy
                      and year-round privacy. Many providers offer a
                      &ldquo;nominee for a day&rdquo; — listing a nominee only
                      at the moment of filing, then removing them. This means
                      your name appears on every subsequent annual report and
                      amendment. Year-round nominee services, like those
                      included in every Incorporate123 Gold package, keep the
                      nominee listed on ALL filings throughout the year.
                    </p>
                    <p>
                      Combined with offshore record storage — where your
                      operating agreement, meeting minutes, and membership
                      certificates are maintained outside U.S. jurisdiction —
                      this creates a comprehensive privacy structure that no
                      budget provider can match.
                    </p>
                  </div>
                ),
              },
            ]}
          />
          <div className="mt-4">
            <a
              href="/anonymous-llc"
              className="inline-flex items-center gap-1.5 text-body-sm font-medium text-pillar-privacy hover:text-pillar-privacy/80 transition-colors"
            >
              Learn about Anonymous LLCs
              <Icon name="ArrowRight" size="sm" />
            </a>
          </div>
        </section>

        {/* ------------------------------------------------
            Section 2: Why Business Privacy Matters
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-6">
            Why Business Privacy Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              pillar="privacy"
              variant="elevated"
              title="Protect Against Lawsuits"
              description="When your name appears on public LLC records, anyone — including litigious parties — can find your business assets. Anonymity is your first line of defense."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon name="Shield" size="sm" className="text-pillar-privacy" />
                <span className="text-caption text-muted">
                  Asset visibility invites targeting
                </span>
              </div>
            </Card>
            <Card
              pillar="privacy"
              variant="elevated"
              title="Keep Competitors in the Dark"
              description="Competitors use public records to map your business holdings, identify your suppliers, and reverse-engineer your strategy. Privacy stops this at the source."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon name="Eye" size="sm" className="text-pillar-privacy" />
                <span className="text-caption text-muted">
                  Competitive intelligence starts with public filings
                </span>
              </div>
            </Card>
            <Card
              pillar="privacy"
              variant="elevated"
              title="Personal Safety"
              description="Public figures, high-net-worth individuals, and business owners in controversial industries use anonymous LLCs to keep their personal information out of searchable databases."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon name="Users" size="sm" className="text-pillar-privacy" />
                <span className="text-caption text-muted">
                  Your identity is your most valuable asset
                </span>
              </div>
            </Card>
            <Card
              pillar="privacy"
              variant="elevated"
              title="Data Broker Exposure"
              description="Public records scrapers and data brokers harvest business ownership information from state filings. Nominee services keep your name off the records they scrape."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon
                  name="TriangleAlert"
                  size="sm"
                  className="text-pillar-privacy"
                />
                <span className="text-caption text-muted">
                  Your information is only as private as your filings
                </span>
              </div>
            </Card>
          </div>
        </section>

        {/* ------------------------------------------------
            Section 3: How We Protect Your Privacy (Services)
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            How Incorporate123 Protects Your Privacy
          </h2>
          <p className="text-body text-muted mb-6">
            Services that no budget provider offers and most specialists charge
            extra for — included in every Gold package.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillar.services.map((service, i) => (
              <Card
                key={i}
                pillar="privacy"
                variant="elevated"
                layout="compact"
                title={service}
                description={serviceDescriptions[i]}
              />
            ))}
          </div>

          {/* Differentiator Callout */}
          <aside className="mt-8 rounded-card border-t-4 border-t-pillar-privacy bg-pillar-privacy/5 p-6">
            <p className="text-body font-medium text-foreground">
              &ldquo;Year-round nominees, not &lsquo;nominee for a day&rsquo;
              &mdash; your name never appears on any filing, at any time.&rdquo;
            </p>
            <p className="mt-2 text-body-sm text-muted">
              Most providers list a nominee only at formation, then remove them.
              Every Incorporate123 Gold package keeps nominees on{" "}
              <strong>all</strong> public filings, 365 days a year &mdash;
              formation, annual reports, and amendments.
            </p>
          </aside>
        </section>

        {/* ------------------------------------------------
            Section 4: Cluster Navigation Grid
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Explore Privacy Topics
          </h2>
          <p className="text-body text-muted mb-6">
            Deep-dive guides on every aspect of business privacy. Each covers a
            specific strategy, state, or service.
          </p>
          <ClusterGrid
            clusters={pillar.clusters.map((c) => ({
              title: c.title,
              href: c.href,
              description: c.description ?? "",
              pillar: "privacy" as const,
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
            Not sure which state is right for your privacy needs? These guides
            break it down.
          </p>
          <ComparisonCards
            comparisons={[
              {
                title: "Best State for Privacy",
                description:
                  "A ranked comparison of Wyoming, Nevada, and other states for business privacy. Which state offers the strongest anonymity protections?",
                href: "/best-state-for-privacy",
              },
              {
                title: "Wyoming vs Nevada for Privacy",
                description:
                  "Head-to-head: Wyoming and Nevada's privacy statutes, costs, nominee requirements, and annual obligations compared side by side.",
                href: "/wyoming-vs-nevada-privacy",
              },
            ]}
          />
        </section>

        {/* ------------------------------------------------
            Section 6: Package CTA Section
            ------------------------------------------------ */}
        <section id="packages">
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Privacy Packages — All-Inclusive, Nothing Hidden
          </h2>
          <p className="text-body text-muted mb-6">
            Every Gold package includes year-round nominee services, offshore
            nominees, offshore records custodian, registered agent, EIN filing,
            operating agreement, and state fees. No surprise add-ons.
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
            fromPillar="privacy"
            toPillar="asset"
            heading="Hiding Your Name Is Step One. Protecting Your Assets Is Step Two."
            description="Most privacy-focused business owners also need asset protection. Charging order protection, holding structures, and multi-entity strategies prevent creditors from reaching your assets — even if they find them."
            href="/asset-protection"
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
            {privacyFaqs.map((faq) => (
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
              title: "Compare Privacy by State",
              description:
                "See how Wyoming, Nevada, and other states stack up for business privacy protections.",
              href: "/best-state-for-privacy",
              pillar: "privacy",
            },
            {
              title: "See Gold Package Details",
              description:
                "Full breakdown of what's included in Gold packages across all states.",
              href: "/gold?state=wyoming",
              pillar: "privacy",
            },
            {
              title: "Explore Asset Protection",
              description:
                "Charging order protection, holding structures, and multi-entity strategies.",
              href: "/asset-protection",
              pillar: "asset",
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
const serviceDescriptions = [
  "Form an LLC where your name never appears on any publicly searchable state filing. The complete guide to anonymous ownership structures.",
  "Your nominee serves 365 days a year, every year. Not 'nominee for a day' at formation — continuous privacy protection on every public filing.",
  "Corporate records maintained by our offshore records custodian, outside U.S. jurisdiction. Not accessible through domestic subpoena processes.",
  "Privacy-first formation available in Wyoming, Nevada, California, and Florida with nominee structures and foreign registration.",
];
