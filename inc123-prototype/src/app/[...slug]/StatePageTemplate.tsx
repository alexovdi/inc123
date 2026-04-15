import { packages } from "@/data/packages";
import { resolveLegacyPackageToTierUrl } from "@/lib/slug-registry";
import { StateHubLayout } from "@/design-system/layouts/StateHubLayout";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { AdvantageGrid } from "@/design-system/components/AdvantageGrid";
import { ComparisonTable } from "@/design-system/components/ComparisonTable";
import { ContentMapGrid } from "@/design-system/components/ContentMapGrid";
import { CTABlock } from "@/design-system/components/CTABlock";
import { IntentRoutingCard } from "@/design-system/components/IntentRoutingCard";
import { PackagePreviewCard } from "@/design-system/components/PackagePreviewCard";
import { StateHero } from "@/design-system/components/StateHero";
import { StickyMobileCTA } from "@/design-system/components/StickyMobileCTA";
import type { StateHub } from "@/lib/types";

/* ------------------------------------------------
   FAQPage JSON-LD schema (per spec §4.1)
   ------------------------------------------------ */
function StateFAQSchema({ state }: { state: StateHub }) {
  if (state.faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: state.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ------------------------------------------------
   Section 6 — State comparison block
   ------------------------------------------------ */
function StateComparisonSection({
  comparison,
}: {
  comparison: NonNullable<StateHub["comparison"]>;
}) {
  return (
    <section>
      <div className="text-center mb-10">
        <p className="text-body-sm font-semibold uppercase tracking-wider text-muted mb-3">
          {comparison.eyebrow}
        </p>
        <h2 className="font-display text-heading-lg font-bold text-foreground">
          {comparison.title}
        </h2>
      </div>

      <ComparisonTable
        columns={comparison.columns}
        rows={comparison.rows}
        highlightColumn={comparison.highlightColumnId}
      />

      <div className="mt-8 max-w-narrow mx-auto text-center">
        <p className="text-body-lg text-muted italic">{comparison.summary}</p>
      </div>

      {comparison.ctas.length > 0 && (
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {comparison.ctas.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              className="text-body-sm font-medium text-secondary hover:underline"
            >
              {cta.label} &rarr;
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
interface StatePageTemplateProps {
  state: StateHub;
}

export function StatePageTemplate({ state }: StatePageTemplateProps) {
  const statePackages = state.packages
    .map((pkgId) => packages.find((p) => p.id === pkgId))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  // Find the lowest-price (entry) and highest-price (premium) packages
  // for the price-restated final CTA and sticky mobile CTA.
  const sortedByPrice = [...statePackages].sort(
    (a, b) => a.prices.llc.formation - b.prices.llc.formation,
  );
  const entryPackage = sortedByPrice[0];
  const premiumPackage = sortedByPrice[sortedByPrice.length - 1];

  const finalCtaDescription = (() => {
    if (!entryPackage)
      return "Complete privacy formation — everything all-inclusive.";
    if (!premiumPackage || premiumPackage.id === entryPackage.id) {
      return `${state.name} formation from $${entryPackage.prices.llc.formation.toLocaleString()}. Everything included.`;
    }
    return `${state.name} formation from $${entryPackage.prices.llc.formation.toLocaleString()}. Full privacy from $${premiumPackage.prices.llc.formation.toLocaleString()}. Everything included.`;
  })();

  return (
    <>
      <StateFAQSchema state={state} />

      <StateHubLayout
        state={{ name: state.name, abbreviation: state.abbreviation }}
        customHero={
          <StateHero
            stateName={state.name}
            subtitle={state.subtitle}
            facts={state.facts}
          />
        }
      >
        <div className="space-y-20">
          {/* Section 2 — Intent Routing Cards */}
          <section>
            <div className="text-center mb-10">
              <p className="text-body-sm font-semibold uppercase tracking-wider text-muted mb-3">
                What do you need in {state.name}?
              </p>
              <h2 className="font-display text-heading-lg font-bold text-foreground">
                Choose Your Starting Point
              </h2>
              <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
                Select your primary need. Each path leads to {state.name}
                -specific guides, comparisons, and packages.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {state.intentRoutes.map((route) => (
                <IntentRoutingCard
                  key={route.pillar}
                  pillar={route.pillar}
                  title={route.title}
                  description={route.description}
                  links={route.links}
                  cta={route.cta}
                  packageLink={route.packageLink}
                />
              ))}
            </div>
          </section>

          {/* Section 3 — Package Quick Links */}
          {statePackages.length > 0 && (
            <section>
              <div className="text-center mb-10">
                <p className="text-body-sm font-semibold uppercase tracking-wider text-muted mb-3">
                  {state.name} Packages
                </p>
                <h2 className="font-display text-heading-lg font-bold text-foreground">
                  {state.name} Formation — All-Inclusive Pricing
                </h2>
                <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
                  Everything bundled. No hidden fees. See exactly what&apos;s
                  included.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {statePackages.map((pkg) => (
                  <PackagePreviewCard
                    key={pkg.id}
                    tier={{
                      name: pkg.name,
                      price: pkg.prices.llc.formation,
                      period: "formation",
                      description: pkg.description,
                      badge: pkg.badge,
                      highlighted: pkg.highlighted,
                    }}
                    entityType="LLC"
                    cta={{
                      label: `View ${pkg.name}`,
                      href: resolveLegacyPackageToTierUrl(pkg.id),
                    }}
                  />
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="/compare-packages"
                  className="text-body-sm font-medium text-secondary hover:underline"
                >
                  Compare All Packages &rarr;
                </a>
              </div>
            </section>
          )}

          {/* Section 4 — Why Choose [State] */}
          <section>
            <div className="text-center mb-10">
              <p className="text-body-sm font-semibold uppercase tracking-wider text-muted mb-3">
                Why {state.name}
              </p>
              <h2 className="font-display text-heading-lg font-bold text-foreground">
                Why Choose {state.name}?
              </h2>
            </div>

            <AdvantageGrid items={state.advantages} />
          </section>

          {/* Section 5 — All [State] Services */}
          <section>
            <div className="text-center mb-10">
              <p className="text-body-sm font-semibold uppercase tracking-wider text-muted mb-3">
                All {state.name} Services
              </p>
              <h2 className="font-display text-heading-lg font-bold text-foreground">
                Everything We Offer for {state.name} Entities
              </h2>
            </div>

            <ContentMapGrid contentMap={state.contentMap} />
          </section>

          {/* Section 6 — State Comparison (new) */}
          {state.comparison && (
            <StateComparisonSection comparison={state.comparison} />
          )}

          {/* Section 7 — State-Specific FAQ */}
          {state.faqs.length > 0 && (
            <section>
              <div className="text-center mb-10">
                <p className="text-body-sm font-semibold uppercase tracking-wider text-muted mb-3">
                  Frequently Asked Questions
                </p>
                <h2 className="font-display text-heading-lg font-bold text-foreground">
                  {state.name} FAQ
                </h2>
              </div>

              <div className="max-w-narrow mx-auto">
                <Accordion type="single" variant="default">
                  {state.faqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      id={faq.id}
                      title={faq.question}
                    >
                      <p>{faq.answer}</p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          )}

          {/* Section 8 — Final CTA */}
          <CTABlock
            variant="dark"
            layout="centered"
            heading={`Ready to Start in ${state.name}?`}
            description={finalCtaDescription}
            primaryCTA={{
              label: premiumPackage
                ? `View ${premiumPackage.name} — $${premiumPackage.prices.llc.formation.toLocaleString()}`
                : `Start Your ${state.name} LLC`,
              href: premiumPackage
                ? resolveLegacyPackageToTierUrl(premiumPackage.id)
                : "/packages",
            }}
            secondaryCTA={
              entryPackage &&
              premiumPackage &&
              entryPackage.id !== premiumPackage.id
                ? {
                    label: `View ${entryPackage.name} — $${entryPackage.prices.llc.formation.toLocaleString()}`,
                    href: resolveLegacyPackageToTierUrl(entryPackage.id),
                  }
                : undefined
            }
            trustSignal="Or call us: 1-800-553-0615"
          />
        </div>
      </StateHubLayout>

      {/* Mobile sticky CTA (spec §4.4) */}
      {premiumPackage && (
        <StickyMobileCTA
          primaryCTA={{
            variant: "cta",
            children: `See ${state.name} Packages`,
            href: resolveLegacyPackageToTierUrl(premiumPackage.id),
          }}
        />
      )}
    </>
  );
}

StatePageTemplate.displayName = "StatePageTemplate";
