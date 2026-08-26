import { motion } from 'motion/react';
import { Microscope, ShieldCheck, Award } from 'lucide-react';
import { MANUFACTURING_LAB_ASSET } from '../data/assetsData';

const stats = [
  { label: 'Polish Precision', value: '< 0.01μ', description: 'Nanometer surface accuracy tolerance' },
  { label: 'Coating Platforms', value: '4th Gen', description: 'Silica, Aegean, Pacific, Aurora' },
  { label: 'Quality Checkpoints', value: '18 Points', description: 'Laser wavefront inspection per lens' },
  { label: 'Optical Standards', value: 'ISO 8980', description: 'Global prescription certification' },
];

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-ivory relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-wine-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wine-800/20 bg-white/80 backdrop-blur-md text-xs font-semibold tracking-widest text-wine-950 uppercase mb-4 sm:mb-6">
              <Microscope className="w-3.5 h-3.5 text-wine-700" />
              Heritage of Swiss-German Optics
            </div>

            <h2 className="font-serif text-fluid-title text-wine-950 font-medium mb-6 leading-tight">
              Crafting Vision with <br/>
              <span className="italic font-light text-gradient-wine">Uncompromising Precision</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-fluid-body text-gray-700 font-light leading-relaxed mb-8 sm:mb-10">
              <p>
                Clairlens represents the modern pinnacle of optical lens manufacturing. We blend decades of master optical craftsmanship with sub-micron digital freeform engineering to create glass surfaces that redefine visual acuity.
              </p>
              <p>
                Every lens crafted in our cleanroom facilities undergoes wavefront laser distortion analysis. From raw optical polymer substrates to multi-layer anti-reflective coatings, we maintain tolerances that exceed international ISO guidelines.
              </p>
            </div>

            {/* Stat Cards Grid (Responsive 2x2 grid) */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-5 pt-6 border-t border-wine-800/15 mb-6">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-wine-800/10 shadow-sm hover:border-wine-800/30 transition-all duration-300"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-wine-950 mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs font-bold text-wine-900 uppercase tracking-wider mb-1 font-mono">{stat.label}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 font-light leading-snug">{stat.description}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate ? onNavigate('about') : null}
              className="px-6 py-3 rounded-full bg-wine-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-wine-800 transition-colors shadow-md shadow-wine-900/20"
            >
              Read Full Story & Philosophy →
            </button>
          </motion.div>

          {/* Right Column: Cleanroom Glass Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 relative mt-4 lg:mt-0"
          >
            <div className="relative rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/90 via-white/50 to-wine-900/10 backdrop-blur-xl border border-white/80 shadow-2xl shadow-wine-950/15">
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner group">
                <img 
                  src={MANUFACTURING_LAB_ASSET.src} 
                  alt={MANUFACTURING_LAB_ASSET.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-wine-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Quality Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-wine-900 text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-wine-950">Cleanroom Diamond Polish</div>
                      <div className="text-[10px] text-gray-600">Zero-dust automated vacuum chambers</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-1 bg-wine-100 text-wine-900 rounded">
                    ISO 8980
                  </span>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-5 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-wine-950 text-white border border-wine-500/30 shadow-xl shadow-wine-950/40"
            >
              <Award className="w-5 h-5 text-wine-300" />
              <div>
                <div className="text-xs font-semibold tracking-wide">Optical Flagship</div>
                <div className="text-[10px] text-wine-200 font-mono">European Diamond Standard</div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
