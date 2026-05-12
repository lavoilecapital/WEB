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
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(40,40,40,0.6)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute right-[-5%] top-[-10%] w-[65%] h-[110%] rounded-[50%_0_0_50%] border border-white/5 pointer-events-none" />
      <div className="absolute right-[5%] top-[5%] w-[50%] h-[85%] rounded-[50%_0_0_50%] border border-white/[0.03] pointer-events-none" />

      <div className="relative z-10 px-16 pt-36 pb-20 max-w-3xl">
        {/* Logo */}
        <div className="mb-10">
          <LogoFull width={220} />
        </div>

        {/* Eyebrow */}
        <div className="flex items-center flex-wrap gap-4 text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-white/50 mb-7">
          <span className="w-9 h-px bg-white/30 block" />
          Dubai Relocation Experts
          <span className="flex items-center gap-2">
            <SwissCross size={18} />
            Swiss Founded
          </span>
        </div>

        <h1 className="font-serif text-[clamp(3.2rem,6.5vw,6rem)] font-bold leading-[1.0] tracking-tight text-white mb-5">
          Your new life<br />in Dubai,<br />
          <em className="italic font-semibold text-white/75">seamlessly crafted</em>
        </h1>

        <p className="text-[1.05rem] text-white/65 max-w-xl mb-10 leading-[1.85]">
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

        <div className="flex gap-5 flex-wrap">
          <a
            href="#contact"
            className="inline-block text-xs font-semibold tracking-[0.15em] uppercase bg-white text-black px-11 py-4 hover:bg-white/85 hover:-translate-y-0.5 transition-all no-underline"
          >
            Start Your Journey
          </a>
          <a
            href="#services"
            className="inline-block text-xs font-semibold tracking-[0.15em] uppercase border border-white/25 text-white px-11 py-4 hover:border-white/70 transition-all no-underline"
          >
            Discover Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[0.6rem] font-semibold tracking-[0.25em] uppercase animate-bounce">
        Scroll
        <svg width="14" height="22" viewBox="0 0 16 24" fill="none">
          <rect x="6.5" y="3" width="3" height="6" rx="1.5" fill="white" opacity="0.4" />
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="white" strokeWidth="1.5" opacity="0.25" />
        </svg>
      </div>
    </section>
  );
}
