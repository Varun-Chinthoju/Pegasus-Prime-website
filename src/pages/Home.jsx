import React from 'react';
import { ArrowRight, Users, Cpu, Code as CodeIcon, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 flex flex-col items-center text-center bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px]"></div>
        </div>
        
        <div className="z-10 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Pegasus Prime
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-10 mx-auto">
            Team 97711V: Engineering the future through innovation, collaboration, and robotics excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/robot" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center group shadow-lg shadow-blue-500/20">
              Explore Our Robot <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/sponsors" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-black/20">
              Support Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-slate-900/50 backdrop-blur-sm border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">97711V</div>
            <div className="text-slate-400 text-sm uppercase tracking-widest">Team Number</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-slate-400 text-sm uppercase tracking-widest">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">5</div>
            <div className="text-slate-400 text-sm uppercase tracking-widest">Core Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">High</div>
            <div className="text-slate-400 text-sm uppercase tracking-widest">School Level</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-2 group">
            <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Cpu className="text-blue-500" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Mechanical Engineering</h3>
            <p className="text-slate-400 leading-relaxed">
              We design and build robust, efficient robots using advanced VEX components and custom modifications to excel in competition.
            </p>
          </div>
          
          <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all hover:-translate-y-2 group">
            <div className="p-3 bg-purple-500/10 rounded-lg w-fit mb-6 group-hover:bg-purple-500/20 transition-colors">
              <CodeIcon className="text-purple-500" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Software Development</h3>
            <p className="text-slate-400 leading-relaxed">
              Our codebases feature precise PID controllers, pathfinding algorithms, and reliable autonomous routines for consistent scoring.
            </p>
          </div>
          
          <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-all hover:-translate-y-2 group">
            <div className="p-3 bg-green-500/10 rounded-lg w-fit mb-6 group-hover:bg-green-500/20 transition-colors">
              <Users className="text-green-500" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Collaboration</h3>
            <p className="text-slate-400 leading-relaxed">
              Teamwork is our foundation. We practice effective communication and project management to ensure every member contributes their best.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
