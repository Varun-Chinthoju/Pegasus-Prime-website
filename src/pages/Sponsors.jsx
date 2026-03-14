import React from 'react';
import { Heart, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-8 min-h-screen bg-primary">
      <div className="flex flex-col items-center text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Our <span className="text-secondary">Sponsors</span>
        </motion.h1>
        <div className="section-accent"></div>
        <p className="text-slate-400 max-w-2xl mt-8 font-bold text-lg leading-relaxed italic">
          We&apos;re actively looking for sponsors this season. Every bit of support helps.
        </p>
      </div>

      {/* Placeholder message while we find sponsors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center text-center py-20 mb-20 glass-panel rounded-[3.5rem] p-16"
      >
        <div className="text-6xl mb-8">🤝</div>
        <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Looking for Partners</h3>
        <p className="text-slate-400 max-w-xl text-lg leading-relaxed font-medium">
          We don&apos;t have sponsors yet — but if your company wants to support a high school robotics team, we&apos;d love to talk. We compete in California and have placed well at regional events.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-panel rounded-[4rem] p-20 md:p-32 text-center relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-secondary/10"
      >
        <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-12 border border-accent/20 shadow-2xl">
            <Heart className="text-accent" size={48} fill="currentColor" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter uppercase italic">Want to Help?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 font-bold text-xl leading-relaxed italic">
            VRC registration, parts, and travel add up fast. If you or your company wants to support us, shoot us an email — we&apos;re easy to work with and happy to acknowledge you at every event we compete in.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
            <a 
              href="mailto:contact@pegasusprime.com"
              className="inline-flex items-center justify-center gap-3 px-16 py-6 bg-accent hover:bg-accent-hover text-primary font-black rounded-2xl transition-all shadow-2xl uppercase tracking-widest italic text-xl hover:scale-105 active:scale-95"
            >
              <Mail size={20} /> Email Us
            </a>
            <button className="px-16 py-6 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl transition-all border-4 border-white/10 backdrop-blur-md uppercase tracking-widest italic text-xl hover:scale-105 active:scale-95">
              View Packet
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
