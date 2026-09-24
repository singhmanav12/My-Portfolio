import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ExternalLink, Code2, Cloud, Box, Server, GitBranch, Sparkles } from 'lucide-react';
import { portfolioData } from './data';

// Helper to get an icon based on name
const getTechIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'python': return <Code2 size={16} className="text-yellow-400" />;
    case 'aws': return <Cloud size={16} className="text-orange-400" />;
    case 'docker': return <Box size={16} className="text-blue-400" />;
    case 'kubernetes': return <Server size={16} className="text-blue-500" />;
    case 'react': return <Code2 size={16} className="text-cyan-400" />;
    case 'git': return <GitBranch size={16} className="text-red-400" />;
    case 'java': return <Code2 size={16} className="text-red-500" />;
    case 'javascript': return <Code2 size={16} className="text-yellow-300" />;
    case 'linux': return <Server size={16} className="text-slate-300" />;
    case 'terraform': return <Cloud size={16} className="text-purple-400" />;
    case 'html': return <Code2 size={16} className="text-orange-500" />;
    case 'css': return <Code2 size={16} className="text-blue-500" />;
    case 'rest apis': return <Server size={16} className="text-green-400" />;
    case 'github': return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>;
    default: return <Code2 size={16} className="text-slate-400" />;
  }
};

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-50 font-sans selection:bg-[#caff00]/30 overflow-x-hidden">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] brush-blue blur-[100px] opacity-40 rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] brush-lime blur-[100px] opacity-20 rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-3xl font-black tracking-tighter">M.</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="nav-link text-white">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <a href="#contact" className="hidden md:inline-flex px-5 py-2 bg-[#caff00] text-black font-bold rounded-full text-sm hover:bg-[#dfff33] transition-colors items-center gap-2">
          Let's Talk <ArrowRight size={16} />
        </a>
      </nav>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black text-outline-heavy uppercase leading-none opacity-20 select-none z-0 tracking-tighter pointer-events-none transform -rotate-12 w-[120%] text-center">
            {portfolioData.hero.backgroundText}
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <p className="text-slate-300 uppercase tracking-[0.2em] text-xs font-semibold">Hello, I'm</p>
              
              <h1 className="text-6xl md:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.9] text-white">
                <span className="block">MANAVENDRA</span>
                <span className="block text-outline">PRATAP SINGH</span>
              </h1>
              
              <p className="text-xs md:text-sm font-mono text-slate-400 uppercase tracking-[0.2em] pt-2">
                {portfolioData.hero.role}
              </p>
              
              <p className="text-lg text-slate-300 max-w-md leading-relaxed font-serif pt-4">
                {portfolioData.hero.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <a href={portfolioData.hero.buttons.primary.link} className="btn-primary">
                  {portfolioData.hero.buttons.primary.text} <ArrowRight size={18} />
                </a>
                <a href={portfolioData.hero.buttons.secondary.link} className="btn-secondary">
                  {portfolioData.hero.buttons.secondary.text} <Download size={18} />
                </a>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-8">
                {portfolioData.hero.techChips.map((chip, idx) => (
                  <div key={idx} className="chip">
                    {getTechIcon(chip.name)} {chip.name}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[22rem] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center group z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9]/20 to-transparent z-10"></div>
                <p className="text-slate-500 font-mono text-sm z-20 group-hover:scale-110 transition-transform">
                  {portfolioData.hero.photoPlaceholder}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-12 right-12 text-white transform rotate-12 pointer-events-none z-20">
                <svg width="60" height="40" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 50 L30 10 L50 40 L70 10 L90 50" />
                </svg>
              </div>

              <div className="absolute top-1/3 -left-16 text-slate-300 font-[Caveat] text-3xl transform -rotate-6 z-20 leading-tight">
                Ideas<br/>Build<br/>Code<br/>Deploy<br/>Repeat.
              </div>

              <div className="absolute bottom-12 -right-8 bg-[#caff00] text-black w-36 h-36 rounded-full flex flex-col items-center justify-center font-bold text-center text-xs p-4 shadow-2xl z-30 animate-[spin_10s_linear_infinite] hover:animate-none transition-transform hover:scale-110 cursor-pointer">
                AVAILABLE FOR INTERNSHIPS<br/><br/>OPEN TO<br/>COLLABORATION<br/><ArrowRight size={16} className="mx-auto mt-1" />
              </div>

              <div className="absolute -bottom-16 right-32 text-slate-300 font-[Caveat] text-2xl transform rotate-12 z-20">
                Currently<br/>Learning<br/>Kubernetes...
                <svg className="absolute -bottom-6 -left-6" width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="#caff00" strokeWidth="3" strokeLinecap="round">
                  <path d="M40 10 Q 20 20 10 40 M10 40 L20 35 M10 40 L15 30" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 bg-slate-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                  SELECTED<br/><span className="text-[#caff00]">PROJECTS</span>
                </h2>
                <p className="text-slate-400 max-w-sm">A selection of things I've built, experimented with and shipped.</p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-white hover:text-[#caff00] font-medium transition-colors">
                View All Projects <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, idx) => (
                <div key={idx} className="glass-card overflow-hidden group hover:border-white/20 transition-all duration-300">
                  <div className="h-64 bg-slate-950 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                    <p className="text-slate-600 font-mono text-sm z-10">{project.imagePlaceholder}</p>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-slate-300 border border-white/10">
                        {project.category}
                      </span>
                      <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                    <p className="text-slate-400 text-sm mb-6 line-clamp-2 h-10">
                      {project.description} {project.status && <span className="italic opacity-50 block mt-1">{project.status}</span>}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono text-slate-500 bg-black/50 px-2 py-1 rounded border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="inline-flex items-center gap-2 text-[#caff00] text-sm font-bold hover:gap-3 transition-all">
                      View Project <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT & STATS SECTION */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3 relative">
              <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                <span className="text-white block">ABOUT</span>
                <span className="text-outline block">ME</span>
              </h2>
              <div className="absolute top-32 left-10 text-slate-400 font-[Caveat] text-3xl transform -rotate-6">
                Same Person<br/>Different Ideas
                <svg className="absolute top-8 -right-8 transform rotate-90" width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <path d="M10 25 Q 25 10 40 25 M40 25 L35 15 M40 25 L30 30" />
                </svg>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 space-y-12">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-sans">
                {portfolioData.about.text}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/10">
                {portfolioData.about.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col border-l border-white/10 pl-6 first:border-0 first:pl-0">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter break-words">{stat.value}</span>
                    <span className="text-sm text-slate-400 max-w-[150px] leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="glass-card p-8 border-l-4 border-l-[#caff00] relative">
                <span className="text-[#caff00] text-6xl absolute -top-4 -left-6 font-serif">"</span>
                <p className="text-2xl text-white font-serif italic relative z-10 pl-4">
                  {portfolioData.about.quote}
                </p>
                <div className="mt-8 pl-4">
                  <a href="#" className="btn-secondary text-sm px-6 py-2">
                    More About Me <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLKIT SECTION */}
        <section id="skills" className="py-24 bg-slate-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
                MY <span className="text-[#caff00]">TOOLKIT</span>
              </h2>
              <p className="text-slate-400">Technologies and tools I work with.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(portfolioData.toolkit).map(([category, skills], idx) => (
                <div key={idx} className="glass-card p-8 group hover:border-white/20 transition-colors">
                  <h3 className="text-xs font-mono text-slate-400 mb-8 uppercase tracking-widest">{category}</h3>
                  <div className="grid grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                      <div key={i} className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                          {getTechIcon(skill)}
                        </div>
                        <span className="text-[10px] text-slate-400 text-center font-mono">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HORIZONTAL EXPERIENCE SECTION */}
        <section id="experience" className="py-24 max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
              EXPERIENCE & <span className="text-[#caff00]">HIGHLIGHTS</span>
            </h2>
            <p className="text-slate-400">Key events, roles and achievements.</p>
          </div>
          
          <div className="relative pt-10">
            {/* Horizontal Timeline Line */}
            <div className="absolute top-12 left-0 w-full h-px bg-white/10 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute -top-[1.2rem] left-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-[#caff00] z-10 transition-colors"></div>
                  
                  <div className="md:pt-8">
                    <span className="text-xs font-mono text-slate-500 mb-3 block">{exp.year}</span>
                    <h3 className="font-bold text-xl text-white mb-1 group-hover:text-[#caff00] transition-colors">{exp.title}</h3>
                    <h4 className="text-sm text-slate-400 mb-3">{exp.company}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Doodle over timeline */}
            <div className="hidden md:block absolute -top-8 right-12 text-[#caff00] font-[Caveat] text-3xl transform rotate-6">
              Build<br/>Learn<br/>Share<br/>Grow
              <svg className="absolute -bottom-6 right-10 transform -rotate-45" width="30" height="30" viewBox="0 0 50 50" fill="none" stroke="#caff00" strokeWidth="2" strokeLinecap="round">
                <path d="M10 10 L40 40 M40 40 L20 40 M40 40 L40 20" />
              </svg>
            </div>
          </div>
        </section>

        {/* BOTTOM LEARNING & CONTACT ROW */}
        <section className="py-24 max-w-7xl mx-auto px-8 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Currently Learning */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">
                CURRENTLY<br/><span className="text-[#0ea5e9]">LEARNING</span>
              </h2>
              <ul className="space-y-4">
                {portfolioData.learning.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-300 font-medium text-lg">
                    <ArrowRight size={20} className="text-[#0ea5e9]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Let's Build Something Useful */}
            <div id="contact" className="relative group">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
                LET'S BUILD<br/><span className="text-[#caff00]">SOMETHING USEFUL.</span>
              </h2>
              <p className="text-slate-400 mb-10 max-w-sm">
                {portfolioData.contact.subheading}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 relative z-10">
                <a href="#" className="btn-primary">Let's Talk <ArrowRight size={18} /></a>
                <div className="flex gap-4">
                  <a href={portfolioData.contact.github} className="text-slate-400 hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  </a>
                  <a href={portfolioData.contact.linkedin} className="text-slate-400 hover:text-[#0ea5e9] transition-colors">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-[#caff00] transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              <div className="absolute top-1/2 right-0 text-slate-500 font-[Caveat] text-xl transform -rotate-12 pointer-events-none w-32">
                Good Ideas Start with a Conversation.
                <svg className="absolute top-10 -left-6 transform rotate-45" width="30" height="30" viewBox="0 0 50 50" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round">
                  <path d="M10 40 L40 10 M10 40 L30 40 M10 40 L10 20" />
                </svg>
              </div>
            </div>
            
          </div>
        </section>

      </main>
    </div>
  );
};

export default App;
