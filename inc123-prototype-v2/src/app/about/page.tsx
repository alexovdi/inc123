import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { CTABand } from "@/components/conversion/CTABand";
import { FadeUp } from "@/components/animation/FadeUp";
import { getContent } from "@/lib/content";

/* ═══════════════════════════════════════════════════════════════════════════
   About — /about
   Company history, philosophy, and differentiators
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "About Incorporate123",
  description:
    "25 years of privacy-focused business formation from Reno, Nevada. Learn about our history, philosophy, international structure, and commitment to client confidentiality.",
};

export default function AboutPage() {
  const page = getContent("about.md");

  return (
    <>
      {/* 1. Dark hero */}
      <section className="bg-[var(--color-bg-accent)]">
        <div className="mx-auto max-w-content px-container-x py-24 md:py-32">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)]">
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
        <MarkdownContent content={page.body} />
      </Section>

      {/* 3. CTA band (dark) */}
      <CTABand
        headline="Ready to Get Started?"
        description="Most clients complete formation in 1-7 business days depending on the state."
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{
          label: "Compare All Packages",
          href: "/compare-packages",
        }}
      />
    </>
  );
}
