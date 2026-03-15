"use client";

import { Clock, Globe, DollarSign, Shield, Phone, Scale } from "lucide-react";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";

const items = [
  {
    icon: Clock,
    title: "365-Day Nominees",
    desc: "Not 'nominee for a day' \u2014 our nominees serve year-round, every year, on every filing.",
  },
  {
    icon: Globe,
    title: "Offshore Records",
    desc: "Corporate records stored outside U.S. jurisdiction since 2012. Free in all Gold packages.",
  },
  {
    icon: DollarSign,
    title: "No Hidden Fees",
    desc: "Every state fee included. No surprise second-tier filings or compliance costs.",
  },
  {
    icon: Shield,
    title: "25 Years of Privacy",
    desc: "Operating since 2000 with a single focus: keeping your information private.",
  },
  {
    icon: Phone,
    title: "Real People, Real Office",
    desc: "Reno, Nevada office with staff who answer the phone. Not a chatbot, not a call center.",
  },
  {
    icon: Scale,
    title: "Full Compliance",
    desc: "We disclose every requirement and handle every filing. Your entity stays in good standing.",
  },
] as const;

export function Differentiators() {
  return (
    <div>
      <h2 className="font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight text-center mb-12">
        What Sets Us Apart
      </h2>

      <StaggerChildren className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <StaggerItem key={item.title}>
              <div className="flex flex-col gap-3">
                <Icon
                  className="h-7 w-7 text-[var(--color-accent)]"
                  strokeWidth={1.5}
                />
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-[var(--color-text-on-dark-muted)]">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </div>
  );
}

Differentiators.displayName = "Differentiators";
