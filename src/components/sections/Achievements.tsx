import React, { useEffect, useState } from 'react';
import { Award, Trophy, X } from 'lucide-react';
import type { AchievementItem } from '../../types/portfolio';

interface AchievementsProps {
  achievements: AchievementItem[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const [selectedCertificate, setSelectedCertificate] = useState<AchievementItem | null>(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertificate]);

  const gridColsClass =
    achievements.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section id="achievements" className="py-24 bg-slate-900/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            ACHIEVEMENTS &amp; <span className="text-[#caff00]">HIGHLIGHTS</span>
          </h2>
          <p className="text-slate-400">Awards, hackathons, exhibitions, and milestones.</p>
        </div>

        <div className={`grid ${gridColsClass} gap-6`}>
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 group hover:border-[#caff00]/40 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-[#caff00] group-hover:scale-105 transition-transform">
                    <Trophy size={18} />
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    {item.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">{item.year}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#caff00] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-slate-300 mb-3">{item.subtitle}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{item.description}</p>

              <div className="mt-auto space-y-4">
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-slate-400 bg-black/50 px-2.5 py-1 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {item.certificateImage && (
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(item)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#caff00] hover:underline cursor-pointer pt-1"
                  >
                    <Award size={15} /> View Certificate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCertificate && selectedCertificate.certificateImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setSelectedCertificate(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
        >
          <div
            className="glass-card bg-[#111111] border border-white/15 max-w-3xl w-full overflow-hidden shadow-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#caff00]">
                  {selectedCertificate.subtitle}
                </p>
                <h3 id="certificate-modal-title" className="text-2xl font-black text-white mt-1">
                  {selectedCertificate.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
                className="p-2 rounded-full bg-black/60 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-white">
              <img
                src={selectedCertificate.certificateImage}
                alt={`${selectedCertificate.title} Certificate`}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
