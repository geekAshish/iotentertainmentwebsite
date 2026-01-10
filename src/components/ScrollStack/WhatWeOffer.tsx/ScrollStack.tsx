import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rss, Star, Tv, Share2 } from "lucide-react";

import img1 from "@/assets/video_edting.webp";
import img2 from "@/assets/graphic_design.jpg";
import img3 from "@/assets/marketing.png";
import img4 from "@/assets/social-media.png";

const HEADER_HEIGHT = "7rem";

const offerings = [
  {
    title: "Video Editing",
    description:
      "We craft high-impact videos that grab attention, tell your story, and drive results. From short-form social content to long-form brand films, we edit with performance in mind.",
    options: [
      "Short-form videos (Reels, Shorts, Ads)",
      "Long-form YouTube & brand videos",
      "Motion graphics & subtitles",
      "Platform-optimized exports",
    ],
    img: img1,
    Icon: Tv,
  },
  {
    title: "Graphic Design",
    description:
      "We design visually striking creatives that communicate your brand clearly and consistently across every touchpoint — digital, social, and marketing.",
    options: [
      "Social media posts & carousels",
      "Ad creatives & banners",
      "Brand identity & visual systems",
      "High-conversion landing creatives",
    ],
    img: img2,
    Icon: Star,
  },
  {
    title: "Performance Marketing (Ads)",
    description:
      "We run data-driven ad campaigns focused on measurable growth. From strategy to scaling, every decision is optimized for ROI, not vanity metrics.",
    options: [
      "Meta & Google Ads management",
      "Creative testing & optimization",
      "Audience targeting & retargeting",
      "Detailed performance reporting",
    ],
    img: img3,
    Icon: Rss,
  },
  {
  title: "Social Media Management",
  description:
    "We manage your social presence end-to-end — planning, posting, and optimizing content that builds brand authority, engages your audience, and drives consistent growth.",
  options: [
    "Content strategy & monthly planning",
    "Post scheduling & publishing",
    "Community management & engagement",
    "Analytics, insights & growth reports",
  ],
  img: img4,
  Icon: Share2,
}

];


export const WhatWeOffer = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const containerHeight = `${offerings.length * 100}vh`;

  /* Heading animation */
  const headingOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* ✅ STICKY HEADING (EXACT HEIGHT) */}
        <motion.div
          style={{ opacity: headingOpacity, scale: headingScale, height: HEADER_HEIGHT }}
          className="sticky top-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
              What We Offer
            </h2>
            <p className="mt-3 text-lg text-gray-400">
              Our core services designed for the new era of entertainment.
            </p>
          </div>
        </motion.div>

        {/* ✅ SCROLL CONTAINER — NO EXTRA PADDING */}
        <div
          ref={scrollRef}
          className="relative"
          style={{ height: containerHeight }}
        >
          {offerings.map((offer, index) => (
            <OfferCard
              key={offer.title}
              index={index}
              {...offer}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const OfferCard = ({
  index,
  title,
  description,
  options,
  img,
  scrollYProgress,
}: any) => {
  const totalOffers = offerings.length;
  const isLastCard = index === totalOffers - 1;

  const scale = useTransform(
    scrollYProgress,
    [index / totalOffers, (index + 1) / totalOffers],
    [1, isLastCard ? 1 : 0.92]
  );

  return (
    <motion.div
      style={{ scale, zIndex: index, top: HEADER_HEIGHT }}
      className={`
        sticky
        ${index === 0 ? "mt-8" : "mt-0"}
        mb-8
        rounded-2xl
        bg-white
        shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        border border-gray-100
        overflow-hidden
        origin-top
      `}
    >
      <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:p-12">

        {/* LEFT — CONTENT */}
        <div className="flex flex-col justify-between">
          
          {/* Title */}
          <div>
            <h3 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              {title}
            </h3>

            <p className="max-w-xl text-base md:text-lg leading-relaxed text-gray-600">
              {description}
            </p>
          </div>

          {/* Options */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {options.map((option: string, key: number) => (
              <div
                key={key}
                className="
                  flex items-center gap-3
                  rounded-lg
                  bg-gray-50
                  px-4 py-3
                  text-sm md:text-base
                  text-gray-700
                "
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span>
                  {option}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        {img && (
          <div className="relative flex items-center justify-center">
            
            {/* Soft background glow */}
            <div className="absolute inset-0 rounded-2xl" />

            <img
              src={img}
              alt={`img-${index}`}
              className="
                relative
                z-10
                w-full
                rounded-2xl
                object-cover
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                transition-transform duration-700
                hover:scale-[1.03]
              "
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

