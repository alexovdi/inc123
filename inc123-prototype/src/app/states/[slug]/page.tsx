import { notFound } from "next/navigation";
import { stateHubs } from "@/data/states";
import { packages } from "@/data/packages";
import { StateHubLayout } from "@/design-system/layouts/StateHubLayout";
import {
  StateHero,
  IntentRoutingCard,
  PackagePreviewCard,
  AdvantageGrid,
  ContentMapGrid,
  Accordion,
  AccordionItem,
  CTABlock,
} from "@/design-system/components";

/* ------------------------------------------------
   Static params
   ------------------------------------------------ */
export function generateStaticParams() {
  return [
    { slug: "wyoming" },
    { slug: "nevada" },
    { slug: "california" },
    { slug: "florida" },
  ];
}

/* ------------------------------------------------
   Metadata
   ------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const state = stateHubs.find((s) => s.slug === slug);
  if (!state) return {};

  return {
    title: `${state.name} Business Services — LLC Formation, Privacy & Asset Protection | Incorporate123`,
    description: `Form a ${state.name} LLC or Corporation with 25 years of expert support. Anonymous LLC formation, asset protection, registered agent, and ongoing compliance. All-inclusive packages.`,
  };
}

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default async function StateHubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const state = stateHubs.find((s) => s.slug === slug);

  if (!state) {
    notFound();
  }

  // Look up state's packages from the packages data
  const statePackages = state.packages
    .map((pkgId) => packages.find((p) => p.id === pkgId))
    .filter(Boolean);

  return (
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
        {/* ============================================
            Section 1: Intent Routing Cards
            ============================================ */}
        <section>
          <div className="text-center mb-10">
            <h2 className="font-display text-heading-lg font-bold text-foreground">
              What Brings You to {state.name}?
            </h2>
            <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
              Select your primary need. Each path leads to {state.name}-specific
              guides, comparisons, and packages.
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

        {/* ============================================
            Section 2: Package Preview Cards
            ============================================ */}
        {statePackages.length > 0 && (
          <section>
            <div className="text-center mb-10">
              <h2 className="font-display text-heading-lg font-bold text-foreground">
                {state.name} Packages — All-Inclusive Pricing
              </h2>
              <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
                Everything bundled. No hidden fees. See exactly what&apos;s included.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {statePackages.map((pkg) => {
                if (!pkg) return null;
                return (
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
                      href: `/packages/${pkg.id}`,
                    }}
                  />
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <a
                href="/packages"
                className="text-body-sm font-medium text-secondary hover:underline"
              >
                Compare All Packages &rarr;
              </a>
            </div>
          </section>
        )}

        {/* ============================================
            Section 3: Advantage Grid
            ============================================ */}
        <section>
          <div className="text-center mb-10">
            <h2 className="font-display text-heading-lg font-bold text-foreground">
              Why Choose {state.name}?
            </h2>
          </div>

          <AdvantageGrid items={state.advantages} />
        </section>

        {/* ============================================
            Section 4: Content Map Grid
            ============================================ */}
        <section>
          <div className="text-center mb-10">
            <h2 className="font-display text-heading-lg font-bold text-foreground">
              All {state.name} Services &amp; Guides
            </h2>
          </div>

          <ContentMapGrid contentMap={state.contentMap} />
        </section>

        {/* ============================================
            Section 5: FAQ Accordion
            ============================================ */}
        {state.faqs.length > 0 && (
          <section>
            <div className="text-center mb-10">
              <h2 className="font-display text-heading-lg font-bold text-foreground">
                {state.name} FAQ
              </h2>
            </div>

            <div className="max-w-narrow mx-auto">
              <Accordion type="single" variant="default">
                {state.faqs.map((faq) => (
                  <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
                    <p>{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* ============================================
            Section 6: Final CTA Block
            ============================================ */}
        <CTABlock
          variant="dark"
          layout="centered"
          heading={`Ready to Get Started in ${state.name}?`}
          description={
            statePackages.length > 1
              ? "Gold for privacy. Silver for formation. Everything all-inclusive."
              : "Complete privacy formation — everything all-inclusive."
          }
          primaryCTA={{
            label: statePackages[0]
              ? `View ${statePackages[0].name} — $${statePackages[0].prices.llc.formation.toLocaleString()}`
              : `Start Your ${state.name} LLC`,
            href: statePackages[0]
              ? `/packages/${statePackages[0].id}`
              : "/packages",
          }}
          secondaryCTA={
            statePackages[1]
              ? {
                  label: `View ${statePackages[1].name} — $${statePackages[1].prices.llc.formation.toLocaleString()}`,
                  href: `/packages/${statePackages[1].id}`,
                }
              : undefined
          }
          trustSignal="Or call us: (775) 313-4155"
        />
      </div>
    </StateHubLayout>
  );
}
