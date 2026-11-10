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
    id: 'proj-video-01',
    title: 'Brand Story & Creative Direction',
    category: 'Commercial',
    year: '2026',
    client: 'Insight Company Production',
    description: 'Cinematic commercial production showcasing bold brand storytelling, dynamic editing, and custom sound design engineered for modern digital audiences.',
    videoUrl: '/videos/reel_1.mp4',
    tags: ['Brand Commercial', 'Creative Direction', 'Cinematic Motion'],
    aspectRatio: 'portrait',
    isFeatured: true
  },
  {
    id: 'proj-video-02',
    title: 'Dynamic Visual Narrative',
    category: 'Motion & Reels',
    year: '2026',
    client: 'Insight Company Production',
    description: 'High-impact social-first motion reel designed to command attention, convey high-energy aesthetics, and drive authentic community engagement.',
    videoUrl: '/videos/reel_2.mp4',
    tags: ['Social-First Video', 'Kinetic Motion', 'Visual Storytelling'],
    aspectRatio: 'portrait',
    isFeatured: true
  },
  {
    id: 'proj-video-03',
    title: 'Editorial Identity & Motion',
    category: 'Visual Identity',
    year: '2026',
    client: 'Insight Company Production',
    description: 'Avant-garde visual identity and motion piece establishing market leadership through refined rhythm, typography, and aesthetic precision.',
    videoUrl: '/videos/reel_3.mp4',
    tags: ['Visual Identity', 'Digital Presence', 'Aesthetic Direction'],
    aspectRatio: 'portrait',
    isFeatured: true
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
