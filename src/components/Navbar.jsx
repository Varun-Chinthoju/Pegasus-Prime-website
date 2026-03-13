import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/robot', label: 'Robot' },
    { path: '/build', label: 'Build' },
    { path: '/code', label: 'Code' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/news', label: 'News' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-primary/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="bg-white p-1 rounded-xl shadow-lg shadow-white/5 transition-transform group-hover:scale-105">
                <img src={logo} alt="97711V" className="h-12 w-12 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white leading-none">
                  PEGASUS <span className="text-secondary">PRIME</span>
                </span>
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-slate-400 mt-1">Team 97711V</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-secondary text-primary shadow-lg shadow-secondary/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl bg-white/5 text-slate-300 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 rounded-2xl text-lg font-bold ${
                  isActive(link.path)
                    ? 'bg-secondary text-primary'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
