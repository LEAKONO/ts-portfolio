import { motion } from "framer-motion";
import projects from "@/config/projects";
import GradientText from "../ui/GradientText";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12"
        >
          <GradientText 
            text="My Projects" 
            from="from-blue-400" 
            to="to-purple-600"
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.demo}
                    className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition flex-1 text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="px-4 py-2 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-900 transition flex-1 text-center"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}