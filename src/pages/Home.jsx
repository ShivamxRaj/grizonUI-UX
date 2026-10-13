import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useSarvam';
import '../styles/main.css';

/* ── MARQUEE AGENTS ────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  'Auto Mode',
  'General Assistant',
  'Fast Research',
  'Deep Research',
  'Dev Studio',
  'Doc Intelligence',
  'Market Analyst',
  'System Architect',
  'Video Analyser'
];

/* ── 8 SPECIALISED AGENTS LIST ─────────────────────────────── */
const AGENT_CATALOGUE = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93V12h2.75a2.5 2.5 0 0 1 2.5 2.5V16a4 4 0 1 1-2 0v-1.5a.5.5 0 0 0-.5-.5h-8.5a.5.5 0 0 0-.5.5V16a4 4 0 1 1-2 0v-1.5A2.5 2.5 0 0 1 7 12h2.75V9.93A4.001 4.001 0 0 1 12 2z"/>
      </svg>
    ),
    title: 'General Assistant',
    desc: 'Everyday Q&A, reasoning, and brainstorming with fast response.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Fast Research',
    desc: 'Quick web research with instant real-time citations & sources.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 8.25 4.09c.42-.044.685.272.751.69z"/>
      </svg>
    ),
    title: 'Deep Research',
    desc: 'Multi-step research synthesis, fact-checking, and risk analysis.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <line x1="14" y1="4" x2="10" y2="20"/>
      </svg>
    ),
    title: 'Dev Studio',
    desc: 'Coding, debugging, execution tools, and live HTML/UI preview.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Doc Intelligence & Writer',
    desc: 'Analyse PDFs & docs; write reports, emails, copy, and legal drafts.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Data & Market Analyst',
    desc: 'Stock & crypto analysis, SEC filings, fundamental & technical lenses.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'System Architect',
    desc: 'System design, database schemas, and cloud architecture blueprints.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M10 8l6 4-6 4V8z"/>
      </svg>
    ),
    title: 'Video Analyser',
    desc: 'Upload videos to describe scenes, extract on-screen text, & answer questions.'
  }
];

