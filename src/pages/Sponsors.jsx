import React from 'react';
import { ExternalLink, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { name: 'TechCorp Solutions', tier: 'Platinum', description: 'Advanced electronics and sensor systems provider.', color: 'text-secondary' },
    { name: 'Industrial Metals Inc.', tier: 'Gold', description: 'Supplying precision-cut aluminum and steel components.', color: 'text-secondary' },
    { name: 'Future Engineering', tier: 'Gold', description: 'Supporting STEM education and robotics innovation.', color: 'text-secondary' },
    { name: 'Local Bank & Trust', tier: 'Silver', description: 'Proud community supporter of young engineers.', color: 'text-slate-400' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-32 px-6 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase italic">Our <span className="text-secondary">Sponsors</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
          The organizations that empower our innovation and make our mission possible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
        {sponsors.map((sponsor, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-10 bg-surface/50 backdrop-blur-sm rounded-[3rem] border border-white/5 flex flex-col items-center text-center group"
          >
             <div className="w-full aspect-video bg-primary rounded-3xl mb-10 flex items-center justify-center relative overflow-hidden">
                <div className="bg-white p-4 rounded-2xl shadow-xl">
                   <span className="text-2xl font-black text-primary italic tracking-tighter uppercase opacity-30">LOGO</span>
                </div>
                <Award className={`absolute top-6 right-6 ${sponsor.color}`} size={28} />
             </div>
             <div className="inline-block px-6 py-2 rounded-full text-xs font-black mb-6 bg-primary text-secondary uppercase tracking-[0.2em] italic border border-secondary/20">
                {sponsor.tier}
             </div>
             <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{sponsor.name}</h3>
             <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">{sponsor.description}</p>
             <button className="flex items-center gap-2 text-white/60 hover:text-secondary transition-colors text-sm font-bold uppercase italic tracking-widest border-b border-white/10 hover:border-secondary pb-1">
                Visit Website <ExternalLink size={14} />
             </button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-secondary rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl"
      >
        <div className="relative z-10">
          <Heart className="text-primary mb-8 mx-auto" size={64} fill="currentColor" />
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-primary tracking-tight uppercase italic">Support the Team</h2>
          <p className="text-primary/70 max-w-2xl mx-auto mb-12 font-bold text-lg leading-relaxed">
            Invest in the next generation of engineers. Your sponsorship directly funds robot components, travel, and registration.
          </p>
          <button className="px-12 py-5 bg-primary text-white font-black rounded-2xl hover:bg-white hover:text-primary transition-all shadow-2xl uppercase tracking-widest italic text-lg">
             Become a Partner
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
