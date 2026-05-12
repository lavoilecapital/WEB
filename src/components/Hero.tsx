import ScrollExpandMedia from './ScrollExpandMedia';
import { LogoFull, SwissCross } from './Logo';

const langs = [
  {
    label: 'Deutsch',
    flag: (
      <svg className="w-4 h-3 flex-shrink-0" viewBox="0 0 16 11">
        <rect width="16" height="3.67" fill="#000" />
        <rect y="3.67" width="16" height="3.67" fill="#D00" />
        <rect y="7.34" width="16" height="3.66" fill="#FFCE00" />
      </svg>
    ),
  },
  {
    label: 'Français',
    flag: (
      <svg className="w-4 h-3 flex-shrink-0" viewBox="0 0 16 11">
        <rect width="5.33" height="11" fill="#002395" />
        <rect x="5.33" width="5.33" height="11" fill="#fff" />
        <rect x="10.66" width="5.34" height="11" fill="#ED2939" />
      </svg>
    ),
  },
  {
    label: 'Italiano',
    flag: (
      <svg className="w-4 h-3 flex-shrink-0" viewBox="0 0 16 11">
        <rect width="5.33" height="11" fill="#009246" />
        <rect x="5.33" width="5.33" height="11" fill="#fff" />
        <rect x="10.66" width="5.34" height="11" fill="#CE2B37" />
      </svg>
    ),
  },
  {
    label: 'English',
    flag: (
      <svg className="w-4 h-3 flex-shrink-0" viewBox="0 0 16 11">
        <rect width="16" height="11" fill="#012169" />
        <path d="M0 0L16 11M16 0L0 11" stroke="white" strokeWidth="2.2" />
        <path d="M0 0L16 11M16 0L0 11" stroke="#C8102E" strokeWidth="1.3" />
        <rect x="6.4" width="3.2" height="11" fill="white" />
        <rect y="4" width="16" height="3" fill="white" />
        <rect x="7" width="2" height="11" fill="#C8102E" />
        <rect y="4.5" width="16" height="2" fill="#C8102E" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="home">
      <ScrollExpandMedia
        mediaSrc="/video/hero.mp4"
        scrollToExpand="Scroll to discover"
        overlayContent={
          <div className="flex flex-col items-center text-center px-6 gap-4">
            {/* Eyebrow */}
            <div className="flex items-center flex-wrap justify-center gap-4 text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-white/70">
              <span className="w-9 h-px bg-white/40 block" />
              Dubai Relocation Experts
              <span className="flex items-center gap-2">
                <SwissCross size={16} />
                Swiss Founded
              </span>
              <span className="w-9 h-px bg-white/40 block" />
            </div>

            {/* Main title */}
            <h1 className="font-serif text-[clamp(2.2rem,5vw,5rem)] font-bold leading-[1.05] tracking-tight text-white">
              Your new life in Dubai,<br />
              <em className="italic font-semibold text-white/75">seamlessly crafted</em>
            </h1>

            {/* Subtitle */}
            <p className="text-[0.9rem] md:text-[1rem] text-white/70 max-w-lg leading-[1.85]">
              From Switzerland to the UAE — we handle every detail of your relocation, company formation, banking, and lifestyle. Personally. Precisely. In your language.
            </p>
          </div>
        }
      >
        {/* Content revealed after video expands fully */}
        <div className="bg-[#0A0A0A] px-6 md:px-16 pt-20 pb-20 min-h-screen flex items-center">
          <div className="max-w-3xl">
            <div className="mb-10">
              <LogoFull width={180} />
            </div>

            <div className="flex items-center flex-wrap gap-4 text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-white/50 mb-7">
              <span className="w-9 h-px bg-white/30 block" />
              Dubai Relocation Experts
              <span className="flex items-center gap-2">
                <SwissCross size={18} />
                Swiss Founded
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.6rem,6.5vw,6rem)] font-bold leading-[1.0] tracking-tight text-white mb-5">
              Your new life<br />in Dubai,<br />
              <em className="italic font-semibold text-white/75">seamlessly crafted</em>
            </h1>

            <p className="text-[0.95rem] md:text-[1.05rem] text-white/65 max-w-xl mb-10 leading-[1.85]">
              From Switzerland to the UAE — we handle every detail of your relocation, company formation, banking, and lifestyle. Personally. Precisely. In your language.
            </p>

            <div className="flex gap-3 flex-wrap mb-12">
              {langs.map(l => (
                <span
                  key={l.label}
                  className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.14em] uppercase border border-white/30 text-white/80 px-3.5 py-1.5"
                >
                  {l.flag}
                  {l.label}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-col sm:flex-row">
              <a
                href="#contact"
                className="inline-block text-xs font-semibold tracking-[0.15em] uppercase bg-white text-black px-8 py-4 hover:bg-white/85 transition-all no-underline text-center"
              >
                Start Your Journey
              </a>
              <a
                href="#services"
                className="inline-block text-xs font-semibold tracking-[0.15em] uppercase border border-white/25 text-white px-8 py-4 hover:border-white/70 transition-all no-underline text-center"
              >
                Discover Our Services
              </a>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>
    </section>
  );
}
