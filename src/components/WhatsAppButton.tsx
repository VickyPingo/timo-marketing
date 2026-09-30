"use client";

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '27690691299';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-green-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" fill="white" />
          
          {/* Ping animation */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
      </div>
    </a>
  );
}
