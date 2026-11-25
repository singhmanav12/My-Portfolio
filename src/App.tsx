import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from './data/portfolioData';
import { InteractiveGrid } from './components/ui/InteractiveGrid';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { AllProjects } from './components/sections/AllProjects';
import { Toolkit } from './components/sections/Toolkit';
import { Experience } from './components/sections/Experience';
import { Learning } from './components/sections/Learning';
import { Contact } from './components/sections/Contact';

type AppView = 'portfolio' | 'all-projects';

const ALL_PROJECTS_HASH = '#all-projects';

export const App: React.FC = () => {
  const [view, setView] = useState<AppView>(() =>
    window.location.hash === ALL_PROJECTS_HASH ? 'all-projects' : 'portfolio'
  );
  const pendingHashRef = useRef<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === ALL_PROJECTS_HASH) {
        setView('all-projects');
        window.scrollTo(0, 0);
      } else {
        if (!pendingHashRef.current) {
          pendingHashRef.current = window.location.hash || '#';
        }
        setView('portfolio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (view !== 'portfolio' || !pendingHashRef.current) return;

    const targetHash = pendingHashRef.current;
    pendingHashRef.current = null;

    if (targetHash === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(targetHash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [view]);

  const handleOpenAllProjects = () => {
    window.location.hash = ALL_PROJECTS_HASH;
    setView('all-projects');
    window.scrollTo(0, 0);
  };

  const handleBackToPortfolio = (targetHash = '#projects') => {
    pendingHashRef.current = targetHash;
    if (targetHash === '#') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = targetHash;
    }
    setView('portfolio');
  };

  const handleNavbarNavigate = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (view === 'all-projects') {
      e.preventDefault();
      handleBackToPortfolio(hash);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-50 font-sans selection:bg-[#caff00]/30 overflow-x-hidden">
      {/* Interactive Background Canvas Grid */}
      <InteractiveGrid />

      {/* Navigation */}
      <Navbar onNavigate={handleNavbarNavigate} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {view === 'all-projects' ? (
          <AllProjects
            projects={portfolioData.projects}
            onBack={() => handleBackToPortfolio('#projects')}
          />
        ) : (
          <>
            <Hero hero={portfolioData.hero} />
            <About about={portfolioData.about} />
            <Projects projects={portfolioData.projects} onViewAll={handleOpenAllProjects} />
            <Toolkit toolkit={portfolioData.toolkit} />
            <Experience experience={portfolioData.experience} />

            {/* Bottom Learning & Contact Row */}
            <section className="py-24 max-w-7xl mx-auto px-8 border-t border-white/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <Learning learning={portfolioData.learning} />
                <Contact contact={portfolioData.contact} />
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
