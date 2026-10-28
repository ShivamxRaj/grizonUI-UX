import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annually'
  const [dailyTasks, setDailyTasks] = useState(25);

  const isAnnual = billingCycle === 'annually';

  // Projected credit consumption based on daily tasks
  const estimatedMonthlyCredits = Math.round(dailyTasks * 2.5 * 30);

  // Recommended plan based on tempo slider
  let recommendedPlan = 'Professional';
  if (estimatedMonthlyCredits <= 150) {
    recommendedPlan = 'Explorer';
  } else if (estimatedMonthlyCredits > 3000) {
    recommendedPlan = 'Enterprise Desk';
  }

  return (
    <div className="w-full flex flex-col bg-[#FAF9F5] text-[#07091B] font-sans antialiased min-h-screen">
      {/* =====================================================================
          1. HERO SECTION: OptimAI / Ruboz Proportions & Generous Clearance
      ====================================================================== */}
      <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 text-center">
        {/* Pill Badge matching Home Page */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E6E4DD] shadow-xs text-xs font-semibold text-[#1E3A3A] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D97736] animate-pulse" />
          <span className="font-mono uppercase tracking-widest text-[11px] text-[#07091B] font-bold">
            Transparent Credit Economy
          </span>
        </div>

        {/* Main Headline (Exact Home Typography & Margins) */}
        <h1 className="font-sans text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#07091B] tracking-[-0.03em] leading-[1.12] mb-5 text-balance text-center max-w-2xl mx-auto">
          Simple pricing for <br className="hidden sm:inline" />
          sovereign intelligence.
        </h1>

        {/* Subtitle matching Home Page */}
        <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-10 text-center text-balance font-normal">
          Predictable compute credits calibrated strictly to task depth with transparent tool execution and 90-day rollover security.
        </p>

        {/* Billing Cycle Toggle */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#E6E4DD] shadow-xs">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
              !isAnnual
                ? 'bg-[#07091B] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#07091B]'
            }`}
          >
            Monthly Billing
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('annually')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
              isAnnual
                ? 'bg-[#07091B] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#07091B]'
            }`}
          >
            <span>Annual Billing</span>
            <span className="px-2 py-0.5 rounded-full bg-[#D97736]/15 text-[#D97736] font-mono text-[10px] font-bold">
              Save 20%
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================================
          2. CORE PRICING CARDS (3 TIERS) - MATCHING HOMEPAGE BENTO & STACKING
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* TIER 1: Explorer */}
          <div className="rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Explorer
                </span>
                <span className="font-mono text-[11px] text-slate-600 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E6E4DD]">
                  Free Tier
                </span>
              </div>

              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#07091B] tracking-tight">
                  $0
                </span>
                <span className="font-mono text-xs text-slate-500 font-medium">/ month</span>
              </div>

              <p className="font-sans text-xs text-slate-600 leading-relaxed mb-6">
                For solo practitioners evaluating sovereign agent synthesis with zero financial commitment.
              </p>

              {/* Monthly Credit Allocation Pill */}
              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] mb-6">
                <div className="font-mono text-xs font-bold text-[#07091B]">150 Credits / month</div>
                <div className="font-sans text-[11px] text-slate-500 mt-1">Refreshes monthly • Ideal for casual queries</div>
              </div>

              <div className="font-mono text-xs uppercase tracking-widest text-[#1E3A3A] font-bold mb-4">
                What's Included
              </div>
              <ul className="space-y-3.5 font-sans text-xs text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#1E3A3A] shrink-0 mt-0.5">check_circle</span>
                  <span>All 10 specialists in quick query mode</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#1E3A3A] shrink-0 mt-0.5">check_circle</span>
                  <span>2 scheduled background automations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#1E3A3A] shrink-0 mt-0.5">check_circle</span>
                  <span>Isolated sovereign container workspace</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#1E3A3A] shrink-0 mt-0.5">check_circle</span>
                  <span>Zero telemetry retention guarantee</span>
                </li>
              </ul>
            </div>

            <Link
              to="/welcome"
              className="w-full inline-flex items-center justify-center py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#07091B] border border-[#E6E4DD] hover:border-slate-400 font-sans text-xs sm:text-sm font-bold transition-all active:scale-[0.98]"
            >
              Get Started Free
            </Link>
          </div>

          {/* TIER 2: Professional (HIGHLIGHTED) */}
          <div className="relative rounded-3xl bg-white border-2 border-[#D97736] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-xl">
            {/* Top Badge matching Home Page */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D97736] text-white font-mono text-[10px] uppercase tracking-widest font-bold shadow-xs whitespace-nowrap z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Recommended for Practitioners</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-5 mt-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#D97736] font-bold">
                  Professional
                </span>
                <span className="font-mono text-[11px] text-[#D97736] px-3 py-1 rounded-full bg-[#D97736]/10 font-bold">
                  Active Standard
                </span>
              </div>

              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#07091B] tracking-tight">
                  {isAnnual ? '$24' : '$29'}
                </span>
                <span className="font-mono text-xs text-slate-500 font-medium">
                  / month {isAnnual && <span className="text-[#D97736]">(billed annually)</span>}
                </span>
              </div>

              <p className="font-sans text-xs text-slate-600 leading-relaxed mb-6">
                For counsel, quants, auditors, and founders requiring unrestricted deep specialist execution.
              </p>

              {/* Monthly Credit Allocation Pill */}
              <div className="p-4 rounded-2xl bg-[#D97736]/10 border border-[#D97736]/20 mb-6">
                <div className="font-mono text-xs font-bold text-[#D97736]">2,500 Credits / month</div>
                <div className="font-sans text-[11px] text-slate-600 mt-1">+ 90-Day Rollover on all unused credits</div>
              </div>

              <div className="font-mono text-xs uppercase tracking-widest text-[#D97736] font-bold mb-4">
                What's Included
              </div>
              <ul className="space-y-3.5 font-sans text-xs text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#D97736] shrink-0 mt-0.5">check_circle</span>
                  <span>Full tool execution across all 10 specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#D97736] shrink-0 mt-0.5">check_circle</span>
                  <span>Tier-1 model ensemble (Claude 3.5, GPT-4o, DeepSeek R1)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#D97736] shrink-0 mt-0.5">check_circle</span>
                  <span>Live Indian institutional APIs (eCourts, NSE ticks, MCA-21)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#D97736] shrink-0 mt-0.5">check_circle</span>
                  <span>Dev Studio Linux VM with live HTML/React preview</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#D97736] shrink-0 mt-0.5">check_circle</span>
                  <span>25 scheduled routines with automated webhooks</span>
                </li>
              </ul>
            </div>

            {/* Ruboz-style Terracotta Action Button with Dot-to-Arrow */}
            <Link
              to="/welcome"
              className="group w-full inline-flex items-center justify-center gap-3.5 pl-7 pr-2.5 py-3.5 rounded-full bg-[#D97736] hover:bg-[#c46526] text-white font-sans text-xs sm:text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Upgrade to Professional</span>
              <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-white transition-all duration-200 group-hover:scale-0 group-hover:opacity-0" />
                <span className="absolute inset-0 flex items-center justify-center rounded-full bg-white text-[#07091B] opacity-0 scale-50 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 shadow-xs">
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px] font-bold">arrow_forward</span>
                </span>
              </span>
            </Link>
          </div>

          {/* TIER 3: Practice & Desk */}
          <div className="rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Practice &amp; Desk
                </span>
                <span className="font-mono text-[11px] text-slate-600 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E6E4DD]">
                  Chambers
                </span>
              </div>

              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#07091B] tracking-tight">
                  {isAnnual ? '$79' : '$99'}
                </span>
                <span className="font-mono text-xs text-slate-500 font-medium">
                  / month {isAnnual && <span className="text-slate-500">(billed annually)</span>}
                </span>
              </div>

              <p className="font-sans text-xs text-slate-600 leading-relaxed mb-6">
                For law chambers, boutique funds, and institutional research teams needing shared compute.
              </p>

              {/* Monthly Credit Allocation Pill */}
              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] mb-6">
                <div className="font-mono text-xs font-bold text-[#07091B]">10,000 Credits / month</div>
                <div className="font-sans text-[11px] text-slate-500 mt-1">+ 180-Day Rollover on all unused credits</div>
              </div>

              <div className="font-mono text-xs uppercase tracking-widest text-[#1E3A3A] font-bold mb-4">
                What's Included
              </div>
              <ul className="space-y-3.5 font-sans text-xs text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#1E3A3A] shrink-0 mt-0.5">check_circle</span>
                  <span>Everything in Professional plus 5 member seats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#1E3A3A] shrink-0 mt-0.5">check_circle</span>
                  <span>Dedicated AWS Nitro Enclaves in Mumbai (ap-south-1)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#1E3A3A] shrink-0 mt-0.5">check_circle</span>
                  <span>Unlimited background routines &amp; custom webhooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#1E3A3A] shrink-0 mt-0.5">check_circle</span>
                  <span>Direct SLA &amp; bespoke institutional data connectors</span>
                </li>
              </ul>
            </div>

            <Link
              to="/welcome"
              className="w-full inline-flex items-center justify-center py-3.5 rounded-full bg-[#07091B] hover:bg-black text-white font-sans text-xs sm:text-sm font-bold transition-all active:scale-[0.98] shadow-xs"
            >
              Contact Chambers Desk
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================================================
          3. HOW CREDITS WORK: MINIMALIST 3-CARD STRIP (MATCHING SECTION 4 HOME)
      ====================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-[#E6E4DD]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1E3A3A] font-bold">
              Deterministic Calibration
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#07091B] tracking-tight mt-1.5">
              How credits are consumed.
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-600 max-w-md leading-relaxed">
            No hidden tokens or opaque markups. 1 to 10 compute credits per execution based purely on model depth and verified external tool calls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Unit 1 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">bolt</span>
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-sans text-lg font-bold text-[#07091B]">Fast Direct Queries</h3>
                <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 whitespace-nowrap shrink-0">
                  1.0 Credit
                </span>
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Instant answers, definition lookups, and fast math checks via distilled reasoning engines with sub-800ms response time.
              </p>
            </div>
          </div>

          {/* Unit 2 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">hub</span>
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-sans text-lg font-bold text-[#07091B]">Specialist &amp; Live API</h3>
                <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 whitespace-nowrap shrink-0">
                  1.5 – 3.5 Credits
                </span>
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Live court registry checks (eCourts CNR), real-time NSE/BSE ticks, and isolated Python sandbox proofs with verified footnote citations.
              </p>
            </div>
          </div>

          {/* Unit 3 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E4DD] hover:border-slate-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold mb-5">
                <span className="material-symbols-outlined text-[22px]">psychology</span>
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-sans text-lg font-bold text-[#07091B]">Deep Multi-Step Synthesis</h3>
                <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-200 whitespace-nowrap shrink-0">
                  5.0 – 10.0 Credits
                </span>
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Multi-hop recursive hypothesis trees, 20-page legal petitions, full Dev Studio web apps, and multi-LLM adversarial consensus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. INTERACTIVE CAPACITY ESTIMATOR: MINIMALIST & INTUITIVE
      ====================================================================== */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="rounded-3xl bg-white border border-[#E6E4DD] p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E6E4DD] mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D97736] font-bold">
                Capacity Planner
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#07091B] tracking-tight mt-1.5">
                Estimate your monthly usage.
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF9F5] border border-[#E6E4DD] text-xs font-mono font-bold text-slate-700">
              <span>Suggested: </span>
              <span className="text-[#D97736]">{recommendedPlan}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Slider Left */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-xs font-bold text-[#07091B]">Daily Task Volume</span>
                <span className="font-mono text-sm font-bold text-[#1E3A3A]">{dailyTasks} tasks / day</span>
              </div>

              <input
                type="range"
                min="5"
                max="80"
                step="5"
                value={dailyTasks}
                onChange={(e) => setDailyTasks(Number(e.target.value))}
                className="w-full h-2 bg-[#FAF9F5] border border-[#E6E4DD] rounded-lg appearance-none cursor-pointer accent-[#D97736]"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>Light (5/day)</span>
                <span>Standard (25/day)</span>
                <span>Chambers (80/day)</span>
              </div>
            </div>

            {/* Readout Right */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex flex-col justify-between">
              <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                Estimated Monthly Burn
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-mono text-3xl font-extrabold text-[#07091B]">
                  ~{estimatedMonthlyCredits.toLocaleString()}
                </span>
                <span className="font-mono text-xs text-slate-500 font-medium">Credits / mo</span>
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Fits easily within the <strong className="text-[#07091B]">{recommendedPlan}</strong> tier with rollover protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. BOTTOM CALL TO ACTION (MATCHING HOMEPAGE RUBZOZ BANNER)
      ====================================================================== */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="rounded-[32px] sm:rounded-[36px] bg-[#1E3A3A] p-8 sm:p-12 text-center text-white relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 text-balance">
              Start with 150 free credits today.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 text-balance">
              Test all 10 specialized agent minds in your sovereign workspace. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full justify-center">
              <Link
                to="/welcome"
                className="group inline-flex items-center gap-3.5 pl-7 pr-2.5 py-3 rounded-full bg-[#D97736] hover:bg-[#c46526] text-white font-sans text-xs sm:text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Initialize Workspace</span>
                <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-white transition-all duration-200 group-hover:scale-0 group-hover:opacity-0" />
                  <span className="absolute inset-0 flex items-center justify-center rounded-full bg-white text-[#07091B] opacity-0 scale-50 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 shadow-xs">
                    <span className="material-symbols-outlined text-[15px] sm:text-[16px] font-bold">arrow_forward</span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
