import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="text-3xl font-black tracking-tighter">
        MPS<span className="text-[#caff00]">.</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="nav-link text-white">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <a
        href="#contact"
        className="hidden md:inline-flex px-5 py-2 bg-[#caff00] text-black font-bold rounded-full text-sm hover:bg-[#dfff33] transition-colors items-center gap-2"
      >
        Let's Talk <ArrowRight size={16} />
      </a>
    </nav>
  );
};
