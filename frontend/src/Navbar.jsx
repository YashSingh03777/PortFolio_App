import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  return (
    <header>
      <style>{`
        :root{
          --bg-900: #0b1020;        /* page background */
          --nav-bg: rgba(8,12,24,0.7); /* navbar glass */
          --muted: #98a0b3;
          --text: #e6eef8;
          --accent-1: #06b6d4;
          --accent-2: #8b5cf6;
          --glass-border: rgba(255,255,255,0.04);
        }

        /* top-level layout */
        .topbar {
          position: sticky;
          top: 0;
          z-index: 60;
          background: linear-gradient(180deg, rgba(11,16,32,0.65), rgba(8,12,24,0.6));
          backdrop-filter: blur(8px) saturate(120%);
          -webkit-backdrop-filter: blur(8px) saturate(120%);
          border-bottom: 1px solid var(--glass-border);
        }

        /* container */
        .navbar {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          padding:10px 26px;
          max-width:1200px;
          margin:0 auto;
        }

        /* brand */
        .brand {
          display:flex;
          align-items:center;
          gap:12px;
          text-decoration:none;
          cursor:pointer;
        }

        .logo-badge {
          width:44px;height:44px;border-radius:10px;
          background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
          display:flex;align-items:center;justify-content:center;
          color:white;font-weight:800;font-size:18px;box-shadow:0 10px 30px rgba(11,16,32,0.6);
          transform: translateZ(0);
        }

        .brand-title {
          font-weight:700;color:var(--text);letter-spacing:0.2px;font-size:18px;
          text-shadow: 0 1px 0 rgba(0,0,0,0.6);
        }
        .brand-sub {
          font-size:12px;color:var(--muted);margin-top:-2px;
        }

        /* nav links (desktop) */
        .nav-links {
          display:flex;gap:20px;align-items:center;
        }

        .nav-link {
          position:relative;
          text-decoration:none;color:var(--muted);font-weight:600;padding:8px 6px;
          transition: color .18s ease, transform .18s ease;
          border-radius:6px;
        }

        .nav-link:hover{
          color:var(--text);
          transform:translateY(-2px);
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
        }

        /* active underline + pill highlight */
        .nav-link::after{
          content:"";position:absolute;left:12%;right:12%;height:3px;bottom:-6px;border-radius:3px;
          transform:scaleX(0);transform-origin:left center;transition:transform .28s cubic-bezier(.2,.9,.2,1);
          background:linear-gradient(90deg,var(--accent-1),var(--accent-2));
          box-shadow:0 6px 18px rgba(99,102,241,0.12);
        }

        .nav-link.active{
          color:var(--text);
          background: linear-gradient(90deg, rgba(6,182,212,0.06), rgba(139,92,246,0.04));
        }
        .nav-link.active::after{
          transform:scaleX(1);
        }

        /* contact button */
        .contact-btn {
          display:inline-flex;align-items:center;gap:8px;
          padding:8px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);
          cursor:pointer;font-weight:700;background:linear-gradient(90deg,var(--accent-1),var(--accent-2));
          color:white;box-shadow:0 10px 30px rgba(9,10,25,0.6);
          transition: transform .16s ease, box-shadow .16s ease, opacity .16s ease;
        }
        .contact-btn:active{ transform: translateY(1px); }
        .contact-btn:hover{ box-shadow: 0 14px 36px rgba(9,10,25,0.7); }

        /* hamburger (mobile) */
        .hamburger {
          display:none;border:0;background:transparent;color:var(--muted);font-size:22px;cursor:pointer;padding:8px;border-radius:8px;transition:background .18s ease, color .18s ease;
        }
        .hamburger:hover{ background: rgba(255,255,255,0.02); color:var(--text); }

        @media (max-width: 900px) {
          .nav-links { display:none; }
          .hamburger { display:inline-flex; }
        }

        /* mobile sliding panel */
        .mobile-panel {
          display:none;max-height:0;overflow:hidden;transition:max-height .36s cubic-bezier(.2,.9,.2,1), padding .28s ease;
          border-top: 1px solid rgba(255,255,255,0.02);
          background: linear-gradient(180deg, rgba(12,15,26,0.6), rgba(6,8,18,0.6));
        }
        .mobile-panel.open { display:block; max-height:420px; padding:12px 22px 20px 22px; }

        .mobile-links { display:flex; flex-direction:column; gap:12px; }
        .mobile-links a { padding:12px;border-radius:10px;color:var(--muted);text-decoration:none;font-weight:700; background:transparent; transition: background .16s ease, color .16s ease; }
        .mobile-links a:hover { background: rgba(255,255,255,0.02); color:var(--text); }
        .mobile-links a.active { background: linear-gradient(90deg, rgba(6,182,212,0.08), rgba(139,92,246,0.06)); color: var(--text); }

        /* small utilities */
        .container { width:100%; padding:0 12px; box-sizing:border-box; }
      `}</style>

      <div className="topbar">
        <div className="navbar container">
          <Link to="/" className="brand" onClick={closeMenu} aria-label="Vanshika Portfolio - home">
            <div className="logo-badge">V</div>
            <div>
              <div className="brand-title">Vanshika Portfolio</div>
              <div className="brand-sub">Full-Stack Developer</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="nav-links" aria-label="Primary Navigation">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>

            <NavLink to="/project" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Projects
            </NavLink>

            <NavLink to="/qna" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Q&A
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <button className="contact-btn">Contact</button>
            </NavLink>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={toggleMenu}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile sliding panel */}
        <div className={`mobile-panel ${open ? "open" : ""}`}>
          <div className="mobile-links container">
            <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>

            <NavLink to="/project" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
              Projects
            </NavLink>

            <NavLink to="/qna" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
              Info
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
              <button className="contact-btn" style={{ width: "100%" }}>Contact</button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
