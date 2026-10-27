import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SPECIALISTS_LIST = [
  {
    id: 'legal',
    num: '01',
    name: 'Legal Intelligence India',
    category: 'Markets & Law',
    tagline: 'Deterministic statutory analysis, precedent verification, and BNS concordance.',
    badge: 'Statutory Core',
    speed: '<150ms',
    accentColor: 'rose',
    icon: 'gavel',
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
    accentColor: 'orange',
    icon: 'monitoring',
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
    accentColor: 'teal',
    icon: 'code',
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
    accentColor: 'indigo',
    icon: 'schema',
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
    name: 'Mathematics & Formal Logic',
    category: 'Engineering & Code',
    tagline: 'SymPy symbolic derivations, discrete algebra, and formal mathematical proofs.',
    badge: 'Symbolic Engine',
    speed: '<200ms',
    accentColor: 'cyan',
    icon: 'functions',
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
    accentColor: 'blue',
    icon: 'psychology',
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
    accentColor: 'amber',
    icon: 'bolt',
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
    accentColor: 'slate',
    icon: 'chat',
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
    name: 'Doc Intelligence & OCR',
    category: 'Vision & Documents',
    tagline: 'Neural OCR for 200+ page scans, financial table extraction, and statutory drafting.',
    badge: 'Neural OCR',
    speed: '<400ms',
    accentColor: 'emerald',
    icon: 'description',
    infrastructure: ['Multi-Page PDF Parsing', 'Schedule III MCA Extraction', 'Table Normalization', 'Audit Discrepancy Checks'],
    blueprint: [
      'Ingest scanned contracts, high-resolution PDFs, and balance sheet scans.',
      'Normalize multi-page tabular data into structured CSV and JSON outputs.',
      'Cross-check related-party notes against statutory MCA thresholds.',
      'Export formatted reports in Word, PDF, or Excel formats.',
    ],
    samplePrompt: 'Extract Schedule III balance sheet line items from 180-page quarterly report and flag related-party discrepancies.',
  },
  {
    id: 'video',
    num: '10',
    name: 'Video Analyser & Vision',
    category: 'Vision & Documents',
    tagline: 'Multi-hour video indexing, speech-to-text alignment, and slide OCR timeline queries.',
    badge: 'Timeline OCR',
    speed: '<500ms',
    accentColor: 'violet',
    icon: 'smart_display',
    infrastructure: ['Video Keyframe Vectorizer', 'Whisper Speech-to-Text', 'On-Screen Slide OCR', 'Timeline Bookmarking'],
    blueprint: [
      'Extract keyframe embeddings from investor webcasts and board presentations.',
      'Align speech transcriptions with on-screen slide text down to exact milliseconds.',
      'Query executive guidance timestamps and export verified video clip links.',
    ],
    samplePrompt: 'Parse AGM investor webcast: detect every mention of EBITDA margin guidance and export timestamps.',
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
  const [selectedAgent, setSelectedAgent] = useState(null); // Controls slide-over drawer
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Filtered list
  const filteredAgents =
    activeCategory === 'All Specialists'
      ? SPECIALISTS_LIST
      : SPECIALISTS_LIST.filter((a) => a.category === activeCategory);

  return (
    <div className="w-full flex flex-col bg-[#FAF9F5] text-[#18181B] font-sans selection:bg-amber-100 selection:text-amber-900 min-h-screen">
      {/* =====================================================================
          PAGE HEADER: Clean, Non-AI Sans-Serif Typography & Zero Clutter
      ====================================================================== */}
      <section className="relative w-full pt-12 sm:pt-16 pb-12 border-b border-[#E6E4DD] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-mono font-semibold text-slate-700 mb-5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>10 Purpose-Built Specialists • Zero Generic Chat</span>
          </div>

          {/* Headline in pure modern sans */}
          <h1 className="font-sans text-3xl sm:text-5xl md:text-[54px] font-extrabold text-[#07091B] tracking-tight leading-[1.1] mb-4 max-w-3xl">
            Engineered minds for every domain.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-indigo-600">
              Not generic conversation.
            </span>
          </h1>

          {/* Low, crisp subtitle */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#52525B] max-w-2xl leading-relaxed mb-8">
            Each specialist runs on an isolated cognitive pipeline directly grounded in live statutory gazettes, NSE tick feeds, or Linux sandbox runtimes.
          </p>

          {/* Category Filter Pills (Aligned, Breathable) */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1E3A3A] text-white shadow-xs'
                    : 'bg-[#FAF9F5] text-slate-600 border border-[#E6E4DD] hover:bg-slate-100'
                }`}
              >
                {cat}
                {cat === 'All Specialists' && ` (${SPECIALISTS_LIST.length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SPECIALISTS GRID: Spacious Luxury Cards (Zero Bheed / No 15-line essays)
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="p-6 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center text-[#1E3A3A] group-hover:bg-[#1E3A3A] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[22px]">{agent.icon}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-400 font-semibold">{agent.speed}</span>
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold uppercase">
                      {agent.badge}
                    </span>
                  </div>
                </div>

                {/* Title & Domain */}
                <span className="font-mono text-[10px] uppercase font-bold text-amber-700 tracking-wider block mb-1">
                  Specialist {agent.num} • {agent.category}
                </span>
                <h3 className="font-sans text-lg font-bold text-[#18181B] mb-2">
                  {agent.name}
                </h3>

                {/* Short 1-2 line description (LOW CONTENT) */}
                <p className="font-sans text-xs sm:text-[13px] text-[#52525B] leading-relaxed mb-5">
                  {agent.tagline}
                </p>

                {/* Infrastructure Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {agent.infrastructure.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-[#FAF9F5] border border-[#E6E4DD] text-[10.5px] font-mono text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Launch & Inspect Drawer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedAgent(agent)}
                  className="font-sans text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px]">info</span>
                  <span>Inspect Pipeline</span>
                </button>

                <Link
                  to="/welcome"
                  className="px-3.5 py-1.5 rounded-full bg-[#1E3A3A] hover:bg-[#142929] text-white font-sans text-xs font-semibold flex items-center gap-1 transition-colors shadow-2xs"
                >
                  <span>Launch</span>
                  <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          PROGRESSIVE DISCLOSURE DRAWER: Detailed Pipeline on Demand
          (Keeps main page 100% clean, but lets power users inspect deep specs!)
      ====================================================================== */}
      {selectedAgent && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-l border-[#E6E4DD]">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#1E3A3A] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">{selectedAgent.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-[#18181B]">{selectedAgent.name}</h3>
                    <p className="font-mono text-[11px] text-slate-400">Specialist {selectedAgent.num} • {selectedAgent.badge}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
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
                <span className="font-mono text-xs uppercase font-bold text-slate-500 tracking-wider block mb-3">
                  Deterministic Inference Cycle
                </span>
                <div className="space-y-2.5 font-sans text-xs">
                  {selectedAgent.blueprint.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-start gap-2.5">
                      <span className="font-mono text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80 shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-slate-700 leading-normal">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Connected Institutional Nodes */}
              <div className="mb-6">
                <span className="font-mono text-xs uppercase font-bold text-slate-500 tracking-wider block mb-2.5">
                  Connected Sovereign Nodes
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedAgent.infrastructure.map((node, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-slate-100 font-mono text-xs text-slate-700 font-medium border border-slate-200">
                      {node}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Executive Prompt */}
              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD]">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                  Sample Executive Query
                </span>
                <p className="font-sans text-xs text-slate-800 font-medium leading-relaxed">
                  "{selectedAgent.samplePrompt}"
                </p>
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3 mt-6">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(selectedAgent.samplePrompt);
                  setCopiedPrompt(true);
                  setTimeout(() => setCopiedPrompt(false), 2000);
                }}
                className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 font-sans text-xs font-semibold text-slate-700 transition-colors"
              >
                {copiedPrompt ? 'Copied Prompt!' : 'Copy Sample Prompt'}
              </button>
              <Link
                to="/welcome"
                className="px-5 py-2.5 rounded-full bg-[#1E3A3A] hover:bg-[#142929] text-white font-sans text-xs font-bold transition-colors shadow-xs"
              >
                Launch in Workspace
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          BOTTOM CONVERSION BANNER (Clean & Un-clustered)
      ====================================================================== */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="rounded-[32px] bg-gradient-to-br from-[#1E3A3A] via-[#142929] to-[#07091B] p-8 sm:p-12 text-center text-white relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400 font-bold mb-2">
              All 10 Specialists Available Across All Plans
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Ready to work with domain specialists?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Initialize your sovereign workspace with free trial compute credits. Zero credit card required.
            </p>
            <Link
              to="/welcome"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-[#1E3A3A] font-sans text-xs sm:text-sm font-bold hover:bg-slate-100 transition-all shadow-md active:scale-[0.98]"
            >
              <span>Initialize Workspace</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
