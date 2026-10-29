import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ROUTE_CONFIG = {
  '/about': { title: 'Our Philosophy' },
  '/philosophy': { title: 'Our Philosophy' },
  '/indus': { title: 'Our Philosophy' },
  '/pricing': { title: 'Pricing' },
  '/agents': { title: 'The 10 Specialists' },
  '/workflow': { title: 'Routines & Memory' },
  '/routines': { title: 'Routines & Memory' },
  '/tasks': { title: 'Routines & Memory' },
  '/agents/legal': { title: 'Legal Intelligence India', parent: { label: 'The 10 Specialists', path: '/agents' } },
  '/agents/market-intelligence': { title: 'Market & Trading Quant', parent: { label: 'The 10 Specialists', path: '/agents' } },
  '/agents/research': { title: 'Research & Deep Synthesis', parent: { label: 'The 10 Specialists', path: '/agents' } },
  '/agents/dev-studio': { title: 'Dev Studio Agent', parent: { label: 'The 10 Specialists', path: '/agents' } },
  '/agents/system-architect': { title: 'System Architect', parent: { label: 'The 10 Specialists', path: '/agents' } },
  '/agents/doc-intelligence': { title: 'Doc Intelligence & OCR', parent: { label: 'The 10 Specialists', path: '/agents' } },
  '/agents/video-analyser': { title: 'Video Analyser & Vision', parent: { label: 'The 10 Specialists', path: '/agents' } },
};

export default function Breadcrumb({ items, currentPage, className = '' }) {
  const location = useLocation();

  // If items explicitly provided, use them
  let breadcrumbItems = items;

  if (!breadcrumbItems) {
    const path = location.pathname;
    if (path === '/' || path === '') return null;

    const matched = ROUTE_CONFIG[path];
    if (matched) {
      if (matched.parent) {
        breadcrumbItems = [
          { label: 'Home', path: '/' },
          { label: matched.parent.label, path: matched.parent.path },
          { label: currentPage || matched.title },
        ];
      } else {
        breadcrumbItems = [
          { label: 'Home', path: '/' },
          { label: currentPage || matched.title },
        ];
      }
    } else {
      // Fallback
      const segment = path.replace(/^\//, '').split('/')[0];
      const fallbackTitle = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: currentPage || fallbackTitle },
      ];
    }
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] font-sans tracking-tight ${className}`}
    >
      {breadcrumbItems.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === breadcrumbItems.length - 1;

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-slate-300 font-light select-none px-0.5 sm:px-1">/</span>
            )}
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="inline-flex items-center gap-1.5 text-[#07091B] font-semibold hover:text-[#D97736] transition-colors duration-150"
              >
                {isFirst && (
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-[#07091B] leading-none shrink-0">
                    home
                  </span>
                )}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className="text-slate-500 font-normal truncate">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
