import React, { useEffect } from 'react';
import { Award, Briefcase, Calendar, CheckCircle2, ExternalLink, MapPin, Sparkles, X } from 'lucide-react';
import type { ExperienceItem } from '../../types/portfolio';

interface ExperienceModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, onClose }) => {
  useEffect(() => {
    if (!experience) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [experience, onClose]);

  if (!experience) return null;

  const hasExternalLink = Boolean(experience.link && experience.link !== '#');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-modal-title"
    >
      <div
        className="glass-card bg-[#111111] border border-white/15 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-8 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close role details"
          className="absolute top-6 right-6 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-3 pr-10">
          <span className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-[#caff00]">
            <Briefcase size={18} />
          </span>
          {experience.type && (
            <span className="px-3 py-1 rounded-full bg-[#caff00]/10 border border-[#caff00]/30 text-xs font-mono text-[#caff00]">
              {experience.type}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-black/50 px-3 py-1 rounded-full border border-white/10">
            <Calendar size={12} /> {experience.year}
          </span>
        </div>

        {/* Title & Org */}
        <div>
          <h3 id="experience-modal-title" className="text-3xl font-black text-white">
            {experience.title}
          </h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300 mt-2">
            <span className="font-semibold text-white">{experience.company}</span>
            {experience.location && (
              <span className="inline-flex items-center gap-1 text-slate-400">
                <MapPin size={14} className="text-[#caff00]" /> {experience.location}
              </span>
            )}
          </div>
        </div>

        {/* Overview */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Overview</p>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">{experience.description}</p>
        </div>

        {/* What I Did / Key Responsibilities */}
        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
              What I Did &amp; Responsibilities
            </p>
            <ul className="space-y-2.5">
              {experience.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 size={16} className="text-[#caff00] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Highlights / Impact */}
        {experience.highlights && experience.highlights.length > 0 && (
          <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#caff00]">
              <Sparkles size={14} /> Key Highlights &amp; Impact
            </div>
            <ul className="space-y-2">
              {experience.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm text-slate-300 leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Attached Certificate Preview */}
        {experience.certificateImage && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
              <Award size={14} className="text-[#caff00]" /> Certificate of Achievement
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white">
              <img
                src={experience.certificateImage}
                alt={`${experience.company} Certificate`}
                className="w-full h-auto max-h-64 object-contain"
              />
            </div>
          </div>
        )}

        {/* Tech & Skills */}
        {experience.tags && experience.tags.length > 0 && (
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
              Tech &amp; Skills Used
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-slate-300 bg-black/60 px-3 py-1.5 rounded border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          {hasExternalLink ? (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Visit Work <ExternalLink size={16} />
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-500">
              Click outside or press Esc to close
            </span>
          )}
          <button type="button" onClick={onClose} className="btn-secondary text-sm cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
