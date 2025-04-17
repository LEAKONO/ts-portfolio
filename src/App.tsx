import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LazyMotion, domAnimation } from 'framer-motion';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Navbar from './components/layout/Navbar';
import Cursor from './components/sections/Cursor';
import ScrollProgress from './components/sections/ScrollProgress';
import ToTopButton from './components/sections/ToTopButton';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Simplified scroll animations - removed opacity/scale transforms that might conflict
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  // Smooth scroll handler
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

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  // Set document metadata
  useEffect(() => {
    document.title = "Emmanuel Leakono | Portfolio";
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Professional portfolio of Emmanuel Leakono, Full-Stack Developer';
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <Cursor />
      <ScrollProgress scrollYProgress={scrollYProgress} />
      
      <div 
        ref={containerRef}
        className="relative bg-gray-950 text-white scroll-smooth overflow-hidden selection:bg-purple-600 selection:text-white"
      >
        {/* Gradient backgrounds */}
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
        
        {/* Particle background */}
        <div className="fixed inset-0 -z-10 opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500"
              initial={{
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                width: Math.random() * 10 + 2 + 'px',
                height: Math.random() * 10 + 2 + 'px',
                opacity: Math.random() * 0.5 + 0.1
              }}
              animate={{
                x: [null, (Math.random() - 0.5) * 50 + 'px'],
                y: [null, (Math.random() - 0.5) * 50 + 'px'],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }}
            />
          ))}
        </div>
        
        <Navbar />
        
        <main>
          <About />
          <Services id="services" />
          <Projects id="projects" />
          <Contact id="contact" />
        </main>
        
        <Footer />
        <ToTopButton />
      </div>
    </LazyMotion>
  );
}