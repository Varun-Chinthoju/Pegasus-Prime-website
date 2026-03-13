import React from 'react';
import { Ruler, Zap, Activity, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Robot = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 bg-slate-50 min-h-screen">
      <div className="text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-primary mb-6 italic uppercase tracking-tighter"
        >
          Robot <span className="text-secondary">Showcase</span>
        </motion.h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
          Meet Pegasus, our latest competition robot designed for speed, reliability, and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square bg-primary rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative group flex items-center justify-center p-12"
        >
          <img src={logo} alt="Pegasus V2" className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(56,189,248,0.4)] group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
             <p className="text-secondary font-black italic text-2xl uppercase tracking-tighter">Unit: Pegasus V2.4</p>
          </div>
        </motion.div>

        <div className="space-y-10">
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
           >
              <h2 className="text-4xl font-black mb-6 text-primary italic uppercase tracking-tighter">Tactical Specs</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Engineered for maximum efficiency and power, Pegasus features a balanced drivetrain and a high-performance intake.
              </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Zap size={24} />, label: 'Drivetrain', value: '600 RPM Speed', color: 'secondary' },
                { icon: <Activity size={24} />, label: 'Motors', value: '8 High-Torque', color: 'accent' },
                { icon: <Ruler size={24} />, label: 'Size', value: '18" x 18" x 18"', color: 'primary' },
                { icon: <Info size={24} />, label: 'Weight', value: '14.5 lbs', color: 'slate-400' }
              ].map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="p-6 bg-white rounded-3xl shadow-lg shadow-primary/5 border border-slate-100 flex items-center gap-6"
                >
                  <div className={`p-4 bg-primary rounded-2xl text-secondary shadow-lg shadow-primary/20`}>
                    {spec.icon}
                  </div>
                  <div>
                     <p className="text-xs text-slate-400 font-black uppercase tracking-[0.2em] mb-1">{spec.label}</p>
                     <p className="font-black text-primary italic uppercase tracking-tighter text-lg">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl"
      >
         <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px] opacity-20"></div>
         <h2 className="text-3xl md:text-4xl font-black mb-12 italic uppercase tracking-tighter text-center">Telemetry Data</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { label: 'Autonomous Reliability', value: '95%', color: 'secondary' },
              { label: 'Intake Speed', value: '88%', color: 'accent' },
              { label: 'Driver Precision', value: '92%', color: 'white' }
            ].map((stat, i) => (
              <div key={i} className="space-y-6">
                 <div className="flex justify-between items-end">
                    <span className="text-white/60 font-black uppercase text-xs tracking-widest">{stat.label}</span>
                    <span className={`font-black italic text-3xl text-${stat.color === 'white' ? 'white' : stat.color}`}>{stat.value}</span>
                 </div>
                 <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: stat.value }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`h-full bg-${stat.color === 'white' ? 'white' : stat.color}`}
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
