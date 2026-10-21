import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HERO_AGENTS = {
  auto: {
    key: 'auto',
    name: 'Auto Mode',
    icon: 'tune',
    iconColor: 'text-secondary',
    status: 'Auto Mode active: Evaluating query complexity & routing intent...',
    prompt: 'Synthesize the quarterly capex trends for renewable infrastructure in Gujarat with sensitivity analysis.',
    tags: [
      { icon: 'public', text: 'Web Citations On' },
      { icon: 'attach_file', text: '3 Reports Attached' },
      { text: 'Routed to Deep Research', isHighlight: true }
    ],
    artifactName: 'Gujarat_Renewable_CapEx_Model_2025.xlsx + Synthesis Report'
  },
  fast: {
    key: 'fast',
    name: 'Fast Research',
    icon: 'bolt',
    iconColor: 'text-secondary',
    status: 'Fast Research active: Sub-400ms web search with instant citations...',
    prompt: 'What are the latest battery storage policy incentives announced by MNRE India this week?',
    tags: [
      { icon: 'public', text: 'Real-Time Web' },
      { icon: 'verified', text: '4 Gazette Sources' },
      { text: '<400ms Latency', isHighlight: true }
    ],
    artifactName: 'MNRE_BESS_Policy_Incentives_2025.md'
  },
  deep: {
    key: 'deep',
    name: 'Deep Research',
    icon: 'psychology',
    iconColor: 'text-agent-deep-research',
    status: 'Deep Research active: Multi-step synthesis, fact-checking & risk analysis...',
    prompt: 'Conduct an in-depth competitive synthesis and patent landscape of sodium-ion battery manufacturers in APAC.',
    tags: [
      { icon: 'account_tree', text: 'Multi-Step Tree' },
      { icon: 'fact_check', text: 'Risk Analysis' },
      { text: 'Pro+ Synthesis', isHighlight: true }
    ],
    artifactName: 'Sodium_Ion_APAC_Landscape_Synthesis.pdf'
  },
  dev: {
    key: 'dev',
    name: 'Dev Studio',
    icon: 'terminal',
    iconColor: 'text-agent-dev-studio',
    status: 'Dev Studio active: Code execution tools & live HTML canvas preview...',
    prompt: 'Build a responsive dark-mode portfolio analytics card with interactive SVG sparklines using Tailwind CSS.',
    tags: [
      { icon: 'terminal', text: 'Sandbox Active' },
      { icon: 'speed', text: 'Live HTML Preview' },
      { text: 'Code Ready', isHighlight: true }
    ],
    artifactName: 'PortfolioAnalyticsCard.tsx'
  },
  doc: {
    key: 'doc',
    name: 'Doc Intelligence',
    icon: 'description',
    iconColor: 'text-agent-legal',
    status: 'Doc Intelligence active: Analyse PDFs, extract tables & write structured reports...',
    prompt: 'Extract all consolidated debt maturity schedules and cash flow lines from this 140-page annual filing.',
    tags: [
      { icon: 'table_view', text: 'Zero-Loss Table OCR' },
      { icon: 'article', text: 'Structured Export' },
      { text: 'PDF Parser', isHighlight: true }
    ],
    artifactName: 'Consolidated_Debt_Maturity_Schedule.xlsx'
  },
  market: {
    key: 'market',
    name: 'Market Analyst',
    icon: 'query_stats',
    iconColor: 'text-secondary',
    status: 'Market Analyst active: Stock & crypto analysis with Bull vs Bear debate...',
    prompt: 'Analyze valuation multiples, DCF sensitivity, and margin trajectory of Tata Motors EV division.',
    tags: [
      { icon: 'candlestick_chart', text: 'Technical & Fundamentals' },
      { icon: 'compare_arrows', text: 'Bull vs Bear Debate' },
      { text: 'Educational Research', isHighlight: true }
    ],
    artifactName: 'Tata_Motors_EV_Valuation_Model.xlsx'
  },
  video: {
    key: 'video',
    name: 'Video Analyser',
    icon: 'videocam',
    iconColor: 'text-primary',
    status: 'Video Analyser active: Scene description, slide OCR & event timestamps...',
    prompt: 'Examine this 45-minute product launch video: transcribe key announcements, extract on-screen slide tables, and index Q&A timestamps.',
    tags: [
      { icon: 'slideshow', text: 'Slide OCR' },
      { icon: 'timer', text: 'Timestamp Index' },
      { text: 'Multimodal Video', isHighlight: true }
    ],
    artifactName: 'Product_Launch_Event_Keyframes_Transcript.md'
  },
  legal: {
    key: 'legal',
    name: 'Legal Agent',
    icon: 'gavel',
    iconColor: 'text-secondary',
    status: 'Legal Agent active: Statutory contract audit, DPDP compliance & clause redlining...',
    prompt: 'Review Section 14.3 of this SaaS agreement: redline uncapped indemnities and generate compliant substitutions under DPDP Act 2023.',
    tags: [
      { icon: 'gavel', text: 'Contract Audit' },
      { icon: 'shield', text: 'DPDP 2023 Compliance' },
      { text: 'Clause Redline', isHighlight: true }
    ],
    artifactName: 'Master_Services_Agreement_Redline_Audit.docx'
  }
};

