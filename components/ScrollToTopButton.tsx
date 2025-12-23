import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: isVisible ? 1.1 : 0 }}
      whileTap={{ scale: isVisible ? 0.9 : 0 }}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollToTopButton;
