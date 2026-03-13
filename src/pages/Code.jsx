import React, { useState, useEffect, useRef } from 'react';

const Code = () => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isPegasusMode, setIsPegasusMode] = useState(false);
  const scrollRef = useRef(null);

  const PEGASUS_ASCII = `__________                                                 __________        .__                
\\______   \\ ____   _________    ________ __  ______        \\______   \\_______|__| _____   ____  
 |     ___// __ \\ / ___\\__  \\  /  ___/  |  \\/  ___/  ______ |     ___/\\_  __ \\  |/     \\/ __ \\ 
 |    |   \\  ___// /_/  > __ \\_\\___ \\|  |  /\\___ \\  /_____/ |    |     |  | \\/  |  Y Y  \\  ___/ 
 |____|    \\___  >___  (____  /____  >____//____  >         |____|     |__|  |__|__|_|  /\\___  >
               \\/_____/     \\/     \\/           \\/                                    \\/     \\/ 
                            __________________________  ____ ________   ____                    
                           /   __   \\______  \\______  \\/_   /_   \\   \\ /   /                    
                           \\____    /   /    /   /    / |   ||   |\\   Y   /                     
                              /    /   /    /   /    /  |   ||   | \\     /                      
                             /____/   /____/   /____/   |___||___|  \\___/                       
                                                                                                
....................................................................................................
....................................................................................................
..............................................................:---:::...............................
....:**==:......:##+-....................................:--===+===++++=#:..........................
.....:****+=+-...:*###**-..............................=+=:+**+*#+%%%#+##==:................ .......
.....:::=+++=-::==-:+*##***+:.........................==+*++**++*===#%####+=...-....................
.....-***+=++++=--==++=+*******+=:..................--=++**++=--:-*####*:-#*=-:-....................
.......:*++++=--=*#+=+***===**+####++-.............-++**#=*+-.:*#@*=:.*#*=-+++=.....................
.......:-::=++===--===+*#******=-+**##*++-:........==++#*#==-+%#%%*+=:-**+#+:..............  .......
........=**++++====+++**##*+***##*#+==++*#*++=-...==*+#+*=+=*#**%@+++==+*+=--.............. ........
...........-+***+=====++*#%#++*###*##%%##**=+###+.=***##**++%***%@%*####%#==:=......................
............++++==--::=+*##%#########++#%#==*#**#- +*###*#+##=++*@@@%##%%%%++--.....................
.............:--=+**********#%%######**#%%###+*##*+=+#**##***-*==%%%%*.:=###*=+:....................
................=+++++====++++*#%##########%%#++##**#**+*#**#+#=--%%##=...####*:....................
...................:***+==-=+****#%##*=*###%%%%+-+##*:+#**#*#++=-:-#%+*-...=+=:.....................
.....................-=+***++++***####*++*#*##%%#==##*-:++%#%%#*+=-=**+=-...........................
........................=****+*+**++*##%%##%#%%%%%*=*##**###*%#*+==:+++=:=.................. .......
...........................++*****+=+***###%#**##%%%#=*#%+*###%*##+-.-*+-.-.........................
.............................:=#**+*+**+++**#######%%%##**+*###@##%#+=.=*#+=-........................
............... ..................++**++*+++++=###%#%%%#*-+##%=--:::-==+%#*+-.......................
...................................:--++++=***++**####%%#*##+=+*###*+=::=%%*+............... .......
..........................................++++*++******-*#***#+==+*+-=*#+=*#*=......................
............................................:=+==+****.=++=*#+++*::*+*+*%**##=:................. ...
..............-=+++*++-............................::+++=-*#*=%**=-*+%#*%%**++-.....................
..........--=--=+*#%#++*+=:.:-==----===-----::::-=+++##*+**%*=###**###*+%%#**=-......=++=:..........
........=*+-:+#+#%%==+###**=+*#%%%#*=::--==#++===-#*+=*##%###+###**##%+*#*%##*+=-:-*%*+=*=:.........
........+==##++%#=.....=###%#+===-..-#*-..:#-::::.=#**###%##%#*+*#**=*###=-:::-=+**%%%##@#=.........
......:++*##**##:......:+*%+++##-+%*+==%*--*=::::::+%*##*+*%%##%%#######+==++**#####*==#%*=-.. .....
.....:++###**#*........++#++#+====-=**++%*#*#*#**###**##**#%#%%%#@#%**+*####*%%#*+:....-*#*-=.......
.....+*#***+#+-........+##*+#*%*++***#=*%%*#*%#######*++*%%%##%#***####*#@%#**=.........=*#*:=......
....-*##=*+=#=.........+*#*+####**####=#%%###*@#####%%%%##***##%#*#%%##%@@@%%#*=-........-*#*--.....
....+*#=-*-+#-.........+*%#+*##****##**##%%###@@%##########+++*##%#**##%%%%#*+*#*++-......=+**=:....
....+##-:*++*-..........**%**+##*#%*+*%%*#%#####%%%#########*+=+=......:=+**####%%%#=+:...:+*%*=:...
....==*==**+:...........:+#%%%#+++*#%%#*#@@@@@@%+==*+====---:................-=%#*##+=....-*###:...
.....-=++***.............=#*##*****+##+%@@@@@%##-.............................:+####+-......+#*+....
.....--*+=+*.............=*%#%#++:-**+@@@@%%%%*=.................. ..........=+##*=..... .-#%#+=....
.....:=+++:=............=+###*===*#**%%%%%%%#*=........ ...................:+##*+-........-###*-....
......=+#*=............++*%#++****+-#%%#%#%#*-............................:++**=...........+#=-.....
......-+=**-.........-=*##++*##*=..+*%=##%*+:...........................+=###+=.............:+......
.......-+=-+-......-+*%%####*=....=+#*###+-.............................+###+:......................
........:++:.....-+*++*#%#-......=#%%%#*-.......  .................=*=**#*=:........................
..........++=....-***#*#=......:#*###%+...........................:##%*+=...........................
............=+:...:*##%*=:.....-######=:..........................=#*+=...........................
..............-:....-*#*+=......=###%##+==..........  ............--:...............................
............ ........-*##=+.........+%#%#*=+-.................  ....................................
......................:*##+=:.........:+*###++=:................................... ................
........................+*#+=:...........:+**#*++=..................................................
................. .......+*#++:....... .....-###%#+=........... ..  ............................ ...)`;

  const MOCK_FILES = {
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
  };

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

  const [history, setHistory] = useState([]);

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

  const handleCommand = async (cmd) => {
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
  };

  useEffect(() => {
    // Automatically run pegasus on mount
    handleCommand('pegasus');
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Pegasus theme colors
  const terminalBg = isPegasusMode ? 'bg-[#020617]' : 'bg-primary/95';
  const promptColor = isPegasusMode ? 'text-accent' : 'text-accent';
  const outputColor = isPegasusMode ? 'text-cyan-400' : 'text-white/70';
  const inputColor = isPegasusMode ? 'text-white' : 'text-white';

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <span className="p-2 bg-accent rounded-lg shadow-lg shadow-accent/20">
          <span className="text-sm font-mono tracking-tighter text-primary">&lt;/&gt;</span>
        </span>
        Development Console
      </h1>

      <div className="w-full max-w-5xl mx-auto">
        <div className={`${terminalBg} backdrop-blur-2xl rounded-2xl overflow-hidden shadow-2xl border ${isPegasusMode ? 'border-accent/30 shadow-accent/5' : 'border-white/10'} flex flex-col h-[800px] transition-colors duration-1000`}>
          {/* Title Bar */}
          <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-xs text-white/40 font-mono tracking-wide">
              {isPegasusMode ? 'pegasus@system — pegasus-cli — 80x24' : 'user@pegasus — zsh — 80x24'}
            </div>
            <div className="w-12"></div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={scrollRef}
            className="flex-grow p-8 font-mono text-sm md:text-base leading-relaxed overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
          >
            {history.map((entry, i) => (
              <div key={i} className="mb-4 whitespace-pre overflow-x-auto">
                {entry.type === 'input' ? (
                  <div className="flex gap-2 text-white/90">
                    <span className={`${promptColor} font-bold`}>{isPegasusMode ? 'pegasus@cli' : 'user@pegasus'}</span>
                    <span className="text-secondary">~</span>
                    <span className="text-secondary font-bold">#</span>
                    <span className="font-medium">{entry.text}</span>
                  </div>
                ) : (
                  <div 
                    className={`mt-1 pl-4 border-l-2 ${isPegasusMode ? 'border-accent/20' : 'border-white/5'} ${entry.text.includes(PEGASUS_ASCII.substring(0, 20)) ? 'terminal-glow' : `${outputColor} leading-tight`}`}
                    style={entry.text.includes(PEGASUS_ASCII.substring(0, 20)) ? { 
                      fontSize: '6px', 
                      lineHeight: '6px', 
                      whiteSpace: 'pre',
                      color: '#e2e8f0',
                      background: isPegasusMode ? 'linear-gradient(to right, #38bdf8, #60a5fa, #e2e8f0)' : 'linear-gradient(to right, #38bdf8, #e2e8f0, #38bdf8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundSize: '200% auto',
                      animation: 'shine 3s linear infinite'
                    } : {}}
                  >
                    {entry.text}
                  </div>
                )}
              </div>
            ))}
            
            {/* Input Line */}
            {!isTyping && (
              <div className="flex gap-2 text-white items-center">
                <span className={`${promptColor} font-bold`}>{isPegasusMode ? 'pegasus@cli' : 'user@pegasus'}</span>
                <span className="text-secondary">~</span>
                <span className="text-secondary font-bold">#</span>
                <input
                  type="text"
                  autoFocus
                  className={`bg-transparent border-none outline-none flex-grow ${inputColor} placeholder-white/20 caret-secondary`}
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
              <div className="flex gap-2 text-white items-center opacity-50">
                <span className={`${promptColor} font-bold`}>{isPegasusMode ? 'pegasus@cli' : 'user@pegasus'}</span>
                <span className="text-secondary">~</span>
                <span className="text-secondary font-bold">#</span>
                <span className="animate-pulse">_</span>
              </div>
            )}
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes shine {
            to { background-position: 200% center; }
          }
        `}} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-primary/5">
              <h3 className="text-xl font-black mb-4 text-primary uppercase tracking-tight">Architecture Highlights</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                 Our software stack is built on the principle of hardware-agnostic control. By separating our high-level logic (Nexus) from the low-level hardware interactions (Cybercore), we achieve rapid development and extreme reliability.
              </p>
              <div className="flex flex-wrap gap-2">
                 <span className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-bold border border-primary/10">PID-Loops</span>
                 <span className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-bold border border-primary/10">Odometry</span>
                 <span className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-bold border border-primary/10">Multithreading</span>
              </div>
           </div>
           
           <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-primary/5">
              <h3 className="text-xl font-black mb-4 text-primary uppercase tracking-tight">Dev Tools</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                 Try typing <code className="text-accent font-bold bg-accent/10 px-1 rounded">nexus</code> or <code className="text-accent font-bold bg-accent/10 px-1 rounded">help</code> in the terminal above to explore our technical identity. Our environment is designed to mirror our actual development workflow.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
