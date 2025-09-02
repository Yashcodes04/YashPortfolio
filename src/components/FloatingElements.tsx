import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const elements = [
    { emoji: '💡', size: 'text-2xl', delay: 0 },
    { emoji: '🚀', size: 'text-3xl', delay: 2 },
    { emoji: '⚡', size: 'text-xl', delay: 4 },
    { emoji: '🎯', size: 'text-2xl', delay: 6 },
    { emoji: '🔥', size: 'text-xl', delay: 8 },
    { emoji: '✨', size: 'text-lg', delay: 10 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: -50,
            opacity: [0, 1, 1, 0],
            rotate: 360,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;