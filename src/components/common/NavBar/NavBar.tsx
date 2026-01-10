import { useState } from "react"; // Import useState for state management
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navbar } from "@/modules/constant/constant";

import logo from "@/assets/itoe_logo.png"
import { AnimatedLogo } from "../AnimatedLogo";

const NavBar = () => {
  // 1. Add state to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Create a function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // 3. Add 'relative' to the container to position the mobile menu
    <div className="relative flex items-center justify-between gap-10 bg-neutral-950 px-4 py-3 shadow-lg mx-auto mt-6 rounded-lg">
      
      {/* --- Logo & Desktop Nav --- */}
      <div className="flex justify-between items-center gap-10">
        <AnimatedLogo logoSrc={logo || logo} />

        {/* 4. Desktop Navigation Links (Hidden on mobile) */}
        <div>
          <ul className="hidden md:flex items-center gap-3">
            {navbar.map((d, i) => {
              return (
                <Link
                  to={d.route}
                  key={i}
                  className="text-lg font-medium text-white hover:text-black hover:bg-white hover:rounded-full py-1 px-2"
                >
                  {d.text}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      
      {/* --- Desktop Contact Button (Hidden on mobile) --- */}
      <div className="hidden md:flex justify-center items-center gap-1">
        <a href={'#contact-us'}>
          <Button
            rightIcon={<ArrowRight size={16} />}
            className="cursor-pointer border rounded-full"
            >
            Contact Us
          </Button>
        </a>
      </div>

      {/* --- Mobile Menu Button (Visible on mobile only) --- */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white p-2">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay (Conditionally rendered) --- */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-neutral-950 z-50 flex flex-col items-center justify-center gap-10 p-4">
          
          {/* Close Button inside menu */}
          <button
            onClick={toggleMenu}
            className="absolute top-9 right-4 text-white"
          >
            <X size={24} />
          </button>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col items-center gap-8">
            {navbar.map((d, i) => {
              return (
                <Link
                  to={d.route}
                  key={i}
                  onClick={toggleMenu} // Close menu when a link is clicked
                  className="text-2xl font-medium text-white"
                >
                  {d.text}
                </Link>
              );
            })}
          </ul>

          {/* Mobile Contact Button */}
          <a href={'#contact-us'}>
            <Button
              rightIcon={<ArrowRight size={16} />}
              className="cursor-pointer border rounded-full text-lg px-6 py-3"
            >
              Contact Us
            </Button>
          </a>

        </div>
      )}
    </div>
  );
};

export default NavBar;