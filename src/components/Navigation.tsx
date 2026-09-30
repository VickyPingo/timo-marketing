'use client';

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from '@/lib/router-shim';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isWebServicesOpen, setIsWebServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileWebServicesOpen, setIsMobileWebServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsWebServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileWebServicesOpen(false);
  }, [location.pathname]);

  const isWebServicesPage = ['/web-services', '/monthly-plans', '/peace-of-mind'].includes(
    location.pathname
  );

  return (
    <nav className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/50 lg:sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/803dc0f7-c4b6-45cf-aa46-2e2aa3e1d0f8.png"
              alt="Timo Marketing"
              className="h-16 md:h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={
                location.pathname === '/'
                  ? 'text-white font-medium'
                  : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              Home
            </Link>
            <Link
              to="/about"
              className={
                location.pathname === '/about'
                  ? 'text-white font-medium'
                  : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              About
            </Link>
            <Link
              to="/services"
              className={
                location.pathname === '/services'
                  ? 'text-white font-medium'
                  : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              Services Overview
            </Link>
            <Link
              to="/media-marketing"
              className={
                location.pathname === '/media-marketing'
                  ? 'text-white font-medium'
                  : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              Media Marketing
            </Link>

            {/* Web Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsWebServicesOpen(!isWebServicesOpen)}
                className={`flex items-center gap-1 transition-colors ${
                  isWebServicesPage ? 'text-white font-medium' : 'text-slate-300 hover:text-white'
                }`}
              >
                Web Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isWebServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isWebServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                  <Link
                    to="/web-services"
                    onClick={() => setIsWebServicesOpen(false)}
                    className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    Web Services
                  </Link>
                  <Link
                    to="/monthly-plans"
                    onClick={() => setIsWebServicesOpen(false)}
                    className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    Monthly Website Plans
                  </Link>
                  <Link
                    to="/peace-of-mind"
                    onClick={() => setIsWebServicesOpen(false)}
                    className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    Website Peace of Mind
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/peace-of-mind"
              className={
                location.pathname === '/peace-of-mind'
                  ? 'text-white font-medium'
                  : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              Peace of Mind
            </Link>
            <Link
              to="/portfolio"
              className={
                location.pathname === '/portfolio'
                  ? 'text-white font-medium'
                  : 'text-slate-300 hover:text-white transition-colors'
              }
            >
              Portfolio
            </Link>
            <Link to="/contact">
              <button className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-800/50 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-lg ${location.pathname === '/' ? 'text-white font-medium' : 'text-slate-300'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-lg ${location.pathname === '/about' ? 'text-white font-medium' : 'text-slate-300'}`}
              >
                About
              </Link>

              {/* Mobile Services Overview Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-lg text-slate-300"
                >
                  Services Overview
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-3">
                    <Link
                      to="/services"
                      className="block text-slate-300 hover:text-white transition-colors"
                    >
                      All Services
                    </Link>
                    <Link
                      to="/media-marketing"
                      className="block text-slate-300 hover:text-white transition-colors"
                    >
                      Media Marketing
                    </Link>
                    <Link
                      to="/peace-of-mind"
                      className="block text-slate-300 hover:text-white transition-colors"
                    >
                      Peace of Mind
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Web Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileWebServicesOpen(!isMobileWebServicesOpen)}
                  className="flex items-center justify-between w-full text-lg text-slate-300"
                >
                  Web Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isMobileWebServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isMobileWebServicesOpen && (
                  <div className="mt-2 ml-4 space-y-3">
                    <Link
                      to="/web-services"
                      className="block text-slate-300 hover:text-white transition-colors"
                    >
                      Web Services
                    </Link>
                    <Link
                      to="/monthly-plans"
                      className="block text-slate-300 hover:text-white transition-colors"
                    >
                      Monthly Website Plans
                    </Link>
                    <Link
                      to="/peace-of-mind"
                      className="block text-slate-300 hover:text-white transition-colors"
                    >
                      Website Peace of Mind
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                className={`text-lg ${location.pathname === '/portfolio' ? 'text-white font-medium' : 'text-slate-300'}`}
              >
                Portfolio
              </Link>

              <Link to="/contact" className="pt-2">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
