import { useState, useCallback, useMemo } from "react";
import {
  useNavigate,
  useSearchParams,
  Link as RouterLink,
} from "react-router-dom";
import { PackageLayout } from "@/design-system/layouts/PackageLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { AddOnConfigurator } from "@/design-system/components/AddOnConfigurator";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { PackageHero } from "@/design-system/components/PackageHero";
import { PillarFinalCTA } from "@/design-system/components/PillarFinalCTA";
import { PricingGrid } from "@/design-system/components/PricingGrid";
import { RunningTotal } from "@/design-system/components/RunningTotal";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { SocialProofStrip } from "@/design-system/components/SocialProofStrip";
import { StickyMobileCTA } from "@/design-system/components/StickyMobileCTA";
import { Icon } from "@/design-system/primitives/Icon";
import { testimonials } from "@/data/testimonials";
import {
  getTierMinPrice,
  getTierFeaturesForState,
  getAvailableTiersForState,
  getPackageUrl,
  ALL_FORMATION_STATES,
} from "@/data/packages";
import {
  getTierContent,
  getTierStateContext,
  type HeroVisualVariant,
  type MetallicAccent,
} from "@/data/tierContent";
import type { TierDefinition, EntityType } from "@/lib/types";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
interface TierPageClientProps {
  tier: TierDefinition;
  /**
   * Explicit state from a flat-URL route (e.g. /wyoming-gold → "Wyoming").
   * Wins over the ?state= query param and the tier's default first state.
   */
  forcedState?: string;
}

const HOW_IT_WORKS_BY_TIER: Record<
  string,
  {
    number: number;
    title: string;
    description: string;
    tag?: string;
    color: "blue" | "green" | "amber" | "purple";
  }[]
