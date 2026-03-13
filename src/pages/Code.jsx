import React, { useState, useEffect, useRef } from 'react';

const Code = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const scrollRef = useRef(null);

  const PEGASUS_ASCII = `__________                                          __________        .__
\\______   \\ ____   _________    ________ __  ______ \\______   \\_______|__| _____   ____
 |     ___// __ \\ / ___\\\\__  \\  /  ___/  |  \\/  ___/  |     ___/\\_  __ \\  |/     \\/ __ \\
 |    |   \\  ___// /_/  > __ \\_\\\\___ \\|  |  / \\___ \\   |    |     |  | \\/  |  Y Y  \\  ___/
 |____|    \\___  >___  (____  /____  >____//____  >  |____|     |__|  |__|__|_|  /\\___  /
               \\/_____/     \\/     \\/           \\/                             \\/     \\/

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
    // Initial help command
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
        <span className="p-2 bg-blue-600 rounded-lg"><span className="text-sm font-mono tracking-tighter">&lt;/&gt;</span></span>
        Development Console
      </h1>

      <div className="w-full max-w-5xl mx-auto">
        {/* macOS iTerm2-style Terminal */}
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col h-[800px]">
          {/* Title Bar */}
          <div className="bg-slate-800/90 px-4 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
            </div>
            <div className="text-xs text-slate-400 font-mono tracking-wide">user@pegasus — zsh — 80x24</div>
            <div className="w-12"></div> {/* Spacer for balance */}
          </div>

          {/* Terminal Content */}
          <div 
            ref={scrollRef}
            className="flex-grow p-6 font-mono text-sm md:text-base leading-relaxed overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
          >
            {history.map((entry, i) => (
              <div key={i} className="mb-2 whitespace-pre overflow-x-auto">
                {entry.type === 'input' ? (
                  <div className="flex gap-2 text-slate-300">
                    <span className="text-green-400 font-bold">user@pegasus</span>
                    <span className="text-slate-500">~</span>
                    <span className="text-purple-400 font-bold">%</span>
                    <span>{entry.text}</span>
                  </div>
                ) : (
                  <div 
                    className={`text-blue-400 mt-1 pl-4 border-l border-slate-800 ${entry.text === PEGASUS_ASCII ? '' : 'leading-tight'}`}
                    style={entry.text === PEGASUS_ASCII ? { fontSize: '6px', lineHeight: '6px', whiteSpace: 'pre' } : {}}
                  >
                    {entry.text}
                  </div>
                )}
              </div>
            ))}
            
            {/* Input Line */}
            <div className="flex gap-2 text-slate-300 items-center">
              <span className="text-green-400 font-bold">user@pegasus</span>
              <span className="text-slate-500">~</span>
              <span className="text-purple-400 font-bold">%</span>
              <input
                type="text"
                autoFocus
                className="bg-transparent border-none outline-none flex-grow text-slate-100 placeholder-slate-600"
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
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold mb-4">Architecture Highlights</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                 Our software stack is built on the principle of hardware-agnostic control. By separating our high-level logic (Nexus) from the low-level hardware interactions (Cybercore), we achieve rapid development and extreme reliability.
              </p>
              <div className="flex gap-2">
                 <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">PID-Loops</span>
                 <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs font-mono">Odometry</span>
                 <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-mono">Multithreading</span>
              </div>
           </div>
           
           <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold mb-4">Dev Tools</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                 Try typing <code className="text-blue-400">nexus</code> or <code className="text-blue-400">pegasus</code> in the terminal above to explore our technical identity. Our environment is designed to mirror our actual development workflow.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
