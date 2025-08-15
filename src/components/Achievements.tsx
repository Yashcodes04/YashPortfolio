import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Rocket, GraduationCap, Brain, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';

const Achievements: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  const getIcon = (iconName: string) => {
    const iconMap = {
      award: Award,
      code: Code,
      rocket: Rocket,
      'graduation-cap': GraduationCap,
      brain: Brain,
      briefcase: Briefcase,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Award;
    return <IconComponent className="w-8 h-8" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap = {
      Research: 'bg-blue-100 text-blue-700 border-blue-200',
      'Open Source': 'bg-green-100 text-green-700 border-green-200',
      Projects: 'bg-purple-100 text-purple-700 border-purple-200',
      Academic: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      Technical: 'bg-orange-100 text-orange-700 border-orange-200',
      Professional: 'bg-red-100 text-red-700 border-red-200',
    };
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <section id="achievements" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Achievements
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full text-green-600 dark:text-green-400">
                  {getIcon(achievement.icon)}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(achievement.category)}`}>
                  {achievement.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {achievement.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                  {achievement.date}
                </span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-green-500 dark:bg-green-600 rounded-full flex items-center justify-center"
                >
                  <Award className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;