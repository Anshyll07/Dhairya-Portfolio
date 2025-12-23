import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const phrases = ["Digital Future.", "AI Futures.", "Next Gen Web."];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setDelta(isDeleting ? 50 : 150 - Math.random() * 50);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setDelta(2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setTimeout(handleTyping, delta);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, delta]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">
      <div className="max-w-5xl w-full relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-medium tracking-wider mb-4 uppercase text-sm">
            Portfolio 2025
          </h2>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-[1.1] mb-8">
            Designing the <br />
            <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 h-[1.2em]">
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-2 h-10 md:h-20 ml-2 bg-cyan-400 block"
              />
            </span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Hi, I'm Dhairya. A creative engineer and UI/UX enthusiast.
            I build fluid, interactive web experiences that merge art with code.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="group px-8 py-4 bg-white text-background font-bold rounded-full flex items-center gap-2 hover:bg-slate-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;