import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sovereign.css';

export default function DevStudio({ defaultWorkbench = 'canvas' }) {
  const [workbenchView, setWorkbenchView] = useState(defaultWorkbench);
  const [isRunningVM, setIsRunningVM] = useState(false);
  const [activeTabCode, setActiveTabCode] = useState('SecurityLedger.tsx');

  useEffect(() => {
    setWorkbenchView(defaultWorkbench);
  }, [defaultWorkbench]);

  const handleRunVM = () => {
    setIsRunningVM(true);
    setTimeout(() => {
      setIsRunningVM(false);
      alert('VM Execution complete: 0 warnings, 256-bit proof validated.');
    }, 600);
  };

  return (
    <div className="sv-page" style={{ background: 'var(--parchment)', minHeight: '100vh', paddingTop: '5.5rem' }}>
      {/* Subtle Ambient Glow Orbs */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 1.5rem 5rem', overflow: 'hidden' }}>
        <div style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '-10rem',
          right: '25%',
          width: '640px',
          height: '640px',
          background: 'radial-gradient(circle, rgba(247,168,89,0.12) 0%, rgba(165,187,252,0.15) 50%, transparent 70%)',
          filter: 'blur(90px)'
        }} />
        <div style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '24rem',
          left: '-8rem',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(165,187,252,0.18) 0%, rgba(229,222,255,0.12) 50%, transparent 70%)',
          filter: 'blur(90px)'
        }} />

        {/* Page Breadcrumb & Category Bar */}
        <section style={{ paddingTop: '1.5rem', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <nav style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--on-surface-variant)' }}>
              <Link to="/agents" style={{ color: 'inherit', textDecoration: 'none' }}>Agents</Link>
              <span style={{ color: 'var(--outline-variant)' }}>/</span>
              <span>Engineering</span>
              <span style={{ color: 'var(--outline-variant)' }}>/</span>
              <span style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                Dev Studio & System Architect
                <span style={{ padding: '0.15rem 0.5rem', borderRadius: '9999px', background: 'rgba(247,168,89,0.2)', color: 'var(--on-secondary-fixed)', fontSize: '10px', fontWeight: 700 }}>PRO+</span>
              </span>
            </nav>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'var(--surface-container)', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-code)', fontSize: '11px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
                Micro-VM Sandbox Active
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: '#fff', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-code)', fontSize: '11px', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--agent-dev-studio)' }}>code_blocks</span>
                v4.8 Dual Core
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section style={{ paddingTop: '1.5rem', paddingBottom: '3.5rem' }}>
          <div style={{ maxWidth: '880px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.03)', width: 'fit-content' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, color: 'var(--primary)' }}>
                Full-Stack Intelligence · Sandbox Runtimes
              </span>
              <span style={{ color: 'var(--outline-variant)' }}>·</span>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>
                Engine v4.2 Sovereign
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: 'var(--primary)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
              Code at thought velocity.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--on-surface-variant)' }}>Architectural clarity</span> at scale.
            </h1>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', lineHeight: '1.65', color: 'var(--on-surface-variant)', maxWidth: '680px', margin: 0 }}>
              Dev Studio empowers developers to write, debug, and iterate on full-stack code with execution runtimes and instant live HTML/CSS canvas preview. Paired with System Architect for high-availability cloud blueprints, database schemas, and microservice trade-offs.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', paddingTop: '0.5rem' }}>
              <a
                href="#workbench-showcase"
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
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>terminal</span>
                Launch Dev Sandbox
              </a>
              <a
                href="#system-blueprints"
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
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>account_tree</span>
                Explore Cloud Blueprints
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--on-surface-variant)', fontSize: '12px', paddingLeft: '0.5rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--agent-dev-studio)' }}>verified</span>
                <span>256-bit isolated micro-VMs</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', padding: '0.75rem', borderRadius: '16px', background: 'var(--surface-low)', boxShadow: '0 1px 4px rgba(0,0,0,0.02)' }}>
            <div style={{ padding: '1rem', borderRadius: '12px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Hot Reload</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--agent-dev-studio)' }}>bolt</span>
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>Sub-250ms</div>
                <div style={{ fontSize: '12px', color: 'var(--on-surface-variant)', marginTop: '0.15rem' }}>Instant live canvas synthesis</div>
              </div>
            </div>

            <div style={{ padding: '1rem', borderRadius: '12px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Execution</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--saffron-glow)' }}>memory</span>
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>Zero-Config</div>
                <div style={{ fontSize: '12px', color: 'var(--on-surface-variant)', marginTop: '0.15rem' }}>Ephemeral micro-VM runtimes</div>
              </div>
            </div>

            <div style={{ padding: '1rem', borderRadius: '12px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Visual Panel</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--agent-deep-research)' }}>preview</span>
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>Live HTML / CSS</div>
                <div style={{ fontSize: '12px', color: 'var(--on-surface-variant)', marginTop: '0.15rem' }}>Tailwind responsive preview</div>
              </div>
            </div>

            <div style={{ padding: '1rem', borderRadius: '12px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Architecture</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--agent-legal)' }}>hub</span>
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>Mermaid & UML</div>
                <div style={{ fontSize: '12px', color: 'var(--on-surface-variant)', marginTop: '0.15rem' }}>Deterministic topology graphs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Dev Studio & Architecture Console Showcase */}
        <section id="workbench-showcase" style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--agent-dev-studio)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
                Live Studio Environment
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: 'var(--primary)', margin: 0 }}>
                Dual-Pane Sovereign Workbench
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--on-surface-variant)', marginTop: '0.35rem', maxWidth: '640px' }}>
                Watch reasoning in TypeScript, automated runtime execution, and side-by-side rendering with instant system topology switching.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', padding: '0.35rem', borderRadius: '12px', background: 'var(--surface-container)', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
              <button
                onClick={() => setWorkbenchView('canvas')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  background: workbenchView === 'canvas' ? '#fff' : 'transparent',
                  color: workbenchView === 'canvas' ? 'var(--primary)' : 'var(--on-surface-variant)',
                  boxShadow: workbenchView === 'canvas' ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--agent-dev-studio)' }}>devices</span>
                Interactive UI Canvas
              </button>
              <button
                onClick={() => setWorkbenchView('arch')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  background: workbenchView === 'arch' ? '#fff' : 'transparent',
                  color: workbenchView === 'arch' ? 'var(--primary)' : 'var(--on-surface-variant)',
                  boxShadow: workbenchView === 'arch' ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>account_tree</span>
                System Architecture Topology
              </button>
            </div>
          </div>

          {/* Workbench Frame */}
          <div style={{ borderRadius: '16px', background: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.06)', border: '1px solid var(--border-hairline)', overflow: 'hidden' }}>
            {/* Top Toolbar */}
            <div style={{ padding: '0.75rem 1.25rem', background: 'var(--surface-low)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', borderBottom: '1px solid var(--border-hairline)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', background: '#ff5f56' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', background: '#ffbd2e' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', background: '#27c93f' }} />
                </div>
                <span style={{ color: 'var(--outline-variant)', fontSize: '12px' }}>|</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#fff', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--primary)', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--agent-dev-studio)' }}>terminal</span>
                  <span>apps/sovereign-vault/SecurityLedger.tsx</span>
                </div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)' }}>
                  TypeScript 5.4 · React 18.3
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'rgba(16,126,125,0.1)', color: 'var(--agent-dev-studio)', fontFamily: 'var(--font-code)', fontSize: '11px', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
                  Runtime Verified (0 warnings)
                </span>
                <button
                  onClick={handleRunVM}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '6px',
                    background: 'var(--primary)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>play_arrow</span>
                  {isRunningVM ? 'Running...' : 'Run VM'}
                </button>
              </div>
            </div>

            {/* Split Screen Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', minHeight: '540px' }}>
              {/* Left Pane: Code Editor */}
              <div style={{ padding: '1.5rem', background: 'var(--primary)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowX: 'auto' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', marginBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--saffron-glow)' }}>Dev Studio Pilot</span>
                      <span>·</span>
                      <span>Autonomous Refactor Mode</span>
                    </div>
                    <span>Line 24:1 · UTF-8</span>
                  </div>

                  <pre style={{ margin: 0, fontFamily: 'var(--font-code)', fontSize: '12px', lineHeight: 1.6, color: '#fff' }}>
                    <code>
{`<span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>import</span> React, { useState, useEffect } <span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>from</span> <span style={{ color: "var(--lavender-subtle)" }}>'react'</span>;
<span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>import</span> { SovereignEnclave, type AuditLog } <span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>from</span> <span style={{ color: "var(--lavender-subtle)" }}>'@grizon/crypto'</span>;

<span style={{ color: "var(--outline)", fontStyle: "italic" }}>// Autonomous AI Review: Verified 256-bit Ephemeral State</span>
<span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>export const</span> <span style={{ color: "var(--secondary-fixed)", fontWeight: "700" }}>LedgerComplianceWidget</span>: React.FC = () => {
  <span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>const</span> [status, setStatus] = useState<<span style={{ color: "var(--lavender-subtle)" }}>'active' | 'syncing'</span>>(<span style={{ color: "var(--lavender-subtle)" }}>'active'</span>);
  <span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>const</span> [clusterPing, setClusterPing] = useState<<span style={{ color: "var(--lavender-subtle)" }}>number</span>>(14.2);

  <span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>const</span> runSecurityAudit = <span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>async</span> () => {
    <span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>const</span> enclave = <span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>await</span> SovereignEnclave.initialize({
      vaultId: <span style={{ color: "var(--lavender-subtle)" }}>"in-blr-zone-01"</span>,
      zeroTrainingGuarantee: <span style={{ color: "var(--lavender-subtle)" }}>true</span>,
      hardwareIsolation: <span style={{ color: "var(--lavender-subtle)" }}>"Nitro-Enclave"</span>
    });
    <span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>return</span> enclave.generateProof();
  };

  <span style={{ color: "var(--saffron-glow)", fontWeight: "600" }}>return</span> (
    <div className="p-6 rounded-2xl bg-surface-card border">
      <ComplianceHeader ping={clusterPing} />
      <SovereignTelemetry activeNodes={8} />
    </div>
  );
};`}
                    </code>
                  </pre>
                </div>

                <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '10px', background: 'rgba(30,32,51,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-code)', fontSize: '11px', color: '#fff', fontWeight: 600 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--saffron-glow)' }}>psychology</span>
                      Dev Studio Inline Guard
                    </div>
                    <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', padding: '0.15rem 0.4rem', borderRadius: '4px', background: 'rgba(16,126,125,0.2)', color: 'var(--agent-dev-studio)' }}>
                      PASSED 100%
                    </span>
                  </div>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>
                    No secret leaks detected. Memory footprint bounded under 8.4 MB. Cryptographic proof generator verified against sovereign PKI node.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', marginTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-code)', fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>
                    <span>Runtime: Node 20.x Alpine Sandbox</span>
                    <span>Latency: 18ms</span>
                  </div>
                </div>
              </div>

              {/* Right Pane: Live HTML/Tailwind Canvas OR System Topology */}
              <div style={{ padding: '1.5rem', background: 'var(--parchment)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {workbenchView === 'canvas' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
                        <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                          Live HTML/Tailwind Canvas
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <span style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#fff', fontSize: '10px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
                          Responsive 375×667
                        </span>
                        <span style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#fff', fontSize: '10px', fontFamily: 'var(--font-code)', color: 'var(--on-surface-variant)', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
                          60 FPS
                        </span>
                      </div>
                    </div>

                    {/* Component Rendering Simulator */}
                    <div style={{ padding: '1.5rem', borderRadius: '16px', background: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', border: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--saffron-glow)' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>shield</span>
                          </div>
                          <div>
                            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: 'var(--primary)' }}>Sovereign Vault Ledger</div>
                            <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>Cluster Zone: in-blr-zone-01</div>
                          </div>
                        </div>
                        <span style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'rgba(16,126,125,0.1)', color: 'var(--agent-dev-studio)', fontFamily: 'var(--font-code)', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
                          SYNCED
                        </span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                        <div style={{ padding: '0.85rem', borderRadius: '10px', background: 'var(--surface-low)' }}>
                          <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Cluster Latency</div>
                          <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary)', margin: '0.2rem 0' }}>14.2 ms</div>
                          <div style={{ fontSize: '10px', color: 'var(--agent-dev-studio)' }}>↓ 3.1ms from baseline</div>
                        </div>
                        <div style={{ padding: '0.85rem', borderRadius: '10px', background: 'var(--surface-low)' }}>
                          <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Active Proofs</div>
                          <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary)', margin: '0.2rem 0' }}>48,219</div>
                          <div style={{ fontSize: '10px', color: 'var(--on-surface-variant)' }}>Zero collision rate</div>
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', marginBottom: '0.35rem' }}>
                          <span>Hardware Enclave Allocation</span>
                          <span style={{ color: 'var(--primary)', fontWeight: 600 }}>92.4% Optimal</span>
                        </div>
                        <div style={{ width: '100%', height: '6px', borderRadius: '9999px', background: 'var(--surface-container)', overflow: 'hidden' }}>
                          <div style={{ width: '92.4%', height: '100%', background: 'var(--primary)', borderRadius: '9999px' }} />
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: 'var(--on-surface-variant)', paddingTop: '0.5rem', borderTop: '1px solid var(--border-hairline)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--agent-dev-studio)' }}>check_circle</span>
                          Zero Data Retention
                        </span>
                        <button style={{ padding: '0.3rem 0.75rem', borderRadius: '4px', background: 'var(--surface-container)', color: 'var(--primary)', border: 'none', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px', cursor: 'pointer' }}>
                          Download Proof
                        </button>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 1rem', borderRadius: '8px', background: '#fff', border: '1px solid var(--border-hairline)', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
                        Hot reloaded in 142ms via GriZon Vite Sandbox
                      </span>
                      <span style={{ color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}>Inspect DOM →</span>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: 'var(--agent-deep-research)' }} />
                        <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                          System Architect · Topology Synthesis
                        </span>
                      </div>
                      <span style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'rgba(60,75,155,0.1)', color: 'var(--agent-deep-research)', fontFamily: 'var(--font-code)', fontSize: '11px', fontWeight: 600 }}>
                        Mermaid / PlantUML
                      </span>
                    </div>

                    {/* Architecture Topology Diagram */}
                    <div style={{ padding: '1.5rem', borderRadius: '16px', background: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', border: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>
                        <span>Microservice Blueprints & Latency Flow</span>
                        <span style={{ color: 'var(--agent-dev-studio)', fontWeight: 700 }}>HA Tier: 99.995% SLA</span>
                      </div>

                      {/* Node Flow */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ padding: '0.85rem 1rem', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '11px' }}>GW</span>
                            <div>
                              <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--primary)' }}>Sovereign API Gateway</div>
                              <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>Rate Limiting · mTLS Termination · Geofencing</div>
                            </div>
                          </div>
                          <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-dev-studio)', fontWeight: 700 }}>2.1ms</span>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--outline-variant)' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>south</span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          <div style={{ padding: '0.85rem', borderRadius: '10px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--agent-legal)', fontWeight: 700 }}>
                              <span>NODE A</span>
                              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lock</span>
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '12px', color: 'var(--primary)', margin: '0.2rem 0' }}>Sovereign Auth Enclave</div>
                            <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>Ed25519 Token Ring</div>
                          </div>

                          <div style={{ padding: '0.85rem', borderRadius: '10px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--agent-dev-studio)', fontWeight: 700 }}>
                              <span>NODE B</span>
                              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>terminal</span>
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '12px', color: 'var(--primary)', margin: '0.2rem 0' }}>Ephemeral VM Fleet</div>
                            <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>Firecracker microVM</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--outline-variant)' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>south</span>
                        </div>

                        <div style={{ padding: '0.85rem 1rem', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--agent-deep-research)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '11px' }}>DB</span>
                            <div>
                              <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--primary)' }}>Sovereign State Cluster</div>
                              <div style={{ fontFamily: 'var(--font-code)', fontSize: '10px', color: 'var(--on-surface-variant)' }}>PostgreSQL Partitioned + Redis L2 Cache</div>
                            </div>
                          </div>
                          <span style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-dev-studio)', fontWeight: 700 }}>6.8ms</span>
                        </div>
                      </div>

                      <div style={{ padding: '0.85rem 1rem', borderRadius: '10px', background: 'rgba(255,219,199,0.35)', color: 'var(--on-secondary-fixed)' }}>
                        <div style={{ fontFamily: 'var(--font-code)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lightbulb</span>
                          Architect Trade-off Synthesis
                        </div>
                        <p style={{ fontSize: '12px', lineHeight: 1.5, margin: 0 }}>
                          Recommending dual-region active-passive replication to adhere to DPDP data locality mandates without increasing query latency beyond 20ms.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div style={{ paddingTop: '1.25rem', marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid var(--border-hairline)', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
                    Canvas Sync: Zero Lag
                  </div>
                  <div>Code Export: .tsx / .py / Docker · <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Credits: 2 / run</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Engine Deep-Dive Section */}
        <section id="system-blueprints" style={{ marginBottom: '4.5rem' }}>
          <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--agent-dev-studio)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
              Dual Intelligence Cores
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: 'var(--primary)', margin: 0 }}>
              From micro-functions to macro cloud topologies.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--on-surface-variant)', marginTop: '0.5rem', lineHeight: 1.6 }}>
              Dev Studio handles the lines of code you ship every minute. System Architect maps the enterprise architecture that powers your mission-critical availability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {/* Core Engine 01: Dev Studio */}
            <div style={{ padding: '2rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 8px 24px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16,126,125,0.1)', color: 'var(--agent-dev-studio)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>code</span>
                  </div>
                  <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'var(--surface-container)', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                    Core Engine 01
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--primary)', margin: '0 0 0.5rem' }}>
                  Dev Studio Pilot
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--on-surface-variant)', marginBottom: '1.25rem' }}>
                  Full-stack coding, intelligent debugging, isolated micro-VM executions, and live visual UI rendering. Write in your favourite stack and preview instantly.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '13px', color: 'var(--on-surface-variant)' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--agent-dev-studio)', flexShrink: 0 }}>check_circle</span>
                    <span><strong style={{ color: 'var(--primary)' }}>Live HTML/Tailwind Canvas:</strong> Real-time hot-reloading side-by-side component preview.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--agent-dev-studio)', flexShrink: 0 }}>check_circle</span>
                    <span><strong style={{ color: 'var(--primary)' }}>Zero-Config Runtimes:</strong> Python, Node, React, and Rust execution without local environment headaches.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--agent-dev-studio)', flexShrink: 0 }}>check_circle</span>
                    <span><strong style={{ color: 'var(--primary)' }}>Inline Vulnerability Guard:</strong> Real-time scanning for SQL injection, leaked secrets, and OWASP Top 10 flaws.</span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1.5rem', marginTop: '1.5rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '12px', color: 'var(--on-surface-variant)' }}>Cost: 1 to 2 Credits / execution</span>
                <a href="#workbench-showcase" style={{ color: 'var(--agent-dev-studio)', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}>Launch Dev Studio →</a>
              </div>
            </div>

            {/* Core Engine 02: System Architect */}
            <div style={{ padding: '2rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 8px 24px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(60,75,155,0.1)', color: 'var(--agent-deep-research)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>account_tree</span>
                  </div>
                  <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(247,168,89,0.2)', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-secondary-fixed)', fontWeight: 700 }}>
                    Pro+ Specialised
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--primary)', margin: '0 0 0.5rem' }}>
                  System Architect
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--on-surface-variant)', marginBottom: '1.25rem' }}>
                  Enterprise system design, database schemas, cloud blueprints, microservice trade-offs, database migrations, and latency modeling for mission-critical scale.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '13px', color: 'var(--on-surface-variant)' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--agent-deep-research)', flexShrink: 0 }}>check_circle</span>
                    <span><strong style={{ color: 'var(--primary)' }}>Cloud Blueprint Generation:</strong> AWS, Azure, GCP, and Sovereign On-Prem topologies synthesized in Mermaid/PlantUML.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--agent-deep-research)', flexShrink: 0 }}>check_circle</span>
                    <span><strong style={{ color: 'var(--primary)' }}>Schema & Migration Engines:</strong> Automatic PostgreSQL, ClickHouse, and MongoDB schema optimization with zero data loss.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--agent-deep-research)', flexShrink: 0 }}>check_circle</span>
                    <span><strong style={{ color: 'var(--primary)' }}>CAP Theorem Trade-Off Lenses:</strong> Clear side-by-side comparison of consistency vs latency vs availability costs.</span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1.5rem', marginTop: '1.5rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '12px', color: 'var(--on-surface-variant)' }}>Cost: 5 Credits / blueprint</span>
                <a href="#workbench-showcase" onClick={() => setWorkbenchView('arch')} style={{ color: 'var(--agent-deep-research)', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}>Design Architecture →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Heroic CTA Banner */}
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
            <div style={{
              position: 'absolute',
              bottom: '-6rem',
              left: '-6rem',
              width: '380px',
              height: '380px',
              background: 'radial-gradient(circle, rgba(165,187,252,0.2) 0%, transparent 70%)',
              borderRadius: '9999px',
              filter: 'blur(70px)'
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.1)', color: 'var(--saffron-glow)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', width: 'fit-content' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--saffron-glow)' }} />
                Ready for Autonomous Engineering
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#fff', margin: 0, lineHeight: 1.15 }}>
                Build your next system with <span style={{ fontStyle: 'italic', color: 'var(--saffron-glow)' }}>sovereign precision</span>.
              </h2>

              <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
                Start free with 500 Credits on your Pro trial or schedule an Enterprise demo to deploy dedicated sovereign runtimes within your private cloud.
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
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>rocket_launch</span>
                  Start Free with 500 Credits
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
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>corporate_fare</span>
                  Schedule Enterprise Demo
                </Link>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'rgba(255,255,255,0.6)', paddingTop: '0.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--agent-dev-studio)' }}>verified</span>
                  No credit card required for trial
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--agent-dev-studio)' }}>verified</span>
                  Zero training on private repos
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--agent-dev-studio)' }}>verified</span>
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
