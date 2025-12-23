import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

// SVG Icons for specific tech stack
const Icons = {
  HTML: <path d="M12 2l9.5 2.5-2.5 14L12 22 5 18.5 2.5 4.5 12 2z M12 19l4-1.5 1.5-9h-11l.5 4h7" fill="currentColor" />,
  CSS: <path d="M12 2l9.5 2.5-2.5 14L12 22 5 18.5 2.5 4.5 12 2z" fill="currentColor" opacity="0.8" />,
  JS: <path d="M4 4h16v16H4z M13 15v-3l2-1v4m-6 0v-4l2 1" fill="currentColor" />,
  Python: <path d="M12 2c-2.5 0-2.5 1-2.5 1h3v1h-4c-2.5 0-2.5 2-2.5 2v2h2v-1h3v3h-3v-1h-2v3c0 2.5 2.5 2.5 2.5 2.5h-3v-1h4c2.5 0 2.5-2 2.5-2v-2h-2v1h-3v-3h3v1h2v-3c0-2.5-2.5-2.5-2.5-2.5z" fill="currentColor" />,
  React: <g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2" /><ellipse cx="12" cy="12" rx="9" ry="3.5" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" /></g>,
  TS: <path d="M4 4h16v16H4z M8 16v-1h3v1h-3 M12 16v-5h3v1h-2v4h-1" fill="currentColor" />,
  Tailwind: <path d="M4 12c0-4 4-4 4-4s2 2 4 2 4-4 4-4-2 2-4 2-4-4-4-4z M4 18c0-4 4-4 4-4s2 2 4 2 4-4 4-4-2 2-4 2-4-4-4-4z" fill="currentColor" />,
  Git: <path d="M12 2L2 12l10 10 10-10L12 2z M12 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" />,
  Tensorflow: <path d="M12 2l-9 5v10l9 5 9-5V7l-9-5zm-1 15v-4l-4-2v-3l5 3v6zm2 0v-6l5-3v3l-4 2v4zm0-8L8 6l4-2 4 2-4 3z" fill="currentColor" />,
  Keras: <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 3.5-7 3.5-7-3.5 7-3.5zm-1 14.5l-6-3v-6l6 3v6zm2 0v-6l6-3v6l-6 3z" fill="currentColor" />,
  Docker: <path d="M4 10h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm-9-3h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zm-3-3h2v2H7zm-5 9c0 3 4 4 8 4s10-2 10-5" fill="currentColor" />,
  OpenCV: <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z M12 2v4 M12 18v4 M2 12h4 M18 12h4" fill="currentColor" />,
  YOLO: <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />, // Simplified target
};

const skills: Skill[] = [
  { name: "HTML5", icon: Icons.HTML, color: "#E34F26" },
  { name: "CSS3", icon: Icons.CSS, color: "#1572B6" },
  { name: "JavaScript", icon: Icons.JS, color: "#F7DF1E" },
  { name: "Python", icon: Icons.Python, color: "#3776AB" },
  { name: "React", icon: Icons.React, color: "#61DAFB" },
  { name: "TypeScript", icon: Icons.TS, color: "#3178C6" },
  { name: "Tailwind", icon: Icons.Tailwind, color: "#38B2AC" },
  { name: "Git", icon: Icons.Git, color: "#F05032" },
  { name: "TensorFlow", icon: Icons.Tensorflow, color: "#FF6F00" },
  { name: "Keras", icon: Icons.Keras, color: "#D00000" },
  { name: "Docker", icon: Icons.Docker, color: "#2496ED" },
  { name: "OpenCV", icon: Icons.OpenCV, color: "#5C3EE8" },
  { name: "YOLOv8", icon: Icons.YOLO, color: "#00FFFF" },
  { name: "Ultralytics", icon: Icons.YOLO, color: "#00FFFF" },
];

const TechArsenal: React.FC = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
             My Stack
           </h2>
           <h3 className="text-4xl md:text-5xl font-bold text-white">
             Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Arsenal</span>
           </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 transition-all group cursor-default backdrop-blur-sm"
            >
              <div 
                className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }} // Falls back to current color if not overridden by fill
              >
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                   {skill.icon}
                </svg>
              </div>
              <span className="text-sm font-bold text-white group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;
