import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { IconType } from "react-icons";
import GradientText from "../ui/GradientText";

// Define types for social links
interface SocialLink {
  name: string;
  url: string;
  icon: keyof typeof iconMap;
  color: string;
}

// Map string keys to actual icon components
const iconMap = {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} as const;

// Define your social links data with proper typing
const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/LEAKONO",
    icon: "FaGithub",
    color: "text-gray-300 hover:text-white"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/emmanuel-leakono-7125472b8/",
    icon: "FaLinkedin",
    color: "text-gray-300 hover:text-blue-500"
  },
  {
    name: "Website",
    url: "https://leakono-portfolio.vercel.app/",
    icon: "FaGlobe",
    color: "text-gray-300 hover:text-emerald-500"
  }
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-12 bg-gradient-to-t from-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link, index) => {
            const Icon: IconType = iconMap[link.icon];
            return (
              <motion.a
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${link.color} transition-colors duration-300`}
                aria-label={link.name}
              >
                {Icon && <Icon />}
              </motion.a>
            );
          })}
        </div>
        <p className="text-gray-500">
          <GradientText 
            text={`© ${new Date().getFullYear()} Emmanuel Leakono`} 
            from="from-purple-400" 
            to="to-pink-500"
            className="text-sm"
          />
        </p>
      </div>
    </motion.footer>
  );
}