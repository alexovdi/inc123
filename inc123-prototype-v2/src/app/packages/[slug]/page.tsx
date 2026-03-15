import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { getContentByFilename, parseFAQsFromBody } from "@/lib/content";
import { PackageHero } from "@/components/heroes/PackageHero";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { CTABand } from "@/components/conversion/CTABand";
import { Section } from "@/components/layout/Section";

const CONTENT_DIR = path.join(process.cwd(), "content", "packages");

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
  const page = getContentByFilename("packages", slug);
  if (!page) return {};
  return {
    title: page.frontmatter.title,
    description: page.frontmatter.description,
  };
}

/**
 * Extract the first dollar-amount price from the markdown body.
 * Looks for patterns like "$1,800" or "$875".
 */
function extractPrice(body: string): string | undefined {
  const match = body.match(/\$[\d,]+/);
  return match?.[0];
}

/**
 * Extract badge text from the markdown body.
 * Looks for standalone lines like "**Premium**" or "**Most Popular**".
 */
function extractBadge(body: string): string | undefined {
  const match = body.match(/^\*\*(Most Popular|Premium|Essential|Best Value)\*\*$/m);
  return match?.[1];
}

export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getContentByFilename("packages", slug);
  if (!page) notFound();

  const faqs = parseFAQsFromBody(page.body);
  const price = extractPrice(page.body);
  const badge = extractBadge(page.body);

  /* Strip FAQ section from body so it renders in the accordion instead */
  const bodyWithoutFAQ = page.body
    .replace(/## Frequently Asked Questions[\s\S]*$/, "")
    .trim();

  return (
    <>
      {/* 1. HERO — dark */}
      <PackageHero
        title={page.frontmatter.title}
        description={page.frontmatter.description}
        price={price}
        badge={badge}
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
        headline="Start Your Formation Today"
        description="Formation typically completes in 3-7 business days. The sooner you file, the sooner your protection is active."
        primaryCTA={{ label: "Start Your Formation", href: "/checkout" }}
        secondaryCTA={{
          label: "Call (775) 313-4155",
          href: "tel:+17753134155",
        }}
      />
    </>
  );
}
