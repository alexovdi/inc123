"use client";

import { useReducer, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, AlertTriangle, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  type WizardIntent,
  type WizardTier,
  type WizardState,
  type EntityType,
  questions,
  intentOptions,
  stateOptions,
  tierOptions,
  stateComparison,
  getStateContextNote,
  getDefaultTier,
  getPackagePrice,
  featuresByGoal,
} from "@/data/wizard";
import {
  getRecommendation,
  getTotalSteps,
  formatPrice,
  isCaFl,
} from "./wizardLogic";
import { WizardOptionCard } from "./WizardOptionCard";
import { WizardProgressDots } from "./WizardProgressDots";
import { WizardRecommendation } from "./WizardRecommendation";

/* ── State machine ──
   Flow: Step 0 = Goal → Step 1 = State → Step 2 = Tier/Entity → done = Result
── */

interface WizardData {
  step: number;
  direction: 1 | -1;
  intent: WizardIntent | null;
  state: WizardState | null;
  tier: WizardTier | null;
  entity: EntityType;
  done: boolean;
}

type WizardAction =
  | { type: "START" }
  | { type: "SET_INTENT"; intent: WizardIntent }
  | { type: "SET_STATE"; state: WizardState }
  | { type: "CONFIRM_STATE" }
  | { type: "SET_TIER"; tier: WizardTier }
  | { type: "SET_ENTITY"; entity: EntityType }
  | { type: "ADVANCE_TO_RESULT" }
  | { type: "BACK" }
  | { type: "RESET" };

const initialState: WizardData = {
  step: -1, // -1 = collapsed
  direction: 1,
  intent: null,
  state: null,
  tier: null,
  entity: "llc",
  done: false,
};

function wizardReducer(data: WizardData, action: WizardAction): WizardData {
  switch (action.type) {
    case "START":
      return { ...data, step: 0, direction: 1 };
    case "SET_INTENT": {
      const intent = action.intent;
      if (intent === "shelf") {
        return { ...data, step: 0, direction: 1, intent, done: true };
      }
      return {
        ...data,
        step: 1,
        direction: 1,
        intent,
        tier: getDefaultTier(intent),
        state: null,
        done: false,
      };
    }
    case "SET_STATE":
      return { ...data, state: action.state };
    case "CONFIRM_STATE": {
      // Advance from state step to tier/entity step
      if (isCaFl(data.state)) {
        return { ...data, done: true, direction: 1 };
      }
      return { ...data, step: 2, direction: 1 };
    }
    case "SET_TIER":
      return { ...data, tier: action.tier };
    case "SET_ENTITY":
      return { ...data, entity: action.entity };
    case "ADVANCE_TO_RESULT":
      return { ...data, done: true, direction: 1 };
    case "BACK": {
      if (data.done) {
        // Go back to the last interactive step
        const lastStep =
          data.intent === "shelf" ? 0 : isCaFl(data.state) ? 1 : 2;
        return { ...data, step: lastStep, direction: -1, done: false };
      }
      if (data.step <= 0) return initialState;
      if (data.step === 1) {
        return {
          ...data,
          step: 0,
          direction: -1,
          intent: null,
          state: null,
          tier: null,
        };
      }
      // Step 2 → Step 1
      return { ...data, step: 1, direction: -1 };
    }
    case "RESET":
      return initialState;
    default:
      return data;
  }
}

/* ── Component ── */

