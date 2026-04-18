export type CategoryId =
  | "primitives"
  | "composites-navigation"
  | "composites-content"
  | "composites-pricing"
  | "composites-context"
  | "composites-checkout"
  | "layouts";

export interface ComponentEntry {
  slug: string;
  name: string;
  category: CategoryId;
  description: string;
}

export interface CategoryGroup {
  id: CategoryId;
  label: string;
  entries: ComponentEntry[];
}

const categoryMeta: Record<CategoryId, string> = {
  primitives: "Primitives",
  "composites-navigation": "Navigation & Layout",
  "composites-content": "Content & Media",
  "composites-pricing": "Pricing & Packages",
  "composites-context": "Context & Cross-Linking",
  "composites-checkout": "Checkout & Forms",
  layouts: "Page Layouts",
};

export const registry: ComponentEntry[] = [
  // ── Primitives (14) ─────────────────────────────────
  {
    slug: "button",
    name: "Button",
    category: "primitives",
    description:
      "Primary interactive element with variants, sizes, and pillar colors.",
  },
  {
    slug: "badge",
    name: "Badge",
    category: "primitives",
    description: "Status labels with variant, pillar, and tier styles.",
  },
  {
    slug: "icon",
    name: "Icon",
    category: "primitives",
    description: "Lucide icon wrapper with consistent sizing.",
  },
  {
    slug: "link",
    name: "Link",
    category: "primitives",
    description: "Styled anchor with variant and pillar support.",
  },
  {
    slug: "divider",
    name: "Divider",
    category: "primitives",
    description: "Horizontal and vertical separators with weight options.",
  },
  {
    slug: "toggle",
    name: "Toggle",
    category: "primitives",
    description: "On/off switch with custom labels.",
  },
  {
    slug: "input",
    name: "Input",
    category: "primitives",
    description: "Text input with label, helper text, and error state.",
  },
  {
    slug: "select",
    name: "Select",
    category: "primitives",
    description: "Dropdown select with placeholder and options.",
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    category: "primitives",
    description: "Checkbox with label and description.",
  },
  {
    slug: "radio-group",
    name: "RadioGroup",
    category: "primitives",
    description: "Radio button group with descriptions.",
  },
  {
    slug: "textarea",
    name: "Textarea",
    category: "primitives",
    description: "Multi-line text input with character count.",
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    category: "primitives",
    description: "Hover-triggered info popup with positioning.",
  },
  {
    slug: "alert",
    name: "Alert",
    category: "primitives",
    description: "Contextual feedback messages with variants.",
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    category: "primitives",
    description: "Loading placeholder shapes for content.",
  },

  // ── Composites: Navigation (7) ──────────────────────
  {
    slug: "mega-menu",
    name: "MegaMenu",
    category: "composites-navigation",
    description: "Desktop dropdown navigation with pillar grouping.",
  },
  {
    slug: "mobile-nav",
    name: "MobileNav",
    category: "composites-navigation",
    description: "Mobile slide-out navigation panel.",
  },
  {
    slug: "breadcrumbs",
    name: "Breadcrumbs",
    category: "composites-navigation",
    description: "Hierarchical page trail with pillar accent.",
  },
  {
    slug: "sticky-mobile-cta",
    name: "StickyMobileCTA",
    category: "composites-navigation",
    description: "Fixed bottom CTA bar for mobile viewports.",
  },
  {
    slug: "card",
    name: "Card",
    category: "composites-navigation",
    description: "Content container with variant and pillar styles.",
  },
  {
    slug: "cta-block",
    name: "CTABlock",
    category: "composites-navigation",
    description: "Call-to-action section with heading and actions.",
  },
  {
    slug: "trust-signals",
    name: "TrustSignals",
    category: "composites-navigation",
    description: "Trust metric display in row or grid layout.",
  },

  // ── Composites: Content (8) ─────────────────────────
  {
    slug: "accordion",
    name: "Accordion",
    category: "composites-content",
    description: "Expandable content sections for FAQs.",
  },
  {
    slug: "accordion-search",
    name: "AccordionSearch",
    category: "composites-content",
    description: "Search bar with category filter for FAQ sections.",
  },
  {
    slug: "progressive-disclosure",
    name: "ProgressiveDisclosure",
    category: "composites-content",
    description: "Summary-to-detail progressive reveal.",
  },
  {
    slug: "testimonial-carousel",
    name: "TestimonialCarousel",
    category: "composites-content",
    description: "Rotating customer testimonial display.",
  },
  {
    slug: "how-it-works",
    name: "HowItWorks",
    category: "composites-content",
    description: "Numbered step-by-step process display.",
  },
  {
    slug: "differentiator-grid",
    name: "DifferentiatorGrid",
    category: "composites-content",
    description: "Feature comparison grid vs competitors.",
  },
  {
    slug: "differentiator-callout",
    name: "DifferentiatorCallout",
    category: "composites-content",
    description: "Highlighted competitive advantage stat.",
  },
  {
    slug: "step-indicator",
    name: "StepIndicator",
    category: "composites-content",
    description: "Multi-step progress indicator for checkout flows.",
  },

  // ── Composites: Pricing (10) ────────────────────────
  {
    slug: "entity-type-toggle",
    name: "EntityTypeToggle",
    category: "composites-pricing",
    description: "LLC/Corporation toggle switch.",
  },
  {
    slug: "pricing-grid",
    name: "PricingGrid",
    category: "composites-pricing",
    description: "Multi-tier pricing comparison with features and add-ons.",
  },
  {
    slug: "running-total",
    name: "RunningTotal",
    category: "composites-pricing",
    description: "Live order total with add-ons sidebar.",
  },
  {
    slug: "package-preview-card",
    name: "PackagePreviewCard",
    category: "composites-pricing",
    description: "Package summary card with price and CTA.",
  },
  {
    slug: "value-comparison-callout",
    name: "ValueComparisonCallout",
    category: "composites-pricing",
    description: "Price-to-value comparison highlight.",
  },
  {
    slug: "also-consider-cards",
    name: "AlsoConsiderCards",
    category: "composites-pricing",
    description: "Alternative package suggestions.",
  },
  {
    slug: "money-back-badge",
    name: "MoneyBackBadge",
    category: "composites-pricing",
    description: "Money-back guarantee badge.",
  },
  {
    slug: "comparison-table",
    name: "ComparisonTable",
    category: "composites-pricing",
    description: "Feature-by-feature comparison table.",
  },
  {
    slug: "winner-indicator",
    name: "WinnerIndicator",
    category: "composites-pricing",
    description: "Winner/tie/loser status indicators.",
  },
  {
    slug: "decision-guide-blocks",
    name: "DecisionGuideBlocks",
    category: "composites-pricing",
    description: "Side-by-side decision guide with criteria.",
  },

  // ── Composites: Context (8) ─────────────────────────
  {
    slug: "content-sidebar",
    name: "ContentSidebar",
    category: "composites-context",
    description: "Page sidebar with package shortcut and related links.",
  },
  {
    slug: "cross-pillar-cta",
    name: "CrossPillarCTA",
    category: "composites-context",
    description: "Cross-sell CTA between content pillars.",
  },
  {
    slug: "cluster-grid",
    name: "ClusterGrid",
    category: "composites-context",
    description: "Grid of related cluster page links.",
  },
  {
    slug: "comparison-cards",
    name: "ComparisonCards",
    category: "composites-context",
    description: "Side-by-side comparison link cards.",
  },
  {
    slug: "dual-package-cta",
    name: "DualPackageCTA",
    category: "composites-context",
    description: "Two-package comparison with consultation fallback.",
  },
  {
    slug: "pillar-card",
    name: "PillarCard",
    category: "composites-context",
    description: "Pillar landing page card with service list.",
  },
  {
    slug: "pillar-link-card",
    name: "PillarLinkCard",
    category: "composites-context",
    description:
      "Pillar-accented link card. Featured (top-border + description) or compact (hover-border + arrow).",
  },
  {
    slug: "state-selector",
    name: "StateSelector",
    category: "composites-context",
    description: "State selection with descriptions.",
  },
  {
    slug: "where-to-go-next",
    name: "WhereToGoNext",
    category: "composites-context",
    description: "Suggested next-step navigation links.",
  },

  // ── Composites: Checkout (7) ────────────────────────
  {
    slug: "order-summary",
    name: "OrderSummary",
    category: "composites-checkout",
    description: "Order summary with package, add-ons, and total.",
  },
  {
    slug: "form-section",
    name: "FormSection",
    category: "composites-checkout",
    description: "Grouped form fields with title and description.",
  },
  {
    slug: "payment-form",
    name: "PaymentForm",
    category: "composites-checkout",
    description: "Credit card payment form with billing fields.",
  },
  {
    slug: "payment-method-selector",
    name: "PaymentMethodSelector",
    category: "composites-checkout",
    description: "Payment method tab selector.",
  },
  {
    slug: "confirmation-block",
    name: "ConfirmationBlock",
    category: "composites-checkout",
    description: "Order confirmation with next steps timeline.",
  },
  {
    slug: "audience-blocks",
    name: "AudienceBlocks",
    category: "composites-checkout",
    description: "Target audience segment cards.",
  },
  {
    slug: "category-filter-pills",
    name: "CategoryFilterPills",
    category: "composites-checkout",
    description: "Filterable category pill buttons.",
  },

  // ── Layouts (8) ─────────────────────────────────────
  {
    slug: "site-header",
    name: "SiteHeader",
    category: "layouts",
    description: "Main site header with mega menu navigation.",
  },
  {
    slug: "site-footer",
    name: "SiteFooter",
    category: "layouts",
    description: "Site footer with pillar navigation and company info.",
  },
  {
    slug: "pillar-layout",
    name: "PillarLayout",
    category: "layouts",
    description: "Pillar landing page layout with sidebar.",
  },
  {
    slug: "cluster-layout",
    name: "ClusterLayout",
    category: "layouts",
    description: "Cluster content page layout.",
  },
  {
    slug: "package-layout",
    name: "PackageLayout",
    category: "layouts",
    description: "Package detail page layout.",
  },
  {
    slug: "checkout-layout",
    name: "CheckoutLayout",
    category: "layouts",
    description: "Checkout flow step layout.",
  },
  {
    slug: "comparison-layout",
    name: "ComparisonLayout",
    category: "layouts",
    description: "Side-by-side comparison page layout.",
  },
  {
    slug: "state-hub-layout",
    name: "StateHubLayout",
    category: "layouts",
    description: "State hub landing page layout.",
  },
];

export function getComponentBySlug(slug: string): ComponentEntry | undefined {
  return registry.find((entry) => entry.slug === slug);
}

export function getComponentsByCategory(): CategoryGroup[] {
  const groups: CategoryGroup[] = [];
  const categoryOrder: CategoryId[] = [
    "primitives",
    "composites-navigation",
    "composites-content",
    "composites-pricing",
    "composites-context",
    "composites-checkout",
    "layouts",
  ];

  for (const id of categoryOrder) {
    const entries = registry.filter((e) => e.category === id);
    if (entries.length > 0) {
      groups.push({ id, label: categoryMeta[id], entries });
    }
  }

  return groups;
}

export function getAllSlugs(): string[] {
  return registry.map((e) => e.slug);
}
