import React from 'react';
import { ExternalLink, Heart, Award, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { 
      name: 'TechCorp Solutions', 
      tier: 'Platinum', 
      description: 'Global leader in advanced sensor technology and integrated electronics.',
      icon: <Cpu className="text-accent" size={40} />
    },
    { 
      name: 'Industrial Metals Inc.', 
      tier: 'Gold', 
      description: 'Precision-cut aluminum and specialized alloys for competition-grade chassis.',
      icon: <Cpu className="text-secondary" size={40} />
    },
    { 
      name: 'Future Engineering', 
      tier: 'Gold', 
      description: 'Dedicated to fostering the next generation of STEM innovators and designers.',
      icon: <Cpu className="text-secondary" size={40} />
    },
    { 
      name: 'Local Bank & Trust', 
      tier: 'Silver', 
      description: 'Empowering local high school robotics teams through community grants.',
      icon: <Cpu className="text-slate-400" size={40} />
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-6 min-h-screen bg-primary" id="main-content">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase italic">
          Strategic <span className="text-accent">Partners</span>
        </h1>
        <p className="text-text-muted max-w-2xl mx-auto font-medium text-lg leading-relaxed">
          Our innovation is powered by organizations that believe in the future of engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
        {sponsors.map((sponsor, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, borderColor: 'rgba(14, 165, 233, 0.3)' }}
            className="p-10 glass-panel rounded-[2.5rem] flex flex-col items-center text-center group transition-all duration-500"
          >
             <div className="w-full aspect-video bg-surface-light rounded-3xl mb-10 flex items-center justify-center relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6 bg-primary/50 rounded-2xl border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                   {sponsor.icon}
                </div>
                <Award className="absolute top-6 right-6 text-white/10 group-hover:text-accent transition-colors" size={24} />
             </div>
             
             <div className="inline-block px-5 py-1.5 rounded-lg text-[10px] font-black mb-6 bg-accent/10 text-accent uppercase tracking-[0.2em] border border-accent/20 italic">
                {sponsor.tier} Partner
             </div>
             
             <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
               {sponsor.name}
             </h3>
             
             <p className="text-text-muted text-sm font-medium mb-10 leading-relaxed flex-grow">
               {sponsor.description}
             </p>
             
             <button className="flex items-center gap-2 text-white/60 hover:text-white transition-all text-sm font-bold uppercase italic tracking-widest border-b-2 border-white/5 hover:border-accent pb-2">
                Corporate Profile <ExternalLink size={14} />
             </button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-accent/20">
            <Heart className="text-accent" size={40} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight uppercase italic">Power the Mission</h2>
          <p className="text-text-muted max-w-2xl mx-auto mb-12 font-medium text-lg leading-relaxed">
            Support Team 97711V. Your contribution directly impacts our ability to compete at the highest level and mentor future engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-accent hover:bg-white text-primary font-black rounded-2xl transition-all shadow-xl hover:shadow-accent/20 uppercase tracking-widest italic text-lg active:scale-95">
               Contact Support
            </button>
            <button className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl transition-all border border-white/10 backdrop-blur-md uppercase tracking-widest italic text-lg active:scale-95">
               Download Packet
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
