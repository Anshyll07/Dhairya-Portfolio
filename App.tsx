import React, { useState, useEffect } from 'react';
import './App.css';
import LiquidBackground from './components/LiquidBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import TechArsenal from './components/TechArsenal';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SectionWrapper from './components/SectionWrapper';
import MouseTracer from './components/MouseTracer';
import BrowserWarning from './components/BrowserWarning';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showBrowserWarning, setShowBrowserWarning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const isChrome = navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Chromium");
    const warningShown = localStorage.getItem('browserWarningShown');

    if (isChrome && !warningShown) {
      setShowBrowserWarning(true);
    }
  }, []);

  const handleCloseBrowserWarning = () => {
    setShowBrowserWarning(false);
    localStorage.setItem('browserWarningShown', 'true');
  };

  const WrappedAbout = SectionWrapper(About, 'about');
  const WrappedExpertise = SectionWrapper(Expertise, 'expertise');
  const WrappedTechArsenal = SectionWrapper(TechArsenal, 'tech');
  const WrappedProjects = SectionWrapper(Projects, 'projects');
  const WrappedContact = SectionWrapper(Contact, 'contact');

  return (
    <div className="relative w-full min-h-screen text-white">
      {showBrowserWarning && <BrowserWarning onClose={handleCloseBrowserWarning} />}

      <LiquidBackground />

      {isDesktop && <MouseTracer />}

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <WrappedAbout />
          <WrappedExpertise />
          <WrappedTechArsenal />
          <WrappedProjects />
          <WrappedContact />
        </main>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default App;