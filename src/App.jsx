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
import AppDashboard from './pages/AppDashboard';
import IndusDashboard from './pages/IndusDashboard';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/legal" element={<LegalAgent />} />
          <Route path="/agents/market-intelligence" element={<MarketIntelligenceAgent />} />
          <Route path="/app" element={<AppDashboard />} />
          <Route path="/indus" element={<IndusDashboard />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
