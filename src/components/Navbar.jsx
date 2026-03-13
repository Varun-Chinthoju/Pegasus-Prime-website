import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                97711V
              </span>
              <span className="text-xl font-semibold hidden sm:block">Pegasus Prime</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link to="/robot" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Robot</Link>
              <Link to="/build" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Build</Link>
              <Link to="/code" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Code</Link>
              <Link to="/sponsors" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sponsors</Link>
              <Link to="/news" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">News & Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">Home</Link>
            <Link to="/robot" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">Robot</Link>
            <Link to="/build" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">Build</Link>
            <Link to="/code" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">Code</Link>
            <Link to="/sponsors" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">Sponsors</Link>
            <Link to="/news" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">News & Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
