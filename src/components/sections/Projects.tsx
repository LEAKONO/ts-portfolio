import { motion } from "framer-motion";
import GradientText from "../ui/GradientText";

interface Project {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Doctor Appointment System",
    description: "Full-stack booking platform for doctors and patients with real-time scheduling and JWT authentication.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    demo: "https://doctors-appointment-rip9.vercel.app/",
    github: "https://github.com/LEAKONO/doctors-appointment",
    image: "/images/doctor-appointment.jpg"
  },
  {
    title: "Task Master",
    description: "Productivity app with CRUD operations, PostgreSQL backend, and responsive UI.",
    tech: ["React", "Flask", "PostgreSQL", "Tailwind"],
    demo: "https://task-master-frontend-red.vercel.app/",
    github: "https://github.com/LEAKONO/task-master-frontend",
    image: "/images/task-master.jpg"
  },
  {
    title: "Finance Tracker",
    description: "Personal budget tracking platform with JWT authentication and Redux state management.",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    demo: "https://budget-trucker.vercel.app/",
    github: "https://github.com/LEAKONO/Budget-Trucker",
    image: "/images/finance-tracker.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all group"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition flex-1 text-center font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-purple-600 text-purple-300 hover:bg-purple-900/50 rounded-lg transition flex-1 text-center font-medium"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/LEAKONO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-900/30 rounded-lg text-lg font-semibold transition-all hover:scale-105"
          >
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}