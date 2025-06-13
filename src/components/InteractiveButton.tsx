import React, { useState } from 'react';
import { Zap, Star } from 'lucide-react';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 300);
  };

  const baseClasses = `
    relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg
    transform transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-blue-300
    ${isHovered ? 'scale-105 shadow-2xl' : 'scale-100'}
    ${isClicked ? 'scale-95' : ''}
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
      hover:from-blue-600 hover:to-purple-600
      ${isHovered ? 'shadow-blue-500/50' : ''}
    `,
    secondary: `
      bg-gradient-to-r from-green-500 to-teal-500 text-white
      hover:from-green-600 hover:to-teal-600
      ${isHovered ? 'shadow-green-500/50' : ''}
    `
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {isHovered && (
          <Star className="w-5 h-5 animate-spin" />
        )}
      </span>
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50 animate-pulse" />
      )}
    </button>
  );
};

export default InteractiveButton;