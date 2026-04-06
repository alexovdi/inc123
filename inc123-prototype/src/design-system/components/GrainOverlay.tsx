import { cn } from "@/design-system/utils/cn";

interface GrainOverlayProps {
  className?: string;
  opacity?: string;
}

function GrainOverlay({
  className,
  opacity = "opacity-[0.25]",
}: GrainOverlayProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 mix-blend-overlay pointer-events-none",
        opacity,
        className,
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.025'/%3E%3C/svg%3E")`,
      }}
      aria-hidden="true"
    />
  );
}

GrainOverlay.displayName = "GrainOverlay";

export { GrainOverlay };
