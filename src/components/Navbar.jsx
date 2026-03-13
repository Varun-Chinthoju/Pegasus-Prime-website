import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/robot', label: 'Robot' },
    { path: '/build', label: 'Build' },
    { path: '/code', label: 'Software' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/news', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="glass-panel sticky top-0 z-50 rounded-none border-x-0 border-t-0 border-b border-white/10" role="navigation" aria-label="Main Navigation">
      {/* Skip to Main Content for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-primary px-4 py-2 rounded-lg font-bold z-[100]">
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl p-1" aria-label="Pegasus Prime Home">
              <div className="p-1.5 bg-white rounded-lg border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                <img src={logo} alt="" className="h-8 w-8 object-contain mix-blend-multiply" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none uppercase italic">
                  Pegasus <span className="text-accent">Prime</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-text-muted mt-1">
                  Team 97711V
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  className={`px-5 py-2 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive(link.path)
                      ? 'bg-accent text-primary shadow-[0_0_20px_rgba(14,165,233,0.4)]'
                      : 'text-text-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  <motion.span whileHover={{ y: -1 }} className="inline-block">
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-white/5 text-text-muted hover:text-white border border-white/10 transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-surface/95 backdrop-blur-2xl border-t border-white/10 absolute w-full shadow-2xl"
        >
          <div className="px-6 py-8 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 rounded-2xl text-lg font-black uppercase italic tracking-widest transition-all ${
                  isActive(link.path)
                    ? 'bg-accent text-primary'
                    : 'text-text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
