import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  hero: {
    name: "MANAVENDRA\nPRATAP SINGH",
    role: "CSE STUDENT • SOFTWARE DEVELOPER • CLOUD & DEVOPS ENTHUSIAST",
    description: "I build practical digital solutions with code, cloud and emerging technologies.",
    buttons: {
      primary: { text: "View My Work", link: "#projects" },
      secondary: { text: "Download Resume", link: "/resume.pdf" }
    },
    techChips: [
      { name: "Python", icon: "SiPython" },
      { name: "AWS", icon: "SiAmazonwebservices" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Kubernetes", icon: "SiKubernetes" },
      { name: "React", icon: "SiReact" },
      { name: "Git", icon: "SiGit" }
    ],
    photoPlaceholder: "[ YOUR PHOTO HERE ]",
    backgroundText: "DEVELOPER"
  },
  projects: [
    {
      name: "Student 360",
      category: "Web App",
      description: "Academic and student management platform.",
      status: "Placeholder until I provide the actual project details.",
      tech: ["Placeholder"],
      imagePlaceholder: "[ Student 360 Image ]",
      link: "#"
    },
    {
      name: "Civic Issue Platform",
      category: "Hackathon",
      description: "AI-assisted citizen issue verification with location matching and ticket tracking.",
      tech: ["React", "AI", "Supabase"],
      imagePlaceholder: "[ Civic Issue Platform Image ]",
      link: "#"
    },
    {
      name: "Smart Agriculture System",
      category: "Hackathon",
      description: "Placeholder — DO NOT invent features.",
      tech: ["Placeholder"],
      imagePlaceholder: "[ Smart Ag System Image ]",
      link: "#"
    },
    {
      name: "Cloud Infrastructure Project",
      category: "Cloud / DevOps",
      description: "Placeholder — DO NOT invent features.",
      tech: ["Placeholder"],
      imagePlaceholder: "[ Cloud Infra Image ]",
      link: "#"
    },
    {
      name: "Sample 1",
      category: "Sample",
      description: "Placeholder — Sample 1 project details will go here.",
      tech: ["Placeholder"],
      imagePlaceholder: "[ Sample 1 Image ]",
      link: "#"
    },
    {
      name: "Sample 2",
      category: "Sample",
      description: "Placeholder — Sample 2 project details will go here.",
      tech: ["Placeholder"],
      imagePlaceholder: "[ Sample 2 Image ]",
      link: "#"
    },
    {
      name: "Sample 3",
      category: "Sample",
      description: "Placeholder — Sample 3 project details will go here.",
      tech: ["Placeholder"],
      imagePlaceholder: "[ Sample 3 Image ]",
      link: "#"
    },
    {
      name: "Sample 4",
      category: "Sample",
      description: "Placeholder — Sample 4 project details will go here.",
      tech: ["Placeholder"],
      imagePlaceholder: "[ Sample 4 Image ]",
      link: "#"
    }
  ],
  about: {
    text: "I am a Computer Science Engineering student interested in software development, cloud computing, DevOps and AI. I enjoy turning ideas into working products, experimenting with new technologies, and building projects through hackathons and real-world challenges.",
    stats: [
      { value: "[PROJECT COUNT]", label: "Projects / Experiments" },
      { value: "[HACKATHON COUNT]", label: "Hackathons / Technical Events" },
      { value: "[YEARS LEARNING]", label: "Things I'm Still Learning" }
    ],
    quote: "I don't just write code. I like building things that actually work."
  },
  toolkit: {
    "Primary Tech Stack": ["Python", "Java", "Go", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Linux", "Terraform"],
    Development: ["React", "JavaScript", "HTML", "CSS", "REST APIs"],
    Tools: ["Git", "GitHub"]
  },
  experience: [
    {
      year: "[DATE]",
      title: "NNOVIK 6.0",
      company: "Hackathon",
      description: "[DESCRIPTION]"
    },
    {
      year: "[DATE]",
      title: "SKITECH INNOTHON",
      company: "Technical Team Member",
      description: "[DESCRIPTION]"
    },
    {
      year: "[DATE]",
      title: "Project Exhibition",
      company: "Project Development",
      description: "[DESCRIPTION]"
    }
  ],
  learning: [
    "Kubernetes",
    "DevOps",
    "Cloud Architecture",
    "AI / ML",
    "System Design"
  ],
  contact: {
    heading: "LET'S BUILD\nSOMETHING USEFUL.",
    subheading: "Have an idea, project or opportunity?\nI'd love to hear from you.",
    email: "pratapsinghmanav2006@gmail.com",
    formspreeEndpoint: "https://formspree.io/f/mppdbjno",
    github: "https://github.com/singhmanav12",
    linkedin: "https://linkedin.com/in/manavendrapratapsingh2006/",
    x: "https://x.com/singhmanav12"
  }
};

