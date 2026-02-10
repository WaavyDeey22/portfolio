import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Loader from './components/Loader';
import { 
  useCustomCursor, 
  useSmoothScroll, 
  useScrollAnimations, 
  useBackToTop 
} from './hooks/useEffects';

function App() {
  // Initialize all custom hooks
  useCustomCursor();
  useSmoothScroll();
  useScrollAnimations();
  useBackToTop();

  return (
    <>
      <Loader />
      
      {/* Custom Cursor */}
      <div className="cursor"></div>
      <div className="cursor-follower"></div>

      {/* Particles Background */}
      <Particles />

      <div className="content-wrapper">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
        
        {/* Back to Top Button */}
        <div className="back-to-top" id="backToTop">↑</div>
      </div>
    </>
  );
}

export default App;
