'use client';

import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  ArrowRight,
  Facebook,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { Link } from '@/lib/router-shim';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll construct a mailto link with the form data
    const subject = `Contact Form: ${formData.service || 'General Inquiry'}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:vicky@timomarketing.co.za?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-sm text-blue-400 font-medium">Let's Connect</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Transform
              </span>{' '}
              Your Business?
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Whether you need a new website, marketing support, or a custom system, I'm here to
              help. Let's discuss how I can help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all hover-lift">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Email</h3>
            <a
              href="mailto:vicky@timomarketing.co.za"
              className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
            >
              vicky@timomarketing.co.za
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all hover-lift">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
            <a
              href="tel:0690691299"
              className="text-purple-400 hover:text-purple-300 transition-colors text-lg"
            >
              069 069 1299
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all hover-lift">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
            <a
              href="https://wa.me/27690691299"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors text-lg"
            >
              069 069 1299
            </a>
          </div>
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="069 123 4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Web Services">Web Services</option>
                  <option value="Media Marketing">Media Marketing</option>
                  <option value="Website Care">Website Care</option>
                  <option value="Hosting">Hosting</option>
                  <option value="Complete Package">Complete Package (All Services)</option>
                  <option value="Consultation">Just a Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-red-500/25 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Work With Me?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">20 Years of Experience</h3>
                    <p className="text-slate-400 text-sm">
                      Two decades mastering digital marketing and development
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Complete Solutions</h3>
                    <p className="text-slate-400 text-sm">
                      From marketing to automation, everything you need
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Philotimo Philosophy</h3>
                    <p className="text-slate-400 text-sm">
                      Honour, integrity, and pride in every project
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Response Guarantee</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I personally respond to every inquiry within 24 hours. Your business deserves
                attention, not automated responses.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-slate-300">
                  Based in South Africa, serving clients globally
                </span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/timomarketingsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/timomarketingsolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/timomarketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
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
              <Link to="/" className="block mb-4">
                <img
                  src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/803dc0f7-c4b6-45cf-aa46-2e2aa3e1d0f8.png"
                  alt="Timo Marketing"
                  className="h-16 w-auto"
                />
              </Link>
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
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/timomarketingsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/timomarketingsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/timomarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
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
