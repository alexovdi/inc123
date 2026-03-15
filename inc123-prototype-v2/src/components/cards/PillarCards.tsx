import Link from "next/link";
import { Shield, Lock, Building2, FileCheck } from "lucide-react";
import { FadeUp } from "@/components/animation/FadeUp";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Shield,
    color: "var(--color-pillar-privacy)",
    label: "Business Privacy",
    desc: "Keep your name off public records with year-round nominee services",
    href: "/privacy",
  },
  {
    icon: Lock,
    color: "var(--color-pillar-asset)",
    label: "Asset Protection",
    desc: "Shield your assets with charging order protection and holding structures",
    href: "/asset-protection",
  },
  {
    icon: Building2,
    color: "var(--color-pillar-formation)",
    label: "Company Formation",
    desc: "All-inclusive formation in Wyoming, Nevada, California, and Florida",
    href: "/formation",
  },
  {
    icon: FileCheck,
    color: "var(--color-pillar-compliance)",
    label: "Compliance",
    desc: "Registered agent, annual reports, and ongoing compliance support",
    href: "/compliance",
  },
] as const;

export function PillarCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((pillar, i) => {
        const Icon = pillar.icon;
        return (
          <FadeUp key={pillar.href} delay={i * 0.1}>
            <Link
              href={pillar.href}
              className={cn(
                "group flex flex-col rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]",
              )}
            >
              {/* Top accent line */}
              <div
                className="h-[3px] rounded-t-lg"
                style={{ backgroundColor: pillar.color }}
              />

              <div className="flex flex-1 flex-col p-6">
                <Icon
                  className="mb-4 h-6 w-6"
                  style={{ color: pillar.color }}
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  {pillar.label}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {pillar.desc}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--color-accent)] transition-colors group-hover:text-[var(--color-accent-hover)]">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
          </FadeUp>
        );
      })}
    </div>
  );
}

PillarCards.displayName = "PillarCards";
