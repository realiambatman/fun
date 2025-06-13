import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface TerminalWindowProps {
  commands: string[];
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ commands }) => {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState('');

  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const currentCommand = commands[currentCommandIndex];
      
      if (currentCharIndex < currentCommand.length) {
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + currentCommand[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Command finished, move to next after a pause
        const timer = setTimeout(() => {
          setDisplayedCommands(prev => [...prev, currentLine]);
          setCurrentLine('');
          setCurrentCharIndex(0);
          setCurrentCommandIndex(prev => prev + 1);
        }, 800);
        return () => clearTimeout(timer);
      }
    }
  }, [currentCommandIndex, currentCharIndex, commands, currentLine]);

  return (
    <div className="bg-black rounded-lg overflow-hidden border border-green-500/30 shadow-2xl max-w-4xl mx-auto">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 border-b border-green-500/30">
        <Terminal className="w-4 h-4 text-green-400" />
        <span className="text-green-400 text-sm font-mono">programmer@awesome:~$</span>
        <div className="flex gap-1 ml-auto">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 h-64 overflow-y-auto font-mono text-sm">
        {displayedCommands.map((command, index) => (
          <div key={index} className="mb-1">
            <span className={command.startsWith('$') ? 'text-green-400' : 'text-gray-300'}>
              {command}
            </span>
          </div>
        ))}
        {currentCommandIndex < commands.length && (
          <div className="mb-1">
            <span className={commands[currentCommandIndex].startsWith('$') ? 'text-green-400' : 'text-gray-300'}>
              {currentLine}<span className="animate-pulse bg-green-400 text-black">█</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalWindow;