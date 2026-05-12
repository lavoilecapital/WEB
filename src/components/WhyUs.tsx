import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Globe, Link, Target, Plus } from 'lucide-react';
import { SwissCross } from './Logo';

const stats = [
  { num: '4', label: 'Languages spoken' },
  { num: '100%', label: 'End-to-end service' },
  { num: '3', label: 'Service pillars' },
  { num: '0%', label: 'UAE income tax' },
];

const points = [
  { icon: <Globe size={20} />, title: 'We speak your language — literally', text: 'German, French, Italian and English. The three official languages of Switzerland, covering every region we serve from back home.' },
  { icon: <Plus size={20} />, title: "We've done it ourselves", text: 'Our founders relocated from Switzerland to Dubai and built a company here. We know every step, every challenge, every shortcut.' },
  { icon: <Link size={20} />, title: 'One point of contact, everything handled', text: 'From your first enquiry to your first month living in Dubai — one team, one relationship, total coverage.' },
  { icon: <Target size={20} />, title: 'Boutique approach, no templates', text: "Every client's situation is unique. We tailor every recommendation to your personal and professional circumstances." },
];

export default function WhyUs() {
  const pointsRef = useRef(null);
  useFadeIn(pointsRef);

  return (
    <section id="whyus" className="py-24 bg-neutral-900 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-neutral-700 inline-block" /> Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Swiss precision,<br />
              <em className="italic font-normal text-neutral-400">Dubai expertise</em>
            </h2>
            <p className="text-neutral-400 mb-10 leading-relaxed">
              We didn't just study this process — we lived it. As Swiss expatriates who built our lives and business here, we understand exactly what you're facing, in your own language.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(s => (
                <div key={s.label} className="border border-white/10 p-5">
                  <p className="text-4xl font-serif font-bold mb-1">{s.num}</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div ref={pointsRef} className="flex flex-col gap-6">
            {points.map(p => (
              <div key={p.title} className="flex gap-4 items-start border border-white/10 p-5">
                <div className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{p.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
