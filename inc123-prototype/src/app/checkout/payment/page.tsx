import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Lock,
  Shield,
  RefreshCcw,
  Phone,
  Bitcoin,
} from "lucide-react";
import { CheckoutLayout } from "@/design-system/layouts/CheckoutLayout";
import { FormSection } from "@/design-system/components/FormSection";
import { MockStripeInput } from "@/design-system/components/MockStripeInput";
import { OrderSummary } from "@/design-system/components/OrderSummary";
import { PaymentMethodSelector } from "@/design-system/components/PaymentMethodSelector";
import { Button } from "@/design-system/primitives/Button";
import { Checkbox } from "@/design-system/primitives/Checkbox";
import { Input } from "@/design-system/primitives/Input";
import { Select } from "@/design-system/primitives/Select";
import { getTierBySlug } from "@/data/packages";
import { US_STATES, PAYMENT_METHODS } from "@/data/checkout";
import { useCheckout, getCheckoutPrice } from "../CheckoutContext";

/* ------------------------------------------------
   Helpers
   ------------------------------------------------ */
function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/* ------------------------------------------------
   Page Component
   ------------------------------------------------ */
export default function CheckoutPaymentPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useCheckout();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

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

  // Billing address update helper
  const updateBilling = (field: string, value: string) => {
    dispatch({
      type: "SET_BILLING_ADDRESS",
      address: { [field]: value },
    });
  };

  const canSubmit = termsAccepted && state.billingAddress.street.trim() !== "";

  const handlePlaceOrder = () => {
    if (!canSubmit) return;
    setIsProcessing(true);
    // Simulate processing delay for prototype
    setTimeout(() => {
      dispatch({ type: "SET_STEP", step: 4 });
      navigate("/checkout/confirmation");
    }, 1500);
  };

  const handleBack = () => {
    dispatch({ type: "SET_STEP", step: 2 });
    navigate("/checkout/details");
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
    <CheckoutLayout currentStep={3} sidebar={sidebar}>
      {/* Page header */}
      <div className="mb-8">
        <p className="text-body-sm font-medium text-secondary mb-1">
          Step 3 of 4
        </p>
        <h1 className="text-heading-lg font-display font-bold text-foreground">
          Secure Payment
        </h1>
        <p className="mt-2 text-body text-muted">
          Your payment is encrypted and processed securely through Stripe.
        </p>
      </div>

      {/* Billing Address */}
      <FormSection title="Billing Address">
        <Input
          label="Street Address"
          placeholder="123 Main Street"
          value={state.billingAddress.street}
          onChange={(e) => updateBilling("street", e.target.value)}
          required
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <Input
            label="City"
            placeholder="Reno"
            value={state.billingAddress.city}
            onChange={(e) => updateBilling("city", e.target.value)}
            required
          />
          <Select
            label="State"
            placeholder="Select state"
            options={US_STATES}
            value={state.billingAddress.state}
            onChange={(e) => updateBilling("state", e.target.value)}
            required
          />
          <Input
            label="ZIP Code"
            placeholder="89501"
            value={state.billingAddress.zip}
            onChange={(e) =>
              updateBilling(
                "zip",
                e.target.value.replace(/\D/g, "").slice(0, 5),
              )
            }
            required
          />
        </div>
      </FormSection>

      {/* Payment Method */}
      <FormSection
        title="Payment Method"
        description="Choose how you'd like to pay."
      >
        <PaymentMethodSelector
          methods={PAYMENT_METHODS}
          activeMethod={state.paymentMethod}
          onChange={(methodId) =>
            dispatch({
              type: "SET_PAYMENT_METHOD",
              method: methodId as "credit-card" | "paypal" | "crypto",
            })
          }
        >
          {/* Credit Card form */}
          {state.paymentMethod === "credit-card" && <MockStripeInput />}

          {/* PayPal placeholder */}
          {state.paymentMethod === "paypal" && (
            <div className="rounded-card border border-border bg-muted/5 p-8 text-center">
              <div className="mb-4">
                <span className="text-heading font-display font-bold text-[#003087]">
                  Pay
                </span>
                <span className="text-heading font-display font-bold text-[#009CDE]">
                  Pal
                </span>
              </div>
              <p className="text-body text-muted mb-6">
                You&apos;ll be redirected to PayPal to complete your payment.
              </p>
              <Button
                variant="primary"
                size="lg"
                className="bg-[#FFC439] text-[#003087] hover:bg-[#F0B72A]"
              >
                Pay with PayPal
              </Button>
            </div>
          )}

          {/* Crypto placeholder */}
          {state.paymentMethod === "crypto" && (
            <div className="rounded-card border border-border bg-muted/5 p-8">
              <p className="text-body text-foreground mb-4">
                Select your cryptocurrency and we&apos;ll provide a wallet
                address for payment.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Bitcoin", "Ethereum", "XRP", "Litecoin", "Monero"].map(
                  (crypto) => (
                    <button
                      key={crypto}
                      type="button"
                      className="flex items-center gap-2 rounded-pill border border-border px-4 py-2 text-body-sm font-medium text-foreground hover:border-secondary/50 hover:bg-secondary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                    >
                      <Bitcoin className="h-4 w-4" />
                      {crypto}
                    </button>
                  ),
                )}
              </div>
              <p className="text-body text-muted">
                After placing your order, you&apos;ll receive a wallet address
                and payment instructions by email. Formation begins upon payment
                confirmation.
              </p>
            </div>
          )}
        </PaymentMethodSelector>
      </FormSection>

      {/* Trust Signals */}
      <div className="rounded-card border border-border bg-surface p-5">
        <div className="flex flex-wrap items-center justify-center gap-6 text-body-sm text-muted">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-success" />
            <span>256-bit SSL Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-success" />
            <span>PCI Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCcw className="h-4 w-4 text-success" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-secondary" />
            <span>1-800-553-0615</span>
          </div>
        </div>
      </div>

      {/* Terms and Submit */}
      <div className="mt-8 space-y-6">
        {/* Terms checkbox */}
        <Checkbox
          label="I agree to the Terms of Service and Privacy Policy. Your information is encrypted and your privacy is our priority."
          description="By placing your order, you agree to our terms and authorize the charge shown above."
          checked={termsAccepted}
          onChange={setTermsAccepted}
        />

        {/* Security note */}
        <p className="text-caption text-muted text-center">
          Your card information is processed securely by Stripe and is never
          stored on our servers.
        </p>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          variant="ghost"
          size="md"
          icon={<ArrowLeft className="h-4 w-4" />}
          onClick={handleBack}
        >
          Back to Entity Details
        </Button>

        <Button
          variant="cta"
          size="lg"
          icon={<Lock className="h-4 w-4" />}
          disabled={!canSubmit || isProcessing}
          loading={isProcessing}
          onClick={handlePlaceOrder}
        >
          {isProcessing ? "Processing..." : `Place Order — ${formatUSD(total)}`}
        </Button>
      </div>
    </CheckoutLayout>
  );
}
