import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
  restart?: boolean;
  speed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  delay = 0, 
  className = '', 
  restart = false, 
  speed = 100 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (restart && !isComplete) {
        setIsComplete(true);
        // Restart after a pause
        setTimeout(() => {
          setDisplayedText('');
          setCurrentIndex(0);
          setIsComplete(false);
        }, 1000); // Reduced pause time
      }
    }, delay + currentIndex * speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, restart, isComplete, speed]);

  return (
    <span className={`${className} inline-block`}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default AnimatedText;