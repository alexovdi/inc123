import type { MetallicAccent } from "@/lib/types";

/**
 * Tier metallic accent class maps.
 *
 * Replace runtime `style={{ color: "var(--tier-gold-ink)" }}` patterns with
 * Tailwind classes that the JIT can scan statically:
 *
 *   <p style={{ color: metallicInk }} />
 *   → <p className={tierTextInk[metallic]} />
 *
 * Prefer these over `var()` strings when the consumer is a className.
 * Inline style is still correct when composing with opacity, gradients,
 * or other properties that need one string literal.
 */

export const tierTextAccent: Record<MetallicAccent, string> = {
  gold: "text-tier-gold",
  silver: "text-tier-silver",
  bronze: "text-tier-bronze",
};

export const tierTextInk: Record<MetallicAccent, string> = {
  gold: "text-tier-gold-ink",
  silver: "text-tier-silver-ink",
  bronze: "text-tier-bronze-ink",
};

export const tierTextMid: Record<MetallicAccent, string> = {
  gold: "text-tier-gold-mid",
  silver: "text-tier-silver-mid",
  bronze: "text-tier-bronze-mid",
};

export const tierBgAccent: Record<MetallicAccent, string> = {
  gold: "bg-tier-gold",
  silver: "bg-tier-silver",
  bronze: "bg-tier-bronze",
};

export const tierBgSoft: Record<MetallicAccent, string> = {
  gold: "bg-tier-gold-soft",
  silver: "bg-tier-silver-soft",
  bronze: "bg-tier-bronze-soft",
};

export const tierBgMid: Record<MetallicAccent, string> = {
  gold: "bg-tier-gold-mid",
  silver: "bg-tier-silver-mid",
  bronze: "bg-tier-bronze-mid",
};

export const tierBgInk: Record<MetallicAccent, string> = {
  gold: "bg-tier-gold-ink",
  silver: "bg-tier-silver-ink",
  bronze: "bg-tier-bronze-ink",
};

export const tierBorderMid: Record<MetallicAccent, string> = {
  gold: "border-tier-gold-mid",
  silver: "border-tier-silver-mid",
  bronze: "border-tier-bronze-mid",
};

export const tierBorderAccent: Record<MetallicAccent, string> = {
  gold: "border-tier-gold",
  silver: "border-tier-silver",
  bronze: "border-tier-bronze",
};

export const tierBorderBottomAccent: Record<MetallicAccent, string> = {
  gold: "border-b-tier-gold",
  silver: "border-b-tier-silver",
  bronze: "border-b-tier-bronze",
};
