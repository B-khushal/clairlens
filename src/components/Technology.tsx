import { motion } from 'motion/react';
import { Cpu, Scan, CheckCircle2 } from 'lucide-react';
import { TECHNOLOGY_OPTICS_ASSET } from '../data/assetsData';

export default function Technology() {
  return (
    <section id="technology" className="py-20 sm:py-24 lg:py-32 bg-wine-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-wine-800/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-wine-700/20 rounded-full blur-[100px]" />
      </div>

      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Tech Overview */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wine-500/40 bg-wine-900/60 backdrop-blur-md text-xs font-semibold tracking-widest text-wine-200 uppercase">
              <Cpu className="w-3.5 h-3.5 text-wine-300" />
              Digital Freeform Surfacing Platform
            </div>

            <h2 className="font-serif text-fluid-title mb-6 leading-tight font-medium">
              Microscopic Accuracy. <br/>
              <span className="italic font-light text-wine-200">Macroscopic Clarity.</span>
            </h2>

            <p className="text-fluid-body text-wine-100/90 font-light leading-relaxed mb-8 sm:mb-10">
              Our cleanroom laboratories utilize multi-axis digital freeform generators capable of shaping optical glass curves down to 1/100th of a micron. This guarantees your exact wavefront prescription is rendered flawlessly across 100% of the lens.
            </p>

            {/* Feature List */}
            <div className="space-y-3 sm:space-y-4 mb-8">
              {[
                { title: 'Point-by-Point Freeform Surfacing', desc: 'Custom calculated optics for every individual gaze angle' },
                { title: 'Vacuum Ion AR Deposition', desc: 'Multi-layer anti-reflective chamber vacuum coating' },
                { title: '3D Wavefront Topography Scan', desc: 'Eliminates high-order aberrations and peripheral blur' },
                { title: 'Sub-Micron Laser Engraving', desc: 'Microscopic optical reference markers burned into lens edge' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-wine-900/50 border border-wine-700/40 backdrop-blur-md">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-wine-800 border border-wine-500/50 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-wine-200" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-white">{item.title}</div>
                    <div className="text-[11px] sm:text-xs text-wine-200/80 font-light mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Laser Surfacing Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl p-3 bg-gradient-to-b from-white/20 via-white/5 to-transparent border border-white/20 shadow-2xl shadow-wine-950/60 relative overflow-hidden">
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner group">
                <img 
                  src={TECHNOLOGY_OPTICS_ASSET.src} 
                  alt={TECHNOLOGY_OPTICS_ASSET.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Laser Scanning Grid FX Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-wine-950/90 via-transparent to-transparent pointer-events-none" />

                {/* Machine HUD Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[9px] sm:text-[10px] font-mono tracking-widest text-wine-200">
                  <span className="px-2.5 py-1 rounded-full bg-wine-950/80 backdrop-blur-md border border-wine-500/40">
                    SYS.OPT.704 // FREEFORM
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-wine-950/80 backdrop-blur-md border border-wine-500/40 text-wine-300 hidden xs:inline">
                    TOLERANCE ±0.001μ
                  </span>
                </div>

                {/* Bottom HUD Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-wine-950/85 backdrop-blur-md border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-wine-800 border border-wine-500/50 flex items-center justify-center shrink-0">
                      <Scan className="w-4 h-4 text-wine-200" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Wavefront Scanning Active</div>
                      <div className="text-[10px] text-wine-200">40,000 reference points calculated per lens</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
