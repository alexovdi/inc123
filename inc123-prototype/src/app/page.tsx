import { Link as RouterLink } from "react-router-dom";

import { Button } from "@/design-system/primitives/Button";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { HomepageHero } from "@/design-system/components/HomepageHero";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { PackageWizard } from "@/design-system/components/PackageWizard";
import { PillarCard } from "@/design-system/components/PillarCard";
import { PrivacyBridge } from "@/design-system/components/PrivacyBridge";
import { StickyMobileCTA } from "@/design-system/components/StickyMobileCTA";
import { TrustTicker } from "@/design-system/components/TrustTicker";
import { DifferentiatorSection } from "@/design-system/components/DifferentiatorSection";
import { TestimonialGrid } from "@/design-system/components/TestimonialGrid";
import { PackageComparison } from "@/design-system/components/PackageComparison";
import { TrustBar } from "@/design-system/components/TrustBar";
import { FinalCTA } from "@/design-system/components/FinalCTA";
import { SectionHeader } from "@/design-system/components/SectionHeader";

import { pillars } from "@/data/pillars";
import {
  homepageData,
  pillarCardOverrides,
  homepageTestimonialGrid,
  trustBarItems,
  differentiatorCards,
  packageComparisonCards,
} from "@/data/homepage";

/* ------------------------------------------------
   Organization + LocalBusiness Schema (JSON-LD)
   ------------------------------------------------ */
