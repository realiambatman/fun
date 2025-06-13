import React from 'react';
import { Star, Sparkles, Zap, Sun, Moon } from 'lucide-react';

interface FloatingElementProps {
  delay: number;
  size: 'sm' | 'md' | 'lg';
  color: string;
  type: 'star' | 'sparkle' | 'zap' | 'sun' | 'moon';
}

const FloatingElement: React.FC<FloatingElementProps> = ({ delay, size, color, type }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const icons = {
    star: Star,
    sparkle: Sparkles,
    zap: Zap,
    sun: Sun,
    moon: Moon
  };

  const Icon = icons[type];

  return (
    <div
      className={`absolute animate-pulse ${sizeClasses[size]} ${color} opacity-70`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      <Icon className="w-full h-full" />
    </div>
  );
};

export default FloatingElement;