import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

export default function Cta({ onNavigate }: CtaProps) {
  const handleNav = (page: string, anchor?: string) => {
    if (onNavigate) {
      onNavigate(page, anchor);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="container-fluid relative z-10">
        
        {/* Large Burgundy Glass Vault Card */}
        <div className="rounded-3xl p-8 sm:p-14 lg:p-20 bg-gradient-to-br from-wine-950 via-wine-900 to-wine-950 text-white border border-wine-500/40 shadow-2xl shadow-wine-950/50 relative overflow-hidden text-center">
          
          {/* Background Ambient Reflection */}
          <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-wine-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-wine-700/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wine-500/40 bg-wine-900/80 backdrop-blur-md text-xs font-semibold tracking-widest text-wine-200 uppercase font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 text-wine-300" />
            Global Optical Manufacturing Partner
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.08] tracking-tight max-w-4xl mx-auto font-medium"
          >
            Precision You Can See.<br />
            <span className="italic font-light text-gradient-gold-wine">Craftsmanship You Trust.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-fluid-body text-wine-100/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Partner with Clairlens to provide your optical practices, distributors, and patients with prescription lenses engineered to European diamond standards.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-wine-950 rounded-full hover:bg-wine-100 transition-all duration-300 tracking-wider font-semibold text-xs uppercase flex items-center justify-center gap-3 group shadow-lg shadow-white/10 min-h-[48px]"
            >
              <span>Schedule Partnership Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-wine-900" />
            </button>

            <button
              onClick={() => handleNav('products')}
              className="w-full sm:w-auto px-8 py-4 bg-wine-900/60 text-white border border-wine-400/40 backdrop-blur-md rounded-full hover:bg-wine-800 transition-all duration-300 tracking-wider font-semibold text-xs uppercase flex items-center justify-center min-h-[48px]"
            >
              Explore Products Catalog
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

