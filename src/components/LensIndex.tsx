import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LENS_INDICES_DATA, LENS_INDEX_TECH_ASSET } from '../data/assetsData';
import { Sliders, Sparkles, ChevronDown } from 'lucide-react';

interface GlassSliceVisualizerProps {
  activeIndex: typeof LENS_INDICES_DATA[0];
  onSelectIndex?: (index: typeof LENS_INDICES_DATA[0]) => void;
  isMobile?: boolean;
}

function GlassSliceVisualizer({ activeIndex, onSelectIndex, isMobile = false }: GlassSliceVisualizerProps) {
  // Subset of indices to display in 3D vertical comparison stack matching reference image
  const displayIndices = [
    LENS_INDICES_DATA[1], // 1.56
    LENS_INDICES_DATA[3], // 1.60
    LENS_INDICES_DATA[4], // 1.67
    LENS_INDICES_DATA[5], // 1.74
  ];

  return (
    <div className={`rounded-3xl bg-gradient-to-b from-wine-950 via-wine-900 to-wine-950 text-white border border-wine-500/30 shadow-2xl shadow-wine-950/40 relative overflow-hidden ${
      isMobile ? 'p-4 sm:p-6 mt-3 border-t border-wine-500/40' : 'p-6 sm:p-8'
    }`}>
      
      {/* Header */}
      <div className="text-center mb-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase font-mono tracking-widest text-wine-200 mb-2 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-wine-300" />
          Lens Index Physics Explained
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
          3D Glass Slice Profile
        </h3>
        <p className="text-xs text-wine-200/80 mt-1 font-light max-w-xs mx-auto">
          Visualizing edge thickness & refractive physics across indices
        </p>
      </div>

      {/* 3D Stack Comparison Area */}
      <div className="relative py-5 px-3 bg-wine-900/40 rounded-2xl border border-wine-700/30 mb-6 flex flex-col items-center gap-6 sm:gap-7">
        {displayIndices.map((item) => {
          const isSelected = item.id === activeIndex.id;
          
          // Map thickness percentage to 3D glass disc edge height (1.56 -> 28px, 1.60 -> 21px, 1.67 -> 15px, 1.74 -> 10px)
          const sliceHeight = Math.max(10, Math.round((item.thickness / 100) * 28));

          return (
            <motion.div
              key={item.id}
              onClick={() => onSelectIndex && onSelectIndex(item)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer w-full max-w-[260px] flex flex-col items-center group transition-all duration-300 relative ${
                isSelected ? 'scale-105 z-10' : 'opacity-85 hover:opacity-100'
              }`}
            >
              {/* Active selection ambient glow */}
              {isSelected && (
                <div className="absolute -inset-2 rounded-2xl bg-white/10 border border-white/40 blur-xs pointer-events-none" />
              )}

              {/* 3D Glass Lens Disc */}
              <div className="relative w-full flex flex-col items-center">
                
                {/* Top Glass Surface Ellipse */}
                <div 
                  className={`w-full rounded-[100%] transition-all duration-500 border border-white/80 relative overflow-hidden ${
                    isSelected 
                      ? 'bg-gradient-to-b from-white via-sky-100/70 to-white/40 shadow-lg shadow-white/20' 
                      : 'bg-gradient-to-b from-white/80 via-sky-100/40 to-white/20'
                  }`}
                  style={{ height: '36px' }}
                >
                  {/* Top Glass Specular Shine Sweep */}
                  <div className="absolute top-1 left-4 right-4 h-2 rounded-[100%] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />
                  <div className="absolute bottom-1 left-8 right-8 h-1 rounded-[100%] bg-white/50" />
                </div>

                {/* Glass Bevel Side Rim (Height determined by Index Thickness!) */}
                <div 
                  className={`w-[99.2%] -mt-4 transition-all duration-500 border-x border-b border-white/60 relative flex items-center justify-center ${
                    isSelected 
                      ? 'bg-gradient-to-b from-white/40 via-sky-200/30 to-wine-900/60 shadow-xl' 
                      : 'bg-gradient-to-b from-white/20 via-sky-100/15 to-wine-950/70'
                  }`}
                  style={{ 
                    height: `${sliceHeight + 8}px`,
                    borderRadius: '0 0 50% 50% / 0 0 100% 100%' 
                  }}
                >
                  {/* Inner Refraction Line */}
                  <div className="w-[85%] h-[1px] bg-white/60 -mt-1" />
                </div>

                {/* Realistic Ground Shadow under Disc */}
                <div className="w-[88%] h-3 bg-wine-950/80 rounded-[100%] blur-sm -mt-2.5 pointer-events-none" />

              </div>

              {/* Index Number Label & Edge Callout */}
              <div className="mt-2.5 text-center flex items-center gap-2">
                <span className={`text-base font-bold font-mono transition-colors ${
                  isSelected ? 'text-white scale-110' : 'text-wine-200 group-hover:text-white'
                }`}>
                  {item.index}
                </span>
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border transition-colors ${
                  isSelected 
                    ? 'bg-white text-wine-950 font-bold border-white shadow-sm' 
                    : 'bg-wine-900/60 text-wine-300 border-wine-700/40'
                }`}>
                  {item.edgeThicknessMm} edge
                </span>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Selected Index Detailed Metrics */}
      <div className="p-4 rounded-2xl bg-wine-900/60 border border-wine-700/50 space-y-3 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-white font-serif">{activeIndex.material}</span>
          <span className="text-[10px] font-mono text-wine-200 bg-wine-800 px-2.5 py-0.5 rounded-full border border-wine-600/40">
            {activeIndex.weightReduction}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-2 border-t border-wine-800/60">
          <div className="p-2 rounded-lg bg-wine-950/60 border border-wine-800/40">
            <div className="text-[9px] text-wine-300 font-sans uppercase">Abbe Value</div>
            <div className="font-bold text-white mt-0.5">{activeIndex.abbeyValue}</div>
          </div>
          <div className="p-2 rounded-lg bg-wine-950/60 border border-wine-800/40">
            <div className="text-[9px] text-wine-300 font-sans uppercase">Edge Width</div>
            <div className="font-bold text-white mt-0.5">{activeIndex.edgeThicknessMm}</div>
          </div>
          <div className="p-2 rounded-lg bg-wine-950/60 border border-wine-800/40">
            <div className="text-[9px] text-wine-300 font-sans uppercase">Power Range</div>
            <div className="font-bold text-white mt-0.5 text-[10px] truncate">{activeIndex.power}</div>
          </div>
        </div>
      </div>

      {/* Technical Diagram Showcase Thumbnail */}
      <div className="mt-4 pt-3.5 border-t border-wine-800/60 flex items-center gap-3.5 relative z-10">
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
                              <GlassSliceVisualizer activeIndex={item} onSelectIndex={handleItemClick} isMobile={true} />
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
              <GlassSliceVisualizer activeIndex={activeIndex} onSelectIndex={handleItemClick} />
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

