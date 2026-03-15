import type { Metadata } from "next";
import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { Section } from "@/components/layout/Section";
import { FadeUp } from "@/components/animation/FadeUp";
import { CTABand } from "@/components/conversion/CTABand";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Packages",
  description:
    "All-inclusive pricing for every privacy and formation need. Wyoming, Nevada, California, Florida, and shelf company packages.",
};

export default function PackagesListingPage() {
  const packages = getAllContent("packages");

  return (
    <>
      {/* 1. HERO — dark */}
      <section className="bg-[var(--color-bg-accent)]">
        <div className="mx-auto max-w-content px-container-x py-20 md:py-28">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)] md:text-[var(--font-size-hero)]">
                Our Packages
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-text-on-dark-muted)]">
                All-inclusive pricing for every privacy and formation need.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. PACKAGE GRID — cream */}
      <Section variant="cream">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => {
            /* Derive a link-friendly slug from the filename portion of the slug field */
            const filename = pkg.slug
              .replace(/^\//, "")
              .replace(/\/$/, "")
              .split("/")
              .pop();

            return (
              <FadeUp key={pkg.frontmatter.title} delay={i * 0.05}>
                <Link
                  href={`/packages/${filename}`}
                  className={cn(
                    "group flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 transition-all duration-300",
                    "hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-card-hover)]",
                  )}
                >
                  <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    {pkg.frontmatter.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {pkg.frontmatter.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--color-accent)] transition-colors group-hover:text-[var(--color-accent-hover)]">
                    View Details &rarr;
                  </span>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </Section>

      {/* 3. CTA — dark */}
      <CTABand
        headline="Not Sure Which Package Is Right?"
        description="Call us and a formation specialist will help you choose."
        primaryCTA={{ label: "Compare All Packages", href: "/compare-packages" }}
        secondaryCTA={{
          label: "Call (775) 313-4155",
          href: "tel:+17753134155",
        }}
      />
    </>
  );
}
