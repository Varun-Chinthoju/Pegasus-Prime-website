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
    <nav className="bg-primary/95 backdrop-blur-xl border-b-2 border-white/5 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-6 group">
              <div className="bg-white p-2 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform group-hover:scale-110">
                <img src={logo} alt="97711V" className="h-12 w-12 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white leading-none italic">
                  PEGASUS <span className="text-secondary">PRIME</span>
                </span>
                <span className="text-[11px] font-black tracking-[0.4em] uppercase text-slate-500 mt-1.5">Elite Robotics Unit</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] italic transition-all duration-300 border-2 ${
                    isActive(link.path)
                      ? 'bg-secondary border-secondary text-primary shadow-[0_0_25px_rgba(245,158,11,0.4)]'
                      : 'text-slate-400 border-transparent hover:text-white hover:border-white/10 hover:bg-white/5'
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
              className="p-4 rounded-2xl bg-white/5 text-secondary hover:text-white transition-colors border border-white/10"
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface border-t-2 border-white/5 animate-in slide-in-from-top duration-500">
          <div className="px-8 py-12 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-8 py-5 rounded-2xl text-xl font-black uppercase tracking-widest italic transition-all ${
                  isActive(link.path)
                    ? 'bg-secondary text-primary'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
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
