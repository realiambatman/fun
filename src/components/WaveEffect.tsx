import React from 'react';

interface WaveEffectProps {
  delay: number;
}

const WaveEffect: React.FC<WaveEffectProps> = ({ delay }) => {
  return (
    <div
      className="absolute w-32 h-32 border-2 border-blue-300 rounded-full opacity-30"
      style={{
        animation: `wave 3s ease-out infinite`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 80}%`,
      }}
    />
  );
};

export default WaveEffect;