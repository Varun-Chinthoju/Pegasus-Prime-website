import React from 'react';
import { ArrowRight, Users, Cpu, Code as CodeIcon, Zap, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import content from '../data/team-content.json';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-primary min-h-screen" id="main-content">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Dynamic Background Glows */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>
        
        <div className="z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12 relative group"
          >
            <div className="absolute inset-0 bg-accent rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative p-8 bg-white rounded-[3rem] shadow-2xl border border-white/10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
              <img src={logo} alt="Pegasus Prime Logo" className="h-32 w-32 object-contain mix-blend-multiply" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-8 text-white uppercase italic leading-none"
          >
            PEGASUS <span className="text-accent drop-shadow-[0_0_20px_rgba(14,165,233,0.3)]">PRIME</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl text-text-muted max-w-3xl mb-16 mx-auto font-bold leading-tight"
          >
            Engineering the future of autonomous systems with <span className="text-white italic">precision</span> and <span className="text-white italic">innovation</span>.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link 
              to="/robot" 
              className="px-12 py-5 bg-accent hover:bg-white text-primary font-black rounded-2xl transition-all flex items-center justify-center group shadow-2xl shadow-accent/20 uppercase tracking-widest italic text-lg active:scale-95"
            >
              Our Robot <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/sponsors" 
              className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl transition-all border-2 border-white/10 backdrop-blur-md uppercase tracking-widest italic text-lg active:scale-95"
            >
              Partner Hub
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-24 bg-surface border-y border-white/5 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
          {[
            { label: 'Identifier', value: '97711V', icon: <Target className="text-accent mb-4 mx-auto" size={24} /> },
            { label: 'Excellence Awards', value: '10+', icon: <Award className="text-accent mb-4 mx-auto" size={24} /> },
            { label: 'Core Engineers', value: content.members.length, icon: <Users className="text-accent mb-4 mx-auto" size={24} /> },
            { label: 'Build Quality', value: 'PREMIUM', icon: <Zap className="text-accent mb-4 mx-auto" size={24} /> }
          ].map((stat, i) => (
            <div key={i} className="text-center group border-white/5 last:border-r-0 md:border-r">
              {stat.icon}
              <div className="text-5xl font-black text-white mb-3 group-hover:text-accent group-hover:scale-110 transition-all tracking-tighter italic">{stat.value}</div>
              <div className="text-text-muted text-[11px] font-black uppercase tracking-[0.4em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="max-w-7xl mx-auto py-40 px-6 w-full">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="section-title">Our <span className="text-accent">Team</span></h2>
          <div className="section-accent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {content.members.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15, borderColor: 'rgba(14, 165, 233, 0.3)' }}
              className="p-12 glass-panel rounded-[3.5rem] transition-all duration-500 flex flex-col h-full group"
            >
              <div className="w-20 h-20 bg-surface-light rounded-3xl mb-10 flex items-center justify-center text-3xl font-black text-accent group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/5 italic">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors italic uppercase">{member.name}</h3>
              <p className="text-text-muted text-xs font-black mb-10 uppercase tracking-[0.25em]">{member.role}</p>
              <p className="text-slate-400 text-base leading-relaxed font-medium flex-grow italic">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Specialties */}
      <section className="w-full py-40 px-6 bg-surface/50 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="section-title">System <span className="text-accent">Focus</span></h2>
            <div className="section-accent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Cpu />, title: 'Mechanical Architecture', desc: 'Crafting robust robot subsystems using aerospace-grade aluminum and iterative CAD modeling.' },
              { icon: <CodeIcon />, title: 'Control Cybernetics', desc: 'Developing sophisticated autonomous algorithms and real-time sensor-fusion for absolute precision.' },
              { icon: <Users />, title: 'Alliance Strategy', desc: 'Leveraging data-driven scouting protocols and tactical analysis to secure match dominance.' }
            ].map((system, i) => (
              <div key={i} className="p-12 glass-panel rounded-[3rem] group hover:border-accent/30 transition-all duration-500">
                <div className="p-6 bg-primary rounded-2xl w-fit mb-10 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-2xl border border-white/5">
                  {React.cloneElement(system.icon, { size: 36 })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white uppercase italic tracking-tight">{system.title}</h3>
                <p className="text-text-muted leading-relaxed font-medium text-base">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
