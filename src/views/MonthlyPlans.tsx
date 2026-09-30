'use client';

import { useState } from 'react';
import { CheckCircle2, MessageCircle, Zap, Shield, ChevronDown } from 'lucide-react';
import Navigation from '@/components/Navigation';

const WHATSAPP_URL = 'https://wa.me/27690691299';

const faqs = [
  {
    q: 'Is there a contract?',
    a: "Yes, packages are on a 12-month contract. This gives me the time to build something properly and give your online presence the best chance to grow. After 12 months you're free to continue, move to a Care Plan, or take over your website yourself.",
  },
  {
    q: 'Who owns the website?',
    a: 'You do. Always. The website I build is yours — I just manage it on your behalf.',
  },
  {
    q: 'What happens after 12 months?',
    a: "You have two options. Move onto one of my Care Plans for ongoing support and maintenance, or take over the website and hosting yourself. I'll help you either way.",
  },
  {
    q: "What's included in the 2 hours of maintenance?",
    a: 'Content updates, small changes, plugin updates, and general upkeep. If you need more than 2 hours in a month, we can discuss additional time at a reasonable rate.',
  },
  {
    q: 'Can I upgrade from Business Start-Up to eCommerce later?',
    a: "Absolutely. If your business grows and you're ready to start selling online, we can upgrade your package. Just WhatsApp me and we'll sort it out.",
  },
];

function FAQ({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-800/30 transition-colors"
      >
        <span className="text-lg font-semibold text-white">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 py-4 border-t border-slate-700/50">
          <div className="text-slate-300 leading-relaxed">{a}</div>
        </div>
      )}
    </div>
  );
}

export default function MonthlyPlans() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/monthly-plans-hero.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              A Professional Website.{' '}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                One Simple Monthly Fee.
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              No large upfront costs. No technical headaches. I build, host, and manage your website
              — you focus on running your business.
            </p>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-red-500/25 transition-all"
            >
              View Packages →
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 — Why Monthly Makes Sense */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The smarter way to get online
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cash Flow Friendly */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Cash Flow Friendly</h3>
              <p className="text-slate-300 leading-relaxed">
                No large upfront investment. I build your professional website for one affordable
                monthly fee, keeping your capital where it belongs — in your business.
              </p>
            </div>

            {/* All-Inclusive Care */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">All-Inclusive Care</h3>
              <p className="text-slate-300 leading-relaxed">
                I handle everything. Hosting, security, updates, and maintenance every month. You
                don't need to worry about the technical side — that's my job.
              </p>
            </div>

            {/* Grow as You Go */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Grow as You Go</h3>
              <p className="text-slate-300 leading-relaxed">
                Start with what you need and build from there. Whether you're launching for the
                first time or ready to start selling online, I've got a package that fits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Packages */}
      <section id="packages" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose your package</h2>
            <p className="text-xl text-slate-400">
              No hidden fees. Everything you need to succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
            {/* Business Start-Up */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:-translate-y-2 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                Best Value
              </div>
              <div className="text-center mb-8 pt-2">
                <h3 className="text-2xl font-bold text-white mb-1">Business Start-Up</h3>
                <p className="text-slate-400 text-sm">
                  A professional website for growing businesses — built, hosted, and managed by me.
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  '.co.za domain registration',
                  'Monthly hosting',
                  'Security certificate (SSL)',
                  '1–7 page responsive website',
                  'Lifetime theme licence',
                  'Contact form',
                  '2 hours of maintenance every month',
                  'Social media platforms integrated',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-red-500/25 transition-all hover:-translate-y-1"
              >
                Let's Get Started →
              </a>
            </div>

            {/* eCommerce Store */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-2 border-slate-700/50 rounded-2xl p-8 hover:shadow-2xl hover:border-purple-500/30 transition-all hover:-translate-y-2 flex flex-col">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-1">eCommerce</h3>
                <p className="text-slate-400 text-sm mb-6">
                  A fully managed online store, built to sell.
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  '.co.za domain registration',
                  'Monthly hosting',
                  'Security certificate (SSL)',
                  '1–7 page responsive website',
                  'Lifetime theme licence',
                  '50 products & 10 categories',
                  'Payment gateways & shipping',
                  'Contact form',
                  '2 hours of maintenance every month',
                  'Social media platforms integrated',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all hover:-translate-y-1"
              >
                Let's Start Selling →
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-sm text-slate-500 max-w-3xl mx-auto bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
            Packages are subject to a 12-month contract. After 12 months, you can move onto a Care
            Plan or take over your website and hosting. Cancellation requires 30 days notice.
          </div>
        </div>
      </section>

      {/* Section 4 — I'm Here When You Need Me */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
              <img
                src="/images/monthly-plans-support.webp"
                alt="Personal support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                You're never on your own
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                I'm not a faceless agency. I'm a real person who answers your messages and knows
                your website inside out. When you need help, you get me — not a call centre.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Direct Access</div>
                    <div className="text-slate-400 text-sm">
                      You have my WhatsApp number. Talk directly to the person building and managing
                      your website — always.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Fast Response</div>
                    <div className="text-slate-400 text-sm">
                      I respond quickly because I know that when something feels wrong with your
                      website, waiting isn't an option.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Proactive Care</div>
                    <div className="text-slate-400 text-sm">
                      I don't wait for things to break. I check in, keep things updated, and flag
                      issues before they become problems.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — FAQs */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Straight answers. No fine print surprises.
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <FAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
            <FAQ
              q="I've finished my 12 months — what are my Care Plan options?"
              a={
                <span>
                  After your 12 months, my Care Plans keep your website secure, updated, and
                  performing — without starting over. You stay in control and I stay in your corner.{' '}
                  <a
                    href="/services"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                  >
                    View Care Plans →
                  </a>
                </span>
              }
            />
          </div>
        </div>
      </section>

      {/* Section 7 — Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to get your business online?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                WhatsApp me to find the right plan for your business and get a quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all hover:-translate-y-1"
                >
                  WhatsApp Me Today →
                </a>
                <a
                  href="/services"
                  className="px-10 py-4 bg-slate-800 border border-slate-700 text-white rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all hover:-translate-y-1"
                >
                  View Care Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img
                  src="/images/timo-marketing-logo-dark.png"
                  alt="Timo Marketing"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-slate-400 text-sm">
                Your trusted digital growth partner in South Africa.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="/web-services" className="hover:text-white transition-colors">
                    Web Services
                  </a>
                </li>
                <li>
                  <a href="/monthly-plans" className="hover:text-white transition-colors">
                    Monthly Plans
                  </a>
                </li>
                <li>
                  <a href="/media-marketing" className="hover:text-white transition-colors">
                    Media Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="https://www.facebook.com/timomarketingsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/timomarketingsolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/timomarketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800/50 pt-8 text-center text-sm text-slate-400">
            © 2026 Timo Marketing. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
