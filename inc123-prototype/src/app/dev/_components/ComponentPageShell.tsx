import { Badge } from "@/design-system/primitives/Badge";
import { CodeBlock } from "./CodeBlock";
import type { CategoryId } from "../_data/component-registry";
import type { ComponentSnippets } from "../_data/component-snippets";

const categoryLabels: Record<CategoryId, string> = {
  primitives: "Primitive",
  "composites-navigation": "Navigation",
  "composites-content": "Content",
  "composites-pricing": "Pricing",
  "composites-context": "Context",
  "composites-checkout": "Checkout",
  layouts: "Layout",
};

interface ComponentPageShellProps {
  name: string;
  category: CategoryId;
  description: string;
  snippets?: ComponentSnippets;
  children: React.ReactNode;
}

export function ComponentPageShell({
  name,
  category,
  description,
  snippets,
  children,
}: ComponentPageShellProps) {
  return (
    <div className="mx-auto max-w-wide px-container-x py-section-y-sm">
      <div className="mb-8">
        <Badge variant="info" className="mb-3">
          {categoryLabels[category]}
        </Badge>
        <h1 className="font-display text-display font-bold text-foreground mb-2">
          {name}
        </h1>
        <p className="text-body-lg text-muted">{description}</p>
      </div>
      {snippets && (
        <div className="mb-8">
          <h2 className="text-caption font-medium text-muted/50 uppercase tracking-wide mb-2">
            Quick Start
          </h2>
          <CodeBlock code={snippets.basic} />
        </div>
      )}
      {children}
    </div>
  );
}
