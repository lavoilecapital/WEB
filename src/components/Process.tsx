import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const steps = [
  { num: '1', title: 'Discovery Call', text: 'We learn about your situation, goals and timeline in a free 30-minute consultation.' },
  { num: '2', title: 'Tailored Plan', text: 'We prepare a personalised roadmap covering every step relevant to your case.' },
  { num: '3', title: 'Execution', text: 'We handle all filings, authorities and appointments on your behalf.' },
  { num: '4', title: 'Arrival Support', text: 'Concierge and lifestyle services begin from the day you land in Dubai.' },
  { num: '5', title: 'Ongoing Care', text: 'We remain your trusted partner for renewals, investments and life in the UAE.' },
];

export default function Process() {
  const stepsRef = useRef(null);
  useFadeIn(stepsRef);

  return (
    <section id="process" className="py-20 md:py-24 bg-[#f0ede8] overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-neutral-400 inline-block" /> How It Works
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-neutral-900 mb-12 md:mb-16">
          Your journey to Dubai,<br />
          <em className="font-serif italic font-normal text-neutral-500">step by step</em>
        </h2>

        {/* Mobile: vertical list */}
        <div ref={stepsRef} className="flex flex-col gap-8 md:hidden">
          {steps.map(s => (
            <div key={s.num} className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full border border-neutral-400 flex items-center justify-center text-lg font-serif text-neutral-700 bg-[#f0ede8] shrink-0">
                {s.num}
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">{s.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:flex gap-0 relative">
          <div className="absolute top-7 left-0 right-0 h-px bg-neutral-300 z-0" />
          {steps.map((s) => (
            <div key={s.num} className="flex-1 flex flex-col items-center text-center px-4 relative z-10">
              <div className="w-14 h-14 rounded-full border border-neutral-400 flex items-center justify-center text-lg font-serif text-neutral-700 bg-[#f0ede8] mb-4">
                {s.num}
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
