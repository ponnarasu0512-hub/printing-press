/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BLOG_DATA } from '../../data';
import { Search, Calendar, User, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BlogPost } from '../../types';

export default function Blog() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedBlog, setExpandedBlog] = useState<BlogPost | null>(null);

  const categories = ['All', 'Branding', 'Packaging', 'Design', 'Marketing'];

  const filteredBlogs = BLOG_DATA.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16 pt-4">
      
      <AnimatePresence mode="wait">
        {!expandedBlog ? (
          <motion.div
            key="blog-list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
            {/* Header */}
            <div id="blog-header" className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full">
                Knowledge Hub
              </span>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                AxoPrint Publishing Desk
              </h1>
              <p className="text-slate-500 text-sm">
                Get insider tips on preparation vectors, bleed parameters, packaging structures, and paper grade specifications.
              </p>
            </div>

            {/* Filters and search bar */}
            <div id="blog-controls" className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between px-4 sm:px-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  id="blog-search-input"
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Articles Grid */}
            <div id="blog-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((post) => (
                  <article
                    key={post.id}
                    id={`blog-card-${post.id}`}
                    onClick={() => {
                      setExpandedBlog(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="cursor-pointer bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 rounded-[32px] overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image header */}
                      <div className="relative h-48 bg-slate-100 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <span className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm text-[9px] font-extrabold text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg">
                          {post.category}
                        </span>
                      </div>

                      {/* Content block */}
                      <div className="p-6 space-y-3 text-left">
                        <div className="flex items-center gap-3 text-[10px] text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 text-left">
                      <button className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Read Full Guide</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </article>
                ))
              ) : (
                <div className="col-span-full text-center py-16 bg-slate-50 dark:bg-slate-900/40 rounded-[32px]">
                  <p className="text-slate-400 text-xs">No publishing articles found matching your query.</p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          /* EXPANDED FULL BLOG READING VIEW */
          <motion.div
            key="blog-reading-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 text-left"
          >
            <button
              id="back-to-blogs-btn"
              onClick={() => setExpandedBlog(null)}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Knowledge Hub</span>
            </button>

            {/* Full blog markup */}
            <div className="space-y-4">
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-extrabold uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">
                {expandedBlog.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                {expandedBlog.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  {expandedBlog.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {expandedBlog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {expandedBlog.readTime}
                </span>
              </div>
            </div>

            {/* Banner image */}
            <div className="h-64 sm:h-96 rounded-3xl overflow-hidden bg-slate-100 shadow">
              <img
                src={expandedBlog.image}
                alt={expandedBlog.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Paragraph body */}
            <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-6 pt-4">
              <p className="font-semibold text-slate-800 dark:text-slate-200 text-base">
                {expandedBlog.excerpt}
              </p>
              <p>
                {expandedBlog.content}
              </p>
              <p>
                In standard offset print operations, ink density is regulated dynamically across the steel rollers. The dampening solution controls paper expand rates. In upcoming chapters of this printing manual, we will further outline vector bleed margins (usually set at 3mm or 0.125 inches outside cutting paths) to ensure absolutely clean, centering folds without any white gaps remaining at the edge after guillotine trimming.
              </p>
              <p className="p-4 border-l-4 border-blue-600 bg-slate-50 dark:bg-slate-900 rounded-r-xl font-medium text-slate-700 dark:text-slate-200">
                "Obsessive attention to color profiles (CMYK vs RGB) is what separates premium luxury stationery from cheap wholesale leaflets."
              </p>
              <p>
                For further clarification or to request physical paper grade swatch packs, reach out directly to our creative directors via the Contact Page desk.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
