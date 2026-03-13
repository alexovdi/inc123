"use client";

import { useState } from "react";
import {
  EntityTypeToggle,
  PricingGrid,
  RunningTotal,
  PackagePreviewCard,
  ValueComparisonCallout,
  AlsoConsiderCards,
  MoneyBackBadge,
  ComparisonTable,
  WinnerIndicator,
  DecisionGuideBlocks,
} from "@/design-system/components";
import { DemoSection } from "../../_components/DemoSection";
import { StateGrid } from "../../_components/StateGrid";
import { SpecPanel } from "../../_components/SpecPanel";

export function EntityTypeToggleDemo() {
  const [entityType, setEntityType] = useState("llc");
  return (
    <div className="space-y-8">
      <div>
        <EntityTypeToggle
          options={[{ value: "llc", label: "LLC" }, { value: "corp", label: "Corporation" }]}
          value={entityType}
          onChange={setEntityType}
        />
        <p className="mt-2 text-body-sm text-muted">Selected: {entityType}</p>
      </div>
      <SpecPanel
        title="EntityTypeToggle Specifications"
        items={[
          { label: "Active pill", value: "bg-secondary text-white", color: "bg-secondary" },
          { label: "Inactive pill", value: "bg-transparent text-muted hover:text-foreground" },
          { label: "Container", value: "bg-muted/10 rounded-pill p-1" },
        ]}
      />
    </div>
  );
}

export function PricingGridDemo() {
  return (
    <div className="space-y-8">
      <PricingGrid
        tiers={[
          {
            id: "silver",
            name: "Silver",
            price: 875,
            period: "/one-time",
            description: "Professional formation with compliance essentials.",
            features: [
              { name: "State Filing", status: "included" },
              { name: "Registered Agent (1 yr)", status: "included" },
              { name: "Operating Agreement", status: "included" },
              { name: "Nominee Officers", status: "not-included" },
              { name: "Offshore Records", status: "not-included" },
            ],
          },
          {
            id: "gold",
            name: "Gold",
            price: 1275,
            period: "/one-time",
            description: "Complete privacy with year-round nominees.",
            badge: "Most Popular",
            highlighted: true,
            features: [
              { name: "State Filing", status: "included" },
              { name: "Registered Agent (1 yr)", status: "included" },
              { name: "Operating Agreement", status: "included" },
              { name: "Nominee Officers", status: "included" },
              { name: "Offshore Records", status: "included" },
            ],
          },
          {
            id: "platinum",
            name: "Platinum",
            price: 1800,
            period: "/one-time",
            description: "Premium formation with full privacy suite.",
            badge: "Premium",
            features: [
              { name: "State Filing", status: "included" },
              { name: "Registered Agent (1 yr)", status: "included" },
              { name: "Operating Agreement", status: "included" },
              { name: "Nominee Officers", status: "included" },
              { name: "Offshore Records", status: "included" },
              { name: "EIN Obtainment", status: "included" },
            ],
          },
        ]}
        entityToggle={{
          options: [
            { value: "llc", label: "LLC" },
            { value: "corp", label: "Corporation" },
          ],
          default: "llc",
        }}
        addOns={[
          { id: "rush", name: "Rush Filing", price: 199, description: "24-hour expedited filing" },
          { id: "ein", name: "EIN Obtainment", price: 75, description: "Federal Tax ID number" },
          { id: "ra", name: "Registered Agent", price: 150, description: "Additional year of registered agent service" },
        ]}
        onTierSelect={(selection) => console.log("tier selected:", selection)}
      />
      <SpecPanel
        title="PricingGrid Specifications"
        items={[
          { label: "Highlighted card", value: "border-secondary shadow-card-hover scale-105", color: "bg-secondary" },
          { label: "Default card", value: "border-border bg-surface" },
          { label: "Badge", value: "Badge component (info or tier variant)" },
          { label: "Price", value: "font-display text-heading-lg font-bold" },
          { label: "Feature included", value: "text-success CircleCheck icon", color: "bg-success" },
          { label: "Feature excluded", value: "text-muted/40 X icon" },
        ]}
      />
    </div>
  );
}

export function RunningTotalDemo() {
  return (
    <div className="space-y-8">
      <div className="max-w-sm">
        <RunningTotal
          tier={{ name: "Wyoming Gold LLC", price: 1275 }}
          entityType="LLC"
          addOns={[{ name: "Rush Filing", price: 199 }]}
          total={1474}
          checkoutHref="/checkout/configure"
        />
      </div>
      <SpecPanel
        title="RunningTotal Specifications"
        items={[
          { label: "Background", value: "bg-surface border-border rounded-card" },
          { label: "Total", value: "font-display text-heading-sm font-bold" },
          { label: "CTA", value: "Button variant=cta fullWidth" },
        ]}
      />
    </div>
  );
}

