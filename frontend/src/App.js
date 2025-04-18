import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import StrategyPage from './pages/StrategyPage';
import TradePage from './pages/TradePage';
import HomePage from './pages/HomePage'; // New HomePage
import AboutPage from './pages/AboutPage'; // New AboutPage
import ContactPage from './pages/ContactPage'; // New ContactPage
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* HomePage Route */}
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/trade" element={<TradePage />} />
          <Route path="/about" element={<AboutPage />} /> {/* AboutPage Route */}
          <Route path="/contact" element={<ContactPage />} /> {/* ContactPage Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
