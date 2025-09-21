import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
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
            <p><em>September 2023 – June 2026 . BSc Computing </em></p>
            <ul>
              <li>Relevant Computer Science modules: Databases, Graphs and Algorithms, Calculus, Computer Systems, Linear Algebra, Discrete Mathematics</li>
              <li>Relevant Programming modules: C, Java, Kotlin, Haskell</li>
              <li>Completed optional Entrepreneurship Horizon module. Developed business planning and pitching skills.</li>
              <li>Overall first year average of 75.5%</li>
            </ul>
          </li>
          <li>
            <h4>Whitmore High School / A-levels</h4>
            <p><em>September 2021 – June 2023 . A-levels</em></p>
            <ul>
              <li>Achieved A* A* A* A in Computer Science, Mathematics, Further Mathematics and Physics</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="timeline-box">
        <h3>Experience</h3>
        <ul className="timeline">
          <li>
            <h4>Software Engineering Intern – Ayacare</h4>
            <p><em>July 2023 – Aug 2023 · Canada</em></p>
            <ul>
              <li>Enhanced API performance by 60% by rewriting high latency Postgres queries directly in Go with SQL, eliminating a persistent 30 second timeout. Added server-side pagination and dynamic filtering, reducing response time even under peak load.</li>
              <li>Devised and established an end-to-end testing framework in TypeScript with Playwright which improved test coverage and automation, reducing overall regression time by 40%.</li>
              <li>Integrated Excel-driven data inputs into automated tests to streamline test case generation and integrated a custom logger to enhance debugging.</li>
              <li>Collaborated in setting up a GitHub pipeline integrated with Jenkins and the testing framework for streamlined automation.</li>
            </ul>
          </li>

          <li>
            <h4>Tutor and Website Developer – Triangular Learning Centre</h4>
            <p><em>Aug 2023 – Present · London, UK</em></p>
            <ul>
              <li>Effectively communicated complex Math and Computer Science concepts to GCSE students, improving their fundamental skills through tailored guidance.</li>
              <li>Designed and built a modern WordPress site to improve the centre’s online presence. Integrated a mail-enabled contact form to streamline client engagement.</li>
            </ul>
          </li>

        </ul>
      </div>
    </section>
  );
}


// ---------------- PROJECTS ----------------
function Projects() {
  const projects = [
    {
      title: "Fitness Tracker App",
      description: "Android app using Jetpack Compose + Flow to track steps and workouts.",
      image: "/images/fitness-app.png", // replace with your actual image path
    },
    {
      title: "Pawn Race Game",
      description: "C program implementing a fast pawn-only chess engine optimized for tournaments.",
      image: "/images/pawn-race.png",
    },
    {
      title: "3D World Generator",
      description: "C++ + OpenGL project generating procedural terrain with custom rendering pipeline.",
      image: "/images/3d-world.png",
    },
  ];

  return (
    <section className="projects-section">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


// ---------------- MAIN LAYOUT ----------------
export default function Portfolio() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation(); // ✅ get current location

  return (
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
      {/* Using `key={location.pathname}` forces remount on route change */}
      <main className="content" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <div className="contact-bar">
          <a href="mailto:jaycejefferson31@gmail.com">📧 Email</a>
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">💻 GitHub</a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
        </div>
      </main>
    </div>
  );
}