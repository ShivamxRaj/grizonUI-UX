import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest relative z-10 shadow-[0_-1px_12px_rgba(0,0,0,0.02)] border-t border-border-hairline">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-space-2xl pb-8 sm:pb-space-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 sm:mb-space-2xl">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                alt="GriZon AI Logo"
                className="h-8 w-8 object-contain"
                src="/logo.svg"
                onError={(e) => {
                  e.target.src = '/grizon-icon.png';
                }}
              />
              <span className="font-headline-sm text-base text-[#1e2033] font-bold">
                GriZon AI
              </span>
            </div>
            <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-sm mb-5 leading-relaxed">
              Purpose-built autonomous multi-agent intelligence ecosystem engineered for research, code, documents, and synthesis.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-label-code text-[10px] sm:text-label-code px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant uppercase tracking-wider font-semibold">
                SYSTEM ACTIVE
              </span>
              <span className="font-label-code text-[10px] sm:text-label-code px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed uppercase tracking-wider font-semibold">
                v3.2
              </span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 className="font-headline-sm text-sm sm:text-headline-sm text-primary mb-3 sm:mb-4 font-semibold">
              Product
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 font-body-sm text-xs sm:text-body-sm">
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <a href="/#features">Features</a>
              </li>
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <a href="/#agents">Agents</a>
              </li>
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <a href="/#pricing">Pricing</a>
              </li>
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <a href="https://app.grizonai.com">Workspace Canvas</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Agents */}
          <div>
            <h4 className="font-headline-sm text-sm sm:text-headline-sm text-primary mb-3 sm:mb-4 font-semibold">
              Agents
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 font-body-sm text-xs sm:text-body-sm">
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <Link to="/agents/research">Fast Research</Link>
              </li>
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <Link to="/agents/research">Deep Research</Link>
              </li>
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <Link to="/agents/dev-studio">Dev Studio</Link>
              </li>
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <Link to="/agents/market-intelligence">Market Analyst</Link>
              </li>
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <Link to="/agents/doc-intelligence">Video Analyser</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Trust */}
          <div>
            <h4 className="font-headline-sm text-sm sm:text-headline-sm text-primary mb-3 sm:mb-4 font-semibold">
              Company &amp; Trust
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 font-body-sm text-xs sm:text-body-sm">
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <Link to="/about">Privacy Policy</Link>
              </li>
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <Link to="/about">Terms of Service</Link>
              </li>
              <li className="text-on-surface-variant hover:text-on-surface transition-colors">
                <Link to="/about">Security Portal</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-space-lg border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-xs sm:text-body-sm text-on-surface-variant text-center sm:text-left">
          <div className="flex items-center gap-2">
            <p>© 2026 GriZon AI Technologies. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3 font-label-badge text-xs text-primary font-semibold">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container">
              <span className="material-symbols-outlined text-secondary text-sm">favorite</span>
              Made with devotion in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