export function PackageWizard() {
  const [data, dispatch] = useReducer(wizardReducer, initialState);
  const prefersReducedMotion = useReducedMotion();

  const handleRestart = useCallback(() => dispatch({ type: "RESET" }), []);
  const handleBack = useCallback(() => dispatch({ type: "BACK" }), []);

  const totalSteps = data.intent ? getTotalSteps(data.intent) : 3;
  const isCAFL = isCaFl(data.state);
  const isCollapsed = data.step === -1;
  const isStarted = data.step >= 0 || data.done;

  // ── COLLAPSED STATE — compact bar ──
  if (isCollapsed) {
    return (
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          type="button"
          onClick={() => dispatch({ type: "START" })}
          className={cn(
            "group flex w-full items-center justify-between gap-4 rounded-2xl",
            "bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
            "px-6 py-5 text-left transition-all duration-300",
            "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-accent)]",
          )}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)] text-white">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="font-[var(--font-display)] text-lg font-bold text-[var(--color-text-primary)]">
                Find Your Perfect Package in 60 Seconds
              </p>
              <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">
                Answer 3 questions &mdash; we&rsquo;ll match you with the right
                package
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-bold text-white transition-transform group-hover:scale-105">
            Start &rarr;
          </span>
        </button>
      </motion.div>
    );
  }

  // ── EXPANDED CARD WRAPPER ──
  const cardContent = (() => {
    // Result screen
    if (data.done && data.intent) {
      const result = getRecommendation(data.intent, data.tier, data.state);
      const features = featuresByGoal[data.intent] || featuresByGoal.formation;
      return (
        <div>
          <button
            type="button"
            onClick={handleBack}
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </button>
          <WizardRecommendation
            result={result}
            entity={data.entity}
            tier={data.tier}
            intent={data.intent}
            state={data.state}
            features={features}
            onRestart={handleRestart}
          />
        </div>
      );
    }

    // Step screens
    return (
      <div>
        {/* Progress bar */}
        <div className="mb-6">
          <WizardProgressDots totalSteps={totalSteps} currentStep={data.step} />
        </div>

        {data.step === 0 && (
          <motion.div
            key="step-0"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <StepGoal
              selected={data.intent}
              onSelect={(id) =>
                dispatch({ type: "SET_INTENT", intent: id as WizardIntent })
              }
            />
          </motion.div>
        )}

        {data.step === 1 && data.intent && (
          <motion.div
            key="step-1"
            initial={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, x: data.direction > 0 ? 40 : -40 }
            }
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <StepState
              intent={data.intent}
              selected={data.state}
              onSelect={(id) =>
                dispatch({ type: "SET_STATE", state: id as WizardState })
              }
              onBack={handleBack}
              dispatch={dispatch}
              data={data}
            />
          </motion.div>
        )}

        {data.step === 2 && data.intent && data.state && (
          <motion.div
            key="step-2"
            initial={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, x: data.direction > 0 ? 40 : -40 }
            }
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <StepTierEntity
              intent={data.intent}
              state={data.state}
              tier={data.tier}
              entity={data.entity}
              isCAFL={isCAFL}
              dispatch={dispatch}
              onBack={handleBack}
            />
          </motion.div>
        )}
      </div>
    );
  })();

  // Wrap in card
  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "overflow-hidden rounded-2xl",
        "bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
        "shadow-[var(--shadow-card)]",
      )}
    >
      {/* Card header */}
      <div className="border-b border-[var(--color-border)] px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)] text-white">
              <Zap className="h-4 w-4" />
            </div>
            <p className="font-[var(--font-display)] text-base font-semibold text-[var(--color-text-primary)]">
              Package Finder
            </p>
          </div>
          {isStarted && !data.done && (
            <button
              type="button"
              onClick={handleRestart}
              className="text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              Start over
            </button>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="px-6 py-6 sm:px-8 sm:py-8">{cardContent}</div>
    </motion.div>
  );
}

PackageWizard.displayName = "PackageWizard";

/* ═══════════════════════════════════════════════════════════════════════════
   STEP COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Step 1: Goal ── */

