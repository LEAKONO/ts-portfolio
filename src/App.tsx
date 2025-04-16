import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Hero from './components/sections/About'; // Renamed from About to Hero
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Navbar from './components/layout/Navbar';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  // Smooth scroll setup
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
    <div 
      ref={containerRef}
      className="relative bg-gray-950 text-white scroll-smooth overflow-hidden"
    >
     
      
      {/* Animated gradient background */}
      <motion.div 
        className="fixed inset-0 -z-20"
        style={{
          background: 'radial-gradient(circle at 75% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          y: y1
        }}
      />
      <motion.div 
        className="fixed inset-0 -z-20"
        style={{
          background: 'radial-gradient(circle at 25% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
          y: y2
        }}
      />
      
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Hero id="home" />
        <Services id="services" />
        <Projects id="projects" />
        <Contact id="contact" />
      </motion.main>
      
      <Footer />
    </div>
  );
}