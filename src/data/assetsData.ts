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
    positioning: 'Durability for Everyday Life',
    description: 'Silica coating significantly increases lens durability by providing robust scratch resistance, maintaining crystal-clear vision over time. Ideal for daily wear, Silica ensures your lenses withstand routine handling with ease.',
    image: '/images/Screenshot 2026-08-26 163158.png',
    altText: 'Silica Hard Coat optical lens with pristine clear reflection on white pedestal',
    color: 'from-gray-100/90 to-white/60',
    reflection: 'bg-white/80',
    shadow: 'shadow-gray-400/20',
    accent: 'bg-gray-700',
    glowColor: 'rgba(255, 255, 255, 0.4)',
    borderGlow: 'border-white/40',
    badge: 'Standard Defense',
    features: ['Robust Scratch Resistance', 'Daily Wear Durability', 'Routine Handling Protection', 'Crystal-Clear Vision']
  },
  {
    id: 'aegean',
    name: 'Aegean',
    label: 'HMC Green Coat',
    positioning: 'Anti-Glare Clarity for All Environments',
    description: 'The Aegean coating, featuring a green HMC layer, offers exceptional glare reduction, hydrophobic protection, and antistatic properties, making it perfect for everyday use in varying lighting conditions.',
    image: '/images/Screenshot 2026-08-26 163212.png',
    altText: 'Aegean HMC Green anti-reflective coating showcasing emerald glare reflection',
    color: 'from-emerald-950/40 to-emerald-900/20',
    reflection: 'bg-emerald-400/80',
    shadow: 'shadow-emerald-900/30',
    accent: 'bg-emerald-500',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    borderGlow: 'border-emerald-500/40',
    badge: 'Anti-Reflection',
    features: ['Green HMC Layer', 'Exceptional Glare Reduction', 'Hydrophobic Protection', 'Antistatic Properties']
  },
  {
    id: 'pacific',
    name: 'Pacific',
    label: 'Blue Coat',
    positioning: 'Optimised Digital Vision',
    description: 'Our Pacific coat incorporates a blue HMC coating, specifically designed to minimise digital eye strain. Perfect for extensive screen use, this coating significantly reduces harmful blue light and glare.',
    image: '/images/Screenshot 2026-08-26 163246.png',
    altText: 'Pacific Blue Coat lens displaying sapphire blue light protection sheen',
    color: 'from-blue-950/40 to-blue-900/20',
    reflection: 'bg-blue-400/80',
    shadow: 'shadow-blue-900/30',
    accent: 'bg-blue-500',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    borderGlow: 'border-blue-500/40',
    badge: 'Digital Shield',
    features: ['Blue HMC Layer', 'Minimises Digital Eye Strain', 'Harmful Blue Light Filter', 'Screen Glare Reduction']
  },
  {
    id: 'aurora',
    name: 'Aurora Range',
    label: 'Night Drive Coat',
    positioning: 'Enhanced Night Driving Experience',
    description: 'Auroraʼs advanced night drive coating dramatically improves night driving clarity by reducing glare from headlights and reflective surfaces, ensuring safer and more comfortable nighttime journeys.',
    image: '/images/Screenshot 2026-08-26 163255.png',
    altText: 'Aurora Range Night Drive lens with deep ruby red coating sheen',
    color: 'from-wine-900/60 to-wine-950/80',
    reflection: 'bg-rose-400/80',
    shadow: 'shadow-wine-900/50',
    accent: 'bg-wine-500',
    glowColor: 'rgba(139, 67, 91, 0.5)',
    borderGlow: 'border-wine-400/50',
    badge: 'Night Drive Flagship',
    features: ['Advanced Night Drive Coat', 'Headlight Glare Reduction', 'Reflective Surface Control', 'Safer Nighttime Journeys']
  }
];

