import React, { useState, useEffect, useRef } from 'react';

const Code = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const scrollRef = useRef(null);

  const PEGASUS_ASCII = `__________                                          __________        .__
\\\\______   \\\\ ____   _________    ________ __  ______ \\\\______   \\\\_______|__| _____   ____
 |     ___// __ \\\\ / ___\\\\\\\\__  \\\\  /  ___/  |  \\\\/  ___/  |     ___/\\\\_  __ \\\\  |/     \\\\/ __ \\\\
 |    |   \\\\  ___// /_/  > __ \\\\_\\\\\\\\___ \\\\|  |  / \\\\___ \\\\ |    |     |  | \\\\/  |  Y Y  \\\\  ___/
 |____|    \\\\___  >___  (____  /____  >____//____  >  |____|     |__|  |__|__|_|  /\\\\___  /
               \\\\/_____/     \\\\/     \\\\/           \\\\/                             \\\\/     \\\\/

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
....==*==**+:...........:+#%%%#+++*#%%#*#@@@@@@%+==*+====---:.................-=%#*##+=....-*###:...
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

  const commands = {
    help: () => `Available commands:
  help      - Display this help message
  nexus     - Learn about our custom motion control library
  cybercore - Learn about our foundational architecture
  pegasus   - Display the Pegasus Prime ASCII art and info
  ls        - List files in current directory
  whoami    - Display current user identity
  clear     - Clear the terminal screen`,
    nexus: () => `Nexus is our proprietary motion control library.
It enables precise motor movements using advanced PID loops, motion profiling, 
and real-time sensor fusion to ensure absolute consistency during autonomous routines.`,
    cybercore: () => `Cybercore is our foundational class architecture for the Nexus system.
It provides the core abstraction layer for motor control, sensor integration, 
and task scheduling, allowing for a robust and modular codebase.`,
    pegasus: () => PEGASUS_ASCII,
    ls: () => `autonomous.cpp  drive_subsystem.h  nexus_core.lib  config.yaml`,
    whoami: () => `team_97711v@pegasus-prime`,
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    let response = '';
    if (trimmedCmd === '') {
      response = '';
    } else if (commands[trimmedCmd]) {
      response = commands[trimmedCmd]();
    } else {
      response = `zsh: command not found: ${trimmedCmd}`;
    }

    setHistory(prev => [...prev, { type: 'input', text: cmd }, { type: 'output', text: response }]);
  };

  useEffect(() => {
    handleCommand('help');
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <span className="p-2 bg-accent rounded-lg shadow-lg shadow-accent/20">
          <span className="text-sm font-mono tracking-tighter text-primary">&lt;/&gt;</span>
        </span>
        Development Console
      </h1>

      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-primary/95 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[800px]">
          {/* Title Bar */}
          <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-xs text-white/40 font-mono tracking-wide">user@pegasus — zsh — 80x24</div>
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
                    <span className="text-accent font-bold">user@pegasus</span>
                    <span className="text-secondary">~</span>
                    <span className="text-secondary font-bold">%</span>
                    <span className="font-medium">{entry.text}</span>
                  </div>
                ) : (
                  <div 
                    className={`mt-1 pl-4 border-l-2 border-white/5 ${entry.text === PEGASUS_ASCII ? 'terminal-glow' : 'text-white/70 leading-tight'}`}
                    style={entry.text === PEGASUS_ASCII ? { 
                      fontSize: '6px', 
                      lineHeight: '6px', 
                      whiteSpace: 'pre',
                      color: '#e2e8f0', // Metallic/Silver-ish
                      background: 'linear-gradient(to right, #38bdf8, #e2e8f0, #38bdf8)',
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
            <div className="flex gap-2 text-white items-center">
              <span className="text-accent font-bold">user@pegasus</span>
              <span className="text-secondary">~</span>
              <span className="text-secondary font-bold">%</span>
              <input
                type="text"
                autoFocus
                className="bg-transparent border-none outline-none flex-grow text-white placeholder-white/20 caret-secondary"
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
                 Try typing <code className="text-accent font-bold bg-accent/10 px-1 rounded">nexus</code> or <code className="text-accent font-bold bg-accent/10 px-1 rounded">pegasus</code> in the terminal above to explore our technical identity. Our environment is designed to mirror our actual development workflow.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
