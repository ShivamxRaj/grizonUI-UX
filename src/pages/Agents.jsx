import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useSarvam';

export default function Agents() {
  const containerRef = useReveal();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const categories = ['All', 'Legal & Risk', 'Intelligence & Data', 'Engineering & Dev', 'Finance & Audit', 'Ops & HR'];

  const agentsList = [
    {
      id: 'legal',
      title: 'Legal AI Agent',
      category: 'Legal & Risk',
      badge: 'HIGH PRECISION',
      tagline: 'Autonomous Contract Analysis & Compliance Auditing',
      description: 'Parses complex legal contracts, flags non-compliant clauses against custom playbooks, identifies liabilities, and generates audit-ready legal summaries in seconds.',
      features: ['NDA & Contract Review', 'Regulatory Audit (GDPR, SEC)', 'Risk Matrix Scoring', 'Redlining & Clause Suggestion'],
      stats: '85% time reduction on M&A due diligence',
      link: '/agents/legal'
    },
    {
      id: 'market-intelligence',
      title: 'Market Intelligence Agent',
      category: 'Intelligence & Data',
      badge: 'REAL-TIME DATA',
      tagline: 'Deep Competitive Radar & Trend Synthesizer',
      description: 'Continuously monitors competitor press releases, regulatory filings, financial updates, and social signals to produce strategic executive briefing decks.',
      features: ['Competitor Feature Tracking', 'Earnings Call Analysis', 'Industry Sentiment Pulse', 'Predictive Market Shifts'],
      stats: 'Monitors 10,000+ sources 24/7',
      link: '/agents/market-intelligence'
    },
    {
      id: 'code-architect',
      title: 'Code Architect Agent',
      category: 'Engineering & Dev',
      badge: 'ENTERPRISE DEVPULSE',
      tagline: 'Autonomous Refactoring & Security Vulnerability Audit',
      description: 'Scans massive enterprise repositories to detect architectural anti-patterns, security exploits (OWASP Top 10), and automatically generates refactored PRs with unit tests.',
      features: ['Automated PR Reviews', 'AST Security Analysis', 'Legacy Code Migration', 'Docstring & API Specs'],
      stats: '100% test coverage auto-generation',
      link: '/agents'
    },
    {
      id: 'finance-tax',
      title: 'Finance & Tax Agent',
      category: 'Finance & Audit',
      badge: 'AUDIT READY',
      tagline: 'Automated Tax Compliance & Multi-Entity Ledger Audit',
      description: 'Reconciles cross-border transactions, audits expense compliance against tax laws, predicts cash flow anomalies, and formats quarterly SEC/tax filings.',
      features: ['Multi-currency Reconciliation', 'Tax Playbook Verification', 'Anomaly Detection', 'ERP System Integration'],
      stats: '$2.4M saved in undetected audit errors',
      link: '/agents'
    },
    {
      id: 'customer-success',
      title: 'Customer Success Agent',
      category: 'Ops & HR',
      badge: '24/7 AUTONOMOUS',
      tagline: 'Proactive Churn Prediction & Enterprise Resolution',
      description: 'Analyzes user product telemetry, support ticket sentiment, and renewal dates to trigger proactive retention workflows and resolve complex technical queries.',
      features: ['Telemetry Churn Scoring', 'Automated Ticket Escalation', 'Personalized Renewal Decks', 'Multi-channel Support'],
      stats: '34% reduction in Enterprise Churn',
      link: '/agents'
    },
    {
      id: 'hr-talent',
      title: 'HR & Talent Agent',
      category: 'Ops & HR',
      badge: 'BIAS-FREE HR',
      tagline: 'Automated Technical Screening & Onboarding Workflow',
      description: 'Evaluates engineering candidates objectively, runs structured technical assessments, schedules multi-stage interviews, and automates employee onboarding.',
      features: ['Bias-free Resume Screening', 'Code Assessment Evaluator', 'Policy Q&A Assistant', 'Automated Onboarding'],
      stats: '3x faster time-to-hire for engineers',
      link: '/agents'
    }
  ];

  const filteredAgents = agentsList.filter(agent => {
    const matchesCategory = selectedCategory === 'All' || agent.category === selectedCategory;
    const matchesSearch = agent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="sr-page-wrapper" ref={containerRef}>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="sr-hero">
        <div className="sr-hero-orb" />
        <div className="sr-hero-container">
          <div className="sr-hero-eyebrow">
            <span className="sr-eyebrow-line" />
            <span className="sr-eyebrow-pill">AUTONOMOUS WORKFORCE MATRIX</span>
            <span className="sr-eyebrow-line" />
          </div>

          <h1 className="sr-hero-title">
            Domain-Specialized AI Agents <br />
            <span className="sr-title-serif">Built for Enterprise Autonomy</span>
          </h1>

          <p className="sr-hero-sub">
            Deploy pre-trained, enterprise-grade AI agents tailored specifically for legal, financial, engineering, and market operations. Fully secure, audit-ready, and on-premise capable.
          </p>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Search agent capabilities, e.g. 'contract review', 'security'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '460px',
                padding: '14px 20px',
                borderRadius: 'var(--r-pill)',
                border: '1px solid rgba(0,0,0,0.12)',
                background: '#ffffff',
                fontSize: '15px',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            />
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER TABS ───────────────────────────── */}
      <section className="sr-section" style={{ paddingTop: '0' }}>
        <div className="sr-container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--r-pill)',
                  fontSize: '14px',
                  fontWeight: selectedCategory === cat ? '600' : '400',
                  background: selectedCategory === cat ? 'var(--sr-slate-dark)' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--tx-secondary)',
                  border: selectedCategory === cat ? '1px solid var(--sr-slate-dark)' : '1px solid rgba(0,0,0,0.08)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── AGENTS GRID ──────────────────────────────────── */}
          <div className="sr-grid sr-grid-3">
            {filteredAgents.map((agent) => (
              <div key={agent.id} className="sr-card" data-scale-reveal style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '0.8px',
                      padding: '4px 10px',
                      borderRadius: 'var(--r-pill)',
                      background: 'rgba(30, 32, 64, 0.08)',
                      color: 'var(--sr-indigo-900)'
                    }}>
                      {agent.badge}
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--tx-tertiary)' }}>
                      {agent.category}
                    </span>
                  </div>

                  <h3 className="sr-card-title" style={{ fontSize: '24px', marginBottom: '6px' }}>
                    {agent.title}
                  </h3>

                  <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--hero-accent-line)', marginBottom: '12px' }}>
                    {agent.tagline}
                  </div>

                  <p className="sr-card-desc" style={{ marginBottom: '20px', fontSize: '14px' }}>
                    {agent.description}
                  </p>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--tx-tertiary)', marginBottom: '8px' }}>
                      Key Capabilities
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {agent.features.map((feat, idx) => (
                        <li key={idx} style={{ fontSize: '13px', color: 'var(--tx-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--hero-accent-line)' }} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'var(--bg-sf-secondary)',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: 'var(--sr-indigo-900)',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{agent.stats}</span>
                  </div>

                  <Link
                    to={agent.link}
                    className="sr-btn sr-btn-outline"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>View Agent Details</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE INTERACTIVE AGENT DEMO PLAYGROUND ─────────── */}
      <section className="sr-section sr-bg-secondary" data-section-reveal>
        <div className="sr-container">
          <div className="sr-section-header">
            <span className="sr-badge">INTERACTIVE PLAYGROUND</span>
            <h2 className="sr-heading">Test GriZon Autonomous Execution</h2>
            <p className="sr-subheading">
              Select an agent and see real-time structured reasoning and audit-ready outputs.
            </p>
          </div>

          <div className="sr-card" style={{ background: '#0f0f1a', color: '#ffffff', padding: '32px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {['Legal Contract Audit', 'Market Intelligence Radar', 'Code Vulnerability Scanner'].map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '13px',
                    fontWeight: activeTab === idx ? '600' : '400',
                    background: activeTab === idx ? 'rgba(255,255,255,0.15)' : 'transparent',
                    color: activeTab === idx ? '#ffffff' : 'rgba(255,255,255,0.6)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 0 && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '1.7', color: '#d5e2ff' }}>
                <div style={{ color: '#8f8faa', marginBottom: '8px' }}>// Executing LegalAgent.reviewContract() on Master Service Agreement v4...</div>
                <div style={{ color: '#6a88e2', fontWeight: '600' }}>[✓] Document Parsed: 48 pages | 14,200 words | 12 Clause Types Detected</div>
                <div style={{ color: '#ff7b7b', margin: '8px 0' }}>[!] FLAG HIGH RISK: Clause 14.2 (Limitation of Liability) exceeds playbook threshold (Uncapped Indirect Damages).</div>
                <div style={{ color: '#7ce38b' }}>[+] REDLINE SUGGESTION: "Except for breaches of Section 8 (Confidentiality), neither party's liability shall exceed 2x annual fees."</div>
                <div style={{ color: '#8f8faa', marginTop: '12px' }}>Audit log digest: 0x9f8a...3b21 verified against GDPR & Delaware corporate law.</div>
              </div>
            )}

            {activeTab === 1 && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '1.7', color: '#d5e2ff' }}>
                <div style={{ color: '#8f8faa', marginBottom: '8px' }}>// Running MarketIntelligence.scanCompetitors() across 12,000 feeds...</div>
                <div style={{ color: '#6a88e2', fontWeight: '600' }}>[✓] SEC 10-K Filings & PR feeds analyzed for top 5 competitors</div>
                <div style={{ color: '#7ce38b', margin: '8px 0' }}>[+] KEY SIGNAL DETECTED: Competitor Alpha expanded EMEA enterprise sales force by +42% in Q3.</div>
                <div style={{ color: '#d5e2ff' }}>[+] ACTION ITEM: Recommend updating EMEA pricing playbook and positioning sovereign cloud deployment USP.</div>
                <div style={{ color: '#8f8faa', marginTop: '12px' }}>Synthesized briefing document delivered to Executive Portal.</div>
              </div>
            )}

            {activeTab === 2 && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '1.7', color: '#d5e2ff' }}>
                <div style={{ color: '#8f8faa', marginBottom: '8px' }}>// Running CodeArchitect.auditRepository(branch: 'main')...</div>
                <div style={{ color: '#6a88e2', fontWeight: '600' }}>[✓] AST Analyzed: 142 microservices | 280,000 LOC</div>
                <div style={{ color: '#ff7b7b', margin: '8px 0' }}>[!] VULNERABILITY DETECTED: CVE-2024-38912 in auth-service/jwt_verifier.go (Unchecked token expiration).</div>
                <div style={{ color: '#7ce38b' }}>[+] AUTO-REFIX GENERATED: Pull Request #391 created with zero-downtime hotfix and 12 unit tests passing.</div>
                <div style={{ color: '#8f8faa', marginTop: '12px' }}>CI/CD Pipeline validated in 1.4 seconds.</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="sr-cta-section" data-section-reveal>
        <div className="sr-cta-container">
          <h2 className="sr-cta-title">Need a Custom Agent for Your Enterprise Data?</h2>
          <p className="sr-cta-sub">
            Our AI engineering team can train and deploy custom sovereign agents in under 14 days.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/about" className="sr-btn sr-btn-primary">
              Schedule Architecture Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
