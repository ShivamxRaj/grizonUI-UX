import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import IndusDashboard from './pages/IndusDashboard';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          {/* 1. PRIMARY ENTRY / MAIN LANDING PAGE */}
          <Route path="/" element={<Home />} />

          {/* 2. AUTONOMOUS AGENTS FLEET & SPECIALIZED SUITES */}
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/research" element={<ResearchAgents />} />
          <Route path="/agents/dev-studio" element={<DevStudio />} />
          <Route path="/agents/market-intelligence" element={<MarketIntelligenceAgent />} />
          <Route path="/agents/doc-intelligence" element={<DocIntelligence />} />
          <Route path="/agents/legal" element={<LegalAgent />} />

          {/* 3. DEVELOPER PLATFORM & SOVEREIGN SDK */}
          <Route path="/indus" element={<IndusDashboard />} />

          {/* 4. COMPANY MISSION & GOVERNANCE */}
          <Route path="/about" element={<About />} />

          {/* 5. LIVE AI APP WORKSPACE */}
          <Route path="/app" element={<AppDashboard />} />

          {/* 6. FALLBACK: Any unknown URL smoothly redirects to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
