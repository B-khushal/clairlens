import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LENS_INDICES_DATA, LENS_INDEX_TECH_ASSET } from '../data/assetsData';
import { Sliders, Sparkles, ChevronDown } from 'lucide-react';

interface GlassSliceVisualizerProps {
  activeIndex: typeof LENS_INDICES_DATA[0];
  isMobile?: boolean;
}

function GlassSliceVisualizer({ activeIndex, isMobile = false }: GlassSliceVisualizerProps) {
  return (
    <div className={`rounded-2xl bg-wine-950 text-white border border-wine-500/30 shadow-2xl shadow-wine-950/40 relative overflow-hidden ${
      isMobile ? 'p-4 sm:p-6 mt-3 border-t border-wine-500/40' : 'p-6 sm:p-8'
    }`}>
      
      <div className="flex items-center justify-between mb-3 relative z-10">
        <div className="text-xs uppercase tracking-widest text-wine-300 font-semibold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-wine-300" />
          Interactive Glass Slice
        </div>
        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-wine-800 text-wine-100 border border-wine-500/40">
          {activeIndex.index} Index
        </span>
      </div>

      <h3 className="font-serif text-xl sm:text-2xl text-white mb-1.5 relative z-10">
        {activeIndex.material}
      </h3>
      <p className="text-xs text-wine-200/80 mb-5 relative z-10 font-light">
        {activeIndex.description}
      </p>

      {/* Animated Physical Lens Cutaway */}
      <div className="relative h-36 sm:h-44 my-4 rounded-xl bg-gradient-to-b from-wine-900/60 to-wine-950 border border-wine-700/40 flex items-center justify-center p-4 overflow-hidden">
        
        {/* Optical Light Rays */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-40 pointer-events-none">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>

        <motion.div
          key={activeIndex.id}
          initial={{ scaleX: 0.85, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative flex items-center justify-center w-full max-w-[220px]"
        >
          <div 
            className="w-full rounded-[50%] bg-gradient-to-b from-white/90 via-white/30 to-wine-500/20 backdrop-blur-md border border-white/80 shadow-2xl transition-all duration-500 flex items-center justify-center"
            style={{
              height: `${(activeIndex.thickness / 100) * 100 + 20}px`,
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.35)'
            }}
          >
            <div className="text-center font-mono">
              <span className="text-base font-bold text-wine-950 drop-shadow-sm">
                {activeIndex.edgeThicknessMm}
              </span>
              <div className="text-[9px] uppercase tracking-wider text-wine-900 font-sans font-bold">
                Profile Depth
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Metric Specs */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-4 border-t border-wine-800/60 text-center relative z-10">
        <div className="p-2 sm:p-2.5 rounded-lg bg-wine-900/60 border border-wine-700/40">
          <div className="text-[10px] text-wine-300 mb-0.5 font-mono uppercase">Abbe Value</div>
          <div className="text-xs sm:text-sm font-semibold font-mono text-white">{activeIndex.abbeyValue}</div>
        </div>
        <div className="p-2 sm:p-2.5 rounded-lg bg-wine-900/60 border border-wine-700/40">
          <div className="text-[10px] text-wine-300 mb-0.5 font-mono uppercase">Density</div>
          <div className="text-xs sm:text-sm font-semibold font-mono text-white">{activeIndex.density}</div>
        </div>
        <div className="p-2 sm:p-2.5 rounded-lg bg-wine-900/60 border border-wine-700/40">
          <div className="text-[10px] text-wine-300 mb-0.5 font-mono uppercase">UV Block</div>
          <div className="text-xs sm:text-sm font-semibold font-mono text-white">{activeIndex.uvProtection}</div>
        </div>
      </div>

      {/* Technical Diagram Showcase Thumbnail */}
      <div className="mt-4 pt-3.5 border-t border-wine-800/60 flex items-center gap-3.5">
        <img 
          src={LENS_INDEX_TECH_ASSET.src}
          alt={LENS_INDEX_TECH_ASSET.alt}
          className="w-14 h-10 sm:w-16 sm:h-12 object-cover rounded-lg border border-wine-500/40 shrink-0"
          loading="lazy"
        />
        <div>
          <div className="text-xs font-semibold text-white">Wavefront Ray Tracing</div>
          <div className="text-[10px] text-wine-200">Sub-nanometer light dispersion analysis</div>
        </div>
      </div>

    </div>
  );
}

interface LensIndexProps {
  onNavigate?: (page: string) => void;
}

export default function LensIndex({ onNavigate }: LensIndexProps) {
  const [activeIndex, setActiveIndex] = useState(LENS_INDICES_DATA[4]); // Default to 1.67 Ultra-High Index
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(LENS_INDICES_DATA[4].id);

  const handleItemClick = (item: typeof LENS_INDICES_DATA[0]) => {
    setActiveIndex(item);
    setExpandedMobileId(prev => (prev === item.id ? null : item.id));
  };

  return (
    <section id="lens-index" className="py-20 sm:py-24 lg:py-32 bg-ivory relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-wine-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-wine-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-fluid relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wine-800/20 bg-white/80 backdrop-blur-md text-xs font-semibold tracking-widest text-wine-950 uppercase"
          >
            <Sliders className="w-3.5 h-3.5 text-wine-700" />
            Refractive Physics & Index Selection
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-fluid-title text-wine-950 mb-4 sm:mb-6 font-medium"
          >
            Choose the Right <span className="italic font-light text-gradient-wine">Optical Index</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-fluid-body text-gray-700 font-light leading-relaxed"
          >
            Refractive index determines the efficiency with which glass bends light. Higher indices produce dramatically thinner, lighter lenses for strong prescriptions without altering optical Abbe clarity.
          </motion.p>
        </div>

        {/* Translucent Glass Container */}
        <div className="rounded-3xl p-4 sm:p-8 lg:p-10 glass-light border-white/80 shadow-2xl shadow-wine-950/10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Responsive Specification Cards / Table */}
            <div className="xl:col-span-7 space-y-3">
              <div className="hidden sm:flex items-center justify-between px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-wine-900/70 border-b border-wine-800/10 mb-2">
                <span>Select Optical Index</span>
                <span>Substrate Material & Power Range</span>
              </div>

              <div className="space-y-3">
                {LENS_INDICES_DATA.map((item) => {
                  const isActive = activeIndex.id === item.id;
                  const isMobileExpanded = expandedMobileId === item.id;

                  return (
                    <div key={item.id} className="w-full">
                      <motion.button
                        type="button"
                        onClick={() => handleItemClick(item)}
                        whileHover={{ scale: 1.005 }}
                        whileTap={{ scale: 0.995 }}
                        className={`w-full text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 border min-h-[64px] ${
                          isActive
                            ? 'bg-gradient-to-r from-wine-950 via-wine-900 to-wine-950 text-white border-wine-500/40 shadow-xl shadow-wine-950/25'
                            : 'bg-white/80 backdrop-blur-md text-wine-950 border-wine-800/10 hover:border-wine-800/30 hover:bg-white'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                          
                          {/* Index Badge, Material Name & Mobile Dropdown Pill */}
                          <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto">
                            <div className="flex items-center gap-3.5">
                              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-serif text-xl sm:text-2xl font-bold border shrink-0 transition-colors ${
                                isActive
                                  ? 'bg-wine-800 text-white border-wine-400/50 shadow-inner'
                                  : 'bg-wine-50 text-wine-950 border-wine-800/20'
                              }`}>
                                {item.index}
                              </div>
                              <div>
                                <div className={`text-sm sm:text-base font-semibold ${isActive ? 'text-white' : 'text-wine-950'}`}>
                                  {item.material}
                                </div>
                                <div className={`text-xs ${isActive ? 'text-wine-200' : 'text-gray-600'}`}>
                                  {item.bestFor}
                                </div>
                              </div>
                            </div>

                            {/* Mobile Dropdown indicator chevron */}
                            <div className={`xl:hidden flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-colors ${
                              isActive 
                                ? 'bg-wine-800/80 text-wine-100 border-wine-500/40' 
                                : 'bg-wine-100/80 text-wine-900 border-wine-800/20'
                            }`}>
                              <span className="uppercase tracking-wider text-[9px]">{isMobileExpanded ? 'Slice' : 'View Slice'}</span>
                              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMobileExpanded ? 'rotate-180' : ''}`} />
                            </div>
                          </div>

                          {/* Prescription Range & Weight Bar */}
                          <div className="flex items-center justify-between sm:justify-end gap-4 sm:border-l sm:border-wine-800/20 sm:pl-5 pt-2 sm:pt-0 border-t border-wine-800/10 sm:border-t-0">
                            <div className="text-left sm:text-right">
                              <div className={`text-xs font-mono font-semibold ${isActive ? 'text-wine-200' : 'text-wine-900'}`}>
                                {item.power}
                              </div>
                              <div className={`text-[10px] uppercase tracking-wider ${isActive ? 'text-wine-300/80' : 'text-gray-500'}`}>
                                Edge: {item.edgeThicknessMm}
                              </div>
                            </div>

                            {/* Relative Thickness Bar Indicator */}
                            <div className="w-16 flex flex-col gap-1 items-end">
                              <span className={`text-[10px] font-mono ${isActive ? 'text-wine-200' : 'text-gray-500'}`}>
                                {item.weightReduction}
                              </span>
                              <div className="w-full h-1.5 bg-gray-200/50 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full transition-all duration-500 ${
                                    isActive ? 'bg-gradient-to-r from-wine-300 to-white' : 'bg-wine-700'
                                  }`}
                                  style={{ width: `${item.thickness}%` }}
                                />
                              </div>
                            </div>
                          </div>

                        </div>
                      </motion.button>

                      {/* Inline Dropdown Visualizer for Mobile Only (xl:hidden) */}
                      <div className="xl:hidden">
                        <AnimatePresence initial={false}>
                          {isMobileExpanded && (
                            <motion.div
                              key={`mobile-slice-${item.id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <GlassSliceVisualizer activeIndex={item} isMobile={true} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dynamic Physical Glass Thickness Visualizer (Desktop Only) */}
            <div className="hidden xl:block xl:col-span-5 relative xl:sticky xl:top-28">
              <GlassSliceVisualizer activeIndex={activeIndex} />
            </div>

          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate ? onNavigate('products') : null}
              className="px-8 py-3.5 rounded-full bg-wine-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-wine-800 transition-colors shadow-lg shadow-wine-900/25"
            >
              Explore Complete Products & Catalog →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

