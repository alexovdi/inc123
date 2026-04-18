"use client";

import { useState } from "react";
import { Alert } from "@/design-system/primitives/Alert";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import { Checkbox } from "@/design-system/primitives/Checkbox";
import { Divider } from "@/design-system/primitives/Divider";
import { Eyebrow } from "@/design-system/primitives/Eyebrow";
import { Icon } from "@/design-system/primitives/Icon";
import { Input } from "@/design-system/primitives/Input";
import { Link } from "@/design-system/primitives/Link";
import { RadioGroup } from "@/design-system/primitives/RadioGroup";
import { Select } from "@/design-system/primitives/Select";
import { Skeleton } from "@/design-system/primitives/Skeleton";
import { Textarea } from "@/design-system/primitives/Textarea";
import { Toggle } from "@/design-system/primitives/Toggle";
import { Tooltip } from "@/design-system/primitives/Tooltip";
import { DemoSection } from "../../_components/DemoSection";
import { StateGrid } from "../../_components/StateGrid";
import { SpecPanel } from "../../_components/SpecPanel";
import { snippets } from "../component-snippets";

/* ================================================================
   BUTTON
   ================================================================ */
export function ButtonDemo() {
  return (
    <div className="space-y-8">
      <DemoSection
        title="Variants"
        code={snippets.button.examples?.["Variants"]}
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="cta">CTA (Amber)</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </DemoSection>

      <DemoSection title="Sizes" code={snippets.button.examples?.["Sizes"]}>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </DemoSection>

      <DemoSection title="Interactive States (Primary)" stateLabel="Forced">
        <StateGrid
          columns={6}
          states={[
            {
              label: "Default",
              children: <Button variant="primary">Primary</Button>,
            },
            {
              label: "Hover",
              note: "bg-secondary/90",
              children: (
                <Button variant="primary" className="bg-secondary/90">
                  Primary
                </Button>
              ),
            },
            {
              label: "Focus",
              note: "ring-2 ring-secondary",
              children: (
                <Button
                  variant="primary"
                  className="ring-2 ring-secondary ring-offset-2 ring-offset-surface"
                >
                  Primary
                </Button>
              ),
            },
            {
              label: "Active",
              note: "bg-secondary/80",
              children: (
                <Button variant="primary" className="bg-secondary/80">
                  Primary
                </Button>
              ),
            },
            {
              label: "Disabled",
              children: (
                <Button variant="primary" disabled>
                  Primary
                </Button>
              ),
            },
            {
              label: "Loading",
              children: (
                <Button variant="primary" loading>
                  Primary
                </Button>
              ),
            },
          ]}
        />
      </DemoSection>

      <DemoSection title="All Variants × Hover">
        <StateGrid
          columns={5}
          states={[
            {
              label: "Primary Hover",
              note: "bg-secondary/90",
              children: (
                <Button variant="primary" className="bg-secondary/90">
                  Primary
                </Button>
              ),
            },
            {
              label: "Secondary Hover",
              note: "bg-muted/10",
              children: (
                <Button variant="secondary" className="bg-muted/10">
                  Secondary
                </Button>
              ),
            },
            {
              label: "Ghost Hover",
              note: "bg-muted/10",
              children: (
                <Button variant="ghost" className="bg-muted/10">
                  Ghost
                </Button>
              ),
            },
            {
              label: "CTA Hover",
              note: "bg-accent-hover",
              children: (
                <Button variant="cta" className="bg-accent-hover">
                  CTA
                </Button>
              ),
            },
            {
              label: "Destructive Hover",
              note: "bg-destructive/90",
              children: (
                <Button variant="destructive" className="bg-destructive/90">
                  Destructive
                </Button>
              ),
            },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="States"
        stateLabel="Interactive"
        code={snippets.button.examples?.["Loading"]}
      >
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
      </DemoSection>

      <DemoSection
        title="Pillar Colors"
        code={snippets.button.examples?.["Pillar Colors"]}
      >
        <div className="flex flex-wrap gap-3">
          <Button pillar="privacy">Privacy</Button>
          <Button pillar="asset">Asset Protection</Button>
          <Button pillar="formation">Formation</Button>
          <Button pillar="compliance">Compliance</Button>
        </div>
      </DemoSection>

      <SpecPanel
        title="Button Specifications"
        items={[
          {
            label: "Primary bg",
            value: "bg-secondary → #2563eb",
            color: "bg-secondary",
          },
          { label: "Secondary bg", value: "bg-transparent, border-border" },
          { label: "Ghost bg", value: "bg-transparent" },
          { label: "CTA bg", value: "bg-accent → #d97706", color: "bg-accent" },
          {
            label: "Destructive bg",
            value: "bg-destructive → #dc2626",
            color: "bg-destructive",
          },
          { label: "Size sm", value: "h-9 px-3 text-body-sm" },
          { label: "Size md", value: "h-11 px-6 text-body" },
          { label: "Size lg", value: "h-14 px-8 text-body-lg" },
          {
            label: "Focus ring",
            value: "ring-2 ring-secondary ring-offset-2 ring-offset-surface",
          },
          { label: "Border radius", value: "rounded-button" },
          { label: "Disabled", value: "pointer-events-none opacity-50" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   BADGE
   ================================================================ */
export function BadgeDemo() {
  return (
    <div className="space-y-8">
      <DemoSection
        title="Variants"
        code={snippets.badge.examples?.["Variants"]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </DemoSection>
      <DemoSection
        title="Pillar & Tier"
        code={snippets.badge.examples?.["Pillar & Tier"]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge pillar="privacy">Privacy</Badge>
          <Badge pillar="asset">Asset Protection</Badge>
          <Badge pillar="formation">Formation</Badge>
          <Badge pillar="compliance">Compliance</Badge>
          <Badge tier="bronze">Bronze</Badge>
          <Badge tier="silver">Silver</Badge>
          <Badge tier="gold">Gold</Badge>
        </div>
      </DemoSection>

      <SpecPanel
        title="Badge Specifications"
        items={[
          { label: "Default", value: "bg-muted/15 text-foreground" },
          {
            label: "Success",
            value: "bg-success/15 text-success → #16a34a",
            color: "bg-success",
          },
          {
            label: "Warning",
            value: "bg-warning/15 text-warning → #ea580c",
            color: "bg-warning",
          },
          {
            label: "Destructive",
            value: "bg-destructive/15 text-destructive → #dc2626",
            color: "bg-destructive",
          },
          {
            label: "Info",
            value: "bg-secondary/15 text-secondary → #2563eb",
            color: "bg-secondary",
          },
          { label: "Size sm", value: "px-2 py-0.5 text-caption" },
          { label: "Size md", value: "px-3 py-1 text-body-sm" },
          { label: "Border radius", value: "rounded-pill" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   ICON
   ================================================================ */
export function IconDemo() {
  return (
    <div className="space-y-8">
      <DemoSection
        title="Sizes & Pillar Colors"
        code={snippets.icon.examples?.["Sizes"]}
      >
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
      </DemoSection>

      <SpecPanel
        title="Icon Specifications"
        items={[
          { label: "xs", value: "14px" },
          { label: "sm", value: "16px" },
          { label: "md", value: "20px" },
          { label: "lg", value: "24px" },
          { label: "xl", value: "32px" },
          {
            label: "Privacy color",
            value: "text-pillar-privacy → #2563eb",
            color: "bg-pillar-privacy",
          },
          {
            label: "Asset color",
            value: "text-pillar-asset → #16a34a",
            color: "bg-pillar-asset",
          },
          {
            label: "Formation color",
            value: "text-pillar-formation → #d97706",
            color: "bg-pillar-formation",
          },
          {
            label: "Compliance color",
            value: "text-pillar-compliance → #9333ea",
            color: "bg-pillar-compliance",
          },
        ]}
      />
    </div>
  );
}

/* ================================================================
   LINK
   ================================================================ */
export function LinkDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="Variants" code={snippets.link.examples?.["Variants"]}>
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
      </DemoSection>

      <DemoSection title="Interactive States (Default)" stateLabel="Forced">
        <StateGrid
          columns={3}
          states={[
            { label: "Default", children: <Link href="#">Default Link</Link> },
            {
              label: "Hover",
              note: "text-link/80",
              children: (
                <Link href="#" className="text-link/80">
                  Default Link
                </Link>
              ),
            },
            {
              label: "Focus",
              note: "ring-2 ring-secondary",
              children: (
                <Link
                  href="#"
                  className="ring-2 ring-secondary ring-offset-2 ring-offset-surface"
                >
                  Default Link
                </Link>
              ),
            },
          ]}
        />
      </DemoSection>

      <SpecPanel
        title="Link Specifications"
        items={[
          {
            label: "Default color",
            value: "text-link → #2563eb",
            color: "bg-link",
          },
          { label: "Default hover", value: "text-link/80" },
          {
            label: "Default decoration",
            value: "underline underline-offset-2",
          },
          { label: "Subtle hover", value: "underline on hover" },
          { label: "Nav hover", value: "text-link" },
          { label: "Breadcrumb hover", value: "text-foreground" },
          { label: "Focus ring", value: "ring-2 ring-secondary ring-offset-2" },
          { label: "Border radius", value: "rounded-sm" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   DIVIDER
   ================================================================ */
export function DividerDemo() {
  return (
    <div className="space-y-8">
      <DemoSection
        title="Weights & Orientations"
        code={snippets.divider.examples?.["Weights"]}
      >
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
      </DemoSection>

      <SpecPanel
        title="Divider Specifications"
        items={[
          { label: "Color", value: "bg-border → #e2e8f0", color: "bg-border" },
          { label: "Light (horizontal)", value: "h-px" },
          { label: "Medium (horizontal)", value: "h-0.5" },
          { label: "Heavy (horizontal)", value: "h-1" },
          { label: "Light (vertical)", value: "w-px" },
          { label: "Medium (vertical)", value: "w-0.5" },
          { label: "Heavy (vertical)", value: "w-1" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   TOGGLE
   ================================================================ */
export function ToggleDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="space-y-8">
      <DemoSection
        title="Default"
        stateLabel="Interactive"
        code={snippets.toggle.basic}
      >
        <Toggle
          labels={{ on: "Brand", off: "Wireframe" }}
          checked={checked}
          onChange={setChecked}
        />
      </DemoSection>

      <DemoSection title="States" stateLabel="Forced">
        <StateGrid
          columns={4}
          states={[
            {
              label: "Off",
              note: "bg-muted/30",
              children: (
                <Toggle
                  labels={{ on: "On", off: "Off" }}
                  checked={false}
                  onChange={() => {}}
                />
              ),
            },
            {
              label: "On",
              note: "bg-secondary",
              children: (
                <Toggle
                  labels={{ on: "On", off: "Off" }}
                  checked={true}
                  onChange={() => {}}
                />
              ),
            },
            {
              label: "Disabled Off",
              children: (
                <Toggle
                  labels={{ on: "On", off: "Off" }}
                  checked={false}
                  onChange={() => {}}
                  disabled
                />
              ),
            },
            {
              label: "Disabled On",
              children: (
                <Toggle
                  labels={{ on: "On", off: "Off" }}
                  checked={true}
                  onChange={() => {}}
                  disabled
                />
              ),
            },
          ]}
        />
      </DemoSection>

      <SpecPanel
        title="Toggle Specifications"
        items={[
          { label: "Track (off)", value: "bg-muted/30" },
          {
            label: "Track (on)",
            value: "bg-secondary → #2563eb",
            color: "bg-secondary",
          },
          { label: "Thumb", value: "bg-white rounded-full shadow-card" },
          { label: "Size sm", value: "h-5 w-9, thumb h-3.5 w-3.5" },
          { label: "Size md", value: "h-6 w-11, thumb h-4.5 w-4.5" },
          { label: "Size lg", value: "h-7 w-[3.25rem], thumb h-5.5 w-5.5" },
          {
            label: "Focus ring",
            value: "ring-2 ring-secondary ring-offset-2 (focus-within)",
          },
          { label: "Disabled", value: "cursor-not-allowed opacity-50" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   INPUT
   ================================================================ */
export function InputDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="All States" stateLabel="Forced">
        <StateGrid
          columns={5}
          states={[
            {
              label: "Default",
              note: "border-border",
              children: (
                <div className="w-48">
                  <Input label="Name" placeholder="e.g., Acme LLC" />
                </div>
              ),
            },
            {
              label: "Focus",
              note: "ring-2 ring-secondary",
              children: (
                <div className="w-48">
                  <Input
                    label="Name"
                    placeholder="e.g., Acme LLC"
                    className="[&_input]:ring-2 [&_input]:ring-secondary [&_input]:ring-offset-2 [&_input]:ring-offset-surface"
                  />
                </div>
              ),
            },
            {
              label: "Error",
              note: "border-destructive",
              children: (
                <div className="w-48">
                  <Input label="Email" error="Required field" />
                </div>
              ),
            },
            {
              label: "Success",
              note: "border-success",
              children: (
                <div className="w-48">
                  <Input
                    label="Name"
                    placeholder="Acme LLC"
                    state="success"
                    helperText="Name available"
                  />
                </div>
              ),
            },
            {
              label: "Disabled",
              children: (
                <div className="w-48">
                  <Input label="Name" value="Acme LLC" disabled />
                </div>
              ),
            },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="Default & Error"
        code={snippets.input.examples?.["With Helper Text"]}
      >
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
        </div>
      </DemoSection>

      <DemoSection
        title="Disabled"
        code={snippets.input.examples?.["Disabled"]}
      >
        <div className="grid gap-6 sm:grid-cols-2 max-w-content">
          <Input label="Company Name" value="Acme Holdings LLC" disabled />
          <Input label="Email" type="email" value="user@example.com" disabled />
        </div>
      </DemoSection>

      <SpecPanel
        title="Input Specifications"
        items={[
          {
            label: "Default border",
            value: "border-border → #e2e8f0",
            color: "bg-border",
          },
          {
            label: "Error border",
            value: "border-destructive → #dc2626",
            color: "bg-destructive",
          },
          {
            label: "Success border",
            value: "border-success → #16a34a",
            color: "bg-success",
          },
          {
            label: "Focus ring",
            value: "ring-2 ring-secondary ring-offset-2 ring-offset-surface",
          },
          { label: "Error focus", value: "ring-2 ring-destructive" },
          { label: "Success focus", value: "ring-2 ring-success" },
          { label: "Size sm", value: "h-9 px-3 text-body-sm" },
          { label: "Size md", value: "h-11 px-4 text-body" },
          { label: "Size lg", value: "h-14 px-5 text-body-lg" },
          {
            label: "Background",
            value: "bg-surface → #ffffff",
            color: "bg-surface",
          },
          { label: "Border radius", value: "rounded-button" },
          { label: "Placeholder", value: "text-muted/60" },
          { label: "Disabled", value: "cursor-not-allowed opacity-50" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   SELECT
   ================================================================ */
export function SelectDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="All States" stateLabel="Forced">
        <StateGrid
          columns={4}
          states={[
            {
              label: "Default",
              note: "border-border",
              children: (
                <div className="w-48">
                  <Select
                    label="State"
                    options={[
                      { value: "wy", label: "Wyoming" },
                      { value: "nv", label: "Nevada" },
                    ]}
                    placeholder="Select a state"
                  />
                </div>
              ),
            },
            {
              label: "Focus",
              note: "ring-2 ring-secondary",
              children: (
                <div className="w-48">
                  <Select
                    label="State"
                    options={[{ value: "wy", label: "Wyoming" }]}
                    placeholder="Select a state"
                    className="[&_select]:ring-2 [&_select]:ring-secondary [&_select]:ring-offset-2 [&_select]:ring-offset-surface"
                  />
                </div>
              ),
            },
            {
              label: "Error",
              note: "border-destructive",
              children: (
                <div className="w-48">
                  <Select
                    label="State"
                    options={[{ value: "wy", label: "Wyoming" }]}
                    placeholder="Select a state"
                    error="Required field"
                  />
                </div>
              ),
            },
            {
              label: "Disabled",
              children: (
                <div className="w-48">
                  <Select
                    label="State"
                    options={[{ value: "wy", label: "Wyoming" }]}
                    placeholder="Select a state"
                    disabled
                  />
                </div>
              ),
            },
          ]}
        />
      </DemoSection>

      <DemoSection title="Default" code={snippets.select.basic}>
        <div className="max-w-xs">
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
        </div>
      </DemoSection>

      <SpecPanel
        title="Select Specifications"
        items={[
          {
            label: "Default border",
            value: "border-border → #e2e8f0",
            color: "bg-border",
          },
          {
            label: "Error border",
            value: "border-destructive → #dc2626",
            color: "bg-destructive",
          },
          {
            label: "Focus ring",
            value: "ring-2 ring-secondary ring-offset-2 ring-offset-surface",
          },
          { label: "Error focus", value: "ring-2 ring-destructive" },
          { label: "Size md", value: "h-11 px-4 text-body" },
          { label: "Background", value: "bg-surface, appearance-none" },
          { label: "Border radius", value: "rounded-button" },
          { label: "Disabled", value: "cursor-not-allowed opacity-50" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   CHECKBOX
   ================================================================ */
export function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="space-y-8">
      <DemoSection title="All States" stateLabel="Forced">
        <StateGrid
          columns={5}
          states={[
            {
              label: "Unchecked",
              children: (
                <Checkbox
                  label="Accept terms"
                  checked={false}
                  onChange={() => {}}
                />
              ),
            },
            {
              label: "Checked",
              note: "bg-secondary",
              children: (
                <Checkbox
                  label="Accept terms"
                  checked={true}
                  onChange={() => {}}
                />
              ),
            },
            {
              label: "Focus",
              note: "ring-2 ring-secondary",
              children: (
                <div className="[&_input]:focus-visible:[&+span]:ring-2">
                  <Checkbox
                    label="Accept terms"
                    checked={false}
                    onChange={() => {}}
                    className="[&_span:has(svg)]:ring-2 [&_span:has(svg)]:ring-secondary [&_span:has(svg)]:ring-offset-2"
                  />
                </div>
              ),
            },
            {
              label: "Disabled (off)",
              children: (
                <Checkbox
                  label="Accept terms"
                  checked={false}
                  onChange={() => {}}
                  disabled
                />
              ),
            },
            {
              label: "Disabled (on)",
              children: (
                <Checkbox
                  label="Accept terms"
                  checked={true}
                  onChange={() => {}}
                  disabled
                />
              ),
            },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="Default"
        stateLabel="Interactive"
        code={snippets.checkbox.basic}
      >
        <Checkbox
          label="I agree to the Terms of Service"
          description="By checking this box you agree to our terms and privacy policy."
          checked={checked}
          onChange={setChecked}
        />
      </DemoSection>

      <SpecPanel
        title="Checkbox Specifications"
        items={[
          { label: "Unchecked", value: "border-border bg-surface" },
          {
            label: "Checked",
            value: "border-secondary bg-secondary → #2563eb",
            color: "bg-secondary",
          },
          { label: "Check icon", value: "text-white (Lucide Check)" },
          { label: "Box size sm", value: "h-4 w-4" },
          { label: "Box size md", value: "h-5 w-5" },
          { label: "Border", value: "border-2 rounded-[4px]" },
          {
            label: "Focus ring",
            value: "ring-2 ring-secondary ring-offset-2 (peer-focus-visible)",
          },
          { label: "Disabled", value: "cursor-not-allowed opacity-50" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   RADIO GROUP
   ================================================================ */
export function RadioGroupDemo() {
  const [value, setValue] = useState("llc");
  return (
    <div className="space-y-8">
      <DemoSection title="All States" stateLabel="Forced">
        <StateGrid
          columns={3}
          states={[
            {
              label: "Unselected",
              note: "border-border",
              children: (
                <RadioGroup
                  options={[{ value: "a", label: "Option A" }]}
                  value=""
                  onChange={() => {}}
                />
              ),
            },
            {
              label: "Selected",
              note: "border-secondary",
              children: (
                <RadioGroup
                  options={[{ value: "a", label: "Option A" }]}
                  value="a"
                  onChange={() => {}}
                />
              ),
            },
            {
              label: "Disabled",
              children: (
                <RadioGroup
                  options={[
                    { value: "a", label: "Option A" },
                    { value: "b", label: "Option B" },
                  ]}
                  value="a"
                  onChange={() => {}}
                  disabled
                />
              ),
            },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="Default"
        stateLabel="Interactive"
        code={snippets["radio-group"].basic}
      >
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
          value={value}
          onChange={setValue}
        />
      </DemoSection>

      <SpecPanel
        title="RadioGroup Specifications"
        items={[
          { label: "Unselected", value: "border-border (border-2)" },
          {
            label: "Selected border",
            value: "border-secondary → #2563eb",
            color: "bg-secondary",
          },
          { label: "Dot", value: "bg-secondary rounded-full" },
          { label: "Circle size md", value: "h-5 w-5" },
          { label: "Dot size md", value: "h-2.5 w-2.5" },
          {
            label: "Focus ring",
            value: "ring-2 ring-secondary ring-offset-2 (peer-focus-visible)",
          },
          { label: "Disabled", value: "cursor-not-allowed opacity-50" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   TEXTAREA
   ================================================================ */
export function TextareaDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="All States" stateLabel="Forced">
        <StateGrid
          columns={5}
          states={[
            {
              label: "Default",
              note: "border-border",
              children: (
                <div className="w-48">
                  <Textarea label="Notes" placeholder="Type here..." rows={2} />
                </div>
              ),
            },
            {
              label: "Focus",
              note: "ring-2 ring-secondary",
              children: (
                <div className="w-48">
                  <Textarea
                    label="Notes"
                    placeholder="Type here..."
                    rows={2}
                    className="[&_textarea]:ring-2 [&_textarea]:ring-secondary [&_textarea]:ring-offset-2 [&_textarea]:ring-offset-surface"
                  />
                </div>
              ),
            },
            {
              label: "Error",
              note: "border-destructive",
              children: (
                <div className="w-48">
                  <Textarea label="Notes" error="Required" rows={2} />
                </div>
              ),
            },
            {
              label: "Success",
              note: "border-success",
              children: (
                <div className="w-48">
                  <Textarea
                    label="Notes"
                    placeholder="Valid"
                    rows={2}
                    state="success"
                  />
                </div>
              ),
            },
            {
              label: "Disabled",
              children: (
                <div className="w-48">
                  <Textarea label="Notes" value="Read-only" rows={2} disabled />
                </div>
              ),
            },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="Default with Character Limit"
        code={snippets.textarea.examples?.["With Character Limit"]}
      >
        <div className="max-w-md">
          <Textarea
            label="Business Description"
            placeholder="Describe your business..."
            maxLength={500}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Error State"
        code={snippets.textarea.examples?.["Error"]}
      >
        <div className="max-w-md">
          <Textarea
            label="Business Description"
            error="Description is required"
          />
        </div>
      </DemoSection>

      <SpecPanel
        title="Textarea Specifications"
        items={[
          {
            label: "Default border",
            value: "border-border → #e2e8f0",
            color: "bg-border",
          },
          {
            label: "Error border",
            value: "border-destructive → #dc2626",
            color: "bg-destructive",
          },
          {
            label: "Success border",
            value: "border-success → #16a34a",
            color: "bg-success",
          },
          {
            label: "Focus ring",
            value: "ring-2 ring-secondary ring-offset-2 ring-offset-surface",
          },
          { label: "Size md", value: "px-4 py-3 text-body" },
          { label: "Resize", value: "resize-y" },
          { label: "Background", value: "bg-surface" },
          { label: "Disabled", value: "cursor-not-allowed opacity-50" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   TOOLTIP
   ================================================================ */
export function TooltipDemo() {
  return (
    <div className="space-y-8">
      <DemoSection
        title="Positions"
        code={snippets.tooltip.examples?.["Positions"]}
      >
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
            content="Left tooltip"
            trigger={<Button variant="secondary">Left</Button>}
            position="left"
          />
          <Tooltip
            content="Right tooltip"
            trigger={<Button variant="secondary">Right</Button>}
            position="right"
          />
        </div>
      </DemoSection>
      <DemoSection
        title="Medium Size"
        code={snippets.tooltip.examples?.["Medium Size"]}
      >
        <Tooltip
          content="A longer tooltip explaining what nominee officer service means in detail for privacy protection."
          trigger={<Badge variant="info">Info Badge</Badge>}
          size="md"
        />
      </DemoSection>

      <SpecPanel
        title="Tooltip Specifications"
        items={[
          {
            label: "Background",
            value: "bg-foreground → #0f172a",
            color: "bg-foreground",
          },
          { label: "Text", value: "text-surface → #ffffff" },
          { label: "Border radius", value: "rounded-card" },
          {
            label: "Size sm",
            value: "px-3 py-1.5 text-caption whitespace-nowrap",
          },
          { label: "Size md", value: "px-4 py-2.5 text-body-sm max-w-sm" },
          { label: "Size lg", value: "px-5 py-3 text-body-sm max-w-md" },
          {
            label: "Arrow",
            value:
              "border-[5px] border-transparent, directional border-foreground",
          },
          { label: "Animation", value: "animate-fade-in" },
          { label: "Default delay", value: "150ms" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   ALERT
   ================================================================ */
export function AlertDemo() {
  return (
    <div className="space-y-8">
      <DemoSection
        title="Variants"
        code={snippets.alert.examples?.["Variants"]}
      >
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
          />
          <Alert
            variant="success"
            title="Success"
            description="Your LLC has been successfully formed!"
          />
        </div>
      </DemoSection>
      <DemoSection
        title="Dismissible"
        stateLabel="Interactive"
        code={snippets.alert.examples?.["Dismissible"]}
      >
        <div className="max-w-content">
          <Alert
            variant="error"
            title="Error"
            description="Payment method declined. Please try another card."
            dismissible
          />
        </div>
      </DemoSection>

      <SpecPanel
        title="Alert Specifications"
        items={[
          {
            label: "Info",
            value: "border-secondary/30 bg-secondary/5, icon text-secondary",
            color: "bg-secondary",
          },
          {
            label: "Warning",
            value: "border-warning/30 bg-warning/5, icon text-warning",
            color: "bg-warning",
          },
          {
            label: "Error",
            value:
              "border-destructive/30 bg-destructive/5, icon text-destructive",
            color: "bg-destructive",
          },
          {
            label: "Success",
            value: "border-success/30 bg-success/5, icon text-success",
            color: "bg-success",
          },
          { label: "Border radius", value: "rounded-card" },
          { label: "Padding", value: "px-4 py-3" },
          { label: "Text", value: "text-body-sm text-foreground" },
          {
            label: "Dismiss button",
            value: "hover:bg-foreground/5 focus-visible:ring-2",
          },
        ]}
      />
    </div>
  );
}

/* ================================================================
   SKELETON
   ================================================================ */
export function SkeletonDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="Shapes" code={snippets.skeleton.examples?.["Shapes"]}>
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
      </DemoSection>

      <SpecPanel
        title="Skeleton Specifications"
        items={[
          { label: "Animation", value: "animate-pulse" },
          { label: "Background", value: "bg-muted/20" },
          { label: "Text", value: "h-4 w-full rounded-button" },
          { label: "Heading", value: "h-8 w-3/4 rounded-button" },
          { label: "Image", value: "w-full aspect-video rounded-card" },
          { label: "Avatar", value: "rounded-full (40×40 default)" },
          { label: "Card", value: "w-full rounded-card (h-48 default)" },
        ]}
      />
    </div>
  );
}

/* ================================================================
   EYEBROW
   ================================================================ */
export function EyebrowDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="Sizes">
        <div className="space-y-4">
          <Eyebrow size="md">Default (md) — text-body-sm</Eyebrow>
          <Eyebrow size="sm">Small (sm) — text-caption</Eyebrow>
        </div>
      </DemoSection>

      <DemoSection title="Tones">
        <div className="space-y-3">
          <Eyebrow tone="secondary">Secondary (default)</Eyebrow>
          <Eyebrow tone="accent">Accent</Eyebrow>
          <Eyebrow tone="muted">Muted</Eyebrow>
          <Eyebrow tone="success">Success</Eyebrow>
        </div>
      </DemoSection>

      <DemoSection title="On dark surface">
        <div className="space-y-3 bg-primary p-6 rounded-card">
          <Eyebrow tone="onDark">On Dark (default)</Eyebrow>
          <Eyebrow tone="onDarkStrong">On Dark Strong</Eyebrow>
        </div>
      </DemoSection>

      <DemoSection title="Inherit tone — for pillar colors via className">
        <div className="space-y-3">
          <Eyebrow tone="inherit" className="text-pillar-privacy">
            Business Privacy
          </Eyebrow>
          <Eyebrow tone="inherit" className="text-pillar-asset">
            Asset Protection
          </Eyebrow>
          <Eyebrow tone="inherit" className="text-pillar-formation">
            Company Formation
          </Eyebrow>
          <Eyebrow tone="inherit" className="text-pillar-compliance">
            Compliance
          </Eyebrow>
        </div>
      </DemoSection>

      <SpecPanel
        title="Eyebrow Specifications"
        items={[
          { label: "Base", value: "font-semibold uppercase tracking-[0.15em]" },
          { label: "Size md", value: "text-body-sm (0.875rem)" },
          { label: "Size sm", value: "text-caption (0.75rem)" },
          {
            label: "Tones",
            value:
              "secondary, accent, muted, success, onDark, onDarkStrong, inherit",
          },
          { label: "Element", value: "<p>" },
        ]}
      />
    </div>
  );
}
