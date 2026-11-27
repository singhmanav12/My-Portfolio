import React from 'react';
import { Trophy } from 'lucide-react';
import type { AchievementItem } from '../../types/portfolio';

interface AchievementsProps {
  achievements: AchievementItem[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const gridColsClass =
    achievements.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section id="achievements" className="py-24 bg-slate-900/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            ACHIEVEMENTS &amp; <span className="text-[#caff00]">HIGHLIGHTS</span>
          </h2>
          <p className="text-slate-400">Hackathons, exhibitions, and milestones.</p>
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

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
