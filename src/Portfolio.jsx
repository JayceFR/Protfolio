import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-16">
      {/* Left: Profile picture */}
      <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
        <img
          src="/your-photo.jpg"
          alt="Your portrait"
          className="rounded-2xl shadow-lg w-64 h-64 object-cover"
        />
      </div>

      {/* Right: Intro + About */}
      <div className="md:w-2/3 md:pl-12 text-center md:text-left">
        <h2 className="text-4xl font-extrabold mb-4">Hi, I’m Jayce 👋</h2>
        <p className="text-lg mb-6">
          Penultimate year Computing student at Imperial College London, seeking a
          Software Engineering Internship. Passionate about building efficient,
          user-focused applications.
        </p>
        <p className="text-md text-gray-700">
          I’m a Computer Science student with experience in full-stack development,
          Android apps, and systems programming. Skilled in Kotlin, Python, C, and
          JavaScript.
        </p>
      </div>
    </section>
  );
}

function TechStack() {
  const logos = [
    { name: "Kotlin", src: "/logos/kotlin.svg" },
    { name: "Python", src: "/logos/python.svg" },
    { name: "C", src: "/logos/c.svg" },
    { name: "JavaScript", src: "/logos/javascript.svg" },
    { name: "React", src: "/logos/react.svg" },
    { name: "Tailwind", src: "/logos/tailwind.svg" },
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
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/tech" className="nav-link">Tech Stack</Link>
                <Link to="/education" className="nav-link">Education</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
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