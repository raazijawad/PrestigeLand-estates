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
    <div className="w-screen h-screen overflow-hidden font-['DM_Sans',sans-serif]">
      <div className="relative w-full h-screen overflow-hidden" ref={heroRef}>
        {/* === PHOTO BACKGROUND === */}
        <div
          className="absolute inset-0 bg-[url('/housen-hero.png')] bg-cover bg-center z-0"
        />

        {/* === OVERLAY === */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(90,95,110,0.38) 0%, rgba(60,65,78,0.18) 30%, rgba(30,32,38,0.10) 60%, rgba(20,22,28,0.45) 100%)',
          }}
        />

        {/* === NAVIGATION === */}
        <nav className="housen-anim absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-10 py-6 md:px-6 md:py-4">
          <a
            href="#"
            className="flex items-center gap-[0.55rem] text-white no-underline text-[1.05rem] font-medium tracking-[0.5px] md:text-[0.95rem]"
          >
            <span className="w-[26px] h-[26px] bg-white/15 border border-white/50 rounded-md flex items-center justify-center text-[0.7rem] relative md:w-[22px] md:h-[22px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="md:w-3 md:h-3"
              >
                <path
                  d="M1 6.5L7 1.5l6 5"
                  stroke="#fff"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <rect
                  x="4"
                  y="7.5"
                  width="6"
                  height="5"
                  rx="1"
                  stroke="#fff"
                  strokeWidth="1.2"
                />
              </svg>
            </span>
            Housen
          </a>

          {/* Pill nav */}
          <div className="hidden md:flex bg-white/10 backdrop-blur-md border border-white/18 rounded-full px-[0.6rem] py-[0.45rem] items-center gap-[0.2rem]">
            <a
              href="#home"
              className="text-white/75 no-underline text-[0.83rem] font-normal px-[1rem] py-[0.35rem] rounded-full transition-all duration-250 whitespace-nowrap hover:text-white hover:bg-white/15 text-white"
            >
              • Home
            </a>
            <a
              href="#properties"
              className="text-white/75 no-underline text-[0.83rem] font-normal px-[1rem] py-[0.35rem] rounded-full transition-all duration-250 whitespace-nowrap hover:text-white hover:bg-white/15"
            >
              Properties
            </a>
            <a
              href="#about"
              className="text-white/75 no-underline text-[0.83rem] font-normal px-[1rem] py-[0.35rem] rounded-full transition-all duration-250 whitespace-nowrap hover:text-white hover:bg-white/15"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white/75 no-underline text-[0.83rem] font-normal px-[1rem] py-[0.35rem] rounded-full transition-all duration-250 whitespace-nowrap hover:text-white hover:bg-white/15"
            >
              Services
            </a>
            <a
              href="#agents"
              className="text-white/75 no-underline text-[0.83rem] font-normal px-[1rem] py-[0.35rem] rounded-full transition-all duration-250 whitespace-nowrap hover:text-white hover:bg-white/15"
            >
              Agents
            </a>
          </div>

          <a
            href="#book"
            className="bg-[#e8b97a] text-[#1a1108] border-none rounded-full px-[1.4rem] py-[0.6rem] font-['DM_Sans',sans-serif] text-[0.88rem] font-semibold cursor-pointer flex items-center gap-[0.45rem] transition-all duration-250 no-underline tracking-[0.3px] hover:bg-[#f0c887] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(232,185,122,0.35)] md:px-[1.1rem] md:py-[0.5rem] md:text-[0.8rem]"
          >
            Book Now
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M2 11L11 2M11 2H4M11 2v7"
                stroke="#1a1108"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>

        {/* === BIG TITLE === */}
        <div className="housen-anim absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none w-full">
          <h1
            className="font-['Barlow_Condensed',sans-serif] text-[clamp(7rem,16vw,15rem)] font-black text-white/92 tracking-[-0.01em] leading-[0.9] uppercase md:text-[clamp(4rem,20vw,8rem)] lg:text-[clamp(7rem,16vw,15rem)]"
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
              textShadow:
                '0 4px 120px rgba(255,255,255,0.08), 0 0 2px rgba(255,255,255,0.05)',
            }}
          >
            Housen
          </h1>
        </div>

        {/* === EXPLORE LINK === */}
        <a
          href="#properties"
          className="housen-anim absolute left-10 top-[65%] z-10 flex items-center gap-[0.6rem] text-white no-underline text-[0.95rem] font-medium tracking-[0.3px] transition-[gap] duration-250 hover:gap-4 md:left-6 md:text-[0.85rem] lg:left-10 lg:text-[0.95rem]"
        >
          Explore Properties
          <span className="text-[1.1rem] inline-block rotate-[-45deg]">↗</span>
        </a>

        {/* === ANNOTATION CARDS === */}
        <div className="hidden md:block housen-anim absolute bottom-[38%] left-[4%] z-[15] bg-[rgba(40,42,50,0.60)] backdrop-blur-md border border-white/12 rounded-[10px] px-4 py-3 max-w-[210px] text-white/85 text-[0.75rem] leading-[1.55] flex items-start gap-[0.55rem]">
          <span className="w-2 h-2 min-w-2 bg-white/85 rounded-full mt-1 shadow-[0_0_0_3px_rgba(255,255,255,0.15)]" />
          <span>
            Using stone sand finished concrete and natural wood the design
            echoes the shoreline's
          </span>
        </div>

        <div className="hidden md:block housen-anim absolute bottom-[22%] left-[28%] z-[15] bg-[rgba(40,42,50,0.60)] backdrop-blur-md border border-white/12 rounded-[10px] px-4 py-3 max-w-[210px] text-white/85 text-[0.75rem] leading-[1.55] flex items-start gap-[0.55rem]">
          <span className="w-2 h-2 min-w-2 bg-white/85 rounded-full mt-1 shadow-[0_0_0_3px_rgba(255,255,255,0.15)]" />
          <span>
            Using stone, sand-finished concrete, and natural wood, the design
            echoes the shoreline's natural textures.
          </span>
        </div>

        <div className="hidden md:block housen-anim absolute top-[38%] right-[4%] z-[15] bg-[rgba(40,42,50,0.60)] backdrop-blur-md border border-white/12 rounded-[10px] px-4 py-3 max-w-[210px] text-white/85 text-[0.75rem] leading-[1.55] flex items-start gap-[0.55rem]">
          <span className="w-2 h-2 min-w-2 bg-white/85 rounded-full mt-1 shadow-[0_0_0_3px_rgba(255,255,255,0.15)]" />
          <span>
            Using stone, sand-finished concrete, and natural wood, the design
            echoes the shoreline's natural textures.
          </span>
        </div>

        {/* === BOTTOM TAGLINE === */}
        <div className="housen-anim absolute bottom-10 left-10 z-[15] text-white/80 text-[0.78rem] font-medium tracking-[0.15em] uppercase leading-8 md:bottom-8 md:left-6 md:text-[0.7rem] lg:bottom-10 lg:left-10 lg:text-[0.78rem]">
          We Build<br />
          Modern
          <br />
          Houses
          <br />
          In USA
        </div>

        {/* === SOCIAL ICONS === */}
        <div className="housen-anim absolute bottom-10 right-10 z-[15] flex gap-[0.7rem] items-center md:bottom-8 md:right-6 lg:bottom-10 lg:right-10">
          <a
            href="https://facebook.com"
            className="w-[38px] h-[38px] rounded-full bg-white/12 border border-white/25 flex items-center justify-center text-white text-[0.82rem] font-semibold transition-all duration-250 cursor-pointer hover:bg-white/25 hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(0,0,0,0.3)] md:w-[34px] md:h-[34px] lg:w-[38px] lg:h-[38px]"
            title="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            className="w-[38px] h-[38px] rounded-full bg-white/12 border border-white/25 flex items-center justify-center text-white text-[0.82rem] font-semibold transition-all duration-250 cursor-pointer hover:bg-white/25 hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(0,0,0,0.3)] md:w-[34px] md:h-[34px] lg:w-[38px] lg:h-[38px]"
            title="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="w-[38px] h-[38px] rounded-full bg-white/12 border border-white/25 flex items-center justify-center text-white text-[0.82rem] font-semibold transition-all duration-250 cursor-pointer hover:bg-white/25 hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(0,0,0,0.3)] md:w-[34px] md:h-[34px] lg:w-[38px] lg:h-[38px]"
            title="Twitter / X"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            className="w-[38px] h-[38px] rounded-full bg-white/12 border border-white/25 flex items-center justify-center text-white text-[0.82rem] font-semibold transition-all duration-250 cursor-pointer hover:bg-white/25 hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(0,0,0,0.3)] md:w-[34px] md:h-[34px] lg:w-[38px] lg:h-[38px]"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
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
