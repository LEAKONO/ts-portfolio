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
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";

const name = "Emmanuel Leakono";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-start pt-10 px-4 sm:pl-10 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section with Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-thin mb-4"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                delay: 0.3,
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-teal-600"
            >
              {name}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                transition: {
                  delay: 2.3,
                  repeat: Infinity,
                  duration: 1.5,
                },
              }}
              className="ml-2 inline-block h-12 w-1 bg-emerald-400"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8"
          >
            <span className="inline-block overflow-hidden">
              <motion.span
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                className="inline-block"
              >
                Full-Stack Developer & Digital Craftsman
              </motion.span>
            </span>
          </motion.p>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Image Section */}
          <div className="flex-1 w-full max-w-lg mx-auto">
            <motion.div
              initial={{ scale: 0.9, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="relative w-full"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10"></div>
                <img
                  src="/images/dev.jpg"
                  className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                  alt="Emmanuel Leakono"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-emerald-500/10 rounded-full border-2 border-emerald-400/30 backdrop-blur-sm"></div>
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-teal-600/10 rounded-full border-2 border-teal-400/30 backdrop-blur-sm"></div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              <GradientText
                text="My Expertise"
                from="from-emerald-400"
                to="to-teal-600"
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed"
            >
              I specialize in building{" "}
              <span className="text-white font-medium">modern</span>,{" "}
              <span className="text-white font-medium">scalable</span> web
              applications with cutting-edge technologies like{" "}
              <span className="text-emerald-300 font-medium">React</span>,{" "}
              <span className="text-emerald-300 font-medium">Next.js</span>, and{" "}
              <span className="text-emerald-300 font-medium">Tailwind CSS</span>
              . With a passion for{" "}
              <span className="text-white font-medium">elegant code</span> and{" "}
              <span className="text-white font-medium">
                intuitive interfaces
              </span>
              , I craft digital experiences that are as{" "}
              <span className="text-white font-medium">performant</span> as they
              are <span className="text-white font-medium">beautiful</span>.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-3xl sm:text-4xl text-center text-emerald-400 mb-8"
            >
              {[
                { icon: <SiReact title="React" />, color: "text-cyan-400" },
                { icon: <SiNextdotjs title="Next.js" />, color: "text-white" },
                {
                  icon: <SiTypescript title="TypeScript" />,
                  color: "text-blue-500",
                },
                {
                  icon: <SiNodedotjs title="Node.js" />,
                  color: "text-green-500",
                },
                {
                  icon: <SiDjango title="Django" />,
                  color: "text-emerald-700",
                },
                {
                  icon: <SiMongodb title="MongoDB" />,
                  color: "text-green-600",
                },
                {
                  icon: <SiPostgresql title="PostgreSQL" />,
                  color: "text-blue-400",
                },
                {
                  icon: <SiPostman title="Postman" />,
                  color: "text-orange-500",
                },
                { icon: <SiGit title="Git" />, color: "text-red-500" },
                { icon: <SiMysql title="MySQL" />, color: "text-blue-600" },
                { icon: <SiFlask title="Flask" />, color: "text-gray-300" },
                { icon: <SiHtml5 title="HTML5" />, color: "text-orange-400" },
                {
                  icon: <SiTailwindcss title="Tailwind CSS" />,
                  color: "text-cyan-300",
                },
                { icon: <SiCss3 title="CSS3" />, color: "text-blue-400" },
                {
                  icon: <SiFramer title="Framer Motion" />,
                  color: "text-pink-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${item.color} hover:text-teal-300 transition-all duration-300 cursor-default`}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {/* GitHub Button */}
              <MagneticButton>
                <button
                  onClick={() => window.open("https://github.com/LEAKONO", "_blank")}
                  className="relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg font-bold shadow-lg overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    <FaGithub className="text-xl transition-transform group-hover:scale-110" />
                    <span>GitHub</span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/30 rounded-lg transition-all duration-300"></span>
                </button>
              </MagneticButton>

              {/* LinkedIn Button */}
              <MagneticButton>
                <button
                  onClick={() => window.open("https://www.linkedin.com/in/emmanuel-leakono-7125472b8/", "_blank")}
                  className="relative px-6 py-3 bg-transparent border-2 border-teal-600 rounded-lg font-bold overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2 text-teal-400 group-hover:text-white transition-colors">
                    <FaLinkedinIn className="text-xl transition-transform group-hover:scale-110" />
                    <span>LinkedIn</span>
                  </span>
                  <span className="absolute inset-0 bg-teal-600/10 group-hover:bg-teal-600/30 transition-all duration-300"></span>
                  <span className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400/30 rounded-lg transition-all duration-300"></span>
                </button>
              </MagneticButton>

              {/* Resume Button */}
              <MagneticButton>
                <a
                  href="https://docs.google.com/document/d/18d0dd1Xa_vpDJoVT1qCBa0lmumbPSMmREetQlQZnwMY/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-bold shadow-lg overflow-hidden group block"
                >
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    <FiDownload className="text-xl transition-transform group-hover:scale-110" />
                    <span>Resume</span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/30 rounded-lg transition-all duration-300"></span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="mt-12 pt-6 border-t border-gray-700/50"
            >
              <div className="text-emerald-400 text-lg font-light italic">
                "Code is poetry, and the browser is my canvas."
              </div>
              <div className="text-gray-400 text-sm mt-2">
                — Emmanuel Leakono
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}