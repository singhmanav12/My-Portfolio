import React from 'react';
import { Briefcase } from 'lucide-react';
import type { ExperienceItem } from '../../types/portfolio';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            WORK <span className="text-[#caff00]">EXPERIENCE</span>
          </h2>
          <p className="text-slate-400">Internships, freelance work, and technical roles.</p>
        </div>

        {/* Doodle moved cleanly into header */}
        <div className="hidden md:block text-[#caff00] font-[Caveat] text-3xl transform rotate-3 relative pr-6">
          Build &middot; Learn &middot; Share &middot; Grow
          <svg
            className="inline-block ml-2 -mt-1"
            width="28"
            height="28"
            viewBox="0 0 50 50"
            fill="none"
            stroke="#caff00"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M10 25 H40 M40 25 L28 14 M40 25 L28 36" />
          </svg>
        </div>
      </div>

      {/* Left-aligned Vertical Timeline */}
      <div className="relative pl-8 md:pl-10 space-y-6">
        <div className="absolute top-2 bottom-2 left-[11px] md:left-[15px] w-px bg-gradient-to-b from-[#caff00]/70 via-white/15 to-transparent" />

        {experience.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot centered cleanly on the vertical rail */}
            <div className="absolute -left-[27px] md:-left-[31px] top-7 w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border-2 border-slate-600 group-hover:border-[#caff00] group-hover:shadow-[0_0_12px_#caff00] z-10 transition-all" />

            <div className="glass-card p-6 md:p-8 hover:border-[#caff00]/40 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-[#caff00]">
                    <Briefcase size={16} />
                  </span>
                  {exp.type && (
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                      {exp.type}
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-slate-400 bg-black/50 px-3 py-1 rounded-full border border-white/5">
                  {exp.year}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#caff00] transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm font-medium text-slate-300 mt-1 mb-3">
                {exp.company}
                {exp.location && <span className="text-slate-500 font-normal"> &middot; {exp.location}</span>}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">{exp.description}</p>

              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/5">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-slate-400 bg-black/50 px-2.5 py-1 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
