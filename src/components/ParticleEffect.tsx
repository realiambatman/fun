import React from 'react';
import { Circle } from 'lucide-react';

interface ParticleEffectProps {
  delay: number;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ delay }) => {
  const colors = ['text-blue-400', 'text-green-400', 'text-purple-400', 'text-yellow-400', 'text-pink-400'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={`absolute animate-bounce opacity-50 ${randomColor}`}
      style={{
        animation: `particle 4s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      <Circle className="w-2 h-2 fill-current" />
    </div>
  );
};

export default ParticleEffect;