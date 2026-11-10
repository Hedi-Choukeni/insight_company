import { ServiceItem, PortfolioItem, ProcessStep, PillarItem } from '../types';

export const AGENCY_INFO = {
  name: 'Insight Company',
  tagline: 'We turn creative ideas into powerful brand experiences.',
  headline: 'READY TO GROW?',
  supportingHeadline: 'WE TURN CREATIVE IDEAS INTO POWERFUL BRAND EXPERIENCES.',
  description: 'Helping brands stand out, connect with their audience, and grow through creativity and digital strategy.',
  instagramHandle: '@insight__company',
  instagramUrl: 'https://www.instagram.com/insight__company/',
  phones: [
    { display: '24 245 468', international: '+216 24 245 468', waUrl: 'https://wa.me/21624245468?text=Hello%20Insight%20Company,%20I%20would%20like%20to%20discuss%20a%20project' },
    { display: '94 373 901', international: '+216 94 373 901', waUrl: 'https://wa.me/21694373901?text=Hello%20Insight%20Company,%20I%20would%20like%20to%20discuss%20a%20project' },
  ],
  email: 'contact@insightcompany.agency',
  location: 'Tunis, Tunisia',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'social-media',
    number: '01',
    title: 'Social Media Management',
    shortDescription: 'Strategic storytelling and feed architecture designed to cultivate authentic community engagement.',
    detailedDescription: 'From content calendar curation and high-impact reel production to community moderation and audience growth metrics, we position your brand at the center of cultural conversation.',
    deliverables: ['Content Strategy & Curation', 'Editorial Calendar Planning', 'Reels & Motion Snippets', 'Community Engagement & Moderation'],
    iconName: 'Share2',
    tag: 'Engagement & Reach'
  },
  {
    id: 'graphic-design',
    number: '02',
    title: 'Graphic Design',
    shortDescription: 'Editorial precision and avant-garde visual aesthetics tailored across digital and physical mediums.',
    detailedDescription: 'Precision layouts, bespoke typography pairings, and magnetic visual hierarchy that cut through the noise of crowded feeds and physical collateral alike.',
    deliverables: ['Editorial & Layout Systems', 'Promotional Key Visuals', 'Packaging & Print Collateral', 'Digital Campaign Graphics'],
    iconName: 'Palette',
    tag: 'Aesthetic Direction'
  },
  {
    id: 'branding-identity',
    number: '03',
    title: 'Branding & Visual Identity',
    shortDescription: 'Distinctive brand architectures, monograms, and design guidelines that build enduring brand equity.',
    detailedDescription: 'We translate your company core philosophy into a distinctive visual universe: custom logomarks, color mathematics, type systems, and complete brand rulebooks.',
    deliverables: ['Monogram & Logo Synthesis', 'Brand Guidelines & Design Tokens', 'Tone of Voice & Messaging', 'Iconography & Spatial Systems'],
    iconName: 'Crown',
    tag: 'Brand Core'
  },
  {
    id: 'video-production',
    number: '04',
    title: 'Video Production',
    shortDescription: 'Cinematic visual narratives, commercials, and motion design that captivate and convert.',
    detailedDescription: 'From moodboards and art-directed storyboards to sound design, cinematic color grading, and dynamic motion graphics that elevate your product presentations.',
    deliverables: ['Cinematic Brand Commercials', 'Social-First Vertical Video', 'Motion Graphics & 3D Elements', 'Color Grading & Soundscapes'],
    iconName: 'Film',
    tag: 'Motion & Emotion'
  },
  {
    id: 'digital-marketing',
    number: '05',
    title: 'Digital Marketing',
    shortDescription: 'Data-informed creative campaigns engineered for organic reach and sustainable audience growth.',
    detailedDescription: 'We bridge creative direction with conversion strategy, ensuring that every piece of creative work is supported by measurable funnel architecture and distribution channels.',
    deliverables: ['Growth Funnel Architecture', 'Audience Segmentation', 'Omnichannel Content Distribution', 'Performance Insights & Analytics'],
    iconName: 'TrendingUp',
    tag: 'Strategic Growth'
  },
  {
    id: 'advertising-campaigns',
    number: '06',
    title: 'Advertising Campaigns',
    shortDescription: 'High-impact multi-channel campaign concepts that resonate emotionally and inspire immediate action.',
    detailedDescription: 'End-to-end creative campaigns from initial big-idea conceptualization to multi-asset rollout across social, digital billboard, and interactive touchpoints.',
    deliverables: ['Creative Big-Idea Concepts', 'Launch Campaign Strategy', 'Ad Asset Variations & A/B Sets', 'Cross-Platform Rollout'],
    iconName: 'Megaphone',
    tag: 'Conversion & Impact'
  },
  {
    id: 'website-development',
    number: '07',
    title: 'Website Development',
    shortDescription: 'Fast, responsive, cinematic digital experiences with interactive micro-animations and seamless UX.',
    detailedDescription: 'Bespoke web platforms built with cutting-edge frontend engineering, fluid typography, 60 FPS motion design, and mobile-first responsiveness that leave an unforgettable impression.',
    deliverables: ['Custom Interactive Experiences', 'Responsive Mobile Architecture', 'Performance Optimization (60 FPS)', 'Modern CMS & Headless Integration'],
    iconName: 'Code',
    tag: 'Digital Presence'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'proj-01',
    title: 'Aura Spatial Systems',
    category: 'Branding',
    year: '2026',
    client: 'Design Concept Showcase',
    description: 'Minimalist geometric brand identity with dark emerald tones, precision typography, and architectural grid structure.',
    tags: ['Brand Identity', 'Geometric Typography', 'Art Direction'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'landscape',
    isFeatured: true
  },
  {
    id: 'proj-02',
    title: 'Lumina Digital Narrative',
    category: 'Social Media',
    year: '2026',
    client: 'Creative Editorial Showcase',
    description: 'High-converting social media grid architecture with neon illumination accents, kinetic typography, and motion reels.',
    tags: ['Feed Architecture', 'Editorial Design', 'Motion Graphics'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait',
    isFeatured: true
  },
  {
    id: 'proj-03',
    title: 'Verve Botanicals',
    category: 'Visual Identity',
    year: '2025',
    client: 'Eco-Luxury Showcase',
    description: 'Deep forest green packaging identity, gold foil stamping accents, and bespoke luxury packaging guidelines.',
    tags: ['Packaging Design', 'Visual Identity', 'Sustainable Luxury'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    isFeatured: false
  },
  {
    id: 'proj-04',
    title: 'Kinesis Kinetic Campaign',
    category: 'Digital Campaigns',
    year: '2025',
    client: 'Performance Showcase',
    description: 'Omnichannel multi-city campaign rollout balancing high-voltage neon visuals with minimalist editorial typography.',
    tags: ['Launch Campaign', 'Key Visuals', 'Digital Billboards'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'landscape',
    isFeatured: true
  },
  {
    id: 'proj-05',
    title: 'Monolith Architectural Studio',
    category: 'Web & Interactive',
    year: '2026',
    client: 'Interactive Experience',
    description: 'Cinematic digital portfolio featuring smooth webGL canvas transitions, custom cursor physics, and micro-interactions.',
    tags: ['Web Design', 'Micro-Interactions', 'Frontend Engineering'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'landscape',
    isFeatured: false
  },
  {
    id: 'proj-06',
    title: 'Synergy Future Forum',
    category: 'Branding',
    year: '2025',
    client: 'Conference & Event Concept',
    description: 'Identity system composed of angular geometric lines, green lasers, and modular stage typography.',
    tags: ['Spatial Branding', 'Monogram Design', 'Event Visuals'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait',
    isFeatured: false
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Deep Brand & Audience Immersion',
    description: 'We dissect your brand DNA, target demographics, and market landscape to reveal the core truth that differentiates you.',
    focusPoints: ['Brand DNA Analysis', 'Competitor Landscape Audit', 'Target Audience Psychology', 'Core Value Proposition']
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    subtitle: 'Calculated Creative Trajectory',
    description: 'We develop a bespoke creative and distribution blueprint, setting clear visual benchmarks and measurable goals.',
    focusPoints: ['Visual Moodboards & Art Direction', 'Channel-Specific Content Strategy', 'Positioning & Voice Framework', 'Execution Roadmap']
  },
  {
    number: '03',
    title: 'CREATE',
    subtitle: 'Art-Directed Production',
    description: 'Our creative team crafts every asset with uncompromising attention to typography, lighting, geometry, and motion.',
    focusPoints: ['Visual Identity & Asset Synthesis', 'High-Fidelity Graphic Design', 'Cinematic Motion & Video', 'Interactive Digital Experiences']
  },
  {
    number: '04',
    title: 'GROW',
    subtitle: 'Continuous Evolution & Resonance',
    description: 'We launch, observe audience sentiment, analyze engagement signals, and refine the creative engine for sustained impact.',
    focusPoints: ['Precision Asset Deployment', 'Engagement & Reaction Analysis', 'Creative Iteration & Scaling', 'Long-Term Brand Equity']
  }
];

export const WHY_US_PILLARS: PillarItem[] = [
  {
    number: '01',
    title: 'Creative Thinking',
    headline: 'Ideas that break through the mundane',
    description: 'We do not follow stale templates. Every creative concept is built from the ground up to evoke curiosity and command attention.',
    iconName: 'Sparkles'
  },
  {
    number: '02',
    title: 'Strategic Approach',
    headline: 'Artistry grounded in purpose',
    description: 'Aesthetics without strategy are mere decoration. Every color choice, line angle, and layout decision is calculated to support your business objectives.',
    iconName: 'Compass'
  },
  {
    number: '03',
    title: 'Visual Storytelling',
    headline: 'Narratives that leave an imprint',
    description: 'We weave emotion and identity into every visual piece, creating memorable brand worlds that audiences genuinely want to be part of.',
    iconName: 'Eye'
  },
  {
    number: '04',
    title: 'Brand Communication',
    headline: 'Consistent, confident presence',
    description: 'Unified cross-platform expression ensures your audience recognizes your excellence whether viewing an Instagram reel, billboard, or website.',
    iconName: 'Zap'
  }
];

