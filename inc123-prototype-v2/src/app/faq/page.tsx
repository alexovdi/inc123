import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { CTABand } from "@/components/conversion/CTABand";
import { FadeUp } from "@/components/animation/FadeUp";
import { getContent, parseFAQSections } from "@/lib/content";

/* ═══════════════════════════════════════════════════════════════════════════
   FAQ — /faq
   Grouped FAQ accordion organized by topic
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about LLC formation, business privacy, asset protection, nominee services, offshore structuring, and compliance requirements.",
};

export default function FAQPage() {
  const page = getContent("faq.md");
  const sections = parseFAQSections(page.body);

  return (
    <>
      {/* 1. Dark hero */}
      <section className="bg-[var(--color-bg-accent)]">
        <div className="mx-auto max-w-content px-container-x py-24 md:py-32">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)]">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-on-dark-muted)]">
                {page.frontmatter.description}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. FAQ sections (cream) */}
      <Section variant="cream">
        <FAQAccordion sections={sections} />
      </Section>

      {/* 3. CTA band (dark) */}
      <CTABand
        headline="Still Have Questions?"
        description="Contact us for a free consultation. We are happy to help you make an informed decision."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "View Packages", href: "/packages" }}
      />
    </>
  );
}
