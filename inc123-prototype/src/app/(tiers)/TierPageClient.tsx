"use client";

import { useState, useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PackageLayout } from "@/design-system/layouts/PackageLayout";
import {
  Breadcrumbs,
  PackageHero,
  PricingGrid,
  ValueComparisonCallout,
  AddOnConfigurator,
  RunningTotal,
  ProgressiveDisclosure,
  AlsoConsiderCards,
  TrustSignals,
  TestimonialCarousel,
  Accordion,
  AccordionItem,
  CTABlock,
  MoneyBackBadge,
} from "@/design-system/components";
import { faqItems } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import {
  tierDefinitions,
  getTierPrice,
  getTierMinPrice,
  getTierFeaturesForState,
  getAvailableTiersForState,
  ALL_FORMATION_STATES,
} from "@/data/packages";
import type { TierDefinition, EntityType } from "@/lib/types";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
interface TierPageClientProps {
  tier: TierDefinition;
}

/* ------------------------------------------------
   Trust signal items
   ------------------------------------------------ */
const trustItems = [
  { icon: "Clock", value: "25+ Years", label: "Trusted Since 2000" },
  { icon: "MapPin", value: "Real Office", label: "Reno, Nevada" },
  { icon: "ShieldCheck", value: "30-Day", label: "Money-Back Guarantee" },
  { icon: "Phone", value: "(775) 313-4155", label: "Talk to a Specialist" },
  { icon: "Bitcoin", value: "Crypto", label: "Accepted" },
  { icon: "Lock", value: "Secure", label: "Checkout" },
];

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
export function TierPageClient({ tier }: TierPageClientProps) {
  const searchParams = useSearchParams();
  const initialState = useMemo(() => {
    const param = searchParams.get("state");
    if (param) {
      const matched = tier.availableStates.find(
        (s) => s.toLowerCase() === param.toLowerCase(),
      );
      if (matched) return matched;
    }
    return tier.availableStates[0];
  }, [searchParams, tier.availableStates]);

  const [selectedState, setSelectedState] = useState(initialState);
  const [entityType, setEntityType] = useState<EntityType>("llc");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = useCallback((id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  }, []);

  const variant = tier.stateVariants[selectedState];
  const currentPrice = variant
    ? variant.prices[entityType]
    : { formation: getTierMinPrice(tier, entityType), renewal: 0 };

  const features = useMemo(
    () => getTierFeaturesForState(tier, selectedState),
    [tier, selectedState],
  );

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

  /* Build pricing grid from all tiers available in selected state */
  const pricingTiers = useMemo(() => {
    const available = getAvailableTiersForState(selectedState);
    const tierOrder = { bronze: 0, silver: 1, gold: 2 };
    available.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);

    return available.map((t) => {
      const sv = t.stateVariants[selectedState];
      const price = sv ? sv.prices[entityType].formation : 0;
      return {
        id: t.slug,
        name: `${t.name}`,
        price,
        period: "one-time",
        description: sv?.description ?? t.description,
        features: getTierFeaturesForState(t, selectedState),
        badge: t.badge,
        highlighted: t.slug === tier.slug,
      };
    });
  }, [selectedState, entityType, tier.slug]);

  const packageFaqs = useMemo(
    () =>
      faqItems.filter(
        (faq) => faq.category === "packages" || faq.category === "formation",
      ),
    [],
  );

  const relevantTestimonials = useMemo(() => {
    const matching = testimonials.filter(
      (t) =>
        t.serviceUsed.toLowerCase().includes(selectedState.toLowerCase()) ||
        t.serviceUsed.toLowerCase().includes(tier.tier),
    );
    return matching.length >= 2
      ? matching.slice(0, 3)
      : testimonials.slice(0, 3);
  }, [selectedState, tier.tier]);

  const disclosureSections = useMemo(
    () => [
      {
        id: "what-is",
        title: `What is a ${selectedState} ${entityType === "llc" ? "LLC" : "Corporation"}?`,
        summary: `A ${selectedState} ${entityType === "llc" ? "LLC" : "Corporation"} is a business entity formed under ${selectedState} state law. ${selectedState} offers strong privacy protections, favorable tax treatment, and business-friendly legislation.`,
        content: (
          <div className="space-y-3 text-body text-muted">
            <p>
              {selectedState} is one of the most popular states for business
              formation due to its favorable legal environment. The state offers
              strong charging order protection, no state income tax on business
              earnings, and robust privacy statutes that protect business
              owners.
            </p>
            <p>
              When you form a {entityType === "llc" ? "LLC" : "Corporation"} in{" "}
              {selectedState}, your entity benefits from the state&apos;s
              business-friendly court system and well-established body of
              corporate law. Combined with our nominee and offshore services,
              this creates one of the strongest privacy structures available in
              the United States.
            </p>
          </div>
        ),
      },
      {
        id: "nominees",
        title: "How Nominees Protect You",
        summary:
          "A nominee officer appears on all public state filings instead of your real name. Database searches, lawsuit discovery, and competitor research all find the nominee — not you.",
        content: (
          <div className="space-y-3 text-body text-muted">
            <p>
              Unlike competitors who only list a nominee name during the initial
              filing (&quot;nominee for a day&quot;), our Gold packages include
              year-round nominee directors and officers. This means the nominee
              remains listed on ALL filings — initial formation, annual reports,
              amendments, and any other state filings.
            </p>
            <p>
              Our nominees are based offshore, outside U.S. jurisdiction. This
              provides an additional privacy layer that domestic nominees cannot
              offer. Combined with offshore record storage, your corporate
              structure maintains maximum separation from public disclosure
              requirements.
            </p>
          </div>
        ),
      },
      {
        id: "after-formation",
        title: "What Happens After Formation",
        summary:
          "After we file your entity, you receive your formation documents, EIN confirmation, and nominee setup within 5-10 business days (or 24 hours with expedited filing).",
        content: (
          <div className="space-y-3 text-body text-muted">
            <p>
              Once your entity is filed with the state, our team prepares your
              complete formation package: Articles of Organization (or
              Incorporation), Operating Agreement (or Bylaws), membership
              certificates, organizational meeting minutes, and Certificate of
              Good Standing.
            </p>
            <p>
              For Gold packages, we also set up your year-round nominee
              directors and officers, configure offshore record storage, and
              initiate your registered agent service. You will receive email
              confirmation at each step along with a clear timeline of remaining
              deliverables.
            </p>
          </div>
        ),
      },
    ],
    [selectedState, entityType],
  );

  /* Also consider: other tiers */
  const alsoConsiderItems = useMemo(() => {
    return tierDefinitions
      .filter((t) => t.slug !== tier.slug && t.stateVariants[selectedState])
      .map((t) => {
        const sv = t.stateVariants[selectedState];
        return {
          name: `${t.name} ${entityType === "llc" ? "LLC" : "Corp"}`,
          state: selectedState,
          price: `$${sv!.prices[entityType].formation.toLocaleString()}`,
          href: `/${t.slug}?state=${selectedState.toLowerCase()}`,
        };
      });
  }, [tier.slug, selectedState, entityType]);

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

  return (
    <PackageLayout packageName={packageName}>
      <div className="space-y-12 lg:space-y-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Packages", href: "/packages" },
            { label: `${tier.name} Package`, href: `/${tier.slug}` },
          ]}
          pillar="privacy"
        />

        {/* State Selector */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-body-sm font-medium text-muted">
            Formation State:
          </span>
          {ALL_FORMATION_STATES.map(({ name, abbreviation }) => {
            const isAvailable = tier.availableStates.includes(name);
            const isSelected = selectedState === name;
            return (
              <button
                key={name}
                type="button"
                onClick={() => isAvailable && setSelectedState(name)}
                disabled={!isAvailable}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-body-sm font-medium transition-colors ${
                  isSelected
                    ? "bg-secondary text-white"
                    : isAvailable
                      ? "bg-surface border border-border text-foreground hover:bg-primary-50"
                      : "bg-primary-100 text-muted/50 cursor-not-allowed"
                }`}
              >
                <span className="font-bold">{abbreviation}</span>
                <span className="hidden sm:inline">{name}</span>
                {!isAvailable && <span className="text-caption">(N/A)</span>}
              </button>
            );
          })}
        </div>

        <PackageHero
          packageName={packageName}
          prices={
            variant?.prices ??
            tier.stateVariants[tier.availableStates[0]].prices
          }
          badge={tier.badge}
          entityType={entityType}
          onEntityTypeChange={setEntityType}
          primaryCTA={{
            label: `Start Now — $${currentPrice.formation.toLocaleString()}`,
            href: checkoutHref,
          }}
          secondaryCTA={{
            label: "Compare Packages",
            href: "#pricing-grid",
          }}
        />

        <section id="pricing-grid" className="scroll-mt-24">
          <PricingGrid
            tiers={pricingTiers}
            entityToggle={{
              options: [
                { value: "llc", label: "LLC" },
                { value: "corp", label: "Corporation" },
              ],
              default: entityType,
            }}
            addOns={tier.addOns.map((a) => ({
              id: a.id,
              name: a.name,
              price: a.price,
              description: a.description,
              tooltip: a.tooltip,
            }))}
            onTierSelect={() => {
              const el = document.getElementById("addon-configurator");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </section>

        <ValueComparisonCallout
          price={`$${currentPrice.formation.toLocaleString()} all-inclusive`}
          valueStatement={`Total value of included services: $${Math.round(currentPrice.formation * 1.6).toLocaleString()}+ in Year 1`}
          includedValue={`${packageName}: $${currentPrice.formation.toLocaleString()} all-inclusive. That includes ${features
            .filter((f) => f.status === "included")
            .map((f) => f.name.toLowerCase())
            .join(
              ", ",
            )}. Annual renewal: $${currentPrice.renewal.toLocaleString()}/year.`}
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
            />
          </div>
        </div>

        <section>
          <h2 className="font-display text-heading-lg font-bold text-foreground mb-6">
            What You Need to Know
          </h2>
          <ProgressiveDisclosure
            sections={disclosureSections}
            expandAllButton
          />
        </section>

        {alsoConsiderItems.length > 0 && (
          <section>
            <AlsoConsiderCards
              packages={alsoConsiderItems}
              heading="Also Consider"
            />
          </section>
        )}

        <section className="space-y-8">
          <TrustSignals items={trustItems} layout="compact" variant="subtle" />
          <MoneyBackBadge variant="detailed" className="w-full" />
          <TestimonialCarousel
            testimonials={relevantTestimonials.map((t) => ({
              quote: t.quote,
              name: t.name,
              businessType: t.businessType,
              state: t.state,
              serviceUsed: t.serviceUsed,
              rating: t.rating,
            }))}
            autoPlay
          />
        </section>

        <section>
          <h2 className="font-display text-heading-lg font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" variant="default">
            {packageFaqs.map((faq) => (
              <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <CTABlock
          heading="Ready to Get Started?"
          description={`${packageName} — $${currentPrice.formation.toLocaleString()} all-inclusive. ${variant?.description ?? tier.description}`}
          primaryCTA={{
            label: `Order Now — $${currentPrice.formation.toLocaleString()}`,
            href: checkoutHref,
          }}
          secondaryCTA={{
            label: "Schedule a Consultation",
            href: "/contact",
          }}
          trustSignal="(775) 313-4155 · Talk to a Specialist"
          variant="dark"
          layout="centered"
        />
      </div>
    </PackageLayout>
  );
}
