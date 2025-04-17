import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 to-gray-950" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h1 
            variants={textVariants}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Crafting Digital
            <motion.span 
              className="block"
              animate={{ x: [0, 10, -5, 0] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "mirror", 
                duration: 5,
                ease: "easeInOut"
              }}
            >
              Experiences
            </motion.span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 text-gray-300"
          >
            I design and develop immersive digital experiences that captivate audiences and drive results.
          </motion.p>

          <motion.div
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Start Your Project</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}