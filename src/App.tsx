import React, { useState, useEffect } from 'react';
import { Code, Terminal, Cpu, Zap, Star, Eye, Coffee, Gamepad2, Database, Wifi, Lock } from 'lucide-react';
import FloatingElement from './components/FloatingElement';
import ParticleEffect from './components/ParticleEffect';
import WaveEffect from './components/WaveEffect';
import AnimatedText from './components/AnimatedText';
import CodeBlock from './components/CodeBlock';
import TerminalWindow from './components/TerminalWindow';
import MatrixRain from './components/MatrixRain';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [revealedSecrets, setRevealedSecrets] = useState<number[]>([]);
  const [floatingElements, setFloatingElements] = useState<Array<{ 
    id: number; 
    delay: number; 
    size: 'sm' | 'md' | 'lg'; 
    color: string;
    type: 'star' | 'sparkle' | 'zap' | 'sun' | 'moon';
  }>>([]);
  const [particles, setParticles] = useState<Array<{ id: number; delay: number }>>([]);
  const [waves, setWaves] = useState<Array<{ id: number; delay: number }>>([]);
  const [isHacking, setIsHacking] = useState(false);

  const programmingSecrets = [
    {
      id: 1,
      teaser: "bg na hih ka thei 🕵️‍♀️👀",
      reveal: "Blanket kom a ihmu! 🛏️😏",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      demo: "code"
    },
    {
      id: 2,
      teaser: "na photo kava mu 📸🐵",
      reveal: (
        <div className="space-y-3">
          <p>😂🐵</p>
          <img 
            src="/3235.webp" 
            alt="Monkey selfie" 
            className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg object-cover"
          />
          <p className="text-sm">huiha! 🤳✨</p>
        </div>
      ),
      icon: Terminal,
      color: "from-green-500 to-emerald-500",
      demo: "terminal"
    },
    {
      id: 3,
      teaser: "The Matrix? 🤔",
      reveal: null, // No text reveal, just matrix effect
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      demo: "matrix"
    }
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      code: `// 🛏️
function detectKimUnderBlanket() {
  const blanketStatus = checkCurrentActivity();
  const kimLocation = "under_cozy_blanket";
  
  if (blanketStatus === "cozy_mode") {
    return "bg na hih ka thei! 👀😏";
  }
  
  // 🙈
  const surprise = createMagicalWebsite();
  return surprise + " 😊";
}

detectKimUnderBlanket(); // 🎯✨`
    },
    {
      language: "Python",
      code: `# 🕵️‍♀️
def analyze_kim_activity():
    current_status = {
        'location': 'under_blanket',
        'comfort_level': 'maximum_cozy',
        'detection_status': 'caught_red_handed',
        'surprise_incoming': True
    }
    
    if current_status['location'] == 'under_blanket':
        return "Blanket kom a ihmu! 🛏️😂"
    
    return " 💻"

# Result: 👀✨
analyze_kim_activity()`
    },
    {
      language: "TypeScript",
      code: `//  💝
interface KimTraits {
  awesomeness: number;
  programmingLove: boolean;
  deservesCoolWebsite: boolean;
}

const analyzeKim = (kim: KimTraits): string => {
  const awesomenessMeter = kim.awesomeness * 1000;
  
  if (kim.programmingLove && kim.deservesCoolWebsite) {
    return \`Kim \${awesomenessMeter}%  🌟\`;
  }
  
  return "Error: 🤯";
};

// Running analysis...
const result = analyzeKim({
  awesomeness: 100,
  programmingLove: true,
  deservesCoolWebsite: true
});

console.log(result); // 🌟"`
    },
    {
      language: "CSS",
      code: `/*  ✨ */
.kim-awesome-mode {
  background: linear-gradient(
    45deg,
    #ff6b6b,
    #4ecdc4,
    #45b7d1,
    #96ceb4
  );
  animation: kim-sparkle 2s infinite;
  border-radius: 50px;
  box-shadow: 0 0 30px rgba(255, 107, 107, 0.5);
}

@keyframes kim-sparkle {
  0%, 100% { 
    transform: scale(1) rotate(0deg);
    filter: hue-rotate(0deg);
  }
  50% { 
    transform: scale(1.05) rotate(180deg);
    filter: hue-rotate(180deg);
  }
}

/*  */
.website-for-kim {
  --kim-magic: 9999px;
  overflow: visible !important;
  awesomeness: maximum;
}`
    }
  ];

  const terminalCommands = [
    "$ whoami",
    "> Blanket lovers te😏",
    "$ ls -la kim_detection/",
    "> blanket_detector.py",
    "> cozy_mode_alert.js", 
    "> surprise_website.html",
    "$ cat blanket_status.txt",
    "> ' 🛏️'",
    "$ echo 'Mission status:'",
    "> Successfully detected and surprised! 🎯✨"
  ];

  useEffect(() => {
    // Generate floating elements with programming theme
    const elementTypes = ['star', 'sparkle', 'zap', 'sun', 'moon'] as const;
    const colors = ['text-blue-400', 'text-green-400', 'text-purple-400', 'text-cyan-400', 'text-indigo-400'];
    
    const elementArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      size: ['sm', 'md', 'lg'][Math.floor(Math.random() * 3)] as 'sm' | 'md' | 'lg',
      color: colors[Math.floor(Math.random() * colors.length)],
      type: elementTypes[Math.floor(Math.random() * elementTypes.length)]
    }));
    setFloatingElements(elementArray);

    // Generate particles
    const particleArray = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      delay: Math.random() * 4
    }));
    setParticles(particleArray);

    // Generate waves
    const waveArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: Math.random() * 3
    }));
    setWaves(waveArray);

    // Show first message after 2 seconds
    setTimeout(() => setShowMessage(true), 2000);
  }, []);

  const handleSecretReveal = (secretId: number) => {
    if (secretId === 3) {
      // Matrix effect - can be clicked repeatedly
      setIsHacking(true);
      setTimeout(() => setIsHacking(false), 2000); // Reset after 2 seconds
      
      // Create burst of elements
      const burstElements = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i, // Use timestamp to ensure unique IDs
        delay: 0,
        size: 'lg' as const,
        color: 'text-green-400',
        type: 'zap' as const
      }));
      setFloatingElements(prev => [...prev, ...burstElements]);
    } else {
      // Other secrets - normal behavior
      if (!revealedSecrets.includes(secretId)) {
        setRevealedSecrets(prev => [...prev, secretId]);
        
        // Create burst of elements
        const burstElements = Array.from({ length: 8 }, (_, i) => ({
          id: floatingElements.length + secretId * 10 + i,
          delay: 0,
          size: 'lg' as const,
          color: 'text-cyan-400',
          type: 'zap' as const
        }));
        setFloatingElements(prev => [...prev, ...burstElements]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Matrix Rain Effect */}
      {isHacking && <MatrixRain />}
      
      {/* Floating Elements Background */}
      {floatingElements.map(element => (
        <FloatingElement
          key={element.id}
          delay={element.delay}
          size={element.size}
          color={element.color}
          type={element.type}
        />
      ))}

      {/* Particle Effects */}
      {particles.map(particle => (
        <ParticleEffect key={particle.id} delay={particle.delay} />
      ))}

      {/* Wave Effects */}
      {waves.map(wave => (
        <WaveEffect key={wave.id} delay={wave.delay} />
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Code className="w-10 h-10 text-cyan-400 animate-pulse" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Hey! 👋
            </h1>
            <Terminal className="w-10 h-10 text-green-400 animate-bounce" />
          </div>
          
          <div className="text-2xl text-gray-300 mb-8 max-w-3xl">
            <AnimatedText 
              text="na chim hia? na chim le hiai ana en mei o 😎" 
              className="font-medium"
              speed={25}
            />
          </div>
          
          <div className="text-lg text-cyan-300 mb-6">
            <AnimatedText 
              text="ka chim lum dek 💀😴" 
              delay={0}
              className="font-light"
              speed={30}
            />
          </div>
        </div>

        {/* Interactive Programming Showcase */}
        <div className="max-w-6xl w-full mx-auto space-y-8">
          {showMessage && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <Cpu className="w-12 h-12 mx-auto text-purple-400 animate-spin mb-4" />
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Programming magic show ana en aw! 🪄✨💻 
                </p>
              </div>

              {/* Programming Secret Cards */}
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {programmingSecrets.map((secret) => {
                  const isRevealed = revealedSecrets.includes(secret.id);
                  const Icon = secret.icon;
                  
                  return (
                    <div
                      key={secret.id}
                      className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-cyan-500/30 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:border-cyan-400/60"
                      onClick={() => handleSecretReveal(secret.id)}
                    >
                      <div className="text-center space-y-4">
                        <div className="relative">
                          <Icon className={`w-12 h-12 mx-auto ${isRevealed || secret.id === 3 ? 'text-cyan-400' : 'text-gray-500'} transition-colors duration-300`} />
                          {(!isRevealed && secret.id !== 3) && (
                            <div className="absolute -top-1 -right-1">
                              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                            </div>
                          )}
                        </div>
                        
                        {(!isRevealed && secret.id !== 3) ? (
                          <div className="space-y-2">
                            <p className="text-gray-300 font-medium">
                              {secret.teaser}
                            </p>
                            <p className="text-sm text-gray-500">
                              Click to discover! 👆
                            </p>
                          </div>
                        ) : secret.id === 3 ? (
                          // Matrix card - always shows teaser, always clickable
                          <div className="space-y-2">
                            <p className="text-gray-300 font-medium">
                              {secret.teaser}
                            </p>
                            <p className="text-sm text-green-400">
                              Click to enter the Matrix! 🟢
                            </p>
                          </div>
                        ) : (
                          // Only show reveal content if it exists (not for Matrix)
                          secret.reveal && (
                            <div className={`animate-fade-in p-4 bg-gradient-to-r ${secret.color} rounded-xl text-white`}>
                              <div className="font-medium">
                                {secret.reveal}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Code Examples - NOW ALWAYS VISIBLE! */}
              <div className="animate-fade-in mb-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                  💻 na kizil d te
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                  {codeExamples.map((example, index) => (
                    <CodeBlock
                      key={index}
                      language={example.language}
                      code={example.code}
                    />
                  ))}
                </div>
              </div>

              {revealedSecrets.includes(2) && (
                <div className="animate-fade-in mb-8">
                  <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">
                    💻 Terminal Session (Blanket Detection System)
                  </h3>
                  <TerminalWindow commands={terminalCommands} />
                </div>
              )}

              {/* Final Message */}
              {revealedSecrets.length === programmingSecrets.length && (
                <div className="animate-fade-in mt-8 text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-8 text-white shadow-2xl">
                    <Eye className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-3xl font-bold mb-4">Blanket Detection: SUCCESSFUL! 🎉</h3>
                    <p className="text-xl mb-4">
                      Now you know a programmer - and you've been caught under the blanket! 😏🛏️
                    </p>
                    <p className="text-lg mb-4">
                      This entire website was built from scratch using React, TypeScript, and Tailwind CSS
                    </p>
                    <p className="text-sm opacity-90">
                      Every animation, every interaction, every line of code - all crafted while you were cozy! 💻✨
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4">
                      <Lock className="w-6 h-6" />
                      <span className="text-sm">Powered by blanket detection algorithms</span>
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
           From ML pro te 🛏️👀
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes particle {
          0%, 100% { transform: scale(0) translateY(0px); opacity: 0; }
          50% { transform: scale(1) translateY(-30px); opacity: 1; }
        }
        
        @keyframes wave {
          0% { transform: scale(0); opacity: 0.7; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;