import { useState, useCallback, useMemo } from "react";
import {
  useNavigate,
  useSearchParams,
  Link as RouterLink,
} from "react-router-dom";
import { PackageLayout } from "@/design-system/layouts/PackageLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { PackageHero } from "@/design-system/components/PackageHero";
import { PackageValueCompare } from "@/design-system/components/PackageValueCompare";
import { PillarFinalCTA } from "@/design-system/components/PillarFinalCTA";
import { PricingGrid } from "@/design-system/components/PricingGrid";
import { ProductSchema } from "@/design-system/components/ProductSchema";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { SocialProofStrip } from "@/design-system/components/SocialProofStrip";
import { StickyMobileCTA } from "@/design-system/components/StickyMobileCTA";
import { UpgradesPreview } from "@/design-system/components/UpgradesPreview";
import { Eyebrow } from "@/design-system/primitives/Eyebrow";
import { Icon } from "@/design-system/primitives/Icon";
import {
  getTransactionalFaqs,
  getValueComparison,
} from "@/data/packageEnhancements";
import { testimonials } from "@/data/testimonials";
import {
  getTierMinPrice,
  getTierFeaturesForState,
  getAvailableTiersForState,
  getPackageUrl,
  getAddOnsForContext,
  ALL_FORMATION_STATES,
} from "@/data/packages";
import {
  getTierContent,
  getTierStateContext,
  getPackageIdentity,
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

  /* -- Upgrades filtered for this (tier, state) context ----------------- */
  const availableUpgrades = useMemo(
    () => getAddOnsForContext(tier.slug, selectedState),
    [tier.slug, selectedState],
  );

  const upgradesContextNote = useMemo(() => {
    const hasNevadaOnly = availableUpgrades.some((u) =>
      u.appliesTo?.states?.includes("Nevada"),
    );
    const parts: string[] = [];
    if (tier.slug === "gold") {
      parts.push(
        "Year-round nominee privacy is already included in Gold, so the Privacy Services Upgrade isn't listed below.",
      );
    }
    if (selectedState !== "Nevada" && !hasNevadaOnly) {
      parts.push(
        "Executive VO and Part-Time Private Suite are Nevada-only physical products and aren't available on this package.",
      );
    }
    return parts.join(" ") || undefined;
  }, [tier.slug, selectedState, availableUpgrades]);

  /* -- Package identity override (CA Private, FL Private) --------------- */
  const identity = getPackageIdentity(tier.slug, selectedState);

  const entityLabel = entityType === "llc" ? "LLC" : "Corporation";
  /** Short name used in section headers: "Gold" or "California Private". */
  const shortName = identity ? identity.displayTierName : tier.name;
  const tierDisplayName = `${shortName} ${entityLabel}`;
  const packageName = identity
    ? tierDisplayName
    : variant
      ? `${selectedState} ${tierDisplayName}`
      : tierDisplayName;

  const ctaLabel = `Get Started — $${currentPrice.formation.toLocaleString()}`;

  /**
   * Only show states this tier is actually available in — we used to render
   * disabled "(N/A)" chips for unreachable combinations but they added noise
   * without teaching anything useful. The user can reach other tiers via the
   * decision grid below if they want to switch.
   */
  const stateOptions = useMemo(
    () =>
      ALL_FORMATION_STATES.filter(({ name }) =>
        tier.availableStates.includes(name),
      ).map(({ name, abbreviation }) => ({
        name,
        abbreviation,
        available: true,
      })),
    [tier.availableStates],
  );

  /* -- Content: tier-level, with package-identity overrides for CA/FL --- */
  const baseContent = getTierContent(tier.slug);
  const content = useMemo(() => {
    if (!baseContent) return baseContent;
    if (!identity) return baseContent;
    return {
      ...baseContent,
      eyebrow: identity.eyebrow,
      heroTagline: identity.heroTagline,
      promiseHeading: identity.promiseHeading,
      promiseBody: identity.promiseBody,
      audience: identity.audience ?? baseContent.audience,
      finalCtaHeading: identity.finalCtaHeading,
      finalCtaDescription: identity.finalCtaDescription,
    };
  }, [baseContent, identity]);
  const stateContext = getTierStateContext(tier.slug, selectedState);

  const heroVisual: HeroVisualVariant =
    stateContext?.heroVisualVariant ?? "docs";

  const metallic: MetallicAccent = content?.metallic ?? "silver";

  /* -- Pricing grid: all tiers in selected state with decision guide -----
     For the compact decision grid we don't dump the full feature matrix —
     we surface the 3–4 features that *define* each tier. Priority order
     puts tier-distinctive features first so Bronze/Silver/Gold actually
     look different at a glance. */
  const DECISION_FEATURE_PRIORITY = [
    "Year-Round Nominee Director / Manager",
    "Year-Round Nominee Officers",
    "Virtual Office Address",
    "Weekly Mail Forwarding",
    "EIN Obtainment",
    "NV Business License",
    "Custom Operating Agreement",
    "Registered Agent (1 Year)",
    "Offshore Records Storage",
    "State Filing Fees Included",
  ];

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

      const allFeatures = getTierFeaturesForState(t, selectedState);
      const includedFeatures = allFeatures.filter(
        (f) => f.status === "included",
      );
      const ordered = [...includedFeatures].sort((a, b) => {
        const ai = DECISION_FEATURE_PRIORITY.indexOf(a.name);
        const bi = DECISION_FEATURE_PRIORITY.indexOf(b.name);
        const aRank = ai === -1 ? 999 : ai;
        const bRank = bi === -1 ? 999 : bi;
        return aRank - bRank;
      });

      return {
        id: t.slug,
        name: `${t.name}`,
        price,
        period: "one-time",
        description: decisionText,
        features: ordered,
        badge: t.badge,
        highlighted: t.slug === tier.slug,
      };
    });
  }, [selectedState, entityType, tier.slug]);

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

  /* -- Package enhancements: transactional FAQs, alternatives, value compare */
  const transactionalFaqs = useMemo(
    () =>
      getTransactionalFaqs({
        tier: tier.slug,
        state: selectedState,
        renewal: currentPrice.renewal,
      }),
    [tier.slug, selectedState, currentPrice.renewal],
  );

  const valueCompare = useMemo(
    () =>
      getValueComparison(
        tier.slug,
        selectedState,
        currentPrice.formation,
        currentPrice.renewal,
      ),
    [tier.slug, selectedState, currentPrice.formation, currentPrice.renewal],
  );

  /* -- Product JSON-LD schema fields -------------------------------------- */
  const productSchemaDescription = `${packageName} — all-inclusive ${entityLabel} formation${
    tier.slug === "gold"
      ? " with year-round nominee services and offshore records storage"
      : tier.slug === "silver"
        ? " with virtual office, EIN, and weekly mail forwarding"
        : " with registered agent, state fees, and compliance included"
  }.`;

  return (
    <PackageLayout showTrustBar={false}>
      {/* Product JSON-LD for SEO rich snippets */}
      <ProductSchema
        name={packageName}
        description={productSchemaDescription}
        price={currentPrice.formation}
      />

      {/* 0. PRICING TBD BANNER — remove after Apr 20 pricing confirmation */}
      <div className="bg-accent/10 border-b border-accent/30">
        <div className="mx-auto max-w-content px-container-x py-2 text-center text-body-sm text-foreground">
          <span className="font-semibold">Prototype pricing</span> — all figures
          on this page are placeholders pending final confirmation on April 20.
        </div>
      </div>

      {/* 1. HERO */}
      <PackageHero
        packageName={packageName}
        eyebrow={content?.eyebrow ?? `${shortName} Package`}
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
          { label: `${shortName} Package` },
        ]}
        stateSelector={{
          states: stateOptions,
          selected: selectedState,
          onChange: handleStateChange,
        }}
        heroVisual={heroVisual}
        metallic={metallic}
        tierName={identity ? "Private" : tier.name}
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
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-[96px]">
              <div className="max-w-[620px]">
                <p
                  className="text-body-sm font-semibold uppercase tracking-[0.18em] mb-4"
                  style={{ color: metallicInk }}
                >
                  The Promise
                </p>
                <h2 className="font-display text-display-sm font-bold text-foreground leading-[1.1]">
                  {content.promiseHeading}
                </h2>
                <p className="mt-6 text-body-lg text-muted leading-relaxed">
                  {content.promiseBody}
                </p>
              </div>
              <div
                className="rounded-card-lg border p-8 lg:self-start"
                style={{
                  background: metallicSoft,
                  borderColor: `var(--tier-${metallic}-mid)`,
                }}
              >
                <Eyebrow
                  tone="inherit"
                  className="mb-5"
                  style={{ color: metallicInk }}
                >
                  Built for
                </Eyebrow>
                <ul className="space-y-4">
                  {content.audience.map((line) => (
                    <li
                      key={line}
                      className="flex items-baseline gap-3 text-body text-foreground leading-snug"
                    >
                      <Icon
                        name="Check"
                        size="sm"
                        className="relative top-[3px] shrink-0"
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
            title={`Why ${shortName}? How it compares.`}
            subtitle={`Every card shows "choose this if" logic — not a feature dump. ${shortName} is highlighted.`}
            className="mb-10"
          />
          <PricingGrid
            tiers={pricingTiers}
            addOns={[]}
            maxFeatures={4}
            compareHref="/compare-packages"
            onTierSelect={() => {
              navigate(checkoutHref);
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
              title={`Inside the ${shortName} package`}
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

      {/* 6b. VALUE COMPARE — Gold tier only; price vs assembled elsewhere */}
      {valueCompare && (
        <section className="bg-background py-section-y-sm">
          <div className="mx-auto max-w-content px-container-x">
            <SectionHeader
              eyebrow="Value Comparison"
              title={valueCompare.heading}
              subtitle="What the same services would cost if you sourced them separately from different providers."
              className="mb-10"
            />
            <PackageValueCompare
              ourTotal={valueCompare.ourTotal}
              ourRenewal={valueCompare.ourRenewal}
              theirTotalLow={valueCompare.theirTotalLow}
              theirTotalHigh={valueCompare.theirTotalHigh}
              lines={valueCompare.lines}
              bottomLine={valueCompare.bottomLine}
            />
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

      {/* 8. OPTIONAL UPGRADES — read-only preview; selection happens at checkout */}
      <section className="bg-surface py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <SectionHeader
            eyebrow="Optional Upgrades"
            title="What you can add at checkout"
            subtitle={`Only upgrades compatible with ${shortName} in ${selectedState} are shown — nothing redundant, nothing unavailable.`}
            className="mb-10"
          />
          <UpgradesPreview
            upgrades={availableUpgrades}
            checkoutHref={checkoutHref}
            contextNote={upgradesContextNote}
          />
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

      {/* 11. FAQ — state × tier specific (educational) + transactional (buying objections) */}
      {stateContext && stateContext.faqs.length > 0 && (
        <section className="bg-background py-section-y-sm">
          <div className="mx-auto max-w-content px-container-x">
            <SectionHeader
              eyebrow="FAQ"
              title={
                identity
                  ? `${shortName} — common questions`
                  : `${tier.name} in ${selectedState} — common questions`
              }
              subtitle="Specific to this tier and state. Not a generic pool."
              className="mb-10"
            />
            <div className="mx-auto max-w-narrow">
              <Accordion type="single" variant="card">
                {[...stateContext.faqs, ...transactionalFaqs].map((faq) => (
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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 items-stretch">
              {stateContext.crossLinks.map((link) => (
                <RouterLink
                  key={link.href}
                  to={link.href}
                  className="group flex h-full flex-col rounded-card-lg border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <span
                    className="text-caption font-semibold uppercase tracking-wider"
                    style={{ color: metallicInk }}
                  >
                    {link.kind === "pillar" && "Pillar"}
                    {link.kind === "cluster" && "Guide"}
                    {link.kind === "comparison" && "Comparison"}
                  </span>
                  <h3 className="mt-3 font-display text-heading-sm font-semibold text-foreground min-h-[3.25rem]">
                    {link.title}
                  </h3>
                  <p className="mt-2 flex-1 text-body-sm text-muted line-clamp-3">
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
