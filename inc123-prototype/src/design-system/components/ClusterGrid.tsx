import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import {
  pillarBorderTopMap,
  pillarTextMap,
} from "@/design-system/utils/pillarMaps";
import { Icon } from "@/design-system/primitives";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const clusterGridVariants = cva("grid gap-6", {
  variants: {
    columns: {
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    },
  },
  defaultVariants: {
    columns: 3,
  },
});

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface ClusterItem {
  title: string;
  description: string;
  href: string;
  pillar: PillarName;
}

export interface ClusterGridProps extends VariantProps<
  typeof clusterGridVariants
> {
  /** Cluster page link cards */
  clusters: ClusterItem[];
  /** Number of columns at desktop */
  columns?: 3 | 4;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function ClusterGrid({ clusters, columns = 3, className }: ClusterGridProps) {
  return (
    <div className={cn(clusterGridVariants({ columns }), className)}>
      {clusters.map((cluster, index) => (
        <a
          key={index}
          href={cluster.href}
          className={cn(
            "group block bg-surface rounded-card border border-border border-t-2 p-6",
            "shadow-card hover:shadow-card-hover hover:-translate-y-1",
            "transition-all duration-200",
            pillarBorderTopMap[cluster.pillar],
          )}
        >
          <h3 className="text-heading-sm font-display font-semibold text-foreground">
            {cluster.title}
          </h3>
          <p className="text-body-sm text-muted mt-2 line-clamp-2">
            {cluster.description}
          </p>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 mt-4 text-body-sm font-medium transition-colors",
              pillarTextMap[cluster.pillar],
              "group-hover:gap-2",
            )}
          >
            Learn More
            <Icon
              name="ArrowRight"
              size="sm"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </a>
      ))}
    </div>
  );
}

ClusterGrid.displayName = "ClusterGrid";

export { ClusterGrid, clusterGridVariants };
