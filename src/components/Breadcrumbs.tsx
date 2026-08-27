import { ChevronRight, Home, ArrowLeft } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; page?: string }[];
  onNavigate: (page: string) => void;
}

export default function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      onNavigate('home');
    }
  };

  return (
    <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-wine-100 text-wine-950 font-semibold border border-wine-800/20 shadow-sm text-xs transition-colors cursor-pointer"
        title="Go Back"
      >
        <ArrowLeft className="w-3.5 h-3.5 text-wine-800" />
        <span>Back</span>
      </button>

      <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light border-white/60 shadow-sm text-xs">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-wine-900/80 hover:text-wine-700 transition-colors font-medium focus:outline-none"
        >
          <Home className="w-3.5 h-3.5 text-wine-700" />
          <span>Home</span>
        </button>
        
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-wine-400" />
            {item.page ? (
              <button
                type="button"
                onClick={() => onNavigate(item.page!)}
                className="text-wine-900/80 hover:text-wine-700 transition-colors font-medium focus:outline-none"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-wine-950 font-semibold">{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
