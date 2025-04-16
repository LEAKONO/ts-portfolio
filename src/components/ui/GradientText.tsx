import { motion } from "framer-motion";

interface GradientTextProps {
  text: string;
  from?: string;
  to?: string;
  className?: string;
}

export default function GradientText({ 
  text, 
  from = "from-purple-400", 
  to = "to-pink-600",
  className = "" 
}: GradientTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-clip-text text-transparent bg-gradient-to-r ${from} ${to} ${className}`}
    >
      {text}
    </motion.span>
  );
}