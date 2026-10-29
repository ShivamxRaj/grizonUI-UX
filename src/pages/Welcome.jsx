import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Selected Domain Tiles
  const [selectedDomains, setSelectedDomains] = useState(['markets']);

  // Step 2: Calibrated Context Fields
  const [timeframe, setTimeframe] = useState('Swing');
  const [watchlist, setWatchlist] = useState('NIFTY, BANKNIFTY, RELIANCE, HDFCBANK');
  const [legalForum, setLegalForum] = useState('Delhi High Court & Supreme Court');
  const [techStack, setTechStack] = useState('React, TypeScript, Python, FastAPI, PostgreSQL');
  const [commStyle, setCommStyle] = useState('concise'); // 'concise' | 'comprehensive'

  // Step 3: Starter Project & Daily Routine
  const [projectName, setProjectName] = useState('Q4 Sovereign Intelligence Desk');
  const [routineActive, setRoutineActive] = useState(true);
  const [routineTime, setRoutineTime] = useState('09:20 IST');

  const domainOptions = [
    {
      id: 'markets',
      title: 'Markets, Investing & NSE Options',
      desc: 'Sub-second option chains, Greeks, Bull/Bear invalidation & earnings confluence.',
      icon: 'trending_up',
      code: 'API: NSE / YAHOO'
    },
    {
      id: 'legal',
      title: 'Indian Law & Litigation',
      desc: 'BNS/BNSS/BSA transition, eCourts CNR case tracker & Indian Kanoon citations.',
      icon: 'gavel',
      code: 'REGISTRY: eCourts'
    },
    {
      id: 'engineering',
      title: 'Software Engineering & Architecture',
      desc: 'ADR decision records, AST code analysis, SymPy formal proofs & API design.',
      icon: 'terminal',
      code: 'SANDBOX: Python 3.12'
    },
    {
      id: 'research',
      title: 'Academic & Quantitative Research',
      desc: 'Multi-document synthesis, verified citations, arXiv/SSRN corpus search.',
      icon: 'menu_book',
      code: 'SEARCH: SERPER / TAVILY'
    },
    {
      id: 'product',
      title: 'Product & UI/UX Design',
      desc: 'Design system specifications, user journeys, Dev Studio web prototypes.',
      icon: 'palette',
      code: 'ENGINE: Dev Studio'
    },
    {
      id: 'executive',
      title: 'Executive Writing & Document Review',
      desc: 'M&A briefing, board memoranda, contract risk matrices & institutional letters.',
      icon: 'description',
      code: 'EXPORT: DOCX / PDF'
    }
  ];

  const toggleDomain = (id) => {
    if (selectedDomains.includes(id)) {
      if (selectedDomains.length > 1) {
        setSelectedDomains(selectedDomains.filter((item) => item !== id));
      }
    } else {
      setSelectedDomains([...selectedDomains, id]);
    }
  };

  const handleFinish = () => {
    // Save onboarding state in localStorage so /app can consume it
    const profile = {
      domains: selectedDomains,
      timeframe,
      watchlist,
      legalForum,
      techStack,
      commStyle,
      projectName,
      routineActive,
      routineTime,
      createdAt: new Date().toISOString()
    };
    try {
      localStorage.setItem('grizon_profile_memory', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-alabaster text-charcoal flex flex-col justify-between selection:bg-terracotta/20 selection:text-terracotta">
      {/* Editorial Top Masthead */}
      <header className="w-full border-b border-hairline bg-alabaster/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/grizon-icon.png"
              alt="GriZon AI Logo"
              className="w-7 h-7 object-contain rounded-md"
            />
            <span className="font-sans text-[22px] font-extrabold text-[#07091B] tracking-tight leading-none group-hover:text-[#1E3A3A] transition-colors">
              Grizon AI
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest text-mutedInk border border-hairline px-2 py-0.5 rounded bg-surfaceSubtle">
              Onboarding Protocol
            </span>
          </Link>

          {/* Step Breadcrumb Indicator */}
          <div className="flex items-center gap-2 sm:gap-4 font-mono text-xs">
            <div className={`flex items-center gap-1.5 ${currentStep >= 1 ? 'text-charcoal font-semibold' : 'text-mutedInk'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${currentStep >= 1 ? 'bg-botanical text-alabaster' : 'bg-surfaceSubtle text-mutedInk'}`}>
                1
              </span>
              <span className="hidden sm:inline">Domain</span>
            </div>
            <span className="text-hairline">/</span>
            <div className={`flex items-center gap-1.5 ${currentStep >= 2 ? 'text-charcoal font-semibold' : 'text-mutedInk'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${currentStep >= 2 ? 'bg-botanical text-alabaster' : 'bg-surfaceSubtle text-mutedInk'}`}>
                2
              </span>
              <span className="hidden sm:inline">Context</span>
            </div>
            <span className="text-hairline">/</span>
            <div className={`flex items-center gap-1.5 ${currentStep >= 3 ? 'text-charcoal font-semibold' : 'text-mutedInk'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${currentStep >= 3 ? 'bg-botanical text-alabaster' : 'bg-surfaceSubtle text-mutedInk'}`}>
                3
              </span>
              <span className="hidden sm:inline">Enclave</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-12 flex-1 w-full flex flex-col justify-center">
        {/* =====================================================================
            STEP 1: DOMAIN SELECTION
        ====================================================================== */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terracotta"></span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-mutedInk font-semibold">
                  Layer 1 · Static Profile Memory
                </span>
              </div>
              <h1 className="font-sans text-3xl sm:text-4xl text-charcoal font-semibold tracking-tight">
                What describes your primary focus?
              </h1>
              <p className="font-sans text-sm sm:text-base text-mutedInk max-w-2xl leading-relaxed">
                GriZon customizes its autonomous routing, ground-truth API bridges, and epistemic validation rules around your core domains. Select one or more.
              </p>
            </div>

            {/* Grid of Domain Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {domainOptions.map((opt) => {
                const isSelected = selectedDomains.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleDomain(opt.id)}
                    className={`text-left p-5 rounded-xl border transition-all flex flex-col justify-between gap-4 ${
                      isSelected
                        ? 'border-botanical bg-surfacePure shadow-[0_4px_16px_rgba(30,58,58,0.08)] ring-1 ring-botanical'
                        : 'border-hairline bg-surfacePure/60 hover:border-borderStrong hover:bg-surfacePure'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`material-symbols-outlined text-2xl ${isSelected ? 'text-botanical' : 'text-mutedInk'}`}>
                          {opt.icon}
                        </span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                          isSelected ? 'border-botanical bg-botanical text-alabaster' : 'border-hairline'
                        }`}>
                          {isSelected && <span className="material-symbols-outlined text-[14px]">check</span>}
                        </div>
                      </div>
                      <h3 className="font-sans text-base font-semibold text-charcoal leading-snug">
                        {opt.title}
                      </h3>
                      <p className="font-sans text-xs text-mutedInk leading-relaxed">
                        {opt.desc}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-hairline/60 font-mono text-[10px] text-mutedInk tracking-wider">
                      {opt.code}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer Step Action */}
            <div className="pt-4 flex items-center justify-between border-t border-hairline">
              <span className="font-mono text-xs text-mutedInk">
                {selectedDomains.length} domain{selectedDomains.length > 1 ? 's' : ''} selected
              </span>
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-botanical text-alabaster font-sans text-sm font-medium hover:bg-charcoal transition-all shadow-sm group"
              >
                <span>Continue to Standing Context</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        )}

        {/* =====================================================================
            STEP 2: CALIBRATE STANDING CONTEXT
        ====================================================================== */}
        {currentStep === 2 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-botanical"></span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-mutedInk font-semibold">
                  Layer 1 · Context Calibration
                </span>
              </div>
              <h1 className="font-sans text-3xl sm:text-4xl text-charcoal font-semibold tracking-tight">
                Calibrate your standing context.
              </h1>
              <p className="font-sans text-sm sm:text-base text-mutedInk max-w-2xl leading-relaxed">
                These anchors are prepended into every specialist dispatch so you never need to repeat your jurisdiction, tech stack, or risk tolerance.
              </p>
            </div>

            <div className="bg-surfacePure border border-hairline rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Markets Specific context if selected */}
              {selectedDomains.includes('markets') && (
                <div className="space-y-4 pb-6 border-b border-hairline">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-botanical font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>
                      Market Analytical Style &amp; Watchlist
                    </span>
                    <span className="font-mono text-[10px] text-mutedInk">API: NSE REAL-TIME</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-semibold text-charcoal mb-1">
                        Preferred Trading Horizon
                      </label>
                      <select
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="w-full px-3 py-2 bg-alabaster border border-hairline rounded-lg font-sans text-sm text-charcoal focus:outline-none focus:border-botanical"
                      >
                        <option value="Intraday">Intraday (9:15 - 15:30 IST Tapes)</option>
                        <option value="Swing">Swing (3 to 10 trading sessions)</option>
                        <option value="Positional">Positional / F&amp;O Expiry Series</option>
                        <option value="Long-Term">Long-Term Institutional Compounder</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-xs font-semibold text-charcoal mb-1">
                        Primary Watchlist &amp; Underlyings
                      </label>
                      <input
                        type="text"
                        value={watchlist}
                        onChange={(e) => setWatchlist(e.target.value)}
                        placeholder="NIFTY, BANKNIFTY, RELIANCE..."
                        className="w-full px-3 py-2 bg-alabaster border border-hairline rounded-lg font-sans text-sm text-charcoal focus:outline-none focus:border-botanical"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Legal Specific context if selected */}
              {selectedDomains.includes('legal') && (
                <div className="space-y-4 pb-6 border-b border-hairline">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-botanical font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">gavel</span>
                      Legal Jurisdiction &amp; Primary Bench
                    </span>
                    <span className="font-mono text-[10px] text-mutedInk">NJDG / eCourts</span>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-charcoal mb-1">
                      Primary Forum &amp; High Court Jurisdiction
                    </label>
                    <input
                      type="text"
                      value={legalForum}
                      onChange={(e) => setLegalForum(e.target.value)}
                      placeholder="e.g. Supreme Court of India, Delhi High Court, NCLT Delhi"
                      className="w-full px-3 py-2 bg-alabaster border border-hairline rounded-lg font-sans text-sm text-charcoal focus:outline-none focus:border-botanical"
                    />
                  </div>
                </div>
              )}

              {/* Engineering context if selected */}
              {selectedDomains.includes('engineering') && (
                <div className="space-y-4 pb-6 border-b border-hairline">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-botanical font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">terminal</span>
                      Core Engineering Stack
                    </span>
                    <span className="font-mono text-[10px] text-mutedInk">SANDBOX</span>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-charcoal mb-1">
                      Languages, Frameworks &amp; Cloud Infrastructure
                    </label>
                    <input
                      type="text"
                      value={techStack}
                      onChange={(e) => setTechStack(e.target.value)}
                      placeholder="TypeScript, Python, FastAPI, Docker, AWS..."
                      className="w-full px-3 py-2 bg-alabaster border border-hairline rounded-lg font-sans text-sm text-charcoal focus:outline-none focus:border-botanical"
                    />
                  </div>
                </div>
              )}

              {/* Communication Style */}
              <div className="space-y-3">
                <label className="block font-sans text-xs font-semibold text-charcoal">
                  Autonomous Communication Calibration
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCommStyle('concise')}
                    className={`p-3.5 rounded-lg border text-left transition-all flex items-start gap-3 ${
                      commStyle === 'concise'
                        ? 'border-botanical bg-alabaster ring-1 ring-botanical'
                        : 'border-hairline bg-surfacePure hover:border-borderStrong'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-lg mt-0.5 ${commStyle === 'concise' ? 'text-botanical' : 'text-mutedInk'}`}>
                      bolt
                    </span>
                    <div>
                      <div className="font-sans text-sm font-semibold text-charcoal">Concise &amp; Decisive</div>
                      <div className="font-sans text-xs text-mutedInk">Bullet-first takeaways, hard invalidation cutoffs, zero fluff.</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCommStyle('comprehensive')}
                    className={`p-3.5 rounded-lg border text-left transition-all flex items-start gap-3 ${
                      commStyle === 'comprehensive'
                        ? 'border-botanical bg-alabaster ring-1 ring-botanical'
                        : 'border-hairline bg-surfacePure hover:border-borderStrong'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-lg mt-0.5 ${commStyle === 'comprehensive' ? 'text-botanical' : 'text-mutedInk'}`}>
                      article
                    </span>
                    <div>
                      <div className="font-sans text-sm font-semibold text-charcoal">Comprehensive &amp; Institutional</div>
                      <div className="font-sans text-xs text-mutedInk">Full statutory citations, multi-scenario trees, and formal footnotes.</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2 Actions */}
            <div className="pt-4 flex items-center justify-between border-t border-hairline">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 font-sans text-sm text-mutedInk hover:text-charcoal transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-botanical text-alabaster font-sans text-sm font-medium hover:bg-charcoal transition-all shadow-sm group"
              >
                <span>Continue to First Enclave</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        )}

        {/* =====================================================================
            STEP 3: INITIALIZE WORKSPACE & ROUTINE
        ====================================================================== */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terracotta"></span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-mutedInk font-semibold">
                  Step 03 · Sovereign Workspace Deployment
                </span>
              </div>
              <h1 className="font-sans text-3xl sm:text-4xl text-charcoal font-semibold tracking-tight">
                Initialize your sovereign workspace.
              </h1>
              <p className="font-sans text-sm sm:text-base text-mutedInk max-w-2xl leading-relaxed">
                We will provision your initial Project Enclave and configure your first autonomous scheduled briefing.
              </p>
            </div>

            <div className="bg-surfacePure border border-hairline rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Project Setup */}
              <div className="space-y-2">
                <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-charcoal">
                  Initial Project Room Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-mutedInk text-[18px]">
                    folder_open
                  </span>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-alabaster border border-hairline rounded-lg font-sans text-sm text-charcoal focus:outline-none focus:border-botanical font-medium"
                  />
                </div>
                <p className="font-mono text-[11px] text-mutedInk">
                  Enclave isolates files, memory notes, and scheduled routines from other matters.
                </p>
              </div>

              {/* Routine Activation Switch */}
              <div className="p-4 bg-alabaster border border-hairline rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-sans text-sm font-semibold text-charcoal">
                      Activate Morning Autonomous Briefing
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-surfaceSubtle font-mono text-[10px] text-mutedInk">
                      0.0 credits (Explorer tier)
                    </span>
                  </div>
                  <p className="font-sans text-xs text-mutedInk max-w-md">
                    Automatically scans eCourts cause lists, NSE pre-open data, and statutory updates before your day begins.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={routineTime}
                    onChange={(e) => setRoutineTime(e.target.value)}
                    disabled={!routineActive}
                    className="px-2.5 py-1.5 bg-surfacePure border border-hairline rounded font-mono text-xs text-charcoal focus:outline-none disabled:opacity-50"
                  >
                    <option value="08:30 IST">08:30 IST</option>
                    <option value="09:20 IST">09:20 IST</option>
                    <option value="12:30 IST">12:30 IST</option>
                    <option value="15:45 IST">15:45 IST</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => setRoutineActive(!routineActive)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                      routineActive ? 'bg-botanical' : 'bg-hairline'
                    }`}
                  >
                    <div
                      className={`bg-alabaster w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        routineActive ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Summary Pill Preview */}
              <div className="p-4 bg-surfaceSubtle/60 rounded-lg border border-hairline/60 font-mono text-xs text-mutedInk space-y-2">
                <div className="flex items-center justify-between text-charcoal font-semibold text-[11px] uppercase tracking-wider">
                  <span>Configuration Hash</span>
                  <span className="text-botanical">READY TO MOUNT</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2 py-0.5 bg-surfacePure border border-hairline rounded text-charcoal">
                    Jurisdiction: {selectedDomains.join(', ')}
                  </span>
                  <span className="px-2 py-0.5 bg-surfacePure border border-hairline rounded text-charcoal">
                    Style: {commStyle}
                  </span>
                  <span className="px-2 py-0.5 bg-surfacePure border border-hairline rounded text-charcoal">
                    Enclave: {projectName}
                  </span>
                </div>
              </div>
            </div>

            {/* Finish Action */}
            <div className="pt-4 flex items-center justify-between border-t border-hairline">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2 font-sans text-sm text-mutedInk hover:text-charcoal transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleFinish}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-botanical text-alabaster font-sans text-sm font-semibold hover:bg-charcoal transition-all shadow-[0_4px_16px_rgba(30,58,58,0.15)] group"
              >
                <span>Enter GriZon Command Workspace</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                  rocket_launch
                </span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Subtle Footer */}
      <footer className="w-full border-t border-hairline py-4 px-6 text-center">
        <p className="font-mono text-[11px] text-mutedInk">
          DPDP 2023 Aligned · Zero Training Retention Guarantee · Sovereign Enclave Encryption
        </p>
      </footer>
    </div>
  );
}
