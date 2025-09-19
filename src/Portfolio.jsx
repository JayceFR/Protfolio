export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <header className="p-6 flex justify-between items-center shadow bg-white sticky top-0">
        <h1 className="text-xl font-bold">Your Name</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-100 to-blue-200">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Hi, I’m Your Name 👋</h2>
        <p className="text-lg max-w-xl">Penultimate year Computing student at Imperial College London, seeking a Software Engineering Internship. Passionate about building efficient, user‑focused applications.</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-16">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-lg leading-relaxed max-w-3xl">
          I’m a Computer Science student with experience in full‑stack development, Android apps, and systems programming. Skilled in Kotlin, Python, C, and JavaScript. I love building impactful projects and collaborating in teams.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-16 bg-gray-100">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Fitness Tracker App</h4>
            <p className="text-gray-700">Android app using Jetpack Compose + Flow to track steps and workouts with real‑time updates.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Pawn Race Game</h4>
            <p className="text-gray-700">C program implementing a fast pawn‑only chess engine optimized for tournaments.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h4 className="text-xl font-semibold mb-2">3D World Generator</h4>
            <p className="text-gray-700">C++ + OpenGL project generating procedural terrain with custom rendering pipeline.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="mb-4">Email me at <a href="mailto:jaycejefferson31@gmail.com" className="text-blue-600 hover:underline">jaycejefferson31@gmail.com</a></p>
        <div className="space-x-6">
          <a href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://github.com/YOUR-GITHUB" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-500 bg-gray-50">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
