import { AngledMarquee } from '@/components/AngledMarquee';

export default function TextMarquee() {
  return (
    <div className="relative w-full bg-black h-50 flex flex-col justify-center overflow-hidden">
      <AngledMarquee 
        angle={3} 
        speed="fast"
        pauseOnHover
      >
        <p className="flex items-center justify-center gap-10 my-4 text-2xl whitespace-nowrap">
         MARKETING <span className='text-sm'>🟠</span> BRANDING <span className='text-sm'>🟠</span> MOTION <span className='text-sm'>🟠</span> UI/UX <span className='text-sm mr-10'>🟠</span> 
        </p>
      </AngledMarquee>
    </div>
  );
}