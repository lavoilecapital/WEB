import { LogoFooter, SwissCross } from './Logo';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#realestate', label: 'Real Estate' },
  { href: '#concierge', label: 'Concierge' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-16 py-16 border-t border-white/10">
      <div className="flex justify-between items-center flex-wrap gap-8 pb-10 border-b border-white/10 mb-8">
        <div>
          <LogoFooter width={180} />
          <div className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-white/30 mt-1.5">
            Relocation &amp; Lifestyle Advisory · Dubai, UAE
          </div>
        </div>
        <ul className="flex gap-9 list-none flex-wrap">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-white/30 hover:text-white transition-colors no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4">
        <p className="text-[0.72rem] text-white/[0.18] tracking-[0.05em]">
          &copy; {new Date().getFullYear()} La Voile Capital. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-white/30">
          <SwissCross size={20} />
          Swiss Founded · Precision Delivered
        </div>
      </div>
    </footer>
  );
}
