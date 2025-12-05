import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Database } from 'lucide-react';
import { useLinkTransition } from '../hooks/useLinkTransition';

const NewsPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const { handleLinkClick } = useLinkTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Hide popup when user scrolls down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 max-w-md w-full mx-4"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="p-2 bg-green-100 dark:bg-green-900/20 rounded-full"
                >
                  <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Latest News
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* News Content */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    🎉 <strong>New Publication:</strong> Published a comprehensive Carcinoma Multi-Omics Dataset on 
                    <span className="text-green-600 dark:text-green-400 font-medium"> Harvard Dataverse</span> 
                    
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    🚀 <strong>Research Update:</strong> Submitted Capstone Part-1 Paper to 
                    <span className="text-blue-600 dark:text-blue-400 font-medium"> ICBBB 2026 </span> 
                     Titled: A Comprehensive Preprocessing Pipeline for TCGA-BRCA Multi-Omics Data Integration.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Action Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick('https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/G2XQPI')}
              className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Database className="w-4 h-4" />
              <span>View Dataset</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>

            {/* Scroll hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3"
            >
              Scroll down to dismiss
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsPopup;