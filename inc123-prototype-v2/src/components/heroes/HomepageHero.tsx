"use client";

import Link from "next/link";
import { Button } from "@/components/primitives/Button";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";

export function HomepageHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-accent)]">
      {/* Decorative shield outline — CSS-only geometric element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[8%] opacity-[0.07]"
      >
        <div className="relative h-[420px] w-[340px] md:h-[520px] md:w-[420px]">
          {/* Outer shield shape via borders */}
          <div
            className="absolute inset-0 rounded-b-[50%] border-2 border-[var(--color-accent)]"
            style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
          />
          {/* Inner shield shape */}
          <div
            className="absolute inset-8 rounded-b-[50%] border border-[var(--color-accent)]"
            style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
          />
          {/* Vertical line */}
          <div className="absolute left-1/2 top-[15%] h-[70%] w-px -translate-x-1/2 bg-[var(--color-accent)]" />
          {/* Horizontal line */}
          <div className="absolute left-[15%] top-[40%] h-px w-[70%] bg-[var(--color-accent)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-content px-container-x py-24 md:py-32 lg:py-40">
        <StaggerChildren className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <StaggerItem>
            <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)] md:text-[var(--font-size-hero)]">
              Your Name. Off the Record.
            </h1>
          </StaggerItem>

          {/* Subtext */}
          <StaggerItem>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-on-dark-muted)] md:text-xl">
              Year-round nominee services, offshore records, and 25&nbsp;years
              of privacy-focused formation in Wyoming and Nevada.
            </p>
          </StaggerItem>

          {/* CTAs */}
          <StaggerItem>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link href="/packages">Protect Your Privacy &rarr;</Link>
              </Button>
              <Link
                href="/packages"
                className="text-sm font-medium text-[var(--color-text-on-dark)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
              >
                View Packages
              </Link>
            </div>
          </StaggerItem>

          {/* Trust bar */}
          <StaggerItem>
            <p className="mt-12 flex items-center justify-center gap-3 text-xs tracking-wide text-[var(--color-text-on-dark-muted)] uppercase">
              <span>25 Years</span>
              <span className="inline-block h-1 w-1 rounded-full bg-[var(--color-accent)]" />
              <span>Thousands Formed</span>
              <span className="inline-block h-1 w-1 rounded-full bg-[var(--color-accent)]" />
              <span>$1,275 All-In</span>
            </p>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}

HomepageHero.displayName = "HomepageHero";
