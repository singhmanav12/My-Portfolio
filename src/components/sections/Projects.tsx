import React, { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, X } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectsProps {
  projects: ProjectItem[];
}

const INITIAL_VISIBLE_COUNT = 4;

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMoreProjects = projects.length > INITIAL_VISIBLE_COUNT;

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

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
          {hasMoreProjects && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 text-white hover:text-[#caff00] font-medium transition-colors cursor-pointer"
            >
              {showAll ? 'Show Less Projects' : `View All Projects (${projects.length})`}{' '}
              <ArrowRight size={16} className={`transition-transform ${showAll ? '-rotate-90' : ''}`} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => {
            const hasExternalLink = project.link && project.link !== '#';
            return (
              <div key={`${project.name}-${idx}`} className="glass-card overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="h-64 bg-slate-950 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                  <p className="text-slate-600 font-mono text-sm z-10">{project.imagePlaceholder}</p>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50" />
                </div>
                <div className="p-8">
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
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Inspect ${project.name}`}
                        className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <ExternalLink size={20} />
                      </button>
                    )}
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
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-[#caff00] text-sm font-bold hover:gap-3 transition-all cursor-pointer"
                  >
                    View Project <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="glass-card bg-[#111111] border border-white/15 max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-56 bg-slate-950 flex items-center justify-center border-b border-white/10 relative">
              <p className="text-slate-500 font-mono text-sm">{selectedProject.imagePlaceholder}</p>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between gap-4">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-slate-300 border border-white/10">
                  {selectedProject.category}
                </span>
              </div>

              <div>
                <h3 id="project-modal-title" className="text-3xl font-black text-white mb-3">
                  {selectedProject.name}
                </h3>
                <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
                {selectedProject.status && (
                  <p className="text-sm text-slate-400 italic mt-2">{selectedProject.status}</p>
                )}
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
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
                {selectedProject.link && selectedProject.link !== '#' ? (
                  <a
                    href={selectedProject.link}
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
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary text-sm cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

