import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sovereign.css';

const FOOTER_COLS = [
  {
    title: 'Agents',
    links: [
      { label: 'Data & Market Analyst', href: '/agents/market-intelligence' },
      { label: 'Fast Web Researcher',   href: '/agents/research' },
      { label: 'Deep Research Pilot',   href: '/agents/research' },
      { label: 'Dev Studio Pilot',      href: '/agents/dev-studio' },
      { label: 'Doc Intelligence & Video', href: '/agents/doc-intelligence' },
      { label: 'Legal Contract Review', href: '/agents/legal' },
    ],
  },
  {
    title: 'Developer & SDK',
    links: [
      { label: 'Python SDK Client',     href: '/indus' },
      { label: 'Developer Sandbox',     href: '/indus' },
      { label: 'SEBI/XBRL Financial Model', href: '/agents/market-intelligence' },
      { label: 'API Pricing & Credits', href: '/#pricing' },
      { label: 'All AI Agents Catalog', href: '/agents' },
    ],
  },
  {
    title: 'Company & Governance',
    links: [
      { label: 'About GriZon AI',         href: '/about' },
      { label: 'Indian DPDP Compliance',  href: '/agents/legal' },
      { label: 'Sovereign Architecture',  href: '/about' },
      { label: 'Launch Web App',          href: '/app' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="sv-footer" role="contentinfo">
      <div className="sv-footer-inner">
        <div className="sv-footer-top">
          {/* Brand column */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <img
                src="/grizon-logo.png"
                alt="GriZon AI Logo"
                style={{ height: 26 }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 400,
                color: 'var(--primary-container)',
              }}>
                GriZon <span style={{ color: 'var(--on-surface-variant)' }}>AI</span>
              </span>
            </Link>
            <p className="sv-footer-brand-desc">
              India's leading sovereign multi-agent intelligence platform engineered for uncompromised autonomy, rapid deep research, and mathematical accuracy.
            </p>
            <div className="sv-footer-status">
              <span className="sv-footer-status-dot" />
              Systems Operational • Tier 5
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="sv-footer-col-title">{col.title}</p>
              <ul className="sv-footer-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href}>{link.label}</Link>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="sv-footer-bottom">
          <span>© 2026 GriZon AI Technologies Private Limited. All sovereign rights reserved.</span>
          <div className="sv-footer-love">
            Made with <span>♥</span> in India
          </div>
        </div>
      </div>
    </footer>
  );
}
