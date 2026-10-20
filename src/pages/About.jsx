import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sovereign.css';

export default function About() {
  return (
    <div className="sv-page" style={{ background: 'var(--parchment)', minHeight: '100vh', paddingTop: '6rem' }}>
      {/* ── AMBIENT ATMOSPHERIC LIGHT ── */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1440px', margin: '0 auto', overflow: 'hidden' }}>
        <div style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '-8rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '760px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(247,168,89,0.15) 0%, rgba(165,187,252,0.16) 45%, transparent 75%)',
          filter: 'blur(90px)',
          borderRadius: '9999px'
        }} />

        {/* ── HERO SECTION ── */}
        <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '2.5rem 1.5rem 3.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Category Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: 'var(--surface-card)',
              boxShadow: 'var(--shadow-xs)',
              border: '1px solid var(--border-hairline)',
              marginBottom: '20px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--saffron-glow)' }} />
              <span style={{
                fontFamily: 'var(--font-code)',
                fontSize: '11px',
                color: 'var(--on-surface-variant)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600
              }}>
                About GriZon AI
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.15,
              color: 'var(--primary)',
              letterSpacing: '-0.02em',
              fontWeight: 500,
              marginBottom: '20px'
            }}>
              Intelligence purpose-built for <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--on-surface-variant)' }}>sovereign workflows.</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: 1.65,
              color: 'var(--on-surface-variant)',
              maxWidth: '680px',
              margin: '0 auto 36px'
            }}>
              Moving beyond generic chatbots. We build autonomous, domain-specialised agents for Indian enterprise, research, and engineering.
            </p>

            {/* 4 Stat Cards */}
            <div style={{
              width: '100%',
              borderRadius: '20px',
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border-hairline)',
              boxShadow: '0 4px 24px rgba(7,9,27,0.04)',
              padding: '28px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 600, lineHeight: 1 }}>
                  8
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
                  Specialised Agents
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0 }}>
                  Tuned for extreme depth
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 600, lineHeight: 1 }}>
                  100%
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
                  Grounded Citations
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0 }}>
                  Statutory primary sources
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 600, lineHeight: 1 }}>
                  Zero
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
                  Data Retention
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0 }}>
                  Private sovereign compute
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 600, lineHeight: 1 }}>
                  Bharat
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
                  Made in India
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0 }}>
                  DPDP compliant by design
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR CONVICTION SECTION ── */}
        <section style={{ width: '100%', backgroundColor: 'var(--surface-low)', padding: '4.5rem 1.5rem', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
          <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 36px' }}>
              <span style={{
                fontFamily: 'var(--font-code)',
                fontSize: '11px',
                color: 'var(--agent-dev-studio)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 700,
                display: 'block',
                marginBottom: '8px'
              }}>
                Our Conviction
              </span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: 'var(--primary)',
                fontWeight: 500,
                letterSpacing: '-0.015em'
              }}>
                Why specialised agents win.
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {/* Card 1 */}
              <div style={{
                backgroundColor: 'var(--surface-card)',
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid var(--border-hairline)',
                boxShadow: 'var(--shadow-xs)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--surface-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)'
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>account_tree</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                  Domain Depth
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                  Tuned specifically for corporate filings, statutory Indian legal frameworks, and domestic market structures.
                </p>
              </div>

              {/* Card 2 */}
              <div style={{
                backgroundColor: 'var(--surface-card)',
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid var(--border-hairline)',
                boxShadow: 'var(--shadow-xs)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--surface-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)'
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>verified_user</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                  Sovereign Trust
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                  100% in-country data residency adhering to DPDP 2023. We never train foundation models on your corporate assets.
                </p>
              </div>

              {/* Card 3 */}
              <div style={{
                backgroundColor: 'var(--surface-card)',
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid var(--border-hairline)',
                boxShadow: 'var(--shadow-xs)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--surface-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)'
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>terminal</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                  Verifiable Rigor
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                  Deterministic code sandboxes, live schema audit trails, and cryptographically verified citation sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRINCIPLES SECTION ── */}
        <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '4.5rem 1.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 36px' }}>
            <span style={{
              fontFamily: 'var(--font-code)',
              fontSize: '11px',
              color: 'var(--on-surface-variant)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 700,
              display: 'block',
              marginBottom: '8px'
            }}>
              Principles
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: 'var(--primary)',
              fontWeight: 500,
              letterSpacing: '-0.015em'
            }}>
              Engineered with institutional rigor.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {/* Principle 1 */}
            <div style={{
              backgroundColor: 'var(--surface-card)',
              padding: '32px',
              borderRadius: '20px',
              border: '1px solid var(--border-hairline)',
              boxShadow: 'var(--shadow-xs)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <span style={{
                fontFamily: 'var(--font-code)',
                fontSize: '11px',
                color: 'var(--saffron-glow)',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}>
                01 / RIGOR
              </span>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                Zero Speculation
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                Code executes live in sandboxes, contracts redline against statute, and market insights derive from audited primary filings.
              </p>
            </div>

            {/* Principle 2 */}
            <div style={{
              backgroundColor: 'var(--surface-card)',
              padding: '32px',
              borderRadius: '20px',
              border: '1px solid var(--border-hairline)',
              boxShadow: 'var(--shadow-xs)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <span style={{
                fontFamily: 'var(--font-code)',
                fontSize: '11px',
                color: 'var(--agent-dev-studio)',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}>
                02 / AUDITABILITY
              </span>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                Radical Transparency
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                Real-time compute consumption, granular token meters, and zero mysterious background telemetry or synthetic bloat.
              </p>
            </div>

            {/* Principle 3 */}
            <div style={{
              backgroundColor: 'var(--surface-card)',
              padding: '32px',
              borderRadius: '20px',
              border: '1px solid var(--border-hairline)',
              boxShadow: 'var(--shadow-xs)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <span style={{
                fontFamily: 'var(--font-code)',
                fontSize: '11px',
                color: 'var(--agent-legal)',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}>
                03 / ISOLATION
              </span>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                Privacy by Architecture
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--on-surface-variant)', margin: 0 }}>
                Air-gapped enterprise execution tiers with strict DPDP compliance covenants protecting proprietary intellectual assets.
              </p>
            </div>
          </div>
        </section>

        {/* ── LUXURY CTA BANNER ── */}
        <section style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
          <div style={{
            position: 'relative',
            backgroundColor: 'var(--surface-card)',
            borderRadius: '28px',
            padding: '48px 32px',
            border: '1px solid var(--border-hairline)',
            boxShadow: '0 16px 40px rgba(7,9,27,0.06)',
            overflow: 'hidden',
            textAlign: 'center'
          }}>
            {/* Ambient Interior Glows */}
            <div style={{
              position: 'absolute',
              right: '-60px',
              bottom: '-60px',
              width: '280px',
              height: '280px',
              backgroundColor: 'rgba(247,168,89,0.18)',
              borderRadius: '50%',
              filter: 'blur(70px)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              left: '-60px',
              top: '-60px',
              width: '280px',
              height: '280px',
              backgroundColor: 'rgba(165,187,252,0.22)',
              borderRadius: '50%',
              filter: 'blur(70px)',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '580px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--surface-low)',
                padding: '6px 16px',
                borderRadius: '9999px',
                border: '1px solid var(--border-hairline)'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--saffron-glow)' }} />
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Start Building Today
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: 'var(--primary)',
                letterSpacing: '-0.02em',
                fontWeight: 500,
                margin: 0
              }}>
                Build with GriZon AI.
              </h2>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--on-surface-variant)',
                lineHeight: 1.6,
                margin: 0
              }}>
                Join forward-thinking researchers, developers, and enterprises building on India's specialized agent intelligence platform.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '14px', paddingTop: '8px', width: '100%' }}>
                <a
                  href="https://app.grizonai.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 28px',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--on-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(7,9,27,0.2)'
                  }}
                >
                  <span>Start Free with AI</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>bolt</span>
                </a>

                <Link
                  to="/agents"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '12px 26px',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--surface-low)',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: '1px solid var(--border-hairline)'
                  }}
                >
                  <span>Explore Agents</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                </Link>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                paddingTop: '8px',
                color: 'var(--on-surface-variant)',
                fontFamily: 'var(--font-code)',
                fontSize: '11px'
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--agent-dev-studio)' }}>check</span>
                  No Credit Card Required
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--agent-dev-studio)' }}>check</span>
                  Instant 100 Free Credits
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
