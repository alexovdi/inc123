import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { CTABand } from "@/components/conversion/CTABand";
import { FadeUp } from "@/components/animation/FadeUp";
import { testimonials } from "@/data/testimonials";

/* ═══════════════════════════════════════════════════════════════════════════
   Testimonials — /testimonials
   Client testimonials grid with gold star ratings
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "What Our Clients Say",
  description:
    "Read what clients say about Incorporate123's formation services, customer support, and privacy protections. Real reviews from real business owners.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* 1. Dark hero */}
      <section className="bg-[var(--color-bg-accent)]">
        <div className="mx-auto max-w-content px-container-x py-24 md:py-32">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)]">
                What Our Clients Say
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-on-dark-muted)]">
                Over 25 years, we have helped thousands of entrepreneurs and
                business owners form companies, protect their privacy, and
                secure their assets.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. Testimonial cards (cream) */}
      <Section variant="cream">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <FadeUp key={testimonial.name}>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-8 shadow-[var(--shadow-card)]">
                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[var(--color-accent)] text-[var(--color-accent)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-6 flex-1 text-sm italic leading-relaxed text-[var(--color-text-secondary)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div>
                  <p className="font-semibold text-[var(--color-text-primary)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {testimonial.title}, {testimonial.location}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* 3. CTA band (dark) */}
      <CTABand
        headline="Ready to Join Our Clients?"
        description="Start your formation today and experience the Incorporate123 difference."
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
