import { Building2, CreditCard, Home, Globe, Briefcase } from 'lucide-react';
import { SwissCross } from './Logo';

const items = [
  { icon: <Briefcase size={16} strokeWidth={2} className="text-white/60 shrink-0" />, label: 'Company Formation' },
  { icon: <CreditCard size={16} strokeWidth={2} className="text-white/60 shrink-0" />, label: 'Visa & Residency' },
  { icon: <Building2 size={16} strokeWidth={2} className="text-white/60 shrink-0" />, label: 'Banking Setup' },
  { icon: <Home size={16} strokeWidth={2} className="text-white/60 shrink-0" />, label: 'Real Estate' },
  { icon: <Globe size={16} strokeWidth={2} className="text-white/60 shrink-0" />, label: 'Lifestyle Concierge' },
  { icon: <SwissCross size={16} />, label: 'Swiss Founded' },
];

const allItems = [...items, ...items, ...items];

export default function Strip() {
  return (
    <div className="bg-black border-y border-white/[0.08] py-4 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track">
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 px-6">
            {item.icon}
            <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-white/70 whitespace-nowrap">
              {item.label}
            </span>
            <span className="ml-4 w-px h-4 bg-white/15 block" />
          </div>
        ))}
      </div>
    </div>
  );
}
