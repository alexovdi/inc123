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

export function ClusterLayout({
  children,
  sidebar,
  customHero,
  className,
}: ClusterLayoutProps) {
  return (
    <div className={cn("min-h-screen", className)}>
      {/* Hero — always provided via customHero now (dark hero) */}
      {customHero}

      {/* Content Area */}
      <div className="mx-auto max-w-content px-container-x pb-section-y">
        <div
          className={cn("flex gap-12", sidebar ? "flex-col lg:flex-row" : "")}
        >
          <main
            className={cn(
              "flex-1 min-w-0 order-1 lg:order-1",
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
