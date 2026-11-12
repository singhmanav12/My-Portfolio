import React from 'react';
import { portfolioData } from './data/portfolioData';
import { InteractiveGrid } from './components/ui/InteractiveGrid';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Toolkit } from './components/sections/Toolkit';
import { Experience } from './components/sections/Experience';
import { Learning } from './components/sections/Learning';
import { Contact } from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-50 font-sans selection:bg-[#caff00]/30 overflow-x-hidden flex flex-col justify-between">
      {/* Interactive Background Canvas Grid */}
      <InteractiveGrid />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        <Hero hero={portfolioData.hero} />
        <About about={portfolioData.about} />
        <Projects projects={portfolioData.projects} />
        <Toolkit toolkit={portfolioData.toolkit} />
        <Experience experience={portfolioData.experience} />

        {/* Bottom Learning & Contact Row */}
        <section className="py-24 max-w-7xl mx-auto px-8 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Learning learning={portfolioData.learning} />
            <Contact contact={portfolioData.contact} />
          </div>
        </section>
      </main>

      {/* Systematic Footer */}
      <Footer />
    </div>
  );
};

export default App;
