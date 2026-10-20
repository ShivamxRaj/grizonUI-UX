import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sovereign.css';

const CODE_EXAMPLES = {
  python: `from grizonai import GriZonClient

# Initialize client with sovereign zero-retention airgap
client = GriZonClient(
    api_key="gz_live_sovereign_7729f8a1e",
    enclave_region="in-west-1" # Statutory Bharat residency
)

# Dispatch autonomous multi-agent task
response = client.agents.dispatch(
    agent="research-recursive-v4",
    query="Audit RBI Master Direction 2024 compliance across cloud VPC",
    temperature=0.1,
    stream=True
)

for chunk in response:
    print(chunk.delta, end="")`,

  typescript: `import { GriZonClient } from '@grizonai/sdk';

const client = new GriZonClient({
  apiKey: process.env.GRIZON_API_KEY,
  region: 'in-west-1', // Sovereign Indian Enclave
  strictDPDP: true
});

// Stream reasoning tree from Dev Studio agent
const stream = await client.agents.stream({
  agent: 'dev-studio-vm',
  task: 'Synthesize distributed transaction coordinator with Redis & Raft',
});

for await (const token of stream) {
  process.stdout.write(token.text);
}`,

  curl: `curl -X POST "https://api.grizonai.com/v1/agents/dispatch" \\
  -H "Authorization: Bearer gz_live_sovereign_7729f8a1e" \\
  -H "Content-Type: application/json" \\
  -H "X-Sovereign-Residency: IN-MUM-1" \\
  -d '{
    "agent": "market-analyst-oracle",
    "query": "Bull vs Bear consensus on TCS.NS Q3 margins",
    "stream": false
  }'`
};

