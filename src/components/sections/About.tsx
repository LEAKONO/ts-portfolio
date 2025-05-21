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
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";
import { TypeAnimation } from "react-type-animation";

const name = "Emmanuel Leakono";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-start px-4 sm:pl-10 overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-8"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-2">
            <TypeAnimation
              sequence={[
                `Hi, I'm ${name}`,
                1000,
                "",
                500,
                `Hi, I'm ${name}`,
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={30}
              style={{ display: "inline-block" }}
              className="text-emerald-400"
            />
          </h1>
          <h4 className="text-xl sm:text-2xl md:text-3xl font-thin text-gray-300">
            <TypeAnimation
              sequence={[
                1500, // initial delay to sync with name
                "Full Stack Software Engineer",
                2000,
                "",
                500,
                "Full Stack Software Engineer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={30}
              style={{ display: "inline-block" }}
            />
          </h4>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex flex-col lg:flex-row gap-12 items-start"
        >
          {/* Image Section */}
          <div className="flex-1 w-full max-w-lg mx-auto order-1 lg:order-1 mt-16">
            <motion.div
              initial={{ scale: 0.9, rotate: -2 }}
              animate={{
                scale: 1,
                rotate: 0,
                transition: {
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              }}
              className="relative w-full group"
              whileHover={{
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
            >
              {/* Glowing background effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Floating circles */}
              <motion.div
                className="absolute -bottom-5 -right-5 w-24 h-24 bg-emerald-500/10 rounded-full border-2 border-emerald-400/30 backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />

              <motion.div
                className="absolute -top-5 -left-5 w-16 h-16 bg-teal-600/10 rounded-full border-2 border-teal-400/30 backdrop-blur-sm"
                animate={{
                  y: [0, 10, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              />

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10"></div>

                {/* Image with parallax effect */}
                <motion.img
                  src="/images/YoungMe.png"
                  className="w-full h-auto object-cover"
                  alt="Emmanuel Leakono"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.5 },
                  }}
                />

                {/* Subtle shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: -100 }}
                  whileHover={{
                    x: 100,
                    transition: {
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                  }}
                />
              </div>

              {/* Floating tech icons around the image */}
              <motion.div
                className="absolute -bottom-8 -left-8 text-3xl text-emerald-400"
                animate={{
                  rotate: [0, 10, 0],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <SiReact />
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 text-3xl text-teal-400"
                animate={{
                  rotate: [0, -15, 0],
                  transition: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
              >
                <SiNodedotjs/>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="flex-1 order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <GradientText
                text="My Expertise"
                from="from-emerald-400"
                to="to-teal-600"
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            >
              {/* Frontend Development */}
              <div>
                <h4 className="text-xl font-semibold text-gray-100 mb-2">
                  Frontend Development
                </h4>
                <p className="text-gray-300 leading-relaxed">
                I architect immersive user experiences with <span className="text-emerald-300 font-medium">React</span>, <span className="text-emerald-300 font-medium">TypeScript</span>, <span className="text-emerald-300 font-medium">Tailwind CSS</span>, <span className="text-emerald-300 font-medium">HTML</span>, and <span className="text-emerald-300 font-medium">JavaScript</span>. My interfaces are visually stunning, optimized for performance, accessibility, and seamless interactivity.                </p>
              </div>

              {/* Backend Engineering */}
              <div>
                <h4 className="text-xl font-semibold text-gray-100 mb-2">
                  Backend Engineering
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  I build robust, scalable APIs and server‑side applications using <span className="text-emerald-300 font-medium">Node.js</span>, <span className="text-emerald-300 font-medium">Django</span>, and <span className="text-emerald-300 font-medium">Flask</span>. My solutions are secure, efficient, and designed to handle real‑world traffic.
                </p>
              </div>

              {/* Database Design */}
              <div>
                <h4 className="text-xl font-semibold text-gray-100 mb-2">
                  Database Design
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Whether it's <span className="text-emerald-300 font-medium">MongoDB</span> for flexible document storage or <span className="text-emerald-300 font-medium">PostgreSQL</span> for complex relational data, I design architectures that balance performance with maintainability.
                </p>
              </div>

              {/* DevOps & Tools */}
              <div>
                <h4 className="text-xl font-semibold text-gray-100 mb-2">
                  DevOps &amp; Tools
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  I streamline workflows with <span className="text-emerald-300 font-medium">Git</span>, CI/CD pipelines, and modern testing strategies. My code is clean, documented, and production‑ready from day one.
                </p>
              </div>
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div className="mt-8">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-4 text-gray-200"
              >
                My <span className="text-emerald-400">Tech Stack</span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-center mb-8"
              >
                {[
                  { icon: <SiReact />, name: "React", color: "text-cyan-400" },
                  {
                    icon: <SiTypescript />,
                    name: "TypeScript",
                    color: "text-blue-500",
                  },
                  {
                    icon: <SiNodedotjs />,
                    name: "Node.js",
                    color: "text-green-500",
                  },
                  {
                    icon: <SiDjango />,
                    name: "Django",
                    color: "text-emerald-700",
                  },
                  {
                    icon: <SiMongodb />,
                    name: "MongoDB",
                    color: "text-green-600",
                  },
                  {
                    icon: <SiPostgresql />,
                    name: "PostgreSQL",
                    color: "text-blue-400",
                  },
                  {
                    icon: <SiPostman />,
                    name: "Postman",
                    color: "text-orange-500",
                  },
                  { icon: <SiGit />, name: "Git", color: "text-red-500" },
                  { icon: <SiMysql />, name: "MySQL", color: "text-blue-600" },
                  { icon: <SiFlask />, name: "Flask", color: "text-gray-300" },
                  { icon: <SiHtml5 />, name: "HTML5", color: "text-orange-400" },
                  {
                    icon: <SiTailwindcss />,
                    name: "Tailwind",
                    color: "text-cyan-300",
                  },
                  { icon: <SiCss3 />, name: "CSS3", color: "text-blue-400" },
                  { icon: <SiFramer />, name: "Framer", color: "text-pink-500" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${item.color} hover:text-teal-300 transition-all duration-300 cursor-default flex flex-col items-center`}
                  >
                    <div className="text-3xl sm:text-4xl mb-1">{item.icon}</div>
                    <div className="text-xs sm:text-sm font-medium text-gray-300">
                      {item.name}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
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
                    onClick={() =>
                      window.open("https://github.com/LEAKONO", "_blank")
                    }
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
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/emmanuel-leakono-7125472b8/",
                        "_blank"
                      )
                    }
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

                {/* Transcript Button */}
                <MagneticButton>
                  <a
                    href="https://drive.google.com/file/d/1tCt9idB40EwydM7k75iLR_Sf_ARwqbDM/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg font-bold shadow-lg overflow-hidden group block"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-white">
                      <FiDownload className="text-xl transition-transform group-hover:scale-110" />
                      <span>Transcript</span>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/30 rounded-lg transition-all duration-300"></span>
                  </a>
                </MagneticButton>
              </motion.div>
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