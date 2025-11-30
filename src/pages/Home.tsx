// import LiquidChrome from "@/components/LiquideChrome";
// import ScrollStackComponent from "@/components/ScrollStack/ScrollStackComponent";
import { WhatWeOffer } from "@/components/ScrollStack/WhatWeOffer.tsx/ScrollStack";
import Portfolio from "@/components/Section/Portfolio";
import TextMarquee from "@/components/TextMarquee";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

// import bg1 from "@/assets/bg1.jpg";
// import bg2 from "@/assets/bg2.jpg";
// import bg3 from "@/assets/bg3.jpg";
// import bg4 from "@/assets/bg4.jpg";
// import bg6 from "@/assets/bg6.jpg";
// import bg7 from "@/assets/bg7.jpg";
import NavBar from "@/components/common/NavBar/NavBar";
import { BounceCardComponent } from "@/components/BounceCard/Index";
import { AboutUsSection } from "@/components/Section/AboutUsv2";
import { VerticalOutlineText } from "@/components/ui/VerticleOutlineText";
import { portfolioProjectsImages } from "@/constant";
import { GlowingCircle } from "@/components/CustomHero/GlowingCircle";
import { ImageCarousel } from "@/components/ImageCarousel";

const Home = () => {
  return (
    <>
      <div className="relative h-screen">
        {/* 1. Add the Glowing Circle */}
        {/* You can position it using top/left classes on a wrapper div */}
        <GlowingCircle />

        {/* 1. Use flex-col for a robust vertical layout */}
        <div className="absolute inset-0 z-20 flex flex-col h-full bg-[#131314]">
          {/* 2. Container now takes up the remaining space. 
               'overflow-y-auto' handles content overflow on small screens.
          */}
          <Container className="flex-1">
            <nav>
              <NavBar />
            </nav>

            {/* 3. Added responsive font sizes: mobile-first */}
            <Typography
              variant="h1"
              className="
                hidden
                text-white 
                font-bold
                text-4xl 
                leading-tight 
                sm:text-6xl 
                lg:text-7xl 
                lg:leading-tight
              "
            >
              Brand.<span className="text-gray-600">Design</span>.
              <span className="text-gray-600">Product</span>.
              <br />
              In-House Development.
              <br />
              &More
            </Typography>
            <Typography
              variant="h1"
              className="
                md:block
                text-white 
                font-semibold 
                text-7xl 
                leading-tight 
                sm:text-6xl 
                lg:text-7xl 
                lg:leading-tight
              "
            >
              Brand.
              <span className="text-gray-600 inline-block">Design</span>.
              <span className="text-gray-600 inline-block">Product</span>.
              <br />
              In-House Production.
              <br />
              &More
            </Typography>
          </Container>

          {/* 4. HIDE the huge decorative text on mobile.
               'hidden md:block' is the cleanest fix.
          */}
          <VerticalOutlineText
            direction="up"
            className="
              hidden md:block 
              absolute top-1/2 md:right-4 
              -translate-y-1/2 
              text-[7em] lg:text-[10em] font-extrabold
            "
          >
            CREATIVE
          </VerticalOutlineText>

          {/* 5. Marquee sits at the bottom */}
          <div className="h-auto">
            <TextMarquee />
          </div>
        </div>
      </div>

      {/* --- Rest of your page --- */}
      <AboutUsSection />
      <Portfolio />
      <div className="hidden md:block">
        <BounceCardComponent />
      </div>
      
      <div className="md:hidden flex items-center justify-center flex-col gap-5 my-10">
        <ImageCarousel imageUrls={portfolioProjectsImages} />
      </div>

        <WhatWeOffer />
      {/* <ScrollStackComponent /> */}
    </>
  );
};

export default Home;