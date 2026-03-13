import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { name: 'TechCorp Solutions', tier: 'Platinum', description: 'Advanced electronics and sensor systems provider.' },
    { name: 'Industrial Metals Inc.', tier: 'Gold', description: 'Supplying precision-cut aluminum and steel components.' },
    { name: 'Future Engineering', tier: 'Gold', description: 'Supporting STEM education and robotics innovation.' },
    { name: 'Local Bank & Trust', tier: 'Silver', description: 'Proud community supporter of young engineers.' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-6 min-h-screen bg-primary">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Our Sponsors</h1>
        <p className="text-text-muted max-w-2xl mx-auto font-medium text-lg leading-relaxed">
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
            whileHover={{ y: -8 }}
            className="p-10 glass-panel glass-panel-hover rounded-[2.5rem] flex flex-col items-center text-center group"
          >
             <div className="w-full aspect-video bg-surface-light rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden border border-white/5">
                <span className="text-xl font-bold text-text-muted tracking-wide opacity-50">{sponsor.name}</span>
             </div>
             <div className="inline-block px-5 py-1.5 rounded-lg text-xs font-bold mb-6 bg-accent/10 text-accent uppercase tracking-widest border border-accent/20">
                {sponsor.tier}
             </div>
             <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{sponsor.name}</h3>
             <p className="text-text-muted text-sm font-medium mb-8 leading-relaxed flex-grow">{sponsor.description}</p>
             <button className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm font-semibold tracking-wide">
                Visit Website <ExternalLink size={14} />
             </button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
        <div className="relative z-10">
          <Heart className="text-accent mb-8 mx-auto" size={56} fill="currentColor" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Become a Sponsor</h2>
          <p className="text-text-muted max-w-2xl mx-auto mb-12 font-medium text-lg leading-relaxed">
            Invest in the next generation of engineers. Your sponsorship directly funds robot components, travel, and competition registration.
          </p>
          <button className="px-10 py-4 bg-accent hover:bg-accent-hover text-primary font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-accent/20 text-lg">
             Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
