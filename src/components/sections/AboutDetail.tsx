import React from 'react';
import { ArrowLeft, ArrowRight, Compass, Download, GraduationCap, Sparkles } from 'lucide-react';
import type { AboutData } from '../../types/portfolio';

interface AboutDetailProps {
  about: AboutData;
  learning: string[];
  onBack: () => void;
  onOpenContact: () => void;
}

export const AboutDetail: React.FC<AboutDetailProps> = ({
  about,
  learning,
  onBack,
  onOpenContact,
}) => {
  const { detail } = about;

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

      {/* Header */}
      <div className="mb-14 space-y-5">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#caff00]">
          About Me
        </p>
        <h1 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
          MORE <span className="text-[#caff00]">ABOUT ME</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
          {detail.headline}
        </p>
        <p className="text-slate-400 max-w-2xl">
          {detail.subheadline}
        </p>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 mb-14 border-y border-white/10">
        {about.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col border-l border-white/10 pl-6 first:border-0 first:pl-0">
            <span className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter break-words">
              {stat.value}
            </span>
            <span className="text-sm text-slate-400 leading-snug">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Story + Quote */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
        <div className="lg:col-span-2 glass-card p-8 space-y-5">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#caff00]">
            Background &amp; Journey
          </h2>
          {detail.story.map((paragraph, idx) => (
            <p key={idx} className="text-slate-300 leading-relaxed text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="glass-card p-8 border-l-4 border-l-[#caff00] flex flex-col justify-between gap-6">
          <div>
            <span className="text-[#caff00] text-5xl font-serif leading-none block mb-2">"</span>
            <p className="text-2xl text-white font-serif italic leading-snug">
              {about.quote}
            </p>
          </div>
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
              Currently Exploring
            </p>
            <div className="flex flex-wrap gap-2">
              {learning.map((topic, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-slate-300 bg-black/50 px-2.5 py-1 rounded border border-white/10"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Compass size={16} className="text-[#caff00]" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
            What I Focus On
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {detail.focusAreas.map((area, idx) => (
            <div key={idx} className="glass-card p-7 space-y-3 hover:border-white/20 transition-colors">
              <span className="text-xs font-mono text-[#caff00]">0{idx + 1}</span>
              <h3 className="text-xl font-bold text-white">{area.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Beyond Code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        <div className="glass-card p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#caff00]">
            <GraduationCap size={18} />
            <h2 className="text-xs font-mono uppercase tracking-widest">Education</h2>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{detail.education.degree}</h3>
            <p className="text-sm text-slate-300 mt-1">{detail.education.institution}</p>
            <p className="text-xs font-mono text-slate-500 mt-1">{detail.education.period}</p>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed pt-2 border-t border-white/10">
            {detail.education.highlights}
          </p>
        </div>

        <div className="glass-card p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#caff00]">
            <Sparkles size={18} />
            <h2 className="text-xs font-mono uppercase tracking-widest">Beyond Code</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {detail.beyondCode}
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="glass-card p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            Want to collaborate or chat?
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Open to internships, full-time roles, hackathons, and interesting projects.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="/resume.pdf" download="Manavendra_Resume.pdf" className="btn-secondary text-sm">
            Download Resume <Download size={16} />
          </a>
          <button type="button" onClick={onOpenContact} className="btn-primary text-sm cursor-pointer">
            Let's Talk <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
