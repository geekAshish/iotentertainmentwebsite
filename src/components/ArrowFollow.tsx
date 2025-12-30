import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const ArrowFollow = () => {
  const rotate = useMotionValue(0);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = arrowRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const angleRad = Math.atan2(deltaY, deltaX);
      const angleDeg = angleRad * (180 / Math.PI);

      rotate.set(angleDeg);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rotate]);

  return (
    <div className="min-h-screen w-full bg-white px-4 py-10 md:px-8 md:py-20 text-black font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid Layout: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-1">
          
          {/* LEFT COLUMN: Heading + Arrow (Span 5 columns) */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <h1 className="mb-8 text-5xl font-bold tracking-tighter md:text-6xl lg:mb-16">
              What defines us
            </h1>

            {/* Arrow Container with Background Lines */}
            <div className="relative flex h-64 w-full items-center justify-center border-y border-gray-100 lg:justify-start lg:border-none">
              
              {/* Decorative Background Circles (To match image style) */}
              <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-gray-100 opacity-60" />
              <div className="absolute left-[150px] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-gray-100 opacity-60" />

              {/* The Rotating Arrow */}
              <motion.div
                ref={arrowRef}
                style={{ rotate }}
                className="relative z-10 ml-12" // Added margin to offset slightly from left
              >
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-32 w-32 md:h-56 md:w-56" // Made arrow larger
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="black"
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: Description + Button (Span 7 columns) */}
          <div className="flex flex-col justify-start pt-4 lg:col-span-7 lg:pl-5">
            <h2 className="mb-6 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.
            </h2>
            
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-500">
              We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.
            </p>

            <div>
              <button className="group relative inline-flex items-center rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-105">
                Dive Into Our Culture
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ArrowFollow;