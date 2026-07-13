/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, X, ShieldCheck, Zap, Compass, Star } from 'lucide-react';

interface PricingProps {
  setActiveTab: (tab: string) => void;
  openBulkWithProduct: (productName: string) => void;
}

export default function Pricing({ setActiveTab, openBulkWithProduct }: PricingProps) {
  const tiers = [
    {
      name: 'Business Starter',
      price: '1,499',
      sub: 'Ideal for early-stage startups and small stores',
      features: [
        { name: '100 x Premium Business Cards (300 GSM)', included: true },
        { name: '200 x Multi-color Flyers (130 GSM Gloss)', included: true },
        { name: 'Saddle Stitch Brochures (Up to 12 pages)', included: false },
        { name: 'Heavy Star Flex Banner (6ft x 3ft)', included: false },
        { name: 'Logo design drafting guidance', included: true },
        { name: 'Standard Delivery (3-5 business days)', included: true },
        { name: 'Live Telephone Support', included: false },
        { name: 'Exclusive of 18% GST bills', included: true }
      ],
      tag: 'Startup Pack',
      color: 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900',
      btnStyle: 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800'
    },
    {
      name: 'Corporate Professional',
      price: '8,499',
      sub: 'Best for established businesses & corporate branches',
      features: [
        { name: '500 x Spot-UV Business Cards (350 GSM)', included: true },
        { name: '1,000 x Premium Flyers (170 GSM Art)', included: true },
        { name: '200 x Tri-fold Catalog Brochures', included: true },
        { name: '2 x Heavy Star Flex Banners with framing', included: true },
        { name: 'Complete Logo & Stationery design setup', included: true },
        { name: 'Priority Express Delivery (24-48 hours)', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Itemized GST Invoices', included: true }
      ],
      tag: 'Most Popular',
      featured: true,
      color: 'border-blue-500 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-950 dark:to-slate-900 shadow-xl relative scale-105',
      btnStyle: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20'
    },
    {
      name: 'Enterprise Multi-Store',
      price: '24,999',
      sub: 'Wholesale printing for schools, clinics, and franchises',
      features: [
        { name: '2,000 x Velvet Laminated Business Cards', included: true },
        { name: '5,000 x Custom Multi-size Flyers', included: true },
        { name: '1,000 x Perfect-bound Annual Catalogues', included: true },
        { name: '5 x Large Outdoor Star Flex Backdrops', included: true },
        { name: 'Unlimited Graphic Design edits', included: true },
        { name: 'Same-day production & regional courier dispatch', included: true },
        { name: '24/7 Priority Emergency desk hotline', included: true },
        { name: 'Full compliance documentation & tax clearance', included: true }
      ],
      tag: 'Maximum Value',
      color: 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900',
      btnStyle: 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800'
    }
  ];

  const handleSelectPack = (tierName: string) => {
    openBulkWithProduct(tierName);
  };

  return (
    <div className="space-y-16 pb-16 pt-4">
      {/* Header */}
      <div id="pricing-header" className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full">
          Wholesale Bundles
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Itemized Corporate Packages
        </h1>
        <p className="text-slate-500 text-sm">
          Get fully transparent pricing matching local Indian print thresholds. No hidden margins or handling adjustments.
        </p>
      </div>

      {/* Cards Grid */}
      <section id="pricing-tiers-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            id={`pricing-tier-${idx}`}
            className={`p-8 rounded-[32px] border-2 flex flex-col justify-between h-full transition-all hover:shadow-lg ${tier.color}`}
          >
            {/* Top Area */}
            <div>
              {tier.featured && (
                <span className="absolute top-4 right-6 bg-blue-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                  Best Value
                </span>
              )}
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-extrabold uppercase tracking-widest">
                {tier.tag}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                {tier.name}
              </h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                {tier.sub}
              </p>

              {/* Price */}
              <div className="my-6">
                <span className="text-3xl font-black text-slate-900 dark:text-white">₹{tier.price}</span>
                <span className="text-slate-400 text-xs"> / package limit</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-100 dark:bg-slate-800 my-4" />

              {/* Features List */}
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    {feat.included ? (
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    )}
                    <span className={feat.included ? '' : 'text-slate-400 line-through'}>
                      {itemLayout(feat.name)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA button */}
            <div className="pt-8">
              <button
                id={`pricing-select-${idx}`}
                onClick={() => handleSelectPack(tier.name)}
                className={`w-full py-3 rounded-xl font-bold text-xs transition-all active:scale-95 ${tier.btnStyle}`}
              >
                Select {tier.name} Setup
              </button>
            </div>

          </div>
        ))}
      </section>

      {/* Corporate trust banner */}
      <section id="pricing-trust-banner" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-3 bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-2xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Corporate Wholesaling & Custom Enquiries</h4>
            <p className="text-slate-500 text-xs mt-1">
              Need custom print dimensions or heavy rigid structures that aren't listed in standard packs? Go straight to our live estimator and input custom dimensions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

// Utility to emphasize quantities in listings
function itemLayout(text: string) {
  const parts = text.split('x');
  if (parts.length > 1) {
    return (
      <span>
        <strong className="text-slate-900 dark:text-white font-extrabold">{parts[0]}x</strong>
        {parts.slice(1).join('x')}
      </span>
    );
  }
  return text;
}
