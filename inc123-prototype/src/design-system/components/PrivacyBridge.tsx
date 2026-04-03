"use client";

import { Eye, Scale, ShieldCheck } from "lucide-react";
import { cn } from "@/design-system/utils/cn";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";

const columns = [
  {
    icon: Eye,
    number: "01",
    title: "Your Name Is Public",
    description:
      "When you form an LLC or corporation, your name, address, and role appear on state records. Anyone — lawsuits, competitors, data brokers — can look it up in seconds.",
    accent: "text-destructive",
    accentBg: "bg-destructive/10",
  },
  {
    icon: Scale,
    number: "02",
    title: "That Makes You a Target",
    description:
      "Visible ownership invites frivolous lawsuits, asset searches, and unwanted solicitation. Business owners with public records are 3x more likely to face nuisance litigation.",
    accent: "text-warning",
    accentBg: "bg-warning/10",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "We Fix That",
    description:
      "Year-round nominees replace your name on every public filing. Offshore records keep your documents outside U.S. jurisdiction. Your ownership stays private — permanently.",
    accent: "text-success",
    accentBg: "bg-success/10",
  },
];

export function PrivacyBridge({ className }: { className?: string }) {
  return (
    <section className={cn("py-section-y", className)}>
      <div className="mx-auto max-w-content px-container-x">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-body-sm font-semibold text-secondary uppercase tracking-[0.15em] mb-2">
              Why This Matters
            </p>
            <h2 className="font-display text-display-sm font-semibold text-foreground max-w-[32ch] mx-auto">
              Your Name Is on Public Records. It Doesn&rsquo;t Have to Be.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {columns.map((col, index) => (
            <ScrollReveal key={col.number} delay={index * 120}>
              <div className="relative flex flex-col items-start gap-4 rounded-card bg-surface border border-border p-6 h-full">
                {/* Number + Icon */}
                <div className="flex items-center gap-3 w-full">
                  <span className="font-mono text-caption font-bold text-muted/40">
                    {col.number}
                  </span>
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      col.accentBg,
                    )}
                  >
                    <col.icon
                      className={cn("h-5 w-5", col.accent)}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-heading-sm font-semibold text-foreground">
                  {col.title}
                </h3>
                <p className="text-body-sm text-muted leading-relaxed">
                  {col.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

PrivacyBridge.displayName = "PrivacyBridge";
