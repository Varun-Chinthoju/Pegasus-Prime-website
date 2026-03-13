import React from 'react';
import { Layers, Settings, Maximize, Cpu, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const Build = () => {
  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 12px 12px, #fff 2px, transparent 0)',
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-32 px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <h1 className="section-title">
            Build <span className="text-secondary">Process</span>
          </h1>
          <div className="section-accent"></div>
          <p className="text-slate-400 max-w-2xl mt-8 font-bold text-lg leading-relaxed italic">
            From initial conceptualization to final structural optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="aspect-[16/10] bg-surface rounded-[3rem] shadow-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5 pointer-events-none" 
                   style={{ 
                     backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                     backgroundSize: '40px 40px' 
                   }}>
              </div>
              <div className="bg-white/5 p-16 rounded-[2.5rem] border border-white/10 group-hover:scale-105 transition-transform duration-700 shadow-inner">
                <Maximize className="text-secondary opacity-40" size={80} />
              </div>
              <div className="absolute bottom-10 left-10 bg-primary/90 backdrop-blur-md px-6 py-3 rounded-2xl text-xs text-secondary font-black uppercase tracking-[0.3em] italic border border-white/5">
                CAD_V3_FINAL.step
              </div>
            </div>
            
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">Iterative Prototyping</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium italic">
              We utilize Fusion 360 for high-fidelity mechanical modeling, ensuring every tolerance is met before fabrication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {[
              { icon: <Layers size={28} className="text-secondary" />, title: 'Chassis Architecture', desc: 'A 6-motor high-torque drivetrain designed for rapid field traversal.' },
              { icon: <Settings size={28} className="text-accent" />, title: 'Mechanical Systems', desc: 'Integrated modular subsystems calibrated for precision scoring.' },
              { icon: <Cpu size={28} className="text-white" />, title: 'Weight Optimization', desc: 'Strategic deployment of aluminum alloys to minimize inertia.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="p-12 bg-surface rounded-[3rem] border border-white/5 flex items-start gap-10 group hover:border-secondary/30 transition-all duration-500 shadow-xl"
              >
                <div className="p-6 bg-primary rounded-2xl group-hover:bg-secondary group-hover:text-primary transition-colors duration-500 shadow-2xl border border-white/5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3 text-white tracking-tight uppercase italic">{feature.title}</h3>
                  <p className="text-slate-400 text-sm font-bold leading-relaxed italic">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface rounded-[4rem] p-20 md:p-32 border border-white/5 relative overflow-hidden shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-24 text-center text-white tracking-tighter uppercase italic">Development Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
             {[
               { step: '01', title: 'Concept', desc: 'Rapid prototyping of primary mechanisms.' },
               { step: '02', title: 'Fabrication', desc: 'Chassis assembly and stress testing.' },
               { step: '03', title: 'Integration', desc: 'Final calibration and electronics tuning.' }
             ].map((road, i) => (
               <div key={i} className="text-center md:text-left group">
                  <div className="w-20 h-20 bg-primary rounded-2xl border border-secondary/30 flex items-center justify-center text-secondary text-3xl font-black mb-10 mx-auto md:mx-0 shadow-2xl italic group-hover:scale-110 transition-transform">
                    {road.step}
                  </div>
                  <h4 className="text-2xl font-black mb-4 text-white uppercase italic tracking-tighter">{road.title}</h4>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed italic">{road.desc}</p>
                  <div className="h-1 w-12 bg-secondary mt-6 rounded-full group-hover:w-full transition-all duration-700"></div>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Build;
