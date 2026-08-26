import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; page?: string }[];
  onNavigate: (page: string) => void;
}

export default function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border-white/60 shadow-sm text-xs">
      <button
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
  );
}
