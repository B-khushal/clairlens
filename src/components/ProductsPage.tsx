import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ArrowRight, X, Check, ShieldCheck, Layers, Eye, CheckCircle2, ChevronRight } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { PRODUCTS_CATALOG_DATA, ProductItem, COATINGS_DATA, LENS_INDICES_DATA, HERO_ASSET } from '../data/assetsData';

interface ProductsPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Ranges');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalProduct(null);
    };
    if (activeModalProduct) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProduct]);

  const [comparisonIndex, setComparisonIndex] = useState(LENS_INDICES_DATA[4]); // Default 1.67

  const categories = [
    'All Ranges',
    'Standard Index',
    'Mid Index',
    'Polycarbonate',
    'Thin',
    'Ultra-Thin',
    'Super-Thin',
    'Digital Vision',
    'Premium Coatings'
  ];

  // Filtered Products Catalog
  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG_DATA.filter((prod) => {
      const matchesCategory = selectedCategory === 'All Ranges' || prod.category === selectedCategory;
      const matchesSearch = 
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.index.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const breadcrumbItems = [{ label: 'Lens Range & Products' }];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ivory text-gray-900 overflow-x-hidden min-h-screen">
      
      {/* 1. PRODUCTS HERO */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-wine-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-wine-800/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-fluid relative z-10">
          <Breadcrumbs items={breadcrumbItems} onNavigate={onNavigate} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wine-800/20 bg-white/80 backdrop-blur-md text-xs font-semibold tracking-widest text-wine-950 uppercase mb-6 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-wine-700" />
                CLAIRLENS LENS RANGE
              </div>

              <h1 className="font-serif text-fluid-hero text-wine-950 font-medium mb-6 leading-tight">
                Advanced Lenses. <br />
                <span className="italic font-light text-gradient-wine">Designed for Clarity.</span>
              </h1>

              <p className="text-fluid-body text-gray-700 font-light leading-relaxed mb-8 max-w-2xl">
                Explore precision-engineered optical lens solutions crafted for every prescription requirement, lifestyle demand, and aesthetic framing choice. Built from authentic Japanese Mitsui polymers and high-index organic resins.
              </p>

              {/* Quick Spec Pills */}
              <div className="flex flex-wrap gap-3 text-xs font-mono">
                <div className="px-3.5 py-1.5 rounded-full bg-white/80 border border-wine-800/20 text-wine-950 flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-wine-700" />
                  Indices: 1.50 – 1.74
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-white/80 border border-wine-800/20 text-wine-950 flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-wine-700" />
                  100% UV400 Solar Cut
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-white/80 border border-wine-800/20 text-wine-950 flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-wine-700" />
                  Wavefront Freeform Polished
                </div>
              </div>
            </motion.div>

            {/* Right Hero Visualizer Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl p-4 glass-wine border-white/20 shadow-2xl overflow-hidden relative">
                <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-wine-950 flex items-center justify-center p-6">
                  <img 
                    src={HERO_ASSET.src} 
                    alt="Clairlens floating optical lens showcase"
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-wine-950/90 border border-wine-500/40 text-[11px] font-mono text-wine-200">
                    1.74 Super High Index
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-light border-white/80 text-wine-950 text-xs font-medium">
                    1.6mm Razor-Thin Edge Profile
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CATEGORY NAV & FILTER BAR */}
      <section className="py-8 bg-white/80 sticky top-20 z-40 border-y border-wine-800/10 backdrop-blur-xl shadow-sm">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Horizontal Category Nav Pills */}
            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar py-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? 'bg-wine-900 text-white shadow-md shadow-wine-900/30'
                        : 'bg-wine-50/80 text-wine-950 border border-wine-800/15 hover:border-wine-800/30 hover:bg-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-wine-800/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search lenses, index, coating..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full text-xs bg-wine-50/60 border border-wine-800/20 text-wine-950 focus:outline-none focus:border-wine-700 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-wine-800 hover:text-wine-950"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG GRID */}
      <section className="py-16 sm:py-24">
        <div className="container-fluid">
          
          <div className="flex items-center justify-between mb-8">
            <div className="text-xs uppercase font-mono tracking-widest text-wine-800 font-bold">
              Showing {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
            </div>
            {selectedCategory !== 'All Ranges' && (
              <button
                onClick={() => setSelectedCategory('All Ranges')}
                className="text-xs text-wine-700 hover:underline font-medium"
              >
                Clear Category Filter ✕
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 rounded-3xl glass-light border-wine-800/10">
              <SlidersHorizontal className="w-10 h-10 text-wine-700 mx-auto mb-4 opacity-50" />
              <h3 className="font-serif text-2xl text-wine-950 mb-2">No Matching Products</h3>
              <p className="text-xs text-gray-600 mb-6">Try adjusting your search keywords or active category filter.</p>
              <button
                onClick={() => { setSelectedCategory('All Ranges'); setSearchQuery(''); }}
                className="px-6 py-2.5 rounded-full bg-wine-900 text-white text-xs uppercase tracking-widest font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-3xl glass-light border-white/80 shadow-xl shadow-wine-950/5 hover:border-wine-800/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative aspect-[4/3] bg-white/95 border-b border-wine-800/10 p-3 overflow-hidden flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-wine-950/90 border border-wine-500/40 text-[11px] font-mono font-bold text-wine-100 shadow-md">
                        INDEX {product.index}
                      </div>
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[10px] font-mono text-wine-950 font-bold shadow-sm">
                        {product.edgeThickness} Edge
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-5 sm:p-6">
                      <div className="text-[10px] uppercase font-mono tracking-widest text-wine-700 font-bold mb-1">
                        {product.material}
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-wine-950 mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-600 font-light leading-relaxed mb-4 line-clamp-2">
                        {product.keyBenefit}
                      </p>

                      {/* Specs snippet */}
                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-wine-800/10 text-[11px] font-mono mb-4">
                        <div>
                          <span className="text-gray-500 block text-[9px] uppercase">Power Range</span>
                          <span className="text-wine-950 font-semibold">{product.powerRange}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block text-[9px] uppercase">Weight</span>
                          <span className="text-wine-950 font-semibold">{product.weightReduction}</span>
                        </div>
                      </div>

                      {/* Coatings tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.coatings.slice(0, 2).map((c, i) => (
                          <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-wine-50 text-wine-900 border border-wine-800/15">
                            {c}
                          </span>
                        ))}
                        {product.coatings.length > 2 && (
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-wine-50 text-wine-800">
                            +{product.coatings.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="p-5 sm:p-6 pt-0">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="w-full py-3 rounded-2xl bg-wine-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-wine-900 transition-colors flex items-center justify-center gap-2 group-hover:shadow-md"
                    >
                      <span>View Specifications</span>
                      <ChevronRight className="w-4 h-4 text-wine-300" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. DEDICATED LENS INDEX COMPARISON MODULE */}
      <section className="py-20 sm:py-24 bg-white/80 border-y border-wine-800/10 backdrop-blur-md">
        <div className="container-fluid">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-wine-800 font-bold block mb-2">
              Optical Engineering Comparison
            </span>
            <h2 className="font-serif text-fluid-title text-wine-950 font-medium mb-4">
              Find Your Ideal <span className="italic font-light text-gradient-wine">Optical Index</span>
            </h2>
            <p className="text-fluid-body text-gray-700 font-light">
              Compare physical edge thickness, weight reduction percentage, and Abbe optical clarity values across our complete substrate range.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Index Selector buttons */}
            <div className="lg:col-span-6 space-y-3">
              {LENS_INDICES_DATA.map((item) => {
                const isActive = comparisonIndex.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setComparisonIndex(item)}
                    className={`w-full text-left rounded-2xl p-4 transition-all duration-300 border ${
                      isActive
                        ? 'bg-wine-950 text-white border-wine-500/40 shadow-xl shadow-wine-950/20'
                        : 'bg-white text-wine-950 border-wine-800/10 hover:border-wine-800/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-serif text-xl font-bold border ${
                          isActive ? 'bg-wine-800 text-white border-wine-400/50' : 'bg-wine-50 text-wine-950 border-wine-800/20'
                        }`}>
                          {item.index}
                        </div>
                        <div>
                          <div className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-wine-950'}`}>
                            {item.material}
                          </div>
                          <div className={`text-xs ${isActive ? 'text-wine-200' : 'text-gray-500'}`}>
                            {item.power}
                          </div>
                        </div>
                      </div>

                      <div className="text-right font-mono">
                        <div className={`text-xs font-bold ${isActive ? 'text-wine-200' : 'text-wine-900'}`}>
                          {item.edgeThicknessMm}
                        </div>
                        <div className={`text-[10px] ${isActive ? 'text-wine-300' : 'text-gray-500'}`}>
                          {item.weightReduction}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Comparison Visualizer Box */}
            <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-wine-950 text-white border border-wine-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-wine-300 font-semibold">
                  Profile Cutaway Analysis
                </span>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-wine-800 text-wine-100 border border-wine-500/40">
                  {comparisonIndex.index} Index
                </span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-white mb-2">
                {comparisonIndex.material}
              </h3>
              <p className="text-xs text-wine-200/80 mb-6 font-light">
                {comparisonIndex.description}
              </p>

              {/* Animated Lens Shape Cutaway */}
              <div className="h-40 rounded-2xl bg-wine-900/60 border border-wine-700/40 flex items-center justify-center p-4 mb-6 relative overflow-hidden">
                <motion.div
                  key={comparisonIndex.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[200px] rounded-[50%] bg-gradient-to-b from-white/90 via-white/30 to-wine-500/20 backdrop-blur-md border border-white/80 shadow-2xl flex items-center justify-center"
                  style={{ height: `${(comparisonIndex.thickness / 100) * 90 + 20}px` }}
                >
                  <span className="font-mono text-sm font-bold text-wine-950 drop-shadow-sm">
                    {comparisonIndex.edgeThicknessMm}
                  </span>
                </motion.div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 text-center pt-4 border-t border-wine-800/60 font-mono">
                <div className="p-2.5 rounded-xl bg-wine-900/60 border border-wine-700/40">
                  <div className="text-[10px] text-wine-300">Abbe Value</div>
                  <div className="text-sm font-semibold text-white">{comparisonIndex.abbeyValue}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-wine-900/60 border border-wine-700/40">
                  <div className="text-[10px] text-wine-300">Density</div>
                  <div className="text-sm font-semibold text-white">{comparisonIndex.density}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-wine-900/60 border border-wine-700/40">
                  <div className="text-[10px] text-wine-300">UV Cut</div>
                  <div className="text-sm font-semibold text-white">{comparisonIndex.uvProtection}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. COATING COMPATIBILITY MATRIX SHOWCASE */}
      <section className="py-20 sm:py-24">
        <div className="container-fluid">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-wine-800 font-bold block mb-2">
              Optical Surface Protection
            </span>
            <h2 className="font-serif text-fluid-title text-wine-950 font-medium mb-4">
              Premium Coating <span className="italic font-light text-gradient-wine">Matrix</span>
            </h2>
            <p className="text-fluid-body text-gray-700 font-light">
              Every Clairlens product is compatible with our signature nano-composite coating treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COATINGS_DATA.map((coat) => (
              <div key={coat.id} className="rounded-3xl p-6 glass-light border-white/80 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-white/95 border border-wine-800/15 p-3 shadow-sm flex items-center justify-center">
                    <img src={coat.image} alt={coat.altText} className="w-full h-full object-contain rounded-xl" />
                    <span className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-wine-950/90 text-[10px] font-mono text-wine-200 border border-wine-500/40 shadow-sm">
                      {coat.badge}
                    </span>
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-wine-700 font-bold mb-1">
                    {coat.label}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-wine-950 mb-2">
                    {coat.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed mb-4">
                    {coat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-wine-800/10 space-y-1.5">
                  {coat.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-wine-950 font-medium">
                      <Check className="w-3.5 h-3.5 text-wine-700" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRODUCTS CTA */}
      <section className="py-20 sm:py-24 bg-wine-950 text-white relative">
        <div className="container-fluid text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4">
              Need Help Choosing the Right Lens?
            </h2>
            <p className="text-sm text-wine-200/90 font-light leading-relaxed mb-8">
              Our optical specialists can assist retailers, distributors, and lab technicians in matching the exact index and coating matrix to your regional requirements.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full bg-white text-wine-950 text-xs uppercase tracking-widest font-semibold hover:bg-wine-100 transition-colors shadow-xl"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAIL MODAL */}
      <AnimatePresence>
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-wine-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-ivory text-wine-950 border border-wine-800/30 shadow-2xl p-6 sm:p-8 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-wine-100 hover:bg-wine-200 text-wine-950 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left Visual Box */}
                <div className="md:col-span-5 space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white/95 relative border border-wine-800/20 p-3 shadow-md flex items-center justify-center">
                    <img 
                      src={activeModalProduct.image} 
                      alt={activeModalProduct.name}
                      className="w-full h-full object-contain rounded-xl"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-wine-950/90 text-wine-100 text-xs font-mono font-bold shadow-sm">
                      INDEX {activeModalProduct.index}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-wine-800/10 space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Substrate Material:</span>
                      <span className="font-semibold text-wine-950">{activeModalProduct.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Edge Thickness:</span>
                      <span className="font-semibold text-wine-950">{activeModalProduct.edgeThickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Weight Reduction:</span>
                      <span className="font-semibold text-wine-950">{activeModalProduct.weightReduction}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Abbe Clarity Value:</span>
                      <span className="font-semibold text-wine-950">{activeModalProduct.abbeyValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">UV Cut Protection:</span>
                      <span className="font-semibold text-wine-950">{activeModalProduct.uvProtection}</span>
                    </div>
                  </div>
                </div>

                {/* Right Specifications Box */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-wine-700 font-bold block mb-1">
                      {activeModalProduct.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-wine-950 mb-3">
                      {activeModalProduct.name}
                    </h2>
                    <p className="text-sm text-gray-700 font-light leading-relaxed">
                      {activeModalProduct.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-wine-900 font-bold mb-2">
                      Recommended Application
                    </h4>
                    <div className="p-3 rounded-xl bg-wine-50 border border-wine-800/15 text-xs text-wine-950 font-medium">
                      {activeModalProduct.recommendedUse}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-wine-900 font-bold mb-3">
                      Engineering Highlights
                    </h4>
                    <div className="space-y-2">
                      {activeModalProduct.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-wine-950">
                          <CheckCircle2 className="w-4 h-4 text-wine-700 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-wine-900 font-bold mb-2">
                      Compatible Coating Matrices
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProduct.coatings.map((c, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white border border-wine-800/20 text-xs font-mono text-wine-900">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-wine-800/10 flex flex-wrap gap-4">
                    <button
                      onClick={() => {
                        const prodName = activeModalProduct.name;
                        setActiveModalProduct(null);
                        onNavigate('contact', { enquiryType: 'Product Inquiry', product: prodName });
                      }}
                      className="px-6 py-3 rounded-full bg-wine-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-wine-800 transition-colors shadow-lg"
                    >
                      Inquire for Distribution
                    </button>
                    <button
                      onClick={() => setActiveModalProduct(null)}
                      className="px-6 py-3 rounded-full glass-light border-wine-800/20 text-wine-950 text-xs uppercase tracking-widest font-semibold hover:bg-white"
                    >
                      Close Details
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
