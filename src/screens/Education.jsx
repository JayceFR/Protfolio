export default function Education() {
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