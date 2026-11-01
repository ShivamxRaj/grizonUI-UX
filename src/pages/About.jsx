import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const AGENTS_COMPARISON = {
  legal: {
    id: 'legal',
    name: 'Legal Intelligence',
    desc: 'Indian legal research, case law & statutory crosswalk',
    prompt: '“Check anticipatory bail applicability under IPC 302 with Delhi HC precedent.”',
    syncBadge: 'eCourts Live Sync',
    standardAi: {
      execution: 'Blind Token Prediction · Zero Gazette Grounding',
      text: '“Under Section 302 IPC, regular bail lies under CrPC 439. Controlling relief is granted per State v. Kumar (2024 SC 1982).”',
      flaw: 'Accepted repealed 1860 statutes (IPC/CrPC) uncritically and cited a fabricated Supreme Court precedent that does not exist.'
    },
    grizonAi: {
      plan: '1. Detect repealed IPC ➔ 2. Auto-map to BNS §103 ➔ 3. Live query eCourts CNR',
      statute: 'IPC 302 → Section 103 BNS (2024)',
      details: 'Offense is cognizable and non-bailable under BNSS Section 483. Controlling ratio: 2024 INSC 742. eCourts CNR DLHC01-089211-2024 authenticated.',
      truth: 'Auto-reconciled with active 2024 Bharatiya Nyaya Sanhita gazette and authenticated live against Supreme Court records.'
    }
  },
  market: {
    id: 'market',
    name: 'Market Intelligence',
    desc: 'Data analytics, stock/crypto analysis & live ticks',
    prompt: '“Compute 90-day Black-Scholes implied volatility skew for NIFTY 24500 CE.”',
    syncBadge: 'NSE Live Tick Stream',
    standardAi: {
      execution: 'Autoregressive Approximation · LLM Mental Math',
      text: '“Estimated IV is ~14.82% with Delta of 0.62 and Gamma of 0.0041 based on standard normal distribution approximations.”',
      flaw: 'Mental math hallucination: Autoregressive approximation drift causing fatal derivative pricing errors in live execution.'
    },
    grizonAi: {
      plan: '1. Ingest NSE L2 tick book ➔ 2. Run closed-form SymPy solver ➔ 3. Verify Greeks',
      statute: 'SymPy Deterministic Engine',
      details: 'Exact IV: 13.914%. Delta: 0.5481, Gamma: 0.0028 verified against live National Stock Exchange tick order book.',
      truth: 'Sandboxed symbolic Python (SymPy/NumPy) execution with zero LLM arithmetic approximation.'
    }
  },
  dev: {
    id: 'dev',
    name: 'Dev Studio',
    desc: 'Coding, debugging, and live UI review',
    prompt: '“Audit smart contract reentrancy guard and verify state-machine invariants.”',
    syncBadge: 'Z3 Theorem Prover Active',
    standardAi: {
      execution: 'Surface Regex Match · No Invariant Modeling',
      text: '“The contract uses the nonReentrant modifier properly. Balance transfer is executed safely from standard exploits.”',
      flaw: 'Plausible syntax blindspot: Missed read-only cross-function reentrancy vulnerability allowing drain via view calls.'
    },
    grizonAi: {
      plan: '1. Parse Solidity AST ➔ 2. Model state invariants ➔ 3. Run Z3 formal solver',
      statute: 'AST Formal Verification',
      details: 'Vulnerability detected at L142: getPrice(). Reentrancy lock missing on view path; Z3 formal solver produced counter-example trace.',
      truth: 'Deterministic formal AST verification and Z3 theorem prover inspection over plain syntax guessing.'
    }
  },
  doc: {
    id: 'doc',
    name: 'Doc Intelligence & Writer',
    desc: 'Document analysis, writing, and compliance checks',
    prompt: '“Cross-reference MCA filing MCA-2024-88 with corporate auditor remarks.”',
    syncBadge: 'MCA e-Filing Rail Active',
    standardAi: {
      execution: 'Context Window Skimming · Misses Hidden Annexures',
      text: '“The filing confirms statutory auditor approval with clean unqualified remarks for FY 2023-24 financial statements.”',
      flaw: 'Ignored negative audit note: Failed to detect Annexure 4 adverse remark regarding non-provision of contingent tax liability.'
    },
    grizonAi: {
      plan: '1. Optical layout parse ➔ 2. Ground to MCA CIN/DIN registry ➔ 3. Flag caveats',
      statute: 'MCA Registry Match',
      details: 'Filing authenticated with DIN 08491022. Adverse remark in Note 14(b) flagged: ₹4.2 Cr disputed liability under Section 143.',
      truth: 'Optical layout parsing with exact OCR anchor grounding to Ministry of Corporate Affairs filings.'
    }
  },
  quant: {
    id: 'quant',
    name: 'Mathematics & Quantitative',
    desc: 'Symbolic algebra, calculus, proofs & amortization',
    prompt: '“Calculate exact compound interest amortization with monthly rate shifts.”',
    syncBadge: 'Symbolic Q.E.D. Engine',
    standardAi: {
      execution: 'Next-Word Guessing · 36-Step Iterative Rounding Drift',
      text: '“Total compound yield after 36 months is approximately ₹18,45,210 with an annualized effective yield of 11.4%.”',
      flaw: 'Compounding hallucination: Autoregressive rounding errors accumulated across 36 steps, missing real capital yield by ₹42,390.'
    },
    grizonAi: {
      plan: '1. Closed-form recurrence ➔ 2. Arbitrary-precision kernel ➔ 3. SHA-256 state seal',
      statute: 'Symbolic Q.E.D. Proof',
      details: 'Exact closed-form principal amortization: ₹18,02,820.44. SHA-256 cryptographic proof generated for treasury audit.',
      truth: 'Arbitrary-precision deterministic arithmetic with SHA-256 state proof. No mental math allowed.'
    }
  },
  research: {
    id: 'research',
    name: 'Fast Research',
    desc: 'Quick web search with instant citations',
    prompt: '“Verify RBI repo rate decision and monetary policy stance for October 2024.”',
    syncBadge: 'RBI Registry Rail Active',
    standardAi: {
      execution: 'Unfiltered Web Scraping · Confuses Commentary with Policy',
      text: '“The RBI Monetary Policy Committee cut the repo rate by 25 bps to 6.25% and changed stance to accommodative.”',
      flaw: 'Hallucinated macro shift: Confused speculative news commentary with official RBI MPC resolution.'
    },
    grizonAi: {
      plan: '1. Ingest official RBI gazette ➔ 2. Verify digital seal ➔ 3. Extract vote ratio',
      statute: 'RBI Official Gazette',
      details: 'MPC kept repo rate unchanged at 6.50%; stance shifted from "withdrawal of accommodation" to "neutral".',
      truth: 'Instant deterministic verification against official Reserve Bank of India gazette bulletin.'
    }
  },
  general: {
    id: 'general',
    name: 'General Assistant',
    desc: 'Everyday Q&A, logic, and brainstorming',
    prompt: '“Verify whether ISO 27001:2022 allows self-attested SOC2 Type II equivalency.”',
    syncBadge: 'Standards Rail Verified',
    standardAi: {
      execution: 'Sycophantic Agreement · Zero Standards Crosswalk',
      text: '“Yes, organizations can self-attest SOC2 compliance under Annex A controls if audited internally.”',
      flaw: 'Regulatory compliance flaw: SOC2 Type II strictly mandates independent AICPA CPA attestation; self-attestation is invalid.'
    },
    grizonAi: {
      plan: '1. Index ISO 27001 clauses ➔ 2. Map AICPA SSAE 18 criteria ➔ 3. Strict advisory',
      statute: 'ISO/IEC & AICPA Standard',
      details: 'SOC2 Type II strictly requires independent licensed CPA audit under SSAE 18. Self-attestation violates both frameworks.',
      truth: 'Validated against official ISO/IEC 27001:2022 and AICPA Trust Services Criteria.'
    }
  }
};

