import React from 'react';
import { Mail, Instagram, Youtube, Github, Shield } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-20 border-t-8 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Pegasus Logo" className="h-16 w-16 grayscale brightness-200" />
              <div>
                <h3 className="text-3xl font-black italic tracking-tighter leading-none text-secondary">
                  PEGASUS <span className="text-white">PRIME</span>
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-1">Strategic Robotics Unit</p>
              </div>
            </div>
            <p className="text-white/50 text-sm font-medium leading-relaxed max-w-xs">
              Pushing the boundaries of autonomous robotics and competitive engineering through the Pegasus Protocol.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-8 italic">Navigation</h4>
            <ul className="grid grid-cols-2 gap-4 text-sm font-bold uppercase tracking-tighter italic">
              <li><a href="/" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="/robot" className="hover:text-secondary transition-colors">Robot</a></li>
              <li><a href="/build" className="hover:text-secondary transition-colors">Build</a></li>
              <li><a href="/code" className="hover:text-secondary transition-colors">Code</a></li>
              <li><a href="/sponsors" className="hover:text-secondary transition-colors">Sponsors</a></li>
              <li><a href="/news" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-8 italic">Signal Frequency</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Instagram size={20} />, label: 'Instagram', color: 'hover:bg-pink-600' },
                { icon: <Youtube size={20} />, label: 'YouTube', color: 'hover:bg-red-600' },
                { icon: <Github size={20} />, label: 'GitHub', color: 'hover:bg-slate-700' },
                { icon: <Mail size={20} />, label: 'Email', color: 'hover:bg-secondary hover:text-primary' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className={`p-4 bg-white/5 rounded-2xl transition-all duration-300 ${social.color} border border-white/10`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-2 text-white/20 text-[10px] font-black uppercase tracking-widest italic">
               <Shield size={12} /> Encrypted Connection Established
            </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Team 97711V Pegasus Prime. Deployment Active.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20 italic">
             <span className="hover:text-white cursor-help transition-colors">Privacy Protocol</span>
             <span className="hover:text-white cursor-help transition-colors">Terms of Engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
