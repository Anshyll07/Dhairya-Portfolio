import React from 'react';
import { motion, useScroll, useTransform, useSpring, easeInOut } from 'framer-motion';

const LiquidBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
    const smoothProgress = useSpring(scrollYProgress, {
      mass: 1,
      stiffness: 50,
      damping: 30,
      restDelta: 0.001
    });

  // --- Main Bob (Bob 1) Transformations ---
  const y = useTransform(smoothProgress, 
    [0, 0.15, 0.35, 0.55, 0.75, 1], 
    ["20vh", "-10vh", "90vh", "-10vh", "90vh", "50vh"] 
  );
  const x = useTransform(smoothProgress, 
    [0, 0.15, 0.35, 0.55, 0.75, 1], 
    ["-10vw", "-40vw", "40vw", "-40vw", "40vw", "0vw"]
  );
  const scaleRaw = useTransform(smoothProgress,
    [0, 0.15, 1],
    [2.0, 0.8, 1.3],
    { ease: easeInOut }
  );
  const scale = useSpring(scaleRaw, { stiffness: 100, damping: 30 });
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const borderRadius = useTransform(smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "30% 70% 70% 30% / 30% 30% 70% 70%",
      "50% 20% 50% 50% / 40% 40% 60% 60%",
      "40% 60% 70% 30% / 40% 50% 60% 50%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 70% 70% 30% / 30% 30% 70% 70%",
      "30% 30% 50% 50% / 30% 30% 70% 70%"
    ]
  );
  const background = useTransform(smoothProgress,
    [0, 0.33, 0.66, 1],
    [
      "linear-gradient(135deg, #f0abfc 0%, #d946ef 50%, #86198f 100%)",
      "linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #4c1d95 100%)",
      "linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0e7490 100%)",
      "linear-gradient(135deg, #f472b6 0%, #e879f9 50%, #c026d3 100%)",
    ]
  );

  // --- "Dancing" Bob (Bob 2) Transformations ---
  const y2 = useTransform(smoothProgress, 
    [0, 0.15, 0.35, 0.55, 0.75, 1], 
    ["80vh", "90vh", "-10vh", "90vh", "-10vh", "50vh"] 
  );
  const x2 = useTransform(smoothProgress, 
    [0, 0.15, 0.35, 0.55, 0.75, 1], 
    ["10vw", "40vw", "-40vw", "40vw", "-40vw", "0vw"]
  );
  // Complementary scaling
  const scaleRaw2 = useTransform(smoothProgress,
    [0, 0.15, 1],
    [0.8, 2.0, 0.8],
    { ease: easeInOut }
  );
  const scale2 = useSpring(scaleRaw2, { stiffness: 100, damping: 30 });
  // Opposite rotation
  const rotate2 = useTransform(smoothProgress, [0, 1], [360, 0]); 
  // Shape morphing is staggered
  const borderRadius2 = useTransform(smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 30% 50% 50% / 30% 30% 70% 70%",
      "30% 70% 70% 30% / 30% 30% 70% 70%",
      "50% 20% 50% 50% / 40% 40% 60% 60%",
      "40% 60% 70% 30% / 40% 50% 60% 50%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
    ]
  );
  // Color transition is staggered
  const background2 = useTransform(smoothProgress,
    [0, 0.33, 0.66, 1],
    [
      "linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #4c1d95 100%)", // Violet / Indigo
      "linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0e7490 100%)", // Cyan / Blue
      "linear-gradient(135deg, #f472b6 0%, #e879f9 50%, #c026d3 100%)", // Return to Pinkish
      "linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #4c1d95 100%)", // Violet / Indigo
    ]
  );

  // --- Scrollbar Bob (Bob 3) Transformations ---
  const y3 = useTransform(smoothProgress, [0, 1], ["5vh", "95vh"]);
  const x3 = useTransform(smoothProgress, [0, 1], ["48vw", "48vw"]);
  const scaleRaw3 = useTransform(smoothProgress,
    [0, 0.15, 1],
    [1.5, 0.9, 1.2],
    { ease: easeInOut }
  );
  const scale3 = useSpring(scaleRaw3, { stiffness: 100, damping: 30 });
  const rotate3 = useTransform(smoothProgress, [0, 1], [0, 360]);
  const borderRadius3 = useTransform(smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "50% 50% 50% 50% / 50% 50% 50% 50%",
      "40% 60% 50% 50% / 50% 50% 40% 60%",
      "60% 40% 50% 50% / 50% 50% 60% 40%",
      "50% 50% 40% 60% / 40% 60% 50% 50%",
      "50% 50% 60% 40% / 60% 40% 50% 50%",
      "50% 50% 50% 50% / 50% 50% 50% 50%"
    ]
  );
  const background3 = useTransform(smoothProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)",
      "linear-gradient(135deg, #f87171 0%, #ef4444 50%, #dc2626 100%)",
      "linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)",
    ]
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none flex justify-center items-start">
      
      {/* Deep Atmospheric Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#020617]">
         <div className="absolute top-[-10%] left-[20%] w-[80vw] h-[80vh] bg-indigo-950/40 blur-[120px] rounded-full mix-blend-screen" />
         <div className="absolute bottom-[0%] right-[0%] w-[60vw] h-[60vh] bg-fuchsia-950/30 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      {/* --- BOB 1 --- */}
      <motion.div
        style={{ y, x, rotate }}
        className="absolute w-72 h-72 md:w-[500px] md:h-[500px] z-0 will-change-transform"
      >
        <motion.div
           animate={{ y: [0, -20, 0], scale: [1, 1.02, 1], rotate: [0, 5, -5, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           style={{
             scale, borderRadius, background,
             boxShadow: "inset 20px 20px 60px rgba(255,255,255,0.5), inset -20px -20px 60px rgba(0,0,0,0.8), 0px 0px 100px rgba(139,92,246,0.5)"
           }}
           className="w-full h-full relative translate-z-0"
        >
            <div className="absolute top-[15%] left-[15%] w-[25%] h-[15%] bg-gradient-to-br from-white/90 to-white/10 rounded-[50%] blur-[2px] rotate-[-45deg]" />
            <div className="absolute bottom-[10%] right-[10%] w-[80%] h-[80%] rounded-[inherit] shadow-[inset_-10px_-10px_30px_rgba(255,255,255,0.2)] pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* --- BOB 2 --- */}
      <motion.div
        style={{ y: y2, x: x2, rotate: rotate2 }}
        className="absolute w-64 h-64 md:w-[450px] md:h-[450px] z-0 will-change-transform"
      >
        <motion.div
           animate={{ y: [0, 20, 0], scale: [1, 1.03, 1], rotate: [0, -5, 5, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: -4 }}
           style={{
             scale: scale2,
             borderRadius: borderRadius2,
             background: background2,
             boxShadow: "inset 15px 15px 50px rgba(255,255,255,0.4), inset -15px -15px 50px rgba(0,0,0,0.7), 0px 0px 80px rgba(79,70,229,0.5)"
           }}
           className="w-full h-full relative translate-z-0"
        >
            <div className="absolute top-[18%] left-[18%] w-[20%] h-[12%] bg-gradient-to-br from-white/80 to-white/10 rounded-[50%] blur-[1px] rotate-[45deg]" />
            <div className="absolute bottom-[12%] right-[12%] w-[75%] h-[75%] rounded-[inherit] shadow-[inset_-8px_-8px_25px_rgba(255,255,255,0.2)] pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* --- BOB 3 (Scrollbar) --- */}
      <motion.div
        style={{ y: y3, x: x3, rotate: rotate3 }}
        className="absolute w-52 h-52 md:w-[350px] md:h-[350px] z-0 will-change-transform" // Back to original size
      >
        <motion.div
           style={{
             scale: scale3,
             borderRadius: borderRadius3,
             background: background3,
             boxShadow: "inset 10px 10px 40px rgba(255,0,0,0.5), inset -10px -10px 40px rgba(100,0,0,0.8), 0px 0px 60px rgba(255,0,0,0.6)" // Red glow
           }}
           className="w-full h-full relative translate-z-0"
        >
            <div className="absolute top-[20%] left-[20%] w-[20%] h-[10%] bg-gradient-to-br from-white/70 to-white/10 rounded-[50%] blur-[0.5px] rotate-[-60deg]" />
            <div className="absolute bottom-[15%] right-[15%] w-[70%] h-[70%] rounded-[inherit] shadow-[inset_-5px_-5px_20px_rgba(255,255,255,0.1)] pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* Cinematic Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
    </div>
  );
};

export default LiquidBackground;