export function PackagePreviewCardDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="Default vs Highlighted" stateLabel="Forced">
        <StateGrid
          columns={3}
          states={[
            {
              label: "Default",
              children: (
                <PackagePreviewCard
                  tier={{ name: "Silver LLC", price: 875, period: "/one-time", description: "Professional formation." }}
                  entityType="LLC"
                  cta={{ label: "View", href: "#" }}
                />
              ),
            },
            {
              label: "Highlighted",
              note: "border-secondary shadow-card-hover",
              children: (
                <PackagePreviewCard
                  tier={{ name: "Gold LLC", price: 1275, period: "/one-time", description: "Complete privacy.", badge: "Most Popular", highlighted: true }}
                  entityType="LLC"
                  cta={{ label: "View", href: "#" }}
                />
              ),
            },
            {
              label: "Premium Badge",
              children: (
                <PackagePreviewCard
                  tier={{ name: "NV Gold LLC", price: 1800, period: "/one-time", description: "Full privacy.", badge: "Premium" }}
                  entityType="LLC"
                  cta={{ label: "View", href: "#" }}
                />
              ),
            },
          ]}
        />
      </DemoSection>

      <SpecPanel
        title="PackagePreviewCard Specifications"
        items={[
          { label: "Default", value: "border-border bg-surface rounded-card p-6" },
          { label: "Highlighted", value: "border-secondary shadow-card-hover", color: "bg-secondary" },
          { label: "Price", value: "font-display text-heading-md font-bold" },
          { label: "CTA", value: "Button variant=primary (highlighted: cta)" },
        ]}
      />
    </div>
  );
}

export function ValueComparisonCalloutDemo() {
  return (
    <div className="max-w-md">
      <ValueComparisonCallout
        price="$1,275"
        valueStatement="All-Inclusive"
        includedValue="$2,000+ in included services — nominees, offshore records, compliance, and more"
      />
    </div>
  );
}

export function AlsoConsiderCardsDemo() {
  return (
    <AlsoConsiderCards
      packages={[
        { name: "Wyoming Silver LLC", state: "Wyoming", price: "$875", href: "#" },
        { name: "Nevada Gold LLC", state: "Nevada", price: "$1,800", href: "#" },
        { name: "California Private LLC", state: "California", price: "$1,475", href: "#" },
      ]}
    />
  );
}

export function MoneyBackBadgeDemo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        <MoneyBackBadge variant="standard" />
        <MoneyBackBadge variant="detailed" />
      </div>
      <SpecPanel
        title="MoneyBackBadge Specifications"
        items={[
          { label: "Icon", value: "Shield + Check, text-success", color: "bg-success" },
          { label: "Standard", value: "inline-flex gap-2 items-center" },
          { label: "Detailed", value: "bg-success/5 border-success/20 rounded-card p-4" },
        ]}
      />
    </div>
  );
}

export function ComparisonTableDemo() {
  return (
    <div className="space-y-8">
      <ComparisonTable
        columns={[
          { id: "wy", title: "Wyoming LLC", badge: "Recommended" },
          { id: "nv", title: "Nevada LLC" },
        ]}
        rows={[
          { label: "State Filing Fee", values: { wy: "$100", nv: "$425" } },
          { label: "Annual Fee", values: { wy: "$60", nv: "$350+" } },
          { label: "State Income Tax", values: { wy: "None", nv: "None" } },
          { label: "Charging Order Protection", tooltip: "Legal protection against creditors seizing LLC assets", values: { wy: "Strongest", nv: "Good" } },
          { label: "Privacy Statutes", values: { wy: "Strong", nv: "Strong" } },
        ]}
        highlightColumn="wy"
      />
      <SpecPanel
        title="ComparisonTable Specifications"
        items={[
          { label: "Highlighted column", value: "bg-secondary/5 border-secondary/20", color: "bg-secondary" },
          { label: "Header", value: "font-display font-semibold" },
          { label: "Row border", value: "border-b border-border" },
          { label: "Tooltip", value: "Info icon with Tooltip component" },
        ]}
      />
    </div>
  );
}

export function WinnerIndicatorDemo() {
  return (
    <div className="flex gap-4">
      <WinnerIndicator type="winner">$60/year (Wyoming)</WinnerIndicator>
      <WinnerIndicator type="tie">Same</WinnerIndicator>
      <WinnerIndicator type="loser">$350+/year (Nevada)</WinnerIndicator>
    </div>
  );
}

export function DecisionGuideBlocksDemo() {
  return (
    <div className="space-y-8">
      <DecisionGuideBlocks
        options={[
          { title: "Choose Wyoming If...", description: "Best for most privacy and asset protection needs.", criteria: ["You want the strongest charging order protection", "You want the lowest annual fees ($60/year state fee)", "You want maximum privacy with nominees"] },
          { title: "Choose Nevada If...", description: "Best for in-state operations and business court access.", criteria: ["You plan to physically operate in Nevada", "You value Nevada's dedicated business court", "You need a Nevada-based registered agent"] },
        ]}
      />
      <SpecPanel
        title="DecisionGuideBlocks Specifications"
        items={[
          { label: "Card", value: "border-border bg-surface rounded-card p-6" },
          { label: "Title", value: "font-display text-heading-sm font-semibold" },
          { label: "Criteria", value: "list-disc text-body text-muted" },
        ]}
      />
    </div>
  );
}
