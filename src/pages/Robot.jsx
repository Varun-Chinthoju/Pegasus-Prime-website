import React from 'react';
import { Ruler, Zap, Activity, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Robot = () => {
  return (
    <div className="max-w-7xl mx-auto py-32 px-8 min-h-screen bg-primary">
      <div className="flex flex-col items-center text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Tactical <span className="text-secondary">Chassis</span>
        </motion.h1>
        <div className="section-accent"></div>
        <p className="text-slate-400 max-w-2xl mt-8 font-bold text-lg leading-relaxed italic">
          Serial Designation: PEGASUS-V2.4. A result of continuous iterative engineering and field-tested reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square rounded-[4rem] bg-surface/30 border border-white/10 shadow-2xl relative group flex items-center justify-center p-16 overflow-hidden"
        >
          <div className="bg-white p-8 rounded-[3rem] shadow-[0_0_60px_rgba(56,189,248,0.2)] transition-transform duration-700 group-hover:scale-110">
            <img src={logo} alt="Robot Illustration" className="w-full h-full object-contain" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-16">
             <p className="text-secondary font-black italic text-3xl uppercase tracking-tighter">Active Deployment</p>
          </div>
        </motion.div>

        <div className="space-y-12">
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
           >
              <h2 className="text-4xl font-black mb-6 text-white tracking-tighter uppercase italic">System Specs</h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed italic">
                Optimized for maximum cycle speed and defensive stability.
              </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Zap size={28} />, label: 'Drivetrain', value: '600 RPM Speed' },
                { icon: <Activity size={28} />, label: 'Motors', value: '8 High-Torque' },
                { icon: <Ruler size={28} />, label: 'Dimensions', value: '18" x 18" x 18"' },
                { icon: <Info size={28} />, label: 'Mass', value: '14.5 lbs' }
              ].map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="p-10 bg-surface rounded-[2.5rem] border border-white/5 flex items-center gap-8 group hover:border-secondary/20 transition-all duration-500 shadow-xl"
                >
                  <div className="p-5 bg-primary rounded-2xl text-secondary shadow-lg group-hover:scale-110 transition-transform">
                    {spec.icon}
                  </div>
                  <div>
                     <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-1.5">{spec.label}</p>
                     <p className="font-black text-white text-xl tracking-tight italic uppercase">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface rounded-[4rem] p-20 md:p-32 border border-white/5 relative overflow-hidden shadow-2xl"
      >
         <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
         
         <h2 className="text-4xl md:text-5xl font-black mb-20 text-center text-white tracking-tighter uppercase italic">Mission Performance</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { label: 'Autonomous Integrity', value: '95%' },
              { label: 'Intake Efficiency', value: '88%' },
              { label: 'Pilot Precision', value: '92%' }
            ].map((stat, i) => (
              <div key={i} className="space-y-8">
                 <div className="flex flex-col items-center md:items-start justify-between gap-4">
                    <span className="text-slate-500 font-black uppercase text-xs tracking-[0.4em]">{stat.label}</span>
                    <span className="font-black italic text-6xl text-secondary drop-shadow-[0_0_20px_rgba(245,158,11,0.2)] tracking-tighter">{stat.value}</span>
                 </div>
                 <div className="h-2.5 w-full bg-primary rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: stat.value }}
                      transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-secondary shadow-[0_0_20px_rgba(245,158,11,0.5)]"
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
