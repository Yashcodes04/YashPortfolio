import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 touch-manipulation"
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDarkMode ? (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
        ) : (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;