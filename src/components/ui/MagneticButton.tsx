'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface MagneticButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
}

export default function MagneticButton({ children, ...props }: MagneticButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="inline-block"
      {...props}
    >
      {children}
    </motion.button>
  );
}
