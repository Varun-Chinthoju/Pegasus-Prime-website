import React from 'react';
import { Ruler, Zap, Activity, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Robot = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4 bg-white min-h-screen">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-primary mb-4 italic uppercase tracking-tighter"
        >
          Robot <span className="text-secondary">Showcase</span>
        </motion.h1>
        <p className="text-slate-500 max-w-xl mx-auto font-bold text-sm uppercase tracking-widest leading-relaxed">
          Unit Pegasus: High-Performance Tactical Machine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square rounded-[2rem] overflow-hidden border-4 border-slate-100 shadow-2xl relative group flex items-center justify-center p-8 bg-slate-50"
        >
          <img src={logo} alt="Pegasus V2" className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(14,165,233,0.3)] group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
             <p className="text-secondary font-black italic text-xl uppercase tracking-tighter">Serial: 97711V-V2.4</p>
          </div>
        </motion.div>

        <div className="space-y-8">
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
           >
              <h2 className="text-3xl font-black mb-4 text-primary italic uppercase tracking-tighter">Tactical Specs</h2>
              <p className="text-slate-600 font-bold text-sm leading-relaxed">
                Precision-engineered for the 2025-2026 competition cycle. Every component calibrated for 100% mission success.
              </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <Zap size={20} />, label: 'Drivetrain', value: '600 RPM' },
                { icon: <Activity size={20} />, label: 'Motors', value: '8 High-Torque' },
                { icon: <Ruler size={20} />, label: 'Size', value: '18" x 18"' },
                { icon: <Info size={20} />, label: 'Weight', value: '14.5 lbs' }
              ].map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 group hover:bg-primary transition-colors"
                >
                  <div className="p-3 bg-white rounded-xl text-primary shadow-sm group-hover:bg-secondary transition-colors">
                    {spec.icon}
                  </div>
                  <div>
                     <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest group-hover:text-white/50 transition-colors">{spec.label}</p>
                     <p className="font-black text-primary italic uppercase tracking-tighter text-base group-hover:text-white transition-colors">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-secondary"
      >
         <h2 className="text-2xl md:text-3xl font-black mb-10 italic uppercase tracking-tighter text-center">Operational Telemetry</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: 'Autonomous', value: '95%', color: 'bg-secondary' },
              { label: 'Intake', value: '88%', color: 'bg-accent' },
              { label: 'Driver', value: '92%', color: 'bg-white' }
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                 <div className="flex justify-between items-end">
                    <span className="text-white/40 font-black uppercase text-[10px] tracking-[0.2em]">{stat.label}</span>
                    <span className="font-black italic text-2xl text-white">{stat.value}</span>
                 </div>
                 <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: stat.value }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full ${stat.color}`}
                    ></motion.div>
                 </div>
              </div>
            ))}
         </div>
      </motion.div>
    </div>
  );
};

export default Robot;
