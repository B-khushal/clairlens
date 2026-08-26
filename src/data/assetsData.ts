/**
 * Centralized Image Asset & Product Specification Registry for Clairlens
 * Primary visual source of truth for optical glass imagery, lens index metrics, and coating specifications.
 */

export interface CoatingSpec {
  id: string;
  name: string;
  label: string;
  positioning: string;
  description: string;
  image: string;
  altText: string;
  color: string;
  reflection: string;
  shadow: string;
  accent: string;
  glowColor: string;
  borderGlow: string;
  badge: string;
  features: string[];
}

export interface LensIndexSpec {
  id: string;
  index: string;
  material: string;
  power: string;
  bestFor: string;
  thickness: number; // Percentage relative to standard 1.50
  weightReduction: string;
  edgeThicknessMm: string;
  abbeyValue: number;
  density: string;
  uvProtection: string;
  description: string;
}

export const HERO_ASSET = {
  src: '/images/hero_glass_lens.jpg',
  alt: 'Clairlens Precision Optical Glass Lens floating over deep burgundy environment',
  title: 'Ultra-Clear Precision Optical Lens',
  caption: 'Manufactured with sub-micron diamond polishing and digital freeform surfacing.'
};

export const LENS_INDEX_TECH_ASSET = {
  src: '/images/lens_index_tech.jpg',
  alt: 'Technical optical lens cross-section and light path analysis diagram',
  title: 'Optical Refraction & Thickness Measurement',
};

export const MANUFACTURING_LAB_ASSET = {
  src: '/images/manufacturing_lab.jpg',
  alt: 'High-precision European optical lens polishing machinery in cleanroom lab',
  title: 'Automated Cleanroom Manufacturing',
};

export const TECHNOLOGY_OPTICS_ASSET = {
  src: '/images/technology_optics.jpg',
  alt: 'Digital freeform laser scanning on curved optical glass lens',
  title: 'Wavefront Freeform Digital Surfacing',
};

export const COATINGS_DATA: CoatingSpec[] = [
  {
    id: 'silica',
    name: 'Silica',
    label: 'Hard Coat',
    positioning: 'Sub-Micron Scratch Durability',
    description: 'Silica hard coating binds nano-composite quartz particles to the lens matrix, providing exceptional resistance against everyday micro-scratches while maintaining 99.8% light transmission.',
    image: '/images/Screenshot 2026-08-26 163158.png',
    altText: 'Silica Hard Coat optical lens with pristine clear reflection on white pedestal',
    color: 'from-gray-100/90 to-white/60',
    reflection: 'bg-white/80',
    shadow: 'shadow-gray-400/20',
    accent: 'bg-gray-700',
    glowColor: 'rgba(255, 255, 255, 0.4)',
    borderGlow: 'border-white/40',
    badge: 'Standard Defense',
    features: ['Anti-Scratch Barrier', 'Easy Wipe Surface', 'Impact Shield', '99.8% Transparency']
  },
  {
    id: 'aegean',
    name: 'Aegean',
    label: 'HMC Green Coat',
    positioning: 'Anti-Glare Clarity for All Environments',
    description: 'Featuring a multi-layered emerald green anti-reflective matrix, Aegean eliminates reflections from headlights and artificial lights, combined with super-hydrophobic moisture repelling.',
    image: '/images/Screenshot 2026-08-26 163212.png',
    altText: 'Aegean HMC Green anti-reflective coating showcasing emerald glare reflection',
    color: 'from-emerald-950/40 to-emerald-900/20',
    reflection: 'bg-emerald-400/80',
    shadow: 'shadow-emerald-900/30',
    accent: 'bg-emerald-500',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    borderGlow: 'border-emerald-500/40',
    badge: 'Anti-Reflection',
    features: ['Emerald AR Sheen', 'Super Hydrophobic', 'Anti-Static Dust Repel', 'Crisp Night Vision']
  },
  {
    id: 'pacific',
    name: 'Pacific',
    label: 'Blue Coat',
    positioning: 'Optimised Digital Screen Protection',
    description: 'Pacific Blue Coat selectively filters high-energy visible (HEV) blue light between 415-455nm emitted by smartphones and screens, preventing visual fatigue while preserving true color fidelity.',
    image: '/images/Screenshot 2026-08-26 163246.png',
    altText: 'Pacific Blue Coat lens displaying sapphire blue light protection sheen',
    color: 'from-blue-950/40 to-blue-900/20',
    reflection: 'bg-blue-400/80',
    shadow: 'shadow-blue-900/30',
    accent: 'bg-blue-500',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    borderGlow: 'border-blue-500/40',
    badge: 'Digital Shield',
    features: ['HEV Blue Light Filter', 'Glare Reduction', 'Flicker Minimization', 'Color-True Clarity']
  },
  {
    id: 'aurora',
    name: 'Aurora Range',
    label: 'Night Drive Coat',
    positioning: 'Enhanced Low-Light & Driving Vision',
    description: 'Engineered with deep ruby-red glare dampening filters, Aurora Range dampens intense LED headlight flare and wet tarmac reflections, providing ultimate high-contrast confidence for night driving.',
    image: '/images/Screenshot 2026-08-26 163255.png',
    altText: 'Aurora Range Night Drive lens with deep ruby red coating sheen',
    color: 'from-wine-900/60 to-wine-950/80',
    reflection: 'bg-rose-400/80',
    shadow: 'shadow-wine-900/50',
    accent: 'bg-wine-500',
    glowColor: 'rgba(139, 67, 91, 0.5)',
    borderGlow: 'border-wine-400/50',
    badge: 'Night Drive Flagship',
    features: ['LED Flare Suppressor', 'High Contrast Optics', 'Multi-Angle Anti-Reflective', 'UV400 Total Block']
  }
];

