import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Car, Hotel, Compass, Users, Package, Shield, Smartphone, Phone } from 'lucide-react';

const items = [
  { icon: <Car size={22} />, label: 'Car Rental & Leasing', sub: 'Curated fleet options, from practical daily drivers to premium vehicles.' },
  { icon: <Hotel size={22} />, label: 'Hotel & Accommodation', sub: 'Pre-arrival stays, serviced apartments and exclusive hotel rates across Dubai.' },
  { icon: <Compass size={22} />, label: 'Activity & Experiences', sub: 'Desert safaris, yacht charters, dining reservations — curated for you.' },
  { icon: <Users size={22} />, label: 'Schools & Healthcare', sub: 'International school guidance and private healthcare registration for families.' },
  { icon: <Package size={22} />, label: 'Home Setup & Moving', sub: 'Furniture, internet, utilities — everything you need from day one.' },
  { icon: <Shield size={22} />, label: 'Insurance Advisory', sub: 'Health, vehicle and property insurance tailored for expat profiles in the UAE.' },
  { icon: <Smartphone size={22} />, label: 'SIM & Digital Setup', sub: 'UAE mobile plans, banking apps and digital essentials sorted before you arrive.' },
  { icon: <Phone size={22} />, label: 'Airport Transfers', sub: 'Private transfers and meet & greet so your journey starts stress-free.' },
];

export default function Concierge() {
  const gridRef = useRef(null);
  useFadeIn(gridRef);

  return (
    <section id="concierge" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-neutral-600 inline-block" /> Lifestyle Services
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Private concierge for<br />
          <em className="italic font-normal text-neutral-400">discerning residents</em>
        </h2>
        <p className="text-neutral-400 max-w-xl mb-14">
          Your arrival in Dubai should feel effortless. From the moment you land, we take care of the details that make daily life exceptional.
        </p>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.label} className="border border-white/10 p-5 flex flex-col gap-3">
              <div className="text-white/60">{item.icon}</div>
              <h3 className="font-semibold text-sm leading-snug">{item.label}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
