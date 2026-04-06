import { cn } from "@/design-system/utils/cn";
import {
  pillarBorderTopMap,
  pillarTextMap,
  pillarSoftBgMap,
} from "@/design-system/utils/pillarMaps";
import { Icon } from "@/design-system/primitives/Icon";
import { Link } from "@/design-system/primitives/Link";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface PillarCardProps {
  /** Which pillar this card represents */
  pillar: PillarName;
  /** Lucide icon name (e.g. "Shield", "Lock") */
  icon: string;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** 3-4 key services */
  services: string[];
  /** Link destination */
  href: string;
  /** Override the default "Learn More" CTA text */
  ctaLabel?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PillarCard({
  pillar,
  icon,
  title,
  description,
  services,
  href,
  ctaLabel,
  className,
}: PillarCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group block bg-surface rounded-card border border-border border-t-4 p-6",
        "shadow-card hover:shadow-card-hover hover:-translate-y-1.5",
        "transition-all duration-300 ease-out",
        pillarBorderTopMap[pillar],
        className,
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-card transition-transform duration-300 group-hover:scale-105",
          pillarSoftBgMap[pillar],
        )}
      >
        <Icon name={icon} size="lg" className={pillarTextMap[pillar]} />
      </div>

      {/* Title */}
      <h3 className="text-heading-sm font-display font-semibold text-foreground mt-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-body text-muted mt-2">{description}</p>

      {/* Services list */}
      {services.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-2 text-body-sm text-foreground"
            >
              <Icon
                name="Check"
                size="xs"
                className={cn("mt-0.5 shrink-0", pillarTextMap[pillar])}
              />
              {service}
            </li>
          ))}
        </ul>
      )}

      {/* Learn More link */}
      <span
        className={cn(
          "inline-flex items-center gap-1.5 mt-5 text-body-sm font-medium transition-all duration-200",
          pillarTextMap[pillar],
          "group-hover:gap-2",
        )}
      >
        {ctaLabel ?? "Learn More"}
        <Icon
          name="ArrowRight"
          size="sm"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </span>
    </a>
  );
}

PillarCard.displayName = "PillarCard";

export { PillarCard };
