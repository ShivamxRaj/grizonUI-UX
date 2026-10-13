import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AppDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('Auto');
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  const models = [
    { id: 'Auto', name: 'Auto (Recommended)', desc: 'Smart routing across sovereign agents' },
    { id: 'Sarvam-1', name: 'Sarvam-1 Sovereign', desc: 'High-speed domain LLM' },
    { id: 'Legal-v4', name: 'GriZon Legal Specialist', desc: 'NDA & MSA contract auditing' },
    { id: 'Market-Radar', name: 'Market Intelligence Radar', desc: 'Real-time SEC & PR feed analysis' }
  ];

  const quickAgents = [
    {
      title: 'Legal Contract Audit',
      desc: 'Paste NDA or MSA to flag non-compliant clauses',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      query: 'Audit this Master Service Agreement for liability caps and termination notice risk.'
    },
    {
      title: 'Market Intelligence Radar',
      desc: 'Analyze competitor SEC filings & PR signals',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="2" x2="12" y2="12"/>
          <line x1="12" y1="12" x2="18" y2="12"/>
        </svg>
      ),
      query: 'Run a competitive intelligence scan on enterprise AI market shifts in EMEA.'
    },
    {
      title: 'Code Vulnerability Scan',
      desc: 'Audit AST for OWASP exploits & auto-refactor',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      query: 'Scan auth service microservices for JWT expiration vulnerabilities.'
    },
    {
      title: 'Finance & Tax Ledger',
      desc: 'Reconcile multi-currency ERP & audit tax risk',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      query: 'Reconcile Q3 multi-currency transactions against tax playbook compliance.'
    }
  ];

  const pastChats = [
    'M&A Due Diligence NDA Audit',
    'Competitor Alpha Pricing Shift',
    'React 19 Hydration Hotfix',
    'SEC 10-K Briefing Synthesis'
  ];

  const handleSend = (textToSend) => {
    const queryText = textToSend || prompt;
    if (!queryText.trim() || isProcessing) return;

    const userMsg = { role: 'user', content: queryText };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt('');
    setIsProcessing(true);

    setTimeout(() => {
      let agentReply = '';
      if (queryText.toLowerCase().includes('audit') || queryText.toLowerCase().includes('contract') || queryText.toLowerCase().includes('nda')) {
        agentReply = `### ⚖️ GriZon Legal Agent — Audit Digest\n\n**Document Status:** Parsed successfully against Delaware corporate law playbook.\n\n- **[!] Risk Flag 1:** Clause 14.2 sets Limitation of Liability at **10x Annual Fees ($10M)**. Baseline playbook cap is 1x-2x fees.\n- **[!] Risk Flag 2:** 5-day termination notice is insufficient for enterprise migration.\n\n**Recommended Action:** Redline Clause 14.2 to cap aggregate liability at total fees paid in preceding 12 months.`;
      } else if (queryText.toLowerCase().includes('market') || queryText.toLowerCase().includes('competitive') || queryText.toLowerCase().includes('scan')) {
        agentReply = `### 📊 Market Intelligence Radar — Signal Summary\n\n**Sector:** Enterprise AI & Cloud Infrastructure\n\n- **Signal A:** Competitor Alpha transitioned to usage-based token tiering.\n- **Signal B:** Competitor Beta acquired EMEA compliance startup.\n\n**Strategic Recommendation:** Deploy targeted sovereign VPC collateral to counter EMEA expansion.`;
      } else {
        agentReply = `### 🤖 GriZon Autonomous Agent Response\n\nExecuted using **${selectedModel}** engine.\n\nProcessed your prompt: *"${queryText}"*\n\nYour request has been validated across sovereign security policies. No data was transmitted outside your enterprise perimeter.`;
      }

      setMessages((prev) => [...prev, { role: 'agent', content: agentReply }]);
      setIsProcessing(false);
    }, 800);
  };

  const handleNewChat = () => {
    setMessages([]);
    setPrompt('');
  };

  return (
    <div className="sr-app-layout">
      {/* Background Radial Glow Orb (Sarvam Signature) */}
      <div className="sr-app-orb" />

      {/* ── COLLAPSIBLE SIDEBAR ─────────────────────────────────── */}
      <aside className={`sr-app-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div>
          {/* Sidebar Header */}
          <div className="sr-app-sidebar-header">
            <Link to="/" className="sr-app-brand">
              <div className="sr-app-brand-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              {!sidebarCollapsed && <span className="sr-app-brand-name">Grizon</span>}
            </Link>

            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="sr-app-sidebar-toggle"
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
              </svg>
            </button>
          </div>

          {/* Primary Navigation */}
          <div className="sr-app-nav">
            <button
              onClick={handleNewChat}
              className="sr-app-nav-item sr-app-new-chat-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              {!sidebarCollapsed && <span>New chat</span>}
            </button>

            <button
              onClick={() => setActiveTab('search')}
              className={`sr-app-nav-item ${activeTab === 'search' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              {!sidebarCollapsed && <span>Search chats</span>}
            </button>

            <button
              onClick={() => setActiveTab('tasks')}
              className={`sr-app-nav-item ${activeTab === 'tasks' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 11 12 14 22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              {!sidebarCollapsed && <span>Tasks</span>}
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`sr-app-nav-item ${activeTab === 'projects' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              {!sidebarCollapsed && <span>Projects</span>}
            </button>

            <button
              onClick={() => setActiveTab('drive')}
              className={`sr-app-nav-item ${activeTab === 'drive' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
              {!sidebarCollapsed && <span>Drive</span>}
            </button>
          </div>

          {/* History Threads */}
          {!sidebarCollapsed && (
            <div className="sr-app-history-section">
              <div className="sr-app-history-label">Recent Conversations</div>
              {pastChats.map((chat, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSend(`Open past thread: ${chat}`)}
                  className="sr-app-history-item"
                >
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{chat}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Footer Profile */}
        <div className="sr-app-sidebar-footer">
          {!sidebarCollapsed ? (
            <div className="sr-app-user-card">
              <div className="sr-app-avatar">S</div>
              <div className="sr-app-user-info">
                <div className="sr-app-user-name">Shivam Raj</div>
                <div className="sr-app-user-token">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a5bbfc' }} />
                  <span>Free • 150 tokens</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="sr-app-avatar" style={{ margin: '0 auto' }}>S</div>
          )}
        </div>
      </aside>

      {/* ── MAIN WORKSPACE ──────────────────────────────────────── */}
      <main className="sr-app-main">
        {/* Top bar */}
        <header className="sr-app-topbar">
          <div className="sr-app-topbar-left">
            {sidebarCollapsed && (
              <button
                onClick={() => setSidebarCollapsed(false)}
                className="sr-app-icon-btn"
                title="Expand sidebar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="3" x2="9" y2="21"/>
                </svg>
              </button>
            )}
            <Link to="/" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>← Landing Site</span>
            </Link>
          </div>

          <div className="sr-app-topbar-right">
            <Link to="/agents" className="sr-app-icon-btn" title="Agents Directory">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </Link>
            <button className="sr-app-icon-btn" title="Settings">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </button>
          </div>
        </header>

        {/* ── WORKSPACE CONTENT ───────────────────────────────────── */}
        {messages.length === 0 ? (
          <div className="sr-app-center-container">
            <div className="sr-app-date">Monday, October 5</div>

            <h1 className="sr-app-greeting">
              Good evening, <span>Shivam Raj</span>.
            </h1>

            <p className="sr-app-subtitle">
              What should we <span className="highlight">focus on</span> today?
            </p>

            {/* Sarvam Floating Search Box */}
            <div className="sr-app-search-box">
              <div className="sr-app-search-input-row">
                <button className="sr-app-attach-btn" title="Attach file or document">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>

                <input
                  type="text"
                  className="sr-app-input"
                  placeholder="Ask Grizon anything or select an autonomous agent..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
              </div>

              <div className="sr-app-search-controls">
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setShowModelDropdown(!showModelDropdown)}
                    className="sr-app-model-pill"
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a5bbfc' }} />
                    <span>+ {selectedModel}</span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>

                  {showModelDropdown && (
                    <div style={{
                      position: 'absolute',
                      bottom: '120%',
                      left: 0,
                      width: '240px',
                      background: 'rgba(18, 20, 42, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(165, 187, 252, 0.3)',
                      borderRadius: '14px',
                      padding: '8px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                      zIndex: 30
                    }}>
                      {models.map((m) => (
                        <div
                          key={m.id}
                          onClick={() => {
                            setSelectedModel(m.id);
                            setShowModelDropdown(false);
                          }}
                          style={{
                            padding: '8px 12px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            color: selectedModel === m.id ? '#ffffff' : '#cbd5e1',
                            background: selectedModel === m.id ? 'rgba(106, 136, 226, 0.2)' : 'transparent',
                            cursor: 'pointer',
                            marginBottom: '2px'
                          }}
                        >
                          <div style={{ fontWeight: '600' }}>{m.name}</div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>{m.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="sr-app-action-buttons">
                  <button className="sr-app-mic-btn" title="Voice Input">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" y1="19" x2="12" y2="23"/>
                      <line x1="8" y1="23" x2="16" y2="23"/>
                    </svg>
                  </button>

                  <button
                    onClick={() => handleSend()}
                    className="sr-app-submit-btn"
                    title="Send message"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="19" x2="12" y2="5"/>
                      <polyline points="5 12 12 5 19 12"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Suggestions Cards */}
            <div className="sr-app-cards-grid">
              {quickAgents.map((agent, i) => (
                <div
                  key={i}
                  onClick={() => handleSend(agent.query)}
                  className="sr-app-quick-card"
                >
                  <div className="sr-app-quick-icon">{agent.icon}</div>
                  <div>
                    <div className="sr-app-quick-title">{agent.title}</div>
                    <div className="sr-app-quick-desc">{agent.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Active Chat Thread */
          <div className="sr-app-messages-container">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`sr-app-msg ${msg.role === 'user' ? 'sr-app-msg-user' : 'sr-app-msg-agent'}`}
              >
                <div className="sr-app-msg-bubble">
                  {msg.role === 'agent' ? (
                    <div style={{ whiteSpace: 'pre-line' }}>{msg.content}</div>
                  ) : (
                    <div>{msg.content}</div>
                  )}
                </div>
              </div>
            ))}

            {isProcessing && (
              <div className="sr-app-msg sr-app-msg-agent">
                <div className="sr-app-msg-bubble" style={{ color: '#a5bbfc', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6a88e2', animation: 'ping 1s infinite' }} />
                  <span>GriZon Sovereign Agent reasoning...</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Persistent Input if chat active */}
        {messages.length > 0 && (
          <div style={{
            position: 'sticky',
            bottom: '20px',
            maxWidth: '820px',
            width: '90%',
            margin: '0 auto 20px',
            zIndex: 20
          }}>
            <div className="sr-app-search-box">
              <div className="sr-app-search-input-row">
                <input
                  type="text"
                  className="sr-app-input"
                  placeholder="Send follow up instruction..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button
                  onClick={() => handleSend()}
                  className="sr-app-submit-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="19" x2="12" y2="5"/>
                    <polyline points="5 12 12 5 19 12"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
