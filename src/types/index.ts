export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  features: string[];
  featuresEn: string[];
}

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  category: string;
  year: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  image: string;
  date: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  positionEn: string;
  image: string;
  linkedin?: string;
}

export type Language = 'fr' | 'en';