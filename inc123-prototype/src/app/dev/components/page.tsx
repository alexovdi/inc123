"use client";

import { useState } from "react";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { AccordionSearch } from "@/design-system/components/AccordionSearch";
import { AlsoConsiderCards } from "@/design-system/components/AlsoConsiderCards";
import { AudienceBlocks } from "@/design-system/components/AudienceBlocks";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { Card } from "@/design-system/components/Card";
import { CategoryFilterPills } from "@/design-system/components/CategoryFilterPills";
import { ClusterGrid } from "@/design-system/components/ClusterGrid";
import { ComparisonCards } from "@/design-system/components/ComparisonCards";
import { ComparisonTable } from "@/design-system/components/ComparisonTable";
import { ConfirmationBlock } from "@/design-system/components/ConfirmationBlock";
import { ContentSidebar } from "@/design-system/components/ContentSidebar";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { CTABlock } from "@/design-system/components/CTABlock";
import { DecisionGuideBlocks } from "@/design-system/components/DecisionGuideBlocks";
import { DifferentiatorCallout } from "@/design-system/components/DifferentiatorCallout";
import { DifferentiatorGrid } from "@/design-system/components/DifferentiatorGrid";
import { DualPackageCTA } from "@/design-system/components/DualPackageCTA";
import { EntityTypeToggle } from "@/design-system/components/EntityTypeToggle";
import { FormSection } from "@/design-system/components/FormSection";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { MoneyBackBadge } from "@/design-system/components/MoneyBackBadge";
import { OrderSummary } from "@/design-system/components/OrderSummary";
import { PackagePreviewCard } from "@/design-system/components/PackagePreviewCard";
import { PaymentForm } from "@/design-system/components/PaymentForm";
import { PaymentMethodSelector } from "@/design-system/components/PaymentMethodSelector";
import { PillarCard } from "@/design-system/components/PillarCard";
import { PricingGrid } from "@/design-system/components/PricingGrid";
import { ProgressiveDisclosure } from "@/design-system/components/ProgressiveDisclosure";
import { RunningTotal } from "@/design-system/components/RunningTotal";
import { StateSelector } from "@/design-system/components/StateSelector";
import { StepIndicator } from "@/design-system/components/StepIndicator";
import { StickyMobileCTA } from "@/design-system/components/StickyMobileCTA";
import { TestimonialCarousel } from "@/design-system/components/TestimonialCarousel";
import { TrustSignals } from "@/design-system/components/TrustSignals";
import { ValueComparisonCallout } from "@/design-system/components/ValueComparisonCallout";
import { WhereToGoNext } from "@/design-system/components/WhereToGoNext";
import { WinnerIndicator } from "@/design-system/components/WinnerIndicator";
import { Alert } from "@/design-system/primitives/Alert";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import { Checkbox } from "@/design-system/primitives/Checkbox";
import { Divider } from "@/design-system/primitives/Divider";
import { Icon } from "@/design-system/primitives/Icon";
import { Input } from "@/design-system/primitives/Input";
import { Link } from "@/design-system/primitives/Link";
import { RadioGroup } from "@/design-system/primitives/RadioGroup";
import { Select } from "@/design-system/primitives/Select";
import { Skeleton } from "@/design-system/primitives/Skeleton";
import { Textarea } from "@/design-system/primitives/Textarea";
import { Toggle } from "@/design-system/primitives/Toggle";
import { Tooltip } from "@/design-system/primitives/Tooltip";
import { testimonials } from "@/data/testimonials";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h3 className="font-display text-heading-sm font-semibold text-muted mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function ComponentShowcase() {
  const [toggleChecked, setToggleChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("llc");
  const [entityType, setEntityType] = useState("llc");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentStep, setCurrentStep] = useState("configure");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-wide px-container-x py-section-y-sm">
        <h1 className="font-display text-display-xl font-extrabold text-foreground mb-2">
          Component Showcase
        </h1>
        <p className="text-body-lg text-muted mb-12">
          All primitives and composite components with interactive states.
        </p>

        {/* ========================= PRIMITIVES ========================= */}
        <div className="mb-20">
          <h2 className="font-display text-display font-bold text-foreground mb-8 pb-3 border-b-2 border-foreground">
            Primitives
          </h2>

          <Section title="Button">
            <SubSection title="Variants">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="cta">CTA (Amber)</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </SubSection>
            <SubSection title="Sizes">
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </SubSection>
            <SubSection title="States">
              <div className="flex flex-wrap gap-3">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button
                  icon={<Icon name="ArrowRight" size="sm" />}
                  iconPosition="right"
                >
                  With Icon
                </Button>
                <Button fullWidth>Full Width</Button>
              </div>
            </SubSection>
            <SubSection title="Pillar Colors">
              <div className="flex flex-wrap gap-3">
                <Button pillar="privacy">Privacy</Button>
                <Button pillar="asset">Asset Protection</Button>
                <Button pillar="formation">Formation</Button>
                <Button pillar="compliance">Compliance</Button>
              </div>
            </SubSection>
          </Section>

          <Section title="Badge">
            <SubSection title="Variants">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </SubSection>
            <SubSection title="Pillar & Tier">
              <div className="flex flex-wrap gap-2">
                <Badge pillar="privacy">Privacy</Badge>
                <Badge pillar="asset">Asset Protection</Badge>
                <Badge pillar="formation">Formation</Badge>
                <Badge pillar="compliance">Compliance</Badge>
                <Badge tier="bronze">Bronze</Badge>
                <Badge tier="silver">Silver</Badge>
                <Badge tier="gold">Gold</Badge>
              </div>
            </SubSection>
          </Section>

          <Section title="Icon">
            <div className="flex flex-wrap items-center gap-4">
              <Icon name="Shield" size="xs" />
              <Icon name="Shield" size="sm" />
              <Icon name="Shield" size="md" />
              <Icon name="Shield" size="lg" />
              <Icon name="Shield" size="xl" />
              <Divider orientation="vertical" className="h-8" />
              <Icon name="Shield" className="text-pillar-privacy" />
              <Icon name="Vault" className="text-pillar-asset" />
              <Icon name="Building2" className="text-pillar-formation" />
              <Icon name="ClipboardCheck" className="text-pillar-compliance" />
            </div>
          </Section>

          <Section title="Link">
            <div className="flex flex-wrap gap-4">
              <Link href="#">Default Link</Link>
              <Link href="#" variant="subtle">
                Subtle Link
              </Link>
              <Link href="#" variant="nav">
                Nav Link
              </Link>
              <Link href="#" variant="breadcrumb">
                Breadcrumb
              </Link>
              <Link href="#" pillar="privacy">
                Privacy Pillar
              </Link>
              <Link href="https://example.com" external>
                External Link
              </Link>
            </div>
          </Section>

          <Section title="Divider">
            <div className="space-y-4">
              <Divider weight="light" />
              <Divider weight="medium" />
              <Divider weight="heavy" />
              <div className="flex h-12 items-center gap-4">
                <span>Item A</span>
                <Divider orientation="vertical" />
                <span>Item B</span>
                <Divider orientation="vertical" weight="heavy" />
                <span>Item C</span>
              </div>
            </div>
          </Section>

          <Section title="Toggle">
            <Toggle
              labels={{ on: "Brand", off: "Wireframe" }}
              checked={toggleChecked}
              onChange={setToggleChecked}
            />
          </Section>

          <Section title="Form Controls">
            <div className="grid gap-6 sm:grid-cols-2 max-w-content">
              <Input
                label="Company Name"
                placeholder="e.g., Acme Holdings LLC"
                helperText="Enter your desired company name"
              />
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                error="Please enter a valid email"
              />
              <Select
                label="State"
                options={[
                  { value: "wy", label: "Wyoming" },
                  { value: "nv", label: "Nevada" },
                  { value: "ca", label: "California" },
                  { value: "fl", label: "Florida" },
                ]}
                placeholder="Select a state"
              />
              <Textarea
                label="Business Description"
                placeholder="Describe your business..."
                maxLength={500}
              />
              <Checkbox
                label="I agree to the Terms of Service"
                description="By checking this box you agree to our terms and privacy policy."
                checked={checkboxChecked}
                onChange={setCheckboxChecked}
              />
              <RadioGroup
                label="Entity Type"
                options={[
                  {
                    value: "llc",
                    label: "LLC",
                    description: "Limited Liability Company",
                  },
                  {
                    value: "corp",
                    label: "Corporation",
                    description: "C-Corp or S-Corp",
                  },
                ]}
                value={radioValue}
                onChange={setRadioValue}
              />
            </div>
          </Section>

          <Section title="Tooltip">
            <div className="flex flex-wrap gap-6">
              <Tooltip
                content="This is a tooltip"
                trigger={<Button variant="secondary">Hover me (top)</Button>}
              />
              <Tooltip
                content="Bottom tooltip with more detailed text about nominee services."
                trigger={<Button variant="secondary">Bottom</Button>}
                position="bottom"
              />
              <Tooltip
                content="A longer tooltip explaining what nominee officer service means in detail for privacy protection."
                trigger={<Badge variant="info">Info Badge</Badge>}
                size="md"
              />
            </div>
          </Section>

          <Section title="Alert">
            <div className="space-y-3 max-w-content">
              <Alert
                variant="info"
                title="Information"
                description="Your order has been received and is being processed."
              />
              <Alert
                variant="warning"
                title="Warning"
                description="State filing fees may take 3-5 business days."
              />
              <Alert
                variant="error"
                title="Error"
                description="Payment method declined. Please try another card."
                dismissible
              />
              <Alert
                variant="success"
                title="Success"
                description="Your LLC has been successfully formed!"
              />
            </div>
          </Section>

          <Section title="Skeleton">
            <div className="space-y-3 max-w-sm">
              <Skeleton shape="heading" />
              <Skeleton shape="text" />
              <Skeleton shape="text" />
              <Skeleton shape="text" width="60%" />
              <div className="flex items-center gap-3 mt-4">
                <Skeleton shape="avatar" />
                <div className="flex-1 space-y-2">
                  <Skeleton shape="text" width="50%" />
                  <Skeleton shape="text" width="30%" />
                </div>
              </div>
              <Skeleton shape="image" />
              <Skeleton shape="card" />
            </div>
          </Section>
        </div>

        {/* ========================= COMPOSITES ========================= */}
        <div>
          <h2 className="font-display text-display font-bold text-foreground mb-8 pb-3 border-b-2 border-foreground">
            Composites
          </h2>

          <Section title="Accordion">
            <div className="max-w-content">
              <Accordion type="multiple" variant="default">
                <AccordionItem
                  id="faq-1"
                  title="What does 'anonymous LLC' actually mean?"
                >
                  <p className="text-body text-muted">
                    An anonymous LLC is formed in a state that does not require
                    public disclosure of the LLC&apos;s members or managers.
                    Combined with our nominee services, your name never appears
                    on any publicly accessible state filing.
                  </p>
                </AccordionItem>
                <AccordionItem
                  id="faq-2"
                  title="What is a nominee director/officer?"
                  badge="Privacy"
                >
                  <p className="text-body text-muted">
                    A nominee is a person who appears on your company&apos;s
                    public filings in place of your personal information. Our
                    Gold packages include year-round nominee directors and
                    officers.
                  </p>
                </AccordionItem>
                <AccordionItem
                  id="faq-3"
                  title="How long does it take to form an LLC?"
                >
                  <p className="text-body text-muted">
                    Standard formation takes 3-5 business days. Rush filing
                    available for $199.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </Section>

          <Section title="Card">
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
          </Section>

          <Section title="Trust Signals">
            <SubSection title="Row Layout">
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
            </SubSection>
            <SubSection title="Dark Variant">
              <div className="bg-primary rounded-card p-6">
                <TrustSignals
                  layout="row"
                  variant="dark"
                  items={[
                    {
                      icon: "Shield",
                      value: "25+",
                      label: "Years in Business",
                    },
                    {
                      icon: "CircleCheck",
                      value: "100%",
                      label: "Money-Back Guarantee",
                    },
                    {
                      icon: "Users",
                      value: "1000+",
                      label: "Companies Formed",
                    },
                  ]}
                />
              </div>
            </SubSection>
          </Section>

          <Section title="CTA Block">
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
          </Section>

          <Section title="Breadcrumbs">
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
          </Section>

          <Section title="How It Works">
            <HowItWorks
              steps={[
                {
                  number: 1,
                  title: "Choose Your Package",
                  description: "Select the right package for your needs.",
                  icon: "Package",
                },
                {
                  number: 2,
                  title: "Complete Details",
                  description: "Tell us about your new entity.",
                  icon: "FileText",
                },
                {
                  number: 3,
                  title: "We File Everything",
                  description: "We handle all state filings.",
                  icon: "Send",
                },
                {
                  number: 4,
                  title: "Receive Documents",
                  description: "Get your formation docs in 3-5 days.",
                  icon: "CircleCheck",
                },
              ]}
            />
          </Section>

          <Section title="Step Indicator">
            <StepIndicator
              steps={[
                { id: "configure", label: "Configure" },
                { id: "details", label: "Details" },
                { id: "payment", label: "Payment" },
                { id: "confirmation", label: "Confirmation" },
              ]}
              currentStep={currentStep}
              completedSteps={
                currentStep === "details"
                  ? ["configure"]
                  : currentStep === "payment"
                    ? ["configure", "details"]
                    : currentStep === "confirmation"
                      ? ["configure", "details", "payment"]
                      : []
              }
              onStepClick={(stepId) => setCurrentStep(stepId)}
            />
            <div className="mt-4 flex gap-2">
              {["configure", "details", "payment", "confirmation"].map(
                (step) => (
                  <Button
                    key={step}
                    size="sm"
                    variant={currentStep === step ? "primary" : "secondary"}
                    onClick={() => setCurrentStep(step)}
                  >
                    {step}
                  </Button>
                ),
              )}
            </div>
          </Section>

          <Section title="Entity Type Toggle">
            <EntityTypeToggle
              options={[
                { value: "llc", label: "LLC" },
                { value: "corp", label: "Corporation" },
              ]}
              value={entityType}
              onChange={setEntityType}
            />
            <p className="mt-2 text-body-sm text-muted">
              Selected: {entityType}
            </p>
          </Section>

          <Section title="Package Preview Card">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-content">
              <PackagePreviewCard
                tier={{
                  name: "Wyoming Silver LLC",
                  price: 875,
                  period: "/one-time",
                  description:
                    "Professional formation with compliance essentials.",
                }}
                entityType="LLC"
                cta={{ label: "View Package", href: "#" }}
              />
              <PackagePreviewCard
                tier={{
                  name: "Wyoming Gold LLC",
                  price: 1275,
                  period: "/one-time",
                  description: "Complete privacy with year-round nominees.",
                  badge: "Most Popular",
                  highlighted: true,
                }}
                entityType="LLC"
                cta={{ label: "View Package", href: "#" }}
              />
              <PackagePreviewCard
                tier={{
                  name: "Nevada Gold LLC",
                  price: 1800,
                  period: "/one-time",
                  description: "Premium Nevada formation with full privacy.",
                  badge: "Premium",
                }}
                entityType="LLC"
                cta={{ label: "View Package", href: "#" }}
              />
            </div>
          </Section>

          <Section title="Value Comparison Callout">
            <div className="max-w-md">
              <ValueComparisonCallout
                price="$1,275"
                valueStatement="All-Inclusive"
                includedValue="$2,000+ in included services — nominees, offshore records, compliance, and more"
              />
            </div>
          </Section>

          <Section title="Money-Back Badge">
            <div className="flex flex-wrap gap-4">
              <MoneyBackBadge variant="standard" />
              <MoneyBackBadge variant="detailed" />
            </div>
          </Section>

          <Section title="Differentiator Callout">
            <div className="max-w-lg">
              <DifferentiatorCallout
                stat="$400–$5,000/year"
                comparison="Competitors charge this for nominee services alone"
                ours="Ours are included in every Gold package"
              />
            </div>
          </Section>

          <Section title="Differentiator Grid">
            <DifferentiatorGrid
              heading="Why Incorporate123?"
              items={[
                {
                  label: "Year-Round Nominees",
                  inc123Value: "Included in Gold",
                  competitorValue: "Nominee for a day only",
                },
                {
                  label: "Offshore Record Storage",
                  inc123Value: "Included in Gold",
                  competitorValue: "Not available",
                },
                {
                  label: "All-Inclusive Pricing",
                  inc123Value: "$1,275 total",
                  competitorValue: "$299 + $500 in upsells",
                },
                {
                  label: "Corporate Minutes",
                  inc123Value: "Included",
                  competitorValue: "$400-500/year extra",
                },
              ]}
            />
          </Section>

          <Section title="Decision Guide Blocks">
            <DecisionGuideBlocks
              options={[
                {
                  title: "Choose Wyoming If...",
                  description:
                    "Best for most privacy and asset protection needs.",
                  criteria: [
                    "You want the strongest charging order protection",
                    "You want the lowest annual fees ($60/year state fee)",
                    "You want maximum privacy with nominees",
                  ],
                },
                {
                  title: "Choose Nevada If...",
                  description:
                    "Best for in-state operations and business court access.",
                  criteria: [
                    "You plan to physically operate in Nevada",
                    "You value Nevada's dedicated business court",
                    "You need a Nevada-based registered agent",
                  ],
                },
              ]}
            />
          </Section>

          <Section title="Pillar Card">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <PillarCard
                pillar="privacy"
                icon="Shield"
                title="Business Privacy"
                description="Privacy You Can't Get Elsewhere"
                services={[
                  "Anonymous LLC",
                  "Nominee Services",
                  "Offshore Privacy",
                ]}
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
          </Section>

          <Section title="Where To Go Next">
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
          </Section>

          <Section title="Category Filter Pills">
            <CategoryFilterPills
              categories={[
                { value: "all", label: "All", count: 32 },
                {
                  value: "privacy",
                  label: "Privacy",
                  pillar: "privacy",
                  count: 6,
                },
                {
                  value: "asset",
                  label: "Asset Protection",
                  pillar: "asset",
                  count: 5,
                },
                {
                  value: "formation",
                  label: "Formation",
                  pillar: "formation",
                  count: 6,
                },
                {
                  value: "compliance",
                  label: "Compliance",
                  pillar: "compliance",
                  count: 5,
                },
                { value: "packages", label: "Packages", count: 5 },
                { value: "general", label: "General", count: 5 },
              ]}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </Section>

          <Section title="Also Consider Cards">
            <AlsoConsiderCards
              packages={[
                {
                  name: "Wyoming Silver LLC",
                  state: "Wyoming",
                  price: "$875",
                  href: "#",
                },
                {
                  name: "Nevada Gold LLC",
                  state: "Nevada",
                  price: "$1,800",
                  href: "#",
                },
                {
                  name: "California Private LLC",
                  state: "California",
                  price: "$1,475",
                  href: "#",
                },
              ]}
            />
          </Section>

          <Section title="Testimonial Carousel">
            <div className="max-w-content">
              <TestimonialCarousel
                testimonials={testimonials}
                autoPlay={false}
              />
            </div>
          </Section>

          <Section title="Progressive Disclosure">
            <div className="max-w-content">
              <ProgressiveDisclosure
                sections={[
                  {
                    id: "pd-1",
                    title: "What is an Anonymous LLC?",
                    summary:
                      "An anonymous LLC is formed in a state that doesn't require public disclosure of members.",
                    content:
                      "Combined with our nominee services, your name never appears on any publicly accessible state filing — at formation or any time afterward. This provides genuine anonymity for business owners who value their privacy.",
                  },
                  {
                    id: "pd-2",
                    title: "How Do Nominee Services Work?",
                    summary:
                      "A nominee is a person who appears on your company's public filings in place of your personal information.",
                    content:
                      "Unlike competitors who only provide nominees at the moment of formation ('nominee for a day'), our Gold packages include year-round nominee directors and officers who remain listed on all filings throughout the year. This includes initial formation, annual reports, amendments, and any other state filings.",
                  },
                ]}
                expandAllButton
              />
            </div>
          </Section>

          <Section title="Comparison Table">
            <ComparisonTable
              columns={[
                { id: "wy", title: "Wyoming LLC", badge: "Recommended" },
                { id: "nv", title: "Nevada LLC" },
              ]}
              rows={[
                {
                  label: "State Filing Fee",
                  values: { wy: "$100", nv: "$425" },
                },
                { label: "Annual Fee", values: { wy: "$60", nv: "$350+" } },
                {
                  label: "State Income Tax",
                  values: { wy: "None", nv: "None" },
                },
                {
                  label: "Charging Order Protection",
                  tooltip:
                    "Legal protection against creditors seizing LLC assets",
                  values: { wy: "Strongest", nv: "Good" },
                },
                {
                  label: "Privacy Statutes",
                  values: { wy: "Strong", nv: "Strong" },
                },
              ]}
              highlightColumn="wy"
            />
          </Section>

          <Section title="Winner Indicator">
            <div className="flex gap-4">
              <WinnerIndicator type="winner">
                $60/year (Wyoming)
              </WinnerIndicator>
              <WinnerIndicator type="tie">Same</WinnerIndicator>
              <WinnerIndicator type="loser">
                $350+/year (Nevada)
              </WinnerIndicator>
            </div>
          </Section>

          <Section title="Cross-Pillar CTA">
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
          </Section>

          <Section title="Cluster Grid">
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
          </Section>

          <Section title="Comparison Cards">
            <ComparisonCards
              comparisons={[
                {
                  title: "Wyoming vs Nevada Privacy",
                  description:
                    "Which state offers stronger privacy protections?",
                  href: "#",
                },
                {
                  title: "LLC vs Corporation",
                  description:
                    "Understand the key differences for your business.",
                  href: "#",
                },
              ]}
            />
          </Section>

          <Section title="Dual Package CTA">
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
                phone: "(775) 313-4155",
              }}
            />
          </Section>

          <Section title="Audience Blocks">
            <AudienceBlocks
              audiences={[
                {
                  icon: "Building2",
                  title: "Real Estate Investors",
                  description: "Protect rental properties with LLC structures.",
                },
                {
                  icon: "Briefcase",
                  title: "Business Owners",
                  description:
                    "Shield personal assets from business liabilities.",
                },
                {
                  icon: "TrendingUp",
                  title: "High-Net-Worth Individuals",
                  description:
                    "Protect $500K+ in assets with multi-entity strategies.",
                },
                {
                  icon: "Globe",
                  title: "International Entrepreneurs",
                  description: "Form U.S. entities with maximum privacy.",
                },
              ]}
            />
          </Section>

          <Section title="Form Section">
            <div className="max-w-content bg-surface rounded-card border border-border p-6">
              <FormSection
                title="Company Information"
                description="Tell us about your new business entity."
              >
                <Input
                  label="Company Name"
                  placeholder="e.g., Acme Holdings LLC"
                />
                <Select
                  label="State of Formation"
                  options={[
                    { value: "wy", label: "Wyoming" },
                    { value: "nv", label: "Nevada" },
                  ]}
                  placeholder="Select state"
                />
              </FormSection>
              <FormSection title="Contact Information">
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                />
                <Input label="Phone" type="tel" placeholder="(555) 123-4567" />
              </FormSection>
            </div>
          </Section>

          <Section title="Order Summary">
            <div className="max-w-sm">
              <OrderSummary
                package={{
                  name: "Wyoming Gold LLC",
                  tier: "gold",
                  price: 1275,
                }}
                entityType="LLC"
                addOns={[
                  { name: "Rush Filing (24-hour)", price: 199 },
                  { name: "EIN Obtainment", price: 75 },
                ]}
                subtotal={1549}
                total={1549}
              />
            </div>
          </Section>

          <Section title="Running Total">
            <div className="max-w-sm">
              <RunningTotal
                tier={{ name: "Wyoming Gold LLC", price: 1275 }}
                entityType="LLC"
                addOns={[{ name: "Rush Filing", price: 199 }]}
                total={1474}
                checkoutHref="/checkout/configure"
              />
            </div>
          </Section>

          <Section title="Confirmation Block">
            <div className="max-w-content">
              <ConfirmationBlock
                orderNumber="INC-2026-00847"
                package={{
                  name: "Wyoming Gold LLC",
                  tier: "gold",
                  price: 1275,
                }}
                entityType="LLC"
                addOns={[{ name: "Rush Filing", price: 199 }]}
                total={1474}
                nextSteps={[
                  {
                    step: 1,
                    title: "Name Availability Check",
                    description:
                      "We verify your company name is available in Wyoming.",
                    timeline: "Within 24 hours",
                  },
                  {
                    step: 2,
                    title: "Articles Filed",
                    description:
                      "We file your Articles of Organization with the state.",
                    timeline: "1-2 business days",
                  },
                  {
                    step: 3,
                    title: "Documents Delivered",
                    description: "Receive your formation documents via email.",
                    timeline: "3-5 business days",
                  },
                ]}
              />
            </div>
          </Section>

          <Section title="Accordion Search">
            <div className="max-w-content">
              <AccordionSearch
                onSearch={(term) => console.log("search:", term)}
                placeholder="Search FAQs..."
                categoryOptions={[
                  { value: "all", label: "All Categories" },
                  { value: "privacy", label: "Privacy" },
                  { value: "formation", label: "Formation" },
                  { value: "pricing", label: "Pricing" },
                ]}
                onCategoryChange={(cat) => console.log("category:", cat)}
                totalCount={32}
                filteredCount={32}
              />
            </div>
          </Section>

          <Section title="Pricing Grid">
            <PricingGrid
              tiers={[
                {
                  id: "silver",
                  name: "Silver",
                  price: 875,
                  period: "/one-time",
                  description:
                    "Professional formation with compliance essentials.",
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
                {
                  id: "rush",
                  name: "Rush Filing",
                  price: 199,
                  description: "24-hour expedited filing",
                },
                {
                  id: "ein",
                  name: "EIN Obtainment",
                  price: 75,
                  description: "Federal Tax ID number",
                },
                {
                  id: "ra",
                  name: "Registered Agent",
                  price: 150,
                  description: "Additional year of registered agent service",
                },
              ]}
              onTierSelect={(selection) =>
                console.log("tier selected:", selection)
              }
            />
          </Section>

          <Section title="Content Sidebar">
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
                phoneNumber="(775) 313-4155"
              />
            </div>
          </Section>

          <Section title="State Selector">
            <StateSelector
              heading="Choose Your State"
              description="Select a state to see available packages"
              states={[
                {
                  value: "wy",
                  label: "Wyoming",
                  href: "#",
                  description:
                    "Best for privacy & asset protection. Lowest fees.",
                },
                {
                  value: "nv",
                  label: "Nevada",
                  href: "#",
                  description:
                    "Dedicated business court. Strong privacy statutes.",
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
          </Section>

          <Section title="Payment Form">
            <div className="max-w-md">
              <PaymentForm
                onSubmit={(data) => console.log("payment submitted:", data)}
                billingFields
              />
            </div>
          </Section>

          <Section title="Payment Method Selector">
            <div className="max-w-md">
              <PaymentMethodSelector
                methods={[
                  {
                    id: "credit-card",
                    label: "Credit Card",
                    icon: "CreditCard",
                  },
                  { id: "paypal", label: "PayPal", icon: "Wallet" },
                  { id: "crypto", label: "Crypto", icon: "Bitcoin" },
                ]}
                activeMethod={paymentMethod}
                onChange={setPaymentMethod}
              >
                {paymentMethod === "credit-card" && (
                  <PaymentForm
                    onSubmit={(data) => console.log("payment submitted:", data)}
                    billingFields
                  />
                )}
                {paymentMethod === "paypal" && (
                  <div className="p-6 text-center text-muted">
                    <p className="text-body">
                      You will be redirected to PayPal to complete your payment.
                    </p>
                  </div>
                )}
                {paymentMethod === "crypto" && (
                  <div className="p-6 text-center text-muted">
                    <p className="text-body">
                      Crypto payment instructions will be provided at checkout.
                    </p>
                  </div>
                )}
              </PaymentMethodSelector>
            </div>
          </Section>

          <Section title="Sticky Mobile CTA">
            <div className="rounded-card border border-border bg-surface p-6">
              <p className="text-body text-muted mb-4">
                The StickyMobileCTA is a fixed-position bar that only appears on
                mobile viewports after scrolling past the threshold. Resize your
                browser to mobile width and scroll down to see it in action.
              </p>
              <StickyMobileCTA
                primaryCTA={{
                  children: "Get Started — $1,275",
                  onClick: () => {},
                }}
                phone="(775) 313-4155"
                showAfterScroll={200}
              />
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
