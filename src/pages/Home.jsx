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
          2. SECTION 2: AUTONOMOUS MULTI-AGENT COPILOT & FOUNDER WORKBENCH (Ruboz Pattern)
      ====================================================================== */}
      <section className="relative w-full bg-[#FAF9F5] py-20 lg:py-28 border-b border-[#E6E4DD] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E6E4DD] shadow-sm mb-5">
              <span className="material-symbols-outlined text-[#D97736] text-[18px]">psychology</span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#07091B] font-bold">
                Decision Intelligence • Multi-Agent Copilot
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07091B] tracking-tight leading-[1.15]">
              Build Smarter AI With Multi-Agent Intelligence.
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Coordinate deterministic statutory legal oracles, live NSE/BSE quant delta profiles, and sandboxed Linux VMs directly from one sovereign founder surface. Zero generic guesswork. Zero retention.
            </p>
          </div>

          {/* Device Showcase (Ruboz Layout with Real GriZon Phone) */}
          <div className="relative mt-8 lg:mt-16 w-full max-w-6xl mx-auto flex items-center justify-center min-h-[480px] sm:min-h-[580px] lg:min-h-[660px]">
            {/* Ambient Background Elliptical Orbit Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
              <svg viewBox="0 0 880 580" className="w-full h-full max-w-5xl opacity-40">
                <ellipse cx="440" cy="290" rx="390" ry="230" fill="none" stroke="#E6E4DD" strokeWidth="1.5" strokeDasharray="4 6" />
                <ellipse cx="440" cy="290" rx="270" ry="160" fill="none" stroke="#E6E4DD" strokeWidth="1" />
              </svg>
            </div>



            {/* Center: Hand holding GriZon Real Phone */}
            <div className="relative z-10 w-full max-w-2xl sm:max-w-4xl lg:max-w-5xl mx-auto flex justify-center">
              <img
                src="/grizon-ruboz-phone.png?v=align2"
                alt="GriZon AI Mobile Copilot"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm"
              />
            </div>

            {/* Right: Floating Pill 'Reply with AI' */}
            <div className="hidden sm:block absolute right-4 md:right-8 lg:right-16 bottom-20 md:bottom-28 lg:bottom-32 z-10 animate-float-reverse">
              <img
                src="/ruboz/reply-with-ai.png"
                alt="Reply with AI"
                className="w-28 sm:w-32 lg:w-36 h-auto object-contain drop-shadow-sm select-none pointer-events-none"
              />
            </div>

            {/* Right Bottom: Pill 'Intelligent agents' */}
            <div className="hidden sm:block absolute right-4 md:right-8 lg:right-16 bottom-4 md:bottom-6 z-20 animate-float-slow">
              <img
                src="/ruboz/p2.webp"
                alt="Intelligent agents"
                className="w-32 sm:w-36 lg:w-44 h-auto object-contain drop-shadow-sm select-none pointer-events-none"
              />
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
