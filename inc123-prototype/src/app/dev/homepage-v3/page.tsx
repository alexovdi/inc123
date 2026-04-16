import { Link as RouterLink } from "react-router-dom";
import {
  Clock,
  Globe,
  DollarSign,
  Award,
  Phone,
  Check,
  Users,
  CheckCircle,
} from "lucide-react";

import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import { Button } from "@/design-system/primitives/Button";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { CTABlock } from "@/design-system/components/CTABlock";
import { ComplianceCallout } from "@/design-system/components/ComplianceCallout";
// HowItWorks inlined below as V3HowItWorks
import { PackagePreviewCard } from "@/design-system/components/PackagePreviewCard";
import { PackageWizard } from "@/design-system/components/PackageWizard";
import { PillarCard } from "@/design-system/components/PillarCard";
import { Eye, Scale, ShieldCheck } from "lucide-react";
// StatsBar inlined below as V3StatsBar
import { StickyMobileCTA } from "@/design-system/components/StickyMobileCTA";
import { TestimonialCarousel } from "@/design-system/components/TestimonialCarousel";
import { TrustSignals } from "@/design-system/components/TrustSignals";
import { TrustTicker } from "@/design-system/components/TrustTicker";

import { pillars } from "@/data/pillars";
import { tierDefinitions, getTierMinPrice } from "@/data/packages";
import {
  pillarCardOverrides,
  homepageTestimonials,
  packageRenewals,
  trustSignalItems,
} from "@/data/homepage";

/* ------------------------------------------------
   V3 Hero Data (previous version)
   ------------------------------------------------ */
const v3Hero = {
  headline: "Your Name Off the Record. Your Assets Protected.",
  subheadline:
    "Wyoming & Nevada formation with year-round nominees, offshore records, and all-inclusive pricing. 25 years of expertise.",
  primaryCTA: { label: "Find Your Package →", href: "#wizard" },
  secondaryCTA: {
    label: "Compare All Packages →",
    href: "/compare-packages",
  },
  trustSnippets: [
    "25 Years",
    "Thousands Formed",
    "$1,275 All-Inclusive",
    "Money-Back Guarantee",
  ],
  eyebrow: "Trusted Since 2000 · Privacy-Focused Formation",
  safetyNet: "Have questions? Call 1-800-553-0615",
};

/* ------------------------------------------------
   V3 Hero Component (inlined — previous design)
   ------------------------------------------------ */
function HeroShield() {
  return (
    <div
      className="relative flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-white/8 blur-3xl" />
      </div>
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-64 w-56 lg:h-80 lg:w-72"
      >
        <path
          d="M100 10 L180 50 L180 130 Q180 190 100 230 Q20 190 20 130 L20 50 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white/20"
          fill="none"
        />
        <path
          d="M100 30 L165 62 L165 125 Q165 178 100 212 Q35 178 35 125 L35 62 Z"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-white/[0.12]"
          fill="url(#shieldGradientV3)"
        />
        <defs>
          <linearGradient
            id="shieldGradientV3"
            x1="100"
            y1="30"
            x2="100"
            y2="212"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="100"
          y1="30"
          x2="100"
          y2="212"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/[0.08]"
        />
        <line
          x1="35"
          y1="95"
          x2="165"
          y2="95"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/[0.08]"
        />
        <line
          x1="35"
          y1="140"
          x2="165"
          y2="140"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/[0.08]"
        />
        <path
          d="M72 115 L92 135 L128 99"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/25"
          fill="none"
        />
      </svg>
    </div>
  );
}

