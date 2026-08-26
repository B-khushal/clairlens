import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COATINGS_DATA, CoatingSpec } from '../data/assetsData';
import { Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Coatings() {
  const [activeCoating, setActiveCoating] = useState<CoatingSpec>(COATINGS_DATA[1]); // Default to Aegean HMC Green

  return (
    <section id="coatings" className="py-20 sm:py-24 lg:py-32 bg-ivory relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-wine-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-fluid relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wine-800/20 bg-white/80 backdrop-blur-md text-xs font-semibold tracking-widest text-wine-950 uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-wine-700" />
            Proprietary Surface Engineering
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-fluid-title text-wine-950 mb-4 sm:mb-6 font-medium"
          >
            Clairlens <span className="italic font-light text-gradient-wine">Coating Matrix</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-fluid-body text-gray-700 font-light leading-relaxed"
          >
            Four specialized optical coating formulations engineered to protect against micro-scratches, block harmful HEV blue light, eliminate night driving glare, and preserve crystal-clear vision.
          </motion.p>
        </div>

        {/* 4 Premium Glass Coating Modules Grid (Responsive 4-col -> 2-col -> 1-col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {COATINGS_DATA.map((coating, index) => {
            const isSelected = activeCoating.id === coating.id;
            return (
              <motion.button
                type="button"
                key={coating.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                onClick={() => setActiveCoating(coating)}
                className={`text-left group rounded-3xl p-5 sm:p-6 transition-all duration-500 relative flex flex-col justify-between overflow-hidden border min-h-[380px] ${
                  isSelected
                    ? 'bg-white/95 backdrop-blur-2xl border-wine-700/50 shadow-2xl shadow-wine-950/20 -translate-y-2'
                    : 'bg-white/70 backdrop-blur-md border-white/80 hover:border-wine-800/30 hover:bg-white hover:-translate-y-1 shadow-lg shadow-wine-950/5'
                }`}
              >
                {/* Background Tint Glow */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{ backgroundColor: coating.glowColor }}
                />

                {/* Badge Header */}
                <div className="flex items-center justify-between mb-4 relative z-10 w-full">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-wine-50 text-wine-900 border border-wine-800/15">
                    {coating.badge}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: coating.accent.replace('bg-', '') }} />
                </div>

                {/* Glass Pedestal Environment for Lens Image */}
                <div className="relative h-48 sm:h-56 my-2 w-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-wine-950/5 via-wine-900/10 to-wine-950/20 border border-white/60">
                  
                  {/* Soft Pedestal Shadow */}
                  <div className="absolute bottom-4 w-28 sm:w-32 h-5 bg-wine-950/30 rounded-[100%] blur-md" />
                  <div className="absolute bottom-6 w-20 sm:w-24 h-3 bg-wine-900/40 rounded-[100%]" />

                  {/* Lens Image in Square Frame */}
                  <motion.div
                    animate={isSelected ? { scale: 1.05, y: -4 } : { scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-xl shadow-wine-950/10 flex items-center justify-center p-2 bg-white/95 backdrop-blur-sm border border-wine-800/20"
                  >
                    <img 
                      src={coating.image} 
                      alt={coating.altText} 
                      className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Specular Highlight Sweep */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                </div>

                {/* Coating Info */}
                <div className="mt-3 relative z-10 w-full">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-wine-800 mb-1">
                    {coating.label}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-wine-950 mb-1.5">
                    {coating.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-light line-clamp-2 leading-relaxed">
                    {coating.positioning}
                  </p>
                </div>

                {/* Details Footer */}
                <div className="mt-5 pt-3.5 border-t border-wine-800/10 flex items-center justify-between text-xs font-semibold text-wine-900 group-hover:text-wine-700 w-full">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Coating Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCoating.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl p-6 sm:p-10 lg:p-12 glass-wine border-white/20 shadow-2xl relative overflow-hidden max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Image Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/40 shadow-2xl bg-white/95 p-4 flex items-center justify-center">
                  <img 
                    src={activeCoating.image} 
                    alt={activeCoating.altText} 
                    className="w-full h-full object-contain rounded-xl"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-wine-900/90 backdrop-blur-md border border-white/20 text-[10px] uppercase font-mono tracking-widest text-wine-100 shadow-md">
                    {activeCoating.label}
                  </div>
                </div>
              </div>

              {/* Specs & Features */}
              <div className="lg:col-span-7">
                <div className="text-xs uppercase tracking-widest text-wine-300 font-semibold mb-2 font-mono">
                  {activeCoating.positioning}
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
                  {activeCoating.name} {activeCoating.label}
                </h3>
                <p className="text-sm sm:text-base text-wine-100/90 font-light leading-relaxed mb-8">
                  {activeCoating.description}
                </p>

                {/* Feature Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-wine-800">
                  {activeCoating.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-wine-900/60 border border-wine-700/50">
                      <CheckCircle2 className="w-4 h-4 text-wine-300 shrink-0" />
                      <span className="text-xs font-medium text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate ? onNavigate('products') : null}
            className="px-8 py-3.5 rounded-full bg-white text-wine-950 text-xs uppercase tracking-widest font-semibold hover:bg-wine-100 transition-colors shadow-lg"
          >
            View Coating Options on Products Page →
          </button>
        </div>

      </div>
    </section>
  );
}
