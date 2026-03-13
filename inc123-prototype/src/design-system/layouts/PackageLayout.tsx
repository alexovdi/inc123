import { cn } from "@/design-system/utils/cn";

export interface PackageLayoutProps {
  packageName: string;
  children: React.ReactNode;
  className?: string;
}

export function PackageLayout({
  packageName,
  children,
  className,
}: PackageLayoutProps) {
  return (
    <div className={cn("min-h-screen", className)}>
      {/* Trust bar */}
      <div className="bg-primary-50 border-b border-border">
        <div className="mx-auto flex max-w-wide items-center justify-center gap-6 px-container-x py-2 text-caption text-muted">
          <span>25+ Years Trusted</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">All-Inclusive Pricing</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">30-Day Money-Back Guarantee</span>
        </div>
      </div>

      {/* Full-width content */}
      <main className="mx-auto max-w-wide px-container-x py-section-y-sm">
        {children}
      </main>
    </div>
  );
}
