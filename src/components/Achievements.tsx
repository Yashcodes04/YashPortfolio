import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Rocket, GraduationCap, Brain, Briefcase, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLinkTransition } from '../hooks/useLinkTransition';
import { portfolioData } from '../data/portfolioData';

const Achievements: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const { handleLinkClick } = useLinkTransition();
  const [showCertificates, setShowCertificates] = useState(false);

  // Mock certificates data - you can replace with real data
  const certificates = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2024",
      credentialUrl: "",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "AWS Educate Getting Started with Serverless",
      issuer: "Amazon",
      date: "2024",
      credentialUrl: "https://www.credly.com/badges/bc97c537-5505-4a49-a410-eb26664c94ce/public_url",
      image: "cert1.png"
    },
    {
      id: 3,
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      credentialUrl: "",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    }
  ];

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
          whileHover={{ 
            scale: 1.05,
            textShadow: "0px 0px 8px rgba(34, 197, 94, 0.3)"
          }}
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
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full text-green-600 dark:text-green-400"
                >
                  {getIcon(achievement.icon)}
                </motion.div>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(achievement.category)}`}
                >
                  {achievement.category}
                </motion.span>
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
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 bg-green-500 dark:bg-green-600 rounded-full flex items-center justify-center"
                >
                  <Award className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <motion.button
            onClick={() => setShowCertificates(!showCertificates)}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <motion.div
                animate={{ rotate: showCertificates ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className="p-3 bg-white/20 rounded-full"
              >
                <Award className="w-8 h-8" />
              </motion.div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">My Certificates</h3>
                <p className="text-green-100">Click to view my professional certifications</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: showCertificates ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.button>
          
          {/* Certificates Grid */}
          <motion.div
            initial={false}
            animate={{ 
              height: showCertificates ? "auto" : 0,
              opacity: showCertificates ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={showCertificates ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-2 right-2 p-2 bg-white/90 rounded-full"
                    >
                      <Award className="w-4 h-4 text-green-600" />
                    </motion.div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 text-xs font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        {cert.date}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleLinkClick(cert.credentialUrl)}
                        className="flex items-center space-x-1 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-xs font-medium"
                      >
                        <span>Verify</span>
                        <ExternalLink size={12} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;