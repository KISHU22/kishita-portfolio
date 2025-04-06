import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>

      <ScrollToTopButton/>
    </>
  );
}

export default App;


