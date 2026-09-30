'use client';

import { Palette, Calendar, BarChart3, Megaphone, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';

const WHATSAPP_URL = 'https://wa.me/27690691192';

export default function MediaMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
            alt="Media Marketing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Posting.{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Start Growing.
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              Posting without a strategy is just noise. I build your social media presence with
              purpose — the right content, the right platforms, and the management to turn your
              online presence into real business results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all hover:-translate-y-1"
              >
                Let's Chat on WhatsApp
              </a>
              <a
                href="#packages"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold rounded-xl hover:border-pink-500/50 transition-all hover:-translate-y-1"
              >
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — What I Do */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real marketing. Done with intention.
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              I don't believe in vanity metrics. Every post I create, every ad I run, every reel I
              produce is built around one goal — growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Content Creation */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Content Creation</h3>
              <p className="text-slate-300 leading-relaxed">
                I create scroll-stopping posts, reels, and stories that represent your brand with
                pride.
              </p>
            </div>

            {/* Social Media Management */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media Management</h3>
              <p className="text-slate-300 leading-relaxed">
                I handle the posting, the scheduling, and the consistency — so you don't have to.
              </p>
            </div>

            {/* Google Ads */}
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Google Ads</h3>
              <p className="text-slate-300 leading-relaxed">
                I run targeted ad campaigns that put your business in front of people actively
                searching for what you offer.
              </p>
            </div>

            {/* Monthly Reporting */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Monthly Reporting</h3>
              <p className="text-slate-300 leading-relaxed">
                I send you a simple, clear report every month — no jargon, just results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Where Your Content Reaches */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Where your content reaches</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Every post goes further. I don't just post to your page — I share your content across
              local Facebook pages and groups, community WhatsApp groups, Instagram, and LinkedIn to
              maximise your visibility where it matters most.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Facebook Page */}
            <div className="bg-gradient-to-br from-blue-600/10 to-blue-700/5 backdrop-blur-sm border border-blue-600/20 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-blue-600/40 transition-all hover:-translate-y-1 min-w-[160px]">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#1877F2" />
                <path
                  d="M33 24C33 19.03 28.97 15 24 15C19.03 15 15 19.03 15 24C15 28.49 18.29 32.21 22.59 32.88V26.77H20.31V24H22.59V21.99C22.59 19.74 23.93 18.5 25.97 18.5C26.95 18.5 27.97 18.67 27.97 18.67V20.88H26.85C25.74 20.88 25.41 21.56 25.41 22.25V24H27.87L27.48 26.77H25.41V32.88C29.71 32.21 33 28.49 33 24Z"
                  fill="white"
                />
              </svg>
              <span className="text-white font-semibold text-sm text-center">Facebook Page</span>
            </div>

            {/* Local Facebook Groups */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-blue-500/40 transition-all hover:-translate-y-1 min-w-[160px]">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#1877F2" />
                <path
                  d="M24 17a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-8 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm16 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM24 27c4.42 0 8 1.79 8 4v1H16v-1c0-2.21 3.58-4 8-4zm-9 1c-2.67 0-5 1.12-5 2.5V31h5v-.5c0-1.08.63-2.03 1.62-2.77C16.42 27.26 15.73 27 15 27zm18 0c-.73 0-1.42.26-2.62.73.99.74 1.62 1.69 1.62 2.77V31h5v-.5c0-1.38-2.33-2.5-5-2.5z"
                  fill="white"
                />
              </svg>
              <span className="text-white font-semibold text-sm text-center">
                Local Facebook Groups
              </span>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-600/5 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-pink-500/40 transition-all hover:-translate-y-1 min-w-[160px]">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="ig-grad"
                    x1="0"
                    y1="48"
                    x2="48"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#F58529" />
                    <stop offset="50%" stopColor="#DD2A7B" />
                    <stop offset="100%" stopColor="#8134AF" />
                  </linearGradient>
                </defs>
                <circle cx="24" cy="24" r="24" fill="url(#ig-grad)" />
                <rect
                  x="14"
                  y="14"
                  width="20"
                  height="20"
                  rx="6"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="30.5" cy="17.5" r="1.5" fill="white" />
              </svg>
              <span className="text-white font-semibold text-sm text-center">Instagram</span>
            </div>

            {/* LinkedIn */}
            <div className="bg-gradient-to-br from-sky-600/10 to-sky-700/5 backdrop-blur-sm border border-sky-600/20 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-sky-600/40 transition-all hover:-translate-y-1 min-w-[160px]">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#0A66C2" />
                <path
                  d="M17 20h-4v12h4V20zm-2-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm16 6c-2 0-3.5.9-4 2v-2h-4v12h4v-6c0-1.5.8-3 2.5-3s2.5 1.5 2.5 3v6h4v-7c0-3.5-2-5-5-5z"
                  fill="white"
                />
              </svg>
              <span className="text-white font-semibold text-sm text-center">LinkedIn</span>
            </div>

            {/* Local WhatsApp Groups */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-green-500/40 transition-all hover:-translate-y-1 min-w-[160px]">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#25D366" />
                <path
                  d="M24 13C18 13 13 18 13 24c0 2 .5 3.8 1.4 5.4L13 35l5.8-1.4A11 11 0 0 0 24 35c6 0 11-5 11-11s-5-11-11-11zm6.3 15.1c-.3.7-1.5 1.4-2 1.4-.6.1-1 .3-3.4-.7-2.8-1.2-4.6-4-4.8-4.2-.2-.2-1.4-1.8-1.4-3.4s.9-2.4 1.2-2.7c.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.5.3.6 1 2.3 1 2.5.1.2.1.4 0 .6-.1.2-.2.4-.3.5l-.4.5c-.2.2-.4.4-.2.7.2.4.9 1.4 1.9 2.3 1.3 1.1 2.3 1.4 2.7 1.6.4.2.6.1.8-.1l.9-1c.2-.3.5-.2.8-.1.3.1 1.9.9 2.2 1.1.3.2.5.3.6.4.1.4-.1 1.2-.4 1.9z"
                  fill="white"
                />
              </svg>
              <span className="text-white font-semibold text-sm text-center">
                Local WhatsApp Groups
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Packages */}
      <section id="packages" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Choose your starting point</h2>
            <p className="text-xl text-slate-300">
              Flexible packages tailored to your business goals. Contact me for a quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Get Seen */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all hover:-translate-y-2 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">Starter</h3>
                <p className="text-slate-400 text-sm">
                  Perfect for getting your social presence off the ground.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">3 posts per week</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Basic graphic design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">WhatsApp support</span>
                </li>
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-1"
              >
                Let's get you on the map →
              </a>
            </div>

            {/* Get Noticed */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all hover:-translate-y-2 flex flex-col relative">
              <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">Growth</h3>
                <p className="text-slate-400 text-sm">
                  More content, more consistency, more results.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">4 posts per week</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Reels &amp; Stories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Basic graphic design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Boosted post strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Monthly performance report</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">WhatsApp support</span>
                </li>
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-1"
              >
                Let's get them talking →
              </a>
            </div>

            {/* Get Results */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all hover:-translate-y-2 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">Premium</h3>
                <p className="text-slate-400 text-sm">Full-service social media management.</p>
              </div>
              <ul className="space-y-3 mb-4 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">5 posts per week</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Reels &amp; Stories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Basic graphic design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Google Ads management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Boosted post strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Monthly performance report</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">WhatsApp support</span>
                </li>
              </ul>
              <p className="text-slate-500 text-xs italic mb-6">
                Ad spend billed separately to your account — full transparency, no surprises.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-1"
              >
                Let's grow your business →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Philotimo */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Honour in the work.{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Pride in your success.
            </span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Philotimo is a Greek philosophy — a love of honour. It's the reason I'll never post
            content I'm not proud of, run ads I don't believe in, or take your money without
            delivering real value. When your business grows, that's my success too.
          </p>
        </div>
      </section>

      {/* Section 6 — Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to stop being invisible?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's have a real conversation about what your business needs. No pressure, no pitch
                — just an honest chat.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all hover:-translate-y-1"
              >
                WhatsApp Me Today →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img
                  src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/803dc0f7-c4b6-45cf-aa46-2e2aa3e1d0f8.png"
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
                <li>
                  <a href="/smart-systems" className="hover:text-white transition-colors">
                    Smart Systems
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
