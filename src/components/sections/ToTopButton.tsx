import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ToTopButton() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      setIsVisible(value > 0.2);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg z-30 flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M5 15L12 8L19 15" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}