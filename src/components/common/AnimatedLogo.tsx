import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// The list of words to cycle through
const categories = [
  "Influencer",
  "Production",
  "Media",
];

// Pass your logo image source as a prop or import it directly here
interface AnimatedLogoProps {
  logoSrc: string; 
}

export const AnimatedLogo = ({ logoSrc }: AnimatedLogoProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Change word every 2 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end gap-1.5 cursor-pointer select-none">
      {/* 1. STATIC LOGO IMAGE */}
      {/* Keeping your original classes */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <img src={logoSrc} alt="logo" className="h-7 w-auto object-contain" />
      <span className="text-white font-bold text-2xl pt-2 pl-1">.</span>
      </div>

      {/* 2. THE DOT (Optional - matches video style) */}

      {/* 3. ANIMATED TEXT CAROUSEL */}
      {/* Fixed width prevents layout shifts. Adjust 'w-[6rem]' based on longest word. */}
      <div className="relative h-7 w-[8rem] overflow-hidden flex items-center">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={index}
            // Start below (100%), animate to center (0%), exit to top (-100%)
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute left-0 text-white font-bold text-xl"
          >
            {categories[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};