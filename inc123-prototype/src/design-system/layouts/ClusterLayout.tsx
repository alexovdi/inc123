import NextLink from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/design-system/utils/cn";
import type { PillarName } from "@/design-system/tokens";

export interface ClusterLayoutProps {
  pillar: PillarName;
  pillarLabel: string;
  pillarHref: string;
  title: string;
  description: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  customHero?: React.ReactNode;
  className?: string;
}

const pillarBorderMap: Record<PillarName, string> = {
  privacy: "border-pillar-privacy",
  asset: "border-pillar-asset",
  formation: "border-pillar-formation",
  compliance: "border-pillar-compliance",
};

const pillarTextMap: Record<PillarName, string> = {
  privacy: "text-pillar-privacy",
  asset: "text-pillar-asset",
  formation: "text-pillar-formation",
  compliance: "text-pillar-compliance",
};

export function ClusterLayout({
  pillar,
  pillarLabel,
  pillarHref,
  title,
  description,
  children,
  sidebar,
  customHero,
  className,
}: ClusterLayoutProps) {
  return (
    <div className={cn("min-h-screen", className)}>
      {/* Top accent bar */}
      <div className={cn("border-t-2", pillarBorderMap[pillar])} />

      {customHero ? (
        customHero
      ) : (
        <div className="mx-auto max-w-content px-container-x pt-6 pb-section-y-sm">
          <NextLink
            href={pillarHref}
            className={cn(
              "mb-4 inline-flex items-center gap-1.5 text-body-sm font-medium transition-colors hover:underline",
              pillarTextMap[pillar]
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {pillarLabel}
          </NextLink>

          <h1 className="font-display text-display font-bold text-foreground mb-3">
            {title}
          </h1>
          <p className="text-body-lg text-muted max-w-narrow">
            {description}
          </p>
        </div>
      )}

      {/* Content Area */}
      <div className="mx-auto max-w-content px-container-x pb-section-y">
        <div className={cn(
          "flex gap-12",
          sidebar ? "flex-col lg:flex-row" : ""
        )}>
          <main className={cn("flex-1 min-w-0", sidebar && "lg:max-w-[70%]")}>
            {children}
          </main>
          {sidebar && (
            <aside className="w-full lg:w-[30%] shrink-0">
              {sidebar}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
