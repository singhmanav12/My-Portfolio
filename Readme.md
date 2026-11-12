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

```text
My-Portfolio/
├── public/
│   └── resume.pdf                 # Resume document
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Header navigation with mobile responsive links
│   │   │   └── Footer.tsx         # Site footer with copyright & quick links
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # Hero section with headline, badges & CTAs
│   │   │   ├── About.tsx          # About me section with statistics & quote card
│   │   │   ├── Projects.tsx       # Featured project showcase cards
│   │   │   ├── Toolkit.tsx        # Technical skills categorized with icons
│   │   │   ├── Experience.tsx     # Interactive timeline of highlights & events
│   │   │   ├── Learning.tsx       # Current topics of study
│   │   │   └── Contact.tsx        # Contact call-to-action & social links
│   │   └── ui/
│   │       ├── InteractiveGrid.tsx# Canvas-based isometric background grid
│   │       └── TechIcon.tsx       # Dynamic icon mapping component
│   ├── data/
│   │   └── portfolioData.ts       # Typed portfolio content data
│   ├── types/
│   │   └── portfolio.ts           # TypeScript interfaces & types
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Tailwind styles and custom utilities
│   └── main.tsx                   # React DOM entry point
├── .gitignore
├── .oxlintrc.json                 # Oxlint linter configuration
├── index.html                     # HTML root template with preconnect fonts
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts                 # Vite bundler configuration
```

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
