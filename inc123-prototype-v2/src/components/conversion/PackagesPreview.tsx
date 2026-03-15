import Link from "next/link";
import { FadeUp } from "@/components/animation/FadeUp";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Wyoming Gold",
    price: "$1,275",
    badge: "Most Popular",
    highlighted: true,
    features: [
      "Year-round nominees",
      "Offshore records",
      "Registered agent",
      "All state fees included",
    ],
    href: "/packages/wyoming-gold",
  },
  {
    name: "Nevada Gold",
    price: "$1,800",
    badge: "Premium",
    highlighted: false,
    features: [
      "Year-round nominees",
      "Offshore records",
      "NV business license included",
      "All state fees included",
    ],
    href: "/packages/nevada-gold",
  },
  {
    name: "Wyoming Silver",
    price: "$875",
    badge: "Essential",
    highlighted: false,
    features: [
      "Registered agent",
      "Records preparation",
      "Bank account opening",
      "All state fees included",
    ],
    href: "/packages/wyoming-silver",
  },
] as const;

export function PackagesPreview() {
  return (
    <div>
      <FadeUp>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight">
            Choose Your Package
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            All-inclusive pricing. Every state fee included. No surprises.
          </p>
        </div>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {packages.map((pkg, i) => (
          <FadeUp key={pkg.name} delay={i * 0.1}>
            <Link
              href={pkg.href}
              className={cn(
                "group relative flex flex-col rounded-lg border bg-[var(--color-bg-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]",
                pkg.highlighted
                  ? "border-[var(--color-accent)] shadow-[var(--shadow-card)]"
                  : "border-[var(--color-border)]",
              )}
            >
              {/* Badge */}
              {pkg.badge && (
                <span
                  className={cn(
                    "absolute -top-3 left-6 inline-block rounded-full px-3 py-0.5 text-xs font-semibold tracking-wide uppercase",
                    pkg.highlighted
                      ? "bg-[var(--color-accent)] text-white"
                      : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
                  )}
                >
                  {pkg.badge}
                </span>
              )}

              <h3 className="mt-2 text-xl font-semibold text-[var(--color-text-primary)]">
                {pkg.name}
              </h3>
              <p className="mt-2">
                <span className="text-3xl font-bold text-[var(--color-text-primary)]">
                  {pkg.price}
                </span>
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-0.5 text-[var(--color-accent)]">
                      &#10003;
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center text-sm font-medium text-[var(--color-accent)] transition-colors group-hover:text-[var(--color-accent-hover)]">
                View Details &rarr;
              </span>
            </Link>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.3}>
        <div className="mt-10 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-hover)]"
          >
            Compare All Packages &rarr;
          </Link>
        </div>
      </FadeUp>
    </div>
  );
}

PackagesPreview.displayName = "PackagesPreview";
