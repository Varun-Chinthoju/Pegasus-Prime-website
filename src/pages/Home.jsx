import React from 'react';
import { ArrowRight, Users, Cpu, Code as CodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import content from '../data/team-content.json';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Subtle Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 p-6 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            <img src={logo} alt="Pegasus Prime Logo" className="h-32 w-32 object-contain mix-blend-screen drop-shadow-[0_0_20px_rgba(14,165,233,0.3)]" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-white leading-none"
          >
            PEGASUS PRIME
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 mx-auto font-medium"
          >
            High-performance engineering, intelligent software, and tactical design in the VEX Robotics Competition.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/robot" className="px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-bold rounded-xl transition-all flex items-center justify-center group shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]">
              View Our Robot <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/sponsors" className="px-8 py-4 bg-surface-light/50 hover:bg-surface-light text-white font-medium rounded-xl transition-all border border-white/10 backdrop-blur-md">
              Our Sponsors
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-surface/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {[
            { label: 'Team ID', value: '97711V' },
            { label: 'Awards Won', value: '10+' },
            { label: 'Members', value: content.members.length },
            { label: 'Division', value: 'High School' }
          ].map((stat, i) => (
            <div key={i} className={`text-center py-4 md:py-0 ${i > 1 ? 'border-t md:border-t-0 border-white/5' : ''}`}>
              <div className="text-4xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
              <div className="text-text-muted text-xs font-semibold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="max-w-7xl mx-auto py-32 px-6 w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Team</h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.members.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -4 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-surface-light rounded-2xl mb-6 flex items-center justify-center text-xl font-bold text-white border border-white/10">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-accent text-xs font-semibold mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-text-muted text-sm leading-relaxed flex-grow">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Specialties */}
      <section className="w-full py-32 px-6 bg-surface/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Focus</h2>
            <div className="h-1 w-16 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Cpu />, title: 'Mechanical Design', desc: 'Crafting robust and efficient robot systems using high-grade components and custom parts.' },
              { icon: <CodeIcon />, title: 'Software Engineering', desc: 'Developing sophisticated control algorithms and autonomous routines for precision performance.' },
              { icon: <Users />, title: 'Strategic Analysis', desc: 'Applying data-driven scouting and match strategy to secure alliance dominance.' }
            ].map((system, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl group hover:border-white/20 transition-all duration-300">
                <div className="p-4 bg-surface-light rounded-2xl w-fit mb-6 text-accent group-hover:bg-accent group-hover:text-primary transition-colors border border-white/5">
                  {React.cloneElement(system.icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{system.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
