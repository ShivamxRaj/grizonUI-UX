import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sovereign.css';

export default function Home() {
  const [heroPrompt, setHeroPrompt] = useState('');
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [activeCanvasTab, setActiveCanvasTab] = useState('chart'); // 'chart' | 'code'

  const AGENT_CARDS = [
    {
      id: 'fast-research',
      title: 'Fast Research',
      desc: 'Sub-400ms web grounding with real-time source footnotes.',
      icon: 'bolt',
      iconColor: 'var(--secondary)',
      iconBg: 'rgba(255,219,199,0.5)',
      tag: '<400ms latency',
      tagColor: 'var(--secondary)',
      link: '/agents/research'
    },
    {
      id: 'deep-research',
      title: 'Deep Research',
      desc: 'Multi-step hypothesis synthesis across 40+ primary sources.',
      icon: 'psychology',
      iconColor: 'var(--agent-deep-research)',
      iconBg: 'rgba(60,75,155,0.1)',
      tag: '48-node trees',
      tagColor: 'var(--agent-deep-research)',
      link: '/agents/research'
    },
    {
      id: 'dev-studio',
      title: 'Dev Studio',
      desc: 'Code with execution runtimes and instant live HTML canvas.',
      icon: 'terminal',
      iconColor: 'var(--agent-dev-studio)',
      iconBg: 'rgba(16,126,125,0.1)',
      tag: 'Live HTML preview',
      tagColor: 'var(--agent-dev-studio)',
      link: '/agents/dev-studio'
    },
    {
      id: 'system-architect',
      title: 'System Architect',
      desc: 'High-availability cloud blueprints, database schemas & trade-offs.',
      icon: 'account_tree',
      iconColor: 'var(--primary)',
      iconBg: 'var(--surface-container)',
      tag: 'Mermaid / PlantUML',
      tagColor: 'var(--primary)',
      link: '/agents/dev-studio'
    },
    {
      id: 'market-analyst',
      title: 'Market Analyst',
      desc: 'Algorithmic Bull vs Bear debates, 10-K extractions & DCF models.',
      icon: 'candlestick_chart',
      iconColor: 'var(--secondary)',
      iconBg: 'rgba(255,219,199,0.5)',
      tag: 'NSE / BSE feeds',
      tagColor: 'var(--secondary)',
      link: '/agents/market-intelligence'
    },
    {
      id: 'doc-intelligence',
      title: 'Doc Intelligence',
      desc: 'Ingest 400-page complex PDFs with zero-loss table OCR.',
      icon: 'description',
      iconColor: 'var(--agent-deep-research)',
      iconBg: 'rgba(60,75,155,0.1)',
      tag: 'Multi-page tables',
      tagColor: 'var(--agent-deep-research)',
      link: '/agents/doc-intelligence'
    },
    {
      id: 'video-analyser',
      title: 'Video Analyser',
      desc: 'Frame-by-frame scene indexing, audio transcription & slide OCR.',
      icon: 'movie',
      iconColor: 'var(--secondary)',
      iconBg: 'rgba(255,219,199,0.5)',
      tag: 'Pro+ multi-modal',
      tagColor: 'var(--secondary)',
      link: '/agents/doc-intelligence'
    },
    {
      id: 'legal-agent',
      title: 'Legal Agent',
      desc: 'Multi-jurisdictional contract review, DPDP compliance & redlines.',
      icon: 'gavel',
      iconColor: 'var(--agent-legal)',
      iconBg: 'rgba(132,59,98,0.12)',
      tag: 'Sovereign audit',
      tagColor: 'var(--agent-legal)',
      link: '/agents/legal'
    }
  ];

  return (
    <div className="sv-page" style={{ background: 'var(--parchment)', minHeight: '100vh', paddingTop: '6rem' }}>
      {/* ── HERO SECTION: Ultra-tight copy, huge typography, instant prompt pill ── */}
      <section style={{ maxWidth: '1020px', margin: '0 auto', padding: '3rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.85rem', borderRadius: '9999px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 1px 3px rgba(0,0,0,0.03)', marginBottom: '1.75rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: '#10b981' }} />
          <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--on-surface-variant)', fontWeight: 600 }}>
            Auto-Routed Multi-Agent Intelligence
          </span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)', color: 'var(--primary)', lineHeight: 1.08, letterSpacing: '-0.025em', margin: '0 0 1.25rem' }}>
          Everything you need, <br />
          <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--agent-deep-research)' }}>one workspace.</span>
        </h1>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--on-surface-variant)', maxWidth: '580px', margin: '0 auto 2.25rem', lineHeight: 1.6 }}>
          Purpose-built AI agents for research, coding, documents, markets, and video.
        </p>

        {/* Instant Interactive Intent / Prompt Bar */}
        <div style={{
          maxWidth: '680px',
          margin: '0 auto 2rem',
          background: '#fff',
          borderRadius: '16px',
          border: '1px solid var(--border-hairline)',
          padding: '0.6rem 0.75rem',
          boxShadow: '0 12px 40px -10px rgba(7,9,27,0.08)',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 0.6rem' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--outline)', fontSize: '20px' }}>search</span>
            <input
              type="text"
              value={heroPrompt}
              onChange={(e) => setHeroPrompt(e.target.value)}
              placeholder="Describe your goal, or let Auto Mode route it..."
              style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '14px', color: 'var(--primary)' }}
            />
            <Link
              to="/app"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                background: 'var(--primary)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '12px',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Start Free</span>
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>bolt</span>
            </Link>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.4rem', paddingTop: '0.5rem', paddingLeft: '0.5rem', borderTop: '1px solid var(--surface-low)', marginTop: '0.35rem' }}>
            <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--outline)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Route directly:
            </span>
            <button
              onClick={() => setHeroPrompt('Analyze competitor balance sheet in Gujarat solar sector')}
              style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', background: 'var(--surface-low)', border: '1px solid var(--border-hairline)', fontSize: '11px', color: 'var(--on-surface)', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '13px', color: 'var(--secondary)' }}>bolt</span> Fast Research
            </button>
            <button
              onClick={() => setHeroPrompt('Build a responsive analytics sparkline card with Tailwind CSS')}
              style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', background: 'var(--surface-low)', border: '1px solid var(--border-hairline)', fontSize: '11px', color: 'var(--on-surface)', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '13px', color: 'var(--agent-dev-studio)' }}>terminal</span> Dev Studio
            </button>
            <button
              onClick={() => setHeroPrompt('Extract financial metrics table from attached 48-page PDF')}
              style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', background: 'var(--surface-low)', border: '1px solid var(--border-hairline)', fontSize: '11px', color: 'var(--on-surface)', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '13px', color: 'var(--agent-deep-research)' }}>description</span> Doc Intel
            </button>
            <button
              onClick={() => setHeroPrompt('Review vendor agreement for DPDP compliance & liability cap')}
              style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', background: 'var(--surface-low)', border: '1px solid var(--border-hairline)', fontSize: '11px', color: 'var(--on-surface)', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '13px', color: 'var(--agent-legal)' }}>gavel</span> Legal
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: 4-Metric Key Proof Strip ── */}
      <section style={{ maxWidth: '1020px', margin: '0 auto', padding: '0 1.5rem 4.5rem' }}>
        <div style={{
          padding: '1rem 1.5rem',
          borderRadius: '16px',
          background: 'rgba(255,255,255,0.7)',
          border: '1px solid var(--border-hairline)',
          backdropFilter: 'blur(8px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          textAlign: 'center'
        }}>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>8 Specialised Agents</p>
            <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-code)', margin: '0.15rem 0 0' }}>Engineered toolchains</p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>Smart Auto Mode</p>
            <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-code)', margin: '0.15rem 0 0' }}>&lt;50ms intent router</p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>Monthly Rollover Credits</p>
            <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-code)', margin: '0.15rem 0 0' }}>Zero unused credit waste</p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>256-bit Encryption</p>
            <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-code)', margin: '0.15rem 0 0' }}>Air-gapped enclave privacy</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: 8 agents built for the job, not generic chat ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 4.5rem' }} id="agents">
        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 2.5rem' }}>
          <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--agent-deep-research)', fontWeight: 700 }}>
            Purpose-Built Suite
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--primary)', margin: '0.25rem 0 0' }}>
            8 agents built for the job, <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--on-surface-variant)' }}>not generic chat.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {AGENT_CARDS.map((card) => (
            <Link
              key={card.id}
              to={card.link}
              style={{
                padding: '1.25rem',
                borderRadius: '16px',
                background: '#fff',
                border: '1px solid var(--border-hairline)',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--outline-variant)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-hairline)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.02)';
              }}
            >
              <div>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: card.iconBg, color: card.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '19px' }}>{card.icon}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)', margin: '0 0 0.25rem' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--on-surface-variant)', margin: 0 }}>
                  {card.desc}
                </p>
              </div>
              <div style={{ paddingTop: '0.85rem', marginTop: '0.85rem', borderTop: '1px solid var(--surface-low)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: card.tagColor, fontWeight: 600 }}>
                  {card.tag}
                </span>
                <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--outline)' }}>arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: Artifacts materialize live beside your thread ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 5rem' }} id="workspace">
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 2.5rem' }}>
          <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--secondary)', fontWeight: 700 }}>
            One Screen, Zero Switching
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--primary)', margin: '0.25rem 0 0' }}>
            Artifacts materialize live beside your thread
          </h2>
        </div>

        {/* Workspace Mock Container */}
        <div style={{ borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 20px 60px -15px rgba(7,9,27,0.06)', overflow: 'hidden' }}>
          {/* Window Header */}
          <div style={{ padding: '0.75rem 1.25rem', background: 'var(--surface-low)', borderBottom: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '9999px', background: '#cbd5e1' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '9999px', background: '#cbd5e1' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '9999px', background: '#cbd5e1' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--outline)' }}>
                GriZon Sovereign Workspace • Auto-Routing Active
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-dev-studio)', fontWeight: 600 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
              <span>CLUSTER: ONLINE (14ms)</span>
            </div>
          </div>

          {/* Split Screen: Left Thread & Right Canvas */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', minHeight: '480px' }}>
            {/* Left Column: Chat Thread */}
            <div style={{ padding: '1.5rem', background: 'var(--surface-low)', borderRight: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '9999px', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700 }}>
                    U
                  </div>
                  <div style={{ padding: '0.75rem 1rem', borderRadius: '12px', background: '#fff', fontSize: '13px', color: 'var(--primary)', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                    Analyze RELIANCE.NS cash flow and summarize key Capex lines.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '9999px', background: 'var(--secondary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>bolt</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxWidth: '90%' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'var(--surface-container)', fontSize: '10px', fontFamily: 'var(--font-code)', color: 'var(--primary)' }}>
                      Auto-routed to: <strong>Market Analyst & Oracles</strong>
                    </div>
                    <div style={{ padding: '0.85rem 1rem', borderRadius: '12px', background: '#fff', fontSize: '13px', color: 'var(--primary)', lineHeight: 1.5, boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                      Operating cash conversion stood at 102%. Capex investments in 5G infrastructure and Retail store rollouts reached ₹38,420 Cr. Free cash flow turnaround projected for Q4.
                    </div>
                    <span style={{ fontSize: '10px', fontFamily: 'var(--font-code)', color: 'var(--outline)' }}>
                      Materialized interactive artifact on your canvas →
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div style={{ padding: '0.5rem 0.75rem', borderRadius: '10px', background: '#fff', border: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                <input
                  type="text"
                  placeholder="Ask a follow-up or command another agent..."
                  style={{ width: '100%', border: 'none', outline: 'none', fontSize: '12px', color: 'var(--primary)', background: 'transparent' }}
                />
                <button style={{ padding: '0.35rem 0.65rem', borderRadius: '6px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Right Column: Live Artifact Canvas */}
            <div style={{ padding: '1.5rem', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-hairline)', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px', color: 'var(--primary)' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
                    Artifact: RELIANCE_Q4_VALUATION.HTML
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <button
                      onClick={() => setActiveCanvasTab('chart')}
                      style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', background: activeCanvasTab === 'chart' ? 'var(--surface-container)' : 'transparent', border: 'none', fontSize: '11px', fontFamily: 'var(--font-code)', cursor: 'pointer', color: 'var(--primary)' }}
                    >
                      Canvas View
                    </button>
                    <button
                      onClick={() => setActiveCanvasTab('code')}
                      style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', background: activeCanvasTab === 'code' ? 'var(--surface-container)' : 'transparent', border: 'none', fontSize: '11px', fontFamily: 'var(--font-code)', cursor: 'pointer', color: 'var(--primary)' }}
                    >
                      Raw Code
                    </button>
                  </div>
                </div>

                {activeCanvasTab === 'chart' ? (
                  <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--surface-low)', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)' }}>
                        Segmental Revenue & Capex Trajectory
                      </span>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-dev-studio)', fontWeight: 600 }}>
                        +16.2% Alpha
                      </span>
                    </div>

                    <div style={{ height: '140px', width: '100%', position: 'relative' }}>
                      <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 400 120" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="gradAlpha" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F7A859" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#F7A859" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,100 Q100,80 200,50 T400,20 L400,120 L0,120 Z" fill="url(#gradAlpha)" />
                        <path d="M0,100 Q100,80 200,50 T400,20" fill="none" stroke="#F7A859" strokeWidth="2.5" />
                        <circle cx="200" cy="50" r="4" fill="#fff" stroke="#F7A859" strokeWidth="2" />
                        <circle cx="400" cy="20" r="4" fill="#F7A859" />
                      </svg>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>
                      <span>Q1: Base Capex</span>
                      <span>Q2: 5G Spectrum</span>
                      <span>Q3: Retail Expansion</span>
                      <span style={{ color: 'var(--agent-dev-studio)', fontWeight: 600 }}>Q4: FCF Positive</span>
                    </div>
                  </div>
                ) : (
                  <pre style={{ margin: 0, padding: '1rem', borderRadius: '10px', background: 'var(--primary)', color: '#fff', fontFamily: 'var(--font-code)', fontSize: '11px', lineHeight: 1.5, overflowX: 'auto' }}>
                    <code>
{`// Exported Artifact: RELIANCE_Q4_VALUATION.HTML
export const model = {
  ticker: "RELIANCE.NS",
  ebitdaConversion: 1.02,
  telecom5GCapex: 38420, // INR Cr
  projectedFCF: "+16.2% YoY",
  status: "Sovereign Proof Validated"
};`}
                    </code>
                  </pre>
                )}
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)' }}>
                <span>Download as: .HTML / .XLSX / .PDF</span>
                <button
                  onClick={() => alert('Downloading artifact...')}
                  style={{ padding: '0.35rem 0.75rem', borderRadius: '6px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                >
                  Export Artifact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Transparent Plans for every ambition ── */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 1.5rem 5rem' }} id="pricing">
        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 2.5rem' }}>
          <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--secondary)', fontWeight: 700 }}>
            Transparent Plans
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--primary)', margin: '0.25rem 0 0' }}>
            Plans for every ambition
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', marginTop: '0.35rem' }}>
            Transparent compute credits. Zero hidden multipliers.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem', borderRadius: '9999px', background: 'var(--surface-container)', marginTop: '1.25rem' }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '0.35rem 1rem',
                borderRadius: '9999px',
                background: billingCycle === 'monthly' ? '#fff' : 'transparent',
                color: billingCycle === 'monthly' ? 'var(--primary)' : 'var(--on-surface-variant)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: billingCycle === 'monthly' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none'
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              style={{
                padding: '0.35rem 1rem',
                borderRadius: '9999px',
                background: billingCycle === 'yearly' ? '#fff' : 'transparent',
                color: billingCycle === 'yearly' ? 'var(--primary)' : 'var(--on-surface-variant)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: billingCycle === 'yearly' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              Yearly <span style={{ padding: '0.1rem 0.35rem', borderRadius: '9999px', background: 'var(--secondary-fixed)', color: 'var(--on-secondary-fixed)', fontSize: '9px', fontWeight: 'bold' }}>SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {/* Starter */}
          <div style={{ padding: '1.75rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Starter</span>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', margin: '0.5rem 0' }}>
                Free
              </div>
              <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', marginBottom: '1.25rem' }}>
                For individual engineers & researchers trying out sovereign AI workflows.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '12px', color: 'var(--on-surface)' }}>
                <div>✓ 500 Compute Credits included</div>
                <div>✓ Fast Web Research & Auto Mode</div>
                <div>✓ Live UI Canvas previews</div>
                <div style={{ color: 'var(--outline)' }}>✕ Deep multi-node research swarms</div>
              </div>
            </div>
            <Link to="/app" style={{ display: 'block', textAlign: 'center', padding: '0.65rem', borderRadius: '8px', background: 'var(--surface-container)', color: 'var(--primary)', fontWeight: 600, fontSize: '12px', textDecoration: 'none', marginTop: '1.5rem' }}>
              Start Free
            </Link>
          </div>

          {/* Pro */}
          <div style={{ padding: '1.75rem', borderRadius: '16px', background: 'var(--primary)', color: '#fff', border: '1px solid var(--primary)', boxShadow: '0 12px 30px rgba(7,9,27,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.2rem 0.55rem', borderRadius: '9999px', background: 'var(--secondary)', color: '#fff', fontFamily: 'var(--font-code)', fontSize: '10px', fontWeight: 700 }}>
              MOST POPULAR
            </span>
            <div>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--saffron-glow)', textTransform: 'uppercase' }}>Pro Specialist</span>
              <div style={{ fontSize: '2rem', fontWeight: 700, margin: '0.5rem 0' }}>
                {billingCycle === 'monthly' ? '₹2,499' : '₹1,999'} <span style={{ fontSize: '12px', fontWeight: 'normal', color: 'rgba(255,255,255,0.6)' }}>/ month</span>
              </div>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '1.25rem' }}>
                Full access to all 8 specialized agents with monthly compute rollover.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '12px', color: '#fff' }}>
                <div>✓ 5,000 Compute Credits / mo</div>
                <div>✓ Deep Research 48-node trees</div>
                <div>✓ Bull vs Bear Financial Debates</div>
                <div>✓ Video Analyser Keyframe OCR</div>
                <div>✓ 100% Unused Credit Rollover</div>
              </div>
            </div>
            <Link to="/app" style={{ display: 'block', textAlign: 'center', padding: '0.65rem', borderRadius: '8px', background: 'var(--secondary)', color: '#fff', fontWeight: 600, fontSize: '12px', textDecoration: 'none', marginTop: '1.5rem' }}>
              Upgrade to Pro
            </Link>
          </div>

          {/* Enterprise */}
          <div style={{ padding: '1.75rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Sovereign Enterprise</span>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', margin: '0.5rem 0' }}>
                Custom
              </div>
              <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', marginBottom: '1.25rem' }}>
                Dedicated VPC clusters, air-gapped runtimes, and SLA guarantees for enterprises.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '12px', color: 'var(--on-surface)' }}>
                <div>✓ Unlimited Autonomous Swarms</div>
                <div>✓ Air-gapped on-premise GPU nodes</div>
                <div>✓ Custom Indian DPDP Audit Enclaves</div>
                <div>✓ 24/7 Dedicated Sovereign Engineering Desk</div>
              </div>
            </div>
            <Link to="/about" style={{ display: 'block', textAlign: 'center', padding: '0.65rem', borderRadius: '8px', background: 'var(--surface-container)', color: 'var(--primary)', fontWeight: 600, fontSize: '12px', textDecoration: 'none', marginTop: '1.5rem' }}>
              Contact Sovereign Desk
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Ready for agents that fit the job? ── */}
      <section style={{ maxWidth: '1020px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{
          borderRadius: '24px',
          background: 'var(--primary)',
          color: '#fff',
          padding: '3rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(7,9,27,0.2)'
        }}>
          <div style={{
            position: 'absolute',
            top: '-6rem',
            left: '-6rem',
            width: '240px',
            height: '240px',
            background: 'radial-gradient(circle, rgba(247,168,89,0.2) 0%, transparent 70%)',
            borderRadius: '9999px',
            filter: 'blur(50px)'
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '580px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', margin: 0, lineHeight: 1.15 }}>
              Ready for agents that <br />
              <span style={{ fontStyle: 'italic', color: 'var(--saffron-glow)' }}>fit the job?</span>
            </h2>

            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
              Start free with Auto Mode in seconds. Upgrade only when you need high-capacity compute swarms.
            </p>

            <div style={{ paddingTop: '0.75rem' }}>
              <Link
                to="/app"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.6rem',
                  borderRadius: '9999px',
                  background: '#fff',
                  color: 'var(--primary)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '13px',
                  textDecoration: 'none'
                }}
              >
                <span>Start with AI Free</span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>bolt</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
