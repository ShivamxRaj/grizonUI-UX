import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AppDashboard() {
  // Navigation & Panes State
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [artifactOpen, setArtifactOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'tasks' | 'memory'
  const [currentProject, setCurrentProject] = useState('NIFTY Swing Desk');
  
  // Prompt & Auto-Router State
  const [inputPrompt, setInputPrompt] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('auto');
  const [selectedModel, setSelectedModel] = useState('auto');
  const [showModelPicker, setShowModelPicker] = useState(false);
  const [showAgentPicker, setShowAgentPicker] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  
  // Active Thread Messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'user',
      timestamp: '09:21 IST',
      text: 'Analyze RELIANCE 3000 CE open interest delta since morning 09:15 open and verify if the Put/Call ratio warrants a defensive adjustment under current IV.',
      attachedFile: null
    },
    {
      id: 2,
      role: 'assistant',
      timestamp: '09:21:04 IST',
      trace: {
        recalledMemories: ['Swing Trading Horizon', 'Mandatory Math Invalidation Rule'],
        agentName: 'Market Intelligence Specialist',
        provider: 'Google Gemini 1.5 Pro',
        tools: ['NSE Option Chain (09:20 IST)', 'Black-Scholes Greek Engine', 'Yahoo Finance Tick API'],
        credits: 3.5,
        executionTimeMs: 412
      },
      content: {
        summary: 'Bullish momentum remains structurally intact, but aggressive call writing at the 3,020 strike indicates immediate overhead resistance.',
        bullConfluence: [
          'Net Put/Call ratio expanded from 0.94 to 1.12 between 09:15 and 09:20 IST, confirming sustained institutional put writing at 2,960 and 2,980 PE strikes.',
          'Implied Volatility (IV) contracted by -0.8% to 14.2%, signaling absence of institutional panic or downside hedging demand.'
        ],
        bearDownside: [
          'Heavy call addition observed at 3,020 CE (+22.4 lakh shares added in 15 minutes). Any intraday spike toward 3,015 is vulnerable to quick mean reversion.'
        ],
        invalidationLevel: '3,024.50 spot close or breakdown below 2,958 (20 EMA on 15m chart).',
        artifactType: 'option_matrix'
      }
    }
  ]);

  // Trace accordion state
  const [traceExpanded, setTraceExpanded] = useState(true);
  // Active Artifact Tab
  const [artifactTab, setArtifactTab] = useState('preview'); // 'preview' | 'data' | 'export'

  // Dynamic Auto-Router detector based on user typing
  const detectAgentFromInput = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('cnr') || lower.includes('section') || lower.includes('bns') || lower.includes('court') || lower.includes('bail') || lower.includes('petition')) {
      return { name: 'Legal Specialist', icon: 'gavel', color: 'text-terracotta' };
    }
    if (lower.includes('nifty') || lower.includes('reliance') || lower.includes('ce') || lower.includes('pe') || lower.includes('strike') || lower.includes('option') || lower.includes('share')) {
      return { name: 'Market Intelligence', icon: 'trending_up', color: 'text-emerald-700' };
    }
    if (lower.includes('code') || lower.includes('api') || lower.includes('react') || lower.includes('python') || lower.includes('ast') || lower.includes('bug')) {
      return { name: 'Dev Studio / Architect', icon: 'terminal', color: 'text-botanical' };
    }
    if (lower.includes('paper') || lower.includes('research') || lower.includes('arxiv') || lower.includes('citation')) {
      return { name: 'Research Specialist', icon: 'menu_book', color: 'text-indigo-700' };
    }
    return { name: 'Auto-Router ⚡', icon: 'auto_awesome', color: 'text-botanical' };
  };

  const detectedAgent = detectAgentFromInput(inputPrompt);

  const handleSend = () => {
    if (!inputPrompt.trim()) return;

    const newMsg = {
      id: Date.now(),
      role: 'user',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' IST',
      text: inputPrompt
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputPrompt('');

    // Simulate agent response with execution trace
    setTimeout(() => {
      const respMsg = {
        id: Date.now() + 1,
        role: 'assistant',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' IST',
        trace: {
          recalledMemories: ['Jurisdiction: Delhi High Court', 'BNS/BNSS 2023 Temporal Migration'],
          agentName: detectedAgent.name === 'Auto-Router ⚡' ? 'Legal Intelligence Specialist' : detectedAgent.name,
          provider: 'Claude 3.5 Sonnet',
          tools: ['eCourts India Registry', 'Indian Kanoon Precedent Search', 'SymPy AST Sandbox'],
          credits: 4.0,
          executionTimeMs: 480
        },
        content: {
          summary: 'Verified against eCourts CNR registry. The cited statutory framework maps to BNS Section 103 and BNSS Section 483.',
          bullConfluence: [
            'Bench orders confirm application of recent Supreme Court ruling [2024 INSC 742].',
            'No contradictory circulars found in active Gazette repository.'
          ],
          bearDownside: [
            'Notice period of 14 statutory days remains active until formal service verification.'
          ],
          invalidationLevel: 'Filing after 16:00 IST triggers mandatory deferral to following roster.',
          artifactType: 'legal_draft'
        }
      };
      setMessages((prev) => [...prev, respMsg]);
      setArtifactOpen(true);
    }, 900);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-alabaster text-charcoal overflow-hidden font-sans select-none">
      {/* =====================================================================
          1. TOP UTILITY APP HEADER
      ====================================================================== */}
      <header className="h-14 shrink-0 border-b border-hairline bg-alabaster/95 px-4 flex items-center justify-between z-30">
        {/* Left: Sidebar toggle & Project Switcher */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-md hover:bg-surfaceSubtle text-mutedInk hover:text-charcoal transition-colors"
            title="Toggle Sidebar"
          >
            <span className="material-symbols-outlined text-[20px]">
              {sidebarOpen ? 'menu_open' : 'menu'}
            </span>
          </button>

          <Link to="/" className="flex items-center gap-2 group mr-2">
            <img
              src="/grizon-icon.png"
              alt="GriZon AI Logo"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain rounded-md"
            />
            <div className="flex items-baseline gap-1">
              <span className="font-syne text-[17px] font-bold text-charcoal tracking-[-0.03em] leading-none group-hover:text-botanical transition-colors">
                GriZon
              </span>
              <span className="font-mono text-[9px] font-bold tracking-[0.14em] uppercase text-white bg-charcoal px-1 py-[1.5px] rounded leading-none shadow-xs group-hover:bg-botanical transition-colors">
                AI
              </span>
            </div>
          </Link>

          {/* Project Enclave Selector Dropdown */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-hairline bg-surfacePure hover:border-borderStrong transition-all cursor-pointer">
            <span className="material-symbols-outlined text-botanical text-[16px]">folder</span>
            <span className="font-sans text-xs font-semibold text-charcoal">{currentProject}</span>
            <span className="material-symbols-outlined text-mutedInk text-[14px]">arrow_drop_down</span>
          </div>

          <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            7 APIs Online
          </span>
        </div>

        {/* Center: Live Active Routing Mode */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surfaceSubtle border border-hairline font-mono text-xs text-charcoal">
            <span className="material-symbols-outlined text-terracotta text-[15px]">psychology</span>
            <span>Active Model:</span>
            <span className="font-semibold text-botanical">
              {selectedModel === 'auto' ? 'Auto Sovereign Routing' : selectedModel}
            </span>
          </div>
        </div>

        {/* Right: Credits, Artifact Drawer Toggle & User */}
        <div className="flex items-center gap-3">
          {/* Credit Ledger Pill */}
          <Link
            to="/pricing"
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-xs hover:border-borderStrong transition-all"
            title="View Credit Economy"
          >
            <span className="material-symbols-outlined text-terracotta text-[16px]">toll</span>
            <span className="font-semibold text-charcoal">2,410.5</span>
            <span className="text-mutedInk text-[10px]">CR</span>
          </Link>

          {/* Right Artifact Canvas Toggle Button */}
          <button
            type="button"
            onClick={() => setArtifactOpen(!artifactOpen)}
            className={`p-1.5 rounded-md border transition-all flex items-center gap-1 text-xs font-sans font-medium ${
              artifactOpen
                ? 'bg-botanical text-alabaster border-botanical'
                : 'bg-surfacePure text-charcoal border-hairline hover:bg-surfaceSubtle'
            }`}
            title="Toggle Split-Screen Artifact Canvas"
          >
            <span className="material-symbols-outlined text-[18px]">dock_to_left</span>
            <span className="hidden md:inline">Artifact</span>
          </button>

          {/* User Avatar */}
          <div className="w-7 h-7 rounded-full bg-botanical text-alabaster flex items-center justify-center font-mono text-xs font-semibold">
            SR
          </div>
        </div>
      </header>

      {/* =====================================================================
          2. THREE-PANE MAIN WORKSPACE BODY
      ====================================================================== */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* =====================================================================
            PANE 1: LEFT SIDEBAR (260px)
        ====================================================================== */}
        {sidebarOpen && (
          <aside className="w-64 shrink-0 border-r border-hairline bg-surfaceSubtle/60 flex flex-col justify-between overflow-y-auto animate-fadeIn">
            {/* Top Workspace Sections */}
            <div className="p-3 space-y-4">
              {/* New Conversation CTA */}
              <button
                type="button"
                onClick={() => {
                  setMessages([
                    {
                      id: Date.now(),
                      role: 'assistant',
                      timestamp: 'Just now',
                      trace: {
                        recalledMemories: ['Standing Context: Primary Watchlist'],
                        agentName: 'Auto-Router ⚡',
                        provider: 'Multi-Model Sovereign Mesh',
                        tools: ['Live System Bus'],
                        credits: 0,
                        executionTimeMs: 40
                      },
                      content: {
                        summary: 'New conversation enclave initialized. How can GriZon assist you today? Paste a contract, query an option chain, or request a research synthesis.',
                        bullConfluence: [],
                        bearDownside: [],
                        invalidationLevel: 'Ready for deterministic dispatch.',
                        artifactType: null
                      }
                    }
                  ]);
                }}
                className="w-full py-2 px-3 rounded-lg bg-surfacePure border border-hairline hover:border-botanical text-charcoal font-sans text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all hover:bg-white"
              >
                <span className="material-symbols-outlined text-[16px] text-botanical">add</span>
                <span>New Conversation</span>
              </button>

              {/* Core Nav Links */}
              <nav className="space-y-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('chat')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeTab === 'chat'
                      ? 'bg-surfacePure text-charcoal shadow-xs border border-hairline'
                      : 'text-mutedInk hover:text-charcoal hover:bg-surfacePure/40'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-botanical">chat_bubble</span>
                    <span>Command Stream</span>
                  </span>
                  <span className="font-mono text-[10px] text-mutedInk">⌘1</span>
                </button>

                <Link
                  to="/workflow"
                  className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium text-mutedInk hover:text-charcoal hover:bg-surfacePure/40 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-terracotta">schedule</span>
                    <span>Scheduled Tasks</span>
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-terracotta/10 text-terracotta font-mono text-[10px] font-semibold">
                    3 Active
                  </span>
                </Link>

                <Link
                  to="/workflow"
                  className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium text-mutedInk hover:text-charcoal hover:bg-surfacePure/40 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-botanical">memory</span>
                    <span>Memory Matrix</span>
                  </span>
                  <span className="font-mono text-[10px] text-mutedInk">Layer 1 &amp; 2</span>
                </Link>
              </nav>

              {/* Projects Enclaves */}
              <div className="space-y-1 pt-2 border-t border-hairline">
                <div className="flex items-center justify-between px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-mutedInk font-semibold">
                  <span>Project Enclaves</span>
                  <button type="button" className="hover:text-charcoal">
                    <span className="material-symbols-outlined text-[14px]">add</span>
                  </button>
                </div>
                {['NIFTY Swing Desk', 'Delhi HC Writ Watch', 'Fintech Architecture ADR'].map((proj) => (
                  <button
                    key={proj}
                    type="button"
                    onClick={() => setCurrentProject(proj)}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs transition-all text-left ${
                      currentProject === proj
                        ? 'bg-surfacePure text-charcoal font-semibold border border-hairline'
                        : 'text-mutedInk hover:text-charcoal hover:bg-surfacePure/40'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px] text-botanical">folder</span>
                    <span className="truncate">{proj}</span>
                  </button>
                ))}
              </div>

              {/* Recent Threads */}
              <div className="space-y-1 pt-2 border-t border-hairline">
                <div className="px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-mutedInk font-semibold">
                  Recent Threads
                </div>
                {[
                  'RELIANCE 3000 CE Greeks',
                  'Section 103 BNS Bail Precedent',
                  'FastAPI Schema Validation Trace',
                  'TCS Q3 Results Ingestion'
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="w-full text-left px-2.5 py-1.5 rounded text-xs text-mutedInk hover:text-charcoal hover:bg-surfacePure/40 transition-all truncate"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Account & Docs Drawer */}
            <div className="p-3 border-t border-hairline space-y-2 bg-surfacePure/40">
              <Link
                to="/welcome"
                className="w-full flex items-center justify-between text-xs text-mutedInk hover:text-charcoal px-2 py-1 transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">tune</span>
                  <span>Recalibrate Context</span>
                </span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </Link>
              <div className="flex items-center justify-between pt-1 border-t border-hairline/60 text-[10px] font-mono text-mutedInk">
                <span>DPDP 2023 Enforced</span>
                <span className="text-emerald-700 font-semibold">Zero-Retention</span>
              </div>
            </div>
          </aside>
        )}

        {/* =====================================================================
            PANE 2: CENTER CONVERSATION & EXECUTION STREAM
        ====================================================================== */}
        <main className="flex-1 flex flex-col justify-between overflow-hidden bg-alabaster relative">
          {/* Scrollable Conversation Stream */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className="max-w-3xl mx-auto space-y-3">
                {/* USER PROMPT MESSAGE */}
                {msg.role === 'user' && (
                  <div className="flex items-start justify-end gap-3">
                    <div className="bg-surfacePure border border-hairline rounded-2xl p-4 sm:p-5 shadow-xs max-w-2xl text-charcoal">
                      <div className="flex items-center justify-between gap-4 pb-2 border-b border-hairline/60 text-[11px] font-mono text-mutedInk">
                        <span className="font-semibold text-charcoal uppercase">You</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <p className="font-sans text-sm sm:text-base leading-relaxed pt-2">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                )}

                {/* ASSISTANT AGENT RESPONSE */}
                {msg.role === 'assistant' && (
                  <div className="space-y-3">
                    {/* GLASS-BOX EXECUTION TRACE HEADER PILL */}
                    {msg.trace && (
                      <div className="border border-hairline rounded-xl bg-surfacePure/80 shadow-xs overflow-hidden transition-all">
                        <button
                          type="button"
                          onClick={() => setTraceExpanded(!traceExpanded)}
                          className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-mono bg-surfaceSubtle/50 hover:bg-surfaceSubtle text-charcoal transition-colors"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="material-symbols-outlined text-botanical text-[16px]">verified</span>
                            <span className="font-semibold text-botanical">{msg.trace.agentName}</span>
                            <span className="text-mutedInk">·</span>
                            <span className="text-mutedInk truncate hidden sm:inline">
                              Recalled {msg.trace.recalledMemories.length} memories
                            </span>
                            <span className="text-mutedInk">·</span>
                            <span className="text-mutedInk hidden md:inline">
                              {msg.trace.tools.length} APIs verified
                            </span>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="px-2 py-0.5 rounded bg-terracotta/10 text-terracotta font-semibold text-[11px]">
                              {msg.trace.credits} cr
                            </span>
                            <span className="text-mutedInk text-[10px] tabular-nums">
                              {msg.trace.executionTimeMs}ms
                            </span>
                            <span className="material-symbols-outlined text-[16px] text-mutedInk transition-transform">
                              {traceExpanded ? 'expand_less' : 'expand_more'}
                            </span>
                          </div>
                        </button>

                        {/* Expanded Trace Breakdown */}
                        {traceExpanded && (
                          <div className="p-4 space-y-3 border-t border-hairline bg-surfacePure text-xs font-mono">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <span className="text-mutedInk uppercase tracking-wider text-[10px] font-semibold">
                                  Standing Memories Recalled:
                                </span>
                                <ul className="space-y-1">
                                  {msg.trace.recalledMemories.map((mem, i) => (
                                    <li key={i} className="flex items-center gap-1.5 text-charcoal">
                                      <span className="w-1.5 h-1.5 rounded-full bg-botanical"></span>
                                      <span>{mem}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="space-y-1">
                                <span className="text-mutedInk uppercase tracking-wider text-[10px] font-semibold">
                                  Ground Truth APIs Executed:
                                </span>
                                <ul className="space-y-1">
                                  {msg.trace.tools.map((tool, i) => (
                                    <li key={i} className="flex items-center gap-1.5 text-charcoal">
                                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                                      <span>{tool}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="pt-2 border-t border-hairline/60 flex items-center justify-between text-[10px] text-mutedInk">
                              <span>Model Engine: {msg.trace.provider}</span>
                              <span className="text-botanical">Sha256 Audit Seal: c79e..18f2</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* STRUCTURED RESPONSE CARD */}
                    <div className="bg-surfacePure border border-hairline rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
                      {/* Summary Banner */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-mutedInk font-semibold">
                            Autonomous Domain Assessment
                          </span>
                        </div>
                        <p className="font-serif text-lg sm:text-xl text-charcoal leading-snug">
                          {msg.content.summary}
                        </p>
                      </div>

                      {/* Bull & Bear / Invalidation Confluence Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {/* Positive Confluence */}
                        {msg.content.bullConfluence.length > 0 && (
                          <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200/60 space-y-2">
                            <div className="flex items-center gap-1.5 text-emerald-800 font-mono text-xs font-semibold uppercase">
                              <span className="material-symbols-outlined text-[16px]">trending_up</span>
                              <span>Confluence Indicators</span>
                            </div>
                            <ul className="space-y-2 text-xs text-charcoal leading-relaxed font-sans">
                              {msg.content.bullConfluence.map((pt, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-emerald-700 font-bold">•</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Downside / Invalidation */}
                        {msg.content.bearDownside.length > 0 && (
                          <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/60 space-y-2">
                            <div className="flex items-center gap-1.5 text-amber-900 font-mono text-xs font-semibold uppercase">
                              <span className="material-symbols-outlined text-[16px]">warning</span>
                              <span>Risk &amp; Downside Matrix</span>
                            </div>
                            <ul className="space-y-2 text-xs text-charcoal leading-relaxed font-sans">
                              {msg.content.bearDownside.map((pt, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-amber-800 font-bold">•</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Hard Invalidation Cutoff Banner */}
                      <div className="p-3 bg-alabaster border border-hairline rounded-lg flex items-center justify-between gap-4 font-mono text-xs">
                        <div className="flex items-center gap-2 text-charcoal">
                          <span className="px-1.5 py-0.5 rounded bg-terracotta text-alabaster font-semibold text-[10px] uppercase">
                            Invalidation Level
                          </span>
                          <span className="font-semibold">{msg.content.invalidationLevel}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setArtifactOpen(true)}
                          className="text-botanical hover:underline font-semibold flex items-center gap-1 text-xs shrink-0"
                        >
                          <span>Open Artifact Canvas</span>
                          <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* =====================================================================
              OMNI-PROMPT BAR (Bottom Center)
          ====================================================================== */}
          <div className="p-4 sm:p-6 border-t border-hairline bg-alabaster/95 backdrop-blur-md">
            <div className="max-w-3xl mx-auto space-y-2">
              <div className="bg-surfacePure border border-borderStrong focus-within:border-botanical focus-within:ring-1 focus-within:ring-botanical rounded-2xl shadow-sm transition-all overflow-hidden p-3 space-y-2">
                {/* Prompt Text Input Area */}
                <textarea
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  rows={2}
                  placeholder="Ask anything, query an Indian Kanoon CNR, analyze an NSE option strike, or schedule a routine..."
                  className="w-full bg-transparent resize-none font-sans text-sm text-charcoal placeholder:text-mutedInk focus:outline-none leading-relaxed"
                />

                {/* Omni Controls Bar: Dynamic Agent Detector + Model Selector + Schedule + Send */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-hairline/60">
                  {/* Left: Dynamic Agent Detector & Selector */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowAgentPicker(!showAgentPicker)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-all border ${
                        detectedAgent.name === 'Auto-Router ⚡'
                          ? 'border-hairline bg-surfaceSubtle text-charcoal'
                          : 'border-botanical/40 bg-botanical/10 text-botanical font-semibold'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[15px] ${detectedAgent.color}`}>
                        {detectedAgent.icon}
                      </span>
                      <span>{detectedAgent.name}</span>
                    </button>

                    {/* Model Picker Pill */}
                    <button
                      type="button"
                      onClick={() => setShowModelPicker(!showModelPicker)}
                      className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-hairline text-xs font-mono text-mutedInk hover:text-charcoal hover:bg-surfaceSubtle transition-all"
                    >
                      <span>Model: {selectedModel === 'auto' ? 'Auto' : selectedModel}</span>
                      <span className="material-symbols-outlined text-[14px]">expand_more</span>
                    </button>
                  </div>

                  {/* Right Actions: Attach, Schedule & Send */}
                  <div className="flex items-center gap-2">
                    {/* Attach Trigger */}
                    <button
                      type="button"
                      className="p-1.5 rounded-full hover:bg-surfaceSubtle text-mutedInk hover:text-charcoal transition-colors"
                      title="Attach PDF, Contract, or Financial Tape"
                    >
                      <span className="material-symbols-outlined text-[18px]">attach_file</span>
                    </button>

                    {/* Schedule This Prompt Popover Trigger */}
                    <Link
                      to="/workflow"
                      className="p-1.5 rounded-full hover:bg-surfaceSubtle text-mutedInk hover:text-charcoal transition-colors"
                      title="Schedule this prompt as a recurring daily routine"
                    >
                      <span className="material-symbols-outlined text-[18px]">alarm</span>
                    </Link>

                    {/* Send CTA */}
                    <button
                      type="button"
                      onClick={handleSend}
                      disabled={!inputPrompt.trim()}
                      className="p-2 rounded-xl bg-botanical text-alabaster disabled:opacity-40 hover:bg-charcoal transition-all shadow-sm flex items-center justify-center"
                    >
                      <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Helper Quick Hints */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-mutedInk px-1">
                <div className="flex items-center gap-2">
                  <span>Try:</span>
                  <button
                    type="button"
                    onClick={() => setInputPrompt('Check CNR DLHC01-089211-2024 order status and cite BNS 103 equivalent.')}
                    className="hover:text-charcoal underline underline-offset-2 decoration-hairline hover:decoration-charcoal"
                  >
                    eCourts CNR Check
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => setInputPrompt('Compare RELIANCE 3000 CE delta with 2980 PE open interest.')}
                    className="hover:text-charcoal underline underline-offset-2 decoration-hairline hover:decoration-charcoal"
                  >
                    NSE Strike Delta
                  </button>
                </div>
                <span>Est: ~1.5 - 3.5 credits</span>
              </div>
            </div>
          </div>
        </main>

        {/* =====================================================================
            PANE 3: RIGHT COLLAPSIBLE ARTIFACT CANVAS (40% - 45% Width)
        ====================================================================== */}
        {artifactOpen && (
          <aside className="w-full sm:w-[420px] md:w-[480px] lg:w-[540px] shrink-0 border-l border-hairline bg-surfacePure flex flex-col justify-between overflow-hidden shadow-lg animate-fadeIn z-20">
            {/* Artifact Top Bar */}
            <div className="h-12 border-b border-hairline px-4 flex items-center justify-between bg-surfaceSubtle/50">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-botanical text-[18px]">dataset</span>
                <span className="font-sans text-xs font-semibold text-charcoal">
                  Live Artifact Canvas
                </span>
                <span className="px-1.5 py-0.2 rounded bg-surfacePure border border-hairline font-mono text-[10px] text-mutedInk">
                  v2.4
                </span>
              </div>

              {/* View Tabs */}
              <div className="flex items-center gap-1 bg-surfacePure p-0.5 rounded border border-hairline">
                <button
                  type="button"
                  onClick={() => setArtifactTab('preview')}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-sans font-medium transition-all ${
                    artifactTab === 'preview'
                      ? 'bg-botanical text-alabaster shadow-xs'
                      : 'text-mutedInk hover:text-charcoal'
                  }`}
                >
                  Preview
                </button>
                <button
                  type="button"
                  onClick={() => setArtifactTab('data')}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-sans font-medium transition-all ${
                    artifactTab === 'data'
                      ? 'bg-botanical text-alabaster shadow-xs'
                      : 'text-mutedInk hover:text-charcoal'
                  }`}
                >
                  Data Tape
                </button>
                <button
                  type="button"
                  onClick={() => setArtifactTab('export')}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-sans font-medium transition-all ${
                    artifactTab === 'export'
                      ? 'bg-botanical text-alabaster shadow-xs'
                      : 'text-mutedInk hover:text-charcoal'
                  }`}
                >
                  Export
                </button>
              </div>

              {/* Close Canvas */}
              <button
                type="button"
                onClick={() => setArtifactOpen(false)}
                className="p-1 rounded hover:bg-surfaceSubtle text-mutedInk hover:text-charcoal transition-colors"
                title="Collapse Canvas"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Artifact Content Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {artifactTab === 'preview' && (
                <div className="space-y-4 font-sans">
                  {/* Status Banner */}
                  <div className="p-3.5 bg-alabaster border border-hairline rounded-xl space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-secondary uppercase font-semibold">NSE Option Snapshot</span>
                      <span className="text-mutedInk">Recorded: 09:20:00 IST</span>
                    </div>
                    <div className="font-serif text-lg text-charcoal font-semibold">
                      RELIANCE — 24 APR 2025 EXPIRY
                    </div>
                  </div>

                  {/* Greeks & Open Interest Table */}
                  <div className="border border-hairline rounded-xl overflow-hidden shadow-xs">
                    <table className="w-full text-left font-mono text-xs">
                      <thead className="bg-surfaceSubtle border-b border-hairline text-mutedInk text-[10px] uppercase">
                        <tr>
                          <th className="p-2.5">Strike</th>
                          <th className="p-2.5">CE OI</th>
                          <th className="p-2.5">PE OI</th>
                          <th className="p-2.5">Delta (Δ)</th>
                          <th className="p-2.5">IV</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-hairline">
                        <tr className="hover:bg-alabaster">
                          <td className="p-2.5 font-semibold text-charcoal">2,960</td>
                          <td className="p-2.5 text-mutedInk">12.4 L</td>
                          <td className="p-2.5 font-semibold text-emerald-700">41.8 L</td>
                          <td className="p-2.5">0.72</td>
                          <td className="p-2.5">13.8%</td>
                        </tr>
                        <tr className="hover:bg-alabaster">
                          <td className="p-2.5 font-semibold text-charcoal">2,980</td>
                          <td className="p-2.5 text-mutedInk">18.9 L</td>
                          <td className="p-2.5 font-semibold text-emerald-700">38.2 L</td>
                          <td className="p-2.5">0.58</td>
                          <td className="p-2.5">14.0%</td>
                        </tr>
                        <tr className="bg-terracotta/5 hover:bg-terracotta/10">
                          <td className="p-2.5 font-bold text-terracotta">3,000 (ATM)</td>
                          <td className="p-2.5 font-bold text-charcoal">52.1 L</td>
                          <td className="p-2.5 font-bold text-charcoal">49.4 L</td>
                          <td className="p-2.5 font-bold">0.49</td>
                          <td className="p-2.5 font-bold">14.2%</td>
                        </tr>
                        <tr className="hover:bg-alabaster">
                          <td className="p-2.5 font-semibold text-charcoal">3,020</td>
                          <td className="p-2.5 font-bold text-rose-700">64.8 L</td>
                          <td className="p-2.5 text-mutedInk">14.2 L</td>
                          <td className="p-2.5">0.34</td>
                          <td className="p-2.5">14.6%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Mathematical Interpretation */}
                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-wider text-mutedInk font-semibold">
                      SymPy Sandboxed Math Verification
                    </div>
                    <div className="p-3 bg-alabaster border border-hairline rounded-lg font-mono text-xs text-charcoal space-y-1">
                      <div className="text-botanical font-semibold">
                        PCR_OI = Sum(PE_OI) / Sum(CE_OI) = 1.121
                      </div>
                      <div className="text-mutedInk text-[11px]">
                        Black-Scholes Delta convergence: passed with 0.0001 epsilon tolerance.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {artifactTab === 'data' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-mutedInk text-[11px]">
                    <span>Raw JSON Tape Stream</span>
                    <button type="button" className="text-botanical hover:underline font-semibold">
                      Copy JSON
                    </button>
                  </div>
                  <pre className="p-4 bg-surfaceSubtle rounded-xl text-[11px] overflow-x-auto text-charcoal border border-hairline leading-relaxed">
{`{
  "symbol": "RELIANCE",
  "expiry": "2025-04-24",
  "timestamp": "2025-04-18T09:20:00Z",
  "underlying_spot": 2998.40,
  "pcr_oi": 1.121,
  "iv_mean": 0.142,
  "strikes": [
    { "strike": 2960, "ce_oi": 1240000, "pe_oi": 4180000, "delta": 0.72 },
    { "strike": 2980, "ce_oi": 1890000, "pe_oi": 3820000, "delta": 0.58 },
    { "strike": 3000, "ce_oi": 5210000, "pe_oi": 4940000, "delta": 0.49 },
    { "strike": 3020, "ce_oi": 6480000, "pe_oi": 1420000, "delta": 0.34 }
  ],
  "sha256_tape_hash": "e3b0c44298fc1c149afbf4c8996fb924"
}`}
                  </pre>
                </div>
              )}

              {artifactTab === 'export' && (
                <div className="space-y-4 font-sans text-xs">
                  <div className="space-y-1">
                    <div className="font-serif text-base text-charcoal font-semibold">
                      Institutional Export Options
                    </div>
                    <p className="text-mutedInk">
                      Generate verifiable documents with embedded cryptographic SHA-256 hashes and eCourts/NSE timestamps.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <button
                      type="button"
                      className="w-full p-3 rounded-lg border border-hairline hover:border-botanical bg-alabaster flex items-center justify-between transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-rose-700 text-xl">picture_as_pdf</span>
                        <div className="text-left">
                          <div className="font-semibold text-charcoal group-hover:text-botanical">Download Verified PDF</div>
                          <div className="text-mutedInk text-[11px]">Formatted for Board &amp; Court Presentation</div>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-mutedInk group-hover:translate-x-1 transition-transform">
                        download
                      </span>
                    </button>

                    <button
                      type="button"
                      className="w-full p-3 rounded-lg border border-hairline hover:border-botanical bg-alabaster flex items-center justify-between transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-blue-700 text-xl">description</span>
                        <div className="text-left">
                          <div className="font-semibold text-charcoal group-hover:text-botanical">Export Word Document (.docx)</div>
                          <div className="text-mutedInk text-[11px]">Editable Legal Draft with Tracked Changes</div>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-mutedInk group-hover:translate-x-1 transition-transform">
                        download
                      </span>
                    </button>

                    <button
                      type="button"
                      className="w-full p-3 rounded-lg border border-hairline hover:border-botanical bg-alabaster flex items-center justify-between transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-emerald-700 text-xl">table_view</span>
                        <div className="text-left">
                          <div className="font-semibold text-charcoal group-hover:text-botanical">Excel Greeks Model (.xlsx)</div>
                          <div className="text-mutedInk text-[11px]">With Live Option Formulas &amp; Volatility Surface</div>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-mutedInk group-hover:translate-x-1 transition-transform">
                        download
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Artifact Bottom Footer */}
            <div className="p-3 border-t border-hairline bg-surfaceSubtle/60 flex items-center justify-between font-mono text-[11px] text-mutedInk">
              <span>CNR: DLHC01-089211</span>
              <span className="text-botanical font-semibold">Grounded &amp; Verified</span>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
