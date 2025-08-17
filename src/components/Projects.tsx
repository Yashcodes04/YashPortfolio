import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Youtube, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLinkTransition } from '../hooks/useLinkTransition';
import { portfolioData } from '../data/portfolioData';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  githubUrl?: string;
  demoUrl?: string;
  youtubeUrl?: string;
}

const Projects: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const { handleLinkClick } = useLinkTransition();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'development': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Live';
      case 'development': return 'In Development';
      default: return 'Completed';
    }
  };

  return (
    <section id="projects" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer touch-manipulation"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white pr-2">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${getStatusColor(project.status)} flex-shrink-0`}></div>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{getStatusText(project.status)}</span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-1 sm:space-x-2">
                  {project.githubUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLinkClick(project.githubUrl!);
                      }}
                      className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors touch-manipulation"
                    >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                    </button>
                  )}
                  {project.youtubeUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLinkClick(project.youtubeUrl!);
                      }}
                      className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors touch-manipulation"
                    >
                      <Youtube size={14} className="sm:w-4 sm:h-4" />
                    </button>
                  )}
                  {project.demoUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLinkClick(project.demoUrl!);
                      }}
                      className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors touch-manipulation"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    </button>
                  )}
                </div>
                <button className="text-green-600 dark:text-green-400 text-xs sm:text-sm font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors">
                  Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4 z-50 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto my-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white pr-4">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors touch-manipulation flex-shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
              
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">{selectedProject.description}</p>
              
              <div className="mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                {selectedProject.githubUrl && (
                  <button
                    onClick={() => handleLinkClick(selectedProject.githubUrl!)}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors touch-manipulation"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </button>
                )}
                {selectedProject.demoUrl && (
                  <button
                    onClick={() => handleLinkClick(selectedProject.demoUrl!)}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-green-600 dark:bg-green-700 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors touch-manipulation"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                )}
              </div>
              
              {/* Close button for mobile */}
              <div className="mt-6 sm:hidden">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-2.5 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;