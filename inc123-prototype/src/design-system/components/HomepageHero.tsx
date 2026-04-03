import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";
import { CheckCircle } from "lucide-react";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface HomepageHeroProps {
  /** Main H1 headline */
  headline: string;
  /** Supporting subheadline paragraph */
  subheadline: string;
  /** Primary call-to-action */
  primaryCTA: { label: string; href: string };
  /** Secondary call-to-action */
  secondaryCTA: { label: string; href: string };
  /** 4 trust snippets shown in a horizontal row below CTAs */
  trustSnippets: string[];
  /** Override the hardcoded eyebrow text */
  eyebrow?: string;
  /** Subtle text below CTAs (e.g. "Have questions? Call …") */
  safetyNet?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Decorative SVG shield (pure CSS + SVG, no assets)
   ------------------------------------------------ */
function HeroShield() {
  return (
    <div
      className="relative flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Radial glow behind shield */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-white/8 blur-3xl" />
      </div>
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-64 w-56 lg:h-80 lg:w-72"
      >
        {/* Shield outline */}
        <path
          d="M100 10 L180 50 L180 130 Q180 190 100 230 Q20 190 20 130 L20 50 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white/20"
          fill="none"
        />
        {/* Inner shield */}
        <path
          d="M100 30 L165 62 L165 125 Q165 178 100 212 Q35 178 35 125 L35 62 Z"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-white/[0.12]"
          fill="url(#shieldGradient)"
        />
        <defs>
          <linearGradient
            id="shieldGradient"
            x1="100"
            y1="30"
            x2="100"
            y2="212"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Grid pattern lines */}
        <line
          x1="100"
          y1="30"
          x2="100"
          y2="212"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/[0.08]"
        />
        <line
          x1="35"
          y1="95"
          x2="165"
          y2="95"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/[0.08]"
        />
        <line
          x1="35"
          y1="140"
          x2="165"
          y2="140"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/[0.08]"
        />
        {/* Checkmark inside */}
        <path
          d="M72 115 L92 135 L128 99"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/25"
          fill="none"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function HomepageHero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  trustSnippets,
  eyebrow,
  safetyNet,
  className,
}: HomepageHeroProps) {
  return (
    <section className={cn("bg-primary", className)}>
      <div className="mx-auto max-w-content px-container-x py-28 lg:py-40">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left content — 2/3 */}
          <div className="flex-1 lg:basis-2/3">
            {/* Eyebrow */}
            <p
              className="text-body-sm font-medium text-white/60 mb-3 tracking-[0.15em] uppercase"
              style={{
                animation: "hero-fade-up 600ms var(--ease-out-expo) 100ms both",
              }}
            >
              {eyebrow ?? "Trusted Since 2000 \u00b7 Privacy Specialists"}
            </p>

            {/* H1 Headline — v4: weight 500, tight line-height for editorial gravitas */}
            <h1
              className="font-display text-display font-medium text-white md:text-display-lg lg:text-display-xl"
              style={{
                animation: "hero-fade-up 800ms var(--ease-out-expo) 0ms both",
              }}
            >
              {headline}
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 text-body-lg text-white/70 max-w-[38ch] leading-relaxed"
              style={{
                animation: "hero-fade-up 600ms var(--ease-out-expo) 200ms both",
              }}
            >
              {subheadline}
            </p>

            {/* Dual CTAs */}
            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              style={{
                animation: "hero-fade-up 600ms var(--ease-out-expo) 400ms both",
              }}
            >
              <Button variant="cta" size="lg" asChild>
                <a href={primaryCTA.href}>{primaryCTA.label}</a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="border-white/30 text-white hover:bg-white/10"
              >
                <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
              </Button>
            </div>

            {/* Consultation Safety Net */}
            {safetyNet && (
              <p
                className="mt-4 text-body-sm text-white/50"
                style={{
                  animation:
                    "hero-fade-in 600ms var(--ease-out-expo) 500ms both",
                }}
              >
                {safetyNet}
              </p>
            )}

            {/* Trust Strip */}
            {trustSnippets.length > 0 && (
              <div
                className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
                style={{
                  animation:
                    "hero-fade-in 600ms var(--ease-out-expo) 600ms both",
                }}
              >
                {trustSnippets.map((snippet) => (
                  <div
                    key={snippet}
                    className="flex items-center gap-2 text-body-sm text-white/60"
                  >
                    <CheckCircle
                      className="h-4 w-4 shrink-0 text-white/40"
                      aria-hidden="true"
                    />
                    <span>{snippet}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right decorative shield — 1/3, hidden on mobile */}
          <div className="hidden lg:flex lg:basis-1/3 items-center justify-center">
            <HeroShield />
          </div>
        </div>
      </div>
    </section>
  );
}

HomepageHero.displayName = "HomepageHero";

export { HomepageHero };
