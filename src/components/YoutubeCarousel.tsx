import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCallback, useState } from 'react';

// Helper function to extract the YouTube video ID from various URL formats
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// A simple component to render the YouTube iframe
const YouTubeVideo = ({ videoId, coverImage }: { videoId: string, coverImage?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black group cursor-pointer" onClick={() => setIsPlaying(true)}>
      
      {!isPlaying ? (
        /* 1. Custom Cover with your own Play Button */
        <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${coverImage || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`})` }}>
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
          
          {/* Your Custom Minimalist Play Button */}
          <div className="z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
             <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
               <path d="M8 5v14l11-7z" />
             </svg>
          </div>
        </div>
      ) : (
        /* 2. Actual Video Loads Here (Auto-plays on load) */
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

// The main Carousel Component
export const YouTubeCarousel = ({ videoLinks }: { videoLinks: string[] }) => {
  // 1. Update Embla options to center the active slide
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

  const validVideos = videoLinks
    .map(link => ({ link, videoId: getYouTubeVideoId(link) }))
    .filter(item => item.videoId !== null);

  if (validVideos.length === 0) {
    return <div className="text-center p-4">No valid YouTube videos to display.</div>;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4"> {/* Use negative margin to offset padding on the first slide */}
          {validVideos.map(({ link, videoId }) => (
            // 2. Adjust slide width for partial view
            <div className="flex-shrink-0 flex-grow-0 basis-full md:basis-[40%] pl-4" key={link}>
              <div className="rounded-lg overflow-hidden transition-transform duration-300 ease-in-out">
                 <YouTubeVideo videoId={videoId!} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 3. Add Left and Right Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      
      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-0 cursor-pointer -translate-y-1/2 text-white rounded-full p-2 z-20"
      >
        <ArrowLeft className="h-8 w-8" />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-0 cursor-pointer -translate-y-1/2 text-white rounded-full p-2 z-20"
      >
        <ArrowRight className="h-8 w-8" />
      </button>
    </div>
  );
};