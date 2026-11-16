import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import type { HeroData } from '../../types/portfolio';
import { TechIcon } from '../ui/TechIcon';

interface HeroProps {
  hero: HeroData;
}

export const Hero: React.FC<HeroProps> = ({ hero }) => {
  return (
    <section className="relative pt-12 pb-32 overflow-hidden">
      {/* Background large decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black text-outline-heavy uppercase leading-none opacity-20 select-none z-0 tracking-tighter pointer-events-none transform -rotate-12 w-[120%] text-center">
        {hero.backgroundText}
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <p className="text-slate-300 uppercase tracking-[0.2em] text-xs font-semibold">Hello, I'm</p>

          <h1 className="text-5xl sm:text-6xl md:text-[5rem] lg:text-[5.5rem] font-black uppercase leading-[0.9] text-white">
            <span className="block tracking-tighter">MANAVENDRA</span>
            <span className="block text-outline">
              PRATAP SINGH
            </span>
          </h1>

          <p className="text-xs md:text-sm font-mono text-slate-400 uppercase tracking-[0.2em] pt-2">
            {hero.role}
          </p>

          <p className="text-lg text-slate-300 max-w-md leading-relaxed font-serif pt-4">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <a href={hero.buttons.primary.link} className="btn-primary">
              {hero.buttons.primary.text} <ArrowRight size={18} />
            </a>
            <a href={hero.buttons.secondary.link} download="Manavendra_Resume.pdf" className="btn-secondary">
              {hero.buttons.secondary.text} <Download size={18} />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-8">
            {hero.techChips.map((chip, idx) => (
              <div key={idx} className="chip">
                <TechIcon name={chip.name} size={16} /> {chip.name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[22rem] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center group z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9]/20 to-transparent z-10" />
            <p className="text-slate-500 font-mono text-sm z-20 group-hover:scale-110 transition-transform">
              {hero.photoPlaceholder}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 right-12 text-white transform rotate-12 pointer-events-none z-20">
            <svg width="60" height="40" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 50 L30 10 L50 40 L70 10 L90 50" />
            </svg>
          </div>

          <div className="absolute top-1/3 -left-16 text-slate-300 font-[Caveat] text-3xl transform -rotate-6 z-20 leading-tight">
            Ideas<br />Build<br />Code<br />Deploy<br />Repeat.
          </div>

          <div className="absolute bottom-12 -right-8 bg-[#caff00] text-black w-40 h-40 rounded-full flex flex-col items-center justify-center font-bold text-center text-[10px] p-4 shadow-2xl z-30 animate-[spin_10s_linear_infinite] hover:animate-none transition-transform hover:scale-110 cursor-pointer">
            AVAILABLE FOR<br />INTERNSHIPS &amp;<br />FULL-TIME ROLES<br /><br />OPEN TO<br />COLLABORATION<br /><ArrowRight size={14} className="mx-auto mt-1" />
          </div>

          <div className="absolute -bottom-16 right-32 text-slate-300 font-[Caveat] text-2xl transform rotate-12 z-20">
            Currently<br />Learning<br />Kubernetes...
            <svg className="absolute -bottom-6 -left-6" width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="#caff00" strokeWidth="3" strokeLinecap="round">
              <path d="M40 10 Q 20 20 10 40 M10 40 L20 35 M10 40 L15 30" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

