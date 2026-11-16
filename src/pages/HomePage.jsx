import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // If navigated with hash like /#projects, smoothly scroll to target
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
