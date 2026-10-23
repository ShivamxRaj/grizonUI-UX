import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SPECIALISTS_DATA = {
  legal: {
    id: 'legal',
    num: 'Specialist 02',
    name: 'Legal Intelligence India',
    group: 'Group I · Markets & Law',
    category: 'Statutory & Jurisprudence',
    version: 'v4.8.2',
    credits: '3.0–8.0 C',
    badge: 'Selected',
    tagline: 'Deterministic statutory analysis, precedent verification, and BNS concordance.',
    activeConnection: 'Active Judicial Connection',
    route: '/agents/legal',
    provenanceTags: [
      'eCourts Services API v4 (CNR Live)',
      'Indian Kanoon Sovereign Node',
      'BNS/BNSS/BSA Concordance',
      'Zero Hallucination Guarantee'
    ],
    reasoningBlueprint: [
      {
        step: '01',
        title: 'Fact Extraction & Jurisdiction Lock',
        badge: 'Stage 01',
        desc: 'Isolates material statements of claim, determinative dates, and geographic seat. Filters jurisdiction across Supreme Court, High Courts, and commercial tribunals (NCLT, ITAT, NCLAT).'
      },
      {
        step: '02',
        title: 'Date & Statutory Concordance Audit',
        badge: 'BNS Crosswalk',
        desc: 'Reconciles legacy Indian Penal Code (1860) and CrPC provisions against the contemporary Bharatiya Nyaya Sanhita (BNS 2023) based on the precise date of alleged occurrence.'
      },
      {
        step: '03',
        title: 'Precedent & Cause List Retrieval',
        badge: 'Live API Node',
        desc: 'Queries live against official eCourts CNR indexes and Supreme Court registries. Overruled authorities are discarded and pending review petitions before constitutional benches are flagged.'
      },
      {
        step: '04',
        title: 'Ratio Decidendi Extraction',
        badge: 'Weighting',
        desc: 'Separates actionable, binding legal holdings from casual judicial observations (obiter dicta). Maps the exact operative paragraphs to formulate the brief’s legal spine.'
      },
      {
        step: '05',
        title: 'Adversarial Counterargument Audit',
        badge: 'Pre-Trial Defense',
        desc: 'Simulates an opposing jurist persona to identify jurisdictional vulnerability, laches, non-joinder of parties, or conflicting High Court rulings prior to compilation.'
      }
    ],
    infrastructure: [
      { name: 'eCourts NJDG (16-Digit CNR)', tag: 'Sub-100ms' },
      { name: 'Indian Kanoon Precedents', tag: '1836–2026' },
      { name: 'MCA21 & RoC Filings', tag: 'Realtime' },
      { name: 'The Gazette of India (E-Gazette)', tag: 'Verified Node' }
    ],
    guardrails: [
      {
        label: 'Zero Invented Citations',
        desc: 'Never fabricates bench compositions or CNR references. If a 16-character CNR does not validate against the NJDG registry, generation automatically halts.'
      },
      {
        label: 'Jurisprudential Discipline',
        desc: 'Never presents an obiter dictum (casual bench remark) as binding ratio decidendi.'
      },
      {
        label: 'Temporal Precision',
        desc: 'Never applies post-July 2024 procedural codes (BNSS) to historical offences without explicit statutory transition notes.'
      }
    ],
    sampleOutput: {
      court: 'IN THE HIGH COURT OF DELHI AT NEW DELHI',
      docket: 'W.P.(C) 11209/2024 · U/Art 226',
      title: 'MEMORANDUM OF WRIT: Rebuttal against reassessment notice issued under Section 148A(b) of the Income-tax Act, 1961 for AY 2019-20.',
      p1Label: '1. Jurisdictional Invalidation:',
      p1Text: 'The impugned notice was dispatched without previous sanction of the specified authority as mandated by amended Section 151(ii). As held in Ganesh Dass Khanna v. ITO [AUTH-DLHC-2024-W389], absence of explicit approval from the Principal Chief Commissioner renders reopening ab initio void.',
      p2Label: '2. Escapement Threshold:',
      p2Text: 'Alleged escapement is quantified at INR 34.20 Lakhs, falling below the mandatory statutory threshold of INR 50 Lakhs specified under Section 149(1)(b) for periods exceeding three years.',
      actionBox: 'RECOMMENDED ACTION: Move for ex-parte ad-interim stay on consequential assessment proceedings at first call on Tuesday list.',
      verifySource: 'Verified: eCourts API · 2026-03-31',
      hash: 'SHA-256: 7fc92a9...c03b'
    }
  },

  market: {
    id: 'market',
    num: 'Specialist 01',
    name: 'Market & Trading Intelligence',
    group: 'Group I · Markets & Law',
    category: 'Derivatives & Equities',
    version: 'v5.1.0',
    credits: '4.5–7.0 C',
    badge: 'Popular',
    tagline: 'NSE/BSE order books, DCF modeling, bull vs bear adversary.',
    activeConnection: 'NSE Live Derivatives Feed',
    route: '/agents/market-intelligence',
    provenanceTags: [
      'NSE Real-Time Option Chain (PCR & Max Pain)',
      'Yahoo Finance Historical API',
      'RBI DBIE Macroeconomic Feed',
      'Adversarial Bull vs Bear Engine'
    ],
    reasoningBlueprint: [
      {
        step: '01',
        title: 'Price & Structural Trend Mapping',
        badge: 'Stage 01',
        desc: 'Maps multi-timeframe moving averages (20/50/200 DMA), liquidity sweeps, and price structure against the benchmark NIFTY 50 index.'
      },
      {
        step: '02',
        title: 'Derivatives Positioning & Open Interest',
        badge: 'F&O Core',
        desc: 'Extracts call/put strikes concentration, Put-Call Ratio (PCR) divergence, Max Pain levels, and gamma exposure (GEX) across current and next weekly expiry.'
      },
      {
        step: '03',
        title: 'Sector Relative Strength & Confluence',
        badge: 'Macro Feed',
        desc: 'Evaluates thematic sectoral momentum (e.g. NIFTY Auto vs NIFTY IT) to isolate idiosyncratic tailwinds versus systemic beta drift.'
      },
      {
        step: '04',
        title: 'Fundamental Multiples & Balance Sheet Health',
        badge: 'Valuation',
        desc: 'Analyzes forward P/E, EV/EBITDA, ROCE trajectories, and quarterly capex commitments from audited MCA21 and SEBI Regulation 30 filings.'
      },
      {
        step: '05',
        title: 'Adversarial Thesis & Invalidation Price',
        badge: 'Risk Gate',
        desc: 'Synthesizes both the Bull and Bear cases with equal epistemic weight and defines the exact price breach that strictly invalidates the thesis.'
      }
    ],
    infrastructure: [
      { name: 'NSE Derivatives API (Tick-Level)', tag: 'Sub-40ms' },
      { name: 'SEBI LODR Reg 30 Filings', tag: 'Realtime' },
      { name: 'Yahoo Finance Global Equities', tag: 'Historical' },
      { name: 'RBI DBIE Interest Rate Database', tag: 'Verified Node' }
    ],
    guardrails: [
      {
        label: 'Zero Price Predictions',
        desc: 'Never issues guaranteed price targets, "buy calls", or claims that PCR > 1 guarantees a market rally.'
      },
      {
        label: 'Mandatory Invalidation Level',
        desc: 'Every scenario analysis strictly requires a concrete invalidation condition (e.g. hourly close below specific pivot).'
      },
      {
        label: 'Educational & Research Disclaimer',
        desc: 'Enforces statutory compliance: outputs are institutional analytical research, not SEBI-registered portfolio advice.'
      }
    ],
    sampleOutput: {
      court: 'NATIONAL STOCK EXCHANGE OF INDIA · DERIVATIVES DESK',
      docket: 'RELIANCE · ₹2,984.50 (+1.42%) · Expiry 26-NOV',
      title: 'SYNTHESIS: Gamma skew and institutional call concentration ahead of weekly settlement.',
      p1Label: '1. Derivatives Structure:',
      p1Text: 'Heavy Call OI build-up at 3000 CE (42.8L contracts) acts as formidable short-term ceiling. Conversely, aggressive writing at 2950 PE (+14.2L shares added) establishes an active institutional floor.',
      p2Label: '2. Relative Strength:',
      p2Text: 'Outperforming NIFTY 50 by +0.65% with delivery volumes trending 1.4x above 10-day median. Implied Volatility (IV) stands at 16.8%, reflecting moderate pre-event pricing.',
      actionBox: 'ACTIONABLE REGIME: Bullish continuation valid above ₹2,945; invalidation triggered upon sustained 1-hour close below 2940.',
      verifySource: 'Verified: NSE Option Chain Engine · 09:14 IST',
      hash: 'SHA-256: 4a2e881...e91a'
    }
  },

  dev: {
    id: 'dev',
    num: 'Specialist 03',
    name: 'Dev Studio',
    group: 'Group II · Engineering & Math',
    category: 'Product & Full-Stack',
    version: 'v4.2.0',
    credits: '3.0–5.5 C',
    badge: 'Popular',
    tagline: 'Interactive UI preview, full-stack debugging, AST review.',
    activeConnection: 'Sandboxed V8 & HTML Canvas',
    route: '/agents/dev-studio',
    provenanceTags: [
      'Live HTML/CSS/JS Sandbox Generator',
      'Targeted Code AST Patching',
      '320px–1920px Responsive QA',
      'Zero Placeholder Standard'
    ],
    reasoningBlueprint: [
      {
        step: '01',
        title: 'Information Architecture & Hierarchy Planning',
        badge: 'Stage 01',
        desc: 'Prioritizes UX layout, core data entities, and keyboard accessibility before styling or micro-animations.'
      },
      {
        step: '02',
        title: 'Two-Tone System & CSS Token Synthesis',
        badge: 'Design System',
        desc: 'Generates semantic color tokens, typography scales, and 1px architectural grid lines without relying on generic frameworks.'
      },
      {
        step: '03',
        title: 'Full-Stack Code Implementation',
        badge: 'Code Engine',
        desc: 'Produces production-ready React/TypeScript or pure HTML/JS implementations with complete functional logic.'
      },
      {
        step: '04',
        title: 'Multi-Device Responsive QA Gate',
        badge: 'QA Audit',
        desc: 'Validates viewport rendering across 320px mobile, 768px tablet, and 1920px wide desktop displays with zero horizontal overflow.'
      },
      {
        step: '05',
        title: 'Interactive Integrity Verification',
        badge: 'Zero Dead Links',
        desc: 'Verifies all state triggers, filters, tabs, modal dialogs, and event listeners to ensure a fully functioning client experience.'
      }
    ],
    infrastructure: [
      { name: 'Sandboxed Node/V8 Runtime', tag: 'Zero-Escape' },
      { name: 'Oxlint & TypeScript 5 AST Parser', tag: 'Instant' },
      { name: 'Headless Chromium Layout QA', tag: 'Multi-Screen' },
      { name: 'Tailwind & Vanilla CSS Engine', tag: 'Optimized' }
    ],
    guardrails: [
      {
        label: 'Zero Code Placeholders',
        desc: 'Never writes comments like "// Add logic here" or unfinished placeholder functions.'
      },
      {
        label: 'Enforced Responsive Integrity',
        desc: 'Every interface must cleanly scale to 320px mobile with accessible 44px touch targets.'
      },
      {
        label: 'No Generic AI Templates',
        desc: 'Rejects cookie-cutter 3-card gradient SaaS templates in favor of bespoke agency-grade editorial precision.'
      }
    ],
    sampleOutput: {
      court: 'DEV STUDIO RUNTIME CANVAS · PRODUCTION ARTIFACT',
      docket: 'TreasuryRiskWorkbench.tsx · 100% Functional',
      title: 'ARTIFACT DELIVERED: Sovereign Multi-Currency Risk & Hedging Dashboard.',
      p1Label: '1. Architectural Blueprint:',
      p1Text: 'Constructed using editorial daylight palette (#FAF9F5), JetBrains Mono telemetry, and SVG sparkline renderers with zero external library bloat.',
      p2Label: '2. Responsive Verification:',
      p2Text: 'Verified across 320px mobile bottom sheets to 1920px 3-pane trading layout. Interactive multi-currency filter tabs wired with live state persistence.',
      actionBox: 'DEPLOYMENT STATUS: Build passed 0 errors (0.94s). Code ready for production import or sandbox preview.',
      verifySource: 'Verified: Vite AST Compiler & Chromium Sandbox',
      hash: 'SHA-256: 9b102ef...d402'
    }
  },

  architect: {
    id: 'architect',
    num: 'Specialist 04',
    name: 'System Architect',
    group: 'Group II · Engineering & Math',
    category: 'Cloud & Distributed Systems',
    version: 'v3.9.0',
    credits: '4.0–6.5 C',
    badge: 'Pro+',
    tagline: 'Distributed consensus, AWS VPC blueprints, ADR logs.',
    activeConnection: 'AWS Nitro & Cloud Pricing APIs',
    route: '/agents/system-architect',
    provenanceTags: [
      'Simplicity Before Complexity Gate',
      '1x to 100x Scale Bottleneck Models',
      'DPDP Data Residency Enclaves',
      'Mermaid Architecture Blueprints'
    ],
    reasoningBlueprint: [
      {
        step: '01',
        title: 'Requirements & Scale Quantification',
        badge: 'Stage 01',
        desc: 'Quantifies queries per second (QPS), write-to-read ratios, data retention lifecycles, and network transit costs.'
      },
      {
        step: '02',
        title: 'The "Simplicity First" Architectural Gate',
        badge: 'Pragmatism',
        desc: 'Actively rejects unneeded Kubernetes clusters, microservices, or distributed caches if a modular monolith with PostgreSQL suffices.'
      },
      {
        step: '03',
        title: 'Data Tier & Partitioning Design',
        badge: 'Database',
        desc: 'Formulates relational schemas, indexing strategies, read replicas, and connection pooling (PgBouncer) configurations.'
      },
      {
        step: '04',
        title: '1x / 10x / 100x Growth Invalidation Mapping',
        badge: 'Stress Test',
        desc: 'Pre-identifies exactly which database table or service will saturate first when user load scales by 10x and 100x.'
      },
      {
        step: '05',
        title: 'Statutory Data Sovereignty Compliance',
        badge: 'Infosec',
        desc: 'Ensures zero off-shore data egress under Indian DPDP Act 2023 with AWS Mumbai local-bucket replication policies.'
      }
    ],
    infrastructure: [
      { name: 'AWS ap-south-1 Pricing Index', tag: 'Live API' },
      { name: 'Mermaid.js Diagram Compiler', tag: 'Vector' },
      { name: 'PostgreSQL 16 Storage Model', tag: 'Deterministic' },
      { name: 'Terraform AWS VPC Module Library', tag: 'Production' }
    ],
    guardrails: [
      {
        label: 'Anti-Resume-Driven Development',
        desc: 'Never recommends complex distributed systems when a well-tuned single database can handle the workload.'
      },
      {
        label: 'Mandatory Cost Estimates',
        desc: 'Every proposed architecture must include an estimated monthly AWS/Cloud infrastructure burn breakdown.'
      },
      {
        label: 'Statutory Data Enclave Lock',
        desc: 'Flags any unencrypted cross-border transit of personally identifiable data under DPDP standards.'
      }
    ],
    sampleOutput: {
      court: 'SYSTEM ARCHITECT DECISION RECORD (ADR-042)',
      docket: 'Scale Evaluation · 8,000 DAU · 4-Engineer Team',
      title: 'RECOMMENDATION: Retain Modular Monolith + PostgreSQL Read Replica.',
      p1Label: '1. Architecture Verdict:',
      p1Text: 'Splitting into 12 microservices at 25 peak RPS introduces distributed transaction overhead and release friction with zero throughput benefit. Recommended path: enforce code module boundaries within a single deployable unit.',
      p2Label: '2. Immediate Optimizations:',
      p2Text: 'Introduce PgBouncer connection pooling to cap backend connections at 100, and offload document OCR jobs to an asynchronous Redis worker queue.',
      actionBox: 'SAVINGS FORECAST: Reduces planned cloud compute overhead by 68% while sustaining sub-35ms p99 query latency.',
      verifySource: 'Verified: System Architect ADR Registry',
      hash: 'SHA-256: 3c8812a...77b1'
    }
  },

  math: {
    id: 'math',
    num: 'Specialist 05',
    name: 'Mathematics & Quant',
    group: 'Group II · Engineering & Math',
    category: 'Exact Symbolic & Numerical',
    version: 'v4.0.0',
    credits: '3.5–5.0 C',
    badge: 'Dual-Proof',
    tagline: 'SymPy verified symbolic derivation, calculus, stochastic math.',
    activeConnection: 'Sandboxed Python (SymPy/SciPy)',
    route: '/agents',
    provenanceTags: [
      'Exact Symbolic Computation (SymPy)',
      'Arbitrary Precision Floating Point (mpmath)',
      'Independent Numerical Cross-Verification',
      'Zero Hallucinated Numbers'
    ],
    reasoningBlueprint: [
      {
        step: '01',
        title: 'Formal Mathematical Problem Specification',
        badge: 'Stage 01',
        desc: 'Translates natural-language problem statements into rigorous mathematical notation and domain boundaries.'
      },
      {
        step: '02',
        title: 'Exact Closed-Form Symbolic Derivation',
        badge: 'SymPy Engine',
        desc: 'Executes formal algebraic manipulations, derivatives, integrals, and limit evaluations using verified computer algebra.'
      },
      {
        step: '03',
        title: 'Independent Numerical Cross-Check',
        badge: 'SciPy / mpmath',
        desc: 'Cross-checks symbolic results against a 50-digit adaptive numerical quadrature algorithm to detect subtle branch cuts.'
      },
      {
        step: '04',
        title: 'Boundary & Invariant Examination',
        badge: 'Edge Cases',
        desc: 'Verifies continuity, boundary conditions, convergence domains, and pole singularities.'
      },
      {
        step: '05',
        title: 'Step-by-Step Pedagogical Proof Output',
        badge: 'Human Proof',
        desc: 'Outputs both the exact analytical closed form and an intuitive, verifiable proof trail.'
      }
    ],
    infrastructure: [
      { name: 'Python 3.12 SymPy Enclave', tag: 'Symbolic' },
      { name: 'mpmath 50-Digit Precision', tag: 'Numerical' },
      { name: 'SciPy Differential Solvers', tag: 'Stochastic' },
      { name: 'LaTeX Mathematical Typesetter', tag: 'Vector' }
    ],
    guardrails: [
      {
        label: 'Zero Mental Math Hallucinations',
        desc: 'Every mathematical result must be generated by executing code in a sandboxed Python runtime.'
      },
      {
        label: 'Mandatory Double-Check',
        desc: 'Never returns an analytical integral or eigenvalue without a matching numerical validation step.'
      },
      {
        label: 'Explicit Convergence Domain',
        desc: 'Must specify the exact domain where the series or formula is valid (e.g. |x| < 1).'
      }
    ],
    sampleOutput: {
      court: 'QUANTITATIVE COMPUTATION ENCLAVE',
      docket: 'Definite Integral Evaluation · Interval [0, 1]',
      title: 'CLOSED-FORM DERIVATION: Integral of ln(1 + x²) / (1 + x²) dx.',
      p1Label: '1. Analytical Exact Solution:',
      p1Text: 'Exact Closed Form = G - (π / 4) · ln(2), where G is Catalan’s constant (approximately 0.915965594177).',
      p2Label: '2. 50-Digit Numerical Cross-Check:',
      p2Text: 'Computed value = 0.3715693624388656. Residual between analytical expression and Gauss-Kronrod numerical quadrature is exactly 0.0e-50.',
      actionBox: 'PROOF VALIDATED: Both symbolic algebra and 50-digit floating-point solver confirm exact equivalence.',
      verifySource: 'Verified: SymPy 1.13 + mpmath Enclave',
      hash: 'SHA-256: 18fc490...a99c'
    }
  },

  'deep-research': {
    id: 'deep-research',
    num: 'Specialist 06',
    name: 'Deep Research',
    group: 'Group III · Research & Synthesis',
    category: 'Multi-Source Hypothesis Synthesis',
    version: 'v4.5.0',
    credits: '6.0–10.0 C',
    badge: 'Deep Multi-Step',
    tagline: 'Recursive DAG synthesis, comprehensive statutory dossiers.',
    activeConnection: 'Live Multi-Engine Search Cluster',
    route: '/agents/research',
    provenanceTags: [
      '5–8 Independent Primary Sources Checked',
      'Recursive Epistemic Tree Reasoning',
      'Conflicting Evidence Flagging',
      'Mandatory Source Citations [1..8]'
    ],
    reasoningBlueprint: [
      {
        step: '01',
        title: 'Core Hypothesis Decomposition',
        badge: 'Stage 01',
        desc: 'Breaks complex inquiries into targeted search vectors and identifies regulatory bodies governing the domain.'
      },
      {
        step: '02',
        title: 'Multi-Source Document Retrieval',
        badge: 'Tavily / Serper',
        desc: 'Fetches full-page content from 5 to 8 authoritative government gazettes, corporate filings, and peer-reviewed releases.'
      },
      {
        step: '03',
        title: 'Cross-Examination & Claim Corroboration',
        badge: 'Verification',
        desc: 'Compares statements across multiple sources. Discrepancies in dates, figures, or policy targets are highlighted explicitly.'
      },
      {
        step: '04',
        title: 'Statutory & Policy Risk Analysis',
        badge: 'Risk Matrix',
        desc: 'Identifies legal, financial, or operational hurdles rather than presenting an idealized one-sided summary.'
      },
      {
        step: '05',
        title: 'Cited Dossier Generation',
        badge: 'Deliverable',
        desc: 'Compiles findings into an executive report with numbered citations, risk matrices, and complete source bibliography.'
      }
    ],
    infrastructure: [
      { name: 'Serper Enterprise Web Index', tag: 'Realtime' },
      { name: 'Tavily Deep Retrieval API', tag: 'Verified' },
      { name: 'Official Gazette Document Fetcher', tag: 'Gov.in' },
      { name: 'Brave Search Independent Index', tag: 'Primary' }
    ],
    guardrails: [
      {
        label: 'Zero Unattributed Claims',
        desc: 'Every substantive factual assertion must link to an explicit numbered citation.'
      },
      {
        label: 'Surface Contradictions',
        desc: 'Never hides conflicting data between government announcements and ground reality reports.'
      },
      {
        label: 'No Speculative Extrapolations',
        desc: 'Clearly separates confirmed statutory facts from projected industry estimates.'
      }
    ],
    sampleOutput: {
      court: 'SOVEREIGN RESEARCH DOSSIER · ENERGY SECTOR',
      docket: 'National Green Hydrogen Mission · SIGHT Scheme Audit',
      title: 'SYNTHESIS: Electrolyzer Manufacturing Incentives & Off-Take Viability.',
      p1Label: '1. Financial Allocations:',
      p1Text: 'INR 17,490 Crores allocated under the Strategic Interventions for Green Hydrogen Transition (SIGHT) programme [1][2], allocating 3,000 MW/yr domestic manufacturing capacity in Tranche-II.',
      p2Label: '2. Regulatory Headwinds:',
      p2Text: 'Commercial binding off-take commitments remain below 28% capacity due to tariff uncertainty surrounding cross-border interstate transmission system (ISTS) waivers expiring in 2030 [4][5].',
      actionBox: 'CRITICAL RISK FACTOR: Long-term viability hinges on state electricity commissions formalizing banking regulations for green power.',
      verifySource: 'Verified: MNRE Gazette + CERC Notifications',
      hash: 'SHA-256: 8a712f0...2219'
    }
  },

  'fast-research': {
    id: 'fast-research',
    num: 'Specialist 07',
    name: 'Fast Research',
    group: 'Group III · Research & Synthesis',
    category: 'Rapid Real-Time Search',
    version: 'v3.2.0',
    credits: '1.5–3.0 C',
    badge: 'Sub-400ms',
    tagline: 'Sub-second verified web lookup, cryptographic provenance.',
    activeConnection: 'Instant Web Citation Engine',
    route: '/agents/research',
    provenanceTags: [
      'Sub-400ms Execution Latency',
      '1–3 Primary Source Citations',
      'Clean Markdown Briefing',
      'Real-Time Web Grounding'
    ],
    reasoningBlueprint: [
      {
        step: '01',
        title: 'Intent & Entity Disambiguation',
        badge: 'Stage 01',
        desc: 'Instantly identifies specific companies, regulatory notifications, or factual metrics requested.'
      },
      {
        step: '02',
        title: 'High-Speed Web Query Execution',
        badge: 'Fast API',
        desc: 'Dispatches targeted queries to live search engines with strict domain-weighting (gov.in, nseindia.com, reuters.com).'
      },
      {
        step: '03',
        title: 'Direct Passage Extraction',
        badge: 'Source Match',
        desc: 'Scrapes and extracts the precise paragraph answering the query rather than summarizing vague generalities.'
      },
      {
        step: '04',
        title: 'Inline Citation Verification',
        badge: 'Footnotes',
        desc: 'Affixes direct URL and publication date verification to each factual metric.'
      },
      {
        step: '05',
        title: 'Rapid Concise Response Delivery',
        badge: 'Instant Turn',
        desc: 'Delivers a crisp, 2-to-3 paragraph briefing within 400ms.'
      }
    ],
    infrastructure: [
      { name: 'Fast Web Grounding API', tag: '<400ms' },
      { name: 'Domain Trust Whitelist', tag: 'Curated' },
      { name: 'Live Press Release Wire', tag: 'Realtime' },
      { name: 'Cryptographic Provenance Hash', tag: 'Audit' }
    ],
    guardrails: [
      {
        label: 'No Fluff Writing',
        desc: 'Avoids boilerplate introductory and concluding remarks; delivers facts immediately.'
      },
      {
        label: 'Dated Citations',
        desc: 'Must report the exact publication date to prevent out-of-date policy confusion.'
      },
      {
        label: 'Strict Latency SLA',
        desc: 'Executes within 400ms or transparently informs user of network delay.'
      }
    ],
    sampleOutput: {
      court: 'FAST RESEARCH DISPATCH',
      docket: 'MNRE Battery Storage Viability Gap Funding · 2026',
      title: 'POLICY ALERT: VGF Scheme for 4,000 MWh Battery Energy Storage Systems (BESS).',
      p1Label: '1. Core Incentive:',
      p1Text: 'Ministry of Power confirmed financial support up to 40% of capital cost for 4,000 MWh BESS projects through Viability Gap Funding (VGF), targeted for commercial commissioning by 2027 [1].',
      p2Label: '2. State Quotas:',
      p2Text: 'Initial tenders issued via SECI allocate 1,200 MWh to Gujarat (GUVNL) and 800 MWh to Rajasthan (RUVNL) [2].',
      actionBox: 'SOURCE CONFIRMED: Official notification dated 18 March 2026 via Ministry of New and Renewable Energy portal.',
      verifySource: 'Verified: PIB / MNRE Official Feed',
      hash: 'SHA-256: 5f992a1...bc10'
    }
  },

  general: {
    id: 'general',
    num: 'Specialist 08',
    name: 'General Reasoning',
    group: 'Group III · Research & Synthesis',
    category: 'Foundational Intelligence',
    version: 'v3.5.0',
    credits: '1.0 C',
    badge: 'Lightweight',
    tagline: 'Unconstrained creative ideation & unstructured drafts.',
    activeConnection: 'Frontier LLM Router',
    route: '/app',
    provenanceTags: [
      'Cost-Effective 1.0 Credit Rate',
      'Multi-Model Fallback Routing',
      'Drafting, Brainstorming & Outlines',
      'Zero Complex Setup Required'
    ],
    reasoningBlueprint: [
      {
        step: '01',
        title: 'Task Understanding & Classification',
        badge: 'Stage 01',
        desc: 'Determines whether the task is creative, pedagogical, or drafting-oriented.'
      },
      {
        step: '02',
        title: 'Optimal Frontier Model Selection',
        badge: 'Smart Route',
        desc: 'Selects the fastest, most economical model (DeepSeek, Claude, or Gemini) to preserve user credits.'
      },
      {
        step: '03',
        title: 'Structured Narrative Formulation',
        badge: 'Drafting',
        desc: 'Drafts emails, essays, summaries, or structured brainstorming frameworks.'
      },
      {
        step: '04',
        title: 'Clarity & Conciseness Editing',
        badge: 'Tone Check',
        desc: 'Trims unnecessary corporate jargon to produce clean, articulate writing.'
      },
      {
        step: '05',
        title: 'Actionable Takeaways Compilation',
        badge: 'Delivery',
        desc: 'Provides concise, ready-to-copy output directly in the conversation pane.'
      }
    ],
    infrastructure: [
      { name: 'Multi-Model Frontier Pool', tag: 'Anthropic/Gemini' },
      { name: 'Credit Conservation Engine', tag: '1.0 Cr' },
      { name: 'Tone & Style Formatter', tag: 'Instant' },
      { name: 'Context Memory Stream', tag: 'Preserved' }
    ],
    guardrails: [
      {
        label: 'Transparent Capability Boundaries',
        desc: 'Alerts user when a question requires specialized court docket tracking or live option chains.'
      },
      {
        label: 'No Over-Engineering',
        desc: 'Does not invent elaborate unrequested deliverables for simple everyday questions.'
      },
      {
        label: 'Strict Credit Economy',
        desc: 'Guaranteed 1.0 credit per turn regardless of underlying model selected.'
      }
    ],
    sampleOutput: {
      court: 'GENERAL REASONING ENGINE',
      docket: 'Executive Communication · Investor Update',
      title: 'EXECUTIVE DRAFT: Quarterly Progress Letter for Board of Directors.',
      p1Label: '1. Strategic Narrative:',
      p1Text: 'Constructed an articulate 4-paragraph shareholder memo covering key quarterly metrics: 18% ARR growth, enterprise SOC-2 compliance milestone, and deployment of 10 autonomous sovereign specialist agents.',
      p2Label: '2. Tone Calibration:',
      p2Text: 'Calm, authoritative, and fact-focused without hyperbolic buzzwords. Ready for immediate distribution or modification.',
      actionBox: 'EFFICIENCY: Rendered in 310ms utilizing lightweight reasoning mode at 1.0 credit cost.',
      verifySource: 'Verified: General Assistant Engine',
      hash: 'SHA-256: 22c884f...991e'
    }
  },

  doc: {
    id: 'doc',
    num: 'Specialist 09',
    name: 'Doc Intelligence & Writer',
    group: 'Group IV · Documents & Media',
    category: 'Document Parsing & Formal Exports',
    version: 'v4.1.0',
    credits: '2.5–4.5 C',
    badge: 'OCR & PDF',
    tagline: 'Multi-modal PDF OCR, statutory memo drafting, zero decay.',
    activeConnection: 'High-Fidelity Document OCR',
    route: '/agents/doc-intelligence',
    provenanceTags: [
      'Zero-Loss Scanned Table OCR',
      'Contract Clause Risk Matrix',
      'Formal DOCX / PDF / XLSX Export',
      'Strict Chat-First Integrity'
    ],
    reasoningBlueprint: [
      {
        step: '01',
        title: 'Document Layout & Hierarchy Parsing',
        badge: 'Stage 01',
        desc: 'Extracts headings, nested clauses, multi-column layouts, and scanned signature blocks from uploaded PDFs or DOCX files.'
      },
      {
        step: '02',
        title: 'Table OCR & Financial Row Reconciliation',
        badge: 'Zero-Loss OCR',
        desc: 'Parses complex multi-page financial tables and verifies mathematical sum consistency across balance sheets and debt maturity schedules.'
      },
      {
        step: '03',
        title: 'Clause-by-Clause Risk Audit',
        badge: 'Risk Matrix',
        desc: 'Audits indemnities, non-competes, governing jurisdiction clauses, and uncapped liability provisions.'
      },
      {
        step: '04',
        title: 'Chat-First Concise Summary Delivery',
        badge: 'Chat-First Rule',
        desc: 'Delivers immediate key findings in the chat window rather than generating unwanted 20-page document downloads.'
      },
      {
        step: '05',
        title: 'Explicit Formal Deliverable Export',
        badge: 'DOCX / PDF',
        desc: 'When explicitly requested, exports formatted DOCX drafts, audit spreadsheets (XLSX), or executive presentation summaries.'
      }
    ],
    infrastructure: [
      { name: 'Multi-Modal PDF OCR Engine', tag: 'High-Res' },
      { name: 'Tabular Data Excel Exporter', tag: 'XLSX' },
      { name: 'Legal Clause Taxonomy Index', tag: 'Standard' },
      { name: 'DOCX Clean Formatter Engine', tag: 'Print-Ready' }
    ],
    guardrails: [
      {
        label: 'Chat-First Rule',
        desc: 'Never generates unsolicited multi-page file downloads unless the user specifically asks for an exported deliverable.'
      },
      {
        label: 'Zero Table Distortion',
        desc: 'Never guesses numerical numbers in distorted or low-resolution scanned tables.'
      },
      {
        label: 'Preserve Original Clause Language',
        desc: 'Always quotes the exact source paragraph alongside suggested redline alterations.'
      }
    ],
    sampleOutput: {
      court: 'DOCUMENT INTELLIGENCE ENCLAVE',
      docket: 'Master Services Agreement · 82-Page Contract Review',
      title: 'AUDIT REPORT: Indemnification, Intellectual Property & Termination Provisions.',
      p1Label: '1. High-Risk Clause Flagged:',
      p1Text: 'Section 14.3 contains an uncapped indemnity extending to indirect and consequential losses, shifting unlimited operational liability to the vendor without reciprocal protections.',
      p2Label: '2. Compliance Concordance:',
      p2Text: 'Data retention provisions under Section 9.2 conflict with statutory guidelines under India DPDP Act 2023, requiring deletion upon purpose completion.',
      actionBox: 'REDLINE GENERATED: Proposed substitute clause limiting indemnity to 12 months fees paid. Ready for DOCX export.',
      verifySource: 'Verified: Document OCR & Clause Parser',
      hash: 'SHA-256: 77a012e...fe44'
    }
  },

  video: {
    id: 'video',
    num: 'Specialist 10',
    name: 'Video Analyser',
    group: 'Group IV · Documents & Media',
    category: 'Temporal Multimodal Analysis',
    version: 'v3.8.0',
    credits: '4.0–6.0 C',
    badge: 'Pro+',
    tagline: 'Temporal frame extraction, on-screen text OCR, forensic audit.',
    activeConnection: 'Gemini Multimodal Vision API',
    route: '/agents/video-analyser',
    provenanceTags: [
      'Timestamped Event Indexing',
      'On-Screen Slide & Chart OCR',
      'Verbatim Transcript Cross-Check',
      'Frame-by-Frame Forensic Inspection'
    ],
    reasoningBlueprint: [
      {
        step: '01',
        title: 'Video Encoding & Temporal Ingestion',
        badge: 'Stage 01',
        desc: 'Samples video frames at strategic scene-change intervals to capture visual slides, speaker transitions, and on-screen metrics.'
      },
      {
        step: '02',
        title: 'Slide OCR & On-Screen Text Extraction',
        badge: 'Vision OCR',
        desc: 'Extracts tables, financial metrics, and architectural diagrams displayed on projection screens during product launches or earnings calls.'
      },
      {
        step: '03',
        title: 'Verbatim Speech-to-Text Synchronization',
        badge: 'Audio Sync',
        desc: 'Transcribes audio tracks with speaker attribution and synchronizes speech with corresponding visual frames.'
      },
      {
        step: '04',
        title: 'Chronological Timeline Indexing',
        badge: 'Timestamps',
        desc: 'Organizes the video into clickable timestamped chapters (e.g. 04:15 Product Announcement, 18:30 Q&A Session).'
      },
      {
        step: '05',
        title: 'Keyframe Evidence Dossier',
        badge: 'Deliverable',
        desc: 'Generates an executive briefing complete with key visual frames, transcribed quotes, and extracted tabular data.'
      }
    ],
    infrastructure: [
      { name: 'Gemini 1.5 Pro Video Vision', tag: 'Native 1M+' },
      { name: 'Temporal Scene Boundary Detector', tag: 'Sub-Frame' },
      { name: 'Multi-Speaker Audio Diarization', tag: 'Accurate' },
      { name: 'Slide OCR & Layout Reconstruction', tag: 'Vector' }
    ],
    guardrails: [
      {
        label: 'Mandatory Timestamps',
        desc: 'Every quote, claim, or slide summary must include the exact video timestamp (e.g. [14:22]).'
      },
      {
        label: 'No Imagined Visual Details',
        desc: 'Never assumes what is on screen if a video frame is blurry or obscured.'
      },
      {
        label: 'Verbatim Spoken Citation',
        desc: 'Preserves exact speaker phrasing without embellishment.'
      }
    ],
    sampleOutput: {
      court: 'MULTIMODAL VIDEO INTELLIGENCE',
      docket: 'Product Launch Keynote · 48 Minutes · 1080p',
      title: 'EVENT DOSSIER: Architecture announcements, benchmarks, and Q&A timestamps.',
      p1Label: '1. On-Screen Benchmark Slide [12:44]:',
      p1Text: 'Slide displayed 3.8x inference speedup over previous generation with 42% lower memory bandwidth requirements on L40S cluster.',
      p2Label: '2. Executive Announcement [27:10]:',
      p2Text: 'CTO confirmed general enterprise availability starting 15 May 2026 with native air-gapped VPC deployment support.',
      actionBox: 'INDEX GENERATED: 14 Clickable timestamp markers with slide OCR transcripts compiled.',
      verifySource: 'Verified: Multimodal Video Vision Enclave',
      hash: 'SHA-256: 44b190f...0012'
    }
  }
};

