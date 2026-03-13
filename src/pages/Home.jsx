import React from 'react';
import { ArrowRight, Users, Cpu, Code as CodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import content from '../data/team-content.json';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="z-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block"
          >
            <div className="bg-white p-3 rounded-3xl shadow-2xl shadow-accent/20 border-4 border-white/10">
              <img src={logo} alt="Team Logo" className="h-32 w-32 object-contain" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-8xl font-black tracking-tight mb-6 text-white uppercase italic"
          >
            PEGASUS <span className="text-secondary">PRIME</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 mx-auto font-medium"
          >
            High-performance engineering and innovation in the VEX Robotics Competition.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/robot" className="px-10 py-4 bg-secondary hover:bg-white text-primary font-bold rounded-2xl transition-all flex items-center justify-center group shadow-xl shadow-secondary/10">
              View Our Robot <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/sponsors" className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10 backdrop-blur-md">
              Become a Sponsor
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - NO LONGER LOST AT SEA */}
      <section className="w-full py-16 bg-surface border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Team ID', value: '97711V' },
            { label: 'Awards Won', value: '10+' },
            { label: 'Team Members', value: content.members.length },
            { label: 'Competition level', value: 'High School' }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-secondary transition-colors tracking-tight italic">{stat.value}</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section - CONSISTENCY RESTORED */}
      <section className="max-w-7xl mx-auto py-32 px-6 w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase italic">Our Team</h2>
          <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.members.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8, borderColor: 'rgba(212, 175, 55, 0.3)' }}
              className="p-10 bg-surface/50 backdrop-blur-sm rounded-[2rem] border border-white/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-2xl mb-8 flex items-center justify-center text-2xl font-bold text-accent italic">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{member.name}</h3>
              <p className="text-secondary text-sm font-bold mb-6 uppercase tracking-widest">{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed font-medium flex-grow">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Specialties */}
      <section className="w-full py-32 px-6 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase italic">Project Focus</h2>
            <div className="h-1.5 w-20 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Cpu className="text-primary" />, title: 'Mechanical Design', color: 'bg-secondary', desc: 'Crafting robust and efficient robot systems using high-grade components and custom parts.' },
              { icon: <CodeIcon className="text-primary" />, title: 'Software Engineering', color: 'bg-accent', desc: 'Developing sophisticated control algorithms and autonomous routines for precision performance.' },
              { icon: <Users className="text-primary" />, title: 'Strategic Analysis', color: 'bg-white', desc: 'Applying data-driven scouting and match strategy to secure alliance dominance.' }
            ].map((system, i) => (
              <div key={i} className="p-10 bg-primary/40 rounded-[2.5rem] border border-white/5 hover:border-secondary/20 transition-all group">
                <div className={`p-5 ${system.color} rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform shadow-2xl`}>
                  {React.cloneElement(system.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white uppercase italic tracking-tight">{system.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
