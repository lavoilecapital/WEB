import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Check } from 'lucide-react';

const features = [
  'Off-plan & ready units',
  'Developer negotiations',
  'ROI & yield analysis',
  'Legal due diligence',
  'Payment plan advisory',
  'Property management',
];

export default function RealEstate() {
  const cardRef = useRef(null);
  useFadeIn(cardRef);

  return (
    <section id="realestate" className="py-24 bg-neutral-950 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-neutral-700 inline-block" /> Real Estate
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Invest with<br />
              <em className="italic font-normal text-neutral-400">clarity & confidence</em>
            </h2>
            <p className="text-neutral-400 mb-10 leading-relaxed">
              Dubai's property market offers exceptional returns — but navigating it requires local insight. We identify, filter and present only the deals that make genuine sense for your investment profile.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                  <Check size={14} className="text-white/50 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <button className="border border-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-neutral-950 transition-colors">
              Explore Opportunities
            </button>
          </div>

          {/* Right — Featured card */}
          <div ref={cardRef} className="border border-white/15 p-8 flex flex-col gap-6">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500">Featured Opportunity</p>
            <div>
              <h3 className="text-2xl font-serif font-bold">Downtown Dubai<br />2BR Residence</h3>
              <p className="text-sm text-neutral-500 mt-1">Burj Khalifa District · Ready Q3 2025</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { val: '7.2%', lbl: 'Net Yield' },
                { val: 'AED 2.4M', lbl: 'Starting from' },
                { val: '0%', lbl: 'Capital Gains Tax' },
              ].map(m => (
                <div key={m.lbl} className="border border-white/10 p-4 text-center">
                  <p className="text-xl font-serif font-bold">{m.val}</p>
                  <p className="text-xs text-neutral-500 mt-1">{m.lbl}</p>
                </div>
              ))}
            </div>

            <div className="border border-white/15 p-6 text-center">
              <p className="text-4xl font-serif font-bold">No</p>
              <p className="text-xs tracking-widest uppercase text-neutral-400 mt-1">Income Tax</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
