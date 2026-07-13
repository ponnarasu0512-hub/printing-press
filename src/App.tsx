/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import Portfolio from './components/Pages/Portfolio';
import Pricing from './components/Pages/Pricing';
import BulkOrder from './components/Pages/BulkOrder';
import Blog from './components/Pages/Blog';
import Careers from './components/Pages/Careers';
import Contact from './components/Pages/Contact';
import Portal from './components/Pages/Portal';

// Data and types
import { MOCK_ORDERS } from './data';
import { PrintOrder } from './types';

// Icons & animations
import { ArrowUp, Loader2, Phone, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [ordersList, setOrdersList] = useState<PrintOrder[]>(MOCK_ORDERS);
  const [preselectedProduct, setPreselectedProduct] = useState<string>('');
  
  // Loading & UI helpers
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Auto-playing simulation for loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Listen for scroll thresholds (for back-to-top buttons)
  useEffect(() => {
    const handleScrollThresh = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScrollThresh);
    return () => window.removeEventListener('scroll', handleScrollThresh);
  }, []);

  // Dark mode trigger class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Deep linking helper to pre-fill the calculator and switch tabs
  const openBulkWithProduct = (productName: string) => {
    setPreselectedProduct(productName);
    setActiveTab('bulk');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State modifier for adding orders
  const addMockOrder = (order: PrintOrder) => {
    setOrdersList((prev) => [order, ...prev]);
  };

  // State modifier for updating statuses (Admin Control)
  const updateOrderStatus = (orderId: string, status: PrintOrder['status']) => {
    setOrdersList((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
  };

  // Tab router
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} openBulkWithProduct={openBulkWithProduct} />;
      case 'about':
        return <About />;
      case 'services':
        return (
          <Services
            setActiveTab={setActiveTab}
            openBulkWithProduct={openBulkWithProduct}
            searchQuery={searchQuery}
          />
        );
      case 'products':
        return (
          <Products
            setActiveTab={setActiveTab}
            openBulkWithProduct={openBulkWithProduct}
            searchQuery={searchQuery}
          />
        );
      case 'portfolio':
        return <Portfolio />;
      case 'pricing':
        return <Pricing setActiveTab={setActiveTab} openBulkWithProduct={openBulkWithProduct} />;
      case 'bulk':
        return (
          <BulkOrder
            preselectedProduct={preselectedProduct}
            addMockOrder={addMockOrder}
            setActiveTab={setActiveTab}
          />
        );
      case 'blog':
        return <Blog />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      case 'portal':
        return <Portal ordersList={ordersList} updateOrderStatus={updateOrderStatus} />;
      default:
        return <Home setActiveTab={setActiveTab} openBulkWithProduct={openBulkWithProduct} />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800 font-sans selection:bg-blue-600/10 selection:text-blue-600 transition-colors duration-300">
      
      {/* 1. INITIAL PREMIUM SPLASH LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            id="splash-loading-screen"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-50 flex flex-col items-center justify-center space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full scale-125 animate-pulse" />
              <div className="p-4 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white rounded-2xl relative shadow-xl shadow-blue-500/10">
                <Printer className="w-10 h-10 animate-bounce" />
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block">
                Axo<span className="text-blue-600">Print</span>
              </span>
              <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase animate-pulse">
                Calibrating Heidelberg Press Matrices...
              </p>
            </div>
            
            <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. PERSISTENT HEADER NAVIGATION */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openQuoteForService={openBulkWithProduct}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 3. MAIN ANIMATED CONTENT STAGE */}
      <main id="main-content-stage" className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. PERSISTENT FOOTER */}
      <Footer setActiveTab={setActiveTab} />

      {/* 5. FLOATING COMPACT AUXILIARY BUTTONS */}
      <div id="floating-widgets-group" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll To Top widget */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              id="scroll-to-top-floating"
              onClick={scrollToTop}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="p-3 bg-white text-slate-700 border border-slate-200/60 rounded-full shadow-lg hover:bg-blue-50 transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp & Call widget combined or single */}
        <a
          id="whatsapp-floating-trigger"
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all cursor-pointer flex items-center justify-center hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}
