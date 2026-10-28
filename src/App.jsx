import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Agents from './pages/Agents';
import LegalAgent from './pages/agents/LegalAgent';
import MarketIntelligenceAgent from './pages/agents/MarketIntelligence';
import ResearchAgents from './pages/agents/ResearchAgents';
import DevStudio from './pages/agents/DevStudio';
import DocIntelligence from './pages/agents/DocIntelligence';
import AppDashboard from './pages/AppDashboard';
import Welcome from './pages/Welcome';
import Workflow from './pages/Workflow';
import Pricing from './pages/Pricing';
import AigenixTemplate from './pages/AigenixTemplate';

function AppLayout() {
  const location = useLocation();
  // Part B app screens and dedicated standalone templates have their own dedicated navigation/layouts
  const isDedicatedLayout =
    location.pathname.startsWith('/app') ||
    location.pathname.startsWith('/welcome') ||
    location.pathname.startsWith('/aigenix') ||
    location.pathname.startsWith('/template-aigenix');

  return (
    <>
      <ScrollToTop />
      {!isDedicatedLayout && <Navbar />}
      <main style={{ minHeight: isDedicatedLayout ? '100vh' : '80vh' }}>
        <Routes>
          {/* =========================================================
              PART A: MULTIPAGE PUBLIC MARKETING WEBSITE
          ========================================================== */}
          {/* 1. PRIMARY ENTRY / MAIN LANDING PAGE */}
          <Route path="/" element={<Home />} />

          {/* THEMEFOREST #3 BEST MATCH TEMPLATE: AIGENIX AI AGENT SAAS */}
          <Route path="/aigenix" element={<AigenixTemplate />} />
          <Route path="/template-aigenix" element={<AigenixTemplate />} />

          {/* 2. AUTONOMOUS AGENTS FLEET & SPECIALIZED SUITES */}
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/research" element={<ResearchAgents />} />
          <Route path="/agents/dev-studio" element={<DevStudio defaultWorkbench="canvas" />} />
          <Route path="/agents/system-architect" element={<DevStudio defaultWorkbench="arch" />} />
          <Route path="/agents/market-intelligence" element={<MarketIntelligenceAgent />} />
          <Route path="/agents/doc-intelligence" element={<DocIntelligence defaultModal="doc" />} />
          <Route path="/agents/video-analyser" element={<DocIntelligence defaultModal="video" />} />
          <Route path="/agents/legal" element={<LegalAgent />} />

          {/* 3. ROUTINES, MEMORY & PROJECTS */}
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/routines" element={<Workflow />} />
          <Route path="/tasks" element={<Workflow />} />

          {/* 4. PRICING & CREDIT ECONOMY */}
          <Route path="/pricing" element={<Pricing />} />

          {/* 5. COMPANY MISSION & PHILOSOPHY */}
          <Route path="/about" element={<About />} />
          <Route path="/philosophy" element={<About />} />
          <Route path="/indus" element={<About />} />

          {/* =========================================================
              PART B: LOGGED-IN END-USER WEB APPLICATION WORKSPACE
          ========================================================== */}
          {/* SCREEN 1: 60-SECOND PROFILE MEMORY ONBOARDING */}
          <Route path="/welcome" element={<Welcome />} />

          {/* SCREEN 2: THREE-PANE UNIFIED COMMAND WORKSPACE */}
          <Route path="/app" element={<AppDashboard />} />
          <Route path="/app/tasks" element={<AppDashboard />} />
          <Route path="/app/projects" element={<AppDashboard />} />
          <Route path="/app/settings" element={<AppDashboard />} />

          {/* FALLBACK: Any unknown URL smoothly redirects to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isDedicatedLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
