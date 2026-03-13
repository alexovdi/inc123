"use client";

import {
  SiteHeader,
  SiteFooter,
  PillarLayout,
  ClusterLayout,
  PackageLayout,
  CheckoutLayout,
  ComparisonLayout,
  StateHubLayout,
} from "@/design-system/layouts";
import { siteNavigation, footerNavigation } from "@/data/navigation";

function LayoutPreview({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-caption text-muted mb-2">{label}</p>
      <div className="border border-border rounded-card max-h-96 overflow-auto bg-background">
        {children}
      </div>
    </div>
  );
}

function SampleContent() {
  return (
    <div className="p-6 space-y-4">
      <div className="h-8 w-3/4 rounded bg-muted/20" />
      <div className="h-4 w-full rounded bg-muted/10" />
      <div className="h-4 w-5/6 rounded bg-muted/10" />
      <div className="h-4 w-2/3 rounded bg-muted/10" />
      <div className="h-32 w-full rounded bg-muted/5 border border-border" />
    </div>
  );
}

export function SiteHeaderDemo() {
  return (
    <LayoutPreview label="Full site header with mega menu (scroll horizontally if needed)">
      <SiteHeader navigation={siteNavigation} />
    </LayoutPreview>
  );
}

export function SiteFooterDemo() {
  return (
    <LayoutPreview label="Full site footer with navigation columns">
      <SiteFooter
        pillars={footerNavigation.pillars}
        packages={footerNavigation.packages}
        utility={footerNavigation.utility}
        legal={footerNavigation.legal}
        company={footerNavigation.company}
      />
    </LayoutPreview>
  );
}

export function PillarLayoutDemo() {
  return (
    <LayoutPreview label="Pillar landing page layout with optional sidebar">
      <PillarLayout
        pillar="privacy"
        title="Business Privacy"
        description="Privacy You Can't Get Elsewhere — year-round nominees, offshore records, genuine anonymity."
      >
        <SampleContent />
      </PillarLayout>
    </LayoutPreview>
  );
}

export function ClusterLayoutDemo() {
  return (
    <LayoutPreview label="Cluster content page layout with breadcrumb context">
      <ClusterLayout
        pillar="privacy"
        pillarLabel="Business Privacy"
        pillarHref="/privacy"
        title="Anonymous LLC Formation"
        description="Form an LLC with no public ties to your name."
      >
        <SampleContent />
      </ClusterLayout>
    </LayoutPreview>
  );
}

export function PackageLayoutDemo() {
  return (
    <LayoutPreview label="Package detail page layout">
      <PackageLayout packageName="Wyoming Gold LLC">
        <SampleContent />
      </PackageLayout>
    </LayoutPreview>
  );
}

export function CheckoutLayoutDemo() {
  return (
    <LayoutPreview label="Checkout flow step layout with sidebar">
      <CheckoutLayout currentStep={2}>
        <SampleContent />
      </CheckoutLayout>
    </LayoutPreview>
  );
}

export function ComparisonLayoutDemo() {
  return (
    <LayoutPreview label="Side-by-side comparison page layout">
      <ComparisonLayout
        title="Wyoming vs Nevada"
        description="Compare the two most popular states for LLC formation."
        pillar="privacy"
      >
        <SampleContent />
      </ComparisonLayout>
    </LayoutPreview>
  );
}

export function StateHubLayoutDemo() {
  return (
    <LayoutPreview label="State hub landing page layout">
      <StateHubLayout state={{ name: "Wyoming", abbreviation: "WY" }}>
        <SampleContent />
      </StateHubLayout>
    </LayoutPreview>
  );
}
