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
    "Company Formation — Wyoming & Nevada LLC and Corporation Formation | Incorporate123",
  description:
    "Expert business formation in Wyoming and Nevada. All-inclusive pricing with registered agent, corporate minutes, and annual report filing. 25 years of experience. Packages from $875.",
};

const pillar = pillars[2]; // formation
const wyGold = packages.find((p) => p.id === "wyoming-gold")!;
const wySilver = packages.find((p) => p.id === "wyoming-silver")!;
const formationFaqs = faqItems.filter((f) => f.category === "formation");

export default function FormationPillarPage() {
  return (
    <PillarLayout
      pillar="formation"
      title={pillar.tagline}
      description={pillar.description}
      customHero={
        <PillarHero
          pillar="formation"
          eyebrow="Company Formation"
          headline={pillar.tagline}
          description={pillar.description}
          primaryCTA={{
            label: "Compare Formation Packages",
            href: "/compare-packages",
          }}
          secondaryCTA={{
            label: "View Packages",
            href: "#packages",
          }}
          trustSnippet="25 years forming Wyoming and Nevada entities — all-inclusive pricing"
        />
      }
      sidebar={
        <ContentSidebar
          variant="pillar"
          packageShortcut={{
            name: "Wyoming Gold LLC",
            price: `$${wyGold.prices.llc.formation.toLocaleString()}`,
            period: "one-time",
            href: "/wyoming-private-incorporation",
            badge: "Most Popular",
          }}
          relatedPages={pillar.clusters.map((c) => ({
            title: c.title,
            href: c.href,
          }))}
          crossPillarLink={{
            pillar: "compliance",
            title: "Also Relevant: Compliance",
            href: "/compliance",
          }}
          phoneNumber="(775) 313-4155"
        />
      }
    >
      <div className="space-y-16">
        {/* ------------------------------------------------
            Section 1: What is Company Formation?
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-6">
            What is Company Formation?
          </h2>
          <ProgressiveDisclosure
            sections={[
              {
                id: "what-is-formation",
                title: "Understanding Company Formation",
                summary:
                  "Company formation is the legal process of creating a new business entity — an LLC or Corporation — registered with a state. The right formation sets up your business for success with proper liability protection, tax advantages, and (with our Gold packages) built-in privacy from day one.",
                content: (
                  <div className="space-y-4 text-body text-muted">
                    <p>
                      Forming a business entity creates a legal separation
                      between you and your business. This separation — called
                      &ldquo;limited liability&rdquo; — means your personal
                      assets are generally protected from business debts and
                      lawsuits. It&apos;s the foundation of responsible business
                      ownership.
                    </p>
                    <p>
                      The formation process involves filing Articles of
                      Organization (for LLCs) or Articles of Incorporation
                      (for Corporations) with your chosen state, designating a
                      registered agent, and preparing governing documents like
                      an operating agreement or bylaws.
                    </p>
                    <p>
                      Where you form matters significantly. Wyoming and Nevada
                      are the two most business-friendly states in the U.S.,
                      offering no state income tax, strong liability protections,
                      low annual fees (Wyoming) or dedicated business courts
                      (Nevada), and privacy-friendly statutes.
                    </p>
                    <p>
                      Our all-inclusive packages handle every step: state filing
                      fees, registered agent, corporate minutes, annual reports,
                      and — for Gold packages — year-round nominees and offshore
                      record storage. No hidden fees, no surprise charges.
                    </p>
                  </div>
                ),
              },
            ]}
          />
          <div className="mt-4">
            <a
              href="/wyoming-llc"
              className="inline-flex items-center gap-1.5 text-body-sm font-medium text-pillar-formation hover:text-pillar-formation/80 transition-colors"
            >
              Learn about Wyoming LLC Formation
              <Icon name="ArrowRight" size="sm" />
            </a>
          </div>
        </section>

        {/* ------------------------------------------------
            Section 2: Why Choose Incorporate123
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-6">
            Why Choose Incorporate123 for Formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              pillar="formation"
              variant="elevated"
              title="Truly All-Inclusive Pricing"
              description="State filing fees, registered agent, corporate minutes, annual reports, certificate of good standing, and corporate seal — all included. No hidden fees, no surprise charges, no required upsells."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon
                  name="DollarSign"
                  size="sm"
                  className="text-pillar-formation"
                />
                <span className="text-caption text-muted">
                  What you see is what you pay
                </span>
              </div>
            </Card>
            <Card
              pillar="formation"
              variant="elevated"
              title="25 Years of Expertise"
              description="We've been forming Wyoming and Nevada entities since 2000. We know the nuances of each state's requirements, filing processes, and best practices that only come with decades of experience."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon
                  name="Award"
                  size="sm"
                  className="text-pillar-formation"
                />
                <span className="text-caption text-muted">
                  Established 2000 in Reno, NV
                </span>
              </div>
            </Card>
            <Card
              pillar="formation"
              variant="elevated"
              title="Privacy Built In"
              description="Gold packages include year-round nominee directors and officers, offshore record storage, and formation in privacy-friendly states. Your identity stays private from day one."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon
                  name="Shield"
                  size="sm"
                  className="text-pillar-formation"
                />
                <span className="text-caption text-muted">
                  Gold packages include full privacy suite
                </span>
              </div>
            </Card>
            <Card
              pillar="formation"
              variant="elevated"
              title="Ongoing Support, Not Just Filing"
              description="We don't just file your paperwork and disappear. Every package includes ongoing compliance support: registered agent, annual reports, and corporate minutes maintenance."
            >
              <div className="flex items-center gap-2 mt-1">
                <Icon
                  name="Headphones"
                  size="sm"
                  className="text-pillar-formation"
                />
                <span className="text-caption text-muted">
                  Year-round support included
                </span>
              </div>
            </Card>
          </div>
        </section>

        {/* ------------------------------------------------
            Section 3: Formation Services
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Formation Services
          </h2>
          <p className="text-body text-muted mb-6">
            Every entity type we form in Wyoming and Nevada — LLCs, Corporations,
            and pre-aged shelf companies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillar.services.map((service, i) => (
              <Card
                key={i}
                pillar="formation"
                variant="elevated"
                layout="compact"
                title={service}
                description={formationServiceDescriptions[i]}
              />
            ))}
          </div>
        </section>

        {/* ------------------------------------------------
            Section 4: Cluster Navigation Grid
            ------------------------------------------------ */}
        <section>
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Explore Formation Topics
          </h2>
          <p className="text-body text-muted mb-6">
            Detailed guides on every entity type and formation state. Find the
            right structure for your business needs.
          </p>
          <ClusterGrid
            clusters={pillar.clusters.map((c) => ({
              title: c.title,
              href: c.href,
              description: c.description ?? "",
              pillar: "formation" as const,
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
            Not sure which state or entity type is right for you? These guides
            break it down.
          </p>
          <ComparisonCards
            comparisons={[
              {
                title: "Wyoming vs Nevada LLC",
                description:
                  "Head-to-head comparison of Wyoming and Nevada for LLC formation — costs, privacy, asset protection, and annual fees.",
                href: "/wyoming-vs-nevada-llc",
              },
              {
                title: "LLC vs Corporation",
                description:
                  "Which entity type is right for your business? Compare management flexibility, tax treatment, and formation requirements.",
                href: "/llc-vs-corporation",
              },
            ]}
          />
        </section>

        {/* ------------------------------------------------
            Section 6: Package CTA Section
            ------------------------------------------------ */}
        <section id="packages">
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Formation Packages — Start Your Business Right
          </h2>
          <p className="text-body text-muted mb-6">
            Choose Gold for complete privacy and premium services, or Silver for
            professional formation with compliance essentials. Both are
            all-inclusive with no hidden fees.
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
                href: "/wyoming-private-incorporation",
              },
              {
                name: wySilver.name,
                price: `$${wySilver.prices.llc.formation.toLocaleString()}`,
                period: "one-time",
                description: wySilver.description,
                highlighted: false,
                href: "/wyoming-incorporation",
              },
            ]}
            consultationCTA={{
              label: "Not sure which package? Schedule a free consultation",
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
            fromPillar="formation"
            toPillar="privacy"
            heading="Formation Is Just the Beginning. Privacy Makes It Complete."
            description="A properly formed LLC protects your liability. Adding privacy features — nominees, offshore records, anonymous ownership — protects your identity. Most business owners benefit from both."
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
            {formationFaqs.map((faq) => (
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
              title: "Compare Wyoming vs Nevada",
              description:
                "Detailed comparison of the two most popular formation states.",
              href: "/wyoming-vs-nevada-llc",
              pillar: "formation",
            },
            {
              title: "See Gold Package Details",
              description:
                "Full breakdown of what's included in the Wyoming Gold package.",
              href: "/wyoming-private-incorporation",
              pillar: "formation",
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
const formationServiceDescriptions = [
  "America's most business-friendly state. No state income tax, lowest annual fees, strongest charging order protection, and privacy-first statutes.",
  "No state income tax with strong privacy statutes, a dedicated business court, and 25 years of Incorporate123 expertise in Nevada formation.",
  "Corporate formation with Wyoming's close-knit statutes. Ideal for businesses planning to raise capital or needing a formal board structure.",
  "Nevada corporate formation with the state's dedicated business court system. Strong liability protection and no state income tax.",
  "Pre-aged entities with established formation dates. Clean histories, no prior liabilities. Immediate availability for business needs requiring entity age.",
];
