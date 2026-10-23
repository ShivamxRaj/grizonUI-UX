import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 left-0 right-0 w-full z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-hairline transition-all">
      <div className="h-20 max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2.5 tracking-tight group" aria-label="GriZon AI">
            <img
              src="/grizon-icon.png"
              alt="GriZon AI Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-md transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex items-baseline gap-1.5">
              <span className="font-syne text-[22px] sm:text-[25px] font-bold text-charcoal tracking-[-0.03em] leading-none group-hover:text-botanical transition-colors">
                GriZon
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-white bg-charcoal px-1.5 py-[2.5px] rounded leading-none shadow-xs group-hover:bg-botanical transition-colors">
                AI
              </span>
            </div>
          </Link>
          <div className="hidden sm:inline-flex items-center pl-3 border-l border-hairline">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-mutedInk/80 font-medium">Autonomous Intelligence</span>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px]">
          <Link
            to="/"
            className={`transition-colors duration-150 ${
              isActive('/')
                ? 'text-charcoal font-medium pb-0.5 border-b border-charcoal'
                : 'text-mutedInk hover:text-charcoal'
            }`}
          >
            Home
          </Link>
          <Link
            to="/agents"
            className={`transition-colors duration-150 ${
              isActive('/agents')
                ? 'text-charcoal font-medium pb-0.5 border-b border-charcoal'
                : 'text-mutedInk hover:text-charcoal'
            }`}
          >
            The 10 Specialists
          </Link>
          <Link
            to="/workflow"
            className={`transition-colors duration-150 ${
              isActive('/workflow')
                ? 'text-charcoal font-medium pb-0.5 border-b border-charcoal'
                : 'text-mutedInk hover:text-charcoal'
            }`}
          >
            Routines &amp; Memory
          </Link>
          <Link
            to="/pricing"
            className={`transition-colors duration-150 ${
              isActive('/pricing')
                ? 'text-charcoal font-medium pb-0.5 border-b border-charcoal'
                : 'text-mutedInk hover:text-charcoal'
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className={`transition-colors duration-150 ${
              isActive('/about')
                ? 'text-charcoal font-medium pb-0.5 border-b border-charcoal'
                : 'text-mutedInk hover:text-charcoal'
            }`}
          >
            Our Philosophy
          </Link>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/welcome"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-botanical text-white font-sans text-[13px] font-medium tracking-tight hover:bg-botanical/90 active:scale-[0.98] transition-all shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
          >
            Start Your Workspace
          </Link>
          <Link
            to="/app"
            className="w-9 h-9 rounded-full bg-surfacePure border border-hairline flex items-center justify-center text-mutedInk hover:text-charcoal hover:border-mutedInk/40 transition-colors"
            title="Sign In"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-botanical transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-alabaster border-b border-hairline px-6 py-5 flex flex-col gap-4 text-[15px] animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${isActive('/') ? 'text-charcoal font-semibold' : 'text-mutedInk'}`}
          >
            Home
          </Link>
          <Link
            to="/agents"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${isActive('/agents') ? 'text-charcoal font-semibold' : 'text-mutedInk'}`}
          >
            The 10 Specialists
          </Link>
          <Link
            to="/workflow"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${isActive('/workflow') ? 'text-charcoal font-semibold' : 'text-mutedInk'}`}
          >
            Routines &amp; Memory
          </Link>
          <Link
            to="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${isActive('/pricing') ? 'text-charcoal font-semibold' : 'text-mutedInk'}`}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${isActive('/about') ? 'text-charcoal font-semibold' : 'text-mutedInk'}`}
          >
            Our Philosophy
          </Link>
        </div>
      )}
    </header>
  );
}
