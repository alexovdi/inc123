import { cn } from "@/design-system/utils/cn";
import {
  pillarAccentMap,
  pillarTextMap,
} from "@/design-system/utils/pillarMaps";
import type { PillarName } from "@/design-system/tokens";

export interface PillarLayoutProps {
  pillar: PillarName;
  title: string;
  description: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  customHero?: React.ReactNode;
  className?: string;
}

export function PillarLayout({
  pillar,
  title,
  description,
  children,
  sidebar,
  customHero,
  className,
}: PillarLayoutProps) {
  return (
    <div className={cn("min-h-screen", className)}>
      {/* Pillar Hero Header */}
      {customHero ? (
        <div className={cn("border-t-4", pillarAccentMap[pillar])}>
          {customHero}
        </div>
      ) : (
        <div className={cn("border-t-4", pillarAccentMap[pillar])}>
          <div className="mx-auto max-w-content px-container-x py-section-y-sm">
            <p
              className={cn(
                "text-body-sm font-semibold uppercase tracking-wider mb-2",
                pillarTextMap[pillar],
              )}
            >
              {pillar === "asset"
                ? "Asset Protection"
                : pillar.charAt(0).toUpperCase() + pillar.slice(1)}
            </p>
            <h1 className="font-display text-display-lg font-bold text-foreground mb-3">
              {title}
            </h1>
            <p className="text-body-lg text-muted max-w-narrow">
              {description}
            </p>
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="mx-auto max-w-content px-container-x py-section-y-sm">
        <div
          className={cn("flex gap-12", sidebar ? "flex-col lg:flex-row" : "")}
        >
          <main
            className={cn(
              "flex-1 min-w-0 order-2 lg:order-1",
              sidebar && "lg:max-w-[70%]",
            )}
          >
            {children}
          </main>
          {sidebar && (
            <div className="w-full lg:w-[30%] shrink-0 order-2 lg:order-2">
              {sidebar}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
