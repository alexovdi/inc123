"use client";

import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";
import { Lock, FileText, Shield } from "lucide-react";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface HeadlineSegment {
  text: string;
  highlight?: boolean;
}

export interface HeroStat {
  value: string;
  unit: string;
  label: string;
}

export interface HomepageHeroProps {
  /** Structured headline with optional gradient highlights */
  headlineLines: HeadlineSegment[][];
  /** Supporting subheadline paragraph */
  subheadline: string;
  /** Primary call-to-action */
  primaryCTA: { label: string; href: string };
  /** Secondary call-to-action */
  secondaryCTA: { label: string; href: string };
  /** Eyebrow badge text */
  eyebrow?: string;
  /** Phone number for safety net */
  phone?: string;
  /** Consultation link text */
  consultationHref?: string;
  /** Stats displayed at bottom of hero */
  stats?: HeroStat[];
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Floating Pillar Badges (right visual)
   ------------------------------------------------ */
function HeroVisual() {
  return (
    <div
      className="relative w-full h-full min-h-[400px] flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Central shield icon */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
        </div>
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08]">
          <Lock className="h-12 w-12 text-secondary/60" strokeWidth={1.5} />
        </div>
      </div>

      {/* Privacy badge — top right */}
      <div
        className="absolute top-12 right-4 flex items-center gap-3 rounded-2xl bg-white/[0.05] border border-white/[0.08] px-4 py-3 backdrop-blur-sm"
        style={{
          animation: "hero-fade-up 800ms var(--ease-out-expo) 600ms both",
        }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
          <Lock className="h-5 w-5 text-secondary/80" />
        </div>
        <div>
          <p className="text-body-sm font-semibold text-white">Privacy</p>
          <p className="text-caption text-white/40 font-mono">
            Year-round nominees
          </p>
        </div>
      </div>

      {/* Formation badge — middle right */}
      <div
        className="absolute top-1/2 -translate-y-1/4 right-0 flex items-center gap-3 rounded-2xl bg-white/[0.05] border border-white/[0.08] px-4 py-3 backdrop-blur-sm"
        style={{
          animation: "hero-fade-up 800ms var(--ease-out-expo) 800ms both",
        }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
          <FileText className="h-5 w-5 text-secondary/80" />
        </div>
        <div>
          <p className="text-body-sm font-semibold text-white">Formation</p>
          <p className="text-caption text-white/40 font-mono">All-inclusive</p>
        </div>
      </div>

      {/* Protection badge — bottom left */}
      <div
        className="absolute bottom-24 left-0 flex items-center gap-3 rounded-2xl bg-white/[0.05] border border-white/[0.08] px-4 py-3 backdrop-blur-sm"
        style={{
          animation: "hero-fade-up 800ms var(--ease-out-expo) 1000ms both",
        }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10">
          <Shield className="h-5 w-5 text-success/80" />
        </div>
        <div>
          <p className="text-body-sm font-semibold text-white">Protection</p>
          <p className="text-caption text-white/40 font-mono">Charging order</p>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-8 right-32 h-2 w-2 rounded-full bg-secondary/60" />
      <div className="absolute top-[45%] right-12 h-1.5 w-1.5 rounded-full bg-accent/60" />
      <div className="absolute bottom-16 left-24 h-2 w-2 rounded-full bg-success/60" />
    </div>
  );
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function HomepageHero({
  headlineLines,
  subheadline,
  primaryCTA,
  secondaryCTA,
  eyebrow,
  phone,
  consultationHref,
  stats,
  className,
}: HomepageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Background layers */}
      <div className="absolute inset-0 bg-primary" />
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 50% at 65% 45%, rgba(37,99,235,0.16), transparent 60%)",
            "radial-gradient(ellipse 50% 60% at 25% 75%, rgba(147,51,234,0.06), transparent 50%)",
            "radial-gradient(ellipse 40% 40% at 80% 85%, rgba(217,119,6,0.05), transparent 50%)",
          ].join(","),
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(12,30,53,0.7))",
        }}
      />
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.025'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-content px-container-x pt-28 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Eyebrow chip */}
            {eyebrow && (
              <div
                className="inline-flex items-center gap-2.5 rounded-full border border-secondary/10 bg-secondary/[0.06] px-5 py-2.5 mb-9"
                style={{
                  animation:
                    "hero-fade-up 800ms var(--ease-out-expo) 200ms both",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary/60 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
                </span>
                <span className="text-caption font-semibold tracking-[0.14em] uppercase text-secondary/80">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Headline with gradient highlights */}
            <h1
              className="font-display font-black text-white leading-[0.96] tracking-[-0.05em]"
              style={{
                fontSize: "clamp(38px, 5vw, 60px)",
              }}
            >
              {headlineLines.map((line, lineIndex) => (
                <span key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line.map((segment, segIndex) => (
                    <span
                      key={segIndex}
                      className={cn(
                        "inline-block",
                        segment.highlight && "hero-gradient-text",
                      )}
                      style={{
                        animation: segment.highlight
                          ? `hero-fade-up 800ms var(--ease-out-expo) ${lineIndex * 250 + segIndex * 120 + 400}ms both, shimmer 10s ease infinite`
                          : `hero-fade-up 800ms var(--ease-out-expo) ${lineIndex * 250 + segIndex * 120 + 400}ms both`,
                      }}
                    >
                      {segment.text}
                      {segIndex < line.length - 1 && "\u00A0"}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              className="mt-8 text-[18px] leading-[1.8] text-white/[0.42] max-w-[480px] tracking-[-0.02em]"
              style={{
                animation:
                  "hero-fade-up 1000ms var(--ease-out-expo) 900ms both",
              }}
            >
              {subheadline}
            </p>

            {/* Dual CTAs */}
            <div
              className="mt-10 flex flex-col gap-3.5 sm:flex-row"
              style={{
                animation:
                  "hero-fade-up 1000ms var(--ease-out-expo) 1100ms both",
              }}
            >
              <Button variant="cta" size="lg" asChild className="rounded-xl">
                <a href={primaryCTA.href}>{primaryCTA.label}</a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="rounded-xl border-white/20 text-white hover:bg-white/10"
              >
                <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
              </Button>
            </div>

            {/* Safety net with links */}
            {phone && (
              <p
                className="mt-5 text-body-sm text-white/[0.28]"
                style={{
                  animation:
                    "hero-fade-in 1000ms var(--ease-out-expo) 1300ms both",
                }}
              >
                Prefer to talk?{" "}
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="text-white/[0.48] underline underline-offset-[3px] decoration-white/[0.12] hover:text-white hover:decoration-white transition-all"
                >
                  Call {phone}
                </a>
                {consultationHref && (
                  <>
                    {" · "}
                    <a
                      href={consultationHref}
                      className="text-white/[0.48] underline underline-offset-[3px] decoration-white/[0.12] hover:text-white hover:decoration-white transition-all"
                    >
                      Schedule a consultation
                    </a>
                  </>
                )}
              </p>
            )}

            {/* Hero Stats Bar */}
            {stats && stats.length > 0 && (
              <div
                className="mt-16 flex rounded-[20px] bg-white/[0.03] border border-white/[0.04] overflow-hidden"
                style={{
                  animation:
                    "hero-fade-up 1000ms var(--ease-out-expo) 1400ms both",
                }}
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={cn(
                      "flex-1 py-5 px-6 text-center",
                      index > 0 && "border-l border-white/[0.06]",
                    )}
                  >
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display text-[28px] font-semibold text-white/90 tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-body-sm text-white/30">
                        {stat.unit}
                      </span>
                    </div>
                    <p className="mt-1 text-caption text-white/25">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right visual — hidden on mobile */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

HomepageHero.displayName = "HomepageHero";

export { HomepageHero };
