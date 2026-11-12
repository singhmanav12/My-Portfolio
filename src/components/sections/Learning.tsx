import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LearningProps {
  learning: string[];
}

export const Learning: React.FC<LearningProps> = ({ learning }) => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">
        CURRENTLY<br /><span className="text-[#0ea5e9]">LEARNING</span>
      </h2>
      <ul className="space-y-4">
        {learning.map((item, idx) => (
          <li key={idx} className="flex items-center gap-4 text-slate-300 font-medium text-lg">
            <ArrowRight size={20} className="text-[#0ea5e9] shrink-0" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

