import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function AppDashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation & Panes State
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [artifactOpen, setArtifactOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'tasks' | 'projects' | 'settings'
  const [currentProject, setCurrentProject] = useState('NIFTY Swing Desk');
  
  // Synchronize activeTab with URL path
  useEffect(() => {
    if (location.pathname === '/app/tasks') {
      setActiveTab('tasks');
    } else if (location.pathname === '/app/projects') {
      setActiveTab('projects');
    } else if (location.pathname === '/app/settings') {
      setActiveTab('settings');
    } else {
      setActiveTab('chat');
    }
  }, [location.pathname]);

  // Read saved profile memory from /welcome onboarding if available
  const [profileMemory, setProfileMemory] = useState(null);
  useEffect(() => {
    try {
      const saved = localStorage.getItem('grizon_profile_memory');
      if (saved) {
        const parsed = JSON.parse(saved);
        setProfileMemory(parsed);
        if (parsed.projectName) {
          setCurrentProject(parsed.projectName);
        }
      }
    } catch (e) {
      console.warn('Could not parse profile memory:', e);
    }
  }, []);

  // Prompt & Auto-Router State
  const [inputPrompt, setInputPrompt] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('auto');
  const [selectedModel, setSelectedModel] = useState('auto');
  const [showModelPicker, setShowModelPicker] = useState(false);
  const [showAgentPicker, setShowAgentPicker] = useState(false);
  
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
        recalledMemories: ['Swing Trading Horizon', 'Mandatory Math Invalidation Rule', 'Tier-1 Auto Portfolio'],
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
  const [exportNotice, setExportNotice] = useState('');

  // Scheduled Tasks State
  const [scheduledTasksList, setScheduledTasksList] = useState([
    {
      id: 1,
      title: 'NSE Derivatives & NIFTY Unusual OI Radar',
      prompt: 'Scan NSE Option Chain for NIFTY & RELIANCE unusual OI shifts and delta imbalances.',
      cadence: '3 runs/day (09:20, 12:30, 15:25 IST)',
      dailyRuns: 3,
      times: ['09:20 IST', '12:30 IST', '15:25 IST'],
      project: 'NIFTY Swing Desk',
      specialist: 'Market & Trading Specialist',
      status: 'ACTIVE',
      nextRun: '12:30 IST (in 42 min)',
      lastRunDelta: '3000 CE Call writing surged +18.4%; PCR expanded from 0.94 to 1.12.'
    },
    {
      id: 2,
      title: 'Delhi High Court Cause List & Order Sweep',
      prompt: 'Verify eCourts CNR DLHC01-089211-2024 for newly posted orders or roster changes.',
      cadence: '1 run/day (18:00 IST)',
      dailyRuns: 1,
      times: ['18:00 IST'],
      project: 'Delhi HC Writ Watch',
      specialist: 'Legal Intelligence Specialist',
      status: 'ACTIVE',
      nextRun: '18:00 IST (in 2h 18m)',
      lastRunDelta: 'Ex-parte interim stay maintained on daily cause list. Roster confirmed for Tuesday.'
    },
    {
      id: 3,
      title: 'Fintech Architecture Security & Vulnerability Audit',
      prompt: 'Inspect dependency tree for CVE advisories and verify API authorization gates.',
      cadence: 'Weekly (Every Monday 08:00 IST)',
      dailyRuns: 1,
      times: ['08:00 IST'],
      project: 'Fintech Architecture ADR',
      specialist: 'Dev Studio / System Architect',
      status: 'ACTIVE',
      nextRun: 'Mon 08:00 IST',
      lastRunDelta: '0 high-severity CVEs detected across 24 Node packages. Token isolation validated.'
    },
    {
      id: 4,
      title: 'MCA21 Gazette Circulars & Statutory Compliance',
      prompt: 'Sweep Ministry of Corporate Affairs and RBI gazettes for sovereign banking directives.',
      cadence: '1 run/day (20:00 IST)',
      dailyRuns: 1,
      times: ['20:00 IST'],
      project: 'Delhi HC Writ Watch',
      specialist: 'Legal Intelligence Specialist',
      status: 'PAUSED',
      nextRun: 'Paused',
      lastRunDelta: 'No new circulars published in evening edition.'
    }
  ]);

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
    const sentText = inputPrompt;
    setInputPrompt('');

    // Simulate agent response with execution trace
    setTimeout(() => {
      const isLegal = sentText.toLowerCase().includes('cnr') || sentText.toLowerCase().includes('section') || sentText.toLowerCase().includes('court');
      const respMsg = {
        id: Date.now() + 1,
        role: 'assistant',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' IST',
        trace: {
          recalledMemories: isLegal 
            ? ['Standing Jurisdiction: Delhi High Court', 'BNS/BNSS 2023 Temporal Crosswalk']
            : ['Swing Trading Horizon', 'Mandatory Math Invalidation Rule'],
          agentName: isLegal ? 'Legal Intelligence Specialist' : (detectedAgent.name === 'Auto-Router ⚡' ? 'Market Intelligence Specialist' : detectedAgent.name),
          provider: 'Claude 3.5 Sonnet / Gemini Pro',
          tools: isLegal
            ? ['eCourts India NJDG Registry', 'Indian Kanoon Sovereign Node', 'BNS 2023 Crosswalk']
            : ['NSE Option Chain Feed (09:20 IST)', 'Black-Scholes Greek Engine', 'Yahoo Finance Tick API'],
          credits: isLegal ? 4.0 : 3.5,
          executionTimeMs: 440
        },
        content: {
          summary: isLegal
            ? 'Verified against eCourts CNR registry. The statutory framework maps cleanly to BNS Section 103 and BNSS Section 483.'
            : 'Derivative structure verified across 4 primary strikes. Max pain pinned at 2,980 with institutional put writing dominant.',
          bullConfluence: isLegal
            ? [
                'Bench orders confirm application of Supreme Court landmark [2024 INSC 742].',
                'Zero contradictory notifications found in active Gazette repository.'
              ]
            : [
                'Put/Call ratio expanded to 1.12 confirming defensive institutional support.',
                'Implied volatility contracted -0.8% indicating healthy risk distribution.'
              ],
          bearDownside: isLegal
            ? ['Notice period of 14 statutory days remains active until formal proof of service.']
            : ['Substantial call accumulation at 3,020 strike (+22.4L shares) caps short-term upside.'],
          invalidationLevel: isLegal
            ? 'Filing after 16:00 IST triggers mandatory deferral to following roster.'
            : 'Breakdown below 2,958 spot close on 15-minute timeframe.',
          artifactType: isLegal ? 'legal_draft' : 'option_matrix'
        }
      };
      setMessages((prev) => [...prev, respMsg]);
      setArtifactOpen(true);
    }, 700);
  };

  // Instant File Download Handler
  const handleExportDownload = (format) => {
    let content = '';
    let mime = 'text/plain';

    if (format === 'pdf') {
      content = `=================================================================\nGRIZON AI — SOVEREIGN INTELLIGENCE DOSSIER (OFFICIAL AUDIT)\n=================================================================\nGenerated For: ${currentProject}\nDate: ${new Date().toISOString()}\nSHA-256 Tape Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\nData Feeds Grounded: NSE Option Chain, eCourts India, Indian Kanoon\nEpistemic Quality: 100% Deterministic Grounded (Zero Confabulation)\n\nKey Finding:\n- PCR OI stands at 1.121 with Max Pain pinned at 2,980.\n- Invalidation level strictly enforced at 2,958 spot close.\n=================================================================`;
    } else if (format === 'docx') {
      content = `MEMORANDUM OF JURISPRUDENTIAL ASSESSMENT\nProject: ${currentProject}\nDocket Ref: DLHC01-089211-2024\nGoverning Law: Bharatiya Nyaya Sanhita (BNS 2023) § 103 & BNSS § 483\nBinding Ratio Decidendi: Ganesh Dass Khanna v. ITO [AUTH-DLHC-2024-W389]\nRedline Track: Capped aggregate liability to 12-month preceding invoice baseline.\nAudited By: GriZon Sovereign Legal Intelligence v4.8.2`;
    } else {
      content = `Symbol,Strike,CE_OI,PE_OI,Delta,IV,Max_Pain\nRELIANCE,2960,1240000,4180000,0.72,13.8%,2980\nRELIANCE,2980,1890000,3820000,0.58,14.0%,2980\nRELIANCE,3000,5210000,4940000,0.49,14.2%,2980\nRELIANCE,3020,6480000,1420000,0.34,14.6%,2980`;
      mime = 'text/csv';
    }

    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Grizon_${currentProject.replace(/\s+/g, '_')}_${Date.now()}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setExportNotice(`Downloaded Grizon_${currentProject.replace(/\s+/g, '_')}.${format}`);
    setTimeout(() => setExportNotice(''), 3000);
  };

  const toggleTaskStatus = (id) => {
    setScheduledTasksList(prev => prev.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === 'ACTIVE' ? 'PAUSED' : 'ACTIVE';
        return { ...t, status: nextStatus, nextRun: nextStatus === 'ACTIVE' ? '12:30 IST' : 'Paused' };
      }
      return t;
    }));
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
            <span className="font-sans text-[17px] font-extrabold text-[#07091B] tracking-tight leading-none group-hover:text-[#1E3A3A] transition-colors">
              Grizon AI
            </span>
          </Link>

          {/* Project Enclave Selector Dropdown */}
          <div 
            onClick={() => {
              setActiveTab('projects');
              navigate('/app/projects');
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-hairline bg-surfacePure hover:border-borderStrong transition-all cursor-pointer"
            title="Click to view Project Enclaves"
          >
            <span className="material-symbols-outlined text-botanical text-[16px]">folder</span>
            <span className="font-sans text-xs font-semibold text-charcoal">{currentProject}</span>
            <span className="material-symbols-outlined text-mutedInk text-[14px]">arrow_drop_down</span>
          </div>

          <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            7 Live APIs Online
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
          <button
            type="button"
            onClick={() => {
              setActiveTab('settings');
              navigate('/app/settings');
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-surfacePure border border-hairline font-mono text-xs hover:border-borderStrong transition-all"
            title="View Credit Economy & Memory Ledger"
          >
            <span className="material-symbols-outlined text-terracotta text-[16px]">toll</span>
            <span className="font-semibold text-charcoal">2,410.5</span>
            <span className="text-mutedInk text-[10px]">CR</span>
          </button>

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
          <div 
            onClick={() => {
              setActiveTab('settings');
              navigate('/app/settings');
            }}
            className="w-7 h-7 rounded-full bg-botanical text-alabaster flex items-center justify-center font-mono text-xs font-semibold cursor-pointer"
            title="Account Settings"
          >
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
                  setActiveTab('chat');
                  navigate('/app');
                  setMessages([
                    {
                      id: Date.now(),
                      role: 'assistant',
                      timestamp: 'Just now',
                      trace: {
                        recalledMemories: ['Standing Context: Primary Watchlist', 'Delhi HC Jurisdiction'],
                        agentName: 'Auto-Router ⚡',
                        provider: 'Multi-Model Sovereign Mesh',
                        tools: ['Live System Bus'],
                        credits: 0,
                        executionTimeMs: 40
                      },
                      content: {
                        summary: 'New conversation enclave initialized. How can GriZon assist you today? Query an NSE option strike, verify a CNR case, or request an architectural code review.',
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
                  onClick={() => {
                    setActiveTab('chat');
                    navigate('/app');
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeTab === 'chat'
                      ? 'bg-surfacePure text-charcoal shadow-xs border border-hairline font-semibold'
                      : 'text-mutedInk hover:text-charcoal hover:bg-surfacePure/40'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-botanical">chat_bubble</span>
                    <span>Command Stream</span>
                  </span>
                  <span className="font-mono text-[10px] text-mutedInk">⌘1</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('tasks');
                    navigate('/app/tasks');
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeTab === 'tasks'
                      ? 'bg-surfacePure text-charcoal shadow-xs border border-hairline font-semibold'
                      : 'text-mutedInk hover:text-charcoal hover:bg-surfacePure/40'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-terracotta">schedule</span>
                    <span>Scheduled Tasks</span>
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-terracotta/10 text-terracotta font-mono text-[10px] font-semibold">
                    {scheduledTasksList.filter(t => t.status === 'ACTIVE').length} Active
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('projects');
                    navigate('/app/projects');
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeTab === 'projects'
                      ? 'bg-surfacePure text-charcoal shadow-xs border border-hairline font-semibold'
                      : 'text-mutedInk hover:text-charcoal hover:bg-surfacePure/40'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-indigo-700">folder_special</span>
                    <span>Project Enclaves</span>
                  </span>
                  <span className="font-mono text-[10px] text-mutedInk">3 Rooms</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('settings');
                    navigate('/app/settings');
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeTab === 'settings'
                      ? 'bg-surfacePure text-charcoal shadow-xs border border-hairline font-semibold'
                      : 'text-mutedInk hover:text-charcoal hover:bg-surfacePure/40'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-botanical">memory</span>
                    <span>Memory &amp; Ledger</span>
                  </span>
                  <span className="font-mono text-[10px] text-mutedInk">Layer 1 &amp; 2</span>
                </button>
              </nav>

              {/* Projects Quick Picker */}
              <div className="space-y-1 pt-2 border-t border-hairline">
                <div className="flex items-center justify-between px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-mutedInk font-semibold">
                  <span>Enclaves</span>
                  <button 
                    type="button" 
                    onClick={() => {
                      setActiveTab('projects');
                      navigate('/app/projects');
                    }}
                    className="hover:text-charcoal"
                    title="View all projects"
                  >
                    <span className="material-symbols-outlined text-[14px]">add</span>
                  </button>
                </div>
                {['NIFTY Swing Desk', 'Delhi HC Writ Watch', 'Fintech Architecture ADR'].map((proj) => (
                  <button
                    key={proj}
                    type="button"
                    onClick={() => {
                      setCurrentProject(proj);
                    }}
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
                  'RELIANCE 3000 CE Greeks Delta',
                  'Section 103 BNS Bail Precedent',
                  'FastAPI Schema Validation Trace',
                  'TCS Q3 Results Ingestion'
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveTab('chat');
                      navigate('/app');
                    }}
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
            PANE 2: CENTER VIEW (CHAT / TASKS / PROJECTS / SETTINGS)
        ====================================================================== */}
        <main className="flex-1 flex flex-col justify-between overflow-hidden bg-alabaster relative">
          {/* TAB 1: COMMAND CHAT STREAM */}
          {activeTab === 'chat' && (
            <>
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
                                      Deterministic Feeds Called:
                                    </span>
                                    <ul className="space-y-1">
                                      {msg.trace.tools.map((tool, i) => (
                                        <li key={i} className="flex items-center gap-1.5 text-charcoal">
                                          <span className="material-symbols-outlined text-[14px] text-emerald-700">check_circle</span>
                                          <span>{tool}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Structured Agent Briefing Card */}
                        <div className="bg-surfacePure border border-hairline rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
                          <div className="flex items-center justify-between border-b border-hairline pb-3">
                            <span className="font-mono text-xs uppercase tracking-wider text-mutedInk font-semibold">
                              Executive Synthesis
                            </span>
                            <span className="font-mono text-xs text-mutedInk">
                              {msg.timestamp}
                            </span>
                          </div>

                          <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed font-normal">
                            {msg.content.summary}
                          </p>

                          {/* Bull / Bear Matrix */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {/* Positive Evidence */}
                            {msg.content.bullConfluence.length > 0 && (
                              <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200/60 space-y-2">
                                <div className="flex items-center gap-1.5 text-emerald-900 font-mono text-xs font-semibold uppercase">
                                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                  <span>Support &amp; Confluence</span>
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
                  Includes iOS viewport zoom fix (text-[16px] md:text-sm)
              ====================================================================== */}
              <div className="p-4 sm:p-6 border-t border-hairline bg-alabaster/95 backdrop-blur-md">
                <div className="max-w-3xl mx-auto space-y-2">
                  <div className="bg-surfacePure border border-borderStrong focus-within:border-botanical focus-within:ring-1 focus-within:ring-botanical rounded-2xl shadow-sm transition-all overflow-hidden p-3 space-y-2">
                    {/* Prompt Text Input Area (Fixed font size for iOS Mobile) */}
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
                      className="w-full bg-transparent resize-none font-sans text-[16px] md:text-sm text-charcoal placeholder:text-mutedInk focus:outline-none leading-relaxed"
                    />

                    {/* Omni Controls Bar: Dynamic Agent Detector + Model Selector + Schedule + Send */}
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-hairline/60 relative">
                      {/* Left: Dynamic Agent Detector & Selector */}
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => {
                              setShowAgentPicker(!showAgentPicker);
                              setShowModelPicker(false);
                            }}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-all border cursor-pointer ${
                              detectedAgent.name === 'Auto-Router ⚡' && selectedAgent === 'auto'
                                ? 'border-hairline bg-surfaceSubtle text-charcoal'
                                : 'border-botanical/40 bg-botanical/10 text-botanical font-semibold'
                            }`}
                          >
                            <span className={`material-symbols-outlined text-[15px] ${detectedAgent.color}`}>
                              {detectedAgent.icon}
                            </span>
                            <span>{selectedAgent === 'auto' ? detectedAgent.name : selectedAgent}</span>
                          </button>

                          {showAgentPicker && (
                            <div className="absolute bottom-9 left-0 bg-surfacePure border border-borderStrong rounded-xl shadow-xl p-2 z-50 flex flex-col gap-1 w-60 animate-fadeIn">
                              <div className="text-[10px] font-mono text-mutedInk uppercase tracking-wider px-2 py-1 font-semibold">
                                Select Specialist Mind
                              </div>
                              {[
                                { id: 'auto', name: 'Auto-Router ⚡' },
                                { id: 'Market Intelligence', name: 'Market Intelligence' },
                                { id: 'Legal Specialist', name: 'Legal Specialist' },
                                { id: 'Dev Studio / Architect', name: 'Dev Studio / Architect' },
                                { id: 'Research Specialist', name: 'Research Specialist' },
                                { id: 'Doc Intelligence', name: 'Doc Intelligence' }
                              ].map(a => (
                                <button
                                  key={a.id}
                                  type="button"
                                  onClick={() => {
                                    setSelectedAgent(a.id);
                                    setShowAgentPicker(false);
                                  }}
                                  className="text-left px-2 py-1.5 rounded-lg text-xs font-mono hover:bg-surfaceSubtle text-charcoal flex items-center justify-between transition-colors cursor-pointer"
                                >
                                  <span>{a.name}</span>
                                  {selectedAgent === a.id && <span className="material-symbols-outlined text-[14px] text-botanical">check</span>}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Model Picker Pill */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => {
                              setShowModelPicker(!showModelPicker);
                              setShowAgentPicker(false);
                            }}
                            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-hairline text-xs font-mono text-mutedInk hover:text-charcoal hover:bg-surfaceSubtle transition-all cursor-pointer"
                          >
                            <span>Model: {selectedModel === 'auto' ? 'Auto' : selectedModel}</span>
                            <span className="material-symbols-outlined text-[14px]">expand_more</span>
                          </button>

                          {showModelPicker && (
                            <div className="absolute bottom-9 left-0 bg-surfacePure border border-borderStrong rounded-xl shadow-xl p-2 z-50 flex flex-col gap-1 w-56 animate-fadeIn">
                              <div className="text-[10px] font-mono text-mutedInk uppercase tracking-wider px-2 py-1 font-semibold">
                                Frontier Model Provider
                              </div>
                              {[
                                'Auto',
                                'Claude 3.5 Sonnet',
                                'Google Gemini 1.5 Pro',
                                'GPT-4o (OpenAI)',
                                'DeepSeek V3 / R1',
                                'xAI Grok 2'
                              ].map(m => (
                                <button
                                  key={m}
                                  type="button"
                                  onClick={() => {
                                    setSelectedModel(m);
                                    setShowModelPicker(false);
                                  }}
                                  className="text-left px-2 py-1.5 rounded-lg text-xs font-mono hover:bg-surfaceSubtle text-charcoal flex items-center justify-between transition-colors cursor-pointer"
                                >
                                  <span>{m}</span>
                                  {selectedModel === m && <span className="material-symbols-outlined text-[14px] text-botanical">check</span>}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Actions: Attach, Schedule & Send */}
                      <div className="flex items-center gap-2">
                        {/* Attach Trigger */}
                        <button
                          type="button"
                          onClick={() => alert("Upload dialog initialized: Supports PDF, DOCX, XLSX, video frames, and scanned images.")}
                          className="p-1.5 rounded-full hover:bg-surfaceSubtle text-mutedInk hover:text-charcoal transition-colors"
                          title="Attach PDF, Contract, or Financial Tape"
                        >
                          <span className="material-symbols-outlined text-[18px]">attach_file</span>
                        </button>

                        {/* Schedule This Prompt Trigger */}
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab('tasks');
                            navigate('/app/tasks');
                          }}
                          className="p-1.5 rounded-full hover:bg-surfaceSubtle text-mutedInk hover:text-charcoal transition-colors"
                          title="Schedule this prompt as a recurring daily routine"
                        >
                          <span className="material-symbols-outlined text-[18px]">alarm</span>
                        </button>

                        {/* Send CTA */}
                        <button
                          type="button"
                          onClick={handleSend}
                          disabled={!inputPrompt.trim()}
                          className="p-2 rounded-xl bg-botanical text-alabaster disabled:opacity-40 hover:bg-charcoal transition-all shadow-sm flex items-center justify-center cursor-pointer"
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
                        className="hover:text-charcoal underline underline-offset-2 decoration-hairline hover:decoration-charcoal cursor-pointer"
                      >
                        eCourts CNR Check
                      </button>
                      <span>·</span>
                      <button
                        type="button"
                        onClick={() => setInputPrompt('Compare RELIANCE 3000 CE delta with 2980 PE open interest.')}
                        className="hover:text-charcoal underline underline-offset-2 decoration-hairline hover:decoration-charcoal cursor-pointer"
                      >
                        NSE Strike Delta
                      </button>
                    </div>
                    <span>Est: ~1.5 - 3.5 credits</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: AUTONOMOUS TASK HUB (/app/tasks) */}
          {activeTab === 'tasks' && (
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 max-w-5xl mx-auto w-full">
              {/* Header Ribbon */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse"></span>
                    <span className="font-mono text-xs uppercase tracking-widest text-mutedInk font-semibold">
                      Multi-Run Task Scheduler
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-charcoal font-normal">
                    Autonomous Scheduled Routines
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const title = prompt("Enter title for new autonomous scheduled task:", "Daily RBI Monetary Policy & FX Ingestion");
                    if (title) {
                      setScheduledTasksList(prev => [
                        {
                          id: Date.now(),
                          title,
                          prompt: "Scan RBI DBIE exchange filings and verify forex reserves delta.",
                          cadence: "1 run/day (09:15 IST)",
                          dailyRuns: 1,
                          times: ["09:15 IST"],
                          project: currentProject,
                          specialist: "Market & Trading Specialist",
                          status: "ACTIVE",
                          nextRun: "Tomorrow 09:15 IST",
                          lastRunDelta: "New routine created and queued for sovereign execution."
                        },
                        ...prev
                      ]);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-botanical text-white font-sans text-xs font-semibold hover:bg-botanical/90 transition-all shadow-sm self-start sm:self-auto cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  <span>Create Scheduled Routine</span>
                </button>
              </div>

              {/* Metrics Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-surfacePure p-4 rounded-xl border border-hairline shadow-xs space-y-1">
                  <span className="font-mono text-[11px] text-mutedInk uppercase">Active Tasks</span>
                  <div className="font-serif text-2xl text-charcoal font-bold">
                    {scheduledTasksList.filter(t => t.status === 'ACTIVE').length}
                  </div>
                  <span className="font-mono text-[10px] text-emerald-700">All Nodes Operational</span>
                </div>
                <div className="bg-surfacePure p-4 rounded-xl border border-hairline shadow-xs space-y-1">
                  <span className="font-mono text-[11px] text-mutedInk uppercase">Completed Today</span>
                  <div className="font-serif text-2xl text-charcoal font-bold">7 / 9</div>
                  <span className="font-mono text-[10px] text-mutedInk">Runs Executed</span>
                </div>
                <div className="bg-surfacePure p-4 rounded-xl border border-hairline shadow-xs space-y-1">
                  <span className="font-mono text-[11px] text-mutedInk uppercase">Next Execution</span>
                  <div className="font-serif text-2xl text-terracotta font-bold">12:30 IST</div>
                  <span className="font-mono text-[10px] text-mutedInk">In 42 minutes</span>
                </div>
                <div className="bg-surfacePure p-4 rounded-xl border border-hairline shadow-xs space-y-1">
                  <span className="font-mono text-[11px] text-mutedInk uppercase">Daily Credit Burn</span>
                  <div className="font-serif text-2xl text-charcoal font-bold">10.5 CR</div>
                  <span className="font-mono text-[10px] text-mutedInk">Predictable 30-day budget</span>
                </div>
              </div>

              {/* Scheduled Tasks List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-mutedInk font-semibold">
                    Configured Routine Queue
                  </span>
                  <span className="font-mono text-xs text-mutedInk">24-Hour Horizon</span>
                </div>

                {scheduledTasksList.map((t) => (
                  <div 
                    key={t.id}
                    className="bg-surfacePure p-5 rounded-2xl border border-hairline shadow-xs space-y-4 hover:border-borderStrong transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-base text-charcoal font-semibold">{t.title}</h3>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                            t.status === 'ACTIVE' 
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                              : 'bg-surfaceSubtle text-mutedInk border border-hairline'
                          }`}>
                            {t.status}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-mutedInk">{t.prompt}</p>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <button
                          type="button"
                          onClick={() => toggleTaskStatus(t.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                            t.status === 'ACTIVE'
                              ? 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                              : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                          }`}
                        >
                          {t.status === 'ACTIVE' ? 'Pause Routine' : 'Resume'}
                        </button>
                        <button
                          type="button"
                          onClick={() => alert(`Executed instant run for: "${t.title}". Dispatched to ${t.project}.`)}
                          className="px-3 py-1.5 rounded-lg bg-surfaceSubtle hover:bg-surfaceHigh text-charcoal text-xs font-mono font-semibold border border-hairline transition-all cursor-pointer"
                        >
                          Run Now
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-hairline text-xs font-mono text-mutedInk">
                      <div>
                        <span className="block text-[10px] uppercase text-mutedInk">Cadence:</span>
                        <span className="text-charcoal font-medium">{t.cadence}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-mutedInk">Next Run:</span>
                        <span className="text-terracotta font-semibold">{t.nextRun}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-mutedInk">Target Enclave:</span>
                        <span className="text-botanical font-semibold">{t.project}</span>
                      </div>
                    </div>

                    {/* Diff / What Changed Delta Pill */}
                    <div className="p-3 bg-alabaster rounded-xl border border-hairline flex items-start gap-2 text-xs font-sans">
                      <span className="material-symbols-outlined text-[16px] text-terracotta shrink-0 mt-0.5">change_circle</span>
                      <div>
                        <strong className="font-medium text-charcoal">Delta Since Previous Run: </strong>
                        <span className="text-mutedInk">{t.lastRunDelta}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PROJECT WORKSPACES (/app/projects) */}
          {activeTab === 'projects' && (
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 max-w-5xl mx-auto w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-botanical"></span>
                    <span className="font-mono text-xs uppercase tracking-widest text-mutedInk font-semibold">
                      Isolated Workspaces
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-charcoal font-normal">
                    Project Enclaves
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const name = prompt("Enter new project enclave name:", "Q1 Strategic Acquisitions");
                    if (name) {
                      setCurrentProject(name);
                      alert(`Project enclave "${name}" initialized with isolated vector index.`);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-botanical text-white font-sans text-xs font-semibold hover:bg-botanical/90 transition-all shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">create_new_folder</span>
                  <span>New Enclave</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'NIFTY Swing Desk',
                    active: currentProject === 'NIFTY Swing Desk',
                    desc: 'Weekly and monthly NSE index derivative positioning, gamma exposures, and volatility surface hedging.',
                    files: 4,
                    routines: 1,
                    scopedRule: 'Delta-neutral collar; 1.8% VAR limit.'
                  },
                  {
                    name: 'Delhi HC Writ Watch',
                    active: currentProject === 'Delhi HC Writ Watch',
                    desc: 'Commercial appellate litigation and Article 226 writ petitions before the High Court of Delhi.',
                    files: 6,
                    routines: 2,
                    scopedRule: 'Petitioner representation; BNS 2023 concordance.'
                  },
                  {
                    name: 'Fintech Architecture ADR',
                    active: currentProject === 'Fintech Architecture ADR',
                    desc: 'Distributed ledger, phonepe payment gateway microservices, and AWS Nitro Enclave isolation.',
                    files: 3,
                    routines: 1,
                    scopedRule: 'TypeScript microservices; PostgreSQL row locks.'
                  }
                ].map((p, idx) => (
                  <div 
                    key={idx}
                    className={`p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 shadow-xs ${
                      p.active
                        ? 'bg-surfacePure border-botanical ring-1 ring-botanical'
                        : 'bg-surfacePure border-hairline hover:border-borderStrong'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="material-symbols-outlined text-2xl text-botanical">folder_special</span>
                        {p.active ? (
                          <span className="px-2 py-0.5 rounded-full bg-botanical text-white font-mono text-[10px] font-semibold">
                            Active Enclave
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setCurrentProject(p.name)}
                            className="font-mono text-xs text-botanical hover:underline font-semibold cursor-pointer"
                          >
                            Switch Here
                          </button>
                        )}
                      </div>
                      <h3 className="font-serif text-lg text-charcoal font-semibold">{p.name}</h3>
                      <p className="font-sans text-xs text-mutedInk leading-relaxed">{p.desc}</p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-hairline font-mono text-[11px] text-mutedInk">
                      <div className="flex items-center justify-between">
                        <span>Attached Files:</span>
                        <span className="text-charcoal font-semibold">{p.files} docs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Attached Routines:</span>
                        <span className="text-terracotta font-semibold">{p.routines} active</span>
                      </div>
                      <div className="p-2 bg-alabaster rounded border border-hairline text-[10px]">
                        <span className="text-mutedInk block">Scoped Memory Rule:</span>
                        <span className="text-charcoal">{p.scopedRule}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MEMORY VAULT & CREDIT LEDGER (/app/settings) */}
          {activeTab === 'settings' && (
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 max-w-5xl mx-auto w-full">
              <div className="border-b border-hairline pb-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-botanical"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-mutedInk font-semibold">
                    Transparency Center
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-charcoal font-normal">
                  Dual-Layer Memory Vault &amp; Credit Ledger
                </h2>
              </div>

              {/* Memory Vault Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-charcoal font-semibold">
                      Layer 1: Standing Profile Memory
                    </h3>
                    <p className="font-sans text-xs text-mutedInk">
                      Set during your 60-second onboarding. Automatically informs every routed agent prompt.
                    </p>
                  </div>
                  <Link
                    to="/welcome"
                    className="px-3 py-1.5 rounded-lg border border-hairline bg-surfacePure hover:border-botanical text-xs font-mono font-semibold text-charcoal transition-all"
                  >
                    Recalibrate Profile
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-surfacePure border border-hairline shadow-xs space-y-1 font-mono text-xs">
                    <span className="text-[10px] text-mutedInk uppercase block">Primary Forum</span>
                    <span className="text-charcoal font-semibold">
                      {profileMemory?.legalForum || 'Delhi High Court & Supreme Court'}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-surfacePure border border-hairline shadow-xs space-y-1 font-mono text-xs">
                    <span className="text-[10px] text-mutedInk uppercase block">Watchlist / Focus</span>
                    <span className="text-charcoal font-semibold">
                      {profileMemory?.watchlist || 'NIFTY, BANKNIFTY, RELIANCE, TCS'}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-surfacePure border border-hairline shadow-xs space-y-1 font-mono text-xs">
                    <span className="text-[10px] text-mutedInk uppercase block">Trading Horizon</span>
                    <span className="text-charcoal font-semibold">
                      {profileMemory?.timeframe || 'Positional & Swing'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Layer 2: Conversational Memories */}
              <div className="space-y-4 pt-4 border-t border-hairline">
                <h3 className="font-serif text-lg text-charcoal font-semibold">
                  Layer 2: Learned Conversational Memories
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 1, text: '“Portfolio maintains ₹4.2Cr Tier-1 auto component book with long call hedges.”', type: 'PINNED', date: 'Learned Yesterday' },
                    { id: 2, text: '“Requires strict statutory concordance notes for post-July 2024 offences under BNS.”', type: 'LEARNED', date: 'Learned 3 days ago' },
                    { id: 3, text: '“Prefers concise 3-bullet executive briefs with actionable delta tags.”', type: 'HEURISTIC', date: 'Learned 1 week ago' }
                  ].map((m) => (
                    <div key={m.id} className="p-4 rounded-xl bg-surfacePure border border-hairline flex items-center justify-between gap-4 text-xs">
                      <div className="space-y-1">
                        <span className="font-sans text-charcoal font-normal">{m.text}</span>
                        <div className="flex items-center gap-2 font-mono text-[10px] text-mutedInk">
                          <span className={`px-1.5 py-0.2 rounded font-semibold ${m.type === 'PINNED' ? 'bg-amber-100 text-terracotta' : 'bg-surfaceSubtle text-mutedInk'}`}>
                            {m.type}
                          </span>
                          <span>{m.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button type="button" className="text-mutedInk hover:text-charcoal text-xs font-mono font-medium cursor-pointer">
                          Edit
                        </button>
                        <span className="text-hairline">•</span>
                        <button type="button" className="text-rose-700 hover:underline text-xs font-mono font-medium cursor-pointer">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparent Credit Ledger */}
              <div className="space-y-4 pt-4 border-t border-hairline">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-charcoal font-semibold">
                    Deterministic Credit Audit Ledger
                  </h3>
                  <span className="font-mono text-xs text-mutedInk">Current Balance: 2,410.5 CR</span>
                </div>

                <div className="border border-hairline rounded-xl overflow-hidden bg-surfacePure shadow-xs">
                  <table className="w-full text-left font-mono text-xs">
                    <thead className="bg-surfaceSubtle border-b border-hairline text-mutedInk text-[10px] uppercase">
                      <tr>
                        <th className="p-3">Timestamp</th>
                        <th className="p-3">Prompt / Operation</th>
                        <th className="p-3">Specialist Mind</th>
                        <th className="p-3">Feeds Called</th>
                        <th className="p-3 text-right">Credits</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      <tr>
                        <td className="p-3 text-mutedInk">Today 09:21 IST</td>
                        <td className="p-3 text-charcoal font-sans font-medium">RELIANCE 3000 CE Greeks &amp; PCR Audit</td>
                        <td className="p-3 text-botanical">Market Intelligence</td>
                        <td className="p-3 text-mutedInk">NSE API + Black-Scholes</td>
                        <td className="p-3 text-right font-bold text-terracotta">-3.5 CR</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-mutedInk">Today 08:45 IST</td>
                        <td className="p-3 text-charcoal font-sans font-medium">Scheduled Routine: NIFTY Gamma Exposure</td>
                        <td className="p-3 text-botanical">Market Intelligence</td>
                        <td className="p-3 text-mutedInk">NSE Derivatives + RBI</td>
                        <td className="p-3 text-right font-bold text-terracotta">-3.5 CR</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-mutedInk">Yesterday 18:00 IST</td>
                        <td className="p-3 text-charcoal font-sans font-medium">eCourts CNR Check DLHC010048212026</td>
                        <td className="p-3 text-botanical">Legal Intelligence</td>
                        <td className="p-3 text-mutedInk">eCourts NJDG + Kanoon</td>
                        <td className="p-3 text-right font-bold text-terracotta">-4.0 CR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
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
                  className={`px-2.5 py-0.5 rounded text-[11px] font-sans font-medium transition-all cursor-pointer ${
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
                  className={`px-2.5 py-0.5 rounded text-[11px] font-sans font-medium transition-all cursor-pointer ${
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
                  className={`px-2.5 py-0.5 rounded text-[11px] font-sans font-medium transition-all cursor-pointer ${
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
                className="p-1 rounded hover:bg-surfaceSubtle text-mutedInk hover:text-charcoal transition-colors cursor-pointer"
                title="Collapse Canvas"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Artifact Content Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {exportNotice && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-mono text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>{exportNotice}</span>
                </div>
              )}

              {artifactTab === 'preview' && (
                <div className="space-y-4 font-sans">
                  {/* Status Banner */}
                  <div className="p-3.5 bg-alabaster border border-hairline rounded-xl space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-secondary uppercase font-semibold">NSE Option Snapshot</span>
                      <span className="text-mutedInk">Recorded: 09:20:00 IST</span>
                    </div>
                    <div className="font-sans text-lg text-charcoal font-bold">
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
                    <button 
                      type="button" 
                      onClick={() => {
                        navigator.clipboard.writeText(`{ "symbol": "RELIANCE", "underlying_spot": 2998.40, "pcr_oi": 1.121, "sha256_tape_hash": "e3b0c44298fc1c149afbf4c8996fb924" }`);
                        setExportNotice('Copied JSON tape to clipboard.');
                        setTimeout(() => setExportNotice(''), 2500);
                      }}
                      className="text-botanical hover:underline font-semibold cursor-pointer"
                    >
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
                    <div className="font-sans text-base text-charcoal font-bold">
                      Institutional Export Options
                    </div>
                    <p className="text-mutedInk">
                      Generate verifiable documents with embedded cryptographic SHA-256 hashes and eCourts/NSE timestamps.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => handleExportDownload('pdf')}
                      className="w-full p-3 rounded-lg border border-hairline hover:border-botanical bg-alabaster flex items-center justify-between transition-all group cursor-pointer"
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
                      onClick={() => handleExportDownload('docx')}
                      className="w-full p-3 rounded-lg border border-hairline hover:border-botanical bg-alabaster flex items-center justify-between transition-all group cursor-pointer"
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
                      onClick={() => handleExportDownload('csv')}
                      className="w-full p-3 rounded-lg border border-hairline hover:border-botanical bg-alabaster flex items-center justify-between transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-emerald-700 text-xl">table_view</span>
                        <div className="text-left">
                          <div className="font-semibold text-charcoal group-hover:text-botanical">Excel Greeks Model (.csv/.xlsx)</div>
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
              <span>Ref: {currentProject.slice(0, 16)}</span>
              <span className="text-botanical font-semibold">Grounded &amp; Verified</span>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
