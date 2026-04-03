import type { Metadata } from "next";
import NextLink from "next/link";
import { Clock, Globe, DollarSign, MapPin, Award, Phone } from "lucide-react";

import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { CTABlock } from "@/design-system/components/CTABlock";
import { ComplianceCallout } from "@/design-system/components/ComplianceCallout";
import { HomepageHero } from "@/design-system/components/HomepageHero";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { PackagePreviewCard } from "@/design-system/components/PackagePreviewCard";
import { PackageWizard } from "@/design-system/components/PackageWizard";
import { PillarCard } from "@/design-system/components/PillarCard";
import { TestimonialCarousel } from "@/design-system/components/TestimonialCarousel";
import { TrustSignals } from "@/design-system/components/TrustSignals";

import { pillars } from "@/data/pillars";
import { tierDefinitions, getTierMinPrice } from "@/data/packages";
import {
  homepageData,
  pillarCardOverrides,
  homepageTestimonials,
  packageRenewals,
  trustSignalItems,
} from "@/data/homepage";

/* ------------------------------------------------
   Metadata
   ------------------------------------------------ */
export const metadata: Metadata = {
  title: "[ARCHIVE v1] Homepage — Original",
  description:
    "Privacy-focused business formation specialists. Wyoming & Nevada LLCs with year-round nominee services, offshore records, and all-inclusive pricing. 25 years of expertise from Reno, NV.",
  alternates: {
    canonical: "https://incorporate123.co",
  },
};

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
      streetAddress: "1795 Meadow Wood Lane, Suite 100",
      addressLocality: "Reno",
      addressRegion: "NV",
      postalCode: "89502",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.4806,
      longitude: -119.7888,
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
   Differentiator icon map (spec v1.1)
   ------------------------------------------------ */
const differentiatorIcons: Record<string, React.ReactNode> = {
  Clock: <Clock className="h-8 w-8" aria-hidden="true" />,
  Globe: <Globe className="h-8 w-8" aria-hidden="true" />,
  DollarSign: <DollarSign className="h-8 w-8" aria-hidden="true" />,
  MapPin: <MapPin className="h-8 w-8" aria-hidden="true" />,
  Award: <Award className="h-8 w-8" aria-hidden="true" />,
  Phone: <Phone className="h-8 w-8" aria-hidden="true" />,
};

/* ------------------------------------------------
   Tier cards to display (Gold, Silver, Bronze)
   Ordered by tier level — Gold first (highlighted)
   ------------------------------------------------ */
