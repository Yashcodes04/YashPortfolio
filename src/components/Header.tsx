import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, ChevronDown, Play, X, ArrowDown } from 'lucide-react';

const Header: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showConsole, setShowConsole] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [currentOutputIndex, setCurrentOutputIndex] = useState(0);

  // Console output messages
  const outputMessages = [
    "Compiling main.cpp...",
    "Build successful!",
    "Running program...",
    "",
    "Hello! I'm Yash Gawhale",
    "Currently pursuing Computer Science degree",
    "Specializing in AI and Machine Learning",
    "Love contributing to open-source projects",
    "Always exploring cutting-edge research!",
    "",
    "Skills: AI, Machine Learning, React, C++, Python and many more ",
    "Passion: Building innovative solutions",
    "",
    "Program executed successfully"
  ];

  // Console output animation
  React.useEffect(() => {
    if (showConsole && currentOutputIndex < outputMessages.length) {
      const timer = setTimeout(() => {
        setConsoleOutput(prev => [...prev, outputMessages[currentOutputIndex]]);
        setCurrentOutputIndex(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showConsole, currentOutputIndex, outputMessages]);

  const handleRun = async () => {
    setIsRunning(true);
    
    // Simulate compilation time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsRunning(false);
    setShowConsole(true);
    setConsoleOutput([]);
    setCurrentOutputIndex(0);
  };

  const handleCloseConsole = () => {
    setShowConsole(false);
    setConsoleOutput([]);
    setCurrentOutputIndex(0);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('education');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="header" className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                rotateX: 5,
              }}
              className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
            >
              {/* Animated border rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-green-400/30 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-blue-400/20 border-dotted"
              />
              
              {/* Profile image */}
              <motion.img
                src="profilephoto.jpg"
                alt="Yash Gawhale"
                className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating tech icons around profile */}
              {[
                { icon: '🤖', delay: 0, radius: 80, angle: 0 },
                { icon: '⚛️', delay: 0.5, radius: 90, angle: 120 },
                { icon: '🐍', delay: 1, radius: 85, angle: 240 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute text-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: Math.cos((item.angle * Math.PI) / 180) * item.radius,
                    y: Math.sin((item.angle * Math.PI) / 180) * item.radius,
                  }}
                  transition={{ 
                    delay: item.delay + 1,
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}
                  whileHover={{ scale: 1.5, rotate: 360 }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight"
          >
            Yash Gawhale
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-8 sm:mb-12 tracking-wide"
          >
            AIML Engineer & Computer Science Student
          </motion.p>

          {/* About Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            onClick={() => setShowAbout(true)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Code2 className="w-5 h-5" />
            About Me
          </motion.button>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
            className="flex justify-center gap-6 mt-12"
          >
            {[
              { icon: Github, href: "https://github.com/Yashcodes04", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/yash-gawhale-4277b8258/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:yashgawhale004@gmail.com", label: "Email" },
              { icon: Code2, href: "https://leetcode.com/u/Yash432/", label: "LeetCode" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400 mb-4 tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* About Modal */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            onClick={() => {
              setShowAbout(false);
              handleCloseConsole();
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">About</h3>
                </div>
                <div className="flex items-center gap-3">
                  {!showConsole && (
                    <motion.button
                      onClick={handleRun}
                      disabled={isRunning}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 text-sm"
                    >
                      {isRunning ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Running...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Run
                        </>
                      )}
                    </motion.button>
                  )}
                  <button
                    onClick={() => {
                      setShowAbout(false);
                      handleCloseConsole();
                    }}
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                {!showConsole ? (
                  /* Code Display */
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden"
                  >
                    {/* Code Header */}
                    <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-400 ml-4 text-sm">main.cpp</span>
                      </div>
                      <div className="text-gray-400 text-sm">C++</div>
                    </div>

                    {/* Code Content */}
                    <div className="p-6 font-mono text-sm leading-relaxed bg-gray-900 text-gray-300">
                      <pre className="whitespace-pre-wrap">{`#include <iostream>
#include <string>
#include <vector>

class Developer {
private:
    std::string name;
    std::string degree;
    std::vector<std::string> skills;
    std::string passion;

public:
    Developer() {
        name = "Yash Gawhale";
        degree = "Computer Science";
        skills = {"AI", "Machine Learning", "React", "C++", "Python"};
        passion = "Building innovative solutions";
    }
    
    void introduce() {
        std::cout << "Hello! I'm " << name << std::endl;
        std::cout << "Currently pursuing " << degree << " degree" << std::endl;
        std::cout << "Specializing in AI and Machine Learning" << std::endl;
        std::cout << "Love contributing to open-source projects" << std::endl;
        std::cout << "Always exploring cutting-edge research!" << std::endl;
    }
};

int main() {
    Developer me;
    me.introduce();
    return 0;
}`}</pre>
                    </div>
                  </motion.div>
                ) : (
                  /* Console Output */
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-black rounded-lg border border-green-500 overflow-hidden"
                  >
                    {/* Console Header */}
                    <div className="bg-gray-900 px-4 py-3 border-b border-green-500 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-mono">Terminal</span>
                      </div>
                      <button
                        onClick={handleCloseConsole}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Console Content */}
                    <div className="p-6 font-mono text-sm leading-relaxed min-h-[300px]">
                      {consoleOutput.map((line, index) => (
                        <motion.div
                          key={index}
                          className="text-green-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {line && <span className="text-green-600">$ </span>}
                          {line}
                        </motion.div>
                      ))}
                      {currentOutputIndex < outputMessages.length && (
                        <motion.span
                          className="inline-block w-2 h-4 bg-green-400 ml-1"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Header;