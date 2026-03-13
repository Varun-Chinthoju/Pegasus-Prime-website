import React from 'react';
import { Shield, Wrench, Code2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

import varunImg from '../assets/gallery/varun.png';
import jahaanImg from '../assets/gallery/jahaan.png';
import avyuktImg from '../assets/gallery/avyukt.png';
import yuchenImg from '../assets/gallery/yuchen.png';

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
            The four people behind Pegasus Prime.
          </p>
        </motion.div>

        {/* Hierarchy Tree */}
        <div className="flex flex-col items-center gap-16 relative">
          
          {/* Connection Line (Vertical) */}
          <div className="absolute top-[200px] bottom-[200px] w-1 bg-gradient-to-b from-accent/40 via-secondary/40 to-transparent -z-10 rounded-full hidden md:block"></div>

          {/* Top Level: Captain */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-md relative z-10"
          >
            <div className="glass-panel glass-panel-hover p-8 md:p-10 rounded-[3rem] text-center group border border-accent/20 shadow-[0_0_50px_rgba(14,165,233,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-3xl border-2 border-accent/30 flex items-center justify-center mb-6 shadow-2xl group-hover:scale-105 group-hover:border-accent transition-all duration-500 overflow-hidden relative">
                <img src={varunImg} alt="Varun" className="w-full h-full object-cover" />
                <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-xl">
                  <Shield size={20} className="text-accent" />
                </div>
              </div>
              
              <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-accent transition-colors">Varun</h2>
              <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-black uppercase tracking-widest shadow-inner mb-4">
                Captain
              </div>
              <p className="text-slate-400 font-medium text-sm leading-relaxed px-2">
                Da goat
              </p>
            </div>
          </motion.div>

          {/* Horizontal Connection Line */}
          <div className="hidden md:block absolute top-[52%] left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent -z-10 rounded-full"></div>

          {/* Second Level */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full z-10">
            
            {/* Member: Jahaan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-[2.5rem] text-center group border-white/5 h-full relative">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-2xl border-2 border-secondary/30 flex items-center justify-center mb-5 shadow-xl group-hover:scale-105 group-hover:border-secondary transition-all duration-500 overflow-hidden relative">
                   <img src={jahaanImg} alt="Jahaan" className="w-full h-full object-cover" />
                   <div className="absolute -bottom-2 -right-2 bg-primary p-1.5 rounded-lg border border-primary">
                      <Wrench size={16} className="text-secondary" />
                   </div>
                </div>
                
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-secondary transition-colors">Jahaan</h3>
                <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-[10px] font-black uppercase tracking-widest mb-4">
                  Hardware
                </div>
                <p className="text-slate-400 font-medium text-xs md:text-sm leading-relaxed">
                  does building idk what else.
                </p>
              </div>
            </motion.div>

            {/* Member: Avyukt */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-[2.5rem] text-center group border-white/5 h-full relative">
                <div className="absolute top-0 left-1/2 -mt-4 -ml-px w-[2px] h-8 bg-secondary/40 md:hidden"></div>
                
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-2xl border-2 border-secondary/30 flex items-center justify-center mb-5 shadow-xl group-hover:scale-105 group-hover:border-secondary transition-all duration-500 overflow-hidden relative">
                   <img src={avyuktImg} alt="Avyukt" className="w-full h-full object-cover" />
                   <div className="absolute -bottom-2 -right-2 bg-primary p-1.5 rounded-lg border border-primary">
                      <Cpu size={16} className="text-secondary" />
                   </div>
                </div>

                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-secondary transition-colors">Avyukt</h3>
                <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-[10px] font-black uppercase tracking-widest mb-4">
                  Hardware
                </div>
                <p className="text-slate-400 font-medium text-xs md:text-sm leading-relaxed text-center text-4xl mt-2">
                  💀
                </p>
              </div>
            </motion.div>

            {/* Member: Yuchen */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-[2.5rem] text-center group border-white/5 h-full relative">
                <div className="absolute top-0 left-1/2 -mt-4 -ml-px w-[2px] h-8 bg-emerald-500/40 md:hidden"></div>

                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-2xl border-2 border-emerald-500/30 flex items-center justify-center mb-5 shadow-xl group-hover:scale-105 group-hover:border-emerald-500 transition-all duration-500 overflow-hidden relative">
                   <img src={yuchenImg} alt="Yuchen" className="w-full h-full object-cover" />
                   <div className="absolute -bottom-2 -right-2 bg-primary p-1.5 rounded-lg border border-primary">
                      <Code2 size={16} className="text-emerald-500" />
                   </div>
                </div>

                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-emerald-500 transition-colors">Yuchen</h3>
                <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-4">
                  Software
                </div>
                <p className="text-slate-400 font-medium text-xs md:text-sm leading-relaxed">
                  pro pokerogue player
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
