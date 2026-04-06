"use client";

import {
  useReducer,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ArrowLeft, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/design-system/utils/cn";
import {
  type WizardBranch,
  type WizardBusinessType,
  type WizardFormationState,
  type WizardOperatingState,
  type WizardStepId,
  questions,
  branchOptions,
  businessTypeOptions,
  apStateOptions,
  bmStateOptions,
  privacyOptions,
} from "@/data/wizard";
import { getRecommendation } from "./wizardLogic";
import { WizardOptionCard } from "./WizardOptionCard";
import { WizardRecommendation } from "./WizardRecommendation";

/* ── CSS Transition wrapper ── */

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

/* ── Progress Dots ── */

function ProgressDots({ total, active }: { total: number; active: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      {Array.from({ length: total + 1 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-2.5 rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
            i === active
              ? "w-7 bg-secondary"
              : i < active
                ? "w-2.5 bg-secondary"
                : "w-2.5 bg-border",
          )}
        />
      ))}
    </div>
  );
}

/* ── State machine ──
   Flow: start → business-type/ap-state → bm-state/privacy → result
   Auto-advance on card click — no "Continue" buttons
── */

interface WizardData {
  currentStep: WizardStepId;
  direction: 1 | -1;
  branch: WizardBranch | null;
  businessType: WizardBusinessType | null;
  formationState: WizardFormationState | null;
  operatingState: WizardOperatingState | null;
  wantsPrivacy: boolean | null;
  history: WizardStepId[];
  collapsed: boolean;
}

type WizardAction =
  | { type: "START" }
  | { type: "SELECT_BRANCH"; branch: WizardBranch }
  | { type: "SELECT_BUSINESS_TYPE"; businessType: WizardBusinessType }
  | { type: "SELECT_AP_STATE"; state: WizardFormationState }
  | { type: "SELECT_BM_STATE"; state: WizardOperatingState }
  | { type: "SELECT_PRIVACY"; wantsPrivacy: boolean }
  | { type: "BACK" }
  | { type: "RESET" }
  | { type: "COLLAPSE" };

const initialState: WizardData = {
  currentStep: "start",
  direction: 1,
  branch: null,
  businessType: null,
  formationState: null,
  operatingState: null,
  wantsPrivacy: null,
  history: ["start"],
  collapsed: true,
};

function wizardReducer(data: WizardData, action: WizardAction): WizardData {
  switch (action.type) {
    case "START":
      return { ...initialState, collapsed: false };

    case "SELECT_BRANCH": {
      const nextStep: WizardStepId =
        action.branch === "formation" ? "business-type" : "ap-state";
      return {
        ...data,
        branch: action.branch,
        currentStep: nextStep,
        direction: 1,
        history: [...data.history, nextStep],
      };
    }

    case "SELECT_BUSINESS_TYPE": {
      if (action.businessType === "virtual") {
        // Virtual → skip to privacy question
        return {
          ...data,
          businessType: "virtual",
          currentStep: "privacy",
          direction: 1,
          history: [...data.history, "privacy"],
        };
      }
      // Brick-and-mortar → state selection
      return {
        ...data,
        businessType: "brick-mortar",
        currentStep: "bm-state",
        direction: 1,
        history: [...data.history, "bm-state"],
      };
    }

    case "SELECT_AP_STATE": {
      // AP → state → auto-recommend Gold (go directly to result)
      return {
        ...data,
        formationState: action.state,
        wantsPrivacy: null, // AP clients auto-get privacy
        currentStep: "result",
        direction: 1,
        history: [...data.history, "result"],
      };
    }

    case "SELECT_BM_STATE": {
      // B&M state → privacy question
      return {
        ...data,
        operatingState: action.state,
        currentStep: "privacy",
        direction: 1,
        history: [...data.history, "privacy"],
      };
    }

    case "SELECT_PRIVACY": {
      return {
        ...data,
        wantsPrivacy: action.wantsPrivacy,
        currentStep: "result",
        direction: 1,
        history: [...data.history, "result"],
      };
    }

    case "BACK": {
      if (data.history.length <= 1) return { ...initialState, collapsed: true };
      const newHistory = data.history.slice(0, -1);
      const prevStep = newHistory[newHistory.length - 1];

      // Clear downstream state
      const cleared: Partial<WizardData> = {};
      if (prevStep === "start") {
        cleared.branch = null;
        cleared.businessType = null;
        cleared.formationState = null;
        cleared.operatingState = null;
        cleared.wantsPrivacy = null;
      } else if (prevStep === "business-type") {
        cleared.businessType = null;
        cleared.operatingState = null;
        cleared.wantsPrivacy = null;
      } else if (prevStep === "ap-state") {
        cleared.formationState = null;
        cleared.wantsPrivacy = null;
      } else if (prevStep === "bm-state") {
        cleared.operatingState = null;
        cleared.wantsPrivacy = null;
      } else if (prevStep === "privacy") {
        cleared.wantsPrivacy = null;
      }

      return {
        ...data,
        ...cleared,
        currentStep: prevStep,
        direction: -1,
        history: newHistory,
      };
    }

    case "RESET":
      return { ...initialState, collapsed: false };

    case "COLLAPSE":
      return { ...initialState, collapsed: true };

    default:
      return data;
  }
}

