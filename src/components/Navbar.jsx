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
    <header className="sticky top-3 sm:top-5 left-0 right-0 w-full z-50 px-4 sm:px-6 pointer-events-none transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/95 backdrop-blur-md border border-[#E6E4DD] shadow-[0_8px_30px_rgba(0,0,0,0.04)] pointer-events-auto flex items-center justify-between">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="GriZon AI">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1E3A3A] to-[#2DD4BF] p-[2px] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <img
                  src="/grizon-icon.png"
                  alt="GriZon AI Logo"
                  className="w-5 h-5 object-contain"
                />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-syne text-[20px] sm:text-[22px] font-bold text-charcoal tracking-[-0.03em] leading-none group-hover:text-botanical transition-colors">
                GriZon
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase text-white bg-[#0A0D18] px-1.5 py-[2px] rounded leading-none">
                AI
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium">
          <Link
            to="/"
            className={`transition-colors duration-150 ${
              isActive('/')
                ? 'text-[#07091B] font-semibold'
                : 'text-slate-500 hover:text-[#07091B]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/agents"
            className={`flex items-center gap-1 transition-colors duration-150 ${
              isActive('/agents')
                ? 'text-[#07091B] font-semibold'
                : 'text-slate-500 hover:text-[#07091B]'
            }`}
          >
            <span>The 10 Specialists</span>
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
          </Link>
          <Link
            to="/workflow"
            className={`transition-colors duration-150 ${
              isActive('/workflow')
                ? 'text-[#07091B] font-semibold'
                : 'text-slate-500 hover:text-[#07091B]'
            }`}
          >
            Routines &amp; Memory
          </Link>
          <Link
            to="/pricing"
            className={`transition-colors duration-150 ${
              isActive('/pricing')
                ? 'text-[#07091B] font-semibold'
                : 'text-slate-500 hover:text-[#07091B]'
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className={`transition-colors duration-150 ${
              isActive('/about')
                ? 'text-[#07091B] font-semibold'
                : 'text-slate-500 hover:text-[#07091B]'
            }`}
          >
            Our Philosophy
          </Link>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://app.grizonai.com/"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0A0D18] text-white font-sans text-xs sm:text-[13px] font-bold tracking-tight hover:bg-black active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Launch App</span>
          </a>
          <a
            href="https://app.grizonai.com/"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
            title="Launch App"
          >
            <span className="material-symbols-outlined text-[17px]">person</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-700 hover:text-black transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto max-w-6xl mx-auto mt-2 p-5 rounded-2xl bg-white border border-[#E6E4DD] shadow-xl flex flex-col gap-3 text-[14px] animate-in fade-in slide-in-from-top-2 duration-200 lg:hidden">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${isActive('/') ? 'text-charcoal font-semibold' : 'text-slate-600'}`}
          >
            Home
          </Link>
          <Link
            to="/agents"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${isActive('/agents') ? 'text-charcoal font-semibold' : 'text-slate-600'}`}
          >
            The 10 Specialists
          </Link>
          <Link
            to="/workflow"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${isActive('/workflow') ? 'text-charcoal font-semibold' : 'text-slate-600'}`}
          >
            Routines &amp; Memory
          </Link>
          <Link
            to="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${isActive('/pricing') ? 'text-charcoal font-semibold' : 'text-slate-600'}`}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${isActive('/about') ? 'text-charcoal font-semibold' : 'text-slate-600'}`}
          >
            Our Philosophy
          </Link>
          <a
            href="https://app.grizonai.com/"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 py-2.5 rounded-full bg-[#0A0D18] text-white font-sans text-xs font-bold text-center"
          >
            Launch App
          </a>
        </div>
      )}
    </header>
  );
}
