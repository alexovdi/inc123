import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import {
  pillarBorderTopMap,
  pillarTextMap,
} from "@/design-system/utils/pillarMaps";
import type { PillarName } from "@/design-system/tokens";

const pillarHoverBorderMap: Record<PillarName, string> = {
  privacy: "hover:border-pillar-privacy",
  asset: "hover:border-pillar-asset",
  formation: "hover:border-pillar-formation",
  compliance: "hover:border-pillar-compliance",
};

const pillarLinkCardVariants = cva(
  "group rounded-card border border-border bg-surface transition-shadow hover:shadow-card-hover !no-underline",
  {
    variants: {
      variant: {
        featured: "flex h-full flex-col border-t-4 p-5",
        compact: "flex items-center justify-between p-4",
      },
    },
    defaultVariants: {
      variant: "featured",
    },
  },
);

export interface PillarLinkCardProps extends VariantProps<
  typeof pillarLinkCardVariants
> {
  pillar: PillarName;
  href: string;
  title: string;
  description?: string;
  className?: string;
}

function PillarLinkCard({
  pillar,
  href,
  title,
  description,
  variant = "featured",
  className,
}: PillarLinkCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link
      to={href}
      className={cn(
        pillarLinkCardVariants({ variant }),
        isFeatured ? pillarBorderTopMap[pillar] : pillarHoverBorderMap[pillar],
        className,
      )}
    >
      {isFeatured ? (
        <>
          <span className="font-display font-semibold text-foreground no-underline">
            {title}
          </span>
          {description && (
            <span className="mt-2 text-body-sm text-muted no-underline">
              {description}
            </span>
          )}
        </>
      ) : (
        <>
          <span className="font-medium text-foreground no-underline">
            {title}
          </span>
          <span
            className={cn("no-underline", pillarTextMap[pillar])}
            aria-hidden="true"
          >
            &rarr;
          </span>
        </>
      )}
    </Link>
  );
}

PillarLinkCard.displayName = "PillarLinkCard";

export { PillarLinkCard, pillarLinkCardVariants };
