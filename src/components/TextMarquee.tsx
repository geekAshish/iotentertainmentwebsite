// src/components/TextMarquee.tsx
import { AngledMarquee } from '@/components/AngledMarquee';

/**
 * This is just a helper to make the content repeatable
 * without cluttering the main <p> tag.
 */
const MarqueeContent = () => (
  <>
    {/* We removed the 'mr-10' from the last item.
      The parent <p> tag's 'gap-10' will now handle ALL spacing 
      to make it perfectly even.
    */}
    MARKETING <span className="text-sm">🟠</span>
    BRANDING <span className="text-sm">🟠</span>
    MOTION <span className="text-sm">🟠</span>
    UI/UX <span className="text-sm">🟠</span>
  </>
);

export default function TextMarquee() {
  return (
    /**
     * The parent wrapper.
     * Note: 'h-50' is not a standard Tailwind class. 
     * I've replaced it with 'py-4' (padding-top/bottom) 
     * to match the height in your screenshot.
     */
    <div className="relative w-full bg-transparent flex flex-col justify-center overflow-hidden py-10">
      <AngledMarquee 
        angle={3} 
        speed="fast"
        pauseOnHover
      >
        <p className="flex items-center justify-center gap-10 text-2xl whitespace-nowrap py-5">
          {/* THIS IS THE FIX:
            We repeat the content several times to make the 
            <p> tag extremely wide. This guarantees the 
            infinite scroll illusion never breaks.
          */}
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </p>
      </AngledMarquee>
    </div>
  );
}