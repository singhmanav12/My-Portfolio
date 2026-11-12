import React from 'react';
import type { ToolkitData } from '../../types/portfolio';
import { TechIcon } from '../ui/TechIcon';

interface ToolkitProps {
  toolkit: ToolkitData;
}

export const Toolkit: React.FC<ToolkitProps> = ({ toolkit }) => {
  return (
    <section id="skills" className="py-24 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            MY <span className="text-[#caff00]">TOOLKIT</span>
          </h2>
          <p className="text-slate-400">Technologies and tools I work with.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(toolkit).map(([category, skills], idx) => (
            <div key={idx} className="glass-card p-8 group hover:border-white/20 transition-colors">
              <h3 className="text-xs font-mono text-slate-400 mb-8 uppercase tracking-widest">{category}</h3>
              <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                      <TechIcon name={skill} size={18} />
                    </div>
                    <span className="text-[10px] text-slate-400 text-center font-mono">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

