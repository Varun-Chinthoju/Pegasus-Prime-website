import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Cpu, Code as CodeIcon, Zap, Target, Trophy, Activity, Hash, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { fetchTeamStats } from '../services/robotevents';

const Home = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const teamStats = await fetchTeamStats();
      setStats(teamStats);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-primary min-h-screen relative overflow-hidden" id="main-content">
      
      {/* Cyber-Grid Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 pt-20">
        
        {/* Dynamic Background Glows */}
        <div className="absolute top-1/4 -left-[20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-1/4 -right-[20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse delay-1000 duration-7000"></div>
        
        <div className="z-20 max-w-5xl mx-auto flex flex-col items-center w-full">
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 relative group perspective-1000"
          >
            {/* Rotating Cyber Rings */}
            <div className="absolute inset-0 -m-8 border-[1px] border-accent/20 rounded-full border-dashed animate-[spin_20s_linear_infinite] group-hover:border-accent/40 transition-colors"></div>
            <div className="absolute inset-0 -m-12 border-[1px] border-emerald-400/10 rounded-full border-dotted animate-[spin_30s_linear_infinite_reverse] group-hover:border-emerald-400/30 transition-colors"></div>

            <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-all duration-700 scale-150"></div>
            
            <div className="relative p-8 bg-surface-light/40 backdrop-blur-2xl rounded-3xl shadow-[0_0_80px_rgba(0,240,255,0.15)] border border-white/5 transition-transform duration-700 group-hover:scale-[1.03] group-hover:-translate-y-2 z-10">
              <img src={logo} alt="Pegasus Prime Logo" className="h-36 w-36 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
              
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent/60"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent/60"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent/60"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent/60"></div>
            </div>
          </motion.div>
          
          <div className="flex flex-col items-center relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -top-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
            ></motion.div>

            <motion.h1 
              initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
              className="text-6xl md:text-[8rem] font-black tracking-tighter mb-6 text-white uppercase italic leading-none"
            >
              PEGASUS <span className="text-accent underline decoration-accent/30 decoration-[auto] underline-offset-[16px]">PRIME</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.7, duration: 1 }}
              className="absolute -bottom-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
            ></motion.div>
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 text-xl md:text-2xl text-text-muted max-w-3xl mb-16 mx-auto font-medium leading-relaxed tracking-wide"
          >
            Engineering the benchmark of autonomous robotics.<br/> Precision mechanics. Neural execution. <span className="text-accent font-bold italic">Uncompromised superiority.</span>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4"
          >
            <Link 
              to="/robot" 
              className="px-10 py-5 bg-accent hover:bg-white text-primary font-black rounded-xl transition-all duration-300 flex items-center justify-center group shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] uppercase tracking-widest text-sm relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                System Interface <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:text-primary transition-transform" />
              </span>
              <div className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-300 ease-out z-0"></div>
            </Link>
            <Link 
              to="/sponsors" 
              className="px-10 py-5 bg-surface/40 hover:bg-surface-light text-white font-black rounded-xl transition-all duration-300 border border-white/10 hover:border-accent/40 backdrop-blur-md uppercase tracking-widest text-sm group flex items-center justify-center"
            >
              <Zap className="mr-3 w-4 h-4 text-accent group-hover:scale-110 transition-transform" /> Partner Network
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cybernetic Stats Section */}
      <section className="w-full py-24 bg-surface/40 border-y border-white/5 relative z-20 backdrop-blur-3xl">
        {/* Top/Bottom Decorative Borders */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
          <AnimatePresence mode='wait'>
            {loading ? (
               Array(4).fill(0).map((_, i) => (
                 <motion.div 
                   key={'skeleton-' + i}
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                   className="flex flex-col items-center relative border-r-0 md:border-r border-white/5 last:border-0"
                 >
                   <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent animate-pulse rounded-lg"></div>
                   <div className="w-10 h-10 border border-accent/20 border-t-accent rounded-full animate-spin mb-6"></div>
                   <div className="w-24 h-8 bg-white/5 rounded backdrop-blur-xl mb-4 relative overflow-hidden">
                     <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                   </div>
                   <div className="w-32 h-3 bg-white/5 rounded"></div>
                 </motion.div>
               ))
            ) : (
              <>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center group relative border-r-0 md:border-r border-white/5 last:border-0">
                  <div className="p-3 bg-surface rounded-xl inline-block mb-6 border border-white/5 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                    <Target className="text-accent" size={26} />
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:text-accent transition-colors tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {stats?.wins || 0}<span className="text-text-muted text-4xl">-</span>{stats?.losses || 0}
                  </div>
                  <div className="text-text-muted text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent/50 animate-pulse"></span> Win/Loss Record
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center group relative border-r-0 md:border-r border-white/5 last:border-0">
                  <div className="p-3 bg-surface rounded-xl inline-block mb-6 border border-white/5 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                    <Hash className="text-accent" size={26} />
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:text-accent transition-colors tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    #<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">{stats?.ranking || '??'}</span>
                  </div>
                  <div className="text-text-muted text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400/50 animate-pulse delay-75"></span> Global TrueSkill
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-center group relative border-r-0 md:border-r border-white/5 last:border-0">
                  <div className="p-3 bg-surface rounded-xl inline-block mb-6 border border-white/5 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                    <Activity className="text-accent" size={26} />
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:text-accent transition-colors tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {stats?.opr || '0.0'}
                  </div>
                  <div className="text-text-muted text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400/50 animate-pulse delay-150"></span> Offensive Power Rating
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center group relative border-r-0 md:border-r border-white/5 last:border-0">
                  <div className="p-3 bg-surface rounded-xl inline-block mb-6 border border-white/5 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                    <Trophy className="text-accent" size={26} />
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:text-accent transition-colors tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    10<span className="text-accent/50">+</span>
                  </div>
                  <div className="text-text-muted text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400/50 animate-pulse delay-300"></span> Hardware Awards
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Core Specialties */}
      <section className="w-full py-32 px-6 relative overflow-hidden bg-primary">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-8">
            <div className="text-left">
              <div className="text-accent font-mono text-sm tracking-widest mb-4 uppercase flex items-center">
                <span className="w-8 h-px bg-accent mr-3"></span>{'// Architecture Overview'}
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-muted">Focus</span>
              </h2>
            </div>
            <div className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em] mt-8 md:mt-0 max-w-xs text-right hidden md:block border-l border-white/10 pl-6">
              Modular integration encompassing advanced kinematics, neural processing, and adversarial strategy protocols.
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Cpu />, title: 'Mechanical Architecture', desc: 'Crafting robust robot subsystems using aerospace-grade aluminum and iterative CAD modeling. High-density gearing for maximum torque transfer.', num: '01' },
              { icon: <CodeIcon />, title: 'Control Cybernetics', desc: 'Developing sophisticated autonomous algorithms and real-time sensor-fusion for absolute precision. Custom state-machine architectures.', num: '02' },
              { icon: <Users />, title: 'Adversarial Strategy', desc: 'Leveraging data-driven scouting protocols and tactical analysis to secure match dominance. Pre-computed routing nodes for path optimization.', num: '03' }
            ].map((system, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative"
              >
                {/* Tech Bracket Accents */}
                <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-accent/0 group-hover:border-accent/60 transition-colors z-20"></div>
                <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-accent/0 group-hover:border-accent/60 transition-colors z-20"></div>

                <div className="h-full p-10 glass-panel rounded-none border-white/5 bg-surface/30 group-hover:bg-surface/80 group-hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                  
                  {/* Subtle Scanline Background on Hover */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <div className="p-4 bg-primary border border-white/10 text-white group-hover:text-accent group-hover:border-accent/40 transition-all duration-500 shadow-xl">
                        {React.cloneElement(system.icon, { size: 32, strokeWidth: 1.5 })}
                      </div>
                      <div className="font-mono text-3xl font-black text-white/5 group-hover:text-accent/20 transition-colors">
                        {system.num}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{system.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-medium text-sm">{system.desc}</p>
                    
                    <div className="mt-8 flex items-center text-accent/0 group-hover:text-accent text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer group/link">
                      Initialize Module <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </div>
  );
};

export default Home;
