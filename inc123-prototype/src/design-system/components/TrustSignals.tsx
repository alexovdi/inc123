"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import type { TrustSignalItem } from "@/lib/types";

/* -------------------------------------------------- */
/*  CountUp hook                                       */
/* -------------------------------------------------- */
function useCountUp(target: number, duration = 1500, shouldStart = false) {
  // Start with the target value so the page always looks correct,
  // even before JS hydrates or IntersectionObserver fires.
  const [value, setValue] = useState(target);
  const hasAnimated = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!shouldStart || target === 0 || hasAnimated.current) return;
    hasAnimated.current = true;

    // Brief reset to 0 then animate up — progressive enhancement
    setValue(0);
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo curve
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, shouldStart]);

  return value;
}

/* -------------------------------------------------- */
/*  Parse numeric value from trust signal              */
/* -------------------------------------------------- */
function parseNumericValue(
  value: string,
): { number: number; suffix: string } | null {
  const match = value.match(/^(\d[\d,]*)\s*(\+|%|[A-Za-z-]*)?$/);
  if (!match) return null;
  const num = parseInt(match[1].replace(/,/g, ""), 10);
  if (isNaN(num)) return null;
  return { number: num, suffix: match[2] || "" };
}

/* -------------------------------------------------- */
/*  Animated value component                           */
/* -------------------------------------------------- */
function AnimatedValue({
  value,
  isVisible,
}: {
  value: string;
  isVisible: boolean;
}) {
  const parsed = parseNumericValue(value);

  if (!parsed) {
    return <>{value}</>;
  }

  return (
    <CountUpDisplay
      target={parsed.number}
      suffix={parsed.suffix}
      isVisible={isVisible}
    />
  );
}

function CountUpDisplay({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const current = useCountUp(target, 1500, isVisible);
  // Add a space before alphabetic suffixes (e.g. "Day") but not
  // before symbols like "+" or "%"
  const separator = suffix && /^[A-Za-z]/.test(suffix) ? " " : "";
  return (
    <>
      {current.toLocaleString()}
      {separator}
      {suffix}
    </>
  );
}

/* -------------------------------------------------- */
/*  CVA variants                                       */
/* -------------------------------------------------- */
const trustSignalsVariants = cva("", {
  variants: {
    layout: {
      row: "flex flex-wrap items-center justify-center gap-8",
      grid: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6",
      compact: "flex flex-wrap items-center justify-center gap-6",
    },
    variant: {
      light: "",
      dark: "",
      subtle: "",
    },
  },
  defaultVariants: {
    layout: "row",
    variant: "light",
  },
});

const itemVariants = cva("flex flex-col items-center text-center gap-1.5", {
  variants: {
    layout: {
      row: "",
      grid: "p-4",
      compact: "flex-row gap-2",
    },
    variant: {
      light: "",
      dark: "",
      subtle: "",
    },
  },
});

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface TrustSignalsProps extends VariantProps<
  typeof trustSignalsVariants
> {
  items: TrustSignalItem[];
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function TrustSignals({
  items,
  layout,
  variant,
  className,
}: TrustSignalsProps) {
  const isCompact = layout === "compact";
  const isDark = variant === "dark";
  const isSubtle = variant === "subtle";
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(trustSignalsVariants({ layout, variant }), className)}
      role="list"
      aria-label="Trust signals"
    >
      {items.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className={cn(
            itemVariants({ layout, variant }),
            isCompact && "flex-col sm:flex-row",
          )}
          role="listitem"
        >
          {/* Icon */}
          <div
            className={cn(
              "shrink-0",
              isDark
                ? "text-white/80"
                : isSubtle
                  ? "text-muted"
                  : "text-secondary",
            )}
          >
            <Icon
              name={item.icon}
              size={isCompact ? "sm" : "lg"}
              ariaLabel={item.label}
            />
          </div>

          {/* Value + Label */}
          <div
            className={cn(
              isCompact ? "flex items-baseline gap-1.5" : "flex flex-col",
            )}
          >
            <span
              className={cn(
                "font-display font-bold",
                isCompact ? "text-body" : "text-heading-lg",
                isDark
                  ? "text-white"
                  : isSubtle
                    ? "text-foreground"
                    : "text-foreground",
              )}
            >
              <AnimatedValue value={item.value} isVisible={isVisible} />
            </span>
            <span
              className={cn(
                isCompact ? "text-caption" : "text-body-sm",
                isDark
                  ? "text-white/60"
                  : isSubtle
                    ? "text-muted/70"
                    : "text-muted",
              )}
            >
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

TrustSignals.displayName = "TrustSignals";

export { TrustSignals, trustSignalsVariants };
