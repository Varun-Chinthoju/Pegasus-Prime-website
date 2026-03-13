import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Settings, Code2, Database, ShieldCheck } from 'lucide-react';

const Code = () => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isPegasusMode, setIsPegasusMode] = useState(false);
  const [history, setHistory] = useState([]);
  const scrollRef = useRef(null);
  const hasInitialized = useRef(false);

  const PEGASUS_ASCII = useMemo(() => String.raw`
__________                                                 __________        .__                
\______   \ ____   _________    ________ __  ______        \______   \_______|__| _____   ____  
 |     ___// __ \ / ___\__  \  /  ___/  |  \/  ___/  ______ |     ___/\_  __ \  |/     \_/ __ \ 
 |    |   \  ___// /_/  > __ \_\___ \|  |  /\___ \  /_____/ |    |     |  | \/  |  Y Y  \  ___/ 
 |____|    \___  >___  (____  /____  >____//____  >         |____|     |__|  |__|__|_|  /\\___  >
               \/_____/     \/     \/           \/                                    \/     \/ 
                            __________________________  ____ ________   ____                    
                           /   __   \______  \______  \/_   /_   \   \ /   /                    
                           \____    /   /    /   /    / |   ||   |\\   Y   /                     
                              /    /   /    /   /    /  |   ||   | \     /                      
                             /____/   /____/   /____/   |___||___|  \___/                       
                                                                                                
....................................................................................................
....................................................................................................
..............................................................:---:::...............................
....:**==:......:##+-....................................:--===+===++++=#:..........................
.....:****+=+-...:*###**-..............................=+=:+**+*#+%%%#+##==:........................
.....:::=+++=-::==-:+*##***+:.........................==+*++**++*===#%####+=...-....................
.....-***+=++++=--==++=+*******+=:..................--=++**++=--:-*####*:-#*=-:-....................
.......:*++++=--=*#+=+***===**+####++-.............-++**#=*+-.:*#@*=:.*#*=-+++=.....................
.......:-::=++===--===+*#******=-+**##*++-:........==++#*#==-+%#%%*+=:-**+#+:.......................
........=**++++====+++**##*+***##*#+==++*#*++=-...==*+#+*=+=*#**%@+++==+*+=--.......................
...........-+***+=====++*#%#++*###*##%%##**=+###+.=***##**++%***%@%*####%#==:=......................
............++++==--::=+*##%#########++#%#==*#**#-.+*###*#+##=++*@@@%##%%%%++--.....................
.............:--=+**********#%%######**#%%###+*##*+=+#**##***-*==%%%%*.:=###*=+:....................
................=+++++====++++*#%##########%%#++##**#**+*#**#+#=--%%##=...####*:....................
...................:***+==-=+****#%##*=*###%%%%+-+##*:+#**#*#++=-:-#%+*-...=+=:.....................
.....................-=+***++++***####*++*#*##%%#==##*-:++%#%%#*+=-=**+=-...........................
........................=****+*+**++*##%%##%#%%%%%*=*##**###*%#*+==:+++=:=..........................
...........................++*****+=+***###%#**##%%%#=*#%+*###%*##+-.-*+-.-.........................
.............................:=#**+*+**+++**#######%%%##**+*###@##%#+=.=*#+=-.......................
..................................++**++*+++++=###%#%%%#*-+##%=--:::-==+%#*+-.......................
...................................:--++++=***++**####%%#*##+=+*###*+=::=%%*+.......................
..........................................++++*++******-*#***#+==+*+-=*#+=*#*=......................
............................................:=+==+****.=++=*#+++*::*+*+*%**##=:.....................
..............-=+++*++-............................::+++=-*#*=%**=-*+%#*%%**++-.....................
..........--=--=+*#%#++*+=:.:-==----===-----::::-=+++##*+**%*=###**###*+%%#**=-......=++=:..........
........=*+-:+#+#%%==+###**=+*#%%%#*=::--==#++===-#*+=*##%###+###**##%+*#*%##*+=-:-*%*+=*=:.........
........+==##++%#=.....=###%#+===-..-#*-..:#-::::.=#**###%##%#*+*#**=*###=-:::-=+**%%%##@#=.........
......:++*##**##:......:+*%+++##-+%*+==%*--*=::::::+%*##*+*%%##%%#######+==++**#####*==#%*=-........
.....:++###**#*........++#++#+====-=**++%*#*#*#**###**##**#%#%%%#@#%**+*####*%%#*+:....-*#*-=.......
.....+*#***+#+-........+##*+#*%*++***#=*%%*#*%#######*++*%%%##%#***####*#@%#**=.........=*#*:=......
....-*##=*+=#=.........+*#*+####**####=#%%###*@#####%%%%##***##%#*#%%##%@@@%%#*=-........-*#*--.....
....+*#=-*-+#-.........+*%#+*##****##**##%%###@@%##########+++*##%#**##%%%%#*+*#*++-......=+**=:....
....+##-:*++*-..........**%**+##*#%*+*%%*#%#####%%%#########*+=+=......:=+**####%%%#=+:...:+*%*=:...
....==*==**+:...........:+#%%%#+++*#%%#*#@@@@@@%+==*+====---:.................-=%#*##+=....-*###:...
.....-=++***.............=#*##*****+##+%@@@@@%##-.............................:+####+-......+#*+....
.....--*+=+*.............=*%#%#++:-**+@@@@%%%%*=.............................=+##*=.......-#%#+=....
.....:=+++:=............=+###*===*#**%%%%%%%#*=............................:+##*+-........-###*-....
......=+#*=............++*%#++****+-#%%#%#%#*-............................:++**=...........+#=-.....
......-+=**-.........-=*##++*##*=..+*%=##%*+:...........................+=###+=.............:+......
.......-+=-+-......-+*%%####*=....=+#*###+-.............................+###+:......................
........:++:.....-+*++*#%#-......=#%%%#*-..........................=*=**#*=:........................
..........++=....-***#*#=......:#*###%+...........................:##%*+=...........................
............=+:...:*##%*=:.....-######=:..........................=#*+=.............................
..............-:....-*#*+=......=###%##+==........................--:...............................
.....................-*##=+.........+%#%#*=+-.......................................................
......................:*##+=:.........:+*###++=:....................................................
........................+*#+=:...........:+**#*++=..................................................
.........................+*#++:.............-###%#+=................................................`,[]);

  const MOCK_FILES = useMemo(() => ({
    'autonomous.cpp': `// Team 97711V - High Stakes Autonomous
#include "nexus_core.lib"

void autonomous() {
    Nexus::Chassis drive;
    Nexus::Intake intake;
    
    // Deploy sequence
    drive.move(24, 80); 
    intake.spin(100);
    
    // Scoring logic
    if(sensor.detectRing()) {
        arm.lift(HIGH_STAKE);
        arm.release();
    }
}`,
    'drive_subsystem.h': `// Cybercore Drive Architecture
class DriveSubsystem : public Cybercore::Module {
    private:
        MotorGroup leftMotors;
        MotorGroup rightMotors;
        InertialSensor gyro;
        
    public:
        void setVelocity(int v);
        void turnToAngle(float angle);
        float getHeading();
};`,
    'nexus_core.lib': `[BINARY DATA] Nexus Motion Profiling v2.4.1
- PID Control Engine: ENABLED
- Odometry Module: ACTIVE
- Multithreading: STABLE
- Error Correction: 0.002% tolerance`,
    'config.yaml': `robot:
  id: 97711V
  name: Pegasus
  drivetrain:
    motors: 6
    ratio: 1.66
    wheels: 3.25in
  auton:
    default: "right_side_rush"
    delay: 0ms`
  }), []);

  const HELP_TEXT = `Available commands:
  help      - Display this help message
  nexus     - Learn about our custom motion control library
  cybercore - Learn about our foundational architecture
  pegasus   - Deploy Pegasus Core CLI & Visualize Emblem
  ls        - List files in current directory
  cat <file>- Read the contents of a file
  pwd       - Print working directory
  whoami    - Display current user identity
  date      - Display current system date
  uname     - Print system information
  clear     - Clear the terminal screen`;

  const handleCommand = useCallback(async (cmd) => {
    if (isTyping) return;
    
    const parts = cmd.trim().split(/\s+/);
    const primaryCmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    if (primaryCmd === 'clear') {
      setHistory([]);
      return;
    }

    setHistory(prev => [...prev, { type: 'input', text: cmd }]);

    if (primaryCmd === '') return;

    let fullResponse = '';
    const commands = {
      help: () => HELP_TEXT,
      nexus: () => `Nexus is our proprietary motion control library.
It enables precise motor movements using advanced PID loops, motion profiling, 
and real-time sensor fusion to ensure absolute consistency during autonomous routines.`,
      cybercore: () => `Cybercore is our foundational class architecture for the Nexus system.
It provides the core abstraction layer for motor control, sensor integration, 
and task scheduling, allowing for a robust and modular codebase.`,
      pegasus: () => {
        setIsPegasusMode(true);
        return PEGASUS_ASCII;
      },
      ls: () => Object.keys(MOCK_FILES).join('  '),
      whoami: () => `team_97711v@pegasus-prime`,
      pwd: () => `/users/pegasus/97711V/src`,
      date: () => new Date().toString(),
      uname: () => `Pegasus-OS 2.4.1-STABLE Darwin x86_64`,
      cat: (args) => {
        if (!args || args.length === 0) return 'cat: usage: cat <filename>';
        const fileName = args[0];
        return MOCK_FILES[fileName] || `cat: ${fileName}: No such file or directory`;
      }
    };

    if (commands[primaryCmd]) {
      fullResponse = commands[primaryCmd](args);
    } else {
      fullResponse = `zsh: command not found: ${primaryCmd}`;
    }

    const lines = fullResponse.split('\n');
    setIsTyping(true);
    setHistory(prev => [...prev, { type: 'output', text: '' }]);

    let currentText = '';
    for (let i = 0; i < lines.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 40));
      currentText += lines[i] + (i < lines.length - 1 ? '\n' : '');
      
      setHistory(prev => {
        const newHistory = [...prev];
        const lastEntry = newHistory[newHistory.length - 1];
        if (lastEntry && lastEntry.type === 'output') {
          newHistory[newHistory.length - 1] = { ...lastEntry, text: currentText };
        }
        return newHistory;
      });
    }
    
    setIsTyping(false);
  }, [isTyping, HELP_TEXT, PEGASUS_ASCII, MOCK_FILES]);

  useEffect(() => {
    if (!hasInitialized.current) {
      const timeout = setTimeout(() => {
        handleCommand('pegasus');
      }, 0);
      hasInitialized.current = true;
      return () => clearTimeout(timeout);
    }
  }, [handleCommand]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Pegasus theme colors
  const terminalBg = isPegasusMode ? 'bg-[#020617]' : 'bg-surface/90';
  const promptColor = isPegasusMode ? 'text-accent' : 'text-accent';
  const outputColor = isPegasusMode ? 'text-cyan-400' : 'text-white/70';
  const inputColor = isPegasusMode ? 'text-white' : 'text-white';

  return (
    <div className="max-w-7xl mx-auto py-24 px-8 min-h-screen bg-primary">
      <div className="flex flex-col items-center text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div className="p-4 bg-surface-light rounded-[2rem] text-accent border border-accent/20 mb-8 shadow-2xl">
            <Terminal size={48} />
          </div>
          <h1 className="section-title">
            Development <span className="text-secondary">Environment</span>
          </h1>
          <div className="section-accent"></div>
          <p className="text-slate-400 max-w-2xl mt-8 font-bold text-lg leading-relaxed italic">
            Direct access to the Pegasus Core Software Stack. Type &apos;help&apos; to begin mission protocols.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-6xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`${terminalBg} backdrop-blur-3xl rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] border ${isPegasusMode ? 'border-accent/30' : 'border-white/10'} flex flex-col h-[800px] transition-all duration-1000 relative`}
        >
          {/* Subtle Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] z-20 opacity-30"></div>

          {/* Title Bar */}
          <div className="bg-white/5 px-8 py-5 flex items-center justify-between border-b border-white/5 relative z-30">
            <div className="flex space-x-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-inner"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-inner"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-inner"></div>
            </div>
            <div className="text-xs text-white/30 font-black uppercase tracking-[0.4em] italic">
              {isPegasusMode ? 'pegasus_core_active' : 'terminal_standard_mode'}
            </div>
            <div className="w-16 h-1 bg-white/5 rounded-full"></div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={scrollRef}
            className="flex-grow p-12 font-mono text-base md:text-lg leading-relaxed overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent relative z-10"
          >
            {history.map((entry, i) => (
              <div key={i} className="mb-6 whitespace-pre overflow-x-auto">
                {entry.type === 'input' ? (
                  <div className="flex gap-3 text-white/90">
                    <span className={`${promptColor} font-black italic`}>{isPegasusMode ? 'pegasus@cli' : 'user@pegasus'}</span>
                    <span className="text-secondary font-black">~</span>
                    <span className="text-accent font-black">#</span>
                    <span className="font-bold">{entry.text}</span>
                  </div>
                ) : (
                  <div 
                    className={`mt-2 pl-6 border-l-2 ${isPegasusMode ? 'border-accent/30' : 'border-white/10'} ${entry.text.includes(PEGASUS_ASCII.substring(0, 20)) ? 'terminal-glow' : `${outputColor} leading-relaxed`}`}
                    style={entry.text.includes(PEGASUS_ASCII.substring(0, 20)) ? { 
                      fontSize: '6px', 
                      lineHeight: '6px', 
                      whiteSpace: 'pre',
                      color: 'transparent',
                      background: 'radial-gradient(circle, #ffffff, #38bdf8, #ffbd2e, #ffffff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundSize: '400% 400%'
                    } : {}}
                  >
                    {entry.text}
                  </div>
                )}
              </div>
            ))}
            
            {/* Input Line */}
            {!isTyping && (
              <div className="flex gap-3 text-white items-center">
                <span className={`${promptColor} font-black italic`}>{isPegasusMode ? 'pegasus@cli' : 'user@pegasus'}</span>
                <span className="text-secondary font-black">~</span>
                <span className="text-accent font-black">#</span>
                <input
                  type="text"
                  autoFocus
                  className={`bg-transparent border-none outline-none flex-grow ${inputColor} font-bold placeholder-white/5 caret-secondary`}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleCommand(input);
                      setInput('');
                    }
                  }}
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            )}
            {isTyping && (
              <div className="flex gap-3 text-white items-center opacity-50">
                <span className={`${promptColor} font-black italic`}>{isPegasusMode ? 'pegasus@cli' : 'user@pegasus'}</span>
                <span className="text-secondary font-black">~</span>
                <span className="text-accent font-black">#</span>
                <span className="animate-pulse bg-secondary w-3 h-6 ml-1"></span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
         {[
           { icon: <Cpu />, title: 'Core Logic', desc: 'Hardware-agnostic control layer separating high-level strategy from low-level motor kinematics.' },
           { icon: <Code2 />, title: 'Control API', desc: 'Proprietary Nexus library implementing 3-layer PID loops and real-time odometry correction.' },
           { icon: <ShieldCheck />, title: 'Fault Tolerance', desc: 'Multi-threaded error handling and sensor-fusion protocols ensuring absolute session stability.' }
         ].map((highlight, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 * i }}
             className="p-10 glass-panel rounded-[2.5rem] border border-white/5 flex flex-col group hover:border-accent/20 transition-all duration-500"
           >
              <div className="p-5 bg-surface-light rounded-2xl w-fit mb-8 text-accent border border-white/10 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                {React.cloneElement(highlight.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-black text-white mb-4 uppercase italic tracking-tighter">{highlight.title}</h3>
              <p className="text-slate-400 text-sm font-bold leading-relaxed italic">{highlight.desc}</p>
           </motion.div>
         ))}
      </div>
    </div>
  );
};

export default Code;
