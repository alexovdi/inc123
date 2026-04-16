import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { Icon } from "@/design-system/primitives/Icon";
import { Alert } from "@/design-system/primitives/Alert";

const SECTIONS = [
  { id: "fbar", label: "FBAR (FinCEN 114)" },
  { id: "form-5471", label: "Form 5471 / 8865" },
  { id: "gilti", label: "GILTI" },
  { id: "fatca", label: "FATCA" },
  { id: "when-to-consult", label: "When to Consult a CPA" },
];

function Schema() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://incorporate123.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Offshore",
        item: "https://incorporate123.com/offshore",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "IRS Compliance",
        item: "https://incorporate123.com/offshore/irs-compliance",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
    />
  );
}

export default function IrsCompliancePage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "IRS Compliance for Offshore Entities | Incorporate123";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main>
      <Schema />

      {/* Hero */}
      <section
        className="py-section-y px-container-x text-white"
        style={{ backgroundColor: "#1a1a2e" }}
      >
        <div className="mx-auto max-w-content">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Offshore", href: "/offshore" },
              {
                label: "IRS Compliance",
                href: "/offshore/irs-compliance",
              },
            ]}
            className="mb-6 [&_a]:text-white/70 [&_a:hover]:text-white [&_span[aria-current]]:text-white"
          />
          <p className="mb-3 text-body-sm font-semibold uppercase tracking-wider text-white/70">
            U.S. Tax Obligations
          </p>
          <h1 className="font-display text-display font-bold">
            IRS Compliance for Offshore Entities
          </h1>
          <p className="mt-4 max-w-3xl text-heading-sm text-white/80">
            Honest, specific disclosure of reporting requirements for U.S.
            persons with international structures.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <div className="mx-auto max-w-3xl">
            <Alert
              variant="warning"
              title="This page is informational, not legal or tax advice"
              description="Incorporate123 is not a law firm, accounting firm, or tax advisory practice. The information below is a general overview of U.S. reporting obligations for offshore entity owners. Consult a qualified CPA or international tax attorney for guidance on your specific situation."
            />

            {/* TOC */}
            <nav
              aria-label="Table of contents"
              className="mt-10 rounded-lg border border-border bg-surface p-6"
            >
              <h2 className="font-display text-heading-sm font-semibold text-foreground">
                Contents
              </h2>
              <ol className="mt-4 grid gap-2 text-body-sm sm:grid-cols-2">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-secondary hover:underline"
                    >
                      {i + 1}. {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <p className="mt-10 text-body leading-relaxed">
              U.S. citizens, residents, and green card holders (collectively
              referred to as &ldquo;U.S. persons&rdquo;) who own or control
              offshore entities have several reporting obligations to the IRS
              and FinCEN. These obligations are independent of whether the
              offshore entity has U.S. operations, generates U.S. income, or
              makes any distributions. Failing to comply can result in
              significant civil and criminal penalties.
            </p>

            <section id="fbar" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                1. FBAR (FinCEN 114)
              </h2>
              <p className="mt-4 leading-relaxed">
                The Report of Foreign Bank and Financial Accounts (FBAR) is
                filed with the Financial Crimes Enforcement Network (FinCEN),
                not the IRS directly. It is filed on FinCEN Form 114.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Threshold:</strong> U.S. persons with financial
                  interest in or signature authority over foreign financial
                  accounts whose aggregate value exceeds $10,000 at any point
                  during the calendar year.
                </li>
                <li>
                  <strong>Filing deadline:</strong> April 15 with an automatic
                  extension to October 15 (no request required).
                </li>
                <li>
                  <strong>Penalties:</strong> Non-willful violations can incur
                  penalties up to $10,000 per violation. Willful violations can
                  result in penalties up to the greater of $100,000 or 50% of
                  the account balance, plus potential criminal prosecution.
                </li>
              </ul>
            </section>

            <section id="form-5471" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                2. Form 5471 / Form 8865
              </h2>
              <p className="mt-4 leading-relaxed">
                Form 5471 is filed by U.S. persons who are officers, directors,
                or shareholders of certain foreign corporations. Form 8865 is
                the equivalent for foreign partnerships and foreign LLCs taxed
                as partnerships.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Who must file:</strong> Generally, U.S. persons who
                  own 10% or more of a foreign corporation or partnership, with
                  several categories of filers depending on ownership percentage
                  and control.
                </li>
                <li>
                  <strong>What&rsquo;s reported:</strong> Balance sheet, income
                  statement, transactions between the U.S. person and the
                  foreign entity, and detailed ownership structure.
                </li>
                <li>
                  <strong>Filing deadline:</strong> Attached to the U.S.
                  person&rsquo;s annual income tax return (Form 1040 or 1120).
                </li>
                <li>
                  <strong>Penalties:</strong> $10,000 per form for each annual
                  accounting period, with additional penalties for continued
                  failure after IRS notification.
                </li>
              </ul>
            </section>

            <section id="gilti" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                3. GILTI (Global Intangible Low-Taxed Income)
              </h2>
              <p className="mt-4 leading-relaxed">
                GILTI was introduced by the Tax Cuts and Jobs Act of 2017 and
                has significantly changed the tax landscape for offshore
                structures. It requires U.S. shareholders of Controlled Foreign
                Corporations (CFCs) to currently include in income their share
                of the corporation&rsquo;s income that exceeds a routine return
                on tangible assets, even if no distributions are made.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Who is affected:</strong> U.S. shareholders who own
                  10% or more of a CFC (a foreign corporation where U.S.
                  shareholders own more than 50% of the vote or value).
                </li>
                <li>
                  <strong>Tax mechanism:</strong> Individual U.S. shareholders
                  may face higher effective tax rates on GILTI income than
                  corporate shareholders, who benefit from a 50% deduction.
                </li>
                <li>
                  <strong>Practical impact:</strong> GILTI has reduced the tax
                  deferral benefits that previously made offshore corporations
                  attractive for many U.S. persons. Structures are still valid
                  for asset protection and jurisdictional separation, but the
                  tax advantages have narrowed.
                </li>
              </ul>
            </section>

            <section id="fatca" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                4. FATCA (Foreign Account Tax Compliance Act)
              </h2>
              <p className="mt-4 leading-relaxed">
                FATCA requires foreign financial institutions (FFIs) to report
                accounts held by U.S. persons to the IRS. It also requires
                certain U.S. taxpayers to report specified foreign financial
                assets to the IRS on Form 8938, attached to their annual tax
                return.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Automatic reporting:</strong> Most international banks
                  report U.S.-owned accounts to the IRS automatically under
                  FATCA. Offshore accounts are not hidden from the U.S.
                  government.
                </li>
                <li>
                  <strong>Form 8938 thresholds:</strong> Filing thresholds vary
                  by filing status and whether the taxpayer lives in the U.S. or
                  abroad. Generally, U.S. residents filing singly must report
                  foreign financial assets exceeding $50,000 at year-end or
                  $75,000 at any time during the year.
                </li>
                <li>
                  <strong>Relationship to FBAR:</strong> FATCA Form 8938 is
                  filed in addition to (not instead of) FBAR. The two forms have
                  overlapping but distinct reporting requirements.
                </li>
              </ul>
            </section>

            <section id="when-to-consult" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                5. When to Consult a CPA
              </h2>
              <p className="mt-4 leading-relaxed">
                You should consult a qualified CPA or international tax attorney
                before forming any offshore entity if any of the following
                apply:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>You are a U.S. citizen, resident, or green card holder</li>
                <li>You plan to own 10% or more of the offshore entity</li>
                <li>
                  The offshore entity will hold bank accounts, investments, or
                  other financial assets
                </li>
                <li>
                  You intend to conduct business or earn income through the
                  offshore entity
                </li>
                <li>
                  You are unsure whether your situation triggers any of the
                  reporting obligations described above
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Incorporate123 forms entities. Your CPA handles the tax
                treatment. The best outcomes happen when both work in
                coordination from the start.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section
        className="py-section-y px-container-x text-white"
        style={{ backgroundColor: "#1a1a2e" }}
      >
        <div className="mx-auto max-w-content text-center">
          <h2 className="mx-auto max-w-3xl font-display text-heading-lg font-bold">
            Ready to Discuss Your Offshore Structure?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-white/80">
            Consult your CPA about tax treatment. Contact us about formation.
            We&rsquo;ll coordinate with your tax advisor to ensure the structure
            we build fits your overall plan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Schedule a Consultation
              <Icon name="ArrowRight" size="sm" />
            </Link>
            <Link
              to="/offshore"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 bg-transparent px-6 py-3 font-semibold text-white/90 transition-colors hover:border-white/80 hover:text-white"
            >
              Back to Offshore Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
