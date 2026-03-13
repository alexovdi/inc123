"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface CarouselTestimonial {
  quote: string;
  name: string;
  businessType: string;
  state: string;
  serviceUsed: string;
  rating?: number;
}

export interface TestimonialCarouselProps {
  /** Array of testimonials to display */
  testimonials: CarouselTestimonial[];
  /** Enable auto-play rotation */
  autoPlay?: boolean;
  /** Auto-play interval in milliseconds */
  autoPlayInterval?: number;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Star Rating sub-component
   ------------------------------------------------ */
function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating
              ? "fill-accent text-accent"
              : "fill-none text-border"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(((index % count) + count) % count);
    },
    [count]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || isPaused || count <= 1) return;

    timerRef.current = setInterval(goNext, autoPlayInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, isPaused, autoPlayInterval, goNext, count]);

  // Touch handlers
  const handleTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].screenX;
    const diff = touchStartRef.current - touchEndRef.current;
    const SWIPE_THRESHOLD = 50;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  if (count === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <div
      className={cn(
        "relative bg-surface shadow-card rounded-card overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      tabIndex={0}
    >
      {/* Testimonial content */}
      <div className="px-6 py-8 sm:px-10 sm:py-10" aria-live="polite">
        {/* Quote */}
        <blockquote>
          {current.rating !== undefined && (
            <div className="mb-4">
              <StarRating rating={current.rating} />
            </div>
          )}

          <p className="text-heading-sm font-display leading-relaxed text-foreground sm:text-heading">
            &ldquo;{current.quote}&rdquo;
          </p>

          {/* Attribution */}
          <footer className="mt-6">
            <cite className="not-italic">
              <span className="block text-body font-semibold text-foreground">
                {current.name}
              </span>
              <span className="mt-1 block text-body-sm text-muted">
                {current.businessType} &middot; {current.state}
              </span>
              <span className="mt-0.5 block text-caption text-secondary">
                {current.serviceUsed}
              </span>
            </cite>
          </footer>
        </blockquote>
      </div>

      {/* Navigation controls */}
      {count > 1 && (
        <div className="flex items-center justify-between border-t border-border px-6 py-4 sm:px-10">
          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="inline-flex h-8 w-8 items-center justify-center rounded-button text-muted transition-colors hover:bg-muted/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="inline-flex h-8 w-8 items-center justify-center rounded-button text-muted transition-colors hover:bg-muted/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={cn(
                  "h-2 rounded-pill transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                  idx === currentIndex
                    ? "w-6 bg-secondary"
                    : "w-2 bg-border hover:bg-muted"
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

TestimonialCarousel.displayName = "TestimonialCarousel";

export { TestimonialCarousel };
