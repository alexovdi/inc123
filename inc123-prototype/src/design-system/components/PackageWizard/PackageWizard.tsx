"use client";

import {
  useReducer,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ArrowLeft, ArrowRight, AlertTriangle, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/design-system/utils/cn";
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
import { WizardProgressBar } from "./WizardProgressBar";
import { WizardRecommendation } from "./WizardRecommendation";

/* ── CSS Transition wrapper (replaces framer-motion) ── */

function WizardTransition({
  children,
  show,
  direction = "right",
}: {
  children: ReactNode;
  show: boolean;
  direction?: "right" | "left";
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (show) {
      requestAnimationFrame(() => setMounted(true));
    } else {
      setMounted(false);
    }
  }, [show]);

  if (!show) return null;

  const translateClass =
    direction === "right" ? "translate-x-4" : "-translate-x-4";

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        mounted ? "opacity-100 translate-x-0" : `opacity-0 ${translateClass}`,
      )}
    >
      {children}
    </div>
  );
}

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
      if (data.intent === "ca-fl" || isCaFl(data.state)) {
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
        const lastStep =
          data.intent === "shelf"
            ? 0
            : data.intent === "ca-fl" || isCaFl(data.state)
              ? 1
              : 2;
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

  const handleRestart = useCallback(() => dispatch({ type: "RESET" }), []);
  const handleBack = useCallback(() => dispatch({ type: "BACK" }), []);

  const totalSteps = data.intent ? getTotalSteps(data.intent) : 3;
  const isCAFL = isCaFl(data.state);
  const isCollapsed = data.step === -1;
  const isStarted = data.step >= 0 || data.done;

  // ── COLLAPSED STATE — compact bar ──
  if (isCollapsed) {
    return (
      <button
        type="button"
        onClick={() => dispatch({ type: "START" })}
        className={cn(
          "group flex w-full items-center justify-between gap-4 rounded-card",
          "bg-surface border border-border",
          "px-6 py-5 text-left transition-all duration-300",
          "shadow-card hover:shadow-card-hover hover:border-secondary",
        )}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-secondary text-white">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-body-lg font-bold text-foreground">
              Find Your Perfect Package in 60 Seconds
            </p>
            <p className="mt-0.5 text-body-sm text-muted">
              Answer 3 questions &mdash; we&rsquo;ll match you with the right
              package
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-card bg-secondary px-4 py-2 text-body-sm font-bold text-white transition-transform group-hover:scale-105">
          Start &rarr;
        </span>
      </button>
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
            className="mb-4 inline-flex items-center gap-1 text-body-sm font-medium text-secondary transition-colors hover:text-secondary/80"
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
          <WizardProgressBar totalSteps={totalSteps} currentStep={data.step} />
        </div>

        <WizardTransition show={data.step === 0} direction="right">
          <StepGoal
            selected={data.intent}
            onSelect={(id) =>
              dispatch({ type: "SET_INTENT", intent: id as WizardIntent })
            }
          />
        </WizardTransition>

        <WizardTransition
          show={data.step === 1 && data.intent !== null}
          direction={data.direction > 0 ? "right" : "left"}
        >
          {data.intent && (
            <StepState
              intent={data.intent}
              selected={data.state}
              onSelect={(id) =>
                dispatch({ type: "SET_STATE", state: id as WizardState })
              }
              onBack={handleBack}
              dispatch={dispatch}
            />
          )}
        </WizardTransition>

        <WizardTransition
          show={data.step === 2 && data.intent !== null && data.state !== null}
          direction={data.direction > 0 ? "right" : "left"}
        >
          {data.intent && data.state && (
            <StepTierEntity
              intent={data.intent}
              state={data.state}
              tier={data.tier}
              entity={data.entity}
              isCAFL={isCAFL}
              dispatch={dispatch}
              onBack={handleBack}
            />
          )}
        </WizardTransition>
      </div>
    );
  })();

  // Wrap in card
  return (
    <div
      className={cn(
        "overflow-hidden rounded-card",
        "bg-surface border border-border",
        "shadow-card",
      )}
    >
      {/* Card header */}
      <div className="border-b border-border px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-card bg-secondary text-white">
              <Zap className="h-4 w-4" />
            </div>
            <p className="font-display text-body font-semibold text-foreground">
              Package Finder
            </p>
          </div>
          {isStarted && !data.done && (
            <button
              type="button"
              onClick={handleRestart}
              className="text-caption font-medium text-muted transition-colors hover:text-secondary"
            >
              Start over
            </button>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="px-6 py-6 sm:px-8 sm:py-8">{cardContent}</div>
    </div>
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
        <h3 className="font-display text-heading-md font-bold text-foreground">
          {questions.intent.heading}
        </h3>
        <p className="mt-2 text-muted">{questions.intent.subheading}</p>
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
}: {
  intent: WizardIntent;
  selected: WizardState | null;
  onSelect: (id: string) => void;
  onBack: () => void;
  dispatch: React.Dispatch<WizardAction>;
}) {
  const isCaFlIntent = intent === "ca-fl";
  const q = isCaFlIntent ? questions.caFlState : questions.state;
  const contextNote = getStateContextNote(intent);
  const displayOptions = isCaFlIntent
    ? stateOptions.filter((o) => o.id === "california" || o.id === "florida")
    : stateOptions;
  const showUnsureComparison = selected === "unsure" && !isCaFlIntent;
  const canContinue = selected && selected !== "unsure";

  return (
    <div>
      <div className="mb-6 text-center" data-wizard-step={1}>
        <h3 className="font-display text-heading-md font-bold text-foreground">
          {q.heading}
        </h3>
        <p className="mt-2 text-muted">{q.subheading}</p>
      </div>

      {/* Context note */}
      {contextNote && (
        <div className="mx-auto mb-6 max-w-[48rem] rounded-card border border-secondary/20 bg-secondary/5 px-4 py-3 text-body-sm text-foreground">
          <span className="mr-1.5">&#x1F4A1;</span>
          {contextNote}
        </div>
      )}

      <div className="mx-auto max-w-[48rem] grid grid-cols-1 gap-3 sm:grid-cols-2">
        {displayOptions.map((option) => (
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
      <div className="mx-auto mt-6 flex max-w-[48rem] items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 text-body-sm font-medium text-secondary transition-colors hover:text-secondary/80"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>
        <button
          type="button"
          disabled={!canContinue}
          onClick={() => parentDispatch({ type: "CONFIRM_STATE" })}
          className={cn(
            "inline-flex items-center gap-2 rounded-button px-6 py-2.5 text-body-sm font-semibold transition-all",
            canContinue
              ? "bg-secondary text-white hover:bg-secondary/90 cursor-pointer"
              : "bg-border text-muted cursor-not-allowed",
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
    <div className="mx-auto mt-4 max-w-[48rem] rounded-card border border-border bg-surface p-5">
      <h4 className="mb-3 font-display text-body font-semibold">
        State Comparison &mdash; Which is right for you?
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full text-caption">
          <thead>
            <tr>
              {stateComparison.headers.map((h, i) => (
                <th
                  key={i}
                  className={cn(
                    "px-2 py-2 text-left font-semibold",
                    i === 0 ? "text-muted" : "text-secondary",
                  )}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stateComparison.rows.map((row, ri) => (
              <tr key={ri} className="border-t border-border">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={cn(
                      "px-2 py-2",
                      ci === 0 ? "font-medium text-muted" : "text-foreground",
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
      <p className="mt-2 text-[10px] text-muted">{stateComparison.footnote}</p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {["wyoming", "nevada", "california", "florida"].map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelectState(id)}
            className="rounded-button border border-border bg-background px-3 py-2 text-caption font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary"
          >
            Choose {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>
      <div className="mt-3 text-center">
        <Link
          href="/compare-packages"
          className="text-caption font-medium text-secondary underline underline-offset-4"
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
        <h3 className="font-display text-heading-md font-bold text-foreground">
          {q.heading}
        </h3>
        <p className="mt-2 text-muted">{q.subheading}</p>
      </div>

      <div className="mx-auto max-w-[48rem]">
        {/* Entity Type Toggle */}
        <div className="mb-5">
          <p className="mb-2 text-caption font-semibold uppercase tracking-widest text-muted">
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
                  "flex-1 rounded-card border-2 p-3.5 text-left transition-all",
                  entity === e.id
                    ? "border-secondary bg-secondary/5"
                    : "border-border bg-surface hover:border-secondary/50",
                )}
              >
                <p className="text-body-sm font-bold text-foreground">
                  {e.label}
                </p>
                <p className="mt-0.5 text-caption text-muted">{e.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Tier Selection (hidden for CA/FL) */}
        {!isCAFL && (
          <div className="mb-5">
            <p className="mb-2 text-caption font-semibold uppercase tracking-widest text-muted">
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
                      "relative flex flex-col gap-1 rounded-card border-2 p-4 text-left transition-all",
                      isSelected
                        ? "border-secondary bg-secondary/5"
                        : "border-border bg-surface hover:border-secondary/50",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-body-sm font-bold text-foreground">
                        {t.label}
                      </span>
                      {isDefault && (
                        <span className="rounded-pill bg-secondary px-2 py-0.5 text-[10px] font-bold text-white">
                          Recommended
                        </span>
                      )}
                      {price !== null && (
                        <span className="ml-auto font-mono text-body-lg font-bold text-foreground">
                          {formatPrice(price)}
                        </span>
                      )}
                    </div>
                    <p className="text-caption text-muted">{t.description}</p>
                  </button>
                );
              })}
            </div>

            {/* Upsell nudge */}
            {showUpsell && (
              <div className="mt-3 flex items-start gap-2 rounded-card border border-amber-300 bg-amber-50 px-3 py-2.5 text-caption text-amber-900">
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
            className="inline-flex items-center gap-1 text-body-sm font-medium text-secondary transition-colors hover:text-secondary/80"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </button>
          <button
            type="button"
            onClick={() => parentDispatch({ type: "ADVANCE_TO_RESULT" })}
            className="inline-flex items-center gap-2 rounded-button bg-secondary px-6 py-2.5 text-body-sm font-semibold text-white transition-all hover:bg-secondary/90"
          >
            See My Recommendation
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
