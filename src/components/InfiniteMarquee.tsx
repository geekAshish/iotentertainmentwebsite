import { motion } from "framer-motion";

import vid1 from "@/assets/video_production.mp4";
import vid2 from "@/assets/marketing_strategy.mp4";
import vid3 from "@/assets/presentation_design.mp4";
import vid4 from "@/assets/motion_design.mp4";

const services = [
  { title: "Video Production", video: vid1 },
  { title: "Marketing Strategy", video: vid2 },
  { title: "Presentation Design", video: vid3 },
  { title: "Motion Design", video: vid4 },
];

export default function InfiniteMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 sm:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        className="flex w-max gap-6 sm:gap-8 lg:gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30, // slower on mobile, feels smoother
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...services, ...services].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              group
              w-[180px] sm:w-[220px] lg:w-[260px]
              shrink-0
              overflow-hidden
              rounded-xl sm:rounded-2xl
              bg-black
              shadow-[0_16px_40px_rgba(0,0,0,0.12)]
            "
          >
            {/* Reel-style Video */}
            <div className="relative aspect-[9/16] overflow-hidden">
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="
                  h-full w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
              />
            </div>

            {/* Title */}
            <div className="p-3 sm:p-4">
              <p className="text-xs sm:text-sm font-medium tracking-wide text-white">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
