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
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-sky-500/30 font-sans relative overflow-hidden">
      {/* Background Matrix/Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>

      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
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
            className="flex gap-6 text-sm font-medium text-slate-400"
          >
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
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
            <p className="text-sky-400 font-mono text-sm mb-4">Hello, I am</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              Manavendra Pratap Singh
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
              Building secure infrastructure.
            </h2>
            <p className="text-slate-400 text-lg max-w-lg mb-8 leading-relaxed">
              A dedicated Cloud Infrastructure & DevOps Engineer. I specialize in architecting scalable, secure systems and automating deployment pipelines. Bridging the gap between development and operations.
            </p>
            
            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-lg hover:bg-sky-300 transition-colors">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-3 border border-white/20 rounded-lg hover:border-white/60 transition-colors">
                Let's Connect
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

        {/* Skills Section */}
        <section id="about" className="py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title mb-12">Core Arsenal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Cloud & Architecture", desc: "AWS (EC2, S3, RDS), System Design, Scalable Infrastructure, Load Balancing." },
                { title: "DevOps & CI/CD", desc: "Docker, Kubernetes, Jenkins, Terraform, GitHub Actions, Linux Administration." },
                { title: "Languages", desc: "Python, Go, TypeScript, C/C++, Bash Scripting." },
                { title: "Certifications", desc: "Cisco Networking Basics, Cisco Linux Unhatched, Datacom Cloud Job Simulation." }
              ].map((skill, idx) => (
                <motion.div key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-xl border border-white/5 hover:border-sky-400/30 hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4 text-sky-400">{skill.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title mb-12">Experience & Leadership</h2>
            
            <div className="max-w-3xl relative timeline pl-6">
              {[
                { year: "2026", title: "Tech Lead", company: "InnoThon 3.0 National Hackathon", desc: "Led the technical infrastructure and managed scoring data integrity across the review process for ~500 participants. Architected the official event platform utilizing React and TypeScript." },
                { year: "2026", title: "Freelance Full-Stack Engineer", company: "Golden Krust", desc: "Designed and deployed a robust PostgreSQL schema using atomic transactions to guarantee billing data integrity for an e-commerce platform." },
                { year: "2025", title: "1st Place Winner", company: "Python Programming Competition (SKITM)", desc: "Showcased advanced Python automation and algorithmic problem-solving skills under strict time constraints." }
              ].map((exp, idx) => (
                <motion.div key={idx} 
                  initial={{ opacity: 0, x: -20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="timeline-marker"></div>
                  <span className="text-sky-400 font-mono text-sm block mb-1">{exp.year}</span>
                  <h3 className="text-xl font-bold text-slate-50">{exp.title}</h3>
                  <h4 className="text-slate-400 font-medium mb-3">{exp.company}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title mb-12">Engineering Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "2-Tier Flask App on AWS", desc: "Built an automated CI/CD pipeline triggered via GitHub webhooks, completely removing manual deployment steps for a robust 2-tier application architecture.", tech: ["AWS EC2", "Docker", "Jenkins", "Flask"] },
                { title: "Stateful DPI Engine", desc: "Engineered a Deep Packet Inspection engine from scratch in Python to parse PCAP files with complex rule-based filtering across TCP/UDP, DNS, and TLS protocols.", tech: ["Python", "PCAP", "TCP/IP"] }
              ].map((proj, idx) => (
                <motion.div key={idx} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-xl border border-white/5 hover:-translate-y-2 hover:border-sky-400/30 transition-all flex flex-col"
                >
                  <div className="flex justify-between items-center mb-6">
                    <svg className="w-10 h-10 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <a href="https://github.com/singhmanav12" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{proj.desc}</p>
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-500">
                    {proj.tech.map((t, i) => <span key={i}>{t}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <h2 className="text-3xl font-bold mb-4">Initiate Connection</h2>
            <p className="text-slate-400 text-center mb-10">Whether you're building scalable infrastructure or need a DevOps engineer, my inbox is always open.</p>
            
            <div className="flex gap-4 mb-12">
              <a href="mailto:pratapsinghmanav2006@gmail.com" className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 hover:-translate-y-1 transition-all">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/manavendrapratapsingh2006/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 hover:-translate-y-1 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/singhmanav12" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 hover:-translate-y-1 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 text-sky-400 text-sm font-medium">
                <MapPin size={16} /> Indore, India <span className="opacity-70 ml-1">(Ready to relocate)</span>
              </div>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="w-full flex flex-col gap-8">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" name="name" required className="w-full bg-transparent border-b-2 border-white/10 py-2 outline-none focus:border-sky-400 transition-colors peer placeholder-transparent" placeholder="Name" />
                  <label className="absolute left-0 -top-4 text-xs text-sky-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 transition-all pointer-events-none">Name</label>
                </div>
                <div className="relative group">
                  <input type="email" name="email" required className="w-full bg-transparent border-b-2 border-white/10 py-2 outline-none focus:border-sky-400 transition-colors peer placeholder-transparent" placeholder="Email" />
                  <label className="absolute left-0 -top-4 text-xs text-sky-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 transition-all pointer-events-none">Email</label>
                </div>
              </div>
              
              <div className="relative group">
                <textarea name="message" rows={4} required className="w-full bg-transparent border-b-2 border-white/10 py-2 outline-none focus:border-sky-400 transition-colors peer placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label className="absolute left-0 -top-4 text-xs text-sky-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 transition-all pointer-events-none">Message</label>
              </div>
              
              <button type="submit" className="self-center mt-4 px-8 py-3 font-mono tracking-wider bg-transparent border border-white/20 rounded hover:border-sky-400 hover:text-sky-400 transition-colors">
                &gt; Send_
              </button>
            </form>

          </motion.div>
        </section>

      </main>
    </div>
  );
}

export default App;
