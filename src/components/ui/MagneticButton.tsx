"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [5, -5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    animate(x, 0, { duration: 0.5 });
    animate(y, 0, { duration: 0.5 });
  };

  useEffect(() => {
    if (!ref.current) return;
    
    ref.current.addEventListener("mousemove", handleMouse);
    ref.current.addEventListener("mouseleave", reset);
    
    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener("mousemove", handleMouse);
      ref.current.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <motion.button
      ref={ref}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformPerspective: 1000
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {/* Ripple effect (optional) */}
      <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </motion.button>
  );
}