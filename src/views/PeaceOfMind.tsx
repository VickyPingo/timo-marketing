'use client';

import { CheckCircle2, Shield, Clock, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';

const WHATSAPP_URL = 'https://wa.me/27690691299';

const silverFeatures = [
  'Monthly hosting',
  '10 personalised email addresses',
  'SSL security certificate',
  'Monthly plugin updates',
  'Weekly backups',
  'Basic on-page SEO',
  'Google Analytics setup',
  '2 hours of content changes per month',
  'Email & WhatsApp support',
];

const goldFeatures = [
  'Monthly hosting',
  '10 personalised email addresses',
  'SSL security certificate',
  'SSL + malware scan',
  'Weekly plugin updates',
  'Daily backups',
  'Advanced SEO + Schema',
  'Image optimisation',
  'Google Analytics setup',
  '2 hours of content changes per month',
  'Email & WhatsApp support',
];

const platinumFeatures = [
  'Monthly hosting',
  '10 personalised email addresses',
  'SSL security certificate',
  'Real-time threat defense',
  'Daily plugin updates',
  'Real-time hourly backups',
  'Full technical SEO + tracking',
  'Advanced caching (CDN)',
  'Google Analytics setup',
  '4 hours of content changes per month',
  'Email & WhatsApp support',
];

const hostingFeatures = [
  'Monthly hosting',
  'SSL security certificate',
  '10 personalised email addresses',
  'Email & WhatsApp support',
];

export default function PeaceOfMind() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/peace-of-mind-hero.webp"
            alt="Website Care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Website Deserves More Than{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Just Going Live.
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              Getting your website built is just the beginning. I keep it secure, updated, backed
              up, and performing — every single month — so you can focus on running your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#plans"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-1"
              >
                Find My Plan →
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold rounded-xl hover:border-green-500/50 transition-all hover:-translate-y-1"
              >
                Let's Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Who This Is For */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-14">
            Whether I built your website or someone else did — I can look after it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">After Your 12-Month Package</h3>
              <p className="text-slate-300 leading-relaxed">
                Completed your monthly website package with me? A Care Plan is your natural next
                step. I already know your website inside out — keeping it healthy is the easy part.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Website Built Elsewhere?</h3>
              <p className="text-slate-300 leading-relaxed">
                No problem. If you have an existing WordPress website that needs professional care,
                I can take it on. Let's chat about what you need and find the right plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Care Plans */}
      <section id="plans" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Choose your level of care</h2>
            <p className="text-xl text-slate-300">
              No hidden fees. No surprises. Just a website that keeps working.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Silver */}
            <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-slate-500/50 transition-all hover:-translate-y-2 flex flex-col">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-600/40 border border-slate-500/30 rounded-full mb-3">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider">
                    Silver
                  </span>
                </div>
                <p className="text-slate-400 text-sm">Essential protection and peace of mind.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {silverFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-slate-700 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all hover:-translate-y-1"
              >
                Get Started →
              </a>
            </div>

            {/* Gold */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm border-2 border-yellow-500/40 rounded-2xl p-8 hover:border-yellow-500/70 transition-all hover:-translate-y-2 flex flex-col relative">
              <div className="absolute -top-3 -right-3 bg-yellow-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-yellow-300 text-xs font-semibold uppercase tracking-wider">
                    Gold
                  </span>
                </div>
                <p className="text-slate-400 text-sm">More protection, better performance.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {goldFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all hover:-translate-y-1"
              >
                Get Started →
              </a>
            </div>

            {/* Platinum */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all hover:-translate-y-2 flex flex-col">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span className="text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                    Platinum
                  </span>
                </div>
                <p className="text-slate-400 text-sm">Full-service care for serious businesses.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {platinumFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:-translate-y-1"
              >
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Hosting Only */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Just need hosting?</h2>
            <p className="text-slate-300">
              If you're managing your own website but need reliable hosting, I've got you covered.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-green-300 text-xs font-semibold uppercase tracking-wider">
                Hosting Only
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-6">Everything you need to stay online.</p>
            <ul className="space-y-3 mb-8 w-full max-w-xs text-left">
              {hostingFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all hover:-translate-y-1"
            >
              Let's Get You Hosted →
            </a>
          </div>
        </div>
      </section>

      {/* Section 5 — Content Changes Explained */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white leading-tight">
                What counts as a content change?
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              Your included hours cover things like updating text, swapping images, adding a new
              product, changing contact details, or making small design tweaks. If you need more
              than your included hours in any given month, we can discuss additional time at a fair
              rate — no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Philotimo */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            I treat your website{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              like it's my own.
            </span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Philotimo means honour in everything I do. Your website won't be ignored once it's live
            — I check in, keep things updated, and flag issues before they become problems. That's
            not just my service, that's my standard.
          </p>
        </div>
      </section>

      {/* Section 7 — Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
                Your website is working right now. Is anyone making sure it keeps working?
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all hover:-translate-y-1"
                >
                  WhatsApp Me Today →
                </a>
                <a
                  href="/monthly-plans"
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold rounded-xl hover:border-purple-500/50 transition-all hover:-translate-y-1"
                >
                  View Monthly Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img
                  src="/images/timo-marketing-logo.png"
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
                  <a href="/peace-of-mind" className="hover:text-white transition-colors">
                    Website Peace of Mind
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
