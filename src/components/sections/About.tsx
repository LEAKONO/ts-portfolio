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
              Full-Stack Software Engineer specializing in building modern, scalable web applications. 
              I bring projects from concept to production with secure authentication, real-time features, and clean UI/UX 
              using technologies like React, Node.js, and Tailwind CSS.
            </p>
            
            <p className="text-gray-300 text-lg mb-8">
              My technical projects like the Doctor Appointment Booking System and Task Master app demonstrate my ability 
              to create full-stack solutions with CRUD operations, JWT authentication, and responsive designs. 
              I'm passionate about solving real-world problems through clean, maintainable code.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-purple-400">React</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-blue-400">TypeScript</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-green-400">Node.js</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-yellow-400">Django</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-pink-400">MongoDB</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-indigo-400">PostgreSQL</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://github.com/LEAKONO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/emmanuel-leakono-7125472b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                LinkedIn
              </a>
              <a 
                href="https://my-website-amber-pi.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                Portfolio
              </a>
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