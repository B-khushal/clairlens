import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LensIndex from './components/LensIndex';
import Coatings from './components/Coatings';
import Technology from './components/Technology';
import Manufacturing from './components/Manufacturing';
import Features from './components/Features';
import Cta from './components/Cta';
import Footer from './components/Footer';

import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [navigationData, setNavigationData] = useState<any>(null);

  // Sync hash routing on load, popstate, and hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash === 'about' || hash === 'products' || hash === 'contact') {
        setCurrentPage(hash);
      } else if (hash) {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('popstate', handleHash);
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('popstate', handleHash);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  // Dynamic Document Title for SEO & Browser History
  useEffect(() => {
    switch (currentPage) {
      case 'about':
        document.title = 'About Clairlens | Swiss-Level Precision Engineering';
        break;
      case 'products':
        document.title = 'Lens Range & Products Catalog | Clairlens';
        break;
      case 'contact':
        document.title = 'Contact Us | Clairlens Optical Manufacturing';
        break;
      default:
        document.title = 'Clairlens | Precision Optical Manufacturing';
        break;
    }
  }, [currentPage]);

  const handleNavigate = (page: string, anchor?: string, data?: any) => {
    setCurrentPage(page);
    setNavigationData(data || null);
    
    if (page === 'home' && anchor) {
      window.location.hash = anchor;
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.location.hash = page === 'home' ? '' : page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory font-sans text-gray-900 overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="page-home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onNavigate={handleNavigate} />
              <About onNavigate={handleNavigate} />
              <LensIndex onNavigate={handleNavigate} />
              <Coatings onNavigate={handleNavigate} />
              <Technology />
              <Manufacturing />
              <Features />
              <Cta onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="page-about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'products' && (
            <motion.div
              key="page-products"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProductsPage onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="page-contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage onNavigate={handleNavigate} initialData={navigationData} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}


