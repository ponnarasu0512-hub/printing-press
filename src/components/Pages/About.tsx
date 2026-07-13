/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TEAM_DATA } from '../../data';
import { ShieldCheck, Target, Heart, Eye, Award, Factory, ClipboardCheck, Trophy, Leaf } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'To empower businesses of all sizes to manifest their branding aspirations through pristine, error-free printing, rigid packaging, and uncompromised color consistency.',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      desc: 'To establish AxoPrint as the ultimate sustainable printing authority in India, utilizing 100% solar-assisted industrial machinery and eco-friendly soy-based inks.',
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
    },
    {
      icon: Heart,
      title: 'Our Core Values',
      desc: 'Integrity in pricing, meticulous visual checks, zero carbon waste packaging, and honoring delivery timers with absolute Indian hospitality.',
      color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400'
    }
  ];

  const timeline = [
    { year: '2011', title: 'The Blueprint', desc: 'Aditya Rajan installs our first single-color offset sheet press in Chennai with just two operators.' },
    { year: '2016', title: 'Digital Transformation', desc: 'Partnered with HP Indigo to introduce ultra-high-definition digital visiting card printing.' },
    { year: '2021', title: 'Sustainable Scaling', desc: 'Erected a 20,000 sq ft zero-carbon packaging plant powered 100% by solar roofing arrays.' },
    { year: '2026', title: 'National Hub', desc: 'Serving over 2,000 corporate clients, schools, and boutiques across India with automated shipping.' }
  ];

  const machinery = [
    {
      name: 'Heidelberg Speedmaster XL 106',
      type: 'Industrial Offset Press (Germany)',
      speed: '18,000 sheets/hour',
      purpose: 'High-volume leaflets, brochures, packaging sheets'
    },
    {
      name: 'HP Indigo 12K00 Digital Press',
      type: 'Liquid Electrophotographic Press (USA)',
      speed: '4,600 B2 color sheets/hour',
      purpose: 'Ultra HD spot-UV business cards, small run catalog boxes'
    },
    {
      name: 'Kongsberg XP Auto Table',
      type: 'CAD precision die-cutter (Norway)',
      speed: '100m/minute precision CAD vectors',
      purpose: 'Perfect die-lines, box prototypes, structural packaging'
    }
  ];

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. STORY INTRO */}
      <section id="about-intro-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              The AxoPrint Story
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Indian Artisanal Devotion Meets German Machinery.
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              Founded on the belief that a brand's tangible materials are its ultimate offline legacy, AxoPrint began in a modest Chennai workshop with a single manual hand-press. Over fifteen years, we grew by paying obsessive attention to what other commercial presses ignored: paper weight integrity, custom-mixed soy inks, and precise alignment die-cuts.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Today, AxoPrint is the premium printing press of choice for India's high-growth startups, multi-city restaurant chains, leading universities, and global corporate giants. We manage all production under one massive solar-assisted roof, keeping wholesale prices highly competitive.
            </p>
          </div>
          <div className="relative h-96 rounded-[32px] overflow-hidden bg-slate-100 shadow-xl border border-slate-200/40">
            <img
              src="https://images.unsplash.com/photo-1616400619175-5ebd3009007f?auto=format&fit=crop&w=800&q=80"
              alt="AxoPrint high precision press factory floor"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold block">Production Floor</span>
              <span className="text-lg font-bold">120+ Micro-tests performed daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES / MISSION VISION */}
      <section id="about-values-section" className="bg-slate-100/50 dark:bg-slate-900/40 py-16 rounded-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="p-8 bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800/60 shadow-sm"
                >
                  <div className={`p-3 rounded-2xl w-12 h-12 flex items-center justify-center ${val.color} mb-6`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {val.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HISTORIC TIMELINE */}
      <section id="about-timeline-section" className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Our Legacy
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            The Timeline of Growth
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-12">
          {timeline.map((item, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 shadow" />
              <div className="space-y-1">
                <span className="text-xs font-black text-blue-600 dark:text-blue-400 block tracking-wider">
                  {item.year}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MEET TEAM */}
      <section id="about-team-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Our Visionaries
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Meet Our Creative Team
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            A cohesive collection of heavy industry managers, structural CAD engineers, and award-winning brand visualizers.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_DATA.map((member, i) => (
            <div
              key={i}
              id={`team-member-${i}`}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 rounded-[28px] overflow-hidden hover:shadow-lg transition-all text-center"
            >
              <div className="h-64 overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1.5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INDUSTRIAL MACHINES */}
      <section id="about-machinery-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 border border-slate-200/50 text-slate-850 p-8 sm:p-16 rounded-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-4 text-left">
            <span className="text-xs font-extrabold text-blue-600 tracking-widest uppercase">
              Our Fleet Strength
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              German Heidelberg & Precision CAD
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed">
              We own and maintain India's most precise industrial printing fleets. Color consistency is checked automatically by optical cameras, adjusting ink nozzles mid-run.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machinery.map((mach, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-[24px]"
              >
                <div className="p-2.5 bg-blue-600 text-white rounded-xl w-10 h-10 flex items-center justify-center mb-4">
                  <Factory className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {mach.name}
                </h3>
                <p className="text-blue-600 text-[10px] uppercase font-semibold mt-1">
                  {mach.type}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Speed:</span>
                    <span className="text-slate-700 font-bold">{mach.speed}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Task:</span>
                    <span className="text-slate-600">{mach.purpose}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ACHIEVEMENTS & CERTIFICATES */}
      <section id="about-certificates-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Standards Certified
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Honors, Accreditation, and Carbon Neutral Pledges
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              AxoPrint is fully compliant with modern environmental directives. We hold active ISO 9001:2015 certifications for Quality Management and ISO 14001:2015 for Environmental Management.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">ISO 9001:2015</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Strict quality control on paper boards & coatings.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">FSC Recycled Stock</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">All papers sourced from audited regenerative forests.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-xl">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Best Print Award 2024</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">National honor for rigid box structural design.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 rounded-xl">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Pantone Calibrated</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Pantone Match calibration with less than 1% variance.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800/60 p-8 rounded-[32px] text-center space-y-4 border border-slate-200/50 dark:border-slate-700/50">
            <div className="mx-auto w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-extrabold shadow-lg">
              ₹
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Proud to Support Atmanirbhar Bharat
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto">
              Our papers are mostly processed inside Indian mills in Tamil Nadu and Gujarat. We create reliable local livelihoods for over 80+ print operators and structure engineers.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
