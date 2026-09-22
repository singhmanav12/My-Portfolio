import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Mail, MapPin } from 'lucide-react';

const App = () => {
  const [yamlText, setYamlText] = useState('');
  const fullYaml = `apiVersion: v1
kind: Developer
metadata:
  name: manavendra-pratap-singh
  role: Cloud & DevOps Engineer
  location: Indore, India
spec:
  status: seeking_entry_level
  stack:
    cloud: ["AWS"]
    containers: ["Docker", "Kubernetes"]
    iac: ["Terraform"]
    cicd: ["Jenkins", "GitHub Actions"]
  languages:
    - Python
    - Go
    - TypeScript
    - C/C++`;

  useEffect(() => {
    let currentText = '';
    let i = 0;
    
    const interval = setInterval(() => {
      if (i < fullYaml.length) {
        currentText += fullYaml.charAt(i);
        setYamlText(currentText);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-sky-500/30 font-sans relative overflow-x-hidden">
      {/* Background Matrix/Glow */}
      <div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none opacity-50"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-50 glass-panel rounded-full shadow-2xl shadow-sky-900/20">
        <div className="px-6 py-3 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl tracking-tight"
          >
            Manavendra<span className="text-sky-400">.</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-6 text-sm font-medium text-slate-400 items-center"
          >
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/resume.pdf" target="_blank" className="px-4 py-2 border border-sky-400/50 text-sky-400 rounded hover:bg-sky-400/10 transition-colors">Resume</a>
          </motion.div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <p className="text-sky-400 font-mono text-sm mb-4 uppercase tracking-[0.2em]">Hello, I am</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
              Manavendra Pratap Singh
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
              DevOps & Cloud Engineer
            </h2>
            <p className="text-slate-400 text-lg max-w-lg mb-10 leading-relaxed">
              I specialize in architecting scalable, secure systems and automating deployment pipelines. Bridging the gap between development and operations with jaw-dropping precision.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="glow-border px-8 py-4 bg-sky-500 text-white font-bold rounded-full shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:-translate-y-1 transition-all duration-300">
                VIEW MY WORK
              </a>
              <a href="/resume.pdf" target="_blank" className="px-8 py-4 glass-panel rounded-full text-slate-300 font-bold hover:text-white hover:-translate-y-1 hover:bg-slate-800/80 transition-all duration-300">
                DOWNLOAD CV
              </a>
              <a href="#contact" className="w-14 h-14 flex items-center justify-center bg-slate-900 rounded-full border border-sky-500/50 text-sky-400 hover:bg-sky-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md group"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Terminal size={14} /> config.yaml
                </span>
              </div>
              <div className="p-6 h-[320px] overflow-y-auto">
                <pre className="font-mono text-sm text-sky-300 leading-relaxed">
                  <code>{yamlText}<span className="animate-pulse">_</span></code>
                </pre>
              </div>
            </div>
          </motion.div>

        </section>

        {/* Skills Section (Bento Grid) */}
        <section id="about" className="py-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title mb-16">Core Arsenal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Cloud & Architecture", span: "md:col-span-2", icon: "☁️", desc: "AWS (EC2, S3, RDS), System Design, Scalable Infrastructure, Load Balancing. Architecting high-availability systems with minimal downtime." },
                { title: "Languages", span: "md:col-span-1", icon: "⚡", desc: "Python, Go, TypeScript, C/C++, Bash Scripting." },
                { title: "DevOps & CI/CD", span: "md:col-span-1 md:row-span-2", icon: "⚙️", desc: "Docker, Kubernetes, Jenkins, Terraform, GitHub Actions, Linux Administration. Building resilient deployment pipelines and automating the SDLC from zero to production." },
                { title: "Certifications", span: "md:col-span-2", icon: "🏆", desc: "Cisco Networking Basics, Cisco Linux Unhatched, Datacom Cloud Job Simulation." }
              ].map((skill, idx) => (
                <motion.div key={idx} 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`glow-border glass-panel p-8 rounded-3xl flex flex-col justify-between group overflow-hidden ${skill.span}`}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl group-hover:scale-110 group-hover:opacity-20 transition-all duration-500 pointer-events-none">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-50 group-hover:text-sky-400 transition-colors">{skill.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed relative z-10">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title mb-16">Education</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { year: "2024 - 2028", title: "B.Tech in Computer Science", company: "SKITM, Indore", desc: "Currently pursuing my Bachelor's degree in Computer Science Engineering, focusing on Cloud Computing and Software Development.", imagePlaceholder: true },
                { year: "2022 - 2024", title: "Higher Secondary Education", company: "Salt Brook Academy", desc: "Completed higher secondary education with a strong foundation in science and mathematics.", imagePlaceholder: true }
              ].map((edu, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glow-border glass-panel p-8 rounded-3xl group flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                >
                  <div className="md:w-32 flex-shrink-0 pt-1">
                    <span className="text-sky-400 font-mono text-lg md:text-xl font-bold block">{edu.year}</span>
                    <div className="w-12 h-1 bg-sky-500/50 mt-4 rounded-full group-hover:w-24 group-hover:bg-sky-400 transition-all duration-500"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-50 mb-2 group-hover:text-sky-400 transition-colors">{edu.title}</h3>
                    <h4 className="text-sky-300/80 font-semibold mb-4 text-lg">{edu.company}</h4>
                    <p className="text-slate-400 leading-relaxed text-base mb-4">{edu.desc}</p>
                    {edu.imagePlaceholder && (
                      <div className="w-full max-w-sm h-48 bg-slate-900/50 border border-white/10 rounded-xl flex items-center justify-center text-slate-500 text-sm italic overflow-hidden mt-4">
                        [ Image Placeholder - Add image source here later ]
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="pb-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title mb-16">Experience & Leadership</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { year: "2026", title: "Freelance Full-Stack Engineer", company: "Golden Krust", desc: "Designed and deployed a robust PostgreSQL schema using atomic transactions to guarantee billing data integrity for an e-commerce platform." },
                { year: "2026", title: "Technical Organizer", company: "InnoThon 3.0 National Hackathon", desc: "Managed technical operations and organizing duties, including participant communications, data tracking via Excel, and continuous updates to the official InnoThon event website." }
              ].map((exp, idx) => (
                <motion.div key={idx} 
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glow-border glass-panel p-8 rounded-3xl group flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                >
                  <div className="md:w-32 flex-shrink-0 pt-1">
                    <span className="text-sky-400 font-mono text-lg md:text-xl font-bold block">{exp.year}</span>
                    <div className="w-12 h-1 bg-sky-500/50 mt-4 rounded-full group-hover:w-24 group-hover:bg-sky-400 transition-all duration-500"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-50 mb-2 group-hover:text-sky-400 transition-colors">{exp.title}</h3>
                    <h4 className="text-sky-300/80 font-semibold mb-4 text-lg">{exp.company}</h4>
                    <p className="text-slate-400 leading-relaxed text-base">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title mb-16">Engineering Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "2-Tier Flask App on AWS", desc: "Built an automated CI/CD pipeline triggered via GitHub webhooks, completely removing manual deployment steps for a robust 2-tier application architecture.", tech: ["AWS EC2", "Docker", "Jenkins", "Flask"] },
                { title: "Stateful DPI Engine", desc: "Engineered a Deep Packet Inspection engine from scratch in Python to parse PCAP files with complex rule-based filtering across TCP/UDP, DNS, and TLS protocols.", tech: ["Python", "PCAP", "TCP/IP"] }
              ].map((proj, idx) => (
                <motion.div key={idx} 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glow-border glass-panel p-10 rounded-3xl group flex flex-col hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-14 h-14 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <a href="https://github.com/singhmanav12" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors">{proj.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-8 flex-1">{proj.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/5 font-mono text-xs text-sky-300 group-hover:border-sky-500/30 transition-colors">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title mb-16">Achievements</h2>
            
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                className="glow-border glass-panel p-8 md:p-10 rounded-3xl group flex flex-col md:flex-row gap-6 md:gap-10 items-center hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-yellow-500/20 transition-all duration-300 border border-yellow-500/20">
                  <span className="text-4xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-50 mb-2 group-hover:text-yellow-400 transition-colors">1st Place Winner - Python Programming Competition</h3>
                  <h4 className="text-slate-400 font-semibold mb-4 text-lg">SKITM • 2025</h4>
                  <p className="text-slate-400 leading-relaxed text-base">Showcased advanced Python automation and algorithmic problem-solving skills under strict time constraints, outperforming other top participants.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto flex flex-col items-center glass-panel p-10 md:p-16 rounded-[3rem]"
          >
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">Initiate Connection</h2>
            <p className="text-slate-400 text-center mb-10 text-lg">Whether you're building scalable infrastructure or need a DevOps engineer, my inbox is always open.</p>
            
            <div className="flex gap-4 mb-12">
              <a href="mailto:pratapsinghmanav2006@gmail.com" className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300">
                <Mail size={22} />
              </a>
              <a href="https://linkedin.com/in/manavendrapratapsingh2006/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/singhmanav12" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium">
                <MapPin size={18} /> Indore, India <span className="opacity-70 ml-1">(Ready to relocate)</span>
              </div>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="w-full flex flex-col gap-8">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" name="name" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-sky-400 transition-colors peer placeholder-transparent" placeholder="Name" />
                  <label className="absolute left-4 -top-3 px-1 bg-slate-900 text-xs text-sky-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 transition-all pointer-events-none">Name</label>
                </div>
                <div className="relative group">
                  <input type="email" name="email" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-sky-400 transition-colors peer placeholder-transparent" placeholder="Email" />
                  <label className="absolute left-4 -top-3 px-1 bg-slate-900 text-xs text-sky-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 transition-all pointer-events-none">Email</label>
                </div>
              </div>
              
              <div className="relative group">
                <textarea name="message" rows={4} required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-sky-400 transition-colors peer placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label className="absolute left-4 -top-3 px-1 bg-slate-900 text-xs text-sky-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 transition-all pointer-events-none">Message</label>
              </div>
              
              <button type="submit" className="glow-border self-center mt-4 px-12 py-4 font-mono font-bold tracking-widest bg-slate-900 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.1)] hover:shadow-[0_0_25px_rgba(14,165,233,0.4)]">
                &gt; SEND_
              </button>
            </form>
          </motion.div>
        </section>

      </main>
    </div>
  );
}

export default App;
