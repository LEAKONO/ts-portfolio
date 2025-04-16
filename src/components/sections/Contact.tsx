import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
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
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            {/* ... (keep existing form fields) ... */}
            <MagneticButton 
              type="submit" 
              className="px-6 py-3 bg-purple-600 rounded-lg font-bold w-full"
            >
              Send Message
            </MagneticButton>
          </motion.form>

          {/* ... (keep social links section) ... */}
        </div>
      </div>
    </section>
  );
}