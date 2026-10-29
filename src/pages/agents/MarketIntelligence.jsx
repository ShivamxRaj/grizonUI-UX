import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import '../../styles/sovereign.css';

export default function MarketIntelligence() {
  const [activeTicker, setActiveTicker] = useState('TCS.NS');
  const [bullScore, setBullScore] = useState(74);
  const [bearScore, setBearScore] = useState(26);
  const [searchVal, setSearchVal] = useState('RELIANCE.NS vs ONGC or BTC funding...');

  const tickers = {
    'TCS.NS': {
      name: 'Tata Consultancy Services Ltd',
      bull: 74,
      bear: 26,
      tokens: '9.8k TOKENS DEBATED',
      taurusSummary: 'Free Cash Flow Momentum + GenAI Order Book ($900M TCV)',
      ursaSummary: 'Continental European IT transformation capex deferrals & wage normalization'
    },
    'RELIANCE.NS': {
      name: 'Reliance Industries Limited',
      bull: 81,
      bear: 19,
      tokens: '14.2k TOKENS DEBATED',
      taurusSummary: 'Jio 5G monetization tailwinds, Retail store profitability, New Energy capex integration',
      ursaSummary: 'Refining margin contraction, chemical cycle softness & capital expenditure debt rollover'
    },
    'INFY.NS': {
      name: 'Infosys Limited',
      bull: 68,
      bear: 32,
      tokens: '8.4k TOKENS DEBATED',
      taurusSummary: 'BFSI discretionary revival & aggressive digital transformation deals pipeline',
      ursaSummary: 'Subcontractor margin compression, margin guidance uncertainty & attrition normalization'
    }
  };

  const handleSelectTicker = (sym) => {
    if (tickers[sym]) {
      setActiveTicker(sym);
      setBullScore(tickers[sym].bull);
      setBearScore(tickers[sym].bear);
    }
  };

  return (
    <div className="sv-page" style={{ background: 'var(--parchment)', minHeight: '100vh', paddingTop: '5.5rem' }}>
      {/* Sovereign Ambient Aura */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 1.5rem 5rem', overflow: 'hidden' }}>
        <div style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(247,168,89,0.12) 0%, rgba(165,187,252,0.1) 40%, transparent 70%)',
          filter: 'blur(80px)'
        }} />
        <div style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '40%',
          right: '-15%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(60,75,155,0.08) 0%, transparent 70%)',
          filter: 'blur(90px)'
        }} />

        {/* Top Metadata Breadcrumb & Live Ticker Bar */}
        <section style={{ paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '0.625rem 1rem',
            borderRadius: '9999px',
            background: 'var(--surface-low)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
              <Breadcrumb />
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', padding: '0.15rem 0.5rem', borderRadius: '9999px', background: 'var(--surface-container)', color: 'var(--on-tertiary-fixed)', fontWeight: 600 }}>
                Oracles & Financial Reasoning
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface)', textTransform: 'uppercase', fontWeight: 500 }}>
                  NSE/BSE Feeds Active
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                <span>LATENCY: 14ms</span>
                <span style={{ opacity: 0.4 }}>|</span>
                <span>DATA PROVENANCE: 100% AUDITED</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.03)', width: 'fit-content' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--secondary)' }}>info</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--secondary)', letterSpacing: '0.02em' }}>
                  Educational Research & Algorithmic Analysis Only — Not Financial Advice.
                </span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--primary)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
                Institutional-grade market intelligence,{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--agent-deep-research)' }}>
                  distilled in real-time.
                </span>
              </h1>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', lineHeight: '1.65', color: 'var(--on-surface-variant)', maxWidth: '640px', margin: 0 }}>
                Deep-dive into equities, indices, and crypto fundamentals with algorithmic Bull vs Bear debates, balance-sheet extraction, and automated valuation models.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}>
                <a
                  href="#debate-engine"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem 1.6rem',
                    borderRadius: '8px',
                    background: 'var(--primary)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(7,9,27,0.15)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>query_stats</span>
                  Analyze NSE/BSE & Global Markets
                </a>
                <a
                  href="#sentiment-curve"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '8px',
                    background: '#fff',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    border: '1px solid var(--border-hairline)',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>table_chart</span>
                  View Alpha Valuation Curve
                </a>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '0.5rem', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-code)', fontSize: '11px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--agent-dev-studio)' }}>verified</span>
                  SEBI/XBRL Compliant Ingestion
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--saffron-glow)' }}>layers</span>
                  120+ Micro-Cap to Large-Cap Vectors
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--agent-deep-research)' }}>memory</span>
                  Sovereign Inference Isolation
                </span>
              </div>
            </div>

            {/* Oracle Engine v3.4 Card */}
            <div>
              <div style={{
                position: 'relative',
                padding: '1.75rem',
                borderRadius: '16px',
                background: '#fff',
                boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
                border: '1px solid var(--border-hairline)',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-3rem',
                  right: '-3rem',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(255,219,199,0.5) 0%, transparent 70%)',
                  borderRadius: '9999px',
                  filter: 'blur(30px)'
                }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-hairline)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>insights</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', color: 'var(--primary)', margin: 0 }}>Oracle Engine v3.4</h3>
                      <p style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', margin: 0 }}>TARGET: NIFTY 50 DECONSTRUCTION</p>
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'var(--surface-container)', color: 'var(--on-surface)' }}>
                    SYNTHESIS
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '1rem 0' }}>
                  <div style={{ padding: '0.75rem 1rem', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: 'var(--on-surface-variant)' }}>Equities Tracked</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)' }}>2,410+ Scrips</span>
                  </div>
                  <div style={{ padding: '0.75rem 1rem', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: 'var(--on-surface-variant)' }}>Balance Sheet Line Items</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--agent-dev-studio)' }}>100% Machine Parsed</span>
                  </div>
                  <div style={{ padding: '0.75rem 1rem', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: 'var(--on-surface-variant)' }}>Weighted Sector Confidence</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--secondary)' }}>78.4% Bullish Bias</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-code)', fontSize: '11px', paddingTop: '0.5rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <span>MODEL: DUAL-ADVERSARIAL LLM</span>
                  <span style={{ display: 'flex', alignItems: 'center', color: 'var(--secondary)', fontWeight: 600 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '13px', marginRight: '2px' }}>bolt</span> LOW LATENCY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLAGSHIP FEATURE: Algorithmic Bull vs Bear Debate Engine */}
        <section id="debate-engine" style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'var(--primary)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Flagship Architecture
              </span>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>DUAL-AGENT ADVERSARIAL FORUM</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: 'var(--primary)', margin: 0, letterSpacing: '-0.015em' }}>
              Algorithmic Bull vs Bear Debate Engine
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--on-surface-variant)', maxWidth: '640px', margin: 0 }}>
              Instead of singular subjective summaries, two autonomous sovereign agents challenge each other with real-time financial statements, cash flow disclosures, and regulatory headwinds to arrive at unbiased consensus.
            </p>
          </div>

          {/* Quick Ticker Selector Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {Object.keys(tickers).map((t) => (
              <button
                key={t}
                onClick={() => handleSelectTicker(t)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  background: activeTicker === t ? 'var(--primary)' : '#fff',
                  color: activeTicker === t ? '#fff' : 'var(--primary)',
                  border: '1px solid var(--border-hairline)',
                  fontFamily: 'var(--font-code)',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Consensus Confidence Score Card */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '16px',
            background: '#fff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid var(--border-hairline)',
            marginBottom: '1.75rem'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
                <div>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>Consensus Confidence Score</span>
                  <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: '0.15rem 0 0' }}>
                    Active asset under adversarial debate: <strong style={{ color: 'var(--primary)' }}>{activeTicker} ({tickers[activeTicker]?.name})</strong>
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'var(--secondary-fixed)',
                  color: 'var(--on-secondary-fixed)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>trending_up</span>
                  {bullScore}% Moderate Bullish
                </div>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                  {tickers[activeTicker]?.tokens}
                </span>
              </div>
            </div>

            {/* Split Bar */}
            <div style={{ width: '100%', height: '12px', borderRadius: '9999px', background: 'var(--surface-container)', overflow: 'hidden', display: 'flex', margin: '0.5rem 0' }}>
              <div style={{ height: '100%', width: `${bullScore}%`, background: 'var(--agent-dev-studio)', transition: 'width 0.4s ease' }} />
              <div style={{ height: '100%', width: `${bearScore}%`, background: 'var(--agent-legal)', transition: 'width 0.4s ease' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
              <span>BULL POWER: {bullScore}% ({tickers[activeTicker]?.taurusSummary})</span>
              <span>BEAR RETENTION: {bearScore}% ({tickers[activeTicker]?.ursaSummary})</span>
            </div>
          </div>

          {/* Dual Agent Side by Side Theses */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {/* Agent 'Taurus' Thesis */}
            <div style={{
              padding: '1.75rem',
              borderRadius: '16px',
              background: '#fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              border: '1px solid var(--border-hairline)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-hairline)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16,126,125,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--agent-dev-studio)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>north_east</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)', margin: 0 }}>Agent 'Taurus' Thesis</h3>
                      <p style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', margin: 0 }}>GROWTH VECTORS & P/E EXPANSION</p>
                    </div>
                  </div>
                  <span style={{ padding: '0.25rem 0.6rem', borderRadius: '9999px', background: 'var(--surface-low)', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-dev-studio)', fontWeight: 700 }}>
                    WEIGHT: +1.48 ALPHA
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingTop: '1rem' }}>
                  <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--surface-low)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', color: 'var(--primary)' }}>Free Cash Flow Momentum</span>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', padding: '0.15rem 0.4rem', borderRadius: '4px', background: '#fff', color: 'var(--on-surface)' }}>FY24-Q3 Verified</span>
                    </div>
                    <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                      Operating cash conversion stood at 104% of Net Profit. Operating free cash margin reached a 6-quarter peak at ₹12,140 Cr, insulating R&D allocations against North American discretionary software pullbacks.
                    </p>
                  </div>

                  <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--surface-low)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', color: 'var(--primary)' }}>Generative AI Order Book Depth</span>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', padding: '0.15rem 0.4rem', borderRadius: '4px', background: '#fff', color: 'var(--on-surface)' }}>TCV: $900M</span>
                    </div>
                    <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                      Total Contract Value (TCV) in sovereign cloud and enterprise AI integrations doubled quarter-over-quarter. Multiple long-term tier-1 renewals in BFSI demonstrate strong pricing resilience.
                    </p>
                  </div>

                  <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--surface-low)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', color: 'var(--primary)' }}>Multiple Expansion Potential</span>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', padding: '0.15rem 0.4rem', borderRadius: '4px', background: '#fff', color: 'var(--on-surface)' }}>PEG: 1.4x</span>
                    </div>
                    <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                      Historical discount to 5-year median P/E multiple presents asymmetric upside risk on institutional rotation back into large-cap Indian technology.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-hairline)', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                <span>DEBATE CONFIDENCE: 88.2%</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)', fontWeight: 500 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>fact_check</span> 14 Filing Footnotes Cited
                </span>
              </div>
            </div>

            {/* Agent 'Ursa' Thesis */}
            <div style={{
              padding: '1.75rem',
              borderRadius: '16px',
              background: '#fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              border: '1px solid var(--border-hairline)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-hairline)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(132,59,98,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--agent-legal)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>south_east</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)', margin: 0 }}>Agent 'Ursa' Thesis</h3>
                      <p style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', margin: 0 }}>MARGIN COMPRESSION & HEADWINDS</p>
                    </div>
                  </div>
                  <span style={{ padding: '0.25rem 0.6rem', borderRadius: '9999px', background: 'var(--surface-low)', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-legal)', fontWeight: 700 }}>
                    RISK: -0.84 BETA
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingTop: '1rem' }}>
                  <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--surface-low)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', color: 'var(--primary)' }}>European Manufacturing Softness</span>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', padding: '0.15rem 0.4rem', borderRadius: '4px', background: '#fff', color: 'var(--on-surface)' }}>Eurozone Lag</span>
                    </div>
                    <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                      Continental European IT transformation capex deferrals are stretching sales conversion cycles from 90 to 145 days. Manufacturing and automotive verticals face continuing pipeline friction.
                    </p>
                  </div>

                  <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--surface-low)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', color: 'var(--primary)' }}>Subcontractor Wage Normalization</span>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', padding: '0.15rem 0.4rem', borderRadius: '4px', background: '#fff', color: 'var(--on-surface)' }}>EBITDA Drag</span>
                    </div>
                    <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                      Specialist talent premiums for on-premise AI deployments are suppressing operating profit margins by 65 bps, eroding near-term operating leverage benefits despite higher billing realizations.
                    </p>
                  </div>

                  <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--surface-low)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', color: 'var(--primary)' }}>Global Macro Rate Uncertainty</span>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', padding: '0.15rem 0.4rem', borderRadius: '4px', background: '#fff', color: 'var(--on-surface)' }}>Fed/RBI Correlation</span>
                    </div>
                    <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                      Higher-for-longer policy rates keep enterprise CIOs cautious regarding fixed-bid commitments, favoring milestone-contingent contracts with lower revenue recognition certainty.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-hairline)', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                <span>DEBATE CONFIDENCE: 61.4%</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)', fontWeight: 500 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>shield</span> 9 Macro Indicators Correlated
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE ARTIFACT & FINANCIAL CHART SANDBOX */}
        <section id="sentiment-curve" style={{ marginBottom: '4.5rem' }}>
          <div style={{
            padding: '2rem',
            borderRadius: '24px',
            background: '#fff',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
            border: '1px solid var(--border-hairline)'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', paddingBottom: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'var(--surface-container)', color: 'var(--primary)', fontWeight: 700 }}>
                    INTERACTIVE CANVASES
                  </span>
                  <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>NSE INDEX COMPOSITE</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--primary)', margin: 0 }}>
                  Sector Sentiment & Multi-Factor Alpha Curve
                </h2>
                <p style={{ fontSize: '0.9375rem', color: 'var(--on-surface-variant)', margin: '0.25rem 0 0' }}>
                  Real-time synthetic dispersion modeled across Nifty 50, IT, Pharma, and Bankex constituents.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <button
                  onClick={() => alert('Adjusting parametric weights: Free Cash Flow 40%, P/E multiple 30%, Macro Beta 30%')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.625rem 1rem',
                    borderRadius: '8px',
                    background: 'var(--surface-low)',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: '1px solid var(--border-hairline)',
                    cursor: 'pointer'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>tune</span>
                  Adjust Parametric Scenarios
                </button>
                <button
                  onClick={() => alert('Exporting composite valuation model (.xlsx + audit memo)')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.625rem 1rem',
                    borderRadius: '8px',
                    background: 'var(--primary)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                  Downloadable .xlsx / PDF Artifact
                </button>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', padding: '1rem 1.25rem', borderRadius: '12px', background: 'var(--surface-low)', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', display: 'block', marginBottom: '0.25rem' }}>AGGREGATE P/E RATIO</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--primary)' }}>21.4x</span>
                <span style={{ fontSize: '11px', color: 'var(--secondary)', fontWeight: 500, marginLeft: '0.35rem' }}>(-1.2x vs 3yr)</span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', display: 'block', marginBottom: '0.25rem' }}>RISK COEFFICIENT (BETA)</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--agent-dev-studio)' }}>0.82</span>
                <span style={{ fontSize: '11px', color: 'var(--on-surface-variant)', fontWeight: 500, marginLeft: '0.35rem' }}>Low Volatility</span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', display: 'block', marginBottom: '0.25rem' }}>AUDIT VERIFICATION</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--primary)' }}>7 Footnotes</span>
                <span style={{ fontSize: '11px', color: 'var(--agent-dev-studio)', fontWeight: 500, marginLeft: '0.35rem' }}>100% Sourced</span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', display: 'block', marginBottom: '0.25rem' }}>SYNTHESIS TIME</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--primary)' }}>2.4 sec</span>
                <span style={{ fontSize: '11px', color: 'var(--on-surface-variant)', fontWeight: 500, marginLeft: '0.35rem' }}>Zero Hallucination</span>
              </div>
            </div>

            {/* SVG Interactive Chart */}
            <div style={{ borderRadius: '16px', background: '#fff', padding: '1.5rem', border: '1px solid var(--border-hairline)', position: 'relative' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: 'var(--primary)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
                  PROJECTED ALPHA VECTOR (NEXT 180 DAYS)
                </span>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-deep-research)' }} /> Nifty IT</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} /> Bank Nifty</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-legal)' }} /> Nifty FMCG</span>
                </div>
              </div>

              <div style={{ width: '100%', height: '180px', position: 'relative' }}>
                <svg style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                  <defs>
                    <linearGradient id="curveGradientSmooth" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#F7A859" stopOpacity="0.35" />
                      <stop offset="50%" stopColor="#F7A859" stopOpacity="0.10" />
                      <stop offset="100%" stopColor="#F7A859" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="itGradientSmooth" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3C4B9B" stopOpacity="0.20" />
                      <stop offset="100%" stopColor="#3C4B9B" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="lineStrokeGold" x1="0" x2="1000" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#F7A859" />
                      <stop offset="65%" stopColor="#ff9243" />
                      <stop offset="100%" stopColor="#e0811e" />
                    </linearGradient>
                  </defs>
                  <line stroke="#E6E7EE" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="40" y2="40" />
                  <line stroke="#E6E7EE" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="100" y2="100" />
                  <line stroke="#E6E7EE" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="160" y2="160" />
                  <path d="M0,160 Q180,140 320,110 T620,60 T1000,20 L1000,200 L0,200 Z" fill="url(#curveGradientSmooth)" />
                  <path d="M0,170 Q240,160 480,120 T780,95 T1000,70 L1000,200 L0,200 Z" fill="url(#itGradientSmooth)" />
                  <path d="M0,170 Q240,160 480,120 T780,95 T1000,70" fill="none" stroke="#3C4B9B" strokeDasharray="5 3" strokeWidth="2" opacity="0.85" />
                  <path d="M0,160 Q180,140 320,110 T620,60 T1000,20" fill="none" stroke="url(#lineStrokeGold)" strokeLinecap="round" strokeWidth="3.5" />
                  <circle cx="320" cy="110" fill="#FFFFFF" r="5.5" stroke="#F7A859" strokeWidth="3" />
                  <circle cx="620" cy="60" fill="#FFFFFF" r="5.5" stroke="#F7A859" strokeWidth="3" />
                  <circle cx="1000" cy="20" fill="#F7A859" r="6.5" stroke="#FFFFFF" strokeWidth="2.5" />
                </svg>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', paddingTop: '0.75rem' }}>
                <span>START: FY25-Q1</span>
                <span>Q2 PROJECTED</span>
                <span>Q3 ESTIMATED</span>
                <span style={{ color: 'var(--agent-dev-studio)', fontWeight: 600 }}>Q4 CONSENSUS (+16.4%)</span>
              </div>
            </div>
          </div>
        </section>

        {/* IN-DEPTH ANALYTICAL SPECTRUM (3-Card Bento) */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'var(--surface-container)', color: 'var(--primary)', textTransform: 'uppercase', fontWeight: 600 }}>
              Analytical Spectrum
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: 'var(--primary)', margin: '0.5rem 0 0', letterSpacing: '-0.015em' }}>
              Deconstruct complexity with mathematical precision
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--on-surface-variant)', maxWidth: '640px', margin: '0.25rem 0 0' }}>
              Trained on millions of structured regulatory documents, order book ticks, and central bank communications to give research desks absolute informational edge.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* Card 1 */}
            <div style={{ padding: '1.75rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 4px 16px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>description</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  10-K & Annual Report Deconstruction
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--on-surface-variant)', marginBottom: '1.25rem' }}>
                  Instant balance sheet, income statement & cash flow line item extraction. Parses audited notes, lease commitments, contingent liabilities, and related party disclosures in seconds.
                </p>
                <div style={{ padding: '0.85rem', borderRadius: '10px', background: 'var(--surface-low)', fontFamily: 'var(--font-code)', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>XBRL Tag Reconciliation</span><strong style={{ color: 'var(--agent-dev-studio)' }}>99.98% Exact</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Restatements Detected</span><strong style={{ color: 'var(--secondary)' }}>Auto-Flagged</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Off-Balance Debt Scan</span><strong style={{ color: 'var(--primary)' }}>Deep Heuristic</strong></div>
                </div>
              </div>
              <div style={{ paddingTop: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-deep-research)', fontWeight: 600, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
                  Read extraction benchmark <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ padding: '1.75rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 4px 16px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>currency_bitcoin</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  Crypto On-Chain & Order-Book Diagnostics
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--on-surface-variant)', marginBottom: '1.25rem' }}>
                  Liquidity depth, funding rates, and volume anomaly detection. Correlate cross-exchange DEX/CEX arbitrage windows, whale wallet movements, and smart contract token lockup releases.
                </p>
                <div style={{ padding: '0.85rem', borderRadius: '10px', background: 'var(--surface-low)', fontFamily: 'var(--font-code)', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Perp Funding Tracking</span><strong style={{ color: 'var(--agent-dev-studio)' }}>8 Exchanges</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Wash Trading Elimination</span><strong style={{ color: 'var(--secondary)' }}>Statistical Filter</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Meme/Altcoin Anomaly Radar</span><strong style={{ color: 'var(--primary)' }}>&lt; 200ms Ping</strong></div>
                </div>
              </div>
              <div style={{ paddingTop: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-deep-research)', fontWeight: 600, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
                  Explore on-chain telemetry <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ padding: '1.75rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 4px 16px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>account_balance</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  Sector Macro Correlation & Policy Rates
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--on-surface-variant)', marginBottom: '1.25rem' }}>
                  Heatmaps and NLP models assessing Reserve Bank of India (RBI) MPC speeches, US Fed dot plots, rupee-dollar volatility, and commodity import cost shocks across sector baskets.
                </p>
                <div style={{ padding: '0.85rem', borderRadius: '10px', background: 'var(--surface-low)', fontFamily: 'var(--font-code)', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>RBI Stance Classifier</span><strong style={{ color: 'var(--secondary)' }}>Hawkish vs Neutral</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>USD/INR Pass-through Delta</span><strong style={{ color: 'var(--agent-dev-studio)' }}>Elasticity Matrix</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Bond Yield Sensitivity</span><strong style={{ color: 'var(--primary)' }}>10Y G-Sec Linked</strong></div>
                </div>
              </div>
              <div style={{ paddingTop: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-deep-research)', fontWeight: 600, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
                  View monetary heatmap <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA: Launch Agent in Auto Mode */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={{
            padding: '2.5rem',
            borderRadius: '24px',
            background: 'var(--surface-low)',
            border: '1px solid var(--border-hairline)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-dev-studio)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Autonomous Orchestration Ready
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--primary)', margin: 0 }}>
                Launch Data & Market Analyst in Auto Mode
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--on-surface-variant)', margin: '0.35rem 0 0' }}>
                Connect your tickers, upload past quarterly investor call transcripts, or dispatch an autonomous swarm to stress-test your equity thesis right now.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', width: '100%', maxWidth: '480px' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
                <span className="material-symbols-outlined" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--outline)', fontSize: '18px' }}>search</span>
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.25rem', borderRadius: '8px', background: '#fff', border: '1px solid var(--border-hairline)', fontSize: '12px', color: 'var(--primary)', outline: 'none' }}
                />
              </div>
              <button
                onClick={() => alert(`Launching Auto Swarm analysis for: ${searchVal}`)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '8px',
                  background: 'var(--primary)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '13px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(7,9,27,0.15)'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>rocket_launch</span>
                Launch Auto Swarm
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
