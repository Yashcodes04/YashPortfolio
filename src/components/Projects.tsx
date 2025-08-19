import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Youtube, X, ChevronDown, ChevronRight } from 'lucide-react';
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
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (projectId: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

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
          whileHover={{ 
            scale: 1.05,
            textShadow: "0px 0px 8px rgba(34, 197, 94, 0.3)"
          }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center"
        >
          Projects
        </motion.h2>
        
        <div className="space-y-6">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700"
            >
              {/* Project Header - Always Visible */}
              <motion.div
                className="p-4 sm:p-6 cursor-pointer"
                onClick={() => toggleProject(project.id)}
                whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.05)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: expandedProjects.has(project.id) ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-green-600 dark:text-green-400"
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${getStatusColor(project.status)} flex-shrink-0`}
                    />
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{getStatusText(project.status)}</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Expandable Project Details */}
              <AnimatePresence>
                {expandedProjects.has(project.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-200 dark:border-gray-700">
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="pt-4"
                      >
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: techIndex * 0.05, duration: 0.2 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-md text-xs sm:text-sm font-medium cursor-pointer"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2 sm:space-x-3">
                            {project.githubUrl && (
                              <motion.button
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLinkClick(project.githubUrl!);
                                }}
                                className="flex items-center space-x-1 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors touch-manipulation text-sm"
                              >
                                <Github size={16} />
                                <span>Code</span>
                              </motion.button>
                            )}
                            {project.youtubeUrl && (
                              <motion.button
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLinkClick(project.youtubeUrl!);
                                }}
                                className="flex items-center space-x-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors touch-manipulation text-sm"
                              >
                                <Youtube size={16} />
                                <span>Demo</span>
                              </motion.button>
                            )}
                            {project.demoUrl && (
                              <motion.button
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLinkClick(project.demoUrl!);
                                }}
                                className="flex items-center space-x-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors touch-manipulation text-sm"
                              >
                                <ExternalLink size={16} />
                                <span>Live</span>
                              </motion.button>
                            )}
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedProject(project)}
                            className="text-green-600 dark:text-green-400 text-sm font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors"
                          >
                            View Details →
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Expand All / Collapse All Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center mt-8 space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpandedProjects(new Set(portfolioData.projects.map(p => p.id)))}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
          >
            <ChevronDown size={16} />
            <span>Expand All</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpandedProjects(new Set())}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
          >
            <ChevronRight size={16} />
            <span>Collapse All</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4 z-50 overflow-y-auto backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto my-4 shadow-2xl border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <motion.h3 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white pr-4"
                >
                  {selectedProject.title}
                </motion.h3>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors touch-manipulation flex-shrink-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X size={20} />
                </motion.button>
              </div>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6"
              >
                {selectedProject.description}
              </motion.p>
              
              <div className="mb-4 sm:mb-6">
                <motion.h4 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Technologies Used:
                </motion.h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.2 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-2 sm:px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
              >
                {selectedProject.githubUrl && (
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLinkClick(selectedProject.githubUrl!)}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors touch-manipulation"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </motion.button>
                )}
                {selectedProject.demoUrl && (
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLinkClick(selectedProject.demoUrl!)}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-green-600 dark:bg-green-700 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors touch-manipulation"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.button>
                )}
              </motion.div>
              
              {/* Close button for mobile */}
              <div className="mt-6 sm:hidden">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-2.5 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;