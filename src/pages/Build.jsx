import React from 'react';
import { Layers, Settings, Maximize, Cpu, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; // Use logo as placeholder for CAD

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

      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Build Process
          </h1>
          <p className="text-text-muted max-w-2xl mt-4 font-medium text-lg leading-relaxed">
            From initial conceptualization to final structural optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="aspect-[16/10] glass-panel rounded-[2rem] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ 
                     backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                     backgroundSize: '40px 40px' 
                   }}>
              </div>
              <div className="bg-surface-light p-10 rounded-[2rem] border border-white/10 group-hover:scale-105 transition-transform duration-700 shadow-2xl relative z-10">
                <img src={logo} alt="CAD Model Placeholder" className="h-32 w-32 mix-blend-screen opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                <div className="bg-primary/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs text-accent font-mono border border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div> Fusion_360_Assembly.step
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white tracking-tight">Iterative Prototyping</h2>
            <p className="text-text-muted text-lg leading-relaxed">
              We utilize Fusion 360 for high-fidelity mechanical modeling, ensuring every tolerance is met before physical fabrication begins.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: <Layers size={24} />, title: 'Chassis Architecture', desc: 'A 6-motor high-torque drivetrain designed for rapid field traversal.' },
              { icon: <Settings size={24} />, title: 'Mechanical Systems', desc: 'Integrated modular subsystems calibrated for precision scoring.' },
              { icon: <Cpu size={24} />, title: 'Weight Optimization', desc: 'Strategic deployment of aluminum alloys to minimize inertia.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="p-8 glass-panel glass-panel-hover rounded-[2rem] flex items-start gap-6"
              >
                <div className="p-4 bg-surface-light rounded-2xl text-accent border border-white/5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-text-muted text-sm font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white tracking-tight">Development Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
             {[
               { step: '01', title: 'Concept', desc: 'Rapid prototyping of primary mechanisms.' },
               { step: '02', title: 'Fabrication', desc: 'Chassis assembly and stress testing.' },
               { step: '03', title: 'Integration', desc: 'Final calibration and electronics tuning.' }
             ].map((road, i) => (
               <div key={i} className="flex flex-col relative group">
                  {/* Connector Line (hidden on mobile, shown on desktop) */}
                  {i < 2 && <div className="hidden md:block absolute top-8 left-24 right-0 h-0.5 bg-white/10 -z-10 group-hover:bg-accent/30 transition-colors"></div>}
                  
                  <div className="w-16 h-16 bg-surface-light rounded-2xl border border-white/10 flex items-center justify-center text-accent text-2xl font-bold mb-6 shadow-lg group-hover:bg-accent group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                    {road.step}
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-white tracking-tight">{road.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed max-w-xs">{road.desc}</p>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Build;
