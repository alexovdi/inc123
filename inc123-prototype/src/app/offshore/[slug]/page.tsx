import { notFound } from "next/navigation";
import { offshoreData } from "@/data/offshore";
import {
  AdvantageGrid,
  LongFormContent,
  Accordion,
  AccordionItem,
  WhereToGoNext,
} from "@/design-system/components";
import { Button, Icon } from "@/design-system/primitives";
import type { ClusterSection } from "@/lib/types";
import type { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------------
   Static params
   ------------------------------------------------ */
export function generateStaticParams() {
  return offshoreData.jurisdictions.map((j) => ({ slug: j.slug }));
}

/* ------------------------------------------------
   Metadata
   ------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const jurisdiction = offshoreData.jurisdictions.find((j) => j.slug === slug);
  if (!jurisdiction) return {};

  return {
    title: `${jurisdiction.name} — Offshore Formation | Incorporate123`,
    description: jurisdiction.description.slice(0, 160),
  };
}

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default async function OffshoreJurisdictionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jurisdiction = offshoreData.jurisdictions.find((j) => j.slug === slug);

  if (!jurisdiction) notFound();

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
              href="/offshore"
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
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <p className="text-body-sm text-white/60">
              Or call{" "}
              <a
                href="tel:+17753134155"
                className="font-medium text-white/90 hover:text-white transition-colors"
              >
                (775) 313-4155
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
