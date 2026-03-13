import type { ReactNode } from "react";

interface StateGridItem {
  label: string;
  note?: string;
  children: ReactNode;
}

interface StateGridProps {
  states: StateGridItem[];
  columns?: 2 | 3 | 4 | 5 | 6;
}

const colsMap = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
} as const;

export function StateGrid({ states, columns = 4 }: StateGridProps) {
  return (
    <div className={`grid gap-6 ${colsMap[columns]}`}>
      {states.map((state) => (
        <div key={state.label} className="flex flex-col items-start gap-2">
          <div className="flex items-center min-h-[44px]">{state.children}</div>
          <div>
            <p className="text-caption text-muted">{state.label}</p>
            {state.note && (
              <p className="font-mono text-caption text-muted/60">{state.note}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
