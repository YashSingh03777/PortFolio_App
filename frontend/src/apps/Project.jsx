import React, { useState } from "react";

export default function Project() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      id="projects"
      aria-label="Projects"
      style={{
        background: "linear-gradient(180deg,#07080c,#0b0f1a)",
        color: "#d1d5db",
        padding: "60px 16px",
      }}
    >
      <style>{`
        .proj-wrap { max-width:1200px; margin:0 auto; }
        .section-head { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:22px; }
        .section-title { font-size:24px; font-weight:800; color: #e6eef8; }
        .section-sub { color:#9ca3af; font-size:13px; }

        .grid { display:grid; grid-template-columns: repeat(2, 1fr); gap:18px; }
        @media (max-width:900px){ .grid { grid-template-columns: 1fr; } }

        .card {
          background: rgba(18,22,28,0.62);
          border:1px solid rgba(255,255,255,0.04);
          border-radius:12px;
          overflow:hidden;
          box-shadow: 0 12px 34px rgba(2,6,23,0.75);
          transition: transform .16s ease, box-shadow .16s ease;
        }
        .card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(6,182,212,0.08); }

        .media {
          height:160px;
          background-size:cover;
          background-position:center;
          display:block;
        }

        .card-body { padding:16px; }
        .proj-title { font-weight:800; margin-bottom:6px; background:linear-gradient(90deg,#06b6d4,#7c3aed); -webkit-background-clip:text; color:transparent; font-size:18px; }
        .proj-sub { color:#facc15; font-weight:700; margin-bottom:8px; font-size:13px; }

        .proj-desc { color:#cbd5e1; font-size:14px; line-height:1.45; margin-bottom:10px; min-height:56px; }

        .badges { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px; }
        .badge { font-weight:700; font-size:12px; padding:6px 10px; border-radius:999px; background:rgba(255,255,255,0.03); color:#cbd5e1; border:1px solid rgba(255,255,255,0.02); }

        .actions { display:flex; gap:10px; flex-wrap:wrap; }
        .btn {
          padding:9px 14px;border-radius:10px;border:none;cursor:pointer;font-weight:700;
          background: linear-gradient(90deg,#06b6d4,#7c3aed); color:white; box-shadow:0 8px 28px rgba(124,58,237,0.12);
        }
        .btn.ghost { background:transparent; border:1px solid rgba(255,255,255,0.06); color:#cbd5e1; }

        /* modal */
        .modal-backdrop { position:fixed; inset:0; background:rgba(2,6,23,0.6); display:flex; align-items:center; justify-content:center; z-index:120; }
        .modal-card {
          width:94%; max-width:880px; background:rgba(10,12,18,0.92); border-radius:12px; padding:18px; border:1px solid rgba(255,255,255,0.04);
          box-shadow:0 30px 80px rgba(2,6,23,0.9); color:#d1d5db;
        }
        .modal-head { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:12px; }
        .close-btn { background:transparent; border:0; font-size:22px; color:#9ca3af; cursor:pointer; }

        .features { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:10px; }
        @media (max-width:700px){ .features { grid-template-columns:1fr; } }
        .feature-item { background:rgba(255,255,255,0.02); padding:10px; border-radius:8px; font-size:14px; color:#cbd5e1; }

        .meta-row { display:flex; gap:12px; flex-wrap:wrap; margin-top:12px; color:#9ca3af; font-size:13px; }
      `}</style>

      <div className="proj-wrap">
        <div className="section-head">
          <div>
            <div className="section-title">Projects</div>
            <div className="section-sub">Selected work — MERN + AI enhancements</div>
          </div>
          <div className="section-sub">Total: 1</div>
        </div>

        <div className="grid">
          {/* AI Powered E-commerce Card */}
          <article className="card" aria-labelledby="proj-ai-ecom">
            <div
              className="media"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1400&q=60')",
              }}
              role="img"
              aria-label="AI E-commerce preview"
            />

            <div className="card-body">
              <div id="proj-ai-ecom" className="proj-title">AI Powered E-commerce Website</div>
              <div className="proj-sub">MERN · AI Recommendations · Real-time · Payments</div>

              <p className="proj-desc">
                Full-featured e-commerce platform built with MongoDB, Express, React and Node.
                Integrates AI-powered product recommendations, search autocomplete, personalization,
                and live order updates — production-ready and containerized.
              </p>

              <div className="badges" aria-hidden="false">
                <span className="badge">React</span>
                <span className="badge">Node.js</span>
                <span className="badge">Express</span>
                <span className="badge">MongoDB</span>
                <span className="badge">TensorFlow.js</span>
                <span className="badge">Socket.IO</span>
                <span className="badge">Stripe</span>
                <span className="badge">Docker</span>
              </div>

              <div className="actions">
                <button className="btn" onClick={() => setOpenModal(true)} aria-haspopup="dialog">
                  View Details
                </button>

                <a
                  className="btn ghost"
                  href="https://github.com/yourusername/ai-ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github me-2" /> GitHub
                </a>
              </div>
            </div>
          </article>

          {/* Placeholder card to keep layout balanced */}
          <article className="card" aria-hidden="true" style={{ opacity: 0.96 }}>
            <div
              className="media"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(11,16,32,0.6), rgba(8,12,24,0.6))",
              }}
            />
            <div className="card-body">
              <div style={{ fontWeight: 800, color: "rgba(230,238,248,0.9)" }}>More projects coming soon</div>
              <p style={{ color: "#9ca3af", marginTop: 8 }}>
                Working on additional projects — they will appear here shortly.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="AI E-commerce details">
          <div className="modal-card">
            <div className="modal-head">
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 18,
                    background: "linear-gradient(90deg,#06b6d4,#7c3aed)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  AI Powered E-commerce Website
                </div>
                <div style={{ color: "#9ca3af", fontSize: 13 }}>MERN • AI Recommendations • Real-time Orders</div>
              </div>

              <button className="close-btn" onClick={() => setOpenModal(false)} aria-label="Close details">
                ✕
              </button>
            </div>

            <div style={{ display: "flex", gap: 18, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 260 }}>
                <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>
                  This project combines MERN fundamentals with AI-driven product recommendations to create a
                  personalized shopping experience. Features include item2vec-style recommendations, collaborative
                  filtering, search autocomplete, user profiles, order history, and secure Stripe checkout.
                </p>

                <div className="meta-row">
                  <div>🕒 6 months</div>
                  <div>🏷️ E-commerce</div>
                  <div>⭐ Solo + Team</div>
                </div>

                <div style={{ marginTop: 12 }}>
                  <strong style={{ color: "#e6eef8" }}>Highlights</strong>
                  <div className="features">
                    <div className="feature-item">Personalized AI recommendations (item2vec + collaborative)</div>
                    <div className="feature-item">Real-time order & inventory updates (Socket.IO)</div>
                    <div className="feature-item">Fast product search + autocomplete</div>
                    <div className="feature-item">Secure Stripe payments & order history</div>
                    <div className="feature-item">Admin dashboard with analytics & product management</div>
                    <div className="feature-item">Dockerized services + CI/CD pipeline</div>
                  </div>
                </div>
              </div>

              <div style={{ width: 260, minWidth: 220 }}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Tech Stack</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div className="badge">React + Redux</div>
                  <div className="badge">Node.js • Express</div>
                  <div className="badge">MongoDB • Mongoose</div>
                  <div className="badge">TensorFlow.js / Python</div>
                  <div className="badge">Socket.IO</div>
                  <div className="badge">Stripe</div>
                  <div className="badge">Docker • GitHub Actions</div>
                </div>

                <div style={{ marginTop: 12 }}>
                  <a
                    className="btn"
                    href="https://github.com/yourusername/ai-ecommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", width: "100%", textAlign: "center" }}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
