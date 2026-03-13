import React from 'react';
import { Calendar, MapPin, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import content from '../data/team-content.json';

const News = () => {
  return (
    <div className="max-w-7xl mx-auto py-32 px-8 min-h-screen bg-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* News Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-20"
          >
            <h1 className="section-title">Field <span className="text-secondary">Updates</span></h1>
            <div className="section-accent"></div>
          </motion.div>
          
          <div className="space-y-12">
            {content.news.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-12 bg-surface rounded-[3rem] border border-white/5 hover:border-secondary/20 transition-all duration-500 group relative shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-3 h-full bg-secondary rounded-r-[3rem] opacity-20 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">
                  <span className="flex items-center gap-2 text-secondary italic"><Calendar size={16} /> {item.date}</span>
                  <span className="flex items-center gap-2 italic"><MapPin size={16} /> {item.location}</span>
                </div>
                <h3 className="text-3xl font-black mb-4 text-white italic tracking-tighter uppercase leading-tight group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm font-bold leading-relaxed italic">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-surface rounded-[4rem] p-12 md:p-20 border border-white/5 h-fit lg:sticky lg:top-40 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <h2 className="text-4xl font-black mb-16 flex items-center gap-6 text-white tracking-tighter uppercase italic">
            <span className="p-4 bg-primary rounded-2xl border border-secondary/20 text-secondary"><Mail size={32} /></span> 
            Secure Link
          </h2>
          <form className="space-y-10 relative z-10">
            <div className="space-y-4">
              <label className="block text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 ml-2 italic">Protocol Identifier</label>
              <input type="text" className="w-full bg-primary border-2 border-white/5 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-secondary transition-all font-bold italic shadow-inner" placeholder="FULL_NAME" />
            </div>
            <div className="space-y-4">
              <label className="block text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 ml-2 italic">Comm Frequency</label>
              <input type="email" className="w-full bg-primary border-2 border-white/5 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-secondary transition-all font-bold italic shadow-inner" placeholder="EMAIL_ADDRESS" />
            </div>
            <div className="space-y-4">
              <label className="block text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 ml-2 italic">Data Payload</label>
              <textarea className="w-full bg-primary border-2 border-white/5 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-secondary transition-all h-48 font-bold italic shadow-inner" placeholder="TRANSMIT_MESSAGE"></textarea>
            </div>
            <button className="w-full py-6 bg-secondary hover:bg-white text-primary font-black rounded-[1.5rem] transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em] italic text-lg shadow-2xl shadow-secondary/20">
              Execute Uplink <Send size={24} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
