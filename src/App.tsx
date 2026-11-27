import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from './data/portfolioData';
import { InteractiveGrid } from './components/ui/InteractiveGrid';
import { ContactModal } from './components/ui/ContactModal';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { AboutDetail } from './components/sections/AboutDetail';
import { Projects } from './components/sections/Projects';
import { AllProjects } from './components/sections/AllProjects';
import { Toolkit } from './components/sections/Toolkit';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { Learning } from './components/sections/Learning';
import { Contact } from './components/sections/Contact';

type AppView = 'portfolio' | 'all-projects' | 'about-me';

const ALL_PROJECTS_HASH = '#all-projects';
const ABOUT_ME_HASH = '#about-me';

const getViewFromHash = (hash: string): AppView => {
  if (hash === ALL_PROJECTS_HASH) return 'all-projects';
  if (hash === ABOUT_ME_HASH) return 'about-me';
  return 'portfolio';
};

export const App: React.FC = () => {
  const [view, setView] = useState<AppView>(() => getViewFromHash(window.location.hash));
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pendingHashRef = useRef<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const nextView = getViewFromHash(window.location.hash);
      if (nextView === 'portfolio') {
        if (!pendingHashRef.current) {
          pendingHashRef.current = window.location.hash || '#';
        }
        setView('portfolio');
      } else {
        setView(nextView);
        window.scrollTo(0, 0);
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

  const handleOpenSubView = (hash: string, nextView: Exclude<AppView, 'portfolio'>) => {
    window.location.hash = hash;
    setView(nextView);
    window.scrollTo(0, 0);
  };

  const handleBackToPortfolio = (targetHash = '#') => {
    pendingHashRef.current = targetHash;
    if (targetHash === '#') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = targetHash;
    }
    setView('portfolio');
  };

  const handleNavbarNavigate = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (view !== 'portfolio') {
      e.preventDefault();
      handleBackToPortfolio(hash);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-50 font-sans selection:bg-[#caff00]/30 overflow-x-hidden">
      {/* Interactive Background Canvas Grid */}
      <InteractiveGrid />

      {/* Navigation */}
      <Navbar
        onNavigate={handleNavbarNavigate}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {view === 'all-projects' ? (
          <AllProjects
            projects={portfolioData.projects}
            onBack={() => handleBackToPortfolio('#projects')}
          />
        ) : view === 'about-me' ? (
          <AboutDetail
            about={portfolioData.about}
            learning={portfolioData.learning}
            onBack={() => handleBackToPortfolio('#about')}
            onOpenContact={() => setIsContactOpen(true)}
          />
        ) : (
          <>
            <Hero hero={portfolioData.hero} />
            <About
              about={portfolioData.about}
              onMoreAbout={() => handleOpenSubView(ABOUT_ME_HASH, 'about-me')}
            />
            <Projects
              projects={portfolioData.projects}
              onViewAll={() => handleOpenSubView(ALL_PROJECTS_HASH, 'all-projects')}
            />
            <Toolkit toolkit={portfolioData.toolkit} />
            <Experience experience={portfolioData.experience} />
            <Achievements achievements={portfolioData.achievements} />

            {/* Bottom Learning & Contact Row */}
            <section className="py-24 max-w-7xl mx-auto px-8 border-t border-white/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <Learning learning={portfolioData.learning} />
                <Contact
                  contact={portfolioData.contact}
                  onOpenContact={() => setIsContactOpen(true)}
                />
              </div>
            </section>
          </>
        )}
      </main>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        fallbackEmail={portfolioData.contact.email}
        formspreeEndpoint={portfolioData.contact.formspreeEndpoint}
      />
    </div>
  );
};

export default App;
