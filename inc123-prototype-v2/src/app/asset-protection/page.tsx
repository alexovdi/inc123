import type { Metadata } from "next";
import Link from "next/link";
import { getHubContent, getAllContent, parseFAQsFromBody } from "@/lib/content";
import { extractIntroParagraphs } from "@/lib/markdown-helpers";
import { Section } from "@/components/layout/Section";
import { PillarHero } from "@/components/heroes/PillarHero";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { CTABand } from "@/components/conversion/CTABand";
import { FadeUp } from "@/components/animation/FadeUp";

const PILLAR = "asset-protection" as const;
const PILLAR_COLOR = "#2d5a3d";

export async function generateMetadata(): Promise<Metadata> {
  const hub = getHubContent(PILLAR);
  if (!hub) return { title: "Asset Protection" };
  return {
    title: hub.frontmatter.title,
    description: hub.frontmatter.description,
  };
}

export default function AssetProtectionHubPage() {
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
            Asset Protection Services
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
              Why Inc123 for Asset Protection?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-on-dark)] opacity-80">
              We don&apos;t just file paperwork &mdash; we architect
              multi-entity structures using Wyoming&apos;s strongest charging
              order protections and series LLC statutes. Our formations are
              designed by people who understand both the legal framework and the
              practical reality of asset protection.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-on-dark)] opacity-80">
              Every structure includes ongoing compliance support so your
              protection holds up when it matters most.
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
              title: "Real Estate Investors",
              desc: "Separate each property into its own LLC to prevent a single lawsuit from reaching your entire portfolio.",
            },
            {
              title: "Business Owners with $500K+ Assets",
              desc: "If you have meaningful assets to protect, a properly structured entity is the first line of defense against creditors.",
            },
            {
              title: "Medical & Legal Professionals",
              desc: "High-liability professions need separation between practice income, personal assets, and investment holdings.",
            },
            {
              title: "Multi-State Operators",
              desc: "Operating across state lines? Holding companies in Wyoming or Nevada provide centralized protection with favorable statutes.",
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
              Asset protection is strongest when paired with privacy. Anonymous
              ownership ensures creditors can&apos;t find what they can&apos;t
              see.
            </p>
            <Link
              href="/privacy"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
            >
              Explore Business Privacy &rarr;
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
        headline="Protect Your Assets"
        description="Wyoming charging order protection, series LLCs, and multi-entity structures built for real protection."
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{
          label: "Call (775) 313-4155",
          href: "tel:+17753134155",
        }}
      />
    </>
  );
}
