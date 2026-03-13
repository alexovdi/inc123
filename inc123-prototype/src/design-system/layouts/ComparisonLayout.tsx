import { cn } from "@/design-system/utils/cn";
import type { PillarName } from "@/design-system/tokens";

export interface ComparisonLayoutProps {
  title: string;
  description: string;
  pillar?: PillarName;
  children: React.ReactNode;
  dualCTA?: React.ReactNode;
  customHero?: React.ReactNode;
  className?: string;
}

const pillarTextMap: Record<PillarName, string> = {
  privacy: "text-pillar-privacy",
  asset: "text-pillar-asset",
  formation: "text-pillar-formation",
  compliance: "text-pillar-compliance",
};

export function ComparisonLayout({
  title,
  description,
  pillar,
  children,
  dualCTA,
  customHero,
  className,
}: ComparisonLayoutProps) {
  return (
    <div className={cn("min-h-screen", className)}>
      {/* Header */}
      {customHero ? (
        customHero
      ) : (
        <div className="bg-primary-50">
          <div className="mx-auto max-w-wide px-container-x py-section-y-sm">
            {pillar && (
              <p className={cn("text-body-sm font-semibold uppercase tracking-wider mb-2", pillarTextMap[pillar])}>
                Comparison
              </p>
            )}
            <h1 className="font-display text-display-lg font-bold text-foreground mb-3">
              {title}
            </h1>
            <p className="text-body-lg text-muted max-w-narrow">
              {description}
            </p>
          </div>
        </div>
      )}

      {/* Full-width content for comparison tables */}
      <main className="mx-auto max-w-wide px-container-x py-section-y-sm">
        {children}
      </main>

      {/* Dual CTA slot */}
      {dualCTA && (
        <div className="mx-auto max-w-content px-container-x pb-section-y">
          {dualCTA}
        </div>
      )}
    </div>
  );
}
