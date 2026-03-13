import React from 'react';
import { Mail, Instagram, Youtube, Github, ShieldCheck, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Instagram size={20} />, label: 'Instagram', href: 'https://instagram.com/pegasusprime97711v' },
    { icon: <Youtube size={20} />, label: 'YouTube', href: 'https://youtube.com/@pegasusprime' },
    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/pegasusprime' },
    { icon: <Mail size={20} />, label: 'Email', href: 'mailto:contact@pegasusprime.com' }
  ];

  return (
    <footer className="bg-primary border-t border-white/10 pt-20 pb-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white rounded-xl shadow-lg shadow-accent/10">
                <img src={logo} alt="" className="h-10 w-10 mix-blend-multiply" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-black italic tracking-tighter text-white uppercase">
                  Pegasus <span className="text-accent">Prime</span>
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted mt-1">Robotics Excellence</p>
              </div>
            </div>
            <p className="text-text-muted text-base leading-relaxed max-w-sm font-medium">
              Pushing the boundaries of VEX robotics through precision engineering, custom software architecture, and a relentless commitment to innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/10 text-text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-widest text-white mb-8 italic">Quick Navigation</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li><a href="/" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 group"><Globe size={14} className="group-hover:text-accent transition-colors" /> Home</a></li>
              <li><a href="/robot" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 group"><Globe size={14} className="group-hover:text-accent transition-colors" /> Our Robot</a></li>
              <li><a href="/build" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 group"><Globe size={14} className="group-hover:text-accent transition-colors" /> Build Process</a></li>
              <li><a href="/code" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 group"><Globe size={14} className="group-hover:text-accent transition-colors" /> Software Stack</a></li>
              <li><a href="/sponsors" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 group"><Globe size={14} className="group-hover:text-accent transition-colors" /> Sponsors</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 bg-surface/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/5 h-fit">
            <h4 className="text-sm font-black uppercase tracking-widest text-white mb-6 italic">Support Mission</h4>
            <p className="text-text-muted text-sm font-medium mb-8 leading-relaxed">
              Join us in engineering the future. Your support fuels our competition travel, hardware prototypes, and STEM outreach.
            </p>
            <a 
              href="/sponsors" 
              className="inline-flex items-center justify-center w-full py-4 bg-accent hover:bg-white text-primary font-black rounded-2xl transition-all uppercase tracking-widest italic shadow-lg shadow-accent/20"
            >
              Partner with us
            </a>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.25em] text-text-muted">
          <p>
            &copy; {currentYear} Team 97711V Pegasus Prime. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/20">
             <ShieldCheck size={14} /> Systems Encrypted & Verified
          </div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
