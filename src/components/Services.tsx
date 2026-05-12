import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Briefcase, CreditCard, Building2 } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: <Briefcase size={22} />,
    name: 'Company Formation',
    desc: 'We structure and register your UAE business — Mainland, Freezone, or Offshore — matched to your goals and optimised for tax efficiency.',
    features: ['Mainland & Freezone setup', 'License application & approval', 'PRO & government liaison', 'Corporate structure advisory', 'Ongoing compliance support'],
  },
  {
    num: '02',
    icon: <CreditCard size={22} />,
    name: 'Visa & Residency',
    desc: "UAE residency, investor visas, family sponsorship — we manage every document and authority interaction so you don't have to.",
    features: ['Residency visa processing', 'Investor & Golden Visa', 'Family sponsorship', 'Emirates ID registration', 'Medical & insurance setup'],
  },
  {
    num: '03',
    icon: <Building2 size={22} />,
    name: 'Banking Setup',
    desc: 'Opening a UAE business or personal bank account can be complex. Our relationships with leading banks simplify the process significantly.',
    features: ['Personal & business accounts', 'Multi-currency solutions', 'Bank introductions', 'Documentation preparation', 'Credit & card setup'],
  },
];

export default function Services() {
  const gridRef = useRef(null);
  useFadeIn(gridRef);

  return (
    <section id="services" className="py-24 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-neutral-700 inline-block" /> What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Complete relocation &<br />
          <em className="italic font-normal text-neutral-400">business advisory</em>
        </h2>
        <p className="text-neutral-400 max-w-xl mb-14">
          A boutique advisory founded by Swiss expatriates who navigated every step of UAE relocation firsthand. We guide you through the entire process — with fluency in your language and precision in every detail.
        </p>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.num} className="border border-white/10 p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-serif text-white/20 font-bold">{s.num}</span>
                <div className="text-white/60">{s.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{s.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-neutral-300">
                    <span className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
