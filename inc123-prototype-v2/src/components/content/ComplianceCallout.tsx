import Link from "next/link";
import { FadeUp } from "@/components/animation/FadeUp";

const benefits = [
  "Entity transfers and state conversions — move your LLC or corporation to a privacy-friendly jurisdiction",
  "Compliance catch-up — fix missed annual reports, reinstate lapsed entities, and get current",
  "Registered agent changes — switch to our nominee registered agent for immediate privacy protection",
];

export function ComplianceCallout() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <FadeUp>
        <h2 className="font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight">
          Already Have an Entity?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)]">
          You don&apos;t need to start from scratch. We help existing business
          owners strengthen their privacy and stay compliant.
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <ul className="mt-8 space-y-4 text-left">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 text-[var(--color-text-secondary)]"
            >
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
              <span className="leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="mt-10">
          <Link
            href="/compliance"
            className="inline-flex items-center gap-2 font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
          >
            Explore Compliance Services &rarr;
          </Link>
        </div>
      </FadeUp>
    </div>
  );
}

ComplianceCallout.displayName = "ComplianceCallout";
