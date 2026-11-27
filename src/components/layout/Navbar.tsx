import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenContact }) => {
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
      <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7">
        <a href="#" onClick={(e) => handleClick(e, '#')} className="nav-link text-white whitespace-nowrap">Home</a>
        <a href="#about" onClick={(e) => handleClick(e, '#about')} className="nav-link whitespace-nowrap">About</a>
        <a href="#projects" onClick={(e) => handleClick(e, '#projects')} className="nav-link whitespace-nowrap">Projects</a>
        <a href="#skills" onClick={(e) => handleClick(e, '#skills')} className="nav-link whitespace-nowrap">Skills</a>
        <a href="#experience" onClick={(e) => handleClick(e, '#experience')} className="nav-link whitespace-nowrap">Experience</a>
        <a href="#achievements" onClick={(e) => handleClick(e, '#achievements')} className="nav-link whitespace-nowrap">Achievements</a>
        <a href="#certifications" onClick={(e) => handleClick(e, '#certifications')} className="nav-link whitespace-nowrap">Certifications</a>
        <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="nav-link whitespace-nowrap">Contact</a>
      </div>
      <button
        type="button"
        onClick={onOpenContact}
        className="hidden md:inline-flex px-5 py-2 bg-[#caff00] text-black font-bold rounded-full text-sm hover:bg-[#dfff33] transition-colors items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
      >
        Let's Talk <ArrowRight size={16} />
      </button>
    </nav>
  );
};
