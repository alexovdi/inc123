"use client";

import { useState, useEffect } from "react";
import { cn } from "@/design-system/utils/cn";
import { Button, Icon, type ButtonProps } from "@/design-system/primitives";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface StickyMobileCTAProps {
  /** Primary CTA button props */
  primaryCTA: ButtonProps & { href?: string };
  /** Optional secondary action — defaults to phone tap-to-call */
  secondaryCTA?: ButtonProps & { href?: string };
  /** Scroll threshold in px before showing (default: 400) */
  showAfterScroll?: number;
  /** Phone number for default secondary action */
  phone?: string;
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function StickyMobileCTA({
  primaryCTA,
  secondaryCTA,
  showAfterScroll = 400,
  phone = "1-800-555-0123",
  className,
}: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  /* -- Scroll detection ---------------------------- */
  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY >= showAfterScroll);
    }

    // Check initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll]);

  /* -- Default secondary: phone tap-to-call -------- */
  const resolvedSecondary = secondaryCTA ?? {
    variant: "secondary" as const,
    children: null,
    href: `tel:${phone.replace(/[^+\d]/g, "")}`,
  };

  const isDefaultPhone = !secondaryCTA;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden",
        "bg-surface shadow-dropdown border-t border-border",
        "transition-transform duration-300 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full",
        className
      )}
      role="complementary"
      aria-label="Quick actions"
    >
      <div className="flex items-center gap-3 px-4 py-3 safe-area-pb">
        {/* Primary CTA */}
        <div className="flex-1">
          {primaryCTA.href ? (
            <Button
              {...primaryCTA}
              fullWidth
              asChild
            >
              <a href={primaryCTA.href}>{primaryCTA.children}</a>
            </Button>
          ) : (
            <Button {...primaryCTA} fullWidth />
          )}
        </div>

        {/* Secondary action */}
        {resolvedSecondary.href ? (
          <a
            href={resolvedSecondary.href}
            className={cn(
              "inline-flex items-center justify-center w-11 h-11 shrink-0",
              "rounded-button border border-border text-secondary",
              "hover:bg-muted/10 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            )}
            aria-label={isDefaultPhone ? `Call ${phone}` : undefined}
          >
            {isDefaultPhone ? (
              <Icon name="Phone" size="md" />
            ) : (
              resolvedSecondary.children
            )}
          </a>
        ) : (
          <Button
            {...resolvedSecondary}
            className={cn("shrink-0", resolvedSecondary.className)}
          />
        )}
      </div>
    </div>
  );
}

StickyMobileCTA.displayName = "StickyMobileCTA";

export { StickyMobileCTA };
