"use client";

import { Shield, Zap, CheckCircle2, Users, Clock, MapPin, FileText, Bell, DollarSign, Database, Smartphone, TrendingUp, Settings, Lock, Palette } from "lucide-react";
import Navigation from '@/components/Navigation';

export default function SmartSystems() {
  return <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/df5a987a-90f9-4db9-a610-d799eaff8f56.png" alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptLTItMmgydjJoLTJ2LTJ6bTAtMmgydi0yaC0ydjJ6bS0yIDBoMnYtMmgtMnYyem0wIDJ2MmgtMnYtMmgyem0tMiAwaDJ2Mmgtdi0yem0wLTJ2Mmgtdi0yaDF6bS0yIDBodjJoLTJ2LTJoMXptMC0yaDF2LTJoLTF2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative pt-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Running Your Business on{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Spreadsheets and Hope.
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              You don't need more hours in the day. You need a better operating system. I build and licence smart software platforms that automate the boring stuff, so you can focus on the profitable stuff.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-1">
                Request a Demo
              </a>
              <a href="#solutions" className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold rounded-xl hover:border-purple-500/50 transition-all hover:-translate-y-1">
                View System Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy: The Leaky Bucket */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">The Philosophy: The "Leaky Bucket"</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              I've seen it a hundred times. A business spends R20,000 on marketing to get new leads, but they lose them because:
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <Clock className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">The quote took 3 days to send.</div>
                  <div className="text-slate-400 text-sm">By then, the client has moved on to a competitor.</div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <Bell className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">The follow-up email was forgotten.</div>
                  <div className="text-slate-400 text-sm">No reminder system means opportunities slip away.</div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <FileText className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">The invoice fell through the cracks.</div>
                  <div className="text-slate-400 text-sm">Work completed but never billed is money lost forever.</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-6">
              <p className="text-xl text-white font-semibold text-center">
                Marketing brings the rain. Systems catch the water.
              </p>
              <p className="text-lg text-slate-300 text-center mt-2">
                My Smart Systems are designed to plug the holes in your bucket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80" alt="" className="w-full h-full object-cover opacity-5" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Built for Your Industry</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialised platforms designed for South African businesses
            </p>
          </div>

          {/* Solution A: Insurance Brokers */}
          <div className="mb-16 bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">Solution A</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">The Broker's Brain</h3>
                <p className="text-blue-400 text-lg font-medium mb-6">For Insurance Brokers</p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Insurance is a relationship business, but it is drowning in compliance and admin. I offer a specialised, cloud-based platform designed specifically for the South African broker market.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                      <Bell className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Automated Renewals</div>
                      <div className="text-slate-400 text-sm">The system tracks every policy expiry date. 30 days before renewal, it automatically emails the client to start the conversation. You never miss a renewal commission again.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Compliance Vault</div>
                      <div className="text-slate-400 text-sm">POPIA and FICA are not suggestions; they are laws. Securely store client IDs, advice records, and mandates in one encrypted vault.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">The Claims Portal</div>
                      <div className="text-slate-400 text-sm">Give your clients a login. They can upload accident photos and claim details directly to the system, saving you hours of back-and-forth phone calls.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Commission Tracking</div>
                      <div className="text-slate-400 text-sm">Know exactly what is due to you from the underwriters.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">The Result:</span>
                  </div>
                  <p className="text-slate-300">You spend less time pushing paper and more time selling policies.</p>
                </div>
              </div>

              <div className="relative min-h-[400px] lg:min-h-0">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80" alt="Insurance Dashboard" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Solution B: Field Service */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1 relative min-h-[400px] lg:min-h-0">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80" alt="Field Service Dashboard" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              </div>

              <div className="order-1 lg:order-2 p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6">
                  <Settings className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-400 font-medium">Solution B</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">The Field Commander</h3>
                <p className="text-purple-400 text-lg font-medium mb-6">For Service Professionals</p>
                <p className="text-slate-300 leading-relaxed mb-4">For Plumbers, Electricians, HVAC, and Security Companies and so much more...</p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  If you have vans on the road, you know the chaos. Lost job cards, technicians taking the long route, and invoices that don't get sent until Sunday night.
                </p>
                <p className="text-white font-semibold mb-6">My platform puts your office in your pocket:</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Digital Job Cards</div>
                      <div className="text-slate-400 text-sm">No more paper. The technician gets the job details on their phone.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">GPS Dispatch</div>
                      <div className="text-slate-400 text-sm">See where your team is in real-time. Assign the emergency burst pipe job to the closest van.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Sign-on-Glass</div>
                      <div className="text-slate-400 text-sm">The client signs off on the work on the technician's phone.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Instant Invoicing</div>
                      <div className="text-slate-400 text-sm">The moment the job is marked "Complete," the invoice is generated (with Xero/Sage integration) and WhatsApped to the client before the van leaves the driveway.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">The Result:</span>
                  </div>
                  <p className="text-slate-300">Cash flow improves immediately because invoices go out instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SaaS */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Why "SaaS" (Software as a Service)?</h2>
            <p className="text-xl text-slate-300 mb-8">
              You don't need to pay R500,000 to build custom software from scratch.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              I operate on a <span className="text-cyan-400 font-semibold">Multi-Tenant Model</span>. This means I have built the engine. You simply rent a "seat" in the car.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Low Upfront Cost</h3>
                <p className="text-slate-400">Just a setup fee to import your data.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Monthly Subscription</h3>
                <p className="text-slate-400">Pay for what you use.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Always Updated</h3>
                <p className="text-slate-400">When I add a new feature (like AI integration), you get it instantly for free.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Your Brand, Your Domain</h3>
                <p className="text-slate-400">Each company gets its own dedicated domain, customisable with your logo, colours, and branding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philotimo in Technology */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Philotimo in Technology</h2>
          <p className="text-xl text-slate-300 mb-12 text-center">
            Trusting someone with your data is a big deal. Here is how my code of honour applies to your software:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-500/40 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Your Data is Yours</h3>
              <p className="text-slate-300 leading-relaxed">
                If you ever leave, I export your data and hand it to you. I don't hold your client list hostage.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center hover:border-purple-500/40 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
              <p className="text-slate-300 leading-relaxed">
                I use bank-grade encryption. Keeping your client data safe is my highest priority.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-500/40 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real Support</h3>
              <p className="text-slate-300 leading-relaxed">
                If the system has a glitch, you don't call a 1-800 number in another country. You message me. I fix it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Custom Option */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full mb-6 mx-auto">
              <Settings className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-400 font-medium">Custom Solutions</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Not an Insurance Broker or a Plumber? No Problem.</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Because I own the code, I can assemble "Lego blocks" of functionality to build a custom system for your specific industry. Here are the most popular modules I can deploy for you:
            </p>
          </div>

          {/* Module 1: Booking & Scheduling */}
          <div className="mb-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">1. Intelligent Booking & Scheduling (Revenue Assurance)</h3>
                <p className="text-slate-300 leading-relaxed">
                  Stop playing "WhatsApp Tag" to find a time slot. I build smart booking engines that integrate directly into your website.
                </p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The Feature:</span>
                  <span className="text-slate-300"> Clients book their own slots based on your real-time availability.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The "Smart" Part:</span>
                  <span className="text-slate-300"> The system automatically demands a deposit (via PayFast/Yoco) before confirming.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The Result:</span>
                  <span className="text-slate-300"> You eliminate "no-shows." If they don't show up, you keep the deposit. The system also sends SMS reminders 24 hours and 1 hour before the appointment.</span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <span className="text-sm text-blue-400 font-medium">Perfect for: Medical Practices, Beauty Salons, Consultants, Tutors</span>
            </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-0">
                <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/fc71de0c-17d9-40c8-a012-78ed6c031146.png" alt="Booking System" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Module 2: Document Automation */}
          <div className="mb-8 bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1 relative min-h-[300px] lg:min-h-0">
                <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/08a6704f-c43a-4760-bbcc-7f1fd7dea813.png" alt="Document Automation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              </div>
              <div className="order-1 lg:order-2 p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">2. Document Automation & E-Signing</h3>
                <p className="text-slate-300 leading-relaxed">
                  Stop typing the same contracts over and over.
                </p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The Feature:</span>
                  <span className="text-slate-300"> A "Generate Contract" button inside your CRM.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The "Smart" Part:</span>
                  <span className="text-slate-300"> You fill in a simple form (Client Name, Price, Date), and the system auto-generates a perfectly formatted PDF contract, emails it to the client, and allows them to sign digitally on their phone.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The Result:</span>
                  <span className="text-slate-300"> Contracts are signed in minutes, not days.</span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
              <span className="text-sm text-purple-400 font-medium">Perfect for: Real Estate Agents, Event Planners, Photographers</span>
            </div>
              </div>
            </div>
          </div>

          {/* Module 3: Client Portals */}
          <div className="mb-8 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">3. Client Portals (The "VIP Experience")</h3>
                <p className="text-slate-300 leading-relaxed">
                  Stop answering "What is the status of my project?" emails.
                </p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The Feature:</span>
                  <span className="text-slate-300"> A secure login area for your clients on your website.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The "Smart" Part:</span>
                  <span className="text-slate-300"> Clients can log in to view project milestones, download their invoices, approve designs, or view shared files.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The Result:</span>
                  <span className="text-slate-300"> Radical transparency (Philotimo). Your clients feel in control, and your inbox stays empty.</span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg">
              <span className="text-sm text-cyan-400 font-medium">Perfect for: Architects, Lawyers, Construction Companies</span>
            </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-0">
                <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/89ac522e-f8e0-4f46-9257-6dd5b1f8f0c7.png" alt="Client Portal" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Module 4: Staff Onboarding */}
          <div className="mb-8 bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1 relative min-h-[300px] lg:min-h-0">
                <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/2ab20628-5b82-4648-bd16-daa648f1124b.png" alt="Staff Onboarding System" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              </div>
              <div className="order-1 lg:order-2 p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">4. Staff Onboarding & Training (LMS)</h3>
                <p className="text-slate-300 leading-relaxed">
                  Stop training every new employee manually.
                </p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The Feature:</span>
                  <span className="text-slate-300"> An internal "Academy" for your staff.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The "Smart" Part:</span>
                  <span className="text-slate-300"> When you hire someone, they get a login. They watch your training videos, read your SOPs (Standard Operating Procedures), and take a quiz. You get a report showing they passed.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The Result:</span>
                  <span className="text-slate-300"> Consistent quality control across your team without you repeating yourself.</span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
              <span className="text-sm text-green-400 font-medium">Perfect for: Restaurants, Retail Chains, Call Centers</span>
            </div>
              </div>
            </div>
          </div>

          {/* Module 5: Inventory Tracking */}
          <div className="mb-12 bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">5. Inventory & Asset Tracking</h3>
                <p className="text-slate-300 leading-relaxed">
                  Stop losing stock.
                </p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The Feature:</span>
                  <span className="text-slate-300"> A Barcode/QR code system for your equipment.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The "Smart" Part:</span>
                  <span className="text-slate-300"> Scan an item out to a staff member. If it isn't scanned back in by Friday, the system alerts you.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">The Result:</span>
                  <span className="text-slate-300"> Accountability. You know exactly who has the expensive drill or the demo laptop.</span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg">
              <span className="text-sm text-orange-400 font-medium">Perfect for: IT Companies, Rental Businesses, Construction</span>
            </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-0">
                <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/4373eb22-46a9-4af0-8d19-c1d4a11a37e1.png" alt="Inventory Tracking System" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Summary Blurb */}
          <div className="relative bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 md:p-10 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/19f7e278-4adc-4318-aa88-a2e0239ef53f.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
            <p className="text-2xl text-white font-bold mb-4">
              These aren't just features. They are time-savers.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Whether you need to book more patients, sign more contracts, or track more tools, I can build the logic to do it automatically.
            </p>
            <p className="text-2xl text-white font-semibold">
              Tell me your bottleneck, and I will build the bottle opener.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Software is hard to explain but easy to see.
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let me show you a 15-minute demo of how much time I can save you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-1">
              Request a Demo
            </a>
            <a href="#solutions" className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold rounded-xl hover:border-purple-500/50 transition-all hover:-translate-y-1">
              View System Features
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
                <img src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/803dc0f7-c4b6-45cf-aa46-2e2aa3e1d0f8.png" alt="Timo Marketing" className="h-16 w-auto" />
              </div>
              <p className="text-slate-400 text-sm">
                Your trusted digital growth partner in South Africa.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/web-services" className="hover:text-white transition-colors">Web Services</a></li>
                <li><a href="/monthly-plans" className="hover:text-white transition-colors">Monthly Plans</a></li>
                <li><a href="/media-marketing" className="hover:text-white transition-colors">Media Marketing</a></li>
                <li><a href="/smart-systems" className="hover:text-white transition-colors">Smart Systems</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
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