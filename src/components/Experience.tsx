import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';

const Experience: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-green-200 dark:bg-green-700"></div>
          
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative lg:flex lg:items-center"
              >
                {/* Mobile/Tablet Layout - Full Width Card */}
                <div className="lg:hidden w-full">
                  <motion.div 
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.img
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0 shadow-md"
                      />
                      <div className="flex-1 min-w-0">
                        <motion.h3 
                          whileHover={{ x: 5 }}
                          className="text-lg font-bold text-gray-900 dark:text-white mb-1"
                        >
                          {exp.role}
                        </motion.h3>
                        <motion.p 
                          whileHover={{ x: 5 }}
                          className="text-base text-green-600 font-medium mb-2"
                        >
                          {exp.company}
                        </motion.p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                  </motion.div>
                </div>
                
                {/* Desktop Layout */}
                <div className={`hidden lg:flex lg:items-center w-full ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  <div className="flex-1 lg:w-5/12">
                    <motion.div 
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                      className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700 ${
                        index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <motion.img
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          src={exp.logo}
                          alt={exp.company}
                          className="w-12 h-12 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <motion.h3 
                            whileHover={{ x: 5 }}
                            className="text-xl font-bold text-gray-900 dark:text-white"
                          >
                            {exp.role}
                          </motion.h3>
                          <motion.p 
                            whileHover={{ x: 5 }}
                            className="text-green-600 font-medium"
                          >
                            {exp.company}
                          </motion.p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                      <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                    </motion.div>
                  </div>
                  
                  <div className="flex-1 lg:w-5/12"></div>
                </div>
                
                {/* Timeline dot - only visible on desktop */}
                <motion.div 
                  whileHover={{ scale: 1.3 }}
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 10px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;