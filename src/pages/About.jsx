import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full bg-parchment-bg font-body-md text-body-md text-on-surface antialiased relative min-h-screen selection:bg-lavender-subtle selection:text-tertiary overflow-x-hidden pt-20 sm:pt-24 pb-16">
      {/* Subtle Ambient Glow Canvas Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] bg-gradient-to-b from-saffron-glow/10 via-lavender-subtle/10 to-transparent blur-[120px]" />
        <div className="absolute top-[420px] -right-32 w-96 h-96 bg-primary-fixed/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 sm:mb-10">
          <Link
            to="/"
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[15px]">home</span>
            <span>Home</span>
          </Link>
          <span className="text-on-surface-variant/40 font-body-sm text-body-sm">/</span>
          <span className="font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron-glow" />
            <span>About Us</span>
          </span>
        </nav>

        {/* Editorial Header Section */}
        <div className="max-w-3xl flex flex-col gap-2 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-surface-card shadow-sm w-fit border-0">
            <span className="w-2 h-2 rounded-full bg-saffron-glow shadow-[0_0_8px_rgba(247,168,89,0.9)] animate-pulse" />
            <span className="font-label-code text-label-code tracking-widest text-on-surface uppercase">
              Mission &amp; Vision
            </span>
          </div>
          <h1 className="font-display-hero text-4xl sm:text-5xl md:text-[56px] text-primary tracking-tight font-normal leading-tight">
            About GriZon AI
          </h1>
          <p className="font-headline-lg text-lg sm:text-2xl text-on-surface-variant font-normal leading-relaxed mt-2 text-balance">
            Our mission: make specialised AI agents accessible, transparent, and reliable for creators, developers, and professionals worldwide.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-2 font-label-code text-label-code text-on-surface-variant uppercase tracking-wider">
              <span className="material-symbols-outlined text-agent-dev-studio text-[16px]">verified</span>
              <span>Sovereign Architecture 2.4</span>
            </div>
            <span className="text-on-surface-variant/30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2 font-label-code text-label-code text-on-surface-variant uppercase tracking-wider">
              <span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
              <span>Zero Model Training</span>
            </div>
          </div>
        </div>

        {/* Verified Visual Storytelling: Editorial Collage & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 sm:mb-16 items-stretch">
          <div className="lg:col-span-7 bg-surface-card rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden border border-border-hairline">
            <div className="space-y-4 z-10">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code text-agent-deep-research tracking-wider uppercase bg-primary-fixed/40 px-3 py-1 rounded-full">
                  Autonomous Inference Manifesto
                </span>
                <span className="font-label-code text-label-code text-on-surface-variant">EST. 2024</span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[36px] text-primary leading-tight font-normal">
                Built on the belief that specialized craft outperforms generalist approximations.
              </h2>
              <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Modern enterprises and high-velocity engineers do not require another conversational mirror. They require focused autonomous instruments capable of mathematical precision in codebase generation, rigorous document interrogation with verified line-level citations, and real-time sovereign market synthesis.
              </p>
            </div>
            <div className="mt-8 pt-4 bg-surface-container-low/60 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline-sm font-semibold">
                  G
                </div>
                <div>
                  <p className="font-body-md text-sm font-semibold text-on-surface">The GriZon Engineering Council</p>
                  <p className="font-body-sm text-xs text-on-surface-variant">Bengaluru • Delhi NCR</p>
                </div>
              </div>
              <span className="font-label-code text-label-code text-on-surface-variant bg-surface-card px-2.5 py-1 rounded border border-border-hairline">
                SECURE DPDP-COMPLIANT NODE
              </span>
            </div>
            {/* Decorative subtle typography in background */}
            <span className="absolute -right-6 -bottom-10 font-headline-lg text-[130px] text-surface-container-high/30 select-none pointer-events-none italic">
              Sovereign
            </span>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="relative h-64 lg:h-auto flex-1 rounded-2xl overflow-hidden shadow-sm border border-border-hairline group">
              <img
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                alt="Modern serene workspace in India featuring a warm sunlit stone desk, ambient linen textures, a pristine minimalist monitor displaying agent graphs, warm saffron light glow, soft architectural brutalism."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEvGwYR1u5USlp2o3BY5lA_YiVYmHB8AjVp7P95xHN2AeyJfcciSZYnqYPTjljsjHMCCLv5QOOtcy30bhKZs_5OLiUkBsATdjTFRKGHQHox4-PnLi3zYIEPI-v-EVQLv4SNK8f6pMFtyJNG8cwPMQs1lclj3ed1KVgx3gIEvgi_XvzJGP-dkjK1xmuMHNFZ5o2QP_8_70-MJrobVFm-O5ZyRhn-10jqsyT9jZTOhbr6ieYl35oMwTz"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <p className="font-body-sm text-xs sm:text-sm text-on-primary font-medium tracking-wide">
                  Calm computing • Autonomous multi-agent orchestration
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-surface-card shadow-sm border border-border-hairline flex items-center justify-between gap-4">
              <div>
                <p className="font-headline-sm text-base sm:text-lg text-on-surface font-semibold">Precision-Tuned Engines</p>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">Isolated execution envelopes for total enterprise data safety.</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-saffron-glow/15 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[24px]">hub</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Core Pillars */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
            <div>
              <span className="font-label-code text-label-code text-secondary tracking-widest uppercase">
                FOUNDATIONAL ARCHITECTURE
              </span>
              <h3 className="font-display-hero text-2xl sm:text-3xl md:text-4xl text-primary mt-1 font-normal">
                Core Pillars of GriZon
              </h3>
            </div>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant max-w-sm">
              Designed for transparent governance, mathematical certainty, and effortless professional acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Who We Are */}
            <div className="bg-surface-card p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline hover:-translate-y-0.5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">group_work</span>
                  </span>
                  <span className="font-label-code text-label-code text-on-surface-variant tracking-wider uppercase bg-surface-container px-2.5 py-1 rounded-full">
                    01 • Identity
                  </span>
                </div>
                <div className="pt-2">
                  <span className="font-label-code text-label-code text-agent-dev-studio uppercase tracking-widest block mb-1">
                    Multi-Agent Workspace
                  </span>
                  <h4 className="font-headline-md text-xl text-primary font-semibold">Who We Are</h4>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  GriZon AI is a multi-agent workspace with purpose-built specialised agents for research, coding, documents, markets, architecture, and video. We build for creators, developers, analysts, and professionals who want the right agent for the job — not a generic chatbot.
                </p>
              </div>
              <Link
                to="/agents"
                className="mt-6 pt-2 flex items-center gap-2 text-on-surface font-body-sm text-xs font-semibold hover:text-primary transition-colors"
              >
                <span>Explore Agent Matrix</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>

            {/* Pillar 2: Our Mission */}
            <div className="bg-surface-card p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline hover:-translate-y-0.5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">alt_route</span>
                  </span>
                  <span className="font-label-code text-label-code text-on-surface-variant tracking-wider uppercase bg-surface-container px-2.5 py-1 rounded-full">
                    02 • Purpose
                  </span>
                </div>
                <div className="pt-2">
                  <span className="font-label-code text-label-code text-secondary uppercase tracking-widest block mb-1">
                    Adaptive Auto-Routing
                  </span>
                  <h4 className="font-headline-md text-xl text-primary font-semibold">Our Mission</h4>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  We believe AI should be accessible, transparent, and reliable. Auto Mode routes each request to the best eligible agent on your plan, or you can pick from the catalogue — Fast Research, Dev Studio, Data &amp; Market Analyst, Video Analyser, and more — so you stay focused on the work.
                </p>
              </div>
              <Link
                to="/#features"
                className="mt-6 pt-2 flex items-center gap-2 text-on-surface font-body-sm text-xs font-semibold hover:text-secondary transition-colors"
              >
                <span>Inspect Auto Mode</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>

            {/* Pillar 3: Why GriZon AI */}
            <div className="bg-surface-card p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-border-hairline hover:-translate-y-0.5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-agent-deep-research group-hover:bg-agent-deep-research group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  </span>
                  <span className="font-label-code text-label-code text-on-surface-variant tracking-wider uppercase bg-surface-container px-2.5 py-1 rounded-full">
                    03 • Integrity
                  </span>
                </div>
                <div className="pt-2">
                  <span className="font-label-code text-label-code text-agent-deep-research uppercase tracking-widest block mb-1">
                    Enterprise Cryptography &amp; Trust
                  </span>
                  <h4 className="font-headline-md text-xl text-primary font-semibold">Why GriZon AI</h4>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  One workspace for specialised agents, file uploads, citations, and downloadable artifacts. Transparent credit plans from Free to Elite, data privacy first, and encryption for your conversations and files. We’re here to simplify your AI workflow so you can focus on what matters.
                </p>
              </div>
              <Link
                to="/#pricing"
                className="mt-6 pt-2 flex items-center gap-2 text-on-surface font-body-sm text-xs font-semibold hover:text-agent-deep-research transition-colors"
              >
                <span>Read Trust Paper</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Key Verified Metrics Strip */}
        <div className="mb-12 sm:mb-16 bg-surface-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border-hairline">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            {/* Metric 1 */}
            <div className="p-2 sm:p-4 flex flex-col justify-center">
              <span className="font-headline-lg text-3xl sm:text-[44px] text-primary leading-none font-normal">8</span>
              <span className="font-body-md text-sm sm:text-base font-semibold text-on-surface mt-2">Specialised Agents</span>
              <span className="font-body-sm text-xs text-on-surface-variant">Purpose-built workflows</span>
            </div>
            {/* Metric 2 */}
            <div className="p-2 sm:p-4 flex flex-col justify-center">
              <span className="font-headline-lg text-3xl sm:text-[44px] text-secondary leading-none font-normal">Auto</span>
              <span className="font-body-md text-sm sm:text-base font-semibold text-on-surface mt-2">Smart Routing</span>
              <span className="font-body-sm text-xs text-on-surface-variant">Dispatches by query intent</span>
            </div>
            {/* Metric 3 */}
            <div className="p-2 sm:p-4 flex flex-col justify-center">
              <span className="font-headline-lg text-3xl sm:text-[44px] text-agent-dev-studio leading-none font-normal">100%</span>
              <span className="font-body-md text-sm sm:text-base font-semibold text-on-surface mt-2">Transparent Credits</span>
              <span className="font-body-sm text-xs text-on-surface-variant">Visible in your wallet</span>
            </div>
            {/* Metric 4 */}
            <div className="p-2 sm:p-4 flex flex-col justify-center">
              <span className="font-headline-lg text-3xl sm:text-[44px] text-primary leading-none font-normal">256-bit</span>
              <span className="font-body-md text-sm sm:text-base font-semibold text-on-surface mt-2">Data Privacy</span>
              <span className="font-body-sm text-xs text-on-surface-variant">Zero model training</span>
            </div>
          </div>
        </div>

        {/* Agent Family Taxonomy Showcase */}
        <div className="mb-12 sm:mb-16 bg-surface-container-low/70 rounded-2xl p-6 sm:p-10 border border-border-hairline">
          <div className="max-w-2xl mb-8">
            <span className="font-label-code text-label-code text-agent-deep-research uppercase tracking-widest font-semibold">
              ECOSYSTEM SPECIALIZATIONS
            </span>
            <h3 className="font-display-hero text-2xl sm:text-3xl text-primary mt-1 font-normal">
              A catalogue engineered for high-rigor domain outputs
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mt-2 leading-relaxed">
              No single neural backbone satisfies all problem spaces. GriZon decouples tasks into purpose-instantiated agents with dedicated context memory and custom toolings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-card p-5 rounded-xl shadow-xs flex flex-col justify-between border border-border-hairline">
              <div>
                <div className="w-8 h-8 rounded-full bg-agent-deep-research/10 text-agent-deep-research flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[18px]">travel_explore</span>
                </div>
                <h4 className="font-headline-sm text-base text-primary font-semibold">Fast &amp; Deep Research</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  Multi-hop synthesis with peer-reviewed source validation.
                </p>
              </div>
              <span className="font-label-code text-[11px] text-on-surface-variant mt-4 pt-2 border-t border-border-hairline/60 block">
                128k Live Citations
              </span>
            </div>
            <div className="bg-surface-card p-5 rounded-xl shadow-xs flex flex-col justify-between border border-border-hairline">
              <div>
                <div className="w-8 h-8 rounded-full bg-agent-dev-studio/10 text-agent-dev-studio flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                </div>
                <h4 className="font-headline-sm text-base text-primary font-semibold">Dev Studio</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  Production AST linting, test suites, and multi-file refactoring.
                </p>
              </div>
              <span className="font-label-code text-[11px] text-on-surface-variant mt-4 pt-2 border-t border-border-hairline/60 block">
                Sandboxed Execution
              </span>
            </div>
            <div className="bg-surface-card p-5 rounded-xl shadow-xs flex flex-col justify-between border border-border-hairline">
              <div>
                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[18px]">query_stats</span>
                </div>
                <h4 className="font-headline-sm text-base text-primary font-semibold">Market &amp; Data Analyst</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  Quantitative balance-sheet modeling and macro indicators.
                </p>
              </div>
              <span className="font-label-code text-[11px] text-on-surface-variant mt-4 pt-2 border-t border-border-hairline/60 block">
                Instant SVG Visualizer
              </span>
            </div>
            <div className="bg-surface-card p-5 rounded-xl shadow-xs flex flex-col justify-between border border-border-hairline">
              <div>
                <div className="w-8 h-8 rounded-full bg-agent-legal/10 text-agent-legal flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[18px]">play_circle</span>
                </div>
                <h4 className="font-headline-sm text-base text-primary font-semibold">Video &amp; Doc Analyser</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  Frame-by-frame scene indexing, OCR extraction, and legal digest.
                </p>
              </div>
              <span className="font-label-code text-[11px] text-on-surface-variant mt-4 pt-2 border-t border-border-hairline/60 block">
                Up to 2GB Artifacts
              </span>
            </div>
          </div>
        </div>

        {/* Start Free CTA Card (Obsidian sovereign deployment banner) */}
        <div className="relative w-full rounded-2xl bg-primary text-on-primary p-8 sm:p-12 overflow-hidden shadow-xl">
          {/* Chromatic Accent Auras inside Card */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-container/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary-fixed-dim/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest/10 text-saffron-glow">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-glow animate-ping" />
              <span className="font-label-code text-label-code uppercase tracking-widest font-semibold">
                Continuous Multi-Agent Inference
              </span>
            </div>
            <h3 className="font-display-hero text-2xl sm:text-3xl md:text-4xl text-on-primary font-normal tracking-tight">
              Ready for agents that fit the job?
            </h3>
            <p className="font-body-lg text-sm sm:text-base text-on-primary-container max-w-2xl leading-relaxed">
              Start free with Auto Mode today, then unlock specialised agents for research, code, markets, docs, and video.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-card text-primary font-body-md text-sm font-semibold hover:bg-surface-bright hover:scale-[1.015] active:scale-[0.99] transition-all shadow-md"
                href="https://app.grizonai.com"
              >
                <span>Start with AI Free</span>
                <span className="text-secondary font-bold">⚡</span>
              </a>
              <Link
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-container/80 text-on-primary font-body-md text-sm font-medium hover:bg-primary-container transition-all"
                to="/#pricing"
              >
                <span>View Plans</span>
                <span className="material-symbols-outlined text-[18px] ml-1.5">north_east</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 pt-2 font-body-sm text-xs text-on-primary-container/80">
              <span className="material-symbols-outlined text-[15px] text-saffron-glow">check_circle</span>
              <span>No credit card required • Instant sandbox deployment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
