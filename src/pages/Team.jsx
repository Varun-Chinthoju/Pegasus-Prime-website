import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center overflow-hidden">
      {/* Glitch Overlay */}
      <motion.div 
        animate={{ 
          opacity: [0, 0.1, 0, 0.2, 0],
          x: [-10, 10, -5, 5, 0],
          scaleY: [1, 1.1, 0.9, 1.05, 1]
        }}
        transition={{ 
          duration: 0.2,
          repeat: Infinity,
          repeatType: "mirror"
        }}
        className="absolute inset-0 bg-slate-200 pointer-events-none"
      />
      
      {/* Static Bars */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)',
             backgroundSize: '100% 4px'
           }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.8, 1, 0] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 1 }}
        className="relative z-10"
      >
        <h1 className="text-black font-black text-6xl tracking-tighter uppercase italic select-none">
          SYSTEM_ERROR
        </h1>
      </motion.div>

      {/* Random White Flashes */}
      <motion.div
        animate={{
          backgroundColor: ["#fff", "#f8fafc", "#fff"],
          opacity: [1, 0.8, 1]
        }}
        transition={{
          duration: 0.05,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0"
      />
    </div>
  );
};

export default Team;
