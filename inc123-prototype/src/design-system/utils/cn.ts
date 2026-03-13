import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-body",
        "text-body-sm",
        "text-body-lg",
        "text-heading",
        "text-heading-sm",
        "text-heading-lg",
        "text-display",
        "text-display-lg",
        "text-display-xl",
        "text-caption",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
