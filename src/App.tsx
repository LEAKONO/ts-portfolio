import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Navbar from './components/layout/Navbar';

export default function App() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="bg-gray-950 text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}