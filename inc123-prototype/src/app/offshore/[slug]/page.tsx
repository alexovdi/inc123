import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { offshoreData } from "@/data/offshore";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { AdvantageGrid } from "@/design-system/components/AdvantageGrid";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import {
  CombinedStructures,
  ComplianceWarning,
  CostBreakdown,
  EntityComparison,
  FormationProcess,
  JurisdictionStatStrip,
} from "@/design-system/components/JurisdictionSections";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   Schema
   ------------------------------------------------ */
function JurisdictionSchema({
  jurisdiction,
}: {
  jurisdiction: ReturnType<
    typeof offshoreData.jurisdictions.find
  > extends infer T
    ? NonNullable<T>
    : never;
}) {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: jurisdiction.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://incorporate123.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Offshore",
        item: "https://incorporate123.com/offshore",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: jurisdiction.name,
        item: `https://incorporate123.com/offshore/${jurisdiction.slug}`,
      },
    ],
  };

  // Product schema — only if entityTypes with concrete (non-PENDING) pricing
  const products = (jurisdiction.entityTypes ?? [])
    .filter(
      (e) =>
        e.formationCost !== "PENDING DAVID" &&
        !e.formationCost.toLowerCase().includes("pending"),
    )
    .map((entity) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: entity.name,
      description: `${entity.framework ?? jurisdiction.name + " entity"} — ${entity.bestFor}`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: entity.formationCost.replace(/[^0-9.]/g, ""),
        availability: "https://schema.org/InStock",
      },
    }));

  return (
    <>
      {jurisdiction.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {products.map((product, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function OffshoreJurisdictionPage() {
  const { slug } = useParams<{ slug: string }>();
  const jurisdiction = offshoreData.jurisdictions.find((j) => j.slug === slug);

  useEffect(() => {
    if (!jurisdiction) return;
    const previousTitle = document.title;
    document.title = `${jurisdiction.name} Formation — ${
      jurisdiction.entityType ?? "Offshore Entity"
    } | Incorporate123`;
    return () => {
      document.title = previousTitle;
    };
  }, [jurisdiction]);

  if (!jurisdiction) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-container-x py-section-y text-center">
        <h1 className="text-display font-display font-bold text-foreground">
          Jurisdiction Not Found
        </h1>
        <p className="mt-4 text-body text-muted">
          The offshore jurisdiction you requested could not be found.
        </p>
        <Link
          to="/offshore"
          className="mt-6 text-secondary hover:text-secondary/80 font-medium transition-colors"
        >
          Browse all jurisdictions
        </Link>
      </main>
    );
  }

  // Show up to 3 other primary jurisdictions in the nav footer
  const otherJurisdictions = offshoreData.jurisdictions
    .filter((j) => j.slug !== slug && j.primary)
    .slice(0, 3);

  return (
    <main>
      <JurisdictionSchema jurisdiction={jurisdiction} />

      {/* ------------------------------------------------
          Hero
          ------------------------------------------------ */}
      <section
        className="py-section-y text-white"
        style={{ backgroundColor: "#1a1a2e" }}
      >
        <div className="mx-auto max-w-content px-container-x">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Offshore", href: "/offshore" },
              {
                label: jurisdiction.name,
                href: `/offshore/${jurisdiction.slug}`,
              },
            ]}
            className="mb-6 [&_a]:text-white/70 [&_a:hover]:text-white [&_span[aria-current]]:text-white"
          />
          {jurisdiction.region && jurisdiction.region !== jurisdiction.name && (
            <p className="mb-3 text-body-sm font-semibold uppercase tracking-wider text-white/60">
              {jurisdiction.region}
            </p>
          )}
          <h1 className="font-display text-display font-bold">
            {jurisdiction.name}
            {jurisdiction.entityType && (
              <span className="block text-heading-lg font-semibold text-white/80">
                {jurisdiction.entityType}
              </span>
            )}
          </h1>
          {jurisdiction.heroTagline && (
            <p className="mt-4 max-w-3xl text-heading-sm text-white/80">
              {jurisdiction.heroTagline}
            </p>
          )}
          <p className="mt-4 max-w-3xl text-body text-white/70">
            {jurisdiction.description}
          </p>

          {jurisdiction.stats && (
            <JurisdictionStatStrip stats={jurisdiction.stats} />
          )}

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Schedule a Consultation About {jurisdiction.name}
              <Icon name="ArrowRight" size="sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          Advantages
          ------------------------------------------------ */}
      <section className="py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <div className="mb-10">
            <p className="text-body-sm font-semibold uppercase tracking-wider text-secondary">
              Why {jurisdiction.name}
            </p>
            <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
              Key Jurisdictional Advantages
            </h2>
          </div>
          <AdvantageGrid items={jurisdiction.advantages} />
        </div>
      </section>

      {/* ------------------------------------------------
          Entity Comparison (optional — only if >1 entity)
          ------------------------------------------------ */}
      {jurisdiction.entityTypes && jurisdiction.entityTypes.length >= 2 && (
        <EntityComparison
          jurisdictionName={jurisdiction.name}
          entities={jurisdiction.entityTypes}
          recommendation={jurisdiction.entityRecommendation}
        />
      )}

      {/* ------------------------------------------------
          Formation Process (optional)
          ------------------------------------------------ */}
      {(jurisdiction.formationSteps?.length ||
        jurisdiction.kycRequirements?.length) && (
        <FormationProcess
          jurisdictionName={jurisdiction.name}
          kycRequirements={jurisdiction.kycRequirements}
          steps={jurisdiction.formationSteps ?? []}
          timeline={jurisdiction.timeline}
          bankTimeline="4–8 weeks additional (optional)"
        />
      )}

      {/* ------------------------------------------------
          Cost Breakdown (optional)
          ------------------------------------------------ */}
      {(jurisdiction.pricing || jurisdiction.entityTypes) && (
        <CostBreakdown
          jurisdictionName={jurisdiction.name}
          entities={jurisdiction.entityTypes ?? []}
          pricing={jurisdiction.pricing}
        />
      )}

      {/* ------------------------------------------------
          Combined Structures (optional)
          ------------------------------------------------ */}
      {jurisdiction.combinedStructures && (
        <CombinedStructures
          jurisdictionName={jurisdiction.name}
          structures={jurisdiction.combinedStructures}
        />
      )}

      {/* ------------------------------------------------
          IRS Compliance Warning
          ------------------------------------------------ */}
      <ComplianceWarning />

      {/* ------------------------------------------------
          FAQs
          ------------------------------------------------ */}
      {jurisdiction.faqs.length > 0 && (
        <section className="bg-background py-section-y px-container-x">
          <div className="mx-auto max-w-content">
            <div className="mx-auto max-w-3xl">
              <p className="text-body-sm font-semibold uppercase tracking-wider text-secondary">
                Frequently Asked Questions
              </p>
              <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
                {jurisdiction.name} — Questions Answered
              </h2>
              <div className="mt-8">
                <Accordion type="single" variant="default">
                  {jurisdiction.faqs.map((faq) => (
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
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------
          Other Jurisdictions (3 cards)
          ------------------------------------------------ */}
      {otherJurisdictions.length > 0 && (
        <section className="py-section-y px-container-x">
          <div className="mx-auto max-w-content">
            <h2 className="mb-8 text-center font-display text-heading-lg font-bold text-foreground">
              Explore Other Jurisdictions
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {otherJurisdictions.map((j) => (
                <Link
                  key={j.slug}
                  to={`/offshore/${j.slug}`}
                  className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-shadow hover:shadow-card-hover"
                >
                  <h3 className="font-display text-heading-sm font-semibold text-foreground group-hover:text-secondary">
                    {j.name}
                  </h3>
                  {j.entityType && (
                    <p className="mt-1 text-body-sm text-muted">
                      {j.entityType}
                    </p>
                  )}
                  {j.tagline && (
                    <p className="mt-3 flex-1 text-body-sm leading-relaxed text-muted">
                      {j.tagline}
                    </p>
                  )}
                  <p className="mt-4 font-mono text-body-sm font-semibold text-foreground">
                    From {j.startingPrice ?? "Contact us"}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-body-sm font-medium text-secondary">
                    Learn More
                    <Icon name="ArrowRight" size="sm" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------
          Consultation CTA
          ------------------------------------------------ */}
      <section
        className="py-section-y px-container-x text-white"
        style={{ backgroundColor: "#1a1a2e" }}
      >
        <div className="mx-auto max-w-content text-center">
          <h2 className="mx-auto max-w-3xl font-display text-heading-lg font-bold">
            Ready to Discuss {jurisdiction.name} Formation?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-white/80">
            Every offshore engagement begins with a consultation. We discuss
            your goals, confirm {jurisdiction.name} is the right jurisdiction,
            and outline the formation process, documentation requirements,
            timeline, and costs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Schedule a Consultation
              <Icon name="ArrowRight" size="sm" />
            </Link>
            <a
              href="tel:+18005530615"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 bg-transparent px-6 py-3 font-semibold text-white/90 transition-colors hover:border-white/80 hover:text-white"
            >
              <Icon name="Phone" size="sm" />
              Call 1-800-553-0615
            </a>
          </div>
          <div className="mx-auto mt-10 max-w-2xl border-t border-white/10 pt-8">
            <p className="text-body-sm text-white/60">
              Decided offshore isn&rsquo;t necessary? Most clients achieve
              strong privacy and asset protection with a domestic Wyoming Gold
              package.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-body-sm">
              <Link
                to="/wyoming-gold"
                className="text-white/80 underline underline-offset-4 hover:text-white"
              >
                Wyoming Gold — $1,275
              </Link>
              <span className="text-white/30">·</span>
              <Link
                to="/offshore"
                className="text-white/80 underline underline-offset-4 hover:text-white"
              >
                Back to Offshore Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
