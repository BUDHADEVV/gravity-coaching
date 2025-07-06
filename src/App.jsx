import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CourseSection from './components/CourseSection'; // Updated import
import ResultSection from './components/ResultSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ResultSection/>
      <CourseSection /> 
      <AboutSection />
      <ContactSection/>
      
      
    </div>
  );
}

export default App;
