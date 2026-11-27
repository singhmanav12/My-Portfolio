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
      category: "Real-World Builds",
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
      name: "CVQ-AI",
      category: "Real-World Builds",
      description: "A civic issue reporting platform (deployed web platform & React Native mobile app) where citizens report potholes, broken streetlights, waste, and electrical hazards with AI-powered SLA deadlines and resolution verification.",
      features: [
        {
          title: "AI Severity Classification & Dynamic SLA",
          description: "Uses Gemini to classify reported issues by risk level — critical hazards like a broken electric wire over a road receive a 3-hour SLA deadline, while standard issues like a non-working streetlight get 24 hours."
        },
        {
          title: "30m GPS Coordinate Verification",
          description: "Collects GPS coordinates from both the citizen's report photo and the worker's completion photo; the resolution is only accepted if both locations are within 30 meters of each other."
        },
        {
          title: "Gemini Before & After Image Verification",
          description: "Gemini analyzes both the original issue photo and the worker's post-fix photo to verify the problem was genuinely resolved before marking the ticket as solved."
        }
      ],
      tech: ["React", "React Native", "Gemini API", "Supabase", "Geolocation"],
      image: "/images/cvq-ai.png",
      imageBadge: "light",
      imagePlaceholder: "[ CVQ-AI Image ]",
      link: "https://cvq-ai.vercel.app/",
      github: "https://github.com/ykansh/INNOVIK-6.0"
    },
    {
      name: "Smart Agriculture System",
      category: "Real-World Builds",
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
      { value: "9", label: "Projects / Experiments" },
      { value: "[COUNT]", label: "Hackathons & Technical Events Attended" },
      { value: "[COUNT]", label: "Certifications" }
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
          description: "Collaborating in technical events like INNOVIK 6.0 and SKITECH INNOTHON 3.0 to take ideas from zero to working demo."
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
      year: "May 2026 - Present",
      title: "Full Stack Engineer",
      company: "Golden Krust",
      location: "Remote · Dibrugarh East, Assam",
      type: "Freelance",
      description: "Architected and built an e-commerce platform using React 19, TypeScript, and Python (Django REST Framework) with Vite build tooling and PostgreSQL.",
      responsibilities: [
        "Architected and built an end-to-end e-commerce platform from the ground up.",
        "Developed the responsive frontend interface using React 19, TypeScript, and Vite build tooling.",
        "Implemented backend REST APIs and relational data models with Python (Django REST Framework) and PostgreSQL.",
        "[ Add specific modules you delivered, e.g. cart/checkout, auth, admin dashboard, or deployment details. ]"
      ],
      highlights: [
        "Delivered a full-stack production architecture spanning frontend, REST APIs, and PostgreSQL database."
      ],
      tags: ["React 19", "TypeScript", "Django REST Framework", "PostgreSQL", "Vite"]
    },
    {
      year: "Aug 2026 - Oct 2026",
      title: "Information Technology Intern",
      company: "GAOTek Inc.",
      location: "Remote",
      type: "Internship",
      description: "Contributed to the Information and Technology team during a 3-month remote internship and earned the Best Intern of the Week Certificate of Achievement for teamwork, commitment, and consistent performance.",
      responsibilities: [
        "Collaborated remotely within the Information and Technology team over a 3-month internship.",
        "[ Add specific technical tasks, tools, or deliverables you worked on during the internship. ]"
      ],
      highlights: [
        "Awarded Best Intern of the Week Certificate of Achievement (Oct 25, 2026 · ID: GAO-MANAVENDRA-2026010023) for outstanding teamwork, commitment, and consistent performance."
      ],
      tags: ["Information Technology", "Team Collaboration"],
      certificateImage: "/images/gaotek-certificate.jpg"
    },
    {
      year: "Feb 2026 - Present",
      title: "Technical Lead",
      company: "SKITECH INNOTHON 3.0 · SKITM, Indore",
      location: "Greater Indore Area",
      type: "Technical Role",
      description: "Serving as Technical Lead for SKITECH INNOTHON 3.0 at SKITM, Indore.",
      responsibilities: [
        "Leading technical coordination and execution for SKITECH INNOTHON 3.0 at SKITM, Indore.",
        "[ Add key responsibilities such as guiding participant teams, managing technical infrastructure, or coordinating evaluations. ]"
      ],
      highlights: [
        "[ Add any event impact or milestones — e.g. number of teams supported or systems managed. ]"
      ],
      tags: ["Technical Leadership", "Event Operations"]
    }
  ],
  achievements: [
    {
      year: "Oct 2026",
      title: "Best Intern of the Week",
      category: "Award",
      subtitle: "GAOTek Inc. · Information & Technology Team",
      description: "Awarded Certificate of Achievement (ID: GAO-MANAVENDRA-2026010023) for outstanding teamwork, commitment, and consistent performance during the IT internship.",
      tags: ["Certificate", "Best Performing Intern"],
      certificateImage: "/images/gaotek-certificate.jpg"
    },
    {
      year: "[DATE]",
      title: "INNOVIK 6.0",
      category: "Hackathon",
      subtitle: "Built CVQ-AI",
      description: "Collaborated with the team to build CVQ-AI — an AI-verified civic issue reporting platform with Gemini SLA classification and 30m GPS verification.",
      tags: ["React Native", "Gemini API", "Supabase"]
    },
    {
      year: "[DATE]",
      title: "Project Exhibition",
      category: "Exhibition",
      subtitle: "Project Development",
      description: "[DESCRIPTION]"
    }
  ],
  certifications: [
    {
      title: "[ Cloud Certification — e.g. AWS Cloud Practitioner ]",
      issuer: "[ ISSUER — e.g. Amazon Web Services ]",
      category: "Cloud",
      issueDate: "[DATE]",
      credentialId: "[CREDENTIAL ID]",
      credentialUrl: "#",
      description: "[Placeholder — Add certification focus areas, cloud services covered, and key competencies validated.]",
      skills: ["Cloud Computing", "AWS", "Architecture"]
    },
    {
      title: "[ Programming Language Certification — e.g. Python / Java / Go ]",
      issuer: "[ ISSUER — e.g. Coursera / HackerRank / Udemy ]",
      category: "Languages",
      issueDate: "[DATE]",
      credentialId: "[CREDENTIAL ID]",
      credentialUrl: "#",
      description: "[Placeholder — Add language fundamentals, data structures, or problem-solving topics covered.]",
      skills: ["Python", "Data Structures", "Algorithms"]
    },
    {
      title: "[ DevOps Certification — e.g. Docker & Kubernetes Fundamentals ]",
      issuer: "[ ISSUER — e.g. Linux Foundation / KodeKloud ]",
      category: "DevOps",
      issueDate: "[DATE]",
      credentialId: "[CREDENTIAL ID]",
      credentialUrl: "#",
      description: "[Placeholder — Add containerization, CI/CD, orchestration, or infrastructure automation topics.]",
      skills: ["Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "[ Backend & Databases Certification — e.g. PostgreSQL / REST APIs ]",
      issuer: "[ ISSUER ]",
      category: "Web & Backend",
      issueDate: "[DATE]",
      credentialId: "[CREDENTIAL ID]",
      credentialUrl: "#",
      description: "[Placeholder — Add full-stack, API design, or relational database topics validated.]",
      skills: ["PostgreSQL", "REST APIs", "Backend"]
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

