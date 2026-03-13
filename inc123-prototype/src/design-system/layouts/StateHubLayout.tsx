import { cn } from "@/design-system/utils/cn";

export interface StateHubLayoutProps {
  state: { name: string; abbreviation: string };
  children: React.ReactNode;
  customHero?: React.ReactNode;
  className?: string;
}

export function StateHubLayout({
  state,
  children,
  customHero,
  className,
}: StateHubLayoutProps) {
  return (
    <div className={cn("min-h-screen", className)}>
      {/* State Hero */}
      {customHero ? (
        customHero
      ) : (
        <div className="bg-primary text-white">
          <div className="mx-auto max-w-content px-container-x py-section-y-sm">
            <p className="text-body-sm font-semibold uppercase tracking-wider text-white/60 mb-2">
              State Hub
            </p>
            <h1 className="font-display text-display-xl font-extrabold mb-3">
              {state.name}
            </h1>
            <p className="text-body-lg text-white/80 max-w-narrow">
              Everything you need to know about forming and maintaining a business entity in {state.name}.
            </p>
          </div>
        </div>
      )}

      {/* Content Sections */}
      <main className="mx-auto max-w-content px-container-x py-section-y">
        {children}
      </main>
    </div>
  );
}
