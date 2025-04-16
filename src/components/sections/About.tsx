import { motion } from "framer-motion";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Image Section */}
          <div className="flex-1">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-md opacity-75"></div>
              <img 
                src="/path-to-your-image.jpg" // Replace with your image path
                alt="Emmanuel Leakono"
                className="relative rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <GradientText 
                text="About Me" 
                from="from-blue-400" 
                to="to-purple-600" 
              />
            </h2>
            
            <p className="text-gray-300 text-lg mb-6">
              Hi, I'm Emmanuel Leakono, a passionate Full-Stack Developer with expertise in React, TypeScript, and modern web technologies. With 5+ years of experience, I create performant, accessible, and visually stunning web applications.
            </p>
            
            <p className="text-gray-300 text-lg mb-8">
              When I'm not coding, you can find me contributing to open-source projects, learning new technologies, or mentoring junior developers. I believe in writing clean, maintainable code and creating exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-purple-400">React</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-blue-400">TypeScript</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-green-400">Node.js</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-yellow-400">GraphQL</span>
            </div>

            <MagneticButton className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold">
              Download Resume
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}