import { useState, useEffect } from 'react';
import ScrollExpandMedia from './ScrollExpandMedia';
import { SwissCross } from './Logo';

// Custom hook to get scroll progress from ScrollExpandMedia
// We pass it down via a render prop pattern using a shared state
function HeroOverlay({ scrollProgress }: { scrollProgress: number }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const textTranslateX = scrollProgress * (isMobile ? 60 : 40);

  return (
    <div className="flex flex-col items-center text-center gap-6 w-full">
      {/* Eyebrow — slides left */}
      <div
        className="flex items-center justify-center gap-4 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-white/50"
        style={{ transform: `translateX(-${textTranslateX}vw)`, transition: 'none' }}
      >
        <span className="w-9 h-px bg-white/30 hidden sm:block" />
        Dubai Relocation Experts
        <span className="flex items-center gap-2">
          <SwissCross size={14} />
          Swiss Founded
        </span>
        <span className="w-9 h-px bg-white/30 hidden sm:block" />
      </div>

      {/* Title line 1 — slides left */}
      <div style={{ transform: `translateX(-${textTranslateX}vw)`, transition: 'none' }}>
        <span className="font-serif text-[clamp(2.4rem,5.5vw,5.5rem)] font-bold leading-none tracking-tight text-white/90">
          Your new life in Dubai,
        </span>
      </div>

      {/* Title line 2 — slides right */}
      <div style={{ transform: `translateX(${textTranslateX}vw)`, transition: 'none' }}>
        <span className="font-serif text-[clamp(2.4rem,5.5vw,5.5rem)] font-bold leading-none tracking-tight italic text-white/60">
          seamlessly crafted
        </span>
      </div>

      {/* Subtitle — slides left */}
      <div
        style={{ transform: `translateX(-${textTranslateX * 0.5}vw)`, transition: 'none' }}
      >
        <p className="text-[0.88rem] md:text-[1rem] text-white/45 max-w-lg leading-[1.9]">
          From Switzerland to the UAE — we handle every detail of your relocation,<br className="hidden md:block" />
          company formation, banking, and lifestyle. Personally. Precisely. In your language.
        </p>
      </div>

      {/* CTA buttons — slides right */}
      <div
        className="flex gap-4 flex-col sm:flex-row mt-1"
        style={{ transform: `translateX(${textTranslateX * 0.5}vw)`, transition: 'none' }}
      >
        <a
          href="#contact"
          className="inline-block text-xs font-semibold tracking-[0.15em] uppercase bg-white/90 text-black px-8 py-4 hover:bg-white transition-all no-underline text-center pointer-events-auto"
        >
          Start Your Journey
        </a>
        <a
          href="#services"
          className="inline-block text-xs font-semibold tracking-[0.15em] uppercase border border-white/30 text-white/80 px-8 py-4 hover:border-white/60 transition-all no-underline text-center pointer-events-auto"
        >
          Discover Our Services
        </a>
      </div>
    </div>
  );
}

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <section id="home">
      <ScrollExpandMedia
        mediaSrc="https://res.cloudinary.com/dyyjf1tyw/video/upload/q_auto/f_auto/v1778618145/18647269-hd_1080_1920_25fps_emogum.mp4"
        scrollToExpand="Scroll to discover"
        onScrollProgress={setScrollProgress}
        overlayContent={<HeroOverlay scrollProgress={scrollProgress} />}
      >
        <div />
      </ScrollExpandMedia>
    </section>
  );
}
