import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_SPECIALISTS = [
  {
    num: '01',
    name: 'Legal Intelligence India',
    tag: 'Statutory Core • 44 High Courts',
    icon: 'gavel',
    path: '/agents/legal',
  },
  {
    num: '02',
    name: 'Market & Trading Quant',
    tag: 'NSE Order-Book & Option Skew',
    icon: 'monitoring',
    path: '/agents/market-intelligence',
  },
  {
    num: '03',
    name: 'Dev Studio Agent',
    tag: 'Linux Container VM & Code Gen',
    icon: 'terminal',
    path: '/agents/dev-studio',
  },
  {
    num: '04',
    name: 'System Architect',
    tag: 'High-Availability Cloud VPC',
    icon: 'schema',
    path: '/agents/system-architect',
  },
  {
    num: '05',
    name: 'Mathematics & Logic',
    tag: 'SymPy Symbolic Proofs & PDEs',
    icon: 'functions',
    path: '/welcome',
  },
  {
    num: '06',
    name: 'Deep Research Engine',
    tag: 'Recursive DAG Tree Synthesis',
    icon: 'psychology',
    path: '/agents/research',
  },
  {
    num: '07',
    name: 'Fast Research Engine',
    tag: '<300ms Live Regulatory Oracles',
    icon: 'bolt',
    path: '/welcome',
  },
  {
    num: '08',
    name: 'General Reasoning',
    tag: '12 Indic Languages & Ideation',
    icon: 'chat',
    path: '/welcome',
  },
  {
    num: '09',
    name: 'Doc Intelligence & OCR',
    tag: 'Neural 200+ Page Batch OCR',
    icon: 'description',
    path: '/agents/doc-intelligence',
  },
  {
    num: '10',
    name: 'Sovereign Enclaves',
    tag: 'Zero-Retention Isolated Rooms',
    icon: 'folder_special',
    path: '/workflow',
  },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialistsHovered, setSpecialistsHovered] = useState(false);
  const [mobileSpecialistsOpen, setMobileSpecialistsOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-3 sm:top-5 left-0 right-0 w-full z-50 px-4 sm:px-6 pointer-events-none transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/95 backdrop-blur-md border border-[#E6E4DD] shadow-[0_8px_30px_rgba(0,0,0,0.04)] pointer-events-auto flex items-center justify-between">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Grizon AI">
            <img
              src="/grizon-icon.png"
              alt="Grizon AI Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-sans text-[20px] sm:text-[22px] font-extrabold text-[#07091B] tracking-tight leading-none group-hover:text-[#1E3A3A] transition-colors">
              Grizon AI
            </span>
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-sans font-medium">
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

          {/* The 10 Specialists with Hover Dropdown */}
          <div
            className="relative group py-1"
            onMouseEnter={() => setSpecialistsHovered(true)}
            onMouseLeave={() => setSpecialistsHovered(false)}
          >
            <Link
              to="/agents"
              className={`inline-flex items-center gap-1 transition-colors duration-150 ${
                isActive('/agents')
                  ? 'text-[#07091B] font-semibold'
                  : 'text-slate-500 hover:text-[#07091B]'
              }`}
            >
              <span>The 10 Specialists</span>
              <span className={`material-symbols-outlined text-[16px] text-slate-400 group-hover:text-[#6630E4] transition-transform duration-200 ${specialistsHovered ? 'rotate-180 text-[#6630E4]' : ''}`}>
                expand_more
              </span>
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[620px] transition-all duration-200 z-50 ${
                specialistsHovered
                  ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                  : 'opacity-0 invisible translate-y-1 pointer-events-none'
              }`}
            >
              <div
                className="rounded-2xl bg-white border border-[#E6E4DD] shadow-[0_24px_60px_rgba(7,9,27,0.14)] p-4 text-left"
                style={{ backgroundColor: '#ffffff' }}
              >
                {/* Header inside dropdown */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E6E4DD] px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6630E4]"></span>
                    <span className="font-sans text-xs uppercase tracking-wider text-[#07091B] font-bold">
                      Specialist Fleet • 10 Domain Minds
                    </span>
                  </div>
                  <span className="font-sans text-[11px] text-slate-500">
                    Zero Cross-Tenant Training
                  </span>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-2 gap-1.5">
                  {NAV_SPECIALISTS.map((spec) => (
                    <Link
                      key={spec.num}
                      to={spec.path}
                      onClick={() => setSpecialistsHovered(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF9F5] border border-transparent hover:border-[#E6E4DD] transition-all group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F5F1FD] border border-[#E8E0FB] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-[#6630E4]/40 group-hover/item:bg-[#6630E4] transition-all">
                        <span className="material-symbols-outlined text-[16px] text-[#6630E4] group-hover/item:text-white transition-colors">
                          {spec.icon}
                        </span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[10px] text-slate-400 font-bold">
                            {spec.num}
                          </span>
                          <span className="font-sans text-xs font-bold text-[#07091B] group-hover/item:text-[#6630E4] transition-colors truncate">
                            {spec.name}
                          </span>
                        </div>
                        <span className="font-sans text-[11px] text-slate-500 truncate mt-0.5">
                          {spec.tag}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Dropdown Footer */}
                <div className="pt-3 mt-2 border-t border-[#E6E4DD] flex items-center justify-end px-2">
                  <Link
                    to="/agents"
                    onClick={() => setSpecialistsHovered(false)}
                    className="inline-flex items-center gap-1 font-sans text-xs font-bold text-[#6630E4] hover:text-[#5221C6] transition-colors"
                  >
                    <span>View All 10 Specialists</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

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
          
          {/* Mobile Specialists Accordion */}
          <div className="flex flex-col py-1 border-y border-[#E6E4DD]/60 my-1">
            <div className="flex items-center justify-between py-1">
              <Link
                to="/agents"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isActive('/agents') ? 'text-charcoal font-semibold' : 'text-slate-600'}`}
              >
                The 10 Specialists
              </Link>
              <button
                type="button"
                onClick={() => setMobileSpecialistsOpen(!mobileSpecialistsOpen)}
                className="p-1 text-slate-500"
              >
                <span className={`material-symbols-outlined text-[18px] transition-transform ${mobileSpecialistsOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
            </div>
            {mobileSpecialistsOpen && (
              <div className="pl-3 pr-1 py-2 flex flex-col gap-1.5 border-l-2 border-[#6630E4]/30 my-1">
                {NAV_SPECIALISTS.map((s) => (
                  <Link
                    key={s.num}
                    to={s.path}
                    onClick={() => {
                      setMobileSpecialistsOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs text-slate-600 hover:text-[#6630E4] py-1 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[14px] text-[#6630E4]">{s.icon}</span>
                    <span>{s.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

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