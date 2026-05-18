import { useRef, useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Check, ChevronLeft, ChevronRight, MapPin, BedDouble } from 'lucide-react';

const features = [
  'Off-plan & ready units',
  'Developer negotiations',
  'ROI & yield analysis',
  'Legal due diligence',
  'Payment plan advisory',
  'Property management',
];

const properties = [
  {
    tag: 'Off-Plan',
    image: 'https://res.cloudinary.com/dyyjf1tyw/image/upload/v1779129864/1_zmu2oa.png',
    title: 'DAMAC Islands',
    location: 'Dubailand, Dubai',
    status: 'Off-Plan',
    type: 'Townhouse & Villa',
    beds: '4–7 BR',
    description: 'Island-inspired waterfront community with private beaches, crystal-clear lagoons, marina, and resort-style amenities. Only 1% monthly installment.',
    price: 'From EUR 702\'000',
    yield: '1% / month',
    tag2: 'Tax-Free',
  },
  {
    tag: 'New Launch',
    image: 'https://res.cloudinary.com/dyyjf1tyw/image/upload/v1779129871/2_vyhy0v.png',
    title: 'Terra Gardens — Emaar',
    location: 'Expo City, Dubai',
    status: 'Off-Plan',
    type: 'Apartment & Townhouse',
    beds: '1–3 BR',
    description: 'Two modern towers by Emaar in Expo City. Contemporary design, natural light, green terraces. 10 min from Al Maktoum Airport, 15 min from Dubai Marina.',
    price: 'From EUR 384\'000',
    yield: 'High ROI',
    tag2: 'Emaar',
  },
  {
    tag: 'Community',
    image: 'https://res.cloudinary.com/dyyjf1tyw/image/upload/v1779129876/3_g6oaph.png',
    title: 'Green Community Villas',
    location: 'Dubai',
    status: 'Off-Plan',
    type: 'Townhouse & Villa',
    beds: '3–5 BR',
    description: 'Spacious family homes in a landscaped community with wave pool, parks, and premium amenities. Easy access to major highways, schools, and lifestyle hubs.',
    price: 'From EUR 997\'000',
    yield: 'Priority Access',
    tag2: 'Family Living',
  },
  {
    tag: 'Ultra Luxury',
    image: 'https://res.cloudinary.com/dyyjf1tyw/image/upload/v1779129879/4_rgt2a8.png',
    title: 'The Oasis — Emaar',
    location: 'Dubai',
    status: 'Off-Plan',
    type: 'Standalone Villa',
    beds: '5–6 BR',
    description: 'Panoramic villas overlooking water canals in a serene sanctuary. One of the largest plot areas in Dubai with world-class amenities.',
    price: 'From AED 15.8M',
    yield: 'Ultra Premium',
    tag2: 'Emaar',
  },
];

export default function RealEstate() {
  const cardRef = useRef(null);
  useFadeIn(cardRef);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + properties.length) % properties.length);
  const next = () => setCurrent(i => (i + 1) % properties.length);
  const p = properties[current];

  return (
    <section id="realestate" className="py-20 md:py-24 bg-neutral-950 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-neutral-700 inline-block" /> Real Estate
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Invest with<br />
              <em className="italic font-normal text-neutral-400">clarity & confidence</em>
            </h2>
            <p className="text-neutral-400 mb-10 leading-relaxed text-sm md:text-base">
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

            <a href="#contact" className="inline-block border border-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-neutral-950 transition-colors no-underline">
              Explore Opportunities
            </a>
          </div>

          {/* Right — Carousel */}
          <div ref={cardRef} className="border border-white/15 overflow-hidden">

            {/* Photo */}
            <div className="relative h-52 md:h-60 overflow-hidden">
              <img
                key={current}
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 text-[0.62rem] font-bold tracking-widest uppercase text-white bg-white/15 border border-white/20 px-3 py-1 backdrop-blur-sm">
                {p.tag}
              </span>
              <span className="absolute top-4 right-4 text-[0.62rem] font-bold tracking-widest uppercase text-white/70 bg-black/40 px-3 py-1">
                {p.type}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-serif text-lg md:text-xl font-bold leading-tight mb-1">{p.title}</h3>

              <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 flex-wrap">
                <span className="flex items-center gap-1"><MapPin size={10} />{p.location}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><BedDouble size={10} />{p.beds}</span>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed mb-5">{p.description}</p>

              <div className="flex gap-6 pt-5 border-t border-white/10 flex-wrap">
                <div>
                  <div className="font-serif text-lg md:text-xl font-bold text-white mb-0.5">{p.price}</div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-neutral-500">Starting price</div>
                </div>
                <div>
                  <div className="font-serif text-lg md:text-xl font-bold text-white mb-0.5">{p.yield}</div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-neutral-500">Payment / ROI</div>
                </div>
                <div>
                  <div className="font-serif text-lg md:text-xl font-bold text-white mb-0.5">0%</div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-neutral-500">Income Tax</div>
                </div>
              </div>
            </div>

            {/* Nav */}
            <div className="flex items-center justify-between px-6 pb-5">
              <div className="flex gap-1.5">
                {properties.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all border-none cursor-pointer p-0 ${i === current ? 'bg-white w-4' : 'bg-white/25 w-1.5'}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-all bg-transparent cursor-pointer">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={next} className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-all bg-transparent cursor-pointer">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
