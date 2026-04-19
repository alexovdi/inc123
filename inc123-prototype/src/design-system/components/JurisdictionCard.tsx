import { Link } from "react-router-dom";
import { Icon } from "@/design-system/primitives/Icon";
import { cn } from "@/design-system/utils/cn";
import type { OffshoreJurisdiction } from "@/lib/types";

/** Per-slug icon mapping for the offshore hub grid */
const JURISDICTION_ICON: Record<string, string> = {
  nevis: "Shield",
  "british-virgin-islands": "TrendingUp",
  panama: "Globe",
  "hong-kong": "Building2",
  belize: "Lock",
  "cook-islands": "Trophy",
};

export type JurisdictionCardData = Pick<
  OffshoreJurisdiction,
  | "slug"
  | "name"
  | "region"
  | "entityType"
  | "tagline"
  | "description"
  | "startingPrice"
  | "annualRenewal"
  | "timeline"
>;

interface JurisdictionCardProps {
  jurisdiction: JurisdictionCardData;
  className?: string;
}

function JurisdictionCard({ jurisdiction, className }: JurisdictionCardProps) {
  const {
    slug,
    name,
    region,
    entityType,
    tagline,
    description,
    startingPrice,
    annualRenewal,
    timeline,
  } = jurisdiction;

  const isPending = startingPrice === "PENDING DAVID";

  return (
    <Link
      to={`/offshore/${slug}`}
      className={cn(
        "group flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon
            name={JURISDICTION_ICON[slug] ?? "Globe"}
            size="lg"
            className="text-primary"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-heading-sm font-bold text-foreground group-hover:text-secondary">
            {name}
          </h3>
          {region && region !== name && (
            <p className="text-caption text-muted">{region}</p>
          )}
          {entityType && (
            <p className="mt-1 text-body-sm text-muted">{entityType}</p>
          )}
        </div>
      </div>

      {tagline && (
        <p className="mt-4 text-body font-medium leading-snug text-foreground">
          {tagline}
        </p>
      )}

      <p className="mt-3 flex-1 text-body-sm leading-relaxed text-muted">
        {description.slice(0, 220)}
        {description.length > 220 && "…"}
      </p>

      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-body-sm">
        <div>
          <dt className="text-caption text-muted">Starting from</dt>
          <dd
            className={cn(
              "font-mono font-semibold",
              isPending ? "text-accent" : "text-foreground",
            )}
          >
            {startingPrice ?? "Contact us"}
          </dd>
        </div>
        <div>
          <dt className="text-caption text-muted">Annual renewal</dt>
          <dd
            className={cn(
              "font-mono font-semibold",
              annualRenewal === "PENDING DAVID"
                ? "text-accent"
                : "text-foreground",
            )}
          >
            {annualRenewal ?? "Contact us"}
          </dd>
        </div>
        {timeline && (
          <div className="col-span-2">
            <dt className="text-caption text-muted">Formation timeline</dt>
            <dd className="font-medium text-foreground">{timeline}</dd>
          </div>
        )}
      </dl>

      <div className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-secondary">
        Learn More
        <Icon
          name="ArrowRight"
          size="sm"
          className="transition-transform group-hover:translate-x-0.5"
        />
      </div>
    </Link>
  );
}

JurisdictionCard.displayName = "JurisdictionCard";

export { JurisdictionCard };
