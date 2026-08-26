import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from 'motion/react';
import React, { useState, useRef } from 'react';
import { ChevronRight, Sparkles, Target, Layers, ShieldCheck } from 'lucide-react';
import { HERO_ASSET, LENS_INDICES_DATA } from '../data/assetsData';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Selected Index State for Interactive Control
  const [selectedIndexId, setSelectedIndexId] = useState<string>('1.74');
  const activeIndexSpec = LENS_INDICES_DATA.find(i => i.id === selectedIndexId) || LENS_INDICES_DATA[5];

  // Scroll Parallax Physics
  const { scrollY } = useScroll();
  const heroParallaxY = useTransform(scrollY, [0, 800], [0, -120]);
  const bgShapeParallax = useTransform(scrollY, [0, 800], [0, 90]);

  // Desktop Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const translateLensX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);
  const translateLensY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), springConfig);
  const ringRotate = useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), springConfig);

  const shineX = useTransform(mouseX, [-0.5, 0.5], ['-30%', '130%']);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ['-30%', '130%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Technical HUD Modules
  const hudModules = [
    {
      id: 'precision',
      label: 'PRECISION',
      value: '±0.01mm',
      icon: Target,
      pos: 'top-2 -left-4 lg:-left-10',
      parallaxFactor: -10
    },
    {
      id: 'index',
      label: 'INDEX',
      value: `${activeIndexSpec.index} Thin`,
      icon: Layers,
      pos: 'top-1/3 -right-4 lg:-right-10',
      parallaxFactor: 12
    },
    {
      id: 'coating',
      label: 'COATING',
      value: 'HMC / AR',
      icon: ShieldCheck,
      pos: 'bottom-20 -left-2 lg:-left-6',
      parallaxFactor: -8
    },
    {
      id: 'clarity',
      label: 'CLARITY',
      value: 'HIGH DEF',
      icon: Sparkles,
      pos: 'bottom-2 -right-2 lg:-right-6',
      parallaxFactor: 10
    }
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 select-none"
      aria-label="Clairlens Hero - Advanced Optical Technology"
    >
      {/* Background Architectural Glass Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(114,47,55,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(114,47,55,0.025)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />

        {/* Ambient Parallax Wine Spheres */}
        <motion.div
          style={{ y: bgShapeParallax }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.15, 1],
            rotate: [0, 60, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-radial from-wine-800/18 via-wine-900/10 to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: bgShapeParallax }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            rotate: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-48 -left-48 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-radial from-wine-950/22 via-wine-700/8 to-transparent blur-3xl"
        />
      </div>

      <motion.div 
        style={{ y: heroParallaxY }}
        className="relative z-10 container-fluid w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        
        {/* Left Column: Headline & Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-wine-800/20 bg-white/90 backdrop-blur-xl shadow-sm"
          >
            <img 
              src="/Business card 29 May 2025_page-0001.jpg" 
              alt="CLAIRLENS" 
              className="h-6.5 w-auto object-contain"
            />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-wine-950 uppercase font-mono border-l border-wine-200 pl-3">
              A UNIT OF CLAIRVOYANT OPHTHALMICS
            </span>
          </motion.div>

          {/* Fluid Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-fluid-hero text-wine-950 font-medium tracking-tight mb-3"
          >
            Precision <br />
            You Can See.
          </motion.h1>

          {/* Secondary Accent Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-fluid-hero-accent text-gradient-wine italic font-light tracking-tight mb-6 sm:mb-8"
          >
            Innovation You Can Feel.
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-fluid-body text-gray-700 max-w-xl mb-8 font-light leading-relaxed"
          >
            Setting global benchmarks in precision optical lens manufacturing. Combining sub-micron wavefront surfacing with quartz scratch barriers and high-refraction glass architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 sm:gap-4 w-full xs:w-auto mb-10"
          >
            <button
              onClick={() => onNavigate ? onNavigate('products') : null}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-wine-900 text-white font-medium rounded-full overflow-hidden shadow-xl shadow-wine-950/25 transition-all duration-300 hover:shadow-2xl hover:shadow-wine-900/40 hover:-translate-y-1 min-h-[48px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-wine-950 via-wine-800 to-wine-900 group-hover:opacity-90 transition-opacity" />
              <div className="absolute -inset-x-12 top-0 h-full w-12 bg-white/30 transform -skew-x-20 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span className="relative z-10 text-xs uppercase tracking-[0.16em] font-semibold flex items-center gap-2.5">
                Explore Products Catalog
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => onNavigate ? onNavigate('about') : null}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-xl text-wine-950 font-medium rounded-full border border-wine-800/20 hover:bg-wine-900/5 hover:border-wine-800/40 transition-all duration-300 shadow-sm text-xs uppercase tracking-[0.16em] font-semibold min-h-[48px]"
            >
              About Clairlens Precision
            </button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-wine-800/15 w-full max-w-lg"
          >
            <div>
              <div className="font-serif text-xl sm:text-2xl lg:text-3xl text-wine-950 font-semibold">99.8%</div>
              <div className="text-[10px] sm:text-[11px] text-gray-500 font-mono uppercase tracking-wider mt-0.5">Transmittance</div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl lg:text-3xl text-wine-950 font-semibold">1.74</div>
              <div className="text-[10px] sm:text-[11px] text-gray-500 font-mono uppercase tracking-wider mt-0.5">Max Index</div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl lg:text-3xl text-wine-950 font-semibold">±0.01μ</div>
              <div className="text-[10px] sm:text-[11px] text-gray-500 font-mono uppercase tracking-wider mt-0.5">Precision</div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Futuristic Optical Visual Container */}
        <div className="lg:col-span-6 relative flex items-center justify-center mt-4 lg:mt-0">
          
          <motion.div
            style={shouldReduceMotion ? {} : { rotateX, rotateY, x: translateLensX, y: translateLensY, transformStyle: 'preserve-3d' }}
            className="relative w-full max-w-[460px] lg:max-w-[520px] aspect-square rounded-3xl p-3 sm:p-4"
          >
            {/* Outer Glass Card */}
            <div className="absolute inset-0 rounded-3xl glass-light shadow-2xl shadow-wine-950/15" />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-wine-700/25 via-transparent to-wine-500/20 blur-xl opacity-75 pointer-events-none" />

            {/* Technical Geometry Rings */}
            <motion.div 
              style={shouldReduceMotion ? {} : { rotate: ringRotate }}
              className="absolute inset-2 rounded-2xl border border-wine-800/15 border-dashed pointer-events-none flex items-center justify-center"
            >
              <div className="w-[85%] h-[85%] rounded-full border border-wine-800/20 flex items-center justify-center">
                <div className="w-[70%] h-[70%] rounded-full border border-wine-700/15 border-dashed" />
              </div>

              {/* Coordinates micro labels */}
              <div className="absolute top-3 left-4 text-[8px] sm:text-[9px] font-mono text-wine-800/70 tracking-widest hidden xs:block">
                SWISS.OPT // N 47°22'E 8°32'
              </div>
              <div className="absolute bottom-3 right-4 text-[8px] sm:text-[9px] font-mono text-wine-800/70 tracking-widest hidden xs:block">
                RMS: 0.004μ
              </div>
            </motion.div>

            {/* Lens Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner flex items-center justify-center bg-wine-950">
              <img
                src={HERO_ASSET.src}
                alt={HERO_ASSET.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Cursor-responsive Specular Light Sweep */}
              <motion.div
                style={shouldReduceMotion ? {} : { left: shineX, top: shineY }}
                className="absolute w-72 h-72 bg-gradient-to-tr from-white/40 via-wine-200/25 to-transparent rounded-full blur-2xl pointer-events-none"
              />

              {/* Glass Info Bar */}
              <div className="absolute bottom-14 sm:bottom-16 left-3 right-3 sm:left-6 sm:right-6 p-2.5 sm:p-3.5 rounded-xl bg-wine-950/85 backdrop-blur-md border border-white/20 text-white flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-wine-800/80 border border-wine-500/40 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-wine-200" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-white">{activeIndexSpec.material}</div>
                    <div className="text-[9px] sm:text-[10px] text-wine-200/80">Edge Depth: {activeIndexSpec.edgeThicknessMm}</div>
                  </div>
                </div>
                <span className="text-[9px] sm:text-[10px] px-2 py-0.5 sm:py-1 rounded-full bg-wine-800 border border-wine-400/40 text-wine-100 uppercase tracking-widest font-mono">
                  {activeIndexSpec.weightReduction}
                </span>
              </div>

              {/* Interactive Lens Index Selector Bar */}
              <div className="absolute bottom-2.5 left-3 right-3 sm:left-6 sm:right-6 p-1.5 sm:p-2 rounded-xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-lg flex items-center justify-between text-xs font-mono font-semibold pointer-events-auto">
                <span className="text-[9px] sm:text-[10px] uppercase font-sans text-wine-950 font-bold px-1.5">Index:</span>
                <div className="flex items-center gap-1">
                  {LENS_INDICES_DATA.map((idx) => {
                    const isSelected = selectedIndexId === idx.id;
                    return (
                      <button
                        key={idx.id}
                        onClick={() => setSelectedIndexId(idx.id)}
                        className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs transition-all duration-300 min-h-[36px] ${
                          isSelected
                            ? 'bg-wine-900 text-white shadow-md shadow-wine-950/20 scale-105'
                            : 'text-wine-950/70 hover:text-wine-950 hover:bg-wine-900/10'
                        }`}
                        aria-label={`Select lens index ${idx.index}`}
                      >
                        {idx.index}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Floating Technical Glass HUD Modules */}
            {hudModules.map((hud) => {
              const Icon = hud.icon;
              return (
                <motion.div
                  key={hud.id}
                  style={shouldReduceMotion ? {} : {
                    x: useTransform(mouseX, [-0.5, 0.5], [-hud.parallaxFactor, hud.parallaxFactor]),
                    y: useTransform(mouseY, [-0.5, 0.5], [-hud.parallaxFactor, hud.parallaxFactor])
                  }}
                  className={`absolute ${hud.pos} hidden md:flex items-center gap-2.5 p-3 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-lg z-20 pointer-events-none`}
                >
                  <div className="w-7 h-7 rounded-lg bg-wine-950 text-white flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-wine-200" />
                  </div>
                  <div>
                    <div className="text-[8px] uppercase font-mono tracking-widest text-wine-900/70 font-semibold">
                      {hud.label}
                    </div>
                    <div className="text-xs font-bold font-serif text-wine-950">
                      {hud.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </motion.div>

        </div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-20"
      >
        <span className="text-[8px] sm:text-[9px] tracking-[0.3em] font-mono uppercase text-wine-950/60 font-semibold">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-8 sm:h-10 bg-wine-800/20 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-full h-1/2 bg-wine-900"
          />
        </div>
      </motion.div>

    </section>
  );
}
