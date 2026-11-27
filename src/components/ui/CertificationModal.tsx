import React, { useEffect } from 'react';
import { Calendar, ExternalLink, Hash, ShieldCheck, X } from 'lucide-react';
import type { CertificationItem } from '../../types/portfolio';

interface CertificationModalProps {
  certification: CertificationItem | null;
  onClose: () => void;
}

export const CertificationModal: React.FC<CertificationModalProps> = ({
  certification,
  onClose,
}) => {
  useEffect(() => {
    if (!certification) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certification, onClose]);

  if (!certification) return null;

  const hasVerifyUrl = Boolean(certification.credentialUrl && certification.credentialUrl !== '#');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certification-modal-title"
    >
      <div
        className="glass-card bg-[#111111] border border-white/15 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-8 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close credential details"
          className="absolute top-6 right-6 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 pr-10">
          <span className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-[#caff00]">
            <ShieldCheck size={18} />
          </span>
          <span className="px-3 py-1 rounded-full bg-[#caff00]/10 border border-[#caff00]/30 text-xs font-mono text-[#caff00]">
            {certification.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-black/50 px-3 py-1 rounded-full border border-white/10">
            <Calendar size={12} /> Issued {certification.issueDate}
          </span>
        </div>

        {/* Title & Issuer */}
        <div>
          <h3 id="certification-modal-title" className="text-2xl md:text-3xl font-black text-white">
            {certification.title}
          </h3>
          <p className="text-base font-medium text-slate-300 mt-1">{certification.issuer}</p>
        </div>

        {/* Certificate Image (if provided) */}
        {certification.image && (
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white">
            <img
              src={certification.image}
              alt={`${certification.title} Certificate`}
              className="w-full h-auto max-h-64 object-contain"
            />
          </div>
        )}

        {/* Description */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
            Overview
          </p>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            {certification.description}
          </p>
        </div>

        {/* Credential ID */}
        {certification.credentialId && (
          <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Hash size={14} className="text-[#caff00]" /> Credential ID
            </span>
            <span className="text-xs font-mono text-white">{certification.credentialId}</span>
          </div>
        )}

        {/* Skills Covered */}
        {certification.skills && certification.skills.length > 0 && (
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
              Skills Validated
            </p>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-slate-300 bg-black/60 px-3 py-1.5 rounded border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          {hasVerifyUrl ? (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Verify Credential <ExternalLink size={16} />
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-500">
              Verification link not added yet.
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
