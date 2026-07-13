/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data';
import { Search, ChevronRight, CheckCircle2, Sliders, ArrowRight } from 'lucide-react';

interface ServicesProps {
  setActiveTab: (tab: string) => void;
  openBulkWithProduct: (productName: string) => void;
  searchQuery: string;
}

export default function Services({ setActiveTab, openBulkWithProduct, searchQuery }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Business', 'Marketing', 'Large Format', 'Packaging', 'Custom Gifts'];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16 pt-4">
      
      {/* Page Header */}
      <div id="services-header" className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full">
          Production Services Catalog
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Industrial Grade Print Solutions
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          From textured business cards to heavy-duty hoardings, we print everything using German Heidelberg offset lines and HP Indigo digital presses. Select any service to run customized quotes instantly.
        </p>
      </div>

      {/* Category Navigation Pills */}
      <div id="services-category-bar" className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-[32px] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-[10px] font-extrabold tracking-widest uppercase text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Block */}
              <div className="p-6 pt-0">
                <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block tracking-wide uppercase">Wholesale starts at</span>
                    <span className="text-base font-black text-slate-900 dark:text-white">
                      ₹{service.pricingStartsAt}
                    </span>
                  </div>
                  
                  <button
                    id={`service-quote-btn-${service.id}`}
                    onClick={() => {
                      openBulkWithProduct(service.name);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-extrabold rounded-xl shadow-md shadow-blue-500/10 active:scale-95 transition-all"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16 bg-slate-50 dark:bg-slate-900/40 rounded-[32px] border border-slate-100 dark:border-slate-800">
            <p className="text-slate-400 text-sm">No services matched your selections. Try general keywords or click another filter.</p>
          </div>
        )}
      </div>

    </div>
  );
}
