import { useState, useEffect } from 'react';
import { LogoMark } from './Logo';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#realestate', label: 'Real Estate' },
  { href: '#concierge', label: 'Concierge' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : ''
        }`}
      >
        <a href="#home" className="flex items-center gap-3 no-underline">
          <LogoMark size={44} />
          <span className="font-serif text-lg font-bold tracking-widest text-white uppercase">
            La Voile Capital
          </span>
        </a>

        <ul className="hidden lg:flex gap-10 list-none">
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

        <a
          href="#contact"
          className="hidden lg:inline-block text-xs font-semibold tracking-widest uppercase border border-white/40 text-white px-6 py-2.5 hover:bg-white hover:text-black transition-all no-underline"
        >
          Get in Touch
        </a>

        <button
          className="lg:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-px bg-white" />
          <span className="block w-6 h-px bg-white" />
          <span className="block w-6 h-px bg-white" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-10 transition-opacity duration-300 ${
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
      </div>
    </>
  );
}
