import React from 'react';
import { ExternalLink, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { name: 'TechCorp Solutions', tier: 'Platinum', description: 'Advanced electronics and sensor systems provider.', color: 'text-secondary' },
    { name: 'Industrial Metals Inc.', tier: 'Gold', description: 'Supplying precision-cut aluminum and steel components.', color: 'text-secondary' },
    { name: 'Future Engineering', tier: 'Gold', description: 'Supporting STEM education and robotics innovation.', color: 'text-secondary' },
    { name: 'Local Bank & Trust', tier: 'Silver', description: 'Proud community supporter of young engineers.', color: 'text-secondary' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-32 px-8 min-h-screen bg-primary">
      <div className="flex flex-col items-center text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Strategic <span className="text-secondary">Partners</span>
        </motion.h1>
        <div className="section-accent"></div>
        <p className="text-slate-400 max-w-2xl mt-8 font-bold text-lg leading-relaxed italic">
          The organizations that fuel our mission and drive competitive excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
        {sponsors.map((sponsor, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -12 }}
            className="p-12 bg-surface rounded-[3rem] border border-white/5 flex flex-col items-center text-center group shadow-2xl hover:border-secondary/20 transition-all duration-500"
          >
             <div className="w-full aspect-video bg-primary rounded-[2.5rem] mb-10 flex items-center justify-center relative overflow-hidden border border-white/5">
                <div className="bg-white p-6 rounded-3xl shadow-2xl transition-transform group-hover:scale-110">
                   <span className="text-3xl font-black text-primary italic tracking-tighter uppercase opacity-20">LOGO</span>
                </div>
                <Award className={`absolute top-6 right-6 ${sponsor.color} drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]`} size={32} />
             </div>
             <div className="inline-block px-8 py-2.5 rounded-full text-xs font-black mb-8 bg-primary text-secondary uppercase tracking-[0.25em] italic border border-secondary/20 shadow-xl">
                {sponsor.tier}
             </div>
             <h3 className="text-3xl font-black text-white mb-4 tracking-tighter italic uppercase">{sponsor.name}</h3>
             <p className="text-slate-400 text-sm font-bold mb-10 leading-relaxed italic">{sponsor.description}</p>
             <button className="flex items-center gap-3 text-secondary hover:text-white transition-all text-sm font-black uppercase italic tracking-widest border-b-2 border-secondary/20 hover:border-white pb-2">
                Secure Link <ExternalLink size={16} />
             </button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-secondary rounded-[4rem] p-20 md:p-32 text-center relative overflow-hidden shadow-2xl border-b-[1rem] border-primary"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '60px 64px' }}></div>
        
        <div className="relative z-10">
          <Heart className="text-primary mb-10 mx-auto drop-shadow-xl" size={80} fill="currentColor" />
          <h2 className="text-5xl md:text-7xl font-black mb-10 text-primary tracking-tighter uppercase italic">Join the Elite</h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-16 font-black text-xl leading-relaxed italic">
            Empower the next generation of engineers. Your partnership secures the future of Pegasus Prime.
          </p>
          <button className="px-16 py-6 bg-primary text-white font-black rounded-2xl hover:bg-white hover:text-primary transition-all shadow-2xl uppercase tracking-[0.2em] italic text-xl hover:scale-105 active:scale-95">
             Partner Command
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
