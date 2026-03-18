import { cn } from "@/design-system/utils/cn";
import {
  pillarBorderTopMap,
  pillarTextMap,
  pillarSoftBgMap,
  pillarIconMap,
} from "@/design-system/utils/pillarMaps";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface IntentRoutingCardProps {
  /** Pillar this card represents */
  pillar: PillarName;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** 3 key links */
  links: Array<{ label: string; href: string }>;
  /** Primary CTA */
  cta: { label: string; href: string };
  /** Optional package quick link below CTA */
  packageLink?: { label: string; href: string };
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function IntentRoutingCard({
  pillar,
  title,
  description,
  links,
  cta,
  packageLink,
  className,
}: IntentRoutingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col bg-surface rounded-card border border-border border-t-2 p-6",
        "shadow-card hover:shadow-card-hover hover:-translate-y-0.5",
        "transition-all duration-200",
        pillarBorderTopMap[pillar],
        className,
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "inline-flex items-center justify-center w-10 h-10 rounded-card",
          pillarSoftBgMap[pillar],
        )}
      >
        <Icon
          name={pillarIconMap[pillar]}
          size="md"
          className={pillarTextMap[pillar]}
        />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "text-heading-sm font-display font-semibold mt-4",
          pillarTextMap[pillar],
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-body-sm text-muted mt-2 flex-1">{description}</p>

      {/* Key links */}
      <ul className="mt-4 space-y-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn(
                "flex items-center gap-2 text-body-sm font-medium transition-colors",
                pillarTextMap[pillar],
                "hover:underline",
              )}
            >
              <Icon name="ArrowRight" size="xs" className="shrink-0" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <div className="mt-5">
        <Button variant="primary" pillar={pillar} size="sm" fullWidth asChild>
          <a href={cta.href}>{cta.label}</a>
        </Button>
      </div>

      {/* Package quick link */}
      {packageLink && (
        <a
          href={packageLink.href}
          className="mt-3 text-center text-caption font-medium text-muted hover:text-foreground transition-colors"
        >
          {packageLink.label} &rarr;
        </a>
      )}
    </div>
  );
}

IntentRoutingCard.displayName = "IntentRoutingCard";

export { IntentRoutingCard };