export default function IndusDashboard() {
  const [activeLang, setActiveLang] = useState('python');
  const [activeTab, setActiveTab] = useState('quickstart'); // 'quickstart' | 'keys' | 'models' | 'playground'
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedPip, setCopiedPip] = useState(false);
  const [playgroundQuery, setPlaygroundQuery] = useState('Evaluate counterparty indemnification liability under Indian Contract Act');
  const [isSimulating, setIsSimulating] = useState(false);
  const [playgroundOutput, setPlaygroundOutput] = useState(
    '✓ GriZon Legal Agent: Section 14.3 flagged (Uncapped Consequential Loss). Substitution generated in 0.42s.'
  );

  // API Keys state
  const [apiKeys, setApiKeys] = useState([
    { id: 'key_1', name: 'Production Backend VPC', key: 'gz_live_883a...912f', created: '2026-10-12', scope: 'Full Sovereign Mesh', status: 'Active' },
    { id: 'key_2', name: 'Staging CI/CD Pipeline', key: 'gz_test_412c...008e', created: '2026-10-18', scope: 'Read & Synthesis Only', status: 'Active' }
  ]);
  const [newKeyName, setNewKeyName] = useState('');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_EXAMPLES[activeLang]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const handleCopyPip = () => {
    navigator.clipboard.writeText('pip install grizonai');
    setCopiedPip(true);
    setTimeout(() => setCopiedPip(false), 2200);
  };

  const handleGenerateKey = () => {
    if (!newKeyName.trim()) return;
    const rand = Math.random().toString(36).substring(2, 8);
    setApiKeys(prev => [
      ...prev,
      {
        id: `key_${Date.now()}`,
        name: newKeyName.trim(),
        key: `gz_live_${rand}...${rand.slice(0, 4)}`,
        created: 'Today',
        scope: 'Full Sovereign Mesh',
        status: 'Active'
      }
    ]);
    setNewKeyName('');
  };

  const handleRunPlayground = () => {
    setIsSimulating(true);
    setPlaygroundOutput('Dispatching prompt to isolated hardware micro-VM...');
    setTimeout(() => {
      setIsSimulating(false);
      setPlaygroundOutput(
        `✓ Consensus reached (14ms latency):\n- Hypothesis validated across 3 statutory citations\n- Indian DPDP 2023 Sec 8(5) compliance confirmed\n- Token consumption: 148 tokens (0.012 credits)`
      );
    }, 700);
  };

  return (
    <div className="sv-page" style={{ background: 'var(--parchment)', minHeight: '100vh', paddingTop: '6.5rem', paddingBottom: '5rem' }}>
      {/* ── AMBIENT GLOWS ── */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 24px', overflow: 'hidden' }}>
        <div style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '-8rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '850px',
          height: '420px',
          background: 'radial-gradient(ellipse at center, rgba(247,168,89,0.12) 0%, rgba(16,126,125,0.10) 45%, transparent 70%)',
          filter: 'blur(90px)',
          borderRadius: '9999px'
        }} />

        {/* ── HEADER & EYEBROW ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
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
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--agent-dev-studio)' }} />
            <span style={{
              fontFamily: 'var(--font-code)',
              fontSize: '11px',
              color: 'var(--on-surface-variant)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 600
            }}>
              GriZon Developer Platform • Sovereign SDK v2.4
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            lineHeight: 1.15,
            color: 'var(--primary)',
            letterSpacing: '-0.02em',
            fontWeight: 500,
            marginBottom: '18px'
          }}>
            Build with autonomous agents. <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--agent-dev-studio)' }}>In one line of code.</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--on-surface-variant)',
            maxWidth: '680px',
            margin: '0 auto 28px'
          }}>
            Enterprise Python, TypeScript, and cURL SDKs. Hardware-isolated micro-VM runtimes, sub-20ms inference latency, and certified in-country Indian DPDP 2023 residency.
          </p>

          {/* Quick PIP Install Bar */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 18px',
            borderRadius: '9999px',
            backgroundColor: 'var(--surface-card)',
            border: '1px solid var(--border-hairline)',
            boxShadow: 'var(--shadow-xs)'
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--primary)', fontWeight: 600 }}>
              $ pip install grizonai
            </span>
            <button
              onClick={handleCopyPip}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 10px',
                borderRadius: '9999px',
                backgroundColor: 'var(--surface-low)',
                border: '1px solid var(--border-hairline)',
                color: copiedPip ? 'var(--agent-dev-studio)' : 'var(--primary)',
                fontFamily: 'var(--font-code)',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                {copiedPip ? 'check' : 'content_copy'}
              </span>
              <span>{copiedPip ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </section>

        {/* ── STUDIO NAVIGATION TABS ── */}
        <section style={{ maxWidth: '1060px', margin: '0 auto 24px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px',
            padding: '6px',
            borderRadius: '16px',
            backgroundColor: 'var(--surface-card)',
            border: '1px solid var(--border-hairline)',
            boxShadow: 'var(--shadow-xs)'
          }}>
            <button
              onClick={() => setActiveTab('quickstart')}
              style={{
                flex: 1,
                minWidth: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: activeTab === 'quickstart' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'quickstart' ? '#fff' : 'var(--on-surface-variant)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>code</span>
              <span>Quickstart SDK</span>
            </button>

            <button
              onClick={() => setActiveTab('keys')}
              style={{
                flex: 1,
                minWidth: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: activeTab === 'keys' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'keys' ? '#fff' : 'var(--on-surface-variant)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>key</span>
              <span>API Keys &amp; Secrets</span>
            </button>

            <button
              onClick={() => setActiveTab('models')}
              style={{
                flex: 1,
                minWidth: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: activeTab === 'models' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'models' ? '#fff' : 'var(--on-surface-variant)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>layers</span>
              <span>Model Catalogue</span>
            </button>

            <button
              onClick={() => setActiveTab('playground')}
              style={{
                flex: 1,
                minWidth: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: activeTab === 'playground' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'playground' ? '#fff' : 'var(--on-surface-variant)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>play_circle</span>
              <span>Live API Playground</span>
            </button>
          </div>
        </section>

        {/* ── TAB CONTENT ── */}
        <section style={{ maxWidth: '1060px', margin: '0 auto' }}>

          {/* TAB 1: QUICKSTART SDK CODE VIEWER */}
          {activeTab === 'quickstart' && (
            <div style={{
              borderRadius: '24px',
              backgroundColor: '#07091B',
              color: '#FFFFFF',
              boxShadow: '0 20px 50px rgba(7,9,27,0.25)',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden'
            }}>
              {/* Terminal Title Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                backgroundColor: '#0c0f2b'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  <span style={{ fontFamily: 'var(--font-code)', fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginLeft: '8px' }}>
                    grizon-agent-dispatch.{activeLang === 'python' ? 'py' : activeLang === 'typescript' ? 'ts' : 'sh'}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {/* Language Switcher */}
                  <div style={{ display: 'flex', gap: '4px', backgroundColor: 'rgba(255,255,255,0.06)', padding: '3px', borderRadius: '8px' }}>
                    {['python', 'typescript', 'curl'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveLang(lang)}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          border: 'none',
                          backgroundColor: activeLang === lang ? '#107E7D' : 'transparent',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-code)',
                          fontSize: '11px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          textTransform: 'uppercase'
                        }}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleCopyCode}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      border: 'none',
                      color: copiedCode ? '#34d399' : '#FFFFFF',
                      fontFamily: 'var(--font-code)',
                      fontSize: '11px',
                      cursor: 'pointer'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                      {copiedCode ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <pre style={{
                margin: 0,
                padding: '24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                lineHeight: 1.65,
                color: '#e2e8f0',
                overflowX: 'auto'
              }}>
                <code>{CODE_EXAMPLES[activeLang]}</code>
              </pre>

              {/* Bottom Feature Strip */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 24px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                backgroundColor: 'rgba(0,0,0,0.2)',
                fontSize: '11px',
                fontFamily: 'var(--font-code)',
                color: 'rgba(255,255,255,0.6)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span>Latency: <strong style={{ color: '#34d399' }}>18ms</strong></span>
                  <span>Throughput: <strong style={{ color: '#38bdf8' }}>142 tok/sec</strong></span>
                  <span>Region: <strong style={{ color: '#F7A859' }}>in-west-1 (Mumbai)</strong></span>
                </div>
                <span style={{ color: '#34d399' }}>● 100% Deterministic Cryptographic Proof</span>
              </div>
            </div>
          )}

          {/* TAB 2: API KEYS & SECRETS MANAGER */}
          {activeTab === 'keys' && (
            <div style={{
              borderRadius: '24px',
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border-hairline)',
              boxShadow: 'var(--shadow-sm)',
              padding: '28px'
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', gap: '16px' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--primary)', margin: 0 }}>
                    Sovereign API Tokens
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--on-surface-variant)', margin: '4px 0 0' }}>
                    Air-gapped tokens with strict zero-data retention covenants. Keys never expire unless revoked.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="text"
                    value={newKeyName}
                    onChange={(e) => setNewKeyName(e.target.value)}
                    placeholder="Key name (e.g. Legal Agent Prod)"
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-hairline)',
                      backgroundColor: 'var(--surface-low)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      outline: 'none',
                      color: 'var(--primary)'
                    }}
                  />
                  <button
                    onClick={handleGenerateKey}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--primary)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
                    <span>Generate Secret</span>
                  </button>
                </div>
              </div>

              {/* Keys Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'var(--font-body)', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-hairline)', color: 'var(--outline)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase' }}>
                      <th style={{ padding: '12px 14px' }}>Name</th>
                      <th style={{ padding: '12px 14px' }}>Secret Token</th>
                      <th style={{ padding: '12px 14px' }}>Scope</th>
                      <th style={{ padding: '12px 14px' }}>Created</th>
                      <th style={{ padding: '12px 14px' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiKeys.map((k) => (
                      <tr key={k.id} style={{ borderBottom: '1px solid var(--border-hairline)' }}>
                        <td style={{ padding: '14px', fontWeight: 600, color: 'var(--primary)' }}>{k.name}</td>
                        <td style={{ padding: '14px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--on-surface-variant)' }}>
                          {k.key}
                        </td>
                        <td style={{ padding: '14px' }}>
                          <span style={{ padding: '2px 8px', borderRadius: '9999px', backgroundColor: 'var(--surface-low)', fontFamily: 'var(--font-code)', fontSize: '11px', border: '1px solid var(--border-hairline)' }}>
                            {k.scope}
                          </span>
                        </td>
                        <td style={{ padding: '14px', color: 'var(--outline)' }}>{k.created}</td>
                        <td style={{ padding: '14px' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#10b981', fontWeight: 600, fontSize: '12px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                            {k.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: MODEL CATALOGUE */}
          {activeTab === 'models' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {[
                {
                  id: 'grizon-105b-conversations',
                  name: 'GriZon 105B Sovereign Core',
                  tag: 'General Intelligence',
                  desc: 'Flagship multilingual reasoning engine with native grounding across Hindi, Marathi, Tamil, Telugu, and English.',
                  context: '128k Tokens',
                  latency: '24ms'
                },
                {
                  id: 'research-recursive-v4',
                  name: 'Recursive Research Engine v4',
                  tag: 'Deep Epistemics',
                  desc: '48-node branching hypothesis synthesis across 4.2B+ primary sources with zero hallucination guarantee.',
                  context: '200k Tokens',
                  latency: '380ms'
                },
                {
                  id: 'dev-studio-vm',
                  name: 'Dev Studio System Architect',
                  tag: 'Deterministic Code',
                  desc: 'Full-stack application code generation, ephemeral micro-VM execution, and Mermaid cloud architecture synthesis.',
                  context: '64k Tokens',
                  latency: '18ms'
                },
                {
                  id: 'legal-dpdp-audit',
                  name: 'Sovereign Legal Redline Engine',
                  tag: 'Statutory Compliance',
                  desc: 'Strictly aligned with Indian Digital Personal Data Protection Act 2023 and Indian Contract Act 1872 precedents.',
                  context: '100k Tokens',
                  latency: '420ms'
                }
              ].map((m) => (
                <div
                  key={m.id}
                  style={{
                    backgroundColor: 'var(--surface-card)',
                    padding: '24px',
                    borderRadius: '20px',
                    border: '1px solid var(--border-hairline)',
                    boxShadow: 'var(--shadow-xs)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--outline)', letterSpacing: '0.06em' }}>
                        {m.tag}
                      </span>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px', backgroundColor: 'var(--surface-low)', color: 'var(--primary)' }}>
                        {m.context}
                      </span>
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 700, color: 'var(--primary)', margin: '0 0 8px' }}>
                      {m.name}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.5, color: 'var(--on-surface-variant)', margin: 0 }}>
                      {m.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '16px', marginTop: '16px', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '11px' }}>
                    <span style={{ color: 'var(--outline)' }}>Model ID: <code style={{ color: 'var(--primary)' }}>{m.id}</code></span>
                    <span style={{ color: '#10b981', fontWeight: 600 }}>{m.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: LIVE API PLAYGROUND */}
          {activeTab === 'playground' && (
            <div style={{
              borderRadius: '24px',
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border-hairline)',
              boxShadow: 'var(--shadow-sm)',
              padding: '28px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--outline)', marginBottom: '8px' }}>
                  Target Query &amp; Execution Payload
                </label>
                <textarea
                  rows={6}
                  value={playgroundQuery}
                  onChange={(e) => setPlaygroundQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--surface-low)',
                    border: '1px solid var(--border-hairline)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: 'var(--primary)',
                    outline: 'none',
                    resize: 'none'
                  }}
                />

                <button
                  onClick={handleRunPlayground}
                  disabled={isSimulating}
                  style={{
                    marginTop: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: isSimulating ? 'wait' : 'pointer',
                    boxShadow: '0 4px 14px rgba(7,9,27,0.2)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    {isSimulating ? 'sync' : 'play_arrow'}
                  </span>
                  <span>{isSimulating ? 'Executing in Micro-VM...' : 'Dispatch Live API Call'}</span>
                </button>
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--outline)', marginBottom: '8px' }}>
                  Response Dispatch Stream
                </label>
                <div style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#07091B',
                  color: '#34d399',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12.5px',
                  lineHeight: 1.6,
                  minHeight: '160px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  {playgroundOutput}
                </div>
              </div>
            </div>
          )}

        </section>

        {/* ── ENTERPRISE SOVEREIGN GUARANTEES ── */}
        <section style={{ maxWidth: '1060px', margin: '4.5rem auto 0', textAlign: 'center' }}>
          <div style={{
            padding: '36px',
            borderRadius: '24px',
            backgroundColor: 'var(--surface-card)',
            border: '1px solid var(--border-hairline)',
            boxShadow: 'var(--shadow-xs)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--primary)', fontWeight: 600 }}>
                99.99%
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700, color: 'var(--primary)', marginTop: '4px' }}>
                Enterprise Uptime SLA
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--on-surface-variant)', margin: '4px 0 0' }}>
                Multi-region fault tolerant
              </p>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--primary)', fontWeight: 600 }}>
                &lt; 20ms
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700, color: 'var(--primary)', marginTop: '4px' }}>
                Inference Latency
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--on-surface-variant)', margin: '4px 0 0' }}>
                Native Indian data centers
              </p>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--primary)', fontWeight: 600 }}>
                Air-Gapped
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700, color: 'var(--primary)', marginTop: '4px' }}>
                Zero Telemetry Leak
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--on-surface-variant)', margin: '4px 0 0' }}>
                VPC &amp; on-premise certified
              </p>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--primary)', fontWeight: 600 }}>
                DPDP 2023
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700, color: 'var(--primary)', marginTop: '4px' }}>
                Statutory Compliance
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--on-surface-variant)', margin: '4px 0 0' }}>
                Audit-ready cryptographic logs
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
