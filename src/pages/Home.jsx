import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Cpu, Code as CodeIcon, Zap, Target, Trophy, Activity, Hash, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { fetchTeamStats } from '../services/robotevents';

/* ─── Ticker ──────────────────────────────────────────────────────── */
const TICKER_ITEMS = [
  'HIGH STAKES 2025', 'TEAM 97711V', 'PEGASUS PRIME', 'AURORA NEXUS',
  'VEXU ROBOTICS', 'ZEPHYR ROBOT', 'EXCELLENCE AWARD', 'CALIFORNIA REGION',
];

const Ticker = () => (
  <div className="w-full overflow-hidden py-3 bg-accent/5 border-y border-accent/10 relative">
    <div className="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap">
      {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
        <span key={i} className="flex items-center mx-10 text-[10px] font-black uppercase tracking-[0.5em] text-accent/40">
          <span className="w-1 h-1 rounded-full bg-accent/60 mr-8 flex-shrink-0"></span>
          {item}
        </span>
      ))}
    </div>
  </div>
);

/* ─── StatCard ──────────────────────────────────────────────────────── */
const StatCard = ({ icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    className="group flex flex-col items-center text-center p-8 bg-surface/40 border border-white/5 hover:border-accent/20 hover:bg-surface/70 hover:shadow-[0_0_30px_rgba(0,240,255,0.06)] transition-all duration-500 relative"
  >
    <div className="p-3 bg-primary border border-white/10 group-hover:border-accent/30 group-hover:shadow-[0_0_16px_rgba(0,240,255,0.2)] mb-5 transition-all duration-500">
      {icon}
    </div>
    <div className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-2 tabular-nums group-hover:text-accent transition-colors duration-300">
      {value}
    </div>
    <div className="text-[10px] font-black uppercase tracking-[0.35em] text-white/25 group-hover:text-white/40 transition-colors">
      {label}
    </div>
  </motion.div>
);

StatCard.propTypes = {
  icon: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

/* ─── Home ──────────────────────────────────────────────────────────── */
const Home = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamStats().then((s) => { setStats(s); setLoading(false); });
  }, []);

  return (
    <div className="flex flex-col bg-primary min-h-screen relative overflow-x-hidden" id="main-content">

      <Helmet>
        <title>Pegasus Prime | VRC Team 97711V</title>
        <meta name="description" content="Pegasus Prime — VEX Robotics Competition Team 97711V. Precision-engineered hardware fused with neural-level software." />
        <link rel="canonical" href="https://varun-chinthoju.github.io/Pegasus-Prime-website/" />
      </Helmet>

      {/* Global grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen flex items-center pt-24 pb-16 px-8 z-10 overflow-hidden">

        {/* Large ambient glows */}
        <div className="absolute -top-20 -left-40 w-[900px] h-[900px] bg-accent/[0.06] rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-20%] w-[700px] h-[700px] bg-blue-600/[0.05] rounded-full blur-[180px] pointer-events-none" />

        {/* Giant bg text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-[22vw] font-black uppercase italic tracking-tighter leading-none text-white/[0.018] whitespace-nowrap"
          >
            PEGASUS
          </span>
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* — Left: Text — */}
          <div>
            {/* Label chip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 border border-accent/25 bg-accent/8 rounded-full mb-8"
            >
              <Wifi size={12} className="text-accent animate-pulse" />
              <span className="text-accent text-[11px] font-black uppercase tracking-[0.35em]">VRC High Stakes · Team 97711V</span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(4rem,12vw,9rem)] font-black uppercase italic tracking-tighter leading-[0.85] text-white"
              >
                Pegasus
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(4rem,12vw,9rem)] font-black uppercase italic tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-accent via-sky-300 to-blue-400"
              >
                Prime
              </motion.h1>
            </div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-white/40 text-lg max-w-lg leading-relaxed mb-12 font-medium"
            >
              Four high school students from California competing in VRC High Stakes. We design, build, and program our own robot. No outsourcing, no shortcuts.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/robot"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-black text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(0,240,255,0.4)] hover:shadow-[0_0_60px_rgba(0,240,255,0.7)] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-3">
                  View Robot <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/code"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 bg-white/[0.03] text-white font-black text-sm uppercase tracking-widest hover:border-accent/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                <Zap size={14} className="text-accent" />
                Code Lab
              </Link>
            </motion.div>
          </div>

          {/* — Right: Logo — */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center relative group"
          >
            {/* Rings */}
            <div className="absolute w-[360px] h-[360px] border border-accent/10 rounded-full border-dashed animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-[280px] h-[280px] border border-white/[0.04] rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            {/* Glow */}
            <div className="absolute w-52 h-52 bg-accent/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
            {/* Logo box */}
            <div className="relative w-52 h-52 bg-surface-light/20 backdrop-blur-xl border border-white/8 flex items-center justify-center shadow-[0_0_80px_rgba(0,240,255,0.1)] group-hover:border-accent/20 group-hover:shadow-[0_0_100px_rgba(0,240,255,0.2)] transition-all duration-700">
              <img src={logo} alt="Pegasus Prime" className="w-32 h-32 object-contain" />
              {/* Corner brackets */}
              {['top-1.5 left-1.5 border-t border-l', 'top-1.5 right-1.5 border-t border-r', 'bottom-1.5 left-1.5 border-b border-l', 'bottom-1.5 right-1.5 border-b border-r'].map((c, i) => (
                <div key={i} className={`absolute w-4 h-4 border-accent/50 ${c}`} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Ticker ──────────────────────────────────────────────────── */}
      <Ticker />

      {/* ── Stats ───────────────────────────────────────────────────── */}
      <section className="w-full relative z-10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {loading ? (
              <div key="skeletons" className="grid grid-cols-2 md:grid-cols-4">
                {Array(4).fill(0).map((_, i) => (
                  <div key={i} className="flex flex-col items-center p-10 border-r border-white/5 last:border-0 animate-pulse">
                    <div className="w-10 h-10 bg-white/5 mb-5" />
                    <div className="w-20 h-8 bg-white/5 rounded mb-3" />
                    <div className="w-24 h-2.5 bg-white/5 rounded" />
                  </div>
                ))}
              </div>
            ) : (
              <div key="stats" className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 border-y border-white/5">
                <StatCard icon={<Target className="text-accent" size={20} />} value={`${stats?.wins ?? 0}–${stats?.losses ?? 0}`} label="Win / Loss" delay={0} />
                <StatCard icon={<Hash className="text-accent" size={20} />} value={`#${stats?.ranking ?? '??'}`} label="Global TrueSkill" delay={0.08} />
                <StatCard icon={<Activity className="text-accent" size={20} />} value={stats?.opr ?? '—'} label="Offensive Power" delay={0.16} />
                <StatCard icon={<Trophy className="text-accent" size={20} />} value="10+" label="Excellence Awards" delay={0.24} />
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── System Cards ────────────────────────────────────────────── */}
      <section className="w-full py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-white/5">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-accent" />
                <span className="text-accent font-mono text-xs uppercase tracking-[0.4em]">What we do</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none">
                How We<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-sky-400">Compete</span>
              </h2>
            </div>
            <p className="text-white/25 text-sm max-w-xs leading-relaxed font-medium md:text-right">
              What three years of tinkering, failing, and actually figuring it out looks like.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[
              { icon: <Cpu strokeWidth={1.5} />, num: '01', tag: 'BUILD', title: 'Hardware & Design', desc: 'Everything is designed in Fusion 360 and built by hand. We use custom gearing, aluminum framing, and reiterate constantly — sometimes the night before a match.' },
              { icon: <CodeIcon strokeWidth={1.5} />, num: '02', tag: 'CODE', title: 'Autonomous & Control', desc: 'We wrote our own PID controller and odometry from scratch. Autonomous routines are tested until they\'re boring to watch — that\'s how you know they\'re reliable.' },
              { icon: <Users strokeWidth={1.5} />, num: '03', tag: 'STRATEGY', title: 'Scouting & Alliances', desc: "We keep spreadsheets on other teams, watch a lot of matches, and actually think about alliance picks. A bad partner can cost you the whole event." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative bg-primary p-10 md:p-12 hover:bg-surface/50 transition-colors duration-500 overflow-hidden"
              >
                {/* Corner bracket hover */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/0 group-hover:border-accent/60 transition-colors duration-400" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/0 group-hover:border-accent/60 transition-colors duration-400" />

                {/* Top row: icon + num */}
                <div className="flex items-start justify-between mb-12">
                  <div className="p-3.5 bg-white/[0.03] border border-white/8 text-white/30 group-hover:text-accent group-hover:border-accent/25 group-hover:bg-accent/5 transition-all duration-500">
                    {React.cloneElement(s.icon, { size: 26 })}
                  </div>
                  <span className="font-mono text-5xl font-black text-white/[0.04] group-hover:text-accent/10 transition-colors select-none">
                    {s.num}
                  </span>
                </div>

                {/* Tag */}
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-accent/0 group-hover:text-accent/50 border border-accent/0 group-hover:border-accent/20 px-2 py-0.5 inline-block mb-5 transition-all duration-400">
                  {s.tag}
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">{s.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/50 transition-colors duration-500">{s.desc}</p>

                <div className="mt-10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-accent/0 group-hover:text-accent/50 transition-all duration-400">
                  Learn more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="relative w-full py-40 px-8 overflow-hidden z-10">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-accent/40" />
              <span className="text-accent/60 font-mono text-xs uppercase tracking-[0.4em]">Sponsors</span>
              <div className="h-px w-16 bg-accent/40" />
            </div>

            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
              <span className="text-white">Support</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-sky-400">Our Team</span>
            </h2>

            <p className="text-white/35 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              {'VRC is genuinely expensive — registration, parts, travel, they add up fast. If you\'ve got a company and want to support some high school kids doing cool stuff, reach out.'}
            </p>

            <Link
              to="/sponsors"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-accent text-primary font-black text-sm uppercase tracking-widest shadow-[0_0_50px_rgba(0,240,255,0.4)] hover:shadow-[0_0_80px_rgba(0,240,255,0.65)] transition-shadow duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 z-0" />
              <span className="relative z-10 flex items-center gap-4">
                Get in Touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}} />
    </div>
  );
};

export default Home;
