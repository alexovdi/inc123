import type { Metadata } from "next";
import Link from "next/link";
import { getHubContent, getAllContent, parseFAQsFromBody } from "@/lib/content";
import { extractIntroParagraphs } from "@/lib/markdown-helpers";
import { Section } from "@/components/layout/Section";
import { PillarHero } from "@/components/heroes/PillarHero";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { CTABand } from "@/components/conversion/CTABand";
import { FadeUp } from "@/components/animation/FadeUp";

const PILLAR = "privacy" as const;

export async function generateMetadata(): Promise<Metadata> {
  const hub = getHubContent(PILLAR);
  if (!hub) return { title: "Business Privacy" };
  return {
    title: hub.frontmatter.title,
    description: hub.frontmatter.description,
  };
}

export default function PrivacyHubPage() {
  const hub = getHubContent(PILLAR);
  if (!hub) return null;

  const clusters = getAllContent(PILLAR).filter(
    (p) => p.frontmatter.type === "cluster",
  );
  const intro = extractIntroParagraphs(hub.body, 2);
  const faqs = parseFAQsFromBody(hub.body);

  return (
    <>
      {/* 1. Hero */}
      <PillarHero
        title={hub.frontmatter.title}
        description={hub.frontmatter.description}
        pillar={PILLAR}
      />

      {/* 2. Intro */}
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

      {/* 3. Services Grid */}
      <Section variant="cream-alt">
        <FadeUp>
          <h2 className="mb-10 text-center font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight">
            Our Privacy Services
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
                    style={{ backgroundColor: "#3d5a8a" }}
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

      {/* 4. Why Inc123 */}
      <Section variant="dark">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight text-[var(--color-text-on-dark)]">
              Why Inc123 for Privacy?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-on-dark)] opacity-80">
              With 25 years in Nevada, we pioneered nominee officer structures
              before &ldquo;business privacy&rdquo; was a category. Our nominee
              services aren&apos;t outsourced &mdash; we maintain them in-house,
              year after year, so your name never appears on public records.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-on-dark)] opacity-80">
              Every privacy package includes a dedicated compliance team that
              monitors annual filings, registered agent renewals, and nominee
              continuity &mdash; so your protection never lapses.
            </p>
          </div>
        </FadeUp>
      </Section>

      {/* 5. Who This Is For */}
      <Section variant="cream">
        <FadeUp>
          <h2 className="mb-10 text-center font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight">
            Who This Is For
          </h2>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Real Estate Investors",
              desc: "Shield your identity from public property records and tenant lawsuits with anonymous LLC structures.",
            },
            {
              title: "Online Business Owners",
              desc: "Keep your name off WHOIS records, business filings, and state databases where competitors and bad actors look.",
            },
            {
              title: "High-Net-Worth Individuals",
              desc: "Separate personal identity from business holdings to reduce targeted litigation and unwanted attention.",
            },
            {
              title: "Professionals & Consultants",
              desc: "Doctors, attorneys, and advisors who need a liability firewall between their practice and personal assets.",
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

      {/* 6. Cross-Pillar Link */}
      <Section variant="cream-alt">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Privacy and asset protection work best together. Pair anonymous
              ownership with charging order protection for complete coverage.
            </p>
            <Link
              href="/asset-protection"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
            >
              Explore Asset Protection &rarr;
            </Link>
          </div>
        </FadeUp>
      </Section>

      {/* 7. FAQ */}
      {faqs.length > 0 && (
        <Section variant="cream">
          <FAQAccordion items={faqs} />
        </Section>
      )}

      {/* 5. CTA */}
      <CTABand
        headline="Explore Privacy Packages"
        description="Year-round nominee services, offshore records, and 25 years of privacy-focused formation."
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{
          label: "Call (775) 313-4155",
          href: "tel:+17753134155",
        }}
      />
    </>
  );
}