function V3HomepageHero() {
  const {
    headline,
    subheadline,
    primaryCTA,
    secondaryCTA,
    trustSnippets,
    eyebrow,
    safetyNet,
  } = v3Hero;
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-content px-container-x py-28 lg:py-40">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 lg:basis-2/3">
            <p
              className="text-body-sm font-medium text-white/70 mb-3 tracking-[0.15em] uppercase"
              style={{
                animation: "hero-fade-up 600ms var(--ease-out-expo) 100ms both",
              }}
            >
              {eyebrow}
            </p>
            <h1
              className="font-display text-display font-medium text-white md:text-display-lg lg:text-display-xl"
              style={{
                animation: "hero-fade-up 800ms var(--ease-out-expo) 0ms both",
              }}
            >
              {headline}
            </h1>
            <p
              className="mt-6 text-body-lg text-white/70 max-w-[38ch] leading-relaxed"
              style={{
                animation: "hero-fade-up 600ms var(--ease-out-expo) 200ms both",
              }}
            >
              {subheadline}
            </p>
            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              style={{
                animation: "hero-fade-up 600ms var(--ease-out-expo) 400ms both",
              }}
            >
              <Button variant="cta" size="lg" asChild>
                <a href={primaryCTA.href}>{primaryCTA.label}</a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="border-white/30 text-white hover:bg-white/10"
              >
                <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
              </Button>
            </div>
            {safetyNet && (
              <p
                className="mt-4 text-body-sm text-white/70"
                style={{
                  animation:
                    "hero-fade-in 600ms var(--ease-out-expo) 500ms both",
                }}
              >
                {safetyNet}
              </p>
            )}
            <div
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
              style={{
                animation: "hero-fade-in 600ms var(--ease-out-expo) 600ms both",
              }}
            >
              {trustSnippets.map((snippet) => (
                <div
                  key={snippet}
                  className="flex items-center gap-2 text-body-sm text-white/70"
                >
                  <CheckCircle
                    className="h-4 w-4 shrink-0 text-white/70"
                    aria-hidden="true"
                  />
                  <span>{snippet}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex lg:basis-1/3 items-center justify-center">
            <HeroShield />
          </div>
        </div>
      </div>
    </section>
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

const tierOrder: Record<string, number> = { gold: 0, silver: 1, bronze: 2 };
const homepageTiers = [...tierDefinitions].sort(
  (a, b) => (tierOrder[a.tier] ?? 9) - (tierOrder[b.tier] ?? 9),
);

const complianceItems = [
  "Initial State Filings and Fees",
  "Registered Agent Renewal",
  "Corporate Records & Minutes",
  "Offshore Records Storage",
  "Nominee Service Renewal (Gold)",
];

const v3Differentiators = [
  {
    icon: "Clock",
    title: "Year-Round Nominees Included",
    description:
      "Not 'nominee for a day' — your nominees serve all year, every year. Included in Gold packages at no extra cost.",
  },
  {
    icon: "Globe",
    title: "Offshore Records Since 2012",
    description:
      "Corporate records stored offshore for genuine privacy. Free with every Gold package — competitors charge $400–$5,000/year.",
  },
  {
    icon: "DollarSign",
    title: "$1,275 All-Inclusive Pricing",
    description:
      "Formation, registered agent, EIN, operating agreement, and state fees — all bundled. No surprise add-ons at checkout.",
  },
  {
    icon: "Users",
    title: "Specialist Team",
    description:
      "Privacy formation specialists — not a call center, not a chatbot. Real people who know your name and understand complex structures.",
  },
  {
    icon: "Award",
    title: "25 Years of Specialization",
    description:
      "Focused exclusively on Wyoming and Nevada privacy formation since 2000. Depth over breadth.",
  },
  {
    icon: "Phone",
    title: "Talk to a Real Person",
    description:
      "Have questions? Call us directly. No chatbots, no offshore call centers, no sales pressure.",
  },
];

const v3HowItWorks = [
  {
    label: "Choose Your Protection Level",
    description:
      "Explore our Privacy, Asset Protection, or Formation guides — or jump straight to packages if you already know what you need.",
  },
  {
    label: "Select Your Package",
    description:
      "Pick the package that fits your needs. Gold for full privacy with year-round nominees, Silver for expert formation with everything included.",
  },
  {
    label: "We Handle the Filing",
    description:
      "Complete a short form with your entity details. We file with the state, obtain your EIN, prepare your operating agreement, and set up registered agent service.",
  },
  {
    label: "You're Protected",
    description:
      "Receive your formation documents, nominee confirmations, and ongoing compliance support. Your privacy and assets are secured.",
  },
];

const v3ComplianceCallout = {
  headline: "Already Have an Entity? We Keep You Compliant.",
  description:
    "Registered agent renewals, annual reports, corporate minutes, virtual office upgrades, and domestication services. Ongoing support — not just a mailbox.",
  cta: { label: "Explore Compliance Services →", href: "/compliance" },
  secondaryCTA: { label: "Call 1-800-553-0615 →", href: "tel:+18005530615" },
};

/* ------------------------------------------------
   V3 Privacy Bridge (inlined — previous design)
   ------------------------------------------------ */
const v3BridgeColumns = [
  {
    icon: Eye,
    number: "01",
    title: "Your Name Is Public",
    description:
      "When you form an LLC or corporation, your name, address, and role appear on state records. Anyone — lawsuits, competitors, data brokers — can look it up in seconds.",
    accent: "text-destructive",
    accentBg: "bg-destructive/10",
  },
  {
    icon: Scale,
    number: "02",
    title: "That Makes You a Target",
    description:
      "Visible ownership invites frivolous lawsuits, asset searches, and unwanted solicitation. Business owners with public records are 3x more likely to face nuisance litigation.",
    accent: "text-warning",
    accentBg: "bg-warning/10",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "We Fix That",
    description:
      "Year-round nominees replace your name on every public filing. Offshore records keep your documents outside U.S. jurisdiction. Your ownership stays private — permanently.",
    accent: "text-success",
    accentBg: "bg-success/10",
  },
];

function V3PrivacyBridge({ className }: { className?: string }) {
  return (
    <section className={cn("py-section-y", className)}>
      <div className="mx-auto max-w-content px-container-x">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
              Why This Matters
            </p>
            <h2 className="font-display text-display-sm font-semibold text-foreground max-w-[32ch] mx-auto">
              Your Name Is on Public Records. It Doesn&rsquo;t Have to Be.
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-3">
          {v3BridgeColumns.map((col, index) => (
            <ScrollReveal key={col.number} delay={index * 120}>
              <div className="relative flex flex-col items-start gap-4 rounded-card bg-surface border border-border p-6 h-full">
                <div className="flex items-center gap-3 w-full">
                  <span className="font-mono text-caption font-bold text-muted/40">
                    {col.number}
                  </span>
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      col.accentBg,
                    )}
                  >
                    <col.icon
                      className={cn("h-5 w-5", col.accent)}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="font-display text-heading-sm font-semibold text-foreground">
                  {col.title}
                </h3>
                <p className="text-body-sm text-muted leading-relaxed">
                  {col.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------
   V3 StatsBar (inlined — previous design)
   ------------------------------------------------ */
const v3Stats = [
  { value: "25", label: "Years of Specialized Privacy" },
  { value: "10,000+", label: "Entities Formed" },
  { value: "2", label: "States (Wyoming & Nevada)" },
  { value: "365", label: "Days of Nominee Coverage" },
];

function V3StatsBar({ className }: { className?: string }) {
  return (
    <section className={cn("bg-primary py-16 lg:py-20", className)}>
      <div className="mx-auto max-w-content px-container-x">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {v3Stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="flex flex-col items-center text-center lg:px-6">
                <span className="font-display text-display-lg font-medium text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 text-body-sm text-white/70">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------
   V3 HowItWorks (inlined — previous horizontal design)
   ------------------------------------------------ */
function V3HowItWorks({
  steps,
}: {
  steps: { number: number; title: string; description: string }[];
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <ScrollReveal
            key={step.number}
            delay={index * 120}
            className="md:flex-1"
          >
            <div className="relative flex flex-row items-start gap-4 pb-8 last:pb-0 md:flex-col md:items-center md:gap-0 md:pb-0 md:text-center">
              <div className="relative flex flex-col items-center md:mb-4 md:w-full md:flex-row md:justify-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-white shadow-card">
                  <span className="font-display text-heading-sm font-bold">
                    {step.number}
                  </span>
                </div>
                {!isLast && (
                  <div
                    className="mt-1 h-full w-0 border-l-2 border-dashed border-primary-300 md:mt-0 md:absolute md:left-[calc(50%+32px)] md:top-1/2 md:h-0 md:w-[calc(100%-64px)] md:-translate-y-1/2 md:border-l-0 md:border-t-2"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="flex-1 md:mt-4 md:px-3">
                <h3 className="text-heading-sm font-display font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-body text-muted">{step.description}</p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function HomepageV3Archive() {
  return (
    <>
      {/* Archive banner */}
      <div className="bg-amber-100 border-b border-amber-300 px-4 py-2 text-center text-sm text-amber-800 font-medium">
        Archive: Homepage v3 (pre-v10 design) —{" "}
        <RouterLink to="/" className="underline">
          View current homepage
        </RouterLink>
      </div>

      <V3HomepageHero />

      <TrustTicker />

      <V3PrivacyBridge className="bg-background" />

      <section className="bg-background py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <PackageWizard />
          </ScrollReveal>
        </div>
      </section>

      <section
        className="py-section-y"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, var(--primary-100) 100%)",
        }}
      >
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                How Can We Help?
              </p>
              <h2 className="font-display text-display-sm font-semibold text-foreground max-w-[36ch]">
                Choose Your Starting Point
              </h2>
              <p className="mt-3 text-body-lg text-muted max-w-narrow">
                Whether you need privacy protection, asset shielding, or
                business formation — we specialize in all three.
              </p>
            </div>
          </ScrollReveal>
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
        </div>
      </section>

      <section className="bg-surface py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                Ready to Get Started?
              </p>
              <h2 className="font-display text-display-sm font-semibold text-foreground">
                All-Inclusive Packages — See Exactly What&apos;s Included
              </h2>
              <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
                Transparent pricing with everything bundled. No hidden fees, no
                surprise add-ons.
              </p>
            </div>
          </ScrollReveal>
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
        </div>
      </section>

      <V3StatsBar />

      <section className="bg-primary py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2
                className="font-display text-display font-medium text-white max-w-[28ch] mx-auto"
                style={{ textWrap: "balance" }}
              >
                Why Clients Choose Incorporate123
              </h2>
              <p className="mt-3 text-body-lg text-white/70 max-w-narrow mx-auto">
                Not a budget filing service. Not a $5,000 consultation. 25 years
                of specialized expertise in the space between.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {v3Differentiators.map((item, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="rounded-card bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-caption font-bold text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <span className="text-white/80">
                        {differentiatorIcons[item.icon] ?? (
                          <Icon
                            name={item.icon}
                            size="lg"
                            className="text-white/80"
                          />
                        )}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-body-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-display-sm font-semibold text-foreground">
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

      <section className="bg-primary-50 border-y border-border py-12 lg:py-16">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <TrustSignals items={trustSignalItems} layout="grid" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
                Our Process
              </p>
              <h2 className="font-display text-display-sm font-semibold text-foreground">
                How It Works
              </h2>
            </div>
          </ScrollReveal>
          <V3HowItWorks
            steps={v3HowItWorks.map((step, index) => ({
              number: index + 1,
              title: step.label,
              description: step.description,
            }))}
          />
        </div>
      </section>

      <section className="bg-primary py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <ComplianceCallout
                  headline={v3ComplianceCallout.headline}
                  description={v3ComplianceCallout.description}
                  cta={v3ComplianceCallout.cta}
                  secondaryCTA={v3ComplianceCallout.secondaryCTA}
                  variant="dark"
                />
              </div>
              <div className="mt-8 lg:mt-0 lg:basis-1/3">
                <div className="rounded-card bg-white/5 p-6">
                  <p className="text-caption font-semibold text-white/70 uppercase tracking-[0.15em] mb-4">
                    We Handle
                  </p>
                  <ul className="space-y-3">
                    {complianceItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-body-sm text-white/80"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/20 text-success">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section-y">
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
              trustSignal="1-800-553-0615 — Call anytime"
            />
          </ScrollReveal>
        </div>
      </section>

      <StickyMobileCTA
        primaryCTA={{
          variant: "cta",
          children: "Find Your Package",
          href: "#wizard",
        }}
        phone="1-800-553-0615"
      />
    </>
  );
}
