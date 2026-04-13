import { useState, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PackageLayout } from "@/design-system/layouts/PackageLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { AddOnConfigurator } from "@/design-system/components/AddOnConfigurator";
import { AlsoConsiderCards } from "@/design-system/components/AlsoConsiderCards";
import { PackageHero } from "@/design-system/components/PackageHero";
import { PillarFinalCTA } from "@/design-system/components/PillarFinalCTA";
import { PricingGrid } from "@/design-system/components/PricingGrid";
import { RunningTotal } from "@/design-system/components/RunningTotal";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { SocialProofStrip } from "@/design-system/components/SocialProofStrip";
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

  const stateOptions = useMemo(
    () =>
      ALL_FORMATION_STATES.map(({ name, abbreviation }) => ({
        name,
        abbreviation,
        available: tier.availableStates.includes(name),
      })),
    [tier.availableStates],
  );

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
    <PackageLayout showTrustBar={false}>
      <PackageHero
        packageName={packageName}
        eyebrow={`${tier.name} Package`}
        prices={
          variant?.prices ?? tier.stateVariants[tier.availableStates[0]].prices
        }
        badge={tier.badge}
        entityType={entityType}
        onEntityTypeChange={setEntityType}
        primaryCTA={{ label: ctaLabel, href: checkoutHref }}
        secondaryCTA={{
          label: "Compare Packages",
          href: "#pricing-grid",
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Packages", href: "/packages" },
          { label: `${tier.name} Package` },
        ]}
        stateSelector={{
          states: stateOptions,
          selected: selectedState,
          onChange: setSelectedState,
        }}
      />

      {/* Pricing Grid + Also Consider — white surface */}
      <section
        id="pricing-grid"
        className="scroll-mt-24 bg-surface py-section-y-sm"
      >
        <div className="mx-auto max-w-content px-container-x">
          <SectionHeader
            eyebrow="Compare Tiers"
            title={`${selectedState} ${entityType === "llc" ? "LLC" : "Corporation"} Packages`}
            subtitle="Side-by-side breakdown of every tier available in this state."
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
          {alsoConsiderItems.length > 0 && (
            <div className="mt-16">
              <AlsoConsiderCards
                packages={alsoConsiderItems}
                heading="Also Consider"
              />
            </div>
          )}
        </div>
      </section>

      {/* Configure Your Package — AddOnConfigurator owns its own heading */}
      <section className="bg-background py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
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

      {/* Social Proof Strip — full-width DS component */}
      <SocialProofStrip
        testimonial={{
          quote: bestTestimonial.quote,
          author: bestTestimonial.name,
          role: bestTestimonial.businessType,
        }}
      />

      {/* FAQ — muted background */}
      {packageFaqs.length > 0 && (
        <section className="bg-background py-section-y-sm">
          <div className="mx-auto max-w-content px-container-x">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              subtitle="The most common questions about this package."
              className="mb-10"
            />
            <div className="max-w-narrow mx-auto">
              <Accordion type="single" variant="card">
                {packageFaqs.map((faq) => (
                  <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
                    <p>{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA — dark close matching pillar/cluster pages */}
      <PillarFinalCTA
        heading="Ready to Get Started?"
        description={`${packageName} — $${currentPrice.formation.toLocaleString()} all-inclusive. ${variant?.description ?? tier.description}`}
        ctaLabel={ctaLabel}
        ctaHref={checkoutHref}
      />
    </PackageLayout>
  );
}
