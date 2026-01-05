

import  { useRef } from "react";
import { WhatWeOffer } from "@/components/ScrollStack/WhatWeOffer.tsx/ScrollStack";
import Portfolio from "@/components/Section/Portfolio";
import TextMarquee from "@/components/TextMarquee";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import NavBar from "@/components/common/NavBar/NavBar";
// import { portfolioProjectsImages } from "@/constant";
// import { ImageCarousel } from "@/components/ImageCarousel";
import { VerticalOutlineText } from "@/components/ui/VerticleOutlineText";
import { motion, useScroll, useTransform } from "framer-motion";

// Make sure this path is correct
import video from '@/assets/background_video.mp4'; 
import LeadForm from "@/components/LeadForm";
import ArrowFollow from "@/components/ArrowFollow";
import InfiniteMarquee from "@/components/InfiniteMarquee";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Tracks the scroll within the tall wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- ANIMATION CONFIGURATION ---

  // 1. DIMENSIONS: 
  // Mobile: Starts at 90% width -> grows to 100%
  // Desktop: You can tweak the '30vw' (approx 400px) to be smaller/larger
  const width = useTransform(scrollYProgress, [0, 1], ["20vw", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["25vw", "100vh"]); // Keeps approx 16:9 ratio initially

  // 2. POSITIONING:
  // We animate 'right' and 'bottom' to 0 to snap it to the edges
  const positionOffset = useTransform(scrollYProgress, [0, 1], ["2rem", "0rem"]);
  
  // 3. STYLING:
  // Remove rounded corners as it fills the screen
  const borderRadius = useTransform(scrollYProgress, [0, 0.8], ["20px", "0px"]);
  
  // 4. CONTENT FADE:
  // Fade out the "India's First" text quickly so it doesn't clash
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  // 5. VIDEO OPACITY (Optional):
  // You might want the video to be slightly transparent initially? 
  // If not, keep this at 1. Currently set to fully visible (1).
  const videoOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);

  return (
    <div className="bg-[#131314] text-white selection:bg-white/20 selection:text-white">
      
      {/* --- SCROLL WRAPPER (300vh = longer scroll for smoother animation) --- */}
      <div ref={containerRef} className="relative h-[300vh] w-full">
        
        {/* --- STICKY VIEWPORT --- */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
          
          {/* Background Ambient Light */}
          <div className="absolute inset-0 pointer-events-none z-0">
             <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />
          </div>

          {/* Navigation (Z-Index 50 to stay above video) */}
          <motion.div 
            style={{ opacity: contentOpacity }}
            className="relative z-50"
          >
            <Container>
              <NavBar />
            </Container>
          </motion.div>

          {/* Hero Text Content */}
          <motion.div 
            style={{ opacity: contentOpacity }}
            className="relative z-10 flex flex-col justify-center pb-20 pointer-events-none" // pointer-events-none ensures scroll isn't blocked by text
          >
            <Container>
              <div className="max-w-5xl pointer-events-auto">
                <Typography
                  variant="h1"
                  className="font-bold  tracking-tighter text-5xl leading-[1.1] sm:text-6xl sm:leading-[1.1] lg:text-[5.5rem] lg:leading-[1.05] text-white"
                >
                  India's
                  <span className="text-white/40 font-medium"> First</span>
                  <span className="text-white/40 font-medium">.</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                    Trend Building
                  </span>
                  <span className="text-white/40">.</span>
                  <br />
                  Creative & Production
                  <br />
                  Partner
                </Typography>

                <p className="mt-8 text-white/60 text-lg md:text-xl max-w-xl">
                  100M+ Views delivered through trend First content. creator partnerships & high-impact production.
                </p>
              </div>
            </Container>
          </motion.div>

          {/* Decorative Background Text */}
          <motion.div 
             style={{ opacity: contentOpacity }}
             className="hidden md:block absolute top-1/2 right-8 lg:right-12 -translate-y-1/2 z-0 pointer-events-none opacity-40 mix-blend-overlay"
          >
            <VerticalOutlineText
              direction="up"
              className="text-[8vh] lg:text-[12vh] font-black leading-none text-white/10"
            >
              WE CREATE TRENDS
            </VerticalOutlineText>
          </motion.div>

          {/* --- THE EXPANDING VIDEO --- */}
          <motion.div
            style={{
              width,
              height,
              right: positionOffset,   // Animates from 2rem to 0
              bottom: positionOffset,  // Animates from 2rem to 0
              borderRadius,
              opacity: videoOpacity
            }}
            // Force min-width for mobile so it's not tiny initially
            className="absolute z-40 bg-black overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] min-w-[300px] md:min-w-[auto]"
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            
            {/* Dark overlay that fades away as it gets huge (optional) */}
            <motion.div 
                style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0.2, 0]) }}
                className="absolute inset-0 bg-black pointer-events-none" 
            />
          </motion.div>

        </div>
      </div>

      {/* --- REST OF THE PAGE --- */}
      <div className="relative z-30 border-t border-white/5 bg-[#131314]">
        <TextMarquee />
      </div>

      <div className="relative z-20 bg-[#131314]">
        <Portfolio />
        <div className="hidden md:block py-10">
          {/* <BounceCardComponent /> */}
        </div>
          <ArrowFollow />
        {/* <div className="md:hidden flex items-center justify-center flex-col gap-5 my-16">
          <ImageCarousel imageUrls={portfolioProjectsImages} />
        </div> */}

        <InfiniteMarquee />

        <WhatWeOffer />
      </div>

      <div className="py-10">
      <h2 className="text-white text-center text-4xl md:text-6xl font-bold mb-5">Contact Us</h2>

        <LeadForm />
      </div>
    </div>
  );
};

export default Home;