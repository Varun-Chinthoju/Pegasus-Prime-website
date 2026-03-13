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
      <section className="w-full py-20 px-4 flex flex-col items-center text-center bg-primary relative overflow-hidden">
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
            className="h-40 w-48 mx-auto mb-6 drop-shadow-[0_0_30px_rgba(14,165,233,0.4)] mix-blend-screen" 
          />
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase italic"
          >
            PEGASUS <span className="text-secondary">PRIME</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 mx-auto font-bold leading-tight"
          >
            Team <span className="text-secondary">97711V</span>: Redefining robotics through precision engineering.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/robot" className="px-8 py-3 bg-secondary hover:bg-white text-primary font-black rounded-lg transition-all flex items-center justify-center group shadow-lg shadow-secondary/20 uppercase tracking-tighter italic border-2 border-secondary">
              Deploy Robot <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/sponsors" className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-black rounded-lg transition-all border-2 border-white/20 uppercase tracking-tighter italic backdrop-blur-sm">
              Sponsorships
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-10 bg-slate-50 border-y border-slate-200 relative z-20 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Designation', value: '97711V' },
            { label: 'Victories', value: '10+' },
            { label: 'Operators', value: content.members.length },
            { label: 'Standard', value: 'GOLD' }
          ].map((stat, i) => (
            <div key={i} className="text-center group border-r last:border-r-0 border-slate-200">
              <div className="text-4xl font-black text-primary mb-0.5 group-hover:text-accent transition-colors tracking-tighter italic">{stat.value}</div>
              <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section - FIXED "LONELY APPETIZERS" */}
      <section className="max-w-6xl mx-auto py-20 px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-2 italic uppercase tracking-tighter">Command Center</h2>
          <div className="h-1.5 w-16 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.members.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-3xl border border-slate-200 shadow-lg shadow-primary/5 group transition-all hover:border-secondary/50"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl mb-6 flex items-center justify-center text-xl font-black text-secondary group-hover:rotate-6 transition-transform duration-300 shadow-md italic">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-black text-primary mb-0.5 italic uppercase tracking-tighter">{member.name}</h3>
              <p className="text-accent text-[10px] font-black mb-4 uppercase tracking-widest">{member.role}</p>
              <p className="text-slate-500 text-xs font-bold leading-normal">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Competencies */}
      <section className="w-full py-24 px-4 bg-primary text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-2 italic uppercase tracking-tighter">Core Systems</h2>
            <div className="h-1.5 w-16 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Cpu className="text-primary" size={24} />, title: 'Architecture', color: 'bg-secondary', desc: 'Designing modular robot subsystems with aluminum alloys and custom poly-carbonate.' },
              { icon: <CodeIcon className="text-primary" size={24} />, title: 'Cybernetics', color: 'bg-accent', desc: 'Implementing Nexus-tier motion control algorithms and sensor-fusion odometry.' },
              { icon: <Users className="text-primary" size={24} />, title: 'Logistics', color: 'bg-white', desc: 'Strategic match analysis and alliance coordination powered by data protocols.' }
            ].map((system, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-secondary/30 transition-all group">
                <div className={`p-4 ${system.color} rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {system.icon}
                </div>
                <h3 className="text-xl font-black mb-3 italic uppercase tracking-tighter">{system.title}</h3>
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
