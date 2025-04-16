import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import socialLinks from "@/config/social";
import GradientText from "../ui/GradientText";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative py-12 bg-gradient-to-t from-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link, index) => {
            const Icon = require(`react-icons/fa`)[link.icon];
            return (
              <motion.a
                key={index}
                whileHover={{ y: -5 }}
                href={link.url}
                target="_blank"
                className={`text-2xl ${link.color}`}
              >
                <Icon />
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