import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, SparklesIcon } from 'lucide-react';

interface AnimationToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const AnimationToggle: React.FC<AnimationToggleProps> = ({ isEnabled, onToggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onToggle}
      className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 p-2.5 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 touch-manipulation"
      aria-label="Toggle background animations"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isEnabled ? 0 : 180,
          scale: isEnabled ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
      >
        {isEnabled ? (
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
        ) : (
          <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default AnimationToggle;