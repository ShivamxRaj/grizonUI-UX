# GRIZON AI — MASTER UI/UX PRODUCT & ARCHITECTURE SPECIFICATION
**Document Type:** Agency-Grade Product Strategy, Information Architecture & UI/UX Wireframe Blueprint  
**System Scope:** Multipage Marketing Platform + End-User Web Application (Onboarding, Omni-Chat, 10 Specialist Agents, Dual-Layer Memory, Multi-Run Task Scheduler, Project Workspaces & Credit Economy)  
**Design Standard:** Dev Studio Agency Standard (Human-Centered Editorial Precision, Anti-Generic AI Design)

---

## 1. EXECUTIVE PRODUCT VISION & UX PHILOSOPHY

### 1.1 The Core UX Challenge
Grizon AI is an exceptionally deep system: it orchestrates **10 specialized domain agents**, **6 frontier LLM providers** (Anthropic, Gemini, Grok, ChatGPT, OpenRouter, DeepSeek), **7+ live external data APIs** (Indian Kanoon, eCourts India, Yahoo Finance, NSE Option Chains, Serper, Tavily, Brave Search, OpenWeather), **Dual-Layer Persistent Memory** (Sign-up + Chat), **Project Workspaces**, and a **Multi-Run Autonomous Task Scheduler**.

If presented poorly, this depth feels overwhelming, robotic, and cluttered. If over-simplified, it looks like a generic chatbot and hides Grizon’s true competitive moat.

### 1.2 The Creative Concept: *"Quiet Power, Editorial Clarity"*
To make Grizon AI feel deeply human, trustworthy, and effortless to use while showcasing its enterprise-grade engine, the UI/UX follows three foundational principles:
1. **Progressive Disclosure of Complexity:** The default surface is calm, breathable, and conversational. However, every response, memory node, and scheduled run has a tactile **"Inspect / Glass-Box"** layer that reveals the exact agent routing, live API timestamps, citations, and credit usage on demand.
2. **Human-Language Controls Over Technical Forms:** Users do not write cron expressions or configure complex JSON payloads. They schedule multi-run daily tasks using natural-language sentence builders and visual 24-hour timelines.
3. **Editorial Daylight Aesthetic:** Instead of dark navy backgrounds, neon purple glowing blobs, and repetitive 3-card startup grids, Grizon uses a high-craft **Soft Daylight & Warm Stone** design system inspired by *Financial Times*, *Linear*, *Stripe Press*, and *Anthropic*.

---

## 2. GLOBAL DESIGN SYSTEM & VISUAL TOKENS

### 2.1 Color Architecture (Soft Two-Tone Daylight System)
Designed for zero eye strain during long legal reading, financial table inspection, and code review:

| Token Role | CSS Variable | Hex Code | Usage Guidelines |
| :--- | :--- | :--- | :--- |
| **Primary Canvas** | `--bg-canvas` | `#FAF9F5` | Warm alabaster main page background; eliminates harsh white glare. |
| **Secondary Canvas** | `--bg-subtle` | `#F2EFE9` | Alternating section backgrounds, sidebar containers, and inactive tabs. |
| **Elevated Surface** | `--surface-card` | `#FFFFFF` | Interactive workbenches, active chat canvases, artifact drawers, and modals. |
| **Glass Surface** | `--surface-glass` | `rgba(250,249,245,0.88)` | Sticky navigation headers and floating omni-prompt bars (`backdrop-filter: blur(12px)`). |
| **Primary Ink** | `--text-primary` | `#18181B` | Primary headings, body copy, and active navigation states. |
| **Secondary Ink** | `--text-secondary` | `#52525B` | Supporting descriptions, subheadings, and secondary table cells. |
| **Muted Ink** | `--text-muted` | `#71717A` | Timestamps, citation brackets, credit labels, and helper captions. |
| **Structural Hairline** | `--border-subtle` | `#E6E4DD` | 1px exposed architectural grid lines separating sections and table rows. |
| **Interactive Border** | `--border-strong` | `#D5D1C8` | Input fields, button outlines, and active card states. |
| **Brand Primary** | `--brand-primary` | `#1E3A3A` | Deep Botanical Pine — Primary CTAs, active agent pills, and primary focus rings. |
| **Brand Accent** | `--brand-accent` | `#D97736` | Warm Terracotta — Live execution pulses, scheduled task indicators, and memory tags. |
| **Semantic Verified** | `--status-bull` | `#15803D` | Bullish market confluence, verified eCourts/Kanoon citations, passed math checks. |
| **Semantic Caution** | `--status-warn` | `#B45309` | Inferred facts, elevated IV/event risk, delayed data timestamps. |
| **Semantic Risk** | `--status-bear` | `#B91C1C` | Bearish structure, legal limitation risks, invalidation triggers. |

