import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

export default function IndusDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [buildExpanded, setBuildExpanded] = useState(true);
  const [playgroundExpanded, setPlaygroundExpanded] = useState(true);
  const [copied, setCopied] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sdkPrompt = `You're building on GriZon AI in this project. All we need is working API call - nothing more.

1. Install the GriZon SDK - pip install grizonai
2. Create a .env file with GRIZON_API_KEY=, and add .env to .gitignore. Read key from environment; never hardcode or print it.
3. Write one short script that initializes the GriZon client and makes a chat completion call with the grizon-105b-conversations model, then prints the reply.
4. Stop here and tell me to paste my key into .env. Don't work around the missing key - no dummy values.
5. When I confirm key is in, run script and show me the output.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sdkPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="indus-layout">
      {/* ── FAR-LEFT NARROW ICON RAIL (56px) ────────────────────── */}
      <div className="indus-rail">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          {/* Grizon Brand Logo Mark (Same as Grizon.ai) */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6a88e2 0%, #1e2040 100%)',
              boxShadow: '0 4px 12px rgba(106, 136, 226, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </Link>

          {/* Rail Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
            <button
              onClick={() => setActiveTab('home')}
              title="Home"
              className={`indus-rail-btn ${activeTab === 'home' ? 'active' : ''}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </button>

            <button
              onClick={() => setActiveTab('api-keys')}
              title="Build & APIs"
              className={`indus-rail-btn ${activeTab === 'api-keys' ? 'active' : ''}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </button>

            <button
              onClick={() => setActiveTab('playground')}
              title="Playground"
              className={`indus-rail-btn ${activeTab === 'playground' ? 'active' : ''}`}
            >
              <polygon points="5 3 19 12 5 21 5 3"/>
            </button>

            <button
              onClick={() => setActiveTab('models')}
              title="Model Catalogue"
              className={`indus-rail-btn ${activeTab === 'models' ? 'active' : ''}`}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </button>
          </div>
        </div>

        {/* Bottom Rail User Avatar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#a855f7',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            S
          </div>
        </div>
      </div>

      {/* ── EXPANDABLE SECONDARY SIDEBAR PANEL (230px) ──────────── */}
      {!sidebarCollapsed && (
        <aside className="indus-panel">
          {/* Header title */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '14px',
            marginBottom: '12px',
            borderBottom: '1px solid #f1f5f9'
          }}>
            <div style={{ fontWeight: '700', fontSize: '16px', color: '#0f172a', letterSpacing: '-0.2px' }}>
              Sarvam API
            </div>
            <button
              onClick={() => setSidebarCollapsed(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
              </svg>
            </button>
          </div>

          {/* Main nav items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <button
              onClick={() => setActiveTab('home')}
              className={`indus-nav-btn ${activeTab === 'home' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              </svg>
              <span>Home</span>
            </button>

            {/* Build Accordion */}
            <div style={{ marginTop: '12px' }}>
              <button
                onClick={() => setBuildExpanded(!buildExpanded)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#64748b',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>Build</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ transform: buildExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {buildExpanded && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '8px', marginTop: '4px' }}>
                  {[
                    { id: 'api-keys', label: 'API Keys', icon: '🔑' },
                    { id: 'mcp', label: 'MCP', icon: '⚙️' },
                    { id: 'models', label: 'Model Catalogue', icon: '🌐' },
                    { id: 'usage', label: 'Usage', icon: '⏱️' },
                    { id: 'billing', label: 'Billing', icon: '💳' },
                    { id: 'pricing', label: 'Pricing', icon: '🏷️' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`indus-nav-btn ${activeTab === item.id ? 'active' : ''}`}
                    >
                      <span style={{ fontSize: '13px' }}>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* API Playground Accordion */}
            <div style={{ marginTop: '12px' }}>
              <button
                onClick={() => setPlaygroundExpanded(!playgroundExpanded)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#64748b',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>API Playground</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ transform: playgroundExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {playgroundExpanded && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '8px', marginTop: '4px' }}>
                  {[
                    { id: 'chat-completions', label: 'Chat Completions', icon: '💬' },
                    { id: 'text-to-speech', label: 'Text to Speech', icon: '🗣️' },
                    { id: 'voice-cloning', label: 'Voice Cloning', icon: '🎙️' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`indus-nav-btn ${activeTab === item.id ? 'active' : ''}`}
                    >
                      <span style={{ fontSize: '13px' }}>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom links */}
            <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <button className="indus-nav-btn" style={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>📢</span>
                  <span>What's new</span>
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '2px 6px',
                  borderRadius: '999px',
                  background: '#dcfce7',
                  color: '#15803d'
                }}>New</span>
              </button>

              <button className="indus-nav-btn">
                <span>⚡</span>
                <span>API Status</span>
              </button>

              <button className="indus-nav-btn">
                <span>📚</span>
                <span>Documentation</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* ── MAIN API PLATFORM CONTENT ────────────────────────────── */}
      <main style={{
        flex: 1,
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Top Header Bar */}
        <header style={{
          padding: '16px 32px',
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {sidebarCollapsed && (
              <button
                onClick={() => setSidebarCollapsed(false)}
                style={{
                  background: '#f1f5f9',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '6px',
                  cursor: 'pointer',
                  display: 'flex'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <line x1="9" y1="3" x2="9" y2="21"/>
                </svg>
              </button>
            )}
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a', margin: 0 }}>
              {activeTab === 'home' ? 'Home' : activeTab.toUpperCase()}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/app" style={{
              fontSize: '13px',
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '6px 12px',
              borderRadius: '999px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe'
            }}>
              Switch to Chat App Workspace →
            </Link>

            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '999px',
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              fontSize: '13px',
              fontWeight: '500',
              color: '#334155',
              cursor: 'pointer'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Feedback</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div style={{ padding: '36px 40px', maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
          {/* Paste Into Coding Agent Prompt Box (Sarvam Indus Style) */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '28px',
            marginBottom: '40px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                  Paste this into any coding agent
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b' }}>
                  Cursor, Claude Code, Codex, whatever you use. It installs the GriZon SDK, adds your API key, and makes your first GriZon call.
                </p>
              </div>

              <button
                onClick={handleCopy}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: '1px solid #cbd5e1',
                  background: copied ? '#f0fdf4' : '#f8fafc',
                  color: copied ? '#166534' : '#0f172a',
                  fontSize: '13.5px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
                <span>{copied ? 'Copied!' : 'Copy prompt'}</span>
              </button>
            </div>

            {/* Code Box */}
            <pre style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '20px',
              fontSize: '13px',
              fontFamily: "'JetBrains Mono', Consolas, monospace",
              color: '#334155',
              lineHeight: '1.7',
              whiteSpace: 'pre-wrap',
              margin: 0
            }}>
              {sdkPrompt}
            </pre>
          </div>

          {/* Explore Grid Cards (Indus Sarvam Signature 4-Card Layout) */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '20px' }}>
              Explore
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px'
            }}>
              {/* Card 1: Models */}
              <div className="indus-card">
                <div>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#dcfce7',
                    color: '#15803d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                    Models
                  </h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                    Browse Saaras, Bulbul, GriZon-1, Mayura and all sovereign AI models with specs and language support.
                  </p>
                </div>
              </div>

              {/* Card 2: API Reference */}
              <div className="indus-card">
                <div>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#ffedd5',
                    color: '#c2410c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                    API Reference
                  </h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                    Complete reference for every endpoint — parameters, examples, and response schemas.
                  </p>
                </div>
              </div>

              {/* Card 3: Integrations */}
              <div className="indus-card">
                <div>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#dbeafe',
                    color: '#1e40af',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                    Integrations
                  </h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                    Connect GriZon APIs with LiveKit, n8n, LangChain, and Vercel AI SDK.
                  </p>
                </div>
              </div>

              {/* Card 4: Build Agents */}
              <div className="indus-card">
                <div>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#fce7f3',
                    color: '#be185d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                    Build Agents using GriZon
                  </h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                    Step-by-step cookbooks to build voice and collection agents for enterprise workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
