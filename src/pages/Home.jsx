import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      q: 'How does Grizon AI eliminate hallucinations in enterprise work?',
      a: 'Generic LLMs guess from stale training data. Grizon consults 10 specialized domain minds connected to live databases (Indian Kanoon, eCourts India, NSE tick feeds, MCA filings). Every response includes deterministic citations and evidence hashes.',
    },
    {
      q: 'Does Grizon train on our company data?',
      a: 'Never. Grizon operates under strict Zero Data Retention in 256-bit isolated sovereign enclaves. Your queries, contracts, and code files are never retained or used to retrain external AI models.',
    },
    {
      q: 'How do autonomous workflows work?',
      a: 'You can set recurring schedules using natural language (daily, weekly, or event-driven). Grizon runs the designated specialist in the background and delivers clean, formatted artifacts without manual intervention.',
    },
    {
      q: 'Can compute credits be rolled over?',
      a: 'Yes. All unused compute credits automatically roll over into your next billing cycle with transparent per-invocation metering.',
    },
  ];

  return (
    <div className="w-full flex flex-col bg-white text-[#090B19] selection:bg-purple-100 selection:text-purple-900 font-sans">
      {/* =====================================================================
          1. HERO SECTION: OptimAI Layout (3D Fluted Ribbed Backdrop + Flanking Floating Small Boxes)
          - Center Headline & Friendly Copy
          - 3 Left Floating Cards (DAG Research, Dev Studio Sandbox, Statutory Oracles)
          - 3 Right Floating Cards (10+ Prebuilt Agents, 300+ Verified Feeds, 44+ High Courts)
          - 3D Fluted Vertical Cylinder Wall Background with Soft Violet/Indigo Lighting
          - Dual Pill Buttons with Ambient Underlight Glow
      ====================================================================== */}
      <section className="relative w-full overflow-hidden pt-8 sm:pt-14 pb-16 lg:pb-24 bg-gradient-to-b from-[#FAF9F5] via-white to-[#FAF9F5]">
        {/* 3D Fluted Cylinder Glass Wall Background with Refined Ethereal Color Grading */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] pointer-events-none overflow-hidden select-none z-0">
          {/* Ambient Ethereal Diffuse Glows - Color graded to blend with Warm Alabaster */}
          <div className="absolute right-12 top-10 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-purple-300/18 via-indigo-200/12 to-amber-100/15 blur-[120px] pointer-events-none" />
          <div className="absolute right-1/3 bottom-16 w-[320px] h-[320px] rounded-full bg-indigo-200/12 blur-[100px] pointer-events-none" />

          {/* Vertical fade container ensuring fluted pillars smoothly dissolve before reaching bottom */}
          <div
            className="absolute inset-0 flex justify-end pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 86%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 86%)',
            }}
          >
            {/* Horizontal fade */}
            <div
              className="h-full w-full flex justify-end opacity-90"
              style={{
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)',
              }}
            >
              <div className="flex h-full gap-2 sm:gap-3.5 pr-2 sm:pr-8">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-full w-5 sm:w-8 lg:w-11 rounded-full opacity-85 transition-all"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(240, 232, 253, 0.55) 26%, rgba(216, 180, 254, 0.40) 65%, rgba(168, 85, 247, 0.20) 100%)',
                      boxShadow:
                        'inset -1.5px 0 5px rgba(147, 51, 234, 0.12), inset 1.5px 0 3px rgba(255, 255, 255, 0.95)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Seamless bottom vignette melting directly into #FAF9F5 */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-[#FAF9F5]/70 to-[#FAF9F5] pointer-events-none z-1" />
        </div>

        {/* Hero Content & Flanking Breakout Grid */}
        <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center">
            {/* LEFT FLANKING FLOATING SMALL BOXES (GriZon AI Core Capabilities) */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 -ml-8 xl:-ml-12 pointer-events-auto select-none">
              {/* Card 1: Deterministic Accuracy (Top Left) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left w-56 transform -rotate-1 hover:rotate-0 hover:shadow-lg transition-all duration-300 animate-float-slow">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  Deterministic Accuracy
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#090B19] tracking-tight">
                  99.4%
                </div>
                <p className="font-sans text-[11px] text-slate-400 mt-1">
                  Zero-Hallucination Grounding
                </p>
              </div>

              {/* Card 2: Execution Latency (Middle Left - Bleeding into Margin) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.06)] text-left w-60 -ml-8 hover:ml-0 hover:shadow-lg transition-all duration-300 animate-float-mid">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  Execution Latency
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#090B19] tracking-tight">
                  &lt;50ms
                </div>
                <p className="font-sans text-[11px] text-slate-400 mt-1">
                  Isolated Container VM Sandbox
                </p>
              </div>

              {/* Card 3: Sovereign Enclave (Bottom Left) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left w-56 transform rotate-1 hover:rotate-0 hover:shadow-lg transition-all duration-300 animate-float-fast">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  Sovereign Enclave
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#090B19] tracking-tight">
                  256-Bit
                </div>
                <p className="font-sans text-[11px] text-slate-400 mt-1">
                  Zero Data Retention Security
                </p>
              </div>
            </div>

            {/* CENTER COLUMN: OptimAI Centered Headline, Clear Subtitle & Dual Pill Buttons */}
            <div className="lg:col-span-6 text-center flex flex-col items-center">
              {/* Eyebrow with hairline accents */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-10 sm:w-16 h-[1.5px] bg-purple-300/80 rounded-full" />
                <span className="font-sans text-xs sm:text-[13px] font-semibold text-purple-700 tracking-wide">
                  Purpose-Built Multi-Agent Platform
                </span>
                <span className="w-10 sm:w-16 h-[1.5px] bg-purple-300/80 rounded-full" />
              </div>

              {/* Main Headline (Minimal, High-Impact & Professional) */}
              <h1 className="font-sans text-3xl sm:text-5xl lg:text-[48px] xl:text-[52px] font-extrabold text-[#090B19] tracking-[-0.03em] leading-[1.12] mb-5 text-balance text-center max-w-2xl">
                Autonomous Intelligence <br />
                for Modern Enterprise.
              </h1>

              {/* Simple, Clear, Professional Subtitle */}
              <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-8 text-center text-balance font-normal">
                Specialized AI agents for research, code, financial markets, and legal compliance. Always deterministic, zero hallucinations.
              </p>

              {/* Dual Action Buttons (OptimAI Style) */}
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-4 w-full sm:w-auto">
                {/* Left Button: White Pill */}
                <Link
                  to="/welcome"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-900 border border-slate-200/90 hover:border-slate-400 font-semibold text-sm shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Initialize Free Workspace</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>

                {/* Right Button: Dark Charcoal Pill */}
                <Link
                  to="/agents"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#090B19] text-white hover:bg-black font-semibold text-sm transition-all active:scale-[0.98] shadow-sm"
                >
                  <span>Explore 10+ Specialists</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>

              {/* Glowing Ambient Diffuse Light beneath buttons */}
              <div className="w-72 sm:w-96 h-10 -mt-5 mx-auto rounded-full bg-gradient-to-r from-cyan-400/35 via-indigo-400/35 to-purple-500/40 blur-2xl pointer-events-none" />

            </div>

            {/* RIGHT FLANKING FLOATING SMALL BOXES */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 -mr-8 xl:-mr-12 pointer-events-auto select-none">
              {/* Card 1: 10+ Prebuilt Agents (Top Right) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left w-56 transform rotate-1 hover:rotate-0 hover:shadow-lg transition-all duration-300 animate-float-mid">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  Prebuilt Agents
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#090B19] tracking-tight">
                  10+
                </div>
                <p className="font-sans text-[11px] text-slate-400 mt-1">
                  Legal, Quants, Dev &amp; Research
                </p>
              </div>

              {/* Card 2: 300+ Verified Statutory Feeds (Middle Right - Bleeding into Margin) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.06)] text-left w-60 -mr-8 hover:mr-0 hover:shadow-lg transition-all duration-300 animate-float-slow">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  Total Sections &amp; Oracles
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#090B19] tracking-tight">
                  300+
                </div>
                <p className="font-sans text-[11px] text-slate-400 mt-1">
                  Live Oracles &amp; Gazette Feeds
                </p>
              </div>

              {/* Card 3: 44+ High Courts Indexed (Bottom Right) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left w-56 transform -rotate-1 hover:rotate-0 hover:shadow-lg transition-all duration-300 animate-float-fast">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  High Courts Indexed
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#090B19] tracking-tight">
                  44+
                </div>
                <p className="font-sans text-[11px] text-slate-400 mt-1">
                  16-Digit CNR Conformance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Blended Hairline Divider bridging Hero into Section 2 */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 relative z-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6E4DD] to-transparent" />
        </div>
      </section>

      {/* =====================================================================
          2. SECTION 2: SPECIALIST AGENTS SHOWCASE (OptimAI Demo Showcase Pattern)
      ====================================================================== */}
      <section className="relative w-full bg-[#FAF9F5] py-20 border-b border-[#E6E4DD]">
        {/* Ambient Top Diffuse Sheen blending with Hero above */}
        <div className="absolute top-0 right-1/4 w-[500px] h-48 bg-gradient-to-b from-purple-200/10 via-indigo-100/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-purple-400/80 rounded-full" />
              <span className="font-sans text-xs uppercase tracking-widest text-purple-700 font-bold">
                Specialist Agent Fleet • 6 of 10 Featured
              </span>
              <span className="w-8 h-[1.5px] bg-purple-400/80 rounded-full" />
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#090B19] tracking-tight">
              Purpose-Built Minds for Every Enterprise Discipline
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              No generic chatbot guessing. Each agent is pre-configured with dedicated toolchains, deterministic statutory oracles, and zero-retention memory.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Link
                to="/agents"
                className="font-sans text-xs font-semibold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1 group bg-purple-50 border border-purple-200/60 px-3.5 py-1.5 rounded-full transition-all hover:bg-purple-100"
              >
                <span>Know More: Explore The 10 Specialists</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* 6 Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* 1. Market Quant Specialist */}
            <div className="rounded-3xl bg-white border border-[#E6E4DD] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-400 transition-all flex flex-col justify-between group">
              <div>
                {/* Vibrant Live Financial Terminal UI */}
                <div className="h-48 rounded-2xl bg-[#080D1A] border border-emerald-500/30 p-3.5 text-white flex flex-col justify-between relative overflow-hidden mb-5 shadow-inner">
                  {/* Glow background accent */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Top Bar: Live Ticker & Change */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[10px] text-emerald-300 font-bold tracking-tight">NSE: BANKNIFTY</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-[11px] text-white font-bold">51,248.60</span>
                      <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/20 px-1 py-0.2 rounded font-semibold">▲ +1.42%</span>
                    </div>
                  </div>

                  {/* Middle: Real SVG Candlestick & Area Chart */}
                  <div className="relative w-full h-20 my-1 z-10 flex items-center">
                    <svg viewBox="0 0 260 70" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="quantAreaGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Subtle grid lines */}
                      <line x1="0" y1="20" x2="260" y2="20" stroke="#1E293B" strokeDasharray="2 2" strokeWidth="1" />
                      <line x1="0" y1="45" x2="260" y2="45" stroke="#1E293B" strokeDasharray="2 2" strokeWidth="1" />
                      
                      {/* Candlestick Wicks & Bodies */}
                      <line x1="25" y1="35" x2="25" y2="55" stroke="#10B981" strokeWidth="1" />
                      <rect x="22" y="40" width="6" height="12" rx="1" fill="#10B981" />
                      
                      <line x1="55" y1="28" x2="55" y2="50" stroke="#F43F5E" strokeWidth="1" />
                      <rect x="52" y="32" width="6" height="10" rx="1" fill="#F43F5E" />
                      
                      <line x1="85" y1="20" x2="85" y2="42" stroke="#10B981" strokeWidth="1" />
                      <rect x="82" y="24" width="6" height="14" rx="1" fill="#10B981" />
                      
                      <line x1="115" y1="15" x2="115" y2="38" stroke="#10B981" strokeWidth="1" />
                      <rect x="112" y="18" width="6" height="15" rx="1" fill="#10B981" />
                      
                      <line x1="145" y1="18" x2="145" y2="35" stroke="#F43F5E" strokeWidth="1" />
                      <rect x="142" y="22" width="6" height="8" rx="1" fill="#F43F5E" />
                      
                      <line x1="175" y1="8" x2="175" y2="30" stroke="#10B981" strokeWidth="1" />
                      <rect x="172" y="12" width="6" height="16" rx="1" fill="#10B981" />

                      {/* Glowing Area Spline */}
                      <path
                        d="M 10 50 Q 50 48 85 30 T 150 25 T 205 12 T 255 8 L 255 65 L 10 65 Z"
                        fill="url(#quantAreaGrad)"
                      />
                      <path
                        d="M 10 50 Q 50 48 85 30 T 150 25 T 205 12 T 255 8"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      {/* High point pulse */}
                      <circle cx="205" cy="12" r="3" fill="#34D399" />
                      <circle cx="205" cy="12" r="6" fill="#34D399" opacity="0.3" className="animate-ping" />
                    </svg>
                  </div>

                  {/* Bottom Bar: Sentiment Depth & Skew */}
                  <div className="z-10 bg-black/50 border border-white/5 rounded-lg px-2.5 py-1.5 flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">Delta OI:</span>
                      <span className="text-emerald-400 font-bold">+14.2% Skew</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">Consensus:</span>
                      <span className="text-emerald-300 font-bold">68% Bull</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-sans text-lg font-bold text-[#090B19] mb-1.5">
                  Market Quant Specialist
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Synthesizes option-chain delta profiles, computes Taurus vs Ursa debate consensus, and generates balance-sheet sensitivity models.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  112ms Latency
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    to="/agents"
                    className="font-sans text-xs text-slate-500 hover:text-purple-700 font-medium transition-colors"
                  >
                    Know More
                  </Link>
                  <Link
                    to="/agents/market-intelligence"
                    className="font-sans text-xs font-semibold text-[#090B19] group-hover:text-purple-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Launch Agent</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Dev Studio & Linux VM */}
            <div className="rounded-3xl bg-white border border-[#E6E4DD] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-400 transition-all flex flex-col justify-between group">
              <div>
                {/* Vibrant IDE Window UI */}
                <div className="h-48 rounded-2xl bg-[#0B131E] border border-teal-500/30 p-3 text-white flex flex-col justify-between relative overflow-hidden mb-5 shadow-inner">
                  {/* Window Titlebar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      <span className="font-mono text-[10px] text-slate-300 ml-2 bg-white/10 px-2 py-0.5 rounded flex items-center gap-1 border border-white/5">
                        <span className="text-cyan-400 font-bold">TSX</span>TelemetryView.tsx
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-teal-300 bg-teal-950/90 border border-teal-500/40 px-1.5 py-0.5 rounded font-bold">
                      Container VM 0.04s
                    </span>
                  </div>

                  {/* Syntax Highlighted Code Editor */}
                  <div className="font-mono text-[10px] leading-relaxed text-slate-300 bg-black/60 p-2 rounded-lg border border-white/5 space-y-0.5 z-10 my-1">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 select-none text-[9px] w-3 text-right">1</span>
                      <span><span className="text-purple-400 font-semibold">export const</span> <span className="text-sky-300 font-bold">TelemetryCanvas</span> = () =&gt; &#123;</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 select-none text-[9px] w-3 text-right">2</span>
                      <span>&nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; data &#125; = <span className="text-amber-300">useOracleStream</span>(<span className="text-emerald-300">'wss://grizon.io'</span>);</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 select-none text-[9px] w-3 text-right">3</span>
                      <span>&nbsp;&nbsp;<span className="text-purple-400">return</span> &lt;<span className="text-teal-300">GPUCanvas</span> data=&#123;data&#125; <span className="text-amber-300">fps</span>=<span className="text-emerald-300">60</span> /&gt;;</span>
                    </div>
                  </div>

                  {/* Bottom Live VM Telemetry */}
                  <div className="z-10 flex items-center justify-between text-[10px] font-mono bg-teal-950/60 border border-teal-500/30 rounded px-2 py-1">
                    <span className="text-teal-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>AST Validated • 0 Errors</span>
                    </span>
                    <span className="text-emerald-400 font-bold">✓ 60 FPS Rendered</span>
                  </div>
                </div>

                <h3 className="font-sans text-lg font-bold text-[#090B19] mb-1.5">
                  Dev Studio &amp; Container VM
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Isolated micro-VM container sandbox for autonomous software development, UI component generation, and live canvas testing.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[10px] text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded">
                  98ms Latency
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    to="/agents"
                    className="font-sans text-xs text-slate-500 hover:text-purple-700 font-medium transition-colors"
                  >
                    Know More
                  </Link>
                  <Link
                    to="/agents/dev-studio"
                    className="font-sans text-xs font-semibold text-[#090B19] group-hover:text-purple-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Launch Agent</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Legal Intelligence & Regulatory Oracle */}
            <div className="rounded-3xl bg-white border border-[#E6E4DD] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-400 transition-all flex flex-col justify-between group">
              <div>
                {/* Vibrant Statutory Concordance Doc UI */}
                <div className="h-48 rounded-2xl bg-[#160D1E] border border-purple-500/30 p-3 text-white flex flex-col justify-between relative overflow-hidden mb-5 shadow-inner">
                  {/* Top Header: Official Seal & High Court Gazette */}
                  <div className="flex items-center justify-between z-10 border-b border-purple-500/20 pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-purple-400 text-sm">verified_user</span>
                      <span className="font-mono text-[10px] text-purple-200 font-bold">eCourts NJDG Authenticated</span>
                    </div>
                    <span className="font-mono text-[9px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                      CNR: DLHC01-004829
                    </span>
                  </div>

                  {/* Middle: Side-by-Side Statutory Concordance Memo */}
                  <div className="grid grid-cols-2 gap-2 my-1 z-10 font-mono">
                    <div className="bg-rose-950/40 border border-rose-500/30 rounded p-1.5">
                      <div className="text-[8px] text-rose-400 font-bold uppercase tracking-wider mb-0.5">Legacy Code</div>
                      <div className="text-[11px] text-rose-200 line-through opacity-80 font-bold">IPC §302 (1860)</div>
                      <div className="text-[8px] text-slate-400 mt-0.5">Penal Code Condoned</div>
                    </div>
                    <div className="bg-emerald-950/50 border border-emerald-500/40 rounded p-1.5">
                      <div className="text-[8px] text-emerald-400 font-bold uppercase tracking-wider mb-0.5">New Statute</div>
                      <div className="text-[11px] text-emerald-300 font-bold">BNS §112 (2023)</div>
                      <div className="text-[8px] text-emerald-400 mt-0.5">100% Crosswalk Valid</div>
                    </div>
                  </div>

                  {/* Bottom Bar: Cryptographic Hash & Precedent Match */}
                  <div className="z-10 flex items-center justify-between text-[10px] font-mono bg-purple-950/70 border border-purple-500/30 rounded px-2 py-1">
                    <span className="text-purple-300 text-[9px]">SHA-256: 9e4f...b812</span>
                    <span className="text-emerald-400 font-bold text-[9px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Ratio Decidendi Intact</span>
                    </span>
                  </div>
                </div>

                <h3 className="font-sans text-lg font-bold text-[#090B19] mb-1.5">
                  Legal &amp; Regulatory Oracle
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Real-time statutory concordance with Indian Kanoon, High Court gazettes, and DPDP Act 2023 compliance audit verification.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[10px] text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded">
                  146ms Latency
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    to="/agents"
                    className="font-sans text-xs text-slate-500 hover:text-purple-700 font-medium transition-colors"
                  >
                    Know More
                  </Link>
                  <Link
                    to="/agents/legal"
                    className="font-sans text-xs font-semibold text-[#090B19] group-hover:text-purple-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Launch Agent</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Deep Research DAG */}
            <div className="rounded-3xl bg-white border border-[#E6E4DD] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-400 transition-all flex flex-col justify-between group">
              <div>
                {/* Vibrant Recursive DAG Tree UI */}
                <div className="h-48 rounded-2xl bg-[#0A1224] border border-indigo-500/30 p-3 text-white flex flex-col justify-between relative overflow-hidden mb-5 shadow-inner">
                  {/* Top Bar: Multi-Hop Status */}
                  <div className="flex items-center justify-between z-10 border-b border-indigo-500/20 pb-1.5">
                    <span className="font-mono text-[10px] text-indigo-300 bg-indigo-950/80 border border-indigo-500/40 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      <span>Recursive DAG Tree (4 Hops)</span>
                    </span>
                    <span className="font-mono text-[9px] text-slate-300">32 Citations Indexed</span>
                  </div>

                  {/* Middle: SVG Visual Tree Nodes */}
                  <div className="relative w-full h-20 my-1 z-10">
                    <svg viewBox="0 0 260 70" className="w-full h-full">
                      {/* Connector curves */}
                      <path d="M 130 18 C 130 28, 45 28, 45 44" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="3 2" />
                      <path d="M 130 18 C 130 28, 130 28, 130 44" fill="none" stroke="#6366F1" strokeWidth="1.5" />
                      <path d="M 130 18 C 130 28, 215 28, 215 44" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="3 2" />

                      {/* Root Node */}
                      <rect x="75" y="4" width="110" height="18" rx="9" fill="#312E81" stroke="#818CF8" strokeWidth="1" />
                      <text x="130" y="16" fill="#FFFFFF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CBAM Hydrogen Audit</text>

                      {/* Child Node 1 */}
                      <rect x="8" y="44" width="76" height="18" rx="5" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1" />
                      <text x="46" y="56" fill="#C7D2FE" fontSize="7" fontFamily="monospace" textAnchor="middle">EU Reg 2023/956</text>

                      {/* Child Node 2 */}
                      <rect x="94" y="44" width="72" height="18" rx="5" fill="#064E3B" stroke="#10B981" strokeWidth="1" />
                      <text x="130" y="56" fill="#A7F3D0" fontSize="7" fontFamily="monospace" textAnchor="middle">✓ CaPex Model</text>

                      {/* Child Node 3 */}
                      <rect x="176" y="44" width="76" height="18" rx="5" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1" />
                      <text x="214" y="56" fill="#C7D2FE" fontSize="7" fontFamily="monospace" textAnchor="middle">WTO GATT Art. XX</text>
                    </svg>
                  </div>

                  {/* Bottom Bar: Verified Citations */}
                  <div className="z-10 flex items-center justify-between text-[10px] font-mono bg-indigo-950/70 border border-indigo-500/30 rounded px-2 py-1">
                    <span className="text-slate-300">Synthesis Confidence: <strong className="text-emerald-400">99.8%</strong></span>
                    <span className="text-indigo-300 flex items-center gap-1 font-bold">
                      Ref: <span className="bg-indigo-900 px-1 py-0.2 rounded text-white">[1][4][9]</span>
                    </span>
                  </div>
                </div>

                <h3 className="font-sans text-lg font-bold text-[#090B19] mb-1.5">
                  Deep Research Specialist
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Recursive hypothesis tree search across statutory disclosures, technical papers, and industry databases with zero hallucinated citations.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[10px] text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded">
                  420ms Latency
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    to="/agents"
                    className="font-sans text-xs text-slate-500 hover:text-purple-700 font-medium transition-colors"
                  >
                    Know More
                  </Link>
                  <Link
                    to="/agents/research"
                    className="font-sans text-xs font-semibold text-[#090B19] group-hover:text-purple-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Launch Agent</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. Document & Contract Intelligence */}
            <div className="rounded-3xl bg-white border border-[#E6E4DD] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-400 transition-all flex flex-col justify-between group">
              <div>
                {/* Vibrant Audited Ledger OCR UI */}
                <div className="h-48 rounded-2xl bg-[#1A1108] border border-amber-500/30 p-3 text-white flex flex-col justify-between relative overflow-hidden mb-5 shadow-inner">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between z-10 border-b border-amber-500/20 pb-1.5">
                    <span className="font-mono text-[10px] text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>MCA-21 Form AOC-4 OCR</span>
                    </span>
                    <span className="font-mono text-[9px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      99.98% Accuracy
                    </span>
                  </div>

                  {/* Middle: Audited Tabular Extraction */}
                  <div className="bg-black/60 rounded-lg border border-amber-500/20 p-2 font-mono text-[9px] space-y-1 z-10 my-1">
                    <div className="grid grid-cols-3 text-amber-400/80 font-bold border-b border-white/10 pb-0.5 uppercase tracking-wider">
                      <span>Ledger Item</span>
                      <span className="text-right">Audited FY24</span>
                      <span className="text-right">Reconciliation</span>
                    </div>
                    <div className="grid grid-cols-3 text-slate-200 items-center">
                      <span className="truncate">Consolidated EBITDA</span>
                      <span className="text-right text-emerald-300 font-bold">₹1,420.8 Cr</span>
                      <span className="text-right text-emerald-400 font-bold">✓ Matched</span>
                    </div>
                    <div className="grid grid-cols-3 text-slate-200 items-center">
                      <span className="truncate">Deferred Tax Asset</span>
                      <span className="text-right text-slate-300">₹248.5 Cr</span>
                      <span className="text-right text-emerald-400 font-bold">✓ Verified</span>
                    </div>
                  </div>

                  {/* Bottom Bar: Export Options */}
                  <div className="z-10 flex items-center justify-between text-[10px] font-mono bg-amber-950/70 border border-amber-500/30 rounded px-2 py-1">
                    <span className="text-amber-200 text-[9px]">200+ Pages/Sec</span>
                    <div className="flex items-center gap-1">
                      <span className="bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[8px] font-bold px-1.5 py-0.2 rounded">
                        XLSX READY
                      </span>
                      <span className="bg-slate-800 text-slate-300 text-[8px] px-1 py-0.2 rounded">
                        JSON
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="font-sans text-lg font-bold text-[#090B19] mb-1.5">
                  Document Intelligence
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Extract complex nested tables, multi-column statutory reports, and indemnity terms from PDF filings with mathematical precision.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">
                  Sub-2s Extraction
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    to="/agents"
                    className="font-sans text-xs text-slate-500 hover:text-purple-700 font-medium transition-colors"
                  >
                    Know More
                  </Link>
                  <Link
                    to="/agents/doc-intelligence"
                    className="font-sans text-xs font-semibold text-[#090B19] group-hover:text-purple-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Launch Agent</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 6. Video & Multimodal Forensics */}
            <div className="rounded-3xl bg-white border border-[#E6E4DD] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-400 transition-all flex flex-col justify-between group">
              <div>
                {/* Vibrant Video Waveform Player UI */}
                <div className="h-48 rounded-2xl bg-[#100D1E] border border-violet-500/30 p-3 text-white flex flex-col justify-between relative overflow-hidden mb-5 shadow-inner">
                  {/* Top Bar: Video Stream Status */}
                  <div className="flex items-center justify-between z-10 border-b border-violet-500/20 pb-1.5">
                    <span className="font-mono text-[10px] text-violet-300 bg-violet-950/80 border border-violet-500/40 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                      <span>Multimodal Vision &amp; Audio</span>
                    </span>
                    <span className="font-mono text-[9px] text-slate-400">1080p @ 60fps</span>
                  </div>

                  {/* Middle: Video Scrubber + Audio Equalizer Waveform */}
                  <div className="bg-black/60 rounded-lg border border-violet-500/20 p-2 z-10 my-1 space-y-1.5">
                    <div className="flex items-center justify-between font-mono text-[9px]">
                      <span className="text-violet-200">Slide 18: "Q3 CapEx Horizon"</span>
                      <span className="text-amber-300 font-bold">14:32.08 / 48:10</span>
                    </div>

                    {/* Video Scrubber bar */}
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-500 rounded-full w-2/5" />
                    </div>

                    {/* Audio Waveform Equalizer Bars */}
                    <div className="flex items-end justify-between h-6 pt-1 gap-1 px-1">
                      {[12, 22, 16, 26, 14, 28, 18, 24, 10, 22, 16, 26, 12, 20, 26, 18, 24, 14, 20, 28].map((h, i) => (
                        <div
                          key={i}
                          className={`w-1 rounded-full ${
                            i % 2 === 0 ? 'bg-violet-400' : 'bg-cyan-400'
                          }`}
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Bar: Speaker Diarization */}
                  <div className="z-10 flex items-center justify-between text-[10px] font-mono bg-violet-950/70 border border-violet-500/30 rounded px-2 py-1">
                    <span className="text-violet-300 text-[9px] truncate max-w-[180px]">
                      Speaker 02 (CFO): "Operating margin expanded..."
                    </span>
                    <span className="text-emerald-400 font-bold text-[9px]">Indexed</span>
                  </div>
                </div>

                <h3 className="font-sans text-lg font-bold text-[#090B19] mb-1.5">
                  Video &amp; Vision Analyser
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Upload complete webinar and boardroom video recordings. Query slide transcripts and speaker statements by exact timestamp.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[10px] text-violet-700 font-bold bg-violet-50 px-2 py-0.5 rounded">
                  Frame-Accurate
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    to="/agents"
                    className="font-sans text-xs text-slate-500 hover:text-purple-700 font-medium transition-colors"
                  >
                    Know More
                  </Link>
                  <Link
                    to="/agents/video-analyser"
                    className="font-sans text-xs font-semibold text-[#090B19] group-hover:text-purple-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Launch Agent</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Callout Banner: The 10 Specialists Redirection */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#090B19] via-[#14182e] to-[#090B19] border border-purple-500/30 p-6 sm:p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="font-mono text-[10px] text-purple-300 bg-purple-900/60 border border-purple-400/30 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Complete Autonomous Fleet • 10 Specialists
                </span>
                <span className="text-xs text-slate-400 font-mono">Showing 6 featured enterprise minds</span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Looking for All 10 Purpose-Built Specialists?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                In addition to the 6 featured above, explore our complete autonomous fleet including the Autonomous Orchestrator, System Architect Agent, Workflow &amp; Routines Coordinator, and Enterprise Governance &amp; Compliance suite.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-3 shrink-0">
              <Link
                to="/agents"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#090B19] hover:bg-slate-100 font-sans text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all group"
              >
                <span>Explore The 10 Specialists</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* =====================================================================
          3. SECTION 3: 4-METRIC TELEMETRY STRIP (Optimai Reference)
      ====================================================================== */}
      <section className="w-full bg-white py-14 border-t border-b border-[#E6E4DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-2 md:pt-0">
              <p className="font-sans text-4xl sm:text-5xl font-extrabold text-[#1E3A3A]">10</p>
              <p className="font-sans text-sm font-bold text-slate-800 mt-1.5">Specialized Minds</p>
              <p className="font-mono text-[11px] text-slate-500">Legal, Quant, Code, Research</p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <p className="font-sans text-4xl sm:text-5xl font-extrabold text-amber-700">&lt;50ms</p>
              <p className="font-sans text-sm font-bold text-slate-800 mt-1.5">Intent Router</p>
              <p className="font-mono text-[11px] text-slate-500">Zero context switching</p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <p className="font-sans text-4xl sm:text-5xl font-extrabold text-[#07091B]">100%</p>
              <p className="font-sans text-sm font-bold text-slate-800 mt-1.5">Rollover Credits</p>
              <p className="font-mono text-[11px] text-slate-500">Zero unused credit expiry</p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <p className="font-sans text-4xl sm:text-5xl font-extrabold text-emerald-800">256-Bit</p>
              <p className="font-sans text-sm font-bold text-slate-800 mt-1.5">Zero Training</p>
              <p className="font-mono text-[11px] text-slate-500">DPDP sovereign enclave</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SECTION 4: WHY GRIZON AI — 6 BENTO CARDS WITH AUTHORITY STATEMENTS
          Full content, purpose-built agents, zero generic chat
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1E3A3A] font-bold">
              Why GriZon AI
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight mt-1.5">
              Agents built for the job, not generic chat.
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-600 max-w-md leading-relaxed">
            Stop juggling generic chatbots. Pick a specialized agent engineered with dedicated toolchains — or let Auto Mode route your query dynamically.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Auto Mode Routing */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">alt_route</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Auto Mode Routing</h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Describe the task once. Auto Mode evaluates intent, token count, and data sensitivity to dispatch the best eligible specialized agent.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-amber-700 font-bold">
              Sub-50ms routing decision
            </div>
          </div>

          {/* Card 2: Dev Studio */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">terminal</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Dev Studio &amp; Linux Sandbox</h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Write, debug, and execute code in isolated container VMs with live HTML/CSS canvas preview for frontend components and telemetry apps.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-teal-700 font-bold">
              Live HTML &amp; React Canvas
            </div>
          </div>

          {/* Card 3: Deep Research */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">psychology</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Research with Footnote Citations</h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Fast Research for instant indexed queries, Deep Research for multi-step structured synthesis with risk analysis and verified footnote references.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-indigo-700 font-bold">
              Recursive DAG Trees &amp; Sources
            </div>
          </div>

          {/* Card 4: Market Analyst & Oracles */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">monitoring</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Market Analyst &amp; Oracles</h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Deep dive into equities and crypto fundamentals with algorithmic Bull vs Bear debates, balance-sheet extraction, and downloadable valuation summaries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-emerald-700 font-bold">
              Dual-Agent Adversarial Consensus
            </div>
          </div>

          {/* Card 5: Doc Intelligence & Video Analyser */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">description</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Doc Intelligence &amp; Vision</h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Extract granular multi-page tables from PDFs or upload entire video footage to index events, transcribe audio, and query scene timelines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-rose-700 font-bold">
              200+ Page OCR &amp; Slide Timeline
            </div>
          </div>

          {/* Card 6: Sovereign Credits */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Credits You Can See</h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Every plan includes transparent compute credits. Track balance and invocation costs in real time directly within your sovereign workspace wallet.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-slate-700 font-bold">
              100% Monthly Rollover Guarantee
            </div>
          </div>
        </div>
      </section>





      {/* =====================================================================
          7. SECTION 7: SPLIT IMAGES & MOBILE DISPATCHER (Rule 6, 9, 10)
      ====================================================================== */}
      <section className="w-full bg-white py-20 lg:py-28 border-t border-b border-[#E6E4DD] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 Columns: Sovereign Mobile Dispatcher with Breakout Pill */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                <div className="relative rounded-[32px] p-2 bg-[#FAF9F5] border border-[#E6E4DD]">
                  <img
                    src="/images/grizon-phone-real.png"
                    alt="GriZon AI Sovereign Mobile Dispatcher"
                    className="w-full h-auto max-h-[500px] object-contain rounded-[28px] mx-auto"
                  />
                  <div className="absolute -bottom-4 -right-2 sm:-right-4 px-4 py-2.5 rounded-2xl bg-[#07091B] text-white border border-[#E6E4DD] font-mono text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>256-Bit HSM Seal • ap-south-1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: 3 Foundation Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#1E3A3A] font-bold">
                  Sovereign Enclave Infrastructure
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07091B] tracking-tight mt-1 text-balance">
                  Intelligence that never leaves Indian jurisdiction.
                </h3>
                <p className="font-sans text-sm sm:text-base text-slate-600 mt-3 leading-relaxed text-balance">
                  Built from the ground up for enterprises bound by statutory data localization, DPDP non-repudiation mandates, and SEBI confidential audits.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#1E3A3A] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">gavel</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">Live Statutory Gazettes</h4>
                    <p className="font-sans text-xs text-slate-600 mt-0.5">
                      Direct machine concordance with 44 High Courts, eCourts India, and MCA-21 company registry.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">query_stats</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">Deterministic NSE Oracles</h4>
                    <p className="font-sans text-xs text-slate-600 mt-0.5">
                      Options volatility skew and sector alpha calculated live from real-time order-book ticks.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">shield</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">Air-Gapped Sovereign Cloud</h4>
                    <p className="font-sans text-xs text-slate-600 mt-0.5">
                      Isolated compute nodes in AWS Mumbai (ap-south-1) with zero cross-border transit and zero tenant training.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/welcome"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3A3A] text-white font-sans text-xs sm:text-sm font-semibold hover:bg-[#142929] transition-all"
                >
                  <span>Explore Enclave Specifications</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. SECTION 8: SPECIALIST SUITE — ALL-IN-ONE MULTI-AGENT AI (Ruboz Sticky Stacking Showcase)
      ====================================================================== */}
      <section className="w-full bg-[#FAF9F5] py-20 lg:py-32 relative border-b border-[#E6E4DD]" id="agents">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* LEFT COLUMN: Pinned Sticky Header & Fleet Overview */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E6E4DD] shadow-xs text-xs font-semibold text-[#1E3A3A]">
                <span className="material-symbols-outlined text-[16px] text-[#D97736]">rocket_launch</span>
                <span>Specialist Suite • 10 Domain Minds</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#07091B] tracking-tight leading-[1.15] text-balance">
                All-in-one multi-agent AI for enterprise.
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
                Ten purpose-built domain minds configured with deterministic statutory oracles, live institutional data feeds, and zero cross-tenant training.
              </p>


            </div>

            {/* RIGHT COLUMN: Sticky Stacking Cards Container */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 relative">
              {[
                {
                  num: '01',
                  tag: 'Statutory Core',
                  title: 'Legal Intelligence India',
                  desc: 'Deterministic statutory analysis across Bharatiya Nyaya Sanhita (BNS) vs IPC §302, live eCourts CNR concordance across 44 High Courts, and verifiable citation digests.',
                  link: '/agents/legal-intelligence',
                  pills: [
                    { icon: 'gavel', label: 'BNS & IPC Concordance' },
                    { icon: 'balance', label: '44 High Courts Live Sync' },
                    { icon: 'verified_user', label: 'Zero-Retention Enclave' },
                  ],
                  preview: (
                    <div className="rounded-2xl bg-[#0C121D] p-4 text-white border border-emerald-500/30 flex flex-col justify-between gap-3 h-full shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[10px] font-mono">
                        <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          CNR: DLHC010048212026
                        </span>
                        <span className="text-slate-400">eCourts Concordance</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 space-y-1.5 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-emerald-300">
                          <span>§ 112 BNS vs IPC § 302</span>
                          <span className="text-[10px] bg-emerald-950 px-1.5 py-0.2 rounded border border-emerald-500/40">MATCH</span>
                        </div>
                        <p className="text-slate-400 text-[10px] leading-relaxed">
                          Concordance verified: 1 July 2024 transition threshold applied. Zero hallucinated case laws.
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
                        <span>SHA-256: 7f8a...b4e2</span>
                        <span className="text-emerald-400 font-semibold">100% Deterministic</span>
                      </div>
                    </div>
                  ),
                },
                {
                  num: '02',
                  tag: 'NSE Oracles',
                  title: 'Market & Trading Quant',
                  desc: 'High-frequency NSE & BSE order-book tick streaming, option volatility skew profiling, and structured Taurus vs. Ursa debate consensus with explicit invalidation rules.',
                  link: '/agents/market-intelligence',
                  pills: [
                    { icon: 'trending_up', label: 'NSE Order-Book Oracles' },
                    { icon: 'analytics', label: 'Options Skew Profiling' },
                    { icon: 'swap_horiz', label: 'Taurus vs Ursa Debate' },
                  ],
                  preview: (
                    <div className="rounded-2xl bg-[#090E17] p-4 text-white border border-teal-500/30 flex flex-col justify-between gap-3 h-full shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                        <span className="text-teal-400 font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                          NSE: BANKNIFTY 51,248
                        </span>
                        <span className="text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">▲ +1.42%</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[10px]">
                        <div className="flex justify-between text-slate-400">
                          <span>PCR Ratio: 1.14</span>
                          <span className="text-emerald-400">Max Pain: ₹51,000</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                          <div className="h-full bg-emerald-500" style={{ width: '74%' }} />
                          <div className="h-full bg-rose-500" style={{ width: '26%' }} />
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400">
                          <span className="text-emerald-400 font-semibold">Taurus Bull: 74%</span>
                          <span className="text-rose-400">Ursa Bear: 26%</span>
                        </div>
                      </div>
                      <div className="p-2 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-slate-300">
                        Invalidation Trigger: 15-min candle close below 50,850 support.
                      </div>
                    </div>
                  ),
                },
                {
                  num: '03',
                  tag: 'Linux VM',
                  title: 'Dev Studio Agent',
                  desc: 'Autonomous full-stack engineering in isolated Linux container VMs. Generates accessible React/Node applications, executes shell tests, and produces live interactive previews.',
                  link: '/agents/dev-studio',
                  pills: [
                    { icon: 'terminal', label: 'Isolated Container VM' },
                    { icon: 'code_blocks', label: 'Full-Stack Code Gen' },
                    { icon: 'speed', label: '0.04s Boot & Test' },
                  ],
                  preview: (
                    <div className="rounded-2xl bg-[#0B131E] p-4 text-white border border-cyan-500/30 flex flex-col justify-between gap-3 h-full shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                        <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                          <span className="ml-1 text-slate-300">SovereignVM.tsx</span>
                        </span>
                        <span className="text-cyan-300 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-500/40">Boot 0.04s</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/70 font-mono text-[10px] leading-relaxed text-slate-300 space-y-1">
                        <div><span className="text-purple-400">const</span> client = <span className="text-amber-300">initEnclave</span>();</div>
                        <div><span className="text-purple-400">await</span> client.<span className="text-cyan-300">verifyAST</span>();</div>
                        <div className="text-emerald-400 font-bold">✓ 0 Errors • WCAG AA Accessible</div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
                        <span className="text-emerald-400 font-semibold">● 60 FPS Rendered</span>
                        <span>React 19 Stable</span>
                      </div>
                    </div>
                  ),
                },
                {
                  num: '04',
                  tag: 'Cloud VPC',
                  title: 'System Architect Agent',
                  desc: 'Pragmatic distributed infrastructure blueprints. Applies "Simplicity Before Complexity" principles to design high-availability VPCs, API routing, and 10x scale bottleneck models.',
                  link: '/agents',
                  pills: [
                    { icon: 'schema', label: 'Simplicity Gateway' },
                    { icon: 'cloud_done', label: 'ap-south-1 Topology' },
                    { icon: 'hub', label: '10x Bottleneck Analysis' },
                  ],
                  preview: (
                    <div className="rounded-2xl bg-[#0D1522] p-4 text-white border border-indigo-500/30 flex flex-col justify-between gap-3 h-full shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                        <span className="text-indigo-400 font-bold">Cloud VPC Blueprint</span>
                        <span className="text-emerald-400">HA Active</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[10px]">
                        <div className="p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Edge Gateway</span>
                          <span className="text-indigo-300">mTLS • 0.28ms</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Enclave Consensus Mesh</span>
                          <span className="text-emerald-400">Zero-Egress Locked</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
                        <span>Zero Single Point of Failure</span>
                        <span className="text-indigo-400">99.99% SLA</span>
                      </div>
                    </div>
                  ),
                },
                {
                  num: '05',
                  tag: 'Symbolic Engine',
                  title: 'Mathematics & Logic',
                  desc: 'Dual-pass computational rigor: exact closed-form symbolic derivations via SymPy cross-checked independently with SciPy/mpmath numerical solvers to eliminate arithmetic drift.',
                  link: '/agents',
                  pills: [
                    { icon: 'functions', label: 'SymPy Symbolic Proofs' },
                    { icon: 'calculate', label: 'Numerical Cross-Gate' },
                    { icon: 'verified', label: 'Zero Mental Math Drift' },
                  ],
                  preview: (
                    <div className="rounded-2xl bg-[#0F1420] p-4 text-white border border-purple-500/30 flex flex-col justify-between gap-3 h-full shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                        <span className="text-purple-400 font-bold">Symbolic Calculus Gate</span>
                        <span className="text-emerald-400">Q.E.D. Verified</span>
                      </div>
                      <div className="p-3 rounded-lg bg-black/60 border border-white/5 font-mono text-[11px] text-center text-amber-200">
                        ∫₀^∞ (x³ / (eˣ - 1)) dx = π⁴ / 15
                      </div>
                      <div className="p-2 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-slate-300 flex justify-between">
                        <span>Numerical Residual:</span>
                        <span className="text-emerald-400 font-bold">ε &lt; 10⁻¹⁵</span>
                      </div>
                    </div>
                  ),
                },
                {
                  num: '06',
                  tag: 'Recursive DAG',
                  title: 'Deep Research Engine',
                  desc: 'Autonomous multi-step hypothesis expansion across recursive directed acyclic graphs (DAG). Indexes 350+ global industry filings and produces comprehensive risk-weighted memos.',
                  link: '/agents/research',
                  pills: [
                    { icon: 'account_tree', label: 'Recursive DAG Tree' },
                    { icon: 'menu_book', label: '350+ Global Filings' },
                    { icon: 'fact_check', label: 'Citation Evidence Chain' },
                  ],
                  preview: (
                    <div className="rounded-2xl bg-[#09141E] p-4 text-white border border-teal-500/30 flex flex-col justify-between gap-3 h-full shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                        <span className="text-teal-400 font-bold">DAG Hypothesis Tree</span>
                        <span className="text-teal-300">4 Branches Explored</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[10px]">
                        <div className="p-2 rounded bg-white/5 border border-white/5 text-slate-300">
                          ● Hypothesis 1: European CBAM Tariff Sensitivity
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/5 text-slate-300">
                          ● Hypothesis 2: Capex Moat vs Indian Electrolyzer Scale
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
                        <span className="text-emerald-400 font-semibold">28 Filings Grounded</span>
                        <span>99.4% Confidence</span>
                      </div>
                    </div>
                  ),
                },
                {
                  num: '07',
                  tag: '<300ms Live',
                  title: 'Fast Research Engine',
                  desc: 'Sub-second real-time indexing pipeline connected to live regulatory oracles (RBI circulars, SEBI notifications, MCA gazettes). Provides verified answers with exact timestamps.',
                  link: '/agents/research',
                  pills: [
                    { icon: 'bolt', label: 'Sub-300ms Query Latency' },
                    { icon: 'rss_feed', label: 'Live Gazette Streaming' },
                    { icon: 'schedule', label: 'Timestamped Citations' },
                  ],
                  preview: (
                    <div className="rounded-2xl bg-[#0B151F] p-4 text-white border border-amber-500/30 flex flex-col justify-between gap-3 h-full shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                        <span className="text-amber-400 font-bold">Live Regulatory Feed</span>
                        <span className="text-emerald-400 animate-pulse">● LIVE 184ms</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[10px]">
                        <div className="p-1.5 rounded bg-white/5 text-slate-300 flex justify-between">
                          <span>RBI DLG Circular 2026</span>
                          <span className="text-amber-400">210ms</span>
                        </div>
                        <div className="p-1.5 rounded bg-white/5 text-slate-300 flex justify-between">
                          <span>SEBI F&amp;O Lot Size Gazette</span>
                          <span className="text-amber-400">164ms</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
                        <span>350+ Feeds Monitored</span>
                        <span className="text-emerald-400 font-semibold">Zero Hallucination</span>
                      </div>
                    </div>
                  ),
                },
                {
                  num: '08',
                  tag: 'Multilingual',
                  title: 'General Reasoning & Coordination',
                  desc: 'High-throughput strategic ideation and cross-agent coordination across 12 Indic languages and English. Manages high-level executive drafting with zero context drift.',
                  link: '/agents',
                  pills: [
                    { icon: 'translate', label: '12 Indic Languages' },
                    { icon: 'forum', label: 'Executive Synthesis' },
                    { icon: 'alt_route', label: 'Autonomous Routing' },
                  ],
                  preview: (
                    <div className="rounded-2xl bg-[#11131F] p-4 text-white border border-purple-500/30 flex flex-col justify-between gap-3 h-full shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                        <span className="text-purple-400 font-bold">Multilingual Context Mesh</span>
                        <span className="text-slate-400">Indic Core</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/5 space-y-1 font-mono text-[10px]">
                        <p className="text-amber-300 font-medium">हिंदी • தமிழ் • ગુજરાતી • বাংলা</p>
                        <p className="text-slate-400 leading-relaxed text-[9px]">
                          Native syntactic alignment without double-translation hallucinations.
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
                        <span className="text-emerald-400 font-semibold">100% Context Retention</span>
                        <span>Consensus Node</span>
                      </div>
                    </div>
                  ),
                },
                {
                  num: '09',
                  tag: 'Neural OCR',
                  title: 'Doc Intelligence & OCR',
                  desc: 'High-fidelity parser for 200+ page scanned PDFs, handwritten records, and financial balance sheets. Extracts tabular structures and performs clause-by-clause risk audits.',
                  link: '/agents/document-intelligence',
                  pills: [
                    { icon: 'document_scanner', label: '200+ Page Batch Ingestion' },
                    { icon: 'table_chart', label: 'Financial Table Extraction' },
                    { icon: 'policy', label: 'Contract Redline Audits' },
                  ],
                  preview: (
                    <div className="rounded-2xl bg-[#0E161C] p-4 text-white border border-teal-500/30 flex flex-col justify-between gap-3 h-full shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                        <span className="text-teal-400 font-bold">Neural OCR Extractor</span>
                        <span className="text-emerald-400">99.8% Precision</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[10px]">
                        <div className="p-2 rounded bg-white/5 border border-white/5 flex justify-between text-slate-300">
                          <span>MSA_Master_Agreement.pdf</span>
                          <span className="text-teal-300">248 Pages</span>
                        </div>
                        <div className="p-2 rounded bg-rose-950/50 border border-rose-500/30 text-rose-300 text-[9px]">
                          Flagged §14.2: Uncapped 10x liability limit exceeds playbook.
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
                        <span>XLSX &amp; DOCX Export Ready</span>
                        <span className="text-emerald-400 font-semibold">Verified</span>
                      </div>
                    </div>
                  ),
                },
                {
                  num: '10',
                  tag: 'Timeline OCR',
                  title: 'Video Analyser & Vision',
                  desc: 'Multi-hour video indexing with synchronized speech-to-text diarization and slide OCR. Quickly query earnings calls, architectural walkthroughs, and legal depositions.',
                  link: '/agents',
                  pills: [
                    { icon: 'smart_display', label: 'Frame-by-Frame OCR' },
                    { icon: 'mic', label: 'Speaker Diarization' },
                    { icon: 'av_timer', label: 'Keyframe Jump Search' },
                  ],
                  preview: (
                    <div className="rounded-2xl bg-[#14121F] p-4 text-white border border-purple-500/30 flex flex-col justify-between gap-3 h-full shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                        <span className="text-purple-400 font-bold">Multimodal Timeline</span>
                        <span className="text-slate-400">01:14:22 Indexed</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[10px]">
                        <div className="p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                          <span className="text-slate-300">00:14:10 • Q3 CapEx Waterfall</span>
                          <span className="text-purple-300">Slide OCR</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                          <span className="text-slate-300">00:32:45 • RBI Compliance Risk</span>
                          <span className="text-emerald-400">Speaker 2</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
                        <span>Jump-to-Timestamp Active</span>
                        <span className="text-purple-400 font-semibold">Gemini Vision</span>
                      </div>
                    </div>
                  ),
                },
              ].map((agent, i) => (
                <div
                  key={agent.num}
                  className="sticky rounded-[28px] sm:rounded-[36px] bg-white border border-[#E6E4DD] p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 text-left"
                  style={{
                    top: `calc(90px + ${i * 7}px)`,
                    zIndex: i + 1,
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
                    {/* Left Column of Card */}
                    <div className="md:col-span-7 flex flex-col justify-between">
                      <div>


                        {/* Title */}
                        <h3 className="font-sans text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#07091B] tracking-tight mb-3">
                          {agent.title}.
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                          {agent.desc}
                        </p>

                        {/* Ruboz-style 3 Feature Pills */}
                        <div className="flex flex-wrap gap-2.5 my-5">
                          {agent.pills.map((pill, pIdx) => (
                            <div
                              key={pIdx}
                              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-semibold text-slate-800 shadow-2xs"
                            >
                              <span className="material-symbols-outlined text-[16px] text-[#1E3A3A]">
                                {pill.icon}
                              </span>
                              <span>{pill.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Ruboz-style Terracotta Action Button with Dot-to-Arrow Expand on Hover */}
                      <div className="pt-3">
                        <Link
                          to={agent.link}
                          className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-2 rounded-full bg-[#D97736] hover:bg-[#c46526] text-white font-sans text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] self-start"
                        >
                          <span>Launch Specialist</span>
                          <span className="relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300">
                            {/* Default State: Solid White Dot */}
                            <span className="w-2.5 h-2.5 rounded-full bg-white transition-all duration-200 group-hover:scale-0 group-hover:opacity-0" />
                            
                            {/* Hover State: Expanded White Circle with Arrow Icon */}
                            <span className="absolute inset-0 flex items-center justify-center rounded-full bg-white text-[#07091B] opacity-0 scale-50 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 shadow-xs">
                              <span className="material-symbols-outlined text-[15px] font-bold">arrow_forward</span>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column of Card: Visual Interactive Preview */}
                    <div className="md:col-span-5 flex flex-col justify-center">
                      <div className="h-full min-h-[220px]">
                        {agent.preview}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. SECTION 9: TRANSPARENT INR PRICING
      ====================================================================== */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28" id="pricing">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 font-bold">
            Transparent Pricing
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight mt-1 text-balance">
            Predictable INR pricing. Rollover compute.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Starter */}
          <div className="p-7 rounded-3xl bg-white border border-[#E6E4DD] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-slate-500">Starter</span>
              <div className="flex items-baseline gap-1 mt-2 mb-3">
                <span className="text-4xl font-extrabold text-[#18181B]">₹999</span>
                <span className="text-slate-500 text-sm font-sans">/ mo</span>
              </div>
              <p className="font-sans text-xs text-slate-600 mb-6">
                For individual quants and developers exploring sovereign AI.
              </p>
              <ul className="space-y-2.5 font-sans text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">check</span>
                  <strong>1,500 Compute Credits</strong> / month
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">check</span>
                  Fast Research &amp; Dev Studio
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">check</span>
                  Monthly Rollover Guarantee
                </li>
              </ul>
            </div>
            <Link
              to="/welcome"
              className="mt-8 w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#18181B] font-sans text-xs font-bold text-center transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Pro */}
          <div className="p-7 rounded-3xl bg-white border-2 border-amber-600/90 flex flex-col justify-between relative scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-600 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <span className="font-mono text-xs uppercase font-bold text-amber-700">Professional</span>
              <div className="flex items-baseline gap-1 mt-2 mb-3">
                <span className="text-4xl font-extrabold text-[#18181B]">₹2,499</span>
                <span className="text-slate-500 text-sm font-sans">/ mo</span>
              </div>
              <p className="font-sans text-xs text-slate-600 mb-6">
                For legal counsels and hedge fund quants requiring full autonomy.
              </p>
              <ul className="space-y-2.5 font-sans text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">check</span>
                  <strong>5,000 Compute Credits</strong> / month
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">check</span>
                  All 10 Specialized Minds
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">check</span>
                  Deep Research Trees &amp; Citations
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">check</span>
                  Full Autonomous Task Hub Scheduler
                </li>
              </ul>
            </div>
            <Link
              to="/welcome"
              className="mt-8 w-full py-2.5 rounded-full bg-[#1E3A3A] hover:bg-[#142929] text-white font-sans text-xs font-bold text-center transition-colors"
            >
              Start 14-Day Free Trial
            </Link>
          </div>

          {/* Enterprise */}
          <div className="p-7 rounded-3xl bg-white border border-[#E6E4DD] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-slate-500">Enterprise</span>
              <div className="flex items-baseline gap-1 mt-2 mb-3">
                <span className="text-4xl font-extrabold text-[#18181B]">Custom</span>
              </div>
              <p className="font-sans text-xs text-slate-600 mb-6">
                For banks, enterprises, and statutory bodies requiring VPC isolation.
              </p>
              <ul className="space-y-2.5 font-sans text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">check</span>
                  Unlimited Custom Compute Enclaves
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">check</span>
                  On-Premise / Sovereign Cloud VPC
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">check</span>
                  DPDP Non-Repudiation Audit Logs
                </li>
              </ul>
            </div>
            <Link
              to="/welcome"
              className="mt-8 w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#18181B] font-sans text-xs font-bold text-center transition-colors"
            >
              Contact Enterprise Desk
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. SECTION 10: FREQUENTLY ASKED QUESTIONS & BOTTOM CTA
      ====================================================================== */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-purple-300 bg-purple-50/50 text-purple-600 text-xs font-mono font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-2xs">
            FAQ
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#07091B] tracking-tight leading-tight text-balance mb-4 sm:mb-5">
            Answer That Keep{' '}
            <span className="text-[#7C3AED] italic font-serif font-medium">You Flowing</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed text-balance">
            From capturing conversations to syncing with your tools, find quick answers to how Grizon AI works.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E6E4DD] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-sans text-sm sm:text-base font-bold text-[#18181B] flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-[20px] text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 font-sans text-xs sm:text-sm text-[#52525B] leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="rounded-[32px] sm:rounded-[36px] bg-[#1E3A3A] p-8 sm:p-12 text-center text-white relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400 font-bold mb-2">
              Start Free • Zero Training Enclave
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 text-balance">
              Step into your sovereign intelligence workspace.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 text-balance">
              Join enterprise legal counsels, quantitative funds, and software teams building with deterministic AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
              <Link
                to="/welcome"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1E3A3A] font-sans text-xs sm:text-sm font-bold hover:bg-slate-100 transition-all active:scale-[0.98]"
              >
                <span>Initialize Workspace</span>
                <span className="material-symbols-outlined text-[16px]">bolt</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
