import { useState, useEffect, useCallback } from "react";

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════

const GOALS = [
  {
    id: "privacy",
    label: "Business Privacy",
    desc: "Keep your name off public records with year-round nominee services",
    icon: "🔒",
    pillar: "privacy",
    defaultTier: "gold",
  },
  {
    id: "asset-protection",
    label: "Asset Protection",
    desc: "Shield personal assets from business liabilities with charging order protection",
    icon: "🛡️",
    pillar: "asset",
    defaultTier: "gold",
  },
  {
    id: "formation",
    label: "Form a Business",
    desc: "Set up an LLC or Corporation quickly and correctly",
    icon: "📋",
    pillar: "formation",
    defaultTier: "silver",
  },
  {
    id: "shelf",
    label: "Established Entity",
    desc: "Acquire a pre-aged company with an established history",
    icon: "🏛️",
    pillar: "neutral",
    defaultTier: "gold",
  },
];

const STATES = [
  {
    id: "wyoming",
    label: "Wyoming",
    desc: "Lowest cost, excellent privacy, minimal annual fees ($50/yr)",
  },
  {
    id: "nevada",
    label: "Nevada",
    desc: "Strongest asset protection, no IRS info sharing",
  },
  {
    id: "california",
    label: "California",
    desc: "I live or operate in CA and need my entity registered there",
  },
  {
    id: "florida",
    label: "Florida",
    desc: "I live or operate in FL and need my entity registered there",
  },
  {
    id: "unsure",
    label: "Not sure yet",
    desc: "Help me decide — show me a comparison",
  },
];

const TIERS = [
  {
    id: "gold",
    label: "Gold",
    desc: "Full privacy + compliance. Year-round nominees, offshore records, all filings handled.",
    color: "#d97706",
    bg: "#fef3c7",
  },
  {
    id: "silver",
    label: "Silver",
    desc: "Formation + managed compliance. Annual reports, corporate minutes, good standing.",
    color: "#64748b",
    bg: "#f1f5f9",
  },
  {
    id: "bronze",
    label: "Bronze",
    desc: "Basic formation + registered agent. You handle annual compliance yourself.",
    color: "#92400e",
    bg: "#fefce8",
  },
];

const PACKAGES = {
  "wyoming-gold": { name: "Wyoming Gold", llc: 1275, corp: 1575, renewLlc: 525, renewCorp: 625 },
  "wyoming-silver": { name: "Wyoming Silver", llc: 875, corp: 1175, renewLlc: 325, renewCorp: 425 },
  "wyoming-bronze": { name: "Wyoming Bronze", llc: 625, corp: 625, renewLlc: 225, renewCorp: 325 },
  "nevada-gold": { name: "Nevada Gold", llc: 1800, corp: 2100, renewLlc: 525, renewCorp: 625 },
  "nevada-silver": { name: "Nevada Silver", llc: 1275, corp: 1575, renewLlc: 325, renewCorp: 425 },
  "nevada-bronze": { name: "Nevada Bronze", llc: 699, corp: 899, renewLlc: 225, renewCorp: 325 },
  "california-private": { name: "California Private", llc: 1475, corp: 1775, renewLlc: 525, renewCorp: 625 },
  "florida-private": { name: "Florida Private", llc: 1475, corp: 1775, renewLlc: 525, renewCorp: 625 },
  "shelf-companies": { name: "Shelf Companies", llc: null, corp: null },
};

const FEATURES_BY_GOAL = {
  privacy: [
    { name: "Year-Round Nominee Directors", gold: true, silver: false, bronze: false },
    { name: "Year-Round Nominee Officers", gold: true, silver: false, bronze: false },
    { name: "Offshore Record Storage", gold: true, silver: false, bronze: false },
    { name: "State Filing Fees Included", gold: true, silver: true, bronze: true },
    { name: "Registered Agent (1 Year)", gold: true, silver: true, bronze: true },
    { name: "Corporate Minutes Maintenance", gold: true, silver: true, bronze: false },
  ],
  "asset-protection": [
    { name: "Charging Order Protection", gold: true, silver: true, bronze: true },
    { name: "Year-Round Nominee Privacy", gold: true, silver: false, bronze: false },
    { name: "Offshore Record Storage", gold: true, silver: false, bronze: false },
    { name: "Corporate Minutes Maintenance", gold: true, silver: true, bronze: false },
    { name: "Annual Report Filing", gold: true, silver: true, bronze: false },
    { name: "Certificate of Good Standing", gold: true, silver: true, bronze: false },
  ],
  formation: [
    { name: "State Filing Fees Included", gold: true, silver: true, bronze: true },
    { name: "Registered Agent (1 Year)", gold: true, silver: true, bronze: true },
    { name: "Annual Report Filing", gold: true, silver: true, bronze: false },
    { name: "Corporate Minutes Maintenance", gold: true, silver: true, bronze: false },
    { name: "Certificate of Good Standing", gold: true, silver: true, bronze: false },
    { name: "Year-Round Nominee Privacy", gold: true, silver: false, bronze: false },
  ],
};

