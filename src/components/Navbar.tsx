import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string, anchor?: string) => void;
}

export default function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when ESC key pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks: { name: string; page: string; anchor?: string }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About Precision', page: 'about' },
    { name: 'Products & Range', page: 'products' },
  ];

  const handleNavClick = (page: string, anchor?: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page, anchor);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 md:px-8 py-3 sm:py-4 pointer-events-none">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Floating Optical Glass Nav Bar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full transition-all duration-500 ${
            scrolled
              ? 'glass-light border-wine-800/15 shadow-xl shadow-wine-950/10'
              : 'bg-white/50 backdrop-blur-md border border-white/60 shadow-md shadow-wine-900/5'
          }`}
        >
          {/* Official Clairlens Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center group focus:outline-none text-left py-0.5" 
            aria-label="Clairlens Home"
          >
            <img 
              src="/Business card 29 May 2025_page-0001.jpg" 
              alt="CLAIRLENS - A Unit of Clairvoyant Ophthalmics" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page && !link.anchor;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.page, link.anchor)}
                  className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors relative py-1 group ${
                    isActive ? 'text-wine-700' : 'text-wine-950/80 hover:text-wine-700'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-wine-700 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="relative group px-6 py-2.5 rounded-full overflow-hidden text-xs uppercase tracking-widest font-semibold text-white bg-wine-900 shadow-md shadow-wine-900/25 transition-all duration-300 hover:shadow-lg hover:shadow-wine-900/40 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-wine-950 via-wine-800 to-wine-900 group-hover:opacity-90 transition-opacity" />
              <span className="relative z-10">Contact Us</span>
            </button>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <button
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-wine-950 p-2 rounded-full hover:bg-wine-900/10 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>

      </div>

      {/* Responsive Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-3 max-w-[1440px] mx-auto lg:hidden rounded-3xl bg-white/95 backdrop-blur-2xl border border-wine-800/20 shadow-2xl p-6 flex flex-col gap-4 pointer-events-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-wine-100">
              <img 
                src="/Business card 29 May 2025_page-0001.jpg" 
                alt="CLAIRLENS" 
                className="h-8 w-auto object-contain"
              />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-wine-600 font-semibold uppercase tracking-wider"
              >
                Close ✕
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.page, link.anchor)}
                  className="text-left text-base font-serif font-medium text-wine-950 hover:text-wine-700 py-3 border-b border-wine-50/80 flex items-center justify-between min-h-[48px]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-wine-400" />
                </button>
              ))}
            </nav>

            <button
              onClick={() => handleNavClick('contact')}
              className="mt-4 text-center text-xs uppercase tracking-widest font-semibold py-4 bg-wine-900 text-white rounded-2xl shadow-lg shadow-wine-900/30 flex items-center justify-center min-h-[48px]"
            >
              <span>Contact Us</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

