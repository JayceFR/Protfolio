import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import pfp from './assets/jayce_pfp.png'
import kotlinLogo from './assets/logos/kotlin.svg'
import haskellLogo from './assets/logos/haskell.svg'
import pythonLogo from './assets/logos/python.svg'
import cLogo from './assets/logos/c.png'
import jsLogo from './assets/logos/js.svg'
import reactLogo from './assets/logos/react.svg'

function Home() {
  return (
    <section className="home-section">
      <div className="home-text">
        <h2>Hi, I’m Jayce 👋</h2>
        <p>
          Penultimate year Computing student at Imperial College London, seeking a
          Software Engineering Internship...
        </p>
        <p>
          I have experience in full-stack development, mobile development and game
          development.
        </p>

        {/* Tech stack logos */}
        <div className="tech-stack">
            <img src={cLogo} alt="C" />
            <img src={kotlinLogo} alt="Kotlin" />
            <img src={haskellLogo} alt="Haskell" />
            <img src={pythonLogo} alt="Python" />
            <img src={jsLogo} alt="JavaScript" />
            <img src={reactLogo} alt="React" />

        </div>
      </div>

      {/* Image Right */}
      <div>
        <img src={pfp} alt="Your portrait" className="pfp" />
      </div>
    </section>
  );
}

function TechStack() {
  const logos = [
    { name: "Kotlin", src: kotlinLogo },
    { name: "Haskell", src: "/logos/haskell.svg" },
    { name: "Python", src: "/logos/python.svg" },
    { name: "C", src: "/logos/c.svg" },
    { name: "JavaScript", src: "/logos/javascript.svg" },
    { name: "React", src: "/logos/react.svg" },
  ];
  return (
    <section className="py-20 px-6 md:px-16 text-center">
      <h3 className="text-3xl font-bold mb-10">Tech Stack</h3>
      <div className="flex flex-wrap justify-center gap-10">
        {logos.map((logo) => (
          <div key={logo.name} className="flex flex-col items-center">
            <img src={logo.src} alt={logo.name} className="w-20 h-20" />
            <span className="mt-2 text-sm font-medium">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-20 px-6 md:px-16">
      <h3 className="text-3xl font-bold mb-6">Education & Experience</h3>
      <ul className="space-y-6">
        <li>
          <h4 className="text-xl font-semibold">Imperial College London</h4>
          <p className="text-gray-700">BSc Computing (2023 – 2026)</p>
        </li>
        <li>
          <h4 className="text-xl font-semibold">Tutor (Part-time)</h4>
          <p className="text-gray-700">
            Provided one-to-one tutoring in Computer Science and Maths, emphasizing
            problem solving and clear communication.
          </p>
        </li>
        <li>
          <h4 className="text-xl font-semibold">Industry Experience</h4>
          <p className="text-gray-700">Internship / freelance experiences (add yours here)</p>
        </li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-100">
      <h3 className="text-3xl font-bold mb-10">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white shadow rounded-xl">
          <h4 className="text-xl font-semibold mb-2">Fitness Tracker App</h4>
          <p className="text-gray-700">Android app using Jetpack Compose + Flow to track steps and workouts.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h4 className="text-xl font-semibold mb-2">Pawn Race Game</h4>
          <p className="text-gray-700">C program implementing a fast pawn-only chess engine optimized for tournaments.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h4 className="text-xl font-semibold mb-2">3D World Generator</h4>
          <p className="text-gray-700">C++ + OpenGL project generating procedural terrain with custom rendering pipeline.</p>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* Navbar */}
        <header className="navbar">
            {/* <h1 className="logo">Your Name</h1> */}
            <nav className="nav-links">
               <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/tech" className="nav-link">Tech Stack</NavLink>
                <NavLink to="/education" className="nav-link">Education</NavLink>
                <NavLink to="/projects" className="nav-link">Projects</NavLink>
            </nav>
        </header>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<TechStack />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <footer className="p-6 text-center text-gray-500 bg-gray-50">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}