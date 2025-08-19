import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Mail, Globe, Download, Code, Play, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLinkTransition } from '../hooks/useLinkTransition';

const Header: React.FC = () => {
  const { handleLinkClick } = useLinkTransition();
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [outputText, setOutputText] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [showCode, setShowCode] = useState(true);
  
  const codeLines = portfolioData.personal.aboutCode.split('\n');
  
  const socialIcons = [
    { icon: Linkedin, url: portfolioData.personal.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Github, url: portfolioData.personal.socialLinks.github, label: 'GitHub' },
    { icon: Code, url: "https://leetcode.com/u/Yash432/", label: 'LeetCode' },
    { icon: Mail, url: portfolioData.personal.socialLinks.email, label: 'Email' },
    { icon: Globe, url: portfolioData.personal.socialLinks.portfolio, label: 'Portfolio' },
    { icon: Download, url: portfolioData.personal.socialLinks.resume, label: 'Resume' },
  ];

  const executeCode = () => {
    setIsExecuting(true);
    setShowCode(false);
    setShowOutput(true);
    setOutputText('');
    
    const outputLines = [
      'Compiling main.cpp...',
      'Build successful!',
      'Running program...',
      '',
      'Hello! I\'m Yash Gawhale',
      'Currently pursuing Computer Science degree',
      'Specializing in AI and Machine Learning',
      'Always exploring cutting-edge research!',
      '',
      'Skills: Python, Machine Learning, Deep Learning, Data Science, Cloud',
      'Passion: Building innovative AI solutions',
      '',
      'Program executed successfully.',
      'Press any key to continue...'
    ];
    
    let currentOutput = '';
    let lineIndex = 0;
    
    const typeOutput = () => {
      if (lineIndex < outputLines.length) {
        currentOutput += outputLines[lineIndex] + '\n';
        setOutputText(currentOutput);
        lineIndex++;
        setTimeout(typeOutput, lineIndex <= 3 ? 800 : 400);
      } else {
        setIsExecuting(false);
      }
    };
    
    setTimeout(typeOutput, 500);
  };

  useEffect(() => {
    if (!isTyping || currentLine >= codeLines.length) return;

    const currentLineText = codeLines[currentLine];
    const currentTypedLength = typedText.split('\n')[currentLine]?.length || 0;

    if (currentTypedLength < currentLineText.length) {
      const timer = setTimeout(() => {
        const lines = typedText.split('\n');
        if (lines[currentLine]) {
          lines[currentLine] += currentLineText[currentTypedLength];
        } else {
          lines[currentLine] = currentLineText[0];
        }
        setTypedText(lines.join('\n'));
      }, 50);
      return () => clearTimeout(timer);
    } else if (currentLine < codeLines.length - 1) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev + '\n');
        setCurrentLine(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [typedText, currentLine, isTyping, codeLines]);

  const highlightCode = (code: string) => {
    return code
      .replace(/(#include|using|namespace|class|private|public|string|vector|int|void|return|cout|endl)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
      .replace(/(\{|\}|\(|\)|;)/g, '<span class="text-yellow-400">$1</span>');
  };

  return (
    <header id="header" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 pt-20 sm:py-12 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Name and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="text-center lg:text-left lg:col-span-1 order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0px 0px 8px rgba(34, 197, 94, 0.3)"
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
            >
              {portfolioData.personal.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8"
            >
              {portfolioData.personal.title}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {socialIcons.map((social, index) => (
                <motion.button
                  key={social.label}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -4,
                    rotate: [0, -5, 5, 0],
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  onClick={() => handleLinkClick(social.url)}
                  className="p-2.5 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 group touch-manipulation border-2 border-transparent hover:border-green-200 dark:hover:border-green-700"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-green-600 transition-all duration-300 group-hover:scale-110" />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Middle Column - About */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-1 order-3 lg:order-2"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Code className="w-6 h-6 mr-2 text-green-600" />
                  About
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-2 w-2 h-5 bg-green-500 inline-block"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={executeCode}
                  disabled={isExecuting}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-lg text-sm font-medium transition-all duration-300 touch-manipulation"
                >
                  {isExecuting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Running...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Run</span>
                    </>
                  )}
                </motion.button>
              </motion.h2>
              
              {showCode && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: showCode ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 dark:bg-gray-700 rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto max-h-80 overflow-y-auto"
                >
                  <div 
                    className="text-gray-300 dark:text-gray-200 whitespace-pre-wrap break-words leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: highlightCode(typedText) }}
                  />
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-green-400 ml-1"
                    />
                  )}
                </motion.div>
              )}
              
              {!showCode && !showOutput && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900 dark:bg-gray-700 rounded-xl p-3 sm:p-4 flex items-center justify-center min-h-[200px]"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-green-400 font-mono text-sm">Preparing execution environment...</p>
                  </div>
                </motion.div>
              )}
              
              {/* Output Console */}
              <AnimatePresence>
                {showOutput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-black dark:bg-gray-900 rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm border-2 border-green-500/30">
                      <div className="flex items-center mb-2 pb-2 border-b border-green-500/20">
                        <Terminal className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-green-400 font-semibold">Output Console</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => {
                            setShowOutput(false);
                            setShowCode(true);
                          }}
                          className="ml-auto text-gray-400 hover:text-white transition-colors"
                        >
                          ×
                        </motion.button>
                      </div>
                      <div className="text-green-300 dark:text-green-200 whitespace-pre-wrap leading-relaxed min-h-[100px]">
                        {outputText}
                        {isExecuting && (
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-2 h-4 bg-green-400 ml-1"
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center lg:justify-end lg:col-span-1 order-1 lg:order-3"
          >
            <div className="relative">
              <motion.img
                whileHover={{ 
                  scale: 1.08,
                  rotate: [0, -2, 2, 0],
                  filter: "brightness(1.1)"
                }}
                transition={{ duration: 0.3 }}
                src={portfolioData.personal.profileImage}
                alt={portfolioData.personal.name}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700 hover:border-green-200 dark:hover:border-green-600 transition-all duration-300"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 border-2 border-dashed border-green-400/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
