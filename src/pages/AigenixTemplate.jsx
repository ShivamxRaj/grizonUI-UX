import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AigenixTemplate() {
  // State for active hero node
  const [activeNode, setActiveNode] = useState('insights');
  // State for typewriter effect
  const [typedText, setTypedText] = useState('Smarter Decisions');
  // State for active chart timeframe
  const [chartTimeframe, setChartTimeframe] = useState('week');
  // State for active pricing tier toggle
  const [annualBilling, setAnnualBilling] = useState(true);
  // State for interactive agent simulator
  const [promptInput, setPromptInput] = useState('Analyze market sentiment on semiconductor supply chains');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);
  // State for active agent tab in fleet section
  const [activeAgentTab, setActiveAgentTab] = useState('research');

  // Hero node definitions
  const heroNodes = [
    {
      id: 'visuals',
      name: 'Smart Visuals',
      icon: 'visibility',
      description: 'Generates multi-modal flowcharts, telemetry heatmaps, and spatial architectural diagrams instantly.',
      metric: '4K resolution • 120ms latency',
      color: '#ccff00',
      pos: 'top-[8%] right-[8%] lg:top-[12%] lg:right-[15%]'
    },
    {
      id: 'insights',
      name: 'Instant Insights',
      icon: 'bolt',
      description: 'Autonomous multi-hop correlation across real-time feeds, financial disclosures, and codebases.',
      metric: 'Zero hallucination • 100% cited',
      color: '#bbf02c',
      pos: 'top-[35%] left-[2%] lg:top-[38%] lg:left-[5%]'
    },
    {
      id: 'automation',
      name: 'AI Automation',
      icon: 'smart_toy',
      description: 'End-to-end self-healing routines, automated PR validation, and continuous data pipelines.',
      metric: '48 autonomous actions/hour',
      color: '#84cc16',
      pos: 'top-[42%] right-[2%] lg:top-[44%] lg:right-[5%]'
    },
    {
      id: 'tools',
      name: 'Latest Tools',
      icon: 'build',
      description: 'Native tool calling ecosystem: Python REPL, Web Sandbox, Git CLI, and Vector Knowledge Bases.',
      metric: '320+ verified integrations',
      color: '#a3e635',
      pos: 'bottom-[12%] left-[8%] lg:bottom-[15%] lg:left-[12%]'
    },
    {
      id: 'ask',
      name: 'Ask Anything',
      icon: 'chat',
      description: 'Natural language interface with deep domain context and continuous conversational memory.',
      metric: 'Persistent state memory',
      color: '#ccff00',
      pos: 'bottom-[10%] right-[8%] lg:bottom-[12%] lg:right-[14%]'
    }
  ];

  // Typewriter effect simulation
  useEffect(() => {
    const phrases = [
      'Smarter Decisions',
      'Autonomous Agents',
      'Quantum Workflows',
      'Strategic Intelligence'
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer;

    const typeLoop = () => {
      const currentPhrase = phrases[phraseIdx];
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, charIdx + 1));
        charIdx++;
        if (charIdx === currentPhrase.length) {
          isDeleting = true;
          timer = setTimeout(typeLoop, 2200);
          return;
        }
      } else {
        setTypedText(currentPhrase.substring(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }
      timer = setTimeout(typeLoop, isDeleting ? 45 : 95);
    };

    timer = setTimeout(typeLoop, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleRunSimulation = (e) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    setIsSimulating(true);
    setSimulationResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      setSimulationResult({
        status: 'Success',
        executionTime: '412ms',
        tokensUsed: '1,840 tokens',
        confidenceScore: '99.4%',
        agentAssigned: 'Market Intelligence Agent (Grizon-Mk-4)',
        summary:
          'Scanned 14 statutory filings and 8 earnings transcripts. Identified a 12.8% tightening in TSMC substrate allocation with downstream margin impact for tier-2 fabless IC providers.',
        citations: ['SEC 10-Q Filing #2026-08', 'NSE Option Chain Volatility Index', 'Grizon Semantic Vector #994']
      });
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="aigenix-root min-h-screen bg-[#021310] text-[#e2f5ee] font-sans relative selection:bg-[#9fe826]/30 selection:text-white">
      {/* Scoped CSS styling for Aigenix cyber effects */}
      <style>{`
        .aigenix-root {
          --color-neon: #9fe826;
          --color-neon-bright: #ccff00;
          --color-bg-dark: #021310;
          --color-card-dark: #07231e;
          --color-card-border: rgba(159, 232, 38, 0.22);
        }

        .cyber-grid-bg {
          background-image: 
            radial-gradient(circle at 50% 30%, rgba(13, 56, 48, 0.7) 0%, rgba(4, 23, 19, 0.95) 60%, #021310 100%),
            radial-gradient(rgba(159, 232, 38, 0.12) 1px, transparent 1px);
          background-size: 100% 100%, 32px 32px;
        }

        .dot-matrix-light {
          background-color: #f7faf7;
          background-image: radial-gradient(#84cc16 1.2px, transparent 1.2px);
          background-size: 24px 24px;
        }

        .neon-glow {
          box-shadow: 0 0 25px rgba(159, 232, 38, 0.35);
        }

        .neon-glow-lg {
          box-shadow: 0 0 45px rgba(159, 232, 38, 0.45);
        }

        .card-cyber {
          background: linear-gradient(145deg, rgba(8, 38, 32, 0.85) 0%, rgba(5, 25, 21, 0.92) 100%);
          border: 1px solid rgba(159, 232, 38, 0.25);
          backdrop-filter: blur(14px);
        }

        .card-cyber:hover {
          border-color: rgba(159, 232, 38, 0.6);
          box-shadow: 0 8px 32px rgba(159, 232, 38, 0.15);
        }

        .neon-text-glow {
          text-shadow: 0 0 12px rgba(159, 232, 38, 0.5);
        }

        @keyframes pulseOrbit {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.03); }
          100% { transform: rotate(360deg) scale(1); }
        }

        .animate-orbit {
          animation: pulseOrbit 28s linear infinite;
        }

        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .cursor-blink {
          display: inline-block;
          animation: cursorBlink 0.9s infinite;
          color: #9fe826;
        }

        @keyframes waveFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .animate-float {
          animation: waveFloat 4s ease-in-out infinite;
        }
      `}</style>

      {/* Top Banner indicating ThemeForest Template preview and quick toggle */}
      <aside aria-label="Template Preview Banner" className="bg-[#0b2f28] border-b border-[#9fe826]/30 text-xs py-2 px-4 text-center flex flex-wrap items-center justify-center gap-3 text-[#c2ebd9] z-50 relative">
        <span className="inline-flex items-center gap-1.5 font-mono text-[#9fe826] font-semibold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-[#9fe826] animate-ping"></span>
          ThemeForest #3 Match
        </span>
        <span>Aigenix AI Agent &amp; SaaS HTML5 Template — Fully Adapted for GriZon AI</span>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="px-2.5 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] transition-colors"
          >
            ← Switch to Sovereign Editorial Theme
          </Link>
          <a
            href="https://themeforest.net/category/site-templates?sort=relevance&term=ai%20agent%20saas"
            target="_blank"
            rel="noreferrer"
            className="text-[#9fe826] hover:underline font-mono text-[11px] inline-flex items-center gap-0.5"
          >
            ThemeForest Catalog ↗
          </a>
        </div>
      </aside>

      {/* =========================================================================
          1. AIGENIX CYBER HEADER / NAVBAR
      ========================================================================== */}
      <header className="sticky top-0 z-40 bg-[#041d18]/90 backdrop-blur-md border-b border-[#9fe826]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo: AIGenix with Lime highlight */}
          <div className="flex items-center gap-8">
            <Link to="/aigenix" className="flex items-center gap-1.5 group">
              <span className="font-extrabold text-2xl tracking-tight text-[#9fe826] font-sans">
                AI<span className="text-white group-hover:text-[#9fe826] transition-colors">Genix</span>
              </span>
              <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#9fe826]/20 text-[#9fe826] border border-[#9fe826]/30 font-bold ml-1">
                GriZon
              </span>
            </Link>

            {/* Desktop Navigation Links with dropdown indicators */}
            <nav className="hidden lg:flex items-center gap-7 text-[14px] text-[#bce3d4]">
              <div className="flex items-center gap-1 cursor-pointer text-[#9fe826] font-medium">
                <span>Home</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#9fe826] transition-colors">
                <span>Company</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#9fe826] transition-colors">
                <span>Portfolio</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#9fe826] transition-colors">
                <span>Blog</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#9fe826] transition-colors">
                <span>Pages</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </div>
              <Link to="/about" className="hover:text-[#9fe826] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3.5">
            <Link
              to="/app"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#072d25] border border-[#9fe826]/40 text-[#9fe826] hover:bg-[#0b3c31] text-[13px] font-semibold transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">login</span>
              <span>Log in</span>
            </Link>
            <Link
              to="/welcome"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#9fe826] hover:bg-[#b0f531] text-[#031d17] text-[13px] font-bold shadow-[0_0_20px_rgba(159,232,38,0.4)] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[17px] font-bold">bolt</span>
              <span>Get Started</span>
            </Link>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. AIGENIX SIGNATURE HERO: DUAL-COLUMN WITH INTERACTIVE 5-NODE AI HUB
      ========================================================================== */}
      <section className="cyber-grid-bg relative pt-12 pb-24 px-6 md:px-10 overflow-hidden">
        {/* Subtle glowing ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9fe826]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#125345]/30 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start pt-4">
            {/* Beta pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#072d25]/80 border border-[#9fe826]/40 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#9fe826] animate-pulse"></span>
              <span className="font-mono text-[12px] tracking-wide text-[#9fe826] font-medium">
                Now in Public Beta — Try Free
              </span>
            </div>

            {/* Main Headline with Typewriter Cursor */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.12] text-white mb-6">
              AI That Drives <br />
              <span className="text-[#9fe826] neon-text-glow">
                {typedText}
              </span>
              <span className="cursor-blink">|</span>
            </h1>

            {/* Paragraph copy */}
            <p className="text-[#a5cfbe] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Aigenix transforms raw data into strategic intelligence. Deploy autonomous AI agents, accelerate workflows, and unlock decisions that were never possible before.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/welcome"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#9fe826] text-[#041d18] font-bold text-[15px] hover:bg-[#b0f531] shadow-[0_0_25px_rgba(159,232,38,0.45)] transition-all active:scale-95"
              >
                <span>Deploy Autonomous Fleet</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <a
                href="#fleet-demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#09352c] border border-[#9fe826]/30 text-[#e0f5ed] font-medium text-[15px] hover:border-[#9fe826]/80 hover:bg-[#0c4035] transition-all"
              >
                <span className="material-symbols-outlined text-[19px] text-[#9fe826]">play_circle</span>
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Live Metrics strip */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#9fe826]/20 w-full max-w-lg">
              <div>
                <div className="text-2xl font-black text-white">99.98%</div>
                <div className="text-xs text-[#8ab8a5] uppercase font-mono mt-0.5">Model Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#9fe826]">10x</div>
                <div className="text-xs text-[#8ab8a5] uppercase font-mono mt-0.5">Faster Routine Run</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">320+</div>
                <div className="text-xs text-[#8ab8a5] uppercase font-mono mt-0.5">Autonomous Nodes</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Centerpiece — Glowing AI Hub with 5 Radiating Nodes */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[440px] sm:min-h-[500px]">
            {/* SVG Connecting Dashed Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 600 500"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="lineGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#9fe826" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#9fe826" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              {/* Lines from Center (300, 250) to each satellite node */}
              <line x1="300" y1="250" x2="470" y2="90" stroke="#9fe826" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.6" />
              <line x1="300" y1="250" x2="130" y2="210" stroke="#9fe826" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.6" />
              <line x1="300" y1="250" x2="490" y2="245" stroke="#9fe826" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.6" />
              <line x1="300" y1="250" x2="150" y2="390" stroke="#9fe826" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.6" />
              <line x1="300" y1="250" x2="460" y2="400" stroke="#9fe826" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.6" />
              {/* Concentric pulsing rings */}
              <circle cx="300" cy="250" r="85" fill="none" stroke="#9fe826" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
              <circle cx="300" cy="250" r="145" fill="none" stroke="#9fe826" strokeWidth="1" strokeOpacity="0.15" />
            </svg>

            {/* Central Glowing AI Box */}
            <div className="z-10 relative flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#9fe826] text-[#031d17] font-black shadow-[0_0_55px_rgba(159,232,38,0.7)] transition-transform duration-300 hover:scale-105 select-none">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI</span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#052b21] font-bold mt-1">Core Engine</span>
              <div className="absolute -inset-1 rounded-3xl border border-[#ccff00] animate-ping opacity-25"></div>
            </div>

            {/* Satellite Nodes */}
            {/* 1. Smart Visuals (Top Right) */}
            <div
              onClick={() => setActiveNode('visuals')}
              className={`absolute top-4 right-2 sm:top-8 sm:right-6 z-20 cursor-pointer transition-all duration-300 ${
                activeNode === 'visuals' ? 'scale-110 z-30' : 'hover:scale-105'
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#9fe826] text-[#041d18] font-bold text-sm shadow-[0_4px_20px_rgba(159,232,38,0.4)]">
                <span className="material-symbols-outlined text-[19px]">visibility</span>
                <span>Smart Visuals</span>
              </div>
            </div>

            {/* 2. Instant Insights (Mid Left) */}
            <div
              onClick={() => setActiveNode('insights')}
              className={`absolute top-28 left-0 sm:top-36 sm:left-4 z-20 cursor-pointer transition-all duration-300 ${
                activeNode === 'insights' ? 'scale-110 z-30' : 'hover:scale-105'
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#9fe826] text-[#041d18] font-bold text-sm shadow-[0_4px_20px_rgba(159,232,38,0.4)]">
                <span className="material-symbols-outlined text-[19px]">bolt</span>
                <span>Instant Insights</span>
              </div>
            </div>

            {/* 3. AI Automation (Mid Right) */}
            <div
              onClick={() => setActiveNode('automation')}
              className={`absolute top-44 right-0 sm:top-48 sm:right-2 z-20 cursor-pointer transition-all duration-300 ${
                activeNode === 'automation' ? 'scale-110 z-30' : 'hover:scale-105'
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#9fe826] text-[#041d18] font-bold text-sm shadow-[0_4px_20px_rgba(159,232,38,0.4)]">
                <span className="material-symbols-outlined text-[19px]">smart_toy</span>
                <span>AI Automation</span>
              </div>
            </div>

            {/* 4. Latest Tools (Bottom Left) */}
            <div
              onClick={() => setActiveNode('tools')}
              className={`absolute bottom-6 left-2 sm:bottom-10 sm:left-8 z-20 cursor-pointer transition-all duration-300 ${
                activeNode === 'tools' ? 'scale-110 z-30' : 'hover:scale-105'
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#9fe826] text-[#041d18] font-bold text-sm shadow-[0_4px_20px_rgba(159,232,38,0.4)]">
                <span className="material-symbols-outlined text-[19px]">build</span>
                <span>Latest Tools</span>
              </div>
            </div>

            {/* 5. Ask Anything (Bottom Right) */}
            <div
              onClick={() => setActiveNode('ask')}
              className={`absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 cursor-pointer transition-all duration-300 ${
                activeNode === 'ask' ? 'scale-110 z-30' : 'hover:scale-105'
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#9fe826] text-[#041d18] font-bold text-sm shadow-[0_4px_20px_rgba(159,232,38,0.4)]">
                <span className="material-symbols-outlined text-[19px]">chat</span>
                <span>Ask Anything</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Node Details Popover / Banner */}
        <div className="max-w-4xl mx-auto mt-8 bg-[#072d25]/90 border border-[#9fe826]/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
          {(() => {
            const current = heroNodes.find((n) => n.id === activeNode) || heroNodes[1];
            return (
              <>
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#9fe826] text-[#041d18] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[22px]">{current.icon}</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm flex items-center gap-2">
                      <span>{current.name}</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#9fe826]/20 text-[#9fe826]">
                        {current.metric}
                      </span>
                    </div>
                    <div className="text-[#a5cfbe] text-xs mt-0.5">{current.description}</div>
                  </div>
                </div>
                <Link
                  to="/agents"
                  className="whitespace-nowrap px-4 py-1.5 rounded-lg bg-[#9fe826]/20 hover:bg-[#9fe826]/30 border border-[#9fe826]/40 text-[#9fe826] text-xs font-semibold font-mono"
                >
                  Inspect Architecture →
                </Link>
              </>
            );
          })()}
        </div>
      </section>

      {/* =========================================================================
          3. SECTION 2: CONTINUOUS IMPROVEMENT & UPDATES (FROM USER SCREENSHOT 2)
      ========================================================================== */}
      <section className="dot-matrix-light text-[#11231f] py-20 px-6 md:px-10 border-t border-[#9fe826]/30">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading with Custom Lime Underline on "Updates" */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2a23] tracking-tight mb-4">
              Continuous Improvement &amp;{' '}
              <span className="relative inline-block">
                Updates
                <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-[#84cc16] rounded-full"></span>
              </span>
            </h2>
            <p className="text-[#45695f] text-base sm:text-lg leading-relaxed">
              Deploy specialized models optimized for hyperscale intelligence processing, workflow routing, and localized node automation.
            </p>
          </div>

          {/* Dual Cards Grid matching screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CARD 1: Automated AI Charts */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#bbf02c] shadow-[0_10px_35px_rgba(132,204,22,0.12)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_45px_rgba(132,204,22,0.22)]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-[#0c2a23]">Automated AI Charts</h3>
                  <div className="flex items-center gap-1 bg-[#f0f9eb] p-1 rounded-lg border border-[#bbf02c]/50 text-xs font-mono">
                    <button
                      onClick={() => setChartTimeframe('day')}
                      className={`px-2 py-0.5 rounded ${chartTimeframe === 'day' ? 'bg-[#84cc16] text-white font-bold' : 'text-[#45695f]'}`}
                    >
                      24H
                    </button>
                    <button
                      onClick={() => setChartTimeframe('week')}
                      className={`px-2 py-0.5 rounded ${chartTimeframe === 'week' ? 'bg-[#84cc16] text-white font-bold' : 'text-[#45695f]'}`}
                    >
                      7D
                    </button>
                    <button
                      onClick={() => setChartTimeframe('month')}
                      className={`px-2 py-0.5 rounded ${chartTimeframe === 'month' ? 'bg-[#84cc16] text-white font-bold' : 'text-[#45695f]'}`}
                    >
                      30D
                    </button>
                  </div>
                </div>
                <p className="text-[#557b70] text-sm leading-relaxed mb-6">
                  Monotonectally whiteboard proactive with leading continually niche markets rather than fully tested intelligence networks.
                </p>
              </div>

              {/* Interactive Multi-Wave Vector Chart */}
              <div className="w-full bg-[#fbfdfa] rounded-2xl p-4 border border-[#e2f0d9] relative overflow-hidden">
                {/* Chart Header Markers */}
                <div className="flex items-center justify-between text-xs font-mono text-[#608b7e] mb-2">
                  <span>Throughput / Second</span>
                  <span className="text-[#15803d] font-bold">● High Fidelity</span>
                </div>

                {/* SVG Chart with dynamic curve */}
                <div className="relative h-48 w-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 500 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradientGreen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#84cc16" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#84cc16" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="chartGradientTeal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0d9488" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Gridlines */}
                    <line x1="0" y1="40" x2="500" y2="40" stroke="#e8f3e1" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="90" x2="500" y2="90" stroke="#e8f3e1" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="140" x2="500" y2="140" stroke="#e8f3e1" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Secondary Teal Area Curve */}
                    <path
                      d="M 0,140 Q 80,120 160,110 T 320,80 T 500,60 L 500,180 L 0,180 Z"
                      fill="url(#chartGradientTeal)"
                    />
                    <path
                      d="M 0,140 Q 80,120 160,110 T 320,80 T 500,60"
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="2.5"
                    />

                    {/* Primary Neon Lime Area Curve */}
                    <path
                      d="M 0,130 Q 90,145 150,85 T 300,50 T 430,90 T 500,40 L 500,180 L 0,180 Z"
                      fill="url(#chartGradientGreen)"
                    />
                    <path
                      d="M 0,130 Q 90,145 150,85 T 300,50 T 430,90 T 500,40"
                      fill="none"
                      stroke="#65a30d"
                      strokeWidth="3.5"
                    />

                    {/* Interactive Marker 1 (+3,460) */}
                    <circle cx="150" cy="85" r="5" fill="#0c2a23" stroke="#84cc16" strokeWidth="3" />
                    {/* Interactive Marker 2 (+1,280) */}
                    <circle cx="430" cy="90" r="5" fill="#0c2a23" stroke="#84cc16" strokeWidth="3" />
                  </svg>

                  {/* Floating Pill Badges from Screenshot */}
                  <div className="absolute top-10 left-[26%] bg-[#84cc16] text-[#06241c] font-black text-xs px-2.5 py-1 rounded-full shadow-md font-mono flex items-center gap-1">
                    <span>+3,460</span>
                  </div>
                  <div className="absolute top-12 right-[12%] bg-[#0f2e26] text-white font-black text-xs px-2.5 py-1 rounded-full shadow-md font-mono flex items-center gap-1">
                    <span>+1,280</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#6e978b] pt-2 border-t border-[#e8f3e1] font-mono">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            {/* CARD 2: Smart Security Integration */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#bbf02c] shadow-[0_10px_35px_rgba(132,204,22,0.12)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_45px_rgba(132,204,22,0.22)]">
              <div>
                <h3 className="text-2xl font-bold text-[#0c2a23] mb-3">Smart Security Integration</h3>
                <p className="text-[#557b70] text-sm leading-relaxed mb-6">
                  Deploy quantum cryptography protocols and isolated environments.
                </p>
              </div>

              {/* Security Centerpiece with Orbiting Satellites */}
              <div className="w-full bg-[#fbfdfa] rounded-2xl p-6 border border-[#e2f0d9] relative flex items-center justify-center min-h-[220px] overflow-hidden">
                {/* Orbit Rings */}
                <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#84cc16]/50"></div>
                <div className="absolute w-60 h-60 rounded-full border border-[#84cc16]/20"></div>

                {/* Central Security Shield (From screenshot: rounded square with bright neon lime border and dark shield) */}
                <div className="z-10 w-20 h-20 rounded-2xl bg-[#f0f9eb] border-[4px] border-[#84cc16] flex items-center justify-center shadow-[0_0_25px_rgba(132,204,22,0.4)]">
                  <div className="w-12 h-12 rounded-xl bg-[#082d25] flex items-center justify-center text-[#84cc16]">
                    <span className="material-symbols-outlined text-[28px]">shield</span>
                  </div>
                </div>

                {/* Orbiting Satellite Badges */}
                {/* Satellite 1: Bot (Top Left) */}
                <div className="absolute top-5 left-10 w-10 h-10 rounded-xl bg-white border border-[#e2f0d9] shadow-sm flex items-center justify-center text-[#082d25] hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                </div>

                {/* Satellite 2: Refresh/Sync (Top Right) */}
                <div className="absolute top-5 right-10 w-10 h-10 rounded-xl bg-white border border-[#e2f0d9] shadow-sm flex items-center justify-center text-[#082d25] hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">sync</span>
                </div>

                {/* Satellite 3: Rocket (Bottom Left) */}
                <div className="absolute bottom-5 left-12 w-10 h-10 rounded-xl bg-white border border-[#e2f0d9] shadow-sm flex items-center justify-center text-[#082d25] hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                </div>

                {/* Satellite 4: Settings/Security Gear (Bottom Right) */}
                <div className="absolute bottom-5 right-12 w-10 h-10 rounded-xl bg-white border border-[#e2f0d9] shadow-sm flex items-center justify-center text-[#082d25] hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">settings</span>
                </div>
              </div>

              {/* Bottom security badges */}
              <div className="mt-5 flex items-center justify-between text-xs font-mono text-[#557b70] pt-3 border-t border-[#e2f0d9]">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#16a34a]"></span>
                  SOC2 Type II Grounded
                </span>
                <span>Isolated Ephemeral Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE FLEET & WORKBENCH SIMULATOR
      ========================================================================== */}
      <section id="fleet-demo" className="py-24 px-6 md:px-10 bg-[#031713] border-t border-[#9fe826]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[#9fe826] tracking-widest mb-3">
                <span className="material-symbols-outlined text-[15px]">terminal</span>
                <span>Autonomous Fleet Console</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Test-Drive the Specialized Agent Fleet
              </h2>
            </div>
            <p className="text-[#99c4b3] text-sm max-w-md">
              Unlike generic LLM wrappers, each Grizon agent executes multi-step deterministic workflows with isolated verification loops.
            </p>
          </div>

          {/* Interactive Agent Simulator Console */}
          <div className="card-cyber rounded-3xl p-6 sm:p-8">
            {/* Agent Select Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#9fe826]/20 no-scrollbar mb-6">
              {[
                { id: 'research', name: 'Fast & Deep Research', icon: 'travel_explore' },
                { id: 'dev', name: 'Dev Studio Architect', icon: 'code' },
                { id: 'market', name: 'Market Intelligence', icon: 'candlestick_chart' },
                { id: 'legal', name: 'Legal Precedent Watch', icon: 'gavel' },
                { id: 'doc', name: 'Doc & Video Intelligence', icon: 'description' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAgentTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeAgentTab === tab.id
                      ? 'bg-[#9fe826] text-[#031d17] shadow-[0_0_15px_rgba(159,232,38,0.3)]'
                      : 'bg-[#072d25] text-[#a5cfbe] hover:bg-[#0c3f34]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[17px]">{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Prompt input Form */}
            <form onSubmit={handleRunSimulation} className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#9fe826]/70 text-[20px]">
                  search
                </span>
                <input
                  type="text"
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  placeholder="Ask this agent to analyze, synthesize, or automate a task..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#051f1a] border border-[#9fe826]/30 text-white placeholder-[#5a8677] text-sm focus:outline-none focus:border-[#9fe826] focus:ring-1 focus:ring-[#9fe826]"
                />
              </div>
              <button
                type="submit"
                disabled={isSimulating}
                className="px-6 py-3.5 rounded-xl bg-[#9fe826] hover:bg-[#b0f531] text-[#031d17] font-bold text-sm shadow-[0_0_20px_rgba(159,232,38,0.4)] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {isSimulating ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    <span>Running Agent...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                    <span>Execute Agent Routine</span>
                  </>
                )}
              </button>
            </form>

            {/* Simulation Execution Output Display */}
            <div className="bg-[#031512] rounded-2xl p-5 border border-[#9fe826]/20 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#0f3b31] text-[#719f8e]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
                  <span className="text-white ml-2 text-[11px]">Grizon-Agent-Runtime-v4.0.log</span>
                </div>
                <span>Session ID: #GRZ-9941</span>
              </div>

              {simulationResult ? (
                <div className="pt-4 space-y-3 text-[#cbf2e2]">
                  <div className="text-[#9fe826] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Routine Completed with Status: 200 OK ({simulationResult.executionTime})</span>
                  </div>
                  <div className="text-white font-sans text-sm bg-[#06241d] p-3.5 rounded-xl border border-[#9fe826]/30">
                    {simulationResult.summary}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {simulationResult.citations.map((c, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-[#09352a] text-[#9fe826] text-[11px] border border-[#9fe826]/20">
                        📄 {c}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-[#558172]">
                  <span className="material-symbols-outlined text-[32px] text-[#9fe826]/40 mb-2 block">
                    memory
                  </span>
                  <span>Click "Execute Agent Routine" or enter a query to see the live multi-hop agent trace.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PRICING & CREDIT TIERS
      ========================================================================== */}
      <section className="py-24 px-6 md:px-10 bg-[#021310] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase text-[#9fe826] tracking-widest">
              Predictable Computing Economy
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 mb-4 tracking-tight">
              Transparent, Value-Based Plans
            </h2>
            <p className="text-[#8fb8a7] text-sm sm:text-base">
              No black-box subscriptions. Scale with verified execution credits and dedicated agent models.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 bg-[#072d25] p-1.5 rounded-full border border-[#9fe826]/30">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  !annualBilling ? 'bg-[#9fe826] text-[#031d17]' : 'text-[#a5cfbe]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  annualBilling ? 'bg-[#9fe826] text-[#031d17]' : 'text-[#a5cfbe]'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.2 rounded-full bg-[#031d17] text-[#9fe826] text-[10px] font-mono">
                  -20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="card-cyber rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="text-sm font-mono uppercase text-[#8ab5a3]">Researcher</div>
                <div className="text-3xl font-extrabold text-white mt-2">
                  ${annualBilling ? '29' : '39'} <span className="text-sm font-normal text-[#75a391]">/ month</span>
                </div>
                <p className="text-[#8ab5a3] text-xs mt-3 mb-6">
                  Perfect for individual analysts exploring autonomous statutory and market research.
                </p>
                <ul className="space-y-3 text-xs text-[#c2e8d7] mb-8">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#9fe826]">check</span>
                    <span>5 Autonomous Agents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#9fe826]">check</span>
                    <span>2,500 Routine Execution Credits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#9fe826]">check</span>
                    <span>Standard Latency (400ms)</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/welcome"
                className="w-full py-3 rounded-xl bg-[#09352c] hover:bg-[#0d453a] border border-[#9fe826]/30 text-white text-xs font-bold text-center block transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Fleet (Highlighted) */}
            <div className="rounded-3xl p-8 flex flex-col justify-between relative bg-gradient-to-b from-[#0b382e] to-[#05231c] border-2 border-[#9fe826] shadow-[0_0_35px_rgba(159,232,38,0.25)]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-[#9fe826] text-[#031d17] font-black text-[10px] uppercase tracking-wider font-mono shadow-md">
                Most Popular Choice
              </div>
              <div>
                <div className="text-sm font-mono uppercase text-[#9fe826]">Pro Autonomous</div>
                <div className="text-4xl font-extrabold text-white mt-2">
                  ${annualBilling ? '79' : '99'} <span className="text-sm font-normal text-[#8ab5a3]">/ month</span>
                </div>
                <p className="text-[#8ab5a3] text-xs mt-3 mb-6">
                  Comprehensive fleet access with continuous background routines and priority execution.
                </p>
                <ul className="space-y-3 text-xs text-[#c2e8d7] mb-8">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#9fe826]">check</span>
                    <span>All 10 Specialized Agents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#9fe826]">check</span>
                    <span>15,000 Routine Credits / mo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#9fe826]">check</span>
                    <span>Deterministic Citations + Gazette Verifier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#9fe826]">check</span>
                    <span>Sub-150ms High Priority Routing</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/welcome"
                className="w-full py-3.5 rounded-xl bg-[#9fe826] hover:bg-[#b0f531] text-[#031d17] text-xs font-bold text-center block shadow-[0_0_20px_rgba(159,232,38,0.4)] transition-all"
              >
                Deploy Pro Fleet
              </Link>
            </div>

            {/* Enterprise Sovereign */}
            <div className="card-cyber rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="text-sm font-mono uppercase text-[#8ab5a3]">Enterprise Sovereign</div>
                <div className="text-3xl font-extrabold text-white mt-2">
                  Custom <span className="text-sm font-normal text-[#75a391]">/ deployment</span>
                </div>
                <p className="text-[#8ab5a3] text-xs mt-3 mb-6">
                  Air-gapped on-premises deployment with private fine-tuning and compliance guarantees.
                </p>
                <ul className="space-y-3 text-xs text-[#c2e8d7] mb-8">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#9fe826]">check</span>
                    <span>Dedicated Private Host &amp; VPC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#9fe826]">check</span>
                    <span>Custom Proprietary Agents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#9fe826]">check</span>
                    <span>Unlimited Credits &amp; SLAs</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/about"
                className="w-full py-3 rounded-xl bg-[#09352c] hover:bg-[#0d453a] border border-[#9fe826]/30 text-white text-xs font-bold text-center block transition-all"
              >
                Contact Sovereign Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. AIGENIX CYBER FOOTER
      ========================================================================== */}
      <footer className="bg-[#020e0b] border-t border-[#9fe826]/20 py-16 px-6 md:px-10 text-xs text-[#7aa593]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#0b2b23]">
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-extrabold text-xl tracking-tight text-[#9fe826]">
                AI<span className="text-white">Genix</span>
              </span>
              <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#9fe826]/20 text-[#9fe826] border border-[#9fe826]/30 font-bold">
                By GriZon
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#7aa593] max-w-sm mb-6">
              Aigenix autonomous multi-agent intelligence platform. Bridging deterministic research with real-time operational workflows.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#9fe826]">
              <span className="w-2 h-2 rounded-full bg-[#9fe826] animate-ping"></span>
              <span>All Systems Operational (99.98%)</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-sm mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li><Link to="/agents" className="hover:text-[#9fe826] transition-colors">Specialist Fleet</Link></li>
              <li><Link to="/workflow" className="hover:text-[#9fe826] transition-colors">Autonomous Routines</Link></li>
              <li><Link to="/welcome" className="hover:text-[#9fe826] transition-colors">Profile Memory</Link></li>
              <li><Link to="/pricing" className="hover:text-[#9fe826] transition-colors">Token Economics</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-[#9fe826] transition-colors">Our Philosophy</Link></li>
              <li><Link to="/about" className="hover:text-[#9fe826] transition-colors">Security &amp; SOC2</Link></li>
              <li><Link to="/agents" className="hover:text-[#9fe826] transition-colors">Research Gazettes</Link></li>
              <li><Link to="/welcome" className="hover:text-[#9fe826] transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-white font-bold text-sm mb-4">Stay Connected</h4>
            <p className="text-xs text-[#7aa593] mb-4">
              Receive updates whenever new agent models or statutory gazette verifiers are released.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter work email..."
                className="bg-[#051f1a] border border-[#9fe826]/30 px-3 py-2 rounded-lg text-white text-xs flex-1 focus:outline-none focus:border-[#9fe826]"
              />
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-[#9fe826] text-[#031d17] font-bold text-xs hover:bg-[#b0f531] transition-all"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#558172]">
          <div>© {new Date().getFullYear()} GriZon AI &amp; AIGenix Template. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-[#9fe826] hover:underline">Switch to Sovereign Editorial Theme</Link>
            <span>•</span>
            <Link to="/app" className="hover:text-white transition-colors">Console App</Link>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button (from Screenshot 2) */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-[#052b22] border-2 border-[#9fe826] text-[#9fe826] flex items-center justify-center shadow-[0_4px_20px_rgba(159,232,38,0.35)] hover:scale-110 active:scale-95 transition-all z-50 group"
      >
        <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-y-0.5">
          arrow_upward
        </span>
      </button>
    </div>
  );
}