### 2.2 Typography System
A three-tier typographic voice that separates human narrative from deterministic data:
* **Display & Editorial Headings (`Newsreader` or `Instrument Serif`):**
  * Gives the platform an authoritative, human, magazine-grade personality.
  * Hero Display: `clamp(2.75rem, 4.8vw, 4.5rem)`, line-height `1.08`, letter-spacing `-0.02em`.
  * Section Title (H2): `clamp(2rem, 3.2vw, 3.15rem)`, line-height `1.15`.
* **UI, Controls & Long-Form Body (`Plus Jakarta Sans` or `Inter`):**
  * Clean, highly legible humanist sans-serif for navigation, chat responses, legal analysis, and form controls.
  * Body Large: `1.125rem` (18px), line-height `1.65`, max line width `68ch`.
  * UI Standard: `0.9375rem` (15px), weight `400` / `500` / `600`.
* **Telemetry, Citations, Math & Code (`JetBrains Mono`):**
  * Used strictly for NSE option strikes, CNR numbers, `[AUTH-001]` citation badges, credit counters (`3.5 cr`), and execution timestamps.

### 2.3 Layout Grid, Spacing & Motion Hierarchy
* **Structural Grid:** 12-column CSS Grid (`max-width: 1280px` for marketing; full-viewport fluid split-pane for the web app) with exposed `1px solid #E6E4DD` architectural dividers rather than floating drop-shadow cards.
* **Motion Hierarchy:**
  * **Level 1 (Signature Motion — 500–700ms):** Live pipeline routing trace (`User → Memory → Agent → Tools → Answer`) and interactive 24-hour scheduler timeline illumination.
  * **Level 2 (Supporting Motion — 250–350ms):** Artifact drawer slide-over, specialist workbench tab crossfades, and accordion expansions.
  * **Level 3 (Micro Motion — 120–180ms):** Button hover elevation, citation tooltip reveals, and memory toggle switches.

---

## 3. INFORMATION ARCHITECTURE & COMPLETE SITEMAP

The Grizon AI experience is divided into **Part A: The Multipage Public Marketing Website** (designed to educate, build trust, and convert visitors) and **Part B: The Logged-In End-User Web Application** (where users work daily).

```
GRIZON AI ECOSYSTEM
│
├── PART A: MULTIPAGE PUBLIC MARKETING WEBSITE
│   ├── 1. Home (/)                        → Hero Live Pipeline, Dual Memory Preview, 10-Agent Bento, Task Teaser
│   ├── 2. Agents Directory (/agents)      → Deep Interactive Workbench for all 10 Specialist Minds + Auto-Router
│   ├── 3. Tasks, Memory & Projects (/workflow) → Multi-Run Scheduler Sandbox, Sign-Up + Chat Memory, Project Rooms
│   ├── 4. Pricing & Credit Economy (/pricing)  → 1 to 10 Credit Tier Visuals, Interactive Estimator, Plan Matrix
│   └── 5. About & Architecture (/about)   → Anti-Hallucination Manifesto, 6 LLM Providers, 7 Live APIs, Security
│
└── PART B: END-USER WEB APPLICATION (LOGGED-IN WORKSPACE)
    ├── 6. Onboarding Flow (/welcome)      → 3-Step Sign-Up Profile Memory Initialization
    ├── 7. Command Workspace (/app)        → Omni-Prompt Bar, Live Execution Trace, Split-Screen Artifact Canvas
    ├── 8. Autonomous Task Hub (/app/tasks)→ Multi-Run Daily/Weekly/Monthly Scheduler, 24h Queue, Run Diff Viewer
    ├── 9. Project Workspaces (/app/projects) → Isolated Domain Folders (Files, Chats, Artifacts, Project Routines)
    └── 10. Memory & Credit Ledger (/app/settings) → Transparent Memory Editor (Layer 1 & 2) + Granular Credit Logs
```

---

## 4. PART A: MULTIPAGE MARKETING WEBSITE — PAGE-BY-PAGE UI/UX BLUEPRINT

### Global Header & Navigation (Shared Across All Marketing Pages)
* **Layout:** Sticky top bar (`height: 76px`), subtle bottom hairline border (`#E6E4DD`).
* **Left:** Grizon wordmark in editorial serif + live status indicator pill (`● All 10 Specialists & Live APIs Operational`).
* **Center Navigation:** `Home` · `The 10 Specialists` · `Routines & Memory` · `Pricing & Credits` · `Architecture & About`
* **Right Actions:**
  * `Sign In` (Ghost text button)
  * `Initialize Your Workspace` (Primary Botanical button `#1E3A3A` with right arrow micro-shift on hover)

