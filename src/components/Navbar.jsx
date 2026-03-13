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
    { path: '/news', label: 'News & Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3 group">
              <img src={logo} alt="Pegasus Prime Logo" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none text-secondary">
                  97711V
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-white/80">Pegasus Prime</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-secondary text-primary shadow-lg shadow-secondary/20'
                      : 'hover:text-secondary text-white/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-secondary/10 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-bold ${
                isActive(link.path)
                  ? 'bg-secondary text-primary'
                  : 'text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
