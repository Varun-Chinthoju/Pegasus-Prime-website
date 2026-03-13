import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

const Sponsors = () => {
  const sponsors = [
    { name: 'TechCorp Solutions', tier: 'Platinum', description: 'Advanced electronics and sensor systems provider.' },
    { name: 'Industrial Metals Inc.', tier: 'Gold', description: 'Supplying precision-cut aluminum and steel components.' },
    { name: 'Future Engineering', tier: 'Gold', description: 'Supporting STEM education and robotics innovation.' },
    { name: 'Local Bank & Trust', tier: 'Silver', description: 'Proud community supporter of young engineers.' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Sponsors</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          We are incredibly grateful for the support of these organizations. Their contributions make our innovation possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="p-8 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
             <div className="w-full aspect-video bg-slate-800 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-600">LOGO</span>
             </div>
             <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-blue-500/10 text-blue-400 uppercase tracking-widest border border-blue-500/20">
                {sponsor.tier}
             </div>
             <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
             <p className="text-slate-400 text-sm mb-6">{sponsor.description}</p>
             <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold">
                Visit Website <ExternalLink size={14} />
             </button>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center">
        <Heart className="text-pink-500 mb-6 mx-auto animate-pulse" size={48} />
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Become a Sponsor</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
          Support the next generation of engineers and innovators. Your sponsorship directly funds robot components, competition registration fees, and travel expenses.
        </p>
        <button className="px-10 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-xl">
           Download Sponsorship Packet
        </button>
      </div>
    </div>
  );
};

export default Sponsors;