export const LENS_INDICES_DATA: LensIndexSpec[] = [
  {
    id: '1.50',
    index: '1.50',
    material: 'Standard Optical Polymer',
    power: '+2.00 / -2.00 SPH',
    bestFor: 'Mild prescriptions & full-frame eyewear',
    thickness: 100,
    weightReduction: 'Baseline (0%)',
    edgeThicknessMm: '4.2 mm',
    abbeyValue: 58,
    density: '1.32 g/cm³',
    uvProtection: '95% UV Cut',
    description: 'The traditional optical standard providing optimal Abbe clarity for low power requirements.'
  },
  {
    id: '1.56',
    index: '1.56',
    material: 'Mid-Index Resin',
    power: '+4.00 / -4.00 SPH',
    bestFor: 'Light prescriptions seeking slim profile',
    thickness: 85,
    weightReduction: '15% Lighter',
    edgeThicknessMm: '3.5 mm',
    abbeyValue: 42,
    density: '1.28 g/cm³',
    uvProtection: '100% UV400',
    description: '15% thinner than standard lenses with built-in UV protection for everyday versatility.'
  },
  {
    id: '1.59',
    index: '1.59',
    material: 'Polycarbonate Shield',
    power: '+4.00 / -6.00 SPH',
    bestFor: 'Impact resistance, rimless frames & sports',
    thickness: 80,
    weightReduction: '22% Lighter',
    edgeThicknessMm: '3.2 mm',
    abbeyValue: 31,
    density: '1.20 g/cm³',
    uvProtection: '100% UV400',
    description: 'Virtually unbreakable polymer offering maximum eye safety and high impact resistance.'
  },
  {
    id: '1.60',
    index: '1.60',
    material: 'MR-8 High Index Glass-Polymer',
    power: '+6.00 / -8.00 SPH',
    bestFor: 'Moderate prescriptions & rimless aesthetics',
    thickness: 70,
    weightReduction: '30% Lighter',
    edgeThicknessMm: '2.8 mm',
    abbeyValue: 41,
    density: '1.30 g/cm³',
    uvProtection: '100% UV400',
    description: 'Premium Japanese MR-8 material combining superior optical clarity with high tensile strength.'
  },
  {
    id: '1.67',
    index: '1.67',
    material: 'MR-7 Ultra-High Index',
    power: '+8.00 / -12.00 SPH',
    bestFor: 'High prescriptions requiring elegant thinness',
    thickness: 55,
    weightReduction: '40% Lighter',
    edgeThicknessMm: '2.1 mm',
    abbeyValue: 32,
    density: '1.35 g/cm³',
    uvProtection: '100% UV400',
    description: 'Ultra-thin profile engineered for high prescriptions to eliminate unwanted bug-eye distortion.'
  },
  {
    id: '1.74',
    index: '1.74',
    material: 'Super High-Index Optical Resin',
    power: '+10.00 / -20.00 SPH',
    bestFor: 'Strong prescriptions seeking ultimate luxury',
    thickness: 45,
    weightReduction: '50% Lighter',
    edgeThicknessMm: '1.6 mm',
    abbeyValue: 33,
    density: '1.47 g/cm³',
    uvProtection: '100% UV400',
    description: 'The pinnacle of optical index engineering — maximum lightness and razor-thin edge profile.'
  }
];

