'use client';

import { ArrowRight, Code, Megaphone, Shield, Check, Sparkles } from 'lucide-react';
import { Link } from '@/lib/router-shim';
import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';
export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* WOW Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-900/50 to-slate-950/60"></div>
          </div>

          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptLTItMmgydjJoLTJ2LTJ6bTAtMmgydi0yaC0ydjJ6bS0yIDBoMnYtMmgtMnYyem0wIDJ2MmgtMnYtMmgyem0tMiAwaDJ2Mmgtdi0yem0wLTJ2Mmgtdi0yaDF6bS0yIDBodjJoLTJ2LTJoMXptMC0yaDF2LTJoLTF2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/50 to-slate-950"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border border-blue-500/20 rounded-lg rotate-12 animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-purple-500/20 rounded-full animate-float-slow animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 border border-cyan-500/20 rotate-45 animate-float-slow animation-delay-4000"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 border border-blue-500/10 rounded-lg rotate-45 animate-spin-slow"></div>
        </div>

        {/* Mouse-following gradient effect */}
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge with glow effect */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full mb-8 relative group hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-sm text-slate-300 font-medium relative z-10">
                Your Digital Growth Partner
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading with Staggered Animation */}
            <h1 className="relative mb-8">
              <span className="block text-6xl md:text-8xl font-bold text-white mb-4 leading-tight animate-fade-in-up">
                Elevate Your
              </span>
              <span className="block text-6xl md:text-8xl font-bold leading-tight animate-fade-in-up animation-delay-200">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl opacity-50 animate-pulse-slow"></span>
                  <span className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                    Digital Presence
                  </span>
                </span>
              </span>
            </h1>

            {/* Description with fade-in */}
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              I'm a South African digital growth partner delivering{' '}
              <span className="text-blue-400 font-semibold">creative excellence</span> and{' '}
              <span className="text-purple-400 font-semibold">technical innovation</span>. Transform
              your vision into reality.
            </p>

            {/* CTA Buttons with enhanced effects */}
            <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up animation-delay-600">
              <Link to="/services">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                  <span className="relative flex items-center gap-3">
                    Explore Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link to="/contact">
                <button className="group relative px-10 py-5 bg-slate-800/50 backdrop-blur-xl border-2 border-slate-700/50 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative">Contact Us</span>
                </button>
              </Link>
            </div>

            {/* Floating Stats */}
            <div className="mt-20 animate-fade-in-up animation-delay-800">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all"></div>
                  <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 md:p-6 group-hover:border-blue-500/50 transition-all">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">100+</div>
                    <div className="text-slate-400 text-xs md:text-sm">Projects Delivered</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all"></div>
                  <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 md:p-6 group-hover:border-purple-500/50 transition-all">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                    <div className="text-slate-400 text-xs md:text-sm">Happy Clients</div>
                  </div>
                </div>
                <div className="relative group col-span-2 md:col-span-1 max-w-xs mx-auto md:max-w-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all"></div>
                  <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 md:p-6 group-hover:border-cyan-500/50 transition-all">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                    <div className="text-slate-400 text-xs md:text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </section>

      {/* Why Choose Us Section - The Timo Ecosystem */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-sm text-blue-400 font-medium">The Timo Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Don't Just Grow.{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Scale.
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Most agencies deliver "leads" and walk away. I build the entire infrastructure—from the
            first click to the final invoice—ensuring no opportunity slips through the cracks.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">My Core Pillars</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Web Services */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group hover-lift">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/97dee8c0-bab4-452e-bd6c-35ff3161cf9a.png"
                  alt="Web Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all">
                  <Code className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Web Services</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  High-end website builds from landing pages to full e-commerce platforms, backed by
                  my comprehensive Care Plans for maintenance and hosting.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Custom website development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">E-commerce solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Monthly Care Plans</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Hosting & maintenance</span>
                  </div>
                </div>
                <Link
                  to="/web-services"
                  className="w-full px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg font-medium hover:bg-slate-700 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Media Marketing */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group hover-lift">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/6a1bef4a-07e0-405c-93d1-1e952c6239ea.png"
                  alt="Media Marketing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all">
                  <Megaphone className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Media Marketing</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Full-stack digital agency services including strategic brand development, social
                  media management, content creation, and performance advertising.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Brand strategy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Social media management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Content creation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Paid performance ads</span>
                  </div>
                </div>
                <Link
                  to="/media-marketing"
                  className="w-full px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg font-medium hover:bg-slate-700 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Website Peace of Mind */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group hover-lift">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/69c9d287-1ba5-4dd1-a1fe-7f77fceb75e3.png"
                  alt="Website Peace of Mind"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all">
                  <Shield className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Website Peace of Mind</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Your website doesn't stop needing attention after it goes live. I keep it secure,
                  updated, backed up, and performing every month — so you never have to worry about
                  it.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Monthly hosting &amp; security</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Plugin updates &amp; backups</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">Content changes included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">SEO &amp; performance monitoring</span>
                  </div>
                </div>
                <Link
                  to="/peace-of-mind"
                  className="w-full px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg font-medium hover:bg-slate-700 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits - REMOVED */}
        {/* CTA - REMOVED */}
      </section>

      {/* Monthly Payment Options Callout */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">Budget-Friendly Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Website Without the Big Upfront Cost
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Can't afford a large upfront investment? We offer flexible monthly payment plans that
              make professional web development accessible to businesses of all sizes. Get started
              for less than the cost of a marketing campaign.
            </p>
            <Link to="/monthly-plans">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all inline-flex items-center gap-2 group">
                Explore Monthly Plans
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team / Trust Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <span className="text-sm text-purple-400 font-medium">My Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built on Partnership, Not Projects
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I don't just deliver and disappear. I become an extension of your team, invested in
              your long-term success. My collaborative approach ensures every solution is tailored
              to your unique business challenges.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Direct Personal Access</div>
                  <div className="text-slate-400 text-sm">
                    Your single point of contact who knows your business inside out
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Transparent Reporting</div>
                  <div className="text-slate-400 text-sm">
                    Real-time dashboards showing exactly what's working and what's not
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-cyan-500" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Proactive Optimisation</div>
                  <div className="text-slate-400 text-sm">
                    I continuously improve your systems before issues arise
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
            <img
              src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/c7bf054a-b38d-4653-8354-78d322241c2c.png"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          What Clients Say
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-10 relative hover:border-purple-500/50 transition-all">
            <div className="text-6xl text-purple-500/30 font-serif leading-none mb-4">"</div>
            <p className="text-slate-300 text-lg leading-relaxed italic mb-8">
              Absolutely in love with the website Vicky built for my Spa. It's beautiful, practical,
              logical and my employees and clients love it. This whole process has been painless, as
              Vicky listened to each and every concern we had, and promptly fixed and adapted where
              needed. The best part, we can pay off the website over a 12-month term! So it doesn't
              kill your cashflow!
            </p>
            <div className="border-t border-slate-700/50 pt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                MB
              </div>
              <div>
                <div className="text-white font-semibold">Marli Bredenhahn</div>
                <div className="text-slate-400 text-sm">Crowned Studio</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              to="/portfolio"
              className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
            >
              See more client results
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Digital Presence?
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Let's discuss how I can help you achieve your business goals with my comprehensive
              digital solutions.
            </p>
            <a
              href="https://calendly.com/vicky-timomarketing/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all inline-flex items-center gap-2 group">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
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
                  <Link to="/web-services" className="hover:text-white transition-colors">
                    Web Services
                  </Link>
                </li>
                <li>
                  <Link to="/monthly-plans" className="hover:text-white transition-colors">
                    Monthly Plans
                  </Link>
                </li>
                <li>
                  <Link to="/media-marketing" className="hover:text-white transition-colors">
                    Media Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/smart-systems" className="hover:text-white transition-colors">
                    Smart Systems
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
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
