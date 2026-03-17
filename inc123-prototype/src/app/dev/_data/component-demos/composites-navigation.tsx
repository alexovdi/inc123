"use client";

import {
  MegaMenu,
  MobileNav,
  Breadcrumbs,
  StickyMobileCTA,
  Card,
  CTABlock,
  TrustSignals,
} from "@/design-system/components";
import { siteNavigation } from "@/data/navigation";
import { DemoSection } from "../../_components/DemoSection";
import { StateGrid } from "../../_components/StateGrid";
import { SpecPanel } from "../../_components/SpecPanel";

export function MegaMenuDemo() {
  const pillarItems = siteNavigation.main
    .filter((item) => item.children && item.children.length > 0)
    .map((item) => item.children![0]);

  return (
    <div className="space-y-8">
      <div className="border border-border rounded-card overflow-hidden bg-surface">
        <p className="px-4 py-2 text-caption text-muted bg-muted/5">
          MegaMenu renders inside SiteHeader. Below is a standalone preview of
          the dropdown panel content.
        </p>
        <div className="p-4">
          <MegaMenu items={pillarItems} />
        </div>
      </div>
      <SpecPanel
        title="MegaMenu Specifications"
        items={[
          { label: "Background", value: "bg-surface" },
          { label: "Border", value: "border-border rounded-card" },
          { label: "Shadow", value: "shadow-card" },
        ]}
      />
    </div>
  );
}

export function MobileNavDemo() {
  const pillarItems = siteNavigation.main
    .filter((item) => item.children && item.children.length > 0)
    .map((item) => item.children![0]);

  return (
    <div className="space-y-8">
      <div className="border border-border rounded-card overflow-hidden bg-surface">
        <p className="px-4 py-2 text-caption text-muted bg-muted/5">
          MobileNav renders as a slide-out panel. Below is a constrained
          preview.
        </p>
        <div className="max-h-96 overflow-auto">
          <MobileNav
            items={pillarItems}
            isOpen={true}
            onClose={() => {}}
            phone={siteNavigation.phone}
          />
        </div>
      </div>
      <SpecPanel
        title="MobileNav Specifications"
        items={[
          { label: "Width", value: "w-full max-w-sm" },
          { label: "Background", value: "bg-surface" },
          { label: "Overlay", value: "bg-foreground/50 backdrop-blur" },
        ]}
      />
    </div>
  );
}

export function BreadcrumbsDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy", href: "/privacy" },
            { label: "Anonymous LLC", href: "/anonymous-llc" },
          ]}
          pillar="privacy"
        />
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Packages", href: "/packages" },
            { label: "Gold Package", href: "/gold?state=wyoming" },
          ]}
        />
      </div>
      <SpecPanel
        title="Breadcrumbs Specifications"
        items={[
          {
            label: "Link style",
            value: "text-muted text-body-sm hover:text-foreground",
          },
          { label: "Separator", value: "ChevronRight icon, text-muted/50" },
          { label: "Active item", value: "text-foreground font-medium" },
        ]}
      />
    </div>
  );
}

export function StickyMobileCTADemo() {
  return (
    <div className="rounded-card border border-border bg-surface p-6">
      <p className="text-body text-muted mb-4">
        The StickyMobileCTA is a fixed-position bar that only appears on mobile
        viewports after scrolling past the threshold. Resize your browser to
        mobile width and scroll down to see it in action.
      </p>
      <StickyMobileCTA
        primaryCTA={{ children: "Get Started — $1,275", onClick: () => {} }}
        phone="(775) 313-4155"
        showAfterScroll={200}
      />
    </div>
  );
}

