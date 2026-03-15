"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

function formatNumber(value: number): string {
  return Math.round(value).toLocaleString("en-US");
}

function CountUp({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (current) => {
    return `${prefix}${formatNumber(current)}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      motionValue.set(end);
      return;
    }

    const controls = animate(motionValue, end, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });

    return controls.stop;
  }, [isInView, end, duration, motionValue, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });

    return unsubscribe;
  }, [display]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {formatNumber(prefersReducedMotion ? end : 0)}
      {suffix}
    </span>
  );
}

CountUp.displayName = "CountUp";

export { CountUp };
export type { CountUpProps };
