import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

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
    <div className="w-full flex flex-col bg-[#FAF9F5] text-[#07091B] font-sans antialiased min-h-screen">
      {/* =====================================================================
          2. EDITORIAL HEADER SECTION
      ====================================================================== */}
      <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-12 text-center">
        <div className="w-full flex items-center justify-start mb-8 text-left">
          <Breadcrumb />
        </div>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#6630E4]">
            Routines, Memory &amp; Projects
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl lg:text-[52px] text-[#07091B] font-extrabold tracking-[-0.03em] leading-[1.12]">
            Set your rhythm once.<br />
            <span className="text-[#6630E4]">Let Grizon keep watch.</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto text-balance font-normal">
            Plain English automation for option-chain briefings, court docket checks, or policy synthesis running on your schedule.
          </p>
        </div>
      </section>

      {/* =====================================================================
          3. PART A: INTERACTIVE NATURAL-LANGUAGE ROUTINE COMPOSER
      ====================================================================== */}
      <section className="w-full py-6 md:py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-white border border-[#E6E4DD] rounded-3xl p-6 sm:p-10 shadow-xs flex flex-col gap-8">
          {/* Top bar inside card */}
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#E6E4DD] gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#6630E4]"></span>
              <span className="font-sans text-xs uppercase tracking-wider text-slate-500 font-bold">
                Active Schedule Composer
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-slate-700 font-sans text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6630E4] animate-ping"></span>
              Next run today at 09:20 IST
            </span>
          </div>

          {/* Natural-Language Sentence Builder */}
          <div className="font-sans text-lg md:text-2xl text-[#07091B] leading-[1.8] font-normal">
            Every{' '}
            <select
              value={cadence}
              onChange={(e) => setCadence(e.target.value)}
              className="font-sans font-bold text-base md:text-xl text-[#07091B] bg-[#F5F1FD] border border-[#E8E0FB] hover:border-[#6630E4]/60 px-3 py-1 rounded-xl cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#6630E4]/20 my-1 inline-block"
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
              className="font-sans font-bold text-base md:text-xl text-[#07091B] bg-[#F5F1FD] border border-[#E8E0FB] hover:border-[#6630E4]/60 px-3 py-1 rounded-xl cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#6630E4]/20 my-1 inline-block"
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
              className="font-sans font-bold text-base md:text-xl text-[#07091B] bg-[#F5F1FD] border border-[#E8E0FB] hover:border-[#6630E4]/60 px-3 py-1 rounded-xl cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#6630E4]/20 my-1 inline-block"
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
            <span className="font-sans font-bold text-base md:text-xl text-[#6630E4] bg-[#F5F1FD] border border-[#E8E0FB] px-3.5 py-1 rounded-xl inline-block my-1">
              {dailyFrequency === 1 && '09:20 IST'}
              {dailyFrequency === 2 && '09:20, 15:25 IST'}
              {dailyFrequency === 3 && '09:20, 12:30, 15:25 IST'}
              {dailyFrequency === 4 && '08:45, 11:15, 13:45, 15:25 IST'}
            </span>{' '}
            and file findings into the{' '}
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="font-sans font-bold text-base md:text-xl text-[#07091B] bg-[#F5F1FD] border border-[#E8E0FB] hover:border-[#6630E4]/60 px-3 py-1 rounded-xl cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#6630E4]/20 my-1 inline-block"
            >
              <option value="NIFTY Swing Desk">NIFTY Swing Desk</option>
              <option value="Delhi High Court Commercial Writ">Delhi High Court Commercial Writ</option>
              <option value="Core Platform v2 Architecture">Core Platform v2 Architecture</option>
            </select>{' '}
            project.
          </div>

          {/* Stepper & Frequency Controls */}
          <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="font-sans text-xs text-slate-500 font-bold uppercase tracking-wider">
                Cadence / Frequency
              </span>
              <div className="inline-flex rounded-full border border-[#E6E4DD] bg-white p-1 gap-1 shadow-2xs">
                {[1, 2, 3, 4].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setDailyFrequency(count)}
                    className={`px-3.5 py-1 text-xs font-sans rounded-full transition-all cursor-pointer font-semibold ${
                      dailyFrequency === count
                        ? 'bg-[#07091B] text-white shadow-xs'
                        : 'text-slate-600 hover:text-[#07091B]'
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
                <span className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD] font-sans text-xs text-[#07091B] font-semibold shadow-2xs">
                  09:20 IST <span className="text-slate-500 font-normal">(Pre-Market)</span>
                </span>
              )}
              {dailyFrequency === 2 && (
                <>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD] font-sans text-xs text-[#07091B] font-semibold shadow-2xs">
                    09:20 IST <span className="text-slate-500 font-normal">(Pre-Market)</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD] font-sans text-xs text-[#07091B] font-semibold shadow-2xs">
                    15:25 IST <span className="text-slate-500 font-normal">(Cash Close)</span>
                  </span>
                </>
              )}
              {dailyFrequency === 3 && (
                <>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD] font-sans text-xs text-[#07091B] font-semibold shadow-2xs">
                    09:20 IST <span className="text-slate-500 font-normal">(Pre-Market)</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD] font-sans text-xs text-[#07091B] font-semibold shadow-2xs">
                    12:30 IST <span className="text-slate-500 font-normal">(Midday Scan)</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD] font-sans text-xs text-[#07091B] font-semibold shadow-2xs">
                    15:25 IST <span className="text-slate-500 font-normal">(Cash Close)</span>
                  </span>
                </>
              )}
              {dailyFrequency === 4 && (
                <>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD] font-sans text-xs text-[#07091B] font-semibold shadow-2xs">
                    08:45 IST <span className="text-slate-500 font-normal">(GIFT NIFTY)</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD] font-sans text-xs text-[#07091B] font-semibold shadow-2xs">
                    11:15 IST <span className="text-slate-500 font-normal">(Morning Range)</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD] font-sans text-xs text-[#07091B] font-semibold shadow-2xs">
                    13:45 IST <span className="text-slate-500 font-normal">(European Open)</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD] font-sans text-xs text-[#07091B] font-semibold shadow-2xs">
                    15:25 IST <span className="text-slate-500 font-normal">(Settlement)</span>
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Live Execution Arc (24-Hour Visual Daylight Timeline) */}
          <div className="flex flex-col gap-3 pt-1">
            <div className="flex items-center justify-between text-xs font-sans text-slate-500 font-medium">
              <span>Execution Timeline (IST)</span>
              <span>Market Session: 09:15 – 15:30 IST</span>
            </div>
            <div className="relative w-full h-11 bg-[#FAF9F5] rounded-2xl border border-[#E6E4DD] overflow-hidden flex items-center px-4">
              {/* Daylight trading hours block */}
              <div className="absolute left-[21.4%] right-[28.5%] top-1 bottom-1 bg-[#F5F1FD] border border-[#E8E0FB] rounded-xl"></div>

              {/* Axis lines */}
              <div className="w-full flex justify-between font-sans text-[11px] text-slate-400 font-medium relative z-0 select-none">
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
                  <div className="w-3.5 h-3.5 rounded-full bg-[#6630E4] ring-4 ring-[#6630E4]/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  </div>
                  <span className="absolute -bottom-0.5 font-sans text-[10px] font-bold text-[#6630E4] bg-white px-1.5 py-0.5 rounded-full shadow-2xs border border-[#E8E0FB]">
                    {pin.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Run Diff Card ("Delta Since Previous Run") */}
          <div className="p-5 sm:p-6 rounded-2xl border border-[#E6E4DD] bg-[#FAF9F5] flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6E4DD]">
              <span className="font-sans text-xs font-bold text-[#07091B] uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#6630E4]">difference</span>
                Delta Since Previous Run (12:30 → 15:25 IST)
              </span>
              <span className="font-sans text-xs text-slate-500">Generated via SymPy Math Rail</span>
            </div>
            <div className="space-y-2 text-xs font-sans text-slate-700">
              <div className="flex items-start gap-2">
                <span className="font-bold text-[#6630E4]">Δ</span>
                <span>
                  <strong className="text-[#07091B]">Open Interest Shift:</strong> 24,500 CE open interest expanded by{' '}
                  <span className="text-[#6630E4] font-bold">+18.4%</span> (Heavy institutional call writing).
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-[#6630E4]">Δ</span>
                <span>
                  <strong className="text-[#07091B]">Put-Call Ratio (PCR):</strong> <span className="font-semibold text-[#07091B]">1.14 → 0.88</span> (bearish distribution into rollover).
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-500 pt-1">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>
                  Dossier auto-compiled &amp; signed into <em>{project}</em> enclave.
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6E4DD]">
            <span className="font-sans text-xs text-slate-500">
              Routine status: <span className="text-[#6630E4] font-bold">Active</span> · Zero human intervention required
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={triggerDryRun}
                disabled={dryRunRunning}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-[#E6E4DD] bg-white hover:border-[#6630E4] hover:text-[#6630E4] text-[#07091B] font-sans text-xs font-bold transition-all shadow-2xs active:scale-[0.98] cursor-pointer"
              >
                {dryRunRunning ? 'Executing Dry Run...' : 'Simulate Dry Run'}
              </button>
              <button
                type="button"
                onClick={saveRoutine}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#6630E4] hover:bg-[#5221C6] text-white font-sans text-xs font-bold tracking-tight transition-all shadow-xs active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5"
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
      <section className="w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col items-center gap-3 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F1FD] border border-[#E8E0FB] shadow-2xs">
              <span className="material-symbols-outlined text-[#6630E4] text-[16px]">memory</span>
              <span className="font-sans text-xs uppercase tracking-wider text-[#6630E4] font-bold">
                Contextual Sovereignty
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight leading-[1.15]">
              Two layers of memory. Zero repetitive prompts.
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
              Grizon separates immutable operational baselines from dynamic contextual insights gathered across active conversations.
            </p>
          </div>

          {/* 2-Column Side-by-Side Comparison Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Column 1: Static Anchor */}
            <div className="bg-white border border-[#E6E4DD] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between gap-6 hover:border-[#6630E4]/30 transition-all">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between pb-4 border-b border-[#E6E4DD]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6630E4]"></span>
                    <span className="font-sans text-xs uppercase tracking-wider text-[#07091B] font-bold">
                      Layer 01
                    </span>
                  </div>
                  <span className="font-sans text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-slate-600">
                    Static Anchor
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-sans text-xl text-[#07091B] font-bold">Standing Profile &amp; Guardrails</h3>
                  <p className="font-sans text-xs text-slate-500">Set during onboarding · Verified credentials</p>
                </div>

                {/* Static Details */}
                <div className="space-y-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD]">
                    <span className="font-sans text-[11px] uppercase text-slate-500 font-bold tracking-wider block mb-1">
                      Role &amp; Mandate
                    </span>
                    <p className="font-sans text-xs text-[#07091B] font-medium leading-relaxed">
                      Senior Derivative Trader. Mandated by SEBI Equity Derivatives Directive 2024.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD]">
                    <span className="font-sans text-[11px] uppercase text-slate-500 font-bold tracking-wider block mb-1">
                      Risk Parameters
                    </span>
                    <p className="font-sans text-xs text-[#07091B] font-medium leading-relaxed">
                      Delta-neutral strict boundaries (±0.05), Max daily VAR 1.8%.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD]">
                    <span className="font-sans text-[11px] uppercase text-slate-500 font-bold tracking-wider block mb-1">
                      Primary Tech &amp; Math
                    </span>
                    <p className="font-sans text-xs text-[#07091B] font-medium leading-relaxed">
                      SymPy symbolic derivation, Black-Scholes Greeks, NSE Level-2 direct feed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer indicator */}
              <div className="pt-4 border-t border-[#E6E4DD] text-xs font-sans text-slate-500 flex items-center justify-between">
                <span className="flex items-center gap-2 font-medium">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">lock</span>
                  Locked immutable baseline
                </span>
                <span className="text-[11px] text-slate-400">Applied globally</span>
              </div>
            </div>

            {/* Column 2: Dynamic Provenance */}
            <div className="bg-white border border-[#E6E4DD] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between gap-6 hover:border-[#6630E4]/30 transition-all">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between pb-4 border-b border-[#E6E4DD]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6630E4]"></span>
                    <span className="font-sans text-xs uppercase tracking-wider text-[#07091B] font-bold">
                      Layer 02
                    </span>
                  </div>
                  <span className="font-sans text-xs font-bold px-2.5 py-1 rounded-full bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4]">
                    {assertions.length} Assertions Active
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-sans text-xl text-[#07091B] font-bold">Evolving Conversational Memory</h3>
                  <p className="font-sans text-xs text-slate-500">Dynamic provenance · User inspectable &amp; editable</p>
                </div>

                {/* Assertion Rows with Interactive Controls */}
                <div className="space-y-2.5 pt-1">
                  {assertions.map((assertion) => (
                    <div
                      key={assertion.id}
                      className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex flex-col gap-2 group hover:border-[#6630E4]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-sans text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                            assertion.pinned
                              ? 'bg-[#F5F1FD] text-[#6630E4] border border-[#E8E0FB]'
                              : 'bg-white text-slate-600 border border-[#E6E4DD]'
                          }`}
                        >
                          {assertion.pinned ? 'Pinned' : assertion.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <button
                            type="button"
                            onClick={() => togglePin(assertion.id)}
                            className="hover:text-[#07091B] p-0.5 transition-colors cursor-pointer"
                            title={assertion.pinned ? 'Unpin' : 'Pin'}
                          >
                            <span
                              className={`material-symbols-outlined text-[15px] ${
                                assertion.pinned ? 'text-[#6630E4]' : ''
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
                            <span className="material-symbols-outlined text-[15px]">delete</span>
                          </button>
                        </div>
                      </div>
                      <p className="font-sans text-xs text-[#07091B] leading-relaxed">{assertion.text}</p>
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
                        className="w-full text-xs p-3 rounded-xl border border-[#E6E4DD] bg-white text-[#07091B] focus:outline-none focus:ring-2 focus:ring-[#6630E4]/20 focus:border-[#6630E4]"
                      />
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setShowAddAssertion(false)}
                          className="px-3 py-1.5 text-xs text-slate-500 hover:text-[#07091B] font-sans font-medium"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 text-xs bg-[#6630E4] hover:bg-[#5221C6] text-white rounded-full font-sans font-bold shadow-2xs cursor-pointer"
                        >
                          Save Assertion
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Footer actions */}
              <div className="pt-4 border-t border-[#E6E4DD] flex items-center justify-between gap-2">
                {!showAddAssertion && (
                  <button
                    type="button"
                    onClick={() => setShowAddAssertion(true)}
                    className="font-sans text-xs text-[#07091B] hover:text-[#6630E4] font-bold transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>+ Add Custom Assertion</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setAssertions([])}
                  className="font-sans text-xs text-slate-400 hover:text-[#07091B] transition-colors ml-auto cursor-pointer"
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
      <section className="w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#E6E4DD]">
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E6E4DD]">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F1FD] border border-[#E8E0FB] shadow-2xs self-start mb-1">
                <span className="material-symbols-outlined text-[#6630E4] text-[16px]">folder_special</span>
                <span className="font-sans text-xs uppercase tracking-wider text-[#6630E4] font-bold">
                  Sovereign Enclaves
                </span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight leading-[1.15]">
                Isolated Project Workspaces
              </h2>
              <p className="font-sans text-sm text-slate-600 max-w-xl">
                Each room maintains dedicated document corpora, private memory parameters, custom scheduled routines, and cryptographic separation.
              </p>
            </div>
            <Link
              to="/app"
              className="px-5 py-2.5 rounded-full border border-[#E6E4DD] bg-white text-[#07091B] hover:border-[#6630E4] hover:text-[#6630E4] font-sans text-xs font-bold transition-all self-start sm:self-auto shrink-0 shadow-2xs"
            >
              + New Enclave
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Enclave 1 */}
            <div className="bg-white border border-[#E6E4DD] rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between gap-6 group hover:border-[#6630E4]/40 hover:shadow-md transition-all">
              <div className="flex flex-col gap-3.5">
                <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                  Litigation &amp; Statutory
                </span>
                <h3 className="font-sans text-lg text-[#07091B] font-bold group-hover:text-[#6630E4] transition-colors leading-snug">
                  Delhi High Court Commercial Writ
                </h3>
                <ul className="font-sans text-xs text-slate-600 space-y-2 pt-1">
                  <li className="leading-relaxed">14 indexed Gazette PDFs</li>
                  <li className="leading-relaxed">eCourts NJDG sync (16-digit CNR tracking)</li>
                  <li className="leading-relaxed">Daily 07:30 IST Cause List watch</li>
                </ul>
              </div>
              <Link
                className="font-sans text-xs text-[#07091B] group-hover:text-[#6630E4] pt-4 border-t border-[#E6E4DD] transition-colors flex items-center justify-between font-bold"
                to="/app"
              >
                <span className="border-b-2 border-dotted border-[#07091B] group-hover:border-[#6630E4] pb-0.5">Open Enclave</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
              </Link>
            </div>

            {/* Enclave 2 */}
            <div className="bg-white border border-[#E6E4DD] rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between gap-6 group hover:border-[#6630E4]/40 hover:shadow-md transition-all">
              <div className="flex flex-col gap-3.5">
                <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                  Quantitative Capital
                </span>
                <h3 className="font-sans text-lg text-[#07091B] font-bold group-hover:text-[#6630E4] transition-colors leading-snug">
                  NIFTY &amp; Energy Swing Desk
                </h3>
                <ul className="font-sans text-xs text-slate-600 space-y-2 pt-1">
                  <li className="leading-relaxed">Level-2 NSE tick feed with 3x daily option-chain auto hedge</li>
                  <li className="leading-relaxed">SymPy verified Greek bounds</li>
                  <li className="leading-relaxed">SEBI LODR Reg 30 watch</li>
                </ul>
              </div>
              <Link
                className="font-sans text-xs text-[#07091B] group-hover:text-[#6630E4] pt-4 border-t border-[#E6E4DD] transition-colors flex items-center justify-between font-bold"
                to="/app"
              >
                <span className="border-b-2 border-dotted border-[#07091B] group-hover:border-[#6630E4] pb-0.5">Open Enclave</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
              </Link>
            </div>

            {/* Enclave 3 */}
            <div className="bg-white border border-[#E6E4DD] rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between gap-6 group hover:border-[#6630E4]/40 hover:shadow-md transition-all">
              <div className="flex flex-col gap-3.5">
                <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                  System Architecture &amp; Infra
                </span>
                <h3 className="font-sans text-lg text-[#07091B] font-bold group-hover:text-[#6630E4] transition-colors leading-snug">
                  Core Platform v2 Architecture
                </h3>
                <ul className="font-sans text-xs text-slate-600 space-y-2 pt-1">
                  <li className="leading-relaxed">32 ADR docs under nightly AST lint</li>
                  <li className="leading-relaxed">AWS Nitro Enclaves cryptographic sandbox</li>
                  <li className="leading-relaxed">Zero model training retention guarantee</li>
                </ul>
              </div>
              <Link
                className="font-sans text-xs text-[#07091B] group-hover:text-[#6630E4] pt-4 border-t border-[#E6E4DD] transition-colors flex items-center justify-between font-bold"
                to="/app"
              >
                <span className="border-b-2 border-dotted border-[#07091B] group-hover:border-[#6630E4] pb-0.5">Open Enclave</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. EDITORIAL MONOGRAPH QUOTE CALLOUT
      ====================================================================== */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="rounded-3xl bg-white border border-[#E6E4DD] p-8 sm:p-10 text-center relative shadow-xs">
          <div className="w-10 h-1 bg-[#6630E4] rounded-full mx-auto mb-6" />
          <blockquote className="font-sans text-xl sm:text-2xl font-bold text-[#07091B] leading-snug max-w-2xl mx-auto text-balance mb-4">
            “Autonomy is not about removing human intention; it is about honoring human judgment by liberating it from the mechanical burden of continuous oversight.”
          </blockquote>
          <p className="font-sans text-xs uppercase tracking-wider text-[#6630E4] font-bold">
            The Grizon Monograph Series · Vol. III
          </p>
        </div>
      </section>
    </div>
  );
}
