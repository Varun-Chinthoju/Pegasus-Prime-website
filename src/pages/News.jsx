import React from 'react';
import { Calendar, MapPin, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import content from '../data/team-content.json';

const News = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6 min-h-screen bg-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* News Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Latest News</h1>
            <div className="h-1 w-16 bg-accent rounded-full"></div>
          </motion.div>
          
          <div className="space-y-8">
            {content.news.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 glass-panel glass-panel-hover rounded-[2rem] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-1.5 h-full bg-accent opacity-50"></div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                  <span className="flex items-center gap-1.5 text-accent"><Calendar size={14} /> {item.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {item.location}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel rounded-[2.5rem] p-10 md:p-14 h-fit lg:sticky lg:top-32"
        >
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 text-white tracking-tight">
            <Mail className="text-accent" size={28} /> 
            Contact Us
          </h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-text-muted ml-1">Name</label>
              <input type="text" className="w-full bg-surface-light/50 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-accent focus:bg-surface-light transition-all placeholder-white/20" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-text-muted ml-1">Email</label>
              <input type="email" className="w-full bg-surface-light/50 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-accent focus:bg-surface-light transition-all placeholder-white/20" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-text-muted ml-1">Message</label>
              <textarea className="w-full bg-surface-light/50 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-accent focus:bg-surface-light transition-all h-32 resize-none placeholder-white/20" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-4 mt-4 bg-accent hover:bg-accent-hover text-primary font-bold rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent/20">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