const FAQS = [
  {
    q: 'What is Auto Mode?',
    a: 'Auto Mode is the default way to chat on GriZon AI. Each message is evaluated and routed to the best eligible specialised agent for your task — so you do not have to pick manually unless you want to.'
  },
  {
    q: 'How does the credit system work?',
    a: 'Each plan includes monthly credits. Agent responses consume credits based on actual token processing and agent multipliers. You can view your live credit ledger in your workspace wallet at any moment. Paid tiers feature rollover credits.'
  },
  {
    q: 'Is my data secure on GriZon AI?',
    a: 'Yes. All conversational data and uploaded artifacts are isolated with encryption in transit and at rest. Most critically, your data is never used to train public or foundational AI models.'
  },
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. You can upgrade, downgrade, or cancel directly from your account settings with zero friction. There are no lock-in agreements or cancellation penalties.'
  },
  {
    q: 'What can the Video Analyser do?',
    a: 'On Pro and Elite plans, the Video Analyser agent reviews uploaded video files — breaking down footage to describe scenes, extract on-screen text, log event timestamps, and answer questions about the footage.'
  }
];

export default function Home() {
  const [selectedAgentKey, setSelectedAgentKey] = useState('auto');
  const [heroPrompt, setHeroPrompt] = useState('Synthesize renewable infrastructure trends in Gujarat with sensitivity analysis.');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(0);
  const [canvasMode, setCanvasMode] = useState('chart');

  const currentAgent = HERO_AGENTS[selectedAgentKey] || HERO_AGENTS.auto;

  const handleRouteSelect = (promptText, agentKey) => {
    setHeroPrompt(promptText);
    if (HERO_AGENTS[agentKey]) {
      setSelectedAgentKey(agentKey);
    }
  };

  return (
    <div className="w-full bg-parchment-bg font-body-md text-body-md text-on-surface antialiased relative min-h-screen selection:bg-tertiary-fixed selection:text-on-tertiary-fixed overflow-x-hidden pt-20 sm:pt-24">
      {/* ── Luminous Ambient Background Glows ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-saffron-glow/10 via-lavender-subtle/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] bg-agent-deep-research/5 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col w-full">
        {/* ── HERO SECTION ── */}
        <section className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-6 pb-12 sm:pb-space-2xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-surface-card shadow-sm border border-border-hairline mb-5 sm:mb-6 max-w-full">
            <span className="flex h-2 w-2 rounded-full bg-secondary-container animate-pulse shrink-0" />
            <span className="font-label-code text-[11px] sm:text-label-code uppercase tracking-wider text-on-surface-variant font-medium truncate">
              Specialised Agents for Every Workflow • Purpose-built AI
            </span>
            <span className="font-label-badge text-[10px] sm:text-label-badge px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed shrink-0 font-bold">
              v3.2
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#1e2033] tracking-tight max-w-4xl mx-auto mb-3 sm:mb-5 leading-tight sm:leading-[1.12]">
            Everything you need, <br />
            <span className="italic font-display-hero text-agent-deep-research">one unified workspace.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body-md sm:font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Purpose-built AI agents for research, coding, documents, markets, and video — or let Auto Mode pick the right agent for you.
          </p>

          {/* ── SEARCH / PROMPT INPUT BAR (Preserved with Route Chips) ── */}
          <div className="w-full max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="bg-white rounded-2xl border border-black/10 shadow-sm p-2.5 text-left">
              {/* Input Top Row - Pixel Perfect Vertical Centering */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex items-center gap-3 px-3.5 flex-1 min-w-0 py-2 sm:py-0">
                  <span className="material-symbols-outlined text-outline text-[20px] shrink-0 select-none">search</span>
                  <input
                    type="text"
                    value={heroPrompt}
                    onChange={(e) => setHeroPrompt(e.target.value)}
                    placeholder="Ask anything or describe your task..."
                    className="w-full bg-transparent border-none text-sm font-body-md text-on-surface placeholder:text-outline focus:outline-hidden leading-normal"
                  />
                </div>
                <a
                  href="https://app.grizonai.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-headline-sm text-sm hover:bg-primary-container shadow-xs transition-all min-h-[44px] shrink-0 font-semibold"
                >
                  <span className="leading-none">Start with AI</span>
                  <span className="material-symbols-outlined text-[17px] leading-none select-none">bolt</span>
                </a>
              </div>

              {/* Direct Route Chips */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2.5 px-2 border-t border-border-hairline/60 mt-2">
                <span className="font-label-code text-[10px] text-outline uppercase tracking-wider font-semibold mr-1">
                  ROUTE DIRECTLY:
                </span>
                <button
                  type="button"
                  onClick={() => handleRouteSelect('Quick search: Latest EV battery tax incentives in India', 'fast')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container border border-border-hairline text-xs font-body-sm text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-secondary text-[13px]">bolt</span>
                  <span>Fast Research</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleRouteSelect('Build a responsive analytics sparkline card with Tailwind CSS', 'dev')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container border border-border-hairline text-xs font-body-sm text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-agent-dev-studio text-[13px]">terminal</span>
                  <span>Dev Studio</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleRouteSelect('Extract financial metrics table from attached quarterly PDF', 'doc')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container border border-border-hairline text-xs font-body-sm text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-agent-legal text-[13px]">description</span>
                  <span>Doc Intel</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleRouteSelect('Analyze valuation multiples and DCF sensitivity of Tata Motors EV', 'market')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container border border-border-hairline text-xs font-body-sm text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-secondary text-[13px]">query_stats</span>
                  <span>Market Analyst</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleRouteSelect('Review Section 14.3 of this MSA: audit uncapped liability and DPDP compliance', 'legal')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container border border-border-hairline text-xs font-body-sm text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-secondary text-[13px]">gavel</span>
                  <span>Legal Review</span>
                </button>
              </div>
            </div>
          </div>

          {/* ── INTERACTIVE HERO SHOWCASE CONSOLE (Sloped & Centered with Breathing Room) ── */}
          <div className="w-full max-w-5xl mx-auto rounded-2xl bg-surface-card shadow-[0_24px_70px_-20px_rgba(7,9,27,0.08),0_2px_6px_rgba(0,0,0,0.03)] overflow-hidden text-left border border-border-hairline">
            {/* Tabs Header - Unclipped Full-Width Agent Tabs */}
            <div className="bg-surface-container-low px-4 sm:px-6 pt-3 sm:pt-4 border-b border-border-hairline/60">
              <div className="flex items-center gap-1.5 sm:gap-2 pb-3 overflow-x-auto no-scrollbar" id="agentTabs">
                {Object.values(HERO_AGENTS).map((agent) => {
                  const isActive = selectedAgentKey === agent.key;
                  return (
                    <button
                      key={agent.key}
                      type="button"
                      onClick={() => setSelectedAgentKey(agent.key)}
                      className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg font-label-badge text-xs shrink-0 transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-surface-card text-primary shadow-xs font-semibold'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[16px] ${agent.iconColor}`}>
                        {agent.icon}
                      </span>
                      <span>{agent.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Console Content */}
            <div className="p-4 sm:p-8 md:p-10 bg-gradient-to-b from-surface-card via-surface-card to-surface-container-low/40">
              <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
                {/* Meta status bar */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                    <span className="font-label-code text-[11px] text-on-surface-variant uppercase font-medium truncate" id="heroAgentLabel">
                      {currentAgent.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-label-code text-[10px] px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold uppercase">
                      Data Encrypted
                    </span>
                    <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase hidden sm:inline-block">
                      Sub-second Routing
                    </span>
                  </div>
                </div>

                {/* Prompt Box */}
                <div className="rounded-xl bg-surface-container-lowest p-3.5 sm:p-5 shadow-[0_4px_24px_-6px_rgba(7,9,27,0.06)] relative border border-border-hairline/60">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="material-symbols-outlined text-agent-deep-research mt-0.5 text-[20px] sm:text-[24px]">
                      auto_awesome
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-body-md sm:font-body-lg text-xs sm:text-body-lg text-on-surface font-medium leading-relaxed" id="heroPromptText">
                        {heroPrompt || currentAgent.prompt}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3 sm:pt-4">
                        {currentAgent.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-label-code text-[10px] sm:text-label-code ${
                              t.isHighlight
                                ? 'bg-secondary-fixed text-on-secondary-fixed font-semibold'
                                : 'bg-surface-container text-on-surface-variant'
                            }`}
                          >
                            {t.icon && (
                              <span className="material-symbols-outlined text-[12px] sm:text-[14px]">
                                {t.icon}
                              </span>
                            )}
                            {t.text}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href="https://app.grizonai.com"
                      className="shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm"
                      title="Launch in Workspace"
                    >
                      <span className="material-symbols-outlined text-[16px] sm:text-[20px]">
                        arrow_upward
                      </span>
                    </a>
                  </div>
                </div>

                {/* Live Artifact Generated Box */}
                <div className="rounded-lg bg-surface-card p-3.5 sm:p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 border border-border-hairline/60">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold shrink-0">
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px]">dataset</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-headline-sm text-sm sm:text-headline-sm text-primary truncate font-semibold">
                        Live Artifact Generated
                      </p>
                      <p className="font-body-sm text-[11px] sm:text-body-sm text-on-surface-variant truncate">
                        {currentAgent.artifactName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end pt-2 md:pt-0">
                    <span className="font-label-code text-[10px] sm:text-label-code px-2 py-1 rounded bg-surface-container text-on-surface-variant font-medium shrink-0">
                      Verified Citations
                    </span>
                    <a
                      href="https://app.grizonai.com"
                      className="px-3 sm:px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-badge text-xs hover:bg-primary-container transition-colors text-center shrink-0 font-semibold"
                    >
                      Open in Canvas
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TRUST & BENCHMARK METRICS STRIP ── */}
        <section className="w-full bg-surface-container-lowest/70 backdrop-blur-md py-8 shadow-[0_1px_4px_rgba(0,0,0,0.02)] border-y border-border-hairline/60">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-border-hairline/80">
              <div className="pt-4 md:pt-0">
                <p className="font-display-hero text-3xl sm:text-4xl text-primary font-normal">8</p>
                <p className="font-headline-sm text-xs sm:text-sm text-on-surface mt-1 font-semibold">Specialised Agents</p>
                <p className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant">Research, Dev, Docs, Markets, Video</p>
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <p className="font-display-hero text-3xl sm:text-4xl text-secondary-container font-normal">Auto</p>
                <p className="font-headline-sm text-xs sm:text-sm text-on-surface mt-1 font-semibold">Smart Routing</p>
                <p className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant">Directs queries to the right agent</p>
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <p className="font-display-hero text-3xl sm:text-4xl text-agent-deep-research font-normal">100%</p>
                <p className="font-headline-sm text-xs sm:text-sm text-on-surface mt-1 font-semibold">Transparent Usage</p>
                <p className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant">Clear credit ledger &amp; balance tracking</p>
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <p className="font-display-hero text-3xl sm:text-4xl text-agent-dev-studio font-normal">Encrypted</p>
                <p className="font-headline-sm text-xs sm:text-sm text-on-surface mt-1 font-semibold">Data Privacy</p>
                <p className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant">In transit &amp; at rest; zero model training</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2B. OFFICIAL GRIZON AI WORKSPACE SHOWCASE (CALLED BACK & POSITIONED LOWER) ── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 text-center">
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-card border border-border-hairline shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-secondary-container" />
              <span className="font-label-code text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">
                Official Workspace Preview
              </span>
            </div>
            <h2 className="font-display-hero text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight font-normal">
              The Official GriZon AI Interface
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mt-2 max-w-xl mx-auto leading-relaxed">
              Experience the authentic GriZon AI environment — live artifact canvas, dual-pane execution sandbox, and instant source-grounded citations.
            </p>
          </div>

          {/* Official Browser Frame with Interface Screenshot */}
          <div className="max-w-5xl mx-auto rounded-2xl bg-surface-card p-2 sm:p-3 shadow-[0_25px_70px_-15px_rgba(7,9,27,0.12)] border border-border-hairline">
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-border-hairline/60 bg-surface-container-low rounded-t-xl mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="px-4 py-1 rounded-md bg-white border border-border-hairline text-on-surface-variant font-mono text-[11px] flex items-center gap-1.5 shadow-2xs">
                <span className="material-symbols-outlined text-[13px] text-outline">lock</span>
                <span>app.grizonai.com/workspace</span>
              </div>
              <a
                href="https://app.grizonai.com"
                className="text-xs font-headline-sm text-primary hover:text-secondary flex items-center gap-1 font-semibold"
              >
                <span>Launch</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <img
                src="/images/grizon-hero.png"
                alt="Official GriZon AI Workspace Interface"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                onError={(e) => {
                  e.target.src = '/images/grizon-chat.png';
                }}
              />
            </div>
          </div>

          {/* Official Agent Marquee Strip */}
          <div className="mt-10 pt-6 border-t border-border-hairline/80">
            <p className="text-center font-label-code text-[11px] uppercase tracking-widest text-outline mb-4 font-semibold">
              SPECIALISED AGENTS FOR EVERY WORKFLOW • PURPOSE-BUILT CATALOGUE
            </p>
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5">
              {[
                { name: 'Auto Mode', icon: 'tune' },
                { name: 'General Assistant', icon: 'chat' },
                { name: 'Fast Research', icon: 'bolt' },
                { name: 'Deep Research', icon: 'psychology' },
                { name: 'Dev Studio', icon: 'terminal' },
                { name: 'Doc Intelligence & Writer', icon: 'description' },
                { name: 'Data & Market Analyst', icon: 'candlestick_chart' },
                { name: 'System Architect', icon: 'schema' },
                { name: 'Video Analyser', icon: 'smart_display' }
              ].map((agent, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-card border border-border-hairline text-xs font-body-sm text-on-surface font-medium shadow-xs"
                >
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    {agent.icon}
                  </span>
                  <span>{agent.name}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. WHY GRIZON AI ── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-space-3xl scroll-mt-20" id="features">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-border-hairline">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-label-code text-[11px] text-secondary font-semibold uppercase tracking-wider">
                  Why GriZon AI
                </span>
              </div>
              <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-primary tracking-tight">
                Agents built for the job, <br />
                <span className="italic font-display-hero text-agent-deep-research">not generic chat</span>
              </h2>
            </div>
            <p className="font-body-md sm:font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-md leading-relaxed">
              Stop juggling generic chatbots. Pick a specialised agent engineered with dedicated toolchains — or let Auto Mode route your query dynamically.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Auto Mode */}
            <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group min-h-[290px]">
              <div>
                <div className="h-10 w-10 rounded-lg bg-secondary-fixed/40 flex items-center justify-center text-secondary mb-6">
                  <span className="material-symbols-outlined text-[22px]">alt_route</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary font-semibold mb-3 tracking-tight">Auto Mode Routing</h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Describe the task once. Auto Mode selects the best eligible specialised agent so you stay entirely in flow.
                </p>
              </div>
              <div className="pt-8">
                <span className="inline-block font-label-code text-[11px] px-3 py-1.5 rounded-md bg-surface-container text-on-surface-variant font-semibold tracking-wider uppercase">
                  Intelligent Dispatch
                </span>
              </div>
            </div>

            {/* 2. Specialised Agent Catalogue */}
            <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group min-h-[290px]">
              <div>
                <div className="h-10 w-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-agent-deep-research mb-6">
                  <span className="material-symbols-outlined text-[22px]">apps</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary font-semibold mb-3 tracking-tight">Specialised Agent Catalogue</h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Research, coding, documents, markets, architecture, and video — each agent is purpose-built for that workflow.
                </p>
              </div>
              <div className="pt-8">
                <span className="inline-block font-label-code text-[11px] px-3 py-1.5 rounded-md bg-surface-container text-on-surface-variant font-semibold tracking-wider uppercase">
                  8 Live Workflows
                </span>
              </div>
            </div>

            {/* 3. Dev Studio */}
            <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group min-h-[290px]">
              <div>
                <div className="h-10 w-10 rounded-lg bg-agent-dev-studio/15 flex items-center justify-center text-agent-dev-studio mb-6">
                  <span className="material-symbols-outlined text-[22px]">featured_video</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary font-semibold mb-3 tracking-tight">Dev Studio</h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Write, debug, and iterate on code with execution tools and live HTML preview for UI and component work.
                </p>
              </div>
              <div className="pt-8">
                <span className="inline-block font-label-code text-[11px] px-3 py-1.5 rounded-md bg-agent-dev-studio/10 text-agent-dev-studio font-semibold tracking-wider uppercase">
                  Live HTML Preview
                </span>
              </div>
            </div>

            {/* 4. Research with Citations */}
            <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group min-h-[290px]">
              <div>
                <div className="h-10 w-10 rounded-lg bg-agent-deep-research/10 flex items-center justify-center text-agent-deep-research mb-6">
                  <span className="material-symbols-outlined text-[22px]">description</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary font-semibold mb-3 tracking-tight">Research with Citations</h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Fast Research for quick answers, Deep Research for multi-step synthesis with real-time sources and risk analysis.
                </p>
              </div>
              <div className="pt-8">
                <span className="inline-block font-label-code text-[11px] px-3 py-1.5 rounded-md bg-agent-deep-research/10 text-agent-deep-research font-semibold tracking-wider uppercase">
                  Source Grounded
                </span>
              </div>
            </div>

            {/* 5. Markets, Docs & Video */}
            <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group min-h-[290px]">
              <div>
                <div className="h-10 w-10 rounded-lg bg-secondary-fixed/40 flex items-center justify-center text-secondary mb-6">
                  <span className="material-symbols-outlined text-[22px]">tune</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary font-semibold mb-3 tracking-tight">Markets, Docs &amp; Video</h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Analyse stocks and crypto, summarise documents, create reports, and unpack uploaded videos — all in chat.
                </p>
              </div>
              <div className="pt-8">
                <span className="inline-block font-label-code text-[11px] px-3 py-1.5 rounded-md bg-secondary-fixed text-on-secondary-fixed font-semibold tracking-wider uppercase">
                  Multimodal Suite
                </span>
              </div>
            </div>

            {/* 6. Credits You Can See */}
            <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group min-h-[290px]">
              <div>
                <div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant mb-6">
                  <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary font-semibold mb-3 tracking-tight">Credits You Can See</h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Every plan includes monthly credits. Track balance and usage directly in your sovereign workspace wallet — upgrade when you need more.
                </p>
              </div>
              <div className="pt-8">
                <span className="inline-block font-label-code text-[11px] px-3 py-1.5 rounded-md bg-surface-container text-on-surface-variant font-semibold tracking-wider uppercase">
                  Transparent Wallet
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. SPECIALISED AGENT CATALOGUE ── */}
        <section className="w-full bg-surface-container-low/60 py-12 sm:py-space-3xl relative scroll-mt-20" id="agents">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <span className="font-label-code text-label-code text-agent-deep-research uppercase tracking-widest font-bold">
                Agent Catalogue
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-primary tracking-tight mt-2">
                Specialised agents for every task
              </h2>
              <p className="font-body-md sm:font-body-lg text-sm sm:text-body-lg text-on-surface-variant mt-3 sm:mt-4">
                Choose the sovereign agent that fits your objective — or let Auto Mode assign your prompt automatically based on intent.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
              {/* 1. Fast Research */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">bolt</span>
                    </div>
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                      Fast
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base sm:text-headline-sm text-primary mb-2 font-semibold">Fast Research</h4>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Instant web research with real-time sources and direct citations.
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-hairline/60 flex items-center justify-between">
                  <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase font-medium">Real-Time Web</span>
                  <Link to="/agents/research" className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">
                    north_east
                  </Link>
                </div>
              </div>

              {/* 2. Deep Research */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-agent-deep-research/10 flex items-center justify-center text-agent-deep-research">
                      <span className="material-symbols-outlined text-[20px]">psychology</span>
                    </div>
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
                      Pro+
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base sm:text-headline-sm text-primary mb-2 font-semibold">Deep Research</h4>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Comprehensive multi-step analysis and synthesis across complex reports and topics.
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-hairline/60 flex items-center justify-between">
                  <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase font-medium">Multi-Step Synthesis</span>
                  <Link to="/agents/research" className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">
                    north_east
                  </Link>
                </div>
              </div>

              {/* 3. Dev Studio */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-agent-dev-studio/10 flex items-center justify-center text-agent-dev-studio">
                      <span className="material-symbols-outlined text-[20px]">code</span>
                    </div>
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container text-agent-dev-studio font-semibold">
                      Code
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base sm:text-headline-sm text-primary mb-2 font-semibold">Dev Studio</h4>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Write, debug, and preview code in real time with interactive UI execution.
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-hairline/60 flex items-center justify-between">
                  <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase font-medium">Interactive UI</span>
                  <Link to="/agents/dev-studio" className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">
                    north_east
                  </Link>
                </div>
              </div>

              {/* 4. System Architect */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">schema</span>
                    </div>
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
                      Architecture
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base sm:text-headline-sm text-primary mb-2 font-semibold">System Architect</h4>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Design robust software architectures, database schemas, and system blueprints.
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-hairline/60 flex items-center justify-between">
                  <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase font-medium">Diagrams &amp; Schemas</span>
                  <Link to="/agents/system-architect" className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">
                    north_east
                  </Link>
                </div>
              </div>

              {/* 5. Market Analyst */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary-fixed-dim/30 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[20px]">analytics</span>
                    </div>
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-semibold">
                      Markets
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base sm:text-headline-sm text-primary mb-2 font-semibold">Market Analyst</h4>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Analyze stocks and cryptocurrencies with technical and fundamental breakdowns. For educational research.
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-hairline/60 flex items-center justify-between">
                  <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase font-medium">Financial Data</span>
                  <Link to="/agents/market-intelligence" className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">
                    north_east
                  </Link>
                </div>
              </div>

              {/* 6. Doc Intelligence */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-agent-legal/10 flex items-center justify-center text-agent-legal">
                      <span className="material-symbols-outlined text-[20px]">description</span>
                    </div>
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                      Docs
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base sm:text-headline-sm text-primary mb-2 font-semibold">Doc Intelligence</h4>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Extract summaries, tables, and structured data from PDFs, scanned documents, and spreadsheets.
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-hairline/60 flex items-center justify-between">
                  <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase font-medium">Document Parsing</span>
                  <Link to="/agents/doc-intelligence" className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">
                    north_east
                  </Link>
                </div>
              </div>

              {/* 7. Video Analyser */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">smart_display</span>
                    </div>
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
                      Video
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base sm:text-headline-sm text-primary mb-2 font-semibold">Video Analyser</h4>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Examine video footage to describe scenes, extract on-screen text, and answer questions.
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-hairline/60 flex items-center justify-between">
                  <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase font-medium">Video Reasoning</span>
                  <Link to="/agents/video-analyser" className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">
                    north_east
                  </Link>
                </div>
              </div>

              {/* 8. Legal Agent */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[20px]">gavel</span>
                    </div>
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-semibold">
                      Contracts
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base sm:text-headline-sm text-primary mb-2 font-semibold">Legal Agent</h4>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Review agreements and contracts to highlight key clauses, risks, and standard obligations.
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-hairline/60 flex items-center justify-between">
                  <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase font-medium">Clause Review</span>
                  <Link to="/agents/legal" className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">
                    north_east
                  </Link>
                </div>
              </div>

              {/* 9. General Assistant */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                    </div>
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">
                      Core Chat
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base sm:text-headline-sm text-primary mb-2 font-semibold">General Assistant</h4>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Everyday conversational reasoning, writing, brainstorming, and quick problem solving.
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border-hairline/60 flex items-center justify-between">
                  <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase font-medium">Everyday Q&amp;A</span>
                  <a className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]" href="https://app.grizonai.com">
                    north_east
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. ARTIFACTS & WORKSPACE CANVAS ── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-space-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <span className="font-label-code text-label-code text-secondary uppercase tracking-widest font-bold">
                Workspace Canvas
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-primary tracking-tight">
                Artifacts, canvas, and instant downloads
              </h2>
              <p className="font-body-md sm:font-body-lg text-sm sm:text-body-lg text-on-surface-variant leading-relaxed">
                Generated documents, interactive financial charts, executable code files, and spreadsheets materialize directly into your dedicated side canvas.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                  </div>
                  <div>
                    <p className="font-headline-sm text-sm sm:text-headline-sm text-primary font-semibold">
                      Downloadable Native Artifacts
                    </p>
                    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">
                      Export reports in Markdown, Word, PDF, or clean Excel data structures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                  </div>
                  <div>
                    <p className="font-headline-sm text-sm sm:text-headline-sm text-primary font-semibold">
                      Live Code &amp; HTML Previews
                    </p>
                    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">
                      Instant interactive sandbox rendering without leaving your current agent thread.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                  </div>
                  <div>
                    <p className="font-headline-sm text-sm sm:text-headline-sm text-primary font-semibold">
                      Isolated Sovereign History
                    </p>
                    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">
                      Audit trails, citations, and version history cached securely and privately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-headline-sm text-sm sm:text-headline-sm hover:bg-primary-container transition-all font-semibold"
                  href="https://app.grizonai.com"
                >
                  <span>Explore the Canvas</span>
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Canvas Demo */}
            <div className="lg:col-span-7 w-full overflow-hidden">
              <div className="rounded-xl bg-surface-card shadow-[0_20px_60px_-15px_rgba(7,9,27,0.07)] p-4 sm:p-6 space-y-4 border border-border-hairline max-w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-border-hairline gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="h-3 w-3 rounded-full bg-secondary shrink-0" />
                    <span className="font-label-code text-xs sm:text-label-code text-primary font-bold truncate">
                      Interactive Product Demonstration (Illustrative Preview)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setCanvasMode(canvasMode === 'chart' ? 'code' : 'chart')}
                      className="px-2.5 py-1 rounded bg-surface-container font-label-code text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">code</span>
                      {canvasMode === 'chart' ? 'View Code' : 'View Chart'}
                    </button>
                    <button
                      type="button"
                      onClick={() => alert('Exporting artifact: Sector_Sentiment_Analysis.xlsx')}
                      className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-code text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">download</span>
                      Export
                    </button>
                  </div>
                </div>

                <div className="rounded-lg bg-surface-container-low p-4 sm:p-6 max-w-full overflow-hidden">
                  {canvasMode === 'chart' ? (
                    <>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div>
                          <span className="font-label-code text-[10px] sm:text-label-code text-outline uppercase font-medium">Simulation Metric</span>
                          <p className="font-headline-sm text-sm sm:text-headline-sm text-primary font-semibold">Sector Sentiment Trend</p>
                        </div>
                        <span className="font-label-badge text-xs px-2 py-1 rounded bg-agent-dev-studio/15 text-agent-dev-studio font-bold">
                          +14.2% Alpha
                        </span>
                      </div>
                      <svg className="w-full h-36 sm:h-44 text-agent-deep-research max-w-full" fill="none" stroke="currentColor" viewBox="0 0 500 150">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3C4B9B" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#3C4B9B" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M 0 110 Q 70 80, 140 95 T 280 60 T 420 30 T 500 20 L 500 150 L 0 150 Z" fill="url(#chartGradient)" stroke="none" />
                        <path d="M 0 110 Q 70 80, 140 95 T 280 60 T 420 30 T 500 20" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
                        <circle className="fill-secondary stroke-surface-card" cx="280" cy="60" r="4" strokeWidth="2" />
                        <circle className="fill-agent-dev-studio stroke-surface-card" cx="420" cy="30" r="4" strokeWidth="2" />
                      </svg>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-border-hairline font-label-code text-xs">
                        <div>
                          <p className="text-outline text-[10px] sm:text-label-code font-medium">VALUATION MULTIPLE</p>
                          <p className="text-primary font-bold">21.4x Median</p>
                        </div>
                        <div>
                          <p className="text-outline text-[10px] sm:text-label-code font-medium">VOLATILITY PROFILE</p>
                          <p className="text-agent-dev-studio font-bold">Low Variance</p>
                        </div>
                        <div>
                          <p className="text-outline text-[10px] sm:text-label-code font-medium">SYNTHESIS STATUS</p>
                          <p className="text-secondary font-bold">7 Footnotes Verified</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <pre className="p-3 bg-primary text-white rounded-lg font-label-code text-xs overflow-x-auto leading-relaxed">
{`// Exported Artifact: SECTOR_SENTIMENT_ANALYSIS.XLSX
{
  "benchmark": "NIFTY_AUTO_50",
  "projectedAlpha": "+14.2% YoY",
  "medianValuation": "21.4x",
  "sourceVerification": "Official Gazette & Company Filings",
  "riskRating": "Low Variance"
}`}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. PRICING TIERS ── */}
        <section className="w-full bg-surface-container-low/50 py-12 sm:py-space-3xl scroll-mt-20" id="pricing">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span className="font-label-code text-label-code text-secondary uppercase tracking-widest font-bold">
                Pricing
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-primary tracking-tight mt-2">
                Plans for every ambition
              </h2>
              <p className="font-body-md sm:font-body-lg text-sm sm:text-body-lg text-on-surface-variant mt-2 sm:mt-3">
                Start free, upgrade when you require high-capacity workflows. No hidden fees or locked contracts.
              </p>

              {/* Monthly / Yearly Toggle */}
              <div className="inline-flex items-center gap-2 sm:gap-3 p-1.5 rounded-full bg-surface-container mt-6 sm:mt-8 shadow-xs">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 sm:px-5 py-1.5 rounded-full font-label-badge text-xs sm:text-label-badge transition-all cursor-pointer ${
                    billingCycle === 'monthly'
                      ? 'bg-surface-card text-primary shadow-xs font-semibold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-4 sm:px-5 py-1.5 rounded-full font-label-badge text-xs sm:text-label-badge transition-all flex items-center gap-1.5 cursor-pointer ${
                    billingCycle === 'yearly'
                      ? 'bg-surface-card text-primary shadow-xs font-semibold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  Yearly{' '}
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold">
                    2 Months Free
                  </span>
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {/* Free */}
              <div className="p-6 sm:p-8 rounded-xl bg-surface-card shadow-sm flex flex-col justify-between border border-border-hairline">
                <div>
                  <h3 className="font-headline-sm text-lg sm:text-headline-sm text-primary font-semibold">Free</h3>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant mt-1 mb-4 sm:mb-6">
                    Try GriZon with core conversational reasoning
                  </p>
                  <div className="mb-4 sm:mb-6">
                    <span className="font-display-hero text-3xl sm:text-[40px] leading-none text-primary font-normal">₹0</span>
                    <span className="font-body-sm text-body-sm text-outline">/mo</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 font-body-sm text-xs sm:text-body-sm text-on-surface mb-6 sm:mb-8">
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span><strong>50 credits</strong> / month</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>General Assistant Agent</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Standard web search</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Document tools &amp; weather</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>File upload up to 50 MB</span>
                    </li>
                  </ul>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-headline-sm text-sm sm:text-body-md text-center transition-colors block font-semibold"
                  href="https://app.grizonai.com"
                >
                  Get Started
                </a>
              </div>

              {/* Basic */}
              <div className="p-6 sm:p-8 rounded-xl bg-surface-card shadow-sm flex flex-col justify-between border border-border-hairline">
                <div>
                  <h3 className="font-headline-sm text-lg sm:text-headline-sm text-primary font-semibold">Basic</h3>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant mt-1 mb-4 sm:mb-6">
                    For students, hobbyists &amp; light creators
                  </p>
                  <div className="mb-4 sm:mb-6">
                    <span className="font-display-hero text-3xl sm:text-[40px] leading-none text-primary font-normal">
                      {billingCycle === 'monthly' ? '₹999' : '₹799'}
                    </span>
                    <span className="font-body-sm text-body-sm text-outline">/mo</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 font-body-sm text-xs sm:text-body-sm text-on-surface mb-6 sm:mb-8">
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span><strong>200 credits</strong> / month</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>5 specialised agents</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Dev Studio &amp; Doc Writer</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Data &amp; Market Analyst</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Code, charts &amp; image analysis</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>On-demand credit top-ups</span>
                    </li>
                  </ul>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-headline-sm text-sm sm:text-body-md text-center transition-colors block font-semibold"
                  href="https://app.grizonai.com"
                >
                  Get Started
                </a>
              </div>

              {/* Pro */}
              <div className="p-6 sm:p-8 rounded-xl bg-surface-card shadow-[0_16px_40px_-10px_rgba(247,168,89,0.22)] relative flex flex-col justify-between border-2 border-saffron-glow/40">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-primary text-on-primary font-label-badge text-xs uppercase tracking-wider shrink-0 font-bold">
                  Best Value
                </div>
                <div>
                  <h3 className="font-headline-sm text-lg sm:text-headline-sm text-primary font-semibold">Pro</h3>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant mt-1 mb-4 sm:mb-6">
                    For professionals, freelancers &amp; developers
                  </p>
                  <div className="mb-4 sm:mb-6">
                    <span className="font-display-hero text-3xl sm:text-[40px] leading-none text-primary font-normal">
                      {billingCycle === 'monthly' ? '₹1,999' : '₹1,599'}
                    </span>
                    <span className="font-body-sm text-body-sm text-outline">/mo</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 font-body-sm text-xs sm:text-body-sm text-on-surface mb-6 sm:mb-8">
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span><strong>500 credits</strong> / mo + rollover</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span><strong>All 8 specialised agents</strong></span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Deep Research &amp; Architect</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Video Analyser Multi-modal</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Higher file &amp; search limits</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Credit top-up enabled</span>
                    </li>
                  </ul>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-sm sm:text-body-md text-center transition-colors shadow-sm block font-semibold"
                  href="https://app.grizonai.com"
                >
                  Get Started
                </a>
              </div>

              {/* Elite */}
              <div className="p-6 sm:p-8 rounded-xl bg-surface-card shadow-sm flex flex-col justify-between border border-border-hairline">
                <div>
                  <h3 className="font-headline-sm text-lg sm:text-headline-sm text-primary font-semibold">Elite</h3>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant mt-1 mb-4 sm:mb-6">
                    For power users, agencies &amp; heavy teams
                  </p>
                  <div className="mb-4 sm:mb-6">
                    <span className="font-display-hero text-3xl sm:text-[40px] leading-none text-primary font-normal">
                      {billingCycle === 'monthly' ? '₹2,999' : '₹2,399'}
                    </span>
                    <span className="font-body-sm text-body-sm text-outline">/mo</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 font-body-sm text-xs sm:text-body-sm text-on-surface mb-6 sm:mb-8">
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span><strong>1,000 credits</strong> / mo + rollover</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>All 8 specialised agents</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>High context window limits</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Extended artifact version history</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>Dedicated assistance</span>
                    </li>
                  </ul>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-headline-sm text-sm sm:text-body-md text-center transition-colors block font-semibold"
                  href="https://app.grizonai.com"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. FAQ ACCORDION ── */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-space-3xl scroll-mt-20" id="faq">
          <div className="text-center mb-10 sm:mb-16">
            <span className="font-label-code text-label-code text-secondary uppercase tracking-widest font-bold">
              FAQ
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-primary tracking-tight mt-2">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-surface-card p-4 sm:p-6 shadow-xs cursor-pointer border border-border-hairline transition-all hover:border-outline-variant"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-headline-sm text-sm sm:text-headline-sm text-primary font-semibold">
                      {faq.q}
                    </h3>
                    <span
                      className={`material-symbols-outlined text-outline transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </div>
                  {isOpen && (
                    <div className="pt-3 sm:pt-4 font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed border-t border-border-hairline/40 mt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 8. BOTTOM CALL TO ACTION ── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pb-12 sm:pb-space-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-primary via-primary-container to-primary text-on-primary p-6 sm:p-12 md:p-16 relative overflow-hidden text-center shadow-xl">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-saffron-glow/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-lavender-subtle/20 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-6">
              <span className="font-label-code text-[11px] sm:text-label-code px-3 py-1 rounded-full bg-surface-container/20 text-saffron-glow font-semibold uppercase tracking-wider inline-block">
                Autonomous Intelligence
              </span>
              <h2 className="font-display-hero text-2xl sm:text-4xl md:text-display-hero text-on-primary tracking-tight leading-tight sm:leading-none">
                Ready for agents that <br />
                <span className="italic font-display-hero text-saffron-glow">fit the job?</span>
              </h2>
              <p className="font-body-md sm:font-body-lg text-xs sm:text-body-lg text-primary-fixed-dim leading-relaxed">
                Start free with Auto Mode today, then unlock specialised autonomous agents for deep research, code, markets, docs, and video.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 sm:pt-4 w-full max-w-sm sm:max-w-none mx-auto">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-on-primary text-primary font-headline-sm text-sm sm:text-headline-sm hover:bg-surface-container-low transition-all font-semibold"
                  href="https://app.grizonai.com"
                >
                  <span>Start with AI Free</span>
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                </a>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-surface-container/20 hover:bg-surface-container/30 text-on-primary font-headline-sm text-sm sm:text-headline-sm transition-all font-semibold"
                  href="#pricing"
                >
                  <span>View Pricing Tiers →</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
