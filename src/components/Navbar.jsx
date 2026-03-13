import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/team', label: 'Team' },
    { path: '/robot', label: 'Robot' },
    { path: '/build', label: 'Build' },
    { path: '/code', label: 'Software' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/news', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-primary/90 backdrop-blur-2xl py-4 border-white/10 shadow-2xl' 
          : 'bg-primary py-6 border-transparent'
      }`}
      role="navigation" 
      aria-label="Main Navigation"
    >
      {/* Skip to Main Content for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-primary px-4 py-2 rounded-lg font-bold z-[100]">
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl p-1" aria-label="Pegasus Prime Home">
              <div className="p-2 bg-white rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-accent/30">
                <img src={logo} alt="" className="h-10 w-10 object-contain mix-blend-multiply" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none uppercase italic">
                  Pegasus <span className="text-accent">Prime</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500 mt-1">
                  Team 97711V
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  className={`px-6 py-2 rounded-xl text-sm font-black uppercase tracking-widest italic transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent border-2 ${
                    isActive(link.path)
                      ? 'bg-accent border-accent text-primary shadow-[0_0_20px_rgba(14,165,233,0.4)]'
                      : 'text-slate-400 border-transparent hover:text-white hover:bg-white/5'
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
              className="p-3 rounded-xl bg-white/5 text-secondary hover:text-white border border-white/10 transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-primary border-t border-white/10 absolute w-full shadow-2xl"
        >
          <div className="px-6 py-10 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-8 py-5 rounded-2xl text-xl font-black uppercase italic tracking-widest transition-all ${
                  isActive(link.path)
                    ? 'bg-accent text-primary'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
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
