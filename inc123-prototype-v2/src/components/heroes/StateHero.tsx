"use client";

import { FadeUp } from "@/components/animation/FadeUp";

interface StateHeroProps {
  title: string;
  description: string;
  state: string;
}

export function StateHero({ title, description, state }: StateHeroProps) {
  return (
    <section className="bg-[var(--color-bg-accent)]">
      <div className="mx-auto max-w-content px-container-x py-24 md:py-32">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
              {state}
            </p>
            <h1 className="mt-4 font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)]">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-on-dark-muted)]">
              {description}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

StateHero.displayName = "StateHero";
