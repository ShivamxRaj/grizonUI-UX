import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sovereign.css';

export default function DocIntelligence({ defaultModal = 'doc' }) {
  const [modalView, setModalView] = useState(defaultModal); // 'doc' | 'video'
  const [activePage, setActivePage] = useState(14);
  const [videoTimestamp, setVideoTimestamp] = useState('04:12');
  const [videoQuery, setVideoQuery] = useState('');

  useEffect(() => {
    setModalView(defaultModal);
  }, [defaultModal]);

  return (
    <div className="sv-page" style={{ background: 'var(--parchment)', minHeight: '100vh', paddingTop: '5.5rem' }}>
      {/* Subtle ambient decorative glow behind hero */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 1.5rem 5rem', overflow: 'hidden' }}>
        <div style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '-8rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '720px',
          height: '360px',
          background: 'radial-gradient(circle, rgba(247,168,89,0.15) 0%, rgba(165,187,252,0.2) 50%, rgba(60,75,155,0.08) 80%, transparent 100%)',
          filter: 'blur(90px)',
          borderRadius: '9999px'
        }} />

        {/* Breadcrumbs */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--on-surface-variant)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
          <Link to="/agents" style={{ color: 'inherit', textDecoration: 'none' }}>Agents</Link>
          <span style={{ color: 'var(--outline-variant)' }}>/</span>
          <span>Multi-Modal Perception</span>
          <span style={{ color: 'var(--outline-variant)' }}>/</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'var(--surface-container)', color: 'var(--primary)', fontWeight: 600 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
            Doc Intelligence & Video Analyser
          </span>
        </nav>

        {/* Hero Section */}
        <section style={{ maxWidth: '880px', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', background: 'rgba(232,232,234,0.7)', color: 'var(--on-surface)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--agent-deep-research)' }}>filter_center_focus</span>
            MULTIMODAL INTELLIGENCE · OCR & FRAME-BY-FRAME REASONING
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: 'var(--primary)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 1.25rem' }}>
            Read every document.<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--agent-deep-research)' }}>Decode every frame.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', lineHeight: '1.65', color: 'var(--on-surface-variant)', maxWidth: '720px', margin: '0 0 1.75rem' }}>
            Ingest complex multi-page PDFs, balance sheets, and handwritten scans with zero-loss OCR — or upload entire video footage to identify scenes, parse on-screen OCR text, and query key moments with timestamped precision.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => alert('Launching multi-modal ingestion uploader for PDF / MP4 / MKV...')}
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
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(7,9,27,0.15)'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>cloud_upload</span>
              Upload Document / Video
            </button>
            <a
              href="#interactive-console"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.5rem',
                borderRadius: '8px',
                background: '#fff',
                color: 'var(--on-surface)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                border: '1px solid var(--border-hairline)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--on-surface-variant)' }}>play_circle</span>
              View Sample Analysis
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-code)', fontSize: '11px', paddingLeft: '0.5rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
              256-BIT ENCLAVE ISOLATION • ZERO TRAINING RETENTION
            </div>
          </div>

          {/* 4 Key Value Indicators */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', paddingTop: '2.5rem' }}>
            <div style={{ padding: '1rem', borderRadius: '12px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--agent-deep-research)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>document_scanner</span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Zero Loss OCR</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>Native Multi-Page PDF</p>
              <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0 }}>Tables, financial grids & seals</p>
            </div>

            <div style={{ padding: '1rem', borderRadius: '12px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--saffron-glow)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>slow_motion_video</span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Temporal Index</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>Frame-by-Frame Indexing</p>
              <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0 }}>Scene & slide deconstruction</p>
            </div>

            <div style={{ padding: '1rem', borderRadius: '12px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--agent-dev-studio)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>schedule</span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Timestamp Jump</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>On-Screen Text OCR</p>
              <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0 }}>Interactive video Q&A citations</p>
            </div>

            <div style={{ padding: '1rem', borderRadius: '12px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--agent-legal)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download_for_offline</span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Structured Export</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>Markdown, Word & PDF</p>
              <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0 }}>Downloadable enterprise artifacts</p>
            </div>
          </div>
        </section>

        {/* Interactive Dual Multi-Modal Console Showcase */}
        <section id="interactive-console" style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-deep-research)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
                LIVE SOVEREIGN WORKSPACE
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: 'var(--primary)', margin: 0 }}>
                Interactive Dual Multi-Modal Console
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', padding: '0.35rem', borderRadius: '12px', background: 'var(--surface-container)', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
              <button
                onClick={() => setModalView('doc')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  background: modalView === 'doc' ? '#fff' : 'transparent',
                  color: modalView === 'doc' ? 'var(--primary)' : 'var(--on-surface-variant)',
                  boxShadow: modalView === 'doc' ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--agent-deep-research)' }}>description</span>
                Doc Intelligence & Writer
              </button>
              <button
                onClick={() => setModalView('video')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  background: modalView === 'video' ? '#fff' : 'transparent',
                  color: modalView === 'video' ? 'var(--primary)' : 'var(--on-surface-variant)',
                  boxShadow: modalView === 'video' ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--saffron-glow)' }}>movie</span>
                Video Analyser (Pro+)
                <span style={{ fontSize: '9px', padding: '0.1rem 0.35rem', borderRadius: '4px', background: 'var(--secondary-fixed)', color: 'var(--on-secondary-fixed)', fontWeight: 'bold' }}>PRO+</span>
              </button>
            </div>
          </div>

          {/* Console Canvas Wrapper */}
          <div style={{ borderRadius: '16px', background: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.06)', border: '1px solid var(--border-hairline)', overflow: 'hidden' }}>
            {/* Top Bar */}
            <div style={{ padding: '0.75rem 1.25rem', background: 'var(--surface-low)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', borderBottom: '1px solid var(--border-hairline)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', background: 'var(--surface-dim)' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', background: 'var(--surface-dim)' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', background: 'var(--surface-dim)' }} />
                </div>
                <span style={{ color: 'var(--outline-variant)', fontSize: '12px' }}>|</span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--agent-deep-research)' }}>
                    {modalView === 'doc' ? 'article' : 'smart_display'}
                  </span>
                  {modalView === 'doc'
                    ? 'SESSION_ID: DOC-48P-AUDIT-2025Q4.PDF • OCR COMPLETE'
                    : 'SESSION_ID: VID-LECTURE-DEEP-ORCHESTRATION-24MIN.MP4 • INDEXED'}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-code)', fontSize: '11px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'var(--surface-container)', color: 'var(--on-surface-variant)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
                  LATENCY: {modalView === 'doc' ? '284ms' : '412ms'}
                </span>
                <span style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'var(--surface-container)', color: 'var(--on-surface-variant)' }}>
                  CONTEXT: 128,400 TOKENS
                </span>
                <button
                  onClick={() => alert('Exporting full audit memo + extracted raw JSON')}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    background: 'var(--primary)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '11px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>download</span>
                  Export Artifact
                </button>
              </div>
            </div>

            {/* View 1: Doc Intelligence */}
            {modalView === 'doc' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', minHeight: '540px' }}>
                {/* Left Split: Document Extraction Inspector */}
                <div style={{ padding: '1.5rem', background: '#fafaf9', borderRight: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(60,75,155,0.1)', color: 'var(--agent-deep-research)', fontFamily: 'var(--font-code)', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase' }}>
                          PDF SOURCE • PAGE {activePage} OF 48
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--on-surface-variant)' }}>Balance Sheet Audit</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-dev-studio)', fontWeight: 600 }}>99.8% OCR CONFIDENCE</span>
                    </div>

                    {/* Document Page Preview Mock */}
                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-hairline)' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px', color: 'var(--primary)' }}>Consolidated Financial Metrics</span>
                        <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>FY 2024-25 Q4</span>
                      </div>

                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', fontSize: '12px', textAlign: 'left', borderCollapse: 'collapse' }}>
                          <thead>
                            <tr style={{ background: 'var(--surface-low)', fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>
                              <th style={{ padding: '0.5rem' }}>Metric Category</th>
                              <th style={{ padding: '0.5rem' }}>Declared (INR Cr)</th>
                              <th style={{ padding: '0.5rem' }}>Delta (YoY)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ borderTop: '1px solid var(--border-hairline)' }}>
                              <td style={{ padding: '0.5rem', fontWeight: 500, color: 'var(--primary)' }}>Sovereign Cloud ARR</td>
                              <td style={{ padding: '0.5rem', fontFamily: 'var(--font-code)', fontWeight: 600 }}>₹1,428.5 Cr</td>
                              <td style={{ padding: '0.5rem', fontFamily: 'var(--font-code)', color: 'var(--agent-dev-studio)', fontWeight: 600 }}>+42.8%</td>
                            </tr>
                            <tr style={{ borderTop: '1px solid var(--border-hairline)' }}>
                              <td style={{ padding: '0.5rem', fontWeight: 500, color: 'var(--primary)' }}>Compute Infrastructure COGS</td>
                              <td style={{ padding: '0.5rem', fontFamily: 'var(--font-code)', fontWeight: 600 }}>₹512.2 Cr</td>
                              <td style={{ padding: '0.5rem', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)' }}>-11.4%</td>
                            </tr>
                            <tr style={{ borderTop: '1px solid var(--border-hairline)' }}>
                              <td style={{ padding: '0.5rem', fontWeight: 500, color: 'var(--primary)' }}>Net Adjusted EBITDA</td>
                              <td style={{ padding: '0.5rem', fontFamily: 'var(--font-code)', fontWeight: 600 }}>₹419.0 Cr</td>
                              <td style={{ padding: '0.5rem', fontFamily: 'var(--font-code)', color: 'var(--agent-dev-studio)', fontWeight: 600 }}>+64.1%</td>
                            </tr>
                            <tr style={{ borderTop: '1px solid var(--border-hairline)' }}>
                              <td style={{ padding: '0.5rem', fontWeight: 500, color: 'var(--primary)' }}>R&D Capitalization</td>
                              <td style={{ padding: '0.5rem', fontFamily: 'var(--font-code)', fontWeight: 600 }}>₹188.7 Cr</td>
                              <td style={{ padding: '0.5rem', fontFamily: 'var(--font-code)', color: 'var(--saffron-glow)', fontWeight: 600 }}>+8.0%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Clause Risk Indicator Banner */}
                      <div style={{ marginTop: '0.85rem', padding: '0.75rem', borderRadius: '8px', background: 'var(--surface-low)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--agent-legal)', marginTop: '2px' }}>verified_user</span>
                        <div>
                          <p style={{ fontWeight: 600, fontSize: '12px', color: 'var(--primary)', margin: 0 }}>Clause 18.4 Compliance Verification</p>
                          <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', margin: '0.15rem 0 0', lineHeight: 1.4 }}>
                            Zero encumbrance on domestic sovereign GPU clusters. Certified DPDP Act compliant by statutory auditors.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Page Thumbnails */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                      {[12, 13, 14, 15].map(p => (
                        <div
                          key={p}
                          onClick={() => setActivePage(p)}
                          style={{
                            padding: '0.5rem',
                            borderRadius: '6px',
                            background: activePage === p ? 'var(--primary)' : 'var(--surface-container)',
                            color: activePage === p ? '#fff' : 'var(--on-surface-variant)',
                            textAlign: 'center',
                            fontFamily: 'var(--font-code)',
                            fontSize: '11px',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '16px', display: 'block', margin: '0 auto 2px' }}>
                            {activePage === p ? 'fact_check' : 'file_copy'}
                          </span>
                          p. {p} {activePage === p && '(Active)'}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                    <span>PARSED 48 PAGES IN 1.8 SECONDS</span>
                    <span style={{ color: 'var(--agent-deep-research)', cursor: 'pointer', fontWeight: 600 }}>Inspect Raw Layout Boxes →</span>
                  </div>
                </div>

                {/* Right Split: Sovereign Writer Reasoning & Markdown Output */}
                <div style={{ padding: '1.5rem', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-hairline)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit_note</span>
                        </div>
                        <div>
                          <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>
                            Autonomous Synthesis & Executive Memo
                          </h3>
                          <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', margin: 0 }}>Target Artifact: Markdown / Word / Executive Briefing</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
                        <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--saffron-glow)', fontWeight: 700, textTransform: 'uppercase' }}>Synthesising</span>
                      </div>
                    </div>

                    {/* Markdown Generated Artifact */}
                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--surface-low)', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>
                        <span># ARTIFACT: EXECUTIVE_INVESTOR_MEMO.MD</span>
                        <span>1,420 WORDS • CITATIONS</span>
                      </div>

                      <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>
                        Executive Summary: Sovereign GPU Cluster Capex & Free Cash Return
                      </h4>
                      <p style={{ margin: 0 }}>
                        Across the 48-page statutory audit report, the key operational pivot is the <strong>42.8% surge in domestic Sovereign Cloud ARR</strong> (reaching ₹1,428.5 Cr), directly driven by state-level procurement mandates for on-premise foundation model fine-tuning.
                      </p>

                      <div style={{ padding: '0.75rem', borderRadius: '8px', background: '#fff', borderLeft: '3px solid var(--agent-dev-studio)' }}>
                        <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.2rem' }}>Audit Note Reconciled:</strong>
                        Clause 18.4 guarantees that no telemetry or training gradients traverse external boundaries, satisfying DPDP Act Chapter IV guidelines. Compute COGS decreased 11.4% due to localized power-purchase agreements.
                      </div>
                    </div>
                  </div>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)' }}>
                    <span>STATUS: 256-BIT CRYPTOGRAPHIC DIGEST READY</span>
                    <button
                      onClick={() => alert('Artifact saved to workspace.')}
                      style={{ padding: '0.4rem 0.85rem', borderRadius: '6px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                    >
                      Save to Workspace
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* View 2: Video Analyser */
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', minHeight: '540px' }}>
                {/* Left Split: Video Player & Timeline */}
                <div style={{ padding: '1.5rem', background: 'var(--primary)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Video Player Simulator */}
                    <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: '12px', background: '#0a0d1a', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--saffron-glow)' }}>play_circle</span>
                        <div style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '0.35rem' }}>
                          Current Keyframe: {videoTimestamp} • Slide OCR Active
                        </div>
                      </div>

                      {/* Video Controls Overlay */}
                      <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', right: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontFamily: 'var(--font-code)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>play_arrow</span>
                          <span>{videoTimestamp} / 24:18</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--lavender-subtle)' }}>subtitles</span>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--lavender-subtle)' }}>fullscreen</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Scrubber */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '10px', color: 'rgba(255,255,255,0.6)', marginBottom: '0.35rem' }}>
                        <span>KEYFRAME TIMELINE (14 SCENES)</span>
                        <span style={{ color: 'var(--saffron-glow)' }}>CLICK TIMESTAMP TO JUMP</span>
                      </div>

                      <div style={{ width: '100%', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 0.5rem' }}>
                        {[
                          { time: '00:45', label: 'Intro' },
                          { time: '04:12', label: 'Slides' },
                          { time: '09:30', label: 'Code' },
                          { time: '14:55', label: 'Q&A' },
                          { time: '22:10', label: 'Recap' }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => setVideoTimestamp(item.time)}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                          >
                            <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: videoTimestamp === item.time ? 'var(--saffron-glow)' : 'var(--lavender-subtle)', boxShadow: videoTimestamp === item.time ? '0 0 8px rgba(247,168,89,0.8)' : 'none' }} />
                            <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', color: videoTimestamp === item.time ? '#fff' : 'rgba(255,255,255,0.6)', marginTop: '2px' }}>{item.time} {item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '0.75rem', borderRadius: '10px', background: 'rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'rgba(255,255,255,0.8)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--saffron-glow)' }}>mic</span>
                      <span>Audio Transcription: 99.1% Confidence</span>
                    </div>
                    <span style={{ color: 'var(--lavender-subtle)' }}>1.2 Credits / min</span>
                  </div>
                </div>

                {/* Right Split: Video Chronology Digest */}
                <div style={{ padding: '1.5rem', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-hairline)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(247,168,89,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>movie_filter</span>
                        </div>
                        <div>
                          <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--primary)', margin: 0 }}>Video Intelligence Digest</h3>
                          <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', margin: 0 }}>Extracted On-Screen Text & Audio</p>
                        </div>
                      </div>
                      <span style={{ padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'var(--surface-container)', fontFamily: 'var(--font-code)', fontSize: '10px', fontWeight: 700, color: 'var(--primary)' }}>PRO+</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ padding: '0.15rem 0.4rem', borderRadius: '4px', background: 'rgba(60,75,155,0.1)', color: 'var(--agent-deep-research)', fontFamily: 'var(--font-code)', fontSize: '10px', fontWeight: 700 }}>
                            TIMESTAMP 04:12 • SLIDE OCR
                          </span>
                          <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>SCENE #04</span>
                        </div>
                        <p style={{ fontWeight: 600, fontSize: '13px', color: 'var(--primary)', margin: '0.2rem 0' }}>Slide Title: Distributed Sovereign Orchestration Architecture</p>
                        <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: 1.5 }}>
                          Identified on-screen Python snippet showing zero-trust token exchange. Presenter explained failover latency guarantees across edge locations.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.35rem' }}>
                          <button onClick={() => setVideoTimestamp('04:12')} style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', background: '#fff', border: '1px solid var(--border-hairline)', fontSize: '10px', fontFamily: 'var(--font-code)', cursor: 'pointer' }}>
                            Jump to 04:12
                          </button>
                          <button onClick={() => alert('Code snippet copied to clipboard.')} style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', background: '#fff', border: '1px solid var(--border-hairline)', fontSize: '10px', fontFamily: 'var(--font-code)', cursor: 'pointer' }}>
                            Copy Code
                          </button>
                        </div>
                      </div>

                      <div style={{ padding: '1rem', borderRadius: '10px', background: '#fff', border: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ padding: '0.15rem 0.4rem', borderRadius: '4px', background: 'rgba(16,126,125,0.1)', color: 'var(--agent-dev-studio)', fontFamily: 'var(--font-code)', fontSize: '10px', fontWeight: 700 }}>
                            TIMESTAMP 09:30 • LIVE TERMINAL
                          </span>
                          <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>SCENE #08</span>
                        </div>
                        <p style={{ fontWeight: 600, fontSize: '13px', color: 'var(--primary)', margin: '0.2rem 0' }}>Terminal Code Demo: Docker Swarm Deployment</p>
                        <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: 1.5 }}>
                          Captured 28 lines of live bash logs displaying cluster health checks and port forwardings.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ask Video Prompt Input */}
                  <div style={{ padding: '0.5rem', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--outline)', marginLeft: '0.35rem' }}>smart_toy</span>
                    <input
                      type="text"
                      value={videoQuery}
                      onChange={(e) => setVideoQuery(e.target.value)}
                      placeholder="Query video (e.g. 'What did the speaker conclude?')..."
                      style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '12px', color: 'var(--primary)' }}
                    />
                    <button
                      onClick={() => alert(`Querying video timestamp indices for: ${videoQuery || 'Key takeaways'}`)}
                      style={{ padding: '0.4rem 0.85rem', borderRadius: '6px', background: 'var(--primary)', color: '#fff', border: 'none', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px', cursor: 'pointer', whiteSpace: 'nowrap' }}
                    >
                      Ask Video →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Core Capabilities Breakdown (Bento Grid) */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-deep-research)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
              Architectural Rigor
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: 'var(--primary)', margin: 0 }}>
              Four Pillars of Multi-Modal Sovereignty
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--on-surface-variant)', marginTop: '0.5rem' }}>
              Built from the ground up for high-volume enterprise ingestion where errors or data leakage are unacceptable.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div style={{ padding: '1.5rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(60,75,155,0.1)', color: 'var(--agent-deep-research)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>document_scanner</span>
                </div>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--agent-deep-research)', fontWeight: 700, textTransform: 'uppercase' }}>Zero Information Loss</span>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)', margin: 0 }}>Doc Intelligence & Writer</h3>
                <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                  Ingests PDFs, balance sheets, whitepapers, handwritten notes, and legal contracts. Synthesizes structured reports, executive memos, and analytical summaries.
                </p>
              </div>
              <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--primary)', fontWeight: 600 }}>
                <span>Included on All Plans</span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--agent-dev-studio)' }}>check_circle</span>
              </div>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--secondary-fixed)', color: 'var(--on-secondary-fixed)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>videocam</span>
                </div>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase' }}>Frame-Accurate Citations</span>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)', margin: 0 }}>Video Analyser</h3>
                <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                  Parses recorded Zoom meetings, product demos, lectures, and security camera logs. Extract slide text, speaker transcripts, and key action items with timestamps.
                </p>
              </div>
              <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--secondary)', fontWeight: 600 }}>
                <span>Pro & Elite Exclusive</span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>star</span>
              </div>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(16,126,125,0.1)', color: 'var(--agent-dev-studio)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>security</span>
                </div>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--agent-dev-studio)', fontWeight: 700, textTransform: 'uppercase' }}>Zero Retention Mandate</span>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)', margin: 0 }}>DPDP Sovereign Enclave</h3>
                <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                  Compliant with India's Digital Personal Data Protection Act. Files are stored in memory-isolated VPCs and destroyed immediately following completion.
                </p>
              </div>
              <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--agent-dev-studio)', fontWeight: 600 }}>
                <span>Statutory Compliance 100%</span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span>
              </div>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(132,59,98,0.1)', color: 'var(--agent-legal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>history_edu</span>
                </div>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--agent-legal)', fontWeight: 700, textTransform: 'uppercase' }}>Mathematical Verification</span>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)', margin: 0 }}>Cryptographic Audit Hashes</h3>
                <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                  Every figure extracted generates a SHA-256 hash matching the exact pixel coordinate in the original document snapshot to eliminate discrepancies.
                </p>
              </div>
              <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--agent-legal)', fontWeight: 600 }}>
                <span>SHA-256 Provenance Proofs</span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>lock</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section style={{ marginBottom: '2rem' }}>
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            background: 'var(--primary)',
            color: '#fff',
            padding: '3rem 2.5rem',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(7,9,27,0.2)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-6rem',
              right: '-6rem',
              width: '380px',
              height: '380px',
              background: 'radial-gradient(circle, rgba(247,168,89,0.2) 0%, transparent 70%)',
              borderRadius: '9999px',
              filter: 'blur(70px)'
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.1)', color: 'var(--saffron-glow)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', width: 'fit-content' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
                Instant Multi-Modal Pilot
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#fff', margin: 0, lineHeight: 1.15 }}>
                Deploy zero-loss document & video analysis on your sovereign infrastructure.
              </h2>

              <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
                Ingest up to 10,000 pages of statutory filings or 50 hours of internal video footage with full cryptographic provenance.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.75rem' }}>
                <Link
                  to="/app"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.9rem 1.6rem',
                    borderRadius: '8px',
                    background: '#fff',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>cloud_upload</span>
                  Start Free Ingestion
                </Link>
                <Link
                  to="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.9rem 1.6rem',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.15)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>shield</span>
                  Learn About Enclave Security
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