export const LENS_INDICES_DATA: LensIndexSpec[] = [
  {
    id: '1.50',
    index: '1.5',
    material: 'Standard Plastic',
    power: '+7.00 / -7.00 SPH',
    bestFor: 'Basic everyday wear',
    thickness: 100,
    weightReduction: 'Baseline (0%)',
    edgeThicknessMm: '4.2 mm',
    abbeyValue: 58,
    density: '1.32 g/cm³',
    uvProtection: '95% UV Cut',
    description: 'Lens Index refers to how much a lens can bend light. Standard plastic is recommended for basic everyday wear with up to +/- 7.00 SPH power.'
  },
  {
    id: '1.56',
    index: '1.56',
    material: 'Mid-Index',
    power: '+8.00 / -8.00 SPH',
    bestFor: 'Thinner than standard',
    thickness: 85,
    weightReduction: '15% Lighter',
    edgeThicknessMm: '3.5 mm',
    abbeyValue: 42,
    density: '1.28 g/cm³',
    uvProtection: '100% UV400',
    description: 'Thinner than standard plastic lenses, offering lightweight comfort for prescriptions up to +/- 8.00 SPH.'
  },
  {
    id: '1.59',
    index: '1.59',
    material: 'Polycarbonate',
    power: '+7.00 / -8.00 SPH',
    bestFor: 'Impact-resistant, sports, kids',
    thickness: 80,
    weightReduction: '22% Lighter',
    edgeThicknessMm: '3.2 mm',
    abbeyValue: 31,
    density: '1.20 g/cm³',
    uvProtection: '100% UV400',
    description: 'Impact-resistant optical material engineered specifically for active lifestyles, sports eyewear, children, and rimless frames.'
  },
  {
    id: '1.60',
    index: '1.6',
    material: 'Thin',
    power: '+8.00 / -10.00 SPH',
    bestFor: 'Light and thinner for moderate powers',
    thickness: 70,
    weightReduction: '30% Lighter',
    edgeThicknessMm: '2.8 mm',
    abbeyValue: 41,
    density: '1.30 g/cm³',
    uvProtection: '100% UV400',
    description: 'Light and thinner lens design for moderate prescriptions up to -10.00 SPH with crisp edge-to-edge optical clarity.'
  },
  {
    id: '1.67',
    index: '1.67',
    material: 'Ultra-Thin',
    power: '+10.00 / -15.00 SPH',
    bestFor: 'High power with style and comfort',
    thickness: 55,
    weightReduction: '40% Lighter',
    edgeThicknessMm: '2.1 mm',
    abbeyValue: 32,
    density: '1.35 g/cm³',
    uvProtection: '100% UV400',
    description: 'Ultra-thin profile engineered for high prescriptions to maintain a natural look without edge bulging.'
  },
  {
    id: '1.74',
    index: '1.74',
    material: 'Super-Thin',
    power: '+10.00 / -20.00 SPH',
    bestFor: 'Strong prescriptions, superior look',
    thickness: 45,
    weightReduction: '50% Lighter',
    edgeThicknessMm: '1.6 mm',
    abbeyValue: 33,
    density: '1.47 g/cm³',
    uvProtection: '100% UV400',
    description: 'The world’s thinnest organic lens design for strong prescriptions up to -20.00 SPH, delivering superior aesthetics.'
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
  name: 'Clairvoyant Ophthalmics Pvt. Ltd.',
  brand: 'Clairlens',
  tagline: 'See the Future, Today.',
  email: 'contact@clairlens.com',
  partnersEmail: 'partners@clairlens.com',
  website: 'www.clairlens.com',
  phone: '+91 40 2300 0000',
  tollFree: '+91 1800 555 CLAIR',
  address: 'Plot No 60, S.V.C.I.E, Phase 2, Balanagar, Hyderabad, Telangana',
  hours: 'Monday – Saturday: 09:00 – 18:00 IST',
  certifications: ['ISO 8980-1 Optical Standard', 'ISO 13485 Medical Cleanroom', 'CE Ocular Safety Compliant'],
  terms: [
    'All prices are in ₹ per pair.',
    'Available power up to +/- 6.50 CYL.',
    'Above +/- 4.00 per pair add ₹300/-',
    'Prism add ₹300/- per pair.',
    'High power add ₹300/- per pair.',
    'Special Dia add ₹150/- per pair.',
    'All prices are exclusive of GST.',
    'Aurora (Night Drive Coating) available on Aegean for ₹200/- extra.',
    'Photochromatic products available in Green, Pink, Blue, Ambermatic for ₹200/- extra.'
  ]
};

export interface UltimateSeriesItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  idealFor: string[];
  fact: string;
}

