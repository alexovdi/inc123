"use client";

import { useState } from "react";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { AccordionSearch } from "@/design-system/components/AccordionSearch";
import { DifferentiatorCallout } from "@/design-system/components/DifferentiatorCallout";
import { DifferentiatorGrid } from "@/design-system/components/DifferentiatorGrid";
import { HowItWorks } from "@/design-system/components/HowItWorks";
import { ProgressiveDisclosure } from "@/design-system/components/ProgressiveDisclosure";
import { StepIndicator } from "@/design-system/components/StepIndicator";
import { TestimonialCarousel } from "@/design-system/components/TestimonialCarousel";
import { Button } from "@/design-system/primitives/Button";
import { testimonials } from "@/data/testimonials";
import { DemoSection } from "../../_components/DemoSection";
import { StateGrid } from "../../_components/StateGrid";
import { SpecPanel } from "../../_components/SpecPanel";

export function AccordionDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="States" stateLabel="Forced">
        <StateGrid
          columns={3}
          states={[
            {
              label: "Collapsed",
              children: (
                <div className="w-72">
                  <Accordion type="multiple" variant="default">
                    <AccordionItem
                      id="s-1"
                      title="What does 'anonymous LLC' mean?"
                    >
                      <p className="text-body text-muted">Content here.</p>
                    </AccordionItem>
                  </Accordion>
                </div>
              ),
            },
            {
              label: "Expanded",
              children: (
                <div className="w-72">
                  <Accordion
                    type="multiple"
                    variant="default"
                    defaultOpen={["s-2"]}
                  >
                    <AccordionItem
                      id="s-2"
                      title="What does 'anonymous LLC' mean?"
                    >
                      <p className="text-body text-muted">
                        An anonymous LLC is formed in a state that does not
                        require public disclosure of the LLC&apos;s members or
                        managers.
                      </p>
                    </AccordionItem>
                  </Accordion>
                </div>
              ),
            },
            {
              label: "With Badge",
              children: (
                <div className="w-72">
                  <Accordion type="multiple" variant="default">
                    <AccordionItem
                      id="s-3"
                      title="Nominee director/officer?"
                      badge="Privacy"
                    >
                      <p className="text-body text-muted">Content here.</p>
                    </AccordionItem>
                  </Accordion>
                </div>
              ),
            },
          ]}
        />
      </DemoSection>

      <div className="max-w-content">
        <Accordion type="multiple" variant="default">
          <AccordionItem
            id="faq-1"
            title="What does 'anonymous LLC' actually mean?"
          >
            <p className="text-body text-muted">
              An anonymous LLC is formed in a state that does not require public
              disclosure of the LLC&apos;s members or managers. Combined with
              our nominee services, your name never appears on any publicly
              accessible state filing.
            </p>
          </AccordionItem>
          <AccordionItem
            id="faq-2"
            title="What is a nominee director/officer?"
            badge="Privacy"
          >
            <p className="text-body text-muted">
              A nominee is a person who appears on your company&apos;s public
              filings in place of your personal information. Our Gold packages
              include year-round nominee directors and officers.
            </p>
          </AccordionItem>
          <AccordionItem
            id="faq-3"
            title="How long does it take to form an LLC?"
          >
            <p className="text-body text-muted">
              Standard formation takes 3-5 business days. Rush filing available
              for $199.
            </p>
          </AccordionItem>
        </Accordion>
      </div>

      <SpecPanel
        title="Accordion Specifications"
        items={[
          {
            label: "Trigger",
            value: "flex justify-between py-4 font-medium hover:text-secondary",
          },
          { label: "Border", value: "border-b border-border" },
          {
            label: "Chevron",
            value: "rotate-180 on expand, transition-transform",
          },
          { label: "Content", value: "pb-4 animate-accordion-down/up" },
        ]}
      />
    </div>
  );
}

export function AccordionSearchDemo() {
  return (
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
  );
}

export function ProgressiveDisclosureDemo() {
  return (
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
  );
}

export function TestimonialCarouselDemo() {
  return (
    <div className="space-y-8">
      <div className="max-w-content">
        <TestimonialCarousel testimonials={testimonials} autoPlay={false} />
      </div>
      <SpecPanel
        title="TestimonialCarousel Specifications"
        items={[
          { label: "Card bg", value: "bg-surface border-border" },
          { label: "Quote", value: "text-body text-muted italic" },
          { label: "Navigation", value: "dot indicators + prev/next arrows" },
          {
            label: "Auto-play",
            value: "configurable interval, pauses on hover",
          },
        ]}
      />
    </div>
  );
}

export function HowItWorksDemo() {
  return (
    <div className="space-y-8">
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
      <SpecPanel
        title="HowItWorks Specifications"
        items={[
          {
            label: "Step number",
            value: "bg-secondary text-white rounded-full w-10 h-10",
            color: "bg-secondary",
          },
          { label: "Connector", value: "h-0.5 bg-border flex-1" },
          { label: "Icon", value: "text-secondary" },
        ]}
      />
    </div>
  );
}

export function DifferentiatorGridDemo() {
  return (
    <div className="space-y-8">
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
      <SpecPanel
        title="DifferentiatorGrid Specifications"
        items={[
          {
            label: "Inc123 column",
            value: "bg-success/10 text-success",
            color: "bg-success",
          },
          {
            label: "Competitor column",
            value: "bg-destructive/10 text-destructive",
            color: "bg-destructive",
          },
          { label: "Row border", value: "border-b border-border" },
        ]}
      />
    </div>
  );
}

export function DifferentiatorCalloutDemo() {
  return (
    <div className="max-w-lg">
      <DifferentiatorCallout
        stat="$400–$5,000/year"
        comparison="Competitors charge this for nominee services alone"
        ours="Ours are included in every Gold package"
      />
    </div>
  );
}

export function StepIndicatorDemo() {
  const [currentStep, setCurrentStep] = useState("configure");

  return (
    <div className="space-y-8">
      <div>
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
          {["configure", "details", "payment", "confirmation"].map((step) => (
            <Button
              key={step}
              size="sm"
              variant={currentStep === step ? "primary" : "secondary"}
              onClick={() => setCurrentStep(step)}
            >
              {step}
            </Button>
          ))}
        </div>
      </div>

      <SpecPanel
        title="StepIndicator Specifications"
        items={[
          {
            label: "Active step",
            value: "bg-secondary text-white",
            color: "bg-secondary",
          },
          {
            label: "Completed step",
            value: "bg-success text-white",
            color: "bg-success",
          },
          { label: "Upcoming step", value: "bg-muted/20 text-muted" },
          {
            label: "Connector",
            value: "h-0.5 bg-border (completed: bg-success)",
          },
          { label: "Step circle", value: "w-8 h-8 rounded-full" },
        ]}
      />
    </div>
  );
}
