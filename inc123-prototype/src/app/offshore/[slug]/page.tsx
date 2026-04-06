import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { offshoreData } from "@/data/offshore";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { AdvantageGrid } from "@/design-system/components/AdvantageGrid";
import { LongFormContent } from "@/design-system/components/LongFormContent";
import { WhereToGoNext } from "@/design-system/components/WhereToGoNext";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import type { ClusterSection } from "@/lib/types";

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function OffshoreJurisdictionPage() {
  const { slug } = useParams<{ slug: string }>();
  const jurisdiction = offshoreData.jurisdictions.find((j) => j.slug === slug);

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

  const otherJurisdictions = offshoreData.jurisdictions.filter(
    (j) => j.slug !== slug,
  );

  return (
    <main>
      {/* ------------------------------------------------
          Hero
          ------------------------------------------------ */}
      <section className="bg-primary text-white py-section-y">
        <div className="max-w-content mx-auto px-container-x">
          <div className="flex items-center gap-2 mb-4">
            <Link
              to="/offshore"
              className="text-body-sm text-white/60 hover:text-white/90 transition-colors"
            >
              Offshore Jurisdictions
            </Link>
            <Icon name="ChevronRight" size="sm" className="text-white/40" />
            <span className="text-body-sm text-white/90">
              {jurisdiction.name}
            </span>
          </div>
          <h1 className="text-display font-display font-bold mb-4">
            {jurisdiction.name}
          </h1>
          <p className="text-body text-white/80 max-w-[48rem]">
            {jurisdiction.description}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------
          Advantages
          ------------------------------------------------ */}
      <section className="py-section-y">
        <div className="max-w-content mx-auto px-container-x">
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Key Advantages
          </h2>
          <p className="text-body text-muted mb-8">
            What makes {jurisdiction.name} a compelling offshore jurisdiction.
          </p>
          <AdvantageGrid items={jurisdiction.advantages} />
        </div>
      </section>

      {/* ------------------------------------------------
          Content Sections
          ------------------------------------------------ */}
      <section className="py-section-y bg-background">
        <div className="max-w-content mx-auto px-container-x">
          <LongFormContent
            sections={jurisdiction.sections as ClusterSection[]}
          />
        </div>
      </section>

      {/* ------------------------------------------------
          FAQs
          ------------------------------------------------ */}
      {jurisdiction.faqs.length > 0 && (
        <section className="py-section-y">
          <div className="max-w-content mx-auto px-container-x">
            <h2 className="text-heading font-display font-semibold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" variant="default">
              {jurisdiction.faqs.map((faq) => (
                <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
                  <p>{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* ------------------------------------------------
          CTA
          ------------------------------------------------ */}
      <section className="py-section-y bg-primary text-white">
        <div className="max-w-content mx-auto px-container-x text-center">
          <h2 className="text-heading font-display font-semibold mb-3">
            Interested in {jurisdiction.name} Formation?
          </h2>
          <p className="text-body text-white/70 mb-6 max-w-[36rem] mx-auto">
            Offshore structures require expert guidance. Contact us for a
            confidential consultation to discuss whether a {jurisdiction.name}{" "}
            is right for your situation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <p className="text-body text-white/60">
              Or call{" "}
              <a
                href="tel:+18005530615"
                className="font-medium text-white/90 hover:text-white transition-colors"
              >
                1-800-553-0615
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          Other Jurisdictions
          ------------------------------------------------ */}
      <section className="py-section-y">
        <div className="max-w-content mx-auto px-container-x">
          <WhereToGoNext
            suggestions={[
              ...otherJurisdictions.slice(0, 2).map((j) => ({
                title: j.name,
                description: j.description.slice(0, 120) + "...",
                href: `/offshore/${j.slug}`,
                pillar: "privacy" as const,
              })),
              {
                title: "Gold Package",
                description:
                  "The domestic foundation for any offshore structure — year-round nominees, offshore records, and full privacy.",
                href: "/gold?state=wyoming",
                pillar: "privacy" as const,
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
