"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/design-system/utils/cn";

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms before animation starts after becoming visible */
  delay?: number;
  /** Direction the element animates from */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Duration in ms */
  duration?: number;
  /** Whether to disable the animation (renders children directly) */
  disabled?: boolean;
}

const directionTransforms = {
  up: "translate3d(0, 1.25rem, 0)",
  down: "translate3d(0, -1.25rem, 0)",
  left: "translate3d(1.25rem, 0, 0)",
  right: "translate3d(-1.25rem, 0, 0)",
  none: "translate3d(0, 0, 0)",
} as const;

function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 500,
  disabled = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const el = ref.current;
    if (!el) return;

    // Check reduced motion preference
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
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [disabled]);

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : directionTransforms[direction],
        transition: `opacity ${duration}ms var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) ${delay}ms, transform ${duration}ms var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

ScrollReveal.displayName = "ScrollReveal";

export { ScrollReveal };
