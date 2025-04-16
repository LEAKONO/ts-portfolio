import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiGit,
  SiMysql,
  SiFlask,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
} from "react-icons/si";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";

export default function About() {
  return (
<section id="about" className="pt-32 pb-20 bg-gray-900">
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
                src="/path-to-your-image.jpg"
                className="relative rounded-2xl w-full h-auto object-cover"
                alt="About me"
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
              Hi, I'm{" "}
              <span className="text-white font-semibold">Emmanuel Leakono</span>{" "}
              a Full-Stack Software Engineer who specializes in building
              modern, scalable web applications.
            </p>

            <p className="text-gray-300 text-lg mb-6">
              I bring projects from concept to production with secure
              authentication, real-time features, and clean UI/UX using
              technologies like React, Node.js, and Tailwind CSS.
            </p>

            <p className="text-gray-300 text-lg mb-8">
              My technical projects like the Doctor Appointment Booking System
              and Task Master app demonstrate my ability to create full-stack
              solutions with CRUD operations, JWT authentication, and responsive
              designs. I'm passionate about solving real-world problems through
              clean, maintainable code.
            </p>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-4xl text-center text-blue-500 mb-8">
              <SiReact
                title="React"
                className="hover:text-blue-300 transition"
              />
              <SiTypescript
                title="TypeScript"
                className="hover:text-blue-300 transition"
              />
              <SiNodedotjs
                title="Node.js"
                className="hover:text-blue-300 transition"
              />
              <SiDjango
                title="Django"
                className="hover:text-blue-300 transition"
              />
              <SiMongodb
                title="MongoDB"
                className="hover:text-blue-300 transition"
              />
              <SiPostgresql
                title="PostgreSQL"
                className="hover:text-blue-300 transition"
              />
              <SiPostman
                title="Postman"
                className="hover:text-blue-300 transition"
              />
              <SiGit title="Git" className="hover:text-blue-300 transition" />
              <SiMysql
                title="MySQL"
                className="hover:text-blue-300 transition"
              />
              <SiFlask
                title="Flask"
                className="hover:text-blue-300 transition"
              />
              <SiHtml5
                title="HTML5"
                className="hover:text-blue-300 transition"
              />
              <SiTailwindcss
                title="Tailwind CSS"
                className="hover:text-blue-300 transition"
              />
              <SiCss3 title="CSS3" className="hover:text-blue-300 transition" />
            </div>

            {/* Social Links */}
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

            {/* Resume Button */}
            <MagneticButton className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white">
              Download Resume
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
