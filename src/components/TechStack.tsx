import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid3X3, X, Code, Database, Brain, Globe, Server, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TechStack: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Tech stack data organized by categories
  const techCategories = {
    "Web Development": {
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Node.js", "PHP", "Flask"]
    },
    "Machine Learning": {
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      technologies: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "HuggingFace", "Keras", "NLTK"]
    },
    "Programming": {
      icon: Code,
      color: "from-green-500 to-emerald-500",
      technologies: ["Python", "Java", "C++", "JavaScript", "SQL", "R", "Git"]
    },
    "Cloud & DevOps": {
      icon: Server,
      color: "from-orange-500 to-red-500",
      technologies: ["AWS", "Docker", " Kubernetes", "FastAPI", "GitHub", "CI/CD", "REST APIs"]
    },
    "Databases": {
      icon: Database,
      color: "from-indigo-500 to-blue-500",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "SQLite","Supabase"]
    },
    "Core CS Concepts": {
      icon: Code,
      color: "from-indigo-500 to-blue-500",
      technologies: [ "Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks"]
    }
  };

  // Moving tech icons for the carousel
  const movingTechs = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "TensorFlow", icon: "🧠", color: "#FF6F00" },
    { name: "JavaScript", icon: "🟨", color: "#F7DF1E" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "AWS", icon: "☁️", color: "#FF9900" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
  ];

  return (
    <section id="techstack" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            whileHover={{ 
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(34, 197, 94, 0.3)"
            }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Tech Stack.
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build innovative solutions.
          </p>
        </motion.div>

        {/* Moving Tech Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mb-16 overflow-hidden"
        >
          <div className="flex space-x-8">
            <motion.div
              animate={{ x: [0, -100 * movingTechs.length] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex space-x-8 whitespace-nowrap"
            >
              {[...movingTechs, ...movingTechs].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.2, y: -10 }}
                  className="flex flex-col items-center space-y-2 min-w-[100px]"
                >
                  <div className="text-4xl">{tech.icon}</div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Expand Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => setIsExpanded(true)}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Expand tech stack details"
          >
            <Grid3X3 className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>

      {/* Expanded Tech Stack Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Grid3X3 className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete Tech Stack</h3>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tech Categories Grid */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(techCategories).map(([category, data], index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 30, rotateX: -30 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700 transition-all duration-300"
                    >
                      {/* Category Header */}
                      <div className="flex items-center mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 rounded-lg bg-gradient-to-r ${data.color} text-white mr-3`}
                        >
                          <data.icon className="w-6 h-6" />
                        </motion.div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {category}
                        </h4>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        {data.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 180 }}
                              className="w-2 h-2 bg-green-500 rounded-full"
                            />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechStack;