"use client";

import { ClusterGrid } from "@/design-system/components/ClusterGrid";
import { ComparisonCards } from "@/design-system/components/ComparisonCards";
import { ContentSidebar } from "@/design-system/components/ContentSidebar";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { DualPackageCTA } from "@/design-system/components/DualPackageCTA";
import { JurisdictionCard } from "@/design-system/components/JurisdictionCard";
import { PillarCard } from "@/design-system/components/PillarCard";
import { PillarLinkCard } from "@/design-system/components/PillarLinkCard";
import { StateSelector } from "@/design-system/components/StateSelector";
import { WhereToGoNext } from "@/design-system/components/WhereToGoNext";
import { DemoSection } from "../../_components/DemoSection";
import { StateGrid } from "../../_components/StateGrid";
import { SpecPanel } from "../../_components/SpecPanel";

export function ContentSidebarDemo() {
  return (
    <div className="space-y-8">
      <div className="max-w-xs">
        <ContentSidebar
          variant="pillar"
          packageShortcut={{
            name: "Wyoming Gold LLC",
            price: "$1,275",
            period: "/one-time",
            href: "#",
            badge: "Most Popular",
          }}
          relatedPages={[
            { title: "Anonymous LLC", href: "#" },
            { title: "Nominee Services", href: "#" },
            { title: "Offshore Privacy", href: "#" },
            { title: "Private Incorporation", href: "#" },
          ]}
          crossPillarLink={{
            pillar: "asset",
            title: "Asset Protection",
            href: "#",
          }}
          phoneNumber="1-800-553-0615"
        />
      </div>
      <SpecPanel
        title="ContentSidebar Specifications"
        items={[
          {
            label: "Background",
            value: "bg-surface border-border rounded-card",
          },
          {
            label: "Package card",
            value: "bg-secondary/5 border-secondary/20 p-4",
            color: "bg-secondary",
          },
          {
            label: "Links",
            value: "text-body-sm text-link hover:text-link/80",
          },
          { label: "Phone", value: "text-body-sm font-medium" },
        ]}
      />
    </div>
  );
}

export function CrossPillarCTADemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4 max-w-content">
        <CrossPillarCTA
          variant="callout-box"
          fromPillar="formation"
          toPillar="privacy"
          heading="Add Privacy to Your Formation"
          description="70% of Wyoming clients upgrade to include nominee services."
          href="#"
          socialProof="70% of WY clients add privacy"
        />
        <CrossPillarCTA
          variant="sidebar-block"
          fromPillar="privacy"
          toPillar="asset"
          heading="Also Consider Asset Protection"
          description="Combine privacy with charging order protection."
          href="#"
        />
      </div>
      <SpecPanel
        title="CrossPillarCTA Specifications"
        items={[
          {
            label: "Callout-box",
            value: "bg-pillar-{toPillar}-soft border-pillar-{toPillar}/20",
          },
          { label: "Sidebar-block", value: "bg-surface border-border" },
          { label: "Social proof", value: "text-caption text-muted italic" },
        ]}
      />
    </div>
  );
}

export function ClusterGridDemo() {
  return (
    <div className="space-y-8">
      <ClusterGrid
        clusters={[
          {
            title: "Anonymous LLC",
            description: "Form an LLC with no public ties to your name",
            href: "#",
            pillar: "privacy",
          },
          {
            title: "Nominee Services",
            description: "Year-round nominee directors and officers",
            href: "#",
            pillar: "privacy",
          },
          {
            title: "Private Incorporation",
            description: "Privacy-first formation in WY, NV, CA, FL",
            href: "#",
            pillar: "privacy",
          },
        ]}
      />
      <SpecPanel
        title="ClusterGrid Specifications"
        items={[
          {
            label: "Card",
            value: "border-border bg-surface rounded-card hover:shadow-card",
          },
          {
            label: "Pillar accent",
            value: "border-t-4 border-t-pillar-{pillar}",
          },
          {
            label: "Grid",
            value: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
          },
        ]}
      />
    </div>
  );
}

export function ComparisonCardsDemo() {
  return (
    <div className="space-y-8">
      <ComparisonCards
        comparisons={[
          {
            title: "Wyoming vs Nevada Privacy",
            description: "Which state offers stronger privacy protections?",
            href: "#",
          },
          {
            title: "LLC vs Corporation",
            description: "Understand the key differences for your business.",
            href: "#",
          },
        ]}
      />
      <SpecPanel
        title="ComparisonCards Specifications"
        items={[
          {
            label: "Card",
            value:
              "border-border bg-surface rounded-card p-6 hover:shadow-card",
          },
          {
            label: "Icon",
            value: "ArrowLeftRight text-secondary",
            color: "bg-secondary",
          },
        ]}
      />
    </div>
  );
}

