import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import '../../styles/sovereign.css';

export default function LegalAgent() {
  const [fileName, setFileName] = useState('');
  const [queryInput, setQueryInput] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeClauseIndex, setActiveClauseIndex] = useState(0);

  const sampleClauses = [
    {
      title: "Section 14.3 — Indemnification & Consequential Damages",
      docId: "IN-MSA-2025-09881",
      riskLabel: "Uncapped Liability Risk • Severe",
      riskScore: "88/100 (Unbalanced)",
      originalText: `"The Service Provider agrees to irrevocably defend, indemnify, and hold harmless Customer, its parent entities, affiliates, directors, and agents against `,
      highlightedText1: `any and all direct, indirect, incidental, punitive, or consequential losses, uncapped in aggregate magnitude`,
      middleText: `, arising out of any breach of system warranties, intellectual property infringements, or `,
      highlightedText2: `regulatory data deviations without notice period`,
      endText: `."`,
      conflicts: [
        { label: "Section 73 Indian Contract Act 1872 Conflict", icon: "warning", color: "#DC2626" },
        { label: "DPDP 2023 Sec 8(5) Strict Fiduciary Breach", icon: "database", color: "#974800" }
      ],
      diagnostic: "Clause exposes the service provider to unbounded consequential damages and indefinite third-party indemnities. Violates standard market terms for enterprise SaaS agreements in India.",
      substitution: `"Each party's aggregate indemnification liability under this Section 14 shall be strictly capped at the total fees paid or payable by Customer under the applicable Statement of Work over the prior twelve (12) month period. Neither party shall be liable for indirect, special, or consequential damages. Data governance liabilities remain governed strictly in adherence to Section 8 of the Indian Digital Personal Data Protection Act (2023)."`
    },
    {
      title: "Section 9.2 — Cross-Border Data Residency & Transfer",
      docId: "IN-DPA-2025-04120",
      riskLabel: "Regulatory Non-Compliance • High",
      riskScore: "76/100 (High Risk)",
      originalText: `"Customer agrees that Vendor may freely route, store, and process customer transaction metadata `,
      highlightedText1: `in any global server location without prior notification or sovereign ring-fencing`,
      middleText: `, provided standard commercial encryption is enabled, `,
      highlightedText2: `waiving mandatory data localization and audit rights`,
      endText: `."`,
      conflicts: [
        { label: "DPDP 2023 Sec 16 Cross-Border Transfer Mandate", icon: "gavel", color: "#DC2626" },
        { label: "CERT-In 6-Hour Security Incident Reporting Gap", icon: "shield", color: "#974800" }
      ],
      diagnostic: "Permits unconstrained cross-border transit of personally identifiable data without Indian sovereign cloud safeguards, violating statutory DPDP notification rules.",
      substitution: `"Vendor shall store and process all Customer Personal Data strictly within certified sovereign data centers located within the Republic of India. Cross-border transmission shall only occur in strict conformity with Section 16 of the DPDP Act 2023 and relevant central government whitelists, subject to immediate 6-hour incident disclosure to CERT-In."`
    }
  ];

  const currentClause = sampleClauses[activeClauseIndex];

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setStatusMessage(`Uploaded: ${file.name} (Processing vector embeddings via Indian DPDP parser...)`);
    }
  };

  const handleSimulateAnalysis = () => {
    setIsAnalyzing(true);
    setStatusMessage('Executing multi-jurisdictional legal audit and clause deconstruction...');
    setTimeout(() => {
      setIsAnalyzing(false);
      if (queryInput.trim()) {
        setStatusMessage(`Analysed: "${queryInput.slice(0, 32)}..." — 2 High-Risk clauses redlined against Indian Contract Act.`);
      } else {
        setStatusMessage('Legal audit completed: 1 Severe Uncapped Liability flagged, substitution generated.');
      }
    }, 900);
  };

  const handleCopySubstitution = () => {
    navigator.clipboard.writeText(currentClause.substitution).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleDownloadDocx = () => {
    alert(`Downloading sovereign redlined contract: ${currentClause.docId}-REDLINED.docx\nIncludes tracked changes and statutory citations.`);
  };

  const handleExportSummary = () => {
    alert("Exporting Executive Risk Summary: DPDP 2023 & Indian Contract Act Compliance Audit (PDF)");
  };

  return (
    <div className="sov-canvas" style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Subtle Ambient Light Glows */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '850px',
          height: '480px',
          background: 'radial-gradient(ellipse at center, rgba(247,168,89,0.12) 0%, rgba(165,187,252,0.1) 45%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.8
        }} />
      </div>

      <main style={{ position: 'relative', zIndex: 10, paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          {/* BREADCRUMB NAVIGATION */}
          <div className="mb-5">
            <Breadcrumb />
          </div>

          {/* CATEGORY OVERLINE BADGE */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: 'var(--surface-card)',
              boxShadow: 'var(--shadow-xs)',
              border: '1px solid var(--border-hairline)'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--agent-legal)',
                display: 'inline-block',
                boxShadow: '0 0 8px rgba(132,59,98,0.5)'
              }} />
              <span style={{
                fontFamily: 'var(--font-code)',
                fontSize: '11px',
                color: 'var(--on-surface-variant)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 600
              }}>
                Specialised Agent Catalogue • Sovereign Compliance
              </span>
            </div>
          </div>

          {/* HERO SECTION */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start',
            marginBottom: '64px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.1,
                color: 'var(--primary)',
                letterSpacing: '-0.02em',
                fontWeight: 600
              }}>
                Audit contracts &amp; verify compliance. <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--on-surface-variant)' }}>In seconds.</span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: 'var(--on-surface-variant)',
                maxWidth: '620px'
              }}>
                Multi-jurisdictional legal synthesis, clause risk redlining, and Indian DPDP Act compliance checks—without manual review. Built for fast-moving legal teams and autonomous enterprise governance.
              </p>

              {/* INTERACTIVE FILE DROP & QUERY BAR */}
              <div style={{
                padding: '12px',
                borderRadius: '20px',
                backgroundColor: 'var(--surface-card)',
                boxShadow: '0 12px 36px -4px rgba(7,9,27,0.08)',
                border: '1px solid var(--border-hairline)',
                marginTop: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <label style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--surface-low)',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    border: '1px solid var(--border-hairline)'
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--secondary)' }}>upload_file</span>
                    <span>{fileName ? 'Replace File' : 'Attach PDF/DOCX'}</span>
                    <input
                      type="file"
                      accept=".pdf,.docx,.txt"
                      style={{ display: 'none' }}
                      onChange={handleFileUpload}
                    />
                  </label>

                  <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
                    <input
                      type="text"
                      value={queryInput}
                      onChange={(e) => setQueryInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSimulateAnalysis()}
                      placeholder="Upload NDA, MSA, or Vendor Agreement or ask a legal clause question..."
                      style={{
                        width: '100%',
                        backgroundColor: 'transparent',
                        padding: '10px 12px',
                        border: 'none',
                        outline: 'none',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: 'var(--on-surface)'
                      }}
                    />
                  </div>

                  <button
                    onClick={handleSimulateAnalysis}
                    disabled={isAnalyzing}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--on-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: 600,
                      border: 'none',
                      cursor: isAnalyzing ? 'wait' : 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 14px rgba(7,9,27,0.2)'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      {isAnalyzing ? 'sync' : 'gavel'}
                    </span>
                    <span>{isAnalyzing ? 'Auditing...' : 'Analyse Contract'}</span>
                  </button>
                </div>

                {statusMessage && (
                  <div style={{
                    paddingTop: '10px',
                    paddingLeft: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-code)',
                    color: 'var(--agent-dev-studio)'
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>task_alt</span>
                    <span>{statusMessage}</span>
                  </div>
                )}
              </div>

              {/* 4 GLANCEABLE TELEMETRY CHIPS */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
                paddingTop: '8px'
              }}>
                <div style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--surface-card)',
                  border: '1px solid var(--border-hairline)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--agent-legal)', fontSize: '20px' }}>shield_locked</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--outline)' }}>Privacy</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 700, color: 'var(--primary)' }}>Zero Retention</div>
                  </div>
                </div>

                <div style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--surface-card)',
                  border: '1px solid var(--border-hairline)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '20px' }}>verified_user</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--outline)' }}>Legal Mandate</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 700, color: 'var(--primary)' }}>DPDP Act 2023</div>
                  </div>
                </div>

                <div style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--surface-card)',
                  border: '1px solid var(--border-hairline)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--agent-dev-studio)', fontSize: '20px' }}>bolt</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--outline)' }}>Synthesis Rate</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 700, color: 'var(--primary)' }}>&lt;1.2s Clause Parsing</div>
                  </div>
                </div>

                <div style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--surface-card)',
                  border: '1px solid var(--border-hairline)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--agent-deep-research)', fontSize: '20px' }}>difference</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--outline)' }}>Audit Output</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 700, color: 'var(--primary)' }}>Redline Diff Export</div>
                  </div>
                </div>
              </div>
            </div>

            {/* EDITORIAL STAT HERO CARD */}
            <div>
              <div style={{
                padding: '32px',
                borderRadius: '24px',
                backgroundColor: 'var(--surface-card)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-hairline)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}>
                <div style={{
                  position: 'absolute',
                  right: '-40px',
                  bottom: '-40px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(247,168,89,0.2) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} />

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--outline)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Benchmark Run • v4.2
                    </span>
                    <span style={{
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--secondary-fixed)',
                      color: 'var(--on-secondary-fixed)',
                      fontFamily: 'var(--font-code)',
                      fontSize: '10px',
                      fontWeight: 700
                    }}>
                      SOVEREIGN CORE
                    </span>
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3.5rem',
                    color: 'var(--primary)',
                    fontWeight: 600,
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}>
                    99.4%
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--on-surface-variant)',
                    lineHeight: 1.5,
                    marginBottom: '24px'
                  }}>
                    Unfettered indemnity &amp; data fiduciary liabilities flagged across standard enterprise vendor MSAs.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)', marginBottom: '6px' }}>
                        <span>DPDP 2023 Alignment</span>
                        <span style={{ fontFamily: 'var(--font-code)', color: 'var(--primary)', fontWeight: 600 }}>100% Deterministic</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--surface-container)', borderRadius: '9999px', overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--agent-dev-studio)', borderRadius: '9999px' }} />
                      </div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)', marginBottom: '6px' }}>
                        <span>Average Review Compression</span>
                        <span style={{ fontFamily: 'var(--font-code)', color: 'var(--primary)', fontWeight: 600 }}>4.8 Hrs → 42 Sec</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--surface-container)', borderRadius: '9999px', overflow: 'hidden' }}>
                        <div style={{ width: '92%', height: '100%', backgroundColor: 'var(--agent-legal)', borderRadius: '9999px' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '32px',
                  padding: '16px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--surface-low)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid var(--border-hairline)'
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '26px', flexShrink: 0 }}>balance</span>
                  <div style={{ fontSize: '12px', color: 'var(--on-surface-variant)', lineHeight: 1.5, fontFamily: 'var(--font-body)' }}>
                    Synthesises precedents from the Supreme Court of India, NCLT records, and international commercial law models.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LIVE CONTRACT AUDIT CONSOLE / INTERACTIVE ARTIFACT */}
          <div style={{ margin: '64px 0' }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '24px',
              gap: '16px'
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-code)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: 'var(--outline)'
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--agent-legal)' }}>terminal</span>
                  <span>Live Audit Console Snapshot</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--primary)', fontWeight: 600 }}>
                  Precision Clause Redlining
                </h2>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: '6px', backgroundColor: 'var(--surface-card)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border-hairline)' }}>
                  {sampleClauses.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveClauseIndex(idx)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: activeClauseIndex === idx ? 'var(--primary)' : 'transparent',
                        color: activeClauseIndex === idx ? '#fff' : 'var(--on-surface-variant)',
                        fontSize: '11px',
                        fontWeight: 600,
                        fontFamily: 'var(--font-code)',
                        cursor: 'pointer'
                      }}
                    >
                      Clause {idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleDownloadDocx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--surface-card)',
                    border: '1px solid var(--border-hairline)',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--agent-dev-studio)' }}>download</span>
                  <span>Download Redlined DOCX</span>
                </button>

                <button
                  onClick={handleExportSummary}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--on-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(7,9,27,0.15)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>share</span>
                  <span>Export Risk Summary</span>
                </button>
              </div>
            </div>

            {/* SPLIT VIEW ARTIFACT CARD */}
            <div style={{
              borderRadius: '24px',
              backgroundColor: 'var(--surface-card)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-hairline)',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
            }}>
              {/* LEFT: ORIGINAL CONTRACT SOURCE */}
              <div style={{
                padding: '32px',
                backgroundColor: 'var(--surface-card)',
                borderRight: '1px solid var(--border-hairline)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '16px',
                    marginBottom: '16px',
                    borderBottom: '1px solid var(--border-hairline)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--agent-legal)', fontSize: '20px' }}>description</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)' }}>
                        Master Services Agreement (MSA)
                      </span>
                    </div>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(220,38,38,0.1)',
                      color: '#DC2626',
                      fontFamily: 'var(--font-code)',
                      fontSize: '10px',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}>
                      {currentClause.riskLabel}
                    </span>
                  </div>

                  <div style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--outline)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Source Clause: {currentClause.title}
                  </div>

                  <div style={{
                    padding: '16px',
                    borderRadius: '14px',
                    backgroundColor: 'var(--surface-low)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: 'var(--on-surface)',
                    border: '1px solid var(--border-hairline)'
                  }}>
                    <span style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                      // Original Incoming Draft from Counterparty
                    </span>
                    {currentClause.originalText}
                    <mark style={{ backgroundColor: 'var(--secondary-fixed)', color: 'var(--on-secondary-fixed)', padding: '2px 4px', borderRadius: '4px', fontWeight: 600 }}>
                      {currentClause.highlightedText1}
                    </mark>
                    {currentClause.middleText}
                    <mark style={{ backgroundColor: 'var(--secondary-fixed)', color: 'var(--on-secondary-fixed)', padding: '2px 4px', borderRadius: '4px', fontWeight: 600 }}>
                      {currentClause.highlightedText2}
                    </mark>
                    {currentClause.endText}
                  </div>

                  {/* RISK CALLOUT CHIPS */}
                  <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {currentClause.conflicts.map((conf, i) => (
                      <span
                        key={i}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--surface-container)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '12px',
                          color: 'var(--on-surface-variant)',
                          border: '1px solid var(--border-hairline)'
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px', color: conf.color }}>{conf.icon}</span>
                        <span>{conf.label}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  paddingTop: '24px',
                  marginTop: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  fontFamily: 'var(--font-code)',
                  color: 'var(--outline)',
                  borderTop: '1px solid var(--border-hairline)'
                }}>
                  <span>Doc ID: {currentClause.docId}</span>
                  <span style={{ color: 'var(--agent-dev-studio)', fontWeight: 600 }}>Calculated Risk Index: {currentClause.riskScore}</span>
                </div>
              </div>

              {/* RIGHT: GRIZON SOVEREIGN LEGAL SYNTHESIS */}
              <div style={{
                padding: '32px',
                backgroundColor: 'var(--surface-low)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '16px',
                    marginBottom: '16px',
                    borderBottom: '1px solid var(--border-hairline)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '20px' }}>auto_awesome</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)' }}>
                        GriZon Sovereign Legal Synthesis
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--secondary-fixed)',
                      color: 'var(--on-secondary-fixed)',
                      fontFamily: 'var(--font-code)',
                      fontSize: '10px',
                      fontWeight: 700
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--secondary)' }} />
                      <span>SYNTHESIS COMPLETE (0.84s)</span>
                    </div>
                  </div>

                  {/* CLAUSE DIAGNOSTIC */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--outline)', marginBottom: '4px' }}>
                      Clause Diagnostic
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.6, color: 'var(--on-surface)' }}>
                      {currentClause.diagnostic}
                    </p>
                  </div>

                  {/* RECOMMENDED REDLINE SUBSTITUTION */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--outline)' }}>
                        Recommended Sovereign Substitution
                      </span>
                      <button
                        onClick={handleCopySubstitution}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '11px',
                          fontFamily: 'var(--font-code)',
                          color: copied ? 'var(--agent-dev-studio)' : 'var(--secondary)',
                          fontWeight: 600
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                          {copied ? 'check' : 'content_copy'}
                        </span>
                        <span>{copied ? 'Copied to Clipboard!' : 'Copy Clause'}</span>
                      </button>
                    </div>

                    <div style={{
                      padding: '16px',
                      borderRadius: '14px',
                      backgroundColor: 'var(--surface-card)',
                      boxShadow: 'var(--shadow-xs)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      lineHeight: 1.6,
                      color: 'var(--primary)',
                      border: '1px solid var(--border-hairline)'
                    }}>
                      {currentClause.substitution}
                    </div>
                  </div>
                </div>

                <div style={{
                  paddingTop: '24px',
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  fontFamily: 'var(--font-code)',
                  color: 'var(--outline)',
                  borderTop: '1px solid var(--border-hairline)'
                }}>
                  <span>Redline Confidence: 99.8%</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Audited in Sovereign Airgap</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 CORE PILLARS SECTION */}
          <div style={{ margin: '80px 0' }}>
            <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
              <span style={{
                fontFamily: 'var(--font-code)',
                fontSize: '11px',
                color: 'var(--outline)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'block',
                marginBottom: '8px'
              }}>
                Architectural Superiority
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 600 }}>
                Built for autonomous legal certainty.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--on-surface-variant)', marginTop: '8px', lineHeight: 1.6 }}>
                Engineered to give general counsels, venture partners, and compliance officers enterprise-scale diligence velocity without sacrificing regulatory rigor.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {/* PILLAR 1 */}
              <div style={{
                padding: '32px',
                borderRadius: '20px',
                backgroundColor: 'var(--surface-card)',
                boxShadow: 'var(--shadow-xs)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(220,38,38,0.1)',
                    color: '#DC2626',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>edit_note</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: 'var(--primary)', marginBottom: '12px' }}>
                    Clause-by-Clause Risk Redline
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--on-surface-variant)' }}>
                    Instant detection of onerous indemnities, unilateral termination triggers, and non-standard IP assignments with context-aware substitute language ready to merge into Word or Google Docs.
                  </p>
                </div>
                <div style={{ paddingTop: '24px', marginTop: '24px', borderTop: '1px solid var(--border-hairline)', fontSize: '12px', fontFamily: 'var(--font-code)', color: 'var(--agent-legal)', fontWeight: 600 }}>
                  • Detects 120+ High-Risk Clause Types
                </div>
              </div>

              {/* PILLAR 2 */}
              <div style={{
                padding: '32px',
                borderRadius: '20px',
                backgroundColor: 'var(--surface-card)',
                boxShadow: 'var(--shadow-xs)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--secondary-fixed)',
                    color: 'var(--on-secondary-fixed)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>policy</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: 'var(--primary)', marginBottom: '12px' }}>
                    Indian DPDP &amp; Global Compliance
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--on-surface-variant)' }}>
                    Real-time cross-referencing against the Indian Digital Personal Data Protection Act 2023, EU GDPR, and sovereign cloud residency mandates to certify cross-border data processing hygiene.
                  </p>
                </div>
                <div style={{ paddingTop: '24px', marginTop: '24px', borderTop: '1px solid var(--border-hairline)', fontSize: '12px', fontFamily: 'var(--font-code)', color: 'var(--secondary)', fontWeight: 600 }}>
                  • In-Country Data Residency Certified
                </div>
              </div>

              {/* PILLAR 3 */}
              <div style={{
                padding: '32px',
                borderRadius: '20px',
                backgroundColor: 'var(--surface-card)',
                boxShadow: 'var(--shadow-xs)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--tertiary-fixed)',
                    color: 'var(--on-tertiary-fixed)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>translate</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: 'var(--primary)', marginBottom: '12px' }}>
                    Bilingual Legal Synthesis
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--on-surface-variant)' }}>
                    Seamless legal reasoning across English and Indian official regional languages for state tender contracts, regional land lease agreements, and local procurement frameworks.
                  </p>
                </div>
                <div style={{ paddingTop: '24px', marginTop: '24px', borderTop: '1px solid var(--border-hairline)', fontSize: '12px', fontFamily: 'var(--font-code)', color: 'var(--agent-deep-research)', fontWeight: 600 }}>
                  • Supports 10+ Official Indian Languages
                </div>
              </div>
            </div>
          </div>

          {/* COMPLIANCE DISCLAIMER PILL */}
          <div style={{ margin: '40px auto', maxWidth: '780px' }}>
            <div style={{
              padding: '16px 24px',
              borderRadius: '9999px',
              backgroundColor: 'var(--surface-low)',
              border: '1px solid var(--border-hairline)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              textAlign: 'center'
            }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '18px', flexShrink: 0 }}>info</span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0 }}>
                Educational &amp; operational legal intelligence tool — not formal legal representation. Verify high-risk contracts with certified legal counsel before binding execution.
              </p>
            </div>
          </div>

          {/* MINIMAL LUXURY CTA BANNER */}
          <div style={{
            marginTop: '64px',
            marginBottom: '32px',
            padding: '56px 40px',
            borderRadius: '28px',
            backgroundColor: 'var(--primary)',
            color: 'var(--on-primary)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 64px -12px rgba(7,9,27,0.35)'
          }}>
            {/* Interior Ambient Glows */}
            <div style={{
              position: 'absolute',
              right: '-60px',
              top: '-60px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(247,168,89,0.25) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              left: '-60px',
              bottom: '-60px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(165,187,252,0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: 'var(--primary-container)',
                fontFamily: 'var(--font-code)',
                fontSize: '11px',
                color: 'var(--inverse-primary)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                alignSelf: 'flex-start'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--saffron-glow)' }} />
                <span>Sovereign Enterprise Ready</span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.15,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                fontWeight: 600
              }}>
                Ready to protect your contracts with sovereign legal speed?
              </h2>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'var(--inverse-primary)'
              }}>
                Deploy GriZon Legal Agent in your private VPC or consume via air-gapped API endpoints. Onboard your legal repository in under five minutes.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', paddingTop: '8px' }}>
                <a
                  href="https://app.grizonai.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    borderRadius: '9999px',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                  }}
                >
                  <span>Start Free with Legal Agent</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </a>

                <Link
                  to="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--primary-container)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_month</span>
                  <span>Schedule Enterprise Audit</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
