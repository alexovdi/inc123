import { PillarLayout } from "@/design-system/layouts/PillarLayout";
import {
  PillarHero,
  ProgressiveDisclosure,
  Card,
  ClusterGrid,
  ComparisonCards,
  DualPackageCTA,
  CrossPillarCTA,
  Accordion,
  AccordionItem,
  WhereToGoNext,
  ContentSidebar,
} from "@/design-system/components";
import { Icon } from "@/design-system/primitives";
import { pillars } from "@/data/pillars";
import { packages } from "@/data/packages";
import { faqItems } from "@/data/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Compliance — Registered Agent, Annual Reports & Corporate Minutes | Incorporate123",
  description:
    "Keep your LLC or Corporation in good standing with year-round registered agent service, annual report filing, corporate minutes maintenance, and virtual office. Full compliance support from $325/year.",
};

const pillar = pillars[3]; // compliance
const wyGold = packages.find((p) => p.id === "wyoming-gold")!;
const wySilver = packages.find((p) => p.id === "wyoming-silver")!;
const complianceFaqs = faqItems.filter((f) => f.category === "compliance");

export default function CompliancePillarPage() {
  return (
    <PillarLayout
      pillar="compliance"
      title={pillar.tagline}
      description={pillar.description}
      customHero={
        <PillarHero
          pillar="compliance"
          eyebrow="Compliance"
          headline={pillar.tagline}
          description={pillar.description}
          primaryCTA={{
            label: "Compare Compliance Packages",
            href: "/compare-packages",
          }}
          secondaryCTA={{
            label: "View Packages",
            href: "#packages",
          }}
          trustSnippet="Full corporate minute maintenance included — not just a mailbox"
        />
      }
      sidebar={
        <ContentSidebar
          variant="pillar"
          packageShortcut={{
            name: "Wyoming Gold LLC",
            price: `$${wyGold.prices.llc.formation.toLocaleString()}`,
            period: "one-time",
            href: "/packages/wyoming-gold",
            badge: "Most Popular",
          }}
          relatedPages={pillar.clusters.map((c) => ({
            title: c.title,
            href: c.href,
          }))}
          crossPillarLink={{
            pillar: "formation",
            title: "Also Relevant: Company Formation",
            href: "/formation",
          }}
          phoneNumber="(775) 313-4155"
        />
      }
    >
      <div className="space-y-16">
        {/* ------------------------------------------------
            Section 1: What is Business Compliance?
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-6">
            What is Business Compliance?
          </h2>
          <ProgressiveDisclosure
            sections={[
              {
                id: "what-is-compliance",
                title: "Understanding Business Compliance",
                summary:
                  "Business compliance means meeting all the ongoing legal requirements to keep your LLC or Corporation in good standing with the state. This includes annual report filing, registered agent service, maintaining corporate minutes, and staying current with state fees. Falling behind on compliance can result in penalties, late fees, or dissolution of your entity.",
                content: (
                  <div className="space-y-4 text-body text-muted">
                    <p>
                      After your entity is formed, the state requires ongoing
                      maintenance to keep it active. Every state has different
                      requirements, but the core obligations include: maintaining
                      a registered agent, filing annual reports (Wyoming) or
                      annual lists (Nevada), and keeping corporate records
                      up to date.
                    </p>
                    <p>
                      Many business owners treat compliance as an afterthought —
                      until they miss a deadline. Late annual reports can result
                      in penalty fees, loss of good standing status, and
                      eventually administrative dissolution. A dissolved entity
                      loses its liability protection, leaving your personal
                      assets exposed.
                    </p>
                    <p>
                      Corporate minutes are another critical compliance element.
                      Courts may &ldquo;pierce the corporate veil&rdquo; — hold
                      you personally liable for business debts — if you
                      don&apos;t maintain proper records of business decisions.
                      Professional minute book maintenance ensures your records
                      are always current.
                    </p>
                    <p>
                      Our compliance services handle all of this proactively. We
                      track deadlines, prepare filings, maintain your minute
                      book, and ensure your entity stays in good standing year
                      after year. You focus on running your business — we handle
                      the paperwork.
                    </p>
                  </div>
                ),
              },
            ]}
          />
          <div className="mt-4">
            <a
              href="/compliance/registered-agent"
              className="inline-flex items-center gap-1.5 text-body-sm font-medium text-pillar-compliance hover:text-pillar-compliance/80 transition-colors"
            >
              Learn about Registered Agent Service
              <Icon name="ArrowRight" size="sm" />
            </a>
          </div>
        </section>

        {/* ------------------------------------------------
            Section 2: Why Compliance Matters
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-6">
            Why Compliance Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              pillar="compliance"
              variant="elevated"
              title="Protect Your Liability Shield"
              description="An LLC or Corporation only protects your personal assets if it's properly maintained. Missing filings or lacking corporate minutes gives courts grounds to pierce the corporate veil."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon
                  name="ShieldCheck"
                  size="sm"
                  className="text-pillar-compliance"
                />
                <span className="text-caption text-muted">
                  Good standing = liability protection
                </span>
              </div>
            </Card>
            <Card
              pillar="compliance"
              variant="elevated"
              title="Avoid Penalties & Dissolution"
              description="States impose late fees, penalties, and can administratively dissolve entities that don't file required reports. Reinstatement is costly and may expose gaps in your protection."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon
                  name="TriangleAlert"
                  size="sm"
                  className="text-pillar-compliance"
                />
                <span className="text-caption text-muted">
                  Prevention is always cheaper than reinstatement
                </span>
              </div>
            </Card>
            <Card
              pillar="compliance"
              variant="elevated"
              title="Professional Record Keeping"
              description="Corporate minutes document key business decisions. Professional maintenance ensures your records meet legal standards and support your entity's separate legal identity."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon
                  name="FileText"
                  size="sm"
                  className="text-pillar-compliance"
                />
                <span className="text-caption text-muted">
                  Proper records prevent veil-piercing
                </span>
              </div>
            </Card>
            <Card
              pillar="compliance"
              variant="elevated"
              title="Multi-State Requirements"
              description="If your entity operates in a state other than where it was formed, you need foreign registration. We handle the process and ongoing compliance for both states."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon name="Map" size="sm" className="text-pillar-compliance" />
                <span className="text-caption text-muted">
                  Home state + operating state compliance
                </span>
              </div>
            </Card>
          </div>
        </section>

        {/* ------------------------------------------------
            Section 3: Compliance Services
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Our Compliance Services
          </h2>
          <p className="text-body text-muted mb-6">
            Everything you need to keep your entity in good standing — included
            in Silver and Gold packages, or available as standalone services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillar.services.map((service, i) => (
              <Card
                key={i}
                pillar="compliance"
                variant="elevated"
                layout="compact"
                title={service}
                description={complianceServiceDescriptions[i]}
              />
            ))}
          </div>
        </section>

        {/* ------------------------------------------------
            Section 4: Cluster Navigation Grid
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Explore Compliance Topics
          </h2>
          <p className="text-body text-muted mb-6">
            Detailed guides on every compliance service. Understand what&apos;s
            required and how we handle it for you.
          </p>
          <ClusterGrid
            clusters={pillar.clusters.map((c) => ({
              title: c.title,
              href: c.href,
              description: c.description ?? "",
              pillar: "compliance" as const,
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
            Understand what each package tier includes for ongoing compliance.
          </p>
          <ComparisonCards
            comparisons={[
              {
                title: "Gold vs Silver Package Comparison",
                description:
                  "Compare compliance features across Gold, Silver, and Bronze tiers. See exactly what's included in each package level.",
                href: "/compare-packages",
              },
              {
                title: "Wyoming vs Nevada Annual Costs",
                description:
                  "Compare annual state fees, report requirements, and total renewal costs for Wyoming and Nevada entities.",
                href: "/wyoming-vs-nevada-llc",
              },
            ]}
          />
        </section>

        {/* ------------------------------------------------
            Section 6: Package CTA Section
            ------------------------------------------------ */}
        <section id="packages">
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Compliance Packages — Stay in Good Standing
          </h2>
          <p className="text-body text-muted mb-6">
            Every Silver and Gold package includes registered agent, annual
            report filing, and corporate minutes. Gold adds privacy features
            with year-round nominees and offshore records.
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
                href: "/packages/wyoming-gold",
              },
              {
                name: wySilver.name,
                price: `$${wySilver.prices.llc.formation.toLocaleString()}`,
                period: "one-time",
                description: wySilver.description,
                highlighted: false,
                href: "/packages/wyoming-silver",
              },
            ]}
            consultationCTA={{
              label: "Questions about compliance? Schedule a free consultation",
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
            fromPillar="compliance"
            toPillar="formation"
            heading="Need to Form a New Entity? We Handle That Too."
            description="Whether you're starting fresh or adding entities to an existing structure, our formation services include the same compliance support. Form with confidence knowing ongoing maintenance is built in."
            href="/formation"
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
            {complianceFaqs.map((faq) => (
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
              title: "Compare Package Tiers",
              description:
                "See what's included in Gold, Silver, and Bronze packages side by side.",
              href: "/compare-packages",
              pillar: "compliance",
            },
            {
              title: "Start a New Company",
              description:
                "Wyoming and Nevada formation with compliance built in from day one.",
              href: "/formation",
              pillar: "formation",
            },
            {
              title: "Explore Business Privacy",
              description:
                "Add anonymous ownership and nominee services to your compliance structure.",
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
const complianceServiceDescriptions = [
  "Professional registered agent service in Wyoming and Nevada. We receive legal documents and state correspondence on behalf of your entity — required by law.",
  "Timely preparation and filing of state annual reports. We track deadlines, prepare filings, and ensure your entity stays in good standing.",
  "Professional minute book preparation and maintenance. Proper corporate minutes help preserve your limited liability protection.",
  "Professional business address in Reno, NV with mail forwarding. Separate from registered agent address — used for business correspondence.",
  "Register your entity to do business in another state. Required if your LLC operates outside its formation state.",
];
