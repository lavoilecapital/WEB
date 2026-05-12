import { useState, useEffect } from 'react';
import { LogoMark } from './Logo';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#realestate', label: 'Real Estate' },
  { href: '#concierge', label: 'Concierge' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

const langs = [
  {
    code: 'en',
    label: 'English',
    flag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <rect width="22" height="16" fill="#012169" />
        <path d="M0 0L22 16M22 0L0 16" stroke="white" strokeWidth="3" />
        <path d="M0 0L22 16M22 0L0 16" stroke="#C8102E" strokeWidth="1.8" />
        <rect x="9" width="4" height="16" fill="white" />
        <rect y="6" width="22" height="4" fill="white" />
        <rect x="9.5" width="3" height="16" fill="#C8102E" />
        <rect y="6.5" width="22" height="3" fill="#C8102E" />
      </svg>
    ),
  },
  {
    code: 'fr',
    label: 'Français',
    flag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <rect width="7.33" height="16" fill="#002395" />
        <rect x="7.33" width="7.33" height="16" fill="#fff" />
        <rect x="14.66" width="7.34" height="16" fill="#ED2939" />
      </svg>
    ),
  },
  {
    code: 'de',
    label: 'Deutsch',
    flag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <rect width="22" height="5.33" fill="#000" />
        <rect y="5.33" width="22" height="5.33" fill="#D00" />
        <rect y="10.66" width="22" height="5.34" fill="#FFCE00" />
      </svg>
    ),
  },
  {
    code: 'it',
    label: 'Italiano',
    flag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <rect width="7.33" height="16" fill="#009246" />
        <rect x="7.33" width="7.33" height="16" fill="#fff" />
        <rect x="14.66" width="7.34" height="16" fill="#CE2B37" />
      </svg>
    ),
  },
];

function translateTo(langCode: string) {
  const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
  if (selectEl) {
    selectEl.value = langCode;
    selectEl.dispatchEvent(new Event('change'));
    return;
  }
  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/${langCode}; domain=${domain}; path=/`;
  document.cookie = `googtrans=/en/${langCode}; path=/`;
  window.location.reload();
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('en');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLang = (code: string) => {
    setActiveLang(code);
    translateTo(code);
  };

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-16 py-4 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : ''
        }`}
      >
        {/* Logo — always visible */}
        <a href="#home" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <LogoMark size={36} />
          <span className="font-serif text-sm md:text-base font-bold tracking-widest text-white uppercase">
            La Voile Capital
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-semibold tracking-widest uppercase text-white/65 hover:text-white transition-colors no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: flags + CTA (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="grid grid-cols-2 gap-1">
            {langs.map(l => (
              <button
                key={l.code}
                onClick={() => handleLang(l.code)}
                title={l.label}
                className={`rounded overflow-hidden border transition-all duration-200 cursor-pointer bg-transparent p-0 ${
                  activeLang === l.code
                    ? 'border-white/80 opacity-100 scale-105'
                    : 'border-white/20 opacity-50 hover:opacity-90 hover:border-white/50'
                }`}
                style={{ width: 26, height: 19 }}
              >
                {l.flag}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold tracking-widest uppercase border border-white/40 text-white px-5 py-2.5 hover:bg-white hover:text-black transition-all no-underline"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile right: flags 2x2 + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <div className="grid grid-cols-2 gap-0.5">
            {langs.map(l => (
              <button
                key={l.code}
                onClick={() => handleLang(l.code)}
                title={l.label}
                className={`rounded overflow-hidden border transition-all duration-200 cursor-pointer bg-transparent p-0 ${
                  activeLang === l.code
                    ? 'border-white/80 opacity-100'
                    : 'border-white/20 opacity-50'
                }`}
                style={{ width: 22, height: 16 }}
              >
                {l.flag}
              </button>
            ))}
          </div>
          <button
            className="flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-white" />
            <span className="block w-6 h-px bg-white" />
            <span className="block w-6 h-px bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-8 right-10 text-3xl text-white/60 bg-transparent border-none cursor-pointer"
          onClick={close}
        >
          ✕
        </button>

        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="font-serif text-4xl font-bold text-white hover:text-white/60 transition-colors no-underline"
          >
            {l.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={close}
          className="text-xs font-semibold tracking-widest uppercase border border-white/40 text-white px-8 py-3 hover:bg-white hover:text-black transition-all no-underline mt-2"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
}
