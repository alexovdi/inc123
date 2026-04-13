import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/design-system/primitives/Skeleton";
import { ComponentPageShell } from "../../_components/ComponentPageShell";
import { getComponentBySlug } from "../../_data/component-registry";
import { getDemoComponent } from "../../_data/demo-map";
import { getSnippets } from "../../_data/component-snippets";

export default function ComponentPage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getComponentBySlug(slug) : undefined;

  if (!slug || !entry) {
    return (
      <div className="mx-auto max-w-wide px-container-x py-section-y-sm">
        <h1 className="font-display text-display font-bold text-foreground">
          Component Not Found
        </h1>
        <p className="text-body-lg text-muted mt-2">
          No component with slug &ldquo;{slug ?? ""}&rdquo; exists in the
          registry.
        </p>
      </div>
    );
  }

  const loader = getDemoComponent(slug);
  const DemoComponent = loader ? React.lazy(loader) : null;
  const componentSnippets = getSnippets(slug);

  return (
    <ComponentPageShell
      name={entry.name}
      category={entry.category}
      description={entry.description}
      snippets={componentSnippets}
    >
      {DemoComponent ? (
        <Suspense
          fallback={
            <div className="space-y-4">
              <Skeleton shape="card" />
            </div>
          }
        >
          <DemoComponent />
        </Suspense>
      ) : (
        <p className="text-body text-muted">
          No demo available for this component.
        </p>
      )}
    </ComponentPageShell>
  );
}