/* ── FAQ ACCORDION DATA ──────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is Grizon AI?',
    a: 'Grizon AI is a multi-agent AI workspace. Instead of a single generic chatbot, you get specialised agents for research, coding, documents, markets, architecture, and video — plus Auto Mode that routes each request to the right agent.'
  },
  {
    q: 'What is Auto Mode?',
    a: 'Auto Mode is the default chat experience. For each message you send, Grizon automatically evaluates your prompt and routes it to the optimal specialised agent on your plan.'
  },
  {
    q: 'What is Dev Studio & Canvas?',
    a: 'Dev Studio is the coding agent where you can write and debug code. Generated code, UI previews, markdown reports, and spreadsheets open in a dedicated side canvas panel with instant downloads.'
  },
  {
    q: 'Is my data secure on Grizon AI?',
    a: 'Yes. Data is encrypted in transit and at rest with 256-bit encryption. We do NOT use your private conversations or files to train public AI models.'
  },
  {
    q: 'How does the credit system work?',
    a: 'Each plan includes monthly credits. Responses consume credits based on usage and agent type. Pro and Elite plans include monthly credit rollover.'
  }
];

/* ── HERO SECTION (TWO COLUMN: LEFT TEXT + RIGHT DUAL DEVICES) ── */
function Hero() {
  const scrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.querySelector('#features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [phoneTab, setPhoneTab] = useState('splash');

  return (
    <section id="hero" className="sr-hero" aria-label="Hero">
      {/* Bevel Signature Wavy Light Stream / Tunnel Video */}
      <div className="hero-wavy-container" aria-hidden="true">
        <video
          playsInline
          loop
          muted
          autoPlay
          poster="/videos/hero-wavy-poster.avif"
          className="hero-wavy-video"
        >
          <source src="/videos/hero-wavy-tunnel.mp4" type="video/mp4" />
        </video>
        <div className="hero-wavy-gradient-fade" />
      </div>

      {/* Bevel-Style Cinematic Atmospheric Light Tunnel Overlay */}
      <div className="hero-light-tunnel" aria-hidden="true" />
      {/* 3D Horizon Perspective Grid */}
      <div className="hero-perspective-grid" aria-hidden="true" />
      {/* Ambient Radial Spotlight */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-two-col">
          {/* Left Column: Clean, High-Impact Text Content */}
          <div className="hero-left-content">
            <h1 className="hero-title-left">
              <span className="hero-title-top">Everything you need,</span>
              <span className="gradient-text-hero">one workspace</span>
            </h1>

            <div className="hero-actions-left">
              <Link to="/app" className="btn-start hero-cta-btn">
                <span>Get Started with AI</span>
                <span className="btn-shine" aria-hidden="true" />
              </Link>
              <a href="#features" onClick={scrollToFeatures} className="btn-outline hero-cta-btn">
                <span>See How It Works</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dual Device Composition (Mobile + Laptop Overlap) */}
          <div className="hero-right-devices">
            {/* Laptop Frame (Background Right) */}
            <div className="laptop-device-frame">
              <div className="browser-dots">
                <span className="browser-dot red" />
                <span className="browser-dot yellow" />
                <span className="browser-dot green" />
                <div className="browser-url-bar">grizonai.com/workspace</div>
              </div>
              <img
                src="/images/grizon-chat.png"
                alt="Grizon AI Workspace Chat Interface"
                className="laptop-img"
              />
            </div>

            {/* Real iPhone 15 Pro Device Frame Container (Foreground Left Overlap) */}
            <div
              className="real-phone-wrapper"
              onClick={() => setPhoneTab(phoneTab === 'splash' ? 'chat' : 'splash')}
              title="Click to toggle GriZon AI Mobile View"
            >
              {/* Realistic iPhone 15 Pro metallic frame overlay */}
              <img
                src="/images/grizon-phone-real.png"
                alt="GriZon AI Real iPhone 15 Pro Mockup"
                className="real-phone-frame-img"
                style={{ opacity: phoneTab === 'splash' ? 1 : 0.95 }}
              />

              {/* Dynamic Mode Content fitted inside phone screen */}
              {phoneTab === 'chat' && (
                <div className="real-phone-screen-content">
                  <div className="mobile-header">
                    <img src="/grizon-logo.png" alt="Grizon AI Logo" className="mobile-logo-img" />
                    <div className="mobile-title-wrap">
                      <div className="mobile-app-name">Grizon AI</div>
                      <div className="mobile-app-status">● Auto Mode Connected</div>
                    </div>
                  </div>

                  <div className="mobile-chat-preview">
                    <div className="mobile-msg bot">
                      <span>👋 Hi! I am Auto Mode. Which agent would you like to run?</span>
                    </div>
                    <div className="mobile-agent-pills">
                      <span className="m-pill">🔍 Research</span>
                      <span className="m-pill">💻 Dev Studio</span>
                      <span className="m-pill">📊 Markets</span>
                    </div>
                    <div className="mobile-msg user">
                      <span>Analyze SEC 10-K disclosures</span>
                    </div>
                    <div className="mobile-msg bot active">
                      <span style={{ color: '#c084fc', fontWeight: 700 }}>⚡</span>
                      <span>Routing to Market Analyst...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── MARQUEE TICKER ─────────────────────────────────────────── */
function AgentMarquee() {
  return (
    <section className="ticker-section">
      <div className="ticker-label">Specialised agents for every workflow</div>
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="ticker-item">
              <span style={{ color: '#8b5cf6' }}>✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY GRIZON (WHY PEOPLE PREFER GRIZON OVER OTHER PLATFORMS) ─ */
function WhyGrizon() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="why-grizon-section" id="why-grizon" aria-label="Why GriZon">
      <div className="container">
        <div className="why-grizon-header" data-section-reveal>
          <h2 className="why-grizon-title">Why GriZon</h2>
          <p className="why-grizon-sub">
            I could give you a long pitch. Here's why people prefer GriZon over other platforms:
          </p>
        </div>

        <div className="why-grizon-grid">
          {/* Card 1: Autonomous Agents vs Generic Chatbots */}
          <div className="why-card" data-section-reveal style={{ transitionDelay: '0.05s' }}>
            <div className="why-card-top">
              <h3 className="why-card-title">Autonomous agents, not generic bots</h3>
            </div>
            <div className="why-card-divider" />
            <p className="why-card-desc">
              Other platforms force one generic chatbot to handle everything. GriZon deploys specialized agents—Dev Studio, Deep Research, Legal & Market Analyst—built with dedicated tooling, memory, and reasoning.
            </p>
          </div>

          {/* Card 2: Transparent Credits vs Subscription Chaos */}
          <div className="why-card" data-section-reveal style={{ transitionDelay: '0.15s' }}>
            <div className="why-card-top">
              <h3 className="why-card-title">Transparent credits, no subscription chaos</h3>
            </div>
            <div className="why-card-divider" />
            <p className="why-card-desc">
              Stop paying $20–$50 across 5 different AI subscriptions. GriZon gives you a unified credit balance with monthly rollover—you only pay for the actual compute you consume, with zero waste.
            </p>
          </div>

          {/* Card 3: Real Execution vs Chat Walls */}
          <div className="why-card" data-section-reveal style={{ transitionDelay: '0.25s' }}>
            <div className="why-card-top">
              <h3 className="why-card-title">Real execution, not just text bubbles</h3>
            </div>
            <div className="why-card-divider" />
            <p className="why-card-desc">
              Most AI tools stop at chatting. GriZon provides a live Dev Studio canvas, real code execution, file analysis, and instant document downloads so you finish complete projects end-to-end.
            </p>
          </div>

          {/* Card 4: Auto Mode & Zero Data Training (with Zenwood paperclip!) */}
          <div className="why-card why-card-pinned" data-section-reveal style={{ transitionDelay: '0.35s' }}>
            {/* Zenwood Signature Paperclip SVG */}
            <div className="why-paperclip-wrap" aria-hidden="true">
              <svg className="why-paperclip-svg" viewBox="0 0 28 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 20V41C9 44.866 12.134 48 16 48C19.866 48 23 44.866 23 41V14C23 8.47715 18.5228 4 13 4C7.47715 4 3 8.47715 3 14V42C3 48.6274 8.37258 54 15 54C21.6274 54 27 48.6274 27 42V17"
                  stroke="#1c1917"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="why-card-top">
              <h3 className="why-card-title">Auto Mode & zero data training</h3>
            </div>
            <div className="why-card-divider" />
            <p className="why-card-desc">
              Zero prompt engineering gymnastics. Auto Mode evaluates and routes prompts to the ideal agent automatically. All files stay 256-bit encrypted and are never used to train public AI models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FEATURES SECTION (#features) ────────────────────────────── */
function Features() {
  const ref = useRef(null);
  useReveal(ref);

  const featureCards = [
    {
      title: 'Auto Mode Routing',
      desc: 'Describe the task once. Auto Mode selects the best eligible specialised agent so you stay in flow.'
    },
    {
      title: 'Specialised Agent Catalogue',
      desc: 'Research, coding, documents, markets, architecture, and video — each agent is purpose-built for that workflow.'
    },
    {
      title: 'Dev Studio',
      desc: 'Write, debug, and iterate on code with execution tools and live HTML preview for UI work.'
    },
    {
      title: 'Research with Citations',
      desc: 'Fast Research for quick answers, Deep Research for multi-step synthesis with sources and risk analysis.'
    },
    {
      title: 'Markets, Docs & Video',
      desc: 'Analyse stocks and crypto, summarise documents, create reports, and unpack uploaded videos — all in chat.'
    },
    {
      title: 'Credits You Can See',
      desc: 'Every plan includes monthly credits. Track balance and usage in your wallet — upgrade when you need more.'
    }
  ];

  return (
    <section id="features" className="section" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} data-section-reveal>
          <span className="t-eyebrow">WHY GRIZON AI</span>
          <h2 className="t-section" style={{ marginTop: 12 }}>
            Agents built for the job, not generic chat
          </h2>
          <p className="t-body-lg" style={{ maxWidth: 620, margin: '16px auto 0' }}>
            Stop juggling generic chatbots. Pick a specialised agent — or let Auto Mode route your request automatically.
          </p>
        </div>

        <div className="sr-grid sr-grid-3">
          {featureCards.map((f, i) => (
            <div key={f.title} className="sr-card" data-section-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#8b5cf6', marginBottom: 16 }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>
                {f.title}
              </h3>
              <p className="t-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PRODUCT SHOWCASE SECTION (#showcase) ────────────────────── */
/* Beside-style unified interactive showcase unifying the 2 core pros of GriZon */
function Showcase() {
  const ref = useRef(null);
  useReveal(ref);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'canvas'

  const showcaseData = {
    chat: {
      eyebrow: 'SMART CONVERSATIONS',
      title: 'Chat with agents,',
      titleGradient: 'not generic bots',
      description: 'Start in Auto Mode or pick a specialised domain agent. Upload files, get real-time web-backed answers with citations, and keep conversations organised in one workspace.',
      image: '/images/grizon-chat.png',
      alt: 'Grizon AI Smart Agent Chat Interface',
      url: 'grizonai.com/workspace/chat',
      badgeText: 'Auto Mode Routing Active',
      glowColor: 'rgba(139, 92, 246, 0.35)',
      features: [
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          ),
          title: 'Auto Mode Routing',
          desc: 'Evaluates your prompt and selects the best eligible specialised agent automatically.'
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          ),
          title: 'Deep Document & File Analysis',
          desc: 'Upload PDFs, spreadsheets, and complex documents for instant mathematical and text extraction.'
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          ),
          title: 'Real-Time Web Search & Citations',
          desc: 'Live internet browsing with verified citation footnotes backing every single claim.'
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          ),
          title: 'Domain Agent Picker',
          desc: 'Switch smoothly between Dev Studio, Market Analyst, Legal, and Writer anytime in chat.'
        }
      ]
    },
    canvas: {
      eyebrow: 'WORKSPACE CANVAS',
      title: 'Artifacts, canvas,',
      titleGradient: 'and downloads',
      description: 'Generated docs, spreadsheets, charts, and code land in a dedicated side canvas — preview live HTML, inspect markdown, and download completed deliverables.',
      image: '/images/grizon-workspace.png',
      alt: 'Grizon AI Workspace Canvas and Artifacts Panel',
      url: 'grizonai.com/workspace/canvas',
      badgeText: 'Live Interactive Canvas Ready',
      glowColor: 'rgba(6, 182, 212, 0.35)',
      features: [
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          ),
          title: 'Downloadable Artifacts',
          desc: 'Export comprehensive reports in Markdown, PDF, CSV, or formatted code files.'
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          ),
          title: 'Live HTML & Code Sandbox Preview',
          desc: 'Real-time interactive canvas sandbox to test and view UI components and code.'
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
          ),
          title: 'Data Visuals & Analysis Charts',
          desc: 'Render interactive graphs, charts, and visual tables directly from analysis agents.'
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="3" x2="9" y2="21"/>
            </svg>
          ),
          title: 'Organised Project Sidebar',
          desc: 'Keep chats pinned, tagged, and categorized in a unified sidebar tree.'
        }
      ]
    }
  };

  const current = showcaseData[activeTab];

  return (
    <section id="showcase" className="section beside-showcase-section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="beside-header-block" data-section-reveal>
          <span className="t-eyebrow">THE GRIZON WORKSPACE</span>
          <h2 className="t-section" style={{ marginTop: 12 }}>
            Built for how real work actually runs
          </h2>
          <p className="t-body-lg beside-header-sub">
            Two powerhouse capabilities unified into one system. Switch between conversational intelligence and real-time execution in the canvas.
          </p>
        </div>

        {/* Beside-Style Pill Tab Switcher */}
        <div className="beside-tabs-wrapper" data-section-reveal>
          <div className="beside-tabs-pill" role="tablist" aria-label="GriZon AI Core Capabilities">
            <button
              id="showcase-tab-chat"
              type="button"
              role="tab"
              aria-selected={activeTab === 'chat'}
              className={`beside-tab-btn ${activeTab === 'chat' ? 'active' : ''}`}
              onClick={() => setActiveTab('chat')}
            >
              <span className="beside-tab-icon">✨</span>
              <span className="beside-tab-label">Smart Conversations</span>
            </button>
            <button
              id="showcase-tab-canvas"
              type="button"
              role="tab"
              aria-selected={activeTab === 'canvas'}
              className={`beside-tab-btn ${activeTab === 'canvas' ? 'active' : ''}`}
              onClick={() => setActiveTab('canvas')}
            >
              <span className="beside-tab-icon">⚡</span>
              <span className="beside-tab-label">Workspace Canvas & Artifacts</span>
            </button>
          </div>
        </div>

        {/* Beside-Style Unified Showcase Card */}
        <div className="beside-showcase-card" data-section-reveal>
          <div className="beside-showcase-grid">
            {/* Left Column: Information & Feature Cards */}
            <div className="beside-left-pane">
              <span className="preset-chip beside-eyebrow">
                {current.eyebrow}
              </span>

              <h2 className="t-section beside-title">
                {current.title} <br />
                <span className="gradient-text-hero">{current.titleGradient}</span>
              </h2>

              <p className="t-body beside-desc">
                {current.description}
              </p>

              {/* Beside-Style Capability Sub-Cards */}
              <div className="beside-features-list">
                {current.features.map((item, idx) => (
                  <div key={idx} className="beside-feature-card">
                    <div className="beside-feature-icon-box">
                      {item.icon}
                    </div>
                    <div className="beside-feature-content">
                      <h4 className="beside-feature-name">{item.title}</h4>
                      <p className="beside-feature-sub">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="beside-cta-row">
                <Link to="/app" className="btn-start beside-action-btn">
                  <span>Launch {activeTab === 'chat' ? 'Smart Conversations' : 'Workspace Canvas'}</span>
                  <span className="btn-shine" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Mockup Window Frame */}
            <div className="beside-right-pane">
              <div className="beside-browser-wrapper" style={{ '--glow-color': current.glowColor }}>
                <div className="beside-browser-frame">
                  {/* Browser Window Header */}
                  <div className="browser-dots beside-browser-dots">
                    <span className="browser-dot red" />
                    <span className="browser-dot yellow" />
                    <span className="browser-dot green" />
                    <div className="browser-url-bar">{current.url}</div>
                    <span className="beside-status-dot" title="Live status">●</span>
                  </div>

                  {/* Browser Window Viewport Screen */}
                  <div className="beside-browser-viewport">
                    <img
                      key={activeTab}
                      src={current.image}
                      alt={current.alt}
                      className="beside-browser-img"
                    />

                    {/* Floating Pro Badge Overlay */}
                    <div className="beside-floating-badge">
                      <span className="beside-live-dot" />
                      <span>{current.badgeText}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── AGENT CATALOGUE SECTION (#agents) ───────────────────────── */
function AgentsCatalogue() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="agents" className="section" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} data-section-reveal>
          <span className="t-eyebrow">AGENT CATALOGUE</span>
          <h2 className="t-section" style={{ marginTop: 12 }}>
            Specialised agents for every task
          </h2>
          <p className="t-body-lg" style={{ maxWidth: 600, margin: '16px auto 0' }}>
            Choose the agent that fits the job — or use Auto Mode and let Grizon route for you.
          </p>
        </div>

        <div className="sr-grid sr-grid-4">
          {AGENT_CATALOGUE.map((agent, idx) => (
            <div key={agent.title} className="sr-card" data-section-reveal style={{ transitionDelay: `${idx * 0.05}s`, textAlign: 'center' }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: '#c084fc'
              }}>
                {agent.icon}
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
                {agent.title}
              </h4>
              <p className="t-body" style={{ fontSize: 13, lineHeight: 1.5 }}>
                {agent.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PRICING SECTION (#pricing) — 100% EXACT MATCH TO OFFICIAL DRIZON AI ── */
function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef(null);
  useReveal(ref);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      subtitle: 'Try Grizon with core chat',
      price: '0',
      features: [
        '50 credits / month',
        'General Assistant',
        'Limited web search',
        'Document tools & weather',
        'File upload (up to 50 MB)'
      ]
    },
    {
      id: 'basic',
      name: 'Basic',
      subtitle: 'For students, hobbyists & light creators',
      price: isYearly ? '833' : '999',
      features: [
        '200 credits / month',
        '5 specialised agents',
        'Dev Studio & Doc Writer',
        'Data & Market Analyst',
        'Code, charts & image analysis',
        'Credit top-ups'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      isPopular: true,
      subtitle: 'For professionals, freelancers & developers',
      price: isYearly ? '1,666' : '1,999',
      features: [
        '500 credits / month + rollover',
        'All 8 specialised agents',
        'Deep Research & System Architect',
        'Video Analyser',
        'Higher file & search limits',
        'Credit top-ups'
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      subtitle: 'For agencies, power users & teams',
      price: isYearly ? '2,499' : '2,999',
      features: [
        '1,000 credits / month + rollover',
        'All 8 specialised agents',
        'Unlimited search & code caps',
        'Highest file & context limits',
        'Max artifact versions',
        'Credit top-ups'
      ]
    }
  ];

  return (
    <section id="pricing" className="section" style={{ background: 'var(--bg-surface)' }} ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }} data-section-reveal>
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            padding: '4px 14px',
            borderRadius: 999,
            background: 'rgba(245, 158, 11, 0.12)',
            color: '#f59e0b',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            display: 'inline-block',
            marginBottom: 16
          }}>
            PRICING
          </span>
          <h2 className="t-section" style={{ marginTop: 8, fontSize: 'clamp(32px, 4.5vw, 52px)' }}>
            Plans for every ambition
          </h2>
          <p className="t-body-lg" style={{ maxWidth: 540, margin: '10px auto 0', color: 'var(--tx-secondary)' }}>
            Start free, upgrade when you're ready. No hidden fees.
          </p>

          {/* Toggle Switch matching official grizonai.com */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginTop: 28 }}>
            <span style={{ fontSize: 14, fontWeight: !isYearly ? 600 : 400, color: !isYearly ? '#ffffff' : 'var(--tx-tertiary)' }}>
              Monthly
            </span>
            <div
              onClick={() => setIsYearly(!isYearly)}
              style={{
                width: 44,
                height: 24,
                borderRadius: 999,
                background: isYearly ? '#7c3aed' : 'rgba(255,255,255,0.2)',
                padding: 2,
                cursor: 'pointer',
                transition: 'background 0.3s ease',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: '#ffffff',
                  transform: isYearly ? 'translateX(20px)' : 'translateX(0px)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
            <span style={{ fontSize: 14, fontWeight: isYearly ? 600 : 400, color: isYearly ? '#ffffff' : 'var(--tx-tertiary)' }}>
              Yearly
            </span>
            <span style={{
              fontSize: 12,
              fontWeight: 600,
              padding: '2px 10px',
              borderRadius: 999,
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#10b981',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              2 months free
            </span>
          </div>
        </div>

        <div className="sr-grid sr-grid-4">
          {plans.map((p, i) => (
            <div
              key={p.id}
              className={`sr-card ${p.isPopular ? 'pricing-card-pro' : ''}`}
              data-section-reveal
              style={{
                transitionDelay: `${i * 0.08}s`,
                borderColor: p.isPopular ? '#7c3aed' : 'rgba(255, 255, 255, 0.08)',
                background: p.isPopular
                  ? 'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.18) 0%, rgba(18, 20, 32, 0.95) 70%)'
                  : 'rgba(18, 20, 32, 0.7)',
                boxShadow: p.isPopular ? '0 0 40px rgba(124, 58, 237, 0.22)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '38px 28px 32px',
                borderRadius: '24px'
              }}
            >
              {/* Zenwood Ticket 'Popular' Badge for the most popular Pro plan */}
              {p.isPopular && (
                <div className="popular-ticket-badge" aria-label="Most Popular Plan">
                  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M 8,0 L 112,0 A 8,8 0 0 1 120,8 L 120,13 A 7,7 0 0 0 120,27 L 120,32 A 8,8 0 0 1 112,40 L 8,40 A 8,8 0 0 1 0,32 L 0,27 A 7,7 0 0 0 0,13 L 0,8 A 8,8 0 0 1 8,0 Z"
                      fill="#5c4cf4"
                    />
                    <text
                      x="60"
                      y="25"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                      fontSize="15"
                      fontWeight="800"
                      letterSpacing="0.3"
                    >
                      Popular
                    </text>
                  </svg>
                </div>
              )}

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>
                  {p.name}
                </h3>
                <div style={{ fontSize: 13, color: 'var(--tx-tertiary)', marginBottom: 20, minHeight: 36 }}>
                  {p.subtitle}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 24 }}>
                  <span style={{ fontSize: 20, color: '#ffffff', fontWeight: 600 }}>₹</span>
                  <span style={{ fontSize: 44, fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                    {p.price}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--tx-tertiary)' }}>/mo</span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.features.map((feat) => (
                    <div key={feat} style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{ color: '#8b5cf6', fontWeight: 800, fontSize: 14, lineHeight: 1.2 }}>✓</span>
                      <span style={{ lineHeight: 1.4 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 28 }}>
                <Link
                  to="/app"
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    padding: '12px 0',
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 600,
                    background: p.isPopular ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)' : 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    border: p.isPopular ? 'none' : '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: p.isPopular ? '0 4px 20px rgba(139, 92, 246, 0.45)' : 'none',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!p.isPopular) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    } else {
                      e.currentTarget.style.boxShadow = '0 6px 24px rgba(139, 92, 246, 0.65)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!p.isPopular) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    } else {
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.45)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FREQUENTLY ASKED QUESTIONS (#faq) ──────────────────────── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="faq" className="section" ref={ref}>
      <div className="container" style={{ maxWidth: 860 }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }} data-section-reveal>
          <span className="t-eyebrow">FAQ</span>
          <h2 className="t-section" style={{ marginTop: 12 }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div data-section-reveal>
          {FAQS.map((faq, idx) => (
            <div key={faq.q} className="faq-item">
              <div
                className="faq-question"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span>{faq.q}</span>
                <span style={{ fontSize: 20, color: 'var(--accent-purple)' }}>
                  {openIdx === idx ? '−' : '+'}
                </span>
              </div>
              {openIdx === idx && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA SECTION (ZENWOOD-INSPIRED FOOTER CTA CARD) ──────────── */
function CTASection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="sr-cta-section" aria-label="Call to action">
      <div className="container">
        <div className="sr-cta-card" data-section-reveal>
          <div className="sr-cta-ambient" aria-hidden="true" />
          <h2 className="sr-cta-title">
            Got an ambitious workflow?<br />Let's bring it to life!
          </h2>
          <p className="sr-cta-sub">
            Experience GriZon AI's specialised multi-agent workspace, Auto Mode routing, and Dev Studio.
          </p>
          <div className="sr-cta-actions">
            <Link to="/app" className="btn-start" style={{ padding: '14px 36px', fontSize: 16 }}>
              <span>Launch Platform</span>
              <span className="btn-shine" aria-hidden="true" />
            </Link>
            <a href="#agents" className="btn btn-outline" style={{ padding: '14px 28px', fontSize: 16, borderRadius: 999 }}>
              <span>Explore Agents</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── MAIN HOME PAGE ──────────────────────────────────────────── */
export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Hero />
      <AgentMarquee />
      <WhyGrizon />
      <Features />
      <Showcase />
      <AgentsCatalogue />
      <Pricing />
      <FAQ />
      <CTASection />
    </div>
  );
}
