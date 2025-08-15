import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';

const Education: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="education" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Education
        </motion.h2>
        
        <div className="space-y-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-16 h-16 rounded-lg object-cover mr-4 shadow-md"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                    <p className="text-green-600 font-medium">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-start md:items-end space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">GPA: {edu.gpa}</span>
                    </div>
                  )}
                  {edu.Percentage && (
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Percentage: {edu.Percentage}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">{edu.description}</p>
              
              {edu.coursework && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-green-600" />
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: index * 0.2 + courseIndex * 0.05, 
                          duration: 0.4 
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 bg-white dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;