---

### PAGE 1: HOME PAGE (`/`)
**Primary UX Goal:** Immediately communicate that Grizon is not another blank chat box—it is a memory-aware, tool-executing specialist workspace that can also run on a recurring schedule.

#### Section 1.1: Asymmetric Interactive Hero ("The Live Execution Story")
* **Left Column (5 Columns — Human Value Proposition):**
  * **Eyebrow Tag:** `PERSONALIZED MULTI-AGENT OPERATING SYSTEM`
  * **Headline (Serif):** *Ten specialist minds that already know your context—and work on your schedule.*
  * **Subheadline (Sans):** Set your profile memory once at sign-up. Whether you are analyzing live NSE option chains, verifying Indian High Court records via eCourts, architecting software, or scheduling a 3× daily market briefing, Grizon routes your prompt to the right specialist and verifies every claim with live tools.
  * **CTA Group:**
    * Primary: `Start Free with 150 Credits`
    * Secondary: `Test the Live Pipeline Below ↓`
  * **Trust Footnote:** *Powered by Anthropic, Gemini, OpenAI, Grok & DeepSeek · Connected to NSE, Yahoo Finance, Indian Kanoon & eCourts India.*
* **Right Column (7 Columns — Interactive "User → Memory → Agent → Tools → Answer" Simulator):**
  * **UX Design:** A warm, tactile editorial card (not a dark terminal). At the top are **4 Real-World Prompt Pills** the visitor can click, plus a custom input box:
    1. `[Market Intelligence]` *"Analyze RELIANCE 3000 CE for Thursday expiry."*
    2. `[Legal Intelligence]` *"Check eCourts CNR DLHC010048212026 & check BNS applicability."*
    3. `[Dev Studio]` *"Design a responsive wealth management client portal."*
    4. `[Math & Quant]` *"Evaluate the exact closed-form integral & verify numerically."*
  * **Interactive 4-Stage Visual Progression (animates smoothly over 600ms when switched):**
    * **Stage 1: Memory Recalled (Warm Terracotta Badge):** Shows two human context tags pulled automatically:
      * *Sign-Up Profile:* `Positional & Options Trader · NSE India`
      * *Recent Chat Memory:* `Prefers Bull/Bear debate + clear invalidation price`
    * **Stage 2: Auto-Router Decision:** Shows the selected specialist (`Market & Trading Intelligence Agent`), selected model provider (`Anthropic Claude / Gemini Pro`), and exact cost badge (`4.0 Credits`).
    * **Stage 3: Live Tool & API Execution:** Displays verified source pills with timestamps:
      * `✓ Yahoo Finance (Spot ₹2,984.50 @ 09:15 IST)`
      * `✓ NSE Option Chain API (PCR 1.14 · Max Pain ₹2,960)`
      * `✓ Serper Financial News (2 Q2 catalysts verified)`
    * **Stage 4: The Grounded Answer + 1-Click Schedule Action:**
      * Renders a clean, structured briefing showing **Analytical Stance (Moderately Bullish)**, **Bull vs. Bear Evidence**, and **What Would Change the View**.
      * **Bottom Action Bar inside Hero Card:** Includes a live toggle: `⏱ Run this automatically 3× a day (9:15 AM, 12:30 PM, 3:15 PM) → Save to Project`.