const tierOrder: Record<string, number> = { gold: 0, silver: 1, bronze: 2 };
const homepageTiers = [...tierDefinitions].sort(
  (a, b) => (tierOrder[a.tier] ?? 9) - (tierOrder[b.tier] ?? 9),
);

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function HomePage() {
  const { hero, differentiators, howItWorks, complianceCallout } = homepageData;

  return (
    <>
      <OrganizationSchema />

      {/* ==========================================
          Section 1: Hero (dark anchor)
          ========================================== */}
      <HomepageHero
        headline={hero.headline}
        subheadline={hero.subheadline}
        primaryCTA={hero.primaryCTA}
        secondaryCTA={hero.secondaryCTA}
        trustSnippets={hero.trustSnippets}
        eyebrow={hero.eyebrow}
        safetyNet={hero.safetyNet}
      />

      {/* ==========================================
          Section 1b: Package Wizard
          — interactive recommendation tool
          ========================================== */}
      <section className="bg-background py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <PackageWizard />
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          Section 2: Pillar Navigation Cards
          — left-aligned intro + subtle gradient bg
          ========================================== */}
      <section
        className="py-section-y"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, var(--primary-100) 100%)",
        }}
      >
        <div className="mx-auto max-w-content px-container-x">
          {/* Section header — left-aligned for variety */}
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                How Can We Help?
              </p>
              <h2 className="font-display text-heading-lg font-bold text-foreground max-w-[36ch]">
                Choose Your Starting Point
              </h2>
              <p className="mt-3 text-body-lg text-muted max-w-narrow">
                Whether you need privacy protection, asset shielding, or
                business formation — we specialize in all three.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Pillar Cards with spec overrides */}
          <div className="grid gap-6 md:grid-cols-3">
            {pillars
              .filter((p) => p.id !== "compliance")
              .map((pillar, index) => {
                const override = pillarCardOverrides[pillar.id];
                return (
                  <ScrollReveal key={pillar.id} delay={index * 100}>
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

          {/* "Already have a company?" link */}
          <ScrollReveal delay={300}>
            <div className="mt-8 text-center">
              <NextLink
                href="/compliance"
                className="text-body-sm text-muted hover:text-foreground transition-colors"
              >
                Already have a company?{" "}
                <span className="text-secondary font-medium">
                  Explore compliance services &rarr;
                </span>
              </NextLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          Section 3: Package Quick Links
          ========================================== */}
      <section className="bg-surface py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          {/* Section header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                Ready to Get Started?
              </p>
              <h2 className="font-display text-heading-lg font-bold text-foreground">
                All-Inclusive Packages — See Exactly What&apos;s Included
              </h2>
              <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
                Transparent pricing with everything bundled. No hidden fees, no
                surprise add-ons.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Tier Cards (Gold, Silver, Bronze) with "from" pricing */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homepageTiers.map((tier, index) => {
              const minPrice = getTierMinPrice(tier, "llc");
              const isGold = tier.tier === "gold";
              return (
                <ScrollReveal key={tier.slug} delay={index * 80}>
                  <PackagePreviewCard
                    tier={{
                      name: `${tier.name} Package`,
                      price: minPrice,
                      period: "formation",
                      description: tier.description,
                      badge: tier.badge,
                      highlighted: tier.highlighted,
                      renewal: packageRenewals[tier.slug],
                    }}
                    entityType="LLC"
                    cta={{
                      label: "View Full Details →",
                      href: `/${tier.slug}`,
                    }}
                    className={
                      isGold
                        ? "border-t-4 border-t-privacy shadow-card-hover"
                        : undefined
                    }
                  />
                </ScrollReveal>
              );
            })}
          </div>

          {/* Compare All + Consultation Safety Net */}
          <ScrollReveal delay={200}>
            <div className="mt-8 text-center space-y-3">
              <NextLink
                href="/compare-packages"
                className="inline-flex items-center gap-1.5 text-body font-medium text-link hover:text-link/80 transition-colors"
              >
                Compare All Packages
                <Icon name="ArrowRight" size="sm" />
              </NextLink>
              <p className="text-body-sm text-muted">
                Not sure which package? Call (775) 313-4155 for a free
                consultation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          Section 4: Differentiator Grid (dark bg)
          — increased typography drama
          ========================================== */}
      <section className="bg-primary py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          {/* Section header — dramatic narrow heading */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2
                className="font-display text-display font-bold text-white max-w-[28ch] mx-auto"
                style={{ textWrap: "balance" }}
              >
                Why Clients Choose Incorporate123
              </h2>
              <p className="mt-3 text-body-lg text-white/80 max-w-narrow mx-auto">
                25 years of specialized privacy and formation expertise — not a
                budget filing service, not a $5,000 consultation.
              </p>
            </div>
          </ScrollReveal>

          {/* 2x3 grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="rounded-card bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                  {/* Icon in circular container */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <span className="text-white/80">
                      {differentiatorIcons[item.icon] ?? (
                        <Icon
                          name={item.icon}
                          size="xl"
                          className="text-white/80"
                        />
                      )}
                    </span>
                  </div>
                  <h3 className="font-display text-body-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body text-white/80">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          Section 5: Testimonials
          ========================================== */}
      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-heading-lg font-bold text-foreground">
                Trusted by Business Owners Nationwide
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="max-w-narrow mx-auto">
              <TestimonialCarousel
                testimonials={homepageTestimonials}
                autoPlay
                autoPlayInterval={6000}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          Section 6: Trust Signals
          — bordered band treatment
          ========================================== */}
      <section className="bg-primary-50 border-y border-border py-12 lg:py-16">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <TrustSignals items={trustSignalItems} layout="grid" />
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          Section 7: How It Works
          ========================================== */}
      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          {/* Section header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                Our Process
              </p>
              <h2 className="font-display text-heading-lg font-bold text-foreground">
                How It Works
              </h2>
              <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
                From research to fully formed and protected — we handle the
                details.
              </p>
            </div>
          </ScrollReveal>

          <HowItWorks
            steps={howItWorks.map((step, index) => ({
              number: index + 1,
              title: step.label,
              description: step.description ?? "",
            }))}
          />
        </div>
      </section>

      {/* ==========================================
          Section 8: Compliance Callout
          — full-width dark treatment (bookend effect)
          ========================================== */}
      <section className="bg-primary py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <ComplianceCallout
              headline={complianceCallout.headline}
              description={complianceCallout.description}
              cta={complianceCallout.cta}
              secondaryCTA={complianceCallout.secondaryCTA}
              variant="dark"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          Section 9: Final CTA Block
          — more breathing room + display heading
          ========================================== */}
      <section className="py-section-y mt-16">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <CTABlock
              variant="dark"
              heading="Ready to Protect Your Privacy and Assets?"
              description="Start with a package, or schedule a free consultation to discuss your specific needs."
              primaryCTA={{
                label: "View Packages & Pricing →",
                href: "/compare-packages",
              }}
              secondaryCTA={{
                label: "Schedule a Consultation →",
                href: "/contact",
              }}
              trustSignal="(775) 313-4155 — Call anytime"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
