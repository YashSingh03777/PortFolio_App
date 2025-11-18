import React from "react";

export default function Home() {
  // Smooth scroll to Projects section
  const scrollToProjects = (e) => {
    e.preventDefault();
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("⚠️ Projects section not found");
    }
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center text-light vh-100"
      style={{
        background: "linear-gradient(180deg, #0d0f14 0%, #0a0c10 100%)",
      }}
    >
      {/* Inline CSS for this section */}
      <style>{`
        .hero-card {
          width: 90%;
          max-width: 850px;
          background: rgba(18, 22, 28, 0.7);
          backdrop-filter: blur(10px);
          padding: 45px 35px;
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
          transition: 0.3s ease;
        }

        .hero-card:hover {
          box-shadow: 0 0 40px rgba(6,186,212,0.25);
          transform: translateY(-4px);
        }

        .hero-title {
          font-size: 42px;
          font-weight: 800;
          background: linear-gradient(90deg, #06b6d4, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 22px;
          color: #facc15;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .hero-text {
          color: #cbd5e1;
          font-size: 17px;
          max-width: 650px;
          margin: 0 auto 18px;
        }

        .hero-buttons {
          margin-top: 20px;
        }

        .btn-glow {
          padding: 12px 28px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          background: linear-gradient(90deg, #06b6d4, #7c3aed);
          border: none;
          color: white;
          transition: 0.25s;
          box-shadow: 0 4px 16px rgba(124,58,237,0.3);
        }

        .btn-glow:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(124,58,237,0.45);
        }
      `}</style>

      <div className="hero-card">
        {/* Profile Image */}
        <img
          src="/Vanshika.jpg"
          alt="Profile"
          className="rounded-circle mb-4 border border-3 border-warning"
          style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
          }}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/150?text=Yash+Singh";
          }}
        />

        {/* Text */}
        <h1 className="hero-title">Hi, I'm Vanshika Mudgal</h1>
        <h3 className="hero-subtitle">Full Stack Developer</h3>

        <p className="hero-text">
          I build high-performance, modern, and responsive web applications.
          My focus is delivering clean UI, fast performance, and exceptional user experience.
        </p>

        <p className="hero-text">
          Skilled in MERN stack, API development, UI/UX principles,
          and scalable web application architecture.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button onClick={scrollToProjects} className="btn-glow">
            View My Projects ↓
          </button>
        </div>
      </div>
    </section>
  );
}