export function DualPackageCTADemo() {
  return (
    <div className="space-y-8">
      <DualPackageCTA
        packages={[
          {
            name: "Wyoming Gold LLC",
            price: "$1,275",
            period: "/one-time",
            description: "Complete privacy package",
            highlighted: true,
            badge: "Recommended",
            href: "#",
          },
          {
            name: "Wyoming Silver LLC",
            price: "$875",
            period: "/one-time",
            description: "Professional formation",
            href: "#",
          },
        ]}
        consultationCTA={{
          label: "Talk to us instead",
          href: "#",
          phone: "1-800-553-0615",
        }}
      />
      <SpecPanel
        title="DualPackageCTA Specifications"
        items={[
          {
            label: "Highlighted",
            value: "border-secondary shadow-card-hover",
            color: "bg-secondary",
          },
          { label: "Default", value: "border-border bg-surface" },
          { label: "Layout", value: "grid-cols-1 sm:grid-cols-2 gap-4" },
          {
            label: "Consultation",
            value: "text-center text-body-sm text-muted mt-4",
          },
        ]}
      />
    </div>
  );
}

export function PillarCardDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="Default">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PillarCard
            pillar="privacy"
            icon="Shield"
            title="Business Privacy"
            description="Privacy You Can't Get Elsewhere"
            services={["Anonymous LLC", "Nominee Services", "Offshore Privacy"]}
            href="#"
          />
          <PillarCard
            pillar="asset"
            icon="Vault"
            title="Asset Protection"
            description="Protect What You've Built"
            services={[
              "Charging Order Protection",
              "Investment Holding LLC",
              "Multi-Entity Strategies",
            ]}
            href="#"
          />
          <PillarCard
            pillar="formation"
            icon="Building2"
            title="Company Formation"
            description="Expert Formation, All-Inclusive"
            services={["Wyoming LLC", "Nevada LLC", "Shelf Companies"]}
            href="#"
          />
        </div>
      </DemoSection>

      <DemoSection title="Hover State" stateLabel="Forced">
        <StateGrid
          columns={2}
          states={[
            {
              label: "Default",
              children: (
                <PillarCard
                  pillar="privacy"
                  icon="Shield"
                  title="Business Privacy"
                  description="Privacy You Can't Get Elsewhere"
                  services={["Anonymous LLC", "Nominee Services"]}
                  href="#"
                />
              ),
            },
            {
              label: "Hover",
              note: "shadow-card-hover -translate-y-1",
              children: (
                <PillarCard
                  pillar="privacy"
                  icon="Shield"
                  title="Business Privacy"
                  description="Privacy You Can't Get Elsewhere"
                  services={["Anonymous LLC", "Nominee Services"]}
                  href="#"
                  className="shadow-card-hover -translate-y-1"
                />
              ),
            },
          ]}
        />
      </DemoSection>

      <SpecPanel
        title="PillarCard Specifications"
        items={[
          {
            label: "Privacy accent",
            value: "border-t-pillar-privacy → #2563eb",
            color: "bg-pillar-privacy",
          },
          {
            label: "Asset accent",
            value: "border-t-pillar-asset → #16a34a",
            color: "bg-pillar-asset",
          },
          {
            label: "Formation accent",
            value: "border-t-pillar-formation → #d97706",
            color: "bg-pillar-formation",
          },
          {
            label: "Compliance accent",
            value: "border-t-pillar-compliance → #9333ea",
            color: "bg-pillar-compliance",
          },
          {
            label: "Hover",
            value: "shadow-card-hover -translate-y-1 transition-all",
          },
          { label: "Icon bg", value: "bg-pillar-{pillar}-soft rounded-lg p-2" },
        ]}
      />
    </div>
  );
}

export function StateSelectorDemo() {
  return (
    <div className="space-y-8">
      <StateSelector
        heading="Choose Your State"
        description="Select a state to see available packages"
        states={[
          {
            value: "wy",
            label: "Wyoming",
            href: "#",
            description: "Best for privacy & asset protection. Lowest fees.",
          },
          {
            value: "nv",
            label: "Nevada",
            href: "#",
            description: "Dedicated business court. Strong privacy statutes.",
          },
          {
            value: "ca",
            label: "California",
            href: "#",
            description:
              "Required if operating in CA. Privacy options available.",
          },
          {
            value: "fl",
            label: "Florida",
            href: "#",
            description: "No state income tax. Growing business hub.",
          },
        ]}
      />
      <SpecPanel
        title="StateSelector Specifications"
        items={[
          {
            label: "Card",
            value:
              "border-border bg-surface rounded-card p-6 hover:border-secondary",
          },
          {
            label: "Active/selected",
            value: "border-secondary bg-secondary/5",
            color: "bg-secondary",
          },
          {
            label: "State label",
            value: "font-display text-heading-sm font-semibold",
          },
        ]}
      />
    </div>
  );
}

