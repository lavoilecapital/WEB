import { Building2, CreditCard, Home, Globe, Briefcase } from 'lucide-react';
import { SwissCross } from './Logo';

const items = [
  { icon: <Briefcase size={18} strokeWidth={2} className="text-white/60" />, label: 'Company Formation' },
  { icon: <CreditCard size={18} strokeWidth={2} className="text-white/60" />, label: 'Visa & Residency' },
  { icon: <Building2 size={18} strokeWidth={2} className="text-white/60" />, label: 'Banking Setup' },
  { icon: <Home size={18} strokeWidth={2} className="text-white/60" />, label: 'Real Estate' },
  { icon: <Globe size={18} strokeWidth={2} className="text-white/60" />, label: 'Lifestyle Concierge' },
  { icon: <SwissCross size={18} />, label: 'Swiss Founded' },
];

export default function Strip() {
  return (
    <div className="bg-black border-y border-white/[0.08] px-16 py-5 flex items-center overflow-hidden">
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center flex-1 justify-center">
          <div className="flex items-center gap-3">
            {item.icon}
            <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/70 whitespace-nowrap">
              {item.label}
            </span>
          </div>
          {i < items.length - 1 && (
            <div className="hidden md:block w-px h-7 bg-white/12 ml-6" />
          )}
        </div>
      ))}
    </div>
  );
}
