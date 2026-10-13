import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal, useButtonGlow } from '../hooks/useSarvam';
import '../styles/main.css';

export default function About() {
  const containerRef = useReveal();
  const primaryBtnRef = useButtonGlow();

  const values = [
    {
      number: '01',
      title: 'Sovereign Control & Privacy',
      desc: 'Your data, models, and workflows never leave your enterprise perimeter. Deployed on-premise, in VPC, or isolated sovereign clouds.'
    },
    {
      number: '02',
      title: 'Autonomous Multi-Agent Orchestration',
      desc: 'Agents collaborate seamlessly—passing complex legal, financial, and code tasks between specialized LLMs with human-in-the-loop oversight.'
    },
    {
      number: '03',
      title: 'Domain-Trained Precision',
      desc: 'Fine-tuned on hundreds of millions of domain specific legal documents, financial reports, and enterprise codebases for near-zero hallucination.'
    },
    {
      number: '04',
      title: 'Enterprise Rigor & Compliance',
      desc: 'Built-in SOC2 Type II, ISO 27001, HIPAA, and GDPR compliance with end-to-end cryptographic audit trails for every agent decision.'
    }
  ];

  const milestones = [
    { year: '2023', title: 'Founded in Bengaluru', desc: 'Started with a research team from premier AI labs to solve enterprise domain intelligence.' },
    { year: '2024', title: 'Agentic Core v1 Launch', desc: 'Deployed autonomous Legal and Financial agents to Fortune 500 enterprises in Asia & Middle East.' },
    { year: '2025', title: 'Sovereign Cloud Engine', desc: 'Introduced air-gapped on-premise multi-agent orchestration serving 50M+ daily operations.' },
    { year: '2026', title: 'GriZon OS 2.4', desc: 'Full stack autonomous agent platform powering law firms, banks, tech giants, and healthcare providers.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)' }} ref={containerRef}>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="sr-hero">
        <div className="ambient-glow-purple" style={{ top: '-50px', left: '50%', transform: 'translateX(-50%)' }} />
        <div className="sr-hero-container">
          <div className="sr-hero-eyebrow">
            <span className="sr-eyebrow-dot" />
            <span className="sr-eyebrow-pill">SOVEREIGN ENTERPRISE INTELLIGENCE</span>
          </div>

          <h1 className="sr-hero-title">
            Pioneering Autonomous AI <br />
            <span className="sr-title-serif">for High-Stakes Enterprise Work</span>
          </h1>

          <p className="sr-hero-sub">
            GriZon AI builds domain-specialized autonomous agents that transform complex legal analysis, financial auditing, software engineering, and market intelligence into lightning-fast, high-precision operations.
          </p>

          <div className="sr-hero-actions">
            <Link
              to="/agents"
              ref={primaryBtnRef}
              className="btn btn-primary btn-glow"
            >
              <span>Explore AI Agents</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="#mission" className="btn btn-outline">
              <span>Our Philosophy</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── MISSION SECTION ─────────────────────────────────── */}
      <section id="mission" className="section bg-grid-pattern" data-section-reveal>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="t-eyebrow">OUR MISSION</span>
            <h2 className="t-section" style={{ marginTop: 12 }}>
              Why We Built GriZon AI
            </h2>
            <p className="t-body-lg" style={{ maxWidth: 680, margin: '16px auto 0' }}>
              Generic LLMs are not built for regulated enterprise environments. Enterprise leaders need autonomous agents that understand domain nuances, adhere strictly to security protocols, and execute complex end-to-end workflows with full transparency.
            </p>
          </div>

          <div className="sr-grid sr-grid-2">
            {values.map((v, i) => (
              <div key={i} className="sr-card" data-section-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ color: '#a78bfa', fontWeight: 800, marginBottom: 12, fontSize: 16, fontFamily: 'var(--font-mono)' }}>
                  {v.number} // CORE PILLAR
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{v.title}</h3>
                <p className="t-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────────── */}
      <section className="section" data-section-reveal>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="t-eyebrow">OUR JOURNEY</span>
            <h2 className="t-section" style={{ marginTop: 12 }}>Building the Future of Enterprise AI</h2>
          </div>

          <div className="sr-grid sr-grid-4">
            {milestones.map((m, i) => (
              <div key={i} className="sr-card" data-section-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: 32, fontFamily: 'var(--font-heading)', color: '#a78bfa', fontWeight: 800, marginBottom: 8 }}>
                  {m.year}
                </div>
                <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#ffffff' }}>
                  {m.title}
                </h4>
                <p className="t-body" style={{ fontSize: 14 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="sr-cta-section" data-section-reveal>
        <div className="sr-cta-container">
          <h2 className="sr-cta-title">
            Ready to Deploy Autonomous Intelligence in Your Enterprise?
          </h2>
          <p className="sr-cta-sub">
            Schedule a personalized architecture session with our AI specialists.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Link to="/agents" className="btn btn-primary btn-glow">
              Explore All Agents
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
