import React from "react";

export default function About() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side – Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="/Vanshika.jpg"
              alt="Vanshika mudgal"
              className="img-fluid rounded-circle border border-3 border-warning shadow"
              style={{ width: "260px", height: "260px", objectFit: "cover" }}
            />
          </div>

          {/* Right Side – About Details */}
          <div className="col-md-7">
            <h2 className="fw-bold text-warning mb-3">About Me</h2>

            <p className="mb-4 opacity-75">
              I’m <strong className="text-warning">Vanshika Mudgal </strong>, a passionate 
              <strong> Full Stack Developer</strong> and a 
              <strong> B.Tech student</strong> at 
              <strong> Shree Vaishnav Vidyapeeth Vishwavidyalaya, Indore (MP)</strong>.  
              I have a strong academic foundation and a deep interest in building modern,
              responsive, and scalable web applications.
            </p>

            {/* Education */}
            <div className="mb-4">
              <h5 className="text-warning fw-semibold">🎓 Education</h5>
              <ul className="opacity-75">

                <li>
                  <strong className="text-warning">B.Tech (CSE)</strong> — 
                  Shree Vaishnav Vidyapeeth Vishwavidyalaya, Indore  
                  <br />📊 Current CGPA: <strong className="text-warning">7.22</strong>
                </li>

                <li className="mt-2">
                  <strong className="text-warning">12th — 87.2%</strong>  
                  <br />
                  The Everest English Higher Secondary School, Dewas  
                  <br />
                  🏫 <em>(State Board)</em>
                </li>

                <li className="mt-2">
                  <strong className="text-warning">10th — 60.2%</strong>  
                  <br />
                  St. Mary's Convent Senior Secondary School, Dewas  
                  <br />
                  🏫 <em>(CBSE Board)</em>
                </li>

              </ul>
            </div>

            {/* Certifications */}
            <div className="mb-4">
              <h5 className="text-warning fw-semibold">🏅 Certifications</h5>
              <ul className="opacity-75">
                <li>💻 NPTEL — The Joy of Computing using Python </li>
                <li>🗣️ NPTEL — Soft-Skill Development</li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-4">
              <h5 className="text-warning fw-semibold">💻 Tech Stack</h5>
              <ul className="opacity-75">
                <li><strong className="text-warning">Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
                <li><strong className="text-warning">Backend:</strong> Node.js, Express.js, REST API</li>
                <li><strong className="text-warning">Database:</strong> MongoDB, MySQL</li>
                <li><strong className="text-warning">Tools:</strong>  GitHub</li>
              </ul>
            </div>

            {/* DSA */}
            <div className="mb-4">
              <h5 className="text-warning fw-semibold">🔢 DSA (Data Structures & Algorithms)</h5>
              <p className="opacity-75 mb-0">
                Solved <strong className="text-warning">50+ DSA questions</strong> across 
                topics including arrays, strings, recursion. 
              </p>
            </div>

            {/* Hobbies */}
            <div className="mb-4">
              <h5 className="text-warning fw-semibold">❤️ Hobbies</h5>
              <p className="opacity-75 mb-0">
              &nbsp; 🌍 Traveling  
              </p>
            </div>

            {/* Quote */}
            <blockquote className="blockquote text-secondary mt-3">
              <p className="fst-italic">“Learning never stops.”</p>
            </blockquote>

          </div>
        </div>
      </div>
    </section>
  );
}
