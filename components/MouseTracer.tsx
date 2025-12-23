import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const MouseTracer: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const springConfig = { damping: 30, stiffness: 200 };
  
  const mouse = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig),
  };
  
  const scale = useSpring(1, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover listeners to all interactive elements
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [mouse.x, mouse.y]);

  useEffect(() => {
    scale.set(isHovering ? 2.5 : 1);
  }, [isHovering, scale]);

  return (
    <motion.div
      style={{
        translateX: mouse.x,
        translateY: mouse.y,
        scale,
      }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/30 backdrop-blur-sm border border-primary/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50"
    />
  );
};

export default MouseTracer;
