import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavbarScroll } from '../hooks/useSarvam';
import '../styles/main.css';

/**
 * Navbar — Vibrant High-Contrast Floating Pill Navbar
 * Exactly matching official grizonai.com smooth anchor links & real logo
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  useNavbarScroll();

  // If on the app workspace dashboard (/app or /indus), render nothing so workspace gets 100% window
  if (location.pathname === '/app' || location.pathname === '/indus') {
    return null;
  }

  // Smooth scroll helper to navigate to anchor links on the landing page
  const scrollToAnchor = (anchorId) => {
    setMenuOpen(false);
    setActiveSection(anchorId);
    if (location.pathname !== '/') {
      window.location.href = `/${anchorId}`;
      return;
    }
    const element = document.querySelector(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: 'Features', anchor: '#features' },
    { label: 'Agents', anchor: '#agents' },
    { label: 'Product', anchor: '#showcase' },
    { label: 'Pricing', anchor: '#pricing' },
    { label: 'FAQ', anchor: '#faq' }
  ];

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-row">
          {/* Real Authentic Logo */}
          <Link to="/" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/grizon-logo.png"
              alt="Grizon AI Official Logo"
              className="navbar-logo-img"
            />
            <span className="navbar-logo-text">Grizon AI</span>
          </Link>

          {/* Center Floating Glass Pill Navigation */}
          <div className="nav-pill-container hidden lg:flex">
            {navItems.map((item) => (
              <a
                key={item.anchor}
                href={item.anchor}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAnchor(item.anchor);
                }}
                className={`nav-pill-link ${activeSection === item.anchor ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Buttons: Only Log in and Get Started */}
          <div className="navbar-actions">
            <Link to="/app" className="navbar-login-link">
              Log in
            </Link>
            <Link to="/app" className="btn-start">
              <span>Get Started</span>
              <span className="btn-shine" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className={`navbar-hamburger lg:hidden ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.anchor}
            href={item.anchor}
            onClick={(e) => {
              e.preventDefault();
              scrollToAnchor(item.anchor);
            }}
          >
            {item.label}
          </a>
        ))}
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link
            to="/app"
            className="navbar-login-link"
            style={{ textAlign: 'center', padding: '10px 0' }}
            onClick={() => setMenuOpen(false)}
          >
            Log in
          </Link>
          <Link
            to="/app"
            className="btn-start"
            style={{ textAlign: 'center' }}
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