export const FEATURES_DATA = [
  {
    title: 'Sub-Micron Surface Polish',
    subtitle: 'Nanometer Precision',
    description: 'Every glass lens surface is polished to within nanometer tolerances, virtually eliminating light scattering and distortion.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Total UV400 Blockade',
    subtitle: '100% Ocular Protection',
    description: 'Absorbs harmful UVA and UVB radiation up to 400nm, guarding retinal health against long-term solar degradation.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Hydrophobic & Oleophobic',
    subtitle: 'Water & Oil Repellent',
    description: 'Advanced fluorine coating causes water droplets and finger oils to bead up and slip off instantly.',
    icon: 'Droplets'
  },
  {
    title: 'Anti-Static Dust Shield',
    subtitle: 'Zero Particle Adhesion',
    description: 'Neutralizes static electricity build-up on the lens surface so environmental dust particles never stick.',
    icon: 'Zap'
  },
  {
    title: 'Freeform Wavefront Geometry',
    subtitle: 'Point-by-Point Calculation',
    description: 'Custom digital calculation for your exact eye anatomy to deliver razor-sharp peripheral focus.',
    icon: 'Eye'
  },
  {
    title: 'Thermal & Impact Resilience',
    subtitle: 'Extreme Durability',
    description: 'Tested against rapid temperature shifts and high-velocity impacts for complete confidence in extreme environments.',
    icon: 'Layers'
  }
];

export const COMPANY_INFO = {
  name: 'Clairlens Optical Manufacturing AG',
  tagline: 'Engineering Clarity. Defining Precision.',
  email: 'contact@clairlens.com',
  partnersEmail: 'partners@clairlens.com',
  phone: '+41 44 890 2100',
  tollFree: '+1 (800) 555-CLAIR',
  address: 'Optics Valley 12, 8001 Zurich, Switzerland',
  hours: 'Monday – Friday: 08:00 – 18:00 CET',
  certifications: ['ISO 8980-1 Optical Standard', 'ISO 13485 Medical Cleanroom', 'CE Ocular Safety Compliant']
};

export interface ProductItem {
  id: string;
  name: string;
  category: string; // e.g. 'Standard Index', 'Mid Index', 'Thin', 'Ultra-Thin', 'Super-Thin', 'Polycarbonate', 'Digital Vision', 'Premium Coatings'
  index: string;
  material: string;
  powerRange: string;
  keyBenefit: string;
  coatings: string[];
  image: string;
  edgeThickness: string;
  weightReduction: string;
  abbeyValue: number;
  uvProtection: string;
  description: string;
  recommendedUse: string;
  highlights: string[];
}

