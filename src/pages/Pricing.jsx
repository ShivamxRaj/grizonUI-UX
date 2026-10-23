import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const quickSliderId = useId();
  const deepSliderId = useId();
  const routinesSliderId = useId();

  const [quickQueries, setQuickQueries] = useState(15);
  const [deepSessions, setDeepSessions] = useState(5);
  const [scheduledRoutines, setScheduledRoutines] = useState(3);

  // Live calculations
  const dailyBurn = quickQueries * 1.0 + deepSessions * 3.5 + scheduledRoutines * 4.0;
  const monthlyBurn = Math.round(dailyBurn * 30);

  const pctQuick = dailyBurn > 0 ? ((quickQueries * 1.0) / dailyBurn) * 100 : 33.3;
  const pctDeep = dailyBurn > 0 ? ((deepSessions * 3.5) / dailyBurn) * 100 : 33.3;
  const pctRoutines = dailyBurn > 0 ? ((scheduledRoutines * 4.0) / dailyBurn) * 100 : 33.4;

  let recommendedPlanBadge = 'Recommended: Professional Plan ($29/mo)';
  let recommendedPlanDesc = `Includes 2,500 monthly credits. Leaves a ~${(
    2500 - monthlyBurn
  ).toLocaleString()} credit buffer for unpredictable caseload peaks, multi-dossier weeks, and 90-day rollover security.`;

  if (monthlyBurn <= 150) {
    recommendedPlanBadge = 'Recommended: Explorer Plan ($0/mo)';
    recommendedPlanDesc =
      'Your daily workload fits inside the complimentary 150 monthly credits allowance. Perfect for early exploration.';
  } else if (monthlyBurn > 2500) {
    const buffer = Math.max(0, 10000 - monthlyBurn).toLocaleString();
    recommendedPlanBadge = 'Recommended: Practice & Desk ($99/mo)';
    recommendedPlanDesc = `High-velocity research detected. Delivers 10,000 credits/mo with ~${buffer} headroom buffer, dedicated AWS Nitro Enclaves, and multi-user collaboration.`;
  }

  return (
    <div className="w-full flex flex-col bg-alabaster">
      <main className="pt-10 md:pt-14 pb-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* =====================================================================
            1. EDITORIAL HEADER
        ====================================================================== */}
        <header className="max-w-3xl pt-4 pb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-terracotta-soft border border-terracotta/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-terracotta">
              Transparent Credit Economy
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.14] text-charcoal tracking-tight mb-6">
            Fair, transparent credits calibrated to the depth of the work.
          </h1>
          <p className="font-sans text-lg sm:text-xl text-mutedInk font-normal leading-relaxed">
            No hidden tokens or opaque markups. 1 to 10 credits per interaction based purely on model depth and live institutional tool executions.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-hairline font-mono text-xs text-mutedInk">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
              <span>Deterministic Audit Ledger</span>
            </div>
            <span className="text-hairline">•</span>
            <div>Live Sovereign API Feeds</div>
            <span className="text-hairline">•</span>
            <div>India DPDP Enclave Isolation</div>
          </div>
        </header>

        {/* =====================================================================
            2. SECTION 1: THE 1 TO 10 CREDIT TIER SPECTRUM
        ====================================================================== */}
        <section className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-hairline mb-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-terracotta font-medium tracking-widest">01</span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-mutedInk">
                The Credit Spectrum / 1 to 10 Units
              </h2>
            </div>
            <span className="font-sans text-xs text-mutedInk">Measured via deterministic tool telemetry</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <article className="bg-surfacePure p-8 rounded-lg border border-hairline flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-mutedInk/40 transition-all duration-200">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-hairline">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-alabaster text-charcoal border border-hairline">
                    1.0 Credit
                  </span>
                  <span className="font-mono text-xs text-mutedInk uppercase">Tier I</span>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-2 font-normal">Lightweight &amp; Fast</h3>
                <p className="font-sans text-sm text-mutedInk leading-relaxed mb-6 font-normal">
                  General Q&amp;A, concept definitions, summary briefs, and instantaneous mathematical sanity checks via Flash and distilled reasoning models.
                </p>
                <div className="bg-alabaster p-4 rounded border border-hairline/80 space-y-2 mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-mutedInk font-medium block">
                    Key Execution Traits
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-charcoal">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                      <span>Sub-800ms latency responses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                      <span>Zero live external tool overhead</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                      <span>Cached prompt acceleration</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-hairline/60">
                <span className="font-mono text-[10px] uppercase tracking-wider text-mutedInk block mb-1">
                  Typical Interactions
                </span>
                <div className="font-display italic text-xs text-mutedInk space-y-1">
                  <div>“Define Section 43B(h) MSME compliance date”</div>
                  <div>“Quick regex for IFSC / PAN identification”</div>
                </div>
              </div>
            </article>

            {/* Tier 2 */}
            <article className="bg-surfacePure p-8 rounded-lg border border-hairline flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-mutedInk/40 transition-all duration-200">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-hairline">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-terracotta-soft text-terracotta border border-terracotta/20">
                    1.5 – 4.0 Credits
                  </span>
                  <span className="font-mono text-xs text-mutedInk uppercase">Tier II</span>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-2 font-normal">Specialist &amp; Live API Lookup</h3>
                <p className="font-sans text-sm text-mutedInk leading-relaxed mb-6 font-normal">
                  Targeted research queries, live eCourts CNR case verification, live NSE/BSE option chains, and symbolic mathematical proofs via Claude and GPT-4o.
                </p>
                <div className="bg-alabaster p-4 rounded border border-hairline/80 space-y-2 mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-mutedInk font-medium block">
                    Key Execution Traits
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-charcoal">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                      <span>Deterministic sandboxed Python runtime</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                      <span>Real-time Indian institutional endpoints</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                      <span>Direct provenance citation injection</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-hairline/60">
                <span className="font-mono text-[10px] uppercase tracking-wider text-mutedInk block mb-1">
                  Typical Interactions
                </span>
                <div className="font-display italic text-xs text-mutedInk space-y-1">
                  <div>“Fetch Delhi HC commercial bench cause list”</div>
                  <div>“Compute Black-Scholes greeks on NIFTY 24500 CE”</div>
                </div>
              </div>
            </article>

            {/* Tier 3 */}
            <article className="bg-surfacePure p-8 rounded-lg border border-hairline flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-mutedInk/40 transition-all duration-200">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-hairline">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-botanical text-white border border-botanical">
                    5.0 – 10.0 Credits
                  </span>
                  <span className="font-mono text-xs text-mutedInk uppercase">Tier III</span>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-2 font-normal">Deep Artifact &amp; Synthesis</h3>
                <p className="font-sans text-sm text-mutedInk leading-relaxed mb-6 font-normal">
                  Autonomous DAG executions, complete interactive Dev Studio UI prototypes, multi-source deep research dossiers, and complete 20-page legal petitions.
                </p>
                <div className="bg-alabaster p-4 rounded border border-hairline/80 space-y-2 mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-mutedInk font-medium block">
                    Key Execution Traits
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-charcoal">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                      <span>Adversarial verification loop across multi-LLMs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                      <span>Multi-source MCA21 &amp; Gazette crosswalks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                      <span>Export-grade verified artifact compiling</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-hairline/60">
                <span className="font-mono text-[10px] uppercase tracking-wider text-mutedInk block mb-1">
                  Typical Interactions
                </span>
                <div className="font-display italic text-xs text-mutedInk space-y-1">
                  <div>“Draft complete 18-page Commercial Appeal Writ”</div>
                  <div>“Build full portfolio stress-testing model in Studio”</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* =====================================================================
            3. SECTION 2: INTERACTIVE MONTHLY CREDIT & TASK BURN ESTIMATOR
        ====================================================================== */}
        <section className="mb-28">
          <div className="flex items-center gap-3 pb-6 border-b border-hairline mb-8">
            <span className="font-mono text-xs text-terracotta font-medium tracking-widest">02</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-mutedInk">
              Burn Estimator &amp; Capacity Planner
            </h2>
          </div>

          <div className="bg-surfacePure rounded-xl border border-hairline p-8 lg:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Sliders Left (7 cols) */}
              <div className="lg:col-span-7 space-y-9">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-charcoal mb-2 font-normal">
                    Calibrate your expected tempo.
                  </h3>
                  <p className="font-sans text-sm text-mutedInk">
                    Adjust the sliders based on your chambers' or desk's daily operations. Median deterministic values applied transparently.
                  </p>
                </div>

                {/* Slider 1 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label
                      htmlFor={quickSliderId}
                      className="font-sans text-xs uppercase tracking-wider font-semibold text-charcoal"
                    >
                      Quick everyday queries <span className="font-mono font-normal text-mutedInk">(1.0 C)</span>
                    </label>
                    <div className="font-mono text-sm text-charcoal">
                      <span className="font-semibold text-botanical">{quickQueries}</span>
                      <span className="text-mutedInk text-xs"> / day</span>
                    </div>
                  </div>
                  <input
                    id={quickSliderId}
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={quickQueries}
                    onChange={(e) => setQuickQueries(Number(e.target.value))}
                    className="w-full accent-botanical cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-mutedInk">
                    <span>0</span>
                    <span>50</span>
                    <span>100 queries</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label
                      htmlFor={deepSliderId}
                      className="font-sans text-xs uppercase tracking-wider font-semibold text-charcoal"
                    >
                      Deep specialist sessions <span className="font-mono font-normal text-mutedInk">(3.5 C avg)</span>
                    </label>
                    <div className="font-mono text-sm text-charcoal">
                      <span className="font-semibold text-botanical">{deepSessions}</span>
                      <span className="text-mutedInk text-xs"> / day</span>
                    </div>
                  </div>
                  <input
                    id={deepSliderId}
                    type="range"
                    min="0"
                    max="30"
                    step="1"
                    value={deepSessions}
                    onChange={(e) => setDeepSessions(Number(e.target.value))}
                    className="w-full accent-botanical cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-mutedInk">
                    <span>0</span>
                    <span>15</span>
                    <span>30 sessions</span>
                  </div>
                </div>

                {/* Slider 3 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label
                      htmlFor={routinesSliderId}
                      className="font-sans text-xs uppercase tracking-wider font-semibold text-charcoal"
                    >
                      Scheduled multi-run tasks <span className="font-mono font-normal text-mutedInk">(4.0 C avg)</span>
                    </label>
                    <div className="font-mono text-sm text-charcoal">
                      <span className="font-semibold text-botanical">{scheduledRoutines}</span>
                      <span className="text-mutedInk text-xs"> / day</span>
                    </div>
                  </div>
                  <input
                    id={routinesSliderId}
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={scheduledRoutines}
                    onChange={(e) => setScheduledRoutines(Number(e.target.value))}
                    className="w-full accent-botanical cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-mutedInk">
                    <span>0</span>
                    <span>10</span>
                    <span>20 runs</span>
                  </div>
                </div>

                {/* Proportion Breakdown Bar */}
                <div className="pt-2">
                  <div className="flex justify-between text-[11px] font-mono uppercase text-mutedInk mb-2">
                    <span>Load Composition</span>
                    <span>100% Calculated</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-alabaster border border-hairline overflow-hidden flex">
                    <div
                      className="bg-botanical h-full transition-all duration-150"
                      style={{ width: `${pctQuick}%` }}
                    />
                    <div
                      className="bg-terracotta h-full transition-all duration-150"
                      style={{ width: `${pctDeep}%` }}
                    />
                    <div
                      className="bg-mutedInk h-full transition-all duration-150"
                      style={{ width: `${pctRoutines}%` }}
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-[11px] font-mono text-mutedInk">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-botanical"></span>
                      <span>Quick Tasks</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-terracotta"></span>
                      <span>Specialist Research</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-mutedInk"></span>
                      <span>Autonomous Tasks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculation Summary Right (5 cols) */}
              <div className="lg:col-span-5 bg-alabaster p-8 rounded-lg border border-hairline flex flex-col justify-between h-full">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-mutedInk pb-4 border-b border-hairline">
                    Projected Consumption
                  </div>
                  <div className="py-6 space-y-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-sans text-sm text-mutedInk">Estimated Daily Burn</span>
                      <div className="font-mono text-base font-semibold text-charcoal">
                        <span>{dailyBurn.toFixed(1)}</span>
                        <span className="text-xs text-mutedInk font-normal"> Credits</span>
                      </div>
                    </div>
                    <div className="flex items-baseline justify-between pt-4 border-t border-hairline">
                      <span className="font-sans text-sm text-charcoal font-medium">Estimated Monthly Burn</span>
                      <div className="font-mono text-2xl font-semibold text-botanical">
                        <span>{monthlyBurn.toLocaleString()}</span>
                        <span className="text-xs text-mutedInk font-normal"> Credits / mo</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Card */}
                  <div className="mt-2 bg-surfacePure p-5 rounded border border-hairline shadow-2xs">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-terracotta-soft text-terracotta font-mono text-[11px] font-medium uppercase tracking-wide mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                      <span>{recommendedPlanBadge}</span>
                    </div>
                    <p className="font-sans text-xs text-mutedInk leading-relaxed">{recommendedPlanDesc}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-hairline">
                  <Link
                    to="/app"
                    className="block w-full text-center py-3 px-4 bg-botanical text-white text-xs font-medium uppercase tracking-wider rounded hover:bg-botanical-dark transition-colors duration-150 shadow-xs"
                  >
                    Select Calibrated Tier
                  </Link>
                  <div className="text-center font-mono text-[10px] text-mutedInk mt-2">
                    Credits never expire within active rollover window
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. SECTION 3: THREE SUBSCRIPTION PLANS
        ====================================================================== */}
        <section className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-hairline mb-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-terracotta font-medium tracking-widest">03</span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-mutedInk">
                Retainer Memberships / Sovereign Plans
              </h2>
            </div>
            <span className="font-sans text-xs text-mutedInk">DPDP Act 2023 Compliant Enclave Sandboxing</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1: Explorer */}
            <div className="bg-surfacePure p-8 sm:p-9 rounded-xl border border-hairline flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl text-charcoal font-normal">Explorer</h3>
                  <span className="font-mono text-[11px] text-mutedInk uppercase px-2 py-0.5 rounded bg-alabaster border border-hairline">
                    Free Tier
                  </span>
                </div>
                <p className="font-sans text-xs text-mutedInk mb-6 leading-relaxed">
                  For solo practitioners, initial testing, and unhurried evaluation of sovereign synthesis.
                </p>
                <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-hairline">
                  <span className="font-display text-4xl font-normal text-charcoal">$0</span>
                  <span className="font-mono text-xs text-mutedInk">/ month</span>
                </div>
                <div className="mb-6 bg-alabaster p-3.5 rounded border border-hairline">
                  <div className="font-mono text-xs font-semibold text-charcoal">150 Credits / month</div>
                  <div className="font-sans text-[11px] text-mutedInk mt-0.5">Refreshes every 30 days. No rollover.</div>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-mutedInk font-medium mb-3">
                  Included Capabilities
                </div>
                <ul className="space-y-3 font-sans text-xs text-charcoal mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>All 10 specialists in light query mode</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>2 scheduled automated background routines</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>2 isolated workspace environments</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>General Reasoning and Fast Research models</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>Zero data retention guarantee</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/app"
                className="block w-full py-2.5 px-4 text-center font-sans text-xs font-medium text-charcoal bg-alabaster border border-hairline rounded hover:bg-hairline/50 transition-colors duration-150"
              >
                Start Free Workspace
              </Link>
            </div>

            {/* Plan 2: Professional (HIGHLIGHTED) */}
            <div className="relative bg-surfacePure p-8 sm:p-9 rounded-xl border-2 border-terracotta flex flex-col justify-between shadow-[0_4px_20px_rgba(217,119,54,0.08)]">
              {/* Subtle Accent Badge */}
              <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 px-3 py-1 bg-terracotta text-white rounded text-[10px] font-mono uppercase tracking-widest font-semibold shadow-xs">
                <span>Recommended for Practitioners</span>
              </div>
              <div>
                <div className="flex items-center justify-between mb-3 mt-1">
                  <h3 className="font-display text-2xl text-charcoal font-normal">Professional</h3>
                  <span className="font-mono text-[11px] text-terracotta uppercase font-semibold px-2 py-0.5 rounded bg-terracotta-soft">
                    Active Standard
                  </span>
                </div>
                <p className="font-sans text-xs text-mutedInk mb-6 leading-relaxed">
                  For counsel, quantitative desks, statutory auditors, and autonomous research fellows.
                </p>
                <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-hairline">
                  <span className="font-display text-4xl font-normal text-botanical">$29</span>
                  <span className="font-mono text-xs text-mutedInk">/ month</span>
                </div>
                <div className="mb-6 bg-terracotta-soft p-3.5 rounded border border-terracotta/20">
                  <div className="font-mono text-xs font-semibold text-terracotta">2,500 Credits / month</div>
                  <div className="font-sans text-[11px] text-mutedInk mt-0.5">+ Rollover unused credits up to 90 days</div>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-mutedInk font-medium mb-3">
                  Included Capabilities
                </div>
                <ul className="space-y-3 font-sans text-xs text-charcoal mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-terracotta shrink-0">check</span>
                    <span>All 10 specialists with autonomous tool execution</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-terracotta shrink-0">check</span>
                    <span>All 6 Tier-1 LLMs (Claude 3.5 Sonnet, GPT-4o, DeepSeek R1)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-terracotta shrink-0">check</span>
                    <span>Live NSE/BSE tick feeds, eCourts NJDG, &amp; Kanoon APIs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-terracotta shrink-0">check</span>
                    <span>25 scheduled background routines with webhook trigger</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-terracotta shrink-0">check</span>
                    <span>Unlimited workspaces &amp; Vector memory retention</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-terracotta shrink-0">check</span>
                    <span>Full Dev Studio UI canvas &amp; verified PDF exports</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/app"
                className="block w-full py-3 px-4 text-center font-sans text-xs font-semibold uppercase tracking-wider text-white bg-botanical rounded hover:bg-botanical-dark transition-colors duration-150 shadow-xs"
              >
                Upgrade to Professional
              </Link>
            </div>

            {/* Plan 3: Practice & Desk */}
            <div className="bg-surfacePure p-8 sm:p-9 rounded-xl border border-hairline flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl text-charcoal font-normal">Practice &amp; Desk</h3>
                  <span className="font-mono text-[11px] text-mutedInk uppercase px-2 py-0.5 rounded bg-alabaster border border-hairline">
                    Chambers
                  </span>
                </div>
                <p className="font-sans text-xs text-mutedInk mb-6 leading-relaxed">
                  For law chambers, boutique financial advisories, and institutional research desks.
                </p>
                <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-hairline">
                  <span className="font-display text-4xl font-normal text-charcoal">$99</span>
                  <span className="font-mono text-xs text-mutedInk">/ month</span>
                </div>
                <div className="mb-6 bg-alabaster p-3.5 rounded border border-hairline">
                  <div className="font-mono text-xs font-semibold text-charcoal">10,000 Credits / month</div>
                  <div className="font-sans text-[11px] text-mutedInk mt-0.5">+ Rollover unused credits up to 180 days</div>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-mutedInk font-medium mb-3">
                  Included Capabilities
                </div>
                <ul className="space-y-3 font-sans text-xs text-charcoal mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>Everything included in Professional retainer</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>Unlimited multi-run routines &amp; autonomous crons</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>Historical NSE snapshot diffs &amp; litigation registries</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>Shared team workspaces &amp; role-based enclave access</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>Dedicated sovereign Nitro Enclave instances</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[17px] text-botanical shrink-0">check</span>
                    <span>Direct SLA &amp; bespoke API webhook pipeline design</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/app"
                className="block w-full py-2.5 px-4 text-center font-sans text-xs font-medium text-charcoal bg-alabaster border border-hairline rounded hover:bg-hairline/50 transition-colors duration-150"
              >
                Contact Practice Desk
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. EDITORIAL MONOGRAPH GROUNDING QUOTE
        ====================================================================== */}
        <section className="max-w-3xl mx-auto py-16 text-center border-t border-hairline">
          <blockquote className="font-display text-2xl sm:text-3xl italic font-normal text-botanical leading-snug mb-4">
            “Fair pricing is not a concession to users; it is the prerequisite of genuine institutional sovereignty.”
          </blockquote>
          <div className="font-mono text-xs uppercase tracking-widest text-mutedInk">
            The GriZon Monograph Series · Vol. IV — The Economy of Thought
          </div>
        </section>
      </main>
    </div>
  );
}
