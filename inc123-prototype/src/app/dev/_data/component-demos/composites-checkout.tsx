"use client";

import { useState } from "react";
import { Input, Select } from "@/design-system/primitives";
import {
  OrderSummary,
  FormSection,
  PaymentForm,
  PaymentMethodSelector,
  ConfirmationBlock,
  AudienceBlocks,
  CategoryFilterPills,
} from "@/design-system/components";
import { DemoSection } from "../../_components/DemoSection";
import { StateGrid } from "../../_components/StateGrid";
import { SpecPanel } from "../../_components/SpecPanel";

export function OrderSummaryDemo() {
  return (
    <div className="space-y-8">
      <div className="max-w-sm">
        <OrderSummary
          package={{ name: "Wyoming Gold LLC", tier: "gold", price: 1275 }}
          entityType="LLC"
          addOns={[
            { name: "Rush Filing (24-hour)", price: 199 },
            { name: "EIN Obtainment", price: 75 },
          ]}
          subtotal={1549}
          total={1549}
        />
      </div>
      <SpecPanel
        title="OrderSummary Specifications"
        items={[
          { label: "Background", value: "bg-surface border-border rounded-card" },
          { label: "Total row", value: "font-display text-heading-sm font-bold border-t-2" },
          { label: "Line items", value: "flex justify-between text-body-sm" },
        ]}
      />
    </div>
  );
}

export function FormSectionDemo() {
  return (
    <div className="space-y-8">
      <div className="max-w-content bg-surface rounded-card border border-border p-6">
        <FormSection title="Company Information" description="Tell us about your new business entity.">
          <Input label="Company Name" placeholder="e.g., Acme Holdings LLC" />
          <Select label="State of Formation" options={[{ value: "wy", label: "Wyoming" }, { value: "nv", label: "Nevada" }]} placeholder="Select state" />
        </FormSection>
        <FormSection title="Contact Information">
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Phone" type="tel" placeholder="(555) 123-4567" />
        </FormSection>
      </div>
      <SpecPanel
        title="FormSection Specifications"
        items={[
          { label: "Title", value: "font-display text-heading-sm font-semibold" },
          { label: "Description", value: "text-body-sm text-muted mt-1" },
          { label: "Spacing", value: "space-y-4 (fields), mb-8 (sections)" },
        ]}
      />
    </div>
  );
}

export function PaymentFormDemo() {
  return (
    <div className="space-y-8">
      <div className="max-w-md">
        <PaymentForm
          onSubmit={(data) => console.log("payment submitted:", data)}
          billingFields
        />
      </div>
      <SpecPanel
        title="PaymentForm Specifications"
        items={[
          { label: "Card number", value: "Input with CreditCard icon" },
          { label: "Expiry/CVV", value: "grid-cols-2 gap-4" },
          { label: "Submit", value: "Button variant=cta fullWidth" },
        ]}
      />
    </div>
  );
}

export function PaymentMethodSelectorDemo() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div className="space-y-8">
      <div className="max-w-md">
        <PaymentMethodSelector
          methods={[
            { id: "credit-card", label: "Credit Card", icon: "CreditCard" },
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
              <p className="text-body">You will be redirected to PayPal to complete your payment.</p>
            </div>
          )}
          {paymentMethod === "crypto" && (
            <div className="p-6 text-center text-muted">
              <p className="text-body">Crypto payment instructions will be provided at checkout.</p>
            </div>
          )}
        </PaymentMethodSelector>
      </div>
      <SpecPanel
        title="PaymentMethodSelector Specifications"
        items={[
          { label: "Active tab", value: "border-b-2 border-secondary text-secondary", color: "bg-secondary" },
          { label: "Inactive tab", value: "text-muted hover:text-foreground" },
          { label: "Tab bar", value: "flex gap-0 border-b border-border" },
        ]}
      />
    </div>
  );
}

