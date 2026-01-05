import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const ArrowFollow = () => {
  const rotate = useMotionValue(0);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const element = arrowRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      rotate.set(Math.atan2(deltaY, deltaX) * (180 / Math.PI));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotate]);

  return (
    <section className="min-h-screen w-full bg-white px-4 py-12 sm:px-6 md:px-10 lg:py-24 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT */}
          <div className="flex flex-col items-center lg:items-start lg:col-span-5">
            <h1 className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-left lg:text-6xl">
              What we do best
            </h1>

            <div className="relative flex h-56 w-full items-center justify-center sm:h-64 lg:h-80 lg:justify-start">
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-100 sm:h-64 sm:w-64 lg:left-0 lg:translate-x-0" />
              <div className="absolute left-[40%] top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full border border-gray-100 lg:block" />

              <motion.div
                ref={arrowRef}
                style={{ rotate }}
                className="relative z-10 lg:ml-12"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-56 lg:w-56"
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

          {/* RIGHT */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <h2 className="mb-6 max-w-3xl text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
              We create scroll-stopping videos, bold visual identities, and performance-driven ad campaigns that help brands grow faster.
            </h2>

            <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              From high-impact video editing and conversion-focused graphic design to data-driven performance marketing, we help brands stand out and scale. Every asset we create is designed to look great and deliver measurable results.
            </p>

            <div>
              <button className="group inline-flex items-center rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition-transform hover:scale-105">
                Explore Our Services
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArrowFollow;
