import { cn } from "@/design-system/utils/cn";
import { Icon, Badge, Tooltip } from "@/design-system/primitives";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface FeatureTooltipProps {
  /** Feature name */
  name: string;
  /** Feature inclusion status */
  status: "included" | "not-included" | "add-on";
  /** Optional tooltip content shown on hover/tap */
  tooltip?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Status Icon sub-component
   ------------------------------------------------ */
function StatusIcon({ status }: { status: FeatureTooltipProps["status"] }) {
  switch (status) {
    case "included":
      return <Icon name="Check" size="sm" className="text-success shrink-0" />;
    case "not-included":
      return <Icon name="X" size="sm" className="text-muted shrink-0" />;
    case "add-on":
      return (
        <Badge variant="warning" size="sm">
          Add-on
        </Badge>
      );
  }
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function FeatureTooltip({
  name,
  status,
  tooltip,
  className,
}: FeatureTooltipProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <StatusIcon status={status} />
      <span
        className={cn(
          "text-body-sm",
          status === "not-included" ? "text-muted" : "text-foreground"
        )}
      >
        {name}
      </span>
      {tooltip && (
        <Icon
          name="Info"
          size="xs"
          className="text-muted cursor-help shrink-0"
        />
      )}
    </span>
  );

  if (tooltip) {
    return (
      <Tooltip trigger={content} content={tooltip} position="top" size="sm" />
    );
  }

  return content;
}

FeatureTooltip.displayName = "FeatureTooltip";

export { FeatureTooltip };
