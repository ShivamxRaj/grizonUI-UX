import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function About() {
  const [diffMode, setDiffMode] = useState('grizon');

  return (
    <div className="w-full min-h-screen bg-[#FAF9F5] text-[#07091B]">
      {/* =====================================================================
          1. HERO SECTION: EDITORIAL MANIFESTO & THE GROUND TRUTH PROBLEM
      ====================================================================== */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="w-full flex items-center justify-start mb-6 sm:mb-8 text-left">
          <Breadcrumb />
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#07091B] text-balance">
          Why confidence without{' '}
          <span className="text-[#D97736]">verification</span> is broken.
        </h1>
        <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance mt-6">
          The fundamental hazard of generative AI is not inability, but synthetic conviction. In jurisprudence, treasury governance, and high-consequence engineering, ungrounded fluency is catastrophic.
        </p>

        {/* Dual-Perspective Problem & Solution Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
          <div className="p-7 rounded-3xl bg-white border border-[#E6E4DD] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-rose-600">
                  The Probabilistic Flaw
                </span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">
                Fluency Optimizes for Syntax, Not Truth
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                Large language models are autoregressive probability distribution engines. When presented with ambiguous statutory boundaries or derivative settlement math, they optimize for plausible syntax rather than ontological verification.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6E4DD]/60 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Risk Profile</span>
              <span className="text-rose-600 font-semibold">Catastrophic Hallucination</span>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E6E4DD] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#1E3A3A]" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#1E3A3A]">
                  The GriZon Mandate
                </span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">
                Decoupled Deterministic Cognition
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                We sever the reasoning engine from the state of record. Foundation models act strictly as translators and structural orchestrators; every assertion is deterministically retrieved, cryptographically hashed, and verified.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6E4DD]/60 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Guarantee</span>
              <span className="text-[#1E3A3A] font-semibold">Zero Inferences Unverified</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. CORE ARCHITECTURAL PILLARS (BENTO GRID)
      ====================================================================== */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E6E4DD]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight text-balance">
            Three Architectural Guarantees
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed text-balance mt-3">
            Non-negotiable mandates engineered into every routine, specialist, and autonomous dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="p-7 rounded-3xl bg-white border border-[#E6E4DD] flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#D97736] uppercase tracking-wider">
                  Pillar 01
                </span>
                <span className="material-symbols-outlined text-[20px] text-[#1E3A3A]">sync_alt</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">
                Dual-Plane Decoupling
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Reasoning models never directly output unsanctioned facts. Intent is compiled into deterministic AST queries against immutable registries before any output is validated.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-[#E6E4DD]/60 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between">
                <span className="text-slate-600">Cognitive Layer</span>
                <span className="font-semibold text-[#07091B]">Isolated Orchestrator</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between">
                <span className="text-slate-600">Record Layer</span>
                <span className="font-semibold text-[#1E3A3A]">Immutable Truth</span>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-3xl bg-white border border-[#E6E4DD] flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#D97736] uppercase tracking-wider">
                  Pillar 02
                </span>
                <span className="material-symbols-outlined text-[20px] text-[#1E3A3A]">balance</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">
                Statutory Temporal Sync
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Native temporal cross-walk reconciliation for the new 2024 criminal codes. Automatically syncs legacy provisions to current law without manual legal cross-referencing.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-[#E6E4DD]/60 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between">
                <span className="text-slate-600">Penal Code</span>
                <span className="font-semibold text-[#07091B]">IPC → BNS 2023</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between">
                <span className="text-slate-600">Procedure</span>
                <span className="font-semibold text-[#1E3A3A]">CrPC → BNSS 2023</span>
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-3xl bg-white border border-[#E6E4DD] flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#D97736] uppercase tracking-wider">
                  Pillar 03
                </span>
                <span className="material-symbols-outlined text-[20px] text-[#1E3A3A]">functions</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">
                Cryptographic Compute
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Mathematical statements, option chains, and compound amortization are executed in sandboxed symbolic Python (SymPy/NumPy). Mental math by the LLM is strictly prohibited.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-[#E6E4DD]/60 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between">
                <span className="text-slate-600">Precision</span>
                <span className="font-semibold text-[#07091B]">SymPy Symbolic Q.E.D.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between">
                <span className="text-slate-600">Proof Mesh</span>
                <span className="font-semibold text-[#1E3A3A]">SHA-256 Hashed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. INTERACTIVE EPISTEMIC DIFF (GROUNDING IN PRACTICE)
      ====================================================================== */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#E6E4DD]">
        <div className="text-center mb-10">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight text-balance">
            The Epistemic Diff in Practice
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed text-balance mt-3">
            Compare standard probabilistic AI generation against GriZon’s verified deterministic pipeline.
          </p>

          {/* Interactive Toggle */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white border border-[#E6E4DD] shadow-xs mt-8">
            <button
              type="button"
              onClick={() => setDiffMode('ungrounded')}
              className={`px-5 py-2 rounded-full font-sans text-xs font-bold transition-all ${
                diffMode === 'ungrounded'
                  ? 'bg-rose-100 text-rose-800 shadow-xs'
                  : 'text-slate-500 hover:text-[#07091B]'
              }`}
            >
              Standard LLM
            </button>
            <button
              type="button"
              onClick={() => setDiffMode('grizon')}
              className={`px-5 py-2 rounded-full font-sans text-xs font-bold transition-all ${
                diffMode === 'grizon'
                  ? 'bg-[#1E3A3A] text-white shadow-xs'
                  : 'text-slate-500 hover:text-[#07091B]'
              }`}
            >
              GriZon Grounded
            </button>
          </div>
        </div>

        {/* Diff Result Card */}
        <div className="rounded-3xl bg-white border border-[#E6E4DD] p-6 sm:p-8">
          {diffMode === 'ungrounded' ? (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/70 border border-rose-200/80">
                <div className="flex items-center justify-between text-rose-700 font-mono text-xs font-bold mb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">warning</span>
                    Synthetic Conviction Warning
                  </span>
                  <span>Unverified Output</span>
                </div>
                <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed">
                  “Under Section 302 of the Indian Penal Code, bail cannot be granted by the Metropolitan Magistrate. Furthermore, the petitioner’s petition under Section 439 of the CrPC is rendered void by the decision in <span className="underline decoration-rose-400 font-medium">State v. Kumar (2024 SC 1982)</span>.”
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-rose-200 text-rose-900 space-y-1">
                  <p className="font-bold">Temporal Invalidation</p>
                  <p className="text-slate-600">Cites repealed IPC instead of Bharatiya Nyaya Sanhita (BNS Section 103).</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-rose-200 text-rose-900 space-y-1">
                  <p className="font-bold">Hallucinated Precedent</p>
                  <p className="text-slate-600">Citation <em>State v. Kumar (2024 SC 1982)</em> does not exist in court registries.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-rose-200 text-rose-900 space-y-1">
                  <p className="font-bold">Enterprise Liability</p>
                  <p className="text-slate-600">Filing this in court leads to summary dismissal and judicial reprimand.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#1E3A3A] text-white">
                <div className="flex items-center justify-between text-emerald-300 font-mono text-xs font-bold mb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Decoupled Ground-Truth Output
                  </span>
                  <span className="tabular-nums">CNR: DLHC01-089211-2024 · VERIFIED</span>
                </div>
                <div className="font-sans text-sm sm:text-base text-white/95 leading-relaxed space-y-2">
                  <p>
                    Under <strong className="text-white underline decoration-emerald-400 font-semibold">BNS Section 103 (replaces IPC 302)</strong>, the offense is cognizable and non-bailable.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Pursuant to <strong className="text-white underline decoration-emerald-400 font-semibold">BNSS Section 483 (replaces CrPC 439)</strong>, the Special Court retains jurisdiction. Real-time registry verification confirms controlling precedent is <em>Ramesh Chandra v. State (NCT of Delhi) [2024 INSC 742]</em>.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] text-[#07091B] space-y-1">
                  <p className="font-bold text-[#1E3A3A]">Temporal Cross-Walk</p>
                  <p className="text-slate-600">Deterministic mapping applied for all statutory transitions post-July 1, 2024.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] text-[#07091B] space-y-1">
                  <p className="font-bold text-[#1E3A3A]">CNR Proof Hashed</p>
                  <p className="text-slate-600">Bench orders authenticated directly via eCourts API with cryptographic SHA-256 hash.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] text-[#07091B] space-y-1">
                  <p className="font-bold text-[#1E3A3A]">Filing-Ready Output</p>
                  <p className="text-slate-600">Zero human remedial auditing needed. Verifiable defense ready for signed filing.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          4. CORE AXIOM CALLOUT
      ====================================================================== */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="rounded-3xl bg-white border border-[#E6E4DD] p-8 sm:p-10 text-center relative">
          <div className="w-10 h-1 bg-[#D97736] rounded-full mx-auto mb-6" />
          <blockquote className="font-sans text-xl sm:text-2xl font-bold text-[#07091B] leading-snug max-w-2xl mx-auto text-balance mb-4">
            “Fluency is not evidence. A model that speaks with absolute poise about a non-existent statute is more hazardous than one that confesses ignorance.”
          </blockquote>
          <p className="font-mono text-xs uppercase tracking-wider text-[#D97736] font-bold">
            The Axiom of Formal Restraint · GriZon Architecture
          </p>
        </div>
      </section>

      {/* =====================================================================
          5. SIGNATURE RUBOZ BOTTOM CALL TO ACTION
      ====================================================================== */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="rounded-[32px] sm:rounded-[36px] bg-[#1E3A3A] p-8 sm:p-12 text-center text-white relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 text-balance">
              Step into your sovereign intelligence workspace.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 text-balance">
              Join enterprise legal counsels, quantitative funds, and software teams building with deterministic AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full justify-center">
              <Link
                to="/welcome"
                className="group inline-flex items-center gap-3.5 pl-7 pr-2.5 py-3 rounded-full bg-[#D97736] hover:bg-[#c46526] text-white font-sans text-xs sm:text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Initialize Workspace</span>
                <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300">
                  {/* Default State: Solid White Dot */}
                  <span className="w-2.5 h-2.5 rounded-full bg-white transition-all duration-200 group-hover:scale-0 group-hover:opacity-0" />

                  {/* Hover State: Expanded White Circle with Arrow Icon */}
                  <span className="absolute inset-0 flex items-center justify-center rounded-full bg-white text-[#07091B] opacity-0 scale-50 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 shadow-xs">
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
