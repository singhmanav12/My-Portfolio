import React, { useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { CertificationItem } from '../../types/portfolio';
import { CertificationCard } from '../ui/CertificationCard';
import { CertificationModal } from '../ui/CertificationModal';

interface AllCertificationsProps {
  certifications: CertificationItem[];
  onBack: () => void;
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  All: 'Complete directory of verified licenses, certifications, and technical credentials earned across domains.',
  Cloud: 'Cloud architecture, services, and deployment certifications validating hands-on cloud fundamentals.',
  Languages: 'Certifications focused on core programming languages, data structures, and problem solving.',
  DevOps: 'Credentials covering containers, orchestration, CI/CD pipelines, and infrastructure automation.',
  'Web & Backend': 'Certifications covering modern frontend frameworks, REST APIs, and relational databases.',
};

export const AllCertifications: React.FC<AllCertificationsProps> = ({
  certifications,
  onBack,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCertification, setSelectedCertification] = useState<CertificationItem | null>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(certifications.map((c) => c.category)));
    return ['All', ...unique];
  }, [certifications]);

  const filteredCertifications = useMemo(() => {
    if (selectedCategory === 'All') return certifications;
    return certifications.filter((c) => c.category === selectedCategory);
  }, [certifications, selectedCategory]);

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
            ALL <span className="text-[#caff00]">CERTIFICATIONS</span>
          </h1>
          <p className="text-slate-400 max-w-lg">
            Browse verified credentials filtered by technical domain ({certifications.length} total).
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
            `Showing certifications in the ${selectedCategory} category.`}
        </p>
        <span className="text-xs font-mono text-slate-500 shrink-0">
          {filteredCertifications.length}{' '}
          {filteredCertifications.length === 1 ? 'certification' : 'certifications'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCertifications.map((certification, idx) => (
          <CertificationCard
            key={`${certification.title}-${idx}`}
            certification={certification}
            onSelect={setSelectedCertification}
          />
        ))}
      </div>

      <CertificationModal
        certification={selectedCertification}
        onClose={() => setSelectedCertification(null)}
      />
    </section>
  );
};
