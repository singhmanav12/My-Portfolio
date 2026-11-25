import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const hasExternalLink = Boolean(project.link && project.link !== '#');

  return (
    <div className="glass-card overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col">
      <div className="h-64 bg-slate-950 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
        <p className="text-slate-600 font-mono text-sm z-10">{project.imagePlaceholder}</p>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50" />
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-slate-300 border border-white/10">
            {project.category}
          </span>
          {hasExternalLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`External link for ${project.name}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onSelect(project)}
              aria-label={`Inspect ${project.name}`}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ExternalLink size={20} />
            </button>
          )}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2 min-h-[2.5rem]">
          {project.description}{' '}
          {project.status && <span className="italic opacity-50 block mt-1">{project.status}</span>}
        </p>
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs font-mono text-slate-500 bg-black/50 px-2 py-1 rounded border border-white/5">
              {t}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-2 text-[#caff00] text-sm font-bold hover:gap-3 transition-all cursor-pointer self-start"
        >
          View Project <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
