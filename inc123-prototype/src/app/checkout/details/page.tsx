import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { CheckoutLayout } from "@/design-system/layouts/CheckoutLayout";
import { FormSection } from "@/design-system/components/FormSection";
import { OrderSummary } from "@/design-system/components/OrderSummary";
import { Button } from "@/design-system/primitives/Button";
import { Input } from "@/design-system/primitives/Input";
import { Textarea } from "@/design-system/primitives/Textarea";
import { getTierBySlug } from "@/data/packages";
import { useCheckout, getCheckoutPrice } from "../CheckoutContext";

export default function CheckoutDetailsPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useCheckout();

  // Look up selected tier definition
  const selectedTierDef = useMemo(
    () => getTierBySlug(state.selectedTier),
    [state.selectedTier],
  );

  // Pricing via tier-first helpers
  const pricing = getCheckoutPrice(state);
  const basePrice = pricing?.formation ?? 0;

  // Get add-ons from the tier definition
  const availableAddOns = selectedTierDef?.addOns ?? [];

  const addOnTotal = state.selectedAddOns.reduce((sum, id) => {
    const addOn = availableAddOns.find((a) => a.id === id);
    return sum + (addOn?.price ?? 0);
  }, 0);

  const total = basePrice + addOnTotal;

  const selectedAddOnDetails = state.selectedAddOns
    .map((id) => availableAddOns.find((a) => a.id === id))
    .filter(Boolean)
    .map((a) => ({ name: a!.name, price: a!.price }));

  // Form update helper
  const updateDetail = (field: string, value: string) => {
    dispatch({
      type: "SET_COMPANY_DETAILS",
      details: { [field]: value },
    });
  };

  // Validation
  const canContinue =
    state.companyDetails.name1.trim() !== "" &&
    state.companyDetails.contactName.trim() !== "" &&
    state.companyDetails.contactEmail.trim() !== "" &&
    state.companyDetails.contactPhone.trim() !== "";

  const handleContinue = () => {
    if (canContinue) {
      dispatch({ type: "SET_STEP", step: 3 });
      navigate("/checkout/payment");
    }
  };

  const handleBack = () => {
    dispatch({ type: "SET_STEP", step: 1 });
    navigate("/checkout/configure");
  };

  const entityLabel = state.entityType === "llc" ? "LLC" : "Corp";

  const sidebar = selectedTierDef ? (
    <OrderSummary
      package={{
        name: `${state.selectedState} ${selectedTierDef.name} ${entityLabel}`,
        tier: selectedTierDef.tier,
        price: basePrice,
      }}
      entityType={state.entityType === "llc" ? "LLC" : "Corporation"}
      addOns={selectedAddOnDetails}
      subtotal={basePrice}
      total={total}
    />
  ) : null;

  return (
    <CheckoutLayout currentStep={2} sidebar={sidebar}>
      {/* Page header */}
      <div className="mb-8">
        <p className="text-body-sm font-medium text-secondary mb-1">
          Step 2 of 4
        </p>
        <h1 className="text-heading-lg font-display font-bold text-foreground">
          Your Entity Details
        </h1>
        <p className="mt-2 text-body text-muted">
          We use this information to prepare and file your formation documents.
        </p>
      </div>

      {/* Company Name */}
      <FormSection
        title="Company Name"
        description="We check name availability with the Secretary of State. If your first choice is taken, we'll use your backup names in order."
      >
        <Input
          label="Company Name (1st Choice)"
          placeholder="e.g., Acme Holdings LLC"
          value={state.companyDetails.name1}
          onChange={(e) => updateDetail("name1", e.target.value)}
          required
        />
        <Input
          label="Company Name (2nd Choice)"
          placeholder="Backup name if first choice is taken"
          value={state.companyDetails.name2}
          onChange={(e) => updateDetail("name2", e.target.value)}
          helperText="Optional — recommended in case your first choice is unavailable"
        />
        <Input
          label="Company Name (3rd Choice)"
          placeholder="Second backup name"
          value={state.companyDetails.name3}
          onChange={(e) => updateDetail("name3", e.target.value)}
        />
      </FormSection>

      {/* Business Purpose */}
      <FormSection
        title="Business Purpose"
        description="Brief description of your business activity."
      >
        <Textarea
          label="Business Purpose"
          placeholder="Leave blank for 'any lawful purpose'"
          rows={2}
          value={state.companyDetails.purpose}
          onChange={(e) => updateDetail("purpose", e.target.value)}
          helperText="Optional — if left blank, we'll use the standard 'any lawful purpose' language"
        />
      </FormSection>

      {/* Members / Officers */}
      <FormSection
        title={
          state.entityType === "llc"
            ? "Members / Managers"
            : "Officers / Directors"
        }
        description={
          state.entityType === "llc"
            ? "Provide the initial member(s) of your LLC."
            : "Provide the initial officer(s) and director(s) of your corporation."
        }
      >
        <Textarea
          label={
            state.entityType === "llc"
              ? "Member Information"
              : "Officer Information"
          }
          placeholder={
            state.entityType === "llc"
              ? "Full name, address, and ownership percentage for each member"
              : "Full name, title (President, Secretary, Treasurer, Director), and address for each officer"
          }
          rows={4}
          value={state.companyDetails.members}
          onChange={(e) => updateDetail("members", e.target.value)}
          required
        />

        {/* Privacy note for Gold packages */}
        {selectedTierDef?.tier === "gold" && (
          <div className="flex gap-3 rounded-card border border-secondary/20 bg-secondary/5 p-4">
            <Info className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
            <div className="text-body text-foreground">
              <p className="font-medium mb-1">Your Privacy Is Protected</p>
              <p className="text-muted">
                A year-round nominee officer will appear on all public state
                filings. The information you enter here is kept strictly
                confidential — used only for internal records and IRS filings.
              </p>
            </div>
          </div>
        )}
      </FormSection>

      {/* Registered Agent (informational) */}
      <FormSection
        title="Registered Agent"
        description="Your registered agent service is included in your package."
      >
        <div className="rounded-card border border-border bg-muted/5 p-4">
          <p className="text-body font-medium text-foreground">
            Incorporate123
          </p>
          <p className="mt-1 text-body-sm text-muted">
            Nevada-based registered agent service
          </p>
          <p className="mt-2 text-caption text-muted">
            Registered agent service is included in your package. You don't need
            to provide anything here.
          </p>
        </div>
      </FormSection>

      {/* Contact Information */}
      <FormSection
        title="Contact Information"
        description="How we'll reach you about your formation order."
      >
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={state.companyDetails.contactName}
          onChange={(e) => updateDetail("contactName", e.target.value)}
          required
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            value={state.companyDetails.contactEmail}
            onChange={(e) => updateDetail("contactEmail", e.target.value)}
            required
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={state.companyDetails.contactPhone}
            onChange={(e) => updateDetail("contactPhone", e.target.value)}
            required
          />
        </div>
      </FormSection>

      {/* Special Instructions */}
      <FormSection
        title="Special Instructions"
        description="Anything else we should know about your formation?"
      >
        <Textarea
          label="Additional Notes"
          placeholder="Any special requests or additional information..."
          rows={3}
          value={state.companyDetails.specialInstructions}
          onChange={(e) => updateDetail("specialInstructions", e.target.value)}
          helperText="Optional"
        />
      </FormSection>

      {/* Navigation */}
      <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          variant="ghost"
          size="md"
          icon={<ArrowLeft className="h-4 w-4" />}
          onClick={handleBack}
        >
          Back to Configuration
        </Button>

        <Button
          variant="cta"
          size="lg"
          icon={<ArrowRight className="h-4 w-4" />}
          iconPosition="right"
          disabled={!canContinue}
          onClick={handleContinue}
        >
          Continue to Payment
        </Button>
      </div>
    </CheckoutLayout>
  );
}
