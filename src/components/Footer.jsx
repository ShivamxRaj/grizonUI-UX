import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/main.css';

/**
 * Footer — Clean Authentic GriZon AI Footer
 */
export default function Footer() {
  const location = useLocation();

  if (location.pathname === '/app' || location.pathname === '/indus') {
    return null;
  }

  const scrollToAnchor = (anchorId) => {
    const element = document.querySelector(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" className="navbar-logo" style={{ marginBottom: 16, display: 'inline-flex' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/grizon-logo.png" alt="Grizon AI" className="navbar-logo-img" />
              <span className="navbar-logo-text">Grizon AI</span>
            </Link>
            <p className="t-body" style={{ maxWidth: 320, fontSize: 14 }}>
              Multi-agent AI workspace with Auto Mode. Specialised agents for research, coding, documents, markets, and video analysis.
            </p>
          </div>

          {/* Specialised Agents Links */}
          <div className="footer-col">
            <div className="footer-col-title">Specialised Agents</div>
            <a href="#agents" onClick={(e) => { e.preventDefault(); scrollToAnchor('#agents'); }}>Auto Mode Routing</a>
            <a href="#agents" onClick={(e) => { e.preventDefault(); scrollToAnchor('#agents'); }}>Fast & Deep Research</a>
            <a href="#agents" onClick={(e) => { e.preventDefault(); scrollToAnchor('#agents'); }}>Dev Studio</a>
            <a href="#agents" onClick={(e) => { e.preventDefault(); scrollToAnchor('#agents'); }}>Data & Market Analyst</a>
            <a href="#agents" onClick={(e) => { e.preventDefault(); scrollToAnchor('#agents'); }}>System Architect</a>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <div className="footer-col-title">Product</div>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToAnchor('#features'); }}>Features</a>
            <a href="#showcase" onClick={(e) => { e.preventDefault(); scrollToAnchor('#showcase'); }}>Workspace & Canvas</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToAnchor('#pricing'); }}>Pricing Plans</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToAnchor('#faq'); }}>FAQ</a>
          </div>

          {/* Platform */}
          <div className="footer-col">
            <div className="footer-col-title">Workspace App</div>
            <Link to="/app">Launch Platform</Link>
            <Link to="/app">Dev Studio Workspace</Link>
            <a href="#">Privacy & Encryption</a>
            <a href="#">Security Standards</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Grizon AI. All rights reserved.</p>

          <div className="footer-bottom-right">
            <span className="footer-made-in">
              Made with <span className="heart-emoji" role="img" aria-label="love">❤️</span> in India
              <span className="footer-flag" aria-label="India Flag" style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: 4 }}>
                <svg width="19" height="13" viewBox="0 0 24 16" fill="none" style={{ borderRadius: 2 }}>
                  <rect width="24" height="5.33" fill="#FF9933" />
                  <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
                  <rect y="10.66" width="24" height="5.34" fill="#128807" />
                  <circle cx="12" cy="8" r="2.2" stroke="#000080" strokeWidth="0.8" fill="none" />
                  <circle cx="12" cy="8" r="0.6" fill="#000080" />
                </svg>
              </span>
            </span>

            <div className="footer-social-links">
              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Follow Grizon AI on X"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Connect with Grizon AI on LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Follow Grizon AI on Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
