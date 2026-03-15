import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { FadeUp } from "@/components/animation/FadeUp";
import { getContent } from "@/lib/content";

/* ═══════════════════════════════════════════════════════════════════════════
   Terms of Service — /terms
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Incorporate123 terms of service including refund policy, service limitations, and client responsibilities for business formation and privacy services.",
};

export default function TermsPage() {
  const page = getContent("terms.md");

  return (
    <>
      {/* Dark hero */}
      <section className="bg-[var(--color-bg-accent)]">
        <div className="mx-auto max-w-content px-container-x py-24 md:py-32">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)]">
                {page.frontmatter.title}
              </h1>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Content (cream) */}
      <Section variant="cream">
        <MarkdownContent content={page.body} />
      </Section>
    </>
  );
}
