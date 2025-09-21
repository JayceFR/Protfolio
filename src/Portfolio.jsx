import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import pfp from './assets/jayce_pfp.png'
import kotlinLogo from './assets/logos/kotlin.svg'
import haskellLogo from './assets/logos/haskell.svg'
import pythonLogo from './assets/logos/python.svg'
import cLogo from './assets/logos/c.png'
import jsLogo from './assets/logos/js.svg'
import reactLogo from './assets/logos/react.svg'
import { useEffect, useRef } from "react";

// ---------------- HOME ----------------
function Home() {
  return (
    <section className="home-section">
      <div className="home-text">
        <h2>Hi, I’m Jayce 👋</h2>
        <p className="intro">
          Penultimate year Computing student at Imperial College London, seeking a <strong>Software Engineering Internship</strong>.
        </p>
        <p>
          Experienced in <strong>full-stack development</strong>, <strong>mobile development</strong>, and <strong>game development</strong>.
        </p>
        <div className="tech-stack">
          <img src={cLogo} alt="C" />
          <img src={kotlinLogo} alt="Kotlin" />
          <img src={haskellLogo} alt="Haskell" />
          <img src={pythonLogo} alt="Python" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={reactLogo} alt="React" />
        </div>
      </div>
    </section>
  );
}

// ---------------- EDUCATION ----------------
function Education() {
  return (
    <section className="timeline-section">
      <div className="timeline-box">
        <h3>Education</h3>
        <ul className="timeline">
          <li>
            <h4>Imperial College London</h4>
            <p>BSc Computing (2023 – 2026)</p>
          </li>
          <li>
            <h4>High School / A-levels</h4>
            <p>Mathematics, Computer Science, Physics (add your details)</p>
          </li>
        </ul>
      </div>

      <div className="timeline-box">
        <h3>Experience</h3>
        <ul className="timeline">
          <li>
            <h4>Tutor (Part-time)</h4>
            <p>
              Provided one-to-one tutoring in Computer Science and Maths,
              emphasizing problem solving and clear communication.
            </p>
          </li>
          <li>
            <h4>Industry Experience</h4>
            <p>Internship / freelance experiences (add yours here)</p>
          </li>
        </ul>
      </div>
    </section>
  );
}


// ---------------- PROJECTS ----------------
function Projects() {
  return (
    <section className="projects-section">
      <h3>Projects</h3>
      <div className="projects-grid">
        <div className="project-card">
          <h4>Fitness Tracker App</h4>
          <p>Android app using Jetpack Compose + Flow to track steps and workouts.</p>
        </div>
        <div className="project-card">
          <h4>Pawn Race Game</h4>
          <p>C program implementing a fast pawn-only chess engine optimized for tournaments.</p>
        </div>
        <div className="project-card">
          <h4>3D World Generator</h4>
          <p>C++ + OpenGL project generating procedural terrain with custom rendering pipeline.</p>
        </div>
      </div>
    </section>
  );
}

// ---------------- MAIN LAYOUT ----------------
export default function Portfolio() {
  return (
    <Router>
      <div className="app-layout">
        {/* Sidebar */}
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
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>

          {/* Contact bar at bottom */}
          <div className="contact-bar">
            <a href="mailto:jaycejefferson31@gmail.com">📧 Email</a>
            <a href="https://github.com/your-github" target="_blank" rel="noreferrer">💻 GitHub</a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          </div>
        </main>
      </div>
    </Router>
  );
}
