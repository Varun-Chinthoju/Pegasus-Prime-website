import React from 'react';
import { Layers, Settings, Maximize, Cpu, Zap, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const Build = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* VEX Build Plate Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 12px 12px, #020617 2px, transparent 0)',
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 flex items-center justify-center gap-4 text-primary italic uppercase tracking-tighter">
            <span className="p-3 bg-primary rounded-2xl text-secondary shadow-lg shadow-primary/20"><PenTool size={32} /></span>
            Structural <span className="text-secondary">Engineering</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto font-black text-[10px] uppercase tracking-[0.25em] leading-relaxed">
            From initial CAD to competition-ready machine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-[16/10] bg-primary rounded-[2.5rem] shadow-2xl border-4 border-slate-100 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ 
                     backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                     backgroundSize: '20px 20px' 
                   }}>
              </div>
              <Maximize className="text-secondary group-hover:scale-110 transition-transform duration-500" size={48} />
              <div className="absolute bottom-6 left-6 bg-secondary text-primary px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest italic">
                Fusion_360_Project.cad
              </div>
            </div>
            
            <h2 className="text-2xl font-black text-primary italic uppercase tracking-tighter">Iterative Development</h2>
            <p className="text-slate-600 font-bold text-xs leading-relaxed">
              We utilize Fusion 360 for our CAD designs, allowing us to simulate movements and verify tolerances before fabrication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: <Layers size={20} className="text-secondary" />, title: 'Chassis', desc: '6-motor drivetrain with 3.25" wheels.' },
              { icon: <Settings size={20} className="text-accent" />, title: 'Scoring', desc: 'Low-friction 4-bar lift mechanism.' },
              { icon: <Cpu size={20} className="text-primary" />, title: 'Weight', desc: 'Optimized aluminum C-channels.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-md flex items-start gap-6 group hover:bg-primary transition-all duration-300"
              >
                <div className="p-4 bg-white rounded-2xl group-hover:bg-secondary transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black mb-1 text-primary italic uppercase tracking-tighter group-hover:text-white">{feature.title}</h3>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed group-hover:text-white/60">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-primary rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-secondary"
        >
          <h2 className="text-3xl font-black mb-12 text-center italic uppercase tracking-tighter">Strategic Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {[
               { step: '01', title: 'Concept', color: 'bg-secondary' },
               { step: '02', title: 'Fabrication', color: 'bg-accent' },
               { step: '03', title: 'Optimization', color: 'bg-white' }
             ].map((road, i) => (
               <div key={i} className="text-center md:text-left group">
                  <div className={`w-12 h-12 ${road.color} rounded-xl flex items-center justify-center text-primary text-xl font-black mb-6 mx-auto md:mx-0 shadow-lg italic`}>
                    {road.step}
                  </div>
                  <h4 className="text-xl font-black mb-2 italic uppercase tracking-tighter text-white">{road.title}</h4>
                  <div className="h-1 w-8 bg-white/10 group-hover:w-full transition-all duration-500 rounded-full"></div>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Build;
