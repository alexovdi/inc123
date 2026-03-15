import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { CTABand } from "@/components/conversion/CTABand";
import { FadeUp } from "@/components/animation/FadeUp";
import { getContent } from "@/lib/content";

/* ═══════════════════════════════════════════════════════════════════════════
   Blog — /blog
   Blog landing page with content overview
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on business privacy, asset protection, LLC formation, nominee services, and compliance from the Incorporate123 team.",
};

export default function BlogPage() {
  const page = getContent("blog.md");

  return (
    <>
      {/* 1. Dark hero */}
      <section className="bg-[var(--color-bg-accent)]">
        <div className="mx-auto max-w-content px-container-x py-24 md:py-32">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)]">
                Blog
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
        <MarkdownContent content={page.body} />
      </Section>

      {/* 3. CTA band (dark) */}
      <CTABand
        headline="Ready to Get Started?"
        description="View our formation packages or contact us for a free consultation."
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
