import { useEffect, useRef } from 'react'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Staggered entrance animations via class toggling
    const els = document.querySelectorAll('.housen-anim')
    els.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('housen-anim-in')
      }, i * 120)
    })
  }, [])

  return (
    <div className="housen-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .housen-root {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── HERO ── */
        .housen-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        /* Photo background */
        .housen-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/housen-hero.png');
          background-size: cover;
          background-position: center 40%;
          z-index: 0;
        }

        /* subtle atmospheric overlay */
        .housen-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(90,95,110,0.38) 0%,
            rgba(60,65,78,0.18) 30%,
            rgba(30,32,38,0.10) 60%,
            rgba(20,22,28,0.45) 100%
          );
          z-index: 1;
        }

        /* ── NAVIGATION ── */
        .housen-nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2.5rem;
        }

        .housen-logo {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          color: #fff;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .housen-logo-icon {
          width: 26px;
          height: 26px;
          background: rgba(255,255,255,0.15);
          border: 1.5px solid rgba(255,255,255,0.5);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          position: relative;
        }

        /* Pill nav in center */
        .housen-nav-pill {
          background: rgba(255,255,255,0.10);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 100px;
          padding: 0.45rem 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }

        .housen-nav-pill a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 0.83rem;
          font-weight: 400;
          padding: 0.35rem 1rem;
          border-radius: 100px;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .housen-nav-pill a:hover,
        .housen-nav-pill a.active {
          color: #fff;
          background: rgba(255,255,255,0.15);
        }

        .housen-book-btn {
          background: #e8b97a;
          color: #1a1108;
          border: none;
          border-radius: 100px;
          padding: 0.6rem 1.4rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          transition: all 0.25s ease;
          text-decoration: none;
          letter-spacing: 0.3px;
        }

        .housen-book-btn:hover {
          background: #f0c887;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(232,185,122,0.35);
        }

        /* ── BIG TITLE ── */
        .housen-big-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -58%);
          z-index: 2;
          text-align: center;
          pointer-events: none;
          width: 100%;
        }

        .housen-big-title h1 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(7rem, 16vw, 15rem);
          font-weight: 900;
          color: rgba(255,255,255,0.92);
          letter-spacing: -0.01em;
          line-height: 0.9;
          text-transform: uppercase;
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          text-shadow:
            0 4px 120px rgba(255,255,255,0.08),
            0 0 2px rgba(255,255,255,0.05);
        }

        /* ── EXPLORE LINK ── */
        .housen-explore {
          position: absolute;
          left: 2.5rem;
          top: 50%;
          transform: translateY(-10%);
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #fff;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          transition: gap 0.25s ease;
        }

        .housen-explore:hover {
          gap: 1rem;
        }

        .housen-explore-arrow {
          font-size: 1.1rem;
          transform: rotate(-45deg);
          display: inline-block;
        }

        /* ── ANNOTATION CARDS ── */
        .housen-annotation {
          position: absolute;
          z-index: 15;
          background: rgba(40,42,50,0.60);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 0.75rem 1rem;
          max-width: 210px;
          color: rgba(255,255,255,0.85);
          font-size: 0.75rem;
          line-height: 1.55;
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
        }

        .housen-annotation-dot {
          width: 8px;
          height: 8px;
          min-width: 8px;
          background: rgba(255,255,255,0.85);
          border-radius: 50%;
          margin-top: 4px;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.15);
        }

        .ann-1 {
          bottom: 38%;
          left: 4%;
        }

        .ann-2 {
          bottom: 22%;
          left: 28%;
        }

        .ann-3 {
          top: 38%;
          right: 4%;
        }

        /* ── BOTTOM TAGLINE ── */
        .housen-tagline {
          position: absolute;
          bottom: 2.5rem;
          left: 2.5rem;
          z-index: 15;
          color: rgba(255,255,255,0.80);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          line-height: 2;
        }

        /* ── SOCIAL ICONS ── */
        .housen-socials {
          position: absolute;
          bottom: 2.5rem;
          right: 2.5rem;
          z-index: 15;
          display: flex;
          gap: 0.7rem;
          align-items: center;
        }

        .housen-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .housen-social-btn:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.3);
        }

        /* ── ENTRANCE ANIMATIONS ── */
        .housen-anim {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .housen-anim-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .housen-big-title h1 {
            font-size: clamp(4rem, 20vw, 8rem);
          }
          .ann-1, .ann-2, .ann-3 {
            display: none;
          }
          .housen-nav-pill {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .housen-nav {
            padding: 1.2rem 1.4rem;
          }
          .housen-tagline {
            font-size: 0.68rem;
          }
          .housen-socials {
            right: 1.4rem;
            bottom: 1.8rem;
          }
          .housen-explore {
            left: 1.4rem;
          }
        }
      `}</style>

      <div className="housen-hero" ref={heroRef}>
        {/* === PHOTO BACKGROUND === */}
        <div className="housen-hero-bg" />
        <div className="housen-hero-overlay" />

        {/* === NAVIGATION === */}
        <nav className="housen-nav housen-anim">
          <a href="#" className="housen-logo">
            <span className="housen-logo-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 6.5L7 1.5l6 5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                <rect x="4" y="7.5" width="6" height="5" rx="1" stroke="#fff" strokeWidth="1.2" />
              </svg>
            </span>
            Housen
          </a>

          {/* Pill nav */}
          <div className="housen-nav-pill">
            <a href="#home" className="active">• Home</a>
            <a href="#properties">Properties</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#agents">Agents</a>
          </div>

          <a href="#book" className="housen-book-btn">
            Book Now
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 11L11 2M11 2H4M11 2v7" stroke="#1a1108" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>

        {/* === BIG TITLE === */}
        <div className="housen-big-title housen-anim">
          <h1>Housen</h1>
        </div>

        {/* === EXPLORE LINK === */}
        <a href="#properties" className="housen-explore housen-anim">
          Explore Properties
          <span className="housen-explore-arrow">↗</span>
        </a>

        {/* === ANNOTATION CARDS === */}
        <div className="housen-annotation ann-1 housen-anim">
          <span className="housen-annotation-dot" />
          <span>Using stone sand finished concrete and natural wood the design echoes the shoreline's</span>
        </div>

        <div className="housen-annotation ann-2 housen-anim">
          <span className="housen-annotation-dot" />
          <span>Using stone, sand-finished concrete, and natural wood, the design echoes the shoreline's natural textures.</span>
        </div>

        <div className="housen-annotation ann-3 housen-anim">
          <span className="housen-annotation-dot" />
          <span>Using stone, sand-finished concrete, and natural wood, the design echoes the shoreline's natural textures.</span>
        </div>

        {/* === BOTTOM TAGLINE === */}
        <div className="housen-tagline housen-anim">
          We Build<br />
          Modern<br />
          Houses<br />
          In USA
        </div>

        {/* === SOCIAL ICONS === */}
        <div className="housen-socials housen-anim">
          <a href="https://facebook.com" className="housen-social-btn" title="Facebook" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://instagram.com" className="housen-social-btn" title="Instagram" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://twitter.com" className="housen-social-btn" title="Twitter / X" target="_blank" rel="noreferrer">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://linkedin.com" className="housen-social-btn" title="LinkedIn" target="_blank" rel="noreferrer">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
