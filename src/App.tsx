import React from 'react';
import { useState } from 'react';
import Navigation from './components/Navigation';
import DarkModeToggle from './components/DarkModeToggle';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Publications from './components/Publications';
import BackToTop from './components/BackToTop';
import LinkTransition from './components/LinkTransition';
import EntranceAnimation from './components/EntranceAnimation';
import { useLinkTransition } from './hooks/useLinkTransition';

function App() {
  const { isTransitioning } = useLinkTransition();
  const [showEntranceAnimation, setShowEntranceAnimation] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleEntranceComplete = () => {
    setShowMainContent(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {showEntranceAnimation && (
        <EntranceAnimation onComplete={handleEntranceComplete} />
      )}
      
      {showMainContent && (
        <>
          <Navigation />
          <DarkModeToggle />
          <Header />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Publications />
          <BackToTop />
        </>
      )}
      
      <LinkTransition isVisible={isTransitioning} />
    </div>
  );
}

export default App;