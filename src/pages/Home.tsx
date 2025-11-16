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
import bg5 from "@/assets/bg5.jpg";
// import bg6 from "@/assets/bg6.jpg";
// import bg7 from "@/assets/bg7.jpg";
import NavBar from "@/components/common/NavBar/NavBar";
import { BounceCardComponent } from "@/components/BounceCard/Index";
import { AboutUsSection } from "@/components/Section/AboutUsv2";
import { VerticalOutlineText } from "@/components/ui/VerticleOutlineText";

const Home = () => {
  return (
    <>
      {/* 1. This is the main parent container. 
             'relative' creates the positioning context for its children. */}
      <div className="relative h-screen">

        {/* 2. This is the Background Image.
             - 'absolute inset-0' makes it fill the parent.
             - 'w-full h-full object-cover' makes the image cover the space.
             - 'z-10' puts it in the background layer. */}
        <img
          src={bg5}
          alt="background image"
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-10"
        />

        {/* 3. This is the Content Layer.
             - 'absolute inset-0' also makes it fill the parent.
             - 'z-20' puts it on TOP of the background (which is z-10).
             - Now this div has full width, so your TextMarquee will work. */}
        <div className="absolute inset-0 z-20">
          <Container className="h-[calc(100vh-15em)]">
            <nav>
              <NavBar />
            </nav>

            <Typography variant="h1" className="text-white font-thin">
              Brand.<span className="text-gray-600">Design</span>.
              <span className="text-gray-600">Product</span>.
            </Typography>
            <Typography variant="h1" className="text-white font-thin">
              In-House Development.
            </Typography>
            <Typography variant="h1" className="text-white font-thin">
              &More
            </Typography>
          </Container>

          <VerticalOutlineText
          direction="up"
          className="
            top-1/2 right-8 
            -translate-y-1/2 
            text-[10em] font-extrabold
          "
        >
          CREATIVE
        </VerticalOutlineText>

          {/* This component now has a full-width parent to scroll within */}
          <TextMarquee />
        </div>
      </div>

      {/* --- Rest of your page --- */}

      <AboutUsSection />

      <Portfolio />

      <BounceCardComponent />

      {/* <div className="h-screen bg-black" /> */}
      <WhatWeOffer />

      {/* <ScrollStackComponent /> */}
    </>
  );
};

export default Home;