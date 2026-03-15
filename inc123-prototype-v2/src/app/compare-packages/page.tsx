import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentByFilename, parseFAQsFromBody } from "@/lib/content";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { CTABand } from "@/components/conversion/CTABand";
import { Section } from "@/components/layout/Section";
import { FadeUp } from "@/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "Compare All Packages",
  description:
    "Compare Incorporate123's Wyoming, Nevada, California, Florida, and offshore formation packages. Side-by-side pricing, features, and privacy levels.",
};

export default function ComparePackagesPage() {
  /* compare-packages.md lives at content root, not in a subfolder */
  const page = getContentByFilename("", "compare-packages");
  if (!page) notFound();

  const faqs = parseFAQsFromBody(page.body);

  const bodyWithoutFAQ = page.body
    .replace(/## Frequently Asked Questions[\s\S]*$/, "")
    .trim();

  return (
    <>
      {/* 1. HERO — dark */}
      <section className="bg-[var(--color-bg-accent)]">
        <div className="mx-auto max-w-content px-container-x py-20 md:py-28">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)] md:text-[var(--font-size-hero)]">
                Compare All Packages
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-text-on-dark-muted)]">
                Side-by-side pricing, features, and privacy levels for every
                formation option.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. CONTENT — cream */}
      <Section variant="cream">
        <MarkdownContent content={bodyWithoutFAQ} />
      </Section>

      {/* 3. FAQ — cream-alt */}
      {faqs.length > 0 && (
        <Section variant="cream-alt">
          <FAQAccordion items={faqs} />
        </Section>
      )}

      {/* 4. CTA — dark */}
      <CTABand
        headline="Ready to Get Started?"
        description="Formation typically completes in 1-7 business days depending on the state."
        primaryCTA={{ label: "Start Your Formation", href: "/checkout" }}
        secondaryCTA={{
          label: "Call (775) 313-4155",
          href: "tel:+17753134155",
        }}
      />
    </>
  );
}
