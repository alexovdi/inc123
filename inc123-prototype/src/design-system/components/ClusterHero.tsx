import { Link as RouterLink } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { cn } from "@/design-system/utils/cn";
import {
  pillarBorderTopMap,
  pillarTextMap,
} from "@/design-system/utils/pillarMaps";
import { Badge } from "@/design-system/primitives/Badge";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface ClusterHeroProps {
  /** Which pillar this cluster belongs to */
  pillar: PillarName;
  /** Display name of the pillar (e.g., "Business Privacy") */
  pillarLabel: string;
  /** Link back to the parent pillar page */
  pillarHref: string;
  /** H1 page title */
  title: string;
  /** Descriptive paragraph below the title */
  description: string;
  /** Estimated reading time (e.g., "8 min read") */
  readingTime: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component (Server Component — no "use client")
   ------------------------------------------------ */
function ClusterHero({
  pillar,
  pillarLabel,
  pillarHref,
  title,
  description,
  readingTime,
  className,
}: ClusterHeroProps) {
  return (
    <section
      className={cn("border-t-4", pillarBorderTopMap[pillar], className)}
    >
      <div className="mx-auto max-w-content px-container-x pt-6 pb-section-y-sm">
        {/* Back link */}
        <RouterLink
          to={pillarHref}
          className={cn(
            "mb-4 inline-flex items-center gap-1.5 text-body-sm font-medium transition-colors hover:underline",
            pillarTextMap[pillar],
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {pillarLabel}
        </RouterLink>

        {/* Eyebrow */}
        <p
          className={cn(
            "text-body-sm font-semibold uppercase tracking-wider mb-3",
            pillarTextMap[pillar],
          )}
        >
          {pillarLabel} &middot; Guide
        </p>

        {/* H1 Title */}
        <h1 className="font-display text-display font-bold text-foreground mb-3">
          {title}
        </h1>

        {/* Description */}
        <p className="text-body-lg text-muted max-w-narrow mb-4">
          {description}
        </p>

        {/* Reading time badge */}
        <div className="flex items-center gap-2">
          <Badge variant="default" size="sm">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readingTime}
            </span>
          </Badge>
        </div>
      </div>
    </section>
  );
}

ClusterHero.displayName = "ClusterHero";

export { ClusterHero };
