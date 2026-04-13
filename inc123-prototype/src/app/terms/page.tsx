import { CTABlock } from "@/design-system/components/CTABlock";
import { Alert } from "@/design-system/primitives/Alert";

export default function TermsPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-primary py-section-y text-white">
        <div className="mx-auto max-w-content px-container-x">
          <h1 className="font-display text-display font-bold">
            Terms of Service
          </h1>
          <p className="mt-2 text-lg text-white/80">
            The terms and conditions governing your use of Incorporate123
            services.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <div className="mx-auto max-w-3xl">
            {/* Prototype banner */}
            <Alert
              variant="warning"
              title="Prototype Notice"
              description="Final legal content will be reviewed by legal counsel before launch."
            />

            <p className="mt-8 text-muted">Effective Date: January 1, 2025</p>

            <p className="mt-4 text-body leading-relaxed">
              Welcome to Incorporate123. By accessing our website or using our
              business formation and compliance services, you agree to be bound
              by the following Terms of Service. Please read them carefully
              before placing an order or using any of our services.
            </p>

            {/* 1. Acceptance of Terms */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p className="mt-4 leading-relaxed">
                By accessing or using the Incorporate123 website and services,
                you acknowledge that you have read, understood, and agree to be
                bound by these Terms of Service and our Privacy Policy. If you
                do not agree, you must discontinue use of our website and
                services immediately.
              </p>
              <p className="mt-4 leading-relaxed">
                We reserve the right to update these Terms at any time. Changes
                will be posted on this page with an updated effective date.
                Continued use of our services after changes constitutes
                acceptance of the revised Terms.
              </p>
            </section>

            {/* 2. Services Description */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                2. Services Description
              </h2>
              <p className="mt-4 leading-relaxed">
                Incorporate123 provides business formation, registered agent,
                privacy, asset protection, and compliance services. Our services
                include but are not limited to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  LLC and corporation formation in Wyoming, Nevada, California,
                  Florida, and other states
                </li>
                <li>Registered agent services and mail forwarding</li>
                <li>
                  Privacy-focused business structures including nominee services
                </li>
                <li>Annual report filing and compliance monitoring</li>
                <li>EIN (Employer Identification Number) procurement</li>
                <li>Operating agreement and corporate document preparation</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Incorporate123 is not a law firm and does not provide legal
                advice. Our services are document filing and business formation
                services. We recommend consulting with a qualified attorney for
                legal matters specific to your situation.
              </p>
            </section>

            {/* 3. Pricing & Payment */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                3. Pricing &amp; Payment
              </h2>
              <p className="mt-4 leading-relaxed">
                All prices listed on our website are in U.S. dollars. State
                filing fees are included in our package pricing unless otherwise
                noted. Payment is required at the time of order and may be made
                via credit card, debit card, or PayPal.
              </p>
              <p className="mt-4 leading-relaxed">
                Registered agent services and compliance monitoring are billed
                annually. You will receive a renewal notice at least 30 days
                before your renewal date. Failure to renew registered agent
                services may result in loss of good standing with the state.
              </p>
              <p className="mt-4 leading-relaxed">
                We reserve the right to adjust pricing at any time. Price
                changes will not affect orders that have already been placed and
                paid for.
              </p>
            </section>

            {/* 4. Refund Policy */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                4. Refund Policy
              </h2>
              <p className="mt-4 leading-relaxed">
                We offer a full refund if your order has not yet been submitted
                to the state for processing. Once documents have been filed with
                the state, state filing fees are non-refundable. Our service
                fees may be partially refunded on a case-by-case basis if
                processing has begun but not yet been completed.
              </p>
              <p className="mt-4 leading-relaxed">
                Registered agent fees are non-refundable after the service
                period has begun. To request a refund, please contact our
                support team within 30 days of your purchase.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                5. Limitation of Liability
              </h2>
              <p className="mt-4 leading-relaxed">
                To the maximum extent permitted by law, Incorporate123, its
                owners, employees, and affiliates shall not be liable for any
                indirect, incidental, special, consequential, or punitive
                damages arising from your use of our services, including but not
                limited to loss of profits, data, or business opportunities.
              </p>
              <p className="mt-4 leading-relaxed">
                Our total liability for any claim arising from these Terms or
                our services shall not exceed the total amount you paid to
                Incorporate123 in the twelve (12) months preceding the claim.
              </p>
              <p className="mt-4 leading-relaxed">
                We are not responsible for delays caused by state agencies, the
                accuracy of information you provide, or any consequences
                resulting from your business decisions.
              </p>
            </section>

            {/* 6. Intellectual Property */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                6. Intellectual Property
              </h2>
              <p className="mt-4 leading-relaxed">
                All content on the Incorporate123 website, including text,
                graphics, logos, icons, images, and software, is the property of
                Incorporate123 and is protected by U.S. and international
                copyright, trademark, and intellectual property laws.
              </p>
              <p className="mt-4 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative
                works from, or publicly display any content from our website
                without our prior written consent. Limited personal,
                non-commercial use of our educational content is permitted with
                proper attribution.
              </p>
            </section>

            {/* 7. Governing Law */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                7. Governing Law
              </h2>
              <p className="mt-4 leading-relaxed">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the State of Nevada, without regard
                to its conflict of law provisions. Any disputes arising under
                these Terms shall be resolved exclusively in the state or
                federal courts located in Washoe County, Nevada.
              </p>
            </section>

            {/* 8. Contact Information */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                8. Contact Information
              </h2>
              <p className="mt-4 leading-relaxed">
                If you have questions about these Terms of Service, please
                contact us:
              </p>
              <address className="mt-4 not-italic leading-relaxed text-foreground">
                <strong>Incorporate123</strong>
                <br />
                1795 Meadow Wood Lane, Suite 100
                <br />
                Reno, NV 89502
                <br />
                Phone:{" "}
                <a
                  href="tel:+18005530615"
                  className="text-secondary hover:underline"
                >
                  1-800-553-0615
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:info@incorporate123.com"
                  className="text-secondary hover:underline"
                >
                  info@incorporate123.com
                </a>
              </address>
            </section>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <CTABlock
            variant="dark"
            heading="Ready to Form Your Business?"
            description="All-inclusive packages with no hidden fees. 25 years of formation expertise."
            primaryCTA={{
              label: "View Packages & Pricing",
              href: "/wyoming-gold",
            }}
            secondaryCTA={{
              label: "Contact Us",
              href: "/contact",
            }}
            trustSignal="1-800-553-0615 — Call anytime"
          />
        </div>
      </section>
    </div>
  );
}
