import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF9F5] border-t border-hairline pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Brand Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-hairline gap-4">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2.5 tracking-tight group" aria-label="GriZon AI">
              <img
                src="/grizon-icon.png"
                alt="GriZon AI Logo"
                className="w-6 h-6 object-contain rounded-md"
              />
              <div className="flex items-baseline gap-1.5">
                <span className="font-syne text-[20px] font-bold text-charcoal tracking-[-0.03em] leading-none group-hover:text-botanical transition-colors">
                  GriZon
                </span>
                <span className="font-mono text-[9px] font-bold tracking-[0.16em] uppercase text-white bg-charcoal px-1.5 py-[2px] rounded leading-none shadow-xs group-hover:bg-botanical transition-colors">
                  AI
                </span>
              </div>
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mutedInk font-medium ml-2 pl-3 border-l border-hairline">
              Autonomous Intelligence
            </span>
          </div>

        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-hairline">
          {/* Specialists */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] uppercase text-charcoal font-semibold tracking-[0.1em] mb-2">
              Specialists
            </span>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/agents">
              The 10 Specialists
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/agents">
              Domain Ensembles
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/agents">
              Custom Archetypes
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              Evaluation &amp; Drift
            </Link>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] uppercase text-charcoal font-semibold tracking-[0.1em] mb-2">
              Platform
            </span>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/workflow">
              Routines &amp; Memory
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              National Data Rails
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/pricing">
              Pricing
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              DPDP &amp; Sovereignty
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] uppercase text-charcoal font-semibold tracking-[0.1em] mb-2">
              Company
            </span>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              Our Philosophy
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              Monographs
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              Press &amp; Archive
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              Careers
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] uppercase text-charcoal font-semibold tracking-[0.1em] mb-2">
              Legal
            </span>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              DPDP Compliance
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              Terms of Utility
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              Privacy Manifesto
            </Link>
            <Link className="font-sans text-[13.5px] text-mutedInk hover:text-charcoal transition-colors" to="/about">
              Security Disclosures
            </Link>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[12px] text-mutedInk">
          <p>© 2026 Grizon AI. All rights reserved.</p>
          <p className="font-sans italic text-[13px] text-mutedInk">Made with devotion in India.</p>
        </div>
      </div>
    </footer>
  );
}
