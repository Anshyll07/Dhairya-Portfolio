import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = (Component: React.FC, idName: string) => 
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.25,
              },
            },
          }}
        >
          <Component />
        </motion.div>
      </motion.section>
    );
  };

export default SectionWrapper;
