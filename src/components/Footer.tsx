interface FooterProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string, anchor?: string) => {
    if (onNavigate) {
      onNavigate(page, anchor);
    }
  };

  return (
    <footer className="bg-wine-950 text-white pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-wine-800/40 relative overflow-hidden">
      {/* Subtle wine glow backdrop */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-wine-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button onClick={() => handleNav('home')} className="flex items-center gap-3 group mb-4 sm:mb-6 text-left focus:outline-none">
              <div className="w-8 h-8 rounded-full border border-wine-500/50 flex items-center justify-center overflow-hidden bg-wine-900/60 p-0.5">
                <div className="w-full h-full rounded-full border border-wine-400 group-hover:rotate-180 transition-transform duration-700 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-wine-300" />
                </div>
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">Clairlens</span>
            </button>
            <p className="text-xs text-wine-200/80 font-light leading-relaxed max-w-xs mb-4 sm:mb-6">
              Luxury optical lens manufacturing built around glass transparency, sub-micron engineering, and deep red-wine optical distinction.
            </p>
            <div className="text-[11px] font-mono text-wine-300/70">
              ISO 8980 & ISO 13485 Certified
            </div>
          </div>
          
          {/* Main Pages Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-wine-300 mb-4 sm:mb-6 font-mono">Company & Products</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <button onClick={() => handleNav('home')} className="text-wine-200/70 hover:text-white transition-colors py-1 text-left">Home Overview</button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="text-wine-200/70 hover:text-white transition-colors py-1 text-left">About Clairlens Precision</button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="text-wine-200/70 hover:text-white transition-colors py-1 text-left">Complete Lens Range</button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="text-wine-200/70 hover:text-white transition-colors py-1 text-left">Contact Partner Desk</button>
              </li>
            </ul>
          </div>
          
          {/* Coating Matrix Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-wine-300 mb-4 sm:mb-6 font-mono">Coating Matrix</h4>
            <ul className="space-y-2.5 text-xs font-light">
              {['Silica Hard Coat', 'Aegean HMC Green', 'Pacific Blue Shield', 'Aurora Night Drive'].map(item => (
                <li key={item}>
                  <button onClick={() => handleNav('products')} className="text-wine-200/70 hover:text-white transition-colors py-1 text-left">{item}</button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Precision Tech Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-wine-300 mb-4 sm:mb-6 font-mono">Precision Tech</h4>
            <ul className="space-y-2.5 text-xs font-light">
              {['Freeform Surfacing', 'Wavefront Interferometry', 'Diamond Cutting Cleanroom', 'Automated Vacuum AR Lab'].map(item => (
                <li key={item}>
                  <button onClick={() => handleNav('about')} className="text-wine-200/70 hover:text-white transition-colors py-1 text-left">{item}</button>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-wine-800/40 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-wine-300/60 font-light">
            &copy; {new Date().getFullYear()} Clairlens Optical Manufacturing AG. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-wine-300/60">
            <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">Privacy Specification</button>
            <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">Optical Standard Operating Procedures</button>
            <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">ISO Quality Certificates</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

