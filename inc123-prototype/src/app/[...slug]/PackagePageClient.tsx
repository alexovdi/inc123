"use client";

import { useState, useCallback, useMemo } from "react";
import { PackageLayout } from "@/design-system/layouts/PackageLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { AddOnConfigurator } from "@/design-system/components/AddOnConfigurator";
import { AlsoConsiderCards } from "@/design-system/components/AlsoConsiderCards";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { CTABlock } from "@/design-system/components/CTABlock";
import { MoneyBackBadge } from "@/design-system/components/MoneyBackBadge";
import { PackageHero } from "@/design-system/components/PackageHero";
import { PricingGrid } from "@/design-system/components/PricingGrid";
import { ProgressiveDisclosure } from "@/design-system/components/ProgressiveDisclosure";
import { RunningTotal } from "@/design-system/components/RunningTotal";
import { TestimonialCarousel } from "@/design-system/components/TestimonialCarousel";
import { TrustSignals } from "@/design-system/components/TrustSignals";
import { ValueComparisonCallout } from "@/design-system/components/ValueComparisonCallout";
import { faqItems } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import type { PackageTier, EntityType } from "@/lib/types";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
interface PackagePageClientProps {
  pkg: PackageTier;
  siblingPackages: PackageTier[];
  alsoConsider: PackageTier[];
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
export function PackagePageClient({
  pkg,
  siblingPackages,
  alsoConsider,
}: PackagePageClientProps) {
  const [entityType, setEntityType] = useState<EntityType>("llc");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = useCallback((id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  }, []);

  const currentPrice = pkg.prices[entityType];

  const addOnTotal = useMemo(
    () =>
      selectedAddOns.reduce((sum, id) => {
        const addOn = pkg.addOns.find((a) => a.id === id);
        return sum + (addOn?.price ?? 0);
      }, 0),
    [selectedAddOns, pkg.addOns],
  );

  const grandTotal = currentPrice.formation + addOnTotal;

  const pricingTiers = useMemo(() => {
    const allTiers = [pkg, ...siblingPackages];
    const tierOrder = { bronze: 0, silver: 1, gold: 2 };
    allTiers.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);

    return allTiers.map((t) => ({
      id: t.id,
      name: t.name,
      price: t.prices[entityType].formation,
      period: "one-time",
      description: t.description,
      features: t.features,
      badge: t.badge,
      highlighted: t.highlighted,
    }));
  }, [pkg, siblingPackages, entityType]);

  const packageFaqs = useMemo(() => {
    return faqItems.filter(
      (faq) => faq.category === "packages" || faq.category === "formation",
    );
  }, []);

  const relevantTestimonials = useMemo(() => {
    const matching = testimonials.filter(
      (t) =>
        t.serviceUsed.toLowerCase().includes(pkg.state.toLowerCase()) ||
        t.serviceUsed.toLowerCase().includes(pkg.tier),
    );
    return matching.length >= 2
      ? matching.slice(0, 3)
      : testimonials.slice(0, 3);
  }, [pkg.state, pkg.tier]);

  const disclosureSections = useMemo(
    () => [
      {
        id: "what-is",
        title: `What is a ${pkg.state} ${entityType === "llc" ? "LLC" : "Corporation"}?`,
        summary: `A ${pkg.state} ${entityType === "llc" ? "LLC" : "Corporation"} is a business entity formed under ${pkg.state} state law. ${pkg.state} offers strong privacy protections, favorable tax treatment, and business-friendly legislation.`,
        content: (
          <div className="space-y-3 text-body text-muted">
            <p>
              {pkg.state} is one of the most popular states for business
              formation due to its favorable legal environment. The state offers
              strong charging order protection, no state income tax on business
              earnings, and robust privacy statutes that protect business
              owners.
            </p>
            <p>
              When you form a {entityType === "llc" ? "LLC" : "Corporation"} in{" "}
              {pkg.state}, your entity benefits from the state&apos;s
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
    [pkg.state, entityType],
  );

  const alsoConsiderItems = useMemo(
    () =>
      alsoConsider.map((p) => ({
        name: p.name,
        state: p.state,
        price: `$${p.prices.llc.formation.toLocaleString()}`,
        href: `/${p.flatSlug}`,
      })),
    [alsoConsider],
  );

  const runningTotalAddOns = useMemo(
    () =>
      selectedAddOns
        .map((id) => {
          const addOn = pkg.addOns.find((a) => a.id === id);
          if (!addOn) return null;
          return { name: addOn.name, price: addOn.price };
        })
        .filter(Boolean) as { name: string; price: number }[],
    [selectedAddOns, pkg.addOns],
  );

  return (
    <PackageLayout packageName={pkg.name}>
      <div className="space-y-12 lg:space-y-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Packages", href: "/packages" },
            { label: pkg.name, href: `/${pkg.flatSlug}` },
          ]}
          pillar="privacy"
        />

        <PackageHero
          packageName={pkg.name}
          prices={pkg.prices}
          badge={pkg.badge}
          entityType={entityType}
          onEntityTypeChange={setEntityType}
          primaryCTA={{
            label: `Start Now — $${currentPrice.formation.toLocaleString()}`,
            href: `/checkout/configure?package=${pkg.id}&entity=${entityType}`,
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
            addOns={pkg.addOns.map((a) => ({
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
          includedValue={`${pkg.name}: $${currentPrice.formation.toLocaleString()} all-inclusive. That includes ${pkg.features
            .filter((f) => f.status === "included")
            .map((f) => f.name.toLowerCase())
            .join(
              ", ",
            )}. Annual renewal: $${currentPrice.renewal.toLocaleString()}/year.`}
        />

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2" id="addon-configurator">
            <AddOnConfigurator
              addOns={pkg.addOns}
              selectedIds={selectedAddOns}
              onToggle={toggleAddOn}
              basePrice={currentPrice.formation}
            />
          </div>

          <div className="mt-8 lg:mt-0">
            <RunningTotal
              tier={{
                name: pkg.name,
                price: currentPrice.formation,
              }}
              entityType={entityType === "llc" ? "LLC" : "Corporation"}
              addOns={runningTotalAddOns}
              total={grandTotal}
              checkoutHref={`/checkout/configure?package=${pkg.id}&entity=${entityType}`}
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

        <section>
          <AlsoConsiderCards
            packages={alsoConsiderItems}
            heading="Also Consider"
          />
        </section>

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
          description={`${pkg.name} — $${currentPrice.formation.toLocaleString()} all-inclusive. ${pkg.description}`}
          primaryCTA={{
            label: `Order Now — $${currentPrice.formation.toLocaleString()}`,
            href: `/checkout/configure?package=${pkg.id}&entity=${entityType}`,
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
