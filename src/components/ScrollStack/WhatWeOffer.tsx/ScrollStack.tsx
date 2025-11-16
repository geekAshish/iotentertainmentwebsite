import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Rss, Star, Tv } from 'lucide-react';

// import influencerBg from "@/assets/influencer.jpg"

import ideaBg from "@/assets/bnw-idea.png"
import rockerBg from "@/assets/bnw-rocker.png"
import targetBg from "@/assets/bnw-target.png"
import funBg from "@/assets/fun-3d.png"



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
  img: funBg,
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
  img: ideaBg,
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
  img: rockerBg,
  Icon: Star,
 },
 {
  title: "IOT Studio",
  description: "Our in-house production studio, 'It's On Trend Studio,' is equipped to produce high-quality video, audio, and photo content tailored for the digital landscape.",
  options: [
    "Strategic creator partnerships",
    "Creative inputs with seamless execution",
    "Optimized costs",
    "Comprehensive campaign reports",
  ],
  img: targetBg,
  Icon: Briefcase,
 },
 {
  title: "",
  description: "",
  Icon: null,
 },
];

export const WhatWeOffer = () => {
 const scrollRef = React.useRef<HTMLDivElement | null>(null);
 
 const { scrollYProgress } = useScroll({
  target: scrollRef,
  offset: ['start start', 'end end'], 
 });

 // Each card gets 100vh of scroll space for a smooth animation
 const containerHeight = `${offerings.length * 100}vh`;

 return (
  <section className="bg-black text-white py-24">
   <div className="container mx-auto max-w-5xl">
    <div className="text-center mb-20">
     <h2 className="text-4xl md:text-6xl font-bold">What We Offer</h2>
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

const OfferCard = ({ index, title, description, options, img, Icon, scrollYProgress }) => {
  console.log(options);
  
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
  
  const headerHeight = '5rem'; 

  if (index === 4) {
    return
  }

  return (
    <motion.div
      style={{
        scale,
        top: `calc(${index * 0}rem)`, 
        zIndex: index,
      }}
      className="sticky min-h-screen bg-black rounded-3xl origin-top pt-10"
    >
      <div style={{ minHeight: headerHeight }} className="flex items-center gap-4 mb-4">
        {Icon && <Icon className="h-10 w-10 text-blue-400" />}
        <h3 className="text-3xl md:text-4f ont-bold">{title}</h3>
      </div>
      <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
        {description}
      </p>

    <div className='flex justify-between items-start mt-5'>
      <div>
        {
          options?.map((option, key) => {
            return <p key={key} className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mt-3">
              {option}
            </p>
          })
        }
      </div>

      <div className='w-[20em]'>
        <img src={img} alt="img" />
      </div>
    </div>


    </motion.div>
  );
};