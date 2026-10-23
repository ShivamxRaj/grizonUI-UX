import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeScenario, setActiveScenario] = useState(1);
  const [routinesEnabled, setRoutinesEnabled] = useState({
    1: true,
    2: true,
    3: true
  });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleRoutine = (id) => {
    setRoutinesEnabled((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="w-full flex flex-col bg-alabaster text-charcoal">
      {/* =====================================================================
          SECTION 1: ASYMMETRIC EDITORIAL HERO
      ====================================================================== */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-16 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (approx 45%) */}
          <div className="lg:col-span-5 flex flex-col pt-2">
            {/* Monospace Eyebrow with Terracotta Indicator */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-terracotta"></span>
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-mutedInk font-medium">
                Personal Intelligence &amp; Autonomous Routines
              </span>
            </div>

            {/* Newsreader Serif Headline */}
            <h1 className="font-display text-[42px] sm:text-[50px] lg:text-[54px] text-charcoal tracking-[-0.025em] leading-[1.08] font-normal mb-6">
              Work with ten specialist minds that already know your context.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-[16px] md:text-[17px] text-mutedInk leading-[1.65] mb-8 font-normal">
              Set your context once. Grizon consults specialized autonomous agents grounded in live statutory filings, High Court gazettes, and NSE option chains with deterministic citations.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/welcome"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-botanical text-white font-sans text-[14px] font-medium tracking-tight hover:bg-botanical/90 active:scale-[0.98] transition-all shadow-[0_2px_4px_rgba(30,58,58,0.12)]"
              >
                Set Up Your Profile Memory
              </Link>
              <Link
                to="/agents"
                className="inline-flex items-center gap-1.5 font-sans text-[14px] text-charcoal font-medium hover:text-terracotta transition-colors group"
              >
                <span>Meet the 10 Specialists</span>
                <span className="material-symbols-outlined text-[17px] transition-transform duration-150 group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Tactile Interactive Briefing Console Centerpiece */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full bg-surfacePure rounded-xl border border-hairline shadow-[0_4px_24px_rgba(24,24,27,0.03)] overflow-hidden flex flex-col">
              {/* 3 Clean Scenario Tabs */}
              <div className="bg-surfaceMuted/60 px-4 pt-3 flex items-center gap-1 border-b border-hairline overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveScenario(1)}
                  className={`scenario-tab px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.06em] rounded-t-md transition-all duration-150 -mb-[1px] cursor-pointer ${
                    activeScenario === 1
                      ? 'bg-surfacePure text-charcoal font-semibold border-t border-x border-hairline'
                      : 'text-mutedInk hover:text-charcoal'
                  }`}
                >
                  01. Morning Market Briefing
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScenario(2)}
                  className={`scenario-tab px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.06em] rounded-t-md transition-all duration-150 -mb-[1px] cursor-pointer ${
                    activeScenario === 2
                      ? 'bg-surfacePure text-charcoal font-semibold border-t border-x border-hairline'
                      : 'text-mutedInk hover:text-charcoal'
                  }`}
                >
                  02. Delhi HC Writ Watch
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScenario(3)}
                  className={`scenario-tab px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.06em] rounded-t-md transition-all duration-150 -mb-[1px] cursor-pointer ${
                    activeScenario === 3
                      ? 'bg-surfacePure text-charcoal font-semibold border-t border-x border-hairline'
                      : 'text-mutedInk hover:text-charcoal'
                  }`}
                >
                  03. Architecture ADR Audit
                </button>
              </div>

              {/* Content Inside Active Tabs */}
              <div className="p-6 md:p-8 flex flex-col gap-5">
                {/* SCENARIO 1: MARKET BRIEFING */}
                {activeScenario === 1 && (
                  <div className="scenario-pane flex flex-col gap-5">
                    {/* WHAT YOU ASKED */}
                    <div className="bg-surfaceMuted/50 p-4 rounded-lg border border-hairline/70">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-mutedInk font-semibold block mb-1">
                        What you asked
                      </span>
                      <p className="font-display italic text-[16px] text-charcoal leading-relaxed">
                        “Summarize today’s NIFTY Auto index gamma exposure and run my standard hedge check against our FY25 capex auto-component exposure.”
                      </p>
                    </div>

                    {/* WHAT GRIZON ALREADY REMEMBERS ABOUT YOU */}
                    <div className="bg-terracotta-soft/70 border border-terracotta/20 p-4 rounded-lg flex items-start gap-3">
                      <span className="material-symbols-outlined text-[19px] text-terracotta mt-0.5">neurology</span>
                      <div className="flex-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-terracotta font-semibold block mb-0.5">
                          What Grizon already remembers about you
                        </span>
                        <p className="font-sans text-[13.5px] text-charcoal leading-snug">
                          Portfolio holds ₹4.2Cr Tier-1 auto components; prefers Delta-neutral collar; morning schedule 08:45 IST; risk threshold 1.8% daily VAR.
                        </p>
                      </div>
                    </div>

                    {/* Specialist Consulted Telemetry Strip */}
                    <div className="flex flex-wrap items-center justify-between text-mutedInk font-mono text-[11px] py-2 px-3 bg-surfaceMuted/50 rounded border border-hairline/60">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                        <span>
                          Specialist: <strong className="text-charcoal font-medium">Market Analyst &amp; Options Desk</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>Feeds: <span className="text-charcoal">NSE Derivatives + RBI DBIE</span></span>
                        <span>Latency: <span className="text-charcoal font-semibold">320ms</span></span>
                      </div>
                    </div>

                    {/* SYNTHESIZED TACTICAL INTELLIGENCE */}
                    <div className="bg-surfacePure border border-hairline rounded-lg p-5 flex flex-col gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                      <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                        <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] text-charcoal">
                          Synthesized Tactical Intelligence
                        </span>
                        <span className="font-mono text-[10px] text-terracotta bg-terracotta-soft px-2 py-0.5 rounded font-medium border border-terracotta/20">
                          Deterministic Grounded
                        </span>
                      </div>
                      <p className="font-sans text-[14px] text-charcoal leading-relaxed">
                        NIFTY Auto index open interest shows pronounced 19,200 Call resistance with negative gamma clustering at 18,800 Put strike. With ₹4.2Cr component book, current portfolio beta stands at 1.14 against Auto benchmark.
                      </p>
                      <div className="p-3 bg-surfaceMuted/60 rounded border border-hairline/70 font-sans text-[13px] text-charcoal flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <span>Recommended Action: <strong className="font-medium text-charcoal">Buy 18,850 Put / Sell 19,300 Call (1:1.2 Ratio)</strong></span>
                        <span className="font-mono text-[11px] text-botanical font-semibold bg-white/80 px-2 py-0.5 rounded border border-hairline self-start sm:self-auto">
                          Neutralizes 88% Delta
                        </span>
                      </div>
                      {/* Verified Citations Badges */}
                      <div className="pt-2 flex flex-wrap items-center gap-1.5 font-mono text-[10.5px] text-mutedInk">
                        <span className="font-medium mr-1">Verified Citations:</span>
                        <span className="px-2 py-0.5 bg-surfaceMuted text-charcoal rounded border border-hairline hover:border-terracotta cursor-default transition-colors">
                          [NSE_NIFTYAUTO_09:15]
                        </span>
                        <span className="px-2 py-0.5 bg-surfaceMuted text-charcoal rounded border border-hairline hover:border-terracotta cursor-default transition-colors">
                          [RBI_FX_DIR_12B]
                        </span>
                        <span className="px-2 py-0.5 bg-surfaceMuted text-charcoal rounded border border-hairline hover:border-terracotta cursor-default transition-colors">
                          [TCS_CAPEX_NOTE]
                        </span>
                      </div>
                    </div>

                    {/* Interactive Switch Routine Toggle */}
                    <div className="p-3.5 bg-surfaceMuted/50 border border-hairline rounded-lg flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-terracotta text-[19px]">schedule</span>
                        <div>
                          <p className="font-sans text-[13px] text-charcoal font-medium">
                            Run this routine automatically every trading day at 08:45 IST
                          </p>
                          <p className="font-sans text-[11.5px] text-mutedInk">
                            Dispatches synthesized executive summary directly to your workspace inbox
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleRoutine(1)}
                        className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                          routinesEnabled[1] ? 'bg-botanical' : 'bg-hairline'
                        }`}
                        aria-label="Toggle Morning Market Routine"
                      >
                        <span
                          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                            routinesEnabled[1] ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                )}

                {/* SCENARIO 2: DELHI HIGH COURT */}
                {activeScenario === 2 && (
                  <div className="scenario-pane flex flex-col gap-5">
                    <div className="bg-surfaceMuted/50 p-4 rounded-lg border border-hairline/70">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-mutedInk font-semibold block mb-1">
                        What you asked
                      </span>
                      <p className="font-display italic text-[16px] text-charcoal leading-relaxed">
                        “Check if WP(C) 10428/2023 was listed in Court 14 supplementary cause list for tomorrow morning.”
                      </p>
                    </div>

                    <div className="bg-terracotta-soft/70 border border-terracotta/20 p-4 rounded-lg flex items-start gap-3">
                      <span className="material-symbols-outlined text-[19px] text-terracotta mt-0.5">neurology</span>
                      <div className="flex-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-terracotta font-semibold block mb-0.5">
                          What Grizon already remembers about you
                        </span>
                        <p className="font-sans text-[13.5px] text-charcoal leading-snug">
                          Lead Counsel for Respondent No. 3; chamber docket #DH-229; alert preference WhatsApp &amp; In-app push immediately upon cause list publication.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-mutedInk font-mono text-[11px] py-2 px-3 bg-surfaceMuted/50 rounded border border-hairline/60">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                        <span>
                          Specialist: <strong className="text-charcoal font-medium">Judicial Research &amp; Regulatory Counsel</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>Feeds: <span className="text-charcoal">Delhi HC Cause List + eCourts CNR</span></span>
                        <span>Latency: <span className="text-charcoal font-semibold">280ms</span></span>
                      </div>
                    </div>

                    <div className="bg-surfacePure border border-hairline rounded-lg p-5 flex flex-col gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                      <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                        <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] text-charcoal">
                          Synthesized Tactical Intelligence
                        </span>
                        <span className="font-mono text-[10px] text-terracotta bg-terracotta-soft px-2 py-0.5 rounded font-medium border border-terracotta/20">
                          Deterministic Grounded
                        </span>
                      </div>
                      <p className="font-sans text-[14px] text-charcoal leading-relaxed">
                        Item #34 listed before Hon'ble Justice Manoj Jain in Courtroom 14 at 10:30 AM. Interim stay application on paragraph 14 remains pending. Rejoinder filed by Petitioner yesterday at 16:45 IST has been flagged for your inspection.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center gap-1.5 font-mono text-[10.5px] text-mutedInk">
                        <span className="font-medium mr-1">Verified Citations:</span>
                        <span className="px-2 py-0.5 bg-surfaceMuted text-charcoal rounded border border-hairline hover:border-terracotta cursor-default transition-colors">
                          [DHC_CAUSLIST_ITEM_34]
                        </span>
                        <span className="px-2 py-0.5 bg-surfaceMuted text-charcoal rounded border border-hairline hover:border-terracotta cursor-default transition-colors">
                          [CNR_DLHC010088212023]
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-surfaceMuted/50 border border-hairline rounded-lg flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-terracotta text-[19px]">schedule</span>
                        <div>
                          <p className="font-sans text-[13px] text-charcoal font-medium">Track Court 14 Supplementary List daily at 19:00 IST</p>
                          <p className="font-sans text-[11.5px] text-mutedInk">Sends counsel notifications whenever docket updates occur</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleRoutine(2)}
                        className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                          routinesEnabled[2] ? 'bg-botanical' : 'bg-hairline'
                        }`}
                        aria-label="Toggle Court Tracking Routine"
                      >
                        <span
                          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                            routinesEnabled[2] ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                )}

                {/* SCENARIO 3: ARCHITECTURE ADR AUDIT */}
                {activeScenario === 3 && (
                  <div className="scenario-pane flex flex-col gap-5">
                    <div className="bg-surfaceMuted/50 p-4 rounded-lg border border-hairline/70">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-mutedInk font-semibold block mb-1">
                        What you asked
                      </span>
                      <p className="font-display italic text-[16px] text-charcoal leading-relaxed">
                        “Audit our AWS Mumbai egress routing against DPDP cross-border data handling provisions before tomorrow's audit committee.”
                      </p>
                    </div>

                    <div className="bg-terracotta-soft/70 border border-terracotta/20 p-4 rounded-lg flex items-start gap-3">
                      <span className="material-symbols-outlined text-[19px] text-terracotta mt-0.5">neurology</span>
                      <div className="flex-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-terracotta font-semibold block mb-0.5">
                          What Grizon already remembers about you
                        </span>
                        <p className="font-sans text-[13.5px] text-charcoal leading-snug">
                          Multi-tenant Postgres cluster on ap-south-1; encryption keys managed via Sovereign HSM; strict requirement for zero cross-border transit of Aadhaar vault tokens.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-mutedInk font-mono text-[11px] py-2 px-3 bg-surfaceMuted/50 rounded border border-hairline/60">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                        <span>
                          Specialist: <strong className="text-charcoal font-medium">Platform Architect &amp; Statutory Infosec</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>Feeds: <span className="text-charcoal">Terraform State + DPDP Rules 2025 Gaz.</span></span>
                        <span>Latency: <span className="text-charcoal font-semibold">410ms</span></span>
                      </div>
                    </div>

                    <div className="bg-surfacePure border border-hairline rounded-lg p-5 flex flex-col gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                      <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                        <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] text-charcoal">
                          Synthesized Tactical Intelligence
                        </span>
                        <span className="font-mono text-[10px] text-terracotta bg-terracotta-soft px-2 py-0.5 rounded font-medium border border-terracotta/20">
                          Deterministic Grounded
                        </span>
                      </div>
                      <p className="font-sans text-[14px] text-charcoal leading-relaxed">
                        Audit confirmed zero off-shore transit. S3 lifecycle policies enforce local bucket replicate within Mumbai AZ-1 &amp; AZ-3. All audit logs meet Rule 7(4) 7-year non-repudiation standard.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center gap-1.5 font-mono text-[10.5px] text-mutedInk">
                        <span className="font-medium mr-1">Verified Citations:</span>
                        <span className="px-2 py-0.5 bg-surfaceMuted text-charcoal rounded border border-hairline hover:border-terracotta cursor-default transition-colors">
                          [DPDP_ACT_SEC_16]
                        </span>
                        <span className="px-2 py-0.5 bg-surfaceMuted text-charcoal rounded border border-hairline hover:border-terracotta cursor-default transition-colors">
                          [AWS_AP_SOUTH_AUDIT_LOG]
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-surfaceMuted/50 border border-hairline rounded-lg flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-terracotta text-[19px]">schedule</span>
                        <div>
                          <p className="font-sans text-[13px] text-charcoal font-medium">Weekly DPDP Statutory Compliance Drift Scan</p>
                          <p className="font-sans text-[11.5px] text-mutedInk">Runs every Sunday 23:00 IST across infrastructure changes</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleRoutine(3)}
                        className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                          routinesEnabled[3] ? 'bg-botanical' : 'bg-hairline'
                        }`}
                        aria-label="Toggle Compliance Routine"
                      >
                        <span
                          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                            routinesEnabled[3] ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Reassurance Metrics Row - moved below hero grid so it doesn't obstruct initial view */}
        <div className="mt-14 lg:mt-16 pt-8 border-t border-hairline flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 text-mutedInk">
            <span className="material-symbols-outlined text-[17px] text-terracotta">verified_user</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] font-medium text-charcoal">
              Deterministic Grounding Guarantee
            </span>
            <span className="hidden sm:inline text-hairline">|</span>
            <span className="hidden sm:inline font-sans text-[12.5px] text-mutedInk">
              Statutory gazettes, court dockets &amp; NSE option chain grounding
            </span>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:gap-10">
            <div>
              <p className="font-mono text-[18px] font-semibold text-charcoal">0%</p>
              <p className="font-sans text-[12px] text-mutedInk">Training Retention</p>
            </div>
            <div>
              <p className="font-mono text-[18px] font-semibold text-charcoal">340ms</p>
              <p className="font-sans text-[12px] text-mutedInk">Citation Verify</p>
            </div>
            <div>
              <p className="font-mono text-[18px] font-semibold text-charcoal">&lt;1.0s</p>
              <p className="font-sans text-[12px] text-mutedInk">Sovereign Routing</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: THREE HUMAN PILLARS (Open editorial layout)
      ====================================================================== */}
      <section className="w-full border-t border-hairline bg-surfacePure py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section Header */}
          <div className="flex flex-col gap-3 max-w-2xl mb-16 md:mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-terracotta font-semibold">
              Core Design Principles
            </span>
            <h2 className="font-display text-[34px] sm:text-[42px] text-charcoal tracking-tight leading-[1.15]">
              Grounded in continuity, rigor, and human rhythm.
            </h2>
            <p className="font-sans text-[15px] md:text-[16px] text-mutedInk leading-relaxed">
              We reject the disposable, amnesiac chat prompt. Professional intelligence demands permanent recall, audited statutory foundations, and autonomous background execution.
            </p>
          </div>

          {/* 3-Column Open Grid with subtle vertical dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {/* Pillar 01: Continuity */}
            <div className="flex flex-col md:pr-10 lg:pr-12">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display text-[44px] text-botanical font-light leading-none">01</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-mutedInk font-medium">
                  Continuity
                </span>
              </div>
              <h3 className="font-display text-[22px] text-charcoal font-medium mb-3">Memory that grows with you</h3>
              <p className="font-sans text-[14.5px] text-mutedInk leading-relaxed mb-6">
                Set your investment mandates, legal entities, or software stack once. Grizon never forgets your operating context, eliminating repetitive prompting across workflows.
              </p>
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surfaceMuted font-mono text-[11px] text-mutedInk border border-hairline">
                  Zero cold starts · Cross-session synthesis
                </span>
              </div>
            </div>

            {/* Pillar 02: Specialization */}
            <div className="flex flex-col md:px-10 lg:px-12 md:border-l border-hairline">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display text-[44px] text-botanical font-light leading-none">02</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-mutedInk font-medium">
                  Specialization
                </span>
              </div>
              <h3 className="font-display text-[22px] text-charcoal font-medium mb-3">Ten specialists, one calm conversation</h3>
              <p className="font-sans text-[14.5px] text-mutedInk leading-relaxed mb-6">
                Purpose-built domain intelligences equipped with deterministic APIs—Indian Kanoon, eCourts CNR registries, MCA21, and live market books—collaborating seamlessly under Auto Mode.
              </p>
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surfaceMuted font-mono text-[11px] text-mutedInk border border-hairline">
                  Statutory rigor · Verifiable citation trails
                </span>
              </div>
            </div>

            {/* Pillar 03: Rhythm */}
            <div className="flex flex-col md:pl-10 lg:pl-12 md:border-l border-hairline">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display text-[44px] text-botanical font-light leading-none">03</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-mutedInk font-medium">
                  Rhythm
                </span>
              </div>
              <h3 className="font-display text-[22px] text-charcoal font-medium mb-3">Routines that run while you rest</h3>
              <p className="font-sans text-[14.5px] text-mutedInk leading-relaxed mb-6">
                Turn complex research queries into persistent scheduled dispatches. Morning regulatory filings, competitor tracking, and code audits delivered to your workspace before your workday begins.
              </p>
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surfaceMuted font-mono text-[11px] text-mutedInk border border-hairline">
                  Cron schedules · Autonomous ambient briefing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: DEDICATED PROJECT ROOMS
      ====================================================================== */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Section Header with Editorial Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-hairline">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-terracotta font-semibold block mb-2">
              Sovereign Workspace Spaces
            </span>
            <h2 className="font-display text-[32px] sm:text-[40px] text-charcoal tracking-tight leading-tight">
              Isolated project rooms for high-stakes workflows.
            </h2>
          </div>
          <p className="font-sans text-[14px] text-mutedInk max-w-md mt-4 md:mt-0 leading-relaxed">
            Each room maintains dedicated document corpus, private memory parameters, custom scheduled routines, and cryptographic separation.
          </p>
        </div>

        {/* 3 Editorial Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Room 1: Litigation Docket */}
          <div className="bg-surfacePure rounded-xl border border-hairline p-7 flex flex-col justify-between hover:border-mutedInk/40 transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col">
              <div className="flex items-center justify-between text-mutedInk font-mono text-[10.5px] uppercase tracking-wider mb-3">
                <span className="text-terracotta font-semibold">Litigation Docket</span>
                <span>Sync: 12m ago</span>
              </div>
              <h3 className="font-display text-[22px] text-charcoal font-medium mb-2.5 leading-snug">
                Delhi High Court Commercial Writ
              </h3>
              <p className="font-sans text-[13.5px] text-mutedInk leading-relaxed mb-6">
                Appellate proceedings contesting tax demand notice under Section 148A. Full record with cross-referenced High Court precedents.
              </p>

              {/* Structured Details */}
              <div className="flex flex-col gap-2 font-mono text-[11px] text-mutedInk pt-4 border-t border-hairline">
                <div className="flex items-center justify-between py-1 px-2.5 bg-surfaceMuted/50 rounded">
                  <span>CNR Tracking</span>
                  <span className="font-semibold text-charcoal">DLHC010088212023</span>
                </div>
                <div className="flex items-center justify-between py-1 px-2.5 bg-surfaceMuted/50 rounded">
                  <span>Gazette Filings</span>
                  <span className="font-semibold text-charcoal">14 Files (PDF)</span>
                </div>
                <div className="flex items-center justify-between py-1 px-2.5 bg-surfaceMuted/50 rounded">
                  <span>Active Routine</span>
                  <span className="font-semibold text-terracotta">Daily Cause List Watch</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-hairline">
              <Link
                to="/app"
                className="group inline-flex items-center justify-between w-full font-sans text-[13.5px] text-botanical font-medium hover:text-terracotta transition-colors"
              >
                <span>Enter Room</span>
                <span className="material-symbols-outlined text-[17px] transition-transform duration-150 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Room 2: Treasury & Trading Desk */}
          <div className="bg-surfacePure rounded-xl border border-hairline p-7 flex flex-col justify-between hover:border-mutedInk/40 transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col">
              <div className="flex items-center justify-between text-mutedInk font-mono text-[10.5px] uppercase tracking-wider mb-3">
                <span className="text-terracotta font-semibold">Treasury &amp; Trading</span>
                <span>Live Tick</span>
              </div>
              <h3 className="font-display text-[22px] text-charcoal font-medium mb-2.5 leading-snug">
                NIFTY &amp; Energy Swing Desk
              </h3>
              <p className="font-sans text-[13.5px] text-mutedInk leading-relaxed mb-6">
                Multi-broker derivative strategy engine monitoring prompt month gamma skew, open interest spikes, and crude correlation.
              </p>

              {/* Structured Details */}
              <div className="flex flex-col gap-2 font-mono text-[11px] text-mutedInk pt-4 border-t border-hairline">
                <div className="flex items-center justify-between py-1 px-2.5 bg-surfaceMuted/50 rounded">
                  <span>Option Snapshots</span>
                  <span className="font-semibold text-charcoal">3x Daily (NSE Feed)</span>
                </div>
                <div className="flex items-center justify-between py-1 px-2.5 bg-surfaceMuted/50 rounded">
                  <span>Statutory Check</span>
                  <span className="font-semibold text-charcoal">SEBI LODR Reg 30</span>
                </div>
                <div className="flex items-center justify-between py-1 px-2.5 bg-surfaceMuted/50 rounded">
                  <span>Active Routine</span>
                  <span className="font-semibold text-terracotta">08:45 Pre-Open Dispatch</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-hairline">
              <Link
                to="/app"
                className="group inline-flex items-center justify-between w-full font-sans text-[13.5px] text-botanical font-medium hover:text-terracotta transition-colors"
              >
                <span>Enter Room</span>
                <span className="material-symbols-outlined text-[17px] transition-transform duration-150 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Room 3: Systems & Infosec */}
          <div className="bg-surfacePure rounded-xl border border-hairline p-7 flex flex-col justify-between hover:border-mutedInk/40 transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col">
              <div className="flex items-center justify-between text-mutedInk font-mono text-[10.5px] uppercase tracking-wider mb-3">
                <span className="text-terracotta font-semibold">Systems &amp; Infosec</span>
                <span>Commit: c882b4</span>
              </div>
              <h3 className="font-display text-[22px] text-charcoal font-medium mb-2.5 leading-snug">
                Core Platform v2 Architecture
              </h3>
              <p className="font-sans text-[13.5px] text-mutedInk leading-relaxed mb-6">
                Distributed microservices migration review, verifying database isolation boundaries, DPDP access policies, and Rust builds.
              </p>

              {/* Structured Details */}
              <div className="flex flex-col gap-2 font-mono text-[11px] text-mutedInk pt-4 border-t border-hairline">
                <div className="flex items-center justify-between py-1 px-2.5 bg-surfaceMuted/50 rounded">
                  <span>Enclave Standard</span>
                  <span className="font-semibold text-charcoal">AWS Nitro VPC Sovereign</span>
                </div>
                <div className="flex items-center justify-between py-1 px-2.5 bg-surfaceMuted/50 rounded">
                  <span>ADR Blueprints</span>
                  <span className="font-semibold text-charcoal">32 Validated Logs</span>
                </div>
                <div className="flex items-center justify-between py-1 px-2.5 bg-surfaceMuted/50 rounded">
                  <span>Active Routine</span>
                  <span className="font-semibold text-terracotta">Nightly Security AST Lint</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-hairline">
              <Link
                to="/app"
                className="group inline-flex items-center justify-between w-full font-sans text-[13.5px] text-botanical font-medium hover:text-terracotta transition-colors"
              >
                <span>Enter Room</span>
                <span className="material-symbols-outlined text-[17px] transition-transform duration-150 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: RESTRAINED CALM CONVERSION STRIP
      ====================================================================== */}
      <section className="w-full bg-[#182626] text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center text-center">
          {/* Eyebrow Monospace */}
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/70 font-medium mb-4">
            Permanent Memory · 10 Specialized Minds · Sovereign Runtime
          </span>

          {/* Headline */}
          <h2 className="font-display text-[36px] sm:text-[46px] md:text-[50px] max-w-3xl leading-[1.12] mb-5 font-normal tracking-tight">
            Step into a workspace designed for clarity, not noise.
          </h2>

          {/* Subtext */}
          <p className="font-sans text-[16px] md:text-[17px] text-white/80 max-w-2xl mb-10 leading-relaxed font-light">
            Begin by defining your context once. Unlock instant verification across Indian corporate databases, judicial repositories, and capital market rails.
          </p>

          {/* Action Form */}
          {subscribed ? (
            <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-white font-sans text-[14px] flex items-center gap-2 mb-8">
              <span className="material-symbols-outlined text-terracotta">check_circle</span>
              <span>Your sovereign invitation has been logged. We will reach out shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2.5 mb-8">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@firm.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 font-sans text-[14px] focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full sm:w-auto flex-shrink-0 px-6 py-3 rounded-lg bg-terracotta text-white font-sans text-[14px] font-medium tracking-tight hover:bg-terracotta/90 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(217,119,54,0.3)] cursor-pointer"
              >
                Claim Your Workspace
              </button>
            </form>
          )}

          {/* Reassurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11.5px] text-white/70">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-terracotta">lock</span> ISO 27001 Aligned
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-terracotta">shield</span> DPDP Act Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-terracotta">visibility_off</span> Zero Training on Private Corpora
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-terracotta">stars</span> 500 Complimentary Credits
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
