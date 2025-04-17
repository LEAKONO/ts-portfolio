import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-800 origin-left z-40"
      style={{ scaleX: scrollYProgress }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%']
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2,
          ease: 'linear'
        }}
      />
    </motion.div>
  );
}