import React from 'react';
import { ExternalLink, Heart, Award, Cpu, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { 
      name: 'TechCorp Solutions', 
      tier: 'Platinum', 
      description: 'Global leader in advanced sensor technology and integrated electronics.',
      icon: <Cpu className="text-secondary" size={40} />,
      color: 'from-secondary/20 to-transparent'
    },
    { 
      name: 'Industrial Metals Inc.', 
      tier: 'Gold', 
      description: 'Supplying precision-cut aluminum and specialized alloys for competition chassis.',
      icon: <Zap className="text-accent" size={40} />,
      color: 'from-accent/20 to-transparent'
    },
    { 
      name: 'Future Engineering', 
      tier: 'Gold', 
      description: 'Dedicated to fostering the next generation of STEM innovators and designers.',
      icon: <Target className="text-blue-400" size={40} />,
      color: 'from-blue-400/20 to-transparent'
    },
    { 
      name: 'Community Trust', 
      tier: 'Silver', 
      description: 'Empowering local high school robotics teams through community focused grants.',
      icon: <Award className="text-slate-400" size={40} />,
      color: 'from-slate-400/20 to-transparent'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-8 min-h-screen bg-primary">
      <div className="flex flex-col items-center text-center mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Our <span className="text-secondary">Sponsors</span>
        </motion.h1>
        <div className="section-accent"></div>
        <p className="text-slate-400 max-w-2xl mt-8 font-bold text-lg leading-relaxed italic">
          Innovation is fueled by partnership. We are proud to collaborate with organizations that share our commitment to engineering excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-40">
        {sponsors.map((sponsor, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -15 }}
            className="glass-panel p-12 rounded-[3.5rem] flex flex-col items-center text-center group transition-all duration-500 hover:border-secondary/20 shadow-2xl"
          >
             <div className={`w-full aspect-video bg-gradient-to-br ${sponsor.color} rounded-[2.5rem] mb-10 flex items-center justify-center relative overflow-hidden border border-white/5 group-hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] transition-all`}>
                <div className="p-8 bg-surface-light/50 backdrop-blur-md rounded-3xl border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                   {sponsor.icon}
                </div>
                <Award className={`absolute top-6 right-6 ${sponsor.tier === 'Platinum' ? 'text-secondary' : sponsor.tier === 'Gold' ? 'text-accent' : 'text-slate-400'} opacity-20 group-hover:opacity-100 transition-opacity`} size={28} />
             </div>
             
             <div className="px-6 py-2 rounded-full text-[10px] font-black mb-8 bg-primary border border-white/10 text-text-muted uppercase tracking-[0.3em] italic">
                {sponsor.tier} Partner
             </div>
             
             <h3 className="text-3xl font-black text-white mb-4 tracking-tighter italic uppercase">{sponsor.name}</h3>
             <p className="text-slate-400 text-sm font-bold mb-12 leading-relaxed italic flex-grow">{sponsor.description}</p>
             
             <button className="flex items-center gap-3 text-white hover:text-secondary transition-all text-sm font-black uppercase italic tracking-widest group/btn border-b-2 border-white/5 hover:border-secondary pb-2">
                Corporate Profile <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
             </button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-[4rem] p-20 md:p-32 text-center relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-secondary/10"
      >
        <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mb-12 border border-secondary/20 shadow-2xl">
            <Heart className="text-secondary animate-pulse" size={48} fill="currentColor" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter uppercase italic">Fuel the Future</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 font-bold text-xl leading-relaxed italic">
            Support Team 97711V. Your partnership empowers our mission to compete at the highest level and mentor the engineers of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
            <button className="px-16 py-6 bg-secondary hover:bg-white text-primary font-black rounded-2xl transition-all shadow-2xl hover:shadow-secondary/20 uppercase tracking-widest italic text-xl hover:scale-105 active:scale-95">
               Support Our Mission
            </button>
            <button className="px-16 py-6 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl transition-all border-4 border-white/10 backdrop-blur-md uppercase tracking-widest italic text-xl hover:scale-105 active:scale-95">
               View Packet
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
