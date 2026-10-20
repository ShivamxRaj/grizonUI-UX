import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sovereign.css';

export default function ResearchAgents() {
  const [queryInput, setQueryInput] = useState('MCA Master Direction 2024 on Foreign Subsidiary Compliance');
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesizedResult, setSynthesizedResult] = useState(null);

  const handleSynthesize = (e) => {
    if (e) e.preventDefault();
    setIsSynthesizing(true);
    setTimeout(() => {
      setIsSynthesizing(false);
      setSynthesizedResult({
        query: queryInput,
        finding: 'Statutory compliance mandate reconciled across MCA21 e-filing circulars and RBI FEMA Regulations.',
        nodes: 48,
        latency: '342ms',
        citations: ['MCA Circular No. 04/2024', 'RBI FEMA 20(R) §9', 'Gazette of India Ext. 412']
      });
    }, 600);
  };

  return (
    <div className="sv-page" style={{ background: 'var(--parchment)', minHeight: '100vh', paddingTop: '6.5rem', paddingBottom: '5rem' }}>
      {/* ── SUBTLE AMBIENT GLOWS ── */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1180px', margin: '0 auto', padding: '0 20px', overflow: 'hidden' }}>
        <div style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '-8rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '760px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(247,168,89,0.12) 0%, rgba(60,75,155,0.10) 45%, transparent 70%)',
          filter: 'blur(90px)',
          borderRadius: '9999px'
        }} />

        {/* ── BREADCRUMB NAVIGATION ── */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-code)',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--on-surface-variant)',
          marginBottom: '20px'
        }}>
          <Link to="/agents" style={{ color: 'inherit', textDecoration: 'none' }}>Agents</Link>
          <span style={{ color: 'var(--outline-variant)' }}>/</span>
          <span>Sovereign Knowledge Synthesis</span>
          <span style={{ color: 'var(--outline-variant)' }}>/</span>
          <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Fast &amp; Deep Research</span>
        </nav>

        {/* ── HERO SECTION ── */}
        <section style={{ maxWidth: '840px', margin: '0 auto 3.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="research">
          {/* Eyebrow Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            backgroundColor: 'var(--surface-container-low)',
            border: '1px solid var(--border-hairline)',
            boxShadow: 'var(--shadow-xs)',
            marginBottom: '20px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--agent-dev-studio)' }} />
            <span style={{
              fontFamily: 'var(--font-code)',
              fontSize: '11px',
              color: 'var(--on-surface-variant)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>
              SOVEREIGN INTELLIGENCE PLATFORM
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)',
            lineHeight: 1.12,
            color: 'var(--primary)',
            letterSpacing: '-0.03em',
            fontWeight: 400,
            marginBottom: '16px'
          }}>
            Search in milliseconds.<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--on-surface-variant)' }}>Synthesize with certainty.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            lineHeight: 1.6,
            color: 'var(--on-surface-variant)',
            maxWidth: '640px',
            margin: '0 auto 32px'
          }}>
            Purpose-built AI research agents grounded in sovereign statutory gazettes and real-time verifiable intelligence. Zero hallucination.
          </p>

          {/* Interactive Search Bar */}
          <form
            onSubmit={handleSynthesize}
            style={{
              width: '100%',
              maxWidth: '640px',
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border-hairline)',
              borderRadius: '9999px',
              boxShadow: '0 4px 20px rgba(7,9,27,0.06)',
              padding: '6px 8px 6px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              marginBottom: '28px',
              transition: 'border-color 0.2s'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--outline)', fontSize: '20px' }}>
                search
              </span>
              <input
                type="text"
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                placeholder="Investigate regulatory filings, corporate gazettes, or statutory frameworks..."
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13.5px',
                  color: 'var(--on-surface)'
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isSynthesizing}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                height: '38px',
                padding: '0 18px',
                borderRadius: '9999px',
                backgroundColor: 'var(--primary)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 600,
                border: 'none',
                cursor: isSynthesizing ? 'wait' : 'pointer',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(7,9,27,0.2)'
              }}
            >
              <span>{isSynthesizing ? 'Synthesizing...' : 'Synthesize'}</span>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                keyboard_return
              </span>
            </button>
          </form>

          {/* Interactive Simulation Output (if triggered) */}
          {synthesizedResult && (
            <div style={{
              width: '100%',
              maxWidth: '640px',
              marginBottom: '28px',
              padding: '16px 20px',
              borderRadius: '16px',
              backgroundColor: 'var(--surface-low)',
              border: '1px solid var(--border-hairline)',
              textAlign: 'left',
              animation: 'fadeIn 0.25s ease-out'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-dev-studio)', fontWeight: 700 }}>
                  ✓ SYNTHESIS COMPLETE ({synthesizedResult.latency})
                </span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--outline)' }}>
                  {synthesizedResult.nodes} Nodes Traversed
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--primary)', margin: '0 0 10px', lineHeight: 1.5 }}>
                {synthesizedResult.finding}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {synthesizedResult.citations.map((cite, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '2px 8px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--surface-card)',
                      border: '1px solid var(--border-hairline)',
                      fontFamily: 'var(--font-code)',
                      fontSize: '10px',
                      color: 'var(--on-surface-variant)',
                      fontWeight: 600
                    }}
                  >
                    § {cite}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 3 Glanceable Telemetry Chips */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            fontFamily: 'var(--font-code)',
            fontSize: '12px',
            color: 'var(--on-surface-variant)',
            paddingTop: '8px',
            borderTop: '1px solid rgba(230,231,238,0.7)',
            width: '100%',
            maxWidth: '560px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <strong style={{ color: 'var(--primary)' }}>&lt; 400ms</strong>
              <span style={{ color: 'var(--outline)' }}>Sub-Second Tier</span>
            </div>
            <span style={{ color: 'var(--border-hairline)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--agent-deep-research)' }} />
              <strong style={{ color: 'var(--primary)' }}>100%</strong>
              <span style={{ color: 'var(--outline)' }}>Attributed Sources</span>
            </div>
            <span style={{ color: 'var(--border-hairline)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--secondary)' }} />
              <strong style={{ color: 'var(--primary)' }}>Zero-Training</strong>
              <span style={{ color: 'var(--outline)' }}>Privacy</span>
            </div>
          </div>
        </section>

        {/* ── CORE ARCHITECTURES: FAST VS DEEP ── */}
        <section style={{ padding: '3.5rem 0 2rem', borderTop: '1px solid rgba(230,231,238,0.6)' }} id="models">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px' }}>
            <span style={{
              fontFamily: 'var(--font-code)',
              fontSize: '11px',
              color: 'var(--secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 700,
              display: 'block',
              marginBottom: '6px'
            }}>
              DUAL RESEARCH ARCHITECTURES
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
              color: 'var(--primary)',
              fontWeight: 500,
              margin: '0 0 10px'
            }}>
              Two engines. Uncompromised verifiable rigor.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--on-surface-variant)', lineHeight: 1.6, margin: 0 }}>
              Decoupled discovery built for institutional speed and exhaustive legal synthesis.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {/* CARD 1: FAST RESEARCH */}
            <div style={{
              borderRadius: '20px',
              border: '1px solid var(--border-hairline)',
              backgroundColor: 'var(--surface-card)',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-code)',
                    fontSize: '10px',
                    backgroundColor: 'var(--surface-container)',
                    color: 'var(--on-surface-variant)',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>
                    SUB-SECOND LOOKUP
                  </span>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '22px' }}>
                    bolt
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 8px' }}>
                  Fast Research
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', lineHeight: 1.55, color: 'var(--on-surface-variant)', marginBottom: '20px' }}>
                  Rapid factual verification with cryptographic web attribution and live gazette citations for instant answers.
                </p>

                {/* Finding Callout */}
                <div style={{
                  backgroundColor: 'var(--surface-low)',
                  borderRadius: '14px',
                  padding: '16px',
                  border: '1px solid var(--border-hairline)',
                  marginBottom: '20px',
                  textAlign: 'left'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 600, color: 'var(--primary)' }}>Finding: IT Governance</span>
                    <span style={{ color: '#047857', fontWeight: 700, backgroundColor: '#ecfdf5', padding: '2px 6px', borderRadius: '4px', fontSize: '10px' }}>
                      VERIFIED
                    </span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--on-surface)', fontFamily: 'var(--font-body)', fontStyle: 'italic', lineHeight: 1.5, margin: '0 0 12px' }}>
                    “Mandatory Board IT Strategy review cadence is bi-annual under Master Direction 4.2.”
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)' }}>
                    <span style={{ padding: '2px 6px', borderRadius: '4px', backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-hairline)', fontWeight: 600, color: 'var(--primary)' }}>
                      RBI DBIE §4.2
                    </span>
                    <span style={{ padding: '2px 6px', borderRadius: '4px', backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-hairline)', fontWeight: 600, color: 'var(--primary)' }}>
                      FinMin Gaz. 811
                    </span>
                    <span style={{ marginLeft: 'auto', color: 'var(--outline)' }}>0.38s</span>
                  </div>
                </div>

                {/* Feature Bullet Points */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-body)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--agent-dev-studio)' }}>check</span>
                    <span>Sub-400ms token stream with deep cryptographic URL references</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--agent-dev-studio)' }}>check</span>
                    <span>Live validation of web DOM and official gazette PDFs</span>
                  </li>
                </ul>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                  LATENCY: 380MS
                </span>
                <Link
                  to="/indus"
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none'
                  }}
                >
                  <span>Explore Fast API</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* CARD 2: DEEP RESEARCH */}
            <div style={{
              borderRadius: '20px',
              border: '1px solid var(--border-hairline)',
              backgroundColor: 'var(--surface-card)',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-xs)',
              position: 'relative'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-code)',
                    fontSize: '10px',
                    backgroundColor: 'rgba(7,9,27,0.06)',
                    color: 'var(--primary)',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    RECURSIVE SYNTHESIS
                  </span>
                  <span className="material-symbols-outlined" style={{ color: 'var(--agent-deep-research)', fontSize: '22px' }}>
                    account_tree
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 8px' }}>
                  Deep Research
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', lineHeight: 1.55, color: 'var(--on-surface-variant)', marginBottom: '20px' }}>
                  Multi-step autonomous orchestration querying statutory registries, filings, and cross-reconciled dossiers.
                </p>

                {/* Synthesis Box */}
                <div style={{
                  backgroundColor: 'var(--surface-low)',
                  borderRadius: '14px',
                  padding: '16px',
                  border: '1px solid var(--border-hairline)',
                  marginBottom: '20px',
                  textAlign: 'left'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 600, color: 'var(--primary)' }}>Execution: Multi-Node Dossier</span>
                    <span style={{ color: '#1d4ed8', fontWeight: 700, backgroundColor: '#eff6ff', padding: '2px 6px', borderRadius: '4px', fontSize: '10px' }}>
                      SYNTHESIZED
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '10px', textAlign: 'center' }}>
                    <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: '8px', padding: '8px 4px' }}>
                      <span style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-code)' }}>48</span>
                      <span style={{ fontSize: '9px', color: 'var(--outline)', fontFamily: 'var(--font-code)', textTransform: 'uppercase' }}>Nodes Traversed</span>
                    </div>
                    <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: '8px', padding: '8px 4px' }}>
                      <span style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#047857', fontFamily: 'var(--font-code)' }}>100%</span>
                      <span style={{ fontSize: '9px', color: 'var(--outline)', fontFamily: 'var(--font-code)', textTransform: 'uppercase' }}>Reconciled</span>
                    </div>
                    <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: '8px', padding: '8px 4px' }}>
                      <span style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-code)' }}>18-Page</span>
                      <span style={{ fontSize: '9px', color: 'var(--outline)', fontFamily: 'var(--font-code)', textTransform: 'uppercase' }}>Memorandum</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '11.5px', color: 'var(--on-surface-variant)', lineHeight: 1.45, margin: 0, fontFamily: 'var(--font-body)' }}>
                    Resolved conflicting timeline amendments across MCA21 e-filings &amp; SEBI LODR 2024.
                  </p>
                </div>

                {/* Feature Bullet Points */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-body)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--agent-deep-research)' }}>check</span>
                    <span>Dynamic DAG traversal resolving recursive statutory dependencies</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--agent-deep-research)' }}>check</span>
                    <span>Full comparative tabular analysis and executive memo generation</span>
                  </li>
                </ul>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                  LATENCY: 4-12 SEC
                </span>
                <Link
                  to="/app"
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none'
                  }}
                >
                  <span>Launch Workspace</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATUTORY REGISTRIES GROUNDING BANNER ── */}
        <section style={{ padding: '2.5rem 0' }} id="statutory">
          <div style={{
            borderRadius: '20px',
            backgroundColor: 'var(--surface-container-low)',
            border: '1px solid var(--border-hairline)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                DIRECT INSTITUTIONAL REGISTRY GROUNDING
              </span>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 6px' }}>
                Sovereign API pipelines.
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--on-surface-variant)', lineHeight: 1.55, margin: 0 }}>
                Direct integration into institutional repository nodes, official gazettes, and regulatory notifications without third-party scrapers.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px'
            }}>
              <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: '12px', padding: '14px 10px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 700, color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>RBI</span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Directions &amp; Circulars</span>
              </div>
              <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: '12px', padding: '14px 10px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 700, color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>SEBI</span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Listing &amp; Insider Regs</span>
              </div>
              <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: '12px', padding: '14px 10px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 700, color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>MCA</span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Companies Act &amp; Filings</span>
              </div>
              <div style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: '12px', padding: '14px 10px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 700, color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>FinMin</span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Gazettes &amp; Notifications</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 INSTITUTIONAL TRUST PILLARS ── */}
        <section style={{ padding: '3.5rem 0', borderTop: '1px solid rgba(230,231,238,0.6)' }} id="pillars">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px' }}>
            <span style={{
              fontFamily: 'var(--font-code)',
              fontSize: '11px',
              color: 'var(--secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 700,
              display: 'block',
              marginBottom: '6px'
            }}>
              INSTITUTIONAL TRUST PILLARS
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
              color: 'var(--primary)',
              fontWeight: 500,
              margin: '0 0 10px'
            }}>
              Built for uncompromised trust.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--on-surface-variant)', lineHeight: 1.6, margin: 0 }}>
              Architected to satisfy the strictest enterprise compliance, cryptographic reproducibility, and isolation mandates.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}>
            {/* PILLAR 1 */}
            <div style={{
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border-hairline)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <div>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--surface-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '16px'
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>verified</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 700, color: 'var(--primary)', margin: '0 0 8px' }}>
                  Cryptographic Citations
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12.5px', color: 'var(--on-surface-variant)', lineHeight: 1.55, margin: 0 }}>
                  SHA-256 provenance hashes linked to immutable snapshots, ensuring deterministic verification down to paragraph index.
                </p>
              </div>
              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--border-hairline)', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#059669' }} />
                <span>Immutable Auditing</span>
              </div>
            </div>

            {/* PILLAR 2 */}
            <div style={{
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border-hairline)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <div>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--surface-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '16px'
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>layers</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 700, color: 'var(--primary)', margin: '0 0 8px' }}>
                  Multi-Source Ingestion
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12.5px', color: 'var(--on-surface-variant)', lineHeight: 1.55, margin: 0 }}>
                  Concurrently digests court records, PDF gazettes, filings, and real-time news feeds with zero OCR decay.
                </p>
              </div>
              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--border-hairline)', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--agent-deep-research)' }} />
                <span>Multi-Modal Pipeline</span>
              </div>
            </div>

            {/* PILLAR 3 */}
            <div style={{
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border-hairline)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <div>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--surface-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '16px'
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>shield</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 700, color: 'var(--primary)', margin: '0 0 8px' }}>
                  Sovereign Data Enclave
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12.5px', color: 'var(--on-surface-variant)', lineHeight: 1.55, margin: 0 }}>
                  Strict zero data retention; models are never trained on proprietary inquiries. Hardware-isolated VPC deployment.
                </p>
              </div>
              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--border-hairline)', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--agent-dev-studio)' }} />
                <span>Air-Gapped Ready</span>
              </div>
            </div>

            {/* PILLAR 4 */}
            <div style={{
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border-hairline)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <div>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--surface-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '16px'
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>output</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 700, color: 'var(--primary)', margin: '0 0 8px' }}>
                  Structured Multi-Export
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12.5px', color: 'var(--on-surface-variant)', lineHeight: 1.55, margin: 0 }}>
                  Instant export to signed executive memo PDFs, structured DOCX briefs, or JSON-LD schema webhooks for legal suites.
                </p>
              </div>
              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--border-hairline)', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--secondary)' }} />
                <span>PDF / DOCX / JSON</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SLEEK DARK SOVEREIGN CTA CARD ── */}
        <section style={{ padding: '2rem 0 3rem' }}>
          <div style={{
            borderRadius: '24px',
            backgroundColor: 'var(--primary)',
            color: '#FFFFFF',
            padding: '48px 36px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 60px -10px rgba(7,9,27,0.3)'
          }}>
            {/* Interior Glows */}
            <div style={{
              position: 'absolute',
              right: '-60px',
              bottom: '-60px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              backgroundColor: 'rgba(60,75,155,0.25)',
              filter: 'blur(70px)',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                width: 'fit-content'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--saffron-glow)' }} />
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  ENTERPRISE SANDBOX READY
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                  lineHeight: 1.2,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  fontWeight: 400,
                  margin: 0
                }}>
                  Deploy sovereign research agents in your secure cloud.
                </h2>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14.5px',
                  color: 'var(--inverse-primary)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Connect GriZon AI to your internal corpora or run isolated queries against our pre-indexed statutory registry lattice.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', paddingTop: '6px' }}>
                <a
                  href="https://app.grizonai.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    height: '44px',
                    padding: '0 24px',
                    borderRadius: '9999px',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
                  }}
                >
                  <span>Start Free with 500 Credits</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                </a>

                <Link
                  to="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    height: '44px',
                    padding: '0 24px',
                    borderRadius: '9999px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>Schedule Enterprise Briefing</span>
                </Link>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                paddingTop: '12px',
                fontFamily: 'var(--font-code)',
                fontSize: '11px',
                color: 'var(--inverse-primary)'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--saffron-glow)' }}>lock</span>
                  ISO 27001 &amp; SOC2 Type II Aligned
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--saffron-glow)' }}>cloud_done</span>
                  Sovereign Cloud Hosting
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--saffron-glow)' }}>security</span>
                  Zero Data Retention Guarantee
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
