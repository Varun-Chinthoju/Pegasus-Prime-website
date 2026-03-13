import React from 'react';
import { ArrowRight, Users, Cpu, Code as CodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import content from '../data/team-content.json';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-primary min-h-screen">
      {/* Hero Section - NO MORE MUSTARD SPILLS */}
      <section className="w-full py-24 md:py-32 px-6 flex flex-col items-center text-center relative overflow-hidden">
        {/* Subtle Technical Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
               backgroundSize: '50px 50px' 
             }}>
        </div>
        
        <div className="z-10 relative max-w-5xl mx-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <div className="inline-block bg-white p-4 rounded-[2rem] shadow-[0_0_50px_rgba(56,189,248,0.2)] border-2 border-white/10">
              <img src={logo} alt="Team Logo" className="h-32 w-32 object-contain" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-6 text-white uppercase italic leading-none"
          >
            PEGASUS <span className="text-secondary">PRIME</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl text-slate-300 max-w-3xl mb-12 mx-auto font-bold tracking-tight leading-snug"
          >
            Engineering <span className="text-secondary italic">precision</span>. Redefining robotics for the next generation of innovators.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/robot" className="px-12 py-5 bg-secondary hover:bg-white text-primary font-black rounded-2xl transition-all flex items-center justify-center group shadow-2xl shadow-secondary/20 uppercase tracking-widest italic text-lg">
              View Robot <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/sponsors" className="px-12 py-5 bg-transparent hover:bg-white/5 text-white font-black rounded-2xl transition-all border-4 border-white/10 backdrop-blur-md uppercase tracking-widest italic text-lg">
              Partnerships
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - INTEGRATED DARK THEME */}
      <section className="w-full py-20 bg-surface border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Designation', value: '97711V' },
            { label: 'Victories', value: '10+' },
            { label: 'Engineers', value: content.members.length },
            { label: 'Standard', value: 'PREMIUM' }
          ].map((stat, i) => (
            <div key={i} className="text-center group px-4">
              <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:text-secondary transition-colors tracking-tighter italic">{stat.value}</div>
              <div className="text-slate-500 text-[11px] font-black uppercase tracking-[0.4em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team Section - REFINED CARDS */}
      <section className="max-w-7xl mx-auto py-32 px-6 w-full">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="section-title">Our <span className="text-secondary">Team</span></h2>
          <div className="section-accent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {content.members.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -12 }}
              className="p-12 bg-surface rounded-[3rem] border border-white/5 transition-all duration-500 flex flex-col h-full shadow-2xl hover:border-secondary/20 group"
            >
              <div className="w-20 h-20 bg-primary rounded-[1.5rem] mb-10 flex items-center justify-center text-3xl font-black text-secondary group-hover:rotate-12 transition-transform duration-500 shadow-xl border border-white/5 italic">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-3xl font-black text-white mb-2 tracking-tighter italic uppercase">{member.name}</h3>
              <p className="text-secondary text-xs font-black mb-8 uppercase tracking-[0.25em]">{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed font-bold">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Specialties */}
      <section className="w-full py-32 px-6 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="section-title">Core <span className="text-accent">Systems</span></h2>
            <div className="section-accent bg-accent shadow-[0_0_15px_rgba(56,189,248,0.3)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Cpu />, title: 'Fabrication', color: 'bg-secondary', desc: 'Crafting robust robot systems using high-grade aluminum alloys and custom poly-carbonate.' },
              { icon: <CodeIcon />, title: 'Intelligence', color: 'bg-accent', desc: 'Implementing advanced motion control algorithms and sensor-fusion odometry.' },
              { icon: <Users />, title: 'Coordination', color: 'bg-white', desc: 'Strategic match analysis and alliance synergy powered by data-driven scouting protocols.' }
            ].map((system, i) => (
              <div key={i} className="p-12 bg-primary/50 rounded-[3.5rem] border border-white/5 hover:border-secondary/20 transition-all duration-500 group shadow-2xl">
                <div className={`p-6 ${system.color} rounded-2xl w-fit mb-10 group-hover:scale-110 transition-transform shadow-2xl text-primary`}>
                  {React.cloneElement(system.icon, { size: 36 })}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase italic tracking-tighter">{system.title}</h3>
                <p className="text-slate-400 text-sm font-bold leading-relaxed">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