export default function Agents() {
  const [selectedAgentId, setSelectedAgentId] = useState('legal');
  const agent = SPECIALISTS_DATA[selectedAgentId] || SPECIALISTS_DATA.legal;

  return (
    <div className="w-full flex flex-col bg-alabaster">
      {/* =====================================================================
          MASTHEAD SECTION
      ====================================================================== */}
      <section className="w-full pt-10 md:pt-14 pb-10 border-b border-hairline/60">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8">
            <div className="max-w-3xl flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse"></span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-terracotta font-medium">
                  The Ten Specialist Minds
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[54px] leading-[1.12] text-charcoal font-normal tracking-tight">
                Generalist chat guesses. <br />
                <span className="italic text-botanical font-serif">Specialists verify.</span>
              </h1>
              <p className="font-sans text-[15px] md:text-base leading-relaxed text-mutedInk max-w-2xl mt-1">
                Each specialist operates with isolated cognitive parameters, directly grounded in verified institutional pipelines—from live High Court cause lists and NSE tick books to formal SymPy algebraic verification engines.
              </p>
            </div>

            {/* Quiet Telemetry Status Pill Card */}
            <div className="lg:w-80 shrink-0 bg-surfacePure border border-hairline rounded-xl p-4 flex flex-col gap-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between pb-2 border-b border-hairline/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal font-medium">
                    Auto-Router Active
                  </span>
                </div>
                <span className="font-mono text-[10px] text-mutedInk bg-surfaceMuted px-1.5 py-0.5 rounded">18ms</span>
              </div>
              <div className="space-y-1 font-mono text-[11px] text-mutedInk">
                <div className="flex justify-between">
                  <span>Sovereign Nodes:</span>
                  <span className="text-charcoal font-medium">10 Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Routing Topology:</span>
                  <span className="text-charcoal font-medium">DPDP Aligned</span>
                </div>
                <div className="flex justify-between">
                  <span>Cold Start Latency:</span>
                  <span className="text-charcoal font-medium">0.0s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          TWO-COLUMN MAGAZINE DIRECTORY
      ====================================================================== */}
      <section className="w-full py-10 md:py-12 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: Domain Archetypes Directory (3.8 / 12 cols) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-5">
              <div className="bg-surfacePure border border-hairline rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-hairline">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-mutedInk font-semibold">
                    Domain Archetypes
                  </span>
                  <span className="font-mono text-[11px] text-charcoal font-medium bg-surfaceMuted px-2 py-0.5 rounded">
                    10 Operational
                  </span>
                </div>

                {/* Group 1: Markets & Law */}
                <div className="mb-5">
                  <div className="flex items-center justify-between px-2.5 py-1 mb-2 bg-surfaceMuted rounded text-[11px] font-mono text-mutedInk uppercase tracking-wide">
                    <span>Group I · Markets &amp; Law</span>
                    <span>02</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {/* Market & Trading */}
                    <button
                      type="button"
                      onClick={() => setSelectedAgentId('market')}
                      className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                        selectedAgentId === 'market'
                          ? 'bg-surfaceAlt/60 border-l-4 border-l-botanical border border-hairline/80 shadow-xs'
                          : 'hover:bg-surfaceMuted/80 border border-transparent hover:border-hairline group'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-medium ${selectedAgentId === 'market' ? 'text-charcoal font-semibold' : 'text-charcoal group-hover:text-botanical'}`}>
                          Market &amp; Trading
                        </span>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline/60 ${selectedAgentId === 'market' ? 'bg-botanical text-white font-medium' : 'text-mutedInk bg-surfaceMuted'}`}>
                          4.5–7.0 C
                        </span>
                      </div>
                      <p className="text-[12px] text-mutedInk line-clamp-1 leading-normal">
                        NSE/BSE order books, DCF modeling, bull vs bear adversary
                      </p>
                    </button>

                    {/* Legal Intelligence India */}
                    <button
                      type="button"
                      onClick={() => setSelectedAgentId('legal')}
                      className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                        selectedAgentId === 'legal'
                          ? 'bg-surfaceAlt/60 border-l-4 border-l-botanical border border-hairline/80 shadow-xs'
                          : 'hover:bg-surfaceMuted/80 border border-transparent hover:border-hairline group'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-medium ${selectedAgentId === 'legal' ? 'text-charcoal font-semibold' : 'text-charcoal group-hover:text-botanical'}`}>
                          Legal Intelligence India
                        </span>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline/60 ${selectedAgentId === 'legal' ? 'bg-botanical text-white font-medium' : 'text-mutedInk bg-surfaceMuted'}`}>
                          3.0–8.0 C
                        </span>
                      </div>
                      <p className="text-[12px] text-mutedInk line-clamp-1 leading-normal">
                        eCourts CNR tracking, IPC/BNS crosswalk, HC precedents
                      </p>
                    </button>
                  </div>
                </div>

                {/* Group 2: Engineering & Math */}
                <div className="mb-5">
                  <div className="flex items-center justify-between px-2.5 py-1 mb-2 bg-surfaceMuted rounded text-[11px] font-mono text-mutedInk uppercase tracking-wide">
                    <span>Group II · Engineering &amp; Math</span>
                    <span>03</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {/* Dev Studio */}
                    <button
                      type="button"
                      onClick={() => setSelectedAgentId('dev')}
                      className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                        selectedAgentId === 'dev'
                          ? 'bg-surfaceAlt/60 border-l-4 border-l-botanical border border-hairline/80 shadow-xs'
                          : 'hover:bg-surfaceMuted/80 border border-transparent hover:border-hairline group'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-medium ${selectedAgentId === 'dev' ? 'text-charcoal font-semibold' : 'text-charcoal group-hover:text-botanical'}`}>
                          Dev Studio
                        </span>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline/60 ${selectedAgentId === 'dev' ? 'bg-botanical text-white font-medium' : 'text-mutedInk bg-surfaceMuted'}`}>
                          3.0–5.5 C
                        </span>
                      </div>
                      <p className="text-[12px] text-mutedInk line-clamp-1 leading-normal">
                        Interactive UI preview, full-stack debugging, AST review
                      </p>
                    </button>

                    {/* System Architect */}
                    <button
                      type="button"
                      onClick={() => setSelectedAgentId('architect')}
                      className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                        selectedAgentId === 'architect'
                          ? 'bg-surfaceAlt/60 border-l-4 border-l-botanical border border-hairline/80 shadow-xs'
                          : 'hover:bg-surfaceMuted/80 border border-transparent hover:border-hairline group'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-medium ${selectedAgentId === 'architect' ? 'text-charcoal font-semibold' : 'text-charcoal group-hover:text-botanical'}`}>
                          System Architect
                        </span>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline/60 ${selectedAgentId === 'architect' ? 'bg-botanical text-white font-medium' : 'text-mutedInk bg-surfaceMuted'}`}>
                          4.0–6.5 C
                        </span>
                      </div>
                      <p className="text-[12px] text-mutedInk line-clamp-1 leading-normal">
                        Distributed consensus, AWS VPC blueprints, ADR logs
                      </p>
                    </button>

                    {/* Mathematics & Quant */}
                    <button
                      type="button"
                      onClick={() => setSelectedAgentId('math')}
                      className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                        selectedAgentId === 'math'
                          ? 'bg-surfaceAlt/60 border-l-4 border-l-botanical border border-hairline/80 shadow-xs'
                          : 'hover:bg-surfaceMuted/80 border border-transparent hover:border-hairline group'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-medium ${selectedAgentId === 'math' ? 'text-charcoal font-semibold' : 'text-charcoal group-hover:text-botanical'}`}>
                          Mathematics &amp; Quant
                        </span>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline/60 ${selectedAgentId === 'math' ? 'bg-botanical text-white font-medium' : 'text-mutedInk bg-surfaceMuted'}`}>
                          3.5–5.0 C
                        </span>
                      </div>
                      <p className="text-[12px] text-mutedInk line-clamp-1 leading-normal">
                        SymPy verified symbolic derivation, calculus, stochastic math
                      </p>
                    </button>
                  </div>
                </div>

                {/* Group 3: Research & Synthesis */}
                <div className="mb-5">
                  <div className="flex items-center justify-between px-2.5 py-1 mb-2 bg-surfaceMuted rounded text-[11px] font-mono text-mutedInk uppercase tracking-wide">
                    <span>Group III · Research &amp; Synthesis</span>
                    <span>03</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {/* Deep Research */}
                    <button
                      type="button"
                      onClick={() => setSelectedAgentId('deep-research')}
                      className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                        selectedAgentId === 'deep-research'
                          ? 'bg-surfaceAlt/60 border-l-4 border-l-botanical border border-hairline/80 shadow-xs'
                          : 'hover:bg-surfaceMuted/80 border border-transparent hover:border-hairline group'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-medium ${selectedAgentId === 'deep-research' ? 'text-charcoal font-semibold' : 'text-charcoal group-hover:text-botanical'}`}>
                          Deep Research
                        </span>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline/60 ${selectedAgentId === 'deep-research' ? 'bg-botanical text-white font-medium' : 'text-mutedInk bg-surfaceMuted'}`}>
                          6.0–10.0 C
                        </span>
                      </div>
                      <p className="text-[12px] text-mutedInk line-clamp-1 leading-normal">
                        Recursive DAG synthesis, comprehensive statutory dossiers
                      </p>
                    </button>

                    {/* Fast Research */}
                    <button
                      type="button"
                      onClick={() => setSelectedAgentId('fast-research')}
                      className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                        selectedAgentId === 'fast-research'
                          ? 'bg-surfaceAlt/60 border-l-4 border-l-botanical border border-hairline/80 shadow-xs'
                          : 'hover:bg-surfaceMuted/80 border border-transparent hover:border-hairline group'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-medium ${selectedAgentId === 'fast-research' ? 'text-charcoal font-semibold' : 'text-charcoal group-hover:text-botanical'}`}>
                          Fast Research
                        </span>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline/60 ${selectedAgentId === 'fast-research' ? 'bg-botanical text-white font-medium' : 'text-mutedInk bg-surfaceMuted'}`}>
                          1.5–3.0 C
                        </span>
                      </div>
                      <p className="text-[12px] text-mutedInk line-clamp-1 leading-normal">
                        Sub-second verified web lookup, cryptographic provenance
                      </p>
                    </button>

                    {/* General Reasoning */}
                    <button
                      type="button"
                      onClick={() => setSelectedAgentId('general')}
                      className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                        selectedAgentId === 'general'
                          ? 'bg-surfaceAlt/60 border-l-4 border-l-botanical border border-hairline/80 shadow-xs'
                          : 'hover:bg-surfaceMuted/80 border border-transparent hover:border-hairline group'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-medium ${selectedAgentId === 'general' ? 'text-charcoal font-semibold' : 'text-charcoal group-hover:text-botanical'}`}>
                          General Reasoning
                        </span>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline/60 ${selectedAgentId === 'general' ? 'bg-botanical text-white font-medium' : 'text-mutedInk bg-surfaceMuted'}`}>
                          1.0 C
                        </span>
                      </div>
                      <p className="text-[12px] text-mutedInk line-clamp-1 leading-normal">
                        Unconstrained creative ideation &amp; unstructured drafts
                      </p>
                    </button>
                  </div>
                </div>

                {/* Group 4: Documents & Media */}
                <div>
                  <div className="flex items-center justify-between px-2.5 py-1 mb-2 bg-surfaceMuted rounded text-[11px] font-mono text-mutedInk uppercase tracking-wide">
                    <span>Group IV · Documents &amp; Media</span>
                    <span>02</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {/* Doc Intelligence */}
                    <button
                      type="button"
                      onClick={() => setSelectedAgentId('doc')}
                      className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                        selectedAgentId === 'doc'
                          ? 'bg-surfaceAlt/60 border-l-4 border-l-botanical border border-hairline/80 shadow-xs'
                          : 'hover:bg-surfaceMuted/80 border border-transparent hover:border-hairline group'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-medium ${selectedAgentId === 'doc' ? 'text-charcoal font-semibold' : 'text-charcoal group-hover:text-botanical'}`}>
                          Doc Intelligence &amp; Writer
                        </span>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline/60 ${selectedAgentId === 'doc' ? 'bg-botanical text-white font-medium' : 'text-mutedInk bg-surfaceMuted'}`}>
                          2.5–4.5 C
                        </span>
                      </div>
                      <p className="text-[12px] text-mutedInk line-clamp-1 leading-normal">
                        Multi-modal PDF OCR, statutory memo drafting, zero decay
                      </p>
                    </button>

                    {/* Video Analyser */}
                    <button
                      type="button"
                      onClick={() => setSelectedAgentId('video')}
                      className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer flex flex-col gap-1 ${
                        selectedAgentId === 'video'
                          ? 'bg-surfaceAlt/60 border-l-4 border-l-botanical border border-hairline/80 shadow-xs'
                          : 'hover:bg-surfaceMuted/80 border border-transparent hover:border-hairline group'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-medium ${selectedAgentId === 'video' ? 'text-charcoal font-semibold' : 'text-charcoal group-hover:text-botanical'}`}>
                          Video Analyser
                        </span>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border border-hairline/60 ${selectedAgentId === 'video' ? 'bg-botanical text-white font-medium' : 'text-mutedInk bg-surfaceMuted'}`}>
                          4.0–6.0 C
                        </span>
                      </div>
                      <p className="text-[12px] text-mutedInk line-clamp-1 leading-normal">
                        Temporal frame extraction, on-screen text OCR, forensic audit
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* Quiet Footnote Card */}
              <div className="p-4 bg-surfacePure border border-hairline rounded-xl text-mutedInk flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase text-charcoal">
                  <span className="material-symbols-outlined text-[15px] text-terracotta">lock_clock</span>
                  <span>Compute Allocation</span>
                </div>
                <p className="text-[12px] leading-relaxed">
                  Workspaces draw against a unified sovereign credit ledger. Inquiries bill strictly on verified reasoning tokens; cached retrieval incurs zero penalty.
                </p>
              </div>
            </aside>

            {/* RIGHT COLUMN: Specialist Detail Canvas (8.2 / 12 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="bg-surfacePure border border-hairline rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-10">
                {/* Header Block */}
                <div className="flex flex-col gap-4 pb-8 border-b border-hairline">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-terracotta uppercase tracking-wider font-semibold">
                        {agent.num}
                      </span>
                      <span className="text-hairline font-mono">/</span>
                      <span className="font-mono text-[11px] text-mutedInk uppercase">{agent.category}</span>
                      <span className="text-hairline font-mono">/</span>
                      <span className="font-mono text-[11px] text-mutedInk">{agent.version}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surfaceMuted border border-hairline font-mono text-[11px] text-charcoal">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      <span>{agent.activeConnection}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-1">
                    <div>
                      <h2 className="font-display text-3xl md:text-4xl text-charcoal font-medium tracking-tight">
                        {agent.name}
                      </h2>
                      <p className="text-[13.5px] text-mutedInk mt-1">{agent.tagline}</p>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0">
                      <Link
                        to="/app"
                        className="bg-surfaceMuted hover:bg-surfaceAlt text-charcoal text-[13px] font-medium px-3.5 py-2 rounded-lg border border-hairline transition-colors flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-[16px] text-mutedInk">terminal</span>
                        <span>Run Test Dossier</span>
                      </Link>
                      <Link
                        to={agent.route || '/app'}
                        className="bg-botanical hover:bg-botanical-dark text-white text-[13px] font-medium px-4 py-2 rounded-lg transition-colors shadow-xs flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                        <span>Launch in Workspace</span>
                      </Link>
                    </div>
                  </div>

                  {/* Provenance Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {agent.provenanceTags.map((tag, i) => (
                      <span
                        key={i}
                        className={`font-mono text-[11px] px-2.5 py-1 rounded border ${
                          tag.includes('Zero')
                            ? 'bg-terracotta-soft text-terracotta border-terracotta/20 font-medium'
                            : 'bg-surfaceMuted text-mutedInk border-hairline/60'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* SECTION 1: The Reasoning Blueprint (Cognitive Stepper) */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-charcoal font-medium">
                        The Reasoning Blueprint
                      </h3>
                      <p className="text-[13px] text-mutedInk mt-0.5">5-stage deterministic inference cycle</p>
                    </div>
                    <span className="font-mono text-[11px] text-mutedInk uppercase tracking-wider hidden sm:inline">
                      Cognitive Pipeline
                    </span>
                  </div>

                  <div className="relative border-l border-hairline ml-3.5 pl-6 space-y-6 pt-1">
                    {agent.reasoningBlueprint.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-surfacePure border-2 border-botanical flex items-center justify-center font-mono text-[10px] font-bold text-botanical">
                          {step.step}
                        </div>
                        <div className="flex items-baseline justify-between mb-1">
                          <h4 className="text-[14px] font-semibold text-charcoal">{step.title}</h4>
                          <span
                            className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                              step.badge.includes('Crosswalk') || step.badge.includes('Risk')
                                ? 'text-terracotta font-medium bg-terracotta-soft'
                                : 'text-mutedInk uppercase bg-surfaceMuted'
                            }`}
                          >
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-[13px] text-mutedInk leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 2: Connected Live Institutional Sources */}
                <div className="flex flex-col gap-4 pt-2">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-display text-xl md:text-2xl text-charcoal font-medium">
                      Connected Sovereign Infrastructure
                    </h3>
                    <p className="text-[13px] text-mutedInk">
                      Direct verification rails against official institutional and financial registries.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {agent.infrastructure.map((infra, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 bg-surfaceMuted/70 border border-hairline rounded-lg flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-botanical"></span>
                          <span className="text-[13px] font-medium text-charcoal">{infra.name}</span>
                        </div>
                        <span className="font-mono text-[10px] text-mutedInk bg-surfacePure px-1.5 py-0.5 rounded border border-hairline">
                          {infra.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 3: Anti-Hallucination Guardrails */}
                <div className="p-5 md:p-6 bg-surfaceMuted/50 border border-hairline rounded-xl flex flex-col gap-3.5">
                  <div className="flex items-center justify-between border-b border-hairline/80 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[17px] text-terracotta">gavel</span>
                      <span className="font-mono text-[11px] uppercase font-semibold text-charcoal tracking-wider">
                        Statutory Invariants &amp; Guardrails
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-terracotta bg-terracotta-soft border border-terracotta/20 px-2 py-0.5 rounded font-medium">
                      Enforced Hard Halt
                    </span>
                  </div>
                  <p className="text-[13px] text-charcoal font-medium">
                    What {agent.name} will{' '}
                    <span className="italic underline decoration-terracotta decoration-1 underline-offset-2">
                      never
                    </span>{' '}
                    do:
                  </p>
                  <ul className="space-y-2 text-[12.5px] text-mutedInk leading-relaxed">
                    {agent.guardrails.map((g, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-1.5 shrink-0"></span>
                        <span>
                          <strong className="text-charcoal font-medium">{g.label}:</strong> {g.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SECTION 4: Sample Verified Output (High-Craft Preview) */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-charcoal font-medium">
                        Sample Verified Work
                      </h3>
                      <p className="text-[13px] text-mutedInk mt-0.5">Live dossier compilation excerpt</p>
                    </div>
                    <span className="font-mono text-[11px] text-mutedInk">#DOSSIER-{agent.num.replace(/\s+/g, '-')}</span>
                  </div>

                  <div className="border border-hairline rounded-xl bg-surfacePure overflow-hidden shadow-xs">
                    {/* Terminal/Document header strip */}
                    <div className="bg-surfaceMuted px-4 py-2.5 border-b border-hairline flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-mutedInk">
                      <span className="text-charcoal font-medium">{agent.sampleOutput.court}</span>
                      <span className="text-terracotta font-medium">{agent.sampleOutput.docket}</span>
                    </div>

                    {/* Monospace document excerpt */}
                    <div className="p-5 font-mono text-[12.5px] leading-relaxed text-charcoal/90 space-y-3 bg-[#FCFAF6]">
                      <p className="font-semibold text-charcoal">{agent.sampleOutput.title}</p>
                      <p className="text-mutedInk">
                        <span className="text-charcoal font-semibold">{agent.sampleOutput.p1Label}</span>{' '}
                        {agent.sampleOutput.p1Text}
                      </p>
                      <p className="text-mutedInk">
                        <span className="text-charcoal font-semibold">{agent.sampleOutput.p2Label}</span>{' '}
                        {agent.sampleOutput.p2Text}
                      </p>
                      <div className="p-3 bg-botanical/5 border border-botanical/20 rounded text-botanical text-[12px] font-medium">
                        {agent.sampleOutput.actionBox}
                      </div>
                    </div>

                    {/* Document Verification Footer */}
                    <div className="bg-surfaceMuted/80 px-4 py-2 border-t border-hairline flex items-center justify-between font-mono text-[10.5px] text-mutedInk">
                      <span>{agent.sampleOutput.verifySource}</span>
                      <span>{agent.sampleOutput.hash}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Strip */}
                <div className="pt-4 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="text-[13px] text-mutedInk">
                      Workspace ready. Queries isolated under India DPDP Act 2023.
                    </span>
                  </div>
                  <Link
                    to={agent.route || '/app'}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-botanical text-white text-[13px] font-medium hover:bg-botanical-dark transition-colors shadow-xs"
                  >
                    Start Workspace with {agent.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          TECHNICAL TELEMETRY FOOTER STRIP
      ====================================================================== */}
      <section className="w-full bg-surfacePure border-y border-hairline py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-mutedInk">
          <div className="flex items-center gap-4 flex-wrap">
            <span>
              Cluster: <strong className="text-charcoal font-medium">ap-south-1 (Mumbai)</strong>
            </span>
            <span className="text-hairline">|</span>
            <span>
              Compute: <strong className="text-charcoal font-medium">Custom Tensor L40S Enclave</strong>
            </span>
            <span className="text-hairline">|</span>
            <span>
              Audited Precedents: <strong className="text-charcoal font-medium">4,192,408</strong>
            </span>
          </div>
          <div>
            <span>
              Status: <strong className="text-botanical font-medium">All 10 Specialists Operational</strong>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
