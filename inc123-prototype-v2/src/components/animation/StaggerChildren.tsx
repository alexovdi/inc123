"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.08,
      delayChildren: delay,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function StaggerChildren({
  children,
  className,
  delay = 0,
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={containerVariants}
      custom={delay}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

StaggerChildren.displayName = "StaggerChildren";

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={itemVariants} className={cn(className)}>
      {children}
    </motion.div>
  );
}

StaggerItem.displayName = "StaggerItem";

export { StaggerChildren, StaggerItem };
export type { StaggerChildrenProps, StaggerItemProps };
