import React from 'react';
import { Calendar, MapPin, Send, Mail, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import content from '../data/team-content.json';

const News = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* News Section */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-black mb-12 text-primary italic uppercase tracking-tighter"
          >
            Tactical <span className="text-secondary">Updates</span>
          </motion.h1>
          <div className="space-y-10">
            {content.news.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-primary/5 hover:shadow-accent/5 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-secondary"></div>
                <div className="flex items-center gap-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                  <span className="flex items-center gap-2 text-accent"><Calendar size={14} /> {item.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={14} /> {item.location}</span>
                </div>
                <h3 className="text-2xl font-black mb-3 text-primary italic uppercase tracking-tighter group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-primary rounded-[3.5rem] p-10 md:p-16 text-white h-fit lg:sticky lg:top-28 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Radio size={120} className="animate-pulse" />
          </div>
          <h2 className="text-3xl font-black mb-10 flex items-center gap-4 italic uppercase tracking-tighter">
            <span className="p-3 bg-white/10 rounded-2xl"><Mail className="text-secondary" /></span> 
            Secure Comms
          </h2>
          <form className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest text-white/40">Identifier</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-bold placeholder-white/10" placeholder="Agent Name" />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest text-white/40">Frequency (Email)</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-bold placeholder-white/10" placeholder="comm-link@domain.com" />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest text-white/40">Transmission Packet</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all h-40 font-bold placeholder-white/10" placeholder="Enter message payload..."></textarea>
            </div>
            <button className="w-full py-5 bg-secondary hover:bg-white text-primary font-black rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-tighter italic text-lg shadow-xl shadow-secondary/10">
              Execute Send <Send size={20} />
            </button>
          </form>
          
          <div className="mt-12 pt-8 border-t border-white/10">
             <h4 className="font-black text-xs uppercase tracking-[0.3em] text-white/30 mb-2 italic">Operation HQ</h4>
             <p className="text-white font-black italic text-xl uppercase tracking-tighter">Silicon Valley, CA</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
