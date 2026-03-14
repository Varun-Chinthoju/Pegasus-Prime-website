import React from 'react';
import { Layers, Settings, Maximize, Cpu, PenTool, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Build = () => {
  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Precision Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-32 px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <h1 className="section-title">
            Engineering <span className="text-accent">Cycle</span>
          </h1>
          <div className="section-accent"></div>
          <p className="text-slate-400 max-w-2xl mt-8 font-bold text-lg leading-relaxed italic">
            How we go from a blank page in Fusion 360 to a robot that actually works at a tournament.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="aspect-[16/10] glass-panel rounded-[3.5rem] flex items-center justify-center relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent opacity-50"></div>
              
              {/* Simulated CAD UI Elements */}
              <div className="absolute top-8 left-8 flex gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              
              <div className="relative p-16 bg-primary/40 rounded-[2.5rem] border border-white/5 group-hover:scale-105 transition-transform duration-700 shadow-inner">
                <img src={logo} alt="CAD Architecture" className="h-40 w-40 object-contain mix-blend-screen opacity-40 group-hover:opacity-100 transition-all duration-500" />
              </div>
              
              <div className="absolute bottom-8 right-8 z-20">
                <div className="px-4 py-2 bg-surface/90 backdrop-blur-md rounded-xl text-[10px] text-accent font-black uppercase tracking-[0.3em] border border-white/10 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span> 
                  ASSEMBLY_FINAL_V2.4
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">Digital Fabrication</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium border-l-4 border-accent pl-8 py-2">
                We model everything in Fusion 360 before we cut anything. It saves time — you catch clearance issues in CAD instead of finding out when parts don&apos;t fit.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center gap-8">
            {[
              { 
                icon: <Layers size={32} />, 
                title: 'Drivetrain', 
                desc: 'Six-motor tank drive on 3.25" omni wheels. Tuned for the speed we need without burning motors mid-match.',
                color: 'accent'
              },
              { 
                icon: <Settings size={32} />, 
                title: 'Mechanisms', 
                desc: 'Custom 4-bar lift with a pneumatic clamp on the end. Designed specifically around the High Stakes game objects.',
                color: 'blue'
              },
              { 
                icon: <GitBranch size={32} />, 
                title: 'Design Iteration', 
                desc: 'We prototype in polycarbonate and 3D prints first. If it breaks, we learn something. Then we replace it with aluminum.',
                color: 'white'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="glass-panel glass-panel-hover p-10 rounded-[3rem] flex items-start gap-10 group"
              >
                <div className={`p-6 bg-primary rounded-2xl group-hover:bg-${feature.color === 'white' ? 'white' : feature.color} group-hover:text-primary transition-all duration-500 shadow-2xl border border-white/5 text-${feature.color === 'white' ? 'white' : feature.color}`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3 text-white tracking-tight uppercase italic">{feature.title}</h3>
                  <p className="text-slate-400 text-sm font-bold leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Timeline - FIXED GEOMETRY */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-[4rem] p-20 md:p-32 relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-24 text-center text-white tracking-tighter uppercase italic">How We Build</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative z-10">
             {[
             { step: '01', title: 'Design', desc: 'We sketch it out, argue about it, then build it in Fusion 360 until it makes sense.' },
               { step: '02', stepColor: 'secondary', title: 'Build', desc: 'Cut, drill, rivet, repeat. The robot comes together match by match, tournament by tournament.' },
               { step: '03', stepColor: 'accent', title: 'Test & Fix', desc: 'Drive it around, break something, figure out why, and make it stronger. That\'s the loop.' }
             ].map((road, i) => (
               <div key={i} className="flex flex-col items-center md:items-start group relative">
                  {/* Visual Connection Line */}
                  {i < 2 && <div className="hidden lg:block absolute top-10 left-32 right-[-40%] h-1 bg-white/5 -z-10 group-hover:bg-accent/20 transition-all duration-700 rounded-full"></div>}
                  
                  <div className={`w-20 h-20 bg-surface-light rounded-3xl border border-white/10 flex items-center justify-center text-3xl font-black mb-10 shadow-2xl group-hover:scale-110 group-hover:border-accent group-hover:text-accent transition-all duration-500 italic ${road.stepColor === 'secondary' ? 'text-secondary' : road.stepColor === 'accent' ? 'text-accent' : 'text-white'}`}>
                    {road.step}
                  </div>
                  <h4 className="text-3xl font-black mb-4 text-white uppercase italic tracking-tighter group-hover:text-accent transition-colors">{road.title}</h4>
                  <p className="text-slate-500 text-base font-bold leading-relaxed italic">{road.desc}</p>
                  <div className="h-1.5 w-12 bg-surface-light mt-8 rounded-full group-hover:w-full group-hover:bg-accent transition-all duration-700 shadow-lg"></div>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Build;
