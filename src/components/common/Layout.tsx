// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import NavBar from "@/components/common/NavBar/NavBar";
import { Container } from "@/components/ui/Container";

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-[#131314] text-white">
      {/* 1. Fixed/Absolute Position: Ensures the nav sits ON TOP of the Home page 
           without pushing the content down, preserving your scroll math.
        2. Z-Index 50: Higher than the video (z-40) in Home.tsx.
      */}
      <div className="fixed top-0 left-0 w-full z-50 py-4">
        <Container>
          <NavBar />
        </Container>
      </div>

      {/* This is where Home.tsx, About.tsx, etc. will render */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;