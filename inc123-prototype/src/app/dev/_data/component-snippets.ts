export interface ComponentSnippets {
  basic: string;
  examples?: Record<string, string>;
}

export const snippets: Record<string, ComponentSnippets> = {
  // ── Primitives (14) ─────────────────────────────────
  button: {
    basic: `<Button variant="primary" size="md">Get Started</Button>`,
    examples: {
      Variants: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="cta">CTA</Button>
<Button variant="destructive">Destructive</Button>`,
      Sizes: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      "With Icon": `<Button icon={<Icon name="ArrowRight" size="sm" />} iconPosition="right">
  Continue
</Button>`,
      Loading: `<Button loading>Processing...</Button>`,
      Disabled: `<Button disabled>Unavailable</Button>`,
      "Full Width": `<Button fullWidth>Full Width</Button>`,
      "Pillar Colors": `<Button pillar="privacy">Privacy</Button>
<Button pillar="asset">Asset Protection</Button>
<Button pillar="formation">Formation</Button>
<Button pillar="compliance">Compliance</Button>`,
    },
  },
  badge: {
    basic: `<Badge variant="info">Info</Badge>`,
    examples: {
      Variants: `<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="info">Info</Badge>`,
      "Pillar & Tier": `<Badge pillar="privacy">Privacy</Badge>
<Badge tier="gold">Gold</Badge>`,
    },
  },
  icon: {
    basic: `<Icon name="Shield" size="md" />`,
    examples: {
      Sizes: `<Icon name="Shield" size="xs" />
<Icon name="Shield" size="sm" />
<Icon name="Shield" size="md" />
<Icon name="Shield" size="lg" />
<Icon name="Shield" size="xl" />`,
      "Pillar Colors": `<Icon name="Shield" className="text-pillar-privacy" />
<Icon name="Vault" className="text-pillar-asset" />`,
    },
  },
  link: {
    basic: `<Link href="/privacy">Learn More</Link>`,
    examples: {
      Variants: `<Link href="#" variant="subtle">Subtle</Link>
<Link href="#" variant="nav">Nav</Link>
<Link href="#" variant="breadcrumb">Breadcrumb</Link>`,
      External: `<Link href="https://example.com" external>External Link</Link>`,
      Pillar: `<Link href="#" pillar="privacy">Privacy Pillar</Link>`,
    },
  },
  divider: {
    basic: `<Divider />`,
    examples: {
      Weights: `<Divider weight="light" />
<Divider weight="medium" />
<Divider weight="heavy" />`,
      Vertical: `<Divider orientation="vertical" />`,
    },
  },
  toggle: {
    basic: `const [checked, setChecked] = useState(false);

<Toggle
  labels={{ on: "Brand", off: "Wireframe" }}
  checked={checked}
  onChange={setChecked}
/>`,
    examples: {
      Disabled: `<Toggle
  labels={{ on: "On", off: "Off" }}
  checked={false}
  onChange={() => {}}
  disabled
/>`,
    },
  },
  input: {
    basic: `<Input label="Company Name" placeholder="e.g., Acme Holdings LLC" />`,
    examples: {
      "With Helper Text": `<Input
  label="Company Name"
  placeholder="e.g., Acme Holdings LLC"
  helperText="Enter your desired company name"
/>`,
      Error: `<Input label="Email" type="email" error="Please enter a valid email" />`,
      Disabled: `<Input label="Company Name" value="Acme LLC" disabled />`,
    },
  },
  select: {
    basic: `<Select
  label="State"
  options={[
    { value: "wy", label: "Wyoming" },
    { value: "nv", label: "Nevada" },
  ]}
  placeholder="Select a state"
/>`,
    examples: {
      Disabled: `<Select
  label="State"
  options={[{ value: "wy", label: "Wyoming" }]}
  disabled
/>`,
    },
  },
  checkbox: {
    basic: `const [checked, setChecked] = useState(false);

<Checkbox
  label="I agree to the Terms of Service"
  checked={checked}
  onChange={setChecked}
/>`,
    examples: {
      "With Description": `<Checkbox
  label="I agree to the Terms of Service"
  description="By checking this box you agree to our terms."
  checked={checked}
  onChange={setChecked}
/>`,
      Disabled: `<Checkbox label="Unavailable option" checked={false} onChange={() => {}} disabled />`,
    },
  },
  "radio-group": {
    basic: `const [value, setValue] = useState("llc");

<RadioGroup
  label="Entity Type"
  options={[
    { value: "llc", label: "LLC" },
    { value: "corp", label: "Corporation" },
  ]}
  value={value}
  onChange={setValue}
/>`,
    examples: {
      Disabled: `<RadioGroup
  label="Entity Type"
  options={[
    { value: "llc", label: "LLC" },
    { value: "corp", label: "Corporation" },
  ]}
  value="llc"
  onChange={() => {}}
  disabled
/>`,
    },
  },
  textarea: {
    basic: `<Textarea label="Business Description" placeholder="Describe your business..." />`,
    examples: {
      "With Character Limit": `<Textarea label="Description" maxLength={500} />`,
      Error: `<Textarea label="Description" error="Description is required" />`,
      Disabled: `<Textarea label="Description" value="Read-only content" disabled />`,
    },
  },
  tooltip: {
    basic: `<Tooltip
  content="This is a tooltip"
  trigger={<Button variant="secondary">Hover me</Button>}
/>`,
    examples: {
      Positions: `<Tooltip content="Top" trigger={<Button>Top</Button>} position="top" />
<Tooltip content="Bottom" trigger={<Button>Bottom</Button>} position="bottom" />
<Tooltip content="Left" trigger={<Button>Left</Button>} position="left" />
<Tooltip content="Right" trigger={<Button>Right</Button>} position="right" />`,
      "Medium Size": `<Tooltip content="Longer explanation text..." trigger={<Badge>Info</Badge>} size="md" />`,
    },
  },
  alert: {
    basic: `<Alert variant="info" title="Information" description="Your order has been received." />`,
    examples: {
      Variants: `<Alert variant="info" title="Info" description="Informational message." />
<Alert variant="warning" title="Warning" description="Warning message." />
<Alert variant="error" title="Error" description="Error message." />
<Alert variant="success" title="Success" description="Success message." />`,
      Dismissible: `<Alert variant="error" title="Error" description="Payment declined." dismissible />`,
    },
  },
  skeleton: {
    basic: `<Skeleton shape="text" />`,
    examples: {
      Shapes: `<Skeleton shape="heading" />
<Skeleton shape="text" />
<Skeleton shape="avatar" />
<Skeleton shape="image" />
<Skeleton shape="card" />`,
      "Custom Width": `<Skeleton shape="text" width="60%" />`,
    },
  },

  // ── Composites: Navigation (7) ──────────────────────
  "mega-menu": {
    basic: `<MegaMenu items={navigationItems} />`,
  },
  "mobile-nav": {
    basic: `<MobileNav items={navItems} isOpen={isOpen} onClose={handleClose} phone="1-800-553-0615" />`,
  },
  breadcrumbs: {
    basic: `<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Privacy", href: "/privacy" },
    { label: "Anonymous LLC" },
  ]}
  pillar="privacy"
/>`,
  },
  "sticky-mobile-cta": {
    basic: `<StickyMobileCTA
  primaryCTA={{ children: "Get Started — $1,275", onClick: handleClick }}
  phone="1-800-553-0615"
/>`,
  },
  card: {
    basic: `<Card variant="interactive" title="Card Title" description="Card description" href="#" />`,
  },
  "cta-block": {
    basic: `<CTABlock
  variant="default"
  layout="centered"
  heading="Ready to Protect Your Privacy?"
  description="Start with our most popular package."
  primaryCTA={{ label: "Get Started", href: "#" }}
/>`,
  },
  "trust-signals": {
    basic: `<TrustSignals
  layout="row"
  variant="light"
  items={[
    { icon: "Shield", value: "25+", label: "Years in Business" },
    { icon: "CircleCheck", value: "100%", label: "Money-Back Guarantee" },
  ]}
/>`,
  },

  // ── Composites: Content (8) ─────────────────────────
  accordion: {
    basic: `<Accordion type="multiple">
  <AccordionItem id="1" title="Question?">
    <p>Answer content here.</p>
  </AccordionItem>
</Accordion>`,
  },
  "accordion-search": {
    basic: `<AccordionSearch
  onSearch={handleSearch}
  placeholder="Search FAQs..."
  categoryOptions={categories}
  onCategoryChange={handleCategoryChange}
  totalCount={32}
  filteredCount={32}
/>`,
  },
  "progressive-disclosure": {
    basic: `<ProgressiveDisclosure
  sections={[
    { id: "1", title: "Title", summary: "Short summary", content: "Full content" },
  ]}
  expandAllButton
/>`,
  },
  "testimonial-carousel": {
    basic: `<TestimonialCarousel testimonials={testimonials} autoPlay={false} />`,
  },
  "how-it-works": {
    basic: `<HowItWorks
  steps={[
    { number: 1, title: "Choose Package", description: "Select the right package.", icon: "Package" },
    { number: 2, title: "Complete Details", description: "Tell us about your entity.", icon: "FileText" },
  ]}
/>`,
  },
  "differentiator-grid": {
    basic: `<DifferentiatorGrid
  heading="Why Incorporate123?"
  items={[
    { label: "Feature", inc123Value: "Included", competitorValue: "Extra cost" },
  ]}
/>`,
  },
  "differentiator-callout": {
    basic: `<DifferentiatorCallout
  stat="$400–$5,000/year"
  comparison="Competitors charge this for nominees"
  ours="Ours are included in every Gold package"
/>`,
  },
  "step-indicator": {
    basic: `<StepIndicator
  steps={[
    { id: "configure", label: "Configure" },
    { id: "details", label: "Details" },
    { id: "payment", label: "Payment" },
  ]}
  currentStep="details"
  completedSteps={["configure"]}
/>`,
  },

  // ── Composites: Pricing (10) ────────────────────────
  "entity-type-toggle": {
    basic: `<EntityTypeToggle
  options={[{ value: "llc", label: "LLC" }, { value: "corp", label: "Corporation" }]}
  value={entityType}
  onChange={setEntityType}
/>`,
  },
  "pricing-grid": {
    basic: `<PricingGrid tiers={tiers} entityToggle={entityToggle} addOns={addOns} onTierSelect={handleSelect} />`,
  },
  "running-total": {
    basic: `<RunningTotal
  tier={{ name: "Wyoming Gold LLC", price: 1275 }}
  entityType="LLC"
  addOns={[{ name: "Rush Filing", price: 199 }]}
  total={1474}
  checkoutHref="/checkout/configure"
/>`,
  },
  "package-preview-card": {
    basic: `<PackagePreviewCard
  tier={{ name: "Wyoming Gold LLC", price: 1275, period: "/one-time", description: "Complete privacy." }}
  entityType="LLC"
  cta={{ label: "View Package", href: "#" }}
/>`,
  },
  "value-comparison-callout": {
    basic: `<ValueComparisonCallout
  price="$1,275"
  valueStatement="All-Inclusive"
  includedValue="$2,000+ in included services"
/>`,
  },
  "also-consider-cards": {
    basic: `<AlsoConsiderCards
  packages={[
    { name: "Wyoming Silver LLC", state: "Wyoming", price: "$875", href: "#" },
  ]}
/>`,
  },
  "money-back-badge": {
    basic: `<MoneyBackBadge variant="standard" />`,
  },
  "comparison-table": {
    basic: `<ComparisonTable
  columns={[
    { id: "wy", title: "Wyoming LLC", badge: "Recommended" },
    { id: "nv", title: "Nevada LLC" },
  ]}
  rows={[
    { label: "State Filing Fee", values: { wy: "$100", nv: "$425" } },
  ]}
  highlightColumn="wy"
/>`,
  },
  "winner-indicator": {
    basic: `<WinnerIndicator type="winner">$60/year (Wyoming)</WinnerIndicator>`,
  },
  "decision-guide-blocks": {
    basic: `<DecisionGuideBlocks
  options={[
    { title: "Choose Wyoming If...", description: "Best for most needs.", criteria: ["Criterion 1"] },
    { title: "Choose Nevada If...", description: "Best for in-state ops.", criteria: ["Criterion 1"] },
  ]}
/>`,
  },

  // ── Composites: Context (8) ─────────────────────────
  "content-sidebar": {
    basic: `<ContentSidebar
  variant="pillar"
  packageShortcut={{ name: "Wyoming Gold LLC", price: "$1,275", period: "/one-time", href: "#" }}
  relatedPages={[{ title: "Anonymous LLC", href: "#" }]}
  phoneNumber="1-800-553-0615"
/>`,
  },
  "cross-pillar-cta": {
    basic: `<CrossPillarCTA
  variant="callout-box"
  fromPillar="formation"
  toPillar="privacy"
  heading="Add Privacy to Your Formation"
  description="70% of Wyoming clients upgrade to include nominee services."
  href="#"
/>`,
  },
  "cluster-grid": {
    basic: `<ClusterGrid
  clusters={[
    { title: "Anonymous LLC", description: "No public ties to your name", href: "#", pillar: "privacy" },
  ]}
/>`,
  },
  "comparison-cards": {
    basic: `<ComparisonCards
  comparisons={[
    { title: "Wyoming vs Nevada", description: "Which offers stronger privacy?", href: "#" },
  ]}
/>`,
  },
  "dual-package-cta": {
    basic: `<DualPackageCTA
  packages={[
    { name: "Wyoming Gold LLC", price: "$1,275", period: "/one-time", description: "Complete privacy.", highlighted: true, href: "#" },
    { name: "Wyoming Silver LLC", price: "$875", period: "/one-time", description: "Professional formation.", href: "#" },
  ]}
/>`,
  },
  "pillar-card": {
    basic: `<PillarCard
  pillar="privacy"
  icon="Shield"
  title="Business Privacy"
  description="Privacy You Can't Get Elsewhere"
  services={["Anonymous LLC", "Nominee Services"]}
  href="#"
/>`,
  },
  "state-selector": {
    basic: `<StateSelector
  heading="Choose Your State"
  states={[
    { value: "wy", label: "Wyoming", href: "#", description: "Best for privacy." },
  ]}
/>`,
  },
  "where-to-go-next": {
    basic: `<WhereToGoNext
  suggestions={[
    { title: "Compare Wyoming vs Nevada", description: "See which state is right.", href: "#" },
  ]}
/>`,
  },

  // ── Composites: Checkout (7) ────────────────────────
  "order-summary": {
    basic: `<OrderSummary
  package={{ name: "Wyoming Gold LLC", tier: "gold", price: 1275 }}
  entityType="LLC"
  addOns={[{ name: "Rush Filing", price: 199 }]}
  subtotal={1474}
  total={1474}
/>`,
  },
  "form-section": {
    basic: `<FormSection title="Company Information" description="Tell us about your business.">
  <Input label="Company Name" placeholder="e.g., Acme Holdings LLC" />
</FormSection>`,
  },
  "payment-form": {
    basic: `<PaymentForm onSubmit={handleSubmit} billingFields />`,
  },
  "payment-method-selector": {
    basic: `<PaymentMethodSelector
  methods={[
    { id: "credit-card", label: "Credit Card", icon: "CreditCard" },
    { id: "paypal", label: "PayPal", icon: "Wallet" },
  ]}
  activeMethod={paymentMethod}
  onChange={setPaymentMethod}
>
  {/* Payment form content */}
</PaymentMethodSelector>`,
  },
  "confirmation-block": {
    basic: `<ConfirmationBlock
  orderNumber="INC-2026-00847"
  package={{ name: "Wyoming Gold LLC", tier: "gold", price: 1275 }}
  entityType="LLC"
  total={1474}
  nextSteps={steps}
/>`,
  },
  "audience-blocks": {
    basic: `<AudienceBlocks
  audiences={[
    { icon: "Building2", title: "Real Estate Investors", description: "Protect rental properties." },
  ]}
/>`,
  },
  "category-filter-pills": {
    basic: `<CategoryFilterPills
  categories={[
    { value: "all", label: "All", count: 32 },
    { value: "privacy", label: "Privacy", pillar: "privacy", count: 6 },
  ]}
  activeCategory={activeCategory}
  onChange={setActiveCategory}
/>`,
  },

  // ── Layouts (8) ─────────────────────────────────────
  "site-header": {
    basic: `<SiteHeader navigation={siteNavigation} />`,
  },
  "site-footer": {
    basic: `<SiteFooter pillars={pillars} packages={packages} utility={utility} legal={legal} company={company} />`,
  },
  "pillar-layout": {
    basic: `<PillarLayout pillar="privacy" title="Business Privacy" description="Privacy You Can't Get Elsewhere">
  {children}
</PillarLayout>`,
  },
  "cluster-layout": {
    basic: `<ClusterLayout pillar="privacy" pillarLabel="Business Privacy" pillarHref="/privacy" title="Anonymous LLC">
  {children}
</ClusterLayout>`,
  },
  "package-layout": {
    basic: `<PackageLayout packageName="Wyoming Gold LLC">{children}</PackageLayout>`,
  },
  "checkout-layout": {
    basic: `<CheckoutLayout currentStep={2}>{children}</CheckoutLayout>`,
  },
  "comparison-layout": {
    basic: `<ComparisonLayout title="Wyoming vs Nevada" pillar="privacy">{children}</ComparisonLayout>`,
  },
  "state-hub-layout": {
    basic: `<StateHubLayout state={{ name: "Wyoming", abbreviation: "WY" }}>{children}</StateHubLayout>`,
  },
};

export function getSnippets(slug: string): ComponentSnippets | undefined {
  return snippets[slug];
}
