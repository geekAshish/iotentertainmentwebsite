import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rss, Star, Tv } from "lucide-react";

import img1 from "@/assets/video_editing.png";
import img2 from "@/assets/graphic_design.png";
import img3 from "@/assets/marketing.png";
import arrow from "@/assets/top-arrow.png";

const HEADER_HEIGHT = "7rem";

const offerings = [
  {
    title: "Influencer Marketing",
    description:
      "We connect your brand with top-tier influencers to create authentic, engaging campaigns that resonate with millions. From strategy to execution, we manage it all.",
    options: [
      "Strategic creator partnerships",
      "Creative inputs with seamless execution",
      "Optimized costs",
      "Comprehensive campaign reports",
    ],
    img: img1,
    Icon: Rss,
  },
  {
    title: "Digital IPs",
    description:
      "We build and scale digital intellectual properties from the ground up. This includes creating unique content formats, series, and online personas that capture audiences.",
    options: [
      "Strategic creator partnerships",
      "Creative inputs with seamless execution",
      "Optimized costs",
      "Comprehensive campaign reports",
    ],
    img: img2,
    Icon: Tv,
  },
  {
    title: "Talent Management",
    description:
      "Our agency represents a diverse roster of emerging and established digital talent. We focus on long-term career growth, brand partnerships, and strategic opportunities.",
    options: [
      "Strategic creator partnerships",
      "Creative inputs with seamless execution",
      "Optimized costs",
      "Comprehensive campaign reports",
    ],
    img: img3,
    Icon: Star,
  },
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
    <section className="bg-black text-white">
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
    [1, isLastCard ? 1 : 0.9]
  );

  return (
    <motion.div
      style={{ scale, zIndex: index, top: HEADER_HEIGHT }}
      className={`
      sticky
      ${index === 0 ? "mt-6" : "mt-0"}
      mb-6
      flex min-h-[22rem]
      origin-top rounded-xl bg-white
    `}
    >
      <div className="flex flex-col gap-6 p-10 md:flex-row">
        
        {/* TEXT */}
        <div className="flex flex-col">
          <h3 className="mb-2 text-3xl md:text-4xl font-bold text-black">
            {title}
          </h3>

          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            {description}
          </p>

          <div className="mt-4 space-y-2">
            {options.map((option: string, key: number) => (
              <p
                key={key}
                className="flex items-center gap-2 text-lg text-gray-700"
              >
                <img src={arrow} alt="arrow" className="w-5" />
                {option}
              </p>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        {img && (
          <div className="w-full md:w-[35em]">
            <img
              src={img}
              alt={`img-${index}`}
              className="rounded-xl"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};