export function ConfirmationBlockDemo() {
  return (
    <div className="space-y-8">
      <div className="max-w-content">
        <ConfirmationBlock
          orderNumber="INC-2026-00847"
          package={{ name: "Wyoming Gold LLC", tier: "gold", price: 1275 }}
          entityType="LLC"
          addOns={[{ name: "Rush Filing", price: 199 }]}
          total={1474}
          nextSteps={[
            { step: 1, title: "Name Availability Check", description: "We verify your company name is available in Wyoming.", timeline: "Within 24 hours" },
            { step: 2, title: "Articles Filed", description: "We file your Articles of Organization with the state.", timeline: "1-2 business days" },
            { step: 3, title: "Documents Delivered", description: "Receive your formation documents via email.", timeline: "3-5 business days" },
          ]}
        />
      </div>
      <SpecPanel
        title="ConfirmationBlock Specifications"
        items={[
          { label: "Success icon", value: "CircleCheck text-success bg-success/10 rounded-full p-4", color: "bg-success" },
          { label: "Order number", value: "font-mono text-body-sm text-muted" },
          { label: "Timeline", value: "StepIndicator-like layout with step numbers" },
        ]}
      />
    </div>
  );
}

export function AudienceBlocksDemo() {
  return (
    <div className="space-y-8">
      <AudienceBlocks
        audiences={[
          { icon: "Building2", title: "Real Estate Investors", description: "Protect rental properties with LLC structures." },
          { icon: "Briefcase", title: "Business Owners", description: "Shield personal assets from business liabilities." },
          { icon: "TrendingUp", title: "High-Net-Worth Individuals", description: "Protect $500K+ in assets with multi-entity strategies." },
          { icon: "Globe", title: "International Entrepreneurs", description: "Form U.S. entities with maximum privacy." },
        ]}
      />
      <SpecPanel
        title="AudienceBlocks Specifications"
        items={[
          { label: "Card", value: "border-border bg-surface rounded-card p-6" },
          { label: "Icon", value: "text-secondary bg-secondary/10 rounded-lg p-3", color: "bg-secondary" },
          { label: "Grid", value: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" },
        ]}
      />
    </div>
  );
}

export function CategoryFilterPillsDemo() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="space-y-8">
      <DemoSection title="Active vs Inactive States" stateLabel="Forced">
        <StateGrid
          columns={3}
          states={[
            {
              label: "Active Pill",
              note: "bg-secondary text-white",
              children: (
                <CategoryFilterPills
                  categories={[{ value: "all", label: "All", count: 32 }]}
                  activeCategory="all"
                  onChange={() => {}}
                />
              ),
            },
            {
              label: "Inactive Pill",
              note: "bg-muted/10 text-muted",
              children: (
                <CategoryFilterPills
                  categories={[{ value: "privacy", label: "Privacy", pillar: "privacy", count: 6 }]}
                  activeCategory="other"
                  onChange={() => {}}
                />
              ),
            },
            {
              label: "Pillar Active",
              note: "bg-pillar-{pillar}",
              children: (
                <CategoryFilterPills
                  categories={[{ value: "privacy", label: "Privacy", pillar: "privacy", count: 6 }]}
                  activeCategory="privacy"
                  onChange={() => {}}
                />
              ),
            },
          ]}
        />
      </DemoSection>

      <CategoryFilterPills
        categories={[
          { value: "all", label: "All", count: 32 },
          { value: "privacy", label: "Privacy", pillar: "privacy", count: 6 },
          { value: "asset", label: "Asset Protection", pillar: "asset", count: 5 },
          { value: "formation", label: "Formation", pillar: "formation", count: 6 },
          { value: "compliance", label: "Compliance", pillar: "compliance", count: 5 },
          { value: "packages", label: "Packages", count: 5 },
          { value: "general", label: "General", count: 5 },
        ]}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <SpecPanel
        title="CategoryFilterPills Specifications"
        items={[
          { label: "Active (default)", value: "bg-secondary text-white rounded-pill", color: "bg-secondary" },
          { label: "Active (pillar)", value: "bg-pillar-{pillar} text-white rounded-pill" },
          { label: "Inactive", value: "bg-muted/10 text-muted hover:bg-muted/20" },
          { label: "Count badge", value: "text-caption opacity-70" },
          { label: "Layout", value: "flex flex-wrap gap-2" },
        ]}
      />
    </div>
  );
}
