/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA } from '../../data';
import { Search, SlidersHorizontal, ArrowUpDown, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ProductsProps {
  setActiveTab: (tab: string) => void;
  openBulkWithProduct: (productName: string) => void;
  searchQuery: string;
}

export default function Products({ setActiveTab, openBulkWithProduct, searchQuery }: ProductsProps) {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = useMemo(() => {
    const list = new Set(PRODUCTS_DATA.map((p) => p.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter & Sort logic
  const processedProducts = useMemo(() => {
    let result = PRODUCTS_DATA.filter((p) => {
      const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
      const matchesPrice = p.price <= maxPrice;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [categoryFilter, maxPrice, sortBy, searchQuery]);

  // Pagination logic
  const totalPages = Math.max(1, Math.ceil(processedProducts.length / itemsPerPage));
  const paginatedProducts = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return processedProducts.slice(startIdx, startIdx + itemsPerPage);
  }, [processedProducts, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setCategoryFilter(cat);
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-10 pb-16 pt-4">
      {/* Page Header */}
      <div id="products-header" className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full">
          Standard Retail Storefront
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Configure Your Print Templates
        </h1>
        <p className="text-slate-500 text-sm">
          Browse our standard paper templates, select quantities, verify unit specifications, and run bulk cost modifiers instantly.
        </p>
      </div>

      {/* Main E-commerce Layout */}
      <div id="products-content-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SIDEBAR FILTERS (Col Span 3) */}
        <aside id="products-sidebar" className="lg:col-span-3 space-y-6 bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-100 dark:border-slate-800/60 shadow-sm h-fit">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <SlidersHorizontal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Filters & Criteria</h3>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Product Categories</h4>
            <div className="flex flex-col gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl text-left transition-all ${
                    categoryFilter === cat
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-5">
            <div className="flex justify-between items-center text-xs">
              <h4 className="font-bold text-slate-400 uppercase tracking-wider">Max Starts Price</h4>
              <span className="font-black text-blue-600 dark:text-blue-400">₹{maxPrice}</span>
            </div>
            <input
              id="price-range-slider"
              type="range"
              min="100"
              max="3000"
              step="100"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>₹100</span>
              <span>₹3,000</span>
            </div>
          </div>

          {/* Sorter Dropdown */}
          <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-5">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sort Catalog</h4>
            <div className="relative">
              <select
                id="product-sort-select"
                value={sortBy}
                onChange={handleSortChange}
                className="w-full px-3 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="rating">Popularity (Rating)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ArrowUpDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCTS GRID (Col Span 9) */}
        <section id="products-catalog" className="lg:col-span-9 space-y-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((p) => (
                <div
                  key={p.id}
                  id={`product-item-${p.id}`}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 rounded-[28px] overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Image block */}
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm text-[9px] font-extrabold text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full shadow-sm">
                        {p.category}
                      </div>
                      <div className="absolute top-3 right-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-bold text-amber-500">
                        <Star className="w-3 h-3 fill-amber-500" />
                        <span>{p.rating}</span>
                      </div>
                    </div>

                    {/* Meta details */}
                    <div className="p-5 space-y-3">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                        {p.name}
                      </h3>
                      <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
                        {p.description}
                      </p>
                      
                      {/* Technical features list */}
                      <ul className="space-y-1 pt-1.5">
                        {p.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-[10px] text-slate-500">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Foot Quote Action */}
                  <div className="p-5 pt-0">
                    <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] text-slate-400 block tracking-wide uppercase">From (Wholesale)</span>
                        <span className="text-sm font-black text-slate-900 dark:text-white">₹{p.price}</span>
                      </div>
                      <button
                        id={`quick-quote-product-${p.id}`}
                        onClick={() => openBulkWithProduct(p.name)}
                        className="px-4 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-all"
                      >
                        Quick Quote
                      </button>
                    </div>
                  </div>

                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-slate-50 dark:bg-slate-900/40 rounded-[32px] border border-slate-100 dark:border-slate-800">
                <p className="text-slate-400 text-xs">No print templates match your selected criteria. Try easing the price slider.</p>
              </div>
            )}
          </div>

          {/* PAGINATION PANEL */}
          {totalPages > 1 && (
            <div id="products-pagination" className="flex justify-center items-center gap-2 pt-4">
              <button
                id="pagination-prev-btn"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                Page {currentPage} of {totalPages}
              </span>
              <button
                id="pagination-next-btn"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </section>

      </div>
    </div>
  );
}
