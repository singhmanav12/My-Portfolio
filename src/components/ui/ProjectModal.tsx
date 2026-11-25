import React, { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';

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

  const hasExternalLink = Boolean(project.link && project.link !== '#');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="glass-card bg-[#111111] border border-white/15 max-w-2xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-56 bg-slate-950 flex items-center justify-center border-b border-white/10 relative">
          <p className="text-slate-500 font-mono text-sm">{project.imagePlaceholder}</p>
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
            {hasExternalLink ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Open Project <ExternalLink size={16} />
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-500">
                Live demo / repository link not added yet.
              </span>
            )}
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
