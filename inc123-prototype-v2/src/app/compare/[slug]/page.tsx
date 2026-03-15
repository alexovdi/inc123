import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { getContentByFilename, parseFAQsFromBody } from "@/lib/content";
import { ComparisonHero } from "@/components/heroes/ComparisonHero";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { CTABand } from "@/components/conversion/CTABand";
import { Section } from "@/components/layout/Section";

const CONTENT_DIR = path.join(process.cwd(), "content", "compare");

export function generateStaticParams() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getContentByFilename("compare", slug);
  if (!page) return {};
  return {
    title: page.frontmatter.title,
    description: page.frontmatter.description,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getContentByFilename("compare", slug);
  if (!page) notFound();

  const faqs = parseFAQsFromBody(page.body);

  /* Strip FAQ section from body so it renders in the accordion instead */
  const bodyWithoutFAQ = page.body
    .replace(/## Frequently Asked Questions[\s\S]*$/, "")
    .trim();

  return (
    <>
      {/* 1. HERO — dark */}
      <ComparisonHero
        title={page.frontmatter.title}
        description={page.frontmatter.description}
      />

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
        headline="Ready to Choose Your State?"
        description="Compare our all-inclusive formation packages side by side."
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{
          label: "Compare All Packages",
          href: "/compare-packages",
        }}
      />
    </>
  );
}
