import React from 'react';
import { Shield, Wrench, Code2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import teamData from '../data/team-content.json';

const roleIcons = {
  'Captain': <Shield size={16} className="text-accent" />,
  'Hardware': <Wrench size={16} className="text-accent" />,
  'Software': <Code2 size={16} className="text-blue" />,
};

const Team = () => {
  return (
    <div className="min-h-screen bg-primary py-32 px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="text-sm font-black text-accent uppercase tracking-[0.4em] mb-4 italic">
            The Team
          </div>
          <h1 className="section-title">
            Meet <span className="text-secondary">Everyone</span>
          </h1>
          <div className="section-accent"></div>
          <p className="text-slate-400 max-w-2xl mt-8 font-bold text-lg leading-relaxed italic">
            The people behind Pegasus Prime.
          </p>
        </motion.div>

        {/* Flat Grid - No Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.members.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="w-full"
            >
              <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-[2.5rem] text-center group border border-white/5 h-full relative overflow-hidden flex flex-col items-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.role === 'Software' ? 'from-blue/5' : 'from-accent/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <div className={`w-28 h-28 md:w-32 md:h-32 mx-auto rounded-3xl border-2 ${member.role === 'Software' ? 'border-blue/30 group-hover:border-blue' : 'border-accent/30 group-hover:border-accent'} flex items-center justify-center mb-6 shadow-xl group-hover:scale-105 transition-all duration-500 overflow-hidden relative`}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-xl border border-primary">
                    {roleIcons[member.role] || <Cpu size={16} className="text-accent" />}
                  </div>
                </div>
                
                <h2 className={`text-2xl font-black text-white uppercase italic tracking-tighter mb-2 ${member.role === 'Software' ? 'group-hover:text-blue' : 'group-hover:text-accent'} transition-colors`}>
                  {member.name}
                </h2>
                
                <div className={`inline-block px-4 py-1.5 ${member.role === 'Software' ? 'bg-blue/10 border-blue/20 text-blue' : 'bg-accent/10 border-accent/20 text-accent'} border rounded-full text-[10px] font-black uppercase tracking-widest shadow-inner mb-4`}>
                  {member.role}
                </div>
                
                <p className="text-slate-400 font-medium text-xs md:text-sm leading-relaxed px-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
