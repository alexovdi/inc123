import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import {
  getContentByFilename,
  getAllContent,
  parseFAQsFromBody,
} from "@/lib/content";
import { estimateReadingTime } from "@/lib/markdown-helpers";
import { Section } from "@/components/layout/Section";
import { ClusterHero } from "@/components/heroes/ClusterHero";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { Sidebar } from "@/components/content/Sidebar";
import { CTABand } from "@/components/conversion/CTABand";
import Link from "next/link";

const FOLDER = "formation";
const PILLAR = "formation" as const;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", FOLDER);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f !== "_index.md")
    .map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getContentByFilename(FOLDER, slug);
  if (!page) return { title: "Not Found" };
  return {
    title: page.frontmatter.title,
    description: page.frontmatter.description,
  };
}

export default async function FormationClusterPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getContentByFilename(FOLDER, slug);
  if (!page) notFound();

  const readingTime = estimateReadingTime(page.body);
  const faqs = parseFAQsFromBody(page.body);

  const bodyWithoutFAQ = page.body
    .split(/^## Frequently Asked Questions/m)[0]
    .trim();

  return (
    <>
      <ClusterHero
        title={page.frontmatter.title}
        pillar={PILLAR}
        readingTime={readingTime}
      />

      <Section variant="cream">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="min-w-0 lg:w-[70%]">
            <MarkdownContent content={bodyWithoutFAQ} />
          </div>
          <div className="lg:w-[30%]">
            <Sidebar
              relatedPackages={page.frontmatter.related_packages}
              pillar={PILLAR}
            />
          </div>
        </div>
      </Section>

      {faqs.length > 0 && (
        <Section variant="cream-alt">
          <FAQAccordion items={faqs} />
        </Section>
      )}

      {/* Related Clusters */}
      {(() => {
        const siblings = getAllContent(FOLDER)
          .filter(
            (p) =>
              p.frontmatter.type === "cluster" &&
              p.frontmatter.slug !== page.frontmatter.slug,
          )
          .slice(0, 3);
        if (siblings.length === 0) return null;
        return (
          <Section variant="cream-alt">
            <h2 className="mb-8 text-center font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight">
              Related Topics
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((s) => {
                const href = `/${s.frontmatter.slug.replace(/^\//, "").replace(/\/$/, "")}`;
                return (
                  <Link
                    key={href}
                    href={href}
                    className="group rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
                  >
                    <h3 className="font-[var(--font-display)] text-lg font-bold leading-snug group-hover:text-[var(--color-accent)]">
                      {s.frontmatter.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {s.frontmatter.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent)]">
                      Read more &rarr;
                    </span>
                  </Link>
                );
              })}
            </div>
          </Section>
        );
      })()}

      <CTABand
        headline="Ready to Form Your Company?"
        description="LLCs and corporations in Wyoming and Nevada, formed in as little as 30 minutes."
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{
          label: "Call (775) 313-4155",
          href: "tel:+17753134155",
        }}
      />
    </>
  );
}
