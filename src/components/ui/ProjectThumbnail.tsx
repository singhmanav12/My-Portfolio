import React from 'react';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectThumbnailProps {
  project: ProjectItem;
  interactive?: boolean;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  project,
  interactive = false,
}) => {
  if (!project.image) {
    return <p className="text-slate-600 font-mono text-sm z-10">{project.imagePlaceholder}</p>;
  }

  const hoverScale = interactive ? 'transition-transform duration-300 group-hover:scale-105' : '';

  if (project.imageBadge === 'light') {
    return (
      <div className={`bg-white rounded-2xl px-6 py-4 shadow-xl z-10 ${hoverScale}`}>
        <img
          src={project.image}
          alt={project.name}
          className="max-h-20 w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.name}
      className={`max-h-36 max-w-[75%] object-contain z-10 drop-shadow-[0_12px_30px_rgba(124,58,237,0.25)] ${hoverScale}`}
    />
  );
};
