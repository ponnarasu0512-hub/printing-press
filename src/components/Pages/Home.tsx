/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SERVICES_DATA, PRODUCTS_DATA, TESTIMONIALS_DATA, FAQS_DATA } from '../../data';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Zap,
  Palette,
  Coins,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Award,
  Factory,
  Leaf,
  Users,
  Search,
  Plus,
  Minus,
  Quote,
  Printer,
  Compass,
  Laptop
} from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  openBulkWithProduct: (productName: string) => void;
}

export default function Home({ setActiveTab, openBulkWithProduct }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1616400619175-5ebd3009007f?auto=format&fit=crop&w=1600&q=80',
      title: 'PRINT THAT BUILDS BRANDS.',
      sub: 'High-quality printing solutions for businesses, startups, events, and individuals. From business cards to large-format flex banners, we deliver premium quality with fast turnaround.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&w=1600&q=80',
      title: 'LUXURY PACKAGING SOLUTIONS.',
      sub: 'Upgrade your brand unboxing with custom mono-cartons, holographic stamps, custom rigid boxes, and environmentally safe Kraft paper carrier bags.'
    },
    {
      image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1600&q=80',
      title: 'HD LARGE FORMAT SIGNAGES.',
      sub: 'Unmissable outdoor hoardings, heavy-duty Star Flex banners, and durable aluminum standees printed with UV-stabilized weather-proof inks.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: '2,000+', label: 'Corporate Clients' },
    { value: '15,000+', label: 'Orders Completed' },
    { value: '15+', label: 'Years Experience' },
    { value: '99%', label: 'Satisfaction Score' }
  ];

  const valueCards = [
    {
      icon: ShieldCheck,
      title: 'High Quality Printing',
      desc: 'Precision color calibration (CMYK/Pantone) and flawless paper handling.',
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
    },
    {
      icon: Zap,
      title: 'Super Fast Turnaround',
      desc: 'Next-day print dispatch options for urgent business card or event banner needs.',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400'
    },
    {
      icon: Palette,
      title: 'Bespoke Custom Designs',
      desc: 'Work directly with our in-house packaging structure and graphic designers.',
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400'
    },
    {
      icon: Coins,
      title: 'Competitive Wholesale Cost',
      desc: 'Get unbeatable industrial-scale bulk pricing with detailed itemized GST bills.',
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400'
    }
  ];

  const steps = [
    { num: '01', title: 'Choose Product', desc: 'Browse our collection of products and select materials.' },
    { num: '02', title: 'Upload Design', desc: 'Drag-and-drop vector PDF files directly in our calculator portal.' },
    { num: '03', title: 'Approve Virtual Proof', desc: 'Review HD digital 3D mockups of your die-cuts and alignments.' },
    { num: '04', title: 'We Print & Deliver', desc: 'Your order is produced on Heidelberg presses and shipped premium.' }
  ];

  const industries = [
    { name: 'Restaurants', icon: '🍽️', desc: 'Custom menu cards, food wrap boxes, bill folders, and aprons.' },
    { name: 'Hospitals', icon: '🏥', desc: 'Prescription pads, ID cards, custom signage, and folder systems.' },
    { name: 'Schools & Colleges', icon: '🏫', desc: 'Prospectus books, certificates, brochures, student diaries, and ID badges.' },
    { name: 'Corporate & Tech', icon: '🏢', desc: 'Luxe onboarding kit notebooks, business cards, mugs, and water bottles.' },
    { name: 'Real Estate', icon: '🏠', desc: 'Heavy outdoor site boards, project pamphlets, blueprints, and rollups.' },
    { name: 'Retail & Fashion', icon: '🛍️', desc: 'Sturdy printed paper bags, price tags, barcode stickers, and retail cartons.' }
  ];

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="space-y-24 pb-16">
      {/* 1. HERO CAROUSEL */}
      <section id="hero-carousel-section" className="relative w-full h-[580px] overflow-hidden rounded-b-[40px] shadow-2xl border-b border-slate-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroSlides[currentSlide].image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/30" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Content */}
            <div id="hero-content" className="lg:col-span-8 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span className="text-[11px] font-bold tracking-widest text-white uppercase">
                  An ISO 9001:2015 Premium Certified Indian Press
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                {heroSlides[currentSlide].sub}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  id="hero-services-cta"
                  onClick={() => setActiveTab('services')}
                  className="px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/20 flex items-center gap-2 active:scale-95 transition-all"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="hero-quote-cta"
                  onClick={() => setActiveTab('bulk')}
                  className="px-6 py-3 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-xl flex items-center gap-2 active:scale-95 transition-all"
                >
                  <span>Get Free Quote</span>
                </button>
              </div>
            </div>

            {/* Right Column: Floating Cards Overlay */}
            <div id="hero-floating-column" className="hidden lg:col-span-4 lg:flex flex-col gap-4">
              <div className="p-5 bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-2xl text-slate-800 shadow-xl translate-x-6 hover:translate-x-4 transition-transform duration-300">
                <div className="flex gap-3">
                  <div className="p-2.5 bg-blue-600 rounded-xl text-white">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      Spot-UV Business Cards
                    </h4>
                    <p className="text-sm font-extrabold text-slate-900 mt-1">Starting from ₹199</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-2xl text-slate-800 shadow-xl -translate-x-2 hover:-translate-x-4 transition-transform duration-300">
                <div className="flex gap-3">
                  <div className="p-2.5 bg-amber-500 rounded-xl text-white">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      Custom Rigid Gift Boxes
                    </h4>
                    <p className="text-sm font-extrabold text-slate-900 mt-1">Starting from ₹1,499</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-2xl text-slate-800 shadow-xl translate-x-10 hover:translate-x-8 transition-transform duration-300">
                <div className="flex gap-3">
                  <div className="p-2.5 bg-emerald-600 rounded-xl text-white">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      Recycled Kraft Bags
                    </h4>
                    <p className="text-sm font-extrabold text-slate-900 mt-1">Starting from ₹899</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bullet Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlide === idx ? 'bg-blue-600 w-8' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS */}
      <section id="service-highlights-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Our Quality Benchmarks
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Why Hundreds of Brands Trust AxoPrint
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Combining industrial precision machines with dedicated visual checking, we handle low to ultra-bulk orders with equal structural passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                id={`value-card-${i}`}
                className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`p-3 rounded-2xl w-12 h-12 flex items-center justify-center ${card.color} mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ABOUT HIGHLIGHTS & POPULAR PRODUCTS */}
      <section id="popular-products-section" className="bg-slate-100/50 dark:bg-slate-900/30 py-16 rounded-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div className="text-left max-w-xl">
              <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                Premium Retail Products
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
                Hot Selling Solutions
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Pick from our pre-configured retail catalog designs or send your customized design dimension vectors for customized quotes.
              </p>
            </div>
            <button
              id="view-products-link-btn"
              onClick={() => setActiveTab('products')}
              className="mt-4 md:mt-0 px-4 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 group transition-colors"
            >
              <span>View Full Catalog</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS_DATA.slice(0, 4).map((product) => (
              <div
                key={product.id}
                id={`prod-highlight-${product.id}`}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-[10px] font-bold text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-[11px] mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Pricing starts at</span>
                      <span className="text-sm font-black text-slate-900 dark:text-white">
                        ₹{product.price}
                      </span>
                    </div>
                    <button
                      id={`quote-btn-${product.id}`}
                      onClick={() => openBulkWithProduct(product.name)}
                      className="px-3 py-2 text-[11px] font-bold text-white bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-xl transition-all"
                    >
                      Instant Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATS COUNTER PANEL */}
      <section id="stats-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-slate-50 border border-slate-200/50 p-8 sm:p-12 rounded-[32px] text-slate-800 shadow-md text-center relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} id={`stat-col-${i}`}>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 block tracking-tight">
                  {stat.value}
                </span>
                <span className="text-slate-500 text-xs sm:text-sm font-bold mt-1.5 block tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRINTING PROCESS TIMELINE */}
      <section id="printing-process-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Simplified Workflows
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Our High-Precision Simple Process
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Getting your custom designs from blueprints to your doorstep has never been easier. We manage file verification instantly.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-slate-200 dark:bg-slate-800 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} id={`process-step-${i}`} className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-extrabold text-lg shadow-md hover:scale-105 transition-transform duration-300">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs px-4 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section id="industries-serve-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Sectors Covered
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Custom Solutions For Every Industry
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Every sector has unique material specifications. We provide customized configurations suited for commercial, clinical, or academic demands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              id={`industry-${i}`}
              className="p-6 bg-slate-50 dark:bg-slate-900/60 rounded-[24px] hover:bg-white dark:hover:bg-slate-900 border border-transparent dark:border-slate-800/40 hover:border-slate-200/50 dark:hover:border-slate-800 hover:shadow-lg transition-all duration-300 flex gap-4"
            >
              <span className="text-3xl shrink-0 p-2 bg-white dark:bg-slate-800 rounded-2xl shadow-sm self-start">
                {ind.icon}
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {ind.name}
                </h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. RECENT CLIENT TESTIMONIALS */}
      <section id="testimonials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50/50 dark:bg-slate-900/40 py-16 rounded-[40px]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Client Success
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Feedback From Active Brands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="p-6 bg-white dark:bg-slate-950 rounded-[28px] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-500/20 mb-3" />
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-slate-900">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    {t.role}, {t.companyName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SEARCHABLE FAQ SECTION */}
      <section id="faq-section" className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            FAQ Search & Answers
          </h2>
          <div className="relative max-w-md mx-auto mt-6">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              id="faq-search-bar"
              type="text"
              placeholder="Search print guidelines..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/60 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="flex items-center justify-between w-full px-6 py-4 text-left font-bold text-slate-900 dark:text-white text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 ml-4" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-400 shrink-0 ml-4" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-slate-500 text-xs leading-relaxed border-t border-slate-100 dark:border-slate-900">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <p className="text-center text-slate-400 text-xs py-8">
              No matching questions found. Try typing 'time', 'shipping' or 'vector'.
            </p>
          )}
        </div>
      </section>

      {/* 9. PREMIUM CALL TO ACTION SECTION */}
      <section id="cta-block-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-16 rounded-[40px] text-center text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              Ready to print something amazing?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Let's craft your supreme brand materials together.
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              Get corporate discount templates, paper booklet samplers, and custom structured mockups free of cost.
            </p>
            <div className="pt-2">
              <button
                id="cta-bottom-quote-btn"
                onClick={() => setActiveTab('bulk')}
                className="px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 text-xs font-extrabold rounded-2xl shadow-xl shadow-blue-900/10 active:scale-95 transition-all"
              >
                Get Free Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
