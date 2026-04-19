import { useEffect, useRef } from "react";

import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface HeadlineSegment {
  text: string;
  highlight?: boolean;
}

export interface HeroStat {
  value: string;
  unit: string;
  label: string;
}

export interface HomepageHeroProps {
  headlineLines: HeadlineSegment[][];
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  eyebrow?: string;
  phone?: string;
  consultationHref?: string;
  stats?: HeroStat[];
  className?: string;
}

/* ------------------------------------------------
   Particle Canvas Background
   ------------------------------------------------ */
function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const runningRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Read particle color from CSS custom property (theme-agnostic on dark hero)
    const particleRgb =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--hero-particle-rgb")
        .trim() || "96,165,250";

    let W = 0;
    let H = 0;

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.r = Math.random() * 1.5 + 0.5;
        this.a = Math.random() * 0.3 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${particleRgb},${this.a})`;
        ctx!.fill();
      }
    }

    resize();
    const count = Math.min(80, Math.floor((W * H) / 15000));
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) particles.push(new Particle());

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(${particleRgb},${0.06 * (1 - d / 160)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
    }

    let animId: number;
    function anim() {
      if (runningRef.current) {
        ctx!.clearRect(0, 0, W, H);
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
        drawLines();
      }
      animId = requestAnimationFrame(anim);
    }
    anim();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------
   Orbital Constellation (right-side visual)
   ------------------------------------------------ */
function HeroConstellation() {
  return (
    <div
      className="relative w-[380px] h-[420px] flex items-center justify-center mx-auto animate-hero-fade-in"
      style={{ animationDelay: "500ms" }}
      aria-hidden="true"
    >
      {/* Orbital rings */}
      <div className="absolute inset-0 rounded-full border border-white/[0.025] animate-[spin_90s_linear_infinite]">
        <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_20px_rgba(37,99,235,0.6),0_0_60px_rgba(37,99,235,0.2)]" />
      </div>
      <div className="absolute inset-[45px] rounded-full border border-secondary/[0.07] animate-[spin_60s_linear_infinite_reverse]">
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-success shadow-[0_0_16px_rgba(22,163,74,0.5)]" />
      </div>
      <div className="absolute inset-[90px] rounded-full border border-white/[0.02] animate-[spin_45s_linear_infinite]">
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(217,119,6,0.5)]" />
      </div>

      {/* Central shield */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[150px] h-[170px] animate-[breathe_8s_ease-in-out_infinite]">
          <svg
            viewBox="0 0 180 200"
            fill="none"
            className="w-full h-full drop-shadow-[0_0_60px_rgba(37,99,235,0.3)]"
          >
            <path
              d="M90 12L166 50C166 50 174 142 90 188C6 142 14 50 14 50Z"
              fill="url(#sg)"
              stroke="url(#ss)"
              strokeWidth="1.5"
            />
            <path
              d="M90 32L146 58C146 58 152 130 90 168C28 130 34 58 34 58Z"
              fill="none"
              stroke="rgba(96,165,250,.06)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            <defs>
              <linearGradient id="sg" x1="90" y1="12" x2="90" y2="188">
                <stop stopColor="#2563eb" stopOpacity=".12" />
                <stop offset="1" stopColor="#0c1e35" stopOpacity=".35" />
              </linearGradient>
              <linearGradient id="ss" x1="90" y1="12" x2="90" y2="188">
                <stop stopColor="#60a5fa" stopOpacity=".3" />
                <stop offset="1" stopColor="#2563eb" stopOpacity=".06" />
              </linearGradient>
            </defs>
            {/* Lock body */}
            <rect
              x="62"
              y="88"
              width="56"
              height="44"
              rx="10"
              fill="url(#lg)"
            />
            <linearGradient id="lg" x1="90" y1="88" x2="90" y2="132">
              <stop stopColor="#60a5fa" stopOpacity=".5" />
              <stop offset="1" stopColor="#2563eb" stopOpacity=".5" />
            </linearGradient>
            {/* Lock shackle */}
            <path
              d="M72 88V76C72 64 108 64 108 76V88"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="3"
              strokeLinecap="round"
              opacity=".4"
            />
            {/* Lock keyhole */}
            <circle cx="90" cy="106" r="6" fill="white" opacity=".8" />
            <rect
              x="88"
              y="110"
              width="4"
              height="12"
              rx="2"
              fill="white"
              opacity=".55"
            />
          </svg>
        </div>
      </div>

      {/* Floating glass cards */}
      <div className="absolute top-[6%] right-[2%] flex items-center gap-3 rounded-2xl bg-white/[0.035] backdrop-blur-xl border border-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.2)] px-4 py-3 animate-[float_7s_ease-in-out_infinite]">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/20">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-[var(--blue-light,#60a5fa)] fill-none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
            <circle cx="12" cy="16" r="1" />
          </svg>
        </div>
        <div>
          <p className="text-caption font-bold text-white leading-tight">
            Privacy
          </p>
          <p className="text-[9px] text-white/30 font-mono">
            Year-round nominees
          </p>
        </div>
      </div>

      <div className="absolute bottom-[22%] left-[-2%] flex items-center gap-3 rounded-2xl bg-white/[0.035] backdrop-blur-xl border border-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.2)] px-4 py-3 animate-[float_7s_ease-in-out_infinite] [animation-delay:-2.3s]">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/15">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-[#4ade80] fill-none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div>
          <p className="text-caption font-bold text-white leading-tight">
            Protection
          </p>
          <p className="text-[9px] text-white/30 font-mono">Charging order</p>
        </div>
      </div>

      <div className="absolute top-[48%] right-[-4%] flex items-center gap-3 rounded-2xl bg-white/[0.035] backdrop-blur-xl border border-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.2)] px-4 py-3 animate-[float_7s_ease-in-out_infinite] [animation-delay:-4.6s]">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-[var(--amber-light,#fbbf24)] fill-none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <div>
          <p className="text-caption font-bold text-white leading-tight">
            Formation
          </p>
          <p className="text-[9px] text-white/30 font-mono">All-inclusive</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function HomepageHero({
  headlineLines,
  subheadline,
  primaryCTA,
  secondaryCTA,
  eyebrow,
  phone,
  consultationHref,
  stats,
  className,
}: HomepageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Background layers */}
      <div className="absolute inset-0 bg-primary" />
      <HeroCanvas />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: [
            "radial-gradient(ellipse 70% 50% at 65% 45%, var(--gradient-glow-blue), transparent 60%)",
            "radial-gradient(ellipse 50% 60% at 25% 75%, var(--gradient-glow-purple), transparent 50%)",
            "radial-gradient(ellipse 40% 40% at 80% 85%, var(--gradient-glow-amber), transparent 50%)",
          ].join(","),
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 30%, var(--gradient-vignette))",
        }}
      />
      {/* Grain texture */}
      <GrainOverlay opacity="opacity-[0.35]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-content px-container-x pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Eyebrow chip */}
            {eyebrow && (
              <div
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 mb-9 animate-hero-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white/80" />
                </span>
                <span className="text-caption font-semibold tracking-[0.14em] uppercase text-white/70">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Headline with gradient highlights */}
            <h1 className="font-display type-display-xl font-black text-white">
              {headlineLines.map((line, lineIndex) => (
                <span key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line.map((segment, segIndex) => (
                    <span
                      key={segIndex}
                      className={cn(
                        "inline-block animate-hero-fade-up",
                        segment.highlight && "hero-gradient-text",
                      )}
                      style={{
                        animationDelay: `${lineIndex * 250 + segIndex * 120 + 400}ms`,
                        animation: segment.highlight
                          ? `hero-fade-up var(--duration-hero) var(--ease-out-expo) ${lineIndex * 250 + segIndex * 120 + 400}ms both, shimmer 10s ease infinite`
                          : undefined,
                      }}
                    >
                      {segment.text}
                      {segIndex < line.length - 1 && "\u00A0"}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              className="mt-8 text-body-lg leading-[1.8] text-white/70 max-w-[480px] tracking-[-0.02em] animate-hero-fade-up"
              style={{ animationDelay: "900ms" }}
            >
              {subheadline}
            </p>

            {/* Dual CTAs */}
            <div
              className="mt-10 flex flex-col gap-3.5 sm:flex-row animate-hero-fade-up"
              style={{ animationDelay: "1100ms" }}
            >
              <Button variant="cta" size="lg" asChild className="rounded-xl">
                <a href={primaryCTA.href}>{primaryCTA.label}</a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="rounded-xl border-white/20 text-white hover:bg-white/10"
              >
                <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
              </Button>
            </div>

            {/* Safety net with links */}
            {phone && (
              <p
                className="mt-5 text-body text-white/75 animate-hero-fade-in"
                style={{ animationDelay: "1300ms" }}
              >
                Prefer to talk?{" "}
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="text-white/75 underline underline-offset-[3px] decoration-white/30 hover:text-white hover:decoration-white transition-all"
                >
                  Call {phone}
                </a>
                {consultationHref && (
                  <>
                    {" · "}
                    <a
                      href={consultationHref}
                      className="text-white/75 underline underline-offset-[3px] decoration-white/30 hover:text-white hover:decoration-white transition-all"
                    >
                      Schedule a consultation
                    </a>
                  </>
                )}
              </p>
            )}

            {/* Hero Stats Bar */}
            {stats && stats.length > 0 && (
              <div
                className="mt-16 flex rounded-card-lg bg-white/[0.07] border border-white/[0.12] overflow-hidden animate-hero-fade-up"
                style={{ animationDelay: "1400ms" }}
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={cn(
                      "flex-1 py-5 px-6 text-center",
                      index > 0 && "border-l border-white/[0.15]",
                    )}
                  >
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display text-heading-lg font-semibold text-white/90 tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-body-sm text-white/70">
                        {stat.unit}
                      </span>
                    </div>
                    <p className="mt-1 text-caption text-white/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right visual — constellation, hidden on mobile */}
          <div className="hidden lg:block">
            <HeroConstellation />
          </div>
        </div>
      </div>
    </section>
  );
}

HomepageHero.displayName = "HomepageHero";

export { HomepageHero };
