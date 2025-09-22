import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import pfp from './assets/jayce_pfp.png'
import React, { useState, useEffect, useRef } from "react";
import Projects from "./screens/Projects";
import Home from "./screens/Home";
import Education from "./screens/Education";



// ---------------- MAIN LAYOUT ----------------
export default function Portfolio() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-layout">
      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-profile">
            <img src={pfp} alt="Profile" className="mobile-pfp" />
            <span className="mobile-name">Jayce</span>
          </div>
          <button className="hamburger" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <button className="mobile-close" onClick={closeMobileMenu}>
              ×
            </button>
          </div>
          <div className="mobile-menu-profile">
            <img src={pfp} alt="Profile" className="mobile-menu-pfp" />
            <div className="mobile-menu-name">Jayce</div>
          </div>
          <nav className="mobile-nav-links">
            <NavLink to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink to="/education" className="mobile-nav-link" onClick={closeMobileMenu}>
              Education
            </NavLink>
            <NavLink to="/projects" className="mobile-nav-link" onClick={closeMobileMenu}>
              Projects
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="profile">
          <img src={pfp} alt="Profile" className="pfp" />
          <h2 className="name">Jayce</h2>
        </div>
        <nav className="nav-links-vertical">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/education" className="nav-link">Education</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <div className="contact-bar">
          <a href="mailto:jaycejefferson31@gmail.com">📧 Email</a>
          <a href="https://github.com/JayceFR/" target="_blank" rel="noreferrer">💻 GitHub</a>
          <a href="https://www.linkedin.com/in/jayce-jefferson/" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
        </div>
      </main>
    </div>
  );
}