import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';

const Publications: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'coming_soon': return <Clock className="w-5 h-5 text-yellow-500" />;
      default: return <FileText className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'coming_soon': return 'Coming Soon';
      default: return 'Published';
    }
  };

  return (
    <section id="publications" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
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
          Publications
        </motion.h2>
        
        <div className="space-y-8">
          {portfolioData.publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <motion.h3 
                    whileHover={{ x: 5 }}
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {publication.title}
                  </motion.h3>
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="text-green-600 dark:text-green-400 font-medium mb-4"
                  >
                    {publication.venue}
                  </motion.p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                >
                  {getStatusIcon(publication.status)}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{getStatusText(publication.status)}</span>
                </motion.div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{publication.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {publication.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;