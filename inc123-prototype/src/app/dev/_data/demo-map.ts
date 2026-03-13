"use client";

import type { ComponentType } from "react";

type DemoLoader = () => Promise<{ default: ComponentType }>;

function p(exportName: string): DemoLoader {
  return () =>
    import("./component-demos/primitives").then((m) => ({
      default: (m as Record<string, ComponentType>)[exportName],
    }));
}

function cn(exportName: string): DemoLoader {
  return () =>
    import("./component-demos/composites-navigation").then((m) => ({
      default: (m as Record<string, ComponentType>)[exportName],
    }));
}

function cc(exportName: string): DemoLoader {
  return () =>
    import("./component-demos/composites-content").then((m) => ({
      default: (m as Record<string, ComponentType>)[exportName],
    }));
}

function cp(exportName: string): DemoLoader {
  return () =>
    import("./component-demos/composites-pricing").then((m) => ({
      default: (m as Record<string, ComponentType>)[exportName],
    }));
}

function cx(exportName: string): DemoLoader {
  return () =>
    import("./component-demos/composites-context").then((m) => ({
      default: (m as Record<string, ComponentType>)[exportName],
    }));
}

function ck(exportName: string): DemoLoader {
  return () =>
    import("./component-demos/composites-checkout").then((m) => ({
      default: (m as Record<string, ComponentType>)[exportName],
    }));
}

function ly(exportName: string): DemoLoader {
  return () =>
    import("./component-demos/layouts-demos").then((m) => ({
      default: (m as Record<string, ComponentType>)[exportName],
    }));
}

const demoMap: Record<string, DemoLoader> = {
  // Primitives
  "button": p("ButtonDemo"),
  "badge": p("BadgeDemo"),
  "icon": p("IconDemo"),
  "link": p("LinkDemo"),
  "divider": p("DividerDemo"),
  "toggle": p("ToggleDemo"),
  "input": p("InputDemo"),
  "select": p("SelectDemo"),
  "checkbox": p("CheckboxDemo"),
  "radio-group": p("RadioGroupDemo"),
  "textarea": p("TextareaDemo"),
  "tooltip": p("TooltipDemo"),
  "alert": p("AlertDemo"),
  "skeleton": p("SkeletonDemo"),

  // Navigation
  "mega-menu": cn("MegaMenuDemo"),
  "mobile-nav": cn("MobileNavDemo"),
  "breadcrumbs": cn("BreadcrumbsDemo"),
  "sticky-mobile-cta": cn("StickyMobileCTADemo"),
  "card": cn("CardDemo"),
  "cta-block": cn("CTABlockDemo"),
  "trust-signals": cn("TrustSignalsDemo"),

  // Content
  "accordion": cc("AccordionDemo"),
  "accordion-search": cc("AccordionSearchDemo"),
  "progressive-disclosure": cc("ProgressiveDisclosureDemo"),
  "testimonial-carousel": cc("TestimonialCarouselDemo"),
  "how-it-works": cc("HowItWorksDemo"),
  "differentiator-grid": cc("DifferentiatorGridDemo"),
  "differentiator-callout": cc("DifferentiatorCalloutDemo"),
  "step-indicator": cc("StepIndicatorDemo"),

  // Pricing
  "entity-type-toggle": cp("EntityTypeToggleDemo"),
  "pricing-grid": cp("PricingGridDemo"),
  "running-total": cp("RunningTotalDemo"),
  "package-preview-card": cp("PackagePreviewCardDemo"),
  "value-comparison-callout": cp("ValueComparisonCalloutDemo"),
  "also-consider-cards": cp("AlsoConsiderCardsDemo"),
  "money-back-badge": cp("MoneyBackBadgeDemo"),
  "comparison-table": cp("ComparisonTableDemo"),
  "winner-indicator": cp("WinnerIndicatorDemo"),
  "decision-guide-blocks": cp("DecisionGuideBlocksDemo"),

  // Context
  "content-sidebar": cx("ContentSidebarDemo"),
  "cross-pillar-cta": cx("CrossPillarCTADemo"),
  "cluster-grid": cx("ClusterGridDemo"),
  "comparison-cards": cx("ComparisonCardsDemo"),
  "dual-package-cta": cx("DualPackageCTADemo"),
  "pillar-card": cx("PillarCardDemo"),
  "state-selector": cx("StateSelectorDemo"),
  "where-to-go-next": cx("WhereToGoNextDemo"),

  // Checkout
  "order-summary": ck("OrderSummaryDemo"),
  "form-section": ck("FormSectionDemo"),
  "payment-form": ck("PaymentFormDemo"),
  "payment-method-selector": ck("PaymentMethodSelectorDemo"),
  "confirmation-block": ck("ConfirmationBlockDemo"),
  "audience-blocks": ck("AudienceBlocksDemo"),
  "category-filter-pills": ck("CategoryFilterPillsDemo"),

  // Layouts
  "site-header": ly("SiteHeaderDemo"),
  "site-footer": ly("SiteFooterDemo"),
  "pillar-layout": ly("PillarLayoutDemo"),
  "cluster-layout": ly("ClusterLayoutDemo"),
  "package-layout": ly("PackageLayoutDemo"),
  "checkout-layout": ly("CheckoutLayoutDemo"),
  "comparison-layout": ly("ComparisonLayoutDemo"),
  "state-hub-layout": ly("StateHubLayoutDemo"),
};

export function getDemoComponent(slug: string): DemoLoader | undefined {
  return demoMap[slug];
}
