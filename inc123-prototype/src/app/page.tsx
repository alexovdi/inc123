import { Link as RouterLink } from "react-router-dom";
import {
  Clock,
  Globe,
  DollarSign,
  Award,
  Phone,
  Check,
  Users,
} from "lucide-react";

import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { HomepageHero } from "@/design-system/components/HomepageHero";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { PackageWizard } from "@/design-system/components/PackageWizard";
import { PillarCard } from "@/design-system/components/PillarCard";
import { PrivacyBridge } from "@/design-system/components/PrivacyBridge";
import { StickyMobileCTA } from "@/design-system/components/StickyMobileCTA";
import { TrustTicker } from "@/design-system/components/TrustTicker";

import { pillars } from "@/data/pillars";
import { homepageData, pillarCardOverrides } from "@/data/homepage";

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
   Differentiator icon map
   ------------------------------------------------ */
const differentiatorIcons: Record<string, React.ReactNode> = {
  Clock: <Clock className="h-6 w-6" aria-hidden="true" />,
  Globe: <Globe className="h-6 w-6" aria-hidden="true" />,
  DollarSign: <DollarSign className="h-6 w-6" aria-hidden="true" />,
  Users: <Users className="h-6 w-6" aria-hidden="true" />,
  Award: <Award className="h-6 w-6" aria-hidden="true" />,
  Phone: <Phone className="h-6 w-6" aria-hidden="true" />,
};

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function HomePage() {
  const { hero, differentiators, howItWorks } = homepageData;

  return (
    <>
      <OrganizationSchema />

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
          Section 3: Package Wizard
          — interactive recommendation tool
          ========================================== */}
      <section className="bg-background py-section-y" id="wizard">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                Find Your Package
              </p>
              <h2 className="font-display text-display-sm font-semibold text-foreground">
                Get a personalized recommendation
                <br />
                in 30 seconds
              </h2>
              <p className="mt-3 text-body-lg text-muted">
                Two questions. Transparent pricing. All-inclusive packages from
                $625 to $2,100.
              </p>
            </div>
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
          Section 4: Pillar Navigation — all 4 pillars
          ========================================== */}
      <section className="py-section-y bg-background">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                How Can We Help?
              </p>
              <h2 className="font-display text-display-sm font-semibold text-foreground">
                Choose Your Starting Point
              </h2>
              <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
                Whether you need privacy, asset protection, business formation,
                or ongoing compliance — we specialize in all four.
              </p>
            </div>
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
          Section 5: Package Comparison — v10 Silver/Gold
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
            <div className="text-center mb-12">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                Compare All Options
              </p>
              <h2 className="font-display text-display-sm font-semibold text-foreground">
                Detailed package comparison
              </h2>
              <p className="mt-3 text-body-lg text-muted">
                Every package side by side. Compare features, pick your tier.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-[1fr_1.18fr] max-w-[820px] mx-auto">
            {/* Silver */}
            <ScrollReveal delay={80}>
              <div className="rounded-[28px] bg-surface border border-border p-8 lg:p-10 h-full flex flex-col">
                <p className="text-caption font-semibold text-muted uppercase tracking-wider">
                  Silver
                </p>
                <p className="font-display text-body-lg font-bold text-foreground mt-1">
                  Formation
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-display font-semibold text-foreground tracking-tight">
                    $875
                  </span>
                  <span className="text-body-sm text-muted">/formation</span>
                </div>
                <p className="text-caption text-muted mt-1">Renewal: $325/yr</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {[
                    "Registered agent included",
                    "Custom operating agreement",
                    "All state filing fees",
                    "EIN filing",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-body-sm text-foreground"
                    >
                      <Check className="h-3.5 w-3.5 text-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <RouterLink
                  to="/wyoming-incorporation"
                  className="mt-8 inline-flex items-center justify-center w-full rounded-xl border border-border py-3 text-body font-semibold text-foreground transition-all hover:border-secondary hover:text-secondary"
                >
                  View Silver →
                </RouterLink>
                <p className="mt-3 text-center text-caption text-muted">
                  <RouterLink
                    to="/compare-packages"
                    className="text-secondary hover:underline"
                  >
                    Add privacy for $400 more →
                  </RouterLink>
                </p>
              </div>
            </ScrollReveal>

            {/* Gold — featured */}
            <ScrollReveal delay={160}>
              <div className="relative rounded-[28px] bg-surface border-2 border-secondary/20 p-8 lg:p-10 h-full flex flex-col shadow-card-hover">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-caption font-bold text-white uppercase tracking-wider">
                  Chosen by 70% of Clients
                </span>
                <p className="text-caption font-semibold text-secondary uppercase tracking-wider">
                  Gold
                </p>
                <p className="font-display text-body-lg font-bold text-foreground mt-1">
                  Privacy
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-display font-semibold text-foreground tracking-tight">
                    $1,275
                  </span>
                  <span className="text-body-sm text-muted">/formation</span>
                </div>
                <p className="text-caption text-muted mt-1">
                  Renewal: $525/yr with nominees
                </p>
                <div className="mt-3 rounded-lg bg-accent/[0.06] border border-accent/10 px-3 py-2 text-caption font-semibold text-accent text-center">
                  Includes $2,000+ in Year 1 services
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {[
                    "Year-round nominee services",
                    "Offshore records storage",
                    "Full compliance package",
                    "Registered agent included",
                    "Corporate minutes maintenance",
                    "All state filing fees",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-body-sm text-foreground"
                    >
                      <Check className="h-3.5 w-3.5 text-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <RouterLink
                  to="/wyoming-private-incorporation"
                  className="mt-8 inline-flex items-center justify-center w-full rounded-xl bg-accent py-3 text-body font-semibold text-white shadow-card transition-all hover:bg-accent-hover hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started →
                </RouterLink>
                <p className="mt-3 text-center text-caption text-muted">
                  <RouterLink
                    to="/contact"
                    className="hover:text-secondary hover:underline"
                  >
                    Schedule a consultation
                  </RouterLink>
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Consultation + CA/FL note */}
          <ScrollReveal delay={250}>
            <div className="mt-10 text-center space-y-3">
              <p className="text-body-sm text-muted">
                Not sure which package fits? We&rsquo;re here to help.{" "}
                <RouterLink
                  to="/contact"
                  className="text-secondary font-medium hover:underline"
                >
                  Schedule a free consultation →
                </RouterLink>{" "}
                or{" "}
                <a
                  href="tel:+17753134155"
                  className="text-secondary font-medium hover:underline"
                >
                  call (775) 313-4155
                </a>
              </p>
              <p className="text-caption text-muted">
                Operating in California or Florida?{" "}
                <RouterLink
                  to="/california-private-incorporation"
                  className="text-secondary font-medium hover:underline"
                >
                  See our private incorporation packages →
                </RouterLink>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          Section 7: Differentiators — v10 hero card + grid
          ========================================== */}
      <section className="relative bg-primary py-section-y overflow-hidden">
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.025'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-content px-container-x">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-body-sm font-semibold text-white/40 uppercase tracking-[0.15em] mb-2">
                What Sets Us Apart
              </p>
              <h2 className="font-display text-display font-medium text-white max-w-[28ch] mx-auto">
                Why clients choose Incorporate123
              </h2>
              <p className="mt-3 text-body-lg text-white/50 max-w-narrow mx-auto">
                One service no competitor can match — and five more reasons on
                top.
              </p>
            </div>
          </ScrollReveal>

          {/* Hero differentiator card — full-width, 2-column */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] rounded-3xl overflow-hidden bg-secondary/[0.04] border border-secondary/[0.08] mb-4 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.15)]">
              <div className="p-10 lg:p-12">
                <div className="font-mono text-[72px] font-semibold text-secondary/[0.12] leading-none tracking-[-3px] mb-3">
                  365
                </div>
                <h3 className="font-display text-[24px] font-extrabold text-white mb-3.5">
                  Year-Round Nominee Services
                </h3>
                <p className="text-body-sm text-white/[0.45] leading-[1.8]">
                  Your nominee directors and officers are maintained every
                  single day — not just at formation. Most providers offer a
                  &ldquo;nominee for a day&rdquo; and disappear. This is the
                  single service that defines Incorporate123.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-10 lg:p-12 bg-secondary/[0.03]">
                <div className="w-full rounded-2xl bg-white/[0.03] border border-white/[0.05] p-4 text-center">
                  <p className="text-caption font-semibold uppercase tracking-[0.1em] text-white/25 mb-2">
                    Competitors charge
                  </p>
                  <p className="font-mono text-[24px] font-semibold text-white/25 line-through decoration-white/15">
                    $400–$5,000/yr
                  </p>
                  <p className="text-caption text-white/20 mt-1">
                    For nominee services alone
                  </p>
                </div>
                <div className="w-full rounded-2xl bg-accent/[0.06] border border-accent/10 p-4 text-center">
                  <p className="text-caption font-semibold uppercase tracking-[0.1em] text-accent mb-2">
                    Incorporate123 Gold
                  </p>
                  <p className="font-mono text-[24px] font-semibold text-white">
                    Included
                  </p>
                  <p className="text-caption text-white/40 mt-1">
                    Plus offshore records, agent, EIN, all fees
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 5 smaller cards — 3 + 2 layout */}
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              {
                icon: <Globe className="h-5 w-5" />,
                title: "Offshore Records Storage",
                desc: "Corporate records maintained outside U.S. jurisdiction. Included free in every Gold package since 2012.",
              },
              {
                icon: <DollarSign className="h-5 w-5" />,
                title: "All-Inclusive Pricing",
                desc: "State fees, agent, operating agreement, EIN — every cost included upfront. No add-ons at checkout.",
              },
              {
                icon: <Clock className="h-5 w-5" />,
                title: "25 Years Specialized",
                desc: "Wyoming and Nevada entities since 2000. Privacy and asset protection specialists.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Real Human Experts",
                desc: "Dedicated specialists who know Wyoming and Nevada entity law. Not a chatbot, not a call center.",
              },
              {
                icon: <Phone className="h-5 w-5" />,
                title: "Crypto Accepted",
                desc: "Bitcoin, Ethereum, and three more cryptocurrencies accepted for maximum payment privacy.",
              },
            ].map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 80}
                className={
                  index < 3
                    ? "w-full sm:w-[calc(33.333%-11px)]"
                    : "w-full sm:w-[calc(50%-8px)]"
                }
              >
                <div className="group relative rounded-3xl bg-white/[0.02] border border-white/[0.035] p-7 sm:p-9 transition-all duration-500 hover:bg-white/[0.045] hover:border-white/[0.07] hover:-translate-y-1.5 overflow-hidden h-full">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(37,99,235,0.06),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                      <span className="text-secondary/80">{item.icon}</span>
                    </div>
                    <h3 className="font-display text-body-lg font-bold text-white mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-white/[0.33] leading-[1.78]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* VS Comparison Bar */}
          <ScrollReveal delay={400}>
            <div className="mt-6 grid grid-cols-[1fr_auto_1fr] gap-5 items-center rounded-[20px] bg-accent/[0.03] border border-accent/[0.06] p-8 sm:px-10">
              <div className="text-center">
                <p className="text-caption font-semibold uppercase tracking-[0.1em] text-white/30 mb-2">
                  Competitors
                </p>
                <p className="font-mono text-[26px] font-semibold text-white/[0.35] tracking-tight leading-none">
                  $400–$5,000
                  <span className="text-body-sm text-white/20">/yr</span>
                </p>
                <p className="text-body-sm text-white/[0.35] mt-1.5">
                  For nominee services alone
                </p>
              </div>
              <div className="font-display text-caption font-extrabold uppercase tracking-[0.15em] text-white/20">
                VS
              </div>
              <div className="text-center">
                <p className="text-caption font-semibold uppercase tracking-[0.1em] text-white/30 mb-2">
                  Incorporate123 Gold
                </p>
                <p className="font-mono text-[26px] font-semibold text-amber-300 tracking-tight leading-none">
                  $1,275
                </p>
                <p className="text-body-sm text-white/[0.35] mt-1.5">
                  All-inclusive — nominees + 5 more services
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Dual CTAs */}
          <ScrollReveal delay={500}>
            <div className="text-center mt-12 flex flex-wrap justify-center gap-3.5">
              <RouterLink
                to="/compare-packages"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-body font-semibold text-white shadow-card transition-all hover:bg-accent-hover hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                Find Your Package →
              </RouterLink>
              <RouterLink
                to="/compare-packages"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-body font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white"
              >
                Compare All Packages →
              </RouterLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          Section 8: Testimonials — v10 static grid
          ========================================== */}
      <section className="bg-primary-50 py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                Client Experiences
              </p>
              <h2 className="font-display text-display-sm font-semibold text-foreground">
                What our clients say
              </h2>
              <p className="mt-3 text-body-lg text-muted">
                Business owners who chose privacy, protection, and transparency.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-[1fr_1.2fr_1fr] items-start">
            {[
              {
                quote:
                  "We moved our California business to a Wyoming entity with nominee services. Our ownership is completely private and the process was handled start to finish.",
                initials: "MT",
                name: "Mark T.",
                role: "California Business Owner",
                color: "secondary" as const,
                featured: false,
              },
              {
                quote:
                  "After 15 years with another provider, we switched to Incorporate123 for the year-round nominee maintenance. The difference in service level is night and day. We should have made the switch years ago.",
                initials: "IG",
                name: "Investment Group",
                role: "Nevada",
                color: "success" as const,
                featured: true,
              },
              {
                quote:
                  "The all-inclusive pricing was what sold us. No hidden fees, no surprise add-ons at checkout — just one clear price for everything we needed.",
                initials: "SM",
                name: "Sarah M.",
                role: "Wyoming LLC Owner",
                color: "accent" as const,
                featured: false,
              },
            ].map((t, index) => {
              const borderColors = {
                secondary: "border-l-secondary",
                success: "border-l-success",
                accent: "border-l-accent",
              };
              const avatarBg = {
                secondary: "bg-secondary/[0.05] text-secondary",
                success: "bg-success/[0.05] text-success",
                accent: "bg-accent/[0.05] text-accent",
              };
              return (
                <ScrollReveal key={index} delay={index * 120}>
                  <div
                    className={cn(
                      "rounded-[28px] bg-surface border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_72px_-14px_rgba(0,0,0,0.06)] hover:border-transparent",
                      t.featured
                        ? "p-10 lg:p-12 border-secondary/[0.08]"
                        : "p-8 lg:p-10",
                      t.featured &&
                        "bg-gradient-to-b from-secondary/[0.015] to-surface",
                    )}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 fill-accent stroke-none"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 .5l2.47 5 5.53.8-4 3.9.94 5.5L8 13.2l-4.94 2.5.94-5.5-4-3.9 5.53-.8z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote with colored left border */}
                    <p
                      className={cn(
                        "text-body text-muted leading-[1.85] mb-7 pl-6 border-l-[3px] rounded-[3px]",
                        borderColors[t.color],
                        t.featured && "text-body-lg",
                      )}
                    >
                      {t.quote}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3.5">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-2xl font-display text-body font-bold",
                          avatarBg[t.color],
                        )}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-body text-foreground">
                          {t.name}
                        </p>
                        <p className="text-body-sm text-muted mt-0.5">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          Section 9: Trust Bar — v10 style
          ========================================== */}
      <section className="border-y border-border py-10 lg:py-12 bg-surface">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-0 lg:divide-x lg:divide-border">
              {[
                {
                  icon: <Award className="h-5 w-5 text-secondary" />,
                  bg: "bg-secondary/[0.05]",
                  value: "Since 2000",
                  label: "25 years trusted",
                },
                {
                  icon: <Phone className="h-5 w-5 text-success" />,
                  bg: "bg-success/[0.05]",
                  value: (
                    <a
                      href="tel:+17753134155"
                      className="hover:text-secondary transition-colors"
                    >
                      (775) 313-4155
                    </a>
                  ),
                  label: "Call us directly",
                },
                {
                  icon: (
                    <Check className="h-5 w-5 text-accent" strokeWidth={2.5} />
                  ),
                  bg: "bg-accent/[0.05]",
                  value: "30-Day",
                  label: "Money-back guarantee",
                },
                {
                  icon: (
                    <Globe className="h-5 w-5 text-[var(--pillar-compliance)]" />
                  ),
                  bg: "bg-[var(--pillar-compliance)]/[0.05]",
                  value: "5 Cryptos",
                  label: "Payments accepted",
                },
                {
                  icon: <DollarSign className="h-5 w-5 text-secondary" />,
                  bg: "bg-secondary/[0.05]",
                  value: "All-Inclusive",
                  label: "No hidden fees, ever",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center px-6 lg:px-8 lg:flex-1"
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl mb-2.5",
                      item.bg,
                    )}
                  >
                    {item.icon}
                  </div>
                  <p className="font-display text-body font-bold text-foreground">
                    {item.value}
                  </p>
                  <p className="text-caption text-muted mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          Section 10: How It Works — vertical timeline
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
            <div className="text-center mb-12">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                Simple Process
              </p>
              <h2 className="font-display text-display-sm font-semibold text-foreground">
                How it works
              </h2>
              <p className="mt-3 text-body-lg text-muted">
                From selection to formation — we handle every step.
              </p>
            </div>
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
              <RouterLink
                to="/compare-packages"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-body font-semibold text-white shadow-card transition-all hover:bg-accent-hover hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                Find Your Package →
              </RouterLink>
              <p className="mt-4 text-body-sm text-muted">
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
          Section 11: Final CTA — v10 dark with pricing
          ========================================== */}
      <section className="relative bg-primary py-40 text-center overflow-hidden">
        {/* Decorative orbs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "60vw",
            height: "60vw",
            top: "-30%",
            left: "-20%",
            background: "rgba(37,99,235,0.08)",
            filter: "blur(160px)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "50vw",
            height: "50vw",
            bottom: "-30%",
            right: "-20%",
            background: "rgba(217,119,6,0.05)",
            filter: "blur(160px)",
          }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.025'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <h2 className="font-display text-display font-medium text-white max-w-[24ch] mx-auto leading-[1.1]">
              Ready to Protect Your Privacy and Assets?
            </h2>
            <p className="mt-4 text-body-lg text-white/50 max-w-[42ch] mx-auto">
              Start with a package, or schedule a free consultation to discuss
              your specific needs.
            </p>

            {/* Pricing callout */}
            <div className="mt-10 inline-flex items-center gap-8 rounded-[20px] bg-white/[0.04] border border-white/[0.06] px-10 py-6">
              <div className="text-center">
                <p className="text-caption font-semibold text-white/30 uppercase tracking-wider mb-1">
                  Wyoming Gold
                </p>
                <p className="font-mono text-[28px] font-semibold text-white tracking-tight">
                  $1,275
                </p>
              </div>
              <div className="h-12 w-px bg-white/[0.08]" />
              <div className="text-center">
                <p className="text-caption font-semibold text-white/30 uppercase tracking-wider mb-1">
                  Nevada Gold
                </p>
                <p className="font-mono text-[28px] font-semibold text-white tracking-tight">
                  $1,800
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap justify-center gap-3.5">
              <RouterLink
                to="/compare-packages"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-body font-semibold text-white shadow-card transition-all hover:bg-accent-hover hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                View Packages & Pricing →
              </RouterLink>
              <RouterLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-body font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white"
              >
                Schedule a Consultation →
              </RouterLink>
            </div>

            <p className="mt-6 text-body-sm text-white/[0.28]">
              Or call us directly —{" "}
              <a
                href="tel:+17753134155"
                className="text-white/[0.48] underline underline-offset-[3px] decoration-white/[0.12] hover:text-white hover:decoration-white transition-all"
              >
                (775) 313-4155
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

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