const PILLAR_COLORS = {
  privacy: { full: "#2563eb", mid: "#93bbfd", soft: "#dbeafe", border: "#2563eb" },
  asset: { full: "#16a34a", mid: "#86efac", soft: "#dcfce7", border: "#16a34a" },
  formation: { full: "#d97706", mid: "#fcd34d", soft: "#fef3c7", border: "#d97706" },
  neutral: { full: "#64748b", mid: "#94a3b8", soft: "#f1f5f9", border: "#94a3b8" },
};

// ═══════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════

const styles = {
  wrapper: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    background: "var(--background, #f8fafc)",
    minHeight: "100vh",
    color: "var(--foreground, #0f172a)",
  },
  hero: {
    background: "linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)",
    padding: "56px 24px 48px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  heroPattern: {
    position: "absolute",
    inset: 0,
    opacity: 0.04,
    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
    backgroundSize: "32px 32px",
  },
  heroTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 14px",
    borderRadius: 20,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  heroTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: "clamp(28px, 5vw, 44px)",
    fontWeight: 800,
    color: "#fff",
    lineHeight: 1.15,
    margin: "0 0 14px",
    position: "relative",
  },
  heroSub: {
    fontSize: "clamp(15px, 2.5vw, 18px)",
    color: "rgba(255,255,255,0.65)",
    maxWidth: 520,
    margin: "0 auto 28px",
    lineHeight: 1.55,
  },
  heroCta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "14px 28px",
    background: "#d97706",
    color: "#fff",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 15,
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s",
    boxShadow: "0 2px 12px rgba(217,119,6,0.35)",
  },
  wizardSection: {
    maxWidth: 760,
    margin: "-32px auto 0",
    padding: "0 16px",
    position: "relative",
    zIndex: 10,
  },
  wizardCard: {
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
    overflow: "hidden",
  },
  wizardHeader: {
    padding: "28px 32px 0",
  },
  wizardBody: {
    padding: "20px 32px 32px",
  },
  stepTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 22,
    fontWeight: 700,
    color: "#0f172a",
    margin: "0 0 6px",
  },
  stepSub: {
    fontSize: 14,
    color: "#64748b",
    margin: 0,
  },
};

// ═══════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════

function ProgressBar({ step, total = 4 }) {
  const labels = ["Goal", "Location", "Package", "Result"];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, padding: "20px 32px", borderBottom: "1px solid #e2e8f0" }}>
      {labels.map((label, i) => {
        const s = i + 1;
        const isActive = s === step;
        const isDone = s < step;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: i < total - 1 ? 1 : "none" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, minWidth: 56 }}>
              <div
                style={{
                  width: 32, height: 32, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700,
                  background: isDone ? "#2563eb" : isActive ? "#2563eb" : "#e2e8f0",
                  color: isDone || isActive ? "#fff" : "#94a3b8",
                  transition: "all 0.3s",
                }}
              >
                {isDone ? "✓" : s}
              </div>
              <span style={{ fontSize: 11, fontWeight: isActive ? 700 : 500, color: isActive ? "#2563eb" : isDone ? "#2563eb" : "#94a3b8", transition: "all 0.3s" }}>
                {label}
              </span>
            </div>
            {i < total - 1 && (
              <div style={{ flex: 1, height: 2, background: isDone ? "#2563eb" : "#e2e8f0", margin: "0 8px", marginBottom: 20, borderRadius: 1, transition: "all 0.4s" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function OptionCard({ selected, onClick, pillarColor, icon, label, desc, price, badge, children }) {
  const isSelected = selected;
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: "16px 18px",
        background: isSelected ? (pillarColor?.soft || "#dbeafe") : "#fff",
        border: `2px solid ${isSelected ? (pillarColor?.border || "#2563eb") : "#e2e8f0"}`,
        borderRadius: 12,
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.2s",
        position: "relative",
        overflow: "hidden",
        minHeight: 90,
        width: "100%",
      }}
    >
      {pillarColor && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: pillarColor.full }} />
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {icon && <span style={{ fontSize: 22 }}>{icon}</span>}
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{label}</span>
        {badge && (
          <span style={{
            fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
            background: "#2563eb", color: "#fff", marginLeft: "auto", whiteSpace: "nowrap",
          }}>
            {badge}
          </span>
        )}
      </div>
      <span style={{ fontSize: 13, color: "#64748b", lineHeight: 1.45 }}>{desc}</span>
      {price !== undefined && price !== null && (
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, fontWeight: 700, color: "#0f172a", marginTop: 2 }}>
          ${price.toLocaleString()}
        </span>
      )}
      {children}
    </button>
  );
}