#### Section 1.2: The Dual-Layer Memory Interactive Split-Screen
* **Section Header:** *Why repeat your life story to an AI every morning?*
* **Interactive UX Component ("With Grizon Memory vs. Generic AI"):**
  * A horizontal comparison slider or toggle where the user selects a persona (`Advocate in Delhi` | `Full-Stack Tech Lead` | `NSE Swing Trader`).
  * **Left Side:** Shows the **Sign-Up Onboarding Card** (where the user spent 60 seconds setting their jurisdiction, tech stack, or trading style) + **Conversational Memory Stream** (facts learned naturally from Tuesday's chat).
  * **Right Side:** Shows how a 6-word prompt (*"Draft a reply to the notice"*) automatically incorporates the user’s court forum, client role, and BNS/IPC date rules without the user typing any of it.

#### Section 1.3: Editorial Bento Overview of the 10 Specialist Agents
* **UX Layout:** Instead of 10 identical small cards, an asymmetric **4-Cluster Editorial Grid** grouped by human intent:
  1. **Markets & Quantitative Intelligence** (*Market & Trading Agent* + *Mathematics & Quantitative Agent*) — featuring a live mini-preview of an NSE Option Chain confluence table and a dual-verified SymPy equation.
  2. **Indian Law & Document Mastery** (*Legal Intelligence Agent* + *Doc Intelligence & Writer*) — featuring an eCourts CNR status card, an `[AUTH-001]` verified citation registry, and a scanned contract risk matrix.
  3. **Product Design & System Architecture** (*Dev Studio* + *System Architect*) — featuring a live responsive UI preview (320px to 1920px QA passed) and a pragmatic "Modular Monolith vs. Microservices" architecture gate diagram.
  4. **Multi-Modal & Deep Research** (*Deep Research*, *Fast Research*, *Video Analyser*, *General Agent*) — featuring timestamped Gemini video frame analysis and 8-source cross-verified synthesis.
* **CTA:** `Explore All 10 Specialists in Depth → (/agents)`

#### Section 1.4: Signature Visual Climax — "Routines That Run While You Rest"
* **UX Concept:** A preview of the **Autonomous Task Scheduler** showing a 24-hour daylight arc. Visitors can click `1× Daily`, `3× Daily`, or `Weekly` to watch how scheduled runs automatically execute and drop briefings into dedicated **Project Rooms**.

---

### PAGE 2: THE 10 SPECIALISTS PAGE (`/agents`)
**Primary UX Goal:** Let users test and inspect the exact reasoning frameworks, anti-hallucination rules, and live tool integrations of all 10 agents—plus understand how the **Auto-Agent Router** works.

#### Section 2.1: Page Header & Auto-Router Explainer Banner
* **Headline:** *Generalist AI guesses. Specialist minds verify.*
* **Interactive Banner ("How Auto-Routing Works"):**
  * Explains that users never *have* to pick an agent manually. When `Auto Router ⚡` is active, Grizon analyzes the prompt’s intent, checks whether attachments (PDFs, images, videos, CNR numbers, stock tickers) are present, and routes to the right specialist—or lets the user lock a specific specialist manually.

#### Section 2.2: Sticky Left Directory + Deep Interactive Specialist Workbench
* **Left Column (3.5 Columns — Sticky Categorized Index + Instant Filter):**
  * Search input (`Filter by skill, API, or output format...`) + Category Pills (`All 10`, `Finance & Quant`, `Law & Docs`, `Code & Architecture`, `Research & Media`).
  * Clean vertical list of all 10 agents showing their name, primary badge, and typical credit range.
* **Right Column (8.5 Columns — The Deep Specialist Portrait Canvas):**
  * When an agent is selected on the left, the right workbench updates across **4 structured sub-sections**:
    1. **Header & Identity Bar:** Agent Name, One-Line Role, Credit Tier Badge (e.g., `3.5 – 6.5 Credits`), and a `Try This Specialist in Workspace` button.
    2. **The Reasoning Blueprint (Visual Stepper):** Shows the exact deterministic cognitive sequence of that agent:
       * *Market Agent:* `Price → Technicals → Market/Sector Relative Strength → Fundamentals → News → NSE Options (PCR/Max Pain/OI) → Risk → Confluence → Bull/Base/Bear Scenarios → Invalidation Condition`.
       * *Legal Agent:* `Fact Extraction (Known vs Assumed) → Jurisdiction & Date Check (IPC vs BNS 1 July 2024 Rule) → Indian Kanoon & eCourts Lookup → Citation Registry [AUTH-001] → Application to Facts → Counterargument → Preliminary Assessment`.
       * *Dev Studio:* `Product Strategy & UX Hierarchy → Soft Two-Tone Visual System → Full-Stack Code Generation → Responsive QA (320px–1920px) → Interactive Integrity Verification`.
       * *Doc Intelligence:* `Document Inspection → Source-Grounded Extraction (Page/Clause Citations) → Scanned Table/Chart Vision → Contract Risk Matrix → Chat-First or Explicit DOCX/PDF/XLSX Export`.
       * *System Architect:* `Requirements & Scale Estimation → "Simplicity Before Complexity" Gate → Component & Data Design → 1x / 10x / 100x Bottleneck Analysis → Cost & LLM Routing Architecture`.
       * *Math & Quant:* `Formal Problem Specification → Exact Symbolic Computation (SymPy) → Independent Numerical Cross-Check (SciPy/mpmath) → Original Wording Transcription Check`.
    3. **Interactive Output Preview (Chat Mode vs. Exported Artifact Mode):**
       * A toggle allowing the visitor to switch between **Default Concise Chat Output** (honoring the strict "Chat-First, No Unsolicited 5-Page Files" rule) and **Explicitly Requested Deliverable Mode** (e.g., 5-Page Market PDF Report, Court Petition DOCX Draft, or Live HTML Application).
    4. **Strict Anti-Hallucination Guardrails Box:**
       * Clearly lists what this specialist will **never** do (e.g., *Legal Agent never invents a URL or case citation; Market Agent never says "PCR > 1 guarantees a rally"; Math Agent never reports an uncomputed mental value*).

---

### PAGE 3: TASKS, MEMORY & PROJECTS PAGE (`/workflow`)
**Primary UX Goal:** Showcase Grizon’s three operational differentiators that turn one-off chats into a persistent, automated workspace: **The Multi-Run Task Scheduler**, **Dual-Layer Memory**, and **Project Workspaces**.

#### Section 3.1: Interactive Autonomous Task Scheduler Sandbox
* **Headline:** *Put your most important questions on a daily rhythm.*
* **UX Layout (2-Column Interactive Builder):**
  * **Left Column — Natural-Language & Granular Schedule Controls:**
    1. **Task Prompt & Specialist:** Select a template or type a custom task (e.g., *"Scan NSE Option Chain for NIFTY & BANKNIFTY unusual OI shifts and summarize key levels"*).
    2. **Cadence Selector (Segmented Pill Bar):**
       * `Hourly` · `Daily` · `Weekly` · `Once a Month`
    3. **Multi-Run Per Day Controller ("How many runs in a day?"):**
       * Interactive stepper: `1 run/day` · `2 runs/day` · `3 runs/day` · `4 runs/day` · `Custom (up to 12 runs/day)`.
       * **Dynamic Time-Slot Pickers:** As the user increases the daily run count (e.g., `3 runs/day`), three clean time-picker pills appear (`Run 1: 09:20 IST`, `Run 2: 12:30 IST`, `Run 3: 15:25 IST`).
    4. **Target Project Destination:** Dropdown to route completed runs directly into a specific Project folder (e.g., `NIFTY F&O Desk` or `High Court Litigation Tracker`).
  * **Right Column — The 24-Hour Execution Arc & "What Changed" Diff Preview:**
    * Visualizes a 24-hour timeline with glowing terracotta pins at every scheduled run time.
    * **Simulated Run Card:** Shows what the user actually receives when Run #2 completes at 12:30 PM—including a **"Delta Since 09:20 AM Run"** highlight (*"3000 CE Open Interest increased by +18.4%; Put/Call Ratio shifted from 0.92 to 1.11"*).
    * **Daily Credit Forecast Pill:** Automatically calculates `3 runs/day × 3.5 credits = 10.5 credits/day` so the user has 100% cost predictability.

#### Section 3.2: Deep Dive into Dual-Layer Memory (Sign-Up + Chat)
* **UX Layout:** An interactive **Memory Inspector Matrix** demonstrating how user context flows into every prompt:
  * **Layer 1: Sign-Up Profile Memory (The Standing Foundation):**
    * Shows the structured onboarding profile fields: *Professional Role, Primary Domain, Geographic/Legal Jurisdiction, Risk/Analytical Style, Preferred Output Format, Tech Stack*.
  * **Layer 2: Conversational Evolving Memory (Learned Context):**
    * Shows how Grizon extracts durable facts during natural chat (*"User is representing the Petitioner in Matter #402"*, *"Watchlist includes RELIANCE, TCS, and HDFC BANK"*), tags them with the date learned, and lets the user **Pin, Edit, Pause, or Delete** any memory item at any time.

#### Section 3.3: Project Workspaces ("Dedicated Rooms for Complex Work")
* **UX Layout:** Interactive folder-and-canvas preview showing how a **Project** binds together:
  * **Project Knowledge Base:** Uploaded PDFs, DOCX contracts, scanned tables, codebases, and videos.
  * **Project-Scoped Memory:** Context that applies *only* inside this project so client matters never bleed into each other.
  * **Project Chat Threads & Generated Artifacts:** All past conversations, Dev Studio UI prototypes, and exported reports.
  * **Project Scheduled Tasks:** All recurring daily/weekly routines attached to that project.

---

### PAGE 4: PRICING & CREDIT ECONOMY PAGE (`/pricing`)
**Primary UX Goal:** Demystify AI pricing. Show users how the **1 Credit to 10 Credit** system works transparently across model tiers and multi-tool specialist workflows.

#### Section 4.1: How the Credit System Works (Visual Tier Breakdown)
* **Headline:** *Fair, transparent credits calibrated to the depth of the work.*
* **3-Column Visual Credit Spectrum:**
  * **Tier 1: Lightweight & Fast (`1.0 Credit` per in/out turn)**
    * *Models:* DeepSeek, Gemini Flash, lightweight OpenRouter models.
    * *Workflows:* General Agent chat, quick definitions, simple math, weather checks, short email rewrites.
  * **Tier 2: Standard Specialist & Live API Lookup (`1.5 – 4.0 Credits`)**
    * *Models:* Claude Sonnet, GPT-4o, Gemini Pro, Grok.
    * *Workflows:* Fast Research (1–3 cited sources), eCourts CNR case lookup, standard PDF/DOCX analysis, System Architecture review, dual-verified SymPy math proofs.
  * **Tier 3: Deep Multi-Tool & Heavy Artifact Synthesis (`5.0 – 10.0 Credits`)**
    * *Models:* Frontier reasoning models + multi-step tool orchestration.
    * *Workflows:* Dev Studio full responsive application generation, Deep Research (5–8 fetched & cross-verified sources), complete NSE Option Chain + multi-timeframe market confluence report, full Legal Petition drafting with Indian Kanoon citation registry.

#### Section 4.2: Interactive Monthly Credit & Scheduled Task Calculator
* **UX Design:** A tactile 3-slider calculator that outputs an exact monthly credit number and recommends the ideal tier:
  1. *Slider 1:* Everyday Quick Queries (`1.0 cr` each) — `0 to 100 / day`
  2. *Slider 2:* Deep Specialist Sessions (`~3.5 cr` avg) — `0 to 30 / day`
  3. *Slider 3:* Automated Scheduled Task Runs (`~4.0 cr` avg) — `0 to 20 runs / day`
* **Live Output Box:** Displays `Daily Credits`, `Monthly Total Credits`, and highlights the matching subscription plan.

#### Section 4.3: Subscription Tiers & Credit Top-Up Packs
* **3 Clean Architectural Plan Columns:**
  * **Explorer ($0 / month):** `150 Credits/month`, all 10 specialists, sign-up + chat memory, up to 2 active scheduled tasks, 2 Project workspaces.
  * **Professional ($29 / month — Highlighted):** `2,500 Credits/month`, Auto-Router + manual selection across all 6 LLM providers, full access to NSE Options, Yahoo Finance, Indian Kanoon & eCourts APIs, up to 25 multi-run scheduled tasks, unlimited Projects & DOCX/PDF/XLSX exports.
  * **Practice & Desk ($99 / month):** `10,000 Credits/month`, unlimited hourly/daily multi-run tasks, historical NSE option-chain snapshot comparison, shared team Project workspaces, priority execution queue.

---

### PAGE 5: ABOUT, ARCHITECTURE & TRUST PAGE (`/about`)
**Primary UX Goal:** Build deep institutional trust with technical leads, lawyers, traders, and researchers by explaining the engineering and epistemic rigor behind Grizon AI.

#### Section 5.1: The Editorial Manifesto ("Why Confidence Without Verification Is Broken")
* An editorial essay explaining why Grizon separates **deterministic calculation and primary-source retrieval** from **LLM reasoning**.

#### Section 5.2: The Unified Orchestration Matrix (6 Providers × 7+ Live APIs)
* **Visual Architecture Diagram:**
  * **Layer A (The 6 Model Providers):** Anthropic, Google Gemini, xAI Grok, OpenAI ChatGPT, OpenRouter, DeepSeek—showing how Grizon routes for reasoning depth, multimodal vision, coding precision, or cost efficiency.
  * **Layer B (The Deterministic & Live API Layer):**
    * *Legal & Judicial:* Indian Kanoon API (SC/HC judgments) + eCourts India API (CNR lookup, court orders, hearing dates).
    * *Markets & Derivatives:* Yahoo Finance API + NSE Option Chain Analytics Engine (deterministic PCR, Max Pain, OI change, IV).
    * *Search & Grounding:* Serper API, Tavily API, Brave Search API, Full-Page Fetch.
    * *Compute & Media:* Sandboxed Python Execution (SymPy/NumPy/SciPy), Google Gemini Video Frame Analyzer, OpenWeather API.

#### Section 5.3: Epistemic Honesty & Domain Compliance Standards
* Summarizes Grizon’s non-negotiable safety rules:
  * **Source Grounding:** Clearly distinguishes *Confirmed Fact*, *Derived Metric*, *Preliminary Inference*, and *Uncertain/Missing Information*.
  * **Indian Legal Currentness:** Built-in awareness of the **1 July 2024 BNS / BNSS / BSA transition** vs. historical IPC / CrPC / IEA applicability, plus mandatory *Not Legal Advice* and *AI-Assisted Draft* disclosures.
  * **Financial Neutrality:** Evidence-based Bull vs. Bear confluence and conditional scenarios with mandatory invalidation levels and *Not Financial Advice* disclosures.

---

## 5. PART B: LOGGED-IN END-USER WEB APPLICATION UI/UX BLUEPRINT

Once a user clicks **"Start Your Workspace"** or **"Sign In"**, they enter the Grizon Web Application. Below is the complete screen-by-screen UI/UX specification for the product itself.

### SCREEN 1: SIGN-UP & 60-SECOND PROFILE MEMORY ONBOARDING (`/welcome`)
Instead of dropping the user into an empty chat screen, Grizon initializes **Layer 1 Memory** in three frictionless steps:
* **Step 1 — "What describes your work best?" (Multi-select tiles):**
  * `Markets, Investing & NSE Options` · `Indian Law & Litigation` · `Software Engineering & Architecture` · `Product & UI/UX Design` · `Academic & Quantitative Research` · `Executive Writing & Document Review`
* **Step 2 — "Calibrate your standing context" (Dynamic smart fields based on Step 1):**
  * *If Markets selected:* Preferred timeframe (`Intraday` / `Swing` / `Positional` / `Long-Term`) + Primary Watchlist (`NIFTY, BANKNIFTY, RELIANCE...`).
  * *If Legal selected:* Primary Forum (`Supreme Court` / `Delhi HC` / `Bombay HC` / `District Courts` / `Corporate Counsel`).
  * *If Engineering selected:* Core Stack (`TypeScript, Python, PostgreSQL, AWS...`).
  * *Communication Preference:* `Concise & Direct` vs. `Comprehensive & Detailed`.
* **Step 3 — "Initialize Your First Project & Daily Routine" (Optional 1-click setup):**
  * Pre-populates a ready-to-use Project folder and offers a toggle to activate their first scheduled daily briefing.

---

### SCREEN 2: THE UNIFIED COMMAND WORKSPACE (`/app`)
The main application interface uses a **Three-Pane Adaptive Layout**:

```
+--------------------------------------------------------------------------------------------------+
| [Sidebar Toggle]  Project: NIFTY Swing Desk ▾   |   Auto-Router ⚡ (Market Agent)   |  2,410 Cr  |
+----------------------+---------------------------------------------------+-----------------------+
| LEFT SIDEBAR (260px) | CENTER CONVERSATION & EXECUTION STREAM            | RIGHT ARTIFACT CANVAS |
|                      |                                                   | (Collapsible 45% W)   |
| [+ New Conversation] |  User Prompt:                                     |                       |
|                      |  "Compare RELIANCE 3000 CE with last snapshot     | [Live Preview / Code] |
| WORKSPACE            |   and export a 5-page PDF market report."         | [DOCX / PDF Viewer]   |
| • Command Chat       |                                                   | [Contract Risk Table] |
| • Scheduled Tasks(3) |  +---------------------------------------------+  | [NSE OI Chart]        |
| • Memory Vault       |  | ⚡ Execution Trace (Expanded or Collapsed)  |  |                       |
|                      |  | • Memory: Swing Trader + Invalidation Rule  |  | [Export: PDF | DOCX]  |
| PROJECTS             |  | • Agent: Market Intelligence (Gemini Pro)   |  |                       |
| 📁 NIFTY Swing Desk  |  | • Tools: Yahoo Fin + NSE Chain (09:20 IST)  |  |                       |
| 📁 Delhi HC Writ     |  | • Cost: 6.0 Credits                         |  |                       |
| 📁 SaaS v2 Arch      |  +---------------------------------------------+  |                       |
|                      |                                                   |                       |
| RECENT THREADS       |  Structured Response (Key Takeaways, Bull/Bear,   |                       |
| • RELIANCE 3000 CE   |  Scenarios, What Would Change the View...)        |                       |
| • CNR Status Check   |                                                   |                       |
|                      |  +---------------------------------------------+  |                       |
|                      |  | [Ask anything, attach file, or enter CNR...] |  |                       |
| [Profile & Credits]  |  | [⚡ Auto Agent ▾] [Model: Auto ▾] [⏱ Schedule]|  |                       |
|                      |  +---------------------------------------------+  |                       |
+----------------------+---------------------------------------------------+-----------------------+
```

#### Key UX Details of the Command Workspace:
1. **The Omni-Prompt Bar (Bottom Center):**
   * **Agent Selector Pill:** Defaults to `⚡ Auto-Router` (automatically switches icon as the user types—e.g., typing `"CNR"` or `"Section 420"` subtly previews the Legal Agent icon; typing `"NIFTY"` previews the Market Agent icon). Users can also click to manually lock any of the 10 agents.
   * **Model & Tier Selector:** `Auto (Optimal)` or manual selection (`Anthropic`, `Gemini`, `Grok`, `ChatGPT`, `DeepSeek`, `OpenRouter`) with a real-time **Estimated Credit Pill** (`~1.0 cr` to `~8.0 cr`).
   * **Action Triggers:**
     * `📎 Attach` (PDF, DOCX, Scanned Image, Video file for `Video Analyser`, Screenshot for `Dev Studio`).
     * `⏱ Schedule This Prompt` (Opens the inline popover to turn the current prompt into an hourly/daily/weekly/monthly multi-run task).
2. **The Glass-Box Execution Trace Header:**
   * Above every response is a clean, single-line pill: `Recalled 2 memories · Routed to Legal Intelligence · Verified 3 sources (eCourts & Indian Kanoon) · 3.5 credits`. Clicking it expands the exact step-by-step tool log and timestamps.
3. **The Right-Hand Artifact Canvas (Chat-First Rule Compliance):**
   * Remains closed during normal conversational Q&A so the reading experience is uncluttered.
   * Automatically slides open when `Dev Studio` builds an interactive HTML/CSS/JS UI, or when the user explicitly asks `Legal Intelligence`, `Market Intelligence`, or `Doc Intelligence` to generate a formal draft or downloadable `DOCX`, `PDF`, `XLSX`, or `MD` file.

---

### SCREEN 3: AUTONOMOUS TASK SCHEDULER HUB (`/app/tasks`)
* **Top Summary Ribbon:** Shows `Active Scheduled Tasks (4)`, `Total Runs Today (9 runs)`, `Completed Today (6/9)`, and `Estimated Daily Credit Burn (28.5 cr/day)`.
* **Task Creation & Editing Modal/Drawer:**
  * **Task Title & Prompt:** Full prompt editor with memory variable autocomplete (e.g., `@MyWatchlist` or `@CaseCNR`).
  * **Specialist & Provider Lock:** Lock a specific specialist (or use Auto) and set a max credit cap per run.
  * **Frequency & Multi-Run Daily Matrix:**
    * Frequency: `Hourly` | `Daily` | `Weekly (Select Days: M T W T F S S)` | `Monthly (Select Date: 1st–31st)`.
    * **Runs Per Day Control:** User selects `How many times per day should this execute?` (`1×` to `12×`) and picks the exact clock times (e.g., `09:15`, `12:30`, `15:30`).
* **Run History & "Diff / What Changed" Feed:**
  * Every scheduled task maintains a chronological log of past executions. Users can toggle **"Highlight Changes Since Previous Run"** to immediately spot new court orders in eCourts, shifts in NSE Option Chain OI, or newly published regulatory circulars.

---

### SCREEN 4: MEMORY VAULT & CREDIT LEDGER (`/app/settings`)
* **Tab 1: Dual-Layer Memory Vault:**
  * Side-by-side editor for **Standing Profile Memory (Sign-Up)** and **Learned Conversational Memories (Chat)**, plus **Project-Scoped Memories**. Users can add new rules, edit existing notes, toggle any memory `Active / Paused`, or delete it permanently.
* **Tab 2: Transparent Credit Ledger:**
  * Displays an itemized log of every credit spent (`Timestamp | Prompt/Task | Specialist Used | LLM Provider | Tools Called | Credits Deducted`), giving users complete trust in the 1 to 10 credit economy.

---

## 6. RESPONSIVE ENGINEERING & INTERACTIVE QA CHECKLIST

To satisfy the **Dev Studio Final Production Gate**, the multipage website and web application adhere to strict responsive and interactive rules across `320px` to `1920px`:
1. **Breakpoint Transformations:**
   * **Desktop (`1280px–1920px`):** Full 12-column editorial grid; sticky left specialist directory + right workbench; 3-pane command workspace.
   * **Tablet (`768px–1024px`):** Collapses sidebars into slide-over drawers; converts 3-column pricing and scheduler grids into balanced 2-column or stacked cards.
   * **Mobile (`320px–430px`):** Touch targets minimum `44px × 44px`; horizontal pill carousels for specialist categories; bottom sheet drawers for onboarding and artifact previews; zero horizontal overflow (`overflow-x` resolved structurally).
2. **Interactive Integrity:**
   * Every button, tab, scenario switcher, natural-language `<select>` dropdown, memory toggle, and credit calculator slider is wired to live state updates—zero dead links or placeholder `#` anchors.