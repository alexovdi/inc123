"use client";

import { FadeUp } from "@/components/animation/FadeUp";

const steps = [
  {
    number: "01",
    title: "Choose Your Package",
    desc: "Select your state, entity type, and privacy level. All prices are all-inclusive.",
  },
  {
    number: "02",
    title: "We File Everything",
    desc: "We prepare and submit all formation documents, state filings, and business licenses.",
  },
  {
    number: "03",
    title: "Receive Your Documents",
    desc: "Get filed articles, EIN, operating agreement, and complete corporate record book.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    desc: "Annual renewals, compliance monitoring, and nominee maintenance handled for you.",
  },
] as const;

export function HowItWorks() {
  return (
    <div>
      <FadeUp>
        <h2 className="font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight text-center mb-16">
          How It Works
        </h2>
      </FadeUp>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Connecting line — desktop only */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-[var(--color-accent)] opacity-30 lg:block"
        />

        {steps.map((step, i) => (
          <FadeUp key={step.number} delay={i * 0.1}>
            <div className="relative text-center">
              <span className="relative z-10 inline-block font-[var(--font-display)] text-4xl font-bold text-[var(--color-accent)]">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {step.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

HowItWorks.displayName = "HowItWorks";
