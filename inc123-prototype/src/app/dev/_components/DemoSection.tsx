"use client";

import { Badge } from "@/design-system/primitives";
import { CodeBlock } from "./CodeBlock";

interface DemoSectionProps {
  title: string;
  children: React.ReactNode;
  code?: string;
  stateLabel?: string;
}

export function DemoSection({ title, children, code, stateLabel }: DemoSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-display text-heading-sm font-semibold text-muted">{title}</h3>
        {stateLabel && <Badge variant="info">{stateLabel}</Badge>}
      </div>
      {children}
      {code && (
        <div className="mt-4">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
}
