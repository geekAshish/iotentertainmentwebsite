import logo from "@/assets/itoe_logo.png"


import { 
  Mail, 
  Instagram, 
  Youtube, 
  Twitter, 
  Linkedin, 
  ArrowUp 
} from 'lucide-react';

// You can use your existing Container component
// import { Container } from '@/components/ui/Container';

/**
 * A wrapper for layout. If you don't have a <Container> component,
 * you can replace it with a <div> with classes:
 * "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
 */
const Container: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

/**
 * Helper component for the social media icons
 */
const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
  >
    {icon}
  </a>
);

/**
 * Helper component for the navigation links
 */
const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-lg text-gray-300 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

/**
 * The Main Footer Component
 */
export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <Container>
        {/* --- Top Section: Logo, Socials, and Nav --- */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/3">
            {/* Logo & Slogan */}
            <div>
              <div className="flex-shrink-0 flex items-center justify-center text-white font-bold w-[5em]">
                <img src={logo} alt="logo" />
              </div>
              <p className="text-sm text-gray-400 mt-1">
                India's First Trend Building Business.
              </p>
            </div>
            
            {/* Email */}
            <a 
              href="mailto:team@iot-e.in" 
              className="flex items-center gap-3 group"
            >
              <Mail size={24} className="text-white" />
              <span className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                team@iot-e.in
              </span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <SocialIcon href="#" icon={<Instagram size={20} />} />
              <SocialIcon href="#" icon={<Youtube size={20} />} />
              <SocialIcon href="#" icon={<Twitter size={20} />} />
              <SocialIcon href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Right Column (Nav Links) */}
          <div className="w-full md:w-auto">
            <ul className="flex flex-col gap-4">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">Work</FooterLink>
              <FooterLink href="#">Creators</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Page Top --- */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            
            {/* Left Side (Policy & Copyright) */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500 text-center md:text-left">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <p className="max-w-md">
                Copyright© It's on Trend Entertainment {new Date().getFullYear()}. All Rights Reserved.
              </p>
            </div>

            {/* Right Side (Page Top) */}
            <div>
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Page Top
                <span className="border border-gray-600 rounded-full p-1 group-hover:border-white">
                  <ArrowUp size={12} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};