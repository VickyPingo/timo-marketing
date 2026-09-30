'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle, Globe, Shield, Smartphone, Zap, Clock } from 'lucide-react';

// ─── EASY EDITS ────────────────────────────────────────────────────────────────
const SPOTS_TOTAL = 5;
const SPOTS_LEFT = 5; // ← change this number as spots fill up
const DEADLINE = '20 October'; // ← change if deadline shifts
// ───────────────────────────────────────────────────────────────────────────────

const WHATSAPP_URL =
  'https://wa.me/27690691299?text=Hi%20Vicky%2C%20I%27d%20like%20to%20claim%20a%20spot%20on%20the%20R1500%20website%20special';

const LOGO =
  '/images/timo-marketing-logo.png';

const whatYouGet = [
  {
    icon: Globe,
    title: 'A complete website',
    desc: '1–4 pages, built by me, designed entirely around your business and your goals.',
  },
  {
    icon: Shield,
    title: 'Your own .co.za domain',
    desc: 'Registered in your name. Your business, your address on the internet.',
  },
  {
    icon: Zap,
    title: '12 months of hosting',
    desc: 'Fast, secure, and always online. Your site stays up so your customers can find you.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first design',
    desc: 'Looks perfect on every phone, tablet and laptop. No exceptions.',
  },
  {
    icon: Clock,
    title: 'Live within 2 weeks',
    desc: "Send me your content, I get to work. Two weeks later, you're on the internet.",
  },
];

const steps = [
  {
    num: '01',
    title: 'Book your spot',
    text: `WhatsApp me before ${DEADLINE}. Once your 50% deposit is in, the spot is yours.`,
  },
  {
    num: '02',
    title: 'Send me your content',
    text: "Logo, photos, text, contact details. I'll send a simple checklist so you know exactly what's needed.",
  },
  {
    num: '03',
    title: 'I build your site',
    text: "You'll get to review everything before it goes live. No surprises.",
  },
  {
    num: '04',
    title: "You're online",
    text: 'Within 2 weeks your business has a proper, professional home on the internet.',
  },
];

const faqs = [
  {
    q: 'What if I need more than 4 pages?',
    a: 'WhatsApp me. We can chat about a custom build, but this special is for 1–4 pages.',
  },
  {
    q: 'What if I already have a domain?',
    a: 'No problem. I can connect your existing domain instead.',
  },
  {
    q: 'What happens after 12 months?',
    a: 'Your hosting simply carries on at R79/month. No surprises.',
  },
  {
    q: 'Can I update the site myself?',
    a: "Ask me when you book and I'll set it up the way that suits you.",
  },
  {
    q: 'What do I need to get started?',
    a: "Just a WhatsApp message. I'll take it from there.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? 'border-blue-500/50 bg-slate-800/60'
          : 'border-slate-700/40 bg-slate-800/20 hover:border-slate-500/50 hover:bg-slate-800/40'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 px-8 py-7 text-left"
      >
        <span className="text-white font-bold text-xl leading-snug">{q}</span>
        <div
          className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? 'border-blue-400 bg-blue-500/20 rotate-180' : 'border-slate-600'
          }`}
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors ${open ? 'text-blue-400' : 'text-slate-400'}`}
          />
        </div>
      </button>
      {open && (
        <div className="px-8 pb-7 border-t border-slate-700/30">
          <p className="text-slate-300 leading-relaxed text-xl pt-6">{a}</p>
        </div>
      )}
    </div>
  );
}

