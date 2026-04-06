import { Link as RouterLink } from "react-router-dom";

import { cn } from "@/design-system/utils/cn";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import type { HomepageTestimonialItem } from "@/data/homepage";

/* ------------------------------------------------
   Color maps
   ------------------------------------------------ */
const quoteAccentColors: Record<string, string> = {
  secondary: "quote-accent-secondary",
  success: "quote-accent-success",
  accent: "quote-accent-accent",
};

const avatarBg: Record<string, string> = {
  secondary: "bg-secondary/[0.05] text-secondary",
  success: "bg-success/[0.05] text-success",
  accent: "bg-accent/[0.05] text-accent",
};

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
interface TestimonialGridProps {
  testimonials: HomepageTestimonialItem[];
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function TestimonialGrid({ testimonials, className }: TestimonialGridProps) {
  return (
    <section className={cn("bg-primary-50 py-section-y", className)}>
      <div className="mx-auto max-w-content px-container-x">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Client Experiences"
            title="What our clients say"
            subtitle="Business owners who chose privacy, protection, and transparency."
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-[1fr_1.2fr_1fr] items-stretch">
          {testimonials.map((t, index) => (
            <ScrollReveal key={index} delay={index * 120} className="h-full">
              <div
                className={cn(
                  "rounded-card-lg bg-surface border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_72px_-14px_rgba(0,0,0,0.06)] hover:border-transparent focus-within:-translate-y-2 focus-within:shadow-[0_28px_72px_-14px_rgba(0,0,0,0.06)] h-full flex flex-col",
                  t.featured
                    ? "p-10 lg:p-12 border-secondary/[0.08]"
                    : "p-8 lg:p-10",
                  t.featured &&
                    "bg-gradient-to-b from-secondary/[0.015] to-surface",
                )}
              >
                {/* Stars */}
                <div
                  className="flex gap-1 mb-6"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 fill-accent stroke-none"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M8 .5l2.47 5 5.53.8-4 3.9.94 5.5L8 13.2l-4.94 2.5.94-5.5-4-3.9 5.53-.8z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className={cn(
                    "text-body text-muted leading-relaxed mb-7 flex-1",
                    t.featured && "text-body-lg",
                  )}
                >
                  <span className="text-heading font-display font-bold text-secondary/30 leading-none">
                    &ldquo;
                  </span>
                  {t.quote}
                  <span className="text-heading font-display font-bold text-secondary/30 leading-none">
                    &rdquo;
                  </span>
                </p>

                {/* Author */}
                <div className="flex items-center gap-3.5">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl font-display text-body font-bold",
                      avatarBg[t.color],
                    )}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-body text-foreground">
                      {t.name}
                    </p>
                    <p className="text-body-sm text-muted mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View all link */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-8">
            <RouterLink
              to="/testimonials"
              className="text-body-sm font-medium text-secondary hover:underline underline-offset-[3px] decoration-border hover:decoration-secondary transition-colors"
            >
              View all testimonials →
            </RouterLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

TestimonialGrid.displayName = "TestimonialGrid";

export { TestimonialGrid };
