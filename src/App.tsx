import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DarkModeToggle from './components/DarkModeToggle';
import AnimationToggle from './components/AnimationToggle';
import NewsPopup from './components/NewsPopup';
import Header from './components/Header';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import ProjectsPreview from './components/ProjectsPreview';
import Achievements from './components/Achievements';
import Publications from './components/Publications';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import LinkTransition from './components/LinkTransition';
import EntranceAnimation from './components/EntranceAnimation';
import FloatingElements from './components/FloatingElements';
import InteractiveBackground from './components/InteractiveBackground';
import ProjectsPage from './pages/ProjectsPage';
import { useLinkTransition } from './hooks/useLinkTransition';
import { useAnimationToggle } from './hooks/useAnimationToggle';

function MainPage() {
  const { isTransitioning } = useLinkTransition();
  const { isAnimationEnabled, toggleAnimations } = useAnimationToggle();
  const [showEntranceAnimation, setShowEntranceAnimation] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleEntranceComplete = () => {
    setShowMainContent(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {isAnimationEnabled && <InteractiveBackground />}
      {isAnimationEnabled && <FloatingElements />}
      
      {showEntranceAnimation && (
        <EntranceAnimation onComplete={handleEntranceComplete} />
      )}
      
      {showMainContent && (
        <>
          <Navigation />
          <NewsPopup />
          <DarkModeToggle />
          <AnimationToggle isEnabled={isAnimationEnabled} onToggle={toggleAnimations} />
          <Header />
          <Education />
          <TechStack />
          <Experience />
          <ProjectsPreview />
          <Achievements />
          <Publications />
          <Contact />
          <BackToTop />
        </>
      )}
      
      <LinkTransition isVisible={isTransitioning} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}



export default App;