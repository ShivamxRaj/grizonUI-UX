import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sovereign.css';

const AGENT_COL_1 = [
  {
    title: 'Research Engine',
    subtitle: 'Sub-400ms web search & 48-node recursive epistemic trees',
    href: '/agents/research',
    icon: 'psychology',
    color: 'var(--agent-deep-research)',
    bg: 'rgba(60, 75, 155, 0.08)',
    badge: 'Dual Engine'
  },
  {
    title: 'Dev Studio & Architect',
    subtitle: 'Micro-VM sandbox, 60 FPS live canvas & Mermaid compiler',
    href: '/agents/dev-studio',
    icon: 'terminal',
    color: 'var(--agent-dev-studio)',
    bg: 'rgba(16, 126, 125, 0.08)',
    badge: 'Pro+ VM'
  },
  {
    title: 'Market Intelligence',
    subtitle: 'Taurus vs Ursa Bull/Bear debate & 14ms live market feeds',
    href: '/agents/market-intelligence',
    icon: 'query_stats',
    color: 'var(--secondary)',
    bg: 'rgba(255, 219, 199, 0.5)',
    badge: '14ms Feeds'
  }
];

const AGENT_COL_2 = [
  {
    title: 'Doc & Video Intelligence',
    subtitle: '400-page table OCR & frame-by-frame video deconstruction',
    href: '/agents/doc-intelligence',
    icon: 'filter_center_focus',
    color: 'var(--secondary)',
    bg: 'rgba(247, 168, 89, 0.15)',
    badge: 'Multimodal'
  },
  {
    title: 'Legal & Compliance Agent',
    subtitle: 'Clause risk redlining, DPDP Act 2023 & liability audits',
    href: '/agents/legal',
    icon: 'gavel',
    color: 'var(--agent-legal)',
    bg: 'rgba(132, 59, 98, 0.10)',
    badge: 'DPDP 2023'
  },
  {
    title: 'Full Agent Mesh Catalog',
    subtitle: 'Explore all 8 specialized agents, benchmarks & tools',
    href: '/agents',
    icon: 'hub',
    color: 'var(--primary)',
    bg: 'var(--surface-container)',
    badge: 'All 8'
  }
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAgentsOpen, setMobileAgentsOpen] = useState(true);
  const dropdownRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 220);
  };

  const isAgentsActive = () => location.pathname.startsWith('/agents');

  return (
    <>
      {/* Ambient background glows */}
      <div className="sv-ambient-bg" aria-hidden="true">
        <div className="glow-top" />
        <div className="glow-right" />
        <div className="glow-bottom" />
      </div>

      {/* ── FLOATING ISLAND PILL NAVBAR (Linear / Stripe style) ── */}
      <div
        style={{
          position: 'fixed',
          top: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 28px)',
          maxWidth: '1060px',
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <header
          style={{
            position: 'relative',
            height: '56px',
            borderRadius: '9999px',
            background: scrolled
              ? 'rgba(255, 255, 255, 0.94)'
              : 'rgba(250, 250, 248, 0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(230, 231, 238, 0.85)',
            boxShadow: scrolled
              ? '0 16px 36px -8px rgba(7, 9, 27, 0.10), 0 2px 6px rgba(0, 0, 0, 0.03)'
              : '0 8px 24px -6px rgba(7, 9, 27, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 18px',
            transition: 'all 0.25s ease'
          }}
          role="banner"
        >
          {/* 1. BRAND LOGO */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              flexShrink: 0
            }}
            aria-label="GriZon AI Home"
          >
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #1e2033 0%, #07091b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(7,9,27,0.2)'
              }}
            >
              <img
                src="/grizon-logo.png"
                alt="GriZon"
                style={{ height: '18px', width: 'auto' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span style="color:#fff;font-weight:700;font-size:12px;">G</span>';
                }}
              />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--primary)',
                letterSpacing: '-0.02em'
              }}
            >
              GriZon <span style={{ color: 'var(--on-surface-variant)', fontWeight: 400 }}>AI</span>
            </span>
          </Link>

          {/* 2. CENTER PILL NAVIGATION (Desktop) */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden-mobile-nav"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                listStyle: 'none',
                margin: 0,
                padding: 0
              }}
            >
              {/* AGENTS WITH MEGA-MENU DROPDOWN */}
              <li
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    border: 'none',
                    background: dropdownOpen || isAgentsActive()
                      ? 'var(--surface-container)'
                      : 'transparent',
                    color: isAgentsActive() ? 'var(--primary)' : 'var(--on-surface-variant)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  className="nav-pill-item"
                >
                  <span>Agents</span>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '16px',
                      transition: 'transform 0.25s ease',
                      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                {/* ── 2-COLUMN MEGA-MENU (Linear / Stripe Luxury Panel) ── */}
                {dropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 14px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '640px',
                      borderRadius: '24px',
                      background: 'rgba(255, 255, 255, 0.98)',
                      backdropFilter: 'blur(30px)',
                      WebkitBackdropFilter: 'blur(30px)',
                      border: '1px solid rgba(230, 231, 238, 0.95)',
                      boxShadow: '0 24px 64px -12px rgba(7, 9, 27, 0.14), 0 4px 16px rgba(0, 0, 0, 0.04)',
                      padding: '20px',
                      zIndex: 1000,
                      animation: 'islandSlideDown 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                    }}
                  >
                    {/* Top Meta Bar */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: '12px',
                        marginBottom: '12px',
                        borderBottom: '1px solid var(--border-hairline)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '9999px',
                            backgroundColor: 'var(--agent-dev-studio)'
                          }}
                        />
                        <span
                          style={{
                            fontFamily: 'var(--font-code)',
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            color: 'var(--outline)',
                            fontWeight: 700
                          }}
                        >
                          Sovereign Multi-Agent Fleet
                        </span>
                      </div>
                      <Link
                        to="/agents"
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          fontFamily: 'var(--font-code)',
                          fontSize: '11px',
                          color: 'var(--secondary)',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px'
                        }}
                      >
                        <span>Open Complete Catalog</span>
                        <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>
                          arrow_forward
                        </span>
                      </Link>
                    </div>

                    {/* 2-Column Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '10px'
                      }}
                    >
                      {/* Column 1 */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-code)',
                            fontSize: '9px',
                            color: 'var(--outline)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.8px',
                            padding: '4px 8px',
                            fontWeight: 600
                          }}
                        >
                          Synthesis &amp; Engineering
                        </span>
                        {AGENT_COL_1.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="mega-agent-card"
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              padding: '10px',
                              borderRadius: '12px',
                              textDecoration: 'none',
                              color: 'inherit',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <div
                              style={{
                                width: '34px',
                                height: '34px',
                                borderRadius: '10px',
                                backgroundColor: item.bg,
                                color: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                                {item.icon}
                              </span>
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span
                                  style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '12.5px',
                                    fontWeight: 700,
                                    color: 'var(--primary)'
                                  }}
                                >
                                  {item.title}
                                </span>
                              </div>
                              <p
                                style={{
                                  fontFamily: 'var(--font-body)',
                                  fontSize: '11px',
                                  color: 'var(--on-surface-variant)',
                                  margin: '2px 0 0',
                                  lineHeight: 1.35
                                }}
                              >
                                {item.subtitle}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Column 2 */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-code)',
                            fontSize: '9px',
                            color: 'var(--outline)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.8px',
                            padding: '4px 8px',
                            fontWeight: 600
                          }}
                        >
                          Perception &amp; Governance
                        </span>
                        {AGENT_COL_2.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="mega-agent-card"
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              padding: '10px',
                              borderRadius: '12px',
                              textDecoration: 'none',
                              color: 'inherit',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <div
                              style={{
                                width: '34px',
                                height: '34px',
                                borderRadius: '10px',
                                backgroundColor: item.bg,
                                color: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                                {item.icon}
                              </span>
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span
                                  style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '12.5px',
                                    fontWeight: 700,
                                    color: 'var(--primary)'
                                  }}
                                >
                                  {item.title}
                                </span>
                              </div>
                              <p
                                style={{
                                  fontFamily: 'var(--font-body)',
                                  fontSize: '11px',
                                  color: 'var(--on-surface-variant)',
                                  margin: '2px 0 0',
                                  lineHeight: 1.35
                                }}
                              >
                                {item.subtitle}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* PLATFORM LINK */}
              <li>
                <Link
                  to="/indus"
                  style={{
                    display: 'block',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    color: location.pathname === '/indus' ? 'var(--primary)' : 'var(--on-surface-variant)',
                    background: location.pathname === '/indus' ? 'var(--surface-container)' : 'transparent',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 0.15s ease'
                  }}
                  className="nav-pill-item"
                >
                  Platform &amp; SDK
                </Link>
              </li>

              {/* ABOUT LINK */}
              <li>
                <Link
                  to="/about"
                  style={{
                    display: 'block',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    color: location.pathname === '/about' ? 'var(--primary)' : 'var(--on-surface-variant)',
                    background: location.pathname === '/about' ? 'var(--surface-container)' : 'transparent',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 0.15s ease'
                  }}
                  className="nav-pill-item"
                >
                  About
                </Link>
              </li>

              {/* PRICING LINK */}
              <li>
                <a
                  href="/#pricing"
                  style={{
                    display: 'block',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    color: 'var(--on-surface-variant)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 0.15s ease'
                  }}
                  className="nav-pill-item"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>

          {/* 3. RIGHT ACTIONS (Sign In & Start Free) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href="https://app.grizonai.com"
              style={{
                display: window.innerWidth < 640 ? 'none' : 'inline-block',
                padding: '6px 12px',
                borderRadius: '9999px',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--on-surface-variant)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              className="signin-link"
            >
              Sign In
            </a>

            <a
              href="https://app.grizonai.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '7px 16px',
                borderRadius: '9999px',
                backgroundColor: 'var(--primary)',
                color: 'var(--on-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: '12.5px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(7, 9, 27, 0.18)',
                transition: 'all 0.2s ease'
              }}
              className="btn-start-pill"
            >
              <span>Start Free</span>
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                bolt
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle-btn"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                padding: '4px',
                cursor: 'pointer',
                color: 'var(--primary)'
              }}
              aria-label="Toggle Navigation"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </header>

        {/* ── MOBILE MENU DRAWER ── */}
        {mobileOpen && (
          <div
            style={{
              marginTop: '8px',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(230, 231, 238, 0.9)',
              boxShadow: '0 20px 48px rgba(7, 9, 27, 0.12)',
              padding: '16px 20px 24px',
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
          >
            {/* Collapsible Agents Section */}
            <div>
              <button
                onClick={() => setMobileAgentsOpen(!mobileAgentsOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  cursor: 'pointer'
                }}
              >
                <span>Autonomous Agents Suite</span>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '18px',
                    transform: mobileAgentsOpen ? 'rotate(180deg)' : 'none'
                  }}
                >
                  keyboard_arrow_down
                </span>
              </button>

              {mobileAgentsOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '4px' }}>
                  <Link
                    to="/agents"
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--surface-container)',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-code)',
                      fontSize: '12px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>Browse All 8 Agents Catalog</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                  </Link>

                  {[...AGENT_COL_1, ...AGENT_COL_2.slice(0, 2)].map((agent) => (
                    <Link
                      key={agent.title}
                      to={agent.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 10px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--surface-low)',
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: agent.color }}>
                        {agent.icon}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary)' }}>
                        {agent.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Mobile Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-hairline)' }}>
              <Link
                to="/indus"
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '10px 4px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--on-surface)',
                  textDecoration: 'none'
                }}
              >
                Platform &amp; SDK
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '10px 4px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--on-surface)',
                  textDecoration: 'none'
                }}
              >
                About GriZon
              </Link>
              <a
                href="/#pricing"
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '10px 4px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--on-surface)',
                  textDecoration: 'none'
                }}
              >
                Pricing Plans
              </a>

              <a
                href="https://app.grizonai.com"
                style={{
                  marginTop: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--primary)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(7, 9, 27, 0.2)'
                }}
              >
                <span>Launch Workspace</span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes islandSlideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -8px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .nav-pill-item:hover {
          background-color: var(--surface-container) !important;
          color: var(--primary) !important;
        }
        .mega-agent-card:hover {
          background-color: var(--surface-low) !important;
          transform: translateY(-1px);
        }
        .signin-link:hover {
          color: var(--primary) !important;
        }
        .btn-start-pill:hover {
          background-color: var(--primary-container) !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(7, 9, 27, 0.25) !important;
        }
        @media (max-width: 860px) {
          .hidden-mobile-nav { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
          .signin-link { display: none !important; }
        }
      `}</style>
    </>
  );
}
