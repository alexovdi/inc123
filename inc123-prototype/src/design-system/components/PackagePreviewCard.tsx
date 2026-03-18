import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import type { EntityType } from "@/lib/types";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface PackagePreviewTier {
  name: string;
  price: number;
  period: string;
  description: string;
  badge?: string;
  highlighted?: boolean;
  /** Renewal price label (e.g. "$525/yr with nominees") */
  renewal?: string;
}

export interface PackagePreviewCta {
  label: string;
  href: string;
}

export interface PackagePreviewCardProps {
  /** Package tier info */
  tier: PackagePreviewTier;
  /** Entity type display label */
  entityType: string;
  /** Call-to-action config */
  cta: PackagePreviewCta;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PackagePreviewCard({
  tier,
  entityType,
  cta,
  className,
}: PackagePreviewCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col bg-surface rounded-card border p-6 transition-all duration-300 ease-out hover:shadow-card-hover hover:-translate-y-1 hover:border-secondary/50",
        tier.highlighted
          ? "border-secondary shadow-card-hover ring-1 ring-secondary/30 scale-[1.02]"
          : "border-border",
        className,
      )}
    >
      {/* Badge */}
      {tier.badge && tier.highlighted && (
        <Badge variant="info" size="sm" className="self-start mb-2">
          {tier.badge}
        </Badge>
      )}

      {/* Tier name */}
      <h4 className="font-display text-body-lg font-semibold text-foreground">
        {tier.name}
      </h4>

      {/* Price */}
      <div className="mt-2">
        <span className="font-mono text-heading-lg font-bold text-foreground">
          ${tier.price.toLocaleString()}
        </span>
        <span className="text-body-sm text-muted ml-1">/{tier.period}</span>
      </div>

      {/* Renewal */}
      {tier.renewal && (
        <p className="text-caption text-muted mt-1 font-mono">{tier.renewal}</p>
      )}

      {/* Description */}
      <p className="text-body-sm text-muted mt-2 flex-1">{tier.description}</p>

      {/* CTA */}
      <div className="mt-4">
        <Button
          variant={tier.highlighted ? "cta" : "secondary"}
          size="sm"
          fullWidth
          asChild
        >
          <a href={cta.href}>{cta.label}</a>
        </Button>
      </div>
    </div>
  );
}

PackagePreviewCard.displayName = "PackagePreviewCard";

export { PackagePreviewCard };
