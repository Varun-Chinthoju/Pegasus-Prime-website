import React from 'react';
import { Layers, Settings, Maximize, Cpu, Zap, PenTool } from 'lucide-react';
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

      <div className="relative z-10 max-w-7xl mx-auto py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase italic">
            Build <span className="text-secondary">Process</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            From initial CAD sketches to the final competition-ready machine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="aspect-[16/10] bg-surface rounded-[3rem] shadow-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5 pointer-events-none" 
                   style={{ 
                     backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                     backgroundSize: '40px 40px' 
                   }}>
              </div>
              <div className="bg-white/5 p-12 rounded-[2rem] border border-white/10 group-hover:scale-105 transition-transform duration-700">
                <Maximize className="text-secondary opacity-50" size={64} />
              </div>
              <div className="absolute bottom-8 left-8 bg-primary/80 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] text-secondary font-bold uppercase tracking-[0.2em] italic">
                Fusion_360_Project.cad
              </div>
            </div>
            
            <h2 className="text-3xl font-extrabold text-white tracking-tight uppercase italic">Iterative Prototyping</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We leverage Fusion 360 for detailed CAD modeling, allowing us to simulate mechanical movements and verify tolerances before physical assembly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: <Layers size={24} className="text-secondary" />, title: 'Drive Architecture', desc: 'A 6-motor high-speed drivetrain designed for agility and torque.' },
              { icon: <Settings size={24} className="text-accent" />, title: 'Scoring Systems', desc: 'Integrated intake and lift mechanisms optimized for rapid cycle times.' },
              { icon: <Cpu size={24} className="text-white" />, title: 'Materials', desc: 'Strategic use of aluminum and polycarbonate to balance weight and strength.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="p-10 bg-surface/50 rounded-[2.5rem] border border-white/5 flex items-start gap-8 group hover:border-secondary/30 transition-all duration-300"
              >
                <div className="p-5 bg-primary rounded-2xl group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 shadow-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white tracking-tight">{feature.title}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface rounded-[4rem] p-16 md:p-24 border border-white/5 relative overflow-hidden shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-20 text-center text-white tracking-tight uppercase italic">Development Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
             {[
               { step: '01', title: 'Conceptual Design', desc: 'Initial sketches and rapid prototyping of primary intake mechanisms.' },
               { step: '02', title: 'Structural Assembly', desc: 'Chassis fabrication and rigorous stress testing of the drive pod.' },
               { step: '03', title: 'Final Integration', desc: 'Electronics installation, wiring management, and sensor calibration.' }
             ].map((road, i) => (
               <div key={i} className="text-center md:text-left group">
                  <div className="w-16 h-16 bg-primary rounded-2xl border border-secondary/30 flex items-center justify-center text-secondary text-2xl font-black mb-8 mx-auto md:mx-0 shadow-lg italic">
                    {road.step}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white uppercase italic tracking-tight">{road.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{road.desc}</p>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Build;
