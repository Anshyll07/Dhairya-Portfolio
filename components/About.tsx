import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
       <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-medium tracking-widest uppercase text-sm"
          >
            About Me
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mt-6 mb-10 leading-tight"
          >
             I transform complex problems into <span className="text-indigo-400 italic">beautiful</span>, intuitive interface designs.
          </motion.h2>

          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-white text-lg leading-loose"
          >
            With over 3 years of experience in full-stack development, I specialize in the React ecosystem. 
            My philosophy revolves around the idea that code should be as elegant as the visual output it produces. 
            When I'm not coding, I'm exploring the frontiers of Generative AI or contributing to open-source libraries.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-white/10 pt-12">
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Projects Shipped', value: '40+' },
              { label: 'AI Projects Completed', value: '5' },
              { label: 'Coffee Consumed', value: '∞' }
            ].map((stat, i) => (
               <div key={i} className="flex flex-col items-center">
                 <span className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</span>
                 <span className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</span>
               </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default About;