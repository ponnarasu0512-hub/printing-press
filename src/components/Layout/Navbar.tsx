/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Printer, Sun, Moon, Search, Quote, User, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  openQuoteForService: (serviceName: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  openQuoteForService,
  searchQuery,
  setSearchQuery,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About Us' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'bulk', label: 'Bulk Order' },
    { id: 'blog', label: 'Blog' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
    { id: 'portal', label: 'Portal', icon: User }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-md border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand Logo */}
          <div
            id="brand-logo"
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="p-2 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white rounded-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Axo<span className="text-blue-600 dark:text-blue-400">Print</span>
              </span>
              <p className="text-[10px] font-medium tracking-widest text-slate-400 dark:text-slate-500 uppercase -mt-1">
                Beyond Print
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 text-[13px] font-semibold rounded-lg tracking-wide transition-all duration-200 ${
                    activeTab === item.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-900/50'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    {item.label}
                  </span>
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utility Buttons */}
          <div id="navbar-utilities" className="hidden sm:flex items-center gap-2">
            {/* Search toggler */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {showSearch && (
                  <motion.input
                    id="search-input-field"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    type="text"
                    placeholder="Search solution..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mr-2 px-3 py-1 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                )}
              </AnimatePresence>
              <button
                id="search-toggle-btn"
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-all"
                aria-label="Search site"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Quote CTA */}
            <button
              id="header-quote-cta"
              onClick={() => handleNavClick('bulk')}
              className="ml-2 flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-md shadow-blue-500/20 active:scale-95 transition-all duration-150"
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Toggles (Lesser width) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="hamburger-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {/* Search bar inside mobile menu */}
              <div className="py-2">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    id="search-input-mobile"
                    type="text"
                    placeholder="Search print solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold rounded-xl text-left transition-all ${
                      activeTab === item.id
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <button
                  id="mobile-nav-quote-cta"
                  onClick={() => handleNavClick('bulk')}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/20"
                >
                  <Quote className="w-4 h-4" />
                  <span>Get Free Quote</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
