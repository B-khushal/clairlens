import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu, Layers, Eye, Award, CheckCircle2, Factory, Microscope } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { HERO_ASSET, MANUFACTURING_LAB_ASSET, TECHNOLOGY_OPTICS_ASSET, COMPANY_INFO } from '../data/assetsData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const breadcrumbItems = [{ label: 'About Clairlens' }];

  const philosophyItems = [
    {
      title: 'Excellence',
      subtitle: 'Nanometer Accuracy',
      desc: 'Every optical surface is engineered with relentless attention to sub-micron accuracy and wavefront consistency.',
      icon: Microscope,
      badge: '0.001µm Polish'
    },
    {
      title: 'Innovation',
      subtitle: 'Pioneering Materials',
      desc: 'Advanced lens monomers and multi-spectral coating technologies continuously redefine optical transparency.',
      icon: Cpu,
      badge: 'Mitsui MR Series'
    },
    {
      title: 'Trust',
      subtitle: 'Uncompromised Quality',
      desc: 'Rigorous European quality control protocols and certified cleanroom manufacturing form the bedrock of Clairlens.',
      icon: ShieldCheck,
      badge: 'ISO 13485 Certified'
    }
  ];

  const timelineStages = [
    { step: '01', title: 'Raw Substrate', desc: 'High-purity organic polymers & optical glass blocks selected.' },
    { step: '02', title: 'Freeform Surfacing', desc: 'Computer-controlled 5-axis diamond cutting shapes prescription curves.' },
    { step: '03', title: 'Sub-Micron Polish', desc: 'Nanometer lap-polishing eliminates surface light scattering.' },
    { step: '04', title: 'Vacuum Deposition', desc: 'Multi-layer anti-reflective coatings deposited in cleanrooms.' },
    { step: '05', title: 'Laser Interferometry', desc: 'Wavefront quality inspection checks 40,000 data points.' },
    { step: '06', title: 'Finished Lens', desc: 'Hermetically-sealed and dispatched for global optical laboratories.' }
  ];

  const techFeatures = [
    { title: 'Advanced Manufacturing', desc: 'Sub-micron diamond turning ensures zero wave aberration across the lens margin.', icon: Factory },
    { title: 'Advanced Optical Design', desc: 'Wavefront point-by-point digital surfacing tailored for visual acuity.', icon: Eye },
    { title: 'Premium Coatings', desc: 'Fluorine hydrophobic and metallic oxide anti-reflective matrices.', icon: Layers },
    { title: 'Surface Protection', desc: 'Quartz-composite hard coat providing scratch resistance.', icon: ShieldCheck },
    { title: 'Digital Vision Support', desc: 'Targeted HEV 455nm blue light filtering for screen heavy environments.', icon: Cpu },
    { title: 'High Prescription Support', desc: '1.67 & 1.74 ultra-thin profiles eliminating bug-eye magnification.', icon: Layers },
    { title: 'Quality Inspection', desc: 'Automated laser interferometry verifying optical Abbe value.', icon: Microscope },
    { title: 'Consistent Optical Performance', desc: 'Zero batch variance guaranteed across international distribution.', icon: Award }
  ];

  const stats = [
    { value: '1.50–1.74', label: 'Lens Index Range', detail: 'From standard to super-thin' },
    { value: '5+', label: 'Optical Substrates', detail: 'Polymer, MR-8, MR-7 & Polycarbonate' },
    { value: '3+', label: 'Coating Matrices', detail: 'Hard, AR Green, Blue Shield' },
    { value: 'Sub-Micron', label: 'Surface Accuracy', detail: 'Nanometer diamond polish' }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ivory text-gray-900 overflow-x-hidden min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Background ambient wine glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-wine-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-wine-800/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-fluid relative z-10">
          <Breadcrumbs items={breadcrumbItems} onNavigate={onNavigate} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-wine-800/20 bg-white/90 backdrop-blur-md text-xs font-semibold tracking-widest text-wine-950 uppercase mb-6 shadow-sm">
                <img src="/1.png" alt="CLAIRLENS Emblem" className="h-8 w-auto object-contain" />
                <img src="/2.png" alt="CLAIRLENS" className="h-6 w-auto object-contain" />
                <span className="text-[10px] font-mono text-wine-800 font-bold border-l border-wine-200 pl-3">A UNIT OF CLAIRVOYANT OPHTHALMICS</span>
              </div>

              <h1 className="font-serif text-fluid-hero text-wine-950 font-medium mb-6 leading-tight">
                Engineering Clarity. <br />
                <span className="italic font-light text-gradient-wine">Defining Excellence.</span>
              </h1>

              <p className="text-fluid-body text-gray-700 font-light leading-relaxed mb-8 max-w-2xl">
                Clairlens combines advanced optical technology, state-of-the-art manufacturing, and premium lens treatments to create lenses designed for clarity, comfort, and confidence. Built around Swiss-level standards and deep red-wine distinction.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-7 py-3.5 rounded-full bg-wine-900 text-white text-xs uppercase tracking-widest font-semibold shadow-lg shadow-wine-900/30 hover:bg-wine-800 hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 rounded-full glass-light border-wine-800/20 text-wine-950 text-xs uppercase tracking-widest font-semibold hover:border-wine-800/40 hover:bg-white transition-all duration-300"
                >
                  Talk to Our Team
                </button>
              </div>

              {/* Minimal Technical Certification Bar */}
              <div className="mt-12 pt-6 border-t border-wine-800/10 flex flex-wrap items-center gap-6 text-xs text-wine-900/80 font-mono">
                {COMPANY_INFO.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-wine-700" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Hero Composite Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl p-4 glass-wine border-white/20 shadow-2xl shadow-wine-950/30 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-wine-950">
                  <img 
                    src={HERO_ASSET.src} 
                    alt={HERO_ASSET.alt}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Floating Overlay Glass Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-light border-white/80 backdrop-blur-xl shadow-xl">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-wine-800 font-bold mb-1">
                      Sub-Micron Diamond Surface
                    </div>
                    <div className="text-xs text-wine-950 font-semibold">
                      Zero Optical Wavefront Distortion
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT STORY */}
      <section className="py-20 sm:py-24 bg-white/60 relative border-y border-wine-800/10 backdrop-blur-md">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Editorial Typography */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-widest text-wine-800">
                Editorial Legacy & Engineering
              </div>

              <h2 className="font-serif text-fluid-title text-wine-950 font-medium leading-tight">
                Where Technology Meets <span className="italic font-light text-gradient-wine">Possibility</span>
              </h2>

              <p className="text-fluid-body text-gray-700 font-light leading-relaxed">
                Founded with a singular commitment to optical mastery, Clairlens bridges the gap between raw physical substrate physics and crystal-clear human perception. We engineer lenses not merely to correct vision, but to enhance everyday life through weightless comfort and optical fidelity.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  'Sub-micron surface polish to eliminate light scattering.',
                  'Pure monomer formulations guaranteeing Abbe clarity.',
                  'Automated cleanroom vacuum anti-reflective coating deposition.',
                  'Point-by-point digital freeform calculation for custom prescriptions.'
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-wine-100 border border-wine-800/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-wine-700" />
                    </div>
                    <span className="text-sm text-wine-950 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Image Composition */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl p-3 glass-light border-wine-800/20 shadow-2xl overflow-hidden">
                <img 
                  src={TECHNOLOGY_OPTICS_ASSET.src} 
                  alt={TECHNOLOGY_OPTICS_ASSET.alt}
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-2xl"
                />
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-wine-950/80 backdrop-blur-md border border-wine-500/40 text-xs font-mono text-wine-200">
                  Wavefront Scanning Active
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CLAIRLENS PHILOSOPHY */}
      <section className="py-20 sm:py-24 relative overflow-hidden">
        <div className="container-fluid">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-fluid-title text-wine-950 font-medium mb-4">
              Our Core <span className="italic font-light text-gradient-wine">Philosophy</span>
            </h2>
            <p className="text-fluid-body text-gray-700 font-light">
              Built upon three foundational pillars that define every lens leaving our laboratories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="rounded-3xl p-8 glass-light border-white/80 shadow-xl shadow-wine-950/5 hover:border-wine-800/30 hover:-translate-y-1.5 transition-all duration-300 relative group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-wine-900 text-white flex items-center justify-center shadow-md shadow-wine-900/20 group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7 text-wine-200" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-3 py-1 rounded-full bg-wine-100 text-wine-900 border border-wine-800/20">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-xs uppercase font-mono tracking-widest text-wine-700 font-bold mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="font-serif text-2xl text-wine-950 font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING EXCELLENCE */}
      <section className="py-20 sm:py-24 bg-wine-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-wine-800/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-fluid relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest font-mono text-wine-300 mb-2 font-semibold">
                Cleanroom Process Flow
              </div>
              <h2 className="font-serif text-fluid-title text-white font-medium">
                Manufacturing <span className="italic font-light text-wine-200">Excellence</span>
              </h2>
            </div>
            <p className="text-sm text-wine-200/80 max-w-md font-light">
              From raw optical polymer to final anti-reflective vacuum deposition, every stage adheres to ISO 13485 cleanroom standards.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {timelineStages.map((stage, idx) => (
              <div 
                key={stage.step}
                className="p-5 rounded-2xl bg-wine-900/60 border border-wine-700/40 backdrop-blur-md flex flex-col justify-between hover:border-wine-400/50 transition-colors"
              >
                <div>
                  <span className="text-2xl font-serif font-bold text-wine-300 block mb-3">
                    {stage.step}
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-wine-200/70 font-light leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-wine-800/60 w-full h-1 bg-wine-800/80 rounded-full overflow-hidden">
                  <div className="h-full bg-wine-400 rounded-full" style={{ width: `${((idx + 1) / 6) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden relative border border-wine-500/30">
            <img 
              src={MANUFACTURING_LAB_ASSET.src} 
              alt={MANUFACTURING_LAB_ASSET.alt}
              className="w-full h-64 sm:h-80 object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/40 to-transparent flex items-end p-6 sm:p-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-wine-300 font-semibold block mb-1">
                  Clairlens Manufacturing Facility — Balanagar, Hyderabad
                </span>
                <div className="text-lg font-serif text-white font-medium">
                  ISO Class 5 Cleanroom Environment — Zero Dust Adhesion Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUALITY & TECHNOLOGY */}
      <section className="py-20 sm:py-24 relative">
        <div className="container-fluid">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-fluid-title text-wine-950 font-medium mb-4">
              Optical <span className="italic font-light text-gradient-wine">Technology Matrix</span>
            </h2>
            <p className="text-fluid-body text-gray-700 font-light">
              Advanced engineering pillars embedded into every Clairlens lens product range.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={feat.title}
                  className="p-6 rounded-2xl glass-light border-wine-800/10 hover:border-wine-800/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-wine-100 border border-wine-800/20 text-wine-900 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-wine-950 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. STATISTICS */}
      <section className="py-16 sm:py-20 bg-wine-900 text-white relative">
        <div className="container-fluid">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-wine-950/60 border border-wine-700/40"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-wine-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase font-mono tracking-widest text-wine-300 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-wine-200/70 font-light">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ABOUT CTA */}
      <section className="py-20 sm:py-24">
        <div className="container-fluid">
          <div className="rounded-3xl p-8 sm:p-14 glass-wine text-white text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-xs uppercase font-mono tracking-widest text-wine-300 font-semibold block mb-3">
                Advanced Optical Technology
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4">
                Clarity Begins With Quality.
              </h2>
              <p className="text-sm text-wine-200/90 font-light leading-relaxed mb-8">
                Discover the full spectrum of Clairlens optical indices, custom coating matrices, and partner opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-8 py-3.5 rounded-full bg-white text-wine-950 text-xs uppercase tracking-widest font-semibold hover:bg-wine-100 transition-colors shadow-lg"
                >
                  Explore Products
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-3.5 rounded-full border border-white/40 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Clairlens
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
