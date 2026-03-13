import React from 'react';
import { Mail, Instagram, Youtube, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">
              97711V Pegasus Prime
            </h3>
            <p className="text-slate-400 text-sm">
              Pushing the boundaries of robotics and innovation in the VEX Robotics Competition.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/robot" className="hover:text-blue-400 transition-colors">Robot</a></li>
              <li><a href="/sponsors" className="hover:text-blue-400 transition-colors">Sponsors</a></li>
              <li><a href="/news" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-red-600 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:contact@pegasusprime.com" className="p-2 bg-slate-800 rounded-full hover:bg-green-600 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Team 97711V Pegasus Prime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
