import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-gray-950 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: Infinity
        }}
        className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
      />
    </motion.div>
  )
}