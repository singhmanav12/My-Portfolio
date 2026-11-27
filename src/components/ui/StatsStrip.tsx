import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { StatItem } from '../../types/portfolio';

interface StatsStripProps {
  stats: StatItem[];
  onStatClick?: (target: string) => void;
  className?: string;
}

export const StatsStrip: React.FC<StatsStripProps> = ({
  stats,
  onStatClick,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/10 ${className}`}>
      {stats.map((stat, idx) => {
        const isClickable = Boolean(stat.target && onStatClick);
        const content = (
          <>
            <div className="flex items-baseline gap-2 mb-2">
              <span
                className={`text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter break-words ${
                  isClickable ? 'group-hover:text-[#caff00] transition-colors' : ''
                }`}
              >
                {stat.value}
              </span>
              {isClickable && (
                <ArrowUpRight
                  size={18}
                  className="text-slate-500 group-hover:text-[#caff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              )}
            </div>
            <span
              className={`text-sm text-slate-400 max-w-[200px] leading-snug ${
                isClickable ? 'group-hover:text-slate-200 transition-colors' : ''
              }`}
            >
              {stat.label}
            </span>
          </>
        );

        return (
          <div key={idx} className="border-l border-white/10 pl-6 first:border-0 first:pl-0">
            {isClickable ? (
              <button
                type="button"
                onClick={() => stat.target && onStatClick?.(stat.target)}
                className="flex flex-col text-left group cursor-pointer w-full"
              >
                {content}
              </button>
            ) : (
              <div className="flex flex-col">{content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
