
import { motion } from "framer-motion";

export const GlowingCircle = () => {
  return (
    <motion.div
      // 1. Animation: Increased movement range for the larger scale
      initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
      animate={{
        opacity: [0.6, 0.8, 0.6],
        scale: [1, 1.1, 1], 
        rotate: [0, 45, 0], // Slow rotation helps sell the donut shape
        x: [0, 100, -100, 0], // Larger horizontal movements
        y: [0, -150, 50, 0],  // Larger vertical movements
      }}
      transition={{
        duration: 25, // Very slow, heavy feel
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      // 2. Positioning: Anchor it off-screen. 
      // 'fixed' relative to viewport. Positioned bottom-right, pushed far off.
      className="fixed -bottom-[60vh] -right-[60vh] z-[15] pointer-events-none"
    >
      {/* 3. The Donut Shape CSS */}
      <div 
        className="
          w-[100vh] h-[160vh] 
          
          rounded-full 

          bg-transparent
          border-[15vh]
          border-sky-700/60
          blur-[150px] md:blur-[200px]

          mix-blend-screen 
        "
      />
    </motion.div>
  );
};