import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/LEAKONO",
    icon: FaGithub,
    color: "hover:text-purple-400",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/emmanuel-leakono-7125472b8",
    icon: FaLinkedin,
    color: "hover:text-blue-500",
  },
  {
    name: "Portfolio",
    url: "https://my-website-amber-pi.vercel.app/",
    icon: FaGlobe,
    color: "hover:text-green-400",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12"
        >
          <GradientText 
            text="Let's Talk" 
            from="from-blue-400" 
            to="to-purple-600" 
          />
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 flex flex-col gap-6 justify-center"
          >
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-400">leakonoemmanuel3@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">+254113535094</p>
            </div>
            <div className="flex gap-6 mt-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ y: -4 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-3xl ${link.color}`}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            ></textarea>
            <MagneticButton 
              type="submit" 
              className="px-6 py-3 bg-purple-600 rounded-lg font-bold w-full"
            >
              Send Message
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
