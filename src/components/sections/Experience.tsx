import React from 'react';
import type { ExperienceItem } from '../../types/portfolio';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-8">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
          EXPERIENCE & <span className="text-[#caff00]">HIGHLIGHTS</span>
        </h2>
        <p className="text-slate-400">Key events, roles and achievements.</p>
      </div>

      <div className="relative pt-10">
        {/* Horizontal Timeline Line */}
        <div className="absolute top-12 left-0 w-full h-px bg-white/10 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute -top-[1.2rem] left-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-[#caff00] z-10 transition-colors" />

              <div className="md:pt-8">
                <span className="text-xs font-mono text-slate-500 mb-3 block">{exp.year}</span>
                <h3 className="font-bold text-xl text-white mb-1 group-hover:text-[#caff00] transition-colors">{exp.title}</h3>
                <h4 className="text-sm text-slate-400 mb-3">{exp.company}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Doodle over timeline */}
        <div className="hidden md:block absolute -top-8 right-12 text-[#caff00] font-[Caveat] text-3xl transform rotate-6">
          Build<br />Learn<br />Share<br />Grow
          <svg className="absolute -bottom-6 right-10 transform -rotate-45" width="30" height="30" viewBox="0 0 50 50" fill="none" stroke="#caff00" strokeWidth="2" strokeLinecap="round">
            <path d="M10 10 L40 40 M40 40 L20 40 M40 40 L40 20" />
          </svg>
        </div>
      </div>
    </section>
  );
};

