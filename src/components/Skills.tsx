import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';

const Skills: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0px 0px 8px rgba(34, 197, 94, 0.3)"
          }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center"
        >
          Skills
        </motion.h2>
        
        <div className="space-y-8 sm:space-y-12">
          {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700"
              >
                <motion.h3 
                  whileHover={{ x: 5 }}
                  className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6"
                >
                  {category}
                </motion.h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.05, 
                        duration: 0.4 
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -4,
                        rotate: [0, -2, 2, 0],
                        boxShadow: "0 8px 16px rgba(34, 197, 94, 0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md touch-manipulation border border-transparent hover:border-green-200 dark:hover:border-green-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              {/* Add separator line between categories except for the last one */}
              {categoryIndex < Object.entries(portfolioData.skills).length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ delay: categoryIndex * 0.2 + 0.3, duration: 0.6 }}
                  className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-6"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;