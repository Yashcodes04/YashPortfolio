import { useState, useCallback } from 'react';

export const useLinkTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLinkClick = useCallback((url: string, isExternal: boolean = true) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (isExternal) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = url;
      }
      setIsTransitioning(false);
    }, 2000);
  }, []);

  return { isTransitioning, handleLinkClick };
};