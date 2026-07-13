/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Printer, Send, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  const handleQuickLink = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Company Profile */}
          <div id="footer-about-col" className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white rounded-lg">
                <Printer className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Axo<span className="text-blue-600">Print</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-6">
              AxoPrint is India’s premier boutique printing press delivering high-fidelity commercial, offset, digital, and custom packaging products. From business cards to monumental hoardings, we blend precise German calibration with local artisanal devotion.
            </p>
            
            {/* Newsletter */}
            <div id="footer-newsletter">
              <h4 className="text-xs font-bold tracking-widest text-slate-800 uppercase mb-3">
                Subscribe to Print Trends & Offers
              </h4>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  id="newsletter-email-input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 text-xs rounded-xl bg-white text-slate-800 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-blue-500 w-full shadow-sm"
                  required
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-blue-600/10 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {isSubmitted && (
                <p className="text-emerald-600 text-xs mt-2 flex items-center gap-1.5 animate-fadeIn">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Success! Check your inbox for special catalog vouchers.</span>
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div id="footer-quicklinks-col">
            <h4 className="text-xs font-bold tracking-widest text-slate-800 uppercase mb-4">
              Corporate Directory
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {['home', 'about', 'services', 'products', 'portfolio'].map((tab) => (
                <li key={tab}>
                  <button
                    id={`footer-link-${tab}`}
                    onClick={() => handleQuickLink(tab)}
                    className="hover:text-blue-600 transition-colors cursor-pointer text-left capitalize"
                  >
                    {tab === 'about' ? 'About Us' : tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Print Products */}
          <div id="footer-products-col">
            <h4 className="text-xs font-bold tracking-widest text-slate-800 uppercase mb-4">
              Major Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <button onClick={() => handleQuickLink('services')} className="hover:text-blue-600 text-left transition-colors">
                  Business Cards
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink('services')} className="hover:text-blue-600 text-left transition-colors">
                  Flex Printing
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink('services')} className="hover:text-blue-600 text-left transition-colors">
                  Product Packaging
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink('services')} className="hover:text-blue-600 text-left transition-colors">
                  Bespoke Invites
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink('services')} className="hover:text-blue-600 text-left transition-colors">
                  Labels & Stickers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div id="footer-contact-col">
            <h4 className="text-xs font-bold tracking-widest text-slate-800 uppercase mb-4">
              Contact Desk
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span>
                  123, Print Street, Guindy Industrial Estate, Chennai, Tamil Nadu – 600032
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="hover:text-blue-600 transition-colors">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="hover:text-blue-600 transition-colors">
                  info@axoprint.in
                </span>
              </li>
              <li className="pt-2 text-xs text-slate-400 border-t border-slate-200">
                <span>Working: Mon-Sat, 9:30 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider with Indian tax certification info */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div id="footer-disclaimer" className="flex items-center gap-2 text-slate-400">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-600/60" />
            <span>GSTIN: 33AAICA2026M1Z2 | ISO 9001:2015 Certified High Precision Press.</span>
          </div>
          <div id="footer-copyright" className="text-slate-400">
            &copy; {new Date().getFullYear()} AxoPrint Press Ltd. All Rights Reserved. Inspired by international printing benchmarks.
          </div>
        </div>
      </div>
    </footer>
  );
}
