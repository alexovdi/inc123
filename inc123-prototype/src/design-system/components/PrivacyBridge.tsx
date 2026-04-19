import { Eye, AlertCircle, Lock } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/design-system/utils/cn";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { Eyebrow } from "@/design-system/primitives/Eyebrow";
import type { PrivacyBridgeColumn } from "@/lib/types";

const iconMap: Record<string, ReactNode> = {
  Eye: <Eye className="h-6 w-6 text-secondary" strokeWidth={1.8} />,
  AlertCircle: (
    <AlertCircle className="h-6 w-6 text-secondary" strokeWidth={1.8} />
  ),
  Lock: <Lock className="h-6 w-6 text-secondary" strokeWidth={1.8} />,
};

interface PrivacyBridgeProps {
  columns: PrivacyBridgeColumn[];
  className?: string;
}

export function PrivacyBridge({ columns, className }: PrivacyBridgeProps) {
  return (
    <section className={cn("py-section-y", className)}>
      <div className="mx-auto max-w-content px-container-x">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Eyebrow tone="secondary" className="mb-2">
              Why It Matters
            </Eyebrow>
            <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[32ch] mx-auto">
              Your name is on public records.
              <br />
              It doesn&rsquo;t have to be.
            </h2>
            <p className="mt-4 text-body-lg text-muted max-w-[52ch] mx-auto leading-relaxed">
              When you form a business, your name, address, and ownership become
              part of the public record. Anyone can look it up — competitors,
              litigants, data brokers. There&rsquo;s a better way.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3 max-w-[960px] mx-auto">
          {columns.map((col, index) => (
            <ScrollReveal key={col.title} delay={index * 120}>
              <div className="text-center px-2">
                {/* Icon */}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/[0.05]">
                  {iconMap[col.iconName]}
                </div>

                {/* Title */}
                <h3 className="font-display text-body-lg font-bold text-foreground mb-2.5 tracking-[-0.3px]">
                  {col.title}
                </h3>

                {/* Description */}
                <p className="text-body text-muted leading-relaxed">
                  {col.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <a
              href="#wizard"
              className="inline-flex items-center gap-2 text-body font-semibold text-secondary transition-colors hover:text-secondary/80"
            >
              Find your privacy package
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

PrivacyBridge.displayName = "PrivacyBridge";