> = {
  bronze: [
    {
      number: 1,
      title: "Pick state + entity type",
      description:
        "Choose Wyoming or Nevada and tell us LLC or Corporation. Five minutes.",
      tag: "Day 1",
      color: "amber",
    },
    {
      number: 2,
      title: "We draft & file",
      description:
        "Articles drafted to your entity spec, filed with the Secretary of State, state fees paid.",
      tag: "Days 1–3",
      color: "amber",
    },
    {
      number: 3,
      title: "Compliance package delivered",
      description:
        "Stamped articles, custom operating agreement, corporate records, registered agent confirmation, and your bank-account opening kit.",
      tag: "Days 5–7",
      color: "amber",
    },
    {
      number: 4,
      title: "You pull your own EIN",
      description:
        "Grab it free at irs.gov/ein in ten minutes. We've left a reminder in your welcome packet with the direct link.",
      tag: "Day 7",
      color: "amber",
    },
  ],
  silver: [
    {
      number: 1,
      title: "Pick state + entity type",
      description:
        "Choose Wyoming or Nevada and tell us LLC or Corporation. Five minutes.",
      tag: "Day 1",
      color: "blue",
    },
    {
      number: 2,
      title: "We draft, file & obtain EIN",
      description:
        "Articles filed with the state, EIN pulled from the IRS, virtual office assigned, mail forwarding switched on.",
      tag: "Days 1–4",
      color: "blue",
    },
    {
      number: 3,
      title: "Compliance package delivered",
      description:
        "Stamped articles, operating agreement, EIN letter, virtual office details, corporate records, and your bank-account opening kit.",
      tag: "Days 5–7",
      color: "blue",
    },
    {
      number: 4,
      title: "Mail starts flowing",
      description:
        "Weekly mail forwarding begins immediately. Nothing gets stuck at an address you don't visit.",
      tag: "Ongoing",
      color: "blue",
    },
  ],
  gold: [
    {
      number: 1,
      title: "Pick state + entity type",
      description:
        "Choose Wyoming, Nevada, California, or Florida. Tell us LLC or Corporation. Five minutes.",
      tag: "Day 1",
      color: "amber",
    },
    {
      number: 2,
      title: "Nominees assigned & entity filed",
      description:
        "Real-person nominees assigned as manager/officer. Articles filed listing the nominee — your name never appears on the formation documents.",
      tag: "Days 1–4",
      color: "amber",
    },
    {
      number: 3,
      title: "Compliance + privacy stack delivered",
      description:
        "Stamped articles with nominee, your internal operating agreement naming you as the real owner, EIN, virtual office, bank kit, and offshore records storage.",
      tag: "Days 5–7",
      color: "amber",
    },
    {
      number: 4,
      title: "Year-round privacy maintained",
      description:
        "Every annual report and state filing is signed by the nominee — forever. You never have to re-do this; it just works as long as your package is current.",
      tag: "Ongoing",
      color: "amber",
    },
  ],
};

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
export function TierPageClient({ tier, forcedState }: TierPageClientProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialState = useMemo(() => {
    if (forcedState) {
      const matched = tier.availableStates.find(
        (s) => s.toLowerCase() === forcedState.toLowerCase(),
      );
      if (matched) return matched;
    }
    const param = searchParams.get("state");
    if (param) {
      const matched = tier.availableStates.find(
        (s) => s.toLowerCase() === param.toLowerCase(),
      );
      if (matched) return matched;
    }
    return tier.availableStates[0];
  }, [forcedState, searchParams, tier.availableStates]);

  const [selectedState, setSelectedState] = useState(initialState);
  const [entityType, setEntityType] = useState<EntityType>("llc");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = useCallback((id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  }, []);

  /* -- URL contract: clicking a state chip on a flat-URL page navigates -- */
  const handleStateChange = useCallback(
    (nextState: string) => {
      setSelectedState(nextState);
      const href = getPackageUrl(tier.slug, nextState);
      if (href && href !== "/packages") {
        navigate(href);
      }
    },
    [navigate, tier.slug],
  );

  const variant = tier.stateVariants[selectedState];
  const currentPrice = variant
    ? variant.prices[entityType]
    : { formation: getTierMinPrice(tier, entityType), renewal: 0 };

  const addOnTotal = useMemo(
    () =>
      selectedAddOns.reduce((sum, id) => {
        const addOn = tier.addOns.find((a) => a.id === id);
        return sum + (addOn?.price ?? 0);
      }, 0),
    [selectedAddOns, tier.addOns],
  );

  const grandTotal = currentPrice.formation + addOnTotal;

  const tierDisplayName = `${tier.name} ${entityType === "llc" ? "LLC" : "Corporation"}`;
  const packageName = variant
    ? `${selectedState} ${tierDisplayName}`
    : tierDisplayName;

  const ctaLabel = `Get Started — $${currentPrice.formation.toLocaleString()}`;

  const stateOptions = useMemo(
    () =>
      ALL_FORMATION_STATES.map(({ name, abbreviation }) => ({
        name,
        abbreviation,
        available: tier.availableStates.includes(name),
      })),
    [tier.availableStates],
  );

  /* -- Content: tier-level + state-level -------------------------------- */
  const content = getTierContent(tier.slug);
  const stateContext = getTierStateContext(tier.slug, selectedState);

  const heroVisual: HeroVisualVariant =
    stateContext?.heroVisualVariant ?? "docs";

  const metallic: MetallicAccent = content?.metallic ?? "silver";

  /* -- Pricing grid: all tiers in selected state with decision guide ----- */
  const pricingTiers = useMemo(() => {
    const available = getAvailableTiersForState(selectedState);
    const tierOrder = { bronze: 0, silver: 1, gold: 2 };
    available.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);

    return available.map((t) => {
      const sv = t.stateVariants[selectedState];
      const price = sv ? sv.prices[entityType].formation : 0;
      const tierCopy = getTierContent(t.slug);
      const decisionText =
        tierCopy && tier.slug in tierCopy.decisionGuide
          ? tierCopy.decisionGuide[tier.slug as "bronze" | "silver" | "gold"]
          : (sv?.description ?? t.description);
      return {
        id: t.slug,
        name: `${t.name}`,
        price,
        period: "one-time",
        description: decisionText,
        features: getTierFeaturesForState(t, selectedState),
        badge: t.badge,
        highlighted: t.slug === tier.slug,
      };
    });
  }, [selectedState, entityType, tier.slug]);

  const runningTotalAddOns = useMemo(
    () =>
      selectedAddOns
        .map((id) => {
          const addOn = tier.addOns.find((a) => a.id === id);
          if (!addOn) return null;
          return { name: addOn.name, price: addOn.price };
        })
        .filter(Boolean) as { name: string; price: number }[],
    [selectedAddOns, tier.addOns],
  );

  const checkoutHref = `/checkout/configure?tier=${tier.slug}&state=${selectedState.toLowerCase()}&entity=${entityType}`;

  /* -- Deterministic testimonial pick ------------------------------------ */
  const bestTestimonial = useMemo(() => {
    const matching = testimonials.find(
      (t) =>
        t.serviceUsed.toLowerCase().includes(selectedState.toLowerCase()) ||
        t.serviceUsed.toLowerCase().includes(tier.tier),
    );
    return matching ?? testimonials[0];
  }, [selectedState, tier.tier]);

  const metallicVar = `var(--tier-${metallic})`;
  const metallicSoft = `var(--tier-${metallic}-soft)`;
  const metallicInk = `var(--tier-${metallic}-ink)`;

  return (
    <PackageLayout showTrustBar={false}>
      {/* 1. HERO */}
      <PackageHero
        packageName={packageName}
        eyebrow={content?.eyebrow ?? `${tier.name} Package`}
        tagline={content?.heroTagline}
        prices={
          variant?.prices ?? tier.stateVariants[tier.availableStates[0]].prices
        }
        badge={tier.badge}
        entityType={entityType}
        onEntityTypeChange={setEntityType}
        primaryCTA={{ label: ctaLabel, href: checkoutHref }}
        secondaryCTA={{
          label: "Compare all tiers",
          href: "/compare-packages",
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Packages", href: "/packages" },
          { label: selectedState, href: "/packages" },
          { label: `${tier.name} Package` },
        ]}
        stateSelector={{
          states: stateOptions,
          selected: selectedState,
          onChange: handleStateChange,
        }}
        heroVisual={heroVisual}
        metallic={metallic}
        tierName={tier.name}
        stateAbbreviation={variant?.abbreviation}
        stateName={selectedState}
        trustStats={[
          { icon: "Calendar", label: "25+ years in business" },
          { icon: "CheckCircle2", label: "All-inclusive pricing" },
          { icon: "ShieldCheck", label: "Money-back guarantee" },
        ]}
      />

      {/* 2. TRUST STRIP — thin, reassuring divider */}
      <section className="border-b border-border bg-surface py-6">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-10 gap-y-3 px-container-x text-body-sm text-muted">
          <span className="flex items-center gap-2">
            <Icon name="Calendar" size="sm" color={metallicInk} />
            Founded 1999 · 40,000+ entities formed
          </span>
          <span className="hidden sm:inline text-border">·</span>
          <span className="flex items-center gap-2">
            <Icon name="ShieldCheck" size="sm" color={metallicInk} />
            Money-back guarantee on every filing
          </span>
          <span className="hidden sm:inline text-border">·</span>
          <span className="flex items-center gap-2">
            <Icon name="Lock" size="sm" color={metallicInk} />
            Privacy is our only business
          </span>
        </div>
      </section>

      {/* 3. TIER PROMISE — editorial two-column with audience list */}
      {content && (
        <section className="bg-background py-section-y-sm">
          <div className="mx-auto max-w-content px-container-x">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p
                  className="text-body-sm font-semibold uppercase tracking-[0.18em] mb-3"
                  style={{ color: metallicInk }}
                >
                  The Promise
                </p>
                <h2 className="font-display text-display-sm font-bold text-foreground leading-tight">
                  {content.promiseHeading}
                </h2>
                <p className="mt-5 text-body-lg text-muted max-w-[560px]">
                  {content.promiseBody}
                </p>
              </div>
              <div
                className="rounded-card-lg border p-8"
                style={{
                  background: metallicSoft,
                  borderColor: `var(--tier-${metallic}-mid)`,
                }}
              >
                <p
                  className="text-body-sm font-semibold uppercase tracking-wider mb-4"
                  style={{ color: metallicInk }}
                >
                  Built for
                </p>
                <ul className="space-y-3">
                  {content.audience.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-body text-foreground"
                    >
                      <Icon
                        name="Check"
                        size="sm"
                        className="mt-1 shrink-0"
                        color={metallicVar}
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. STATE CONTEXT — "Why {state} for {tier}" */}
      {stateContext && (
        <section className="bg-surface py-section-y-sm border-y border-border">
          <div className="mx-auto max-w-content px-container-x">
            <div className="max-w-narrow">
              <p
                className="text-body-sm font-semibold uppercase tracking-[0.18em] mb-3"
                style={{ color: metallicInk }}
              >
                State Context
              </p>
              <h2 className="font-display text-heading-lg font-bold text-foreground">
                {stateContext.headline}
              </h2>
              <p className="mt-4 text-body-lg text-muted">
                {stateContext.body}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 5. DECISION GUIDE — pricing grid with "choose if" copy */}
      <section
        id="pricing-grid"
        className="scroll-mt-24 bg-background py-section-y-sm"
      >
        <div className="mx-auto max-w-content px-container-x">
          <SectionHeader
            eyebrow="Decision Guide"
            title={`Why ${tier.name}? How it compares.`}
            subtitle={`Every card shows "choose this if" logic — not a feature dump. ${tier.name} is highlighted.`}
            className="mb-10"
          />
          <PricingGrid
            tiers={pricingTiers}
            addOns={[]}
            onTierSelect={() => {
              const el = document.getElementById("addon-configurator");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </section>

      {/* 6. DELIVERABLES — what you'll have in 5-7 business days */}
      {content && (
        <section className="bg-surface py-section-y-sm">
          <div className="mx-auto max-w-content px-container-x">
            <SectionHeader
              eyebrow="What You'll Receive"
              title={`Inside the ${tier.name} package`}
              subtitle="Every item below is handled for you. No DIY gaps, no hidden gotchas."
              className="mb-10"
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.deliverables.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-card-lg border border-border bg-surface p-6 transition-colors hover:bg-background"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ background: metallicSoft }}
                  >
                    <Icon name={item.icon} size="md" color={metallicVar} />
                  </div>
                  <div>
                    <h3 className="font-display text-heading-sm font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-body-sm text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. HOW IT WORKS — tier-specific process */}
      <section className="bg-background py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <SectionHeader
            eyebrow="Process"
            title="From order to incorporated — five business days"
            subtitle="Exactly what happens between checkout and your entity being ready."
            className="mb-10"
          />
          <HowItWorks steps={HOW_IT_WORKS_BY_TIER[tier.slug] ?? []} />
        </div>
      </section>

      {/* 8. CONFIGURE — add-ons + running total (single CTA in RunningTotal only) */}
      <section className="bg-surface py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <SectionHeader
            eyebrow="Configure"
            title="Add government filings or upgrades"
            subtitle="Optional. The base package above is complete on its own."
            className="mb-10"
          />
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2" id="addon-configurator">
              <AddOnConfigurator
                addOns={tier.addOns}
                selectedIds={selectedAddOns}
                onToggle={toggleAddOn}
                basePrice={currentPrice.formation}
              />
            </div>
            <div className="mt-8 lg:mt-0">
              <RunningTotal
                tier={{
                  name: packageName,
                  price: currentPrice.formation,
                }}
                entityType={entityType === "llc" ? "LLC" : "Corporation"}
                addOns={runningTotalAddOns}
                total={grandTotal}
                checkoutHref={checkoutHref}
                checkoutLabel={ctaLabel}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. SOFT EXCLUSIONS — "A few things we don't do — so you know" */}
      {content && content.softExclusions.length > 0 && (
        <section className="bg-background py-section-y-sm">
          <div className="mx-auto max-w-content px-container-x">
            <SectionHeader
              eyebrow="Transparency"
              title="A few things we don't do — so you know upfront"
              subtitle="Privacy and formation are what we do well. Here's where we'll happily point you elsewhere."
              className="mb-10"
            />
            <div className="mx-auto max-w-[820px] space-y-4">
              {content.softExclusions.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-card-lg border border-border bg-surface p-6"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ background: metallicSoft }}
                  >
                    <Icon name="Info" size="sm" color={metallicInk} />
                  </div>
                  <div>
                    <h3 className="font-display text-heading-sm font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-body text-muted">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. SOCIAL PROOF */}
      <SocialProofStrip
        testimonial={{
          quote: bestTestimonial.quote,
          author: bestTestimonial.name,
          role: bestTestimonial.businessType,
        }}
      />

      {/* 11. FAQ — state × tier specific */}
      {stateContext && stateContext.faqs.length > 0 && (
        <section className="bg-background py-section-y-sm">
          <div className="mx-auto max-w-content px-container-x">
            <SectionHeader
              eyebrow="FAQ"
              title={`${tier.name} in ${selectedState} — common questions`}
              subtitle="Specific to this tier and state. Not a generic pool."
              className="mb-10"
            />
            <div className="mx-auto max-w-narrow">
              <Accordion type="single" variant="card">
                {stateContext.faqs.map((faq) => (
                  <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
                    <p className="text-body text-muted">{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* 12. CROSS LINKS — "Want to go deeper?" */}
      {stateContext && stateContext.crossLinks.length > 0 && (
        <section className="bg-surface py-section-y-sm">
          <div className="mx-auto max-w-content px-container-x">
            <SectionHeader
              eyebrow="Go Deeper"
              title="Read more before you decide"
              subtitle="Every card links to a guide, comparison, or pillar page with more depth."
              className="mb-10"
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {stateContext.crossLinks.map((link) => (
                <RouterLink
                  key={link.href}
                  to={link.href}
                  className="group flex flex-col rounded-card-lg border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <span
                    className="text-caption font-semibold uppercase tracking-wider"
                    style={{ color: metallicInk }}
                  >
                    {link.kind === "pillar" && "Pillar"}
                    {link.kind === "cluster" && "Guide"}
                    {link.kind === "comparison" && "Comparison"}
                  </span>
                  <h3 className="mt-3 font-display text-heading-sm font-semibold text-foreground">
                    {link.title}
                  </h3>
                  <p className="mt-2 flex-1 text-body-sm text-muted">
                    {link.description}
                  </p>
                  <span
                    className="mt-5 inline-flex items-center gap-1 text-body-sm font-medium group-hover:gap-2 transition-all"
                    style={{ color: metallicVar }}
                  >
                    Read
                    <Icon name="ArrowRight" size="sm" />
                  </span>
                </RouterLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 13. FINAL CTA — dark close, bespoke per tier */}
      <PillarFinalCTA
        heading={content?.finalCtaHeading ?? "Ready to Get Started?"}
        description={
          content?.finalCtaDescription ??
          `${packageName} — $${currentPrice.formation.toLocaleString()} all-inclusive.`
        }
        ctaLabel={ctaLabel}
        ctaHref={checkoutHref}
      />

      {/* 14. STICKY MOBILE CTA */}
      <StickyMobileCTA
        primaryCTA={{
          children: ctaLabel,
          href: checkoutHref,
        }}
        phone="1-800-553-0615"
      />
    </PackageLayout>
  );
}
