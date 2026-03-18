import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface MapPlaceholderProps {
  /** Full address text to display over the map */
  address: string;
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function MapPlaceholder({ address, className }: MapPlaceholderProps) {
  return (
    <section className={cn("py-section-y px-container-x", className)}>
      <div className="mx-auto max-w-content">
        <div className="w-full aspect-[16/7] md:aspect-[16/5] rounded-card bg-muted/20 border border-border flex flex-col items-center justify-center relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-3">
              <Icon name="MapPin" size="lg" className="text-secondary" />
            </div>
            <p className="text-body font-medium text-foreground/70">
              Map — Kingsbury Executive Suites
            </p>
            <p className="mt-1 text-body-sm text-muted">{address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

MapPlaceholder.displayName = "MapPlaceholder";

export { MapPlaceholder };
