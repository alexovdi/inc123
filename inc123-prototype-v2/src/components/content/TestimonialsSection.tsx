"use client";

import { testimonials } from "@/data/testimonials";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";

function StarRating({ count }: { count: number }) {
  return (
    <span
      className="text-[var(--color-accent)]"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>&#9733;</span>
      ))}
    </span>
  );
}

export function TestimonialsSection() {
  // Show first 3 testimonials on homepage
  const featured = testimonials.slice(0, 3);

  return (
    <div>
      <h2 className="font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight text-center mb-12">
        What Our Clients Say
      </h2>

      <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {featured.map((t) => (
          <StaggerItem key={t.name}>
            <div className="relative flex flex-col gap-4 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-surface-dark)] p-6">
              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                className="absolute -top-3 left-6 font-[var(--font-display)] text-4xl leading-none text-[var(--color-accent)] opacity-50"
              >
                &ldquo;
              </span>

              <StarRating count={t.rating} />

              <blockquote className="flex-1 text-sm italic leading-relaxed text-[var(--color-text-on-dark)]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <footer className="mt-2 border-t border-[var(--color-border-dark)] pt-3">
                <p className="text-sm font-semibold text-[var(--color-text-on-dark)]">
                  {t.name}
                </p>
                <p className="text-xs text-[var(--color-text-on-dark-muted)]">
                  {t.title} &middot; {t.location}
                </p>
              </footer>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}

TestimonialsSection.displayName = "TestimonialsSection";
