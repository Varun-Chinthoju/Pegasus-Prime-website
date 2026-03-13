import React from 'react';
import { Layers, Settings, Maximize, Cpu, Zap, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const Build = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* VEX Build Plate Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 12px 12px, #0f172a 3px, transparent 0)',
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 flex items-center justify-center gap-4 text-primary italic uppercase tracking-tighter">
            <span className="p-3 bg-primary rounded-3xl text-secondary shadow-xl shadow-primary/20"><PenTool size={40} /></span>
            Structural <span className="text-secondary">Engineering</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed italic">
            From initial CAD sketches to the final competition-ready machine, explore our iterative design process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="aspect-[16/10] bg-primary rounded-[3rem] shadow-2xl border-8 border-white flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ 
                     backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                     backgroundSize: '30px 30px' 
                   }}>
              </div>
              <Maximize className="text-secondary group-hover:scale-125 transition-transform duration-700" size={64} />
              <div className="absolute bottom-8 left-8 bg-secondary/90 backdrop-blur-md px-4 py-2 rounded-2xl text-xs text-primary font-black uppercase tracking-widest italic">
                Fusion_360_Project_Main.cad
              </div>
            </div>
            
            <h2 className="text-3xl font-black text-primary italic uppercase tracking-tighter">Iterative Development</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              We utilize Fusion 360 for our CAD designs, allowing us to simulate movements and verify tolerances before a single screw is tightened. Our 6-wheel tank drive chassis provides the perfect balance of speed and stability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {[
              { icon: <Layers className="text-secondary" />, title: 'Chassis Architecture', desc: '6-motor drivetrain with 3.25" wheels and a 1:1.66 gear ratio for high-speed mobility.', delay: 0.1 },
              { icon: <Settings className="text-accent" />, title: 'Scoring Mechanism', desc: 'Low-friction intake system integrated with a high-torque 4-bar lift for efficient scoring.', delay: 0.2 },
              { icon: <Cpu className="text-primary" />, title: 'Weight Optimization', desc: 'Extensive use of aluminum C-channels and poly-carbonate to keep the robot agile.', delay: 0.3 }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: feature.delay }}
                className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-primary/5 flex items-start gap-8 group hover:border-secondary/30 transition-all"
              >
                <div className="p-5 bg-slate-50 rounded-2xl group-hover:bg-primary transition-colors duration-300">
                  {React.cloneElement(feature.icon, { className: "group-hover:text-white transition-colors" })}
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 text-primary italic uppercase tracking-tighter">{feature.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Build Journey Timeline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-primary rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl border-b-[1rem] border-secondary"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
                 backgroundSize: '40px 40px' 
               }}>
          </div>
          <h2 className="text-4xl font-black mb-16 text-center italic uppercase tracking-tighter">Strategic Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
             {[
               { step: '01', title: 'Conceptualization', desc: 'Testing intake and lift ratios using rapid prototyping and scrap metal.', color: 'secondary' },
               { step: '02', title: 'Fabrication', desc: 'Assembling the drive pod and ensuring perfect mechanical alignment.', color: 'accent' },
               { step: '03', title: 'Optimization', desc: 'Wiring the brain and calibrating sensors for maximum performance.', color: 'white' }
             ].map((road, i) => (
               <div key={i} className="text-center md:text-left group">
                  <div className={`w-16 h-16 bg-${road.color === 'white' ? 'white' : road.color} rounded-2xl flex items-center justify-center text-primary text-2xl font-black mb-8 mx-auto md:mx-0 shadow-lg group-hover:scale-110 transition-transform italic`}>
                    {road.step}
                  </div>
                  <h4 className="text-2xl font-black mb-4 italic uppercase tracking-tighter text-white">{road.title}</h4>
                  <p className="text-white/60 text-sm font-medium leading-relaxed">{road.desc}</p>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Build;
