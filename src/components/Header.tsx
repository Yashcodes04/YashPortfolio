import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Globe, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLinkTransition } from '../hooks/useLinkTransition';

const Header: React.FC = () => {
  const { handleLinkClick } = useLinkTransition();
  
  const socialIcons = [
    { icon: Linkedin, url: portfolioData.personal.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Github, url: portfolioData.personal.socialLinks.github, label: 'GitHub' },
    { icon: Mail, url: portfolioData.personal.socialLinks.email, label: 'Email' },
    { icon: Globe, url: portfolioData.personal.socialLinks.portfolio, label: 'Portfolio' },
    { icon: Download, url: portfolioData.personal.socialLinks.resume, label: 'Resume' },
  ];

  return (
    <header id="header" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Name and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:col-span-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {portfolioData.personal.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              {portfolioData.personal.title}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {socialIcons.map((social, index) => (
                <motion.button
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLinkClick(social.url)}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-green-600 transition-colors duration-300" />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Middle Column - About */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              >
                About
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="bg-gray-900 dark:bg-gray-700 rounded-xl p-4 font-mono text-sm"
              >
                {portfolioData.personal.about.split('\n').map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    className={line.startsWith('//') ? 'text-green-400 mb-1' : 'text-gray-300 dark:text-gray-200 mb-1'}
                  >
                    {line}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center lg:justify-end lg:col-span-1"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={portfolioData.personal.profileImage}
                alt={portfolioData.personal.name}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;