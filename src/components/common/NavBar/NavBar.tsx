import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navbar } from "@/modules/constant/constant";
import logo from "@/assets/itoe_logo.png";
import { AnimatedLogo } from "../AnimatedLogo";

// --- Configuration for the Services Dropdown ---
const servicesDropdown = [
  { title: "Video Editing", route: "/services/video-editing" },
  { title: "Graphic Design", route: "/services/graphic-design" },
  {
    title: "Social Media Management",
    route: "/services/smm",
    subItems: [
      { title: "Instagram", route: "/services/smm/instagram" },
      { title: "Youtube", route: "/services/smm/youtube" },
      { title: "Facebook", route: "/services/smm/facebook" },
      { title: "LinkedIn", route: "/services/smm/linkedin" },
    ],
  },
];

const NavBar = () => {
  // Main Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile Accordion States
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSmmOpen, setIsMobileSmmOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Optional: Reset sub-menus when closing main menu
    if (isMenuOpen) {
      setIsMobileServicesOpen(false);
      setIsMobileSmmOpen(false);
    }
  };

  return (
    <div className="relative flex items-center justify-between gap-10 bg-neutral-950 px-4 py-3 shadow-lg mx-auto  rounded-lg border border-neutral-800 z-50">
      
      {/* --- Logo --- */}
      <div className="flex justify-between items-center gap-10">
        <AnimatedLogo logoSrc={logo} />

        {/* --- DESKTOP Navigation (Hover based) --- */}
        <div>
          <ul className="hidden md:flex items-center gap-3">
            {navbar.map((d, i) => {
              if (d.text === "Services") {
                return (
                  <li key={i} className="group relative h-full">
                    <button className="flex items-center gap-1 text-lg font-medium text-white hover:text-neutral-300 py-1 px-2 cursor-pointer">
                      {d.text}
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>

                    {/* Level 1 Dropdown */}
                    <div className="absolute left-0 top-full mt-2 w-64 origin-top-left rounded-xl border border-neutral-800 bg-neutral-950 p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex flex-col gap-1">
                        {servicesDropdown.map((service, idx) => (
                          <div key={idx} className="group/nested relative">
                            {service.subItems ? (
                              <>
                                <div className="flex items-center justify-between w-full rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer">
                                  {service.title}
                                  <ChevronRight size={14} />
                                </div>
                                {/* Level 2 Dropdown */}
                                <div className="absolute left-full top-0 ml-2 w-48 origin-top-left rounded-xl border border-neutral-800 bg-neutral-950 p-2 shadow-xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 transform -translate-x-2 group-hover/nested:translate-x-0">
                                  {service.subItems.map((sub, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      to={sub.route}
                                      className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white"
                                    >
                                      {sub.title}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <Link
                                to={service.route}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white"
                              >
                                {service.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }
              return (
                <Link
                  to={d.route}
                  key={i}
                  className="text-lg font-medium text-white hover:text-black hover:bg-white hover:rounded-full py-1 px-2 transition-colors"
                >
                  {d.text}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      {/* --- Desktop Contact Button --- */}
      <div className="hidden md:flex justify-center items-center gap-1">
        <a href={"#contact-us"}>
          <Button
            rightIcon={<ArrowRight size={16} />}
            className="cursor-pointer border border-neutral-700 hover:bg-neutral-800 rounded-full"
          >
            Contact Us
          </Button>
        </a>
      </div>

      {/* --- Mobile Menu Button --- */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white p-2">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY (Click/Accordion based) --- */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full min-h-screen bg-neutral-950 z-[60] flex flex-col p-4 overflow-y-auto">
          
          {/* Mobile Header (Logo + Close) */}
          <div className="flex justify-between items-center mb-8">
             {/* You can add Logo here if you want */}
             <div className="w-8"></div> 
            <button
              onClick={toggleMenu}
              className="text-white p-2"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-4 px-4">
            {navbar.map((d, i) => {
              // 1. Mobile Services Accordion
              if (d.text === "Services") {
                return (
                  <li key={i} className="flex flex-col items-start border-b border-neutral-800 pb-2">
                    <button 
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-between w-full text-2xl font-medium text-white py-2"
                    >
                      {d.text}
                      {isMobileServicesOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>

                    {/* Mobile Level 1: Services List */}
                    {isMobileServicesOpen && (
                        <div className="flex flex-col w-full gap-3 mt-2 pl-4 animate-in slide-in-from-top-2 fade-in duration-200">
                             {servicesDropdown.map((service, idx) => (
                                <div key={idx} className="w-full">
                                    {service.subItems ? (
                                        // Mobile Level 2: SMM Accordion
                                        <div className="flex flex-col">
                                            <button 
                                                onClick={() => setIsMobileSmmOpen(!isMobileSmmOpen)}
                                                className="flex items-center justify-between w-full text-lg text-neutral-300 py-1"
                                            >
                                                {service.title}
                                                {isMobileSmmOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                            </button>
                                            
                                            {/* Mobile Level 3: Social Media Links */}
                                            {isMobileSmmOpen && (
                                                <div className="flex flex-col gap-2 mt-2 pl-4 border-l border-neutral-800 ml-1">
                                                    {service.subItems.map((sub, subIdx) => (
                                                        <Link
                                                            key={subIdx}
                                                            to={sub.route}
                                                            onClick={toggleMenu}
                                                            className="text-base text-neutral-400 py-1"
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        // Standard Service Link
                                        <Link 
                                            to={service.route}
                                            onClick={toggleMenu}
                                            className="block text-lg text-neutral-300 py-1"
                                        >
                                            {service.title}
                                        </Link>
                                    )}
                                </div>
                             ))}
                        </div>
                    )}
                  </li>
                );
              }

              // 2. Standard Mobile Links
              return (
                <li key={i} className="border-b border-neutral-800 pb-2">
                    <Link
                    to={d.route}
                    onClick={toggleMenu}
                    className="block text-2xl font-medium text-white py-2"
                    >
                    {d.text}
                    </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Contact Button */}
          <div className="mt-8 px-4 w-full">
            <a href={"#contact-us"} className="w-full block">
                <Button
                rightIcon={<ArrowRight size={16} />}
                className="w-full cursor-pointer border rounded-full text-lg px-6 py-4 flex justify-center"
                >
                Contact Us
                </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;