import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
interface TrustBadge {
  icon: string;
  label: string;
  detail: string;
}

interface SocialProofStripProps {
  /** Pillar color class for icon accents (e.g. "text-pillar-privacy") */
  pillarColor?: string;
  /** Override default badges */
  badges?: TrustBadge[];
  /** Optional testimonial quote */
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  className?: string;
}

/* ------------------------------------------------
   Default Data
   ------------------------------------------------ */
const DEFAULT_BADGES: TrustBadge[] = [
  {
    icon: "Shield",
    label: "25 Years Trusted",
    detail: "Privacy & asset protection since 2000",
  },
  {
    icon: "Users",
    label: "Dedicated Account Team",
    detail: "Your own specialist — not a call center",
  },
  {
    icon: "Bitcoin",
    label: "Crypto Accepted",
    detail: "BTC, ETH, XRP, LTC, XMR",
  },
  {
    icon: "Phone",
    label: "Talk to Real Humans",
    detail: "Call anytime — real answers, no scripts",
  },
  {
    icon: "RefreshCcw",
    label: "30-Day Money Back",
    detail: "Full refund if you're not satisfied",
  },
];

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function SocialProofStrip({
  pillarColor = "text-secondary",
  badges = DEFAULT_BADGES,
  testimonial,
  className,
}: SocialProofStripProps) {
  return (
    <section
      className={cn("py-12 bg-surface border-y border-border", className)}
    >
      <div className="mx-auto max-w-content px-container-x">
        {/* Testimonial row */}
        {testimonial && (
          <ScrollReveal>
            <div className="mb-10 text-center">
              <blockquote className="font-display text-heading font-medium text-foreground leading-relaxed max-w-[640px] mx-auto italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-body-sm text-muted">
                {testimonial.author}
                <span className="mx-1.5 text-border">&middot;</span>
                {testimonial.role}
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Trust badges grid */}
        <ScrollReveal delay={testimonial ? 100 : 0}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center gap-2"
              >
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full bg-current/[0.06]",
                    pillarColor,
                  )}
                >
                  <Icon
                    name={badge.icon as any}
                    size="sm"
                    className={pillarColor}
                  />
                </div>
                <p className="text-body-sm font-semibold text-foreground">
                  {badge.label}
                </p>
                <p className="text-caption text-muted leading-snug">
                  {badge.detail}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

SocialProofStrip.displayName = "SocialProofStrip";

export { SocialProofStrip };
export type { SocialProofStripProps, TrustBadge };
