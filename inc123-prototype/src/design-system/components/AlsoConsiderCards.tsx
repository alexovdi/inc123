import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface AlsoConsiderPackage {
  name: string;
  state: string;
  price: string;
  href: string;
}

export interface AlsoConsiderCardsProps {
  /** Packages to recommend */
  packages: AlsoConsiderPackage[];
  /** Section heading */
  heading?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function AlsoConsiderCards({
  packages,
  heading = "Also Consider",
  className,
}: AlsoConsiderCardsProps) {
  return (
    <div className={cn("w-full", className)}>
      <h4 className="font-display text-heading-sm font-semibold text-foreground mb-4">
        {heading}
      </h4>

      <div className="flex flex-col md:flex-row gap-4">
        {packages.map((pkg, index) => (
          <a
            key={index}
            href={pkg.href}
            className={cn(
              "group flex-1 flex flex-col bg-surface rounded-card border border-border p-5",
              "transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
            )}
          >
            {/* Package name */}
            <span className="font-display text-body-lg font-semibold text-foreground">
              {pkg.name}
            </span>

            {/* State badge */}
            <Badge variant="default" size="sm" className="self-start mt-2">
              {pkg.state}
            </Badge>

            {/* Price */}
            <span className="font-mono text-body-lg font-bold text-foreground mt-3">
              {pkg.price}
            </span>

            {/* Link */}
            <span className="inline-flex items-center gap-1 text-body-sm font-medium text-secondary mt-3 group-hover:gap-2 transition-all">
              View Package
              <Icon name="ArrowRight" size="sm" className="text-secondary" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

AlsoConsiderCards.displayName = "AlsoConsiderCards";

export { AlsoConsiderCards };