function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://incorporate123.co/#organization",
    name: "Incorporate123",
    url: "https://incorporate123.co",
    logo: "https://incorporate123.co/logo.png",
    description:
      "Privacy-focused business formation specialists offering anonymous LLCs, nominee services, asset protection structures, and ongoing compliance in Wyoming, Nevada, California, and Florida. 25 years of expertise.",
    foundingDate: "2000",
    telephone: "(775) 313-4155",
    email: "info@incorporate123.co",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Reno",
      addressRegion: "NV",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: [],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    knowsAbout: [
      "Anonymous LLC Formation",
      "Nominee Services",
      "Asset Protection",
      "Business Privacy",
      "Wyoming LLC",
      "Nevada LLC",
      "Offshore Records Custodian",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function HomePage() {
  const { hero, howItWorks } = homepageData;

  return (
    <>
      <OrganizationSchema />

      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-secondary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <main id="main-content">
        {/* ==========================================
            Section 1: Hero (dark anchor)
            ========================================== */}
        <HomepageHero
          headlineLines={hero.headlineLines}
          subheadline={hero.subheadline}
          primaryCTA={hero.primaryCTA}
          secondaryCTA={hero.secondaryCTA}
          eyebrow={hero.eyebrow}
          phone={hero.phone}
          consultationHref={hero.consultationHref}
          stats={hero.stats}
        />

        {/* ==========================================
            Trust Ticker — continuous scrolling signals
            ========================================== */}
        <TrustTicker />

        {/* ==========================================
            Section 2: "Why Privacy Matters" Bridge
            — teaches the PROBLEM before selling
            ========================================== */}
        <PrivacyBridge className="bg-background" />

        {/* ==========================================
            Section 3: Pillar Navigation — explore first
            — learn what we do before deciding
            ========================================== */}
        <section className="py-section-y bg-primary-50">
          <div className="mx-auto max-w-content px-container-x">
            <ScrollReveal>
              <SectionHeader
                eyebrow="How Can We Help?"
                title="Choose Your Starting Point"
                subtitle="Whether you need privacy, asset protection, business formation, or ongoing compliance — we specialize in all four."
                subtitleMaxWidth="max-w-narrow mx-auto"
                className="mb-12"
              />
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, index) => {
                const override = pillarCardOverrides[pillar.id];
                return (
                  <ScrollReveal key={pillar.id} delay={index * 80}>
                    <PillarCard
                      pillar={pillar.id}
                      icon={pillar.icon}
                      title={override?.title ?? pillar.label}
                      description={override?.description ?? pillar.description}
                      services={pillar.services.slice(0, 4)}
                      href={pillar.cta.href}
                      ctaLabel={override?.ctaLabel}
                    />
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================
            Section 4: Package Wizard — decide
            — interactive recommendation after exploring
            ========================================== */}
        <section className="bg-background py-section-y" id="wizard">
          <div className="mx-auto max-w-content px-container-x">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Guided Recommendation"
                title="Get a personalized recommendation in 60 seconds"
                subtitle="Two questions to find your perfect package. No upsells, no hidden fees."
                className="mb-10"
              />
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <PackageWizard />
            </ScrollReveal>

            {/* Explore links */}
            <ScrollReveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                <RouterLink
                  to="/privacy"
                  className="inline-flex items-center gap-2 text-body-sm font-medium text-muted transition-colors hover:text-secondary"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--pillar-privacy)]" />
                  Explore Privacy
                </RouterLink>
                <RouterLink
                  to="/asset-protection"
                  className="inline-flex items-center gap-2 text-body-sm font-medium text-muted transition-colors hover:text-secondary"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--pillar-asset)]" />
                  Asset Protection
                </RouterLink>
                <RouterLink
                  to="/formation"
                  className="inline-flex items-center gap-2 text-body-sm font-medium text-muted transition-colors hover:text-secondary"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--pillar-formation)]" />
                  Company Formation
                </RouterLink>
                <RouterLink
                  to="/compare-packages"
                  className="inline-flex items-center gap-2 text-body-sm font-medium text-muted transition-colors hover:text-secondary"
                >
                  <span className="h-2 w-2 rounded-full bg-muted/40" />
                  Compare All Packages
                </RouterLink>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ==========================================
            Section 5: Package Comparison — Silver/Gold
            ========================================== */}
        <PackageComparison cards={packageComparisonCards} />

        {/* ==========================================
            Section 6: Differentiators — dark section
            ========================================== */}
        <DifferentiatorSection cards={differentiatorCards} />

        {/* ==========================================
            Section 7: Testimonials — static grid
            ========================================== */}
        <TestimonialGrid testimonials={homepageTestimonialGrid} />

        {/* ==========================================
            Section 8: Trust Bar
            ========================================== */}
        <TrustBar items={trustBarItems} />

        {/* ==========================================
            Section 9: How It Works — vertical timeline
            ========================================== */}
        <section
          className="py-section-y"
          style={{
            background:
              "linear-gradient(180deg, var(--primary-50) 0%, var(--background) 100%)",
          }}
        >
          <div className="mx-auto max-w-content px-container-x">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Simple Process"
                title="How it works"
                subtitle="From selection to formation — we handle every step."
                className="mb-12"
              />
            </ScrollReveal>

            <HowItWorks
              steps={howItWorks.map((step, index) => ({
                number: index + 1,
                title: step.label,
                description: step.description ?? "",
                tag: step.tag,
                color: step.color,
              }))}
            />

            {/* CTA */}
            <ScrollReveal delay={500}>
              <div className="text-center mt-14">
                <Button variant="cta" size="lg" asChild className="rounded-xl">
                  <RouterLink to="/compare-packages">
                    View Packages & Pricing →
                  </RouterLink>
                </Button>
                <p className="mt-4 text-body text-muted">
                  Or{" "}
                  <RouterLink
                    to="/contact"
                    className="text-secondary font-medium underline underline-offset-[3px] decoration-border hover:decoration-secondary"
                  >
                    schedule a consultation
                  </RouterLink>{" "}
                  to talk it through
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ==========================================
            Section 10: Final CTA — dark with pricing
            ========================================== */}
        <FinalCTA />
      </main>

      {/* ==========================================
          Sticky Mobile CTA Bar
          ========================================== */}
      <StickyMobileCTA
        primaryCTA={{
          variant: "cta",
          children: "Find Your Package",
          href: "#wizard",
        }}
        phone="(775) 313-4155"
      />
    </>
  );
}
