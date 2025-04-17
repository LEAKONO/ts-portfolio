import { useState } from "react";
import { motion } from "framer-motion";
import GradientText from "../ui/GradientText";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={scrollToTop} className="text-2xl font-bold">
          <GradientText text="EMMANUEL" from="from-purple-400" to="to-pink-600" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          <button onClick={scrollToTop} className="hover:text-purple-400 transition-colors duration-300">Home</button>
          <a href="#services" className="hover:text-purple-400 transition-colors duration-300">Services</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">Work</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-purple-400 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-900 border-t border-gray-800">
          <button onClick={scrollToTop} className="block py-2 text-purple-300 w-full text-left">Home</button>
          <a onClick={toggleMenu} href="#services" className="block py-2 text-purple-300">Services</a>
          <a onClick={toggleMenu} href="#projects" className="block py-2 text-purple-300">Work</a>
          <a onClick={toggleMenu} href="#contact" className="block py-2 text-purple-300">Contact</a>
        </div>
      )}
    </motion.nav>
  );
}