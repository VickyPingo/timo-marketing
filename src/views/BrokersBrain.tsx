"use client";

import { Check, Send, ArrowRight, Shield, Upload, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';
export default function BrokersBrainPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry_type: 'start_subscription',
    broker_count: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiryType = formData.inquiry_type === 'start_subscription' ? 'Start Subscription' : 'Contact Me';
    const subject = `Broker Claims Portal - ${inquiryType}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company}%0D%0AInquiry Type: ${inquiryType}%0D%0ANumber of Brokers: ${formData.broker_count}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:vicky@timomarketing.co.za?subject=${subject}&body=${body}`;
  };
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };
  return <>
    <div className="min-h-screen bg-white">
      {/* Header - Logo and Navigation */}
      <header className="py-8 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/803dc0f7-c4b6-45cf-aa46-2e2aa3e1d0f8.png" alt="Timo Marketing Edge" className="h-16 md:h-20" />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('client-portal')} className="text-gray-300 hover:text-white transition-colors font-medium">
                Client Portal
              </button>
              <button onClick={() => scrollToSection('broker-portal')} className="text-gray-300 hover:text-white transition-colors font-medium">
                Broker Portal
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors font-medium">
                Pricing
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && <nav className="md:hidden mt-6 flex flex-col gap-4 pb-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection('client-portal')} className="text-gray-300 hover:text-white transition-colors font-medium text-left">
                Client Portal
              </button>
              <button onClick={() => scrollToSection('broker-portal')} className="text-gray-300 hover:text-white transition-colors font-medium text-left">
                Broker Portal
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors font-medium text-left">
                Pricing
              </button>
            </nav>}
        </div>
      </header>

      {/* Section 1: Hero */}
      <section id="about" className="relative overflow-hidden bg-gradient-to-br from-[#0A1128] via-[#0A1128] to-[#0052FF]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#0052FF,_transparent_50%)] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 py-32 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
              Stop drowning in admin.<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Start Growing Your Book.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl">
              Insurance is a relationship business, but it is drowning in compliance and admin. 
              Broker Claims Portal gives you a specialised Claims Portal where your clients can log 
              claims and upload accident photos directly to the system.
            </p>
            <button onClick={() => scrollToSection('pricing')} className="group px-10 py-5 bg-[#0052FF] hover:bg-blue-600 text-white text-lg font-bold rounded-xl shadow-2xl shadow-blue-500/30 transition-all transform hover:scale-105 flex items-center gap-3">
              Get Broker Claims Portal Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Section 2: The Integration */}
      <section className="py-12 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-6">
              Connects Directly to Your Current Website
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                This isn't a replacement for your site—it's a <strong className="text-[#0052FF]">cloud-based upgrade</strong>.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Broker Claims Portal plugs seamlessly into your existing company website, 
                so your clients stay within your brand ecosystem.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                No need to rebuild everything. Just add professional claims management capabilities 
                that make your brokerage stand out.
              </p>
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 rounded-xl bg-[#0052FF] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A1128] mb-2">Your Brand, Enhanced</h3>
                  <p className="text-gray-600">
                    Clients see your logo, your colours, your company name—backed by enterprise-grade technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-xl border border-blue-100">
              <div className="aspect-[4/3] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Website Integration Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-[#0A1128]/40 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Seamless Integration</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Demo Section */}
          <div id="client-portal" className="mt-16 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 scroll-mt-24">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-stretch">
              <div className="relative aspect-video md:aspect-auto md:min-h-full bg-gray-900 overflow-hidden">
                <iframe src="https://player.vimeo.com/video/1162131464?background=1&autoplay=1&loop=1&byline=0&title=0" title="Broker Claims Portal Demo" frameBorder="0" allow="autoplay; fullscreen" className="absolute inset-0 w-full h-full object-cover" style={{
                  pointerEvents: 'none'
                }} />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-[#0A1128] mb-6">See It In Action</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Watch how Broker Claims Portal transforms the claims process from a stressful scramble into a streamlined, professional experience.
                </p>
                <p className="text-lg font-semibold text-[#0A1128] mb-4">
                  Here is just one example - Registering an Accident Claim:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#0052FF] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-700">Client logs into their secure portal.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#0052FF] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-700">Fills in claim details and uploads all necessary photos to register the claim.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#0052FF] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-700">Third Party's details get captured.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#0052FF] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <span className="text-gray-700">Leave a voice note that will be transcribed for you, the Broker, about what happened.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#0052FF] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <span className="text-gray-700">Client submits and the system automatically notifies you, the Broker, of a new claim.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#0052FF] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">6</span>
                    </div>
                    <span className="text-gray-700">You start processing immediately—no delays.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Broker Portal */}
      <section id="broker-portal" className="py-4 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Text Content - Top, Center Aligned */}
            <div className="p-6 md:p-16 text-center">
              <h3 className="text-4xl md:text-6xl font-bold text-[#0A1128] mb-4 leading-tight">
                The Admin Team You Always Wanted
              </h3>
              <p className="text-xl md:text-2xl text-gray-500 mb-8 leading-relaxed">
                (Without the Headcount)
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                Designed specifically for the independent broker. Eliminate the workload and process claims with the speed of a full enterprise team.
              </p>

              <h4 className="text-2xl md:text-3xl font-bold text-[#0A1128] mb-8">How it works:</h4>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#0052FF] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0A1128] mb-1 text-lg">Secure Access</h5>
                    <p className="text-gray-600">You get your own dedicated, bank-grade secure login.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#0052FF] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">⚡</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0A1128] mb-1 text-lg">Total Command</h5>
                    <p className="text-gray-600">The Broker Dashboard gives you a bird's-eye view of every active claim instantly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#0052FF] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📁</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0A1128] mb-1 text-lg">Smart Filing</h5>
                    <p className="text-gray-600">The system thinks for you—automatically filing new claims into existing client folders or creating new ones on the fly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#0052FF] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📦</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0A1128] mb-1 text-lg">One-Click Pack</h5>
                    <p className="text-gray-600">Download the complete 'Insurer Pack' instantly (includes the PDF report, all photos, and the transcribed voice note).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:col-span-2 justify-center">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#0052FF] flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0A1128] mb-1 text-lg">Direct Submission</h5>
                    <p className="text-gray-600">Email the full pack directly to your Insurer in seconds.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video - Bottom, Full Width, Cinema Mode */}
            <div className="relative aspect-video bg-gray-900 overflow-hidden">
              <iframe src="https://player.vimeo.com/video/1162131270?background=1&autoplay=1&loop=1&byline=0&title=0" title="Broker Portal Demo" frameBorder="0" allow="autoplay; fullscreen" className="absolute inset-0 w-full h-full" style={{
                pointerEvents: 'none'
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Feature Grid */}
      <section className="py-12 md:py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Data Analytics Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-6">
              The Claims Portal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Give your clients a professional, modern experience while you reclaim hours of admin time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0052FF] to-blue-600 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1128] mb-4">24/7 Digital Assistant</h3>
              <p className="text-gray-600 leading-relaxed">
                Your clients can log claims—from <strong>Motor Accidents</strong> to <strong>Burst Geysers</strong> to <strong>Theft</strong>—without 
                calling the broker. No more midnight WhatsApps or weekend emergencies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0052FF] to-blue-600 flex items-center justify-center mb-6">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1128] mb-4">Instant Document Upload</h3>
              <p className="text-gray-600 leading-relaxed">
                Photos and claim details go straight to the cloud—no more searching through emails, 
                WhatsApp threads, or lost attachments. Everything organised and accessible.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0052FF] to-blue-600 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1128] mb-4">Compliance Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                A digital audit trail for every claim to satisfy South African regulations. 
                Every interaction timestamped, every document secured, every requirement met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing */}
      <section id="pricing" className="py-24 px-6 bg-[#0A1128] relative overflow-hidden scroll-mt-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Technology Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Pricing that scales with your team. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            {/* Pricing Card */}
            <div className="bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-[#0A1128] mb-6">Flexible Pricing Tiers</h3>
                <p className="text-lg text-gray-600 mb-8">Pay per broker/staff member. Scale as you grow.</p>
              </div>

              {/* Activation Fee Notice */}
              <div className="mb-8 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-300 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-[#0052FF]" />
                  <h4 className="text-xl font-bold text-[#0A1128]">One-Time Setup Fee</h4>
                </div>
                <p className="text-gray-700">
                  All subscriptions include a <span className="font-semibold text-[#0052FF]">R499 once-off activation fee per company</span> to set up your portal, security, and cloud infrastructure.
                </p>
              </div>

              <div className="space-y-6 mb-10">
                {/* Tier 1 */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-[#0A1128]">R299</span>
                    <span className="text-lg text-gray-600">per broker or staff member/month</span>
                  </div>
                  <p className="text-gray-700 font-medium">1–2 brokers / staff members</p>
                </div>

                {/* Tier 2 */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-300 relative">
                  <div className="absolute -top-3 right-4 bg-[#0052FF] text-white px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-[#0A1128]">R249</span>
                    <span className="text-lg text-gray-600">per broker or staff member/month</span>
                  </div>
                  <p className="text-gray-700 font-medium">3–10 brokers / staff members</p>
                </div>

                {/* Tier 3 */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-[#0A1128]">R199</span>
                    <span className="text-lg text-gray-600">per broker or staff member/month</span>
                  </div>
                  <p className="text-gray-700 font-medium">11+ brokers / staff members</p>
                </div>

                {/* Broker Houses Custom Rate */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                  <p className="text-sm font-semibold text-gray-900 text-center">
                    Special custom rate for Broker Houses.<br />
                    Please contact me for pricing.
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-8 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-3">All tiers include:</p>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0052FF] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-gray-700">Unlimited Client Logins</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0052FF] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-gray-700">Cloud Storage</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0052FF] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-gray-700">Website Integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0052FF] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-gray-700">100 Emails sent p/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0052FF] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-gray-700">Cancel Anytime</span>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                  Complete the form to start your subscription →
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-[#0A1128] p-10 rounded-3xl border border-gray-700 flex flex-col">
              <h3 className="text-3xl font-bold text-white mb-8">Get Started</h3>
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div>
                  <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-300 mb-2">
                    I want to: *
                  </label>
                  <select id="inquiry_type" required value={formData.inquiry_type} onChange={e => setFormData({
                    ...formData,
                    inquiry_type: e.target.value
                  })} className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#0052FF] transition-colors">
                    <option value="start_subscription">Start subscription</option>
                    <option value="contact_me">Contact me</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input type="text" id="name" required value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0052FF] transition-colors" placeholder="John Doe" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input type="email" id="email" required value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0052FF] transition-colors" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input type="tel" id="phone" required value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0052FF] transition-colors" placeholder="069 123 4567" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Brokerage Name *
                  </label>
                  <input type="text" id="company" required value={formData.company} onChange={e => setFormData({
                    ...formData,
                    company: e.target.value
                  })} className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0052FF] transition-colors" placeholder="ABC Insurance Brokers" />
                </div>

                <div>
                  <label htmlFor="broker_count" className="block text-sm font-medium text-gray-300 mb-2">
                    How many brokers in your company (including you)? *
                  </label>
                  <input type="number" id="broker_count" required min="1" value={formData.broker_count} onChange={e => setFormData({
                    ...formData,
                    broker_count: e.target.value
                  })} className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0052FF] transition-colors" placeholder="e.g. 5" />
                </div>

                <div className="flex-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea id="message" rows={3} value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0052FF] transition-colors resize-none" placeholder="Tell us about your brokerage..." />
                </div>

                <button type="submit" className="w-full px-8 py-5 bg-gradient-to-r from-[#0052FF] to-blue-600 text-white text-lg rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3 group mt-auto">
                  Submit
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA Footer */}
      <footer className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/803dc0f7-c4b6-45cf-aa46-2e2aa3e1d0f8.png" alt="Timo Marketing Edge" className="h-24 mx-auto mb-8" />
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Don't have a website to host your new Client Portal? I can help you build a professional digital presence. Visit my{' '}
              <a href="https://timomarketingedge.com/web-services" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] font-semibold hover:underline">
                Web Services
              </a>
              {' '}page to learn more. I also offer{' '}
              <a href="https://timomarketingedge.com/monthly-plans" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] font-semibold hover:underline">
                budget-friendly options
              </a>
              {' '}specifically for smaller firms.
            </p>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2026 Timo Marketing Edge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </>;
}