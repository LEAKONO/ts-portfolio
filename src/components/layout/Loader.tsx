import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-950 ${!isLoading && 'pointer-events-none'}`}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        EL
      </motion.div>
    </motion.div>
  );
}