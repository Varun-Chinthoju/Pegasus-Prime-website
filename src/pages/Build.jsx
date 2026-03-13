import React from 'react';
import { Layers, Settings, Maximize } from 'lucide-react';

const Build = () => {
  return (
    <div className="relative min-h-screen">
      {/* VEX Build Plate Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 12px 12px, #475569 2px, transparent 0)',
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="p-2 bg-slate-800 rounded-lg"><Settings className="text-blue-400" /></span>
          Mechanical Design
        </h1>
        <p className="text-slate-400 mb-12 max-w-2xl">
          From initial CAD sketches to the final competition-ready machine, explore our iterative design process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden group">
              {/* Mock CAD Placeholder */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" 
                   style={{ 
                     backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)',
                     backgroundSize: '20px 20px' 
                   }}>
              </div>
              <Maximize className="text-slate-500 group-hover:scale-110 transition-transform" size={48} />
              <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded text-xs text-blue-400 font-mono">
                CAD_V3_FINAL.step
              </div>
            </div>
            
            <h2 className="text-2xl font-bold">Iterative Design Process</h2>
            <p className="text-slate-400">
              We utilize Fusion 360 for our CAD designs, allowing us to simulate movements and verify tolerances before a single screw is tightened. Our 6-wheel tank drive chassis provides the perfect balance of speed and stability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg"><Layers className="text-blue-500" /></div>
              <div>
                <h3 className="text-lg font-bold mb-1">Chassis Architecture</h3>
                <p className="text-slate-400 text-sm">6-motor drivetrain with 3.25" wheels and a 1:1.66 gear ratio for high-speed mobility.</p>
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg"><Settings className="text-purple-500" /></div>
              <div>
                <h3 className="text-lg font-bold mb-1">Scoring Mechanism</h3>
                <p className="text-slate-400 text-sm">Low-friction intake system integrated with a high-torque 4-bar lift for efficient scoring.</p>
              </div>
            </div>
            
            <div className="p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg"><Layers className="text-green-500" /></div>
              <div>
                <h3 className="text-lg font-bold mb-1">Weight Optimization</h3>
                <p className="text-slate-400 text-sm">Extensive use of aluminum C-channels and poly-carbonate to keep the robot agile.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Build Journey Timeline */}
        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
          <h2 className="text-2xl font-bold mb-8 text-center">Development Roadmap</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
             <div className="flex-1 text-center md:text-left">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">1</div>
                <h4 className="font-bold mb-2">Prototyping</h4>
                <p className="text-slate-400 text-sm">Testing intake and lift ratios using cardboard and scrap metal.</p>
             </div>
             <div className="flex-1 text-center md:text-left">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">2</div>
                <h4 className="font-bold mb-2">Chassis Build</h4>
                <p className="text-slate-400 text-sm">Assembling the drive pod and ensuring perfect alignment.</p>
             </div>
             <div className="flex-1 text-center md:text-left">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">3</div>
                <h4 className="font-bold mb-2">Integration</h4>
                <p className="text-slate-400 text-sm">Wiring the brain and mounting the scoring mechanisms.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
