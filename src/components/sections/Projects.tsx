import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-24 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              SELECTED<br /><span className="text-[#caff00]">PROJECTS</span>
            </h2>
            <p className="text-slate-400 max-w-sm">A selection of things I've built, experimented with and shipped.</p>
          </div>
          <a href="#projects" className="inline-flex items-center gap-2 text-white hover:text-[#caff00] font-medium transition-colors">
            View All Projects <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="h-64 bg-slate-950 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                <p className="text-slate-600 font-mono text-sm z-10">{project.imagePlaceholder}</p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-slate-300 border border-white/10">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    aria-label={`External link for ${project.name}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2 h-10">
                  {project.description}{' '}
                  {project.status && <span className="italic opacity-50 block mt-1">{project.status}</span>}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-slate-500 bg-black/50 px-2 py-1 rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-[#caff00] text-sm font-bold hover:gap-3 transition-all">
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

