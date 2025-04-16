import { motion } from "framer-motion";
import GradientText from "../ui/GradientText";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">
          <GradientText text="EMMANUEL" from="from-purple-400" to="to-pink-600" />
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-purple-400 transition-colors duration-300">Home</a>
          <a href="#services" className="hover:text-purple-400 transition-colors duration-300">Services</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">Work</a>
          <a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
        </div>
        
        {/* Mobile menu button would go here */}
      </div>
    </motion.nav>
  );
}