export function PillarLinkCardDemo() {
  return (
    <div className="space-y-10">
      <DemoSection title="Featured variant — top-border accent, title + description">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <PillarLinkCard
              pillar="privacy"
              href="#"
              title="Business Privacy"
              description="Anonymous LLCs and nominee services"
            />
          </li>
          <li>
            <PillarLinkCard
              pillar="asset"
              href="#"
              title="Asset Protection"
              description="Charging orders and LLC structuring"
            />
          </li>
          <li>
            <PillarLinkCard
              pillar="formation"
              href="#"
              title="Company Formation"
              description="Wyoming and Nevada LLC formation"
            />
          </li>
          <li>
            <PillarLinkCard
              pillar="compliance"
              href="#"
              title="Compliance"
              description="Registered agent and annual reports"
            />
          </li>
        </ul>
      </DemoSection>

      <DemoSection title="Compact variant — hover-border accent, title + arrow">
        <ul className="mx-auto grid max-w-narrow grid-cols-1 gap-3 sm:grid-cols-2">
          <li>
            <PillarLinkCard
              pillar="privacy"
              href="#"
              title="Browse Business Privacy topics"
              variant="compact"
            />
          </li>
          <li>
            <PillarLinkCard
              pillar="asset"
              href="#"
              title="Browse Asset Protection topics"
              variant="compact"
            />
          </li>
          <li>
            <PillarLinkCard
              pillar="formation"
              href="#"
              title="Browse Formation topics"
              variant="compact"
            />
          </li>
          <li>
            <PillarLinkCard
              pillar="compliance"
              href="#"
              title="Browse Compliance topics"
              variant="compact"
            />
          </li>
        </ul>
      </DemoSection>

      <SpecPanel
        title="PillarLinkCard Specifications"
        items={[
          {
            label: "Featured",
            value: "border-t-4 border-t-pillar-{pillar}, p-5, font-display",
          },
          {
            label: "Compact",
            value: "hover:border-pillar-{pillar}, p-4, arrow indicator",
          },
          { label: "Shared", value: "rounded-card bg-surface, no-underline" },
          { label: "Hover", value: "shadow-card-hover" },
        ]}
      />
    </div>
  );
}

export function JurisdictionCardDemo() {
  return (
    <div className="space-y-8">
      <StateGrid>
        <JurisdictionCard
          jurisdiction={{
            slug: "nevis",
            name: "Nevis",
            region: "St. Kitts and Nevis",
            entityType: "LLC & International Business Corporation",
            tagline:
              "Maximum asset protection — 2-year statute of limitations on creditor claims.",
            description:
              "Nevis LLCs offer the strongest charging order protection available anywhere. A creditor's sole remedy is a charging order with a 2-year statute of limitations, after which it expires without collection rights.",
            startingPrice: "$2,060",
            annualRenewal: "$1,535/yr",
            timeline: "2–3 weeks",
          }}
        />
        <JurisdictionCard
          jurisdiction={{
            slug: "belize",
            name: "Belize",
            region: "Belize",
            entityType: "IBC",
            tagline: "English common law jurisdiction with fast formation.",
            description:
              "Belize IBCs combine English common law familiarity with fast formation timelines and flexible corporate governance requirements.",
            startingPrice: "PENDING DAVID",
            annualRenewal: "PENDING DAVID",
            timeline: "1–2 weeks",
          }}
        />
      </StateGrid>
      <SpecPanel
        title="JurisdictionCard Specifications"
        items={[
          { label: "Layout", value: "flex-col full-height, rounded-card" },
          {
            label: "Icon bubble",
            value: "h-12 w-12 bg-primary/10 text-primary",
          },
          {
            label: "Description",
            value: "first 220 chars + ellipsis fallback",
          },
          {
            label: "PENDING DAVID pricing",
            value: "text-accent (otherwise text-foreground font-mono)",
          },
          { label: "Hover", value: "-translate-y-0.5 shadow-card-hover" },
        ]}
      />
    </div>
  );
}

export function WhereToGoNextDemo() {
  return (
    <div className="space-y-8">
      <WhereToGoNext
        suggestions={[
          {
            title: "Compare Wyoming vs Nevada",
            description: "See which state is right for your needs.",
            href: "#",
            pillar: "privacy",
          },
          {
            title: "View All Packages",
            description: "Compare pricing across all tiers.",
            href: "#",
            pillar: "formation",
          },
          {
            title: "Talk to a Specialist",
            description: "Get expert guidance on your formation.",
            href: "#",
          },
        ]}
      />
      <SpecPanel
        title="WhereToGoNext Specifications"
        items={[
          {
            label: "Card",
            value: "border-border bg-surface rounded-card hover:shadow-card",
          },
          {
            label: "Pillar accent",
            value: "border-t-2 border-t-pillar-{pillar}",
          },
          { label: "Arrow", value: "ArrowRight icon, text-secondary" },
        ]}
      />
    </div>
  );
}
