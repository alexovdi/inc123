import type { Metadata } from "next";
import Link from "next/link";
import { getHubContent, getAllContent, parseFAQsFromBody } from "@/lib/content";
import { extractIntroParagraphs } from "@/lib/markdown-helpers";
import { Section } from "@/components/layout/Section";
import { PillarHero } from "@/components/heroes/PillarHero";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { CTABand } from "@/components/conversion/CTABand";
import { FadeUp } from "@/components/animation/FadeUp";

const PILLAR = "compliance" as const;
const PILLAR_COLOR = "#5a3d7a";

export async function generateMetadata(): Promise<Metadata> {
  const hub = getHubContent(PILLAR);
  if (!hub) return { title: "Compliance" };
  return {
    title: hub.frontmatter.title,
    description: hub.frontmatter.description,
  };
}

export default function ComplianceHubPage() {
  const hub = getHubContent(PILLAR);
  if (!hub) return null;

  const clusters = getAllContent(PILLAR).filter(
    (p) => p.frontmatter.type === "cluster",
  );
  const intro = extractIntroParagraphs(hub.body, 2);
  const faqs = parseFAQsFromBody(hub.body);

  return (
    <>
      <PillarHero
        title={hub.frontmatter.title}
        description={hub.frontmatter.description}
        pillar={PILLAR}
      />

      <Section variant="cream">
        <FadeUp>
          <div className="mx-auto max-w-3xl">
            {intro.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="mt-4 first:mt-0 text-lg leading-relaxed text-[var(--color-text-secondary)]"
              >
                {para}
              </p>
            ))}
          </div>
        </FadeUp>
      </Section>

      <Section variant="cream-alt">
        <FadeUp>
          <h2 className="mb-10 text-center font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight">
            Compliance Services
          </h2>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clusters.map((cluster, i) => {
            const slug = cluster.frontmatter.slug
              .replace(/^\//, "")
              .replace(/\/$/, "");
            return (
              <FadeUp key={slug} delay={i * 0.05}>
                <Link
                  href={`/${slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
                >
                  <span
                    className="mb-3 inline-block h-1 w-10 rounded-full"
                    style={{ backgroundColor: PILLAR_COLOR }}
                    aria-hidden="true"
                  />
                  <h3 className="font-[var(--font-display)] text-lg font-bold leading-snug group-hover:text-[var(--color-accent)]">
                    {cluster.frontmatter.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {cluster.frontmatter.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-[var(--color-accent)]">
                    Learn more &rarr;
                  </span>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </Section>

      {/* Why Inc123 */}
      <Section variant="dark">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight text-[var(--color-text-on-dark)]">
              Why Inc123 for Compliance?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-on-dark)] opacity-80">
              Compliance failures are the #1 reason entities lose their
              liability protection. We track every deadline &mdash; annual
              reports, franchise taxes, registered agent renewals &mdash; and
              handle filings before they&apos;re due, so your entity stays in
              good standing.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-on-dark)] opacity-80">
              Clients who formed elsewhere come to us for compliance catch-up.
              We reinstate lapsed entities and get them current, fast.
            </p>
          </div>
        </FadeUp>
      </Section>

      {/* Who This Is For */}
      <Section variant="cream">
        <FadeUp>
          <h2 className="mb-10 text-center font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight">
            Who This Is For
          </h2>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Multi-Entity Owners",
              desc: "Managing 2+ LLCs or corporations? We track all deadlines across states so nothing slips through the cracks.",
            },
            {
              title: "Out-of-State Filers",
              desc: "Registered in Wyoming or Nevada but live elsewhere? We serve as your in-state registered agent and handle all local filings.",
            },
            {
              title: "Existing Business Owners",
              desc: "Already have an entity that's fallen behind? We specialize in compliance catch-up — reinstating lapsed entities and clearing overdue filings.",
            },
            {
              title: "Privacy-Focused Clients",
              desc: "Nominee services require active compliance maintenance. We ensure your privacy structure stays intact year after year.",
            },
          ].map((persona, i) => (
            <FadeUp key={persona.title} delay={i * 0.05}>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
                <h3 className="font-[var(--font-display)] text-lg font-bold">
                  {persona.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {persona.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* Cross-Pillar Link */}
      <Section variant="cream-alt">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Need to form a new entity? Start with the right structure from day
              one &mdash; privacy-first formation packages with built-in
              compliance.
            </p>
            <Link
              href="/formation"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
            >
              Explore Company Formation &rarr;
            </Link>
          </div>
        </FadeUp>
      </Section>

      {faqs.length > 0 && (
        <Section variant="cream">
          <FAQAccordion items={faqs} />
        </Section>
      )}

      <CTABand
        headline="Stay Compliant, Stay Protected"
        description="Annual reports, registered agent services, and ongoing compliance support for your business entities."
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{
          label: "Call (775) 313-4155",
          href: "tel:+17753134155",
        }}
      />
    </>
  );
}
