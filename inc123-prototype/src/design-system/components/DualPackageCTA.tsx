import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface DualPackageItem {
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  highlighted?: boolean;
  href: string;
}

export interface ConsultationCTA {
  label: string;
  href: string;
  phone?: string;
}

export interface DualPackageCTAProps {
  /** Exactly 2 package cards */
  packages: [DualPackageItem, DualPackageItem];
  /** Consultation safety-net CTA below the cards */
  consultationCTA: ConsultationCTA;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function DualPackageCTA({
  packages,
  consultationCTA,
  className,
}: DualPackageCTAProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Package cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={cn(
              "bg-surface rounded-card border p-6 shadow-card",
              "transition-shadow duration-200 hover:shadow-card-hover",
              pkg.highlighted ? "border-secondary border-2" : "border-border",
            )}
          >
            {/* Header with optional badge */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-heading-sm font-display font-semibold text-foreground">
                {pkg.name}
              </h3>
              {pkg.badge && (
                <Badge variant="success" size="sm">
                  {pkg.badge}
                </Badge>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mt-3">
              <span className="text-heading-lg font-mono font-bold text-foreground">
                {pkg.price}
              </span>
              <span className="text-body-sm text-muted">/{pkg.period}</span>
            </div>

            {/* Description */}
            <p className="text-body text-muted mt-3">{pkg.description}</p>

            {/* CTA button */}
            <Button
              variant={pkg.highlighted ? "cta" : "primary"}
              size="md"
              fullWidth
              className="mt-5"
              asChild
            >
              <a href={pkg.href}>Choose {pkg.name}</a>
            </Button>
          </div>
        ))}
      </div>

      {/* Consultation safety net */}
      <div className="text-center space-y-1">
        <a
          href={consultationCTA.href}
          className="inline-flex items-center gap-1.5 text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
        >
          <Icon name="Calendar" size="sm" />
          {consultationCTA.label}
        </a>
        {consultationCTA.phone && (
          <p className="text-caption text-muted">
            or call{" "}
            <a
              href={`tel:${consultationCTA.phone.replace(/[^+\d]/g, "")}`}
              className="font-medium text-foreground hover:text-secondary transition-colors"
            >
              {consultationCTA.phone}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

DualPackageCTA.displayName = "DualPackageCTA";

export { DualPackageCTA };
