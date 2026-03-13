"use client";

import {
  type ChangeEvent,
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
} from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface CategoryOption {
  value: string;
  label: string;
}

export interface AccordionSearchProps {
  /** Placeholder text for the search input */
  placeholder?: string;
  /** Callback fired with the debounced search term */
  onSearch: (term: string) => void;
  /** Debounce delay in milliseconds */
  debounceMs?: number;
  /** Category filter options */
  categoryOptions?: CategoryOption[];
  /** Callback fired when category changes */
  onCategoryChange?: (category: string) => void;
  /** Total number of items (for "Showing X of Y") */
  totalCount?: number;
  /** Filtered/visible count (for "Showing X of Y") */
  filteredCount?: number;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function AccordionSearch({
  placeholder = "Search...",
  onSearch,
  debounceMs = 300,
  categoryOptions,
  onCategoryChange,
  totalCount,
  filteredCount,
  className,
}: AccordionSearchProps) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputId = useId();
  const selectId = useId();

  // Debounced search callback
  const debouncedSearch = useCallback(
    (term: string) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        onSearch(term);
      }, debounceMs);
    },
    [onSearch, debounceMs]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setValue(term);
    debouncedSearch(term);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const cat = e.target.value;
    setCategory(cat);
    onCategoryChange?.(cat);
  };

  const handleClear = () => {
    setValue("");
    setCategory("");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onSearch("");
    onCategoryChange?.("");
  };

  const hasActiveFilters = value.length > 0 || category.length > 0;

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-card border border-border bg-surface p-3 sm:flex-row sm:items-center sm:gap-4",
        className
      )}
    >
      {/* Search input */}
      <div className="relative flex-1">
        <span
          className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted"
          aria-hidden="true"
        >
          <Search className="h-4 w-4" />
        </span>
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          aria-label={placeholder}
          className="h-9 w-full rounded-button border border-border bg-surface pl-9 pr-3 text-body-sm text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface"
        />
      </div>

      {/* Category dropdown */}
      {categoryOptions && categoryOptions.length > 0 && (
        <div className="relative shrink-0">
          <select
            id={selectId}
            value={category}
            onChange={handleCategoryChange}
            aria-label="Filter by category"
            className="h-9 appearance-none rounded-button border border-border bg-surface px-3 pr-8 text-body-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface"
          >
            <option value="">All categories</option>
            {categoryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-muted"
            aria-hidden="true"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      )}

      {/* Result count */}
      {totalCount !== undefined && filteredCount !== undefined && (
        <span className="shrink-0 text-body-sm text-muted" aria-live="polite">
          Showing {filteredCount} of {totalCount}
        </span>
      )}

      {/* Clear button */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search and filters"
          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-button px-3 text-body-sm text-muted transition-colors hover:bg-muted/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <X className="h-4 w-4" />
          <span>Clear</span>
        </button>
      )}
    </div>
  );
}

AccordionSearch.displayName = "AccordionSearch";

export { AccordionSearch };
