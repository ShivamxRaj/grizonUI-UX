import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sovereign.css';

export default function Agents() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Research & Synthesis', 'Financial & Market', 'Engineering & Code', 'Perception & Vision', 'Legal & Risk'];

  const agentsList = [
    {
      id: 'fast-research',
      title: 'Fast Research Engine',
      category: 'Research & Synthesis',
      badge: 'SUB-SECOND',
      badgeBg: 'rgba(60,75,155,0.1)',
      badgeColor: 'var(--agent-deep-research)',
      icon: 'bolt',
      tagline: 'Sub-400ms Web Indexing & Live Grounding',
      description: 'Instant web-scale queries across 4.2B+ pages with live citations, semantic deduplication, and zero hallucination risk.',
      features: ['Sub-380ms Retrieval Latency', 'Live Search Grounding', 'Automatic Source Extraction', 'Markdown Summary Export'],
      latency: '382ms',
      cost: '1 Credit',
      status: 'ONLINE',
      link: '/agents/research'
    },
    {
      id: 'deep-research',
      title: 'Deep Research Engine',
      category: 'Research & Synthesis',
      badge: 'RECURSIVE TREE',
      badgeBg: 'rgba(60,75,155,0.12)',
      badgeColor: 'var(--agent-deep-research)',
      icon: 'psychology',
      tagline: '48-Node Recursive Hypothesis Synthesis',
      description: 'Autonomous epistemic exploration that cross-examines peer-reviewed journals, regulatory filings, and primary sources into 18-page dossiers.',
      features: ['Multi-Step Branching Decomposition', 'Cryptographic SHA-256 Citations', 'Conflict Analysis & Counter-Evidence', 'PDF & LaTeX Dossier Generation'],
      latency: '1.8s',
      cost: '5-12 Credits',
      status: 'ONLINE',
      link: '/agents/research'
    },
    {
      id: 'market-intelligence',
      title: 'Data & Market Analyst',
      category: 'Financial & Market',
      badge: 'ADVERSARIAL ORACLE',
      badgeBg: 'rgba(255,219,199,0.5)',
      badgeColor: 'var(--secondary)',
      icon: 'query_stats',
      tagline: 'Algorithmic Bull vs Bear Consensus Debates',
      description: 'Two autonomous sovereign agents (Taurus vs Ursa) debate 10-K balance sheets, earnings calls, and macroeconomic signals to produce audited alpha models.',
      features: ['Taurus vs Ursa Adversarial Forum', 'NSE/BSE 14ms Live Feeds', 'XBRL & 10-K Table Extraction', 'DCF & Relative Valuation Models'],
      latency: '14ms',
      cost: '2-5 Credits',
      status: 'ONLINE',
      link: '/agents/market-intelligence'
    },
    {
      id: 'dev-studio',
      title: 'Dev Studio',
      category: 'Engineering & Code',
      badge: 'PRO+ SANDBOX',
      badgeBg: 'rgba(16,126,125,0.12)',
      badgeColor: 'var(--agent-dev-studio)',
      icon: 'terminal',
      tagline: 'Full-Stack Ephemeral Micro-VMs & Live UI Canvas',
      description: 'Write, debug, and preview full-stack applications with instant side-by-side HTML/Tailwind hot reloading and zero host leakage.',
      features: ['60 FPS Live UI Sandbox', 'Micro-VM Ephemeral Runtimes', 'Multi-file Dependency Tree', 'Automated AST Test Generation'],
      latency: '18ms',
      cost: '2-5 Credits',
      status: 'ONLINE',
      link: '/agents/dev-studio'
    },
    {
      id: 'system-architect',
      title: 'System Architect',
      category: 'Engineering & Code',
      badge: 'CLOUD TOPOLOGY',
      badgeBg: 'rgba(16,126,125,0.1)',
      badgeColor: 'var(--agent-dev-studio)',
      icon: 'account_tree',
      tagline: 'Distributed Architecture & Mermaid Topology Compiler',
      description: 'Translates high-level enterprise system requirements into fault-tolerant distributed infrastructure topologies, partition schemas, and Terraform scripts.',
      features: ['Interactive Mermaid Diagram Generation', 'CAP Theorem Tradeoff Analysis', 'Database Sharding Blueprints', 'Terraform & Pulumi Stacks'],
      latency: '620ms',
      cost: '3 Credits',
      status: 'ONLINE',
      link: '/agents/dev-studio'
    },
    {
      id: 'doc-intelligence',
      title: 'Doc Intelligence',
      category: 'Perception & Vision',
      badge: 'ZERO-LOSS OCR',
      badgeBg: 'rgba(247,168,89,0.2)',
      badgeColor: 'var(--secondary)',
      icon: 'description',
      tagline: 'Zero-Loss OCR & Tabular Financial Parsing',
      description: 'Ingest 400-page complex PDFs, quarterly reports, and scanned legal filings into clean, machine-queryable JSON tables in under 2 seconds.',
      features: ['48-Page Ingestion in 1.8s', 'Zero-Loss Complex Table OCR', 'Cross-Page Entity Resolution', 'Vector Embedding Indexing'],
      latency: '284ms',
      cost: '1 Credit / Doc',
      status: 'ONLINE',
      link: '/agents/doc-intelligence'
    },
    {
      id: 'video-analyser',
      title: 'Video Analyser',
      category: 'Perception & Vision',
      badge: 'MULTIMODAL VISION',
      badgeBg: 'rgba(247,168,89,0.25)',
      badgeColor: 'var(--secondary)',
      icon: 'video_library',
      tagline: 'Frame-by-Frame Deconstruction & Timestamp Citations',
      description: 'Process hour-long recorded investor presentations, product demos, or security footage with scene transitions and speaker transcripts.',
      features: ['Frame-by-Frame Keyframe Index', 'Timestamp Jump & OCR Copy', 'Audio Diarization & Sync', 'Visual Artifact Detection'],
      latency: '450ms',
      cost: '2 Credits / Min',
      status: 'ONLINE',
      link: '/agents/doc-intelligence'
    },
    {
      id: 'legal',
      title: 'Legal & Compliance Agent',
      category: 'Legal & Risk',
      badge: 'HIGH ASSURANCE',
      badgeBg: 'rgba(132,59,98,0.12)',
      badgeColor: 'var(--agent-legal)',
      icon: 'gavel',
      tagline: 'Autonomous Contract Redlining & DPDP Compliance',
      description: 'Audit vendor agreements, identify non-conforming clauses, calculate exposure scores, and insert pre-approved sovereign substitutions.',
      features: ['Master Services Agreement Audit', 'Clause Deviation Scoring', 'DPDP 2023 Statutory Check', 'Automated DOCX Redline Export'],
      latency: '512ms',
      cost: '2 Credits',
      status: 'ONLINE',
      link: '/agents/legal'
    }
  ];

  const filteredAgents = agentsList.filter(agent => {
    const matchesCategory = selectedCategory === 'All' || agent.category === selectedCategory;
    const matchesSearch = agent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="sv-page" style={{ background: 'var(--parchment)', minHeight: '100vh', paddingTop: '5.5rem' }}>
      {/* Ambient background glows */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 1.5rem 5rem', overflow: 'hidden' }}>
        <div style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '-10rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(247,168,89,0.12) 0%, rgba(165,187,252,0.14) 50%, transparent 80%)',
          filter: 'blur(90px)'
        }} />

        {/* Header Section */}
        <section style={{ paddingTop: '2rem', paddingBottom: '2.5rem', textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'var(--surface-container)', color: 'var(--primary)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--secondary)' }} />
            Sovereign Multi-Agent Fleet
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', color: 'var(--primary)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 1rem' }}>
            Autonomous Sovereign Agents.<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--secondary)' }}>Engineered for absolute trust.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', lineHeight: '1.65', color: 'var(--on-surface-variant)', margin: 0 }}>
            Deploy specialized autonomous reasoning agents across your enterprise workflows. Each agent executes within hardware-isolated micro-VMs with zero telemetry leakage and verifiable mathematical provenance.
          </p>
        </section>

        {/* Filter & Search Bar */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '0.75rem 1rem', borderRadius: '16px', background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    background: selectedCategory === cat ? 'var(--primary)' : 'var(--surface-container)',
                    color: selectedCategory === cat ? '#fff' : 'var(--on-surface-variant)',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
              <span className="material-symbols-outlined" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--outline)', fontSize: '18px' }}>search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search capabilities or agents..."
                style={{ width: '100%', padding: '0.5rem 0.75rem 0.5rem 2.25rem', borderRadius: '8px', background: 'var(--surface-low)', border: '1px solid var(--border-hairline)', fontSize: '12px', color: 'var(--primary)', outline: 'none' }}
              />
            </div>
          </div>
        </section>

        {/* Agent Cards Grid */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {filteredAgents.map((agent) => (
              <div
                key={agent.id}
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  background: '#fff',
                  border: '1px solid var(--border-hairline)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  {/* Card Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: agent.badgeBg, color: agent.badgeColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>{agent.icon}</span>
                      </div>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary)', margin: 0 }}>
                          {agent.title}
                        </h3>
                        <p style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)', margin: '0.15rem 0 0' }}>
                          {agent.category}
                        </p>
                      </div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-code)', fontSize: '10px', fontWeight: 700, padding: '0.2rem 0.55rem', borderRadius: '9999px', background: agent.badgeBg, color: agent.badgeColor }}>
                      {agent.badge}
                    </span>
                  </div>

                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                    {agent.tagline}
                  </p>
                  <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--on-surface-variant)', marginBottom: '1.25rem' }}>
                    {agent.description}
                  </p>

                  {/* Features list */}
                  <div style={{ padding: '0.85rem 1rem', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {agent.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '12px', color: 'var(--on-surface)' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '15px', color: agent.badgeColor }}>check_circle</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.85rem', marginBottom: '0.85rem', borderBottom: '1px solid var(--border-hairline)', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--on-surface-variant)' }}>
                    <span>LATENCY: <strong style={{ color: 'var(--primary)' }}>{agent.latency}</strong></span>
                    <span>COST: <strong style={{ color: 'var(--primary)' }}>{agent.cost}</strong></span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--agent-dev-studio)', fontWeight: 600 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--agent-dev-studio)' }} />
                      {agent.status}
                    </span>
                  </div>

                  <Link
                    to={agent.link}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      background: 'var(--primary)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '13px',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    Open Agent Workspace
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Banner */}
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
                Autonomous Multi-Agent Mesh
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#fff', margin: 0, lineHeight: 1.15 }}>
                Orchestrate multi-agent swarms across your enterprise.
              </h2>

              <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
                Route queries dynamically to specialized agents via Auto Mode or execute distributed parallel workflows with unified context memory.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}>
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
                    textDecoration: 'none'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>rocket_launch</span>
                  Launch Sovereign Swarm
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
                  Platform Whitepaper
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
