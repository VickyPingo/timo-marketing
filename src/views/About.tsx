"use client";

import { ArrowRight, Heart, TrendingUp, Shield, Lightbulb, Quote } from 'lucide-react';
import { Link } from '@/lib/router-shim';
import Navigation from '@/components/Navigation';
export default function About() {
  return <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section with Profile */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full mb-8">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm text-slate-300">Philotimo: Love of Honour</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                It's Not Just A Name.
                <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mt-2">It's My Standard.</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                For 20 years, I have navigated the digital landscape with a single guiding philosophy: Do the work right, treat the client like family, and take pride in the outcome.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://calendly.com/vicky-timomarketing/30min" target="_blank" rel="noopener noreferrer">
                  <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-red-500/25 transition-all inline-flex items-center gap-2 group">
                    Let's Talk
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 overflow-hidden">
                <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/13f3fee2-7a2a-4d84-888e-6f73531e0d60.png" alt="Professional workspace" className="w-full h-auto rounded-2xl shadow-2xl" />
                <div className="absolute top-12 right-12 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-12 left-12 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story of Timo - Side by Side */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Decorative Quote */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-12 relative overflow-hidden">
              <Quote className="w-16 h-16 text-blue-500/20 absolute top-8 left-8" />
              <div className="relative z-10">
                <p className="text-3xl font-bold text-white mb-6 leading-relaxed">
                  "Philotimo (φιλότιμο)"
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  There is no direct translation for this word in English, but it is the bloodline of my business culture. It is the duty to do the right thing, even when no one is looking.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Right: Story */}
          <div>
            {/* Profile Card */}
            <div className="flex items-center gap-4 mb-8">
              <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/070b1315-6438-492a-854d-45bc71dcc5ef.jpg" alt="Profile" className="w-20 h-20 rounded-full object-cover border-2 border-blue-500/50 shadow-lg" />
              <div>
                <div className="text-white font-semibold text-lg">Your Digital Growth Partner</div>
                <div className="text-slate-400 text-sm">20 Years of Excellence</div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">The Story of "Timo"</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                You might wonder where the name Timo Marketing comes from. It is rooted in the Greek concept of <span className="text-blue-400 font-semibold">Philotimo</span>.
              </p>
              <p>
                It roughly translates to "love of honour," but it means so much more. It is the refusal to deliver mediocrity. It is the deep-seated belief that my work is a reflection of my character.
              </p>
              <p>
                I stripped the word back to its core: <span className="text-purple-400 font-semibold">Timo</span>. To me, it represents a promise:
              </p>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-6 mt-6">
                <p className="text-xl text-white font-semibold">
                  I treat your business with the same respect, care, and ambition as I treat my own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Decades of Evolution - Visual Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Two Decades of Evolution</h2>
          <p className="text-2xl text-slate-400">I'm not new to this.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Journey Story */}
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              For 20 years, I have been on the frontline of the digital revolution. I was there when websites were just digital brochures. I was there when social media changed how the world speaks. And I am here now as automation and AI redefine how business is done.
            </p>
            <p>
              Over two decades, I've learned that "pretty" isn't enough. A beautiful website that doesn't convert is useless. A marketing campaign that brings leads to a disorganized office is a waste of money.
            </p>
            <p className="text-xl text-white font-medium">
              This experience is why I evolved. I realized that to truly practice Philotimo—to truly serve my clients honorably—I couldn't just offer one piece of the puzzle. I had to offer the whole solution.
            </p>
          </div>

          {/* Right: Timeline Visual */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-transparent backdrop-blur-sm border-l-4 border-blue-500 rounded-r-2xl p-6 hover:from-blue-500/20 transition-all">
              <div className="text-3xl font-bold text-blue-500 mb-2">1998</div>
              <div className="text-white font-semibold mb-1">The Beginning</div>
              <div className="text-slate-400">Digital brochure websites and early web presence</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-transparent backdrop-blur-sm border-l-4 border-purple-500 rounded-r-2xl p-6 hover:from-purple-500/20 transition-all">
              <div className="text-3xl font-bold text-purple-500 mb-2">2008</div>
              <div className="text-white font-semibold mb-1">The Shift</div>
              <div className="text-slate-400">Social media revolution changes everything</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-transparent backdrop-blur-sm border-l-4 border-blue-500 rounded-r-2xl p-6 hover:from-blue-500/20 transition-all">
              <div className="text-3xl font-bold text-blue-500 mb-2">2024</div>
              <div className="text-white font-semibold mb-1">The Future</div>
              <div className="text-slate-400">AI, automation, and complete solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* How Philotimo Drives My 3 Pillars - Grid Layout */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Philotimo Drives My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">3 Pillars</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My philosophy dictates how I deliver services today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Services */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 hover:-translate-y-2 transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/93df4531-76e0-49e0-98a8-064a999eef98.png" alt="Web Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Web Services</h3>
              <span className="text-sm text-blue-400 font-medium mb-4 block">(The Foundation)</span>
              <p className="text-base text-slate-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">Philotimo means building things to last.</span> I don't use cheap templates that break in six months. I build robust, secure, and scalable digital assets that you can be proud to show the world.
              </p>
            </div>
          </div>

          {/* Media Marketing */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-2 transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/b1c0f753-83f3-4538-a929-8f73bcd43faf.png" alt="Media Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Media Marketing</h3>
              <span className="text-sm text-purple-400 font-medium mb-4 block">(The Voice)</span>
              <p className="text-base text-slate-300 leading-relaxed">
                <span className="text-purple-400 font-semibold">Philotimo means telling the truth.</span> I don't rely on vanity metrics or clickbait. I build strategies based on real data and authentic connection, ensuring your brand's reputation is always protected and elevated.
              </p>
            </div>
          </div>

          {/* Smart Systems */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:-translate-y-2 transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/93fd2532-15a9-41de-a31e-ea0865117422.png" alt="Smart Systems" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Smart Systems</h3>
              <span className="text-sm text-cyan-400 font-medium mb-4 block">(The Engine)</span>
              <p className="text-base text-slate-300 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Philotimo means being helpful.</span> There is no honour in watching a client drown in paperwork. My SaaS and automation solutions are designed to give you your life back, streamlining your operations so you can focus on what you love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Promise - Full Width */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Image/Gradient */}
            <div className="relative min-h-[400px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent"></div>
              <div className="relative text-center">
                <Quote className="w-24 h-24 text-white/10 mx-auto mb-6" />
                <p className="text-4xl font-bold text-white leading-tight">
                  Honour in the work.
                  <span className="block mt-2">Pride in your success.</span>
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white mb-6">My Promise to You</h2>
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed mb-8">
                <p>
                  In an industry full of "churn and burn" agencies, I stand apart. I don't cut corners. I don't hide behind jargon. I show up.
                </p>
                <p>
                  Whether I am building a complex insurance platform or running a local ad campaign, the standard remains the same.
                </p>
              </div>
              <Link to="/contact">
                <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all inline-flex items-center gap-2 group w-fit">
                  Contact Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="block mb-4">
                <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/803dc0f7-c4b6-45cf-aa46-2e2aa3e1d0f8.png" alt="Timo Marketing" className="h-12 w-auto" />
              </Link>
              <p className="text-slate-400 text-sm">
                Your trusted digital growth partner in South Africa.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/web-services" className="hover:text-white transition-colors">Web Services</Link></li>
                <li><Link to="/monthly-plans" className="hover:text-white transition-colors">Monthly Plans</Link></li>
                <li><Link to="/media-marketing" className="hover:text-white transition-colors">Media Marketing</Link></li>
                <li><Link to="/smart-systems" className="hover:text-white transition-colors">Smart Systems</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://www.facebook.com/timomarketingsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="https://www.linkedin.com/company/timomarketingsolutions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/timomarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800/50 pt-8 text-center text-sm text-slate-400">© 2026 Timo Marketing. All rights reserved.</div>
        </div>
      </footer>
    </div>;
}