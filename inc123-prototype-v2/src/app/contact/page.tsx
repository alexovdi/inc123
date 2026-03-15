import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { CTABand } from "@/components/conversion/CTABand";
import { FadeUp } from "@/components/animation/FadeUp";
import { getContent } from "@/lib/content";

/* ═══════════════════════════════════════════════════════════════════════════
   Contact — /contact
   Contact info cards + content body
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Contact Incorporate123",
  description:
    "Contact Incorporate123 for business formation, privacy services, and asset protection. Call toll-free 1-800-553-0615 or reach our Reno, Nevada office directly.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    lines: [
      {
        label: "Toll Free (US & Canada)",
        value: "1-800-553-0615",
        href: "tel:18005530615",
      },
      {
        label: "Reno, Nevada",
        value: "(775) 313-4155",
        href: "tel:+17753134155",
      },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      {
        label: "General Inquiries",
        value: "info@incorporate123.com",
        href: "mailto:info@incorporate123.com",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Office Address",
    lines: [
      {
        label: "Nevada Corporation Services Ltd.",
        value: "1795 Meadow Wood Lane, Suite 100\nReno, NV 89502",
        href: undefined,
      },
    ],
  },
] as const;

export default function ContactPage() {
  const page = getContent("contact.md");

  // Remove the contact info sections from body (already shown in cards)
  // Keep content after "## What to Expect"
  const bodyAfterCards = page.body
    .split("## What to Expect")
    .slice(1)
    .join("## What to Expect");
  const remainingBody = bodyAfterCards
    ? `## What to Expect${bodyAfterCards}`
    : "";

  return (
    <>
      {/* 1. Dark hero */}
      <section className="bg-[var(--color-bg-accent)]">
        <div className="mx-auto max-w-content px-container-x py-24 md:py-32">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)]">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-on-dark-muted)]">
                {page.frontmatter.description}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. Contact info cards (cream) */}
      <Section variant="cream">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <FadeUp key={card.title}>
                <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-8 shadow-[var(--shadow-card)]">
                  <Icon
                    className="mb-4 h-8 w-8 text-[var(--color-accent)]"
                    strokeWidth={1.5}
                  />
                  <h3 className="mb-4 font-[var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
                    {card.title}
                  </h3>
                  <div className="space-y-3">
                    {card.lines.map((line) => (
                      <div key={line.label}>
                        <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">
                          {line.label}
                        </p>
                        {line.href ? (
                          <a
                            href={line.href}
                            className="text-base font-medium text-[var(--color-accent)] hover:underline"
                          >
                            {line.value}
                          </a>
                        ) : (
                          <p className="whitespace-pre-line text-base text-[var(--color-text-primary)]">
                            {line.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Section>

      {/* 3. Content section (cream-alt) */}
      {remainingBody && (
        <Section variant="cream-alt">
          <MarkdownContent content={remainingBody} />
        </Section>
      )}

      {/* 4. CTA band (dark) */}
      <CTABand
        headline="Ready to Get Started?"
        description="Most clients complete formation in 5-7 business days."
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{
          label: "Compare All Packages",
          href: "/compare-packages",
        }}
      />
    </>
  );
}
