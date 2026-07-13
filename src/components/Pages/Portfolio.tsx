/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '../../data';
import { X, ZoomIn, Sliders, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Before/After comparison coordinates
  const [sliderPosition, setSliderPosition] = useState(50);
  const beforeAfterContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Restaurant', 'Corporate', 'Packaging', 'Signage', 'Wedding'];

  const filteredProjects = PORTFOLIO_DATA.filter((p) => {
    return selectedCategory === 'All' || p.category === selectedCategory;
  });

  const handleSliderMove = (clientX: number) => {
    if (!beforeAfterContainerRef.current) return;
    const rect = beforeAfterContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button dragged
      handleSliderMove(e.clientX);
    }
  };

  const activeProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  return (
    <div className="space-y-16 pb-16 pt-4">
      
      {/* Header */}
      <div id="portfolio-header" className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full">
          Client Showcase
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Recent Completed Works
        </h1>
        <p className="text-slate-500 text-sm">
          Explore real-world client prints produced in our Chennai factory. Review material choices and structural packaging alignments.
        </p>
      </div>

      {/* BEFORE / AFTER HIGHLIGHT SLIDER */}
      <section id="before-after-highlight" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[10px] font-extrabold rounded-full tracking-wider uppercase border border-amber-200/40">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Comparison: Drag Slider Left/Right</span>
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">
            Vector Draft vs. Finished High-End Print
          </h3>
          <p className="text-slate-400 text-xs mt-1">
            See how the digital Illustrator vectors are translated perfectly into textured metallic boards with spot varnishing.
          </p>
        </div>

        {/* Double Image Wrapper */}
        <div
          ref={beforeAfterContainerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-[340px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-slate-200/60 dark:border-slate-800 shadow-md"
        >
          {/* Before image (Digital Vector Draft) */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
              alt="Digital vector mock drafting sheet"
              className="w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-bold rounded-lg uppercase tracking-widest">
              Digital Blueprint Draft
            </div>
          </div>

          {/* After image (Finished printed catalog product overlay) */}
          <div
            className="absolute inset-y-0 right-0 left-0 overflow-hidden"
            style={{ width: `${100 - sliderPosition}%`, left: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
              alt="Finished physical luxury textured printed menu cards"
              className="absolute top-0 right-0 h-full object-cover pointer-events-none"
              style={{ width: '100%', maxWidth: 'none' }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-bold rounded-lg uppercase tracking-widest">
              Physical High-End Print
            </div>
          </div>

          {/* Silder partition bar */}
          <div
            className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white border-2 border-white flex items-center justify-center font-extrabold text-sm shadow-md">
              ↔
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <div id="portfolio-categories" className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              selectedCategory === cat
                ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Portfolio */}
      <section id="portfolio-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            id={`portfolio-item-${project.id}`}
            onClick={() => setLightboxIndex(idx)}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 rounded-[32px] overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="relative h-60 overflow-hidden bg-slate-100">
              <img
                src={project.imageAfter}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <div className="p-3 bg-white/25 backdrop-blur-md text-white rounded-2xl scale-75 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
              <span className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-[9px] font-extrabold text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full">
                {project.category}
              </span>
            </div>
            <div className="p-5 space-y-1.5 text-left">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Client: {project.client}</p>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Overlay (Modal) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            id="portfolio-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden max-w-3xl w-full border border-slate-100 dark:border-slate-800 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                id="close-lightbox-btn"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Visual */}
                <div className="h-64 md:h-full min-h-[300px] bg-slate-100 relative">
                  <img
                    src={activeProject.imageAfter}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-4 left-4 bg-slate-900/85 backdrop-blur-sm text-white text-[9px] font-bold px-3 py-1 rounded-lg">
                    {activeProject.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 space-y-4 text-left">
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-extrabold uppercase tracking-widest block">
                    Project File Summary
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {activeProject.title}
                  </h3>
                  
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 space-y-1">
                    <p><span className="font-bold text-slate-700 dark:text-slate-300">Client:</span> {activeProject.client}</p>
                    <p><span className="font-bold text-slate-700 dark:text-slate-300">Scope:</span> Custom commercial bulk execution</p>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed pt-2">
                    {activeProject.description}
                  </p>

                  <div className="pt-4">
                    <button
                      id="lightbox-quote-btn"
                      onClick={() => {
                        setLightboxIndex(null);
                        // Open deep-link services or custom quote
                      }}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/10 active:scale-95 transition-all"
                    >
                      Request Similar Materials Setup
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
