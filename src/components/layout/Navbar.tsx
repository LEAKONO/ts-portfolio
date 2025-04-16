import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          EMMANUEL
        </a>
        <div className="flex gap-8">
          <a href="#projects" className="hover:text-purple-400 transition">Work</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}