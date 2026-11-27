import React, { useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';

interface AllProjectsProps {
  projects: ProjectItem[];
  onBack: () => void;
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  All: "A complete showcase of real-world problem-solving applications, cloud projects, and builds I've created independently or with my team.",
  'Real-World Builds':
    'Practical, real-world problem-solving applications and tools built independently or alongside my team during hackathons.',
  'Cloud / DevOps':
    'Cloud infrastructure, containerization, and automation projects focused on deployment and reliability.',
  Sample:
    'Sample placeholder entries reserved for upcoming projects and experiments.',
};

export const AllProjects: React.FC<AllProjectsProps> = ({ projects, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...unique];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section className="py-12 pb-24 max-w-7xl mx-auto px-8 min-h-[calc(100vh-5rem)]">
      <div className="mb-10">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-[#caff00] transition-colors cursor-pointer group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            ALL <span className="text-[#caff00]">PROJECTS</span>
          </h1>
          <p className="text-slate-400 max-w-lg">
            Complete archive of projects, hackathon builds, and experiments ({projects.length} total).
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-colors cursor-pointer border ${
                active
                  ? 'bg-[#caff00] text-black font-bold border-[#caff00]'
                  : 'bg-slate-900/60 text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Active Filter Context */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5">
        <p className="text-sm text-slate-300">
          {CATEGORY_DESCRIPTIONS[selectedCategory] ??
            `Showing projects in the ${selectedCategory} category.`}
        </p>
        <span className="text-xs font-mono text-slate-500 shrink-0">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={`${project.name}-${idx}`} project={project} onSelect={setSelectedProject} />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
