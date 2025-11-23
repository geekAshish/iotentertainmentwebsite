import LogoLoop from './LogoLoops';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact color='white' />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color='white' />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript color='white' />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss color='white' />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

export function LogoLoopsComponent() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
    </div>
  );
}