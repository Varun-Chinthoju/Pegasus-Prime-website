import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Cpu, Code as CodeIcon, Zap, Target, Trophy, Activity, Hash, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { fetchTeamStats } from '../services/robotevents';

const TICKER_ITEMS = [
  'HIGH STAKES SEASON', 'TEAM 97711V', 'PEGASUS PRIME', 'AURORA NEXUS',
  'NEXUS MOTION LIB', 'CYBERCORE ARCH', 'VRC EXCELLENCE', 'AUTONOMOUS SYSTEMS',
  'HIGH STAKES SEASON', 'TEAM 97711V', 'PEGASUS PRIME', 'AURORA NEXUS',
];

const Ticker = () => (
  <div className="w-full overflow-hidden border-y border-white/5 py-4 bg-surface/40 backdrop-blur-md relative">
    <div className="flex animate-[ticker_35s_linear_infinite] whitespace-nowrap will-change-transform">
      {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, i) => (
        <span key={i} className="flex items-center mx-8 text-[11px] font-black uppercase tracking-[0.4em] text-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-6 flex-shrink-0"></span>
          {item}
        </span>
      ))}
    </div>
  </div>
);

const StatCard = ({ icon, value, label, delay, color = 'accent' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="group text-center relative flex flex-col items-center border-r border-white/5 last:border-0 px-4"
  >
    <div className={`p-3 bg-surface rounded-xl inline-block mb-5 border border-white/5 group-hover:border-${color}/40 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all`}>
      {icon}
    </div>
    <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter tabular-nums group-hover:text-accent transition-colors">
      {value}
    </div>
    <div className="text-text-muted text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse"></span>
      {label}
    </div>
  </motion.div>
);

StatCard.propTypes = {
  icon: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  delay: PropTypes.number,
  color: PropTypes.string,
};

const Home = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, 80]);

  useEffect(() => {
    const loadData = async () => {
      const teamStats = await fetchTeamStats();
      setStats(teamStats);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-primary min-h-screen relative overflow-x-hidden" id="main-content">

      <Helmet>
        <title>Pegasus Prime | VRC Robotics Team 97711V</title>
        <meta name="description" content="Pegasus Prime (Team 97711V) — the apex of autonomous VEX robotics. Precision mechanics, neural-level control software, and uncompromised competition performance." />
        <link rel="canonical" href="https://varun-chinthoju.github.io/Pegasus-Prime-website/" />
      </Helmet>

      {/* Cyber-Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] z-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,240,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}></div>

      {/* Hero Section */}
      <section ref={heroRef} className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 pt-24">

        {/* Ambient Glows */}
        <div className="absolute top-[20%] left-[-15%] w-[700px] h-[700px] bg-accent/8 rounded-full blur-[180px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-15%] w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[180px] pointer-events-none"></div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="z-20 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full text-left">

          {/* Logo Column */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group flex-shrink-0"
          >
            {/* Outer spinning ring */}
            <div className="absolute inset-0 -m-10 border border-accent/15 rounded-full border-dashed animate-[spin_25s_linear_infinite]"></div>
            {/* Inner spinning ring */}
            <div className="absolute inset-0 -m-5 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            {/* Glow blob */}
            <div className="absolute inset-0 -m-4 bg-accent/20 rounded-full blur-2xl scale-125 group-hover:scale-150 transition-transform duration-1000"></div>

            <div className="relative w-44 h-44 md:w-56 md:h-56 bg-surface-light/30 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(0,240,255,0.12)] group-hover:border-accent/30 group-hover:shadow-[0_0_80px_rgba(0,240,255,0.25)] transition-all duration-700 group-hover:scale-[1.03]">
              <img src={logo} alt="Pegasus Prime" className="w-28 h-28 md:w-36 md:h-36 object-contain" />
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-accent/50 rounded-tl"></div>
              <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-accent/50 rounded-tr"></div>
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-accent/50 rounded-bl"></div>
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-accent/50 rounded-br"></div>
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              VRC High Stakes — Team 97711V
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase italic leading-[0.9] mb-8"
            >
              PEGASUS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-sky-300 to-blue-400">PRIME</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="text-lg md:text-xl text-text-muted max-w-xl mb-10 leading-relaxed font-medium"
            >
              The apex of autonomous robotics. Precision-engineered hardware
              fused with neural-level software for <span className="text-white font-bold italic">uncompromised competition performance.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/robot"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-black text-sm uppercase tracking-widest rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] transition-shadow duration-300"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  View Robot <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/code"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 bg-surface/30 backdrop-blur-md text-white font-black text-sm uppercase tracking-widest rounded-xl hover:border-accent/40 hover:bg-surface/60 transition-all duration-300 group"
              >
                <Zap className="mr-2 w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                Code Lab
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold"
        >
          <ChevronDown className="animate-bounce w-5 h-5" />
          Scroll
        </motion.div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Stats Section */}
      <section className="w-full py-20 bg-surface/30 border-b border-white/5 relative z-20 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Array(4).fill(0).map((_, i) => (
                  <div key={i} className="flex flex-col items-center animate-pulse">
                    <div className="w-10 h-10 bg-white/5 rounded-xl mb-5"></div>
                    <div className="w-20 h-9 bg-white/5 rounded mb-3"></div>
                    <div className="w-28 h-3 bg-white/5 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCard
                  icon={<Target className="text-accent" size={22} />}
                  value={`${stats?.wins ?? 0}-${stats?.losses ?? 0}`}
                  label="Win / Loss"
                  delay={0}
                />
                <StatCard
                  icon={<Hash className="text-accent" size={22} />}
                  value={`#${stats?.ranking ?? '??'}`}
                  label="Global Rank"
                  delay={0.1}
                />
                <StatCard
                  icon={<Activity className="text-accent" size={22} />}
                  value={stats?.opr ?? '—'}
                  label="OPR"
                  delay={0.2}
                />
                <StatCard
                  icon={<Trophy className="text-accent" size={22} />}
                  value="10+"
                  label="Excellence Awards"
                  delay={0.3}
                />
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* System Focus Cards */}
      <section className="w-full py-32 px-6 relative bg-primary">
        <div className="max-w-6xl mx-auto">

          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent"></div>
              <span className="text-accent font-mono text-xs uppercase tracking-widest">{'// System Architecture'}</span>
              <div className="h-px flex-1 bg-gradient-to-l from-accent/40 to-transparent"></div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter text-center"
            >
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Systems</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Cpu strokeWidth={1.5} />,
                title: 'Mechanical Architecture',
                desc: 'Aerospace-grade aluminum subsystems with high-density gearing. Iterative CAD modeling for peak torque transfer and structural integrity.',
                num: '01',
                tag: 'hardware',
              },
              {
                icon: <CodeIcon strokeWidth={1.5} />,
                title: 'Control Cybernetics',
                desc: 'Custom state-machine autonomy with 3-layer PID loops and real-time odometry correction. Sensor fusion for sub-millimeter precision.',
                num: '02',
                tag: 'software',
              },
              {
                icon: <Users strokeWidth={1.5} />,
                title: 'Adversarial Strategy',
                desc: 'Data-driven scouting and tactical analysis systems. Pre-computed path routing and opponent modelling for match-level dominance.',
                num: '03',
                tag: 'strategy',
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative"
              >
                {/* Hover bracket corners */}
                <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-transparent group-hover:border-accent/70 transition-colors duration-300 z-10"></div>
                <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-transparent group-hover:border-accent/70 transition-colors duration-300 z-10"></div>

                <div className="h-full p-9 bg-surface/30 border border-white/5 group-hover:bg-surface/70 group-hover:border-white/10 group-hover:shadow-[0_0_40px_rgba(0,240,255,0.07)] transition-all duration-500 relative overflow-hidden">
                  <div className="flex items-start justify-between mb-10">
                    <div className="p-3.5 bg-primary border border-white/10 text-white/50 group-hover:text-accent group-hover:border-accent/30 transition-all duration-500">
                      {React.cloneElement(s.icon, { size: 28 })}
                    </div>
                    <div className="font-mono text-5xl font-black text-white/[0.04] group-hover:text-accent/15 transition-colors select-none">
                      {s.num}
                    </div>
                  </div>

                  <div className="inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-accent/50 border border-accent/20 mb-5">
                    {s.tag}
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4 leading-tight">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">{s.desc}</p>

                  <div className="mt-8 flex items-center text-[11px] font-mono uppercase tracking-widest text-transparent group-hover:text-accent/60 transition-colors">
                    Initialize <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-32 px-6 bg-surface/20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-accent font-mono text-xs tracking-widest uppercase mb-6">{'// Join The Mission'}</div>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8">
              Want to partner<br/>with <span className="text-accent">Pegasus?</span>
            </h2>
            <p className="text-text-muted text-lg mb-10 leading-relaxed">
              We are actively seeking sponsors and collaborators who share our commitment to engineering excellence.
            </p>
            <Link
              to="/sponsors"
              className="inline-flex items-center px-10 py-5 bg-accent text-primary font-black uppercase tracking-widest text-sm rounded-xl shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.5)] transition-all duration-300 group"
            >
              Partner Hub <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default Home;