export const ULTIMATE_SERIES_DATA: UltimateSeriesItem[] = [
  {
    id: 'classic',
    name: 'Ultimate Classic',
    tagline: 'A Confident First Step into Progressives',
    description: 'New to progressive lenses? Ultimate Classic is the perfect introduction. Designed with a comfortable learning curve, this lens offers smooth transitions across visual zones while maintaining affordability and everyday functionality. Whether youʼre reading, walking, or glancing across a room, Ultimate Classic helps you adapt quickly—without overwhelming your vision.',
    keyFeatures: [
      'Balanced Progressive Zones: Clear vision for distance, intermediate, and near.',
      'Gentle Adaptation Curve: Easy for first-time progressive users.',
      'Budget-Friendly Design: Affordable without compromising on core performance.',
      'Low Peripheral Distortion: Reduces "swim" effect as you move.',
      'Compatible with All Indexes & Coatings: Including blue light and photochromatic.'
    ],
    idealFor: [
      'First-time progressive lens users',
      'Individuals with basic lifestyle needs—reading, TV, walking, casual computer use',
      'Customers seeking an entry-level option with reliable performance',
      'Budget-conscious users looking for everyday comfort and function'
    ],
    fact: 'Most first-time progressive wearers adapt within just 3–5 days when starting with a beginner-optimised lens like Ultimate Classic.'
  },
  {
    id: 'everyday',
    name: 'Ultimate Everyday',
    tagline: 'All-Day Clarity. Zero Compromise.',
    description: 'From emails to errands, meetings to memories—your day is full of shifting demands. Ultimate Everyday is designed to keep pace with your lifestyle, offering effortless visual transitions from far to near, with a focus on clarity, comfort, and minimal distortion.',
    keyFeatures: [
      'Balanced Progressive Design: Smooth transitions between distance, intermediate, and reading zones.',
      'Wider Intermediate Field: For multitasking, screen use, and fast-paced routines.',
      'Minimal Peripheral Distortion: Comfortable movement, no visual swim.',
      'Lightweight, Everyday-Wear Build: Comfort that stays consistent all day.',
      'Optimised for All Environments: Indoors, outdoors, at work or on the go.'
    ],
    idealFor: [
      'Professionals with active, unpredictable days',
      'People juggling digital tasks, meetings, and movement',
      'Wearers looking for a reliable, do-it-all progressive',
      'Anyone who wants a lens that transitions as smoothly as their day does'
    ],
    fact: 'The human eye makes over 100,000 focus shifts a day—Ultimate Everyday is engineered to support every one of them without strain or lag.'
  },
  {
    id: 'work',
    name: 'Ultimate Work',
    tagline: 'Your Vision Partner for High-Performance Workdays',
    description: 'From spreadsheets to creative suites, dual screens to zoom meetings—todayʼs work is digital, dynamic, and demanding on your eyes. Ultimate Work is crafted for the way you work—optimised for mid-range tasks like reading, typing, designing, and multitasking between screens.',
    keyFeatures: [
      'Enhanced Intermediate Vision Zone: Wide, distortion-free space designed for screens, desks, and near-focus work.',
      'Ergonomic Visual Design: Reduces unnecessary head movements and awkward postures.',
      'Minimised Blue Light Disruption: Pairs seamlessly with blue light filter coatings to reduce digital fatigue.',
      'Quick Visual Adaptation: Seamless focus switch from screen to notebook or across multiple monitors.',
      'Thin, Modern Aesthetics: Designed to look sharp and feel lighter for all-day wear.'
    ],
    idealFor: [
      'Working professionals in tech, finance, design, law, or academics',
      'Individuals who spend 6+ hours/day in front of screens',
      'Office and hybrid workers managing multiple monitors or setups',
      'Anyone seeking sharper focus and reduced eye strain during tasks like typing, reading, presenting, and researching'
    ],
    fact: 'Staring at a screen for 8+ hours a day equals blinking 60% less—leading to dry eyes and blurred vision. Ultimate Work lenses help you stay focused longer by optimising your visual posture and reducing effort.'
  },
  {
    id: 'drive',
    name: 'Ultimate Drive',
    tagline: 'Drive Safer. See Sharper. Day or Night.',
    description: 'Whether youʼre navigating sun-soaked highways or dim, rainy streets—Ultimate Drive keeps your focus exactly where it should be: the road. Designed for drivers, sales professionals, and people always on the move, these lenses reduce glare, improve contrast, and make dashboard-to-road transitions effortless.',
    keyFeatures: [
      'Glare Reduction Technology: The Aurora coating minimises reflections from headlights, streetlights, and wet roads.',
      'Enhanced Distance & Near Zones: Optimised for both road visibility and dashboard clarity.',
      'High-Contrast Vision: Boosts object clarity in low-light or dusk/dawn conditions.',
      'Reduced Eye Fatigue: Improves comfort during long drives or night shifts.',
      'Compatible with Photochromatic Coating: Optional tint that adjusts to daylight while blocking UV rays.'
    ],
    idealFor: [
      'Daily commuters, field sales professionals, and long-distance drivers',
      'Individuals with light sensitivity during night driving',
      'People who are frequently switching focus between dashboard and road',
      'Riders navigating through bright sunlight, tunnels, or rainy evenings'
    ],
    fact: 'Glare from oncoming headlights is the #1 complaint among night time drivers. Ultimate Drive lenses reduce that glare by over 50%, helping you stay alert, focused, and safer behind the wheel.'
  },
  {
    id: 'signature',
    name: 'Ultimate Signature',
    tagline: 'Designed for Total Immersion',
    description: 'Ultimate Signature is the pinnacle of personalised vision. Every curve, transition, and viewing corridor is crafted using your unique lifestyle data: how you sit, move, read, walk, and wear your frames. Itʼs a lens that doesnʼt just correct vision—it aligns with how you live.',
    keyFeatures: [
      'Fully Personalised Optics: Adjusted for posture, frame tilt, vertex distance, and visual behaviour.',
      'Dynamic Visual Mapping: Lenses digitally crafted to match how you interact with your world.',
      'Ultra-Wide Viewing Corridors: Edge-to-edge clarity with virtually zero distortion.',
      'Adaptive Transitions: Quick adaptation between far, intermediate, and near zones.',
      'Aesthetically Optimised Design: Thin, stylish, and suited to modern premium frames.'
    ],
    idealFor: [
      'Premium eyewear users who expect the best',
      'Architects, designers, doctors, and high-functioning professionals',
      'Repeat progressive users seeking their next-level upgrade',
      'Individuals who value a flawless blend of vision, comfort, and style'
    ],
    fact: 'The first progressive lens was launched in 1959 by French inventor Bernard Maitenaz. Modern progressive lenses are so personalised, theyʼre as unique as your fingerprint.'
  }
];

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

