import { useRef } from 'react';
import { motion } from 'motion/react';
import { Factory, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  { id: '01', title: 'Digital Freeform Surfacing', desc: 'Diamond-tipped generators carve exact prescription geometries with sub-micron accuracy.' },
  { id: '02', title: 'Multi-Stage Polish', desc: 'Soft-pad polishing delivers crystal transparency without distorting optical curve geometry.' },
  { id: '03', title: 'Ultrasonic Bathing', desc: 'Multi-chamber ultrasonic baths strip micro-dust before vacuum coating deposition.' },
  { id: '04', title: 'Ion-Assisted AR Coating', desc: 'Silica, Aegean, and Pacific matrices are vacuum-evaporated onto the lens.' },
  { id: '05', title: 'Wavefront Inspection', desc: 'Laser interferometry checks power, cylinder, axis, thickness, and AR coating integrity.' }
];

export default function Manufacturing() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="manufacturing" className="py-20 sm:py-24 lg:py-32 bg-ivory relative overflow-hidden">
      <div className="container-fluid mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wine-800/20 bg-white/80 backdrop-blur-md text-xs font-semibold tracking-widest text-wine-950 uppercase"
            >
              <Factory className="w-3.5 h-3.5 text-wine-700" />
              Cleanroom Manufacturing Cycle
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-fluid-title text-wine-950 font-medium leading-tight"
            >
              The Journey of a <span className="italic font-light text-gradient-wine">Clairlens</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-fluid-body text-gray-700 font-light max-w-xl"
          >
            A five-phase high-performance manufacturing protocol transforming optical lens blanks into master-grade eyeglass lenses.
          </motion.p>
        </div>
      </div>

      {/* Horizontal Carousel with Hovering Left and Right Side Buttons */}
      <div className="relative group/carousel px-4 sm:px-6 lg:pl-[calc((100vw-1440px)/2+3rem)]">
        
        {/* Left Side Arrow Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-wine-950 shadow-2xl border border-wine-800/20 hover:bg-wine-950 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Side Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-wine-950 shadow-2xl border border-wine-800/20 hover:bg-wine-950 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div 
          ref={scrollRef}
          className="flex flex-row gap-4 sm:gap-6 overflow-x-auto pb-8 sm:pb-12 pt-4 snap-x snap-mandatory hide-scrollbar relative z-10 pr-4 sm:pr-6 scroll-smooth"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="min-w-[285px] sm:min-w-[320px] max-w-[340px] sm:max-w-[360px] shrink-0 rounded-3xl p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-white/90 shadow-xl shadow-wine-950/5 snap-start sm:snap-center relative group hover:bg-wine-950 hover:text-white transition-all duration-500 border-wine-800/10 hover:border-wine-500/40 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-wine-200 group-hover:text-wine-400 transition-colors">
                    {step.id}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-wine-50 group-hover:bg-wine-900 flex items-center justify-center transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-wine-700 group-hover:text-wine-200" />
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-wine-950 group-hover:text-white mb-2.5 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-wine-100/90 font-light leading-relaxed transition-colors">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-wine-800/10 group-hover:border-wine-800 flex items-center justify-between text-[11px] font-mono text-wine-800 group-hover:text-wine-200">
                <span>Phase {step.id} / 05</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
