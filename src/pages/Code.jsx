import React, { useState, useEffect } from 'react';

const Code = () => {
  const [text, setText] = useState('');
  const fullCode = `// Team 97711V - Autonomous Routine
void autonomous() {
  drive.moveForward(24, 80); // Move 24 inches at 80% power
  intake.spin(100);          // Start intake
  arm.liftToPosition(450);   // Lift arm to score height
  drive.turnToAngle(90);     // Precision turn to goal
  arm.release();             // Score!
  
  // Return to starting zone
  drive.moveForward(-24, 100);
  intake.stop();
}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <span className="p-2 bg-blue-600 rounded-lg"><span className="text-sm font-mono tracking-tighter">&lt;/&gt;</span></span>
        Programming Showcase
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Terminal Window */}
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-slate-400 font-mono">autonomous.cpp — pegasus-os</div>
            </div>
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto min-h-[400px]">
              <pre className="text-blue-400">
                <code>{text}<span className="animate-pulse">|</span></code>
              </pre>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold mb-4">Software Specs</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-slate-400">Language:</span>
                <span className="text-blue-400 font-mono">C++ / VEXcode</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Algorithm:</span>
                <span className="text-blue-400 font-mono">PID Control</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Precision:</span>
                <span className="text-blue-400 font-mono">+/- 0.5 inches</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold mb-4">Our Approach</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We leverage odometry and sensor fusion (Inertial sensors + Optical sensors) to ensure our autonomous routines are consistent across different field surfaces and battery levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
