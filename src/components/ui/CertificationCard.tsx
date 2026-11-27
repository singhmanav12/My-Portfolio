import React from 'react';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import type { CertificationItem } from '../../types/portfolio';

interface CertificationCardProps {
  certification: CertificationItem;
  onSelect: (certification: CertificationItem) => void;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  onSelect,
}) => {
  const hasVerifyUrl = Boolean(certification.credentialUrl && certification.credentialUrl !== '#');

  return (
    <div className="glass-card p-8 group hover:border-[#caff00]/40 transition-all duration-300 flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-[#caff00] group-hover:scale-105 transition-transform">
            <ShieldCheck size={18} />
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            {certification.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400">{certification.issueDate}</span>
          {hasVerifyUrl ? (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${certification.title}`}
              title="Verify Credential"
              className="text-slate-400 hover:text-[#caff00] transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onSelect(certification)}
              aria-label={`Inspect ${certification.title}`}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ExternalLink size={18} />
            </button>
          )}
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#caff00] transition-colors">
        {certification.title}
      </h3>
      <p className="text-sm font-medium text-slate-300 mb-3">{certification.issuer}</p>
      <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-2 min-h-[2.5rem]">
        {certification.description}
      </p>

      {certification.credentialId && (
        <p className="text-xs font-mono text-slate-500 mb-5">
          Credential ID: <span className="text-slate-300">{certification.credentialId}</span>
        </p>
      )}

      {certification.skills && certification.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-white/5">
          {certification.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs font-mono text-slate-400 bg-black/50 px-2.5 py-1 rounded border border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <button
          type="button"
          onClick={() => onSelect(certification)}
          className="inline-flex items-center gap-2 text-[#caff00] text-sm font-bold hover:gap-3 transition-all cursor-pointer"
        >
          View Credential <ArrowRight size={16} />
        </button>

        {hasVerifyUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-[#caff00] transition-colors"
          >
            Verify Credential <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
};
