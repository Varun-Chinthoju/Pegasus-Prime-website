import React from 'react';
import { ArrowRight, Users, Cpu, Code as CodeIcon, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import content from '../data/team-content.json';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-24 px-4 flex flex-col items-center text-center bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary rounded-full blur-[120px]"></div>
        </div>
        
        <div className="z-10 relative max-w-5xl mx-auto">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={logo} 
            alt="Pegasus Logo" 
            className="h-48 w-48 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]" 
          />
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white"
          >
            PEGASUS <span className="text-secondary">PRIME</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 mx-auto font-medium leading-relaxed"
          >
            Team <span className="text-secondary font-bold">97711V</span>: Redefining robotics through precision engineering and tactical innovation.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/robot" className="px-10 py-4 bg-secondary hover:bg-accent text-primary font-black rounded-full transition-all flex items-center justify-center group shadow-xl shadow-secondary/20 uppercase tracking-tighter italic">
              Deploy Robot <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/sponsors" className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-all border border-white/10 backdrop-blur-md uppercase tracking-tighter italic">
              Sponsorships
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 bg-white border-y border-slate-100 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="text-center group">
            <div className="text-5xl font-black text-primary mb-1 group-hover:text-accent transition-colors tracking-tighter italic">97711V</div>
            <div className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Designation</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-black text-primary mb-1 group-hover:text-secondary transition-colors tracking-tighter italic">10+</div>
            <div className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Victories</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-black text-primary mb-1 group-hover:text-accent transition-colors tracking-tighter italic">{content.members.length}</div>
            <div className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Operators</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-black text-primary mb-1 group-hover:text-secondary transition-colors tracking-tighter italic">GOLD</div>
            <div className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Standard</div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="max-w-7xl mx-auto py-32 px-4 w-full bg-slate-50">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 italic uppercase tracking-tighter">Command Center</h2>
          <div className="h-2 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {content.members.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-primary/5 group"
            >
              <div className="w-20 h-20 bg-primary rounded-3xl mb-8 flex items-center justify-center text-3xl font-black text-secondary group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-primary/20 italic">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-2xl font-black text-primary mb-1 italic uppercase tracking-tighter">{member.name}</h3>
              <p className="text-accent text-sm font-black mb-6 uppercase tracking-widest">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Competencies */}
      <section className="w-full py-32 px-4 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4 italic uppercase tracking-tighter">Core Systems</h2>
            <div className="h-2 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-secondary/50 transition-all group">
              <div className="p-5 bg-secondary rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                <Cpu className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter">Architecture</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Designing modular robot subsystems with aluminum alloys and custom poly-carbonate for unmatched structural integrity.
              </p>
            </div>
            
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-accent/50 transition-all group">
              <div className="p-5 bg-accent rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                <CodeIcon className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter">Cybernetics</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Implementing Nexus-tier motion control algorithms and sensor-fusion odometry for perfect field positioning.
              </p>
            </div>
            
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-white/50 transition-all group">
              <div className="p-5 bg-white rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter">Logistics</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Strategic match analysis and alliance coordination powered by data-driven scouting protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
