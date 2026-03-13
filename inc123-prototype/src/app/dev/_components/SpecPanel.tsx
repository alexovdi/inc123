interface SpecItem {
  label: string;
  value: string;
  color?: string;
}

interface SpecPanelProps {
  title?: string;
  items: SpecItem[];
}

export function SpecPanel({ title = "Specifications", items }: SpecPanelProps) {
  return (
    <details className="mt-4 rounded-card border border-border bg-muted/5">
      <summary className="cursor-pointer px-4 py-2.5 text-body-sm font-medium text-muted select-none hover:text-foreground transition-colors">
        {title}
      </summary>
      <div className="border-t border-border px-4 py-3">
        <table className="w-full text-body-sm">
          <tbody>
            {items.map((item) => (
              <tr key={item.label} className="border-b border-border/50 last:border-0">
                <td className="py-1.5 pr-4 text-muted whitespace-nowrap">{item.label}</td>
                <td className="py-1.5 font-mono text-caption flex items-center gap-2">
                  {item.color && (
                    <span
                      className={`inline-block h-3 w-3 rounded-full shrink-0 ${item.color}`}
                    />
                  )}
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}
