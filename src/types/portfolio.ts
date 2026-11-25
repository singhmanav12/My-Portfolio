export interface TechChip {
  name: string;
  icon: string;
}

export interface ButtonConfig {
  text: string;
  link: string;
}

export interface HeroData {
  name: string;
  role: string;
  description: string;
  buttons: {
    primary: ButtonConfig;
    secondary: ButtonConfig;
  };
  techChips: TechChip[];
  photoPlaceholder: string;
  backgroundText: string;
}

export interface ProjectItem {
  name: string;
  category: string;
  description: string;
  status?: string;
  tech: string[];
  imagePlaceholder: string;
  link: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutFocusArea {
  title: string;
  description: string;
}

export interface AboutDetailData {
  headline: string;
  subheadline: string;
  story: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
    highlights: string;
  };
  focusAreas: AboutFocusArea[];
  beyondCode: string;
}

export interface AboutData {
  text: string;
  stats: StatItem[];
  quote: string;
  detail: AboutDetailData;
}

export interface ToolkitData {
  [category: string]: string[];
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface ContactData {
  heading: string;
  subheading: string;
  email: string;
  formspreeEndpoint: string;
  github: string;
  linkedin: string;
  x: string;
}

export interface PortfolioData {
  hero: HeroData;
  projects: ProjectItem[];
  about: AboutData;
  toolkit: ToolkitData;
  experience: ExperienceItem[];
  learning: string[];
  contact: ContactData;
}

