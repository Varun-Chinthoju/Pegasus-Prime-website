import React from 'react';
import { Calendar, MapPin, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import content from '../data/team-content.json';

const News = () => {
  return (
    <div className="max-w-7xl mx-auto py-32 px-6 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* News Section */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black mb-16 text-white tracking-tight uppercase italic"
          >
            Team <span className="text-secondary">News</span>
          </motion.h1>
          <div className="space-y-12">
            {content.news.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-surface/50 backdrop-blur-sm rounded-[2.5rem] border border-white/5 hover:border-secondary/20 transition-all duration-300 group relative"
              >
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">
                  <span className="flex items-center gap-2 text-secondary"><Calendar size={14} /> {item.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={14} /> {item.location}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-surface rounded-[3.5rem] p-12 md:p-16 border border-white/5 h-fit lg:sticky lg:top-32 shadow-2xl"
        >
          <h2 className="text-3xl font-black mb-12 flex items-center gap-4 text-white tracking-tight uppercase italic">
            <Mail className="text-secondary" size={32} /> 
            Contact Us
          </h2>
          <form className="space-y-8">
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Name</label>
              <input type="text" className="w-full bg-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-all font-medium" placeholder="Full Name" />
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email</label>
              <input type="email" className="w-full bg-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-all font-medium" placeholder="email@address.com" />
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Message</label>
              <textarea className="w-full bg-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-all h-40 font-medium" placeholder="Your message..."></textarea>
            </div>
            <button className="w-full py-5 bg-secondary hover:bg-white text-primary font-black rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest italic shadow-xl shadow-secondary/10">
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
