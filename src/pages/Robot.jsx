import React from 'react';
import { Ruler, Zap, Activity, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Robot = () => {
  return (
    <div className="max-w-7xl mx-auto py-32 px-6 min-h-screen">
      <div className="text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase italic"
        >
          Our <span className="text-secondary">Robot</span>
        </motion.h1>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
          The result of months of iteration, testing, and precision engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square rounded-[3rem] bg-surface border border-white/5 shadow-2xl relative group flex items-center justify-center p-12 overflow-hidden"
        >
          <div className="bg-white p-6 rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-105">
            <img src={logo} alt="Robot Illustration" className="w-full h-full object-contain" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
             <p className="text-white font-bold text-xl uppercase tracking-widest italic">Pegasus V2.4</p>
          </div>
        </motion.div>

        <div className="space-y-12">
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
           >
              <h2 className="text-4xl font-extrabold mb-6 text-white tracking-tight uppercase italic">Technical Specifications</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Engineered for maximum speed and structural integrity. Every subsystem is modular and optimized for reliability.
              </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Zap size={24} />, label: 'Drivetrain', value: '600 RPM Speed' },
                { icon: <Activity size={24} />, label: 'Motors', value: '8 High-Torque' },
                { icon: <Ruler size={24} />, label: 'Dimensions', value: '18" x 18" x 18"' },
                { icon: <Info size={24} />, label: 'Weight', value: '14.5 lbs' }
              ].map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="p-8 bg-surface/50 rounded-3xl border border-white/5 flex items-center gap-6 group hover:border-secondary/20 transition-all duration-300"
                >
                  <div className="p-4 bg-primary rounded-2xl text-secondary shadow-lg">
                    {spec.icon}
                  </div>
                  <div>
                     <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">{spec.label}</p>
                     <p className="font-bold text-white text-lg tracking-tight italic">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface rounded-[4rem] p-16 md:p-24 border border-white/5 relative overflow-hidden shadow-2xl"
      >
         <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-white tracking-tight uppercase italic">Performance Metrics</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { label: 'Autonomous Success', value: '95%' },
              { label: 'Intake Efficiency', value: '88%' },
              { label: 'Driver Precision', value: '92%' }
            ].map((stat, i) => (
              <div key={i} className="space-y-6 text-center md:text-left">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
                    <span className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em]">{stat.label}</span>
                    <span className="font-black italic text-4xl text-secondary">{stat.value}</span>
                 </div>
                 <div className="h-2 w-full bg-primary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: stat.value }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-secondary shadow-[0_0_10px_rgba(212,175,55,0.5)]"
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
