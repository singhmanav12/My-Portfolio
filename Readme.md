# Manavendra Pratap Singh — Developer Portfolio

A modern, responsive portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**, featuring an interactive canvas background and a distinct dark neo-brutalist / Gen-Z aesthetic.

## 🚀 Features

- **Interactive Isometric Grid Background**: High-performance HTML5 Canvas animation reacting to cursor movements and scroll parallax.
- **Modular Component Architecture**: Clean separation of layout, UI elements, and content sections.
- **Type-Safe Data Layer**: Centralized configuration with full TypeScript interface definitions (`src/types/portfolio.ts`).
- **Responsive & Accessible**: Optimized for devices ranging from mobile screens to ultra-wide displays.
- **Fast Build & Hot Module Replacement**: Powered by Vite and Tailwind CSS v4.

---

## 📁 Project Structure

My-Portfolio/
├── public/
│   └── resume.pdf                     # Kept: Your active resume
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx         # Header navigation with mobile responsive links
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # Hero headline, CTAs, photo frame & badges
│   │   │   ├── About.tsx              # Bio, statistics counter & quote card
│   │   │   ├── Projects.tsx           # Selected projects showcase grid
│   │   │   ├── Toolkit.tsx            # Categorized skills matrix with icons
│   │   │   ├── Experience.tsx         # Horizontal timeline highlights
│   │   │   ├── Learning.tsx           # Currently learning list
│   │   │   └── Contact.tsx            # "Let's Talk" CTA, contact links & social icons
│   │   └── ui/
│   │       ├── InteractiveGrid.tsx    # Canvas isometric background animation
│   │       └── TechIcon.tsx           # Dynamic technology icon dispatcher
│   ├── data/
│   │   └── portfolioData.ts           # Centralized portfolio content
│   ├── types/
│   │   └── portfolio.ts               # Strict TypeScript definitions for all data
│   ├── App.tsx                        # Clean, high-level orchestrator component
│   ├── index.css                      # Tailwind v4 styles & custom utilities
│   └── main.tsx                       # React DOM entry point
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React & React Icons
- **Build Tool**: Vite 6+
- **Linter**: Oxlint

---

## 💻 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/singhmanav12/My-Portfolio.git
cd My-Portfolio
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

### 4. Run Lint Checks

```bash
npm run lint
```
