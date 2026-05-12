import { useState, useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { MapPin, Mail, Phone, Instagram, Linkedin, CheckCircle } from 'lucide-react';
import { SwissCross } from './Logo';
import { supabase } from '../lib/supabase';

const languages = ['Deutsch', 'Français', 'Italiano', 'English'];
const serviceOptions = [
  'Company Formation',
  'Visa & Residency',
  'Banking Setup',
  'Real Estate Investment',
  'Concierge Services',
  'Full Relocation Package',
];

export default function Contact() {
  const formRef = useRef(null);
  useFadeIn(formRef);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    language: '',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim()) {
      setError('Please enter your name and email.');
      return;
    }
    setError('');
    setSubmitting(true);
    const { error: dbError } = await supabase.from('contact_submissions').insert({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      preferred_language: form.language,
      service_interest: form.service,
      message: form.message,
    });
    setSubmitting(false);
    if (dbError) {
      setError('Something went wrong. Please try again.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Info column */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-neutral-700 inline-block" /> Contact Us
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Let's talk<br />
              <em className="italic font-normal text-neutral-400">about your move</em>
            </h2>
            <p className="text-neutral-400 mb-10 leading-relaxed">
              Whether you're still planning or ready to start — reach out. A conversation costs nothing and clarity is priceless.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {[
                { icon: <MapPin size={18} />, label: 'Location', value: 'Dubai, United Arab Emirates', sub: 'Available for in-person meetings' },
                { icon: <Mail size={18} />, label: 'Email', value: 'hello@lavoilecapital.com', sub: 'Response within 24 hours' },
                { icon: <Phone size={18} />, label: 'WhatsApp & Phone', value: '+971 XX XXX XXXX', sub: 'Available in DE · FR · IT · EN' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-500 mb-0.5">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                    <p className="text-xs text-neutral-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-8">
              {[
                { icon: <Instagram size={16} />, label: 'Instagram' },
                { icon: <Linkedin size={16} />, label: 'LinkedIn' },
              ].map(s => (
                <a key={s.label} href="#" className="flex items-center gap-2 border border-white/15 px-4 py-2 text-xs text-neutral-400 hover:text-white hover:border-white/40 transition-colors">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-neutral-600">
              <SwissCross size={14} color="currentColor" />
              <span>Swiss Founded Company</span>
              <span className="text-neutral-700">·</span>
              <span>German · French · Italian · English</span>
            </div>
          </div>

          {/* Form column */}
          <div ref={formRef}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Send us a message</h3>
                  <p className="text-sm text-neutral-400">Fill in the form and we'll get back to you within one business day — in your preferred language.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-neutral-400 tracking-wide">First Name</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={e => update('firstName', e.target.value)}
                      className="bg-white/[0.04] border border-white/[0.12] text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-neutral-400 tracking-wide">Last Name</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={e => update('lastName', e.target.value)}
                      className="bg-white/[0.04] border border-white/[0.12] text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-neutral-400 tracking-wide">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    className="bg-white/[0.04] border border-white/[0.12] text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-neutral-400 tracking-wide">Preferred Language</label>
                    <select
                      value={form.language}
                      onChange={e => update('language', e.target.value)}
                      className="bg-neutral-900 border border-white/[0.12] text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans appearance-none"
                    >
                      <option value="">Select language...</option>
                      {languages.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-neutral-400 tracking-wide">I am interested in</label>
                    <select
                      value={form.service}
                      onChange={e => update('service', e.target.value)}
                      className="bg-neutral-900 border border-white/[0.12] text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-neutral-400 tracking-wide">Your Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                    rows={4}
                    className="bg-white/[0.04] border border-white/[0.12] text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans resize-y"
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-white text-neutral-950 px-8 py-4 text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors disabled:opacity-50"
                >
                  {submitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full gap-6 py-16 text-center">
                <CheckCircle size={48} className="text-white/60" />
                <h3 className="text-2xl font-serif font-bold">Message received</h3>
                <p className="text-neutral-400 max-w-sm">Thank you for reaching out. We'll be in touch within one business day in your preferred language.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
