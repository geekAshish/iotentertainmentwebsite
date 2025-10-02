import { AngledMarquee } from '@/components/AngledMarquee';

export default function TextMarquee() {
  return (
    <div className="w-full bg-black flex flex-col justify-center overflow-hidden">
      <AngledMarquee 
        angle={3} 
        speed="normal"
        pauseOnHover
      >
        <p className="m-8 text-6xl font-black text-white/20 whitespace-nowrap">
          MARKETING • BRANDING • MOTION • UI/UX •
        </p>
      </AngledMarquee>
    </div>
  );
}