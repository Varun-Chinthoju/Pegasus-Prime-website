import React from 'react';
import { ExternalLink, Heart, Award, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { name: 'TechCorp Solutions', tier: 'Platinum', description: 'Advanced electronics and sensor systems provider.', color: 'text-secondary' },
    { name: 'Industrial Metals Inc.', tier: 'Gold', description: 'Supplying precision-cut aluminum and steel components.', color: 'text-accent' },
    { name: 'Future Engineering', tier: 'Gold', description: 'Supporting STEM education and robotics innovation.', color: 'text-accent' },
    { name: 'Local Bank & Trust', tier: 'Silver', description: 'Proud community supporter of young engineers.', color: 'text-slate-400' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 bg-slate-50 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 italic uppercase tracking-tighter">Strategic <span className="text-secondary">Partners</span></h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed italic">
          We are incredibly grateful for the support of these organizations. Their contributions make our innovation possible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
        {sponsors.map((sponsor, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-primary/5 flex flex-col items-center text-center group"
          >
             <div className="w-full aspect-video bg-primary rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20"></div>
                <span className="text-3xl font-black text-white italic tracking-tighter opacity-20 uppercase group-hover:opacity-40 transition-opacity">Logo_Ref</span>
                <Award className={`absolute top-4 right-4 ${sponsor.color}`} size={24} />
             </div>
             <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-black mb-6 bg-primary text-white uppercase tracking-[0.2em] italic border-b-2 border-secondary`}>
                {sponsor.tier}
             </div>
             <h3 className="text-2xl font-black text-primary mb-3 italic uppercase tracking-tighter">{sponsor.name}</h3>
             <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed">{sponsor.description}</p>
             <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-black uppercase italic tracking-tighter border-b-2 border-primary/10 hover:border-secondary">
                Secure Link <ExternalLink size={14} />
             </button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border-t-[1rem] border-secondary"
      >
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'linear-gradient(45deg, #fbbf24 25%, transparent 25%, transparent 50%, #fbbf24 50%, #fbbf24 75%, transparent 75%, transparent)',
               backgroundSize: '100px 100px' 
             }}>
        </div>
        <div className="relative z-10">
          <Heart className="text-secondary mb-10 mx-auto animate-bounce" size={64} />
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter text-white">Join the Mission</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12 font-medium text-lg leading-relaxed">
            Support the next generation of engineers and innovators. Your sponsorship directly funds robot components, competition registration fees, and tactical logistics.
          </p>
          <button className="px-12 py-5 bg-secondary text-primary font-black rounded-2xl hover:bg-white transition-all shadow-2xl uppercase tracking-tighter italic text-lg hover:scale-105 active:scale-95">
             Request Sponsorship Intel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
