import React from "react";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <style>{`
        .footer-wrapper {
          background: linear-gradient(180deg, #0d0f14, #0a0c10);
          color: #d1d5db;
          padding: 40px 20px;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-name {
          font-size: 22px;
          font-weight: 700;
          background: linear-gradient(90deg, #06b6d4, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-bio {
          font-size: 15px;
          color: #9ca3af;
          margin-bottom: 18px;
        }

        /* Social icons */
        .footer-social a {
          color: #cbd5e1;
          margin: 0 12px;
          font-size: 24px;
          transition: 0.3s ease;
        }

        .footer-social a:hover {
          color: #06b6d4;
          transform: translateY(-3px);
          text-shadow: 0 0 12px rgba(6,182,212,0.4);
        }

        /* Contact info */
        .footer-contact {
          margin-top: 10px;
          margin-bottom: 18px;
          color: #9ca3af;
          font-size: 15px;
        }

        .footer-contact i {
          color: #06b6d4;
        }

        /* Bottom text */
        .footer-copy {
          font-size: 13px;
          color: #6b7280;
        }

        .footer-highlight {
          color: #facc15;
          font-weight: 600;
        }
      `}</style>

      <div className="footer-container">
        {/* Name */}
        <p className="footer-name">Vanshika Mudgal</p>

        {/* Short Bio */}
        <p className="footer-bio">
          Passionate Full Stack Developer creating modern and impactful digital experiences.
        </p>

        {/* Social Icons */}
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/vanshika-mudgal-a0056b24a/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <p>
            <i className="bi bi-envelope-fill me-2"></i>
            vanshikamudgal010@gmail.com
          </p>
          <p>
            <i className="bi bi-telephone-fill me-2"></i>
            +91 --
          </p>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Made by{" "}
          <span className="footer-highlight">Vanshika Mudgal</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


