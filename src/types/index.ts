export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  deliverables: string[];
  iconName: string;
  tag: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  tags: string[];
  videoUrl: string;
  posterImage?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  isFeatured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusPoints: string[];
}

export interface PillarItem {
  number: string;
  title: string;
  headline: string;
  description: string;
  metricsLabel?: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  serviceInterest: string;
}
