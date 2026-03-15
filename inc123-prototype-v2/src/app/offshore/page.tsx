import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { CTABand } from "@/components/conversion/CTABand";
import { FadeUp } from "@/components/animation/FadeUp";
import { getAllContent, getHubContent } from "@/lib/content";

/* ═══════════════════════════════════════════════════════════════════════════
   Offshore Hub — /offshore
   Lists all offshore jurisdiction pages with intro content
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "International & Offshore Services",
  description:
    "Offshore company formation, international banking, and asset protection trusts with full IRS compliance. Nevis, BVI, Panama, and Hong Kong packages.",
};

export default function OffshorePage() {
  const hub = getHubContent("offshore");
  const allPages = getAllContent("offshore").filter(
    (p) => p.frontmatter.slug !== "/offshore/",
  );

  return (
    <>
      {/* 1. Dark hero */}
      <section className="bg-[var(--color-bg-accent)]">
        <div className="mx-auto max-w-content px-container-x py-24 md:py-32">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)]">
                {hub?.frontmatter.title ?? "International & Offshore Services"}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-on-dark-muted)]">
                {hub?.frontmatter.description ??
                  "Offshore company formation, international banking, and asset protection trusts with full IRS compliance."}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. Jurisdiction grid (cream) */}
      <Section variant="cream">
        <FadeUp>
          <h2 className="mb-12 text-center font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight">
            Our Jurisdictions
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {allPages.map((page) => {
            const slug = page.frontmatter.slug
              .replace(/^\//, "")
              .replace(/\/$/, "");
            return (
              <FadeUp key={slug}>
                <Link
                  href={`/${slug}`}
                  className="group block rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-8 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-accent)]"
                >
                  <h3 className="font-[var(--font-display)] text-[var(--font-size-h3)] leading-snug text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                    {page.frontmatter.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {page.frontmatter.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)]">
                    Learn more &rarr;
                  </span>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </Section>

      {/* 3. CTA band (dark) */}
      <CTABand
        headline="Contact Us for Offshore Formation"
        description="Schedule a free consultation to discuss which jurisdiction and structure best fits your goals."
        primaryCTA={{ label: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{
          label: "Compare Domestic Packages",
          href: "/compare-packages",
        }}
      />
    </>
  );
}
