import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const SPECIALISTS_LIST = [
  {
    id: 'legal',
    num: '01',
    name: 'Legal Intelligence India',
    category: 'Markets & Law',
    tagline: 'Deterministic statutory analysis, precedent verification, and BNS concordance.',
    badge: 'Statutory Core',
    speed: '<150ms',
    icon: 'gavel',
    path: '/agents/legal',
    infrastructure: ['eCourts NJDG (16-Digit CNR)', 'Indian Kanoon Live Node', 'BNS/IPC Concordance', 'Zero Hallucination'],
    blueprint: [
      'Fact extraction and territorial jurisdiction lock (Supreme Court, High Courts, NCLT).',
      'Statutory concordance crosswalk between legacy IPC (1860) and BNS (2023).',
      'Live CNR precedent retrieval filtering out overruled authorities.',
      'Operative ratio decidendi separation from casual judicial obiter dicta.',
      'Pre-trial adversarial counterargument and laches defense audit.',
    ],
    samplePrompt: 'Review commercial lease dispute under Section 11 of the Arbitration & Conciliation Act in Delhi High Court.',
  },
  {
    id: 'market',
    num: '02',
    name: 'Market & Trading Quant',
    category: 'Markets & Law',
    tagline: 'NSE & BSE tick oracles, option skew profiles, and Bull vs Bear debate synthesis.',
    badge: 'NSE Oracles',
    speed: '<120ms',
    icon: 'monitoring',
    path: '/agents/market-intelligence',
    infrastructure: ['NSE Option Chain Ticks', 'RBI MPC Macro Index', 'DCF Valuation Models', 'Gamma Risk Skew'],
    blueprint: [
      'Ingest real-time option chain strikes across Bank Nifty and Nifty 50.',
      'Calculate implied volatility rank and call-put open interest delta.',
      'Simulate structured adversarial Bull vs Bear investment theses.',
      'Extract balance sheet ratios and generate sensitivity breakdown sheets.',
    ],
    samplePrompt: 'Simulate Bull vs Bear liquidity thesis for Nifty 50 Banking Index based on upcoming RBI rate decision.',
  },
  {
    id: 'dev',
    num: '03',
    name: 'Dev Studio Agent',
    category: 'Engineering & Code',
    tagline: 'Full-stack code generation, container debugging, and live HTML visual previews.',
    badge: 'Linux VM',
    speed: '<180ms',
    icon: 'code',
    path: '/agents/dev-studio',
    infrastructure: ['Isolated Linux Container', 'Tailwind CSS v4 Engine', 'AST Parser & Linter', 'Live Component Sandbox'],
    blueprint: [
      'Parse AST syntax trees and enforce strict typescript/react safety boundaries.',
      'Compile component sandbox preview in isolated memory container.',
      'Optimize bundle overhead and ensure WCAG AA accessibility compliance.',
      'Generate unit tests and assert-based self-checks before shipping code.',
    ],
    samplePrompt: 'Generate an interactive React telemetry component for sovereign node latency monitoring using Tailwind CSS.',
  },
  {
    id: 'arch',
    num: '04',
    name: 'System Architect',
    category: 'Engineering & Code',
    tagline: 'High-availability infrastructure topology, distributed consensus, and cloud blueprints.',
    badge: 'Cloud VPC',
    speed: '<220ms',
    icon: 'schema',
    path: '/agents/system-architect',
    infrastructure: ['AWS ap-south-1 Topology', 'PostgreSQL HSM Partitioning', 'Mermaid & PlantUML', 'Sovereign Enclave'],
    blueprint: [
      'Model zero-trust VPC ingress and sovereign HSM key management routing.',
      'Synthesize database schema partitioning with row-level double-spend protection.',
      'Map microservice failover chains and asynchronous queue backpressure.',
      'Export production Mermaid diagrams and architecture decision records.',
    ],
    samplePrompt: 'Design a multi-region ap-south-1 database cluster with zero cross-border data egress for DPDP compliance.',
  },
  {
    id: 'math',
    num: '05',
    name: 'Mathematics & Quantitative',
    category: 'Engineering & Code',
    tagline: 'SymPy symbolic derivations, discrete algebra, and formal mathematical proofs.',
    badge: 'Symbolic Engine',
    speed: '<200ms',
    icon: 'functions',
    path: '/welcome',
    infrastructure: ['SymPy Algebraic Core', 'NumPy Matrix Runtimes', 'Formal Proof Verification', 'LaTeX Formatter'],
    blueprint: [
      'Tokenize symbolic mathematical expressions without floating-point rounding errors.',
      'Execute formal proof verification across discrete optimization boundaries.',
      'Solve closed-form ODEs and differential systems with step-by-step LaTeX.',
      'Validate cryptographic hashing equations and entropy distributions.',
    ],
    samplePrompt: 'Derive Black-Scholes PDE boundary conditions with step-by-step Greeks and LaTeX notation.',
  },
  {
    id: 'deep',
    num: '06',
    name: 'Deep Research Engine',
    category: 'Research & Evidence',
    tagline: 'Autonomous recursive DAG synthesis with quantitative risk modeling and citations.',
    badge: 'Recursive DAG',
    speed: '<600ms',
    icon: 'psychology',
    path: '/agents/research',
    infrastructure: ['Multi-Step Recursive Tree', 'MCA Company Registries', 'Gazette of India Archive', 'Citation Grounding'],
    blueprint: [
      'Deconstruct complex multi-disciplinary query into a tree of sub-hypotheses.',
      'Query parallel live institutional databases across legal, financial, and policy nodes.',
      'Prune contradictory evidence and rank empirical claims by source authority.',
      'Compile executive synthesis report with permanent footnote references.',
    ],
    samplePrompt: 'Construct a cross-border data transfer audit for AWS Mumbai vs DPDP 2023 non-repudiation mandates.',
  },
  {
    id: 'fast',
    num: '07',
    name: 'Fast Research Engine',
    category: 'Research & Evidence',
    tagline: 'Sub-second real-time web lookup indexing 350+ live feeds with verified citations.',
    badge: 'Live Indexing',
    speed: '<300ms',
    icon: 'bolt',
    path: '/welcome',
    infrastructure: ['Real-Time Web Indexer', 'Cryptographic Citations', 'Serper & Tavily Nodes', 'Zero Stale Data'],
    blueprint: [
      'Execute multi-stream parallel web crawling across official regulatory portals.',
      'Extract factual summaries with exact URL citations in under 400ms.',
      'Filter clickbait and SEO noise to retain authoritative primary sources.',
    ],
    samplePrompt: 'Fetch latest circular from SEBI on algorithmic execution co-location fees and summarise core changes.',
  },
  {
    id: 'general',
    num: '08',
    name: 'General Reasoning & Ideation',
    category: 'Research & Evidence',
    tagline: 'Multilingual conversational drafting, strategic coordination, and unconstrained ideation.',
    badge: 'Multilingual',
    speed: '<100ms',
    icon: 'chat',
    path: '/welcome',
    infrastructure: ['12 Indian Languages', 'Zero Context Bloat', 'Low-Latency Streaming', 'Task Orchestrator'],
    blueprint: [
      'Translate and draft complex operational memos across Hindi, English, and regional vernaculars.',
      'Brainstorm executive options and coordinate multi-agent tasks.',
      'Provide clear, conversational explanations of complex analytical outputs.',
    ],
    samplePrompt: 'Draft an executive announcement in English and Hindi regarding our enterprise AI compliance rollout.',
  },
  {
    id: 'doc',
    num: '09',
    name: 'Doc Intelligence & Writer',
    category: 'Vision & Documents',
    tagline: 'Neural OCR for 200+ page scans, financial table extraction, and statutory drafting.',
    badge: 'Neural OCR',
    speed: '<400ms',
    icon: 'description',
    path: '/agents/doc-intelligence',
    infrastructure: ['Multi-Page PDF Parsing', 'Schedule III MCA Extraction', 'Table Normalization', 'Audit Discrepancy Checks'],
    blueprint: [
      'Ingest scanned contracts, high-resolution PDFs, and balance sheet scans.',
      'Normalize multi-page tabular data into structured CSV and JSON outputs.',
      'Cross-check related-party notes against statutory MCA thresholds.',
      'Export formatted reports in Word, PDF, or Excel formats.',
    ],
    samplePrompt: 'Extract Schedule III balance sheet line items from 180-page quarterly report and flag related-party discrepancies.',
  },
];

