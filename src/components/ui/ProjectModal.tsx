import React, { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const hasLiveDemo = Boolean(project.link && project.link !== '#');
  const hasSourceCode = Boolean(project.github && project.github !== '#');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="glass-card bg-[#111111] border border-white/15 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-56 bg-slate-950 flex items-center justify-center border-b border-white/10 relative p-6">
          <ProjectThumbnail project={project} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-slate-300 border border-white/10">
              {project.category}
            </span>
          </div>

          <div>
            <h3 id="project-modal-title" className="text-3xl font-black text-white mb-3">
              {project.name}
            </h3>
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
            {project.status && (
              <p className="text-sm text-slate-400 italic mt-2">{project.status}</p>
            )}
          </div>

          {project.features && project.features.length > 0 && (
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Core Features</p>
              <div className="space-y-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-1"
                  >
                    <h4 className="text-sm font-bold text-[#caff00]">{feature.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-slate-300 bg-black/60 px-3 py-1.5 rounded border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {hasLiveDemo && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
              {hasSourceCode && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <SiGithub size={16} /> Source Code
                </a>
              )}
              {!hasLiveDemo && !hasSourceCode && (
                <span className="text-xs font-mono text-slate-500">
                  Live demo &amp; source code links not added yet.
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary text-sm cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
