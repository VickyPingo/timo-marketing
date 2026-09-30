"use client";

import { ArrowRight, Globe, TrendingUp, Cog, Target, Code, Megaphone, Zap, Shield, Users, BarChart } from 'lucide-react';
import { Link } from '@/lib/router-shim';
import Navigation from '@/components/Navigation';
export default function Services() {
  return <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <span className="text-sm text-blue-400 font-medium">Complete Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Complete Growth</span> Partner
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-8">
              From attracting customers to automating your operations, I provide everything you need to scale your business with confidence.
            </p>
            <Link to="/contact">
              <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all inline-flex items-center gap-2 group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Services */}
          <Link to="/web-services" className="group">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 hover:-translate-y-2 transition-all h-full">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-600/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-24 h-24 text-blue-500/40" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Web Services</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  High-performance websites and landing pages designed to convert visitors into customers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-300">Custom Website Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-300">Landing Page Optimisation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-300">Security & Performance</span>
                  </div>
                </div>
                <div className="mt-6 text-blue-400 font-medium inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Media Marketing */}
          <Link to="/media-marketing" className="group">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-2 transition-all h-full">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500/20 to-purple-600/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="w-24 h-24 text-purple-500/40" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Media Marketing</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Data-driven campaigns that target intent and drive high-quality traffic to your business.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Megaphone className="w-5 h-5 text-purple-500" />
                    <span className="text-slate-300">Social Media Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-500" />
                    <span className="text-slate-300">Google & LinkedIn Ads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-purple-500" />
                    <span className="text-slate-300">Analytics & Optimisation</span>
                  </div>
                </div>
                <div className="mt-6 text-purple-400 font-medium inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Smart Systems */}
          <Link to="/smart-systems" className="group">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:-translate-y-2 transition-all h-full">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-cyan-600/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cog className="w-24 h-24 text-cyan-500/40" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Smart Systems</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Custom SaaS solutions that automate your operations and scale with your business.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-cyan-500" />
                    <span className="text-slate-300">Workflow Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-500" />
                    <span className="text-slate-300">CRM & Client Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-cyan-500" />
                    <span className="text-slate-300">Custom Dashboards</span>
                  </div>
                </div>
                <div className="mt-6 text-cyan-400 font-medium inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* The Complete Package */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 w-fit">
                <span className="text-sm text-blue-400 font-medium">Most Popular</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Complete <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Growth Engine</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Why choose one service when you can have a complete system? Most businesses need all three pillars working together to truly scale.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Phase 1: ATTRACT</div>
                    <div className="text-slate-400 text-sm">Drive targeted traffic with media marketing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Phase 2: CONVERT</div>
                    <div className="text-slate-400 text-sm">Turn visitors into customers with optimised websites</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Cog className="w-4 h-4 text-cyan-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Phase 3: AUTOMATE</div>
                    <div className="text-slate-400 text-sm">Scale effortlessly with smart automation systems</div>
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all inline-flex items-center gap-2 group w-fit">
                  Get the Complete Package
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            <div className="relative min-h-[500px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 flex items-center justify-center p-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-4 ml-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-purple-500/50 to-transparent rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-4 ml-16">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                      <Cog className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-cyan-500/50 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Approach Works */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why This Approach Works</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Other agencies offer pieces. I offer the complete puzzle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">❌</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The Old Way</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Hire different vendors for web, marketing, and systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Services don't integrate or communicate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Blame game when things go wrong</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Higher costs, slower results</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The Timo Way</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>One partner for your entire digital ecosystem</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>All services designed to work together seamlessly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>Clear accountability and faster problem solving</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>Better results, lower overall costs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss which services fit your needs and build a customised growth plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/vicky-timomarketing/30min" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all inline-flex items-center gap-2 group">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <Link to="/about">
              <button className="px-10 py-4 bg-slate-800/50 border border-slate-700/50 text-white rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all">
                Learn About My Approach
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="block mb-4">
                <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/803dc0f7-c4b6-45cf-aa46-2e2aa3e1d0f8.png" alt="Timo Marketing" className="h-16 w-auto" />
              </Link>
              <p className="text-slate-400 text-sm">
                Your trusted digital growth partner in South Africa.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/web-services" className="hover:text-white transition-colors">Web Services</Link></li>
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
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800/50 pt-8 text-center text-sm text-slate-400">© 2026 Timo Marketing. All rights reserved.</div>
        </div>
      </footer>
    </div>;
}