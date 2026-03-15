import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { CTABand } from "@/components/conversion/CTABand";
import { FadeUp } from "@/components/animation/FadeUp";
import {
  getContentByFilename,
  getContentSlugs,
  parseFAQsFromBody,
} from "@/lib/content";

/* ═══════════════════════════════════════════════════════════════════════════
   Offshore Jurisdiction — /offshore/[slug]
   Dynamic route for individual offshore jurisdiction pages
   ═══════════════════════════════════════════════════════════════════════════ */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getContentSlugs("offshore", true).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getContentByFilename("offshore", slug);
  if (!page) return {};

  return {
    title: page.frontmatter.title,
    description: page.frontmatter.description,
  };
}

export default async function OffshoreJurisdictionPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getContentByFilename("offshore", slug);
  if (!page) notFound();

  const faqs = parseFAQsFromBody(page.body);

  // Remove the FAQ section from body so it's not rendered twice
  const bodyWithoutFAQ = page.body.replace(/## FAQ[\s\S]*$/, "");

  return (
    <>
      {/* 1. Dark hero */}
      <section className="bg-[var(--color-bg-accent)]">
        <div className="mx-auto max-w-content px-container-x py-24 md:py-32">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
                Offshore Formation
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)]">
                {page.frontmatter.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-on-dark-muted)]">
                {page.frontmatter.description}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. Content (cream) */}
      <Section variant="cream">
        <MarkdownContent content={bodyWithoutFAQ} />
      </Section>

      {/* 3. FAQ section (cream-alt) */}
      {faqs.length > 0 && (
        <Section variant="cream-alt">
          <FAQAccordion items={faqs} />
        </Section>
      )}

      {/* 4. CTA band (dark) */}
      <CTABand
        headline="Ready to Explore Offshore Options?"
        description="Schedule a free consultation to discuss which offshore jurisdiction is right for your situation."
        primaryCTA={{ label: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{
          label: "View All Offshore Services",
          href: "/offshore",
        }}
      />
    </>
  );
}
