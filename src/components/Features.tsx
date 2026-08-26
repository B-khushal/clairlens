import { motion } from 'motion/react';
import { FEATURES_DATA } from '../data/assetsData';
import { Sparkles, ShieldCheck, Droplets, Zap, Eye, Layers } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
  Droplets: <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />,
  Zap: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
  Eye: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />,
  Layers: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
};

export default function Features() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-ivory relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-wine-900/5 rounded-full blur-3xl pointer-events-none" />

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
            Standard of Optical Distinction
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-fluid-title text-wine-950 mb-4 sm:mb-6 font-medium"
          >
            The Clairlens <span className="italic font-light text-gradient-wine">Optical Shield</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-fluid-body text-gray-700 font-light leading-relaxed"
          >
            Six pillar technologies integrated into every optical lens to ensure unmatched visual clarity, ocular safety, effortless wiping, and extreme thermal durability.
          </motion.p>
        </div>

        {/* 6 Glass Feature Cards Grid (Responsive 3-col -> 2-col -> 1-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES_DATA.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl p-6 sm:p-8 glass-light border-white/80 shadow-xl shadow-wine-950/5 hover:border-wine-800/30 hover:bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group min-h-[260px]"
            >
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-wine-950 text-white flex items-center justify-center mb-5 sm:mb-6 shadow-md shadow-wine-950/20 group-hover:bg-wine-800 transition-colors">
                  {iconMap[feature.icon]}
                </div>

                <div className="text-[10px] sm:text-xs uppercase font-mono tracking-widest font-semibold text-wine-800 mb-1">
                  {feature.subtitle}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-wine-950 mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-wine-800/10 w-full group-hover:border-wine-800/30 transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
