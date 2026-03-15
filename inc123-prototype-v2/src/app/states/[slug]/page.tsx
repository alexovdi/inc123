import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StateHero } from "@/components/heroes/StateHero";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { CTABand } from "@/components/conversion/CTABand";
import { Section } from "@/components/layout/Section";
import {
  getContentByFilename,
  getContentSlugs,
  parseFAQsFromBody,
} from "@/lib/content";

/* ═══════════════════════════════════════════════════════════════════════════
   State Hub — /states/[slug]
   Dynamic route for state-specific formation pages (nevada, wyoming, etc.)
   ═══════════════════════════════════════════════════════════════════════════ */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getContentSlugs("states", false).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getContentByFilename("states", slug);
  if (!page) return {};

  return {
    title: page.frontmatter.title,
    description: page.frontmatter.description,
  };
}

export default async function StateHubPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getContentByFilename("states", slug);
  if (!page) notFound();

  const faqs = parseFAQsFromBody(page.body);

  // Extract state name from slug (capitalize first letter)
  const stateName = slug.charAt(0).toUpperCase() + slug.slice(1);

  // Remove the FAQ section from body so it's not rendered twice
  const bodyWithoutFAQ = page.body.replace(/## FAQ[\s\S]*$/, "");

  return (
    <>
      {/* 1. Dark hero */}
      <StateHero
        title={page.frontmatter.title}
        description={page.frontmatter.description}
        state={stateName}
      />

      {/* 2. Main content (cream) */}
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
        headline={`Ready to Form in ${stateName}?`}
        description={`Start your ${stateName} LLC or corporation today. All state fees included, no hidden costs.`}
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{
          label: "Compare All Packages",
          href: "/compare-packages",
        }}
      />
    </>
  );
}
