import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Rss, Star, Tv } from 'lucide-react';

import img1 from "@/assets/video_editing.png";
import img2 from "@/assets/graphic_design.png";
import img3 from "@/assets/marketing.png";
import arrow from '@/assets/top-arrow.png';

const offerings = [
 {
  title: "Influencer Marketing",
  description: "We connect your brand with top-tier influencers to create authentic, engaging campaigns that resonate with millions. From strategy to execution, we manage it all.",
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
  description: "We build and scale digital intellectual properties from the ground up. This includes creating unique content formats, series, and online personas that capture audiences.",
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
  description: "Our agency represents a diverse roster of emerging and established digital talent. We focus on long-term career growth, brand partnerships, and strategic opportunities.",
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
  offset: ['start start', 'end end'], 
 });

 // Each card gets 100vh of scroll space for a smooth animation
 const containerHeight = `${offerings.length * 100}vh`;

 return (
  <section className="text-white">
   <div className="container mx-auto">
    <div className="text-center md:mb-20">
     <h2 className="text-white text-4xl md:text-6xl font-bold">What We Offer</h2>
     <p className="text-lg text-gray-400 mt-4">Our core services designed for the new era of entertainment.</p>
    </div>

    {/* Scroll container with fixed height for predictable scroll progress */}
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

const OfferCard = ({ index, title, description, options, img, scrollYProgress }: any) => {
  const totalOffers = offerings.length;
  
  // 1. We check if this is the last card
  const isLastCard = index === totalOffers - 1;

  // 2. We use that check in the useTransform hook
  const scale = useTransform(
    scrollYProgress,
    [index / totalOffers, (index + 1) / totalOffers],
    // If it's the last card, stay at 1. Otherwise, animate to 0.9
    [1, isLastCard ? 1 : 0.9]
  );

  const bgColor = index % 2 === 0 ? "bg-white" : 'bg-white';
  const textColor = index % 2 === 0 ? 'text-black' : "text-black"

  
  const headerHeight = '5rem'; 

  return (
    <motion.div
      style={{
        scale,
        top: `calc(${index * 0}rem)`, 
        zIndex: index,
      }}
      className={`sticky flex items-center rounded-xl my-4 min-h-[20em] ${bgColor} origin-top`}
    >
      <div style={{ minHeight: headerHeight }} className="flex flex-col md:flex-row items-start gap-4 p-10">
      {/* 1. Icon sits on the left */}
      {/* {Icon && (
        <div className="shrink-0 mt-1">
          <Icon className="h-10 w-10 text-blue-400" />
        </div>
      )} */}

      {/* 2. Text Wrapper: Holds both Title and Description */}
      <div className="flex flex-col">
        <h3 className={`${textColor} text-3xl md:text-4xl font-bold mb-2`}>
          {title}
        </h3>
        <p className={`${textColor} text-lg leading-relaxed max-w-3xl`}>
          {description}
        </p>
        <div>
          {
            options?.map((option: any, key: number) => {
              return <p key={key} className={`${textColor} flex items-center gap-2 text-lg leading-relaxed max-w-3xl mt-1`}>
                <img src={arrow} alt="arrow" className='w-5' /> {option}
              </p>
            })
          }
        </div>
      </div>

      {img && <div className='w-[20em] md:w-[35em]'>
        <img src={img} alt={`img-${index}`} className='rounded-xl' />
      </div>}
    </div>
    </motion.div>
  );
};