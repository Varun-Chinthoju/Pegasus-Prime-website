import React from 'react';
import { Ruler, Zap, Activity, Info } from 'lucide-react';

const Robot = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Robot Showcase</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Meet Pegasus, our latest competition robot designed for speed, reliability, and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 relative group">
          {/* Mock Robot Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-blue-500 font-bold text-4xl opacity-20">PEGASUS V2</div>
          </div>
          <div className="absolute bottom-8 right-8 p-4 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm font-bold">Model: High Stakes Edition</p>
          </div>
        </div>

        <div className="space-y-8">
           <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Technical Specifications</h2>
              <p className="text-slate-400 mb-6">
                Engineered for maximum efficiency and power, Pegasus features a balanced drivetrain and a high-performance intake.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Zap size={20} /></div>
                <div>
                   <p className="text-xs text-slate-500 uppercase tracking-widest">Drivetrain</p>
                   <p className="font-bold">600 RPM Speed</p>
                </div>
              </div>
              
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-4">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500"><Activity size={20} /></div>
                <div>
                   <p className="text-xs text-slate-500 uppercase tracking-widest">Motors</p>
                   <p className="font-bold">8 High-Torque</p>
                </div>
              </div>
              
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-4">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Ruler size={20} /></div>
                <div>
                   <p className="text-xs text-slate-500 uppercase tracking-widest">Size</p>
                   <p className="font-bold">18" x 18" x 18"</p>
                </div>
              </div>
              
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-4">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><Info size={20} /></div>
                <div>
                   <p className="text-xs text-slate-500 uppercase tracking-widest">Weight</p>
                   <p className="font-bold">14.5 lbs</p>
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800">
         <h2 className="text-2xl font-bold mb-8">Performance Data</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[95%]"></div>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Autonomous Reliability</span>
                  <span className="font-bold text-blue-400">95%</span>
               </div>
            </div>
            
            <div className="space-y-4">
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[88%]"></div>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Intake Speed</span>
                  <span className="font-bold text-purple-400">88%</span>
               </div>
            </div>
            
            <div className="space-y-4">
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[92%]"></div>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Driver Precision</span>
                  <span className="font-bold text-green-400">92%</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Robot;
