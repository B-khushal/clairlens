import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

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

  const navLinks = [
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
          {/* Logo with Shimmer */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none text-left" 
            aria-label="Clairlens Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-wine-800/30 bg-gradient-to-br from-wine-900/10 to-white/60 p-0.5 flex items-center justify-center overflow-hidden shadow-inner">
              <div className="w-full h-full rounded-full border border-wine-800/60 group-hover:rotate-180 transition-transform duration-700 flex items-center justify-center">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-wine-800 group-hover:scale-125 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-wine-950 flex items-center gap-1">
                Clairlens
                <span className="w-1.5 h-1.5 rounded-full bg-wine-700" />
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-wine-800/70 -mt-1 hidden xs:block">
                Precision Optics
              </span>
            </div>
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
              <span className="relative z-10 flex items-center gap-2">
                <span>Contact Us</span>
                <Sparkles className="w-3.5 h-3.5 text-wine-200" />
              </span>
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
              <span className="text-xs uppercase font-mono tracking-widest text-wine-800 font-bold">
                Clairlens Navigation
              </span>
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
              className="mt-4 text-center text-xs uppercase tracking-widest font-semibold py-4 bg-wine-900 text-white rounded-2xl shadow-lg shadow-wine-900/30 flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>Contact Us</span>
              <Sparkles className="w-4 h-4 text-wine-200" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

