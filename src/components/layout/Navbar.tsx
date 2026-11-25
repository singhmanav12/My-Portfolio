import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (onNavigate) {
      onNavigate(e, hash);
    }
  };

  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <a
        href="#"
        onClick={(e) => handleClick(e, '#')}
        className="text-3xl font-black tracking-tighter text-white hover:opacity-90 transition-opacity"
      >
        MPS
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#" onClick={(e) => handleClick(e, '#')} className="nav-link text-white">Home</a>
        <a href="#about" onClick={(e) => handleClick(e, '#about')} className="nav-link">About</a>
        <a href="#projects" onClick={(e) => handleClick(e, '#projects')} className="nav-link">Projects</a>
        <a href="#skills" onClick={(e) => handleClick(e, '#skills')} className="nav-link">Skills</a>
        <a href="#experience" onClick={(e) => handleClick(e, '#experience')} className="nav-link">Experience</a>
        <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="nav-link">Contact</a>
      </div>
      <a
        href="#contact"
        onClick={(e) => handleClick(e, '#contact')}
        className="hidden md:inline-flex px-5 py-2 bg-[#caff00] text-black font-bold rounded-full text-sm hover:bg-[#dfff33] transition-colors items-center gap-2"
      >
        Let's Talk <ArrowRight size={16} />
      </a>
    </nav>
  );
};