/* ── Total dots for progress indicator ── */

function getTotalDots(data: WizardData): number {
  if (data.branch === "ap") return 2; // start → ap-state → result
  if (data.branch === "formation" && data.businessType === "virtual") return 3; // start → btype → privacy → result
  if (data.branch === "formation" && data.businessType === "brick-mortar")
    return 4; // start → btype → bm-state → privacy → result
  if (data.branch === "formation") return 3; // estimate
  return 3;
}

function getActiveIndex(data: WizardData): number {
  if (data.currentStep === "result") return getTotalDots(data);
  return data.history.length - 1;
}

/* ── Component ── */

export function PackageWizard() {
  const [data, dispatch] = useReducer(wizardReducer, initialState);

  const handleRestart = useCallback(() => dispatch({ type: "RESET" }), []);
  const handleBack = useCallback(() => dispatch({ type: "BACK" }), []);

  const isCollapsed = data.collapsed;
  const isResult = data.currentStep === "result";
  const showBackBtn = data.history.length > 1 && !isResult;

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
            <p className="mt-0.5 text-body text-muted">
              Answer a few questions &mdash; we&rsquo;ll match you with the
              right package
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
    if (isResult && data.branch) {
      const result = getRecommendation({
        branch: data.branch,
        businessType: data.businessType,
        formationState: data.formationState,
        operatingState: data.operatingState,
        wantsPrivacy: data.wantsPrivacy,
      });
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
          <WizardRecommendation result={result} onRestart={handleRestart} />
        </div>
      );
    }

    // Step screens
    const dir = data.direction > 0 ? "right" : "left";

    return (
      <div>
        {/* Progress dots */}
        <ProgressDots
          total={getTotalDots(data)}
          active={getActiveIndex(data)}
        />

        {/* Back button */}
        {showBackBtn && (
          <button
            type="button"
            onClick={handleBack}
            className="mb-4 inline-flex items-center gap-1 text-body-sm font-medium text-muted transition-colors hover:text-secondary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </button>
        )}

        {/* Step 1: Branch selection */}
        <WizardTransition show={data.currentStep === "start"} direction={dir}>
          <StepCards
            question={questions.start}
            options={branchOptions}
            stepAttr="start"
            onSelect={(id) =>
              dispatch({
                type: "SELECT_BRANCH",
                branch: id as WizardBranch,
              })
            }
          />
        </WizardTransition>

        {/* Step 2a: Business type */}
        <WizardTransition
          show={data.currentStep === "business-type"}
          direction={dir}
        >
          <StepCards
            question={questions.businessType}
            options={businessTypeOptions}
            stepAttr="business-type"
            onSelect={(id) =>
              dispatch({
                type: "SELECT_BUSINESS_TYPE",
                businessType: id as WizardBusinessType,
              })
            }
            footer={
              <div className="mt-3 text-center">
                <Link
                  to="/packages"
                  className="text-caption text-muted transition-colors hover:text-secondary"
                >
                  Looking for a pre-aged company? View shelf companies &rarr;
                </Link>
              </div>
            }
          />
        </WizardTransition>

        {/* Step 2b: AP state */}
        <WizardTransition
          show={data.currentStep === "ap-state"}
          direction={dir}
        >
          <StepCards
            question={questions.apState}
            options={apStateOptions}
            stepAttr="ap-state"
            onSelect={(id) =>
              dispatch({
                type: "SELECT_AP_STATE",
                state: id as WizardFormationState,
              })
            }
          />
        </WizardTransition>

        {/* Step 2c: B&M state */}
        <WizardTransition
          show={data.currentStep === "bm-state"}
          direction={dir}
        >
          <StepCards
            question={questions.bmState}
            options={bmStateOptions}
            stepAttr="bm-state"
            cols={3}
            onSelect={(id) =>
              dispatch({
                type: "SELECT_BM_STATE",
                state: id as WizardOperatingState,
              })
            }
          />
        </WizardTransition>

        {/* Step 3: Privacy question */}
        <WizardTransition show={data.currentStep === "privacy"} direction={dir}>
          <StepCards
            question={questions.privacy}
            options={privacyOptions}
            stepAttr="privacy"
            onSelect={(id) =>
              dispatch({
                type: "SELECT_PRIVACY",
                wantsPrivacy: id === "yes",
              })
            }
          />
        </WizardTransition>

        {/* Browse all packages escape hatch */}
        <div className="mt-6 text-center">
          <Link
            to="/packages"
            className="text-body-sm text-muted transition-colors hover:text-secondary"
            data-wizard-escape="true"
          >
            Or browse all packages &rarr;
          </Link>
        </div>
      </div>
    );
  })();

  // Wrap in card
  return (
    <div
      id="wizard"
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
          <div className="flex items-center gap-4">
            {!isResult && (
              <button
                type="button"
                onClick={() => dispatch({ type: "RESET" })}
                className="text-caption font-medium text-muted transition-colors hover:text-secondary"
              >
                Start over
              </button>
            )}
            <button
              type="button"
              onClick={() => dispatch({ type: "COLLAPSE" })}
              className="text-muted transition-colors hover:text-foreground"
              aria-label="Minimize wizard"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="px-6 py-6 sm:px-8 sm:py-8">{cardContent}</div>
    </div>
  );
}

