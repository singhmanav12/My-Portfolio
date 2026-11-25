import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { AboutData } from '../../types/portfolio';

interface AboutProps {
  about: AboutData;
  onMoreAbout: () => void;
}

export const About: React.FC<AboutProps> = ({ about, onMoreAbout }) => {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3 relative">
          <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            <span className="text-white block">ABOUT</span>
            <span className="text-outline block">ME</span>
          </h2>
          <div className="absolute top-32 left-10 text-slate-400 font-[Caveat] text-3xl transform -rotate-6">
            Same Person<br />Different Ideas
            <svg className="absolute top-8 -right-8 transform rotate-90" width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              <path d="M10 25 Q 25 10 40 25 M40 25 L35 15 M40 25 L30 30" />
            </svg>
          </div>
        </div>

        <div className="w-full lg:w-2/3 space-y-12">
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-sans">
            {about.text}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/10">
            {about.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col border-l border-white/10 pl-6 first:border-0 first:pl-0">
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter break-words">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-400 max-w-[150px] leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 border-l-4 border-l-[#caff00] relative">
            <span className="text-[#caff00] text-6xl absolute -top-4 -left-6 font-serif">"</span>
            <p className="text-2xl text-white font-serif italic relative z-10 pl-4">
              {about.quote}
            </p>
            <div className="mt-8 pl-4">
              <button
                type="button"
                onClick={onMoreAbout}
                className="btn-secondary text-sm px-6 py-2 cursor-pointer"
              >
                More About Me <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

