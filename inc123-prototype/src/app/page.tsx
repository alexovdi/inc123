import type { Metadata } from "next";
import NextLink from "next/link";
import { Clock, Globe, DollarSign, MapPin, Award, Phone } from "lucide-react";

import { Icon } from "@/design-system/primitives";
import {
  HomepageHero,
  PillarCard,
  PackagePreviewCard,
  TrustSignals,
  HowItWorks,
  ComplianceCallout,
  CTABlock,
  TestimonialCarousel,
} from "@/design-system/components";

import { pillars } from "@/data/pillars";
import { packages } from "@/data/packages";
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
  title: "Incorporate123 — Privacy, Asset Protection & Business Formation",
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
   Package cards to display (4 primary packages)
   ------------------------------------------------ */
const homepagePackageIds = [
  "wyoming-gold",
  "nevada-gold",
  "wyoming-silver",
  "nevada-silver",
];

const homepagePackages = homepagePackageIds
  .map((id) => packages.find((p) => p.id === id))
  .filter(Boolean);

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function HomePage() {
  const { hero, differentiators, howItWorks, complianceCallout } = homepageData;

  return (
    <>
      <OrganizationSchema />

      {/* ==========================================
          Section 1: Hero
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
          Section 2: Pillar Navigation Cards
          ========================================== */}
      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-body-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              How Can We Help?
            </p>
            <h2 className="font-display text-heading-lg font-bold text-foreground">
              Choose Your Starting Point
            </h2>
            <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
              Whether you need privacy protection, asset shielding, or business
              formation — we specialize in all three.
            </p>
          </div>

          {/* 3 Pillar Cards with spec overrides */}
          <div className="grid gap-6 md:grid-cols-3">
            {pillars
              .filter((p) => p.id !== "compliance")
              .map((pillar) => {
                const override = pillarCardOverrides[pillar.id];
                return (
                  <PillarCard
                    key={pillar.id}
                    pillar={pillar.id}
                    icon={pillar.icon}
                    title={override?.title ?? pillar.label}
                    description={override?.description ?? pillar.description}
                    services={pillar.services.slice(0, 4)}
                    href={pillar.cta.href}
                    ctaLabel={override?.ctaLabel}
                  />
                );
              })}
          </div>

          {/* "Already have a company?" link */}
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
        </div>
      </section>

      {/* ==========================================
          Section 3: Package Quick Links
          ========================================== */}
      <section className="bg-surface py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-body-sm font-semibold text-secondary uppercase tracking-wide mb-2">
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

          {/* 4 Package Cards with renewal pricing + Gold elevation */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homepagePackages.map((pkg) => {
              if (!pkg) return null;
              const isGold = pkg.tier === "gold";
              return (
                <PackagePreviewCard
                  key={pkg.id}
                  tier={{
                    name: pkg.name,
                    price: pkg.prices.llc.formation,
                    period: "one-time",
                    description: pkg.description,
                    badge: pkg.badge,
                    highlighted: pkg.highlighted,
                    renewal: packageRenewals[pkg.id],
                  }}
                  entityType="LLC"
                  cta={{
                    label: "View Full Details →",
                    href: `/${pkg.flatSlug}`,
                  }}
                  className={
                    isGold
                      ? "border-t-4 border-t-privacy shadow-card-hover"
                      : undefined
                  }
                />
              );
            })}
          </div>

          {/* Compare All + Consultation Safety Net */}
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
        </div>
      </section>

      {/* ==========================================
          Section 4: Differentiator Grid (dark bg)
          ========================================== */}
      <section className="bg-primary py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-heading-lg font-bold text-white">
              Why Clients Choose Incorporate123
            </h2>
            <p className="mt-3 text-body-lg text-white/80 max-w-narrow mx-auto">
              25 years of specialized privacy and formation expertise — not a
              budget filing service, not a $5,000 consultation.
            </p>
          </div>

          {/* 2x3 grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="rounded-card bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <div className="mb-4 text-white/80">
                  {differentiatorIcons[item.icon] ?? (
                    <Icon
                      name={item.icon}
                      size="xl"
                      className="text-white/80"
                    />
                  )}
                </div>
                <h3 className="font-display text-body-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-body-sm text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          Section 5: Testimonials
          ========================================== */}
      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <div className="text-center mb-12">
            <h2 className="font-display text-heading-lg font-bold text-foreground">
              Trusted by Business Owners Nationwide
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <TestimonialCarousel
              testimonials={homepageTestimonials}
              autoPlay
              autoPlayInterval={6000}
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          Section 6: Trust Signals
          ========================================== */}
      <section className="bg-surface py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <TrustSignals items={trustSignalItems} layout="grid" />
        </div>
      </section>

      {/* ==========================================
          Section 7: How It Works
          ========================================== */}
      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-heading-lg font-bold text-foreground">
              How It Works
            </h2>
            <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
              From research to fully formed and protected — we handle the
              details.
            </p>
          </div>

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
          ========================================== */}
      <section className="bg-surface py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <ComplianceCallout
            headline={complianceCallout.headline}
            description={complianceCallout.description}
            cta={complianceCallout.cta}
            secondaryCTA={complianceCallout.secondaryCTA}
          />
        </div>
      </section>

      {/* ==========================================
          Section 9: Final CTA Block
          ========================================== */}
      <section className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
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
        </div>
      </section>
    </>
  );
}
