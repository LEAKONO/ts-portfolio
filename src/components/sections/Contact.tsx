import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Let's Talk
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-purple-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-purple-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-purple-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="px-6 py-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 transition"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-6">Find Me Online</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/LEAKONO"
                target="_blank"
                className="flex items-center gap-4 text-xl hover:text-purple-400 transition"
              >
                <FaGithub className="text-3xl" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/emmanuel-leakono-7125472b8"
                target="_blank"
                className="flex items-center gap-4 text-xl hover:text-blue-500 transition"
              >
                <FaLinkedin className="text-3xl" /> LinkedIn
              </a>
              <p className="mt-8 text-gray-300">
                <span className="font-bold">Email:</span> leakonoemmanuel3@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-bold">Phone:</span> +254 113535094
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}