function SpotsLeft({ className = '', large = false }: { className?: string; large?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-3 px-6 py-3 bg-red-500/15 border border-red-500/40 rounded-full backdrop-blur-sm ${className}`}
    >
      <span className="relative flex h-3 w-3 flex-shrink-0">
        <span className="pulsering absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
      <span className={`text-red-300 font-bold ${large ? 'text-lg' : 'text-sm md:text-base'}`}>
        {SPOTS_LEFT} of {SPOTS_TOTAL} spots left · Bookings close {DEADLINE}
      </span>
    </div>
  );
}

function WhatsAppBtn({
  label = 'Claim my spot on WhatsApp',
  size = 'lg',
}: {
  label?: string;
  size?: 'sm' | 'lg';
}) {
  if (size === 'lg') {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-green-500 hover:bg-green-400 text-white font-black text-xl rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-green-500/40 w-full md:w-auto"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
        {label}
      </a>
    );
  }
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-7 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30 text-lg"
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </a>
  );
}

export default function YearEndSpecial() {
  return (
    <div className="min-h-screen bg-[#060c1a] text-white overflow-x-hidden">
      {/* ── TOP BAR ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#060c1a]/95 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img src={LOGO} alt="Timo Marketing" className="h-36 w-auto" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 text-base"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">WhatsApp me</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/special-hero.webp"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060c1a]/60 via-[#060c1a]/80 to-[#060c1a]"></div>
          <div className="absolute top-1/4 -left-20 w-[700px] h-[700px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none"></div>
          <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-32 md:py-44 text-center relative z-10">
          <SpotsLeft className="mb-12" />

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.02] tracking-tight mb-8">
            Get your business online{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block mt-2">
              before the year ends.
            </span>
          </h1>

          <p className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-red-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Only {SPOTS_TOTAL} spots available.
            </span>
          </p>

          <p className="text-2xl md:text-3xl text-slate-300 mb-3 leading-relaxed max-w-3xl mx-auto">
            A professional website, your own .co.za domain and a full year of hosting —
          </p>
          <p className="text-4xl md:text-5xl font-black text-white mb-4">
            all for <span className="text-green-400">R1,500.</span>
          </p>
          <p className="text-slate-500 text-2xl mb-16">
            <span className="line-through">Normally from R3,500</span>
          </p>

          <div className="mb-14"></div>

          <WhatsAppBtn />
        </div>
      </section>

      {/* ── WHAT YOU GET ────────────────────────────────────────────── */}
      <section className="py-32 md:py-44 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-24">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-[0.25em] mb-5">
              Everything included
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-7 leading-tight">
              What you get
            </h2>
            <p className="text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Everything your business needs to be found, trusted, and contacted online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
            {whatYouGet.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-700/40 rounded-3xl p-10 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 cursor-default"
                >
                  <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-blue-400/60 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Icon className="w-9 h-9 text-blue-400" />
                  </div>
                  <h3 className="text-white font-black text-2xl mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
                </div>
              );
            })}

            {/* What You Get — price card: */}
            <div className="group md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-500/10 via-green-600/5 to-slate-900/60 border-2 border-green-500/30 rounded-3xl p-10 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-3 flex flex-col justify-center text-center">
              <p className="text-slate-400 text-2xl mb-3">All of this, once off.</p>
              <p className="text-8xl font-black text-green-400 mb-2">R1,500</p>
              <p className="text-slate-500 text-2xl line-through mb-10">Normally from R3,500</p>
              <div className="flex justify-center">
                <WhatsAppBtn />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="py-32 md:py-44 bg-gradient-to-b from-slate-900/60 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="text-purple-400 font-bold text-sm uppercase tracking-[0.25em] mb-5">
              Simple process
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/40 rounded-3xl p-10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-3"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-px bg-gradient-to-r from-slate-600 to-transparent z-10"></div>
                )}
                <div className="text-8xl font-black text-slate-800 group-hover:text-purple-900/50 transition-colors duration-300 leading-none mb-6 select-none">
                  {step.num}
                </div>
                <h3 className="text-white font-black text-2xl mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <WhatsAppBtn />
          </div>
        </div>
      </section>

      {/* ── FINE PRINT ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-slate-700/40 rounded-3xl p-12 md:p-16">
            <p className="text-slate-500 font-bold text-sm uppercase tracking-[0.25em] mb-4">
              Transparency
            </p>
            <h2 className="text-4xl font-black text-white mb-10">
              The fine print — keeping it fair
            </h2>
            <ul className="space-y-7">
              {[
                `Only ${SPOTS_TOTAL} spots. When they're gone, they're gone.`,
                `Bookings close ${DEADLINE} 2026.`,
                "Your content needs to reach me within 7 days of booking. If it doesn't, your spot goes to the next person in line.",
                'After your first 12 months, hosting continues at just R79/month.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-5">
                  <span className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 font-bold flex-shrink-0 mt-0.5 text-sm">
                    —
                  </span>
                  <span className="text-slate-300 text-xl leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH ME ────────────────────────────────────────── */}
      <section className="py-32 md:py-44">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-bold text-sm uppercase tracking-[0.25em] mb-5">
              The person behind the work
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Why work with me
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-slate-900/60 border border-blue-500/20 rounded-3xl p-12 md:p-16 hover:border-blue-500/40 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-black text-4xl group-hover:scale-105 transition-transform duration-300 shadow-2xl shadow-blue-500/20">
                V
              </div>
              <div>
                <p className="text-white font-black text-3xl">Vicky</p>
                <p className="text-slate-400 text-xl">Timo Marketing</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-xl md:text-2xl mb-7">
              I'm Vicky, and Timo Marketing is a one-person business. That means you deal with me
              from start to finish. No call centres, no handovers, no getting lost in a queue.
            </p>
            <p className="text-slate-300 leading-relaxed text-xl md:text-2xl mb-12">
              Everything I do is guided by Philotimo, the Greek idea of doing things with honour.
              That's why I'm limiting this to {SPOTS_TOTAL} spots. I'd rather build {SPOTS_TOTAL}{' '}
              websites properly than 20 in a rush.
            </p>

            <div className="border-t border-slate-700/50 pt-10">
              <p className="italic text-slate-300 text-2xl md:text-3xl font-light">
                "Honour in the work. Pride in your success."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900/40 to-transparent">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-purple-400 font-bold text-sm uppercase tracking-[0.25em] mb-5">
              Client love
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white">What clients say</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-3xl p-12 md:p-16 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group relative overflow-hidden">
            <div className="absolute top-4 right-8 text-[160px] text-purple-500/10 font-serif leading-none select-none group-hover:text-purple-500/15 transition-colors duration-300">
              "
            </div>
            <p className="text-slate-200 text-2xl leading-relaxed italic mb-12 relative">
              Vicky has been an absolute standout web developer to work with across a wide range of
              projects. We've collaborated on numerous builds and updates, and every single time the
              outcome has been seamless, polished, and professional. Most importantly: my clients
              have been genuinely thrilled with the results. She's incredibly patient, highly
              efficient, and impressively knowledgeable. Vicky doesn't just execute tasks — she
              thinks ahead, stays on her toes, and always comes to the table with solutions when
              challenges pop up. She's an absolute pleasure to work with, and I would highly, highly
              recommend her to anyone looking for a reliable, strategic, and genuinely talented
              developer.
            </p>
            <div className="flex items-center gap-6 border-t border-slate-700/50 pt-10">
              <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                TW
              </div>
              <div>
                <p className="text-white font-black text-2xl">Taliah Williamson</p>
                <p className="text-slate-400 text-lg">Tula Tu Aesthetics</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="/portfolio"
              className="group text-slate-400 hover:text-white text-xl transition-colors inline-flex items-center gap-2"
            >
              See more of my work
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-32 md:py-44">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-[0.25em] mb-5">
              Got questions?
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
              We've got answers
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="py-36 md:py-52 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-slate-900 to-purple-950/40"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <SpotsLeft className="mb-14" large />
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.02]">
            2026 is almost done.
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-14 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Don't start 2027 without a website.
            </span>
          </h2>
          <p className="text-2xl text-slate-400 mb-16">
            {SPOTS_TOTAL} spots only. Bookings close {DEADLINE}.
          </p>
          <WhatsAppBtn />
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-800/50 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-500">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img src={LOGO} alt="Timo Marketing" className="h-[120px] w-auto" />
          </a>
          <p className="text-base">© 2026 Timo Marketing</p>
          <a
            href="/"
            className="hover:text-white transition-colors text-base flex items-center gap-1 group"
          >
            timomarketing.co.za
            <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">
              →
            </span>
          </a>
        </div>
      </footer>

      {/* ── STICKY MOBILE WHATSAPP BAR ──────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#060c1a]/98 backdrop-blur-md border-t border-slate-800 px-4 py-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-5 bg-green-500 active:bg-green-400 text-white font-black rounded-2xl text-xl"
        >
          <MessageCircle className="w-6 h-6" />
          Claim my spot on WhatsApp
        </a>
      </div>

      <div className="h-28 md:hidden"></div>

      <style jsx global>{`
        @keyframes pulsering {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.75;
          }
          50% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
        .pulsering {
          animation: pulsering 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