const CATEGORIES = [
  'All Specialists',
  'Markets & Law',
  'Engineering & Code',
  'Research & Evidence',
  'Vision & Documents',
];

export default function Agents() {
  const [activeCategory, setActiveCategory] = useState('All Specialists');
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const filteredAgents =
    activeCategory === 'All Specialists'
      ? SPECIALISTS_LIST
      : SPECIALISTS_LIST.filter((a) => a.category === activeCategory);

  return (
    <div className="w-full flex flex-col bg-[#FAF9F5] text-[#07091B] font-sans antialiased min-h-screen">
      {/* =====================================================================
          1. PAGE HEADER: Editorial Non-AI Sans-Serif Typography & Zero Clutter
      ====================================================================== */}
      <section className="relative w-full pt-32 sm:pt-36 lg:pt-40 pb-14 border-b border-[#E6E4DD] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex items-center justify-start mb-8 text-left">
            <Breadcrumb />
          </div>

          <div className="text-center flex flex-col items-center">

            {/* Headline */}
            <h1 className="font-sans text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#07091B] tracking-tight leading-[1.12] mb-4 max-w-3xl text-balance">
              Engineered minds for critical domains. Zero generic chat.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance mb-8">
              Each specialist executes an isolated, deterministic pipeline grounded directly in official gazettes, NSE live tick feeds, or sandboxed Linux containers.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full font-sans text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#07091B] text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-[#E6E4DD] hover:border-[#6630E4]/40 hover:text-[#07091B]'
                    }`}
                  >
                    {cat}
                    {cat === 'All Specialists' && ` (${SPECIALISTS_LIST.length})`}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. SPECIALISTS GRID: Clean, High-Breathing Room Cards
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="h-full rounded-3xl bg-white border border-[#E6E4DD] hover:border-[#6630E4]/40 p-7 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-lg group"
            >
              <div className="flex-1 flex flex-col">
                {/* Top Row: Icon & Status Badges */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center text-[#6630E4] group-hover:bg-[#6630E4] group-hover:text-white transition-colors duration-200">
                    <span className="material-symbols-outlined text-[22px]">{agent.icon}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs text-slate-400 font-medium">{agent.speed}</span>
                    <span className="font-sans text-[11px] px-2.5 py-0.5 rounded-full bg-[#F5F1FD] border border-[#E8E0FB] text-[#6630E4] font-bold uppercase tracking-wide">
                      {agent.badge}
                    </span>
                  </div>
                </div>

                {/* Sub-label & Title */}
                <span className="font-sans text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">
                  Specialist {agent.num} · {agent.category}
                </span>
                <h3 className="font-sans text-lg font-bold text-[#07091B] tracking-tight mb-2 group-hover:text-[#6630E4] transition-colors">
                  {agent.name}
                </h3>

                {/* Concise 1-2 line description */}
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {agent.tagline}
                </p>

                {/* Sovereign Node Pills (Matching Home Page Sans-Serif Pills) */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {agent.infrastructure.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-sans font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action: Editorial 'Launch now ↗' with Dotted Underline */}
              <div className="pt-4 mt-auto border-t border-[#E6E4DD]/70 flex items-center justify-between">
                <Link
                  to={agent.path}
                  className="group inline-flex items-center gap-1.5 pb-1 border-b-2 border-dotted border-[#07091B]/40 hover:border-[#6630E4] text-[#07091B] hover:text-[#6630E4] font-sans text-xs sm:text-[13px] font-bold transition-all"
                >
                  <span>Launch now</span>
                  <span className="material-symbols-outlined text-[15px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    arrow_outward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. PROGRESSIVE DISCLOSURE DRAWER: Detailed Pipeline on Demand
      ====================================================================== */}
      {selectedAgent && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-l border-[#E6E4DD]">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E4DD] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#07091B] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">{selectedAgent.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-[#07091B]">{selectedAgent.name}</h3>
                    <p className="font-sans text-xs text-[#6630E4] font-semibold">
                      Specialist {selectedAgent.num} · {selectedAgent.badge}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedAgent(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              {/* Tagline */}
              <p className="font-sans text-sm text-slate-700 leading-relaxed mb-6">
                {selectedAgent.tagline}
              </p>

              {/* Blueprint Pipeline Steps */}
              <div className="mb-6">
                <span className="font-sans text-xs uppercase font-bold text-[#6630E4] tracking-wider block mb-3">
                  Deterministic Inference Cycle
                </span>
                <div className="space-y-2.5 font-sans text-xs">
                  {selectedAgent.blueprint.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-start gap-3">
                      <span className="font-sans text-xs font-bold text-[#6630E4] bg-[#F5F1FD] px-2.5 py-0.5 rounded-full border border-[#E8E0FB] shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-slate-700 leading-relaxed pt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Connected Institutional Nodes */}
              <div className="mb-6">
                <span className="font-sans text-xs uppercase font-bold text-slate-500 tracking-wider block mb-2.5">
                  Connected Sovereign Nodes
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedAgent.infrastructure.map((node, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#FAF9F5] font-sans text-xs text-slate-700 font-medium border border-[#E6E4DD]"
                    >
                      {node}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Executive Prompt */}
              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD]">
                <span className="font-sans text-xs uppercase font-bold text-slate-500 tracking-wider block mb-1">
                  Sample Prompt Query
                </span>
                <p className="font-sans text-xs text-slate-800 font-medium leading-relaxed">
                  "{selectedAgent.samplePrompt}"
                </p>
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-6 border-t border-[#E6E4DD] flex items-center justify-between gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(selectedAgent.samplePrompt);
                  setCopiedPrompt(true);
                  setTimeout(() => setCopiedPrompt(false), 2000);
                }}
                className="px-4 py-2.5 rounded-full bg-[#FAF9F5] hover:bg-slate-100 border border-[#E6E4DD] font-sans text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                {copiedPrompt ? 'Copied Prompt!' : 'Copy Prompt'}
              </button>
              <Link
                to={selectedAgent.path}
                className="px-5 py-2.5 rounded-full bg-[#6630E4] hover:bg-[#5221C6] text-white font-sans text-xs font-bold transition-colors shadow-xs"
              >
                Launch Specialist
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          4. SIGNATURE BOTTOM CONVERSION CTA (Matching Dark Sovereign Brand)
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-[#090B19] via-[#120F2B] to-[#090B19] p-8 sm:p-14 text-center text-white relative overflow-hidden border border-[#6630E4]/30 shadow-[0_20px_50px_rgba(9,11,25,0.25)]">
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">

            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 text-balance">
              Deploy sovereign domain specialists today.
            </h2>

            <p className="font-sans text-sm text-slate-300 leading-relaxed mb-8 text-balance">
              Join enterprise legal counsels, quant funds, and engineering teams using deterministic intelligence.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
              <Link
                to="/welcome"
                className="group inline-flex items-center gap-3.5 pl-7 pr-2.5 py-3 rounded-full bg-[#6630E4] hover:bg-[#5221C6] text-white font-sans text-sm font-bold transition-all duration-300 shadow-[0_4px_18px_rgba(102,48,228,0.35)] hover:shadow-[0_6px_24px_rgba(102,48,228,0.45)] active:scale-[0.98]"
              >
                <span>Initialize Workspace</span>
                <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-white transition-all duration-200 group-hover:scale-0 group-hover:opacity-0" />
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
