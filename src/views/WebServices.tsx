'use client';

import { Shield, Zap, CheckCircle2, Users, TrendingUp, MessageCircle, Lock } from 'lucide-react';
import Navigation from '@/components/Navigation';

const WHATSAPP_URL = 'https://wa.me/27690691299';

export default function WebServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptLTItMmgydjJoLTJ2LTJ6bTAtMmgydi0yaC0ydjJ6bS0yIDBoMnYtMmgtMnYyem0wIDJ2MmgtMnYtMmgyem0tMiAwaDJ2Mmgtdi0yem0wLTJ2Mmgtdi0yaDF6bS0yIDBodjJoLTJ2LTJoMXptMC0yaDF2LTJoLTF2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                I Don't Just Build Websites.{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  I Build Digital Assets.
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Your website shouldn't just look good — it should work hard for your business. I
                build clean, fast, mobile-friendly websites that make the right first impression and
                turn visitors into customers.
              </p>
              <div className="flex flex-wrap gap-4">
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
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold rounded-xl hover:border-purple-500/50 transition-all hover:-translate-y-1"
                >
                  View Packages
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <img
                  src="/images/web-services-workspace.webp"
                  alt="Web Development Workspace"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Prefer Monthly? */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Not ready for a once-off investment?
              </h2>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
                I also offer fully managed monthly website packages — no large upfront cost, hosting
                included, and I handle everything for you.
              </p>
              <a
                href="/monthly-plans"
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all hover:-translate-y-1"
              >
                See Monthly Packages →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Website Packages */}
      <section id="packages" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-xl text-slate-300">
              Custom-built for your business. You own it outright.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic / Single Page */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all hover:-translate-y-2 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">Basic / Single Page</h3>
                <p className="text-slate-400 text-sm">
                  The perfect starting point for your online presence.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">FREE .co.za domain registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">1 page responsive website</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Social media &amp; WhatsApp integrated</span>
                </li>
                {/* hosting note removed — contact for pricing */}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-1"
              >
                Let's build your page →
              </a>
            </div>

            {/* Standard Website */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all hover:-translate-y-2 flex flex-col relative">
              <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">Standard Website</h3>
                <p className="text-slate-400 text-sm">
                  A professional multi-page website that tells your full story.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">FREE .co.za domain registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">2–7 page responsive website</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Contact form</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Social media &amp; WhatsApp integrated</span>
                </li>
                {/* hosting note removed — contact for pricing */}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-1"
              >
                Let's build your website →
              </a>
            </div>

            {/* eCommerce */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all hover:-translate-y-2 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">eCommerce / Online Store</h3>
                <p className="text-slate-400 text-sm">
                  A fully functional online store built to sell.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">FREE .co.za domain registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">2–7 page responsive website</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">50 products &amp; 10 categories</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Payment gateways &amp; shipping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Contact form</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Social media &amp; WhatsApp integrated</span>
                </li>
                {/* hosting note removed — contact for pricing */}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-1"
              >
                Let's build your store →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — How It Works */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">Your journey from idea to launch</h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-500 to-pink-500 opacity-30 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 hover:border-blue-500/60 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25 min-h-[380px] flex flex-col">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/50 border-4 border-slate-950">
                    1
                  </div>
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
                      <Users className="w-10 h-10 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Discovery</h3>
                  <p className="text-slate-300 leading-relaxed text-center">
                    We sit down and I listen. I want to understand your business, your customers,
                    and what you need your website to do.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-500/60 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25 min-h-[380px] flex flex-col">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/50 border-4 border-slate-950">
                    2
                  </div>
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    Strategy &amp; Design
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-center">
                    I map out the structure and design everything before I build. You see it and
                    approve it before a single line of code is written.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-500/60 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/25 min-h-[380px] flex flex-col">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-cyan-500/50 border-4 border-slate-950">
                    3
                  </div>
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center">
                      <Zap className="w-10 h-10 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">The Build</h3>
                  <p className="text-slate-300 leading-relaxed text-center">
                    I build your site using clean, fast code — mobile-friendly, secure, and
                    SEO-ready from day one.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-pink-500/30 rounded-3xl p-8 hover:border-pink-500/60 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/25 min-h-[380px] flex flex-col">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-pink-500/50 border-4 border-slate-950">
                    4
                  </div>
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-pink-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">The Handover</h3>
                  <p className="text-slate-300 leading-relaxed text-center">
                    I walk you through everything, make sure you're comfortable, and hand over a
                    website you're proud to share.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Why Work With Me */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Why work with me?</h2>
          <p className="text-xl text-slate-300 mb-12 text-center">
            There are thousands of web designers in South Africa. Here's why clients choose me:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No Geek Speak</h3>
              <p className="text-slate-300 leading-relaxed">
                I explain everything in plain language. You'll always know exactly what I'm doing
                and why.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Philotimo</h3>
              <p className="text-slate-300 leading-relaxed">
                I take personal responsibility for every website I build. If something's not right,
                I fix it. Full stop.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Built to Perform</h3>
              <p className="text-slate-300 leading-relaxed">
                Fast loading, mobile-friendly, and optimised for Google from the start — not as an
                afterthought.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">You Own It</h3>
              <p className="text-slate-300 leading-relaxed">
                Once it's built and paid for, it's yours. No lock-in, no strings, no dependency on
                me to access your own website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Does your current website reflect the quality of your business?
              </h2>
              <p className="text-xl text-slate-300 mb-10">If not, let's fix it.</p>
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
      <footer className="border-t border-slate-800/50 mt-24">
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
