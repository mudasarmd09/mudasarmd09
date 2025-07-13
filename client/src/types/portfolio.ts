// Portfolio TypeScript interfaces for type safety and documentation

export interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  label: string;
  description: string;
}

export interface Expertise {
  area: string;
  level: 'Expert' | 'Advanced' | 'Proficient' | 'Intermediate';
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Blockchain' | 'AI/ML' | 'Full Stack' | 'Enterprise';
  status: 'Live' | 'In Development' | 'Completed';
  impact: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Founder & Lead Developer';
  description: string;
  achievements: string[];
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  description: string;
  color: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  author: string;
  canonical?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface ThemeConfig {
  defaultTheme: 'light' | 'dark' | 'system';
  storageKey: string;
}

// Professional portfolio data structure
export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    yearsExperience: string;
    avatar: string;
    resumeUrl: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
    website?: string;
  };
  bio: {
    headline: string;
    description: string;
    philosophy: string;
  };
  achievements: Achievement[];
  expertise: Expertise[];
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  contact: ContactInfo[];
  stats: Stat[];
}