import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════════════
   Container — Simple width-constrained container
   ═══════════════════════════════════════════════════════════════════════════ */

const widthClasses: Record<string, string> = {
  content: "max-w-content",
  narrow: "max-w-narrow",
  wide: "max-w-wide",
};

interface ContainerProps {
  width?: "content" | "narrow" | "wide";
  className?: string;
  children: React.ReactNode;
}

export function Container({
  width = "content",
  className,
  children,
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto px-container-x", widthClasses[width], className)}
    >
      {children}
    </div>
  );
}

Container.displayName = "Container";
