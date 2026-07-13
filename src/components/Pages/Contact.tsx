/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, ShieldAlert } from 'lucide-react';
import { FAQS_DATA } from '../../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMsg('');
    }, 4000);
  };

  return (
    <div className="space-y-16 pb-16 pt-4">
      
      {/* Header */}
      <div id="contact-header" className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full">
          Get In Touch
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Connect With Our Print Desk
        </h1>
        <p className="text-slate-500 text-sm">
          Have an outstanding custom size draft? Want to tour our Heidelberg press floor? Send us coordinates or drop by.
        </p>
      </div>

      {/* Grid: Forms & Info details */}
      <section id="contact-details-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        
        {/* CONTACT INFO DETAILS (Col Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 text-slate-800 p-6 sm:p-8 rounded-[32px] border border-slate-200/60 shadow-md space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            
            <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-200/60 pb-4">
              AxoPrint Chennai Headquarters
            </h3>

            <div className="space-y-4 text-xs text-slate-600">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Physical Press Address</h4>
                  <p className="mt-1 leading-relaxed text-slate-500">
                    123, Print Street, Phase II, Guindy Industrial Estate, Chennai, Tamil Nadu – 600032
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Support & Quote Line</h4>
                  <p className="mt-1 leading-relaxed text-slate-500">
                    +91 98765 43210 (Mon-Sat, 9:30 AM - 7:00 PM)
                  </p>
                  <p className="text-[10px] text-emerald-600 font-bold mt-1">✓ Active WhatsApp Helpdesk</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Direct Design Desk Email</h4>
                  <p className="mt-1 leading-relaxed text-slate-500">
                    info@axoprint.in | sales@axoprint.in
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Working Shifts</h4>
                  <p className="mt-1 leading-relaxed text-slate-500">
                    General Office: 9:30 AM - 7:00 PM (Monday - Saturday)<br />
                    Press Operations: 24 Hour Automated Rotational lines
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/60 flex flex-wrap gap-3">
              <a
                href="tel:+919876543210"
                className="flex-1 py-2.5 bg-white hover:bg-slate-100 text-slate-700 rounded-xl text-[11px] font-bold text-center border border-slate-200"
              >
                Call Desk
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[11px] font-bold text-center shadow-lg shadow-emerald-600/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* DIGITAL VECTOR MAP COMPONENT */}
          <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 p-6 rounded-[28px] space-y-3 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Industrial Estate Locator Map</h4>
            
            {/* Elegant schematic representation instead of static mock image */}
            <div className="relative h-44 bg-slate-50 dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800 flex items-center justify-center">
              <div className="absolute inset-0 opacity-15 dark:opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
              
              <div className="relative text-center space-y-2 z-10 p-4">
                <div className="mx-auto w-3 h-3 bg-blue-600 rounded-full animate-ping absolute left-1/2 -top-1" />
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto" />
                <p className="text-[11px] font-extrabold text-slate-800 dark:text-slate-200">Guindy Industrial Phase II Block</p>
                <p className="text-[10px] text-slate-400">Guindy National Park metro corridor 500m exit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* MESSAGE SUBMISSION FORM (Col Span 7) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[32px] border border-slate-150 dark:border-slate-800/60 shadow-sm text-left">
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>Send Direct Message Desk</span>
          </h3>

          {!isSubmitted ? (
            <form onSubmit={handleSendMessage} className="space-y-5 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. anand@outlook.com"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Phone Number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 99000 88776"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Briefly describe your print query</label>
                <textarea
                  id="contact-message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="e.g. Looking for FSC Kraft bags, wholesale batch. Need spot UV letterhead samplers..."
                  className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 h-28 resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  id="contact-send-message-btn"
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Query</span>
                </button>
              </div>
            </form>
          ) : (
            /* Success response state */
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Transmitted!</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Thank you, {name}. Your dispatch request has been logged. Our commercial sales executives will correspond with itemized quotes in 2-3 hours.
              </p>
            </div>
          )}

        </div>

      </section>

      {/* Categorized FAQs in contact section */}
      <section id="contact-faq" className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">General Delivery & Prep Guidelines</h3>
          <p className="text-slate-400 text-xs mt-1">Review these details before submitting final Illustrator vectors.</p>
        </div>

        <div className="space-y-4 text-left">
          {FAQS_DATA.slice(0, 3).map((faq) => (
            <div key={faq.id} className="p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">{faq.question}</h4>
              <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
