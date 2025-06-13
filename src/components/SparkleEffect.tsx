import React from 'react';
import { Sparkles } from 'lucide-react';

interface SparkleEffectProps {
  delay: number;
}

const SparkleEffect: React.FC<SparkleEffectProps> = ({ delay }) => {
  return (
    <div
      className="absolute animate-ping opacity-60"
      style={{
        animation: `sparkle 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      <Sparkles className="w-3 h-3 text-yellow-300" />
    </div>
  );
};

export default SparkleEffect;