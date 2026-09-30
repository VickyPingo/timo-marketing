'use client';

import { ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';

const WHATSAPP_URL = 'https://wa.me/27690691192';

const projects = [
  {
    image:
      '/images/portfolio-just-call.webp',
    category: 'Web Services + eCommerce',
    categoryColor: 'blue',
    client: 'JC Services',
    subtitle: 'Property Maintenance — Pretoria & Nylstroom',
    description:
      'A multi-service business website built to position JC Services as the trusted, professional choice in their area. Includes a fully integrated WooCommerce shop for tools and equipment, service pages across 9 trade categories, and a lead capture system with callback forms and maintenance plan enquiries.',
    tags: ['WooCommerce', 'eCommerce', 'WordPress'],
    url: 'https://www.jc-services.co.za/',
  },
  {
    image:
      '/images/portfolio-lovedogs.webp',
    category: 'Web Services + eCommerce',
    categoryColor: 'purple',
    client: 'LoveDogs & Company',
    subtitle: 'Premium Pet Food Retailer — Eastern Cape',
    description:
      'A premium eCommerce store for a species-appropriate raw pet food brand. Multi-brand catalogue with category filtering by pet type, seamless WooCommerce checkout, and a scheduled Garden Route delivery system built directly into the site.',
    tags: ['WooCommerce', 'eCommerce', 'WordPress'],
    url: 'https://lovedogs.co.za/',
  },
  {
    image:
      '/images/portfolio-crowned-studio.webp',
    category: 'Web Services + Booking System',
    categoryColor: 'pink',
    client: 'Crowned Studio Spa',
    subtitle: 'Luxury Spa & Salon — Pretoria',
    description:
      'A luxury spa website with a fully custom built-in booking system. Clients can browse treatments and book appointments directly — no third-party tools, no redirects, no extra fees. Clean, elegant design that reflects the premium experience on offer.',
    tags: ['Custom Booking System', 'Spa & Wellness', 'WordPress'],
    url: 'https://crownedstudio.co.za/',
  },
  {
    image:
      '/images/portfolio-tula-tu.webp',
    category: 'Web Services',
    categoryColor: 'cyan',
    client: 'Tula Tu Aesthetics',
    subtitle: 'Aesthetics & Beauty Studio — The Woodlands, TX',
    description:
      'An elegant website for a certified neurotoxin specialist offering luxury Botox artistry. The design reflects the precision and refinement of the treatments on offer — clean, sophisticated, and built to attract discerning clients and drive appointment bookings.',
    tags: ['Aesthetics', 'Beauty', 'WordPress'],
    url: 'https://tulatuaesthetics.com/',
  },
  {
    image:
      '/images/portfolio-cmr.webp',
    category: 'Web Services',
    categoryColor: 'green',
    client: 'CMR Limpopo',
    subtitle: 'Non-Profit — Family Reunification & Child Welfare',
    description:
      'A compassionate, professional website for a registered non-profit organisation. Built to communicate trust, provide clear information, and connect families with the support and resources they need.',
    tags: ['Non-Profit', 'Community', 'WordPress'],
    url: 'https://www.cmrlimpopo.co.za/',
  },
  {
    image:
      '/images/portfolio-pregnancy-help-network.webp',
    category: 'Web Services + Members Area',
    categoryColor: 'orange',
    client: 'Pregnancy Help Network',
    subtitle: 'Non-Profit — Pregnancy Support South Africa',
    description:
      'A sensitive and welcoming website for a national pregnancy support network. Clear navigation, accessible information, and a warm tone for women in vulnerable situations. Includes a built-in members-only area for registered pregnancy help centres across South Africa.',
    tags: ['Non-Profit', 'Members Area', 'Support Services'],
    url: 'https://www.pregnancyhelpnetwork.org.za/',
  },
];

const colorMap: Record<
  string,
  { tag: string; tagText: string; border: string; badge: string; badgeText: string }
> = {
  blue: {
    tag: 'bg-blue-500/20',
    tagText: 'text-blue-300',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    badge: 'bg-blue-500/20 border-blue-500/30',
    badgeText: 'text-blue-300',
  },
  purple: {
    tag: 'bg-purple-500/20',
    tagText: 'text-purple-300',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    badge: 'bg-purple-500/20 border-purple-500/30',
    badgeText: 'text-purple-300',
  },
  pink: {
    tag: 'bg-pink-500/20',
    tagText: 'text-pink-300',
    border: 'border-pink-500/20 hover:border-pink-500/50',
    badge: 'bg-pink-500/20 border-pink-500/30',
    badgeText: 'text-pink-300',
  },
  cyan: {
    tag: 'bg-cyan-500/20',
    tagText: 'text-cyan-300',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    badge: 'bg-cyan-500/20 border-cyan-500/30',
    badgeText: 'text-cyan-300',
  },
  green: {
    tag: 'bg-green-500/20',
    tagText: 'text-green-300',
    border: 'border-green-500/20 hover:border-green-500/50',
    badge: 'bg-green-500/20 border-green-500/30',
    badgeText: 'text-green-300',
  },
  orange: {
    tag: 'bg-orange-500/20',
    tagText: 'text-orange-300',
    border: 'border-orange-500/20 hover:border-orange-500/50',
    badge: 'bg-orange-500/20 border-orange-500/30',
    badgeText: 'text-orange-300',
  },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-[540px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/portfolio-hero.webp"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Built With Purpose.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Designed to Perform.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              Every project I take on has one goal — to make that business look credible, work
              harder, and grow. Here's a look at what I've delivered.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-1"
            >
              Start a Project →
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 — Project Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-14 text-center">My Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const c = colorMap[project.categoryColor];
              return (
                <div
                  key={project.client}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border ${c.border} rounded-2xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col`}
                >
                  {/* Screenshot */}
                  <div className="relative h-52 overflow-hidden bg-slate-800/80 flex-shrink-0">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.client} website`}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                        <span className="text-slate-600 text-sm">Screenshot coming soon</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    {/* Category tag */}
                    <div className="absolute bottom-3 left-3">
                      <span
                        className={`inline-block px-3 py-1 ${c.badge} border backdrop-blur-sm rounded-full text-xs font-semibold ${c.badgeText}`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{project.client}</h3>
                    <p className="text-slate-400 text-sm mb-4">{project.subtitle}</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 ${c.tag} ${c.tagText} rounded-md text-xs font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-700/60 border border-slate-600/50 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-all group self-start"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Live Site →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Clients Say</h2>
            <p className="text-xl text-slate-300">Real words from real businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Marli Bredenhahn */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/40 transition-all flex flex-col">
              <div className="text-purple-400 text-5xl leading-none mb-4 font-serif">"</div>
              <p className="text-slate-300 leading-relaxed mb-8 flex-1 italic">
                Absolutely in love with the website Vicky built for my Spa. It's beautiful,
                practical, logical and my employees and clients love it. This whole process has been
                painless, as Vicky listened to each and every concern we had, and promptly fixed and
                adapted where needed. The best part, we can pay off the website over a 12-month
                term! So it doesn't kill your cashflow!
              </p>
              <div className="flex items-center gap-3 border-t border-slate-700/50 pt-5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  MB
                </div>
                <div>
                  <div className="text-white font-semibold">Marli Bredenhahn</div>
                  <div className="text-slate-400 text-sm">Crowned Studio</div>
                </div>
              </div>
            </div>

            {/* Card 2 — Taliah Williamson */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/40 transition-all flex flex-col">
              <div className="text-cyan-400 text-5xl leading-none mb-4 font-serif">"</div>
              <p className="text-slate-300 leading-relaxed mb-8 flex-1 italic">
                Vicky has been an absolute standout web developer to work with across a wide range
                of projects. We've collaborated on numerous builds and updates, and every single
                time the outcome has been seamless, polished, and professional. Most importantly: my
                clients have been genuinely thrilled with the results. She's incredibly patient,
                highly efficient, and impressively knowledgeable. Vicky doesn't just execute tasks —
                she thinks ahead, stays on her toes, and always comes to the table with solutions
                when challenges pop up. She's an absolute pleasure to work with, and I would highly,
                highly recommend her to anyone looking for a reliable, strategic, and genuinely
                talented developer.
              </p>
              <div className="flex items-center gap-3 border-t border-slate-700/50 pt-5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  TW
                </div>
                <div>
                  <div className="text-white font-semibold">Taliah Williamson</div>
                  <div className="text-slate-400 text-sm">Tula Tu Aesthetics</div>
                </div>
              </div>
            </div>

            {/* Card 3 — Leon Barnard */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/40 transition-all flex flex-col">
              <div className="text-blue-400 text-5xl leading-none mb-4 font-serif">"</div>
              <p className="text-slate-300 leading-relaxed mb-8 flex-1 italic">
                Timo Marketing provided exceptional support in the development of multiple websites
                and e-commerce stores for my business. From concept to execution, she delivered
                solutions that were not only visually strong but also functional, user-friendly, and
                aligned with business goals. Communication was clear, timelines were met, and her
                ability to translate requirements into effective digital platforms was impressive. I
                highly recommend Timo Marketing to anyone looking for top-tier website and
                e-commerce development services. Their service quality truly deserves a 5 out of 5
                rating.
              </p>
              <div className="flex items-center gap-3 border-t border-slate-700/50 pt-5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  LB
                </div>
                <div>
                  <div className="text-white font-semibold">Leon Barnard</div>
                  <div className="text-slate-400 text-sm">Dynamic-X</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Closing Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 md:p-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">And Many More.</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              This is a selection of my recent work. Every project is different — the size, the
              industry, the goal. What stays the same is the standard.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to be next?</h2>
              <p className="text-xl text-slate-300 mb-10">
                Let's build something you're proud to share.
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
