"use client";

import {
  Shield,
  Clock,
  MapPin,
  Phone,
  DollarSign,
  Award,
  Lock,
} from "lucide-react";
import { cn } from "@/design-system/utils/cn";

const items = [
  { icon: Clock, text: "25 Years of Expertise" },
  { icon: MapPin, text: "Real Office in Reno, NV" },
  { icon: Shield, text: "Year-Round Nominees Included" },
  { icon: DollarSign, text: "$1,275 All-Inclusive" },
  { icon: Award, text: "Money-Back Guarantee" },
  { icon: Phone, text: "Talk to a Real Person" },
  { icon: Lock, text: "Crypto Payments Accepted" },
];

export function TrustTicker({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden border-y border-border bg-surface py-4",
        className,
      )}
      aria-label="Trust signals"
    >
      <div
        className="flex w-max gap-12 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]"
        style={
          {
            /* Reduced motion: no animation, show static row */
          }
        }
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2.5 text-body-sm text-muted"
          >
            <item.icon className="h-4 w-4 text-secondary" strokeWidth={1.5} />
            <span className="whitespace-nowrap font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

TrustTicker.displayName = "TrustTicker";
