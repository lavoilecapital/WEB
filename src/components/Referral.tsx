import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Send, UserPlus, CheckCircle, Briefcase, Building2, Scale, Users } from 'lucide-react';

const steps = [
  { num: '01', icon: <Send size={18} />, title: 'Refer a prospect', text: 'Share the contact details of an entrepreneur, investor or company interested in our services.' },
  { num: '02', icon: <CheckCircle size={18} />, title: 'We take care of everything', text: 'Our team handles the entire company formation and structuring process in Dubai.' },
  { num: '03', icon: <UserPlus size={18} />, title: 'You get paid', text: 'Once the file is validated and finalised, you receive your commission as agreed.' },
];

const whoCanJoin = [
  { icon: <Briefcase size={16} />, label: 'Consultants & business introducers' },
  { icon: <Users size={16} />, label: 'Entrepreneurs & executives' },
  { icon: <Scale size={16} />, label: 'Accounting & legal firms' },
  { icon: <Building2 size={16} />, label: 'Marketing & real estate agencies' },
  { icon: <UserPlus size={16} />, label: 'Anyone with a professional network' },
];

const whyJoin = [
  'Attractive commission structure',
  'Simple and fast process',
  'Transparent file tracking',
  'Professional team based in Dubai',
  'Additional income opportunity',
];

const services = [
  'Company formation in Dubai',
  'Bank account opening',
  'UAE visa processing',
  'Tax & administrative structuring',
  'Solutions for international entrepreneurs & investors',
];

export default function Referral() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  useFadeIn(stepsRef);
  useFadeIn(bottomRef);

  return (
    <section id="referral" className="py-20 md:py-24 bg-neutral-950 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-neutral-700 inline-block" /> Partner Programme
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
          Refer our services &<br />
          <em className="italic font-normal text-neutral-400">get rewarded</em>
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12 text-sm md:text-base leading-relaxed">
          Do you know someone looking to set up or structure a business in Dubai? Refer them to our firm and receive a commission for every client you bring. Our referral programme is simple, transparent and rewarding for all our partners.
        </p>

        {/* Steps */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {steps.map((s) => (
            <div key={s.num} className="border border-white/10 p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-serif text-white/20 font-bold">{s.num}</span>
                <div className="text-white/50">{s.icon}</div>
              </div>
              <h3 className="font-bold text-base">{s.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div ref={bottomRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Who can join */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-5 text-white">Who can join?</h3>
            <div className="flex flex-col gap-3.5">
              {whoCanJoin.map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-white/12 flex items-center justify-center text-white/40 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm text-neutral-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why join + services */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-5 text-white">Why join us?</h3>
            <div className="flex flex-col gap-3 mb-8">
              {whyJoin.map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-neutral-400">
                  <span className="w-3 h-px bg-white/30 shrink-0" />{item}
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-white/10">
              <h3 className="font-serif text-xl font-bold mb-4 text-white">Our services</h3>
              <div className="flex flex-col gap-3">
                {services.map(s => (
                  <div key={s} className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="w-3 h-px bg-white/20 shrink-0" />{s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white p-7 flex flex-col justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold mb-3 text-black">Ready to become a partner?</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                Contact our team today to receive all the information and start referring clients to us.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#contact" className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase bg-black text-white px-6 py-4 hover:bg-black/80 transition-all no-underline text-center">
                <UserPlus size={14} /> Become a partner
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase border border-black text-black px-6 py-4 hover:bg-black/5 transition-all no-underline text-center">
                <Send size={14} /> Refer a prospect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
