import { motion } from "framer-motion";
import GradientText from "../ui/GradientText";

const services = [
  {
    title: "Web Development",
    description: "Custom, responsive websites built with modern technologies like React, Next.js, and TypeScript for optimal performance and user experience.",
    icon: "💻"
  },
  {
    title: "Backend Solutions",
    description: "Scalable backend systems using Node.js, Express, and databases like MongoDB or PostgreSQL to power your applications.",
    icon: "⚙️"
  },
  {
    title: "Frontend Development",
    description: "Building intuitive, engaging, and responsive user interfaces with modern frameworks like React, ensuring a seamless user experience across devices.",
    icon: "🎨"
  },
  {
    title: "API Development",
    description: "RESTful and GraphQL APIs designed for efficiency, security, and scalability to connect your frontend with your data.",
    icon: "🔗"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText 
              text="My Services" 
              from="from-purple-400" 
              to="to-pink-600" 
            />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer comprehensive solutions to bring your digital ideas to life with cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