PackageWizard.displayName = "PackageWizard";

/* ═══════════════════════════════════════════════════════════════════════════
   GENERIC STEP COMPONENT — renders question + card grid with auto-advance
   ═══════════════════════════════════════════════════════════════════════════ */

function StepCards({
  question,
  options,
  stepAttr,
  cols,
  onSelect,
  footer,
}: {
  question: { heading: string; subheading: string };
  options: Array<{
    id: string;
    icon: import("lucide-react").LucideIcon;
    title: string;
    subtitle: string;
    badge?: string;
  }>;
  stepAttr: string;
  cols?: 2 | 3;
  onSelect: (id: string) => void;
  footer?: ReactNode;
}) {
  const gridCols =
    cols === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2";

  return (
    <div>
      <div className="mb-6 text-center" data-wizard-step={stepAttr}>
        <h3 className="font-display text-heading-md font-bold text-foreground">
          {question.heading}
        </h3>
        <p className="mt-2 text-muted">{question.subheading}</p>
      </div>
      <div className={cn("grid gap-4", gridCols)}>
        {options.map((option) => (
          <WizardOptionCard
            key={option.id}
            icon={option.icon}
            title={option.title}
            subtitle={option.subtitle}
            badge={option.badge}
            selected={false}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
      {footer}
    </div>
  );
}
