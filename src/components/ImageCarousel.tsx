import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCallback } from 'react';

// The main Carousel Component
export const ImageCarousel = ({ imageUrls }: { imageUrls: string[] }) => {
  // 1. Embla options to center the active slide and loop
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (imageUrls.length === 0) {
    return <div className="text-center p-4">No images to display.</div>;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto group p-3">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4"> {/* Use negative margin to offset padding on the first slide */}
          {imageUrls.map((url, index) => (
            // 2. Adjust slide width for partial view (e.g., 40% on desktop)
            <div className="flex-shrink-0 flex-grow-0 basis-full md:basis-[40%] pl-4" key={index}>
              {/* Image Wrapper for styling and aspect ratio */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden">
                <img 
                  src={url} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Optional: Dark overlay for better contrast if you have text on top */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 3. Left and Right Gradient Overlays for a seamless look */}
      {/* <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" /> */}
      
      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        className="absolute bottom-0 right-16 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-20 backdrop-blur-sm transition-all duration-200"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute bottom-0 right-4 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-20 backdrop-blur-sm transition-all duration-200"
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
};