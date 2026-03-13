import React from 'react';
import { Calendar, MapPin, Send, Mail } from 'lucide-react';

const News = () => {
  const newsItems = [
    { title: 'Regional Champions!', date: 'Feb 15, 2026', location: 'San Jose, CA', description: 'Team 97711V took home the Excellence Award and Tournament Champions at the regional qualifier.' },
    { title: 'Design Reveal', date: 'Jan 10, 2026', location: 'Team Workshop', description: 'We officially revealed our V2 chassis design featuring a high-speed 6-motor drive.' },
    { title: 'Sponsor Appreciation', date: 'Dec 20, 2025', location: 'Virtual', description: 'Huge thanks to our sponsors for supporting us throughout the build season.' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* News Section */}
        <div>
          <h1 className="text-4xl font-bold mb-8">News & Updates</h1>
          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <div key={index} className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 h-fit lg:sticky lg:top-24">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Mail className="text-blue-500" /> Get In Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
              <textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-32" placeholder="Tell us about your sponsorship inquiry or just say hi!"></textarea>
            </div>
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-slate-800">
             <h4 className="font-bold mb-2">Based in</h4>
             <p className="text-slate-400 text-sm">Silicon Valley, California</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