export function CardDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="Variants">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            variant="default"
            title="Default Card"
            description="Basic card with border"
          />
          <Card
            variant="elevated"
            title="Elevated Card"
            description="Card with shadow elevation"
          />
          <Card
            variant="interactive"
            title="Interactive Card"
            description="Hover to see the lift effect"
            href="#"
          />
          <Card
            variant="featured"
            pillar="privacy"
            title="Featured Privacy"
            description="Card with pillar accent and featured border"
          />
          <Card
            variant="interactive"
            pillar="asset"
            title="Asset Protection"
            description="Pillar-accented interactive card"
            href="#"
            badge="New"
          />
          <Card
            variant="interactive"
            pillar="formation"
            title="Company Formation"
            description="Start your business today"
            href="#"
            cta={{ label: "Learn More", href: "#" }}
          />
        </div>
      </DemoSection>

      <DemoSection title="Interactive States" stateLabel="Forced">
        <StateGrid
          columns={3}
          states={[
            {
              label: "Default",
              children: (
                <Card
                  variant="interactive"
                  title="Card"
                  description="Default state"
                  href="#"
                />
              ),
            },
            {
              label: "Hover",
              note: "shadow-card-hover -translate-y-1",
              children: (
                <Card
                  variant="interactive"
                  title="Card"
                  description="Hover state"
                  href="#"
                  className="shadow-card-hover -translate-y-1"
                />
              ),
            },
            {
              label: "Featured",
              note: "border-secondary/30",
              children: (
                <Card
                  variant="featured"
                  pillar="privacy"
                  title="Card"
                  description="Featured state"
                />
              ),
            },
          ]}
        />
      </DemoSection>

      <SpecPanel
        title="Card Specifications"
        items={[
          { label: "Default", value: "border-border bg-surface rounded-card" },
          { label: "Elevated", value: "shadow-card" },
          {
            label: "Interactive hover",
            value: "shadow-card-hover -translate-y-1 transition-all",
          },
          {
            label: "Featured border",
            value: "border-secondary/30 (or pillar color)",
          },
          { label: "Padding", value: "p-6" },
        ]}
      />
    </div>
  );
}

export function CTABlockDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <CTABlock
          variant="default"
          layout="centered"
          heading="Ready to Protect Your Privacy?"
          description="Start with a Wyoming Gold LLC — our most popular privacy package."
          primaryCTA={{ label: "Protect Your Privacy", href: "#" }}
          secondaryCTA={{ label: "Compare Packages", href: "#" }}
          trustSignal="25 years of trusted service"
        />
        <CTABlock
          variant="dark"
          layout="split"
          heading="Expert Formation, All-Inclusive"
          description="Everything you need to start, nothing hidden."
          primaryCTA={{ label: "Start Your Company", href: "#" }}
          secondaryCTA={{ label: "Talk to Us", href: "#" }}
        />
      </div>

      <SpecPanel
        title="CTABlock Specifications"
        items={[
          {
            label: "Default bg",
            value: "bg-secondary/5 border-secondary/20",
            color: "bg-secondary",
          },
          {
            label: "Dark bg",
            value: "bg-primary text-surface",
            color: "bg-primary",
          },
          { label: "Layout centered", value: "text-center, max-w-2xl mx-auto" },
          { label: "Layout split", value: "flex justify-between, text-left" },
          { label: "Padding", value: "px-8 py-12 rounded-card" },
        ]}
      />
    </div>
  );
}

export function TrustSignalsDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="Row Layout">
        <TrustSignals
          layout="row"
          variant="light"
          items={[
            { icon: "Shield", value: "25+", label: "Years in Business" },
            {
              icon: "CircleCheck",
              value: "100%",
              label: "Money-Back Guarantee",
            },
            { icon: "Users", value: "1000+", label: "Companies Formed" },
            { icon: "Lock", value: "Secure", label: "Checkout" },
          ]}
        />
      </DemoSection>
      <DemoSection title="Dark Variant">
        <div className="bg-primary rounded-card p-6">
          <TrustSignals
            layout="row"
            variant="dark"
            items={[
              { icon: "Shield", value: "25+", label: "Years in Business" },
              {
                icon: "CircleCheck",
                value: "100%",
                label: "Money-Back Guarantee",
              },
              { icon: "Users", value: "1000+", label: "Companies Formed" },
            ]}
          />
        </div>
      </DemoSection>

      <SpecPanel
        title="TrustSignals Specifications"
        items={[
          { label: "Light text", value: "text-foreground" },
          { label: "Dark text", value: "text-surface" },
          {
            label: "Icon color (light)",
            value: "text-secondary",
            color: "bg-secondary",
          },
          { label: "Icon color (dark)", value: "text-surface" },
          {
            label: "Value font",
            value: "font-display font-bold text-heading-sm",
          },
        ]}
      />
    </div>
  );
}
