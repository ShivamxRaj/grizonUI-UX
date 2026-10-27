import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeHeroAgent, setActiveHeroAgent] = useState('auto'); // 'auto' | 'fast' | 'deep' | 'dev' | 'market' | 'legal'
  const [activeScenario, setActiveScenario] = useState('market'); // 'market' | 'dpdp' | 'dev'
  const [activeCanvasTab, setActiveCanvasTab] = useState('preview'); // 'preview' | 'citations'
  const [bullSentiment, setBullSentiment] = useState(true);
  const [copiedHash, setCopiedHash] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Hero interactive intent presets
  const heroAgentData = {
    auto: {
      label: 'Auto Mode active: Evaluating query complexity & token budget...',
      prompt: 'Synthesize the quarterly capex trends for renewable infrastructure in Gujarat with sensitivity analysis.',
      routingBadge: 'Routed to Deep Research & Market Oracles',
      latency: '84ms',
      sources: '14 statutory filings verified',
      artifact: 'Gujarat_Renewable_CapEx_Model_2025.xlsx + Synthesis Report',
    },
    fast: {
      label: 'Fast Research active: Sub-300ms live indexing across 350+ data feeds...',
      prompt: 'Latest RBI circular on digital lending default loss guarantee guidelines and NBFC risk-weight adjustments.',
      routingBadge: 'Routed to Fast Research Engine',
      latency: '210ms',
      sources: '6 RBI & Gazette notifications verified',
      artifact: 'RBI_DLG_Guidelines_Summary.pdf',
    },
    deep: {
      label: 'Deep Research active: Recursive DAG multi-step hypothesis tree running...',
      prompt: 'Analyze competitive moat of top 5 Indian green hydrogen producers against European CBAM carbon tax.',
      routingBadge: 'Routed to Deep Research Engine',
      latency: '420ms',
      sources: '28 industry disclosures & trade logs',
      artifact: 'GreenHydrogen_CBAM_Impact_Matrix.pdf',
    },
    dev: {
      label: 'Dev Studio active: Isolated Linux VM container sandbox initialized...',
      prompt: 'Build a sovereign React sparkline widget for NSE Bank Nifty live tick stream with Tailwind CSS.',
      routingBadge: 'Routed to Dev Studio Agent',
      latency: '98ms',
      sources: 'React 19 & Tailwind CSS v4 stable',
      artifact: 'SovereignSparklineWidget.jsx',
    },
    market: {
      label: 'Market Quant active: Direct NSE order-book tick streaming...',
      prompt: 'Deconstruct Nifty 50 options call/put volatility skew and compute Taurus vs Ursa consensus.',
      routingBadge: 'Routed to Market Quant Specialist',
      latency: '112ms',
      sources: 'NSE Option Chain • 24 strikes indexed',
      artifact: 'NiftyBank_Alpha_Skew_Model.html',
    },
    legal: {
      label: 'Legal Intelligence active: eCourts India & 44 High Courts machine concordance...',
      prompt: 'Check precedent concordance under Bharatiya Nyaya Sanhita (BNS) §112 vs IPC §302.',
      routingBadge: 'Routed to Legal Intelligence India',
      latency: '146ms',
      sources: 'Supreme Court & Delhi High Court gazettes',
      artifact: 'BNS_Statutory_Concordance_Memo.pdf',
    },
  };

  const heroCurrent = heroAgentData[activeHeroAgent] || heroAgentData.auto;

  // Scenario Presets for the Breakout Split-Screen Workbench
  const scenarios = {
    market: {
      id: 'market',
      title: 'NSE Options Alpha & Skew',
      badge: 'Market Quant & NSE Oracles',
      icon: 'monitoring',
      prompt: 'Simulate Bull vs Bear liquidity thesis for Nifty 50 Banking Index based on upcoming RBI MPC rate decision.',
      agentName: 'Market Quant Specialist',
      modelUsed: 'DeepSeek R1 + NSE Live Ticks',
      latency: '112ms',
      confidence: '99.4% Deterministic',
      traces: [
        { label: 'Query Classification', detail: 'Token Complexity: 142 • Financial Quantitative' },
        { label: 'Live Oracle Stream', detail: 'NSE Option Chain Ticks • 24 strikes indexed' },
        { label: 'Thesis Grounding', detail: 'Historical RBI MPC Rate Drift [2021-2024]' },
      ],
      citations: [
        { id: 'NSE_NIFTY_BANK_OI', name: 'NSE Bank Nifty Open Interest Ticks (Live)' },
        { id: 'RBI_MPC_MINUTES_FEB', name: 'RBI Monetary Policy Committee Resolution (Rule 4)' },
        { id: 'SEBI_IV_SPREAD', name: 'SEBI Implied Volatility Benchmark' },
      ],
      artifactName: 'NiftyBank_Alpha_Skew_Model.html',
      statPrimary: '+14.2% Alpha',
      statSecondary: 'IV Rank: 21.4 (Low Volatility)',
    },
    dpdp: {
      id: 'dpdp',
      title: 'DPDP Act Compliance Audit',
      badge: 'Statutory Infosec Specialist',
      icon: 'gavel',
      prompt: 'Audit AWS Mumbai (ap-south-1) egress routing and Aadhaar vault tokens against DPDP 2023 non-repudiation mandates.',
      agentName: 'Statutory Infosec & Legal Specialist',
      modelUsed: 'Claude 3.5 Sonnet + Kanoon API',
      latency: '164ms',
      confidence: '100% Deterministic',
      traces: [
        { label: 'Sovereign Scope Check', detail: 'Enclave: AWS ap-south-1 (Mumbai AZ-1 & AZ-3)' },
        { label: 'Statutory Cross-Check', detail: 'DPDP 2023 Rule 7(4) Non-Repudiation Matrix' },
        { label: 'HSM Cryptographic Seal', detail: 'SHA-256 Digest generated for Audit Committee' },
      ],
      citations: [
        { id: 'DPDP_ACT_SEC_16', name: 'Digital Personal Data Protection Act 2023 §16' },
        { id: 'MEITY_CLOUD_RULE_7', name: 'MeitY Sovereign Cloud Guideline Rule 7(4)' },
        { id: 'UIDAI_AADHAAR_CIRCULAR', name: 'UIDAI Air-Gapped Vault Security Mandate' },
      ],
      artifactName: 'DPDP_Statutory_Compliance_Matrix.pdf',
      statPrimary: 'Zero Off-Shore Transit',
      statSecondary: 'Non-Repudiation: 7-Year Verified',
    },
    dev: {
      id: 'dev',
      title: 'React Telemetry Component',
      badge: 'Dev Studio & Linux Container VM',
      icon: 'terminal',
      prompt: 'Generate an interactive React telemetry sparkline card for sovereign node latency monitoring using Tailwind CSS.',
      agentName: 'Dev Studio Agent',
      modelUsed: 'DeepSeek V3 + Container VM',
      latency: '98ms',
      confidence: 'Clean Compile Passed',
      traces: [
        { label: 'Sandbox Initialization', detail: 'Isolated Linux Container VM • 0.04s' },
        { label: 'Tailwind Syntax Lint', detail: 'Zero Unused Classes • WCAG AA Accessible' },
        { label: 'DOM Mount Simulation', detail: 'Render Performance: 60 FPS (0.42ms)' },
      ],
      citations: [
        { id: 'REACT_19_STABLE', name: 'React 19 Core Component Specification' },
        { id: 'TAILWIND_V4_CORE', name: 'Tailwind CSS Utility Design Tokens' },
      ],
      artifactName: 'SovereignTelemetryWidget.jsx',
      statPrimary: '0.42ms Render',
      statSecondary: 'Bundle Size: 2.1 kB Gzipped',
    },
  };

  const current = scenarios[activeScenario];

  // Visual Workflow scenarios (Aixom 2-Column Split Pattern)
  const workflowScenarios = [
    {
      id: 1,
      title: 'Weekly DPDP Statutory Compliance Scan',
      frequency: 'Every Sunday at 23:00 IST',
      agent: 'Statutory Infosec Specialist',
      trigger: 'Scheduled Cron Event',
      action: 'Audits ap-south-1 S3 replication policies & Aadhaar token routes against DPDP Rule 7.',
      output: 'Delivers verified audit digest to CISO & exports non-repudiation log.',
      status: 'Active • Zero Drift',
      metric: '100% Sovereign',
      nodes: ['Scheduled Cron (23:00 IST)', 'DPDP Rule 7 Audit Engine', 'CISO Audit Digest'],
    },
    {
      id: 2,
      title: 'Daily NSE Option Skew & Volatility Tracker',
      frequency: 'Market Days at 09:15 IST & 15:30 IST',
      agent: 'Market Quant & Oracle Specialist',
      trigger: 'NSE Tick Stream Opening',
      action: 'Parses Nifty 50 call/put skew delta and runs automated Bull vs Bear debate synthesis.',
      output: 'Delivers morning risk matrix to portfolio manager channel.',
      status: 'Active • Real-Time Stream',
      metric: '24 Strikes Live',
      nodes: ['NSE Order Oracles', 'Black-Scholes Delta Matrix', 'Telegram / Slack Channel'],
    },
    {
      id: 3,
      title: 'Continuous High Court Gazette Arbitration Watch',
      frequency: 'Daily at 06:00 IST',
      agent: 'Corporate Legal & Arbitration Specialist',
      trigger: 'eCourts & Kanoon Index Sync',
      action: 'Matches company vendor registry against freshly uploaded Commercial Division cause lists.',
      output: 'Generates preventive litigation alert if petition is gazetted.',
      status: 'Active • 44 High Courts Indexed',
      metric: '16-Digit CNR',
      nodes: ['eCourts India API Sync', 'Precedent Concordance Node', 'Preventive Counsel Notice'],
    },
  ];

  const currentWorkflow = workflowScenarios.find((w) => w.id === activeWorkflow) || workflowScenarios[0];

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
    <div className="w-full flex flex-col bg-white text-[#090B19] selection:bg-purple-100 selection:text-purple-900 font-sans overflow-x-hidden">
      {/* =====================================================================
          1. HERO SECTION: OptimAI Layout (3D Fluted Ribbed Backdrop + Flanking Floating Small Boxes)
          - Center Headline & Friendly Copy
          - 3 Left Floating Cards (DAG Research, Dev Studio Sandbox, Statutory Oracles)
          - 3 Right Floating Cards (10+ Prebuilt Agents, 300+ Verified Feeds, 44+ High Courts)
          - 3D Fluted Vertical Cylinder Wall Background with Soft Violet/Indigo Lighting
          - Dual Pill Buttons with Ambient Underlight Glow
      ====================================================================== */}
      <section className="relative w-full overflow-hidden pt-8 sm:pt-14 pb-16 lg:pb-24 border-b border-[#E6E4DD] bg-white">
        {/* 3D Fluted Cylinder Glass Wall Background (Faithful to OptimAI reference) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] pointer-events-none overflow-hidden select-none z-0">
          {/* Ambient Purple Atmospheric Glow */}
          <div className="absolute right-12 top-10 w-[420px] h-[420px] rounded-full bg-purple-400/20 blur-[110px] pointer-events-none" />
          <div className="absolute right-1/3 bottom-10 w-[300px] h-[300px] rounded-full bg-indigo-300/15 blur-[90px] pointer-events-none" />

          {/* 3D Vertical Fluted Cylinder Columns */}
          <div
            className="absolute right-0 top-0 h-full w-full flex justify-end opacity-90 pointer-events-none"
            style={{
              maskImage:
                'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 98%), linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 98%), linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
            }}
          >
            <div className="flex h-full gap-2 sm:gap-3.5 pr-2 sm:pr-8">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="h-full w-5 sm:w-8 lg:w-11 rounded-full opacity-85 transition-all"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(226, 204, 254, 0.45) 30%, rgba(192, 132, 252, 0.6) 70%, rgba(147, 51, 234, 0.35) 100%)',
                    boxShadow:
                      'inset -2px 0 6px rgba(126, 34, 206, 0.22), inset 2px 0 4px rgba(255, 255, 255, 0.85)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hero Content & Flanking Breakout Grid */}
        <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center">
            {/* LEFT FLANKING FLOATING SMALL BOXES (GriZon AI Core Capabilities) */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 -ml-8 xl:-ml-12 pointer-events-auto select-none">
              {/* Card 1: Autonomous AI Research */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_12px_32px_rgba(0,0,0,0.05)] w-60 transform -rotate-1 hover:rotate-0 hover:shadow-lg transition-all duration-300 animate-float-slow">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-4 tracking-tight">
                  Autonomous AI Research
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 shadow-2xs shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="6" r="2.5" />
                      <circle cx="18" cy="6" r="2.5" />
                      <circle cx="12" cy="18" r="2.5" />
                      <line x1="8.2" y1="7.5" x2="15.8" y2="7.5" />
                      <line x1="7.5" y1="8.2" x2="10.8" y2="15.8" />
                      <line x1="16.5" y1="8.2" x2="13.2" y2="15.8" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-sm font-extrabold text-[#090B19] block leading-tight">
                      Deep Research
                    </span>
                    <span className="font-sans text-[11px] text-emerald-600 font-semibold block mt-0.5">
                      Verified Citations
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Isolated Code Execution (Middle Left - Bleeding into Margin) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_14px_36px_rgba(0,0,0,0.06)] w-64 -ml-8 hover:ml-0 hover:shadow-lg transition-all duration-300 animate-float-mid">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-4 tracking-tight">
                  Isolated Code Execution
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xs shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-sm font-extrabold text-[#090B19] block leading-tight">
                      Dev Studio VM
                    </span>
                    <span className="font-sans text-[11px] text-indigo-600 font-semibold block mt-0.5">
                      Secure Linux Sandbox
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Real-Time Data Grounding */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_12px_32px_rgba(0,0,0,0.05)] w-60 transform rotate-1 hover:rotate-0 hover:shadow-lg transition-all duration-300 animate-float-fast">
                <p className="font-sans text-xs font-semibold text-slate-500 mb-4 tracking-tight">
                  Real-Time Data Grounding
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200/70 flex items-center justify-center text-sky-600 shadow-2xs shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12h3l3-7 4 14 3-7h5" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-sm font-extrabold text-[#090B19] block leading-tight">
                      Live Oracles
                    </span>
                    <span className="font-sans text-[11px] text-sky-600 font-semibold block mt-0.5">
                      NSE &amp; 44 High Courts
                    </span>
                  </div>
                </div>
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
                <a
                  href="#workbench"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#090B19] text-white hover:bg-black font-semibold text-sm transition-all active:scale-[0.98] shadow-sm"
                >
                  <span>Test Live Workbench</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </a>
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
      </section>

      {/* =====================================================================
          2. SECTION 2: SPECIALIST AGENTS SHOWCASE (OptimAI Demo Showcase Pattern)
      ====================================================================== */}
      {/* =====================================================================
          2. SECTION 2: SPECIALIST AGENTS SHOWCASE (OptimAI Demo Showcase Pattern)
      ====================================================================== */}
      <section className="w-full bg-[#FAF9F5] py-20 border-b border-[#E6E4DD]">
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
          3. SECTION 3: INTERACTIVE INSTANT INTENT BAR & LIVE ARTIFACT GENERATOR
          From Approved Design: User chooses an agent, types prompt, views generated artifact
      ====================================================================== */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-3xl bg-white border border-[#E6E4DD] p-5 sm:p-7">
          {/* Agent Selector Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5 overflow-x-auto gap-2 no-scrollbar">
            <div className="flex items-center gap-1.5">
              {[
                { id: 'auto', label: 'Auto Mode', icon: 'tune' },
                { id: 'fast', label: 'Fast Research', icon: 'bolt' },
                { id: 'deep', label: 'Deep Research', icon: 'psychology' },
                { id: 'dev', label: 'Dev Studio', icon: 'terminal' },
                { id: 'market', label: 'Market Analyst', icon: 'monitoring' },
                { id: 'legal', label: 'Legal Intelligence', icon: 'gavel' },
              ].map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setActiveHeroAgent(agent.id)}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                    activeHeroAgent === agent.id
                      ? 'bg-[#1E3A3A] text-white'
                      : 'bg-[#FAF9F5] text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">{agent.icon}</span>
                  <span>{agent.label}</span>
                </button>
              ))}
            </div>
            <span className="hidden md:inline-block font-mono text-[10px] text-slate-400 uppercase tracking-wider shrink-0">
              Latency: {heroCurrent.latency}
            </span>
          </div>

          {/* Interactive Prompt & Artifact Output Box */}
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-500">
                  {heroCurrent.label}
                </span>
                <span className="font-mono text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-semibold border border-amber-200">
                  {heroCurrent.routingBadge}
                </span>
              </div>
              <p className="font-sans text-sm font-semibold text-slate-900 leading-relaxed">
                "{heroCurrent.prompt}"
              </p>
            </div>

            {/* Generated Artifact Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#E6E4DD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">dataset</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-emerald-700 block">
                    Live Artifact Materialized
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-bold text-slate-800">
                    {heroCurrent.artifact}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  {heroCurrent.sources}
                </span>
                <Link
                  to="/welcome"
                  className="px-4 py-1.5 rounded-lg bg-[#1E3A3A] text-white font-sans text-xs font-semibold hover:bg-[#142929] transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span className="material-symbols-outlined text-[15px]">download</span>
                  <span>Inspect Artifact</span>
                </Link>
              </div>
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
          5. SECTION 5: BREAKOUT WORKBENCH (DUAL-AGENT ADVERSARIAL FORUM)
          Left: Execution Trace. Right: Live Consensus + Wave Chart
      ====================================================================== */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28" id="workbench">
        <div className="w-full rounded-[28px] sm:rounded-[36px] border border-[#E6E4DD] bg-white overflow-hidden text-left">
          {/* Top Bar */}
          <div className="bg-[#FAF9F5] px-4 sm:px-6 py-3.5 border-b border-[#E6E4DD] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              </div>
              <span className="font-mono text-xs font-bold text-slate-800 tracking-wider uppercase">
                GRIZON DISPATCH DESK • SOVEREIGN ENCLAVE
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                ● 10 Specialists Active
              </span>
            </div>

            {/* Scenario Switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar">
              {[
                { id: 'market', label: '📊 Market Quant & Skew' },
                { id: 'dpdp', label: '⚖️ DPDP Statutory Audit' },
                { id: 'dev', label: '💻 React Telemetry' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveScenario(s.id);
                    setActiveCanvasTab('preview');
                  }}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold whitespace-nowrap transition-all ${
                    activeScenario === s.id
                      ? 'bg-[#1E3A3A] text-white'
                      : 'bg-white border border-[#E6E4DD] text-slate-600 hover:border-slate-400 hover:text-slate-900'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Split Screen Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E6E4DD]">
            {/* LEFT PANE (5 Columns) */}
            <div className="lg:col-span-5 p-5 sm:p-7 bg-[#FAF9F5]/70 flex flex-col justify-between gap-6">
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10.5px] uppercase font-bold text-slate-500 tracking-wider">
                      Executive Objective
                    </span>
                    <span className="font-mono text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-semibold">
                      Latency: {current.latency}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E6E4DD]">
                    <p className="font-sans text-xs sm:text-[13px] text-slate-800 font-medium leading-relaxed">
                      "{current.prompt}"
                    </p>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10.5px] uppercase font-bold text-slate-500 tracking-wider block mb-2.5">
                    Deterministic Execution Trace
                  </span>
                  <div className="space-y-2 font-mono text-[11px]">
                    {current.traces.map((trace, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white border border-[#E6E4DD] flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <div className="min-w-0">
                          <span className="text-slate-800 font-bold block">{trace.label}</span>
                          <span className="text-slate-500 text-[10px] truncate block">{trace.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Engine: <strong className="text-slate-800">{current.modelUsed}</strong></span>
                <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {current.confidence}
                </span>
              </div>
            </div>

            {/* RIGHT PANE (7 Columns) */}
            <div className="lg:col-span-7 p-5 sm:p-7 bg-white flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="font-sans text-xs font-bold text-[#18181B] truncate">
                      {current.artifactName}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-100 font-sans text-xs">
                    <button
                      onClick={() => setActiveCanvasTab('preview')}
                      className={`px-3 py-1 rounded-md font-semibold transition-all ${
                        activeCanvasTab === 'preview'
                          ? 'bg-white text-slate-900 border border-slate-200'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Visual Canvas
                    </button>
                    <button
                      onClick={() => setActiveCanvasTab('citations')}
                      className={`px-3 py-1 rounded-md font-semibold transition-all ${
                        activeCanvasTab === 'citations'
                          ? 'bg-white text-slate-900 border border-slate-200'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Citations ({current.citations.length})
                    </button>
                  </div>
                </div>

                {/* PREVIEW CONTENT */}
                {activeCanvasTab === 'preview' && (
                  <>
                    {/* Scenario 1: Market Analyst */}
                    {activeScenario === 'market' && (
                      <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] p-5 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                              NSE Bank Nifty Gamma Profile
                            </p>
                            <p className="font-sans text-sm font-extrabold text-[#18181B]">
                              Volatility Skew &amp; Sentiment Delta
                            </p>
                          </div>
                          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#E6E4DD]">
                            <button
                              onClick={() => setBullSentiment(true)}
                              className={`px-3 py-1 rounded text-[11px] font-sans font-bold transition-all ${
                                bullSentiment
                                  ? 'bg-emerald-600 text-white'
                                  : 'text-slate-500 hover:text-slate-800'
                              }`}
                            >
                              Bull Thesis
                            </button>
                            <button
                              onClick={() => setBullSentiment(false)}
                              className={`px-3 py-1 rounded text-[11px] font-sans font-bold transition-all ${
                                !bullSentiment
                                  ? 'bg-rose-600 text-white'
                                  : 'text-slate-500 hover:text-slate-800'
                              }`}
                            >
                              Bear Hedge
                            </button>
                          </div>
                        </div>

                        {/* Spline Wave Chart */}
                        <div className="w-full h-40 relative">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 450 120" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={bullSentiment ? '#10B981' : '#F43F5E'} stopOpacity="0.25" />
                                <stop offset="100%" stopColor={bullSentiment ? '#10B981' : '#F43F5E'} stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d={
                                bullSentiment
                                  ? 'M 0,90 Q 90,85 160,55 T 320,30 T 450,15 L 450,120 L 0,120 Z'
                                  : 'M 0,25 Q 90,35 180,65 T 320,95 T 450,110 L 450,120 L 0,120 Z'
                              }
                              fill="url(#chartGlow)"
                            />
                            <path
                              d={
                                bullSentiment
                                  ? 'M 0,90 Q 90,85 160,55 T 320,30 T 450,15'
                                  : 'M 0,25 Q 90,35 180,65 T 320,95 T 450,110'
                              }
                              fill="none"
                              stroke={bullSentiment ? '#059669' : '#E11D48'}
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                            <circle cx="160" cy={bullSentiment ? '55' : '65'} r="5" fill="#FFFFFF" stroke={bullSentiment ? '#059669' : '#E11D48'} strokeWidth="2.5" />
                            <circle cx="320" cy={bullSentiment ? '30' : '95'} r="5" fill="#FFFFFF" stroke={bullSentiment ? '#059669' : '#E11D48'} strokeWidth="2.5" />
                          </svg>
                        </div>

                        {/* Dual-Agent Adversarial Consensus Bar */}
                        <div className="p-3.5 rounded-xl bg-white border border-[#E6E4DD]">
                          <div className="flex items-center justify-between text-xs mb-2">
                            <span className="font-mono text-[10.5px] uppercase font-bold text-slate-500">
                              Adversarial Consensus • TCS.NS vs NIFTY 50
                            </span>
                            <span className="font-mono text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              {bullSentiment ? '74% Moderate Bullish' : '74% Defensive Hedge'}
                            </span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden flex mb-2">
                            <div className="h-full bg-emerald-600 transition-all duration-500" style={{ width: bullSentiment ? '74%' : '26%' }} />
                            <div className="h-full bg-rose-500 transition-all duration-500" style={{ width: bullSentiment ? '26%' : '74%' }} />
                          </div>
                          <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                            <span className="text-emerald-700 font-semibold">Agent Taurus: Free Cash Flow (+1.48 Alpha)</span>
                            <span className="text-rose-700 font-semibold">Agent Ursa: Eurozone Capex (-0.84 Beta)</span>
                          </div>
                        </div>

                        {/* Metrics Row */}
                        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200 font-mono text-xs">
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase">Projected Alpha</span>
                            <span className="font-bold text-emerald-700">{bullSentiment ? '+14.2% Spread' : '-8.4% Hedge'}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase">Gamma Risk</span>
                            <span className="font-bold text-slate-800">0.82 Low Delta</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase">Live Status</span>
                            <span className="font-bold text-amber-700">24 Strikes Matched</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Scenario 2: DPDP Statutory Audit */}
                    {activeScenario === 'dpdp' && (
                      <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] p-5 flex flex-col gap-3.5">
                        <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                          <div>
                            <p className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                              Sovereign Compliance Enclave
                            </p>
                            <p className="font-sans text-sm font-extrabold text-[#18181B]">
                              DPDP Act 2023 Statutory Verification
                            </p>
                          </div>
                          <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                            PASS • RULE 7(4)
                          </span>
                        </div>

                        <div className="space-y-2.5 font-sans text-xs">
                          <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                            <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
                            <div>
                              <span className="font-bold text-slate-800 block">Zero Off-Shore Data Egress Confirmed</span>
                              <span className="text-slate-500 text-[11px]">S3 lifecycle replication locked to Mumbai AZ-1 &amp; AZ-3. Zero cross-border transit.</span>
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                            <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
                            <div>
                              <span className="font-bold text-slate-800 block">Aadhaar Vault Token Air-Gap Verified</span>
                              <span className="text-slate-500 text-[11px]">Encryption keys isolated via Sovereign HSM with zero external LLM retention.</span>
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                            <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
                            <div>
                              <span className="font-bold text-slate-800 block">7-Year Non-Repudiation Audit Digest Ready</span>
                              <span className="text-slate-500 text-[11px]">Cryptographic SHA-256 seal formatted for tomorrow's Audit Committee.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Scenario 3: Dev Studio Component */}
                    {activeScenario === 'dev' && (
                      <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] p-5 flex flex-col gap-3.5">
                        <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                          <div>
                            <p className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                              Live Component Preview
                            </p>
                            <p className="font-sans text-sm font-extrabold text-[#18181B]">
                              SovereignTelemetryWidget.jsx
                            </p>
                          </div>
                          <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 font-bold">
                            React 19 Stable
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#1E3A3A] text-white flex items-center justify-center font-bold">
                              <span className="material-symbols-outlined text-[20px]">speed</span>
                            </div>
                            <div>
                              <p className="font-sans text-xs font-bold text-slate-800">ap-south-1 Node Telemetry</p>
                              <p className="font-mono text-[11px] text-emerald-700">Latency: 0.42ms (60 FPS)</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-mono text-xs font-bold text-slate-700">Online</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-100 font-mono text-[11px] text-slate-700 overflow-x-auto">
                          <code>{`<SovereignTelemetryWidget enclave="ap-south-1" verified={true} />`}</code>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Citations Tab */}
                {activeCanvasTab === 'citations' && (
                  <div className="rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] p-5 space-y-3">
                    <p className="font-mono text-[10.5px] uppercase font-bold text-slate-500 tracking-wider mb-2">
                      Verifiable Citations Grounding This Response
                    </p>
                    {current.citations.map((cite, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3"
                      >
                        <span className="font-mono text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">
                          [{cite.id}]
                        </span>
                        <span className="font-sans text-xs text-slate-700 font-medium">
                          {cite.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Pane Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setCopiedHash(true);
                    setTimeout(() => setCopiedHash(false), 2000);
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  <span>{copiedHash ? 'Verified SHA-256!' : 'Verify SHA-256 Hash'}</span>
                </button>

                <Link
                  to="/welcome"
                  className="px-4 py-2 rounded-lg bg-[#1E3A3A] hover:bg-[#142929] text-white font-sans text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px]">download</span>
                  <span>Export {current.artifactName.split('.').pop().toUpperCase()}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. SECTION 6: 2-COLUMN AUTONOMOUS TASK HUB (Aixom Reference)
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
            Autonomous Task Hub
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight mt-1.5 text-balance">
            Set it once. Let agents run it.
          </h2>
          <p className="font-sans text-sm text-slate-600 mt-2 text-balance">
            Automate statutory scans, morning market risk debriefs, and codebase audits without writing a single line of script.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E6E4DD] p-6 sm:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
                Task Automation Pipeline
              </span>
              <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                ● {currentWorkflow.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {workflowScenarios.map((wf) => (
                <button
                  key={wf.id}
                  onClick={() => setActiveWorkflow(wf.id)}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold transition-all ${
                    activeWorkflow === wf.id
                      ? 'bg-[#1E3A3A] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {wf.title}
                </button>
              ))}
            </div>

            <div className="space-y-3.5">
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-amber-700 block">01 Trigger</span>
                    <span className="font-sans text-xs font-bold text-slate-800">{currentWorkflow.trigger}</span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-slate-500">{currentWorkflow.frequency}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-amber-300 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-indigo-700 block">02 Specialist Run</span>
                    <span className="font-sans text-xs font-bold text-slate-800">{currentWorkflow.agent}</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                  {currentWorkflow.metric}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">task_alt</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-emerald-700 block">03 Delivered Artifact</span>
                    <span className="font-sans text-xs font-bold text-slate-800">Verified Audit Output</span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-emerald-700 font-semibold">SHA-256 Sealed</span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              {currentWorkflow.action}
            </p>
          </div>

          {/* Right Column (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#E6E4DD] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
                  Telemetry &amp; Enclave State
                </span>
                <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-bold">
                  IST SYNC ACTIVE
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD]">
                  <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block mb-1">
                    Continuous Monitoring Feed
                  </span>
                  <p className="font-sans text-sm font-bold text-slate-900 mb-2">
                    {currentWorkflow.output}
                  </p>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Zero Human Interventions Required</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] space-y-2">
                  <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">
                    Institutional Data Streams
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentWorkflow.nodes.map((node, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white border border-[#E6E4DD] font-mono text-[10px] text-slate-700 font-medium"
                      >
                        {node}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/workflow"
              className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#18181B] font-sans text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Configure in Workflow Sandbox</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
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
          8. SECTION 8: THE 10 PURPOSE-BUILT SPECIALISTS GRID (FlowGen Style)
      ====================================================================== */}
      <section className="w-full bg-[#FAF9F5] py-20 lg:py-28" id="agents">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1E3A3A] font-bold">
              Specialist Suite
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight mt-1 text-balance">
              Engineered minds for every domain.
            </h2>
            <p className="font-sans text-sm text-slate-600 mt-2 text-balance">
              Each mind operates with isolated statutory memory, live API oracles, and zero cross-tenant training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              { num: '01', title: 'Legal Intelligence India', tag: 'Statutory Core', desc: 'Deterministic statutory analysis, precedent verification, and BNS concordance.', icon: 'gavel' },
              { num: '02', title: 'Market & Trading Quant', tag: 'NSE Oracles', desc: 'NSE & BSE tick oracles, option skew profiles, and Bull vs Bear debate synthesis.', icon: 'monitoring' },
              { num: '03', title: 'Dev Studio Agent', tag: 'Linux VM', desc: 'Full-stack code generation, container debugging, and live HTML visual previews.', icon: 'code' },
              { num: '04', title: 'System Architect', tag: 'Cloud VPC', desc: 'High-availability infrastructure topology, distributed consensus, and cloud blueprints.', icon: 'schema' },
              { num: '05', title: 'Mathematics & Logic', tag: 'Symbolic Engine', desc: 'SymPy derivations, discrete algebra, and formal mathematical proofs.', icon: 'functions' },
              { num: '06', title: 'Deep Research Engine', tag: 'Recursive DAG', desc: 'Autonomous recursive DAG synthesis with quantitative risk modeling and citations.', icon: 'psychology' },
              { num: '07', title: 'Fast Research Engine', tag: '<300ms Live', desc: 'Sub-second real-time web lookup indexing 350+ live feeds with verified citations.', icon: 'bolt' },
              { num: '08', title: 'General Reasoning', tag: 'Multilingual', desc: 'Multilingual conversational drafting, strategic coordination, and unconstrained ideation.', icon: 'chat' },
              { num: '09', title: 'Doc Intelligence & OCR', tag: 'Neural OCR', desc: 'Neural OCR for 200+ page scans, financial table extraction, and statutory drafting.', icon: 'description' },
              { num: '10', title: 'Video Analyser & Vision', tag: 'Timeline OCR', desc: 'Multi-hour video indexing, speech-to-text alignment, and slide OCR timeline queries.', icon: 'smart_display' },
            ].map((agent, i) => (
              <Link
                key={i}
                to="/agents"
                className="p-5 rounded-2xl bg-white border border-[#E6E4DD] hover:border-slate-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-amber-700 font-bold tracking-wider">
                      {agent.num}
                    </span>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold uppercase">
                      {agent.tag}
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-bold text-[#18181B] mb-1 group-hover:text-amber-800 transition-colors">
                    {agent.title}
                  </h4>
                  <p className="font-sans text-xs text-[#52525B] leading-relaxed">
                    {agent.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-slate-700 transition-colors">
                  <span>Inspect Pipeline</span>
                  <span className="material-symbols-outlined text-[15px] transition-transform group-hover:translate-x-0.5">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-2xl bg-white p-5 border border-[#E6E4DD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="font-sans text-slate-700 font-medium">
                All 10 Specialists active in sovereign Indian compute enclaves • DPDP Act 2023 compliant • Zero tenant training
              </span>
            </div>
            <Link
              to="/agents"
              className="inline-flex items-center gap-1.5 font-sans font-semibold text-emerald-800 hover:text-emerald-900 shrink-0"
            >
              <span>Explore All 10 Architectures</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
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
        <div className="text-center mb-10">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#07091B] tracking-tight">
            Frequently Asked Questions
          </h2>
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
