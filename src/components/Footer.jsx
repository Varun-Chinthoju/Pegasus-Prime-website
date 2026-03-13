import React from 'react';
import { Mail, Instagram, Youtube, Github } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                <img src={logo} alt="Pegasus Logo" className="h-10 w-10 mix-blend-screen" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Pegasus Prime
              </h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Team 97711V is dedicated to pushing the boundaries of robotics through precision engineering, custom software architecture, and strategic innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/robot" className="hover:text-accent transition-colors">Our Robot</a></li>
              <li><a href="/build" className="hover:text-accent transition-colors">Build Process</a></li>
              <li><a href="/code" className="hover:text-accent transition-colors">Software</a></li>
              <li><a href="/sponsors" className="hover:text-accent transition-colors">Sponsors</a></li>
              <li><a href="/news" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, label: 'Instagram' },
                { icon: <Youtube size={18} />, label: 'YouTube' },
                { icon: <Github size={18} />, label: 'GitHub' },
                { icon: <Mail size={18} />, label: 'Email' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="p-2.5 bg-white/5 rounded-lg border border-white/10 text-text-muted hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>
            &copy; {new Date().getFullYear()} Team 97711V Pegasus Prime.
          </p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
