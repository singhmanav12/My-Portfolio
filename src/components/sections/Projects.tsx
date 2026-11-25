import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';

interface ProjectsProps {
  projects: ProjectItem[];
  onViewAll: () => void;
}

const SELECTED_PROJECTS_COUNT = 4;

export const Projects: React.FC<ProjectsProps> = ({ projects, onViewAll }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const selectedProjects = projects.slice(0, SELECTED_PROJECTS_COUNT);

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
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-2 text-white hover:text-[#caff00] font-medium transition-colors cursor-pointer"
          >
            View All Projects ({projects.length}) <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedProjects.map((project, idx) => (
            <ProjectCard key={`${project.name}-${idx}`} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
