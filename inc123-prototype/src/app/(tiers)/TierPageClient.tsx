import { useState, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PackageLayout } from "@/design-system/layouts/PackageLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { AddOnConfigurator } from "@/design-system/components/AddOnConfigurator";
import { AlsoConsiderCards } from "@/design-system/components/AlsoConsiderCards";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { CTABlock } from "@/design-system/components/CTABlock";
import { MoneyBackBadge } from "@/design-system/components/MoneyBackBadge";
import { PackageHero } from "@/design-system/components/PackageHero";
import { PricingGrid } from "@/design-system/components/PricingGrid";
import { RunningTotal } from "@/design-system/components/RunningTotal";
import { faqItems } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import {
  tierDefinitions,
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
   Component
   ------------------------------------------------ */
export function TierPageClient({ tier }: TierPageClientProps) {
  const [searchParams] = useSearchParams();
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
    () => faqItems.filter((faq) => faq.category === "packages").slice(0, 5),
    [],
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

  /* Pick the best testimonial for this state/tier */
  const bestTestimonial = useMemo(() => {
    const matching = testimonials.find(
      (t) =>
        t.serviceUsed.toLowerCase().includes(selectedState.toLowerCase()) ||
        t.serviceUsed.toLowerCase().includes(tier.tier),
    );
    return matching ?? testimonials[0];
  }, [selectedState, tier.tier]);

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
          <span className="text-body font-medium text-muted">
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
                {!isAvailable && <span className="text-body-sm">(N/A)</span>}
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
            label: ctaLabel,
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
            addOns={[]}
            onTierSelect={() => {
              const el = document.getElementById("addon-configurator");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
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

        {/* Add-on Configuration Zone */}
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

        {/* Social Proof Strip */}
        <section className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <blockquote className="border-l-4 border-secondary pl-6 py-2">
            <p className="text-body text-foreground italic">
              &ldquo;{bestTestimonial.quote}&rdquo;
            </p>
            <footer className="mt-3 text-body-sm text-muted">
              — {bestTestimonial.name}, {bestTestimonial.businessType}
            </footer>
          </blockquote>
          <div className="mt-6 lg:mt-0">
            <MoneyBackBadge variant="standard" className="w-full" />
          </div>
        </section>

        {/* FAQ — limited to 5 most relevant */}
        {packageFaqs.length > 0 && (
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
        )}

        <CTABlock
          heading="Ready to Get Started?"
          description={`${packageName} — $${currentPrice.formation.toLocaleString()} all-inclusive. ${variant?.description ?? tier.description}`}
          primaryCTA={{
            label: ctaLabel,
            href: checkoutHref,
          }}
          secondaryCTA={{
            label: "Schedule a Consultation",
            href: "/contact",
          }}
          trustSignal="1-800-553-0615 · Talk to a Specialist"
          variant="dark"
          layout="centered"
        />
      </div>
    </PackageLayout>
  );
}
