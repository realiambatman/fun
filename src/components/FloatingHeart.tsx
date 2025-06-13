import React from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeartProps {
  delay: number;
  size: 'sm' | 'md' | 'lg';
  color: string;
}

const FloatingHeart: React.FC<FloatingHeartProps> = ({ delay, size, color }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

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
      <Heart className="w-full h-full fill-current" />
    </div>
  );
};

export default FloatingHeart;