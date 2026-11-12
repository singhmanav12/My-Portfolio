import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8 max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
      <div>
        &copy; {new Date().getFullYear()} Manavendra Pratap Singh. All rights reserved.
      </div>
      <div className="flex items-center gap-6">
        <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
        <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
        <a href="#skills" className="hover:text-slate-300 transition-colors">Skills</a>
        <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
      </div>
    </footer>
  );
};

