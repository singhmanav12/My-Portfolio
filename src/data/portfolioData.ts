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
      category: "Web Extension",
      description: "A browser extension that blocks short-form content, detects real-time distractions like phone usage or daydreaming, and analyzes productive vs. distracting study sessions with AI.",
      features: [
        {
          title: "Focus Mode",
          description: "Automatically blocks distracting short-form feeds such as YouTube Shorts and Reels so you stay on task."
        },
        {
          title: "Advanced Focus Mode",
          description: "With camera permission, uses a model trained on a custom dataset to monitor attention and trigger a visual alert with an audio beep if distracted for over 10 seconds (phone usage, daydreaming, looking away, or multiple people around)."
        },
        {
          title: "AI Productivity Analytics",
          description: "Logs watched YouTube video titles in JSON and batches them to the Gemini API (every 3 hours to optimize token usage) to classify productive study (e.g., DSA prep) vs. distractions and provide personalized productivity insights."
        }
      ],
      tech: ["Plasmo", "Chrome Extension", "Gemini API", "Custom ML Model"],
      image: "/images/student-360.png",
      imagePlaceholder: "[ Student 360 Image ]",
      link: "https://student360.antideploy.app/",
      github: "https://github.com/singhmanav12/Student-360"
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
    quote: "I don't just write code. I like building things that actually work.",
    detail: {
      headline: "CSE Student, Builder & Cloud Enthusiast.",
      subheadline: "A closer look at my background, engineering focus, and what drives how I build software.",
      story: [
        "I am a Computer Science Engineering student interested in software development, cloud computing, DevOps and AI. I enjoy turning ideas into working products, experimenting with new technologies, and building projects through hackathons and real-world challenges.",
        "[ Add a second paragraph here sharing how you got started with coding, what keeps you curious, and the kind of engineering problems you enjoy tackling next. ]"
      ],
      education: {
        degree: "Computer Science Engineering",
        institution: "[ YOUR COLLEGE / UNIVERSITY NAME ]",
        period: "[ START YEAR – EXPECTED GRADUATION ]",
        highlights: "[ Add key coursework, clubs, or academic highlights here. ]"
      },
      focusAreas: [
        {
          title: "Software & Backend Engineering",
          description: "Building practical applications, APIs, and data-backed services using Python, Java, Go, React, and PostgreSQL."
        },
        {
          title: "Cloud & DevOps",
          description: "Exploring containerization, orchestration, and infrastructure workflows with AWS, Docker, Kubernetes, Linux, and Terraform."
        },
        {
          title: "Hackathons & Rapid Prototyping",
          description: "Collaborating in technical events like NNOVIK 6.0 and SKITECH INNOTHON to take ideas from zero to working demo."
        }
      ],
      beyondCode: "[ Share hobbies, interests outside tech, or personal goals you'd like visitors to know about. ]"
    }
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

