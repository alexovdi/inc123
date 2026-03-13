"use client";

import {
  type ChangeEvent,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface SearchInputProps {
  /** Current search value (controlled) */
  value: string;
  /** Debounced change handler */
  onChange: (term: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Number of results to display below input */
  resultCount?: number;
  /** Total number of items (for "X of Y" display) */
  totalCount?: number;
  /** Active category label for contextual count text */
  categoryLabel?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function SearchInput({
  value,
  onChange,
  placeholder = "Search questions... e.g., 'nominee officer' or 'Wyoming annual report'",
  resultCount,
  totalCount,
  categoryLabel,
  className,
}: SearchInputProps) {
  const [localValue, setLocalValue] = useState(value);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync external value changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Debounced onChange
  const debouncedChange = useCallback(
    (term: string) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        onChange(term);
      }, 200);
    },
    [onChange]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setLocalValue(term);
    debouncedChange(term);
  };

  const handleClear = () => {
    setLocalValue("");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onChange("");
  };

  // Build result count text
  const getResultText = () => {
    if (resultCount === undefined || totalCount === undefined) return null;
    if (categoryLabel) {
      return `Showing ${resultCount} of ${totalCount} ${categoryLabel} questions`;
    }
    return `Showing ${resultCount} of ${totalCount} questions`;
  };

  const resultText = getResultText();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="relative">
        {/* Search icon */}
        <span
          className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted"
          aria-hidden="true"
        >
          <Search className="h-5 w-5" />
        </span>

        {/* Input */}
        <input
          type="text"
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          aria-label="Search frequently asked questions"
          className={cn(
            "h-14 w-full rounded-button border border-border bg-surface pl-12 pr-12 text-body-lg text-foreground",
            "placeholder:text-muted/60 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface",
            "shadow-card"
          )}
        />

        {/* Clear button */}
        {localValue.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className={cn(
              "absolute inset-y-0 right-0 flex items-center pr-4 text-muted",
              "transition-colors hover:text-foreground"
            )}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Result count */}
      {resultText && (
        <p className="text-body-sm text-muted" aria-live="polite">
          {resultText}
        </p>
      )}
    </div>
  );
}

SearchInput.displayName = "SearchInput";

export { SearchInput };
