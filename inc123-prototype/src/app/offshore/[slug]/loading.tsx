export default function OffshoreLoading() {
  return (
    <main className="px-container-x py-section-y">
      <div className="max-w-content mx-auto animate-pulse">
        {/* Breadcrumb skeleton */}
        <div className="mb-8 flex items-center gap-2">
          <div className="h-4 w-16 rounded bg-border/40" />
          <div className="h-4 w-4 rounded bg-border/40" />
          <div className="h-4 w-20 rounded bg-border/40" />
          <div className="h-4 w-4 rounded bg-border/40" />
          <div className="h-4 w-28 rounded bg-border/40" />
        </div>

        {/* Hero skeleton */}
        <div className="mb-12">
          <div className="h-10 w-2/3 rounded bg-border/40" />
          <div className="mt-4 h-5 w-full rounded bg-border/40" />
          <div className="mt-2 h-5 w-3/4 rounded bg-border/40" />
        </div>

        {/* Two-column content skeleton */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i}>
                <div className="h-6 w-1/2 rounded bg-border/40" />
                <div className="mt-3 h-4 w-full rounded bg-border/40" />
                <div className="mt-2 h-4 w-5/6 rounded bg-border/40" />
                <div className="mt-2 h-4 w-2/3 rounded bg-border/40" />
              </div>
            ))}
          </div>
          <div className="rounded-card border border-border bg-surface p-6">
            <div className="h-6 w-3/4 rounded bg-border/40" />
            <div className="mt-4 h-10 w-full rounded bg-border/40" />
            <div className="mt-3 h-4 w-full rounded bg-border/40" />
            <div className="mt-2 h-4 w-2/3 rounded bg-border/40" />
          </div>
        </div>
      </div>
    </main>
  );
}