export default function About() {
  const [copied, setCopied] = useState(false);
  const [selectedAgentKey, setSelectedAgentKey] = useState('legal');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeAgent = AGENTS_COMPARISON[selectedAgentKey] || AGENTS_COMPARISON.legal;

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${activeAgent.grizonAi.statute}: ${activeAgent.grizonAi.details}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF9F5] text-[#07091B] font-sans antialiased">
      {/* =====================================================================
          1. HERO SECTION: EDITORIAL MANIFESTO & THE GROUND TRUTH PROBLEM
      ====================================================================== */}
      <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 text-center">
        <div className="w-full flex items-center justify-start mb-8 text-left">
          <Breadcrumb />
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#07091B] text-balance max-w-4xl mx-auto leading-[1.15]">
          Why confidence without{' '}
          <span className="text-[#6630E4]">verification</span> is broken.
        </h1>
        <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance mt-6">
          The fundamental hazard of generative AI is not inability, but synthetic conviction. In jurisprudence, treasury governance, and high-consequence engineering, ungrounded fluency is catastrophic.
        </p>

        {/* Dual-Perspective Problem & Solution Row - Aligned Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left items-stretch w-full">
          {/* Card 1: Probabilistic Flaw */}
          <div className="h-full p-8 sm:p-9 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs">
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="font-sans text-xs uppercase tracking-wider font-bold text-rose-600">
                  The Probabilistic Flaw
                </span>
              </div>
              <h3 className="font-sans text-xl font-bold text-[#07091B] mb-3 min-h-[48px] flex items-center">
                Fluency Optimizes for Syntax, Not Truth
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Large language models are autoregressive probability distribution engines. When presented with ambiguous statutory boundaries or derivative settlement math, they optimize for plausible syntax rather than ontological verification.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-[#E6E4DD]/60 flex items-center justify-between font-sans text-xs text-slate-500">
              <span className="font-medium">Risk Profile</span>
              <span className="text-rose-600 font-bold">Catastrophic Hallucination</span>
            </div>
          </div>

          {/* Card 2: The GriZon Mandate */}
          <div className="h-full p-8 sm:p-9 rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4]/40 transition-all flex flex-col justify-between shadow-xs">
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#6630E4]" />
                <span className="font-sans text-xs uppercase tracking-wider font-bold text-[#6630E4]">
                  The GriZon Mandate
                </span>
              </div>
              <h3 className="font-sans text-xl font-bold text-[#07091B] mb-3 min-h-[48px] flex items-center">
                Decoupled Deterministic Cognition
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                We sever the reasoning engine from the state of record. Foundation models act strictly as translators and structural orchestrators; every assertion is deterministically retrieved, cryptographically hashed, and verified.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-[#E6E4DD]/60 flex items-center justify-between font-sans text-xs text-slate-500">
              <span className="font-medium">Guarantee</span>
              <span className="text-[#6630E4] font-bold">Zero Inferences Unverified</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. CORE ARCHITECTURAL PILLARS (BENTO GRID - PERFECT ALIGNMENT)
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E6E4DD]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight text-balance">
            Three Architectural Guarantees
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed text-balance mt-3">
            Non-negotiable mandates engineered into every routine, specialist, and autonomous dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Pillar 1 */}
          <div className="h-full p-8 sm:p-9 rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4] hover:shadow-[0_12px_32px_rgba(102,48,228,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-xs font-bold text-[#6630E4] uppercase tracking-wider">
                  Pillar 01
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                </div>
              </div>
              <h3 className="font-sans text-xl font-bold text-[#07091B] mb-3 min-h-[56px] flex items-center">
                Dual-Plane Decoupling
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Reasoning models never directly output unsanctioned facts. Intent is compiled into deterministic AST queries against immutable registries before any output is validated.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E6E4DD]/70 flex items-center gap-2 text-xs font-semibold text-[#6630E4] whitespace-nowrap">
              <span className="material-symbols-outlined text-[17px] shrink-0">verified</span>
              <span>Isolated Orchestrator &bull; Immutable Truth</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="h-full p-8 sm:p-9 rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4] hover:shadow-[0_12px_32px_rgba(102,48,228,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-xs font-bold text-[#6630E4] uppercase tracking-wider">
                  Pillar 02
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">balance</span>
                </div>
              </div>
              <h3 className="font-sans text-xl font-bold text-[#07091B] mb-3 min-h-[56px] flex items-center">
                Statutory Temporal Sync
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Native temporal cross-walk reconciliation for the new 2024 criminal codes. Automatically syncs legacy provisions to current law without manual legal cross-referencing.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E6E4DD]/70 flex items-center gap-2 text-xs font-semibold text-[#6630E4] whitespace-nowrap">
              <span className="material-symbols-outlined text-[17px] shrink-0">sync</span>
              <span>IPC &rarr; BNS &bull; CrPC &rarr; BNSS 2024</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="h-full p-8 sm:p-9 rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4] hover:shadow-[0_12px_32px_rgba(102,48,228,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-xs font-bold text-[#6630E4] uppercase tracking-wider">
                  Pillar 03
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">functions</span>
                </div>
              </div>
              <h3 className="font-sans text-xl font-bold text-[#07091B] mb-3 min-h-[56px] flex items-center">
                Cryptographic Compute
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Mathematical statements, option chains, and compound amortization are executed in sandboxed symbolic Python (SymPy/NumPy). Mental math by the LLM is strictly prohibited.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E6E4DD]/70 flex items-center gap-2 text-xs font-semibold text-[#6630E4] whitespace-nowrap">
              <span className="material-symbols-outlined text-[17px] shrink-0">lock</span>
              <span>SymPy Symbolic Q.E.D. &bull; SHA-256 Mesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. AUTHENTIC GRIZON.AI RESPONSE WORKBENCH (EPISTEMIC DIFF)
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E6E4DD]">
        <div className="text-center mb-10">
          <span className="font-sans text-xs uppercase tracking-wider text-[#6630E4] font-bold">
            Verification in Action
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight text-balance mt-2">
            See How We Are Different
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed text-balance mt-2.5">
            Probabilistic guessing versus deterministic verification across 7 specialist agents.
          </p>

          {/* Quick Specialist Agent Selector Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
            {Object.values(AGENTS_COMPARISON).map((agent) => (
              <button
                key={agent.id}
                type="button"
                onClick={() => {
                  setSelectedAgentKey(agent.id);
                  setDropdownOpen(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all ${
                  selectedAgentKey === agent.id
                    ? 'bg-[#6630E4] text-white shadow-xs scale-105'
                    : 'bg-white border border-[#E6E4DD] text-slate-600 hover:border-[#6630E4]/40 hover:text-[#07091B]'
                }`}
              >
                {agent.name}
              </button>
            ))}
          </div>
        </div>

        {/* =====================================================================
            SIDE-BY-SIDE COMPARISON GRID (DYNAMIC PER SPECIALIST AGENT)
        ====================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: NORMAL CONSUMER AI (FAILURE MODE) */}
          <div className="h-full rounded-[28px] sm:rounded-3xl bg-white border border-rose-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                    <span className="material-symbols-outlined text-[15px]">smart_toy</span>
                  </div>
                  <span className="font-sans font-bold text-sm text-slate-800">Normal AI</span>
                  <span className="px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-bold">
                    Ungrounded
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Statistical guess</span>
              </div>

              {/* User Prompt */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 mb-3">
                {activeAgent.prompt}
              </div>

              {/* Normal AI Execution Flaw */}
              <div className="p-2.5 rounded-xl bg-slate-100/90 border border-slate-200 text-[11px] font-mono text-slate-500 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[15px] text-slate-400 shrink-0">shuffle</span>
                <span className="truncate"><strong>Unplanned:</strong> {activeAgent.standardAi.execution}</span>
              </div>

              {/* Hallucinated Output */}
              <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 text-xs sm:text-sm text-slate-800 space-y-2 mb-3 leading-relaxed font-sans min-h-[90px] flex items-center">
                <p>{activeAgent.standardAi.text}</p>
              </div>

              {/* Concise Verdict */}
              <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200 text-xs text-rose-900 flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[17px] text-rose-600 shrink-0 mt-0.5">error</span>
                <span className="leading-relaxed">
                  <strong className="text-rose-950 block mb-0.5">Fatal Flaw:</strong>
                  {activeAgent.standardAi.flaw}
                </span>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-4 mt-6 border-t border-slate-100">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-2.5 flex items-center justify-between text-slate-400 text-xs">
                <span>Message normal AI...</span>
                <span className="text-[10px] text-rose-600 font-semibold">⚠️ Ungrounded</span>
              </div>
            </div>
          </div>

          {/* RIGHT: REAL GRIZON AI (SMART PLAN & VERIFIED EXECUTION) */}
          <div className="h-full rounded-[28px] sm:rounded-3xl bg-[#090B19] border-2 border-[#6630E4] p-6 sm:p-7 flex flex-col justify-between text-white shadow-[0_16px_50px_rgba(102,48,228,0.22)] relative overflow-visible">
            <div>
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <img src="/grizon-icon.png" alt="GriZon AI Logo" className="w-5 h-5 object-contain" />
                  <span className="font-sans font-bold text-sm text-white tracking-tight">GriZon AI</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#6630E4]/30 border border-[#976DF8]/40 text-[#976DF8] text-[10px] font-bold">
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-[11px] font-mono text-emerald-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{activeAgent.syncBadge}</span>
                  </div>
                  <a
                    href="https://grizon.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-sans text-[#976DF8] hover:text-white transition-colors"
                    title="Open live on grizon.ai"
                  >
                    <span>grizon.ai</span>
                    <span className="material-symbols-outlined text-[11px]">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* User Prompt */}
              <div className="p-3.5 rounded-2xl bg-[#181B2E] border border-white/10 text-xs font-mono text-slate-200 mb-3 shadow-sm">
                {activeAgent.prompt}
              </div>

              {/* Smart Plan & Movement */}
              <div className="p-2.5 rounded-xl bg-[#161933] border border-white/10 text-[11px] font-mono text-[#976DF8] mb-3 flex items-center gap-2 shadow-inner">
                <span className="material-symbols-outlined text-[15px] text-emerald-400 shrink-0">alt_route</span>
                <span className="text-emerald-400 font-semibold shrink-0">Smart Plan & Move:</span>
                <span className="text-slate-200 truncate">{activeAgent.grizonAi.plan}</span>
              </div>

              {/* Verified Output */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200 space-y-2 mb-3 leading-relaxed font-sans min-h-[90px] flex flex-col justify-center">
                <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{activeAgent.grizonAi.statute}</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-[#976DF8] hover:text-white flex items-center gap-1 transition-colors text-[11px]"
                  >
                    <span className="material-symbols-outlined text-[13px]">{copied ? 'check' : 'content_copy'}</span>
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  {activeAgent.grizonAi.details}
                </p>
              </div>

              {/* Concise Verdict */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[17px] text-emerald-400 shrink-0 mt-0.5">verified</span>
                <span className="leading-relaxed">
                  <strong className="text-emerald-200 block mb-0.5">Deterministic Truth:</strong>
                  {activeAgent.grizonAi.truth}
                </span>
              </div>
            </div>

            {/* Bottom Bar with Real Agent Selector Dropdown (Matching Reference Image) */}
            <div className="pt-4 mt-6 border-t border-white/10 relative">
              
              {/* Agent Selector Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute bottom-full right-0 mb-3 w-72 sm:w-80 rounded-2xl bg-[#0F1226] border border-white/15 p-1.5 shadow-2xl z-50 text-left backdrop-blur-2xl animate-fadeIn divide-y divide-white/5 max-h-96 overflow-y-auto">
                  {Object.values(AGENTS_COMPARISON).map((agent) => {
                    const isSelected = selectedAgentKey === agent.id;
                    return (
                      <button
                        key={agent.id}
                        type="button"
                        onClick={() => {
                          setSelectedAgentKey(agent.id);
                          setDropdownOpen(false);
                        }}
                        className={`w-full p-2.5 rounded-xl flex items-center gap-3 transition-colors text-left ${
                          isSelected ? 'bg-[#1D203D]' : 'hover:bg-white/5'
                        }`}
                      >
                        {/* Radio Icon */}
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'border-[#976DF8] bg-[#6630E4]/30'
                              : 'border-slate-500'
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#976DF8]" />}
                        </div>

                        {/* Agent Label & Info */}
                        <div className="flex-1 min-w-0">
                          <span className="font-sans font-bold text-xs sm:text-[13px] text-white block truncate">
                            {agent.name}
                          </span>
                          <span className="font-sans text-[10px] text-slate-400 block truncate">
                            {agent.desc}
                          </span>
                        </div>

                        {/* Selected Checkmark */}
                        {isSelected && (
                          <span className="material-symbols-outlined text-[16px] text-[#976DF8] shrink-0">
                            check
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Bottom Input Field & Dropdown Trigger */}
              <div className="rounded-2xl bg-[#12142E] border border-[#2B305E] p-2 sm:p-2.5 flex items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-2 text-slate-400 pl-1">
                  <button
                    type="button"
                    className="w-7 h-7 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                    title="Attach brief"
                  >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                  </button>
                  <span className="font-sans text-xs select-none">Ask GriZon...</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Interactive Agent Pill (Matching image 2, 3 & 4) */}
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#976DF8]/50 text-[11px] font-sans font-medium text-slate-200 cursor-pointer transition-all active:scale-95"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#976DF8]" />
                    <span>{activeAgent.name}</span>
                    <span className="material-symbols-outlined text-[14px] text-slate-400">
                      {dropdownOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>

                  <button
                    type="button"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6630E4] hover:bg-[#5221C6] text-white flex items-center justify-center transition-all shadow-xs"
                    title="Voice query"
                  >
                    <span className="material-symbols-outlined text-[15px]">mic</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          4. CORE AXIOM CALLOUT
      ====================================================================== */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="rounded-3xl bg-white border border-[#E6E4DD] p-8 sm:p-10 text-center relative shadow-xs">
          <div className="w-10 h-1 bg-[#6630E4] rounded-full mx-auto mb-6" />
          <blockquote className="font-sans text-xl sm:text-2xl font-bold text-[#07091B] leading-snug max-w-2xl mx-auto text-balance mb-4">
            “Fluency is not evidence. A model that speaks with absolute poise about a non-existent statute is more hazardous than one that confesses ignorance.”
          </blockquote>
          <p className="font-sans text-xs uppercase tracking-wider text-[#6630E4] font-bold">
            The Axiom of Formal Restraint · GriZon Architecture
          </p>
        </div>
      </section>

      {/* =====================================================================
          5. SIGNATURE BOTTOM CALL TO ACTION
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-[#090B19] via-[#120F2B] to-[#090B19] p-8 sm:p-12 text-center text-white relative overflow-hidden border border-[#6630E4]/30 shadow-[0_20px_50px_rgba(9,11,25,0.25)]">
          {/* Subtle Ambient Brand Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#6630E4]/15 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 text-balance">
              Step into your sovereign intelligence workspace.
            </h2>
            <p className="font-sans text-sm text-slate-300 leading-relaxed mb-8 text-balance">
              Join enterprise legal counsels, quantitative funds, and software teams building with deterministic AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full justify-center">
              <Link
                to="/welcome"
                className="group inline-flex items-center gap-3.5 pl-7 pr-2.5 py-3 rounded-full bg-[#6630E4] hover:bg-[#5221C6] text-white font-sans text-sm font-bold transition-all duration-300 shadow-[0_4px_18px_rgba(102,48,228,0.35)] hover:shadow-[0_6px_24px_rgba(102,48,228,0.45)] active:scale-[0.98]"
              >
                <span>Initialize Workspace</span>
                <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300">
                  {/* Default State: Solid White Dot */}
                  <span className="w-2.5 h-2.5 rounded-full bg-white transition-all duration-200 group-hover:scale-0 group-hover:opacity-0" />

                  {/* Hover State: Expanded White Circle with Arrow Icon */}
                  <span className="absolute inset-0 flex items-center justify-center rounded-full bg-white text-[#6630E4] opacity-0 scale-50 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 shadow-xs">
                    <span className="material-symbols-outlined text-[15px] sm:text-[16px] font-bold">arrow_forward</span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
