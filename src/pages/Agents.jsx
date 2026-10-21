import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Agents() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Research', 'Code & Architecture', 'Documents & Video', 'Markets', 'Legal & Governance'];

  const agentsList = [
    {
      id: 'general-assistant',
      title: 'General Assistant',
      category: 'Research',
      tag: 'Core Chat',
      tagClass: 'bg-surface-container text-on-surface-variant font-medium',
      icon: 'chat',
      iconClass: 'text-primary bg-surface-container',
      tagline: 'Everyday Q&A, Reasoning & Brainstorming',
      description: 'Your default intelligent assistant for draft creation, reasoning, problem solving, and day-to-day workflow tasks.',
      features: ['Sub-second Response Times', 'General Reasoning & Q&A', 'Drafting & Brainstorming', 'Web Grounding Support'],
      plan: 'Included on Free',
      status: 'ONLINE',
      link: 'https://app.grizonai.com'
    },
    {
      id: 'fast-research',
      title: 'Fast Research',
      category: 'Research',
      tag: 'Fast',
      tagClass: 'bg-secondary-fixed text-on-secondary-fixed font-semibold',
      icon: 'bolt',
      iconClass: 'text-secondary bg-secondary-fixed/50',
      tagline: 'Instant Web Research with Direct Citations',
      description: 'Quick web-scale search across millions of sources with transparent live footnotes and real-time grounding.',
      features: ['Real-Time Web Search', 'Automatic Source Citations', 'Structured Markdown Answers', 'Sub-400ms Retrieval'],
      plan: 'Basic, Pro & Elite',
      status: 'ONLINE',
      link: '/agents/research'
    },
    {
      id: 'deep-research',
      title: 'Deep Research',
      category: 'Research',
      tag: 'Pro+',
      tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed font-semibold',
      icon: 'psychology',
      iconClass: 'text-agent-deep-research bg-agent-deep-research/10',
      tagline: 'Multi-Step Synthesis & Risk Analysis',
      description: 'Autonomous exploration that cross-examines primary sources, fact-checks claims, and synthesizes complex dossiers.',
      features: ['Multi-Step Epistemic Trees', 'Fact-Checking & Risk Analysis', 'Comprehensive Dossiers', 'Audited Footnotes'],
      plan: 'Pro & Elite',
      status: 'ONLINE',
      link: '/agents/research'
    },
    {
      id: 'dev-studio',
      title: 'Dev Studio',
      category: 'Code & Architecture',
      tag: 'Code',
      tagClass: 'bg-surface-container text-agent-dev-studio font-semibold',
      icon: 'terminal',
      iconClass: 'text-agent-dev-studio bg-agent-dev-studio/10',
      tagline: 'Coding, Execution & Live HTML Preview',
      description: 'Write, debug, and preview code in real time with interactive UI execution and sandbox components.',
      features: ['Execution Sandbox Runtimes', 'Live HTML / UI Canvas Preview', 'Multi-Language Support', 'Instant Code Refactoring'],
      plan: 'Basic, Pro & Elite',
      status: 'ONLINE',
      link: '/agents/dev-studio'
    },
    {
      id: 'system-architect',
      title: 'System Architect',
      category: 'Code & Architecture',
      tag: 'Pro+',
      tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed font-semibold',
      icon: 'schema',
      iconClass: 'text-primary bg-surface-container-high',
      tagline: 'Cloud Blueprints & Database Schemas',
      description: 'Design robust software architectures, database schemas, and system blueprints with clear trade-off analyses.',
      features: ['Mermaid Diagram Generation', 'Database Schema DDL', 'Trade-off Decision Matrices', 'Cloud Topology Designs'],
      plan: 'Pro & Elite',
      status: 'ONLINE',
      link: '/agents/system-architect'
    },
    {
      id: 'doc-intelligence',
      title: 'Doc Intelligence & Writer',
      category: 'Documents & Video',
      tag: 'Docs',
      tagClass: 'bg-surface-container text-agent-legal font-medium',
      icon: 'description',
      iconClass: 'text-agent-legal bg-agent-legal/10',
      tagline: 'PDF OCR, Data Extraction & Report Writing',
      description: 'Extract summaries, tables, and structured data from PDFs, scanned documents, and spreadsheets — or draft clean reports.',
      features: ['Zero-Loss Table OCR', 'Multi-Page PDF Ingestion', 'Spreadsheet Data Extraction', 'Executive Report Drafting'],
      plan: 'Basic, Pro & Elite',
      status: 'ONLINE',
      link: '/agents/doc-intelligence'
    },
    {
      id: 'video-analyser',
      title: 'Video Analyser',
      category: 'Documents & Video',
      tag: 'Pro+',
      tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed font-semibold',
      icon: 'smart_display',
      iconClass: 'text-on-primary bg-primary',
      tagline: 'Scene Description & On-Screen Text OCR',
      description: 'Upload a video to describe scenes, extract on-screen text, identify events, and answer questions about the footage.',
      features: ['Keyframe Scene Detection', 'On-Screen Slide & Text OCR', 'Event Timestamp Indexing', 'Multi-Modal Grounded Q&A'],
      plan: 'Pro & Elite',
      status: 'ONLINE',
      link: '/agents/video-analyser'
    },
    {
      id: 'market-analyst',
      title: 'Data & Market Analyst',
      category: 'Markets',
      tag: 'Markets',
      tagClass: 'bg-secondary-fixed text-on-secondary-fixed font-semibold',
      icon: 'candlestick_chart',
      iconClass: 'text-secondary bg-secondary-fixed-dim/30',
      tagline: 'Stock & Crypto Analysis with Bull vs Bear Debate',
      description: 'Analyse stocks and crypto with technical, fundamentals, and news sentiment lenses — Bull vs Bear debate and downloadable reports. Educational research only.',
      features: ['Bull vs Bear Debate Forum', 'Technical & Fundamental Lenses', 'Interactive Charts & Artifacts', 'Educational Research Only'],
      plan: 'Basic, Pro & Elite',
      status: 'ONLINE',
      link: '/agents/market-intelligence'
    },
    {
      id: 'legal-agent',
      title: 'Legal Agent',
      category: 'Legal & Governance',
      tag: 'Legal',
      tagClass: 'bg-secondary-fixed text-on-secondary-fixed font-semibold',
      icon: 'gavel',
      iconClass: 'text-agent-legal bg-agent-legal/10',
      tagline: 'Clause Redlining, Compliance & Risk Scoring',
      description: 'Audit contracts, NDAs, and Master Services Agreements against Indian Contract Act 1872 & DPDP Act 2023. Detect uncapped liability and generate balanced substitutions.',
      features: ['Clause Risk Scoring', 'DPDP Act 2023 Compliance', 'Uncapped Liability Audit', 'Tracked Changes DOCX Export'],
      plan: 'Basic, Pro & Elite',
      status: 'ONLINE',
      link: '/agents/legal'
    }
  ];

  const roadmapAgents = [
    { name: 'Enterprise Security & Forensics', desc: 'Sovereign enclave audit logs & posture verification', icon: 'security', tag: 'Soon' },
    { name: 'Voice & Meeting Notes', desc: 'Audio transcription & action item extraction', icon: 'mic', tag: 'Soon' },
    { name: 'SEO & Content Strategy', desc: 'Keyword clustering & competitive blueprints', icon: 'insights', tag: 'Soon' },
    { name: 'Customer Support Copilot', desc: 'Automated triage & resolution drafting', icon: 'support_agent', tag: 'Soon' },
    { name: 'Data Pipeline Builder', desc: 'ETL orchestration & transformation scripts', icon: 'account_tree', tag: 'Soon' },
    { name: 'Presentation Designer', desc: 'Slide deck outlines & executive visuals', icon: 'co_present', tag: 'Soon' }
  ];

  const filteredAgents = agentsList.filter(agent => {
    const matchesCategory = selectedCategory === 'All' || agent.category === selectedCategory;
    const matchesSearch = agent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-parchment-bg font-body-md text-body-md text-on-surface antialiased relative min-h-screen selection:bg-tertiary-fixed selection:text-on-tertiary-fixed overflow-x-hidden pt-24 sm:pt-28 pb-16">
      {/* ── Ambient Background Glows ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[950px] h-[500px] bg-gradient-to-b from-saffron-glow/15 via-lavender-subtle/10 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[45%] -right-[10%] w-[600px] h-[600px] bg-agent-deep-research/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <section className="pt-2 pb-8 sm:pb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-hairline shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span className="font-label-code text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">
              Specialised Multi-Agent Suite
            </span>
          </div>

          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl text-primary font-medium tracking-tight mb-4">
            Specialised agents for every task
          </h1>

          <p className="font-body-md sm:font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Choose the sovereign agent that fits your objective — or let Auto Mode assign your prompt automatically based on intent.
          </p>
        </section>

        {/* Filter & Search Bar */}
        <section className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 sm:p-2.5 rounded-2xl bg-surface-card border border-border-hairline shadow-xs">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-label-badge text-xs transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-primary text-white font-semibold shadow-xs'
                      : 'bg-surface-container text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <span className="material-symbols-outlined text-outline text-[18px] absolute left-3 top-1/2 -translate-y-1/2">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search agents or workflows..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-surface-low border border-border-hairline text-xs font-body-md text-on-surface placeholder:text-outline focus:outline-hidden"
              />
            </div>
          </div>
        </section>

        {/* ── AGENT CARDS GRID ── */}
        <section className="mb-14 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredAgents.map((agent) => (
              <div
                key={agent.id}
                className="p-6 rounded-2xl bg-surface-card border border-border-hairline shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${agent.iconClass}`}>
                      <span className="material-symbols-outlined text-[22px]">{agent.icon}</span>
                    </div>
                    <span className={`font-label-code text-[11px] px-2.5 py-0.5 rounded-full ${agent.tagClass}`}>
                      {agent.tag}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-base sm:text-lg text-primary font-semibold mb-1">
                    {agent.title}
                  </h3>
                  <p className="font-body-sm text-xs font-semibold text-secondary mb-2">
                    {agent.tagline}
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-4">
                    {agent.description}
                  </p>

                  {/* Features list */}
                  <div className="p-3 rounded-xl bg-surface-low space-y-1.5 mb-4">
                    {agent.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                        <span className="font-body-sm text-[11px] sm:text-xs truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-border-hairline/60">
                  <div className="flex items-center justify-between text-xs font-label-code text-on-surface-variant mb-3">
                    <span>{agent.plan}</span>
                    <span className="flex items-center gap-1 text-agent-dev-studio font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-agent-dev-studio" />
                      {agent.status}
                    </span>
                  </div>

                  <a
                    href={agent.link.startsWith('http') ? agent.link : agent.link}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-primary hover:bg-primary-container text-white font-headline-sm text-xs font-semibold transition-colors"
                  >
                    <span>Open in Workspace</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ROADMAP SECTION (More agents on the way) ── */}
        <section className="mb-14 sm:mb-16">
          <div className="rounded-2xl bg-surface-card border border-border-hairline p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-border-hairline gap-3">
              <div>
                <span className="font-label-code text-[10px] sm:text-label-code text-secondary font-bold uppercase tracking-wider">
                  Roadmap
                </span>
                <h2 className="font-headline-sm text-lg sm:text-xl text-primary font-semibold mt-1">
                  More agents on the way
                </h2>
              </div>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant max-w-md">
                We are expanding the catalogue with new specialised agents for more workflows. Auto Mode will route to them as they launch — stay tuned.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {roadmapAgents.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-low border border-border-hairline flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="material-symbols-outlined text-outline text-[18px] shrink-0">
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="font-headline-sm text-xs sm:text-sm text-primary font-semibold truncate">
                        {item.name}
                      </p>
                      <p className="font-body-sm text-[10px] sm:text-xs text-on-surface-variant truncate">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <span className="font-label-code text-[10px] px-2 py-0.5 rounded-full bg-surface-container text-outline font-bold uppercase shrink-0">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="rounded-2xl bg-gradient-to-br from-primary via-primary-container to-primary text-on-primary p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-saffron-glow/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-lg mx-auto space-y-4">
            <h3 className="font-display-hero text-2xl sm:text-3xl text-on-primary font-medium">
              Start with Auto Mode today
            </h3>
            <p className="font-body-md text-xs sm:text-sm text-primary-fixed-dim leading-relaxed">
              Describe your task once. GriZon automatically picks the right agent for your prompt.
            </p>
            <div className="pt-2">
              <a
                href="https://app.grizonai.com"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-primary font-headline-sm text-xs sm:text-sm font-semibold hover:bg-surface-container-low transition-all shadow-sm"
              >
                <span>Start Free</span>
                <span className="material-symbols-outlined text-[16px]">bolt</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
