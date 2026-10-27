import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [scrollProgress, setScrollProgress] = useState(14);
  const [diffMode, setDiffMode] = useState('ungrounded');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / (scrollTotal || 1)) * 100;
      setScrollProgress(Math.max(14, Math.min(100, progress)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col bg-alabaster">
      {/* Top Progress Reading Bar Micro-indicator */}
      <div className="w-full h-0.5 bg-hairline relative sticky top-20 z-40">
        <div
          className="h-full bg-terracotta transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16 w-full flex flex-col gap-16 md:gap-20">
        {/* =====================================================================
            1. EDITORIAL HEADER & MANIFESTO
        ====================================================================== */}
        <header className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse"></span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-mutedInk font-semibold">
                Our Philosophy &amp; Architecture · Essay N° 04
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-mutedInk">
              <span className="tabular-nums">EST. READ: 6 MIN</span>
              <span>/</span>
              <span className="uppercase">DECOUPLED COGNITION</span>
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[56px] text-charcoal leading-[1.08] tracking-tight font-semibold">
              Why confidence without{' '}
              <span className="font-medium text-terracotta">verification</span> is broken.
            </h1>
            <p className="font-sans text-lg sm:text-xl text-mutedInk max-w-3xl leading-relaxed font-normal">
              The central hazard of contemporary generative AI is not inability, but synthetic conviction. In jurisprudence, treasury governance, and regulatory compliance, ungrounded fluency is catastrophic.
            </p>
          </div>

          {/* Essay Introduction Grid (Two Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-charcoal font-mono text-xs tracking-wider uppercase font-semibold">
                <span className="tabular-nums text-terracotta">§ 1.01</span>
                <span>The Hallucination Fallacy</span>
              </div>
              <p className="font-sans text-[14.5px] text-charcoal leading-relaxed">
                Large language models are inherently auto-regressive probability distribution engines. By architecture, their fundamental objective is semantic coherence, not epistemic truth. When presented with an ambiguous statutory boundary or complex derivative settlement, the model optimizes for plausible syntax rather than ontological verification.
              </p>
              <p className="font-sans text-[14px] text-mutedInk leading-relaxed">
                In everyday conversation, confabulation is harmless; in high-consequence enterprise workflows—such as filing an appeal under Section 197 of the CrPC or estimating Value-at-Risk under illiquid debt markets—a synthetic citation can dismantle an entire corporate defense.
              </p>
            </div>

            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-charcoal font-mono text-xs tracking-wider uppercase font-semibold">
                <span className="tabular-nums text-terracotta">§ 1.02</span>
                <span>The GriZon Mandate: Decoupled Truth</span>
              </div>
              <p className="font-sans text-[14.5px] text-charcoal leading-relaxed">
                We reject the notion that a single frontier foundation model should act as both prosecutor and judge, analyst and ledger. True institutional reliability demands the complete severance of the{' '}
                <strong className="text-botanical font-semibold">reasoning engine</strong> from the{' '}
                <strong className="text-botanical font-semibold">state of record</strong>.
              </p>
              <p className="font-sans text-[14px] text-mutedInk leading-relaxed">
                GriZon treats LLMs strictly as conversational translators and structural orchestrators. Every assertion, numeric calculation, and judicial reference must be deterministically retrieved, cryptographically verified, and computed through sandboxed symbolic machinery prior to presentation.
              </p>
            </div>
          </div>

          {/* Editorial Axiom Callout Box */}
          <div className="relative bg-surfacePure p-6 sm:p-8 rounded-xl border border-hairline shadow-xs overflow-hidden mt-2">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-terracotta"></div>
            <div className="pl-3 sm:pl-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
                  Core Axiom
                </span>
                <span className="font-mono text-[11px] text-mutedInk">THE AXIOM OF FORMAL RESTRAINT</span>
              </div>
              <blockquote className="font-display text-xl sm:text-2xl text-charcoal leading-snug font-normal">
                “Fluency is not evidence. A model that speaks with absolute poise about a non-existent statute is more hazardous than one that confesses ignorance.”
              </blockquote>
              <p className="font-sans text-xs text-mutedInk pt-1">
                GriZon Foundation Research Paper: <em>Determinism Over Hallucinated Eloquence</em>, § 4.
              </p>
            </div>
          </div>
        </header>

        {/* =====================================================================
            2. UNIFIED ORCHESTRATION ARCHITECTURE DIAGRAM
        ====================================================================== */}
        <section className="flex flex-col gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-mutedInk font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-botanical"></span>
              <span>System Topology</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal tracking-tight font-normal">
              Strict Bidirectional Decoupling
            </h2>
            <p className="font-sans text-sm text-mutedInk max-w-2xl">
              Probabilistic cognitive synthesis layered strictly upon deterministic institutional ground truth.
            </p>
          </div>

          {/* Architecture Main Canvas */}
          <div className="w-full bg-surfaceMuted/50 p-6 md:p-8 rounded-xl border border-hairline shadow-xs space-y-8">
            {/* Layer A Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-botanical text-white rounded font-mono text-[10px] tracking-widest uppercase font-semibold">
                  Layer A
                </span>
                <span className="font-display text-2xl text-charcoal font-medium">Cognitive Fabric</span>
              </div>
              <span className="font-mono text-xs text-mutedInk">
                6 Frontier Reasoning Engines · Multi-Provider Routing
              </span>
            </div>

            {/* 6 Frontier Providers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Provider 1 */}
              <div className="bg-surfacePure p-5 rounded-lg border border-hairline shadow-2xs hover:border-mutedInk/40 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-semibold text-charcoal">Anthropic</span>
                    <span className="font-mono text-[11px] text-terracotta font-medium">Claude 3.5 Sonnet</span>
                  </div>
                  <p className="font-sans text-xs text-mutedInk leading-relaxed">
                    Statutory analysis, judicial briefing, and meticulous contract drafting with strict logical guardrails.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between text-mutedInk font-mono text-[10px]">
                  <span className="uppercase">Role: Legal Synthesis</span>
                  <span className="w-2 h-2 rounded-full bg-botanical"></span>
                </div>
              </div>

              {/* Provider 2 */}
              <div className="bg-surfacePure p-5 rounded-lg border border-hairline shadow-2xs hover:border-mutedInk/40 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-semibold text-charcoal">Google Gemini</span>
                    <span className="font-mono text-[11px] text-terracotta font-medium">1.5 Pro / Flash</span>
                  </div>
                  <p className="font-sans text-xs text-mutedInk leading-relaxed">
                    Multi-million token corporate gazette ingestion, lengthy judicial records, and whole-corpus cross-referencing.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between text-mutedInk font-mono text-[10px]">
                  <span className="uppercase">Role: Deep Context</span>
                  <span className="w-2 h-2 rounded-full bg-botanical"></span>
                </div>
              </div>

              {/* Provider 3 */}
              <div className="bg-surfacePure p-5 rounded-lg border border-hairline shadow-2xs hover:border-mutedInk/40 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-semibold text-charcoal">xAI Grok</span>
                    <span className="font-mono text-[11px] text-terracotta font-medium">Grok-2</span>
                  </div>
                  <p className="font-sans text-xs text-mutedInk leading-relaxed">
                    Real-time regulatory shifts, fast social-sentiment correlation, and live breaking intelligence synthesis.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between text-mutedInk font-mono text-[10px]">
                  <span className="uppercase">Role: Temporal Pulse</span>
                  <span className="w-2 h-2 rounded-full bg-botanical"></span>
                </div>
              </div>

              {/* Provider 4 */}
              <div className="bg-surfacePure p-5 rounded-lg border border-hairline shadow-2xs hover:border-mutedInk/40 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-semibold text-charcoal">OpenAI</span>
                    <span className="font-mono text-[11px] text-terracotta font-medium">GPT-4o</span>
                  </div>
                  <p className="font-sans text-xs text-mutedInk leading-relaxed">
                    Multimodal corporate filing parsing, structural diagram interpretation, and complex ledger cross-checks.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between text-mutedInk font-mono text-[10px]">
                  <span className="uppercase">Role: Multimodal Logic</span>
                  <span className="w-2 h-2 rounded-full bg-botanical"></span>
                </div>
              </div>

              {/* Provider 5 */}
              <div className="bg-surfacePure p-5 rounded-lg border border-hairline shadow-2xs hover:border-mutedInk/40 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-semibold text-charcoal">DeepSeek</span>
                    <span className="font-mono text-[11px] text-terracotta font-medium">DeepSeek R1</span>
                  </div>
                  <p className="font-sans text-xs text-mutedInk leading-relaxed">
                    Pure algorithmic math, discrete multi-step chains-of-thought, and formal programmatic validation.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between text-mutedInk font-mono text-[10px]">
                  <span className="uppercase">Role: Discrete Math</span>
                  <span className="w-2 h-2 rounded-full bg-botanical"></span>
                </div>
              </div>

              {/* Provider 6 */}
              <div className="bg-surfacePure p-5 rounded-lg border border-hairline shadow-2xs hover:border-mutedInk/40 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-semibold text-charcoal">OpenRouter</span>
                    <span className="font-mono text-[11px] text-terracotta font-medium">Mesh Routing</span>
                  </div>
                  <p className="font-sans text-xs text-mutedInk leading-relaxed">
                    Zero-downtime sovereign multi-model failover with dynamic latency, cost, and rate-limit arbitration.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between text-mutedInk font-mono text-[10px]">
                  <span className="uppercase">Role: Sovereign Resiliency</span>
                  <span className="w-2 h-2 rounded-full bg-botanical"></span>
                </div>
              </div>
            </div>

            {/* Conduit: Zero-Hallucination Bus (Bidirectional Bridge) */}
            <div className="relative py-2">
              <div className="bg-surfacePure p-5 rounded-xl border border-hairline shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-botanical flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-[18px]">sync_alt</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-charcoal">
                        Zero-Hallucination Isolation Bus
                      </span>
                      <span className="px-2 py-0.5 bg-terracotta-soft text-terracotta rounded text-[10px] font-mono uppercase font-semibold border border-terracotta/20">
                        Active Interlock
                      </span>
                    </div>
                    <div className="font-sans text-xs text-mutedInk mt-0.5">
                      Translates speculative intent into deterministic SQL, SPARQL &amp; Python AST queries
                    </div>
                  </div>
                </div>

                {/* Flow Indicators */}
                <div className="flex items-center gap-6 font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-mutedInk">
                    <span className="material-symbols-outlined text-terracotta text-[16px]">arrow_downward</span>
                    <span>Structured Requests</span>
                  </div>
                  <div className="h-4 w-px bg-hairline"></div>
                  <div className="flex items-center gap-1.5 text-charcoal font-medium">
                    <span className="material-symbols-outlined text-botanical text-[16px]">arrow_upward</span>
                    <span>Cryptographic Proofs &amp; Diffs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer B Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 pt-2">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-terracotta text-white rounded font-mono text-[10px] tracking-widest uppercase font-semibold">
                  Layer B
                </span>
                <span className="font-display text-2xl text-charcoal font-medium">Deterministic Ground Truth</span>
              </div>
              <span className="font-mono text-xs text-mutedInk">
                Immutable Registries · Real-Time Market Tapes · Sandboxed Python
              </span>
            </div>

            {/* Layer B Cards (4 Ground Truth Components) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* B1: Legal & Judicial */}
              <div className="bg-surfacePure p-5 rounded-lg border border-hairline shadow-2xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-terracotta font-semibold">
                      Judicial Verification
                    </span>
                    <span className="font-mono text-[10px] text-mutedInk">API MESH 01</span>
                  </div>
                  <h4 className="font-display text-xl text-charcoal font-medium">Indian Kanoon &amp; eCourts India</h4>
                  <p className="font-sans text-xs text-mutedInk leading-relaxed">
                    Direct lookup of 16-digit CNR case registers, Bench Order status, live cause lists, and Supreme Court precedent verification. No model is permitted to invent citations.
                  </p>
                </div>
                <div className="bg-surfaceMuted p-2.5 rounded text-[11px] font-mono text-charcoal flex items-center justify-between border border-hairline">
                  <code>cnr_lookup(state="DL", year="2024")</code>
                  <span className="text-botanical font-semibold">99.98% Latency SLA</span>
                </div>
              </div>

              {/* B2: Markets & Treasury */}
              <div className="bg-surfacePure p-5 rounded-lg border border-hairline shadow-2xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-terracotta font-semibold">
                      Financial Precision
                    </span>
                    <span className="font-mono text-[10px] text-mutedInk">API MESH 02</span>
                  </div>
                  <h4 className="font-display text-xl text-charcoal font-medium">NSE Option Chains &amp; Institutional Tapes</h4>
                  <p className="font-sans text-xs text-mutedInk leading-relaxed">
                    Sub-second feeds for tick data, Black-Scholes implied volatilities, delta/gamma Greeks, and open-interest strikes. Mental math by the LLM is strictly forbidden.
                  </p>
                </div>
                <div className="bg-surfaceMuted p-2.5 rounded text-[11px] font-mono text-charcoal flex items-center justify-between border border-hairline">
                  <code>fetch_nse_oi(expiry="2025-04-24")</code>
                  <span className="text-botanical font-semibold">Deterministic Greeks</span>
                </div>
              </div>

              {/* B3: Live Grounding */}
              <div className="bg-surfacePure p-5 rounded-lg border border-hairline shadow-2xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-terracotta font-semibold">
                      Web Provenance
                    </span>
                    <span className="font-mono text-[10px] text-mutedInk">API MESH 03</span>
                  </div>
                  <h4 className="font-display text-xl text-charcoal font-medium">Serper, Tavily &amp; Brave Web Indexes</h4>
                  <p className="font-sans text-xs text-mutedInk leading-relaxed">
                    Full-page crawl snapshots with sha256 cryptographic provenance, publication timestamp validation, and automated multi-source consensus scoring.
                  </p>
                </div>
                <div className="bg-surfaceMuted p-2.5 rounded text-[11px] font-mono text-charcoal flex items-center justify-between border border-hairline">
                  <code>sha256_verify(url, fetched_at)</code>
                  <span className="text-botanical font-semibold">Immutable Provenance</span>
                </div>
              </div>

              {/* B4: Compute */}
              <div className="bg-surfacePure p-5 rounded-lg border border-hairline shadow-2xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-terracotta font-semibold">
                      Discrete Compute
                    </span>
                    <span className="font-mono text-[10px] text-mutedInk">API MESH 04</span>
                  </div>
                  <h4 className="font-display text-xl text-charcoal font-medium">Sandboxed Symbolic Python</h4>
                  <p className="font-sans text-xs text-mutedInk leading-relaxed">
                    Isolated virtual execution environments running SymPy, NumPy, and SciPy. Every financial model, compound interest scenario, or amortization table is executed, not simulated.
                  </p>
                </div>
                <div className="bg-surfaceMuted p-2.5 rounded text-[11px] font-mono text-charcoal flex items-center justify-between border border-hairline">
                  <code>exec_sandbox(sympy.Matrix)</code>
                  <span className="text-botanical font-semibold">Zero Mental Drift</span>
                </div>
              </div>
            </div>

            {/* Architecture Footnote */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px] text-mutedInk border-t border-hairline">
              <span>Figure 4.1: GriZon Decoupled Dual-Plane Execution Topology (Release 2.4).</span>
              <span className="uppercase text-charcoal font-medium">Telemetry: 0 Inferences unverified</span>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. EPISTEMIC HONESTY & DOMAIN STANDARDS
        ====================================================================== */}
        <section className="flex flex-col gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-mutedInk font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
              <span>Institutional Guarantees</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal tracking-tight font-normal">
              Epistemic Honesty Standards
            </h2>
            <p className="font-sans text-sm text-mutedInk max-w-2xl">
              Three non-negotiable architectural mandates embedded into every routine, specialist, and autonomous dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Standard 1 */}
            <div className="bg-surfacePure p-7 rounded-xl border border-hairline shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-terracotta font-semibold uppercase">Protocol 01</span>
                  <span className="material-symbols-outlined text-botanical text-[20px]">verified</span>
                </div>
                <h3 className="font-display text-xl text-charcoal font-medium">Source Grounding &amp; Tri-Tier Classification</h3>
                <p className="font-sans text-xs text-mutedInk leading-relaxed">
                  Every sentence rendered by GriZon is tagged with an epistemic provenance tier. The client always knows whether a clause is proven, derived, or inferred.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 font-mono text-[11px]">
                <div className="flex items-center justify-between p-2 bg-surfaceMuted rounded border border-hairline">
                  <span className="font-medium text-charcoal">Confirmed Fact</span>
                  <span className="text-mutedInk">Direct API Hash</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-surfaceMuted rounded border border-hairline">
                  <span className="font-medium text-charcoal">Derived Metric</span>
                  <span className="text-mutedInk">Computed Sandbox</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-terracotta-soft text-terracotta rounded border border-terracotta/20 font-medium">
                  <span>Inferred Hypothesis</span>
                  <span className="text-mutedInk">Marked Speculation</span>
                </div>
              </div>
            </div>

            {/* Standard 2 */}
            <div className="bg-surfacePure p-7 rounded-xl border border-hairline shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-terracotta font-semibold uppercase">Protocol 02</span>
                  <span className="material-symbols-outlined text-botanical text-[20px]">balance</span>
                </div>
                <h3 className="font-display text-xl text-charcoal font-medium">Statutory Temporal Migration</h3>
                <p className="font-sans text-xs text-mutedInk leading-relaxed">
                  Native reconciliation for India’s transformative criminal code overhaul effective 1 July 2024. GriZon enforces continuous cross-temporal validity checks.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 font-mono text-[11px]">
                <div className="flex items-center justify-between p-2 bg-surfaceMuted rounded border border-hairline">
                  <span className="font-medium text-charcoal">IPC → BNS 2023</span>
                  <span className="text-mutedInk">Auto Re-indexed</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-surfaceMuted rounded border border-hairline">
                  <span className="font-medium text-charcoal">CrPC → BNSS 2023</span>
                  <span className="text-mutedInk">Procedural Sync</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-surfaceMuted rounded border border-hairline">
                  <span className="font-medium text-charcoal">IEA → BSA 2023</span>
                  <span className="text-mutedInk">Evidence Rule Diff</span>
                </div>
              </div>
            </div>

            {/* Standard 3 */}
            <div className="bg-surfacePure p-7 rounded-xl border border-hairline shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-terracotta font-semibold uppercase">Protocol 03</span>
                  <span className="material-symbols-outlined text-botanical text-[20px]">show_chart</span>
                </div>
                <h3 className="font-display text-xl text-charcoal font-medium">Financial Invalidation Criteria</h3>
                <p className="font-sans text-xs text-mutedInk leading-relaxed">
                  No financial thesis may be output without its mathematical negation. GriZon guarantees balanced Bull and Bear confluence with explicit thresholds.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 font-mono text-[11px]">
                <div className="flex items-center justify-between p-2 bg-surfaceMuted rounded border border-hairline">
                  <span className="font-medium text-charcoal">Bull Thesis</span>
                  <span className="text-mutedInk">Catalyst Triggers</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-surfaceMuted rounded border border-hairline">
                  <span className="font-medium text-charcoal">Bear Thesis</span>
                  <span className="text-mutedInk">Downside Confluence</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-terracotta-soft text-terracotta rounded border border-terracotta/20 font-medium">
                  <span>Invalidation Level</span>
                  <span className="text-mutedInk">Hard Math Cutoff</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            INTERACTIVE EPISTEMIC DIFF DEMONSTRATION
        ====================================================================== */}
        <section className="bg-surfacePure p-6 md:p-8 rounded-xl border border-hairline shadow-xs flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-hairline">
            <div>
              <span className="font-mono text-xs text-terracotta uppercase font-semibold">Interactive Exemplar</span>
              <h3 className="font-display text-2xl text-charcoal font-medium">The Epistemic Diff in Practice</h3>
            </div>
            <div className="flex items-center gap-1.5 bg-surfaceMuted p-1 rounded-lg border border-hairline">
              <button
                type="button"
                onClick={() => setDiffMode('ungrounded')}
                className={`px-3 py-1 font-mono text-xs rounded transition-all cursor-pointer ${
                  diffMode === 'ungrounded'
                    ? 'bg-surfacePure text-charcoal font-semibold shadow-2xs border border-hairline'
                    : 'text-mutedInk hover:text-charcoal'
                }`}
              >
                Standard LLM
              </button>
              <button
                type="button"
                onClick={() => setDiffMode('grizon')}
                className={`px-3 py-1 font-mono text-xs rounded transition-all cursor-pointer ${
                  diffMode === 'grizon'
                    ? 'bg-botanical text-white font-semibold shadow-2xs'
                    : 'text-mutedInk hover:text-charcoal'
                }`}
              >
                GriZon Architecture
              </button>
            </div>
          </div>

          {/* Mode 1: Ungrounded Standard */}
          {diffMode === 'ungrounded' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-5 bg-red-50/60 border border-red-200/60 rounded-lg space-y-2">
                <div className="flex items-center justify-between text-red-700 font-mono text-xs font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">warning</span>
                    Synthetic Confidence Hazard
                  </span>
                  <span>Unverified Output</span>
                </div>
                <p className="font-sans text-[14px] text-charcoal italic leading-relaxed">
                  “Under Section 302 of the Indian Penal Code, bail cannot be granted by the Metropolitan Magistrate. Furthermore, the petitioner’s petition under Section 439 of the CrPC is rendered void by the decision in <em>State v. Kumar (2024 SC 1982)</em>.”
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-mutedInk font-sans text-xs">
                <div className="p-3 bg-red-50/80 rounded border border-red-200/50 text-red-900">
                  <strong>Critical Defect:</strong> Cites IPC post-July 1 2024 instead of Bharatiya Nyaya Sanhita (BNS Section 103).
                </div>
                <div className="p-3 bg-red-50/80 rounded border border-red-200/50 text-red-900">
                  <strong>Hallucination:</strong> Citation <em>State v. Kumar (2024 SC 1982)</em> does not exist in eCourts registry.
                </div>
                <div className="p-3 bg-red-50/80 rounded border border-red-200/50 text-red-900">
                  <strong>Liability:</strong> Filing this in court triggers immediate rejection and punitive judicial reprimand.
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: GriZon Grounded */}
          {diffMode === 'grizon' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-5 bg-botanical text-white rounded-lg space-y-3 shadow-xs">
                <div className="flex items-center justify-between text-emerald-200 font-mono text-xs font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Decoupled Ground-Truth Output
                  </span>
                  <span className="tabular-nums">CNR: DLHC01-089211-2024 · VERIFIED</span>
                </div>
                <div className="font-sans text-[14px] space-y-2 text-white/95 leading-relaxed">
                  <p>
                    Under <strong className="text-white underline decoration-dotted font-semibold">BNS Section 103 (replaces IPC 302)</strong>, the offense is cognizable and non-bailable.
                  </p>
                  <p className="text-xs text-white/90">
                    Pursuant to <strong className="text-white underline decoration-dotted font-semibold">BNSS Section 483 (replaces CrPC 439)</strong>, the Special Court retains jurisdiction. Real-time Kanoon verification reveals controlling precedent is <em>Ramesh Chandra v. State (NCT of Delhi) [2024 INSC 742]</em>.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-sans text-xs">
                <div className="p-3 bg-surfaceMuted rounded border border-hairline text-charcoal">
                  <strong>Temporal Map:</strong> Automatic translation applied for 1 July 2024 criminal code transition.
                </div>
                <div className="p-3 bg-surfaceMuted rounded border border-hairline text-charcoal">
                  <strong>CNR Proof:</strong> Precedent authenticated with SHA-256 Kanoon bench order archive.
                </div>
                <div className="p-3 bg-surfaceMuted rounded border border-hairline text-charcoal">
                  <strong>Audit Guarantee:</strong> Ready for signed institutional filing without human remedial drafting.
                </div>
              </div>
            </div>
          )}
        </section>

        {/* =====================================================================
            4. CONCLUDING EDITORIAL MONOGRAPH QUOTE
        ====================================================================== */}
        <footer className="pt-8 border-t border-hairline flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <div className="w-12 h-0.5 bg-terracotta"></div>
          <blockquote className="font-display text-2xl sm:text-3xl text-charcoal italic leading-relaxed font-normal">
            “An intellectual tool must never pretend to know what it has not verified. In high-consequence enterprise, modesty in assertion is the foundation of institutional power.”
          </blockquote>
          <div className="flex flex-col items-center space-y-1">
            <span className="font-mono text-xs tracking-widest uppercase text-terracotta font-semibold">
              The GriZon Monograph Series
            </span>
            <span className="font-sans text-xs text-mutedInk">Volume I · Treatises on Cognitive Determinism &amp; Indian Law</span>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/agents"
              className="inline-flex items-center justify-center bg-botanical text-white hover:bg-botanical-dark px-5 py-2.5 rounded-full font-sans text-xs font-medium transition-all shadow-xs"
            >
              Examine the 10 Specialists
            </Link>
            <Link
              to="/workflow"
              className="inline-flex items-center justify-center bg-surfacePure border border-hairline text-charcoal hover:bg-surfaceMuted px-5 py-2.5 rounded-full font-sans text-xs font-medium transition-all shadow-xs"
            >
              Inspect Memory &amp; Routines Engine
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
