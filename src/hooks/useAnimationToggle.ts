import { useState, useEffect } from 'react';

export const useAnimationToggle = () => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('animationsEnabled');
      return saved ? JSON.parse(saved) : true;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('animationsEnabled', JSON.stringify(isAnimationEnabled));
  }, [isAnimationEnabled]);

  const toggleAnimations = () => setIsAnimationEnabled(!isAnimationEnabled);

  return { isAnimationEnabled, toggleAnimations };
};