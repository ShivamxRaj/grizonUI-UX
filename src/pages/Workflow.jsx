import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Workflow() {
  const [cadence, setCadence] = useState('trading day');
  const [specialist, setSpecialist] = useState('Market & Trading Specialist');
  const [task, setTask] = useState('analyze NIFTY option chain and unusual OI shifts');
  const [project, setProject] = useState('NIFTY Swing Desk');
  const [dailyFrequency, setDailyFrequency] = useState(3);
  const [dryRunRunning, setDryRunRunning] = useState(false);
  const [routineSaved, setRoutineSaved] = useState(false);

  // Layer 02 assertions state
  const [assertions, setAssertions] = useState([
    {
      id: 1,
      type: 'Pinned',
      typeClass: 'bg-amber-100/70 text-terracotta',
      text: '“Portfolio maintains ₹4.2Cr Tier-1 auto component book with long call hedges.”',
      pinned: true
    },
    {
      id: 2,
      type: 'Learned',
      typeClass: 'bg-surfaceAlt text-mutedInk',
      text: '“Demands verified exchange filings and direct NSE tick prints; rejects unverified commentary.”',
      pinned: false
    },
    {
      id: 3,
      type: 'Heuristic',
      typeClass: 'bg-surfaceAlt text-mutedInk',
      text: '“Prefers concise 3-bullet executive briefs with actionable delta tags.”',
      pinned: false
    }
  ]);

  const [newAssertionInput, setNewAssertionInput] = useState('');
  const [showAddAssertion, setShowAddAssertion] = useState(false);

  const togglePin = (id) => {
    setAssertions((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, pinned: !a.pinned, type: !a.pinned ? 'Pinned' : 'Learned' } : a
      )
    );
  };

  const deleteAssertion = (id) => {
    setAssertions((prev) => prev.filter((a) => a.id !== id));
  };

  const addAssertion = (e) => {
    e.preventDefault();
    if (newAssertionInput.trim()) {
      setAssertions((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: 'User Added',
          typeClass: 'bg-surfaceAlt text-charcoal font-medium',
          text: `“${newAssertionInput.trim()}”`,
          pinned: false
        }
      ]);
      setNewAssertionInput('');
      setShowAddAssertion(false);
    }
  };

  const triggerDryRun = () => {
    setDryRunRunning(true);
    setTimeout(() => {
      setDryRunRunning(false);
    }, 1200);
  };

  const saveRoutine = () => {
    setRoutineSaved(true);
    setTimeout(() => {
      setRoutineSaved(false);
    }, 3500);
  };

  // Schedule timeline pins based on frequency
  const timelinePins = {
    1: [{ time: '09:20', label: '09:20 IST', pos: '23.8%' }],
    2: [
      { time: '09:20', label: '09:20 IST', pos: '23.8%' },
      { time: '15:25', label: '15:25 IST', pos: '67.2%' }
    ],
    3: [
      { time: '09:20', label: '09:20 IST', pos: '23.8%' },
      { time: '12:30', label: '12:30 IST', pos: '46.4%' },
      { time: '15:25', label: '15:25 IST', pos: '67.2%' }
    ],
    4: [
      { time: '08:45', label: '08:45 IST', pos: '18.0%' },
      { time: '11:15', label: '11:15 IST', pos: '38.0%' },
      { time: '13:45', label: '13:45 IST', pos: '55.0%' },
      { time: '15:25', label: '15:25 IST', pos: '67.2%' }
    ]
  };

  return (
    <div className="w-full flex flex-col bg-alabaster">
      {/* =====================================================================
          2. EDITORIAL HEADER SECTION
      ====================================================================== */}
      <section className="w-full pt-12 md:pt-16 pb-10 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-terracotta font-semibold">
            Routines, Memory &amp; Projects
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-[56px] text-charcoal font-semibold tracking-tight leading-[1.12]">
            Set your rhythm once.<br />
            <span className="text-botanical font-medium">Let Grizon keep watch.</span>
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] text-mutedInk leading-relaxed max-w-2xl font-normal">
            Plain English automation for option-chain briefings, court docket checks, or policy synthesis running on your schedule.
          </p>

          {/* Quiet status chip */}
          <div className="mt-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surfacePure border border-hairline text-mutedInk font-mono text-[11px] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-botanical animate-pulse"></span>
            <span>Autonomous Dispatch Engine Active · Zero Hallucination Guarantee</span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. PART A: INTERACTIVE NATURAL-LANGUAGE ROUTINE COMPOSER
      ====================================================================== */}
      <section className="w-full py-6 md:py-8 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto bg-surfacePure border border-hairline rounded-2xl p-6 sm:p-10 shadow-[0_2px_12px_rgba(24,24,27,0.03)] flex flex-col gap-8">
          {/* Top bar inside card */}
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-hairline gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-terracotta"></span>
              <span className="font-mono text-xs uppercase tracking-wider text-mutedInk font-semibold">
                Active Schedule Composer
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surfaceMuted border border-hairline text-mutedInk font-mono text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-ping"></span>
              Next run today at 09:20 IST
            </span>
          </div>

          {/* Natural-Language Sentence Builder */}
          <div className="font-sans text-xl md:text-2xl text-zinc-900 leading-[1.8] font-normal">
            Every{' '}
            <select
              value={cadence}
              onChange={(e) => setCadence(e.target.value)}
              className="underline decoration-amber-600/70 underline-offset-8 font-semibold cursor-pointer text-zinc-900 hover:text-amber-700 bg-amber-50/70 px-2 py-0.5 rounded border-none focus:ring-1 focus:ring-amber-500 font-sans inline-block my-1"
            >
              <option value="trading day">trading day</option>
              <option value="weekday morning">weekday morning</option>
              <option value="market expiry day">market expiry day</option>
              <option value="calendar day">calendar day</option>
            </select>
            , ask the{' '}
            <select
              value={specialist}
              onChange={(e) => setSpecialist(e.target.value)}
              className="underline decoration-amber-600/70 underline-offset-8 font-semibold cursor-pointer text-zinc-900 hover:text-amber-700 bg-amber-50/70 px-2 py-0.5 rounded border-none focus:ring-1 focus:ring-amber-500 font-sans inline-block my-1"
            >
              <option value="Market & Trading Specialist">Market &amp; Trading Specialist</option>
              <option value="Legal Intelligence India">Legal Intelligence India</option>
              <option value="Dev Studio">Dev Studio</option>
              <option value="System Architect">System Architect</option>
              <option value="Deep Research">Deep Research</option>
              <option value="Doc Intelligence & Writer">Doc Intelligence &amp; Writer</option>
            </select>{' '}
            to{' '}
            <select
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="underline decoration-amber-600/70 underline-offset-8 font-semibold cursor-pointer text-zinc-900 hover:text-amber-700 bg-amber-50/70 px-2 py-0.5 rounded border-none focus:ring-1 focus:ring-amber-500 font-sans inline-block my-1"
            >
              <option value="analyze NIFTY option chain and unusual OI shifts">
                analyze NIFTY option chain and unusual OI shifts
              </option>
              <option value="track Court 14 supplementary list & CNR docket">
                track Court 14 supplementary list &amp; CNR docket
              </option>
              <option value="run full-stack responsive AST security check">
                run full-stack responsive AST security check
              </option>
              <option value="synthesize green hydrogen policy gazettes">
                synthesize green hydrogen policy gazettes
              </option>
              <option value="audit Section 148A reassessment notices">
                audit Section 148A reassessment notices
              </option>
            </select>{' '}
            at{' '}
            <span className="underline decoration-amber-600/70 underline-offset-8 font-semibold text-amber-700 font-mono text-xl md:text-2xl bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/50 inline-block my-1">
              {dailyFrequency === 1 && '09:20 IST'}
              {dailyFrequency === 2 && '09:20, 15:25 IST'}
              {dailyFrequency === 3 && '09:20, 12:30, 15:25 IST'}
              {dailyFrequency === 4 && '08:45, 11:15, 13:45, 15:25 IST'}
            </span>{' '}
            and file findings into the{' '}
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="underline decoration-amber-600/70 underline-offset-8 font-semibold cursor-pointer text-zinc-900 hover:text-amber-700 bg-amber-50/70 px-2 py-0.5 rounded border-none focus:ring-1 focus:ring-amber-500 font-sans inline-block my-1"
            >
              <option value="NIFTY Swing Desk">NIFTY Swing Desk</option>
              <option value="Delhi High Court Commercial Writ">Delhi High Court Commercial Writ</option>
              <option value="Core Platform v2 Architecture">Core Platform v2 Architecture</option>
            </select>{' '}
            project.
          </div>

          {/* Stepper & Frequency Controls */}
          <div className="p-5 rounded-xl bg-surfaceMuted/60 border border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="font-mono text-xs text-mutedInk font-medium uppercase tracking-wider">
                Cadence / Frequency
              </span>
              <div className="inline-flex rounded-lg border border-hairline bg-surfacePure p-1 gap-1">
                {[1, 2, 3, 4].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setDailyFrequency(count)}
                    className={`px-3 py-1 text-xs font-sans transition-all rounded cursor-pointer ${
                      dailyFrequency === count
                        ? 'bg-botanical text-white font-medium shadow-xs'
                        : 'text-mutedInk hover:text-charcoal'
                    }`}
                  >
                    {count}x daily
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic time-picker pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {dailyFrequency === 1 && (
                <span className="px-2.5 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-[11px] text-charcoal">
                  09:20 IST <span className="text-mutedInk font-sans">(Pre-Market)</span>
                </span>
              )}
              {dailyFrequency === 2 && (
                <>
                  <span className="px-2.5 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-[11px] text-charcoal">
                    09:20 IST <span className="text-mutedInk font-sans">(Pre-Market)</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-[11px] text-charcoal">
                    15:25 IST <span className="text-mutedInk font-sans">(Cash Close)</span>
                  </span>
                </>
              )}
              {dailyFrequency === 3 && (
                <>
                  <span className="px-2.5 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-[11px] text-charcoal">
                    09:20 IST <span className="text-mutedInk font-sans">(Pre-Market)</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-[11px] text-charcoal">
                    12:30 IST <span className="text-mutedInk font-sans">(Midday Scan)</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-[11px] text-charcoal">
                    15:25 IST <span className="text-mutedInk font-sans">(Cash Close)</span>
                  </span>
                </>
              )}
              {dailyFrequency === 4 && (
                <>
                  <span className="px-2.5 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-[11px] text-charcoal">
                    08:45 IST <span className="text-mutedInk font-sans">(GIFT NIFTY)</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-[11px] text-charcoal">
                    11:15 IST <span className="text-mutedInk font-sans">(Morning Range)</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-[11px] text-charcoal">
                    13:45 IST <span className="text-mutedInk font-sans">(European Open)</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-[11px] text-charcoal">
                    15:25 IST <span className="text-mutedInk font-sans">(Settlement)</span>
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Live Execution Arc (24-Hour Visual Daylight Timeline) */}
          <div className="flex flex-col gap-3 pt-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-mutedInk">
              <span>Execution Timeline (IST)</span>
              <span>Market Session: 09:15 – 15:30 IST</span>
            </div>
            <div className="relative w-full h-11 bg-surfaceMuted rounded-xl border border-hairline overflow-hidden flex items-center px-4">
              {/* Daylight trading hours block */}
              <div className="absolute left-[21.4%] right-[28.5%] top-1 bottom-1 bg-amber-100/40 border border-amber-200/60 rounded-md"></div>

              {/* Axis lines */}
              <div className="w-full flex justify-between font-mono text-[10px] text-mutedInk/60 relative z-0 select-none">
                <span>06:00</span>
                <span>09:00</span>
                <span>12:00</span>
                <span>15:00</span>
                <span>18:00</span>
                <span>20:00</span>
              </div>

              {/* Dynamic Pins */}
              {(timelinePins[dailyFrequency] || timelinePins[3]).map((pin, idx) => (
                <div
                  key={idx}
                  style={{ left: pin.pos }}
                  className="absolute top-0 bottom-0 flex flex-col items-center justify-center group cursor-pointer z-10 -translate-x-1/2"
                  title={pin.label}
                >
                  <div className="w-3 h-3 rounded-full bg-terracotta ring-4 ring-terracotta/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  </div>
                  <span className="absolute -bottom-0.5 font-mono text-[9px] font-medium text-terracotta bg-white px-1 rounded shadow-2xs border border-terracotta/20">
                    {pin.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Run Diff Card ("Delta Since Previous Run") */}
          <div className="p-5 rounded-xl border border-hairline bg-surfaceMuted/30 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-hairline/70">
              <span className="font-mono text-[11px] font-semibold text-charcoal uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-terracotta">difference</span>
                Delta Since Previous Run (12:30 → 15:25 IST)
              </span>
              <span className="font-mono text-[10px] text-mutedInk">Generated via SymPy Math Rail</span>
            </div>
            <div className="space-y-2 text-xs font-sans text-charcoal">
              <div className="flex items-start gap-2">
                <span className="font-mono font-medium text-terracotta">Δ</span>
                <span>
                  <strong>Open Interest Shift:</strong> 24,500 CE open interest expanded by{' '}
                  <span className="font-mono text-terracotta font-medium">+18.4%</span> (Heavy institutional call writing).
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-medium text-terracotta">Δ</span>
                <span>
                  <strong>Put-Call Ratio (PCR):</strong> <span className="font-mono">1.14 → 0.88</span> (bearish distribution into rollover).
                </span>
              </div>
              <div className="flex items-start gap-2 text-mutedInk pt-1">
                <span className="text-botanical font-mono font-bold">✓</span>
                <span>
                  Dossier auto-compiled &amp; signed into <em>{project}</em> enclave.
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-hairline">
            <span className="font-mono text-xs text-mutedInk">
              Routine status: <span className="text-botanical font-medium">Active</span> · Zero human intervention required
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={triggerDryRun}
                disabled={dryRunRunning}
                className="flex-1 sm:flex-none px-4 py-2 rounded-full border border-hairline bg-surfacePure hover:border-mutedInk/40 text-charcoal font-sans text-xs font-medium transition-colors cursor-pointer"
              >
                {dryRunRunning ? 'Executing Dry Run...' : 'Simulate Dry Run'}
              </button>
              <button
                type="button"
                onClick={saveRoutine}
                className="flex-1 sm:flex-none px-5 py-2 rounded-full bg-botanical hover:bg-botanical-dark text-white font-sans text-xs font-medium tracking-tight transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
              >
                {routineSaved ? (
                  <>
                    <span className="material-symbols-outlined text-[15px]">check</span>
                    <span>Routine Deployed!</span>
                  </>
                ) : (
                  <span>Save &amp; Deploy Routine</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PART B: DUAL-LAYER MEMORY INSPECTOR MATRIX
      ====================================================================== */}
      <section className="w-full py-16 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-terracotta font-semibold">
              Contextual Sovereignty
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal font-normal tracking-tight">
              Two layers of memory. Zero repetitive prompts.
            </h2>
            <p className="font-sans text-[15px] text-mutedInk max-w-xl mx-auto leading-relaxed">
              Grizon separates immutable operational baselines from dynamic contextual insights gathered across active conversations.
            </p>
          </div>

          {/* 2-Column Side-by-Side Comparison Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Column 1: Static Anchor */}
            <div className="bg-surfacePure border border-hairline rounded-2xl p-7 shadow-[0_2px_12px_rgba(24,24,27,0.02)] flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between pb-4 border-b border-hairline">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-botanical"></span>
                    <span className="font-mono text-xs uppercase tracking-wider text-charcoal font-semibold">
                      Layer 01
                    </span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surfaceMuted text-mutedInk">
                    Static Anchor
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-xl text-charcoal font-medium">Standing Profile &amp; Guardrails</h3>
                  <p className="font-mono text-xs text-mutedInk">Set during onboarding · Verified credentials</p>
                </div>

                {/* Static Details */}
                <div className="space-y-3 pt-1">
                  <div className="p-3 rounded-lg bg-surfaceMuted/50 border border-hairline/80">
                    <span className="font-mono text-[10px] uppercase text-mutedInk tracking-wider block mb-0.5">
                      Role &amp; Mandate
                    </span>
                    <p className="font-sans text-xs text-charcoal font-medium">
                      Senior Derivative Trader. Mandated by SEBI Equity Derivatives Directive 2024.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-surfaceMuted/50 border border-hairline/80">
                    <span className="font-mono text-[10px] uppercase text-mutedInk tracking-wider block mb-0.5">
                      Risk Parameters
                    </span>
                    <p className="font-sans text-xs text-charcoal font-medium">
                      Delta-neutral strict boundaries (±0.05), Max daily VAR 1.8%.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-surfaceMuted/50 border border-hairline/80">
                    <span className="font-mono text-[10px] uppercase text-mutedInk tracking-wider block mb-0.5">
                      Primary Tech &amp; Math
                    </span>
                    <p className="font-sans text-xs text-charcoal font-medium">
                      SymPy symbolic derivation, Black-Scholes Greeks, NSE Level-2 direct feed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer indicator */}
              <div className="pt-4 border-t border-hairline text-xs font-mono text-mutedInk flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-botanical">lock</span>
                  Locked immutable baseline
                </span>
                <span className="text-[11px] text-mutedInk/80">Applied globally</span>
              </div>
            </div>

            {/* Column 2: Dynamic Provenance */}
            <div className="bg-surfacePure border border-hairline rounded-2xl p-7 shadow-[0_2px_12px_rgba(24,24,27,0.02)] flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between pb-4 border-b border-hairline">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-terracotta"></span>
                    <span className="font-mono text-xs uppercase tracking-wider text-charcoal font-semibold">
                      Layer 02
                    </span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-terracotta/10 text-terracotta font-medium">
                    {assertions.length} Assertions Active
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-xl text-charcoal font-medium">Evolving Conversational Memory</h3>
                  <p className="font-mono text-xs text-mutedInk">Dynamic provenance · User inspectable &amp; editable</p>
                </div>

                {/* Assertion Rows with Interactive Controls */}
                <div className="space-y-2.5 pt-1">
                  {assertions.map((assertion) => (
                    <div
                      key={assertion.id}
                      className="p-3 rounded-lg bg-surfaceMuted/50 border border-hairline/80 flex flex-col gap-2 group hover:border-hairline transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[9px] uppercase px-1.5 py-0.5 rounded ${
                            assertion.pinned
                              ? 'bg-amber-100/70 text-terracotta font-semibold'
                              : 'bg-surfaceAlt text-mutedInk font-semibold'
                          }`}
                        >
                          {assertion.pinned ? 'Pinned' : assertion.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-mutedInk">
                          <button
                            type="button"
                            onClick={() => togglePin(assertion.id)}
                            className="hover:text-charcoal p-0.5 transition-colors cursor-pointer"
                            title={assertion.pinned ? 'Unpin' : 'Pin'}
                          >
                            <span
                              className={`material-symbols-outlined text-[14px] ${
                                assertion.pinned ? 'text-terracotta' : ''
                              }`}
                            >
                              push_pin
                            </span>
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteAssertion(assertion.id)}
                            className="hover:text-red-600 p-0.5 transition-colors cursor-pointer"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-[14px]">delete</span>
                          </button>
                        </div>
                      </div>
                      <p className="font-sans text-xs text-charcoal leading-relaxed">{assertion.text}</p>
                    </div>
                  ))}

                  {/* Add assertion inline input */}
                  {showAddAssertion && (
                    <form onSubmit={addAssertion} className="pt-2 flex flex-col gap-2">
                      <input
                        type="text"
                        autoFocus
                        value={newAssertionInput}
                        onChange={(e) => setNewAssertionInput(e.target.value)}
                        placeholder="Enter persistent context (e.g. Always include NSE cash delivery volumes)..."
                        className="w-full text-xs p-2.5 rounded-lg border border-hairline bg-white text-charcoal focus:outline-none focus:ring-1 focus:ring-botanical"
                      />
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setShowAddAssertion(false)}
                          className="px-2.5 py-1 text-xs text-mutedInk hover:text-charcoal"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-3 py-1 text-xs bg-botanical text-white rounded font-medium"
                        >
                          Save Assertion
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Footer actions */}
              <div className="pt-4 border-t border-hairline flex items-center justify-between gap-2">
                {!showAddAssertion && (
                  <button
                    type="button"
                    onClick={() => setShowAddAssertion(true)}
                    className="font-mono text-xs text-charcoal hover:text-terracotta font-medium transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>+ Add Custom Assertion</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setAssertions([])}
                  className="font-mono text-[11px] text-mutedInk hover:text-charcoal transition-colors ml-auto cursor-pointer"
                >
                  Purge Context Snapshot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PART C: DEDICATED PROJECT WORKSPACES (CLEAN ARCHITECTURAL BENTO CARDS)
      ====================================================================== */}
      <section className="w-full py-16 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-hairline">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-terracotta font-semibold">
                Sovereign Enclaves
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal font-normal tracking-tight">
                Isolated Project Workspaces
              </h2>
              <p className="font-sans text-sm text-mutedInk">
                Each room maintains dedicated document corpora, private memory parameters, custom scheduled routines, and cryptographic separation.
              </p>
            </div>
            <Link
              to="/app"
              className="px-4 py-2 rounded-full border border-hairline bg-surfacePure text-charcoal hover:border-mutedInk/40 font-sans text-xs font-medium transition-colors self-start sm:self-auto shrink-0 shadow-2xs"
            >
              + New Enclave
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Enclave 1 */}
            <div className="bg-surfacePure border border-hairline rounded-2xl p-6 shadow-[0_2px_12px_rgba(24,24,27,0.02)] flex flex-col justify-between gap-6 group hover:border-mutedInk/40 transition-colors">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-mutedInk font-semibold">
                    Litigation &amp; Statutory
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-botanical"></span>
                </div>
                <h3 className="font-display text-lg text-charcoal font-medium group-hover:text-terracotta transition-colors leading-snug">
                  Delhi High Court Commercial Writ
                </h3>
                <ul className="font-sans text-xs text-mutedInk space-y-2 pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-terracotta font-mono">•</span>
                    <span>14 indexed Gazette PDFs</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-terracotta font-mono">•</span>
                    <span>eCourts NJDG sync (16-digit CNR tracking)</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-terracotta font-mono">•</span>
                    <span>Daily 07:30 IST Cause List watch</span>
                  </li>
                </ul>
              </div>
              <Link
                className="font-mono text-xs text-charcoal group-hover:text-terracotta pt-4 border-t border-hairline transition-colors flex items-center justify-between font-medium"
                to="/app"
              >
                <span>Open Enclave</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Enclave 2 */}
            <div className="bg-surfacePure border border-hairline rounded-2xl p-6 shadow-[0_2px_12px_rgba(24,24,27,0.02)] flex flex-col justify-between gap-6 group hover:border-mutedInk/40 transition-colors">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-mutedInk font-semibold">
                    Quantitative Capital
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                </div>
                <h3 className="font-display text-lg text-charcoal font-medium group-hover:text-terracotta transition-colors leading-snug">
                  NIFTY &amp; Energy Swing Desk
                </h3>
                <ul className="font-sans text-xs text-mutedInk space-y-2 pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-terracotta font-mono">•</span>
                    <span>Level-2 NSE tick feed with 3x daily option-chain auto hedge</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-terracotta font-mono">•</span>
                    <span>SymPy verified Greek bounds</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-terracotta font-mono">•</span>
                    <span>SEBI LODR Reg 30 watch</span>
                  </li>
                </ul>
              </div>
              <Link
                className="font-mono text-xs text-charcoal group-hover:text-terracotta pt-4 border-t border-hairline transition-colors flex items-center justify-between font-medium"
                to="/app"
              >
                <span>Open Enclave</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Enclave 3 */}
            <div className="bg-surfacePure border border-hairline rounded-2xl p-6 shadow-[0_2px_12px_rgba(24,24,27,0.02)] flex flex-col justify-between gap-6 group hover:border-mutedInk/40 transition-colors">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-mutedInk font-semibold">
                    System Architecture &amp; Infra
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-botanical"></span>
                </div>
                <h3 className="font-display text-lg text-charcoal font-medium group-hover:text-terracotta transition-colors leading-snug">
                  Core Platform v2 Architecture
                </h3>
                <ul className="font-sans text-xs text-mutedInk space-y-2 pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-terracotta font-mono">•</span>
                    <span>32 ADR docs under nightly AST lint</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-terracotta font-mono">•</span>
                    <span>AWS Nitro Enclaves cryptographic sandbox</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-terracotta font-mono">•</span>
                    <span>Zero model training retention guarantee</span>
                  </li>
                </ul>
              </div>
              <Link
                className="font-mono text-xs text-charcoal group-hover:text-terracotta pt-4 border-t border-hairline transition-colors flex items-center justify-between font-medium"
                to="/app"
              >
                <span>Open Enclave</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. EDITORIAL MONOGRAPH QUOTE STRIP
      ====================================================================== */}
      <section className="w-full py-16 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto py-12 px-6 text-center flex flex-col gap-5 border-t border-b border-hairline">
          <blockquote className="font-display text-2xl md:text-3xl text-charcoal italic font-normal leading-relaxed">
            “Autonomy is not about removing human intention; it is about honoring human judgment by liberating it from the mechanical burden of continuous oversight.”
          </blockquote>
          <div className="font-mono text-xs text-mutedInk tracking-wider uppercase">
            The Grizon Monograph Series · Vol. III
          </div>
        </div>
      </section>
    </div>
  );
}
