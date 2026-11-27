import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { CertificationItem } from '../../types/portfolio';
import { CertificationCard } from '../ui/CertificationCard';
import { CertificationModal } from '../ui/CertificationModal';

interface CertificationsProps {
  certifications: CertificationItem[];
  onViewAll: () => void;
}

const FEATURED_CERTIFICATIONS_COUNT = 2;

export const Certifications: React.FC<CertificationsProps> = ({
  certifications,
  onViewAll,
}) => {
  const [selectedCertification, setSelectedCertification] = useState<CertificationItem | null>(null);
  const featuredCertifications = certifications.slice(0, FEATURED_CERTIFICATIONS_COUNT);

  return (
    <section id="certifications" className="py-24 max-w-7xl mx-auto px-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            LICENSES &amp; <span className="text-[#caff00]">CERTIFICATIONS</span>
          </h2>
          <p className="text-slate-400 max-w-md">
            Verified credentials across cloud platforms, programming languages, and core engineering.
          </p>
        </div>
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-2 text-white hover:text-[#caff00] font-medium transition-colors cursor-pointer"
        >
          View All Certifications ({certifications.length}) <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredCertifications.map((certification, idx) => (
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
