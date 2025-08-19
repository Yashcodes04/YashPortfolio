import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';

const Experience: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0px 0px 8px rgba(34, 197, 94, 0.3)"
          }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-green-200 dark:bg-green-700"></div>
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                <div className="flex-1 md:w-5/12">
                  <motion.div 
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } mb-4 md:mb-0`}>
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
                
                {/* Timeline dot */}
                <motion.div 
                  whileHover={{ scale: 1.3 }}
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 10px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 mx-4"
                />
                
                <div className="flex-1 md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;