"use client";

import { useState } from "react";
import { packages } from "@/data/packages";
import {
  CTABlock,
  PackagePreviewCard,
  EntityTypeToggle,
} from "@/design-system/components";
import type { EntityType } from "@/lib/types";

const entityOptions = [
  { value: "llc", label: "LLC" },
  { value: "corp", label: "Corporation" },
];

/** Shared feature names for the comparison table, in display order */
const comparisonFeatures = [
  "State Filing Fees Included",
  "Registered Agent (1 Year)",
  "Year-Round Nominee Directors",
  "Year-Round Nominee Officers",
  "Offshore Record Storage",
  "Corporate Minutes Maintenance",
  "Annual Report Filing",
  "Certificate of Good Standing",
  "Custom Operating Agreement",
];

export default function ComparePackagesPage() {
  const [entityType, setEntityType] = useState<EntityType>("llc");

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-primary text-white py-section-y px-container-x">
        <div className="mx-auto max-w-content text-center">
          <h1 className="font-display text-display font-bold">
            Compare All Packages
          </h1>
          <p className="mt-4 text-body-lg text-white/80 max-w-narrow mx-auto">
            Find the right formation package for your business. Compare
            features, pricing, and privacy levels across all states and tiers.
          </p>
          <div className="mt-8 flex justify-center">
            <EntityTypeToggle
              options={entityOptions}
              value={entityType}
              onChange={(v) => setEntityType(v as EntityType)}
              dark
            />
          </div>
        </div>
      </section>

      {/* Package Grid */}
      <section className="py-section-y px-container-x bg-background">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-heading-lg font-bold text-foreground text-center">
            All Formation Packages
          </h2>
          <p className="mt-2 text-body text-muted text-center max-w-narrow mx-auto">
            Showing {entityType === "llc" ? "LLC" : "Corporation"} formation
            pricing. Toggle above to switch entity type.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <PackagePreviewCard
                key={pkg.id}
                tier={{
                  name: pkg.name,
                  badge: pkg.badge,
                  price: pkg.prices[entityType].formation,
                  period: "formation",
                  description: pkg.description,
                  highlighted: pkg.highlighted,
                }}
                entityType={entityType === "llc" ? "LLC" : "Corp"}
                cta={{
                  label: "View Package",
                  href: `/${pkg.flatSlug}`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-heading-lg font-bold text-foreground text-center">
            Feature Comparison
          </h2>
          <p className="mt-2 text-body text-muted text-center">
            See which features are included in each package tier.
          </p>

          <div className="mt-10 -mx-container-x px-container-x overflow-x-auto overscroll-x-contain pb-2 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
            <table className="w-full min-w-[600px] border-collapse text-body-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="py-3 px-4 text-left font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="py-3 px-4 text-center font-semibold text-foreground">
                    Bronze
                  </th>
                  <th className="py-3 px-4 text-center font-semibold text-foreground">
                    Silver
                  </th>
                  <th className="py-3 px-4 text-center font-semibold text-secondary">
                    Gold
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((featureName) => {
                  // Derive status per tier from actual package data
                  const bronzePkg = packages.find((p) => p.tier === "bronze");
                  const silverPkg = packages.find((p) => p.tier === "silver");
                  const goldPkg = packages.find(
                    (p) =>
                      p.tier === "gold" &&
                      p.state === "Wyoming" &&
                      p.id === "wyoming-gold",
                  );

                  const getStatus = (pkg: (typeof packages)[0] | undefined) => {
                    if (!pkg) return "not-included";
                    const feature = pkg.features.find(
                      (f) => f.name === featureName,
                    );
                    return feature?.status ?? "not-included";
                  };

                  const renderCell = (status: string) => {
                    switch (status) {
                      case "included":
                        return (
                          <span
                            className="text-success font-medium"
                            aria-label="Included"
                          >
                            &#10003;
                          </span>
                        );
                      case "add-on":
                        return (
                          <span
                            className="text-warning font-medium"
                            aria-label="Available as add-on"
                          >
                            Add-on
                          </span>
                        );
                      default:
                        return (
                          <span
                            className="text-muted"
                            aria-label="Not included"
                          >
                            &mdash;
                          </span>
                        );
                    }
                  };

                  return (
                    <tr
                      key={featureName}
                      className="border-b border-border hover:bg-muted/5 transition-colors"
                    >
                      <td className="py-3 px-4 text-foreground">
                        {featureName}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderCell(getStatus(bronzePkg))}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderCell(getStatus(silverPkg))}
                      </td>
                      <td className="py-3 px-4 text-center bg-secondary/5">
                        {renderCell(getStatus(goldPkg))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <CTABlock
            variant="dark"
            heading="Need Help Choosing?"
            description="Our formation specialists can help you pick the right package for your business goals, privacy needs, and budget."
            primaryCTA={{
              label: "Contact a Specialist",
              href: "/contact",
            }}
            secondaryCTA={{
              label: "Call (775) 313-4155",
              href: "tel:7753134155",
            }}
            trustSignal="25+ Years of Formation Experience"
          />
        </div>
      </section>
    </div>
  );
}