function NavButtons({ onBack, onNext, nextLabel = "Continue", nextDisabled = false, showBack = true }) {
  return (
    <div style={{ display: "flex", gap: 12, marginTop: 20, justifyContent: "space-between" }}>
      {showBack ? (
        <button
          onClick={onBack}
          style={{
            padding: "10px 20px", background: "transparent", border: "1px solid #e2e8f0",
            borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 600, color: "#64748b",
          }}
        >
          ← Back
        </button>
      ) : <div />}
      <button
        onClick={onNext}
        disabled={nextDisabled}
        style={{
          padding: "10px 24px", background: nextDisabled ? "#e2e8f0" : "#2563eb",
          color: nextDisabled ? "#94a3b8" : "#fff",
          border: "none", borderRadius: 8, cursor: nextDisabled ? "default" : "pointer",
          fontSize: 14, fontWeight: 700, transition: "all 0.2s",
        }}
      >
        {nextLabel} →
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN WIZARD
// ═══════════════════════════════════════════════════════════════

export default function PackageWizard() {
  const [step, setStep] = useState(0); // 0 = not started, 1-4 = steps
  const [goal, setGoal] = useState(null);
  const [stateChoice, setStateChoice] = useState(null);
  const [tier, setTier] = useState(null);
  const [entity, setEntity] = useState("llc");
  const [animDir, setAnimDir] = useState("right");
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((s, dir = "right") => {
    setAnimDir(dir);
    setAnimKey(k => k + 1);
    setStep(s);
  }, []);

  // Set default tier when goal changes
  useEffect(() => {
    if (goal) {
      const g = GOALS.find(g2 => g2.id === goal);
      if (g) setTier(g.defaultTier);
    }
  }, [goal]);

  // Resolve the recommended package
  const getPackageId = () => {
    if (!stateChoice || !tier) return null;
    if (stateChoice === "california") return "california-private";
    if (stateChoice === "florida") return "florida-private";
    return `${stateChoice}-${tier}`;
  };

  const pkgId = getPackageId();
  const pkg = pkgId ? PACKAGES[pkgId] : null;
  const price = pkg ? (entity === "llc" ? pkg.llc : pkg.corp) : null;
  const renewPrice = pkg ? (entity === "llc" ? pkg.renewLlc : pkg.renewCorp) : null;

  // Dynamic price for tier cards
  const getTierPrice = (t) => {
    if (!stateChoice) return null;
    const id = stateChoice === "california" || stateChoice === "florida" ? `${stateChoice}-private` : `${stateChoice}-${t}`;
    const p = PACKAGES[id];
    return p ? (entity === "llc" ? p.llc : p.corp) : null;
  };

  const goalObj = GOALS.find(g => g.id === goal);
  const pillarKey = goalObj?.pillar || "neutral";
  const pillarColor = PILLAR_COLORS[pillarKey];

  const isCAFL = stateChoice === "california" || stateChoice === "florida";

  // Context note for Step 2
  const stateContextNote = goal === "privacy"
    ? "Both Wyoming and Nevada offer excellent privacy. Wyoming is more affordable; Nevada adds stronger asset protection."
    : goal === "asset-protection"
    ? "Nevada has the strongest charging order protection. Wyoming is strong and significantly more affordable."
    : null;

  // Features for result
  const features = FEATURES_BY_GOAL[goal] || FEATURES_BY_GOAL.formation;

  const containerAnim = {
    animation: `slideIn${animDir === "right" ? "Right" : "Left"} 0.25s ease-out`,
  };

  return (
    <div style={styles.wrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; }
        @keyframes slideInRight { from { opacity:0; transform:translateX(30px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInLeft { from { opacity:0; transform:translateX(-30px); } to { opacity:1; transform:translateX(0); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        button:hover { filter: brightness(0.96); }
      `}</style>

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.heroPattern} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={styles.heroTag}>🔒 Privacy & Formation Specialists</div>
          <h1 style={styles.heroTitle}>
            Private Business Formation<br />
            <span style={{ color: "#d97706" }}>Done Right.</span>
          </h1>
          <p style={styles.heroSub}>
            Year-round nominee services, offshore records storage, and transparent all-inclusive pricing. Trusted for 25 years.
          </p>
          {step === 0 && (
            <button
              onClick={() => goTo(1)}
              style={styles.heroCta}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-1px)"}
              onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Find Your Package
              <span style={{ fontSize: 18 }}>→</span>
            </button>
          )}
        </div>
      </div>

      {/* WIZARD */}
      <div style={styles.wizardSection}>
        <div style={styles.wizardCard}>
          {step === 0 ? (
            /* COLLAPSED STATE */
            <button
              onClick={() => goTo(1)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "22px 32px", border: "none", background: "#fff", cursor: "pointer", gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #2563eb, #1e3a5f)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "#fff",
                }}>
                  ⚡
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 700, color: "#0f172a" }}>
                    Find Your Perfect Package in 60 Seconds
                  </div>
                  <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>
                    Answer 3 questions — we'll match you with the right package
                  </div>
                </div>
              </div>
              <span style={{
                padding: "8px 18px", background: "#2563eb", color: "#fff", borderRadius: 8,
                fontSize: 13, fontWeight: 700, whiteSpace: "nowrap",
              }}>
                Start →
              </span>
            </button>
          ) : (
            <>
              <ProgressBar step={step} />

              {/* ── STEP 1: GOAL ── */}
              {step === 1 && (
                <div key={`step-${animKey}`} style={containerAnim}>
                  <div style={styles.wizardHeader}>
                    <h2 style={styles.stepTitle}>What's your primary goal?</h2>
                    <p style={styles.stepSub}>Choose what matters most — this determines your recommended package tier.</p>
                  </div>
                  <div style={styles.wizardBody}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {GOALS.map(g => (
                        <OptionCard
                          key={g.id}
                          selected={goal === g.id}
                          onClick={() => { setGoal(g.id); setStateChoice(null); }}
                          pillarColor={PILLAR_COLORS[g.pillar]}
                          icon={g.icon}
                          label={g.label}
                          desc={g.desc}
                        />
                      ))}
                    </div>
                    <NavButtons
                      showBack={false}
                      onNext={() => {
                        if (goal === "shelf") {
                          goTo(4);
                        } else {
                          goTo(2);
                        }
                      }}
                      nextDisabled={!goal}
                    />
                  </div>
                </div>
              )}

              {/* ── STEP 2: STATE ── */}
              {step === 2 && (
                <div key={`step-${animKey}`} style={containerAnim}>
                  <div style={styles.wizardHeader}>
                    <h2 style={styles.stepTitle}>Where will you primarily operate?</h2>
                    <p style={styles.stepSub}>Your state determines pricing and available features.</p>
                  </div>
                  <div style={styles.wizardBody}>
                    {stateContextNote && (
                      <div style={{
                        padding: "10px 14px", borderRadius: 8, marginBottom: 14,
                        background: pillarColor.soft, border: `1px solid ${pillarColor.mid}`,
                        fontSize: 13, color: "#334155", lineHeight: 1.5,
                      }}>
                        💡 {stateContextNote}
                      </div>
                    )}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {STATES.map(s => (
                        <OptionCard
                          key={s.id}
                          selected={stateChoice === s.id}
                          onClick={() => setStateChoice(s.id)}
                          label={s.label}
                          desc={s.desc}
                          icon={s.id === "unsure" ? "🤔" : s.id === "wyoming" ? "🏔️" : s.id === "nevada" ? "🎰" : s.id === "california" ? "🌴" : "🌊"}
                        />
                      ))}
                    </div>
                    {/* Inline state comparison when "Not sure yet" is selected */}
                    {stateChoice === "unsure" && (
                      <div style={{
                        marginTop: 14, padding: "18px 20px", borderRadius: 12,
                        background: "#f8fafc", border: "1px solid #e2e8f0",
                        animation: "fadeUp 0.25s ease-out",
                      }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12, fontFamily: "'Outfit', sans-serif" }}>
                          State Comparison — Which is right for you?
                        </div>
                        <div style={{ overflowX: "auto" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "minmax(100px,1.2fr) 1fr 1fr 1fr 1fr", gap: 0, fontSize: 12, minWidth: 520 }}>
                            {[
                              ["", "🏔️ Wyoming", "🎰 Nevada", "🌴 California", "🌊 Florida"],
                              ["Gold LLC", "$1,275", "$1,800", "$1,475", "$1,475"],
                              ["Annual State Fees", "~$50/yr", "~$350/yr", "~$820/yr*", "~$139/yr"],
                              ["Privacy", "Excellent", "Excellent", "Good (via WY/NV)", "Good (via WY/NV)"],
                              ["Asset Protection", "Strong", "Strongest", "Moderate", "Strong"],
                              ["IRS Info Sharing", "Standard", "None", "Standard", "Standard"],
                              ["Best For", "Privacy + value", "Privacy + AP", "CA residents", "FL residents"],
                            ].map((row, ri) => (
                              row.map((cell, ci) => (
                                <div key={`${ri}-${ci}`} style={{
                                  padding: "7px 8px",
                                  fontWeight: ri === 0 || ci === 0 ? 600 : 400,
                                  color: ri === 0 ? "#2563eb" : ci === 0 ? "#64748b" : "#0f172a",
                                  fontSize: ri === 0 ? 11 : 11,
                                  borderBottom: ri < 6 ? "1px solid #e2e8f0" : "none",
                                  background: ri === 0 ? "#fff" : "transparent",
                                  whiteSpace: ri === 0 ? "nowrap" : "normal",
                                }}>
                                  {cell}
                                </div>
                              ))
                            ))}
                          </div>
                        </div>
                        <div style={{ marginTop: 6, fontSize: 11, color: "#94a3b8" }}>
                          *CA includes $800/yr minimum franchise tax for LLCs. CA & FL Private packages bundle a WY/NV Gold formation with foreign state registration.
                        </div>
                        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
                          {[
                            { id: "wyoming", label: "Wyoming" },
                            { id: "nevada", label: "Nevada" },
                            { id: "california", label: "California" },
                            { id: "florida", label: "Florida" },
                          ].map(s => (
                            <button
                              key={s.id}
                              onClick={() => setStateChoice(s.id)}
                              style={{
                                padding: "10px 6px", borderRadius: 8, border: "1px solid #e2e8f0",
                                background: "#fff", cursor: "pointer", fontSize: 12, fontWeight: 600, color: "#0f172a",
                                transition: "all 0.15s",
                              }}
                            >
                              Choose {s.label}
                            </button>
                          ))}
                        </div>
                        <div style={{ marginTop: 10, textAlign: "center" }}>
                          <a href="/compare-states/" style={{ fontSize: 12, color: "#2563eb", fontWeight: 500, textDecoration: "none" }}>
                            Read the full state-by-state comparison →
                          </a>
                        </div>
                      </div>
                    )}
                    <NavButtons
                      onBack={() => goTo(1, "left")}
                      onNext={() => {
                        if (isCAFL) {
                          setTier("gold");
                          goTo(3);
                        } else {
                          goTo(3);
                        }
                      }}
                      nextDisabled={!stateChoice || stateChoice === "unsure"}
                    />
                  </div>
                </div>
              )}

              {/* ── STEP 3: TIER + ENTITY ── */}
              {step === 3 && (
                <div key={`step-${animKey}`} style={containerAnim}>
                  <div style={styles.wizardHeader}>
                    <h2 style={styles.stepTitle}>Choose your entity type and service level</h2>
                    <p style={styles.stepSub}>
                      {isCAFL
                        ? `The ${stateChoice === "california" ? "California" : "Florida"} Private package includes full Gold-level formation. Choose your entity type below.`
                        : "Pick your entity type first, then select how much ongoing support you need."}
                    </p>
                  </div>
                  <div style={styles.wizardBody}>
                    {/* Entity Toggle — FIRST */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                        Entity Type
                      </div>
                      <div style={{ display: "flex", gap: 10 }}>
                        {[
                          { id: "llc", label: "LLC", desc: "Flexible, simple, best for most" },
                          { id: "corp", label: "Corporation", desc: "Formal structure, stock issuance" },
                        ].map(e => (
                          <button
                            key={e.id}
                            onClick={() => setEntity(e.id)}
                            style={{
                              flex: 1, padding: "14px 16px", borderRadius: 10,
                              border: `2px solid ${entity === e.id ? "#2563eb" : "#e2e8f0"}`,
                              background: entity === e.id ? "#dbeafe" : "#fff",
                              cursor: "pointer", textAlign: "left",
                            }}
                          >
                            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{e.label}</div>
                            <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{e.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tier Selection — SECOND (hidden for CA/FL) */}
                    {!isCAFL && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Service Level
                        </div>
                        {TIERS.map(t => {
                          const tierPrice = getTierPrice(t.id);
                          const isDefault = goalObj?.defaultTier === t.id;
                          return (
                            <OptionCard
                              key={t.id}
                              selected={tier === t.id}
                              onClick={() => setTier(t.id)}
                              label={t.label}
                              desc={t.desc}
                              price={tierPrice}
                              badge={isDefault ? "Recommended" : undefined}
                            />
                          );
                        })}
                        {/* Upsell nudge */}
                        {tier !== "gold" && (goal === "privacy" || goal === "asset-protection") && (
                          <div style={{
                            padding: "10px 14px", borderRadius: 8,
                            background: "#fef3c7", border: "1px solid #fcd34d",
                            fontSize: 12, color: "#92400e", lineHeight: 1.5,
                          }}>
                            ⚠️ Without Gold, your personal name will appear on public state records.
                          </div>
                        )}
                      </div>
                    )}

                    <NavButtons
                      onBack={() => goTo(2, "left")}
                      onNext={() => goTo(4)}
                      nextLabel="See My Recommendation"
                    />
                  </div>
                </div>
              )}

              {/* ── STEP 4: RESULT ── */}
              {step === 4 && (
                <div key={`step-${animKey}`} style={{ animation: "scaleIn 0.3s ease-out" }}>
                  <div style={styles.wizardHeader}>
                    <h2 style={styles.stepTitle}>
                      {goal === "shelf" ? "Shelf Companies — Browse Available Inventory" : "Here's your recommended package"}
                    </h2>
                  </div>
                  <div style={styles.wizardBody}>
                    {goal === "shelf" ? (
                      /* SHELF COMPANY RESULT */
                      <div style={{
                        padding: 24, borderRadius: 12, border: "1px solid #e2e8f0",
                        background: "#f8fafc", textAlign: "center",
                      }}>
                        <div style={{ fontSize: 48, marginBottom: 12 }}>🏛️</div>
                        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                          Shelf Companies
                        </div>
                        <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, maxWidth: 400, margin: "0 auto 20px" }}>
                          Shelf companies are inventory-based with unique pricing per entity, starting from $1,500. Each comes with a Gold Renewal Package for full nominee privacy and compliance management.
                        </p>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 24, fontWeight: 700, color: "#0f172a", marginBottom: 20 }}>
                          From $1,500 – $5,000+
                        </div>
                        <button
                          style={{
                            padding: "14px 32px", background: "#d97706", color: "#fff",
                            border: "none", borderRadius: 8, fontWeight: 700, fontSize: 15,
                            cursor: "pointer", boxShadow: "0 2px 12px rgba(217,119,6,0.3)",
                          }}
                        >
                          Browse Available Entities →
                        </button>
                        <div style={{ marginTop: 14 }}>
                          <button onClick={() => { setGoal(null); goTo(1, "left"); }} style={{ background: "none", border: "none", color: "#2563eb", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                            ← Start over
                          </button>
                        </div>
                      </div>
                    ) : pkg ? (
                      /* PACKAGE RESULT */
                      <div style={{
                        borderRadius: 14, border: `2px solid ${pillarColor.border}`,
                        overflow: "hidden",
                      }}>
                        {/* Package Header */}
                        <div style={{
                          padding: "20px 24px",
                          background: `linear-gradient(135deg, ${pillarColor.soft}, #fff)`,
                          borderBottom: `1px solid ${pillarColor.mid}`,
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <span style={{
                              fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 6,
                              background: pillarColor.full, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em",
                            }}>
                              {goal === "privacy" ? "Recommended for Privacy" :
                               goal === "asset-protection" ? "Recommended for Asset Protection" :
                               "Your Match"}
                            </span>
                          </div>
                          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 24, fontWeight: 800, color: "#0f172a" }}>
                            {pkg.name} {entity === "llc" ? "LLC" : "Corporation"}
                          </div>
                        </div>

                        {/* Pricing */}
                        <div style={{ padding: "20px 24px", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "baseline", gap: 12 }}>
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 36, fontWeight: 700, color: "#0f172a" }}>
                            ${price?.toLocaleString()}
                          </span>
                          <span style={{ fontSize: 14, color: "#64748b" }}>one-time formation</span>
                        </div>
                        {renewPrice && (
                          <div style={{ padding: "10px 24px", borderBottom: "1px solid #e2e8f0", fontSize: 13, color: "#64748b" }}>
                            Annual renewal: <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: "#0f172a" }}>${renewPrice}/yr</span>
                          </div>
                        )}

                        {/* CA Tax Warning */}
                        {stateChoice === "california" && (
                          <div style={{ padding: "10px 24px", background: "#fef3c7", fontSize: 12, color: "#92400e", borderBottom: "1px solid #fcd34d" }}>
                            ⚠️ California imposes an $800/yr minimum franchise tax on all LLCs, in addition to the package price.
                          </div>
                        )}

                        {/* Features */}
                        <div style={{ padding: "16px 24px" }}>
                          {features.map((f, i) => {
                            const included = f[tier] !== undefined ? f[tier] : f.gold;
                            return (
                              <div key={i} style={{
                                display: "flex", alignItems: "center", gap: 10,
                                padding: "8px 0", borderBottom: i < features.length - 1 ? "1px solid #f1f5f9" : "none",
                              }}>
                                <span style={{
                                  width: 20, height: 20, borderRadius: "50%",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  fontSize: 11, fontWeight: 700,
                                  background: included ? "#dcfce7" : "#fee2e2",
                                  color: included ? "#16a34a" : "#dc2626",
                                }}>
                                  {included ? "✓" : "✕"}
                                </span>
                                <span style={{ fontSize: 13, color: included ? "#0f172a" : "#94a3b8", textDecoration: included ? "none" : "line-through" }}>
                                  {f.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* CTAs */}
                        <div style={{ padding: "0 24px 24px" }}>
                          <button
                            style={{
                              width: "100%", padding: "15px", background: "#d97706", color: "#fff",
                              border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15,
                              cursor: "pointer", boxShadow: "0 2px 12px rgba(217,119,6,0.3)",
                              marginBottom: 10,
                            }}
                          >
                            Start My {stateChoice ? stateChoice.charAt(0).toUpperCase() + stateChoice.slice(1) : ""} {entity === "llc" ? "LLC" : "Corporation"} — ${price?.toLocaleString()}
                          </button>
                          <button
                            style={{
                              width: "100%", padding: "12px", background: "transparent",
                              border: "1px solid #e2e8f0", borderRadius: 10,
                              fontSize: 13, fontWeight: 600, color: "#2563eb", cursor: "pointer",
                              marginBottom: 12,
                            }}
                          >
                            View Full Package Details →
                          </button>
                          <div style={{ textAlign: "center" }}>
                            <button style={{ background: "none", border: "none", color: "#64748b", fontSize: 12, cursor: "pointer" }}>
                              Not sure? Talk to our team →
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* Restart */}
                    {goal !== "shelf" && (
                      <div style={{ textAlign: "center", marginTop: 16 }}>
                        <button
                          onClick={() => { setGoal(null); setStateChoice(null); setTier(null); setEntity("llc"); goTo(1, "left"); }}
                          style={{ background: "none", border: "none", color: "#2563eb", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
                        >
                          ← Start over with different options
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* TRUST STRIP */}
      <div style={{
        maxWidth: 760, margin: "32px auto", padding: "0 16px",
        display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap",
      }}>
        {[
          { icon: "🏢", text: "25 Years Experience" },
          { icon: "🔐", text: "Year-Round Nominees" },
          { icon: "💰", text: "All-Inclusive Pricing" },
          { icon: "₿", text: "Crypto Accepted" },
        ].map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#64748b", fontWeight: 500 }}>
            <span>{t.icon}</span> {t.text}
          </div>
        ))}
      </div>
    </div>
  );
}
