
import React from 'react';
import { Ruler, Zap, Activity, Info, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Robot = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6 min-h-screen bg-primary">
      <div className="text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Our Robot
        </motion.h1>
        <p className="text-text-muted max-w-2xl mx-auto font-medium text-lg leading-relaxed">
          What we&apos;ve been building and iterating on all season.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square glass-panel rounded-[3rem] relative group flex items-center justify-center p-12 overflow-hidden"
        >
          {/* subtle background glow */}
          <div className="absolute inset-0 bg-accent/5 opacity-50"></div>
          
          <div className="bg-surface-light/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 transition-transform duration-700 group-hover:scale-105 shadow-2xl z-10">
            <img src={logo} alt="Robot Illustration" className="w-full h-full object-contain mix-blend-screen" />
          </div>
          
          <div className="absolute bottom-10 left-10 z-20">
             <div className="bg-surface/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                <p className="text-white font-semibold text-lg tracking-wide">Pegasus V2.4</p>
                <p className="text-accent text-xs font-mono mt-1">Status: Operational</p>
             </div>
          </div>
        </motion.div>

        <div className="space-y-12">
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
           >
              <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Technical Specifications</h2>
              <p className="text-text-muted text-lg leading-relaxed font-medium">
                Our robot runs a six-motor drivetrain, a pneumatic clamp, and a custom intake. Everything is built to be easy to repair between matches.
              </p>
           </motion.div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Zap size={22} />, label: 'Drivetrain', value: '600 RPM Base' },
                { icon: <Activity size={22} />, label: 'Motors', value: '8 High-Torque' },
                { icon: <Ruler size={22} />, label: 'Dimensions', value: '18" x 18" x 18"' },
                { icon: <Info size={22} />, label: 'Weight', value: '14.5 lbs' }
              ].map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="p-6 glass-panel glass-panel-hover rounded-3xl flex items-start gap-5"
                >
                  <div className="p-3 bg-accent/10 rounded-xl text-accent border border-accent/20 mt-1">
                    {spec.icon}
                  </div>
                  <div>
                     <p className="text-xs text-text-muted font-semibold uppercase tracking-widest mb-1.5">{spec.label}</p>
                     <p className="font-bold text-white text-lg tracking-tight">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
      >
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
         
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Performance Metrics</h2>
              <p className="text-text-muted mt-3">Verified telemetry from our latest testing phase.</p>
            </div>
            <div className="px-4 py-2 bg-surface-light rounded-lg border border-white/5 text-xs text-text-muted font-mono flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500"></div> From our last scrimmage
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              { label: 'Autonomous Success', value: 95 },
              { label: 'Intake Efficiency', value: 88 },
              { label: 'Driver Precision', value: 92 }
            ].map((stat, i) => (
              <div key={i} className="space-y-5">
                 <div className="flex justify-between items-end">
                    <span className="text-text-muted font-semibold uppercase text-xs tracking-widest">{stat.label}</span>
                    <span className="font-bold text-3xl text-white">{stat.value}%</span>
                 </div>
                 <div className="h-2 w-full bg-surface-light rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.value}%` }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="h-full bg-accent rounded-full"
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