export const PRODUCTS_CATALOG_DATA: ProductItem[] = [
  {
    id: 'prod-150',
    name: 'Clairlens 1.50 Standard Optical',
    category: 'Standard Index',
    index: '1.50',
    material: 'Standard Optical Polymer',
    powerRange: '+2.00 / -2.00 SPH',
    keyBenefit: 'Crystal Abbe clarity for mild prescriptions and full-frame eyewear.',
    coatings: ['Silica Hard Coat', 'Aegean HMC Green'],
    image: '/images/hero_glass_lens.jpg',
    edgeThickness: '4.2 mm',
    weightReduction: 'Baseline (0%)',
    abbeyValue: 58,
    uvProtection: '95% UV Cut',
    description: 'Engineered for exceptional optical Abbe value and low dispersion. Ideal for reading glasses, low distance corrections, and full-rim acetate frames.',
    recommendedUse: 'Full-rim frames, low power prescriptions (+2.00 to -2.00 SPH)',
    highlights: ['Max Abbe value 58', 'High scratch resilience', 'Cost-effective baseline clarity']
  },
  {
    id: 'prod-156',
    name: 'Clairlens 1.56 Mid-Index Slim',
    category: 'Mid Index',
    index: '1.56',
    material: 'Mid-Index Resin',
    powerRange: '+4.00 / -4.00 SPH',
    keyBenefit: '15% slimmer profile with built-in UV400 solar filtration.',
    coatings: ['Silica Hard Coat', 'Aegean HMC Green', 'Pacific Blue Shield'],
    image: '/images/lens_index_tech.jpg',
    edgeThickness: '3.5 mm',
    weightReduction: '15% Lighter',
    abbeyValue: 42,
    uvProtection: '100% UV400',
    description: 'Combines 15% weight reduction with native UV400 absorption, delivering a balanced blend of aesthetic elegance and optical accuracy.',
    recommendedUse: 'Everyday wear, moderate prescriptions, metal & acetate frames',
    highlights: ['15% thinner than 1.50', 'Integrated UV400 block', 'High tensile durability']
  },
  {
    id: 'prod-159',
    name: 'Clairlens 1.59 Polycarbonate Shield',
    category: 'Polycarbonate',
    index: '1.59',
    material: 'Polycarbonate Polymer',
    powerRange: '+4.00 / -6.00 SPH',
    keyBenefit: 'Shatterproof impact safety for sports, rimless frames & children.',
    coatings: ['Silica Hard Coat', 'Pacific Blue Shield'],
    image: '/images/manufacturing_lab.jpg',
    edgeThickness: '3.2 mm',
    weightReduction: '22% Lighter',
    abbeyValue: 31,
    uvProtection: '100% UV400',
    description: 'Virtually indestructible optical polymer designed to withstand severe mechanical impact. Essential for sports eyewear, industrial safety, and drill-mount rimless designs.',
    recommendedUse: 'Rimless drill-mounts, sports goggles, children & active lifestyles',
    highlights: ['10x impact resistance', '22% lighter weight', 'Rimless drill safety']
  },
  {
    id: 'prod-160',
    name: 'Clairlens 1.60 MR-8 Precision High',
    category: 'Thin',
    index: '1.60',
    material: 'MR-8 Japanese Glass-Polymer',
    powerRange: '+6.00 / -8.00 SPH',
    keyBenefit: '30% lighter with exceptional tensile strength for semi-rimless frames.',
    coatings: ['Silica Hard Coat', 'Aegean HMC Green', 'Pacific Blue Shield', 'Aurora Night Drive'],
    image: '/images/technology_optics.jpg',
    edgeThickness: '2.8 mm',
    weightReduction: '30% Lighter',
    abbeyValue: 41,
    uvProtection: '100% UV400',
    description: 'Formulated with authentic Japanese Mitsui MR-8 monomer. Delivers superior optical Abbe clarity (41) with high heat resistance and edge strength for rimless grooves.',
    recommendedUse: 'Moderate to high prescriptions, rimless and semi-rimless wire frames',
    highlights: ['MR-8 Monomer technology', '30% thinner profile', 'Superior tensile strength']
  },
  {
    id: 'prod-167',
    name: 'Clairlens 1.67 MR-7 Ultra-Thin',
    category: 'Ultra-Thin',
    index: '1.67',
    material: 'MR-7 High Index Substrate',
    powerRange: '+8.00 / -12.00 SPH',
    keyBenefit: '40% thinner edge profile eliminating visual distortion in strong prescriptions.',
    coatings: ['Aegean HMC Green', 'Pacific Blue Shield', 'Aurora Night Drive'],
    image: '/images/Screenshot 2026-08-26 163255.png',
    edgeThickness: '2.1 mm',
    weightReduction: '40% Lighter',
    abbeyValue: 32,
    uvProtection: '100% UV400',
    description: 'Designed specifically for high minus and plus prescriptions. The 1.67 index dramatically reduces lens bulging and edge thickness while maintaining crystal edge finish.',
    recommendedUse: 'Strong prescriptions (-4.00 to -12.00 SPH), luxury minimal eyewear',
    highlights: ['40% edge reduction', 'Flawless optical curvature', 'Anti-distortion geometry']
  },
  {
    id: 'prod-174',
    name: 'Clairlens 1.74 Super High-Index',
    category: 'Super-Thin',
    index: '1.74',
    material: 'Super High Resin Substrate',
    powerRange: '+10.00 / -20.00 SPH',
    keyBenefit: 'The world’s thinnest organic lens for extreme optical prescriptions.',
    coatings: ['Aegean HMC Green', 'Pacific Blue Shield', 'Aurora Night Drive'],
    image: '/images/hero_glass_lens.jpg',
    edgeThickness: '1.6 mm',
    weightReduction: '50% Lighter',
    abbeyValue: 33,
    uvProtection: '100% UV400',
    description: 'The pinnacle of optical refractive engineering. Reduces lens mass by up to 50%, providing ultra-flat aesthetic profile and featherlight comfort even for severe ametropia.',
    recommendedUse: 'Extreme prescriptions (-8.00 to -20.00 SPH), ultra-light rimless frames',
    highlights: ['50% lighter than standard', 'Ultra-flat front curve', 'Maximum edge elegance']
  },
  {
    id: 'prod-160-blue',
    name: 'Clairlens Pacific 1.60 Digital HEV Shield',
    category: 'Digital Vision',
    index: '1.60',
    material: 'MR-8 + HEV Blue Absorber',
    powerRange: '+6.00 / -8.00 SPH',
    keyBenefit: 'Selective 415-455nm HEV blue light filtration for modern screen users.',
    coatings: ['Pacific Blue Shield', 'Silica Hard Coat'],
    image: '/images/Screenshot 2026-08-26 163246.png',
    edgeThickness: '2.8 mm',
    weightReduction: '30% Lighter',
    abbeyValue: 41,
    uvProtection: '100% UV400 + HEV 455nm',
    description: 'Engineered for digital professionals, software engineers, and heavy screen users. Filters damaging high-energy blue rays while preserving color fidelity and visual comfort.',
    recommendedUse: 'Screen users, office environments, night digital work',
    highlights: ['HEV 455nm blue block', 'Zero color distortion', 'Anti-fatigue optics']
  },
  {
    id: 'prod-167-night',
    name: 'Clairlens Aurora 1.67 Night Drive Pro',
    category: 'Premium Coatings',
    index: '1.67',
    material: 'MR-7 + Ruby Flare Suppressor',
    powerRange: '+8.00 / -12.00 SPH',
    keyBenefit: 'Suppresses LED headlight dazzle and wet road glare for night driving.',
    coatings: ['Aurora Night Drive', 'Aegean HMC Green'],
    image: '/images/Screenshot 2026-08-26 163255.png',
    edgeThickness: '2.1 mm',
    weightReduction: '40% Lighter',
    abbeyValue: 32,
    uvProtection: '100% UV400',
    description: 'Combines ultra-thin 1.67 MR-7 optics with deep ruby-red glare dampening filters to reduce night-driving halo distortion from modern xenon and LED vehicle lighting.',
    recommendedUse: 'Night driving, low-light navigation, high contrast visual demands',
    highlights: ['LED flare suppression', 'High-contrast ruby filter', 'Ultra-thin 1.67 profile']
  }
];

