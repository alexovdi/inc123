import { Award, Phone, Check, Globe, DollarSign } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/design-system/utils/cn";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import type { TrustBarItem } from "@/data/homepage";

/* ------------------------------------------------
   Icon resolver
   ------------------------------------------------ */
const iconMap: Record<string, (className: string) => ReactNode> = {
  Award: (c) => <Award className={c} />,
  Phone: (c) => <Phone className={c} />,
  Check: (c) => <Check className={c} strokeWidth={2.5} />,
  Globe: (c) => <Globe className={c} />,
  DollarSign: (c) => <DollarSign className={c} />,
};

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
interface TrustBarProps {
  items: TrustBarItem[];
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function TrustBar({ items, className }: TrustBarProps) {
  return (
    <section
      className={cn(
        "border-y border-border py-10 lg:py-12 bg-surface",
        className,
      )}
    >
      <div className="mx-auto max-w-content px-container-x">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-0 lg:divide-x lg:divide-border">
            {items.map((item, i) => {
              const renderIcon = iconMap[item.iconName];
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center px-6 lg:px-8 lg:flex-1"
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl mb-2.5",
                      item.bgClass,
                    )}
                  >
                    {renderIcon?.(cn("h-5 w-5", item.colorClass))}
                  </div>
                  <p className="font-display text-body font-bold text-foreground">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-secondary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                  <p className="text-caption text-muted mt-0.5">{item.label}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

TrustBar.displayName = "TrustBar";

export { TrustBar };
