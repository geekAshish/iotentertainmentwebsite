// src/components/HeroScrollReveal.tsx

"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface HeroScrollRevealProps {
  backgroundImage: string; // URL of the background image
  mainText: string;        // The large, central text
  subText?: string;        // Smaller text above the main text
  ctaText?: string;        // Call to action text below main text
  ctaLink?: string;        // Link for the CTA
  className?: string;
}

export const HeroScrollReveal: React.FC<HeroScrollRevealProps> = ({
  backgroundImage,
  mainText,
  subText,
  ctaText,
  ctaLink,
  className,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // Start animation when component enters, end when it leaves
  });

  // Animate opacity: text fades in from 0 to 1 as component scrolls into view
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  
  // Animate Y position: text moves up slightly as it appears and down as it disappears
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ['20%', '0%', '-20%']);
  
  // Optional: animate scale for a subtle zoom effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  // For the background image parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);


  return (
    <div
      ref={ref}
      className={twMerge(
        'relative h-[120vh] overflow-hidden flex items-center justify-center text-center', // h-[120vh] to allow for more scroll range
        className
      )}
    >
      {/* Background Image Container with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          y: backgroundY, // Apply parallax scroll to background
        }}
        // Adding a slight blur or overlay to make text pop
      >
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 p-4 md:p-8">
        {subText && (
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-4 max-w-4xl mx-auto"
            style={{ opacity, y: useTransform(y, ['20%', '0%', '-20%'], ['40%', '0%', '-40%']) }} // Subtext moves more
          >
            {subText}
          </motion.p>
        )}

        {/* Main Text */}
        <motion.h1
          className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black uppercase leading-none tracking-tight text-white"
          style={{ opacity, y, scale }}
        >
          {mainText}
        </motion.h1>

        {ctaText && ctaLink && (
          <motion.a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-colors"
            style={{ opacity, y: useTransform(y, ['20%', '0%', '-20%'], ['60%', '0%', '-60%']) }} // CTA moves even more
          >
            {ctaText}
          </motion.a>
        )}
      </div>
    </div>
  );
};