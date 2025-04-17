'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - (isHovering ? 20 : 8));
      cursorY.set(e.clientY - (isHovering ? 20 : 8));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const hoverElements = document.querySelectorAll('a, button, .cursor-hover');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, isHovering]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        scale: isClicking ? 0.7 : isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'white' : 'white',
        opacity: isHovering ? 0.8 : 0.5
      }}
      transition={{ type: 'spring', damping: 10, stiffness: 500 }}
    >
      {isHovering && (
        <motion.div
          className="absolute inset-0 border-2 border-white rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
        />
      )}
    </motion.div>
  );
}