function StepGoal({
  selected,
  onSelect,
}: {
  selected: WizardIntent | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <div className="mb-8 text-center" data-wizard-step={0}>
        <h3 className="font-[var(--font-display)] text-[var(--font-size-h3)] leading-tight">
          {questions.intent.heading}
        </h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          {questions.intent.subheading}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {intentOptions.map((option) => (
          <WizardOptionCard
            key={option.id}
            icon={option.icon}
            title={option.title}
            subtitle={option.subtitle}
            badge={option.badge}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Step 2: State ── */

function StepState({
  intent,
  selected,
  onSelect,
  onBack,
  dispatch: parentDispatch,
  data,
}: {
  intent: WizardIntent;
  selected: WizardState | null;
  onSelect: (id: string) => void;
  onBack: () => void;
  dispatch: React.Dispatch<WizardAction>;
  data: WizardData;
}) {
  const contextNote = getStateContextNote(intent);
  const showUnsureComparison = selected === "unsure";
  const canContinue = selected && selected !== "unsure";

  return (
    <div>
      <div className="mb-6 text-center" data-wizard-step={1}>
        <h3 className="font-[var(--font-display)] text-[var(--font-size-h3)] leading-tight">
          {questions.state.heading}
        </h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          {questions.state.subheading}
        </p>
      </div>

      {/* Context note */}
      {contextNote && (
        <div className="mx-auto mb-6 max-w-2xl rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-4 py-3 text-sm text-[var(--color-text-primary)]">
          <span className="mr-1.5">&#x1F4A1;</span>
          {contextNote}
        </div>
      )}

      <div className="mx-auto max-w-2xl grid grid-cols-1 gap-3 sm:grid-cols-2">
        {stateOptions.map((option) => (
          <WizardOptionCard
            key={option.id}
            icon={option.icon}
            title={option.title}
            subtitle={option.subtitle}
            badge={option.badge}
            selected={selected === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>

      {/* State comparison table (when "Not sure" selected) */}
      {showUnsureComparison && (
        <StateComparisonTable onSelectState={onSelect} />
      )}

      {/* Navigation */}
      <div className="mx-auto mt-6 flex max-w-2xl items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>
        <button
          type="button"
          disabled={!canContinue}
          onClick={() => parentDispatch({ type: "CONFIRM_STATE" })}
          className={cn(
            "inline-flex items-center gap-2 rounded-[var(--radius-md)] px-6 py-2.5 text-sm font-semibold transition-all",
            canContinue
              ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] cursor-pointer"
              : "bg-[var(--color-border)] text-[var(--color-text-secondary)] cursor-not-allowed",
          )}
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ── State Comparison Table ── */

function StateComparisonTable({
  onSelectState,
}: {
  onSelectState: (id: string) => void;
}) {
  return (
    <div className="mx-auto mt-4 max-w-2xl rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5">
      <h4 className="mb-3 font-[var(--font-display)] text-base font-semibold">
        State Comparison &mdash; Which is right for you?
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr>
              {stateComparison.headers.map((h, i) => (
                <th
                  key={i}
                  className={cn(
                    "px-2 py-2 text-left font-semibold",
                    i === 0
                      ? "text-[var(--color-text-secondary)]"
                      : "text-[var(--color-accent)]",
                  )}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stateComparison.rows.map((row, ri) => (
              <tr key={ri} className="border-t border-[var(--color-border)]">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={cn(
                      "px-2 py-2",
                      ci === 0
                        ? "font-medium text-[var(--color-text-secondary)]"
                        : "text-[var(--color-text-primary)]",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[10px] text-[var(--color-text-secondary)]">
        {stateComparison.footnote}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {["wyoming", "nevada", "california", "florida"].map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelectState(id)}
            className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2 text-xs font-semibold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Choose {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>
      <div className="mt-3 text-center">
        <Link
          href="/compare-packages"
          className="text-xs font-medium text-[var(--color-accent)] underline underline-offset-4"
        >
          Read the full state-by-state comparison &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ── Step 3: Tier + Entity ── */

function StepTierEntity({
  intent,
  state,
  tier,
  entity,
  isCAFL,
  dispatch: parentDispatch,
  onBack,
}: {
  intent: WizardIntent;
  state: WizardState;
  tier: WizardTier | null;
  entity: EntityType;
  isCAFL: boolean;
  dispatch: React.Dispatch<WizardAction>;
  onBack: () => void;
}) {
  const defaultTier = getDefaultTier(intent);
  const showUpsell =
    !isCAFL &&
    tier !== "gold" &&
    (intent === "privacy" || intent === "asset-protection");

  const q = isCAFL ? questions.tierCaFl : questions.tier;

  return (
    <div>
      <div className="mb-6 text-center" data-wizard-step={2}>
        <h3 className="font-[var(--font-display)] text-[var(--font-size-h3)] leading-tight">
          {q.heading}
        </h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          {q.subheading}
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        {/* Entity Type Toggle */}
        <div className="mb-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)]">
            Entity Type
          </p>
          <div className="flex gap-3">
            {(
              [
                {
                  id: "llc",
                  label: "LLC",
                  desc: "Flexible, simple, best for most",
                },
                {
                  id: "corp",
                  label: "Corporation",
                  desc: "Formal structure, stock issuance",
                },
              ] as const
            ).map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() =>
                  parentDispatch({ type: "SET_ENTITY", entity: e.id })
                }
                className={cn(
                  "flex-1 rounded-lg border-2 p-3.5 text-left transition-all",
                  entity === e.id
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                    : "border-[var(--color-border)] bg-[var(--color-bg-surface)] hover:border-[var(--color-accent)]/50",
                )}
              >
                <p className="text-sm font-bold text-[var(--color-text-primary)]">
                  {e.label}
                </p>
                <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
                  {e.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Tier Selection (hidden for CA/FL) */}
        {!isCAFL && (
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)]">
              Service Level
            </p>
            <div className="flex flex-col gap-3">
              {tierOptions.map((t) => {
                const price = getPackagePrice(state, t.id, entity);
                const isDefault = defaultTier === t.id;
                const isSelected = tier === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() =>
                      parentDispatch({ type: "SET_TIER", tier: t.id })
                    }
                    className={cn(
                      "relative flex flex-col gap-1 rounded-lg border-2 p-4 text-left transition-all",
                      isSelected
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                        : "border-[var(--color-border)] bg-[var(--color-bg-surface)] hover:border-[var(--color-accent)]/50",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[var(--color-text-primary)]">
                        {t.label}
                      </span>
                      {isDefault && (
                        <span className="rounded-full bg-[var(--color-accent)] px-2 py-0.5 text-[10px] font-bold text-white">
                          Recommended
                        </span>
                      )}
                      {price !== null && (
                        <span className="ml-auto font-mono text-lg font-bold text-[var(--color-text-primary)]">
                          {formatPrice(price)}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      {t.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Upsell nudge */}
            {showUpsell && (
              <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2.5 text-xs text-amber-900">
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>
                  Without Gold, your personal name will appear on public state
                  records.
                </span>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </button>
          <button
            type="button"
            onClick={() => parentDispatch({ type: "ADVANCE_TO_RESULT" })}
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-hover)]"
          >
            See My Recommendation
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
