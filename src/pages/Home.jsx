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
    <div className="w-full flex flex-col bg-white text-[#07091B] selection:bg-[#6630E4]/15 selection:text-[#6630E4] font-sans">
      {/* =====================================================================
          1. HERO SECTION: OptimAI Layout (3D Fluted Ribbed Backdrop + Flanking Floating Small Boxes)
          - Center Headline & Friendly Copy
          - 3 Left Floating Cards (DAG Research, Dev Studio Sandbox, Statutory Oracles)
          - 3 Right Floating Cards (10+ Prebuilt Agents, 300+ Verified Feeds, 44+ High Courts)
          - 3D Fluted Vertical Cylinder Wall Background with Soft Violet/Indigo Lighting
          - Dual Pill Buttons with Ambient Underlight Glow
      ====================================================================== */}
      <section className="relative w-full overflow-hidden pt-8 sm:pt-14 pb-4 sm:pb-6 bg-gradient-to-b from-[#FAF9F5] via-white to-[#FAF9F5]">
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
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#FAF9F5]/70 to-[#FAF9F5] pointer-events-none z-1" />
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
                <div className="font-sans text-4xl font-extrabold text-[#07091B] tracking-tight">
                  99.4%
                </div>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Zero-Hallucination Grounding
                </p>
              </div>

              {/* Card 2: Execution Latency (Middle Left - Bleeding into Margin) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.06)] text-left w-60 -ml-8 hover:ml-0 hover:shadow-lg transition-all duration-300 animate-float-mid">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  Execution Latency
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#07091B] tracking-tight">
                  &lt;50ms
                </div>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Isolated Container VM Sandbox
                </p>
              </div>

              {/* Card 3: Sovereign Enclave (Bottom Left) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left w-56 transform rotate-1 hover:rotate-0 hover:shadow-lg transition-all duration-300 animate-float-fast">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  Sovereign Enclave
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#07091B] tracking-tight">
                  256-Bit
                </div>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Zero Data Retention Security
                </p>
              </div>
            </div>

            {/* CENTER COLUMN: OptimAI Centered Headline, Clear Subtitle & Dual Pill Buttons */}
            <div className="lg:col-span-6 text-center flex flex-col items-center">
              {/* Eyebrow with hairline accents */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-10 sm:w-16 h-[1.5px] bg-[#976DF8]/50 rounded-full" />
                <span className="font-sans text-xs sm:text-sm font-bold text-[#6630E4] tracking-wide">
                  Purpose-Built Multi-Agent Platform
                </span>
                <span className="w-10 sm:w-16 h-[1.5px] bg-[#976DF8]/50 rounded-full" />
              </div>

              {/* Main Headline (Minimal, High-Impact & Professional) */}
              <h1 className="font-sans text-3xl sm:text-5xl lg:text-[48px] xl:text-[52px] font-extrabold text-[#07091B] tracking-[-0.03em] leading-[1.12] mb-5 text-balance text-center max-w-2xl">
                Autonomous Intelligence <br />
                for Modern Enterprise.
              </h1>

              {/* Simple, Clear, Professional Subtitle */}
              <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-8 text-center text-balance font-normal">
                Specialized AI agents for research, code, financial markets, and legal compliance. Always deterministic, zero hallucinations.
              </p>

              {/* Dual Action Buttons (OptimAI Style - Grizon Logo Colors) */}
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-4 w-full sm:w-auto">
                {/* Left Button: Grizon Logo Royal Violet Pill */}
                <Link
                  to="/welcome"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#6630E4] hover:bg-[#5221C6] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(102,48,228,0.28)] hover:shadow-[0_6px_20px_rgba(102,48,228,0.36)] transition-all active:scale-[0.98]"
                >
                  <span>Initialize Free Workspace</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>

                {/* Right Button: Crisp Secondary White Pill with Brand Hover */}
                <Link
                  to="/agents"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#07091B] border border-[#E6E4DD] hover:border-[#6630E4] hover:text-[#6630E4] font-semibold text-sm transition-all active:scale-[0.98] shadow-2xs"
                >
                  <span>Explore 10+ Specialists</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>

              {/* Glowing Ambient Diffuse Light beneath buttons matching Grizon Logo */}
              <div className="w-72 sm:w-96 h-10 -mt-5 mx-auto rounded-full bg-gradient-to-r from-[#976DF8]/30 via-[#6630E4]/30 to-[#976DF8]/20 blur-2xl pointer-events-none" />

            </div>

            {/* RIGHT FLANKING FLOATING SMALL BOXES */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 -mr-8 xl:-mr-12 pointer-events-auto select-none">
              {/* Card 1: 10+ Prebuilt Agents (Top Right) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left w-56 transform rotate-1 hover:rotate-0 hover:shadow-lg transition-all duration-300 animate-float-mid">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  Prebuilt Agents
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#07091B] tracking-tight">
                  10+
                </div>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Legal, Quants, Dev &amp; Research
                </p>
              </div>

              {/* Card 2: 300+ Verified Statutory Feeds (Middle Right - Bleeding into Margin) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.06)] text-left w-60 -mr-8 hover:mr-0 hover:shadow-lg transition-all duration-300 animate-float-slow">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  Total Sections &amp; Oracles
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#07091B] tracking-tight">
                  300+
                </div>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Live Oracles &amp; Gazette Feeds
                </p>
              </div>

              {/* Card 3: 44+ High Courts Indexed (Bottom Right) */}
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left w-56 transform -rotate-1 hover:rotate-0 hover:shadow-lg transition-all duration-300 animate-float-fast">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-2">
                  High Courts Indexed
                </p>
                <div className="font-sans text-4xl font-extrabold text-[#07091B] tracking-tight">
                  44+
                </div>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  16-Digit CNR Conformance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Blended Hairline Divider bridging Hero into Section 2 */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18 lg:mt-20 relative z-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6E4DD] to-transparent" />
        </div>
      </section>

      {/* =====================================================================
          2. SECTION 2: AUTONOMOUS MULTI-AGENT GRIZON AI & FOUNDER WORKBENCH (Ruboz Pattern)
      ====================================================================== */}
      <section className="relative w-full bg-[#FAF9F5] pt-12 sm:pt-14 lg:pt-16 pb-20 lg:pb-28 border-b border-[#E6E4DD] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07091B] tracking-tight leading-[1.15]">
              Build Smarter AI With Multi-Agent Intelligence.
            </h2>

            <p className="font-sans text-base text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
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
                alt="GriZon AI Mobile Interface"
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
          3. SECTION 3: WHY GRIZON AI — 6 BENTO CARDS WITH AUTHORITY STATEMENTS
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#6630E4] font-bold">
              Why GriZon AI
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight mt-1.5">
              Agents built for the job, not generic chat.
            </h2>
          </div>
          <p className="font-sans text-base text-slate-600 max-w-md leading-relaxed">
            Stop juggling generic chatbots. Pick a specialized agent engineered with dedicated toolchains — or let Auto Mode route your query dynamically.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Auto Mode Routing */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">alt_route</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Auto Mode Routing</h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Describe the task once. Auto Mode evaluates intent, token count, and data sensitivity to dispatch the best eligible specialized agent.
              </p>
            </div>
          </div>

          {/* Card 2: Dev Studio */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">terminal</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Dev Studio &amp; Linux Sandbox</h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Write, debug, and execute code in isolated container VMs with live HTML/CSS canvas preview for frontend components and telemetry apps.
              </p>
            </div>
          </div>

          {/* Card 3: Deep Research */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">psychology</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Research with Footnote Citations</h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Fast Research for instant indexed queries, Deep Research for multi-step structured synthesis with risk analysis and verified footnote references.
              </p>
            </div>
          </div>

          {/* Card 4: Market Analyst & Oracles */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">monitoring</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Market Analyst &amp; Oracles</h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Deep dive into equities and crypto fundamentals with algorithmic Bull vs Bear debates, balance-sheet extraction, and downloadable valuation summaries.
              </p>
            </div>
          </div>

          {/* Card 5: Doc Intelligence & Vision */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">description</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Doc Intelligence &amp; Vision</h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Extract granular multi-page tables from PDFs or upload entire video footage to index events, transcribe audio, and query scene timelines.
              </p>
            </div>
          </div>

          {/* Card 6: Sovereign Credits */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#07091B] mb-2">Credits You Can See</h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F1FD] border border-[#E8E0FB] shadow-2xs text-xs font-semibold text-[#6630E4]">
                <span className="material-symbols-outlined text-[16px] text-[#6630E4]">rocket_launch</span>
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
                    <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center h-full min-h-[220px] p-8">
                      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[240px]" xmlns="http://www.w3.org/2000/svg">
                        {/* Scale of Justice */}
                        <rect x="95" y="20" width="10" height="100" rx="5" fill="#1E3A3A" opacity="0.15" />
                        <circle cx="100" cy="20" r="8" fill="#1E3A3A" opacity="0.25" />
                        <line x1="40" y1="55" x2="160" y2="55" stroke="#1E3A3A" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                        {/* Left pan */}
                        <path d="M30 55 L50 55 L45 80 L35 80 Z" fill="#D97736" opacity="0.25" />
                        <line x1="40" y1="55" x2="40" y2="80" stroke="#D97736" strokeWidth="1" opacity="0.3" />
                        {/* Right pan */}
                        <path d="M150 55 L170 55 L165 80 L155 80 Z" fill="#6630E4" opacity="0.25" />
                        <line x1="160" y1="55" x2="160" y2="80" stroke="#6630E4" strokeWidth="1" opacity="0.3" />
                        {/* Checkmark badge */}
                        <circle cx="100" cy="115" r="16" fill="#1E3A3A" opacity="0.1" />
                        <path d="M92 115 L98 121 L110 109" stroke="#1E3A3A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                        {/* Doc lines */}
                        <rect x="60" y="135" width="80" height="2" rx="1" fill="#E6E4DD" />
                        <rect x="75" y="142" width="50" height="2" rx="1" fill="#E6E4DD" />
                      </svg>
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
                    <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center h-full min-h-[220px] p-8">
                      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[240px]" xmlns="http://www.w3.org/2000/svg">
                        {/* Upward trend line */}
                        <polyline points="20,130 50,110 80,100 110,80 140,50 170,30" stroke="#1E3A3A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
                        {/* Area fill under line */}
                        <polygon points="20,130 50,110 80,100 110,80 140,50 170,30 170,140 20,140" fill="#1E3A3A" opacity="0.06" />
                        {/* Data dots */}
                        <circle cx="50" cy="110" r="4" fill="#1E3A3A" opacity="0.3" />
                        <circle cx="110" cy="80" r="4" fill="#1E3A3A" opacity="0.3" />
                        <circle cx="170" cy="30" r="5" fill="#D97736" opacity="0.6" />
                        {/* Candlestick bars */}
                        <rect x="30" y="95" width="6" height="25" rx="1" fill="#6630E4" opacity="0.15" />
                        <rect x="50" y="85" width="6" height="30" rx="1" fill="#6630E4" opacity="0.2" />
                        <rect x="70" y="78" width="6" height="35" rx="1" fill="#6630E4" opacity="0.25" />
                        <rect x="90" y="70" width="6" height="40" rx="1" fill="#D97736" opacity="0.2" />
                        <rect x="110" y="60" width="6" height="45" rx="1" fill="#D97736" opacity="0.25" />
                        <rect x="130" y="48" width="6" height="50" rx="1" fill="#1E3A3A" opacity="0.2" />
                        <rect x="150" y="35" width="6" height="55" rx="1" fill="#1E3A3A" opacity="0.25" />
                        {/* X axis */}
                        <line x1="15" y1="140" x2="185" y2="140" stroke="#E6E4DD" strokeWidth="1.5" />
                      </svg>
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
                    <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center h-full min-h-[220px] p-8">
                      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[240px]" xmlns="http://www.w3.org/2000/svg">
                        {/* Code editor window */}
                        <rect x="15" y="15" width="170" height="110" rx="12" fill="white" stroke="#E6E4DD" strokeWidth="1.5" />
                        {/* Window dots */}
                        <circle cx="30" cy="28" r="3.5" fill="#F87171" opacity="0.6" />
                        <circle cx="40" cy="28" r="3.5" fill="#FBBF24" opacity="0.6" />
                        <circle cx="50" cy="28" r="3.5" fill="#34D399" opacity="0.6" />
                        {/* Code lines */}
                        <rect x="30" y="45" width="50" height="3" rx="1.5" fill="#6630E4" opacity="0.25" />
                        <rect x="30" y="55" width="80" height="3" rx="1.5" fill="#1E3A3A" opacity="0.15" />
                        <rect x="40" y="65" width="60" height="3" rx="1.5" fill="#D97736" opacity="0.2" />
                        <rect x="40" y="75" width="45" height="3" rx="1.5" fill="#6630E4" opacity="0.15" />
                        <rect x="30" y="85" width="70" height="3" rx="1.5" fill="#1E3A3A" opacity="0.12" />
                        <rect x="40" y="95" width="35" height="3" rx="1.5" fill="#6630E4" opacity="0.15" />
                        <rect x="30" y="105" width="20" height="3" rx="1.5" fill="#1E3A3A" opacity="0.1" />
                        {/* Play / run button */}
                        <circle cx="155" cy="28" r="6" fill="#6630E4" opacity="0.2" />
                        <polygon points="153,25 159,28 153,31" fill="#6630E4" opacity="0.5" />
                        {/* Checkmark below */}
                        <circle cx="100" cy="142" r="10" fill="#1E3A3A" opacity="0.08" />
                        <path d="M95 142 L99 146 L106 138" stroke="#1E3A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
                      </svg>
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
                    <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center h-full min-h-[220px] p-8">
                      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[240px]" xmlns="http://www.w3.org/2000/svg">
                        {/* Cloud shape */}
                        <ellipse cx="100" cy="38" rx="45" ry="22" fill="#1E3A3A" opacity="0.08" />
                        <ellipse cx="75" cy="42" rx="25" ry="18" fill="#1E3A3A" opacity="0.06" />
                        <ellipse cx="130" cy="40" rx="28" ry="16" fill="#1E3A3A" opacity="0.06" />
                        {/* Nodes connected */}
                        <circle cx="100" cy="38" r="10" fill="#1E3A3A" opacity="0.15" stroke="#1E3A3A" strokeWidth="1" opacity="0.2" />
                        <circle cx="55" cy="90" r="10" fill="#6630E4" opacity="0.15" stroke="#6630E4" strokeWidth="1" opacity="0.2" />
                        <circle cx="145" cy="90" r="10" fill="#6630E4" opacity="0.15" stroke="#6630E4" strokeWidth="1" opacity="0.2" />
                        <circle cx="100" cy="130" r="10" fill="#D97736" opacity="0.15" stroke="#D97736" strokeWidth="1" opacity="0.2" />
                        {/* Connection lines */}
                        <line x1="100" y1="48" x2="55" y2="80" stroke="#1E3A3A" strokeWidth="1.5" opacity="0.15" />
                        <line x1="100" y1="48" x2="145" y2="80" stroke="#1E3A3A" strokeWidth="1.5" opacity="0.15" />
                        <line x1="55" y1="100" x2="100" y2="120" stroke="#6630E4" strokeWidth="1.5" opacity="0.15" />
                        <line x1="145" y1="100" x2="100" y2="120" stroke="#6630E4" strokeWidth="1.5" opacity="0.15" />
                        {/* Small inner icons */}
                        <rect x="94" y="32" width="12" height="12" rx="3" fill="#1E3A3A" opacity="0.3" />
                        <rect x="49" y="84" width="12" height="12" rx="3" fill="#6630E4" opacity="0.3" />
                        <rect x="139" y="84" width="12" height="12" rx="3" fill="#6630E4" opacity="0.3" />
                        <rect x="94" y="124" width="12" height="12" rx="3" fill="#D97736" opacity="0.3" />
                      </svg>
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
                    <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center h-full min-h-[220px] p-8">
                      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[240px]" xmlns="http://www.w3.org/2000/svg">
                        {/* Coordinate axes */}
                        <line x1="30" y1="140" x2="185" y2="140" stroke="#E6E4DD" strokeWidth="1.5" />
                        <line x1="30" y1="15" x2="30" y2="140" stroke="#E6E4DD" strokeWidth="1.5" />
                        {/* Bell curve / Gaussian */}
                        <path d="M30,138 Q50,135 70,120 Q85,100 100,50 Q115,100 130,120 Q150,135 170,138" stroke="#6630E4" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round" />
                        {/* Area under curve */}
                        <path d="M30,138 Q50,135 70,120 Q85,100 100,50 Q115,100 130,120 Q150,135 170,138 L170,140 L30,140 Z" fill="#6630E4" opacity="0.06" />
                        {/* Sigma symbol */}
                        <text x="88" y="32" fontFamily="serif" fontSize="28" fill="#6630E4" opacity="0.2">Σ</text>
                        {/* Grid dots */}
                        {[50,70,90,110,130,150].map((x) => (
                          <circle key={x} cx={x} cy="140" r="2" fill="#E6E4DD" />
                        ))}
                        {[120,100,80,60,40].map((y, i) => (
                          <circle key={y} cx="30" cy={y} r="2" fill="#E6E4DD" />
                        ))}
                        {/* Tangent line at peak */}
                        <line x1="70" y1="50" x2="130" y2="50" stroke="#D97736" strokeWidth="1" strokeDasharray="4 3" opacity="0.35" />
                        {/* Peak dot */}
                        <circle cx="100" cy="50" r="5" fill="#6630E4" opacity="0.35" />
                        {/* Checkmark */}
                        <circle cx="165" cy="25" r="10" fill="#1E3A3A" opacity="0.08" />
                        <path d="M160 25 L164 29 L171 21" stroke="#1E3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
                      </svg>
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
                    <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center h-full min-h-[220px] p-8">
                      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[240px]" xmlns="http://www.w3.org/2000/svg">
                        {/* Root node */}
                        <circle cx="100" cy="25" r="12" fill="#6630E4" opacity="0.2" stroke="#6630E4" strokeWidth="1.5" opacity="0.3" />
                        {/* Level 2 */}
                        <circle cx="55" cy="70" r="9" fill="#1E3A3A" opacity="0.15" stroke="#1E3A3A" strokeWidth="1" opacity="0.2" />
                        <circle cx="145" cy="70" r="9" fill="#1E3A3A" opacity="0.15" stroke="#1E3A3A" strokeWidth="1" opacity="0.2" />
                        {/* Level 3 */}
                        <circle cx="30" cy="115" r="7" fill="#D97736" opacity="0.15" stroke="#D97736" strokeWidth="1" opacity="0.2" />
                        <circle cx="70" cy="115" r="7" fill="#D97736" opacity="0.15" stroke="#D97736" strokeWidth="1" opacity="0.2" />
                        <circle cx="125" cy="115" r="7" fill="#D97736" opacity="0.15" stroke="#D97736" strokeWidth="1" opacity="0.2" />
                        <circle cx="165" cy="115" r="7" fill="#D97736" opacity="0.15" stroke="#D97736" strokeWidth="1" opacity="0.2" />
                        {/* Branches */}
                        <line x1="100" y1="37" x2="55" y2="61" stroke="#6630E4" strokeWidth="1.5" opacity="0.15" />
                        <line x1="100" y1="37" x2="145" y2="61" stroke="#6630E4" strokeWidth="1.5" opacity="0.15" />
                        <line x1="55" y1="79" x2="30" y2="108" stroke="#1E3A3A" strokeWidth="1.5" opacity="0.12" />
                        <line x1="55" y1="79" x2="70" y2="108" stroke="#1E3A3A" strokeWidth="1.5" opacity="0.12" />
                        <line x1="145" y1="79" x2="125" y2="108" stroke="#1E3A3A" strokeWidth="1.5" opacity="0.12" />
                        <line x1="145" y1="79" x2="165" y2="108" stroke="#1E3A3A" strokeWidth="1.5" opacity="0.12" />
                        {/* Leaf dots */}
                        <circle cx="22" cy="140" r="3" fill="#E6E4DD" />
                        <circle cx="38" cy="140" r="3" fill="#E6E4DD" />
                        <circle cx="62" cy="140" r="3" fill="#E6E4DD" />
                        <circle cx="78" cy="140" r="3" fill="#E6E4DD" />
                        <circle cx="118" cy="140" r="3" fill="#E6E4DD" />
                        <circle cx="132" cy="140" r="3" fill="#E6E4DD" />
                        <circle cx="158" cy="140" r="3" fill="#E6E4DD" />
                        <circle cx="172" cy="140" r="3" fill="#E6E4DD" />
                      </svg>
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
                    <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center h-full min-h-[220px] p-8">
                      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[240px]" xmlns="http://www.w3.org/2000/svg">
                        {/* Lightning bolt */}
                        <polygon points="110,10 80,75 100,75 85,150 130,65 108,65 125,10" fill="#D97736" opacity="0.15" stroke="#D97736" strokeWidth="1.5" strokeLinejoin="round" opacity="0.25" />
                        {/* Speed rings */}
                        <circle cx="100" cy="80" r="55" stroke="#D97736" strokeWidth="1" opacity="0.08" fill="none" />
                        <circle cx="100" cy="80" r="40" stroke="#D97736" strokeWidth="1" opacity="0.1" fill="none" />
                        <circle cx="100" cy="80" r="25" stroke="#D97736" strokeWidth="1" opacity="0.12" fill="none" />
                        {/* Live pulse dot */}
                        <circle cx="100" cy="80" r="6" fill="#D97736" opacity="0.3" />
                        <circle cx="100" cy="80" r="3" fill="#D97736" opacity="0.5" />
                        {/* Horizontal feed lines */}
                        <rect x="30" y="140" width="40" height="2" rx="1" fill="#E6E4DD" />
                        <rect x="80" y="140" width="55" height="2" rx="1" fill="#E6E4DD" />
                        <rect x="145" y="140" width="25" height="2" rx="1" fill="#E6E4DD" />
                        <rect x="40" y="148" width="30" height="2" rx="1" fill="#E6E4DD" />
                        <rect x="80" y="148" width="45" height="2" rx="1" fill="#E6E4DD" />
                      </svg>
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
                    <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center h-full min-h-[220px] p-8">
                      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[240px]" xmlns="http://www.w3.org/2000/svg">
                        {/* Central hub */}
                        <circle cx="100" cy="80" r="18" fill="#6630E4" opacity="0.1" stroke="#6630E4" strokeWidth="1.5" opacity="0.2" />
                        <circle cx="100" cy="80" r="8" fill="#6630E4" opacity="0.25" />
                        {/* Orbiting nodes - language dots */}
                        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => {
                          const rad = (angle * Math.PI) / 180;
                          const x = 100 + 55 * Math.cos(rad);
                          const y = 80 + 55 * Math.sin(rad);
                          const colors = ['#1E3A3A', '#D97736', '#6630E4', '#1E3A3A', '#D97736', '#6630E4', '#1E3A3A', '#D97736', '#6630E4'];
                          return (
                            <g key={angle}>
                              <line x1="100" y1="80" x2={x} y2={y} stroke={colors[i]} strokeWidth="1" opacity="0.1" />
                              <circle cx={x} cy={y} r="7" fill={colors[i]} opacity="0.15" stroke={colors[i]} strokeWidth="1" opacity="0.2" />
                            </g>
                          );
                        })}
                        {/* Orbit ring */}
                        <circle cx="100" cy="80" r="55" stroke="#E6E4DD" strokeWidth="1" strokeDasharray="3 5" fill="none" />
                      </svg>
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
                    <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center h-full min-h-[220px] p-8">
                      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[240px]" xmlns="http://www.w3.org/2000/svg">
                        {/* Document page */}
                        <rect x="45" y="10" width="110" height="140" rx="8" fill="white" stroke="#E6E4DD" strokeWidth="1.5" />
                        {/* Page fold */}
                        <path d="M125 10 L155 10 L155 35 L130 35 Q125 35 125 30 Z" fill="#FAF9F5" stroke="#E6E4DD" strokeWidth="1" />
                        {/* Text lines */}
                        <rect x="60" y="30" width="55" height="3" rx="1.5" fill="#07091B" opacity="0.08" />
                        <rect x="60" y="40" width="70" height="3" rx="1.5" fill="#07091B" opacity="0.06" />
                        <rect x="60" y="50" width="40" height="3" rx="1.5" fill="#07091B" opacity="0.06" />
                        {/* Table grid */}
                        <rect x="60" y="65" width="80" height="55" rx="4" fill="none" stroke="#E6E4DD" strokeWidth="1" />
                        <line x1="60" y1="78" x2="140" y2="78" stroke="#E6E4DD" strokeWidth="1" />
                        <line x1="60" y1="91" x2="140" y2="91" stroke="#E6E4DD" strokeWidth="1" />
                        <line x1="60" y1="104" x2="140" y2="104" stroke="#E6E4DD" strokeWidth="1" />
                        <line x1="95" y1="65" x2="95" y2="120" stroke="#E6E4DD" strokeWidth="1" />
                        <line x1="120" y1="65" x2="120" y2="120" stroke="#E6E4DD" strokeWidth="1" />
                        {/* Table cell colors */}
                        <rect x="121" y="79" width="18" height="11" fill="#1E3A3A" opacity="0.08" />
                        <rect x="121" y="92" width="18" height="11" fill="#D97736" opacity="0.1" />
                        <rect x="121" y="105" width="18" height="14" fill="#1E3A3A" opacity="0.08" />
                        {/* Scan line */}
                        <line x1="45" y1="85" x2="155" y2="85" stroke="#6630E4" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 3" />
                        {/* Magnifying glass */}
                        <circle cx="155" cy="130" r="12" stroke="#1E3A3A" strokeWidth="2" opacity="0.15" fill="#1E3A3A" fillOpacity="0.04" />
                        <line x1="163" y1="139" x2="172" y2="148" stroke="#1E3A3A" strokeWidth="2.5" strokeLinecap="round" opacity="0.15" />
                      </svg>
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
                        {/* Number & Tag Pill */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] font-mono text-[11px] font-bold">
                            {agent.num} • {agent.tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-sans text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#07091B] tracking-tight mb-3">
                          {agent.title}.
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-sm text-slate-600 leading-relaxed mb-5">
                          {agent.desc}
                        </p>

                        {/* Ruboz-style 3 Feature Pills */}
                        <div className="flex flex-wrap gap-2.5 my-5">
                          {agent.pills.map((pill, pIdx) => (
                            <div
                              key={pIdx}
                              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-semibold text-slate-800 shadow-2xs"
                            >
                              <span className="material-symbols-outlined text-[16px] text-[#6630E4]">
                                {pill.icon}
                              </span>
                              <span>{pill.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Grizon Brand Violet Action Button with Dot-to-Arrow Expand on Hover */}
                      <div className="pt-3">
                        <Link
                          to={agent.link}
                          className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-[#6630E4] hover:bg-[#5221C6] text-white font-sans text-xs sm:text-sm font-bold transition-all duration-300 shadow-[0_4px_14px_rgba(102,48,228,0.22)] hover:shadow-[0_6px_18px_rgba(102,48,228,0.32)] active:scale-[0.98] self-start"
                        >
                          <span>Launch Specialist</span>
                          <span className="relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300">
                            {/* Default State: Solid White Dot */}
                            <span className="w-2.5 h-2.5 rounded-full bg-white transition-all duration-200 group-hover:scale-0 group-hover:opacity-0" />
                            
                            {/* Hover State: Expanded White Circle with Arrow Icon */}
                            <span className="absolute inset-0 flex items-center justify-center rounded-full bg-white text-[#6630E4] opacity-0 scale-50 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 shadow-xs">
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
          5. SECTION 5: TRANSPARENT INR PRICING
      ====================================================================== */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28" id="pricing">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#6630E4] font-bold">
            Transparent Pricing
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight mt-1 text-balance">
            Predictable INR pricing. Rollover compute.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Starter */}
          <div className="p-7 rounded-3xl bg-white border border-[#E6E4DD] flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-slate-500">Starter</span>
              <div className="flex items-baseline gap-1 mt-2 mb-3">
                <span className="text-4xl font-extrabold text-[#07091B]">₹999</span>
                <span className="text-slate-500 text-sm font-sans">/ mo</span>
              </div>
              <p className="font-sans text-sm text-slate-600 mb-6 leading-relaxed">
                For individual quants and developers exploring sovereign AI.
              </p>
              <ul className="space-y-2.5 font-sans text-sm text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">check</span>
                  <span><strong>1,500 Compute Credits</strong> / month</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">check</span>
                  <span>Fast Research &amp; Dev Studio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">check</span>
                  <span>Monthly Rollover Guarantee</span>
                </li>
              </ul>
            </div>
            <Link
              to="/welcome"
              className="mt-8 w-full py-3 rounded-full bg-white hover:bg-slate-50 border border-[#E6E4DD] hover:border-[#6630E4] text-[#07091B] hover:text-[#6630E4] font-sans text-sm font-bold text-center transition-colors shadow-2xs"
            >
              Get Started
            </Link>
          </div>

          {/* Pro */}
          <div className="p-7 rounded-3xl bg-white border-2 border-[#6630E4] flex flex-col justify-between relative scale-[1.02] shadow-[0_12px_36px_rgba(102,48,228,0.12)]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#6630E4] text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              Most Popular
            </div>
            <div>
              <span className="font-mono text-xs uppercase font-bold text-[#6630E4]">Professional</span>
              <div className="flex items-baseline gap-1 mt-2 mb-3">
                <span className="text-4xl font-extrabold text-[#07091B]">₹2,499</span>
                <span className="text-slate-500 text-sm font-sans">/ mo</span>
              </div>
              <p className="font-sans text-sm text-slate-600 mb-6 leading-relaxed">
                For legal counsels and hedge fund quants requiring full autonomy.
              </p>
              <ul className="space-y-2.5 font-sans text-sm text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">check</span>
                  <span><strong>5,000 Compute Credits</strong> / month</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">check</span>
                  <span>All 10 Specialized Minds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">check</span>
                  <span>Deep Research Trees &amp; Citations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">check</span>
                  <span>Full Autonomous Task Hub Scheduler</span>
                </li>
              </ul>
            </div>
            <Link
              to="/welcome"
              className="mt-8 w-full py-3 rounded-full bg-[#6630E4] hover:bg-[#5221C6] text-white font-sans text-sm font-bold text-center transition-all shadow-[0_4px_16px_rgba(102,48,228,0.25)] hover:shadow-[0_6px_20px_rgba(102,48,228,0.35)] active:scale-[0.98]"
            >
              Start 14-Day Free Trial
            </Link>
          </div>

          {/* Enterprise */}
          <div className="p-7 rounded-3xl bg-white border border-[#E6E4DD] flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-slate-500">Enterprise</span>
              <div className="flex items-baseline gap-1 mt-2 mb-3">
                <span className="text-4xl font-extrabold text-[#07091B]">Custom</span>
              </div>
              <p className="font-sans text-sm text-slate-600 mb-6 leading-relaxed">
                For banks, enterprises, and statutory bodies requiring VPC isolation.
              </p>
              <ul className="space-y-2.5 font-sans text-sm text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">check</span>
                  <span>Unlimited Custom Compute Enclaves</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">check</span>
                  <span>On-Premise / Sovereign Cloud VPC</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#6630E4]">check</span>
                  <span>DPDP Non-Repudiation Audit Logs</span>
                </li>
              </ul>
            </div>
            <Link
              to="/welcome"
              className="mt-8 w-full py-3 rounded-full bg-white hover:bg-slate-50 border border-[#E6E4DD] hover:border-[#6630E4] text-[#07091B] hover:text-[#6630E4] font-sans text-sm font-bold text-center transition-colors shadow-2xs"
            >
              Contact Enterprise Desk
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. SECTION 6: FREQUENTLY ASKED QUESTIONS
      ====================================================================== */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#E8E0FB] bg-[#F5F1FD] text-[#6630E4] text-xs font-mono font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-2xs">
            FAQ
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#07091B] tracking-tight leading-tight text-balance mb-4 sm:mb-5">
            Answers That Keep{' '}
            <span className="text-[#6630E4]">You Flowing</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed text-balance">
            From capturing conversations to syncing with your tools, find quick answers to how Grizon AI works.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E6E4DD] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-sans text-sm sm:text-base font-bold text-[#07091B] flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform ${
                      isOpen ? 'rotate-180 text-[#6630E4]' : 'text-slate-400'
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 font-sans text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
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
